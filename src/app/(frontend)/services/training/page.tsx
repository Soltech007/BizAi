import TrainingPage from '@/components/Services/Trainging'
import React from 'react'
export const metadata = {
  title: "AI Training Programs | BizAI Hacks",
  description:
    "Empower your team with practical AI and automation training programs customized for enterprises.",
  openGraph: {
    title: "AI Training by BizAI Hacks",
    description: "Upskill your workforce with expert-led AI learning sessions.",
    url: "https://bizaihacks.com/services/training",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise AI Training | BizAI Hacks",
    description: "AI learning solutions built to future-proof your workforce.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

const Training = () => {
  return (
    <div><TrainingPage/></div>
  )
}

export default Training