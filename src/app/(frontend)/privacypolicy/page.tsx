import PrivacyPolicyPage from '@/components/Privacy/page'
import React from 'react'
export const metadata = {
  title: "Privacy Policy | BizAI Hacks",
  description:
    "Read BizAI Hacks' Privacy Policy to understand how we collect, use, and protect your personal data while ensuring compliance with global privacy standards.",
  openGraph: {
    title: "Privacy Policy | BizAI Hacks",
    description:
      "Learn how BizAI Hacks protects your privacy and handles your information responsibly.",
    url: "https://bizaihacks.com/privacy-policy",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | BizAI Hacks",
    description: "Your privacy and data protection are our top priority.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

const PrivacyPolicy = () => {
  return (
    <div><PrivacyPolicyPage/></div>
  )
}

export default PrivacyPolicy