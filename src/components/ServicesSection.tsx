import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Calendar, Target, Shield, Share2, Users, Rocket, FileText } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Strategic Communication Planning",
    description: "Comprehensive long-term communication strategies aligned with your district's goals and community needs."
  },
  {
    icon: AlertCircle,
    title: "Crisis Communication Management",
    description: "Rapid response protocols and crisis preparation to protect your district's reputation when it matters most."
  },
  {
    icon: Calendar,
    title: "Emergency Communication Planning",
    description: "Comprehensive communication plans for every emergency scenario, ensuring your team is prepared before crisis strikes."
  },
  {
    icon: Users,
    title: "Community Engagement Campaigns",
    description: "Strategic outreach that builds lasting relationships between your district and the communities you serve."
  },
  {
    icon: Shield,
    title: "Reputation Management",
    description: "Monitoring, responding to, and shaping your district's online presence to ensure accurate information reaches stakeholders first."
  },
  {
    icon: Share2,
    title: "Social Media Strategy",
    description: "Engaging content strategies that showcase student achievements, highlight excellent teaching, and build community pride."
  },
  {
    icon: FileText,
    title: "Print and Digital Campaigns",
    description: "Multi-channel outreach materials that ensure equitable access to important district information."
  },
  {
    icon: Rocket,
    title: "Program Launch Communications",
    description: "Coordinated rollouts for new initiatives that build stakeholder buy-in and ensure your innovations get recognition."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Communication{" "}
            <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic, data-driven communication services designed to transform how your district connects with its community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="h-full hover:shadow-elegant transition-all duration-300 border-0 shadow-md hover:scale-105 transform"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;