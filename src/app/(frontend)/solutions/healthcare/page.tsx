import IndustrySolutionPage from "@/components/Solutions/IndustrySolutionPage";
import { getIndustryBySlug } from "@/data/industry-solutions-detailed";
import { notFound } from "next/navigation";
export const metadata = {
  title: "AI Solutions for Healthcare | BizAI Hacks",
  description:
    "Enhance patient care and operational efficiency with AI automation and analytics in healthcare.",
  openGraph: {
    title: "Healthcare AI Solutions | BizAI Hacks",
    description: "Revolutionizing healthcare through AI insights and automation.",
    url: "https://bizaihacks.com/solutions/healthcare",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Healthcare | BizAI Hacks",
    description: "Smarter healthcare powered by AI analytics and automation.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

export default function HealthcarePage() {
  const data = getIndustryBySlug("healthcare");
  
  if (!data) {
    notFound();
  }

  return <IndustrySolutionPage data={data} />;
}