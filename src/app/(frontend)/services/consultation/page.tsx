import ConsultationPage from '@/components/Services/Consultation'
import React from 'react'
// Consultation
export const metadata = {
  title: "AI Consultation | BizAI Hacks",
  description:
    "Get expert consultation on AI automation and digital transformation tailored to your business.",
  alternates: {
    canonical: "https://bizaihacks.com/services/consultation",
  },
  openGraph: {
    title: "AI Consultation Services | BizAI Hacks",
    description:
      "Leverage our AI expertise to plan, strategize, and deploy intelligent automation.",
    url: "https://bizaihacks.com/services/consultation",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consultation | BizAI Hacks",
    description: "Tailored AI consultation for scalable business automation.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};
const Consultation = () => {
  return (
    <div><ConsultationPage/></div>
  )
}

export default Consultation