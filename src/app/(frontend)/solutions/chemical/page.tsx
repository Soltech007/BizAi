import IndustrySolutionPage from "@/components/Solutions/IndustrySolutionPage";
import { getIndustryBySlug } from "@/data/industry-solutions-detailed";
import { notFound } from "next/navigation";
export const metadata = {
  title: "AI Solutions for Chemical Industry | BizAI Hacks",
  description:
    "Optimize production and safety with AI-powered solutions for the chemical industry.",
  openGraph: {
    title: "Chemical Industry AI Solutions | BizAI Hacks",
    description: "Streamline operations with intelligent process automation.",
    url: "https://bizaihacks.com/solutions/chemical",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Chemical Industry | BizAI Hacks",
    description: "Data-driven optimization for chemical manufacturing.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

export default function ChemicalPage() {
  const data = getIndustryBySlug("chemical");
  
  if (!data) {
    notFound();
  }

  return <IndustrySolutionPage data={data} />;
}