import TermsPage from '@/components/Termandcondition/TermandCondition'
import React from 'react'
export const metadata = {
  title: "Terms of Service | BizAI Hacks",
  description:
    "Review BizAI Hacks' Terms of Service outlining user rights, obligations, and the legal guidelines for using our AI products and services.",
  openGraph: {
    title: "Terms of Service | BizAI Hacks",
    description:
      "Understand the terms and conditions that govern your use of BizAI Hacks' website and AI services.",
    url: "https://bizaihacks.com/terms-of-service",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | BizAI Hacks",
    description: "Please read our terms and conditions before using our platform.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

const Termandcondition = () => {
  return (
    <div><TermsPage/></div>
  )
}

export default Termandcondition