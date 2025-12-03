// src/app/services/implementation/page.tsx
"use client";

import { services } from "@/data/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, 
  Rocket,
  Shield,
  BarChart3,
  Clock,
  Monitor,
  CheckCircle2,
  AlertCircle,
  Activity,
  GitMerge,
  Headphones,
  Cloud
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import RequestQuote from "../../app/(frontend)/common/requestquote";
import { ElementType } from "react";

const implementationFeatures = [
    { icon: Rocket, title: "End-to-End Development", description: "From ideation to deployment, we build and manage your AI chatbots and voice agents for a seamless launch.", color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
    { icon: GitMerge, title: "Custom System Integration", description: "Seamlessly integrate our AI solutions with your core systems like ERP, CRM, and internal databases.", color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
    { icon: Activity, title: "Performance Monitoring", description: "We provide continuous, real-time monitoring to ensure optimal performance, uptime, and user satisfaction.", color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
    { icon: Headphones, title: "Managed Services & Support", description: "Benefit from our 24/7 SLA-based technical support and proactive maintenance for peace of mind.", color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
    { icon: Cloud, title: "Scalable Cloud Deployment", description: "We deploy solutions on robust cloud infrastructures like AWS for maximum scalability, reliability, and security.", color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
    { icon: Shield, title: "Enterprise-Grade Security", description: "Implementing security best practices, including end-to-end encryption, access control, and compliance.", color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" }
];
const keyBenefits = [
  {
    icon: Clock,
    title: "Fast Deployment",
    metric: "4-8 Weeks"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    metric: "100% Secure"
  },
  {
    icon: BarChart3,
    title: "Measurable ROI",
    metric: "3-5x ROI"
  },
  {
    icon: Monitor,
    title: "24/7 Support",
    metric: "99.9% Uptime"
  }
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

export default function ImplementationPage() {
  const service = services.find(s => s.id === "implementation");
  
  if (!service) {
    return (
      <div className="container mx-auto text-center py-20">
        Service 'implementation' not found. Please check your data file.
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
                <Rocket className="w-4 h-4" />
                End-to-End Solution
              </motion.span>
            </Link>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="gradient-text">{service.title}</span>
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

      {/* For: implementation/page.tsx */}
<section className="py-20 md:py-28">
  <div className="container max-w-7xl px-4 md:px-8">
    
      <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" variants={staggerContainer} initial="visible" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {implementationFeatures.map((feature, index) => {
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
                    From <span className="gradient-text">Concept to Reality</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    We handle the complexities of AI development so you can focus on your business.
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
                        <CardTitle className="text-2xl font-headline text-destructive">Implementation Hurdles</CardTitle>
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
                        <CardTitle className="text-2xl font-headline text-primary">Our Expert Solutions</CardTitle>
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

      {/* Key Benefits Section */}
      <section className="py-10 md:py-10 border-t" style={{ borderColor: 'hsl(var(--border))' }}>
        <div className="container max-w-7xl px-4 md:px-8">
            <motion.div
                className="text-center mb-16"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                    Key <span className="gradient-text">Benefits</span>
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    Partnering with us for implementation delivers immediate and long-term value.
                </p>
            </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit: { icon: ElementType; title: string; metric: string; }, index: number) => (
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
                      <benefit.icon className="w-8 h-8" style={{ color: 'hsl(var(--primary))' }} />
                    </motion.div>
                    <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                    <div className="text-3xl font-bold gradient-text font-headline">
                      {benefit.metric}
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
     <RequestQuote pageContext="Service: Implementation & Support" />
    </div>
  );
}