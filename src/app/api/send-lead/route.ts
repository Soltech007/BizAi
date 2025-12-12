import { NextRequest, NextResponse } from "next/server";

const ERP_CONFIG = {
  url: "https://erp.soltechtechservices.com", // No trailing slash
  apiKey: "8c21c94e1a2879b",
  apiSecret: "3caa5d67879d169",
} as const;

function stripHtml(html: string): string {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
}

function parseErrorMessage(data: any): string {
  let errorMessage = "Failed to create lead";
  if (data._server_messages) {
    try {
      const messages = JSON.parse(data._server_messages);
      const parsed = JSON.parse(messages[0]);
      errorMessage = stripHtml(parsed.message || errorMessage);
    } catch (e) {
      console.error(e);
    }
  } else if (data.exception) {
    errorMessage = stripHtml(data.exception);
  } else if (data.message) {
    errorMessage = stripHtml(data.message);
  }
  return errorMessage;
}

async function ensureLeadSourceExists(sourceName: string) {
  if (!sourceName) return;
  try {
    await fetch(`${ERP_CONFIG.url}/api/resource/Lead Source`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${ERP_CONFIG.apiKey}:${ERP_CONFIG.apiSecret}`,
      },
      body: JSON.stringify({ source_name: sourceName }),
    });
  } catch (error) {
    console.log("Source check skipped");
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("📥 Incoming Form Data:", JSON.stringify(body, null, 2));

    if (!body.firstName || !body.email) {
      return NextResponse.json(
        { error: "Name/Email required" },
        { status: 400 }
      );
    }

    const pageSource = body.source || "Website";
    await ensureLeadSourceExists(pageSource);

    // ✅ NOTE: Hum WhatsApp ko 'phone' field me bhejenge aur Note me bhi likhenge
    const detailedInfo = [
      body.whatsappNo ? `WhatsApp No: ${body.whatsappNo}` : null,
      body.website ? `Website: ${body.website}` : null,
      body.noOfEmployees ? `Employees: ${body.noOfEmployees}` : null,
      body.message ? `Message: ${body.message}` : null,
      body.city ? `City: ${body.city}` : null,
      body.state ? `State: ${body.state}` : null,
    ].filter(Boolean).join(" | ");

    // ✅ FIXED PAYLOAD (ERP Fields mapping)
    const payload: Record<string, any> = {
      // 1. Name
      first_name: body.firstName,
      last_name: body.lastName || "",
      lead_name: `${body.firstName} ${body.lastName || ""}`.trim(),

      // 2. Contact Fields
      email_id: body.email,
      
      // 'mobile_no' me user ka Phone Number
      mobile_no: body.phone || "",
      
      // 'phone' me WhatsApp Number (Jugaad to avoid error)
      phone: body.whatsappNo || "", 

      whatsapp_no: body.whatsappNo || "", 

      // ❌ 'whatsapp_no' field hum bheje hi nahi rahe (Error avoid karne ke liye)

      // 3. Website (Exact key name matching ERP)
      website: body.website || "",

      // 4. Organization
      company_name: body.company || "",
      industry: body.industry || "",
      no_of_employees: body.noOfEmployees || "",

      // 5. Location
      city: body.city || "",
      state: body.state || "",

      // 6. Source & Status
      source: "Website",
      status: "Lead",
      custom_lead_interest: "AIBIZHACKS",
      custom_redirect_form: pageSource,

      // 7. Notes (Backup: Sab kuch yahan bhi dikhega)
      lead_source_details: detailedInfo,

      // 8. Owner
      lead_owner: "lead@Bizaihacks.com",
    };

    // Remove empty keys to keep payload clean
    Object.keys(payload).forEach((key) => {
      if (!payload[key]) delete payload[key];
    });

    // console.log("📤 Final Payload to ERP:", JSON.stringify(payload, null, 2));

    const response = await fetch(`${ERP_CONFIG.url}/api/resource/Lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${ERP_CONFIG.apiKey}:${ERP_CONFIG.apiSecret}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    // console.log("📥 ERP Response:", data);

    if (!response.ok) {
      const errorMsg = parseErrorMessage(data);
      // console.error("❌ ERP Error:", errorMsg);
      return NextResponse.json(
        { error: errorMsg, details: data },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { success: true, message: "Lead created successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    // console.error("❌ Server Error:", error);
    return NextResponse.json(
      { error: "Server Error", message: error.message },
      { status: 500 }
    );
  }
}