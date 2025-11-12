import React from 'react'
import type { Metadata } from "next";
import ContactPage from '@/components/Contact/Contact';

export const metadata = {
  title: "Contact Us | BizAI Hacks",
  description:
    "Get in touch with BizAI Hacks for AI consulting, demos, or partnership opportunities. We're here to help you accelerate your business outcomes.",
  openGraph: {
    title: "Contact BizAI Hacks",
    description: "Reach out to our team for AI consulting or product demos.",
    url: "https://bizaihacks.com/contact",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact BizAI Hacks",
    description: "Let's build the future of AI, together.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

const Contact = () => {
  return (
    <div><ContactPage/></div>
  )
}

export default Contact