import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";
import { ArrowRight, Code, Palette, Zap, Users, Star, CheckCircle } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "components/ScrollReveal";
import StaggeredText from "components/StaggeredText";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Index = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    

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
                  Premium Web/AI services for modern businesses. Transform your digital presence with our expert solutions.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><Link href="/services" className="hover:text-white transition-colors">Website Development</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Website Maintenance</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Web Optimization</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Consultation</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/case-studies" className="hover:text-white transition-colors">Our Work</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Newsletter</h4>
                <p className="text-slate-400 mb-4">Stay updated with our latest news and insights.</p>
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
          <ScrollReveal delay={300}>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="p-2  rounded-lg hover:bg-slate-700 transition-colors" style={{backgroundColor: "#69cbd8"}}>
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2  rounded-lg hover:bg-slate-700 transition-colors" style={{backgroundColor: "#69cbd8"}}>
                <Github size={20} />
              </a>
              <a href="#" className="p-2  rounded-lg hover:bg-slate-700 transition-colors" style={{backgroundColor: "#69cbd8"}}>
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2  rounded-lg hover:bg-slate-700 transition-colors" style={{backgroundColor: "#69cbd8" }}>
                <Mail size={20} />
              </a>
            </div>
            <p className="text-slate-400 text-sm">
                neurostatic25.com
            </p>
          </div>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
              <p>&copy; 2025 NeuroStatic. All rights reserved.</p>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  );
};

export default Index;
