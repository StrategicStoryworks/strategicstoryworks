import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, AlertCircle, Users, Shield, Share2, FileText, 
  Phone, Search, Globe, MessageSquare, Handshake, Star,
  Briefcase, Calendar, Award, Lightbulb, TrendingUp, 
  BookOpen, Camera, DollarSign, Building, Settings,
  PenTool, BarChart, Megaphone, Network, Zap
} from "lucide-react";

const serviceCategories = [
  {
    title: "Strategic Communication Services",
    services: [
      {
        icon: Target,
        title: "Strategic Communication Planning",
        description: "Develop a holistic, long-term communication strategy aligned with district goals and community needs."
      },
      {
        icon: Search,
        title: "Communication Audit",
        description: "Comprehensively assess current communication practices, effectiveness, and areas for improvement."
      },
      {
        icon: Users,
        title: "Stakeholder Engagement Strategy",
        description: "Create targeted approaches to effectively communicate with diverse district stakeholders."
      }
    ]
  },
  {
    title: "Crisis and Emergency Communication",
    services: [
      {
        icon: AlertCircle,
        title: "Crisis Communication Management",
        description: "Develop proactive and reactive communication protocols for potential district-wide emergencies and challenges."
      },
      {
        icon: Calendar,
        title: "Emergency Communication Planning",
        description: "Design comprehensive communication frameworks for rapid, clear information dissemination during critical incidents."
      },
      {
        icon: Shield,
        title: "Reputation Management",
        description: "Develop strategies to protect, maintain, and enhance the district's public image and community perception."
      }
    ]
  },
  {
    title: "Digital and Traditional Media Strategies",
    services: [
      {
        icon: Share2,
        title: "Social Media Strategy",
        description: "Create comprehensive social media communication plans that engage community members across multiple platforms."
      },
      {
        icon: FileText,
        title: "Print and Digital Campaign Development",
        description: "Design integrated marketing campaigns that effectively communicate district initiatives, programs, and achievements."
      },
      {
        icon: Phone,
        title: "Media Relations Management",
        description: "Develop and maintain positive relationships with local, regional, and national media outlets."
      },
      {
        icon: MessageSquare,
        title: "Internal Communication Strategy",
        description: "Create communication frameworks to improve information flow between district departments and staff."
      }
    ]
  },
  {
    title: "Community and Engagement Services",
    services: [
      {
        icon: Handshake,
        title: "Community Engagement Campaigns",
        description: "Design targeted initiatives to increase community involvement and support for district programs."
      },
      {
        icon: Star,
        title: "Parent and Family Communication Enhancement",
        description: "Develop strategies to improve communication and engagement with families and support student success."
      },
      {
        icon: Globe,
        title: "Multicultural and Multilingual Communication",
        description: "Create inclusive communication strategies that effectively reach diverse community populations."
      }
    ]
  },
  {
    title: "Special Project Communications",
    services: [
      {
        icon: DollarSign,
        title: "Bond Campaign Communication",
        description: "Develop comprehensive communication strategies to support bond initiatives and secure community support."
      },
      {
        icon: Lightbulb,
        title: "Program Launch Communications",
        description: "Create strategic communication plans for introducing new educational programs, initiatives, or district-wide changes."
      },
      {
        icon: Calendar,
        title: "Event Planning and Communication",
        description: "Design and execute communication strategies for district-wide events, ceremonies, and special occasions."
      }
    ]
  },
  {
    title: "Specialized Communication Services",
    services: [
      {
        icon: AlertCircle,
        title: "Dis/Misinformation Management",
        description: "Develop proactive strategies to address and mitigate the spread of inaccurate information about the district."
      },
      {
        icon: Award,
        title: "Brand Development and Management",
        description: "Create and maintain a consistent, compelling district brand identity across all communication channels."
      },
      {
        icon: BarChart,
        title: "Annual Report and Impact Communication",
        description: "Design comprehensive reports and communication pieces that highlight district achievements and impact."
      }
    ]
  },
  {
    title: "Technology and Innovation",
    services: [
      {
        icon: Settings,
        title: "Communication Technology Evaluation",
        description: "Assess and recommend communication technologies to improve district-wide communication efficiency."
      },
      {
        icon: Zap,
        title: "Digital Transformation Strategy",
        description: "Guide districts in modernizing communication approaches and leveraging digital communication tools."
      }
    ]
  },
  {
    title: "Professional Development",
    services: [
      {
        icon: BookOpen,
        title: "Communication Team Training",
        description: "Provide workshops, training, and professional development for district communication staff."
      },
      {
        icon: Briefcase,
        title: "Leadership Communication Coaching",
        description: "Offer communication skill development for district leadership and key administrators."
      }
    ]
  },
  {
    title: "Specialized Research and Analysis",
    services: [
      {
        icon: TrendingUp,
        title: "Communication Effectiveness Research",
        description: "Conduct surveys, focus groups, and data analysis to measure communication impact and effectiveness."
      },
      {
        icon: BarChart,
        title: "Community Sentiment Analysis",
        description: "Develop ongoing monitoring and analysis of community perceptions and communication effectiveness."
      }
    ]
  },
  {
    title: "Partnership and Collaboration",
    services: [
      {
        icon: Building,
        title: "Industry and Community Partnership Communication",
        description: "Develop communication strategies to build and maintain relationships with local businesses, organizations, and community partners."
      },
      {
        icon: Network,
        title: "Interagency Communication Support",
        description: "Create communication frameworks for effective collaboration between school districts and other educational or governmental agencies."
      }
    ]
  },
  {
    title: "Specialized Content Development",
    services: [
      {
        icon: PenTool,
        title: "Storytelling and Narrative Development",
        description: "Craft compelling narratives that highlight district achievements, student success, and educational innovation."
      },
      {
        icon: Camera,
        title: "Multimedia Content Creation",
        description: "Develop engaging video, audio, and visual content to support district communication strategies."
      },
      {
        icon: Megaphone,
        title: "Grant and Funding Communication",
        description: "Create communication strategies to support grant applications and funding initiatives."
      }
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-primary-glow/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Strategic Communication{" "}
              <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Comprehensive communication solutions designed to strengthen public education through strategic, 
              data-driven approaches that build trust and engagement.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.location.href = 'mailto:hello@strategicstory.works'}
            >
              Schedule Your Communication Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                {category.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => {
                  const IconComponent = service.icon;
                  return (
                    <Card 
                      key={serviceIndex} 
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
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your District's Communications?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's discuss how Strategic Storyworks can help strengthen your public education communications.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.location.href = 'mailto:hello@strategicstory.works'}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;