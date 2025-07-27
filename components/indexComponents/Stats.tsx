
import ScrollReveal from "components/ScrollReveal";
const Stats = ()=>{
    return (
         <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <ScrollReveal delay={200}>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Websites Delivered</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={600}>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={800}>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    )
}

export default Stats