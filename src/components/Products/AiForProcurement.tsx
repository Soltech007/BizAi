// src/app/products/ai-for-procurement/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ShoppingCart, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Clock,
  Users,
  BarChart3,
  FileText,
  Truck,
  Package,
  DollarSign,
  Shield,
  Search,
  ClipboardList,
  Building2,
  TrendingDown,
  Handshake,
  AlertTriangle,
  Receipt,
  Boxes,
  Globe,
  Calculator
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import RequestQuote from "@/app/(frontend)/common/requestquote";

const coreCapabilities = [
  {
    title: "Vendor Management",
    description: "AI-powered vendor evaluation, performance tracking, and risk assessment. Maintain a healthy supplier ecosystem with automated monitoring.",
    icon: Building2,
    color: "bg-gradient-to-br from-indigo-500/10 to-violet-500/10"
  },
  {
    title: "Purchase Order Automation",
    description: "Automated PO creation, approval workflows, and vendor communication. Reduce processing time from days to minutes.",
    icon: FileText,
    color: "bg-gradient-to-br from-indigo-500/10 to-violet-500/10"
  },
  {
    title: "Spend Analytics",
    description: "Deep visibility into spending patterns, category analysis, and savings opportunities with AI-driven recommendations.",
    icon: BarChart3,
    color: "bg-gradient-to-br from-indigo-500/10 to-violet-500/10"
  },
  {
    title: "Contract Intelligence",
    description: "AI extracts key terms, tracks renewals, and alerts on compliance issues across your contract portfolio.",
    icon: ClipboardList,
    color: "bg-gradient-to-br from-indigo-500/10 to-violet-500/10"
  },
  {
    title: "Invoice Processing",
    description: "Automated 3-way matching, exception handling, and approval routing for faster, error-free invoice processing.",
    icon: Receipt,
    color: "bg-gradient-to-br from-indigo-500/10 to-violet-500/10"
  },
  {
    title: "Supplier Communication",
    description: "AI chatbots handle routine supplier queries about PO status, payment timelines, and delivery schedules.",
    icon: Handshake,
    color: "bg-gradient-to-br from-indigo-500/10 to-violet-500/10"
  }
];

const benefits = [
  {
    icon: TrendingDown,
    title: "Cost Savings",
    description: "Identify savings opportunities and negotiate better terms with AI-powered spend analysis and benchmarking.",
    metric: "15-25% Savings"
  },
  {
    icon: Clock,
    title: "Faster Processing",
    description: "Reduce PO and invoice processing time by 80% with intelligent automation and approval workflows.",
    metric: "80% Faster"
  },
  {
    icon: Shield,
    title: "Risk Reduction",
    description: "Proactive supplier risk monitoring and compliance tracking to avoid supply chain disruptions.",
    metric: "90% Risk Visibility"
  },
  {
    icon: Users,
    title: "Team Efficiency",
    description: "Free up procurement staff from manual tasks to focus on strategic sourcing and vendor relationships.",
    metric: "3x Productivity"
  }
];

const useCases = [
  {
    title: "Requisition to PO",
    description: "Automated conversion of approved requisitions to purchase orders with vendor selection",
    icon: ShoppingCart
  },
  {
    title: "Vendor Onboarding",
    description: "Streamlined supplier registration, verification, and compliance documentation",
    icon: Building2
  },
  {
    title: "Price Comparison",
    description: "AI analyzes quotes and historical data to recommend best-value suppliers",
    icon: Calculator
  },
  {
    title: "Delivery Tracking",
    description: "Real-time visibility into order status, shipments, and delivery exceptions",
    icon: Truck
  },
  {
    title: "Contract Renewal",
    description: "Proactive alerts and renegotiation recommendations before contract expiry",
    icon: FileText
  },
  {
    title: "Supplier Q&A Bot",
    description: "24/7 automated responses to supplier queries about payments and orders",
    icon: Search
  }
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

export default function AIForProcurementPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-10 md:py-10 border-b relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--accent) / 0.3)' }}>
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
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
                <ShoppingCart className="w-4 h-4" />
                AI Procurement Solution
              </motion.span>
            </Link>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AI For <span className="gradient-text">Procurement</span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl font-light mb-6"
              style={{ color: 'hsl(var(--secondary))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Intelligent Sourcing & Supply Chain
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" 
              style={{ color: 'hsl(var(--muted-foreground))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Transform your procurement operations with AI-powered vendor management, automated purchasing, 
              spend analytics, and supplier communication. Reduce costs, mitigate risks, and accelerate sourcing.
            </motion.p>
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
              Procurement Intelligence
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Core <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
              End-to-end procurement automation from sourcing to payment
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
              Procurement <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Drive measurable improvements in cost, speed, and compliance
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
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-violet-500/10"
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
              Procurement Use <span className="gradient-text">Cases</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
              AI automation across your sourcing and supply chain
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
                        className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-violet-500/10"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <useCase.icon className="w-6 h-6" style={{ color: 'hsl(var(--primary))' }} />
                      </motion.div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {useCase.title}
                        </CardTitle>
                        <p className="text-sm mt-2 leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
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
      <RequestQuote />
    </div>
  );
}