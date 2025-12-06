// src/app/products/ai-for-customer-support/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Headphones, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Clock,
  Users,
  BarChart3,
  MessageSquare,
  Phone,
  Mail,
  Globe,
  Shield,
  Star,
  ThumbsUp,
  TrendingUp,
  Bot,
  Layers,
  Search,
  FileText,
  AlertCircle,
  Heart,
  Smile
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import RequestQuote from "@/app/(frontend)/common/requestquote";
import { FaWhatsapp } from "react-icons/fa";

const coreCapabilities = [
  {
    title: "Omnichannel Support",
    description: "Unified AI support across website chat, WhatsApp, email, phone, and social media. One platform, consistent experience everywhere.",
    icon: Globe,
    color: "bg-gradient-to-br from-rose-500/10 to-pink-500/10"
  },
  {
    title: "Intelligent Ticket Routing",
    description: "AI categorizes, prioritizes, and routes tickets to the right agent or team based on intent, sentiment, and customer value.",
    icon: Layers,
    color: "bg-gradient-to-br from-rose-500/10 to-pink-500/10"
  },
  {
    title: "Self-Service Knowledge",
    description: "AI-powered knowledge base that understands natural language queries and serves accurate answers instantly.",
    icon: Search,
    color: "bg-gradient-to-br from-rose-500/10 to-pink-500/10"
  },
  {
    title: "Sentiment Analysis",
    description: "Real-time customer emotion detection to prioritize frustrated customers and prevent escalations.",
    icon: Heart,
    color: "bg-gradient-to-br from-rose-500/10 to-pink-500/10"
  },
  {
    title: "Agent Assist",
    description: "AI suggests responses, surfaces relevant information, and automates routine tasks to boost agent productivity.",
    icon: Bot,
    color: "bg-gradient-to-br from-rose-500/10 to-pink-500/10"
  },
  {
    title: "CSAT & Analytics",
    description: "Automated satisfaction surveys, sentiment trends, resolution metrics, and actionable insights dashboard.",
    icon: BarChart3,
    color: "bg-gradient-to-br from-rose-500/10 to-pink-500/10"
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Instant Resolution",
    description: "70% of queries resolved instantly by AI without human intervention. Customers get answers in seconds, not hours.",
    metric: "70% Automated"
  },
  {
    icon: Smile,
    title: "Customer Satisfaction",
    description: "Improve CSAT scores by 40% with faster responses, 24/7 availability, and consistent service quality.",
    metric: "40% Higher CSAT"
  },
  {
    icon: TrendingUp,
    title: "Agent Productivity",
    description: "Support agents handle 3x more tickets with AI assistance, suggested responses, and automated workflows.",
    metric: "3x Efficiency"
  },
  {
    icon: Shield,
    title: "24/7 Availability",
    description: "Never miss a customer query. Provide consistent, high-quality support around the clock, every day.",
    metric: "Always On"
  }
];

const useCases = [
  {
    title: "FAQ & Product Queries",
    description: "Instant answers to common questions about products, pricing, and policies",
    icon: MessageSquare
  },
  {
    title: "Order Status & Tracking",
    description: "Real-time order updates, shipping info, and delivery notifications",
    icon: Search
  },
  {
    title: "Returns & Refunds",
    description: "Automated return processing, refund status, and policy guidance",
    icon: FileText
  },
  {
    title: "Technical Troubleshooting",
    description: "Guided troubleshooting flows with escalation to experts when needed",
    icon: AlertCircle
  },
  {
    title: "Account & Billing",
    description: "Self-service account management, payment queries, and billing support",
    icon: Users
  },
  {
    title: "Feedback Collection",
    description: "Automated post-interaction surveys and proactive feedback gathering",
    icon: Star
  }
];

const channels = [
  { name: "Website Chat", icon: MessageSquare, color: "bg-gradient-to-br from-rose-500/10 to-pink-500/10" },
  { name: "WhatsApp", icon: FaWhatsapp, color: "bg-gradient-to-br from-rose-500/10 to-pink-500/10" },
  { name: "Email", icon: Mail, color: "bg-gradient-to-br from-rose-500/10 to-pink-500/10" },
  { name: "Voice", icon: Phone, color: "bg-gradient-to-br from-rose-500/10 to-pink-500/10" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function AIForCustomerSupportPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-10 md:py-10 border-b relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--accent) / 0.3)' }}>
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container max-w-6xl px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link href="/products">
              <motion.span 
                className="hero-badge inline-flex items-center gap-2 mb-6 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <Headphones className="w-4 h-4" />
                AI Support Solution
              </motion.span>
            </Link>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AI For <span className="gradient-text">Customer Support</span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl font-light mb-6"
              style={{ color: 'hsl(var(--secondary))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Exceptional Service at Scale
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" 
              style={{ color: 'hsl(var(--muted-foreground))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Deliver exceptional customer experiences with AI-powered omnichannel support, 
              intelligent routing, self-service automation, and agent assistance. Delight customers 
              while reducing costs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Multi-Channel Banner */}
      <section className="py-12 border-b">
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-headline font-bold mb-2">
              Support Across All <span className="gradient-text">Channels</span>
            </h3>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>
              One AI, seamless experience everywhere
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-2"
                  style={{ borderColor: 'hsl(var(--border))' }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center ${channel.color}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <channel.icon className="w-6 h-6" style={{ color: 'hsl(var(--primary))' }} />
                  </motion.div>
                  <p className="text-sm font-semibold">{channel.name}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="hero-badge inline-flex items-center gap-2 mb-6">
              <Zap className="w-4 h-4" />
              Support Intelligence
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Core <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
              AI-powered tools for world-class customer support
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coreCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 group"
                  style={{ borderColor: 'hsl(var(--border))' }}
                >
                  <CardHeader>
                    <motion.div 
                      className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center ${capability.color}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <capability.icon className="w-7 h-7" style={{ color: 'hsl(var(--primary))' }} />
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {capability.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 md:py-10 border-t">
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Customer Experience <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Transform support operations with measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full text-center hover:shadow-2xl transition-all duration-500 border-2"
                  style={{ borderColor: 'hsl(var(--border))' }}
                >
                  <CardHeader>
                    <motion.div 
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-rose-500/10 to-pink-500/10"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <benefit.icon className="w-8 h-8" style={{ color: 'hsl(var(--primary))' }} />
                    </motion.div>
                    <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                    <div className="text-3xl font-bold gradient-text font-headline mb-3">
                      {benefit.metric}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-10 md:py-10">
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Support Use <span className="gradient-text">Cases</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
              AI automation for every customer interaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 group"
                  style={{ borderColor: 'hsl(var(--border))' }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-rose-500/10 to-pink-500/10"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <useCase.icon className="w-6 h-6" style={{ color: 'hsl(var(--primary))' }} />
                      </motion.div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {useCase.title}
                        </CardTitle>
                        <p className="text-sm mt-2  leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                          {useCase.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <RequestQuote pageContext="Product: AI Customer Support" />
    </div>
  );
}