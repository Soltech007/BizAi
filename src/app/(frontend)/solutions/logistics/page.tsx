import IndustrySolutionPage from "@/components/Solutions/IndustrySolutionPage";
import { getIndustryBySlug } from "@/data/industry-solutions-detailed";
import { notFound } from "next/navigation";
export const metadata = {
  title: "AI Solutions for Logistics | BizAI Hacks",
  description:
    "Streamline supply chain management and delivery operations with AI automation.",
  openGraph: {
    title: "Logistics AI Solutions | BizAI Hacks",
    description: "Boost efficiency with intelligent logistics automation.",
    url: "https://bizaihacks.com/solutions/logistics",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Logistics | BizAI Hacks",
    description: "Optimize routes, reduce costs, and enhance efficiency with AI.",
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