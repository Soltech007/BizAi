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

    // Mautic weird responses handle
    const text = await response.text();
    let data: any = {};

    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    /**
     * SUCCESS CONDITIONS (Mautic behaves differently)
     * - 200 updated
     * - 201 created
     * - duplicate contact
     * - tag already exists
     */
    const success =
      response.status === 200 ||
      response.status === 201 ||
      data?.contact?.id ||
      text.includes("Contact already exists") ||
      text.includes("Duplicate entry") ||
      text.includes("same email");

    if (success) {
      return NextResponse.json(
        { message: "Subscribed successfully 🎉" },
        { status: 200 }
      );
    }

    // REAL error
    console.error("🚨 Mautic Real Error:", data);

    return NextResponse.json(
      { error: "Failed to save contact in Mautic" },
      { status: 500 }
    );
  } catch (error) {
    console.error("🔥 Mautic Subscribe Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
