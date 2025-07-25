import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Calendar, Target, Shield, Share2, Users, Rocket, FileText } from "lucide-react";

const services = [
  {
    icon: AlertCircle,
    title: "Crisis Communications",
    description: "Rapid response protocols, message templates, spokesperson training, and real-time crisis management to protect your district's reputation when it matters most."
  },
  {
    icon: Calendar,
    title: "Emergency Planning",
    description: "Comprehensive communication plans for every scenario, from weather emergencies to security incidents, ensuring your team is prepared before crisis strikes."
  },
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Long-term communication strategies aligned with your district's goals, building proactive messaging that strengthens community support for public education."
  },
  {
    icon: Shield,
    title: "Reputation Management",
    description: "Monitoring, responding to, and shaping your district's online presence to ensure accurate information reaches your stakeholders first."
  },
  {
    icon: Share2,
    title: "Social Media Campaigns",
    description: "Engaging content strategies that showcase student achievements, highlight excellent teaching, and build pride in your public schools."
  },
  {
    icon: Users,
    title: "Employee Appreciation",
    description: "Internal communication strategies that boost morale, reduce turnover, and help your team feel valued during challenging times."
  },
  {
    icon: Rocket,
    title: "Program Launches",
    description: "Coordinated rollouts for new initiatives that build stakeholder buy-in and ensure your innovations get the recognition they deserve."
  },
  {
    icon: FileText,
    title: "Print Campaigns",
    description: "Traditional outreach materials that reach every family, ensuring equitable access to important district information regardless of digital connectivity."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How We Support Your{" "}
            <span className="text-primary">District's Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive communication services designed specifically for the unique challenges facing today's educational leaders.
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