import { CheckCircle, Users, Target, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Personalized Learning",
      description: "Every student learns differently. Our AI adapts to individual learning styles, pace, and preferences to create truly personalized educational experiences."
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Precision Analytics",
      description: "Advanced analytics provide deep insights into learning patterns, helping educators and students make data-driven decisions for optimal outcomes."
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Intelligent Automation",
      description: "Automated assessment generation and content processing save valuable time while maintaining the highest standards of educational quality."
    }
  ];

  const stats = [
    { number: "50K+", label: "Students Engaged" },
    { number: "95%", label: "Learning Improvement" },
    { number: "40+", label: "Educational Partners" },
    { number: "24/7", label: "AI Support Available" }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-foreground">
            Revolutionizing Education Through
            <span className="text-accent"> Intelligent Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're building the future of adaptive learning, where artificial intelligence meets educational excellence to create unprecedented learning opportunities for students worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="font-heading font-bold text-3xl md:text-4xl text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="gradient-card border-0 shadow-custom-md hover:shadow-custom-lg transition-smooth animate-slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white text-center animate-fade-in-up">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-heading font-bold text-3xl mb-6">Our Mission</h3>
            <p className="text-xl leading-relaxed mb-8">
              To democratize quality education by harnessing the power of artificial intelligence, making personalized learning accessible to every student, regardless of their background or learning style.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-accent" />
                <span>Evidence-Based Learning</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-accent" />
                <span>Continuous Innovation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-accent" />
                <span>Inclusive Education</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-accent" />
                <span>Global Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;