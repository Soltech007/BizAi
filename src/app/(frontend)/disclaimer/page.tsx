import DisclaimerPage from '@/components/Disclaimer/Disclaimer'
import React from 'react'
export const metadata = {
  title: "Disclaimer | BizAI Hacks",
  description:
    "Read the BizAI Hacks Disclaimer to understand the limitations of liability, accuracy, and use of information provided on our website and services.",
  openGraph: {
    title: "Disclaimer | BizAI Hacks",
    description:
      "Important legal notice regarding the accuracy and use of information shared by BizAI Hacks.",
    url: "https://bizaihacks.com/disclaimer",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | BizAI Hacks",
    description: "Please review our disclaimer before using BizAI Hacks services or content.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

const Disclaimer = () => {
  return (
    <div><DisclaimerPage/></div>
  )
}

export default Disclaimer