import { Button } from '@/components/ui/button';
import { ArrowRight, Play, FileText, Brain, BarChart } from 'lucide-react';
import heroImage from '@/assets/hero-learning-platform.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI-powered learning platform interface" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 leading-tight">
            Transform Learning with
            <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent"> AI Intelligence</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Experience personalized education through advanced document processing, automated assessments, and intelligent study recommendations powered by cutting-edge AI technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-glow">
              Start Learning Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="ghost" className="text-white border-white/30 hover:bg-white/10 transition-smooth">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 animate-slide-in-left">
              <FileText className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">Smart Document Processing</h3>
              <p className="text-white/80 text-sm">Upload any document and let AI extract key insights for optimized learning</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 animate-fade-in-up">
              <Brain className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">AI-Driven Recommendations</h3>
              <p className="text-white/80 text-sm">Personalized study paths based on your learning patterns and goals</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 animate-slide-in-right">
              <BarChart className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-2">Advanced Analytics</h3>
              <p className="text-white/80 text-sm">Track progress with detailed insights and predictive learning analytics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;