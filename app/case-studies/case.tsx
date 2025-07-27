"use client"

import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";
import ScrollReveal from "components/ScrollReveal";
import "App.css"
import "Index.css"
import { useEffect, useState } from "react";
import RotateLoader from "react-spinners/RotateLoader";
import Link from "next/link";
import Navbar from "components/indexComponents/Navbar";
const CaseStudies = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer;
    async function fetchProjects() {
      setLoading(true);
      try {
        const res = await fetch("/api/case-studies");
        const data = await res.json();
        setProjects(data.projects || []);
      } catch (error) {
        setProjects([]);
      } finally {
        timer = setTimeout(() => setLoading(false), 1000);
      }
    }
    fetchProjects();
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex justify-center items-center">
        <RotateLoader color="#2563eb" size={18} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Fixed Navigation */}
      <Navbar></Navbar>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={300}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Our Case Studies
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={600}>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore our successful projects and see how we've helped businesses transform their digital presence.
              From web development to AI integration, these case studies showcase our expertise.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((study, index) => (
            <ScrollReveal key={study._id || index} delay={200 + index * 100}>
              <Card className="group h-full shadow-lg border-0 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {study.year}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {study.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {/* Optionally render technologies if available */}
                      {Array.isArray(study.technologies) && study.technologies.map((tech) => (
                        <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Duration: {study.duration}</span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all"
                      asChild
                    >
                      <Link href={`/case-studies/${study._id || index}`}>
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal delay={200}>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our proven expertise.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                asChild
              >
                <Link href="/consultation">Schedule Consultation</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-6">
          <ScrollReveal delay={200}>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">N</span>
                  </div>
                  <span className="text-xl font-bold text-white">NeuroStatic</span>
                </div>
                <p className="text-slate-400">
                  Premium web services for modern businesses. Transform your digital presence with our expert solutions.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><Link href="/services" className="hover:text-white transition-colors">Website Development</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Website Maintenance</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">AI Integration</Link></li>
                  <li><Link href="/consultation" className="hover:text-white transition-colors">Consultation</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Newsletter</h4>
                <p className="text-slate-400 mb-4">Stay updated with our latest projects and insights.</p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
              <p>&copy; 2024 NeuroStatic. All rights reserved.</p>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudies;