import IndustrialSolutions from '@/components/landing/trusted-by'
import SolutionsPage from '@/components/Solutions/Solutions'
import React from 'react'
export const metadata = {
  title: "AI Industry Solutions | BizAI Hacks",
  description:
    "Explore how BizAI Hacks delivers AI-powered solutions tailored for industries like Healthcare, Real Estate, Logistics, and more.",
  alternates: { canonical: "https://bizaihacks.com/solutions" },
  openGraph: {
    title: "Industry AI Solutions | BizAI Hacks",
    description:
      "Tailored AI automation for multiple industries including healthcare, logistics, and more.",
    url: "https://bizaihacks.com/solutions",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions | BizAI Hacks",
    description: "AI industry solutions customized for enterprise needs.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};


const page = () => {
  return (
    <div><SolutionsPage/></div>
  )
}

export default page