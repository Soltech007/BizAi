"use client";

import {
  Stethoscope,
  Factory,
  Truck,
  Building2,
  Smartphone,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const industries = [
  {
    name: "Healthcare",
    icon: Stethoscope,
    desc: "AI-driven patient insights & diagnostics.",
  },
  {
    name: "Engineering & Manufacturing",
    icon: Factory,
    desc: "Smart automation and quality optimization.",
  },
  {
    name: "Logistics & Supply Chain",
    icon: Truck,
    desc: "Predictive routing and inventory intelligence.",
  },
  {
    name: "Telecom",
    icon: Smartphone,
    desc: "Network optimization and customer analytics.",
  },
  {
    name: "BFSI",
    icon: Building2,
    desc: "Risk analysis and fraud prevention systems.",
  },
  {
    name: "Retail",
    icon: ShoppingCart,
    desc: "Personalized shopping and demand forecasting.",
  },
];

export default function IndustrialSolutions() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const autoplay = useRef(
    Autoplay({
      delay: 6000, // slower smooth autoplay
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [autoplay.current]
  );

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section
      ref={sectionRef}
      className="py-5 md:py-10 overflow-hidden"
     style={{ backgroundColor: 'hsl(var(--accent) / 0.2)' }}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[hsl(var(--accent)/0.2)] border border-[hsl(var(--border))] rounded-full text-[hsl(var(--primary))] font-semibold text-sm">
            <Building2 className="w-4 h-4" />
            Industrial Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            AI for <span className="gradient-text">Every Sector</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Delivering measurable impact across Healthcare, Manufacturing,
            Logistics, and beyond.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Left Arrow */}
          <button
            onClick={scrollPrev}
            className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-[hsl(var(--foreground)/0.7)]" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollNext}
            className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-[hsl(var(--foreground)/0.7)]" />
          </button>

          {/* Fading Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[hsl(var(--background))] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[hsl(var(--background))] to-transparent z-10 pointer-events-none" />

          {/* Carousel Items */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {[...industries, ...industries].map((industry, i) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={`industry-${i}`}
                    className="flex-[0_0_auto] min-w-[50px] mt-5 sm:min-w-[50px] md:min-w-[190px]  lg:min-w-[400px] px-3 sm:px-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + i * 0.05,
                      ease: "easeOut",
                    }}
                  >
                    <div className="group/item flex flex-col items-center  justify-center gap-3 text-center h-full p-4 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--accent)/0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
                      <div
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center"
                        style={{
                          background: "hsl(var(--accent) / 0.4)",
                          border: "1px solid hsl(var(--border))",
                        }}
                      >
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[hsl(var(--primary))]" />
                      </div>
                      <div>
                        <h3
                          className="text-sm sm:text-base font-semibold mb-1"
                          style={{ color: "hsl(var(--foreground))" }}
                        >
                          {industry.name}
                        </h3>
                        <p
                          className="text-xs sm:text-sm"
                          style={{ color: "hsl(var(--muted-foreground))" }}
                        >
                          {industry.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button asChild size="lg">
            <Link href="/solutions">
              View All Solutions <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
