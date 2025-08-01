import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, Users, Award, Target, TrendingUp, Heart,
  CheckCircle, Star, Lightbulb, MessageSquare
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Proven Track Record",
    description: "We've helped dozens of school districts navigate complex communication challenges, from crisis management to community engagement campaigns."
  },
  {
    icon: Users,
    title: "Education-Focused Expertise", 
    description: "Our team understands the unique challenges facing public education. We don't just apply generic communication strategies—we craft solutions specifically for school districts."
  },
  {
    icon: Award,
    title: "Data-Driven Approach",
    description: "Every strategy is backed by research and real-world data. We measure success through meaningful metrics that matter to your community."
  },
  {
    icon: Target,
    title: "Strategic Partnership",
    description: "We become an extension of your team, working collaboratively to achieve your district's communication goals and build lasting community trust."
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description: "Our clients see improved community engagement, increased trust levels, and more effective communication outcomes that support student success."
  },
  {
    icon: Heart,
    title: "Passionate About Public Education",
    description: "We believe deeply in the mission of public education. Every strategy we develop is designed to strengthen public schools and support student achievement."
  }
];

const testimonials = [
  {
    quote: "Strategic Storyworks transformed how our district communicates with families. Their data-driven approach helped us increase family engagement by 40%.",
    author: "Dr. Sarah Johnson",
    role: "Superintendent, Metro Valley School District"
  },
  {
    quote: "During our bond campaign, their strategic communication plan was instrumental in securing community support. The campaign passed with 68% approval.",
    author: "Mark Rodriguez",
    role: "Board President, Riverside Unified"
  },
  {
    quote: "Their crisis communication framework gave us confidence during challenging times. We maintained community trust when it mattered most.",
    author: "Jennifer Chen",
    role: "Communications Director, Eastside Schools"
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
              We're more than consultants—we're passionate advocates for public education with the expertise 
              to help your district communicate effectively and build lasting community trust.
            </p>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our unique combination of education expertise, strategic thinking, and proven results 
              makes us the ideal partner for your district's communication needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-glow/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Proven Results That Matter
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our strategic approach delivers measurable improvements in communication effectiveness and community engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">85%</div>
              <p className="text-muted-foreground">Average improvement in community engagement metrics</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">92%</div>
              <p className="text-muted-foreground">Client satisfaction rate across all projects</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">40+</div>
              <p className="text-muted-foreground">School districts successfully supported</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">78%</div>
              <p className="text-muted-foreground">Average increase in positive community sentiment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it—hear from the education leaders we've partnered with.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full border-0 shadow-lg hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Star className="w-5 h-5 text-primary fill-current inline mr-1" />
                    <Star className="w-5 h-5 text-primary fill-current inline mr-1" />
                    <Star className="w-5 h-5 text-primary fill-current inline mr-1" />
                    <Star className="w-5 h-5 text-primary fill-current inline mr-1" />
                    <Star className="w-5 h-5 text-primary fill-current inline" />
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Experience the Strategic Storyworks Difference?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's discuss how our proven approach can strengthen your district's communication strategy.
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