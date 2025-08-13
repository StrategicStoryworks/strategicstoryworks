import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Heart, Award, Zap, Globe, Users } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Data-Driven Excellence",
    description: "Every strategy we develop is backed by research, analytics, and proven methodologies. We transform communication from guesswork to strategic advantage."
  },
  {
    icon: Heart,
    title: "Educational Focus",
    description: "We specialize exclusively in educational communications, bringing deep understanding of district dynamics, stakeholder needs, and community expectations."
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Our methodologies have been tested across diverse districts, delivering consistent results and measurable improvements in communication effectiveness."
  },
  {
    icon: Zap,
    title: "Customized Solutions",
    description: "We understand that every district is unique. Our solutions are tailored to your specific community, challenges, budget, and goals."
  },
  {
    icon: Globe,
    title: "Comprehensive Support",
    description: "From strategic planning to crisis management, we provide end-to-end communication support, ensuring consistency and reliability across all initiatives."
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We work as an extension of your team, building internal capacity while providing expert guidance and support when you need it most."
  }
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-muted/20 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Strategic Storyworks?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We bring together expertise, passion, and proven results to serve the unique needs of educational leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card key={index} className="h-full border-0 shadow-lg hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your District's Communication?
            </h3>
            <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
              Your district deserves communication strategies that work. Your community needs clear, consistent messaging 
              that builds trust and supports educational excellence.
            </p>
            <p className="text-lg mb-8 opacity-80">
              Let's discuss how Strategic Storyworks can help you bridge the communication gap and transform your district's storytelling.
            </p>
            <Button 
              variant="accent" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open('https://calendar.app.google/EMk7kaYZYQZBvcJN9', '_blank')}
            >
              Schedule Your Communication Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;