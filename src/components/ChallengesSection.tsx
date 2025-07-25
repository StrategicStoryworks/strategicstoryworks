import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Share2, Users, MessageSquare, Target, Zap } from "lucide-react";

const challenges = [
  {
    icon: AlertTriangle,
    title: "Crisis Communication Failures",
    description: "When emergencies strike, minutes matter. Poor crisis communication can destroy years of trust-building and put your district's reputation—and student safety—at risk."
  },
  {
    icon: Share2,
    title: "Disinformation & Misinformation Spread",
    description: "False narratives spread faster than facts on social media. You need strategic messaging that cuts through the noise with truth and transparency."
  },
  {
    icon: Users,
    title: "Board-Superintendent Relationship Breakdowns",
    description: "When board dynamics become dysfunctional, student outcomes suffer. Poor communication between leadership creates instability and damages staff morale."
  },
  {
    icon: MessageSquare,
    title: "Parent Engagement Challenges",
    description: "Fragmented communication channels leave parents overwhelmed and underinformed, weakening community support for public schools."
  },
  {
    icon: Target,
    title: "Lack of Strategic Planning",
    description: "Reactive communications put you constantly on defense. Without proactive messaging strategies, your district becomes vulnerable to external pressures."
  },
  {
    icon: Zap,
    title: "Resource Constraints & Burnout",
    description: "Communications staff are stretched thin, managing everything from social media to crisis response without strategic support."
  }
];

const ChallengesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Communication Challenges 
            <span className="text-primary block">Keeping You Up at Night</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every day, school districts face these challenges while trying to focus on what matters most: educating children.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => {
            const IconComponent = challenge.icon;
            return (
              <Card key={index} className="h-full hover:shadow-elegant transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {challenge.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {challenge.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-foreground font-medium">
            Sound familiar? You're not alone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;