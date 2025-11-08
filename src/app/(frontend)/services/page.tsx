// src/app/services/page.tsx
"use client";

import { services, crossIndustryBenefits } from "@/data/data";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowRight, Clock, Languages, GitBranch, BarChart3, Bot } from "lucide-react";
import Link from "next/link";
import RequestQuote from "../common/requestquote";
import { FaAws, FaSalesforce, FaReact } from "react-icons/fa";
import {  SiPython, SiKubernetes, SiTableau, SiZendesk, SiBmcsoftware } from "react-icons/si";
import {  TbBrandNextjs } from "react-icons/tb";
import { BsClipboardDataFill } from "react-icons/bs";

const techStack = [
    { name: "IBM Watsonx", icon: SiBmcsoftware, category: "AI & ML" },
    { name: "Python", icon: SiPython, category: "AI & ML" },
    { name: "Power BI", icon: BsClipboardDataFill , category: "Data & BI" },
    { name: "Tableau", icon: SiTableau, category: "Data & BI" },
    { name: "AWS", icon: FaAws, category: "Cloud & Infra" },
    { name: "Kubernetes", icon: SiKubernetes, category: "Cloud & Infra" },
    { name: "Next.js", icon: TbBrandNextjs, category: "Frontend" },
    { name: "React", icon: FaReact, category: "Frontend" },
    { name: "Salesforce", icon: FaSalesforce, category: "Integrations" },
    { name: "Zendesk", icon: SiZendesk, category: "Integrations" },
];
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export default function ServicesPage() {
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
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center"
          >
            <span className="hero-badge inline-flex items-center gap-2 mb-6">
              <Bot className="w-4 h-4" />
              Our Expertise
            </span>
            <h1 className="text-5xl md:text-6xl font-headline font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
              We provide end-to-end AI solutions, from strategic consultation and training to full-scale implementation, 
              designed to solve your most pressing business challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div key={service.id} variants={fadeInUp}>
                  <Card className="h-full flex flex-col group border-2 hover:border-primary/50 hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-lg" style={{ backgroundColor: 'hsl(var(--accent))' }}>
                          <ServiceIcon className="w-8 h-8" style={{ color: 'hsl(var(--primary))' }} />
                        </div>
                        <CardTitle className="text-2xl font-headline group-hover:text-primary transition-colors">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="pain-points">
                          <AccordionTrigger>Common Pain Points</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 pl-2">
                              {service.painPoints.map((point, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="solutions">
                          <AccordionTrigger>Our Solutions</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 pl-2">
                              {service.solutions.map((solution, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                                  <span>{solution}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Link href={`/services/${service.id}`} className="font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      
      {/* Industry Use Cases Section */}
<section className="py-20 md:py-28 border-t" style={{ backgroundColor: 'hsl(var(--accent) / 0.3)' }}>
  <div className="container max-w-7xl px-4 md:px-8">
    <motion.div
      className="text-center mb-16"
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
    >
      <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
        Powered by <span className="gradient-text">Cutting-Edge Technology</span>
      </h2>
      <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
        We leverage industry-leading platforms and frameworks to build robust, scalable, and secure AI solutions.
      </p>
    </motion.div>
    
    <motion.div
        className="flex flex-wrap justify-center gap-4 md:gap-6"
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
    >
        {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
                <motion.div key={index} variants={fadeInUp} whileHover={{ y: -5, scale: 1.05 }}>
                    <Card className="flex items-center gap-3 p-3 border-2 hover:shadow-md transition-all">
                        <Icon className="w-6 h-6 text-muted-foreground" />
                        <span className="font-medium text-sm">{tech.name}</span>
                    </Card>
                </motion.div>
            )
        })}
    </motion.div>
  </div>
</section>

      {/* Cross-Industry Benefits */}
      <section className="py-20">
          <div className="container max-w-7xl px-4 md:px-8">
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {crossIndustryBenefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                        <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{delay: index * 0.1}}>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg" style={{ backgroundColor: 'hsl(var(--accent))' }}>
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </motion.div>
          </div>
      </section>
      
      {/* CTA */}
      <RequestQuote />
    </div>
  );
}