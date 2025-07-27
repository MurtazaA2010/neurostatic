// app/contact/page.tsx
import Services from "./Service";
export const generateMetadata = () => ({
  title: "Services - NeuroStatic",
  description: "See our AI and Web services to get started",
});

export default function Page() {
  return <Services />;
}
