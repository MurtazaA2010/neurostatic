"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "components/ui/button";
import { Card } from "components/ui/card";
import { ArrowLeft, Calendar, Clock, CheckCircle } from "lucide-react";
import ScrollReveal from "components/ScrollReveal";
import Navbar from "components/indexComponents/Navbar";
import "App.css";
import "Index.css";

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  year: string;
  duration: string;
  client: string;
  image: string;
  description: string;
  solution: string;
  results: string[];
  testimonial?: {
    content: string;
    author: string;
    position: string;
  };
}

const CaseStudyDetail = ({ initialData }: { initialData: CaseStudy }) => {
  const [study, setStudy] = useState<CaseStudy>(initialData);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Case study not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />

      {/* Back Button */}
      <div className="container mx-auto px-6 pt-24">
        <ScrollReveal delay={200}>
          <Button variant="outline" asChild className="mb-8">
            <Link href="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>
        </ScrollReveal>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={300}>
            <div className="mb-8">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {study.industry}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {study.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Year: {study.year}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Duration: {study.duration}</span>
              </div>
              <div>
                <span>Client: {study.client}</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <div className="rounded-xl overflow-hidden shadow-2xl mb-12">
              <img src={study.image} alt={study.title} className="w-full h-96 object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <ScrollReveal delay={200}>
            <Card className="p-8 shadow-lg border-0 bg-white">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-lg text-gray-700">{study.description}</p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Card className="p-8 shadow-lg border-0 bg-white">
              <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
              <p className="mb-6 text-gray-700">{study.solution}</p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <Card className="p-8 shadow-lg border-0 bg-white">
              <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
              <div className="space-y-4">
                {Array.isArray(study.results) &&
                  study.results.map((result, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
              </div>
            </Card>
          </ScrollReveal>

          {study.testimonial && study.testimonial.content && (
            <ScrollReveal delay={600}>
              <Card className="p-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
                <h2 className="text-2xl font-bold mb-6">Client Testimonial</h2>
                <blockquote className="text-lg italic text-gray-700 mb-6">
                  "{study.testimonial.content}"
                </blockquote>
                <div className="text-blue-600 font-semibold">
                  — {study.testimonial.author}, {study.testimonial.position}
                </div>
              </Card>
            </ScrollReveal>
          )}

          <ScrollReveal delay={700}>
            <Card className="p-8 shadow-lg border-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-blue-100 mb-6">Let’s discuss how we can help transform your business.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/consultation">Schedule Consultation</Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-6 text-slate-400">
          <ScrollReveal delay={200}>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">N</span>
                  </div>
                  <span className="text-xl font-bold text-white">NeuroStatic</span>
                </div>
                <p>Premium web services for modern businesses.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><Link href="/services">Website Development</Link></li>
                  <li><Link href="/services">Website Maintenance</Link></li>
                  <li><Link href="/services">AI Integration</Link></li>
                  <li><Link href="/consultation">Consultation</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/case-studies">Case Studies</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Newsletter</h4>
                <p className="mb-4">Stay updated with our latest projects and insights.</p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white placeholder-slate-400"
                />
                <Button className="w-full mt-3 bg-gradient-to-r from-blue-600 to-indigo-600">Subscribe</Button>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="border-t border-slate-800 mt-8 pt-8 text-center">
              <p>&copy; 2025 NeuroStatic. All rights reserved.</p>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudyDetail;
