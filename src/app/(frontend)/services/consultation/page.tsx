import ConsultationPage from '@/components/Services/Consultation'
import React from 'react'
export const metadata = {
  title: "AI Consultation Services | BizAI Hacks",
  description:
    "Get expert guidance on AI strategy and digital transformation tailored to your business needs.",
  openGraph: {
    title: "AI Strategy Consultation | BizAI Hacks",
    description: "Consult with AI experts to identify and implement growth opportunities.",
    url: "https://bizaihacks.com/services/consultation",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consultation | BizAI Hacks",
    description: "Turn your business vision into an AI-powered strategy.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

const Consultation = () => {
  return (
    <div><ConsultationPage/></div>
  )
}

export default Consultation