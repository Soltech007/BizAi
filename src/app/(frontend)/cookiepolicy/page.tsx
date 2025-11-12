import CookiePolicyPage from '@/components/Cookies/Cookies'
import React from 'react'
// Cookies Policy
export const metadata = {
  title: "Cookies Policy | BizAI Hacks",
  description:
    "Learn how BizAI Hacks uses cookies to improve your browsing experience and website performance.",
  alternates: {
    canonical: "https://bizaihacks.com/cookiepolicy",
  },
  openGraph: {
    title: "Cookies Policy | BizAI Hacks",
    description: "Understand how we use cookies and tracking technologies responsibly.",
    url: "https://bizaihacks.com/cookiepolicy",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookies Policy | BizAI Hacks",
    description:
      "Find out how BizAI Hacks uses cookies for analytics and personalization.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

const cookies = () => {
  return (
    <div><CookiePolicyPage/></div>
  )
}

export default cookies