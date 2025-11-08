import IndustrySolutionPage from "@/components/Solutions/IndustrySolutionPage";
import { getIndustryBySlug } from "@/data/industry-solutions-detailed";
import { notFound } from "next/navigation";

export default function BankingPage() {
  const data = getIndustryBySlug("banking");
  
  if (!data) {
    notFound();
  }

  return <IndustrySolutionPage data={data} />;
}