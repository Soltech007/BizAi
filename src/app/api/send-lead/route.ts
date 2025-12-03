import { NextRequest, NextResponse } from "next/server";

const ERP_CONFIG = {
  url: "https://erp.soltechtechservices.com/",
  apiKey: "8c21c94e1a2879b",
  apiSecret: "3caa5d67879d169",
} as const;

function stripHtml(html: string): string {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, '').trim();
}

function parseErrorMessage(data: any): string {
  let errorMessage = "Failed to create lead";
  if (data._server_messages) {
    try {
      const messages = JSON.parse(data._server_messages);
      const parsed = JSON.parse(messages[0]);
      errorMessage = stripHtml(parsed.message || errorMessage);
    } catch (e) { console.error(e); }
  } else if (data.exception) {
    errorMessage = stripHtml(data.exception);
  } else if (data.message) {
    errorMessage = stripHtml(data.message);
  }
  return errorMessage;
}

// ✅ Source create karne ka function (Taaki error na aaye)
async function ensureLeadSourceExists(sourceName: string) {
  if (!sourceName) return;
  try {
    await fetch(`${ERP_CONFIG.url}/api/resource/Lead Source`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `token ${ERP_CONFIG.apiKey}:${ERP_CONFIG.apiSecret}`,
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

    if (!body.firstName || !body.email) {
      return NextResponse.json({ error: "Name/Email required" }, { status: 400 });
    }

    // 1. Source (Page Name e.g. "Solution: Healthcare")
    const pageSource = body.source || "Website";

    // Check/Create Source
    await ensureLeadSourceExists(pageSource);

    // 2. Prepare Payload
const payload = {
  first_name: body.firstName,
  last_name: body.lastName || "",
  lead_name: `${body.firstName} ${body.lastName || ""}`.trim(),
  email_id: body.email,
  company_name: body.company || "",
  source: "Website",
  custom_lead_interest: "AIBIZHACKS",
  industry: body.industry,
  custom_redirect_form: pageSource,
  lead_source_details: `
    Message: ${body.message || 'N/A'}
    Employees: ${body.noOfEmployees || 'N/A'}
    Website: ${body.website || 'N/A'}
    Location: ${body.city || ''}, ${body.state || ''}
  `.trim(),

  status: "Lead",
  mobile_no: body.phone,
  city: body.city,
  state: body.state,

  // ✅ Add this line
  lead_owner: "lead@Bizaihacks.com",
};

    console.log("📤 Sending to ERP:", JSON.stringify(payload, null, 2));

    const response = await fetch(`${ERP_CONFIG.url}/api/resource/Lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `token ${ERP_CONFIG.apiKey}:${ERP_CONFIG.apiSecret}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMsg = parseErrorMessage(data);
      console.error("❌ ERP Error:", errorMsg);
      return NextResponse.json({ error: errorMsg, details: data }, { status: response.status });
    }

    return NextResponse.json({ success: true, message: "Lead created successfully" }, { status: 200 });

  } catch (error: any) {
    console.error("❌ Server Error:", error);
    return NextResponse.json({ error: "Server Error", message: error.message }, { status: 500 });
  }
}