import { Card, CardContent } from "components/ui/card";
import { CheckCircle, Code, Shield, Zap } from "lucide-react";
import ScrollReveal from "components/ScrollReveal";

const services = [
  {
    title: "Website Development",
    description:
      "Custom websites built with modern technologies. Responsive, fast, and optimized for search engines.",
    icon: "Code",
    gradient: "from-blue-500 to-indigo-500",
    features: ["Mobile Friendly", "SEO Optimized", "Full Stack", "Fast Loading"],
    delay: 200,
    direction: "left",
  },
  {
    title: "Website Maintenance",
    description:
      "Keep your website secure, updated, and performing at its best with our maintenance services.",
    icon: "Shield",
    gradient: "from-purple-500 to-pink-500",
    features: ["Security Updates", "Content Updates", "Performance Monitoring", "Web Optimizaton"],
    delay: 400,
  },
  {
  title: "AI Agents",
  description:
  "Smart AI agents for automating tasks, enhancing user interaction, and boosting productivity — for personal use or your website.",
  icon: "Zap",
  gradient: "from-green-500 to-teal-500",
  features: [
    "Custom AI Agent Design",
    "Task Automation & Integration",
    "Natural Language Interaction",
  ],
}
];

// Map string to actual icon components
const icons = {
  Code: Code,
  Shield: Shield,
  Zap: Zap,
};

const Service = () => {
  return (
    <section id="services" className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <ScrollReveal delay={200}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive web/AI solutions tailored to your business/brands needs
          </p>
        </ScrollReveal>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = icons[service.icon as keyof typeof icons];
          return (
            <ScrollReveal
              key={index}
              delay={service.delay}
              direction={service.direction}
            >
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:scale-105">
                <CardContent className="p-0">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
