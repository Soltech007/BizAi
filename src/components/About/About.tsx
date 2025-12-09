"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Award,
  Eye,
  Target,
  Users,
  Shield,
  ArrowRight,
  Bot,
  Share2,
  BarChart2,
  Clock,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RequestQuote from "../../app/(frontend)/common/requestquote";
import { useEffect, useState } from "react";

// Mobile-friendly animations
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// Premium icon with mobile optimization
function PremiumIcon({
  Icon,
  size = 36,
  ringSize = 64,
  from = "hsl(var(--gradient-from))",
  to = "hsl(var(--gradient-to))",
  hover = true,
  position = "center", // "center" or "right"
}: {
  Icon: React.ElementType;
  size?: number;
  ringSize?: number;
  from?: string;
  to?: string;
  hover?: boolean;
  position?: "center" | "right";
}) {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const actualSize = isMobile ? size * 0.8 : size;
  const actualRingSize = isMobile ? ringSize * 0.8 : ringSize;

  return (
    <motion.div
      className={`relative grid place-items-center ${
        position === "right" ? "md:ml-auto md:mr-0 mx-auto" : "mx-auto"
      }`}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: isMobile ? 0.2 : 0.5 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={hover && !shouldReduceMotion && !isMobile ? { scale: 1.05 } : undefined}
    >
      {/* Glow effect */}
      <div
        className="absolute rounded-full blur-lg md:blur-2xl opacity-25 md:opacity-40"
        style={{
          width: actualRingSize + 14,
          height: actualRingSize + 14,
          background: `radial-gradient(closest-side, ${from}33, transparent)`,
        }}
      />
      {/* Gradient ring */}
      <motion.div
        className="rounded-full p-[2px] bg-gradient-to-br"
        style={{
          width: actualRingSize,
          height: actualRingSize,
          backgroundImage: `linear-gradient(135deg, ${from}, ${to})`,
        }}
        animate={shouldReduceMotion || isMobile ? {} : { rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Icon container */}
        <div
          className="rounded-full grid place-items-center"
          style={{
            width: actualRingSize - 6,
            height: actualRingSize - 6,
            background: "hsl(var(--background))",
            border: "1px solid hsl(var(--border))",
          }}
        >
          <Icon
            size={actualSize}
            style={{
              color: "hsl(var(--primary))",
              filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.1))",
            }}
          />
          {/* Shine effect - mobile pe disabled for performance */}
          {!isMobile && !shouldReduceMotion && (
            <motion.span
              className="absolute top-0 left-[-40%] h-full w-[30%] pointer-events-none"
              style={{
                background:
                  "linear-gradient(75deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)",
                transform: "skewX(-10deg)",
              }}
              animate={{ left: ["-40%", "120%"] }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: 1 
              }}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

const approachSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We analyze your buyer journey and lead funnels to identify high-impact automation opportunities.",
    Icon: Users,
  },
  {
    step: "02",
    title: "Training",
    description:
      "We enable your sales and CRM teams with AI-assisted workflows and prompt engineering skills.",
    Icon: Award,
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "We deploy production-ready AI Calling Agents and Chatbots, integrated with your systems.",
    Icon: Bot,
  },
  {
    step: "04",
    title: "Support",
    description:
      "We provide ongoing monitoring, maintenance, and iterative improvements for continuous value.",
    Icon: Shield,
  },
];

