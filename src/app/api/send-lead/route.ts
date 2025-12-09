<<<<<<< HEAD
// app/api/send-lead/route.ts
import { NextRequest, NextResponse } from "next/server";

const ERP_CONFIG = {
  url: "http://45.149.206.178",
  apiKey: "16e7e2c516604d2",
  apiSecret: "bb03eb43160bccb",
} as const;

// ✅ HTML tags remove karne ka function
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

// ✅ Error message clean karne ka function
function parseErrorMessage(data: any): string {
  let errorMessage = "Failed to create lead";
  
=======
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
>>>>>>> 49348d4ed6f203e50201fa07449bba9a7f7d4c14
  if (data._server_messages) {
    try {
      const messages = JSON.parse(data._server_messages);
      const parsed = JSON.parse(messages[0]);
<<<<<<< HEAD
      let rawMessage = parsed.message || errorMessage;
      
      // HTML tags remove karo
      rawMessage = stripHtml(rawMessage);
      
      // ✅ Specific error messages handle karo
      if (rawMessage.toLowerCase().includes("email") && rawMessage.toLowerCase().includes("unique")) {
        errorMessage = "This email is already registered. Please use a different email address.";
      } else if (rawMessage.toLowerCase().includes("duplicate")) {
        errorMessage = "This record already exists in our system.";
      } else if (rawMessage.toLowerCase().includes("mandatory") || rawMessage.toLowerCase().includes("required")) {
        errorMessage = "Please fill all required fields.";
      } else {
        errorMessage = rawMessage;
      }
    } catch (e) {
      console.error("Error parsing server message:", e);
    }
  } else if (data.exception) {
    errorMessage = stripHtml(data.exception);
    
    // Duplicate email check
    if (errorMessage.toLowerCase().includes("email") && errorMessage.toLowerCase().includes("unique")) {
      errorMessage = "This email is already registered. Please use a different email address.";
    }
  } else if (data.message) {
    errorMessage = stripHtml(data.message);
  }
  
  return errorMessage;
}

=======
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

>>>>>>> 49348d4ed6f203e50201fa07449bba9a7f7d4c14
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

<<<<<<< HEAD
    console.log("📥 Received from frontend:", body);

    if (!body.firstName || !body.email) {
      return NextResponse.json(
        { error: "First name and email are required" },
        { status: 400 }
      );
    }

    const payload = {
      first_name: body.firstName,
      last_name: body.lastName || "",
      lead_name: `${body.firstName} ${body.lastName || ""}`.trim(),
      email_id: body.email,
      company_name: body.company || "",
      
      source: "Walk In",
      territory: "All Territories",
      
      // Optional fields
      ...(body.phone && { phone: body.phone, mobile_no: body.phone }),
      ...(body.website && { website: body.website }),
      ...(body.noOfEmployees && { no_of_employees: body.noOfEmployees }),
      ...(body.industry && { industry: body.industry }),
      
      // ✅ City aur State
      ...(body.city && { city: body.city }),
      ...(body.state && { state: body.state }),
    };

    console.log("📤 Sending to ERP:", payload);
=======
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
>>>>>>> 49348d4ed6f203e50201fa07449bba9a7f7d4c14

    const response = await fetch(`${ERP_CONFIG.url}/api/resource/Lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `token ${ERP_CONFIG.apiKey}:${ERP_CONFIG.apiSecret}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

<<<<<<< HEAD
    console.log("📥 ERP Status:", response.status);
    console.log("📥 ERP Response:", JSON.stringify(data, null, 2));

    if (!response.ok) {
      // ✅ Clean error message
      const errorMessage = parseErrorMessage(data);
      console.error("❌ ERP Error:", errorMessage);

      // ✅ Error type bhi bhejo for frontend handling
      const isDuplicateEmail = errorMessage.toLowerCase().includes("email") || 
                               errorMessage.toLowerCase().includes("already registered");

      return NextResponse.json(
        { 
          error: errorMessage, 
          errorType: isDuplicateEmail ? "DUPLICATE_EMAIL" : "GENERAL_ERROR",
          details: data 
        },
        { status: response.status }
      );
    }

    console.log("✅ Lead created successfully!");
    return NextResponse.json(
      { success: true, message: "Lead created successfully", data },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("❌ Server Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later.", message: error.message },
      { status: 500 }
    );
=======
    if (!response.ok) {
      const errorMsg = parseErrorMessage(data);
      console.error("❌ ERP Error:", errorMsg);
      return NextResponse.json({ error: errorMsg, details: data }, { status: response.status });
    }

    return NextResponse.json({ success: true, message: "Lead created successfully" }, { status: 200 });

  } catch (error: any) {
    console.error("❌ Server Error:", error);
    return NextResponse.json({ error: "Server Error", message: error.message }, { status: 500 });
>>>>>>> 49348d4ed6f203e50201fa07449bba9a7f7d4c14
  }
}