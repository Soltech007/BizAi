import PartnershipsPage from '@/components/Partnership/Partnership'
import React from 'react'

export const metadata = {
  title: "Partnerships | BizAI Hacks",
  description:
    "Collaborate with BizAI Hacks to bring AI transformation to your clients — explore partnerships and co-innovation opportunities.",
  alternates: {
    canonical: "https://bizaihacks.com/partnerships",
  },
  openGraph: {
    title: "Partner with BizAI Hacks",
    description:
      "Join us to scale AI adoption through partnerships and strategic alliances.",
    url: "https://bizaihacks.com/partnerships",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizAI Hacks Partnerships",
    description: "Grow with us through AI-driven collaboration.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

const partnership = () => {
  return (
    <div><PartnershipsPage/></div>
  )
}

export default partnership