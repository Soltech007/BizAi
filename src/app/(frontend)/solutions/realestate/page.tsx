import IndustrySolutionPage from "@/components/Solutions/IndustrySolutionPage";
import { getIndustryBySlug } from "@/data/industry-solutions-detailed";
import { notFound } from "next/navigation";

export default function RealEstatePage() {
  const data = getIndustryBySlug("realestate");
  
  if (!data) {
    notFound();
  }

  return <IndustrySolutionPage data={data} />;
}