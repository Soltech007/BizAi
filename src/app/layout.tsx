import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import "./globals.css";



export const metadata: Metadata = {
  metadataBase: new URL("https://bizaihacks.com"),
  title: {
    default: "BizAI Hacks | Digital Solutions for Businesses",
    template: "%s | BizAI Hacks",
  },
  description:
    "BizAI Hacks helps businesses transform digitally through AI-powered websites, apps, and automation solutions.",
  keywords: [
    "AI",
    "Digital Solutions",
    "Business Automation",
    "Web Development",
    "Next.js",
    "BizAI Hacks",
  ],
  openGraph: {
    title: "BizAI Hacks - Digital Solutions for Businesses",
    description:
      "Empowering businesses with smart digital transformation using AI and modern web technologies.",
    url: "https://bizaihacks.com",
    siteName: "BizAI Hacks",
    images: [
      {
        url: "https://bizaihacks.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "BizAI Hacks Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BizAI Hacks | Digital Solutions for Businesses",
    description:
      "BizAI Hacks empowers businesses with AI-driven web and app solutions.",
    images: ["https://bizaihacks.com/logo.jpg"],
    creator: "@bizaihacks",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ✅ Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P7HL92HS');
            `,
          }}
        />

        {/* ✅ LLM & AI Crawlers Metadata */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="ai" content="friendly" />
        <meta name="ai-description" content="AI-driven business automation and enterprise chatbots powered by IBM Watsonx & Eleven Labs." />
        <meta name="application-name" content="BizAI Hacks" />
        <meta name="theme-color" content="#000000" />
      </head>

      <body className="font-body antialiased">
        {/* ✅ Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P7HL92HS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Page Content */}
        {children}

        {/* ✅ Toast Notifications */}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
