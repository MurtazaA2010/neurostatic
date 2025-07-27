import BlogDetailsClient from "./BlogDetails";
import { notFound } from "next/navigation";
import { getBlogById } from "lib/blogservice";
interface Props {
  params: { id: string };
}

// Dynamic metadata based on blog title
export async function generateMetadata({ params }: Props) {
  const blog = await getBlogById(params.id);
  if (!blog) return notFound();

  return {
    title: blog.title + " - NeuroStatic",
    description: blog.description?.slice(0, 160) || "Read this blog on NeuroStatic",
  };
}

export default function Page({ params }: Props) {
  return <BlogDetailsClient />;
}
