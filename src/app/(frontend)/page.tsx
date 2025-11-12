import {InfiniteMovingCardsDemo} from "@/components/landing/ai-driven";
import IndustrialSolutions from "@/components/landing/common-questions";
import Hero from "@/components/landing/hero";
import ProductTestimonials from "@/components/landing/testimonials";
import type { Metadata } from "next";

export const metadata = {
  title: "BizAI Hacks | Enterprise AI Solutions ",
  description:
    "BizAI Hacks helps businesses scale with AI automation — from chatbots and voice agents to intelligent data analytics.",
  alternates: {
    canonical: "https://bizaihacks.com/",
  },
  openGraph: {
    title: "BizAI Hacks | AI Automation for Enterprises",
    description:
      "Revolutionize your business operations with AI-driven automation and analytics from BizAI Hacks.",
    url: "https://bizaihacks.com/",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizAI Hacks | Enterprise AI Automation",
    description: "Power your business growth with next-gen AI solutions.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};


// src/data/testimonials/calling-agent.ts
export const callingAgentTestimonials = [
  {
    quote:
      "Our call center costs dropped by 60% in the first quarter. The AI handles appointment bookings flawlessly, and customers can't tell it's not human.",
    name: "Priya Sharma",
    title: "Operations Head",
    company: "HealthFirst Clinics",
    industry: "Healthcare",
    rating: 5,
  },
  {
    quote:
      "We were struggling with 500+ daily collection reminder calls. Now the AI handles them all with perfect compliance and better recovery rates than our human agents.",
    name: "Rajesh Malhotra",
    title: "CFO",
    company: "QuickLoan Finance",
    industry: "NBFC",
    rating: 5,
  },
  {
    quote:
      "The voice quality is incredible. Our NPS actually went UP after deploying AI calling agents for support triage. Customers get instant answers 24/7.",
    name: "Amit Verma",
    title: "Customer Experience Director",
    company: "TechSupport Pro",
    industry: "SaaS",
    rating: 5,
  },
];


export default function Home() {
  
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow">
        <Hero />
        {/* <DashboardPreview /> */}
        <IndustrialSolutions />
        {/* <IndustrialSolutions /> */}
        <InfiniteMovingCardsDemo />
        {/* <ProductTestimonials testimonials={callingAgentTestimonials} /> */}
      </main>
      {/* <FloatingCta /> */}
    </div>
  );
}
  