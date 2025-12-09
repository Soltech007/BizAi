// src/app/products/ai-calling-agent/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Phone, 
  MessageSquare,
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Clock, 
  TrendingUp,
  Database,
  Users,
  BarChart3,
  Mic,
  Languages,
  Headphones,
  Shield,
  Globe,
  Settings,
  Workflow,
  PhoneCall,
  Activity,
  FileText
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import RequestQuote from "../../app/(frontend)/common/requestquote";


export const metadata = {
  title: "AI Calling Agent | BizAI Hacks",
  description:
    "Automate customer interactions with our AI-powered calling agents. Improve efficiency, reduce costs, and enhance user experience with real-time voice automation.",
  openGraph: {
    title: "AI Calling Agent by BizAI Hacks",
    description:
      "Enhance customer engagement with advanced AI voice automation.",
    url: "https://bizaihacks.com/aicallingagent",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Calling Agent | BizAI Hacks",
    description:
      "Deploy intelligent voice agents that automate customer communication.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

const coreCapabilities = [
  {
    title: "Multi-turn Conversation Handling",
    description: "Natural back-and-forth dialogue with context awareness. The AI remembers previous interactions and maintains conversation flow seamlessly.",
    icon: MessageSquare,
    color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
  },
  {
    title: "Voice Cloning & Expressive TTS",
    description: "Powered by Eleven Labs integration for ultra-realistic, human-sounding voices with emotional nuance and natural intonation.",
    icon: Mic,
    color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
  },
  {
    title: "Language Detection & Multi-language",
    description: "Automatic language detection and switching with support for 29+ languages, enabling global customer service.",
    icon: Languages,
    color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
  },
  {
    title: "CRM/ERP Integration",
    description: "Real-time data fetch and update capabilities. Access customer records, update information, and trigger workflows during live calls.",
    icon: Database,
    color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
  },
  {
    title: "Call Summary & Sentiment Scoring",
    description: "AI-generated call transcripts with detailed sentiment analysis, emotion detection, and actionable insights from every conversation.",
    icon: BarChart3,
    color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
  },
  {
    title: "Smart Escalation to Humans",
    description: "Seamless handoff to human agents when needed, with complete context transfer including conversation history and customer data.",
    icon: Users,
    color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
  }
];

const benefits = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a call. Provide consistent, high-quality service round-the-clock without staffing concerns.",
    metric: "100% Uptime"
  },
  {
    icon: TrendingUp,
    title: "Reduced Handle Time",
    description: "50-70% faster resolution for routine queries. Free up human agents for complex, high-value interactions.",
    metric: "50-70% Faster"
  },
  {
    icon: BarChart3,
    title: "Better Call Analytics",
    description: "Deep insights from every conversation. Track trends, identify issues, and continuously improve service quality.",
    metric: "100% Call Coverage"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC2 and GDPR compliant with enterprise-grade encryption. Your customer data stays secure and private.",
    metric: "SOC2 Certified"
  }
];

const useCases = [
  {
    title: "Customer Support Triage",
    description: "Automatically categorize and route support calls based on intent and urgency",
    icon: Headphones
  },
  {
    title: "Appointment Booking & Reminders",
    description: "Schedule appointments, send reminders, and handle rescheduling requests",
    icon: PhoneCall
  },
  {
    title: "Post-Service Surveys",
    description: "Collect feedback after service interactions with natural conversational surveys",
    icon: Activity
  },
  {
    title: "Collections & Payment Reminders",
    description: "Gentle, compliant payment reminders with payment processing capabilities",
    icon: FileText
  },
  {
    title: "Order Status Updates",
    description: "Proactively inform customers about order status, shipping, and delivery",
    icon: Workflow
  },
  {
    title: "Lead Qualification Calls",
    description: "Qualify sales leads through natural conversations before routing to sales teams",
    icon: Users
  }
];

const technicalSpecs = [
  {
    category: "Voice Quality",
    specs: [
      "Ultra-realistic TTS via Eleven Labs",
      "Custom voice cloning available",
      "Natural speech patterns & emotions",
      "Background noise suppression"
    ]
  },
  {
    category: "Intelligence",
    specs: [
      "IBM Watsonx AI models",
      "Context retention across calls",
      "Intent recognition accuracy >95%",
      "Continuous learning from interactions"
    ]
  },
  {
    category: "Integration",
    specs: [
      "SIP/VoIP telephony support",
      "Salesforce, Zendesk, ERPNext",
      "REST API & Webhooks",
      "Custom integration support"
    ]
  },
  {
    category: "Compliance",
    specs: [
      "SOC2 Type II certified",
      "GDPR & HIPAA compliant",
      "Call recording & retention policies",
      "Audit logs & access controls"
    ]
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

export default function AICallingAgentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-10 md:py-10 border-b relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--accent) / 0.3)' }}>
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
                <Phone className="w-4 h-4" />
                AI Voice Product
              </motion.span>
            </Link>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AI <span className="gradient-text">Calling Agent</span>
            </motion.h1>
            
           
            
            <motion.p 
              className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" 
              style={{ color: 'hsl(var(--muted-foreground))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Automate routine, high-volume voice interactions like support triage, appointment booking, 
              surveys, and collections reminders — while preserving natural, human-sounding conversation 
              that delights your customers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl px-4 md:px-8">
          
            
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
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
                      className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${capability.color}`}
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

      {/* Benefits Section */}
      <section className="py-10 md:py-10 border-t" >
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Measurable Business <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Transform your customer service operations with quantifiable results
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
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
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
      {/* <section className="py-10 md:py-10">
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Common Use <span className="gradient-text">Cases</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Versatile AI calling solutions across industries and departments
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
                        className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
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
      </section> */}

      {/* Technical Specifications */}
      {/* <section className="py-10 md:py-10 border-t" >
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="hero-badge inline-flex items-center gap-2 mb-6">
              <Settings className="w-4 h-4" />
              Enterprise Grade
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Technical <span className="gradient-text">Specifications</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Built on industry-leading platforms with enterprise security and compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2" style={{ borderColor: 'hsl(var(--border))' }}>
                  <CardHeader>
                    <div className="h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mb-4 rounded-full" />
                    <CardTitle className="text-lg">{spec.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {spec.specs.map((item, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-start gap-2 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'hsl(var(--primary))' }} />
                          <span style={{ color: 'hsl(var(--muted-foreground))' }}>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

       {/* CTA Section */}
<<<<<<< HEAD
     <RequestQuote/>
=======
  <RequestQuote pageContext="Product: AI Calling Agent" />
>>>>>>> 49348d4ed6f203e50201fa07449bba9a7f7d4c14
    </div>
  );
}