// src/app/services/consultation/page.tsx
"use client";

import { services } from "@/data/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, 
  Sparkles,
  Target,
  BarChart3,
  Users,
  Shield,
  CheckCircle2,
  AlertCircle,
  Activity,
  Search,
  FlaskConical,
  Database,
  Plug,
  MapPinCheck
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import RequestQuote from "../../app/(frontend)/common/requestquote";
import { ElementType } from "react";
import { SiRoadmapdotsh } from "react-icons/si";

const consultationStats = [
  {
    icon: Target,
    title: "ROI-Driven",
    metric: "3-6x ROI"
  },
  {
    icon: Users,
    title: "Experience",
    metric: "10+ Years"
  },
  {
    icon: BarChart3,
    title: "Projects",
    metric: "50+"
  },
  {
    icon: Shield,
    title: "Success Rate",
    metric: "95%"
  }
];

const consultationFeatures = [
    { icon: Activity, title: "AI Readiness Assessment", description: "We deep-dive into your processes, data, and AI maturity to create a baseline for transformation.", color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
    { icon: Search, title: "Use-Case & ROI Analysis", description: "Our experts help you identify and prioritize high-impact AI opportunities with clear ROI projections.", color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
    { icon: FlaskConical, title: "PoC & Pilot Strategy", description: "We design and plan pilot projects to validate AI solutions and demonstrate tangible value quickly.", color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
    { icon: Database, title: "Data & MLOps Readiness", description: "Our team evaluates your data pipelines, governance, and infrastructure to ensure AI scalability.", color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
    { icon: Plug, title: "Integration Roadmap", description: "We create a detailed plan for seamless integrations with your existing CRM, ERP, and other core systems.", color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
    { icon: MapPinCheck, title: "AI Strategy Roadmap", description: "Develop a phased, actionable implementation plan with clear milestones and measurable KPIs.", color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" }
];

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

export default function ConsultationPage() {
  const service = services.find(s => s.id === "consultation");
  
  if (!service) return <div>Service not found</div>;

  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-10 border-b relative overflow-hidden" 
        style={{ backgroundColor: 'hsl(var(--accent) / 0.3)' }}>
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: 'hsl(var(--primary) / 0.1)' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container max-w-6xl px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link href="/services">
              <motion.span 
                className="hero-badge inline-flex items-center gap-2 mb-6 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4" />
                Strategic Service
              </motion.span>
            </Link>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {service.title.split(' ').slice(0, 2).join(' ')} <span className="gradient-text">{service.title.split(' ').slice(2).join(' ')}</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" 
              style={{ color: 'hsl(var(--muted-foreground))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {service.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* For: consultation/page.tsx */}
<section className="py-20 md:py-28">
  <div className="container max-w-7xl px-4 md:px-8">
  
    <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" variants={staggerContainer} initial="visible" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        {consultationFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
                <motion.div key={index} variants={fadeInUp} whileHover={{ y: -5, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 group" style={{ borderColor: 'hsl(var(--border))' }}>
                        <CardHeader>
                            <motion.div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center ${feature.color}`} whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                                <IconComponent className="w-7 h-7" style={{ color: 'hsl(var(--primary))' }} />
                            </motion.div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>{feature.description}</p>
                        </CardContent>
                    </Card>
                </motion.div>
            );
        })}
    </motion.div>
  </div>
</section>

      {/* --- ✅ NEW SECTION: Pain Points & Solutions --- */}
      <section className="py-12 md:py-10">
        <div className="container max-w-7xl px-4 md:px-8">
            <motion.div
                className="text-center mb-16"
                initial="visible" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                    Turning <span className="gradient-text">Challenges into Opportunities</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    We understand the hurdles in AI adoption. Here’s how we solve them.
                </p>
            </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch"
            variants={staggerContainer}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* --- Pain Points Card --- */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-2 border-destructive/20 bg-destructive/5">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <AlertCircle className="w-8 h-8 text-destructive flex-shrink-0"/>
                        <CardTitle className="text-2xl font-headline text-destructive">Common Pain Points</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {service.painPoints.map((point: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-destructive/80">
                                <span className="font-semibold mt-0.5">&ndash;</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* --- Solutions Card --- */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0"/>
                        <CardTitle className="text-2xl font-headline text-primary">Our Strategic Solutions</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {service.solutions.map((solution: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                                <span>{solution}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
              </Card>
            </motion.div>

          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-10 border-t" style={{ borderColor: 'hsl(var(--border))' }}>
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div
                className="text-center mb-16"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                    Measurable <span className="gradient-text">Impact</span>
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    Our consultation delivers tangible results and a clear return on investment.
                </p>
            </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationStats.map((stat: { icon: ElementType; title: string; metric: string; }, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full text-center hover:shadow-2xl transition-all duration-500 border-2"
                  style={{ borderColor: 'hsl(var(--border))' }}
                >
                  <CardHeader>
                    <motion.div 
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: 'hsl(var(--accent))' }}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="w-8 h-8" style={{ color: 'hsl(var(--primary))' }} />
                    </motion.div>
                    <CardTitle className="text-lg mb-2">{stat.title}</CardTitle>
                    <div className="text-3xl font-bold gradient-text font-headline">
                      {stat.metric}
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