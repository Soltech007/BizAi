// src/components/sections/ProductTestimonials.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Quote, Star, Sparkles } from "lucide-react";
import { useRef } from "react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  industry?: string;
  rating: number;
  avatar?: string;
}

interface ProductTestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  bgColor?: string;
  accentColor?: string;
}

export default function ProductTestimonials({
  title = "What Our Customers Say",
  subtitle = "Real results from businesses transforming with AI",
  testimonials,
  bgColor = "from-background to-accent/30",
  accentColor = "primary"
}: ProductTestimonialsProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px", amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className={`py-20 md:py-28 overflow-hidden`}
      style={{ backgroundColor: 'hsl(var(--accent) / 0.2)' }}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              backgroundColor: `hsl(var(--${accentColor}) / 0.1)`,
            }}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
          >
            <Quote className="w-4 h-4" style={{ color: `hsl(var(--${accentColor}))` }} />
            <span className="text-sm font-medium" style={{ color: `hsl(var(--${accentColor}))` }}>
              Customer Stories
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {title.split(" ").slice(0, -1).join(" ")}{" "}
            </motion.span>
            <span className="relative inline-block">
              <motion.span
                className="relative z-10 gradient-text font-black"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {title.split(" ").slice(-1)[0]}
              </motion.span>

              {/* Swoosh underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-8 z-0"
                viewBox="0 0 200 30"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M 0 25 Q 50 5, 100 15 T 200 10"
                  stroke={`hsl(var(--${accentColor}))`}
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 1.3 }}
                />
              </svg>

              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 -inset-x-3 -inset-y-1 bg-gradient-to-r rounded-lg -z-10 blur-sm`}
                style={{
                  backgroundImage: `linear-gradient(to right, hsl(var(--${accentColor}) / 0.2), hsl(var(--${accentColor}) / 0.3), hsl(var(--${accentColor}) / 0.2))`
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              />

              {/* Sparkle */}
              <motion.div
                className="absolute -top-2 -right-3"
                initial={{ scale: 0, rotate: 0 }}
                animate={isInView ? { scale: 1, rotate: 360 } : {}}
                transition={{ duration: 0.6, delay: 1.6, type: "spring" }}
              >
                <Sparkles className="w-5 h-5" style={{ color: `hsl(var(--${accentColor}))` }} />
              </motion.div>
            </span>
          </h2>

          <motion.p
            className="text-lg"
            style={{ color: 'hsl(var(--muted-foreground))' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className={`grid grid-cols-1 ${testimonials.length === 2 ? 'md:grid-cols-2 max-w-5xl mx-auto' : 'md:grid-cols-3'} gap-8`}>
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 1.4 + (i * 0.2),
                ease: "easeOut"
              }}
              whileHover={{ y: -10 }}
            >
              <Card className="group relative h-full bg-card border-2 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                style={{ borderColor: 'hsl(var(--border))' }}
              >
                {/* Animated Gradient Background on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to bottom right, hsl(var(--${accentColor}) / 0.1), hsl(var(--${accentColor}) / 0.05), transparent)`
                  }}
                  initial={false}
                />

                {/* Floating particles effect on hover */}
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: `hsl(var(--${accentColor}) / 0.1)` }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <CardContent className="relative p-8 flex flex-col h-full">
                  {/* Quote Icon with rotation animation */}
                  <motion.div
                    className="mb-6"
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Quote 
                      className="w-10 h-10 rotate-180" 
                      style={{ color: `hsl(var(--${accentColor}) / 0.3)` }} 
                    />
                  </motion.div>

                  {/* Quote Text */}
                  <p className="text-base md:text-lg leading-relaxed mb-6 flex-1"
                    style={{ color: 'hsl(var(--foreground))' }}
                  >
                    "{testimonial.quote}"
                  </p>

                  {/* Rating Stars with stagger animation */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, starIdx) => (
                      <motion.div
                        key={starIdx}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                        transition={{
                          delay: 1.6 + (i * 0.2) + (starIdx * 0.1),
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        <Star 
                          className="w-4 h-4 fill-current" 
                          style={{ color: `hsl(var(--${accentColor}))` }} 
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    {/* Avatar with pulse effect */}
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center relative overflow-hidden"
                      style={{ backgroundColor: `hsl(var(--${accentColor}) / 0.1)` }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {/* Pulse ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: `hsl(var(--${accentColor}) / 0.2)` }}
                        animate={{
                          scale: [1, 1.5],
                          opacity: [0.5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      />
                      <span 
                        className="text-lg font-bold relative z-10"
                        style={{ color: `hsl(var(--${accentColor}))` }}
                      >
                        {testimonial.name.charAt(0)}
                      </span>
                    </motion.div>

                    {/* Name & Company */}
                    <div>
                      <div className="font-semibold" style={{ color: 'hsl(var(--foreground))' }}>
                        {testimonial.name}
                      </div>
                      <div className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                        {testimonial.title}
                      </div>
                      <div className="text-xs font-medium" style={{ color: `hsl(var(--${accentColor}))` }}>
                        {testimonial.company}
                      </div>
                      {testimonial.industry && (
                        <div className="text-xs mt-1" style={{ color: 'hsl(var(--muted-foreground))' }}>
                          {testimonial.industry}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Accent Line with smooth reveal */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{
                      background: `linear-gradient(to right, hsl(var(--${accentColor})), hsl(var(--${accentColor}) / 0.5), hsl(var(--${accentColor})))`,
                      transformOrigin: "left"
                    }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />

                  {/* Corner decoration */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: `hsl(var(--${accentColor}) / 0.05)` }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA with counter animation */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <p className="text-lg" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Join{" "}
            <motion.span
              className="font-bold text-xl"
              style={{ color: `hsl(var(--${accentColor}))` }}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{
                delay: 2.4,
                type: "spring",
                stiffness: 200
              }}
            >
              200+ enterprises
            </motion.span>{" "}
            trusting our AI solutions
          </p>

          {/* Decorative dots */}
          <div className="flex justify-center gap-2 mt-4">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: `hsl(var(--${accentColor}))` }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  delay: 2.6 + (i * 0.1),
                  type: "spring"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}