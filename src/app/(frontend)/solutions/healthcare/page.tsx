import IndustrySolutionPage from "@/components/Solutions/IndustrySolutionPage";
import { getIndustryBySlug } from "@/data/industry-solutions-detailed";
import { notFound } from "next/navigation";
export const metadata = {
  title: "AI Solutions for Healthcare | BizAI Hacks",
  description:
    "Enhance patient care, diagnostics, and hospital automation with BizAI Hacks’ AI healthcare solutions.",
  alternates: { canonical: "https://bizaihacks.com/solutions/healthcare" },
  openGraph: {
    title: "Healthcare AI Automation | BizAI Hacks",
    description:
      "AI solutions for patient analytics, diagnosis, and operational efficiency in healthcare.",
    url: "https://bizaihacks.com/solutions/healthcare",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI in Healthcare | BizAI Hacks",
    description:
      "Revolutionize healthcare operations and decision-making with AI.",
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