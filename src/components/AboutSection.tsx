import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Newspaper, Heart, Globe, GraduationCap, Shield } from "lucide-react";

const credentials = [
  {
    icon: Award,
    text: "National School Public Relations Association award winner"
  },
  {
    icon: Newspaper,
    text: "Former journalist with crisis communication expertise"
  },
  {
    icon: Heart,
    text: "Certified grief counselor who understands high-stress situations"
  },
  {
    icon: Globe,
    text: "Experience with high-pressure, high-stakes media environments"
  },
  {
    icon: GraduationCap,
    text: "Deep commitment to public education excellence"
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Strategic Communications That{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Put Students First
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Strategic Storyworks, we believe public education is the cornerstone of our democracy. 
            Every communication decision we make is guided by a simple question:{" "}
            <span className="text-primary font-semibold">How does this serve the children in your care?</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Led by Michelle Carter Verna
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              An award-winning communications professional with experience managing international and national 
              media on a near-daily basis, our team brings together specialists in crisis management, 
              visual storytelling, and school communications who understand the unique pressures facing 
              today's education leaders.
            </p>
            <Button variant="hero" size="lg">
              Let's Talk
            </Button>
          </div>

          <Card className="shadow-elegant border-0">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-foreground">Our Expertise</h4>
              </div>
              <div className="space-y-4">
                {credentials.map((credential, index) => {
                  const IconComponent = credential.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {credential.text}
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
            Our Network of Specialists
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              "Crisis Communications",
              "Video Production", 
              "Graphic Design",
              "Social Media Strategy",
              "Media Relations",
              "Community Engagement",
              "Board Relations",
              "Strategic Planning"
            ].map((specialty, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-primary/10">
                <p className="text-sm font-medium text-foreground">{specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;