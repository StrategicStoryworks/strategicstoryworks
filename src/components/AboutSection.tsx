import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Newspaper, Heart, Globe, GraduationCap, Shield } from "lucide-react";

const approaches = [
  {
    icon: Award,
    text: "Precision: Data-backed communication strategies"
  },
  {
    icon: Newspaper,
    text: "Customization: Tailored solutions for unique district needs"
  },
  {
    icon: Heart,
    text: "Collaboration: Partnership-driven approach"
  },
  {
    icon: Globe,
    text: "Innovation: Cutting-edge communication techniques"
  },
  {
    icon: GraduationCap,
    text: "Deep understanding of school district dynamics"
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Story
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Strategic Storyworks was born from a fundamental understanding: communication is the cornerstone of educational success. 
            We empower school districts with strategic, impactful communication that builds community trust, enhances student success, and amplifies district achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              To empower school districts with strategic, impactful communication that builds community trust, 
              enhances student success, amplifies district achievements, and bridges communication gaps. 
              Our team brings decades of combined experience with a proven track record of transforming communication challenges.
            </p>
            <Button variant="hero" size="lg">
              Let's Talk
            </Button>
          </div>

          <Card className="shadow-elegant border-0">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-foreground">Our Approach</h4>
              </div>
              <div className="space-y-4">
                {approaches.map((approach, index) => {
                  const IconComponent = approach.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {approach.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our Expertise Areas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              "Strategic Communication Planning",
              "Crisis Communication Management", 
              "Community Engagement",
              "Social Media Strategy",
              "Reputation Management",
              "Emergency Communication",
              "Program Launch Communications",
              "Bond Campaign Support"
            ].map((expertise, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-primary/10">
                <p className="text-sm font-medium text-foreground">{expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;