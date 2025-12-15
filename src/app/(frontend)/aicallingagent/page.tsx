// app/ai-calling-agent/page.tsx
import AICallingAgentLanding from './AiCallingAgentCampagin'

export const metadata = {
  title: 'AI Calling Agent - Automate Your Sales Calls',
  description: 'Let AI make 1000+ calls daily, qualify leads & book appointments. Save 70% on costs. Get free demo!',
  alternates: {
    canonical: "https://bizaihacks.com/aicallingagent",
  },
  openGraph: {
    title: "AI Calling Agent - Automate Your Sales Calls",
    description: "Let AI make 1000+ calls daily, qualify leads & book appointments. Save 70% on costs. Get free demo!",
    url: "https://bizaihacks.com/aicallingagent",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Calling Agent - Automate Your Sales Calls",
    description:
      "Let AI make 1000+ calls daily, qualify leads & book appointments. Save 70% on costs. Get free demo!",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

export default function AICallingAgentPage() {
  return <AICallingAgentLanding />
}