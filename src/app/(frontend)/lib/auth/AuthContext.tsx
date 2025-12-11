"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { createBrowserClient } from "@supabase/ssr";

// Context type define kiya taaki errors na aaye
type AuthContextType = {
  session: any;
  loading: boolean; // 👈 Ye naya hai
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true); // 👈 Default true rakho

  useEffect(() => {
    // Session check karo
    const checkSession = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        setSession(data.session);
      } catch (error) {
        console.error("Auth error:", error);
      } finally {
        setLoading(false); // 👈 Check khatam hone par loading band
      }
    };

    checkSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setLoading(false);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({ email, password });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/admin/login";
  };

  return (
    <AuthContext.Provider value={{ session, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};