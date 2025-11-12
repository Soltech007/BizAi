import IndustrialSolutions from '@/components/landing/trusted-by'
import SolutionsPage from '@/components/Solutions/Solutions'
import React from 'react'
export const metadata = {
  title: "AI Industry Solutions | BizAI Hacks",
  description:
    "Discover AI solutions for industries including healthcare, logistics, banking, education, and more — all tailored for performance and scalability.",
  openGraph: {
    title: "Industry-Specific AI Solutions | BizAI Hacks",
    description: "Explore how AI can transform your industry.",
    url: "https://bizaihacks.com/solutions",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Industry Solutions | BizAI Hacks",
    description: "Transforming industries with AI automation and intelligence.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

const page = () => {
  return (
    <div><SolutionsPage/></div>
  )
}

export default page