import AICallingAgentPage from '@/components/Products/CallingAgent'
import React from 'react'
export const metadata = {
  title: "AI Calling Agent | BizAI Hacks",
  description:
    "Automate customer communication using BizAI Hacks' AI Calling Agent powered by natural language and voice AI.",
  alternates: {
    canonical: "https://bizaihacks.com/product/aicallingagent",
  },
  openGraph: {
    title: "AI Calling Agent | BizAI Hacks",
    description:
      "Boost sales and support with AI-powered voice agents that handle calls intelligently.",
    url: "https://bizaihacks.com/product/aicallingagent",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Calling Agent | BizAI Hacks",
    description: "Automate customer engagement with our AI voice solutions.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};


const CallingAgent = () => {
  return (
    <div><AICallingAgentPage/></div>
  )
}

export default CallingAgent