import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, tag } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const username = process.env.MAUTIC_USERNAME!;
    const password = process.env.MAUTIC_PASSWORD!;
    const baseUrl = process.env.MAUTIC_BASE_URL!;

    const authHeader =
      "Basic " + Buffer.from(`${username}:${password}`).toString("base64");

    const response = await fetch(`${baseUrl}/api/contacts/new`, {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.trim(),
        tags: tag ? [tag] : [],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("🚨 Mautic Error:", data);
      return NextResponse.json(
        { error: "Failed to save contact in Mautic" },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: "Subscribed successfully 🎉" },
      { status: 200 }
    );
  } catch (error) {
    console.error("🔥 Mautic Subscribe Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
