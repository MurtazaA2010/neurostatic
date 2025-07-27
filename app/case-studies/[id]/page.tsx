import { getCaseById } from "lib/casedetails";
import CaseStudyDetail from "./CaseDetails";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props) {
  const caseStudy = await getCaseById(params.id);
  if (!caseStudy) {
    return {
      title: "Case Study Not Found - NeuroStatic",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: caseStudy.title + " - NeuroStatic",
    description: caseStudy.description?.slice(0, 160) || "Read this blog on NeuroStatic",
  };
}

export default async function Page({ params }: Props) {
  const caseStudy = await getCaseById(params.id);
  if (!caseStudy) return <div className="text-center py-20">Case study not found</div>;

  return <CaseStudyDetail initialData={caseStudy} />;
}
