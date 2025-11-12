import AIAutomationChatbotPage from '@/components/Products/AiChatbot'
import React from 'react'
export const metadata = {
  title: "AI Automation Chatbot | BizAI Hacks",
  description:
    "Deliver instant, intelligent responses with BizAI Hacks’ AI Automation Chatbot — designed for seamless customer and business communication.",
  openGraph: {
    title: "AI Chatbot for Business Automation",
    description: "Transform support and sales with AI-powered chatbot automation.",
    url: "https://bizaihacks.com/product/aiautomationchatbot",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbot Automation | BizAI Hacks",
    description: "Enhance customer experience with AI chatbot automation.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

const Chatbot = () => {
  return (
    <div><AIAutomationChatbotPage/></div>
  )
}

export default Chatbot