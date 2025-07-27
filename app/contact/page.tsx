// app/contact/page.tsx
import Contact from "./Contact"; // Just import directly

export const generateMetadata = () => ({
  title: "Contact Us - NeuroStatic",
  description: "Get in touch with NeuroStatic. Let's build something amazing together.",
});

export default function Page() {
  return <Contact />;
}
