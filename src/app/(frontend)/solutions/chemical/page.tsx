import IndustrySolutionPage from "@/components/Solutions/IndustrySolutionPage";
import { getIndustryBySlug } from "@/data/industry-solutions-detailed";
import { notFound } from "next/navigation";
export const metadata = {
  title: "AI Solutions for Chemical Industry | BizAI Hacks",
  description:
    "Optimize production, safety, and compliance in the chemical sector with BizAI Hacks’ AI-driven automation and predictive analytics.",
  alternates: { canonical: "https://bizaihacks.com/solutions/chemical" },
  openGraph: {
    title: "Chemical Industry AI Automation | BizAI Hacks",
    description:
      "Enhance process safety, compliance, and efficiency with AI automation in the chemical industry.",
    url: "https://bizaihacks.com/solutions/chemical",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI in Chemical Industry | BizAI Hacks",
    description:
      "Drive smarter chemical manufacturing through AI-powered analytics and automation.",
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