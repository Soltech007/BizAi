import AIAutomationChatbotPage from '@/components/Products/AiChatbot'
import React from 'react'
export const metadata = {
  title: "AI Automation Chatbot | BizAI Hacks",
  description:
    "Enhance customer service and sales automation using our AI Chatbot — powered by advanced NLP and GPT technologies.",
  alternates: {
    canonical: "https://bizaihacks.com/product/aiautomationchatbot",
  },
  openGraph: {
    title: "AI Chatbot Automation | BizAI Hacks",
    description:
      "Deliver smart, human-like chat experiences with AI chatbots built for enterprises.",
    url: "https://bizaihacks.com/product/aiautomationchatbot",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbot | BizAI Hacks",
    description: "Transform your business communication with automation.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};


const Chatbot = () => {
  return (
    <div><AIAutomationChatbotPage/></div>
  )
}

export default Chatbot