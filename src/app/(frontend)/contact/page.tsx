import React from 'react'
import type { Metadata } from "next";
import ContactPage from '@/components/Contact/Contact';

export const metadata = {
  title: "Contact Us | BizAI Hacks",
  description:
    "Have questions or want a demo? Contact BizAI Hacks — your partner in enterprise AI solutions and automation.",
  alternates: {
    canonical: "https://bizaihacks.com/contact",
  },
  openGraph: {
    title: "Contact BizAI Hacks",
    description: "Let’s build the future of AI, together.",
    url: "https://bizaihacks.com/contact",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact BizAI Hacks",
    description: "Reach out to our team for AI consulting and demos.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};


const Contact = () => {
  return (
    <div><ContactPage/></div>
  )
}

export default Contact