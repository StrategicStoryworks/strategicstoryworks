import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Heart, Award, Zap, Globe, Users } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "We Understand the Stakes",
    description: "With experience managing high-pressure media situations and crisis communications, we know how quickly situations can escalate—and how to prevent that from happening."
  },
  {
    icon: Heart,
    title: "Kids Come First",
    description: "Every strategy we develop starts with student welfare. We help you communicate in ways that strengthen public education and support student success."
  },
  {
    icon: Award,
    title: "Proven Expertise",
    description: "Award-winning professionals with journalism, crisis counseling, and school communications backgrounds who understand your unique challenges."
  },
  {
    icon: Zap,
    title: "Flexible Partnership",
    description: "Whether you need embedded support, project-based help, or ongoing strategic guidance, we adapt our services to your district's needs and budget."
  },
  {
    icon: Globe,
    title: "National Reach, Local Focus",
    description: "We serve districts nationwide while understanding that every community is unique. Your local context shapes every recommendation we make."
  },
  {
    icon: Users,
    title: "Public Education Champions",
    description: "We're passionate advocates for public schools who understand the vital role they play in our communities and our democracy."
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
              Ready to Transform Your Communications?
            </h3>
            <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
              Your district's story matters. Your students deserve communications that support their success. 
              Your community needs to understand the incredible work happening in public schools every day.
            </p>
            <p className="text-lg mb-8 opacity-80">
              Let's talk about how Strategic Storyworks can help you tell that story with clarity, confidence, and care.
            </p>
            <Button variant="accent" size="lg" className="text-lg px-8 py-6">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;