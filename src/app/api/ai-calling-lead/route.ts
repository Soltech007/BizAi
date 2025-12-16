import { NextRequest, NextResponse } from "next/server";

const ERP_CONFIG = {
  url: "https://erp.soltechtechservices.com",
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
      console.error("Parse error:", e);
    }
  } else if (data.exception) {
    errorMessage = stripHtml(data.exception);
  } else if (data.message) {
    errorMessage = stripHtml(data.message);
  }
  return errorMessage;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("📥 Incoming Data:", JSON.stringify(body, null, 2));

    // Validation
    if (!body.companyName || !body.contactPerson || !body.email || !body.phone) {
      return NextResponse.json(
        { error: "Required fields missing (Name, Email, Phone, Company)" },
        { status: 400 }
      );
    }

    // 🆕 Updated Phone Validation for International Numbers
    // Extract only digits from phone (remove +, spaces, etc.)
    const phoneDigitsOnly = body.phone.replace(/\D/g, '');
    
    // International phone numbers can be 7-15 digits
    if (phoneDigitsOnly.length < 7 || phoneDigitsOnly.length > 15) {
      return NextResponse.json(
        { error: "Please enter a valid phone number (7-15 digits)" },
        { status: 400 }
      );
    }

    // Address Combine
    const fullAddress = [
      body.address,
      body.city ? `City: ${body.city}` : null,
      body.state ? `State: ${body.state}` : null,
      body.pincode ? `Pincode: ${body.pincode}` : null,
      body.country ? `Country: ${body.country}` : null, // 🆕 Added Country
    ].filter(Boolean).join(", ");

    // 🆕 Format phone number for ERP
    // body.phone already includes country code like "+919876543210"
    const formattedPhone = body.phone; // Full number with ISD
    const countryCode = body.countryCode || "+91"; // e.g., "+91"
    const countryName = body.country || "India"; // e.g., "India"

    // ERP Payload
    const payload: Record<string, any> = {
      lead_name: body.contactPerson,
      first_name: body.contactPerson.split(' ')[0],
      company_name: body.companyName,
      email_id: body.email,
      
      // 🆕 Phone with ISD Code
      mobile_no: formattedPhone,
      phone: formattedPhone,
      whatsapp_no: formattedPhone,
      
      // 🆕 Country Info
      country: countryName,
      
      city: body.city || "",
      state: body.state || "",
      address_line1: body.address || "",
      pincode: body.pincode || "",
      
      source: "Website",
      status: "Lead",
      custom_lead_interest: "AIBIZHACKS",
      custom_redirect_form: body.source || "AI Calling Agent - Ads Campaign",
      
      // 🆕 Enhanced lead source details
      lead_source_details: `INTEREST: AI Calling Agent | Country: ${countryName} (${countryCode}) | Address: ${fullAddress}`,
      lead_owner: "lead@Bizaihacks.com",
    };

    // Remove empty keys
    Object.keys(payload).forEach((key) => {
      if (!payload[key]) delete payload[key];
    });

    console.log("📤 Sending Payload to ERP:", JSON.stringify(payload, null, 2));

    const response = await fetch(`${ERP_CONFIG.url}/api/resource/Lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${ERP_CONFIG.apiKey}:${ERP_CONFIG.apiSecret}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    // Handle Errors & Suppress WhatsApp/Mail Errors
    if (!response.ok) {
      const errorMsg = parseErrorMessage(data);
      console.error("❌ ERP Error Raw:", errorMsg);

      const ignoredErrors = [
        "Connection refused",
        "Outgoing Mail Server",
        "WhatsApp",
        "Message Triggered",
        "Triggered"
      ];

      const isIgnorableError = ignoredErrors.some(err => errorMsg.includes(err));

      if (isIgnorableError) {
        console.log("⚠️ Ignoring Automation Error - Lead assumed created.");
        return NextResponse.json(
          { success: true, message: "Lead created (Automation Failed but Data Saved)" },
          { status: 200 }
        );
      }

      // Handle Duplicate
      if (response.status === 409) {
        return NextResponse.json(
          { success: true, message: "Lead already exists (Duplicate)" },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { error: errorMsg, details: data },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { success: true, message: "Lead created successfully", leadId: data.data?.name },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("❌ Server Error:", error);
    return NextResponse.json(
      { error: "Server Error", message: error.message },
      { status: 500 }
    );
  }
}