"use client"
import { useEffect, useRef, useState, use } from "react";
import { Button } from "components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { Input } from "components/ui/input";
import { Textarea } from "components/ui/textarea";
import { Label } from "components/ui/label";
import { Mail, Phone, MapPin, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "components/ScrollReveal";
import StaggeredText from "components/StaggeredText";
import emailjs from "@emailjs/browser";
import RotateLoader from "react-spinners/RotateLoader";
import "App.css"
import "Index.css"


const Contact = () => {
  
const [minTimePassed, setMinTimePassed] = useState(false);
useEffect(() => {
  setMinTimePassed(false);
  const timer = setTimeout(() => setMinTimePassed(true), 1500);
  return () => clearTimeout(timer);
}, []);

  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);

    emailjs
      .sendForm(
        "service_9bqefm2",
        "template_aybeyky",
        formRef.current,
        "eZfyDVkXR1CYMc6qo"
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("Email send error:", error);
        alert("Failed to send message. Please try again.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  if (!minTimePassed) {
    return (
      <div className="min-h-screen bg-slate-50 flex justify-center items-center">
        <RotateLoader color="#2563eb" size={18} />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <nav className="container mx-auto px-6 py-4">
        <ScrollReveal direction="down">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href="/">              
                <img src="logo.png" alt="" width={"200px"}/>
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Get Started
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </nav>

      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={300}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <StaggeredText text="Get In Touch" className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" />
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to transform your digital presence? Let's discuss your project and create something amazing together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ScrollReveal delay={300} direction="left">
            <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-3xl font-bold text-gray-900">Send us a message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="p-0">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input name="name" id="name" type="text" required placeholder="Your full name" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input name="email" id="email" type="email" required placeholder="your@email.com" className="mt-2" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input name="company" id="company" type="text" placeholder="Your company name" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea name="message" id="message" required placeholder="Tell us about your project..." className="mt-2 min-h-[120px]" />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg py-6"
                    disabled={sending}
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal delay={500} direction="right">
              <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                      <p className="text-gray-600">hello@neurostatic.com</p>
                      <p className="text-gray-600">support@neurostatic.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-500 text-sm">Mon-Fri 9AM-6PM PST</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                      <p className="text-gray-600">123 Innovation Drive</p>
                      <p className="text-gray-600">San Francisco, CA 94105</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                      <p className="text-gray-600">Saturday: 10AM - 4PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal delay={200}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Quick answers to common questions about our services
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={300} direction="left">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does it take to build a website?</h3>
                  <p className="text-gray-600">Typically 2-6 weeks depending on complexity and requirements. We'll provide a detailed timeline during consultation.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer ongoing maintenance?</h3>
                  <p className="text-gray-600">Yes! We offer comprehensive maintenance packages to keep your website secure, updated, and performing optimally.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What's included in your web services?</h3>
                  <p className="text-gray-600">Our services include custom design, development, SEO optimization, responsive design, security setup, and performance optimization.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500} direction="right">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you work with small businesses?</h3>
                  <p className="text-gray-600">Absolutely! We work with businesses of all sizes, from startups to enterprises, and tailor our solutions to fit your budget.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can you redesign an existing website?</h3>
                  <p className="text-gray-600">Yes, we specialize in website redesigns and can modernize your existing site while preserving what works well.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What about mobile optimization?</h3>
                  <p className="text-gray-600">All our websites are fully responsive and optimized for mobile devices, tablets, and desktops from the ground up.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
