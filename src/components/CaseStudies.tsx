import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Users, Clock, Award } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "University of Innovation",
      category: "Higher Education",
      challenge: "Improving student engagement and learning outcomes in large lecture courses",
      solution: "Implemented AI-driven personalized learning paths and automated assessment generation",
      results: [
        { metric: "Student Engagement", value: "+85%", icon: <Users className="h-4 w-4" /> },
        { metric: "Learning Retention", value: "+67%", icon: <TrendingUp className="h-4 w-4" /> },
        { metric: "Time Saved", value: "40hrs/week", icon: <Clock className="h-4 w-4" /> }
      ],
      tags: ["AI Analytics", "Document Processing", "Assessment Generation"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "TechCorp Training Academy",
      category: "Corporate Learning",
      challenge: "Scaling professional development programs across global workforce",
      solution: "Deployed adaptive learning platform with intelligent content recommendations",
      results: [
        { metric: "Completion Rate", value: "+92%", icon: <Award className="h-4 w-4" /> },
        { metric: "Training Efficiency", value: "+75%", icon: <TrendingUp className="h-4 w-4" /> },
        { metric: "Cost Reduction", value: "60%", icon: <Clock className="h-4 w-4" /> }
      ],
      tags: ["Personalization", "Analytics", "Content Management"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Metro School District",
      category: "K-12 Education",
      challenge: "Supporting diverse learning needs across 150+ schools",
      solution: "Integrated AI-powered assessment tools and learning analytics platform",
      results: [
        { metric: "Test Scores", value: "+45%", icon: <TrendingUp className="h-4 w-4" /> },
        { metric: "Teacher Efficiency", value: "+60%", icon: <Users className="h-4 w-4" /> },
        { metric: "Student Satisfaction", value: "94%", icon: <Award className="h-4 w-4" /> }
      ],
      tags: ["K-12 Integration", "Teacher Tools", "Progress Tracking"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-foreground">
            Success Stories &
            <span className="text-accent"> Real Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            See how educational institutions and organizations worldwide are transforming their learning outcomes with our AI-powered platform.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="group gradient-card border-0 shadow-custom-md hover:shadow-glow transition-all duration-500 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Content Section */}
                <div className="flex-1 p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      {study.category}
                    </Badge>
                    {study.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="font-heading font-bold text-2xl mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                    {study.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2 uppercase tracking-wider">Challenge</h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2 uppercase tracking-wider">Solution</h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  <Button variant="ghost" className="group-hover:text-accent transition-colors duration-300 p-0">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Results Section */}
                <div className="lg:w-80 bg-gradient-to-br from-primary/5 to-accent/5 p-8 border-l border-border/50">
                  <h4 className="font-heading font-semibold text-lg mb-6 text-foreground">Key Results</h4>
                  <div className="space-y-4">
                    {study.results.map((result, resultIndex) => (
                      <div 
                        key={resultIndex} 
                        className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/30"
                      >
                        <div className="flex items-center">
                          <div className="p-2 bg-accent/10 rounded-lg mr-3">
                            {result.icon}
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">{result.metric}</span>
                        </div>
                        <div className="font-heading font-bold text-xl text-accent">{result.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-heading font-bold text-3xl mb-4 text-foreground">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Join these leading organizations and transform your educational outcomes with AI-powered learning solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-primary-foreground">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Download Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;