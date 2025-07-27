import ScrollReveal from "components/ScrollReveal";
import { Button } from "components/ui/button";
import { ArrowRight } from "lucide-react";
import StaggeredText from "components/StaggeredText";
import Link from "next/link";
const Cta = () =>{
    return (
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal delay={300}>
            <StaggeredText 
              text="Ready to Transform Your Web Presence?" 
              className="text-4xl font-bold text-white mb-4"
              delay={500}
            />
          </ScrollReveal>
          <ScrollReveal delay={1000}>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. Get a free consultation today.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1300} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8">
                Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
             <Link href="/services">
             <Button size="lg" variant="outline" className="text-lg px-8 border-slate-600 text-slate-300 hover:bg-slate-700">
                View our Services
              </Button></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    )
}

export default Cta;