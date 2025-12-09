import ImplementationPage from '@/components/Services/Implimentation'
import React from 'react'
// Implementation
export const metadata = {
  title: "AI Implementation | BizAI Hacks",
  description:
    "Seamlessly integrate AI into your existing business processes with our implementation services.",
  alternates: {
    canonical: "https://bizaihacks.com/services/implementation",
  },
  openGraph: {
    title: "AI Implementation Services | BizAI Hacks",
    description:
      "Deploy AI systems quickly and efficiently with expert implementation support.",
    url: "https://bizaihacks.com/services/implementation",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Implementation | BizAI Hacks",
    description:
      "Integrate AI systems into your business with ease and precision.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

const implementation = () => {
  return (
    <div><ImplementationPage/></div>
  )
}

export default implementation