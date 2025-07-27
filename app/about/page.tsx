"use client"
import { Button } from "components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { Users, Target, Award, Zap, ArrowLeft } from "lucide-react";
import Link from "next/link"
import ScrollReveal from "components/ScrollReveal";
import StaggeredText from "components/StaggeredText";
import "App.css"
import "index.css"
import Navbar from "components/indexComponents/Navbar";

const About = () => {
  const teamMembers = [
    {
      name: "Murtaza",
      role: "CEO & Founder",
      image: "/placeholder.svg",
      description: "5+ years of experience in web development"
    },
    
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to helping businesses succeed online with cutting-edge web solutions."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We build lasting partnerships, not just websites."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver premium quality in every project, exceeding expectations consistently."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of trends, using the latest technologies to give you a competitive edge."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      \<Navbar></Navbar>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={300}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <StaggeredText text="About NeuroStatic" className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" />
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={600}>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're a passionate team of Web Deveopers and AI Developers who are working on making a onlinne presence easy for every brands and businesses.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <ScrollReveal delay={300} direction="left">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 text-lg">
                NeuroStatic was founded in 2025 by Murtaza Abdullah with a simple yet powerful vision:
                to give every business a meaningful online presence and to make AI accessible to all.
              </p>
              <p className="text-gray-600 mb-6">
                In a world where technology is advancing faster than ever, we saw a gap — small and medium-sized businesses were struggling to keep up with digital trends, while artificial intelligence remained a luxury accessible to only a few. We set out to change that.

What started as a small initiative has grown into a movement. NeuroStatic is more than just a company — it’s a platform where innovation meets impact. We build intuitive, efficient, and affordable solutions in web development and artificial intelligence that empower businesses to grow, adapt, and lead in the digital age.

From designing stunning websites to integrating intelligent automation and AI tools, we work with one goal in mind:
to unlock the potential of technology for everyone — not just the big players.

Today, NeuroStatic stands at the intersection of creativity, code, and community. We’re proud to serve startups, entrepreneurs, and enterprises who believe in the power of transformation.

And this is just the beginning.
We’re building the future — one line of code, one idea, and one empowered business at a time.
              </p>
              <Link href="/case-studies">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                View Our Work
              </Button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500} direction="right">
            <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
                    <div className="text-gray-600">Support Available</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal delay={200}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={300 + index * 100}>
                <Card className="text-center p-6 shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <ScrollReveal delay={200}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The individuals behind NeuroStatic's success
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.name} delay={300 + index * 100}>
              <Card className="text-center p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="w-24 h-24 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                asChild
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <Link href="/services">View Services</Link>
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
                  <li><Link href="/services" className="hover:text-white transition-colors">Web Optimization</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Consultation</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/" className="hover:text-white transition-colors">Our Work</Link></li>
                  <li><Link href="/" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>hello@neurostatic.com</li>
                  <li>+1 (555) 123-4567</li>
                  <li>San Francisco, CA</li>
                </ul>
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

export default About;