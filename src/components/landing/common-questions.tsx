"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  Heart,
  Factory,
  Truck,
  Smartphone,
  Leaf,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Car,
  Landmark,
  GraduationCap,
  ArrowRight,
  FlaskConical,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Data
const industries = [
  {
    name: "Real Estate",
    icon: Building2,
    color: "bg-[hsl(var(--primary))]",
    link: "/solutions/realestate",
    challenges: [
      "Missed leads & inconsistent responses",
      "Manual lead qualification & scheduling",
      "Lack of personalized recommendations",
    ],
    solutions: [
      "AI Calling Agent for lead qualification & site visits",
      "AI Chatbot for project details & pricing",
      "Automated voice follow-ups post-visit",
    ],
    impact: "60% Faster Lead Response",
  },
  {
    name: "Automobile",
    icon: Car,
    color: "from-[hsl(var(--primary))] to-[hsl(var(--primary))]",
    link: "/solutions/automobile",
    challenges: [
      "Service center congestion",
      "Manual test-drive scheduling",
      "Inconsistent post-delivery follow-ups",
    ],
    solutions: [
      "Automated voice calls for service reminders",
      "WhatsApp bot for test-drive bookings",
      "Post-service feedback collection via AI",
    ],
    impact: "40% Rise in On-Time Service",
  },
  {
    name: "Agriculture",
    icon: Leaf,
    color: "from-[hsl(var(--primary))] to-[hsl(var(--primary))]",
    link: "/solutions/agriculture",
    challenges: [
      "Communication gaps with remote farmers",
      "Limited multilingual 24x7 support",
      "Manual advisory on weather & prices",
    ],
    solutions: [
      "Multilingual voice alerts for weather & prices",
      "Chatbot for crop-specific FAQs",
      "Automated insurance claim assistance",
    ],
    impact: "Timely Decisions on Crop Care",
  },
  {
    name: "Chemicals",
    icon: FlaskConical,
    color: "from-[hsl(var(--primary))] to-[hsl(var(--primary))]",
    link: "/solutions/chemical",
    challenges: [
      "High safety communication load",
      "Complex supply-chain coordination",
      "Slow escalation during plant events",
    ],
    solutions: [
      "AI agent for safety drill broadcasts",
      "Internal chatbot for MSDS queries",
      "Automated supply-chain reorder triggers",
    ],
    impact: "25% Faster Emergency Communication",
  },
  {
    name: "Healthcare",
    icon: Heart,
    color: "from-[hsl(var(--primary))] to-[hsl(var(--primary))]",
    link: "/solutions/healthcare",
    challenges: [
      "Long patient query response times",
      "Manual billing and lab result queries",
      "High front-desk workloads",
    ],
    solutions: [
      "AI agent for appointment confirmations",
      "Chatbot for insurance FAQs & triage",
      "24x7 virtual receptionist for bookings",
    ],
    impact: "50% Reduction in Missed Appointments",
  },
  {
    name: "Logistics",
    icon: Truck,
    color: "from-[hsl(var(--primary))] to-[hsl(var(--primary))]",
    link: "/solutions/logistics",
    challenges: [
      "Constant 'where is my order?' calls",
      "High cost of manual tracking",
      "Irregular driver communication",
    ],
    solutions: [
      "Proactive voice alerts for delays",
      "Customer portal chatbot for tracking",
      "Automated driver coordination",
    ],
    impact: "60% Reduction in Status Calls",
  },
];

// Main Component
export default function IndustrialSolutions() {
  const [selected, setSelected] = useState(industries[0]);

  return (
    <section
      className="py-12 md:py-10"
      style={{ backgroundColor: "hsl(var(--accent) / 0.2)" }}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="hero-badge inline-flex items-center gap-2 mb-6">
            <Building2 className="w-4 h-4" />
            Industrial Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            AI for <span className="gradient-text">Your Sector</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Select an industry to see how BizAI Hacks solves real-world
            problems.
          </p>
        </motion.div>

        {/* Industry Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <motion.button
                key={industry.name}
                onClick={() => setSelected(industry)}
                className={`relative px-3 py-2 sm:px-4 sm:py-2.5 rounded-full text-sm font-semibold transition-colors duration-300
${
  selected.name === industry.name
    ? "text-white"
    : "text-foreground/60 hover:text-foreground"
}`}
                whileHover={{ y: -2 }}
              >
                {selected.name === industry.name && (
                  <motion.div
                    layoutId="active-industry-pill"
                    className={`absolute inset-0 bg-gradient-to-r ${industry.color} rounded-full z-0`}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  {industry.name}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Industry Card */}
        <div className="min-h-[350px] md:min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Card
                className="w-full max-w-4xl mx-auto overflow-hidden shadow-lg border-2"
                style={{ borderColor: "hsl(var(--border))" }}
              >
                <div className="grid md:grid-cols-3">
                  {/* Column 1: Challenges */}
                  <div
                    className="p-6 space-y-3 border-b md:border-b-0 md:border-r"
                    style={{ borderColor: "hsl(var(--border))" }}
                  >
                    <h4 className="font-semibold flex items-center gap-2 text-red-600">
                      <AlertTriangle className="w-5 h-5" />
                      Challenges
                    </h4>
                    <ul className="space-y-2">
                      {selected.challenges.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: "hsl(var(--muted-foreground))" }}
                        >
                          <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-red-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Solutions */}
                  <div
                    className="p-6 space-y-3 border-b md:border-b-0 md:border-r"
                    style={{ borderColor: "hsl(var(--border))" }}
                  >
                    <h4
                      className="font-semibold flex items-center gap-2"
                      style={{ color: "hsl(var(--primary))" }}
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      Our Solutions
                    </h4>
                    <ul className="space-y-2">
                      {selected.solutions.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: "hsl(var(--muted-foreground))" }}
                        >
                          <div
                            className="w-1.5 h-1.5 mt-1.5 rounded-full"
                            style={{ backgroundColor: "hsl(var(--primary))" }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: Impact */}
                  <div className="p-6 space-y-3 bg-accent/30 flex flex-col">
                    <h4 className="font-semibold flex items-center gap-2 text-green-600">
                      <TrendingUp className="w-5 h-5" />
                      Measurable Impact
                    </h4>
                    <div className="text-center pt-4 flex-grow">
                      <p className="text-3xl font-bold gradient-text">
                        {selected.impact.split(" ")[0]}
                      </p>
                      <p
                        className="font-semibold mt-1"
                        style={{ color: "hsl(var(--foreground))" }}
                      >
                        {selected.impact.substring(
                          selected.impact.indexOf(" ") + 1
                        )}
                      </p>
                    </div>

                    {/* Know More Button */}
                    <Link href={selected.link}>
                      <motion.button
                        className="w-full btn-primary-custom mt-4 px-4 py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300"
                        style={{
                          backgroundColor: "hsl(var(--primary))",
                          color: "white",
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Know More
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
