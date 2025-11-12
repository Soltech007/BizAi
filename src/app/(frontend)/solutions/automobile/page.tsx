import IndustrySolutionPage from "@/components/Solutions/IndustrySolutionPage";
import { getIndustryBySlug } from "@/data/industry-solutions-detailed";
import { notFound } from "next/navigation";
export const metadata = {
  title: "AI Solutions for Automobile Industry | BizAI Hacks",
  description:
    "Accelerate automotive innovation with AI for manufacturing, sales, and after-sales operations.",
  openGraph: {
    title: "Automobile AI Solutions | BizAI Hacks",
    description: "Driving automation across the automotive value chain.",
    url: "https://bizaihacks.com/solutions/automobile",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Automobile Industry | BizAI Hacks",
    description: "AI automation that drives growth and efficiency.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

export default function AutomobilePage() {
  const data = getIndustryBySlug("automobile");
  
  if (!data) {
    notFound();
  }

  return <IndustrySolutionPage data={data} />;
}