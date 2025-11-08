"use client";

import { motion } from "framer-motion";
import { Building2, Heart, Factory, Truck, CarFront, Smartphone, Leaf, FlaskConical, CheckCircle2, AlertTriangle, TrendingUp,  ArrowRight, GraduationCap, Landmark, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RequestQuote from "@/app/(frontend)/common/requestquote";
import path from "path";

// Paste the solutionsData array here
export const solutionsData = [
  {
    industry: "Real Estate",
    icon: Building2,
    path: "/solutions/realestate",
    color: "bg-[hsl(var(--primary))]",
    tagline: "Engage buyers 24/7 and accelerate sales cycles with conversational AI.",
    challenges: [
      "Missed leads due to delayed responses from sales teams",
      "Need for personalized property guidance and pricing transparency",
    ],
    solutions: [
      "AI Calling Agent qualifies leads, books site visits, and follows up automatically",
      "AI Chatbot provides instant property details, pricing, and loan options",
    ],
    impact: { metric: "60%", label: "Faster Lead Conversion" },
  },
  {
    industry: "Automobile",
    icon: CarFront,
    path: "/solutions/automobile",
    color: "bg-[hsl(var(--primary))]",
    tagline: "Boost customer engagement and post-sale experience with automation.",
    challenges: [
      "Delayed service reminders and manual test-drive scheduling",
      "Low engagement after purchase and poor CRM integration",
    ],
    solutions: [
      "AI Agent automates service reminders and recall notifications",
      "AI Chatbot handles test-drive bookings, finance queries, and service FAQs",
    ],
    impact: { metric: "40%", label: "Increase in Customer Retention" },
  },
  {
    industry: "Agriculture & Agri-Tech",
    icon: Leaf,
    path: "/solutions/agriculture",
    color: "bg-[hsl(var(--primary))]",
    tagline: "Empower farmers with 24×7 multilingual AI communication.",
    challenges: [
      "Communication barriers between farmers and suppliers",
      "Lack of round-the-clock crop advisory support",
    ],
    solutions: [
      "AI Calling Agent delivers multilingual weather updates and price alerts",
      "AI Chatbot provides crop guidance, subsidy details, and expert connect",
    ],
    impact: { metric: "24×7", label: "Continuous Advisory Access" },
  },
  {
    industry: "Chemical & Industries",
    icon: FlaskConical,
    path: "/solutions/chemical",
    color: "bg-[hsl(var(--primary))]",
    tagline: "Streamline safety, compliance, and operations using AI automation.",
    challenges: [
      "Manual broadcast of safety protocols and compliance alerts",
      "Complex supplier coordination and maintenance tracking",
    ],
    solutions: [
      "AI Agent sends automated safety reminders and process alerts",
      "AI Chatbot manages MSDS lookups and spare-parts requests",
    ],
    impact: { metric: "25%", label: "Faster Safety Communication" },
  },
  {
    industry: "Healthcare",
    icon: Heart,
    path: "/solutions/healthcare",
    color: "bg-[hsl(var(--primary))]",
    tagline: "Reduce patient no-shows and improve engagement with AI.",
    challenges: [
      "Long waiting times and missed appointment confirmations",
      "Manual front-desk workload and repetitive FAQs",
    ],
    solutions: [
      "AI Agent automates appointment confirmations and reminders",
      "AI Chatbot handles FAQs, insurance support, and teleconsultation scheduling",
    ],
    impact: { metric: "50%", label: "Drop in Missed Appointments" },
  },
  {
    industry: "Logistics",
    icon: Truck,
    path: "/solutions/logistics",
    color: "bg-[hsl(var(--primary))]",
    tagline: "Deliver real-time updates and reduce customer call volume.",
    challenges: [
      "High load of shipment status inquiries",
      "Manual dispatch and delivery updates",
    ],
    solutions: [
      "AI Agent sends proactive voice alerts for dispatch and delivery updates",
      "AI Chatbot tracks orders and provides live tracking information",
    ],
    impact: { metric: "60%", label: "Fewer 'Where is My Order?' Calls" },
  },
  {
    industry: "Banking & Financial Services",
    icon: Landmark,
    path: "/solutions/banking",
    color: "bg-[hsl(var(--primary))]",
    tagline: "Automate customer queries, loan processing, and KYC reminders.",
    challenges: [
      "Heavy inbound traffic for loan and EMI-related queries",
      "Manual follow-ups for payments and renewals",
    ],
    solutions: [
      "AI Calling Agent sends EMI reminders and renewal alerts",
      "AI Chatbot handles secure account, product, and credit card FAQs",
    ],
    impact: { metric: "45%", label: "Drop in Support Costs" },
  },
  {
    industry: "Education & EdTech",
    icon: GraduationCap,
    path: "/solutions/education",
    color: "bg-[hsl(var(--primary))]",
    tagline: "Enhance student experience and automate communication workflows.",
    challenges: [
      "Missed admission leads due to delayed counselor follow-up",
      "High student query volume for results, schedules, and courses",
    ],
    solutions: [
      "AI Calling Agent follows up on admissions, fees, and updates",
      "AI Chatbot assists students with schedules, courses, and campus info",
    ],
    impact: { metric: "70%", label: "Faster Query Resolution" },
  },
  {
    industry: "E-Commerce & Retail",
    icon: ShoppingCart,
    path: "/solutions/ecommerce",
    color: "bg-[hsl(var(--primary))]",
    tagline: "Enhance customer experience and increase conversions using AI automation.",
    challenges: [
      "High cart abandonment and poor post-purchase engagement",
      "Delayed responses to order, refund, and delivery queries",
    ],
    solutions: [
      "AI Calling Agent follows up on abandoned carts and personalized offers",
      "AI Chatbot provides instant order status, refund updates, and product recommendations",
    ],
    impact: { metric: "35%", label: "Boost in Repeat Purchases" },
  },
];



// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-10 border-b text-center" style={{ backgroundColor: 'hsl(var(--accent) / 0.3)' }}>
        <div className="container max-w-6xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-badge inline-flex items-center gap-2 mb-6">
              <Building2 className="w-4 h-4" />
              Industrial Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-headline font-bold mb-6">
              AI Solutions for <span className="gradient-text">Every Industry</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Discover how BizAI Hacks delivers measurable impact by solving sector-specific challenges with pragmatic AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {solutionsData.map((solution) => {
              const Icon = solution.icon;
              return (
                <motion.div key={solution.industry} variants={itemVariants}>
                  <Card className="h-full group hover:shadow-xl transition-all duration-300 border-2 overflow-hidden flex flex-col"
                    style={{ borderColor: 'hsl(var(--border))' }}
                  >
                    {/* Header */}
                    <CardHeader className="p-6 border-b" style={{ borderColor: 'hsl(var(--border))' }}>
                      <div className="flex items-center gap-4">
                        <div className={`w-20 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${solution.color}`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold font-headline">{solution.industry}</CardTitle>
                          <p className="text-sm mt-1" style={{ color: 'hsl(var(--muted-foreground))' }}>{solution.tagline}</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    {/* Content */}
                    <CardContent className="p-6 flex-grow flex flex-col justify-between">
                      <div className="space-y-4">
                        {/* Challenges */}
                        <div>
                          <h4 className="font-semibold flex items-center gap-2 text-red-600 text-sm mb-2">
                            <AlertTriangle className="w-4 h-4" />
                            Challenges
                          </h4>
                          <ul className="space-y-1">
                            {solution.challenges.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                                <div className="w-1 h-1 mt-1.5 rounded-full bg-red-400 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Solutions */}
                        <div>
                           <h4 className="font-semibold flex items-center gap-2 text-sm mb-2" style={{ color: 'hsl(var(--primary))' }}>
                            <CheckCircle2 className="w-4 h-4" />
                            Our Solutions
                          </h4>
                          <ul className="space-y-1">
                            {solution.solutions.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                                <div className="w-1 h-1 mt-1.5 rounded-full" style={{ backgroundColor: 'hsl(var(--primary))' }} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Impact & CTA */}
                      <div className="mt-6 pt-4 border-t" style={{ borderColor: 'hsl(var(--border))' }}>
                        <div className="flex items-center justify-between">
                          <div className="text-left">
                            <h4 className="font-semibold flex items-center gap-2 text-green-600 text-sm">
                              <TrendingUp className="w-4 h-4" />
                              Impact
                            </h4>
                            <p className="font-bold text-lg gradient-text">
                              {solution.impact.metric}
                            </p>
                            <p className="text-xs -mt-1" style={{ color: 'hsl(var(--muted-foreground))' }}>
                              {solution.impact.label}
                            </p>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button variant="outline" size="sm" className="h-9 px-3 group-hover:bg-primary group-hover:text-white transition-all">
                             <Link href={solution.path} >
                              Know More
                             </Link>
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <RequestQuote />
    </div>
  );
}

// Car icon (agar aapke lucide-react me nahi hai)
const Car = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9L1 16v1c0 .6.4 1 1 1h2" />
    <path d="M14 17H9" /><path d="M5 17h2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" />
  </svg>
);