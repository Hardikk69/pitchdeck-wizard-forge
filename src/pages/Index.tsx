import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Newcompo from "@/components/Newcompo";

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Testimonials />
      <Portfolio />
      <Pricing />
      <Newcompo cards={[
        {
          title: "AI Dashboard",
          subtitle: "Monitor everything with intelligent insights",
          badge: "Pro",
          backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
        },
        {
          title: "Global Infrastructure",
          subtitle: "Deploy apps globally with CDN and edge computing",
          badge: "Enterprise",
          backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
        },
        {
          title: "Automation Engine",
          subtitle: "Automate repetitive tasks with AI triggers",
          badge: "New",
          backgroundImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
        },
        {
          title: "AI Dashboard",
          subtitle: "Monitor everything with intelligent insights",
          badge: "Pro",
          backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
        },
        {
          title: "Global Infrastructure",
          subtitle: "Deploy apps globally with CDN and edge computing",
          badge: "Enterprise",
          backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
        },
        {
          title: "Automation Engine",
          subtitle: "Automate repetitive tasks with AI triggers",
          badge: "New",
          backgroundImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
        },
        {
          title: "Global Infrastructure",
          subtitle: "Deploy apps globally with CDN and edge computing",
          badge: "Enterprise",
          backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
        },
        {
          title: "Automation Engine",
          subtitle: "Automate repetitive tasks with AI triggers",
          badge: "New",
          backgroundImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
        }
      ]} />
      <Contact />
    </div>
  );
};

export default Index;
