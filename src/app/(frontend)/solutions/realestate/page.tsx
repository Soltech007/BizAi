import IndustrySolutionPage from "@/components/Solutions/IndustrySolutionPage";
import { getIndustryBySlug } from "@/data/industry-solutions-detailed";
import { notFound } from "next/navigation";
export const metadata = {
  title: "AI Solutions for Real Estate | BizAI Hacks",
  description:
    "Enhance property management and customer engagement with AI tools for real estate businesses.",
  openGraph: {
    title: "Real Estate AI Solutions | BizAI Hacks",
    description: "Transform real estate operations with automation and analytics.",
    url: "https://bizaihacks.com/solutions/realestate",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Real Estate | BizAI Hacks",
    description: "Smart automation for property and lead management.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

export default function RealEstatePage() {
  const data = getIndustryBySlug("realestate");
  
  if (!data) {
    notFound();
  }

  return <IndustrySolutionPage data={data} />;
}