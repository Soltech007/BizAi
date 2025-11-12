import CookiePolicyPage from '@/components/Cookies/Cookies'
import React from 'react'
export const metadata = {
  title: "Cookies Policy | BizAI Hacks",
  description:
    "This Cookies Policy explains how BizAI Hacks uses cookies and similar technologies to enhance your browsing experience and analyze website performance.",
  openGraph: {
    title: "Cookies Policy | BizAI Hacks",
    description:
      "Understand how BizAI Hacks uses cookies to improve your experience and ensure transparency.",
    url: "https://bizaihacks.com/cookies-policy",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookies Policy | BizAI Hacks",
    description: "Learn how cookies help improve your BizAI Hacks experience.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

const cookies = () => {
  return (
    <div><CookiePolicyPage/></div>
  )
}

export default cookies