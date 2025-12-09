import PrivacyPolicyPage from '@/components/Privacy/page'
import React from 'react'
export const metadata = {
  title: "Privacy Policy | BizAI Hacks",
  description:
    "Read BizAI Hacks' Privacy Policy to understand how we collect, use, and protect your personal data.",
  alternates: {
    canonical: "https://bizaihacks.com/privacypolicy",
  },
  openGraph: {
    title: "Privacy Policy | BizAI Hacks",
    description: "Transparency in how we handle and protect your data.",
    url: "https://bizaihacks.com/privacypolicy",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | BizAI Hacks",
    description: "Learn how BizAI Hacks keeps your data safe.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

const PrivacyPolicy = () => {
  return (
    <div><PrivacyPolicyPage/></div>
  )
}

export default PrivacyPolicy