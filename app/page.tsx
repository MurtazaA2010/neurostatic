// app/page.tsx (Server Component)
import HomeClient from "./HomeClient";

export const generateMetadata = () => ({
  title: "NeuroStatic-Home",
});

export default function Page() {
  return <HomeClient />;
}
