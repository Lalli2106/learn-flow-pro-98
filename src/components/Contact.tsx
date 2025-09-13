import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      title: "Email Us",
      content: "hello@adaptlearn.ai",
      description: "Get in touch for partnerships and inquiries"
    },
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Speak directly with our education specialists"
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: "Visit Us",
      content: "San Francisco, CA",
      description: "Schedule a visit to our innovation center"
    }
  ];

  const quickActions = [
    {
      icon: <Calendar className="h-8 w-8 text-accent" />,
      title: "Schedule a Demo",
      description: "See our platform in action with a personalized demonstration",
      action: "Book Demo"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-accent" />,
      title: "Start Free Trial",
      description: "Experience our AI-powered learning tools with a 14-day free trial",
      action: "Start Trial"
    },
    {
      icon: <Send className="h-8 w-8 text-accent" />,
      title: "Get Support",
      description: "Access our comprehensive support center and documentation",
      action: "Get Help"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-foreground">
            Let's Start Your
            <span className="text-accent"> Learning Revolution</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to transform your educational experience? Get in touch with our team of learning technology experts and discover how AI can revolutionize your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <Card className="gradient-card border-0 shadow-custom-lg">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-foreground flex items-center">
                  <Send className="mr-3 h-6 w-6 text-accent" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-background border-border focus:border-accent transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-background border-border focus:border-accent transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      placeholder="Company/Organization"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-background border-border focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tell us about your learning challenges and goals..."
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="bg-background border-border focus:border-accent transition-colors resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary/30 transition-colors">
                  <div className="flex-shrink-0 p-3 bg-accent/10 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{info.title}</h3>
                    <p className="text-accent font-medium">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-xl text-foreground">Quick Actions</h3>
              {quickActions.map((action, index) => (
                <Card key={index} className="border-0 bg-secondary/20 hover:bg-secondary/40 transition-colors cursor-pointer group">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {action.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {action.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">{action.description}</p>
                        <Button size="sm" variant="ghost" className="text-accent hover:text-accent-foreground hover:bg-accent p-0">
                          {action.action} →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-white animate-fade-in-up">
          <h3 className="font-heading font-bold text-3xl mb-4">
            Join the Future of Learning Today
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Over 50,000 students and educators trust our platform. Experience the power of AI-driven personalized learning and transform your educational outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Start Free Trial
            </Button>
            <Button size="lg" variant="ghost" className="text-white border-white/30 hover:bg-white/10">
              Watch Demo Video
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;