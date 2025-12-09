import TermsPage from '@/components/Termandcondition/TermandCondition'
import React from 'react'

export const metadata = {
  title: "Terms of Service | BizAI Hacks",
  description:
    "Review BizAI Hacks’ Terms of Service to understand the rules and guidelines for using our AI products and services.",
  alternates: {
    canonical: "https://bizaihacks.com/termsandconditions",
  },
  openGraph: {
    title: "Terms of Service | BizAI Hacks",
    description:
      "Learn the legal terms governing your use of BizAI Hacks products and services.",
    url: "https://bizaihacks.com/termsandconditions",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | BizAI Hacks",
    description: "Understand the terms under which we operate and deliver services.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};
const Termandcondition = () => {
  return (
    <div><TermsPage/></div>
  )
}

export default Termandcondition