import IndustrySolutionPage from "@/components/Solutions/IndustrySolutionPage";
import { getIndustryBySlug } from "@/data/industry-solutions-detailed";
import { notFound } from "next/navigation";
export const metadata = {
  title: "AI Solutions for Logistics | BizAI Hacks",
  description:
    "Optimize your logistics operations with AI-driven route optimization, predictive demand, and automation tools.",
  alternates: { canonical: "https://bizaihacks.com/solutions/logistics" },
  openGraph: {
    title: "Logistics AI Automation | BizAI Hacks",
    description:
      "Enhance logistics efficiency through intelligent automation and predictive analytics.",
    url: "https://bizaihacks.com/solutions/logistics",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI in Logistics | BizAI Hacks",
    description:
      "Streamline logistics and supply chain with AI-based analytics and optimization.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};


export default function LogisticsPage() {
  const data = getIndustryBySlug("logistics");
  
  if (!data) {
    notFound();
  }

  return <IndustrySolutionPage data={data} />;
}