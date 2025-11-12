import IndustrySolutionPage from "@/components/Solutions/IndustrySolutionPage";
import { getIndustryBySlug } from "@/data/industry-solutions-detailed";
import { notFound } from "next/navigation";
export const metadata = {
  title: "AI Solutions for Agriculture | BizAI Hacks",
  description:
    "Use AI to optimize yield, resource management, and forecasting in agriculture.",
  openGraph: {
    title: "Agriculture AI Solutions | BizAI Hacks",
    description: "Empowering farmers and agribusinesses with AI insights.",
    url: "https://bizaihacks.com/solutions/agriculture",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Agriculture | BizAI Hacks",
    description: "Smart farming powered by data and AI automation.",
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