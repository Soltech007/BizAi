import ImplementationPage from '@/components/Services/Implimentation'
import React from 'react'
export const metadata = {
  title: "AI Implementation Services | BizAI Hacks",
  description:
    "Seamlessly integrate AI and automation solutions into your existing business ecosystem with our expert implementation services.",
  openGraph: {
    title: "AI Implementation | BizAI Hacks",
    description: "From planning to deployment — we make AI work for you.",
    url: "https://bizaihacks.com/services/implementation",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Implementation Services | BizAI Hacks",
    description: "Deploy AI solutions that drive measurable business results.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

const implementation = () => {
  return (
    <div><ImplementationPage/></div>
  )
}

export default implementation