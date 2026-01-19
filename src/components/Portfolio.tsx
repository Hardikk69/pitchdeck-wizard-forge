import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Goa Ventures",
      description: "Disrupting the seaweed economy by unlocking its values",
      image: "/api/placeholder/400/250",
      caseStudyUrl: "#"
    },
    {
      title: "Off the Grid", 
      description: "Sustainable Gym Equipment",
      image: "/api/placeholder/400/250",
      caseStudyUrl: "#"
    },
    {
      title: "TechFlow Solutions",
      description: "Next-generation workflow automation platform",
      image: "/api/placeholder/400/250", 
      caseStudyUrl: "#"
    },
    {
      title: "EcoNova Energy",
      description: "Revolutionary renewable energy storage systems",
      image: "/api/placeholder/400/250",
      caseStudyUrl: "#"
    },
    {
      title: "FinanceAI Pro",
      description: "AI-powered financial analytics and forecasting",
      image: "/api/placeholder/400/250",
      caseStudyUrl: "#"
    },
    {
      title: "HealthBridge",
      description: "Digital healthcare connectivity platform",
      image: "/api/placeholder/400/250",
      caseStudyUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our successful pitch deck creations that helped startups raise millions
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index}
              className="group
               backdrop-blur-sm hover:bg-card/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary/40">
                    {item.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  <span>View Case Study</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary bg-white hover:bg-primary hover:text-black"
          >
            View All Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;