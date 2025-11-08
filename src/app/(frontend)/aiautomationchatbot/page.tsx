// src/app/products/ai-automation-chatbot/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Bot, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Clock,
  Users,
  BarChart3,
  FileSearch,
  Workflow,
  Database,
  Boxes,
  Globe,
  MessageSquare,
  Search,
  Layers,
  GitBranch,
  PieChart,
  Shield,
  Settings,
  Sparkles,
  TrendingUp,
  HeadphonesIcon,
  BriefcaseIcon,
  ShoppingCart
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import RequestQuote from "../common/requestquote";
import { FaFacebook, FaSlackHash, FaWhatsapp } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
const coreCapabilities = [
  {
    title: "Knowledge Retrieval",
    description: "Advanced semantic search over documents, policies, FAQs, and knowledge bases. Instantly find and serve accurate information from thousands of documents.",
    icon: FileSearch,
    color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
  },
  {
    title: "Action Orchestration",
    description: "Trigger complex workflows, update systems, create tickets, and execute multi-step processes across your tech stack automatically.",
    icon: Workflow,
    color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
  },
  {
    title: "Context Retention",
    description: "Remember conversation history across sessions. Pick up where you left off, even days later, for truly personalized experiences.",
    icon: Database,
    color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
  },
  {
    title: "Low-code Flow Editor",
    description: "Intuitive visual builder that empowers business users to create and modify conversation flows without coding expertise.",
    icon: Boxes,
    color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
  },
  {
    title: "Multi-channel Support",
    description: "Deploy once, serve everywhere: Website widget, WhatsApp, MS Teams, Slack, Facebook Messenger, and custom channels.",
    icon: Globe,
    color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive insights into user interactions, satisfaction scores, automation rates, and conversation trends with actionable reports.",
    icon: BarChart3,
    color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
  }
];

const benefits = [
  {
    icon: Zap,
    title: "Instant Responses",
    description: "Sub-second response times for common queries. No more waiting in queues or delayed email responses.",
    metric: "<1s Response"
  },
  {
    icon: Users,
    title: "Higher Self-service",
    description: "60-80% of queries resolved without human intervention, dramatically reducing support ticket volume.",
    metric: "60-80% Automated"
  },
  {
    icon: TrendingUp,
    title: "Agent Productivity",
    description: "Free up human agents from repetitive tasks to focus on complex, high-value customer interactions.",
    metric: "3x Efficiency"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Always-on support that never sleeps, takes breaks, or calls in sick. Consistent quality around the clock.",
    metric: "Always Online"
  }
];

const useCases = [
  {
    title: "Customer Support Automation",
    description: "Handle FAQs, troubleshooting, account queries, and product information instantly",
    icon: HeadphonesIcon,
    industry: "All Industries"
  },
  {
    title: "HR Employee Self-Service",
    description: "Automate leave requests, policy queries, payroll questions, and onboarding processes",
    icon: BriefcaseIcon,
    industry: "HR Departments"
  },
  {
    title: "IT Helpdesk Automation",
    description: "Password resets, software access, ticket creation, and common IT troubleshooting",
    icon: Settings,
    industry: "IT Operations"
  },
  {
    title: "Sales Lead Qualification",
    description: "Engage website visitors, qualify leads, schedule demos, and route to sales teams",
    icon: TrendingUp,
    industry: "Sales & Marketing"
  },
  {
    title: "Order Tracking & Returns",
    description: "Real-time order status, shipping updates, return processing, and refund queries",
    icon: ShoppingCart,
    industry: "E-commerce & Retail"
  },
  {
    title: "Knowledge Base Assistant",
    description: "Navigate complex documentation, find specific information, and provide guided solutions",
    icon: Search,
    industry: "SaaS & Tech"
  }
];

