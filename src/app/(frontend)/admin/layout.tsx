"use client";

import React, { useEffect } from "react";
import { AuthProvider, useAuth } from "@/app/(frontend)/lib/auth/AuthContext";
import Sidebar from "@/components/Admin/Sidebar";
import { usePathname, useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

// 👇 Ek naya component banaya jo protection handle karega
// Kyunki hum useAuth() sirf AuthProvider ke andar hi use kar sakte hain
function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { session, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    // Agar loading khatam ho gayi aur session nahi hai -> Redirect to Login
    if (!loading && !session && !isLoginPage) {
      router.replace("/admin/login");
    }
    
    // Agar logged in hai aur login page par hai -> Redirect to Dashboard
    if (!loading && session && isLoginPage) {
      router.replace("/admin/dashboard");
    }
  }, [session, loading, isLoginPage, router]);

  // 1. Jab tak Supabase check kar raha hai, Loading dikhao
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
      </div>
    );
  }

  // 2. Agar session nahi hai (aur hum login page par nahi hain), to content mat dikhao
  if (!session && !isLoginPage) {
    return null; // Redirect ho raha hai useEffect me
  }

  // 3. Main Layout Render karo
  return (
    <div className="flex min-h-screen bg-gray-50">
      {!isLoginPage && session && (
        <div className="hidden lg:block w-64 shrink-0">
          <Sidebar />
        </div>
      )}
      
      <main className={`flex-1 min-h-screen overflow-y-auto p-4 lg:p-8 ${!isLoginPage ? 'lg:ml-0' : 'w-full'}`}>
        {children}
      </main>
    </div>
  );
}

// Main Export
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      {/* ProtectedLayout ko Provider ke andar wrap kiya */}
      <ProtectedLayout>
        {children}
      </ProtectedLayout>
    </AuthProvider>
  );
}