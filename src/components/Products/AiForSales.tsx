// src/app/products/ai-for-sales/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Clock,
  Users,
  BarChart3,
  Target,
  Phone,
  Mail,
  MessageSquare,
  DollarSign,
  PieChart,
  Rocket,
  Award,
  Shield,
  LineChart,
  Briefcase,
  UserCheck,
  Calendar,
  FileText,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import RequestQuote from "@/app/(frontend)/common/requestquote";

const coreCapabilities = [
  {
    title: "Lead Scoring & Prioritization",
    description: "AI analyzes lead behavior, engagement, and fit to automatically score and prioritize your hottest prospects for immediate follow-up.",
    icon: Target,
    color: "bg-gradient-to-br from-orange-500/10 to-amber-500/10"
  },
  {
    title: "Automated Lead Qualification",
    description: "AI chatbots and voice agents qualify leads 24/7, asking the right questions and routing qualified prospects to your sales team.",
    icon: UserCheck,
    color: "bg-gradient-to-br from-orange-500/10 to-amber-500/10"
  },
  {
    title: "Sales Forecasting",
    description: "Predictive analytics for accurate revenue forecasting. AI analyzes pipeline health, deal velocity, and historical patterns.",
    icon: LineChart,
    color: "bg-gradient-to-br from-orange-500/10 to-amber-500/10"
  },
  {
    title: "Email & Outreach Automation",
    description: "Personalized email sequences, follow-up reminders, and optimal send-time recommendations powered by AI.",
    icon: Mail,
    color: "bg-gradient-to-br from-orange-500/10 to-amber-500/10"
  },
  {
    title: "Deal Intelligence",
    description: "Real-time insights on deal health, risk alerts, and recommended next actions to close deals faster.",
    icon: Briefcase,
    color: "bg-gradient-to-br from-orange-500/10 to-amber-500/10"
  },
  {
    title: "CRM Auto-Update",
    description: "Automatic CRM updates from calls, emails, and meetings. No more manual data entry — AI captures everything.",
    icon: FileText,
    color: "bg-gradient-to-br from-orange-500/10 to-amber-500/10"
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    description: "Increase win rates by 30% with AI-powered insights, timely follow-ups, and optimized sales processes.",
    metric: "30% More Wins"
  },
  {
    icon: Clock,
    title: "Faster Sales Cycle",
    description: "Reduce average deal cycle by 40% with automated qualification, scheduling, and follow-ups.",
    metric: "40% Faster"
  },
  {
    icon: Users,
    title: "Rep Productivity",
    description: "Sales reps spend 60% more time selling with AI handling admin, data entry, and research.",
    metric: "60% More Selling"
  },
  {
    icon: PieChart,
    title: "Forecast Accuracy",
    description: "Achieve 95%+ forecast accuracy with AI-powered predictive analytics and pipeline analysis.",
    metric: "95% Accurate"
  }
];

const useCases = [
  {
    title: "Inbound Lead Response",
    description: "Instant response to website inquiries with AI qualification and meeting booking",
    icon: MessageSquare
  },
  {
    title: "Outbound Prospecting",
    description: "AI identifies ideal prospects and personalizes outreach at scale",
    icon: Rocket
  },
  {
    title: "Demo Scheduling",
    description: "Automated calendar coordination with qualified leads",
    icon: Calendar
  },
  {
    title: "Proposal Follow-up",
    description: "Timely, personalized follow-ups on pending proposals and quotes",
    icon: FileText
  },
  {
    title: "Renewal Management",
    description: "Proactive renewal outreach and upsell opportunity identification",
    icon: Award
  },
  {
    title: "Win/Loss Analysis",
    description: "AI-powered analysis of deal outcomes to improve sales strategy",
    icon: BarChart3
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

export default function AIForSalesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-10 md:py-10 border-b relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--accent) / 0.3)' }}>
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
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
                <TrendingUp className="w-4 h-4" />
                AI Sales Solution
              </motion.span>
            </Link>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AI For <span className="gradient-text">Sales</span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl font-light mb-6"
              style={{ color: 'hsl(var(--secondary))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Accelerate Revenue Growth
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" 
              style={{ color: 'hsl(var(--muted-foreground))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Supercharge your sales team with AI-powered lead scoring, automated qualification, 
              intelligent forecasting, and deal insights. Close more deals, faster, with less effort.
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
              Sales Intelligence
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Core <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
              AI-powered tools to accelerate every stage of your sales process
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
              Revenue <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Drive measurable sales performance improvements
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
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-orange-500/10 to-amber-500/10"
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
              Sales Use <span className="gradient-text">Cases</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
              AI automation across your entire sales funnel
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
                        className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-orange-500/10 to-amber-500/10"
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
     <RequestQuote pageContext="Product: AI For Sales" />
    </div>
  );
}