import IndustrySolutionPage from "@/components/Solutions/IndustrySolutionPage";
import { getIndustryBySlug } from "@/data/industry-solutions-detailed";
import { notFound } from "next/navigation";
export const metadata = {
  title: "AI Solutions for E-commerce | BizAI Hacks",
  description:
    "Boost conversions and customer satisfaction with AI chatbots, analytics, and recommendation systems for e-commerce.",
  openGraph: {
    title: "E-commerce AI Solutions | BizAI Hacks",
    description: "Automate e-commerce operations and enhance customer experience with AI.",
    url: "https://bizaihacks.com/solutions/ecommerce",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for E-commerce | BizAI Hacks",
    description: "AI tools that drive smarter e-commerce growth.",
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