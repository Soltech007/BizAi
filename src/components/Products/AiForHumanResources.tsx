// src/app/products/ai-for-human-resources/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Clock,
  TrendingUp,
  Database,
  BarChart3,
  FileText,
  UserPlus,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Heart,
  Shield,
  MessageSquare,
  Search,
  ClipboardList,
  Target,
  Sparkles,
  Building2
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import RequestQuote from "@/app/(frontend)/common/requestquote";

const coreCapabilities = [
  {
    title: "Recruitment Automation",
    description: "AI-powered resume screening, candidate matching, and interview scheduling. Reduce time-to-hire by 60% with intelligent candidate ranking.",
    icon: UserPlus,
    color: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
  },
  {
    title: "Employee Onboarding",
    description: "Automated onboarding workflows with personalized learning paths, document collection, and system access provisioning.",
    icon: GraduationCap,
    color: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
  },
  {
    title: "Leave & Attendance Management",
    description: "Self-service leave requests, automatic approval workflows, attendance tracking, and real-time balance updates via chatbot.",
    icon: Calendar,
    color: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
  },
  {
    title: "Payroll & Benefits Queries",
    description: "Instant answers to salary slips, tax calculations, insurance claims, and benefits enrollment without HR intervention.",
    icon: FileText,
    color: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
  },
  {
    title: "Performance Management",
    description: "Automate goal setting, track OKRs, send review reminders, and generate performance insights with AI analytics.",
    icon: Target,
    color: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
  },
  {
    title: "Employee Engagement",
    description: "Pulse surveys, sentiment analysis, anonymous feedback collection, and AI-driven engagement recommendations.",
    icon: Heart,
    color: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Time Savings",
    description: "Reduce HR administrative tasks by 70%. Free up your team for strategic initiatives and employee development.",
    metric: "70% Less Admin"
  },
  {
    icon: TrendingUp,
    title: "Faster Hiring",
    description: "Cut recruitment cycle time in half with AI screening, automated scheduling, and streamlined workflows.",
    metric: "50% Faster"
  },
  {
    icon: Users,
    title: "Employee Satisfaction",
    description: "24/7 self-service for common queries. Employees get instant answers without waiting for HR response.",
    metric: "85% Satisfaction"
  },
  {
    icon: Shield,
    title: "Compliance Ready",
    description: "Automated policy enforcement, audit trails, and documentation for labor law compliance.",
    metric: "100% Compliant"
  }
];

const useCases = [
  {
    title: "Resume Screening & Ranking",
    description: "AI analyzes resumes against job requirements and ranks candidates automatically",
    icon: Search
  },
  {
    title: "Interview Scheduling",
    description: "Automated calendar coordination between candidates and interviewers",
    icon: Calendar
  },
  {
    title: "Policy Q&A Bot",
    description: "Instant answers about company policies, leave rules, and HR procedures",
    icon: MessageSquare
  },
  {
    title: "Onboarding Checklist",
    description: "Automated task assignments and progress tracking for new hires",
    icon: ClipboardList
  },
  {
    title: "Exit Interview Analysis",
    description: "AI-powered analysis of exit feedback to identify retention issues",
    icon: BarChart3
  },
  {
    title: "Training Recommendations",
    description: "Personalized learning suggestions based on role and skill gaps",
    icon: Award
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

export default function AIForHRPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-10 md:py-10 border-b relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--accent) / 0.3)' }}>
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
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
                <Users className="w-4 h-4" />
                AI HR Solution
              </motion.span>
            </Link>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AI For <span className="gradient-text">Human Resources</span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl font-light mb-6"
              style={{ color: 'hsl(var(--secondary))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Intelligent People Operations
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" 
              style={{ color: 'hsl(var(--muted-foreground))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Transform your HR operations with AI-powered recruitment, onboarding, employee self-service, 
              and engagement tools. Empower your people team to focus on what matters most — your employees.
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
              HR Automation
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Core <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
              End-to-end HR automation from hire to retire
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
              Measurable HR <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Transform your people operations with quantifiable results
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
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
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
              HR Use <span className="gradient-text">Cases</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Automate every aspect of your HR operations
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
                        className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
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