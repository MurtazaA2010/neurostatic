'use client';

import { TypeAnimation } from 'react-type-animation';
import { Button } from "components/ui/button";
import { Badge } from "components/ui/badge";
import ScrollReveal from "components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import Link from 'next/link'; 

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center w-full px-6 text-center  relative">
      {/* Adjust the 'pt-16' value to move content higher or lower */}
      <div className="max-w-4xl mx-auto relative -translate-y-16">
        {/* Badge */}
        <ScrollReveal delay={300}>
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
            🚀 Developing Websites That Convert
          </Badge>
        </ScrollReveal>

        {/* Headline with Typing Animation */}
        <ScrollReveal delay={600}>
            <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <div>Premium Web Services for</div>
                <div className="text-blue-600">
                    <TypeAnimation
                        sequence={[
                        'Modern Businesses',
                        1000,
                        'E-Commerce Brands',
                        1000,
                        "Personal Brands",
                        1000,
                        'Startups',
                        1000,
                        ]}
                        speed={20}
                        wrapper="span"
                        repeat={Infinity}
                    />
                </div>
            </div>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={900}>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your digital presence with NeuroStatic's expert website building, maintenance, and web services. 
            We create stunning, high-performance websites that drive results.
          </p>
        </ScrollReveal>

        {/* Buttons */}
        <ScrollReveal delay={1200} direction="up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 font-mono"
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button></Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="text-lg px-8 font-mono ">
                Our Case Studies
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;