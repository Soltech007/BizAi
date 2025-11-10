import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.BREVO_API_KEY!;
const LIST_ID = Number(process.env.BREVO_LIST_ID);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!API_KEY || !LIST_ID) {
      console.error("❌ Missing Brevo credentials");
      return NextResponse.json(
        { error: "Missing Brevo API key or list ID" },
        { status: 401 }
      );
    }

    const payload = {
      email,
      listIds: [LIST_ID],
      updateEnabled: true,
    };

    console.log("📩 Sending to Brevo:", payload);

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": API_KEY,
      },
      body: JSON.stringify(payload),
    });

    // 🛠 Handle empty response body safely
    let data: any = {};
    try {
      data = await response.json();
    } catch {
      data = { message: "No JSON response received" };
    }

    console.log("✅ Brevo Response Status:", response.status);
    console.log("✅ Brevo Response Body:", data);

    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || "Failed to subscribe" },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: data.message || "Subscribed successfully ✅",
      data,
    });
  } catch (error) {
    console.error("🔥 Newsletter Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Try again later." },
      { status: 500 }
    );
  }
}
