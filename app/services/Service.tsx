"use client";
import { useState, useEffect } from "react";
import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";
import { Code, Wrench, Settings, Bot, MessageCircle } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "components/ScrollReveal";
import StaggeredText from "components/StaggeredText";
import Navbar from "components/indexComponents/Navbar";
import "App.css";
import "Index.css";
import RotateLoader from "react-spinners/RotateLoader";
import Footer from "components/indexComponents/Footer";
import Head from "next/head";

const Services = () => {
  const webServices = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js. From simple landing pages to complex enterprise applications with responsive design and optimal performance.",
    },
    {
      icon: Wrench,
      title: "Web Maintenance",
      description:
        "Comprehensive website maintenance services including security updates, performance optimization, content updates, bug fixes, and technical support to keep your site running smoothly and securely.",
    },
    {
      icon: Settings,
      title: "Software Development",
      description:
        "Full-stack software solutions tailored to your business needs. Desktop applications, web platforms, and custom software systems with modern architecture, database integration, and scalable design.",
    },
  ];

  const aiServices = [
    {
      icon: Bot,
      title: "Personal AI Helper",
      description:
        "Intelligent AI assistants that help automate daily tasks, manage schedules, answer questions, provide personalized recommendations, and boost productivity through smart automation and machine learning.",
    },
    {
      icon: MessageCircle,
      title: "Website AI Chatbots",
      description:
        "Smart chatbots integrated into your website to provide 24/7 customer support, answer queries, guide users through your services, capture leads, and improve customer engagement automatically.",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery & Planning",
      description:
        "We start by understanding your business goals, target audience, and project requirements through detailed discussions and research.",
    },
    {
      step: 2,
      title: "Design & Prototyping",
      description:
        "Our design team creates wireframes and prototypes to visualize the user experience and ensure the design meets your expectations.",
    },
    {
      step: 3,
      title: "Development & Testing",
      description:
        "We build your solution using modern technologies and conduct thorough testing to ensure quality and performance.",
    },
    {
      step: 4,
      title: "Launch & Support",
      description:
        "After deployment, we provide ongoing support and maintenance to keep your application running smoothly and up-to-date.",
    },
  ];

  const [minTimePassed, setMinTimePassed] = useState(false);

  useEffect(() => {
    setMinTimePassed(false);
    const timer = setTimeout(() => setMinTimePassed(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!minTimePassed) {
    return (
      <>
        <Head>
          <title>Services - NeuroStatic</title>
          <meta name="description" content="Explore our comprehensive suite of web and AI services designed to elevate your online presence and drive business growth." />
        </Head>
        <div className="min-h-screen bg-slate-50 flex justify-center items-center">
          <RotateLoader color="#2563eb" size={18} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Services - NeuroStatic</title>
          <meta name="description" content="Explore our comprehensive suite of web and AI services designed to elevate your online presence and drive business growth." />
        </Head>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <Navbar />

          {/* Hero Section */}
          <section className="container mx-auto px-6 pt-32 pb-20 text-center">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal delay={300}>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <StaggeredText
                    text="Our Services"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                  />
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Explore our comprehensive suite of web and AI services designed
                  to elevate your online presence and drive business growth.
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* Web Services */}
          <section className="bg-white py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <ScrollReveal delay={200}>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Web Services
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Professional web development and maintenance solutions for
                    your business needs.
                  </p>
                </ScrollReveal>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
                {webServices.map((service, index) => (
                  <ScrollReveal key={service.title} delay={300 + index * 100}>
                    <Card className="text-center p-6 shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300 h-full">
                      <CardContent className="p-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* AI Services */}
          <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <ScrollReveal delay={200}>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    AI Services
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Cutting-edge AI solutions to automate and enhance your
                    business operations.
                  </p>
                </ScrollReveal>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {aiServices.map((service, index) => (
                  <ScrollReveal key={service.title} delay={300 + index * 100}>
                    <Card className="text-center p-6 shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300 h-full">
                      <CardContent className="p-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="bg-white py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <ScrollReveal delay={200}>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Our Process
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    We follow a proven process to deliver high-quality solutions
                    tailored to your needs.
                  </p>
                </ScrollReveal>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {processSteps.map((step, index) => (
                  <ScrollReveal key={step.title} delay={300 + index * 100}>
                    <Card className="text-center p-6 shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold">
                            {step.step}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
            <div className="container mx-auto px-6 text-center">
              <ScrollReveal delay={200}>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Let's discuss your project and create something amazing
                  together.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                    asChild
                  >
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Footer */}
            <Footer></Footer>
        </div>
      </>
    );
  }
};

export default Services;
