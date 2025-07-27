// app/contact/page.tsx
import BlogsPage
 from "./Blogs";
export const generateMetadata = () => ({
  title: "Blogs - NeuroStatic",
  description: "See the latest blogs of NeuroStatic to stay updated",
});

export default function Page() {
  return <BlogsPage />;
}
