// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import SkipLink from "@/components/SkipLink";

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
}: {
  children: React.ReactNode;
}) {
  const FB_PIXEL_ID = "849394977937620"; // ✅ FIXED & HARD CODED

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

        {/* ✅ Meta / Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* ✅ Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BizAI Hacks",
              url: "https://bizaihacks.com",
              logo: "https://bizaihacks.com/logo.jpg",
              description:
                "AI-driven business automation and enterprise solutions.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-97237-23322",
                contactType: "customer service",
              },
              sameAs: [
                "https://www.linkedin.com/company/bizaihacks/",
                "https://www.facebook.com/bizaihacks/",
              ],
            }),
          }}
        />

        {/* ✅ SEO / AI Meta */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="ai" content="friendly" />
        <meta
          name="ai-description"
          content="AI-driven business automation and enterprise chatbots."
        />
        <meta name="application-name" content="BizAI Hacks" />
        <meta name="theme-color" content="#000000" />
      </head>

      <body className="font-body antialiased">
        {/* ✅ GTM noscript */}
        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-P7HL92HS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* ✅ Meta Pixel noscript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        <SkipLink />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
