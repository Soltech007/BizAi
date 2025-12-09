import React from 'react'
import AboutPage from '@/components/About/About'



export const metadata = {
  title: "About Us | BizAI Hacks",
  description:
    "Learn about BizAI Hacks, our mission to deliver scalable AI solutions for enterprise automation, and our partnerships with IBM Watsonx & Eleven Labs.",
  alternates: {
    canonical: "https://bizaihacks.com/about",
  },
  openGraph: {
    title: "About BizAI Hacks",
    description: "Discover our story and commitment to AI transformation.",
    url: "https://bizaihacks.com/about",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About BizAI Hacks",
    description: "Meet the team powering enterprise AI transformation.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};



const About = () => {
  return (
    <div><AboutPage/></div>
  )
}

export default About;