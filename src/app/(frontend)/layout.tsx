// src/app/(site)/layout.tsx
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import AIChatWidget from "@/components/Chat/AIChatWidget";


export const metadata = {
  title: "BizAI Hacks | Enterprise AI Solutions",
  description:
    "BizAI Hacks helps businesses scale with AI automation — from chatbots and voice agents to intelligent data analytics.",
  alternates: {
    canonical: "https://bizaihacks.com/",
  },
  openGraph: {
    title: "BizAI Hacks | AI Automation for Enterprises",
    description:
      "Revolutionize your business operations with AI-driven automation and analytics from BizAI Hacks.",
    url: "https://bizaihacks.com/",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizAI Hacks | Enterprise AI Automation",
    description: "Power your business growth with next-gen AI solutions.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
  icons: {
    icon: "https://bizaihacks.com/logo.jpg", // or .png, .svg etc.
    shortcut: "https://bizaihacks.com/logo.jpg",
    apple: "https://bizaihacks.com/logo.jpg", // optional for iOS
  },
};


export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main className="bg-white min-h-[calc(100vh_-_var(--header-height)_-_var(--footer-height))]">
                {children}
            </main>
            <AIChatWidget /> 
            <Footer />
        </>
    );
}