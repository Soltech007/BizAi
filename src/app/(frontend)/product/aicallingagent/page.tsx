import AICallingAgentPage from '@/components/Products/CallingAgent'
import React from 'react'
export const metadata = {
  title: "AI Calling Agent | BizAI Hacks",
  description:
    "Automate your customer communication with BizAI Hacks' AI Calling Agent — powered by advanced speech synthesis and natural language understanding.",
  openGraph: {
    title: "AI Calling Agent by BizAI Hacks",
    description:
      "Enhance lead engagement and customer service using intelligent AI voice agents.",
    url: "https://bizaihacks.com/product/aicallingagent",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Calling Agent | BizAI Hacks",
    description: "AI voice technology built for customer engagement and automation.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

const CallingAgent = () => {
  return (
    <div><AICallingAgentPage/></div>
  )
}

export default CallingAgent