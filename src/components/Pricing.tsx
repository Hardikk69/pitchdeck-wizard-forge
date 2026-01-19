import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$250",
      duration: "per deck",
      description: "Perfect for early-stage startups",
      features: [
        "10-15 slides pitch deck",
        "Basic design template",
        "Content strategy guidance",
        "2 rounds of revisions",
        "7-day delivery",
        "PowerPoint & PDF formats"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$450", 
      duration: "per deck",
      description: "Most popular for growing companies",
      features: [
        "15-20 slides pitch deck",
        "Custom design & branding",
        "Dedicated project manager",
        "Content creation included",
        "Unlimited revisions",
        "5-day delivery",
        "All formats included",
        "Financial model review"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$500",
      duration: "per deck",
      description: "For established companies seeking investment",
      features: [
        "20+ slides comprehensive deck",
        "Premium custom design",
        "Senior designer assigned",
        "Market research included",
        "Unlimited revisions",
        "All formats + animations",
        "Financial model creation",
        "Investor database access",
        "Pitch coaching session"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Prices
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your pitch deck needs. All plans include our quality guarantee.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative text-black backdrop-blur-sm transition-all duration-300 hover:shadow-xl bg-card/85 ${
                plan.popular 
                  ? 'ring-2 ring-primary shadow-lg shadow-primary/20 scale-105' 
                  : 'hover:shadow-primary/10'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.duration}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full mt-8 ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'variant-outline border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include our satisfaction guarantee. Not happy? We'll work until you are.
          </p>
          <Button variant="ghost" className="text-primary hover:text-foreground/100">
            Need a custom quote? Contact us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;