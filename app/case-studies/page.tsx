// app/contact/page.tsx
import CaseStudies from "./case";
export const generateMetadata = () => ({
  title: "Case Studies - NeuroStatic",
  description: "Our latest case studies",
});

export default function Page() {
  return <CaseStudies />;
}
