import IndustrySolutionPage from "@/components/Solutions/IndustrySolutionPage";
import { getIndustryBySlug } from "@/data/industry-solutions-detailed";
import { notFound } from "next/navigation";
export const metadata = {
  title: "AI Solutions for Education | BizAI Hacks",
  description:
    "Enhance learning experiences and administration efficiency with AI tools for education and e-learning systems.",
  alternates: { canonical: "https://bizaihacks.com/solutions/education" },
  openGraph: {
    title: "Education AI Automation | BizAI Hacks",
    description:
      "AI for personalized learning, analytics, and student engagement.",
    url: "https://bizaihacks.com/solutions/education",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI in Education | BizAI Hacks",
    description:
      "Revolutionize education management and learning with AI technology.",
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