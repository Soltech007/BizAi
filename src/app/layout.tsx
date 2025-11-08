import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

export const metadata: Metadata = {
  title: 'BizAI Hacks - Enterprise AI Solutions | AI Chatbot & Voice Automation',
  description: 'Deploy production-ready AI solutions with IBM Watsonx & Eleven Labs. We help mid-market and enterprise teams accelerate business outcomes with pragmatic AI through consultation, training, and implementation services.',
  keywords: 'enterprise AI solutions, AI chatbot, AI voice automation, AI calling agent, IBM Watsonx, Eleven Labs, AI consulting, CRM integration, ERP integration, contact center automation, conversational AI, Telecom AI, BFSI AI, Healthcare AI',
  icons: '/logo.jpg',
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
      </head>

      <body className="font-body antialiased">
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P7HL92HS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}

        {/* Toast Notifications */}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
