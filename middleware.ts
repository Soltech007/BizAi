import { type NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  // Debug Log: Agar ye print nahi hua terminal me, to file galat jagah hai
  console.log("🔒 Middleware Check:", request.nextUrl.pathname);

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
          });
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // User check karo
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("👤 User Status:", user ? "Found" : "Not Found");

  const url = request.nextUrl.clone();

  // 1. Protected Admin Routes
  if (request.nextUrl.pathname.startsWith("/admin") && request.nextUrl.pathname !== "/admin/login") {
    if (!user) {
      console.log("⛔ Access Denied. Redirecting to Login.");
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  // 2. Redirect Logged-in user from Login to Dashboard
  if (request.nextUrl.pathname === "/admin/login" && user) {
    console.log("✅ Already Logged In. Redirecting to Dashboard.");
    url.pathname = "/admin/dashboard";
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  // Matcher ko simple rakho test karne ke liye
  matcher: [
    "/admin/:path*",
  ],
};