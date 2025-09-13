import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Brain, BarChart3, BookOpen, Settings, Lightbulb, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <FileText className="h-12 w-12 text-accent" />,
      title: "Document Processing",
      description: "Advanced AI algorithms process educational documents, extracting key concepts, generating summaries, and creating structured learning materials from any text-based content.",
      features: ["OCR & Text Extraction", "Content Summarization", "Keyword Identification", "Multi-format Support"]
    },
    {
      icon: <Brain className="h-12 w-12 text-accent" />,
      title: "Automated Assessment Generation",
      description: "Create comprehensive assessments automatically from your content. Our AI generates questions, quizzes, and evaluations that align with learning objectives and difficulty levels.",
      features: ["Multiple Question Types", "Difficulty Calibration", "Learning Objective Mapping", "Instant Scoring"]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-accent" />,
      title: "Learning Analytics",
      description: "Comprehensive analytics dashboard providing deep insights into learning patterns, progress tracking, and performance predictions to optimize educational outcomes.",
      features: ["Progress Tracking", "Performance Prediction", "Learning Path Optimization", "Engagement Metrics"]
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-accent" />,
      title: "AI-Driven Recommendations",
      description: "Personalized study recommendations based on individual learning patterns, strengths, and areas for improvement, powered by machine learning algorithms.",
      features: ["Personalized Content", "Adaptive Difficulty", "Learning Style Analysis", "Goal-Based Planning"]
    },
    {
      icon: <BookOpen className="h-12 w-12 text-accent" />,
      title: "Content Management",
      description: "Organize, tag, and manage educational content efficiently with AI-powered categorization and intelligent search capabilities for easy retrieval.",
      features: ["Smart Categorization", "Intelligent Search", "Version Control", "Collaborative Tools"]
    },
    {
      icon: <Settings className="h-12 w-12 text-accent" />,
      title: "Platform Integration",
      description: "Seamlessly integrate with existing learning management systems and educational platforms through our comprehensive API and plugin ecosystem.",
      features: ["LMS Integration", "API Access", "Custom Plugins", "Data Synchronization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-foreground">
            Comprehensive
            <span className="text-accent"> Learning Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover our suite of AI-powered tools designed to transform educational experiences and maximize learning potential through intelligent automation and personalization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group gradient-card border-0 shadow-custom-md hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="font-heading text-xl text-foreground group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12">
            <h3 className="font-heading font-bold text-3xl mb-4 text-white">
              Ready to Transform Your Learning Experience?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of educators and students who are already benefiting from our AI-powered learning platform.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-glow">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;