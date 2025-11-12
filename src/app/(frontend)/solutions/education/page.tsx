import IndustrySolutionPage from "@/components/Solutions/IndustrySolutionPage";
import { getIndustryBySlug } from "@/data/industry-solutions-detailed";
import { notFound } from "next/navigation";
export const metadata = {
  title: "AI Solutions for Education | BizAI Hacks",
  description:
    "Transform learning experiences with AI-powered education platforms and analytics.",
  openGraph: {
    title: "Education AI Solutions | BizAI Hacks",
    description: "Empowering educators and students with intelligent tools.",
    url: "https://bizaihacks.com/solutions/education",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Education | BizAI Hacks",
    description: "AI-powered learning and automation for modern education.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

export default function HealthcarePage() {
  const data = getIndustryBySlug("education");
  
  if (!data) {
    notFound();
  }

  return <IndustrySolutionPage data={data} />;
}