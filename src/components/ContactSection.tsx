import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get in{" "}
            <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to strengthen your district's communications? Let's start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Email Us</h3>
              <p className="text-muted-foreground mb-4">
                Send us a message and we'll respond within 24 hours.
              </p>
              <a 
                href="mailto:hello@strategicstory.works"
                className="text-primary hover:text-primary-glow font-semibold transition-colors"
              >
                hello@strategicstory.works
              </a>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Location</h3>
              <p className="text-muted-foreground mb-4">
                Serving districts nationwide from our NY tri-state area headquarters.
              </p>
              <p className="text-primary font-semibold">
                New York Tri-State Area
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Our Commitment
              </h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Strategic Storyworks is dedicated to strengthening public education through excellent communications. 
              We believe every child deserves access to quality public schools, and every district deserves 
              communications support that reflects that commitment.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.location.href = 'mailto:hello@strategicstory.works'}
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;