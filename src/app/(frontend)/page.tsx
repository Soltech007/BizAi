import {InfiniteMovingCardsDemo} from "@/components/landing/ai-driven";
import IndustrialSolutions from "@/components/landing/common-questions";
import Hero from "@/components/landing/hero";
import ProductTestimonials from "@/components/landing/testimonials";
import type { Metadata } from "next";

export const metadata = {
  title: "AI Services | BizAI Hacks",
  description:
    "Explore our range of AI-driven services — from consultation and implementation to data analytics and enterprise training.",
  openGraph: {
    title: "BizAI Hacks AI Services",
    description:
      "Empowering enterprises through consultation, training, implementation, and analytics.",
    url: "https://bizaihacks.com/services",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Services | BizAI Hacks",
    description: "Consultation, implementation, and analytics for AI transformation.",
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
  