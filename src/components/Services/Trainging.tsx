// src/app/services/training/page.tsx
"use client";

import { services } from "@/data/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, 
  GraduationCap,
  Users,
  Award,
  BarChart3,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  BookOpen,
  Code,
  UserCheck
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import RequestQuote from "../../app/(frontend)/common/requestquote";
import { ElementType } from "react";

const trainingStats = [
  {
    icon: Users,
    title: "Professionals Trained",
    metric: "500+"
  },
  {
    icon: Award,
    title: "Completion Rate",
    metric: "98%"
  },
  {
    icon: GraduationCap,
    title: "Training Modules",
    metric: "40+"
  },
  {
    icon: BarChart3,
    title: "Average Rating",
    metric: "4.9/5"
  }
];

// training/page.tsx 
const trainingFeatures = [
    { icon: Briefcase, title: "Executive AI Workshops", description: "Strategic training for C-suite and business leaders on AI's impact, opportunities, and risks.", color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
    { icon: BookOpen, title: "Practitioner Bootcamps", description: "Hands-on training for teams in prompt engineering, prompt ops, and using AI tools effectively.", color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
    { icon: Code, title: "Developer Enablement", description: "Technical, in-depth training for developers on Watsonx, APIs, SDKs, and voice integrations.", color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
    { icon: UserCheck, title: "Adoption & Change Mgt.", description: "Programs to ensure successful AI tool rollout, user adoption, and creating internal champions.", color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
    { icon: GraduationCap, title: "Custom Corporate Training", description: "Tailored training programs designed specifically for your organization's unique needs and goals.", color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" },
    { icon: Award, title: "AI Certification Programs", description: "Certify your team's skills with our recognized programs, validating their expertise in the field.", color: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10" }
];

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

export default function TrainingPage() {
  const service = services.find(s => s.id === "training");
  
  if (!service) {
    return (
      <div className="container mx-auto text-center py-20">
        Service 'training' not found. Please check your data file.
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
                <GraduationCap className="w-4 h-4" />
                Skill Development
              </motion.span>
            </Link>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {service.title.split(' ').slice(0, 1).join(' ')} <span className="gradient-text">{service.title.split(' ').slice(1).join(' ')}</span>
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


{/* For: training/page.tsx */}
<section className="py-20 md:py-28">
  <div className="container max-w-7xl px-4 md:px-8">

      <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" variants={staggerContainer} initial="visible" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {trainingFeatures.map((feature, index) => {
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

      <section className="py-12 md:py-10">
        <div className="container max-w-7xl px-4 md:px-8">
            <motion.div
                className="text-center mb-16"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                    Bridging the <span className="gradient-text">AI Gap</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    We address common training challenges to empower your workforce for the AI era.
                </p>
            </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* --- Pain Points Card --- */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-2 border-destructive/20 bg-destructive/5">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <AlertCircle className="w-8 h-8 text-destructive flex-shrink-0"/>
                        <CardTitle className="text-2xl font-headline text-destructive">Training Challenges</CardTitle>
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
                        <CardTitle className="text-2xl font-headline text-primary">Our Training Solutions</CardTitle>
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

      {/* Training Stats Section */}
      <section className="py-10 md:py-10 border-t" style={{ borderColor: 'hsl(var(--border))' }}>
        <div className="container max-w-7xl px-4 md:px-8">
            <motion.div
                className="text-center mb-16"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                    Proven <span className="gradient-text">Training Impact</span>
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    Our programs deliver quantifiable results and high participant satisfaction.
                </p>
            </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingStats.map((stat: { icon: ElementType; title: string; metric: string; }, index: number) => (
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
     <RequestQuote pageContext="Service: AI Training" />
    </div>
  );
}