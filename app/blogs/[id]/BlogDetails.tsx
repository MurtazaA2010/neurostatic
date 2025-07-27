"use client";
import RotateLoader from "react-spinners/RotateLoader";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Calendar } from "lucide-react";
import Navbar from "components/indexComponents/Navbar";
import Footer from "components/indexComponents/Footer";

import "App.css";
import "Index.css";

interface Blog {
  _id: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  description: string;
  category?: string;
}

const BlogDetails = () => {
  const params = useParams();
  const id = params?.id as string;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [minTimePassed, setMinTimePassed] = useState(false);

  useEffect(() => {
    setMinTimePassed(false);
    const timer = setTimeout(() => setMinTimePassed(true), 1500);
    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    const fetchBlog = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/blog/${id}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        if (data.blog) {
          setBlog(data.blog);
          setError(null);
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load blog");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    } else {
      setError("No blog ID provided");
      setIsLoading(false);
    }
  }, [id]);

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex justify-center items-center">
        <div className="text-center">
          <p className="text-red-500 text-lg mb-4">{error}</p>
          {id && <p className="text-slate-500">Blog ID: {id}</p>}
        </div>
      </div>
    );
  }

  if (isLoading || !minTimePassed) {
    return (
      <div className="min-h-screen bg-slate-50 flex justify-center items-center">
        <RotateLoader color="#2563eb" size={18} />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-slate-50 flex justify-center items-center">
        <p className="text-slate-500 text-lg">No blog data available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">{blog.title}</h1>
        <div className="flex items-center gap-4 text-slate-500 mb-6 text-sm">
          {blog.category && (
            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
              {blog.category}
            </span>
          )}
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            {new Date(blog.date).toLocaleDateString()}
          </div>
          <span>{blog.readTime}</span>
        </div>

        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full rounded-xl mb-8 max-h-[500px] object-cover"
            onError={(e) => {
              console.error('Image failed to load:', blog.image);
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        )}

        <div
          className="text-lg text-slate-700 leading-relaxed prose prose-slate max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetails;