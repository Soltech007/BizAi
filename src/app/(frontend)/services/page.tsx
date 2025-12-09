import ServicesPage from '@/components/Services/ServiceMain'
import React from 'react'

export const metadata = {
  title: "Our Services | BizAI Hacks",
  description:
    "Explore BizAI Hacks’ AI services — from strategy consultation and implementation to training and analytics.",
  alternates: {
    canonical: "https://bizaihacks.com/services",
  },
  openGraph: {
    title: "AI Services | BizAI Hacks",
    description:
      "End-to-end AI services to implement, optimize, and scale your enterprise automation.",
    url: "https://bizaihacks.com/services",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Services | BizAI Hacks",
    description:
      "Consulting, training, implementation, and analytics powered by AI.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

const MainService = () => {
  return (
    <div><ServicesPage/></div>
  )
}

export default MainService