const technicalSpecs = [
  {
    category: "AI & Intelligence",
    specs: [
      "IBM Watsonx AI models",
      "Natural language understanding",
      "Intent recognition >95% accuracy",
      "Multi-turn conversation handling",
      "Continuous learning from interactions"
    ]
  },
  {
    category: "Integration",
    specs: [
      "REST API & GraphQL",
      "Webhooks for real-time events",
      "CRM: Salesforce, HubSpot, Zendesk",
      "ERP: ERPNext, SAP, Oracle",
      "Custom integration support"
    ]
  },
  {
    category: "Channels",
    specs: [
      "Website chat widget",
      "WhatsApp Business API",
      "Microsoft Teams integration",
      "Slack workspace apps",
      "Facebook Messenger",
      "Custom API channels"
    ]
  },
  {
    category: "Security & Compliance",
    specs: [
      "SOC2 Type II certified",
      "GDPR & CCPA compliant",
      "End-to-end encryption",
      "Role-based access control",
      "Audit logs & monitoring"
    ]
  }
];

const channels = [
  { name: "Website", icon: Globe, color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
  { name: "WhatsApp", icon: FaWhatsapp, color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
  { name: "MS Teams", icon: Layers, color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
  { name: "Slack", icon: FaSlackHash , color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
  { name: "Facebook", icon: FaFacebook , color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
  { name: "Custom API", icon: TbApi, color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" }
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

export default function AIAutomationChatbotPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-10 md:py-10 border-b relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--accent) / 0.3)' }}>
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
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
                <Bot className="w-4 h-4" />
                AI Automation Product
              </motion.span>
            </Link>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AI Automation <span className="gradient-text">Chatbot</span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl font-light mb-6"
              style={{ color: 'hsl(var(--secondary))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Omnichannel intelligence
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" 
              style={{ color: 'hsl(var(--muted-foreground))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Omnichannel bot that automates text-based customer interactions, employee self-service, 
              and operational workflows across all your platforms. Deploy once, serve everywhere.
            </motion.p>

            
          </motion.div>
        </div>
      </section>

      {/* Multi-Channel Banner */}
     {/* Multi-Channel Banner */}
<section className="py-12 border-b">
  <div className="container max-w-7xl px-4 md:px-8">
    <motion.div
      className="text-center mb-8"
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
      }}
      viewport={{ once: true, amount: 0.3 }} 
    >
      <h3 className="text-2xl font-headline font-bold mb-2">
        Deploy Across All <span className="gradient-text">Channels</span>
      </h3>
      <p style={{ color: 'hsl(var(--muted-foreground))' }}>
        One bot, unlimited reach
      </p>
    </motion.div>

    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.08, delayChildren: 0.2 }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {channels.map((channel, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, scale: 0.9, y: 30 },
            visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
          }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          <Card
            className="text-center p-6 hover:shadow-lg transition-all duration-300 border-2"
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
              Advanced Features
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Core <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Intelligent automation powered by enterprise AI and seamless integrations
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
                      className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${capability.color}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <capability.icon className="w-7 h-7" style={{ color: 'hsl(var(--secondary))' }} />
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-secondary transition-colors">
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
      {/* <section className="py-10 md:py-10 border-t" >
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Tangible Business <span className="gradient-text">Value</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Deliver exceptional experiences while reducing operational costs
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
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <benefit.icon className="w-8 h-8" style={{ color: 'hsl(var(--secondary))' }} />
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
      </section> */}

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
              Industry Use <span className="gradient-text">Cases</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Versatile automation across departments and industries
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
                    <div className="flex items-start gap-4 mb-3">
                      <motion.div 
                        className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <useCase.icon className="w-6 h-6" style={{ color: 'hsl(var(--secondary))' }} />
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-lg group-hover:text-secondary transition-colors mb-2">
                          {useCase.title}
                        </CardTitle>
                        <span className="text-xs px-2 py-1 rounded-full" style={{
                          backgroundColor: 'hsl(var(--secondary) / 0.1)',
                          color: 'hsl(var(--secondary))'
                        }}>
                          {useCase.industry}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {useCase.description}
                    </p>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Technical Specs */}
      {/* <section className="py-10 md:py-10 border-t" >
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="hero-badge inline-flex items-center gap-2 mb-6">
              <Shield className="w-4 h-4" />
              Enterprise Ready
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Technical <span className="gradient-text">Specifications</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Built for enterprise scale, security, and reliability
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
                    <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 mb-4 rounded-full" />
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
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'hsl(var(--secondary))' }} />
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
      <RequestQuote/>
    </div>
  );
}