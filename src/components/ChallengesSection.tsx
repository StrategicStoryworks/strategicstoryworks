import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Award, MessageSquareWarning } from "lucide-react";

const valuePropositions = [
  {
    icon: TrendingUp,
    title: "Data-Driven Strategies",
    description: "Every recommendation is backed by research and metrics, ensuring your communication efforts deliver measurable results.",
    impact: "Transform communication from guesswork to strategic advantage."
  },
  {
    icon: Users,
    title: "Customized Communication Solutions", 
    description: "We understand that every district is unique. Our solutions are tailored to your specific community, challenges, and goals.",
    impact: "Get strategies that fit your district's culture and needs perfectly."
  },
  {
    icon: Award,
    title: "Proven Methodologies",
    description: "Our frameworks are use-tested across diverse districts, from urban to rural, small to large, delivering consistent results.",
    impact: "Leverage time-tested approaches that work in real-world educational environments."
  },
  {
    icon: MessageSquareWarning,
    title: "Comprehensive Support",
    description: "From strategic planning to crisis management, we provide end-to-end communication support for every scenario.",
    impact: "One partner for all your communication needs, ensuring consistency and reliability."
  }
];

const ChallengesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Communication{" "}
            <span className="text-primary">Challenge</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            In an era of information overload and evolving educational landscapes, school districts face unprecedented communication challenges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">47.5%</div>
              <p className="text-muted-foreground">of families want weekly updates on their child's performance</p>
              <a 
                href="https://www.schoolstatus.com/wp-content/uploads/SchoolStatus-2024EducatorReport-101824.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline mt-1 block"
              >
                Source: SchoolStatus survey
              </a>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <p className="text-muted-foreground">reported receiving regular guidance on supporting academic success</p>
              <a 
                href="https://www.schoolstatus.com/resource/download-engagement-trends-in-school-family-communications" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline mt-1 block"
              >
                Source: National SchoolStatus K-12 Family Communication Survey
              </a>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">83%</div>
              <p className="text-muted-foreground">of school communicators report struggle with message overload</p>
              <a 
                href="https://www.datiak12.io/research/article/15742490/from-crisis-to-connection-new-report-shows-school-districts-are-reshaping-communication-strategies-in-a-postpandemic-world" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline mt-1 block"
              >
                Source: NSPRA 2024 Profile of a School Communicator
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {valuePropositions.map((proposition, index) => (
            <Card key={index} className="h-full border-0 shadow-lg hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <proposition.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {proposition.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {proposition.description}
                </p>
                <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                  <p className="text-primary font-medium text-sm">
                    {proposition.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our Promise
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Strategic Storyworks helps bridge the communication gap, transforming how school districts connect, engage, and inspire their communities.
          </p>
          <Button 
            variant="default" 
            size="lg"
            onClick={() => window.open('https://calendar.app.google/EMk7kaYZYQZBvcJN9', '_blank')}
          >
            Schedule Your Communication Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
