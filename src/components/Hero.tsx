"use client";

import { Button } from "@/components/ui/button";
import { ThreeDMarquee } from "./ThreeDMarquee";
import Navigation from "./Navigation";

const Hero = () => {
  const marqueeImages = [
    { src: "src/components/images/image.png", alt: "Image 1" },
    { src: "src/components/images/image1.png", alt: "Image 2" },
    { src: "src/components/images/image2.png", alt: "Image 3" },
  ];

  return (
    <div className="bg-white p-7">
    <div className="bg-background border-2 border-white rounded-[20px] overflow-hidden">
      <section className="relative min-h-screen font-power overflow-hidden rounded-[30px]">
        <Navigation />

        <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
          <ThreeDMarquee images={marqueeImages} cols={6} rows={4} />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-70 z-5" />

        <div className="relative z-10 container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 mt-40">
          <div className="flex flex-col justify-center text-left">
            <div className="relative inline-block mb-6">
              <span className="text-white text-1xl md:text-4xl">
                Premium Ticket To Get Funding
              </span>
            </div>
            <h1 className="text-[4rem] md:text-[7rem] lg:text-[8rem] mb-8 text-primary whitespace-nowrap leading-none">
              Pitch Deck Creation
            </h1>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+150</div>
                <div className="text-muted-foreground">Deck Created</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+$30K</div>
                <div className="text-muted-foreground">Raised with our decks</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+16</div>
                <div className="text-muted-foreground">Worked in Industries</div>
              </div>
              <div className="mb-12 col-span-3">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full"
                >
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Hero;
