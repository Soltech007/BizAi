import IndustrySolutionPage from "@/components/Solutions/IndustrySolutionPage";
import { getIndustryBySlug } from "@/data/industry-solutions-detailed";
import { notFound } from "next/navigation";
export const metadata = {
  title: "AI Solutions for Automobile Industry | BizAI Hacks",
  description:
    "Revolutionize automobile manufacturing and sales with predictive maintenance, automation, and intelligent customer engagement.",
  alternates: { canonical: "https://bizaihacks.com/solutions/automobile" },
  openGraph: {
    title: "Automotive AI Automation | BizAI Hacks",
    description:
      "Enhance automotive efficiency with predictive maintenance and AI automation.",
    url: "https://bizaihacks.com/solutions/automobile",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI in Automotive Industry | BizAI Hacks",
    description:
      "Smart AI tools for automobile manufacturing, supply chain, and sales.",
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