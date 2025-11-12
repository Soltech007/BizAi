import IndustrySolutionPage from "@/components/Solutions/IndustrySolutionPage";
import { getIndustryBySlug } from "@/data/industry-solutions-detailed";
import { notFound } from "next/navigation";
export const metadata = {
  title: "AI Solutions for Banking & Finance | BizAI Hacks",
  description:
    "Empower financial institutions with AI for fraud detection, customer analytics, and automation.",
  alternates: { canonical: "https://bizaihacks.com/solutions/banking" },
  openGraph: {
    title: "Banking AI Automation | BizAI Hacks",
    description:
      "Revolutionize banking with AI-driven automation and risk management tools.",
    url: "https://bizaihacks.com/solutions/banking",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI in Banking | BizAI Hacks",
    description:
      "AI-powered banking solutions for security, analytics, and automation.",
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