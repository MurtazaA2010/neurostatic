"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, User } from "lucide-react";

import Navbar from "components/indexComponents/Navbar";
import Footer from "components/indexComponents/Footer";
import RotateLoader from "react-spinners/RotateLoader";
import "App.css";
import "Index.css";

const categories = ["All", "Architecture", "Technology", "Philosophy", "Work", "Culture", "Design"];

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer;
    async function fetchBlogs() {
      setLoading(true);
      try {
        const res = await fetch("/api/blog");
        const data = await res.json();
        setBlogs(data.blogs || []);
      } catch (error) {
        setBlogs([]);
      } finally {
        timer = setTimeout(() => setLoading(false), 1000);
      }
    }
    fetchBlogs();
    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = blogs;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {loading ? (
        <div className="flex-1 flex items-center justify-center min-h-[60vh]">
          <RotateLoader color="#2563eb" size={18} />
        </div>
      ) : (
        <main className="flex-1 container mx-auto px-4 py-8">
          {/* Newsletter Subscription Section */}
          <section className="relative overflow-hidden bg-black p-8 rounded-2xl mb-10 border border-border/50 backdrop-blur-sm">
  {/* Background decoration */}
  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 pointer-events-none"></div>
  <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
  <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

  <div className="relative z-10 max-w-2xl mx-auto text-center">
    {/* Header */}
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-white mb-4">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
        </svg>
        Newsletter
      </div>
      <h2 className="text-3xl font-bold text-white mb-3">
        Stay in the loop
      </h2>
      <p className="text-gray-400 text-lg">
        Get the latest insights and updates delivered straight to your inbox
      </p>
    </div>

    {/* Form */}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const email = e.target.email.value;
        alert(`Subscribed with ${email}`);
        e.target.reset();
      }}
      className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
    >
      <div className="relative flex-1 w-full">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email address"
          className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white rounded-xl focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 placeholder:text-gray-400"
        />
      </div>

      <button
        type="submit"
        className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 focus:ring-2 focus:ring-primary/40 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl w-full sm:w-auto group"
      >
        <span className="flex items-center gap-2">
          Subscribe
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </button>
    </form>

    {/* Trust indicators */}
    <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
        No spam
      </div>
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
        Unsubscribe anytime
      </div>
    </div>
  </div>
</section>


          {/* Blog Section */}
          <h1 className="text-4xl font-bold mb-8 text-center">Blogs</h1>
          {filteredPosts.length === 0 ? null : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post: any) => (
                <article
                  key={post._id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif text-slate-800 mb-3 leading-tight hover:text-amber-600 transition-colors">
                      <Link href={`/blogs/${post._id}`}>{post.title}</Link>
                    </h3>
                    <div
                      className="text-slate-600 leading-relaxed mb-4 prose prose-slate max-w-none dark:prose-invert"
                      dangerouslySetInnerHTML={{ __html: post.description }}
                    />
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        John Doe {/* Replace with actual `post.author` if available */}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>
      )}
      <Footer />
    </div>
  );
}
