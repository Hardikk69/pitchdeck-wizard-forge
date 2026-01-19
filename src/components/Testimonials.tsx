"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rob Blatt",
    role: "Co-Founder",
    company: "envoyatHome",
    image: "/api/placeholder/64/64",
    content: "Impressed us working with Benjamin and his team...",
    rating: 5,
  },
  {
    id: 2,
    name: "Manni Sidhu",
    role: "CEO",
    company: "Modoru",
    image: "/api/placeholder/64/64",
    content: "The team is fantastic and they have a great proposition...",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Founder",
    company: "TechFlow",
    image: "/api/placeholder/64/64",
    content: "Outstanding work on our Series A deck...",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "CTO",
    company: "DataViz Pro",
    image: "/api/placeholder/64/64",
    content: "Professional, timely, and exactly what we needed...",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    role: "Co-Founder",
    company: "GreenTech Solutions",
    image: "/api/placeholder/64/64",
    content: "Exceptional quality and attention to detail...",
    rating: 5,
  },
];

const TestimonialCarousel = ({
  items,
  reverse = false,
}: {
  items: typeof testimonials;
  reverse?: boolean;
}) => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (reverse) {
        if (api.canScrollPrev()) {
          api.scrollPrev();
        } else {
          api.scrollTo(items.length - 1);
        }
      } else {
        if (api.canScrollNext()) {
          api.scrollNext();
        } else {
          api.scrollTo(0);
        }
      }
    }, 5000);

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", updateCurrent);

    return () => {
      clearInterval(interval);
      api.off("select", updateCurrent);
    };
  }, [api, reverse, items.length]);

  const displayedItems = reverse ? [...items].reverse() : items;

  return (
    <div className="relative max-w-5xl mx-auto mt-16">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {displayedItems.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="testimonial-card bg-white text-black border border-gray-300 rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <blockquote className="mb-6 flex-1 leading-relaxed text-black/80">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-semibold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-black">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-black/60">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="bg-card border-border hover:bg-card/80 text-foreground -left-4 md:-left-12" />
        <CarouselNext className="bg-card border-border hover:bg-card/80 text-foreground -right-4 md:-right-12" />
      </Carousel>

      <div className="flex justify-center gap-2 mt-8">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(reverse ? items.length - 1 - index : index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center text-black">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Reviews</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Don't take our word for it.
        </p>
        <div className="inline-flex items-center gap-3 border border-border/50 rounded-full px-6 py-3">
          <span className="font-semibold">Excellent</span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary text-black" />
            ))}
          </div>
          <span className="text-muted-foreground">Trustscore 4.8 | 54 reviews</span>
        </div>
      </div>

      <TestimonialCarousel items={testimonials} reverse={false} />
      <TestimonialCarousel items={testimonials} reverse={true} />
    </section>
  );
};

export default TestimonialsSection;
