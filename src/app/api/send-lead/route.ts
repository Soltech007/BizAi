// app/api/send-lead/route.ts
import { NextRequest, NextResponse } from "next/server";

const ERP_CONFIG = {
  url: "http://45.149.206.178",
  apiKey: "16e7e2c516604d2",
  apiSecret: "bb03eb43160bccb",
} as const;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

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
      
      // ✅ Use valid values (check your ERPNext)
      source: "Walk In", // or "Advertisement", "Campaign", etc.
      territory: "All Territories", // or "India", check your setup
      
      // Optional fields
      ...(body.phone && { phone: body.phone, mobile_no: body.phone }),
      ...(body.website && { website: body.website }),
      ...(body.noOfEmployees && { no_of_employees: body.noOfEmployees }),
      ...(body.industry && { industry: body.industry }),
    };

    // console.log("📤 Sending to ERP:", payload);

    const response = await fetch(`${ERP_CONFIG.url}/api/resource/Lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `token ${ERP_CONFIG.apiKey}:${ERP_CONFIG.apiSecret}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    // console.log("📥 Status:", response.status);
    // console.log("📥 Response:", JSON.stringify(data, null, 2));

    if (!response.ok) {
      let errorMessage = "Failed to create lead";
      
      if (data._server_messages) {
        try {
          const messages = JSON.parse(data._server_messages);
          const parsed = JSON.parse(messages[0]);
          errorMessage = parsed.message || errorMessage;
        } catch (e) {
          // console.error("Error parsing:", e);
        }
      } else if (data.exception) {
        errorMessage = data.exception;
      } else if (data.message) {
        errorMessage = data.message;
      }

      // console.error("❌ ERP Error:", errorMessage);

      return NextResponse.json(
        { error: errorMessage, details: data },
        { status: response.status }
      );
    }

    console.log("✅ Lead created successfully!");
    return NextResponse.json(
      { success: true, message: "Lead created successfully", data },
      { status: 200 }
    );

  } catch (error: any) {
    // console.error("❌ Server Error:", error);
    return NextResponse.json(
      { error: "Internal server error", message: error.message },
      { status: 500 }
    );
  }
}