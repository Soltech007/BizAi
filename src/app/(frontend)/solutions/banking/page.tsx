import IndustrySolutionPage from "@/components/Solutions/IndustrySolutionPage";
import { getIndustryBySlug } from "@/data/industry-solutions-detailed";
import { notFound } from "next/navigation";
export const metadata = {
  title: "AI Solutions for Banking | BizAI Hacks",
  description:
    "Enhance security, customer engagement, and operations with AI-driven banking solutions.",
  openGraph: {
    title: "Banking AI Solutions | BizAI Hacks",
    description: "Smart automation for the modern financial sector.",
    url: "https://bizaihacks.com/solutions/banking",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Banking | BizAI Hacks",
    description: "Revolutionizing finance with intelligent automation.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

export default function BankingPage() {
  const data = getIndustryBySlug("banking");
  
  if (!data) {
    notFound();
  }

  return <IndustrySolutionPage data={data} />;
}