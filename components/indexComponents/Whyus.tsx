import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";
import { Badge } from "components/ui/badge";
import {  Zap, Users, Star , Rocket} from "lucide-react";
import ScrollReveal from "components/ScrollReveal";
import StaggeredText from "components/StaggeredText";

const WhyUs = () => {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal delay={300}>
              <StaggeredText 
                text="Why Choose NeuroStatic?" 
                className="text-4xl font-bold text-white mb-4"
                delay={500}
              />
            </ScrollReveal>
            <ScrollReveal delay={800}>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                We combine technical expertise with creative vision to deliver exceptional results
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={400} direction="up">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Client-First, End-to-End Partnership </h3>
                <p className="text-blue-100">
                Transparent, fast, and reliable. We’re your long-term tech partner — not just a vendor.

</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600} direction="up">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4"> Scalable Modern Web Apps</h3>
                <p className="text-blue-100">
                Fast, responsive, SEO-friendly websites using cutting-edge tech like Next.js and Tailwind.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={800} direction="up">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4"> AI-Powered Business Solutions</h3>
                <p className="text-blue-100">
                Custom-built AI models that automate, predict, and optimize — designed specifically for your business needs.                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    )
}

export default WhyUs