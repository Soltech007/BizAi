import IndustrySolutionPage from "@/components/Solutions/IndustrySolutionPage";
import { getIndustryBySlug } from "@/data/industry-solutions-detailed";
import { notFound } from "next/navigation";
export const metadata = {
  title: "AI Solutions for Real Estate | BizAI Hacks",
  description:
    "Empower real estate firms with AI automation for lead scoring, predictive pricing, and customer engagement.",
  alternates: { canonical: "https://bizaihacks.com/solutions/realestate" },
  openGraph: {
    title: "Real Estate AI Automation | BizAI Hacks",
    description:
      "Transform property management and customer experience using AI analytics and automation.",
    url: "https://bizaihacks.com/solutions/realestate",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI in Real Estate | BizAI Hacks",
    description:
      "Automate real estate sales, pricing, and engagement using BizAI Hacks’ intelligent AI systems.",
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