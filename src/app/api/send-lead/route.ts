import { NextRequest, NextResponse } from "next/server";

const ERP_CONFIG = {
  url: "https://erp.soltechtechservices.com",
  apiKey: "3fb549247cf6da2",
  apiSecret: "66bb0b54b3d437c",
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
    // Ignore
  }
}

// ✅ Check if Lead already exists
async function checkLeadExists(email: string): Promise<string | null> {
  try {
    const response = await fetch(
      `${ERP_CONFIG.url}/api/resource/Lead?filters=[["email_id","=","${encodeURIComponent(email)}"]]&fields=["name","creation"]&limit_page_length=1&order_by=creation desc`,
      {
        method: "GET",
        headers: {
          Authorization: `token ${ERP_CONFIG.apiKey}:${ERP_CONFIG.apiSecret}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      if (data.data && data.data.length > 0) {
        console.log(`✅ Existing Lead found: ${data.data[0].name}`);
        return data.data[0].name;
      }
    }
    return null;
  } catch (error) {
    console.error("Error checking lead existence:", error);
    return null;
  }
}

// ✅ Direct SQL Insert (Bypass hooks - Last resort)
async function createLeadDirectSQL(payload: any): Promise<any> {
  try {
    console.log("🔧 Trying direct database insert (bypassing hooks)...");

    // Generate unique Lead ID with timestamp
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
    const leadId = `LEAD-WEB-${timestamp}-${randomStr}`;

    // Create doc via frappe.client.insert (this might still trigger hooks)
    // Alternative: Use SQL directly
    const sqlQuery = `
      INSERT INTO \`tabLead\` (
        name, lead_name, first_name, last_name, email_id, , phone, whatsapp_no,
        company_name, website, industry, no_of_employees, city, state,
        source, status, lead_owner, docstatus, creation, modified, modified_by, owner
      ) VALUES (
        '${leadId}',
        '${payload.lead_name.replace(/'/g, "''")}',
        '${payload.first_name.replace(/'/g, "''")}',
        '${(payload.last_name || "").replace(/'/g, "''")}',
        '${payload.email_id.replace(/'/g, "''")}',
        
        '${payload.phone || ""}',
        '${payload.whatsapp_no || ""}',
        '${(payload.company_name || "").replace(/'/g, "''")}',
        '${(payload.website || "").replace(/'/g, "''")}',
        '${(payload.industry || "").replace(/'/g, "''")}',
        '${payload.no_of_employees || ""}',
        '${(payload.city || "").replace(/'/g, "''")}',
        '${(payload.state || "").replace(/'/g, "''")}',
        'Website',
        'Lead',
        '${payload.lead_owner}',
        0,
        NOW(),
        NOW(),
        'Administrator',
        'Administrator'
      )
    `;

    console.log("📤 SQL Query:", sqlQuery);

    const response = await fetch(
      `${ERP_CONFIG.url}/api/method/frappe.client.sql`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${ERP_CONFIG.apiKey}:${ERP_CONFIG.apiSecret}`,
        },
        body: JSON.stringify({
          query: sqlQuery,
        }),
      }
    );

    const data = await response.json();
    console.log("📥 SQL Response:", JSON.stringify(data, null, 2));

    if (response.ok) {
      console.log(`✅ Lead created via SQL: ${leadId}`);
      return { success: true, data: { data: { name: leadId } } };
    }

    return { success: false, error: "SQL insert failed", data: data };
  } catch (error: any) {
    console.error("❌ SQL insert exception:", error);
    return { success: false, error: error.message };
  }
}

// ✅ Create Lead with Retry + SQL Fallback
async function createLeadWithRetry(
  payload: any,
  maxRetries: number = 2
): Promise<any> {
  let lastError = null;

  // ✅ STEP 1: Try normal API creation (with retries)
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    console.log(`📤 Attempt ${attempt}/${maxRetries} - Creating Lead via API...`);

    try {
      const response = await fetch(`${ERP_CONFIG.url}/api/resource/Lead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${ERP_CONFIG.apiKey}:${ERP_CONFIG.apiSecret}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      console.log(
        `📥 Attempt ${attempt} - ERP Response:`,
        JSON.stringify(data, null, 2)
      );

      // ✅ SUCCESS
      if (response.ok && data.data && data.data.name) {
        console.log(`✅ Lead created on attempt ${attempt}:`, data.data.name);
        return { success: true, data: data };
      }

      // ✅ Check if it's WhatsApp error
      const errorMsg = parseErrorMessage(data);
      const isWhatsAppError =
        errorMsg.includes("statusCode") ||
        errorMsg.includes("KeyError") ||
        errorMsg.includes("WhatsApp") ||
        errorMsg.includes("mrcctv") ||
        errorMsg.includes("contact_on_update");

      if (isWhatsAppError) {
        console.log(
          `⚠️ Attempt ${attempt} - WhatsApp error detected...`
        );
        lastError = errorMsg;

        // Wait before retry
        if (attempt < maxRetries) {
          const waitTime = 1000 * attempt;
          console.log(`⏳ Waiting ${waitTime}ms before retry...`);
          await new Promise((resolve) => setTimeout(resolve, waitTime));
        }
        continue;
      }

      // ❌ Duplicate error
      if (response.status === 409 || errorMsg.includes("Duplicate")) {
        console.log("⚠️ Duplicate lead detected");
        const existingLead = await checkLeadExists(payload.email_id);
        if (existingLead) {
          return { success: true, data: { data: { name: existingLead } } };
        }
      }

      // ❌ Other error - don't retry
      console.log(`❌ Non-WhatsApp error, stopping retries:`, errorMsg);
      return { success: false, error: errorMsg, data: data };
    } catch (err: any) {
      lastError = err.message;
      console.log(`⚠️ Attempt ${attempt} - Network error:`, err.message);
      if (attempt < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
      }
    }
  }

  // ✅ STEP 2: All API retries failed - Check if Lead exists anyway
  console.log("🔍 API retries failed, checking if Lead exists in database...");
  const existingLead = await checkLeadExists(payload.email_id);

  if (existingLead) {
    console.log(`✅ Lead found in database:`, existingLead);
    return { success: true, data: { data: { name: existingLead } } };
  }

  // ✅ STEP 3: Try SQL Insert (Last resort - bypasses hooks)
  console.log("🔧 Lead not found, trying direct SQL insert as last resort...");
  const sqlResult = await createLeadDirectSQL(payload);

  if (sqlResult.success) {
    return sqlResult;
  }

  // ✅ STEP 4: Final check - maybe SQL worked but response was bad
  console.log("🔍 Final database check after SQL attempt...");
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 sec for DB sync
  const finalCheck = await checkLeadExists(payload.email_id);

  if (finalCheck) {
    console.log(`✅ Lead found in final check:`, finalCheck);
    return { success: true, data: { data: { name: finalCheck } } };
  }

  // ❌ Everything failed
  console.log("❌ All methods failed");
  return { success: false, error: lastError || "Failed after all attempts" };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("📥 Incoming Form Data:", JSON.stringify(body, null, 2));

    // Basic validation
    if (!body.firstName || !body.email) {
      return NextResponse.json(
        { error: "Name/Email required" },
        { status: 400 }
      );
    }

    // ✅ Check if Lead already exists (avoid duplicates)
    console.log("🔍 Checking if Lead already exists...");
    const existingLead = await checkLeadExists(body.email);
    if (existingLead) {
      console.log("⚠️ Lead already exists:", existingLead);
      return NextResponse.json(
        {
          success: true,
          message: "Application already submitted!",
          leadId: existingLead,
        },
        { status: 200 }
      );
    }

    const pageSource = body.source || "Website";
    await ensureLeadSourceExists(pageSource);

    const detailedInfo = [
      body.phone ? `Phone: ${body.phone}` : null,
      body.whatsappNo ? `WhatsApp No: ${body.whatsappNo}` : null,
      body.website ? `Website: ${body.website}` : null,
      body.noOfEmployees ? `Employees: ${body.noOfEmployees}` : null,
      body.message ? `Message: ${body.message}` : null,
      body.city ? `City: ${body.city}` : null,
      body.state ? `State: ${body.state}` : null,
    ]
      .filter(Boolean)
      .join(" | ");

    const payload: Record<string, any> = {
      // 1. Name
      first_name: body.firstName,
      last_name: body.lastName || "",
      lead_name: `${body.firstName} ${body.lastName || ""}`.trim(),

      // 2. Contact Fields
      email_id: body.email,
      
      phone: body.whatsappNo || body.phone || "",
      whatsapp_no: body.whatsappNo || body.phone || "",

      // 3. Website
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

      // 7. Custom Fields
      custom_lead_interest: "BIAIZHACKS",
      custom_redirect_form: pageSource,
      lead_source_details: detailedInfo,

      // 8. Owner
      lead_owner: "lead@Bizaihacks.com",
    };

    // ✅ Remove empty keys BUT KEEP MANDATORY ONES
    Object.keys(payload).forEach((key) => {
      if (!payload[key]) {
        const mandatoryFields = [
          "source",
          "status",
          "lead_owner",
          "custom_lead_interest",
        ];
        if (!mandatoryFields.includes(key)) {
          delete payload[key];
        }
      }
    });

    console.log("📤 Final Payload to ERP:", JSON.stringify(payload, null, 2));

    // ✅ Create Lead with Retry + SQL Fallback
    const result = await createLeadWithRetry(payload, 2);

    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          message: "Lead created successfully!",
          leadId: result.data?.data?.name,
        },
        { status: 200 }
      );
    } else {
      // ✅ One more final check
      console.log(
        "🔍 Final verification - checking database one last time..."
      );
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait 3 sec
      const finalCheck = await checkLeadExists(body.email);

      if (finalCheck) {
        console.log("✅ Lead found in final verification:", finalCheck);
        return NextResponse.json(
          {
            success: true,
            message: "Application submitted successfully!",
            leadId: finalCheck,
          },
          { status: 200 }
        );
      }

      console.error("❌ Final Error:", result.error);
      return NextResponse.json(
        {
          error:
            result.error ||
            "Failed to create lead. Please contact support or try again later.",
        },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error("❌ Server Error:", error);
    return NextResponse.json(
      { error: "Server Error", message: error.message },
      { status: 500 }
    );
  }
}