"use client";

import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "BizAI Hacks transformed our lead management completely! The AI calling agent reduced our response time by 60% and we're closing more deals than ever.",
    name: "Rajesh Kumar",
    title: "CEO, Real Estate Solutions",
    rating: 5,
  },
  {
    quote:
      "The WhatsApp bot for test-drive bookings has been a game-changer. Our customers love the instant responses and our team can focus on actual sales.",
    name: "Priya Sharma",
    title: "Head of Operations, Auto Dealership",
    rating: 5,
  },
  {
    quote:
      "Multilingual voice alerts have helped us reach farmers in remote areas. The impact on timely decision-making has been remarkable!",
    name: "Vikram Singh",
    title: "Director, AgriTech Innovations",
    rating: 5,
  },
  {
    quote:
      "Our patient satisfaction scores increased by 50% after implementing the AI appointment system. No more missed appointments!",
    name: "Dr. Anjali Mehta",
    title: "Hospital Administrator",
    rating: 4,
  },
  {
    quote:
      "The automated tracking system reduced our customer support calls by 60%. Our logistics operations are now smoother than ever.",
    name: "Amit Patel",
    title: "COO, Logistics Company",
    rating: 5,
  },
  {
    quote:
      "Safety communication response improved by 25%. The AI system for emergency broadcasts has made our plant operations much safer.",
    name: "Suresh Reddy",
    title: "Safety Head, Chemical Industries",
    rating: 4,
  },
];

export function InfiniteMovingCardsDemo() {
  return (
    <section 
      className="py-12 md:py-10 relative overflow-hidden"
      style={{ backgroundColor: "hsl(var(--accent) / 0.2)" }}
    >
        <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.span 
            className="hero-badge  items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Quote className="w-4 h-4" />
            Testimonials
          </motion.span>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-6">
            What Our{" "}
            <span 
              className="gradient-text relative inline-block"
              style={{
                background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary)) 70%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Clients Say
            </span>
          </h2>

          {/* Subheading */}
          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Real success stories from businesses that transformed their operations with{" "}
            <span className="font-semibold" style={{ color: "hsl(var(--foreground))" }}>
              BizAI Hacks
            </span>
          </p>
        </motion.div>

        {/* Infinite Moving Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="py-2"
          />
        </motion.div>

        {/* Bottom CTA or Decoration */}
        <motion.div 
          className="text-center mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p 
            className="text-sm font-medium"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Join 500+ businesses already growing with BizAI Hacks
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .gradient-text {
          position: relative;
          background: linear-gradient(
            135deg,
            hsl(var(--primary)) 0%,
            hsl(var(--primary)) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (max-width: 768px) {
          .gradient-text {
            display: inline;
          }
        }
      `}</style>
    </section>
  );
}