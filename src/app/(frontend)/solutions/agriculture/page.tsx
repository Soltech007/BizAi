import IndustrySolutionPage from "@/components/Solutions/IndustrySolutionPage";
import { getIndustryBySlug } from "@/data/industry-solutions-detailed";
import { notFound } from "next/navigation";

export const metadata = {
  title: "AI Solutions for Agriculture | BizAI Hacks",
  description:
    "Boost agricultural productivity with AI-based crop analytics, yield prediction, and smart automation.",
  alternates: { canonical: "https://bizaihacks.com/solutions/agriculture" },
  openGraph: {
    title: "Agriculture AI Automation | BizAI Hacks",
    description:
      "Leverage AI for smarter farming, resource management, and yield optimization.",
    url: "https://bizaihacks.com/solutions/agriculture",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI in Agriculture | BizAI Hacks",
    description:
      "Empower agritech with AI-driven crop prediction and smart analytics.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};


export default function AgriculturePage() {
  const data = getIndustryBySlug("agriculture");
  
  if (!data) {
    notFound();
  }

  return <IndustrySolutionPage data={data} />;
}