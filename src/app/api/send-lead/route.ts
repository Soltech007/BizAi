import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch("http://45.149.206.178/api/resource/Lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token 16e7e2c516604d2:90c5895e50ffce9",
      },
      body: JSON.stringify({
        first_name: body.firstName,
        last_name: body.lastName,
        lead_name: `${body.firstName} ${body.lastName}`,
        email_id: body.email,
        phone: body.phone,
        mobile_no: body.mobile,
        whatsapp_no: body.whatsapp,
        phone_ext: body.phoneExt,
        website: body.website,
        company_name: body.company,
        no_of_employees: body.noOfEmployees,
        annual_revenue: body.annualRevenue || 0.0,
        industry: body.industry,
        market_segment: body.marketSegment,
        territory: body.territory,
        notes: body.message,
        lead_owner: "malaypatel0724@gmail.com",
        status: "Lead",
        company: "SOLTECH TechServices Private Limited",
      }),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("ERPNext API Error:", error);
    return NextResponse.json({ error: "Failed to submit lead" }, { status: 500 });
  }
}
