import IndustrySolutionPage from "@/components/Solutions/IndustrySolutionPage";
import { getIndustryBySlug } from "@/data/industry-solutions-detailed";
import { notFound } from "next/navigation";
export const metadata = {
  title: "AI Solutions for E-Commerce | BizAI Hacks",
  description:
    "Boost your e-commerce growth with AI-powered personalization, sales prediction, and chatbot automation.",
  alternates: { canonical: "https://bizaihacks.com/solutions/ecommerce" },
  openGraph: {
    title: "E-Commerce AI Automation | BizAI Hacks",
    description:
      "Enhance online sales and customer experience with AI-driven automation and analytics.",
    url: "https://bizaihacks.com/solutions/ecommerce",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI in E-Commerce | BizAI Hacks",
    description:
      "Optimize your online business using AI-based automation and data intelligence.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};


export default function EcommercePage() {
  const data = getIndustryBySlug("ecommerce");
  
  if (!data) {
    notFound();
  }

  return <IndustrySolutionPage data={data} />;
}