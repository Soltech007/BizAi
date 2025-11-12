import DataAnalyticsPage from '@/components/Services/DataAnalyst'
import React from 'react'

// Data Analytics
export const metadata = {
  title: "Data Analytics | BizAI Hacks",
  description:
    "Turn raw data into actionable insights using BizAI Hacks’ AI-driven analytics solutions.",
  alternates: {
    canonical: "https://bizaihacks.com/services/dataanalytics",
  },
  openGraph: {
    title: "AI Data Analytics | BizAI Hacks",
    description:
      "Transform business decisions using AI-powered data analysis and visualization.",
    url: "https://bizaihacks.com/services/dataanalytics",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Data Analytics | BizAI Hacks",
    description: "Leverage the power of AI to make data-driven decisions.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

const Data = () => {
  return (
    <div><DataAnalyticsPage/></div>
  )
}

export default Data


