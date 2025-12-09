import TrainingPage from '@/components/Services/Trainging'
import React from 'react'
// Training
export const metadata = {
  title: "AI Training | BizAI Hacks",
  description:
    "Upskill your workforce with hands-on AI and automation training programs by BizAI Hacks.",
  alternates: {
    canonical: "https://bizaihacks.com/services/training",
  },
  openGraph: {
    title: "AI Training Programs | BizAI Hacks",
    description:
      "Empower your team with AI and automation skills through expert-led training.",
    url: "https://bizaihacks.com/services/training",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Training | BizAI Hacks",
    description: "Empower your workforce with AI knowledge.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

const Training = () => {
  return (
    <div><TrainingPage/></div>
  )
}

export default Training