const crossIndustryBenefits = [
  { Icon: Clock, title: "24/7 Availability", description: "Across voice and chat channels." },
  { Icon: Globe, title: "Multilingual Support", description: "Via Eleven Labs & NLP translation." },
  { Icon: Share2, title: "Scalable Integrations", description: "ERP, CRM, or custom systems." },
  { Icon: BarChart2, title: "Data-Driven Insights", description: "Analytics powered by Watsonx." },
];

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="py-10 md:py-12 lg:py-20 border-b text-center"
        style={{ backgroundColor: "hsl(var(--accent) / 0.3)" }}
      >
        <div className="container max-w-6xl px-4 md:px-8">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={shouldReduceMotion ? {} : staggerContainer}
          >
            <motion.span 
              variants={shouldReduceMotion ? {} : fadeInDown} 
              className="hero-badge inline-flex items-center gap-2 mb-4 md:mb-6 text-sm md:text-base"
            >
              Our Story
            </motion.span>
            <motion.h1 
              variants={shouldReduceMotion ? {} : fadeInDown} 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-4 md:mb-6 px-2"
            >
              The People Behind <span className="gradient-text">Pragmatic AI</span>
            </motion.h1>
            <motion.p
              variants={shouldReduceMotion ? {} : fadeInDown}
              className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              We're a team of strategists, engineers, and innovators on a mission to make AI accessible,
              secure, and measurable for every business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section - Icons right me */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container max-w-6xl px-4 md:px-8">
          <motion.div
            className="grid md:grid-cols-2 gap-6 md:gap-8"
            variants={shouldReduceMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* Mission Card */}
            <motion.div variants={shouldReduceMotion ? {} : fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-6 md:p-8">
                  <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
                    <CardTitle className="text-2xl md:text-3xl font-headline font-bold text-center md:text-left flex-1">
                      Our Mission
                    </CardTitle>
                    <div className="flex-shrink-0">
                      <PremiumIcon Icon={Target} size={34} ringSize={62} position="right" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-0">
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                    To make AI <strong>accessible, secure, and measurable</strong> for business teams — delivering
                    fast ROI, low friction, and strong governance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision Card */}
            <motion.div variants={shouldReduceMotion ? {} : fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-6 md:p-8">
                  <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
                    <CardTitle className="text-2xl md:text-3xl font-headline font-bold text-center md:text-left flex-1">
                      Our Vision
                    </CardTitle>
                    <div className="flex-shrink-0">
                      <PremiumIcon Icon={Eye} size={34} ringSize={62} position="right" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-0">
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                    To be the <strong>trusted partner</strong> for organizations that want AI to solve real operational
                    problems, not just experiments.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div 
            className="text-center mb-10 md:mb-16" 
            initial="hidden" 
            whileInView="visible" 
            variants={shouldReduceMotion ? {} : fadeInDown} 
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold mb-3 md:mb-4 px-2">
              Our <span className="gradient-text">Approach</span>
            </h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto px-4" style={{ color: "hsl(var(--muted-foreground))" }}>
              A proven 4-step process to ensure AI success, from strategy to scale.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={shouldReduceMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {approachSteps.map((step) => (
              <motion.div 
                key={step.title} 
                variants={shouldReduceMotion ? {} : fadeInUp} 
                className="text-center p-4 md:p-6"
              >
                <PremiumIcon Icon={step.Icon} size={36} ringSize={64} />
                <h3 className="text-lg md:text-xl font-bold mt-4 md:mt-5 mb-2">{step.title}</h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cross-Industry Benefits Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container max-w-6xl px-4 md:px-8">
          <motion.div 
            className="text-center mb-10 md:mb-16" 
            initial="hidden" 
            whileInView="visible" 
            variants={shouldReduceMotion ? {} : fadeInDown} 
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold mb-3 md:mb-4 px-2">
              Benefits <span className="gradient-text">Across All Industries</span>
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto px-4" style={{ color: "hsl(var(--muted-foreground))" }}>
              Every solution we build delivers these core advantages.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={shouldReduceMotion ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {crossIndustryBenefits.map((benefit, i) => (
              <motion.div key={i} variants={shouldReduceMotion ? {} : fadeInUp}>
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-2 text-center p-6 md:p-8">
                  <PremiumIcon Icon={benefit.Icon} size={36} ringSize={64} hover={false} />
                  <h3 className="text-lg md:text-xl font-bold mt-4 md:mt-6 mb-2">{benefit.title}</h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <RequestQuote />
    </div>
  );
}