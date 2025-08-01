import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, Award, Target, Heart, Lightbulb, Shield,
  Network, Briefcase, MessageSquare, CheckCircle
} from "lucide-react";

const reasons = [
  {
    icon: Network,
    title: "Network of Seasoned Professionals",
    description: "We're a carefully curated network of communication experts, each bringing years of specialized experience in education, public relations, and strategic communications."
  },
  {
    icon: Users,
    title: "Education-Focused Expertise", 
    description: "Our team understands the unique challenges facing public education. We don't apply generic strategies—we craft solutions specifically for school districts and educational organizations."
  },
  {
    icon: Award,
    title: "Proven Professional Background",
    description: "Our network includes former superintendents, communications directors, PR professionals, and education advocates who bring real-world experience to every project."
  },
  {
    icon: Target,
    title: "Strategic Partnership Approach",
    description: "We work as an extension of your team, collaborating closely to understand your district's unique context, challenges, and goals before developing tailored solutions."
  },
  {
    icon: Heart,
    title: "Genuine Commitment to Public Education",
    description: "We believe deeply in the mission of public education. Every strategy we develop is designed to strengthen public schools and support student success."
  },
  {
    icon: Shield,
    title: "Comprehensive Service Range",
    description: "From crisis communication to community engagement, brand development to digital strategy—our network covers the full spectrum of communication needs."
  },
  {
    icon: Briefcase,
    title: "Professional Excellence",
    description: "We maintain high standards in every project, bringing professional rigor, ethical practices, and quality outcomes to all our communication work."
  },
  {
    icon: CheckCircle,
    title: "Transparent and Collaborative",
    description: "We believe in clear communication about our processes, realistic timelines, and honest assessments of what communication strategies can and cannot achieve."
  }
];

const WhyUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-primary-glow/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Why Choose{" "}
              <span className="text-primary">Strategic Storyworks?</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We're a network of experienced communication professionals dedicated to supporting public education 
              through strategic, thoughtful, and effective communication solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Sets Our Network Apart
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We bring together talented professionals who understand education and excel at communication. 
              Our collaborative approach ensures you get the right expertise for your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Card 
                  key={index} 
                  className="h-full hover:shadow-elegant transition-all duration-300 border-0 shadow-md hover:scale-105 transform"
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground leading-tight">
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-glow/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Professional Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              We combine strategic thinking with practical execution, always keeping your district's 
              unique context and goals at the center of our work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Strategic Thinking</h3>
              <p className="text-muted-foreground leading-relaxed">
                We start with understanding your goals, challenges, and community context before developing 
                communication strategies that align with your district's mission.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Clear Communication</h3>
              <p className="text-muted-foreground leading-relaxed">
                We practice what we preach—maintaining transparent, regular communication throughout our 
                partnership so you always know what to expect.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Results-Focused</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our work is designed to achieve meaningful outcomes that support your district's 
                communication goals and strengthen community relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Work with Our Professional Network?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's discuss how our network of communication professionals can support your district's goals.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.location.href = 'mailto:hello@strategicstory.works'}
            >
              Start the Conversation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyUs;