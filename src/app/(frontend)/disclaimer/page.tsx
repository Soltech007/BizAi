import DisclaimerPage from '@/components/Disclaimer/Disclaimer'
import React from 'react'
// Disclaimer
export const metadata = {
  title: "Disclaimer | BizAI Hacks",
  description:
    "Read BizAI Hacks’ Disclaimer for information about the limitations of our AI services and content.",
  alternates: {
    canonical: "https://bizaihacks.com/disclaimer",
  },
  openGraph: {
    title: "Disclaimer | BizAI Hacks",
    description:
      "Understand the boundaries and disclaimers for BizAI Hacks’ AI content and services.",
    url: "https://bizaihacks.com/disclaimer",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | BizAI Hacks",
    description: "Important notice about BizAI Hacks’ AI solutions and responsibility.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

const Disclaimer = () => {
  return (
    <div><DisclaimerPage/></div>
  )
}

export default Disclaimer