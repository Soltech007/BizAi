"use client";

import { motion } from "framer-motion";
import { 
  ArrowLeft, CheckCircle2, AlertTriangle, TrendingUp, Phone, MessageSquare, 
  Lightbulb, Target, Building2, CarFront, Leaf, FlaskConical, Heart, Truck, 
  Landmark, GraduationCap, ShoppingCart, LucideIcon, ArrowRight, Clock, 
  Users, Zap, BarChart3, ChevronDown, ChevronUp
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RequestQuote from "@/app/(frontend)/common/requestquote";
import { IndustrySolution } from "@/data/industry-solutions-detailed";
import { useState } from "react";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Building2, CarFront, Leaf, FlaskConical, Heart, Truck, Landmark, GraduationCap, ShoppingCart,
};

interface IndustrySolutionPageProps {
  data: IndustrySolution;
}

export default function IndustrySolutionPage({ data }: IndustrySolutionPageProps) {
  const Icon = iconMap[data.iconName] || Building2;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Stats */}
  <section
  className="py-10 md:py-10 border-b relative overflow-hidden"
  style={{ backgroundColor: 'hsl(var(--accent) / 0.3)' }}
>
  {/* Background decoration */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
    <div
      className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl"
      style={{ background: 'hsl(var(--primary))' }}
    />
    <div
      className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl"
      style={{ background: 'hsl(var(--primary))' }}
    />
  </div>

  <div className="container max-w-7xl px-4 md:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Back Button */}
      <Link href="/solutions">
        <Button
          variant="ghost"
          size="sm"
          className="mb-8 hover:gap-3 transition-all group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:mr-3 transition-all" />
          Back to All Solutions
        </Button>
      </Link>

      {/* Icon & Title */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
        <div
          className={`w-20 h-20 rounded-2xl flex items-center justify-center ${data.color} shadow-lg`}
        >
          <Icon className="w-10 h-10 text-white" />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-3">
            {data.industry}
          </h1>
          <p
            className="text-xl md:text-2xl"
            style={{ color: 'hsl(var(--muted-foreground))' }}
          >
            {data.tagline}
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {data.heroStats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 + 0.3 }}
          >
            <Card
              className="text-center border-2 h-full flex items-center justify-center"
              style={{ borderColor: 'hsl(var(--primary))' }}
            >
              <CardContent className="p-8 flex flex-col items-center justify-center h-full">
                {/* Main numeric/stat part */}
                <p className="text-5xl md:text-6xl font-bold gradient-text mb-3">
                  {stat.value}
                </p>
                {/* Label text */}
                <p
                  className="text-base md:text-lg font-medium leading-snug"
                  style={{ color: 'hsl(var(--muted-foreground))' }}
                >
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>


      {/* Challenges Section - Detailed */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
                {/* <AlertTriangle className="w-10 h-10 text-red-600" /> */}
                Industry Challenges
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Understanding the pain points that hold your business back
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {data.challenges.map((challenge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="h-full border-2 border-red-200 hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                      </div>
                      <CardTitle className="text-xl">{challenge.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4" style={{ color: 'hsl(var(--foreground))' }}>
                        {challenge.description}
                      </p>
                      <div className="p-3 rounded-lg bg-red-50 border-l-4 border-red-500">
                        <p className="text-sm font-semibold text-red-900">
                          <strong>Impact:</strong> {challenge.impact}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* BizAI Hacks Approach - Detailed */}
      <section className="py-10 md:py-12" style={{ backgroundColor: 'hsl(var(--accent) / 0.2)' }}>
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
                {/* <Lightbulb className="w-10 h-10" style={{ color: 'hsl(var(--primary))' }} /> */}
                Our Strategic Approach
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
                How BizAI Hacks transforms your operations with AI
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2" style={{ borderColor: 'hsl(var(--primary))' }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${data.color}`}>
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl">Consultation & Discovery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    {data.approach.consultation}
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--primary))' }} />
                      <span>Process mapping and bottleneck analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--primary))' }} />
                      <span>Customer journey visualization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--primary))' }} />
                      <span>AI opportunity identification</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2" style={{ borderColor: 'hsl(var(--primary))' }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${data.color}`}>
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl">Training & Enablement</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    {data.approach.training}
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--primary))' }} />
                      <span>Comprehensive team training programs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--primary))' }} />
                      <span>AI-human collaboration workflows</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--primary))' }} />
                      <span>Ongoing support and optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
                      
      {/* Solutions - Detailed Features */}
      <section className="py-10 md:py-12">
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
                <Zap className="w-10 h-10 text-green-600" />
                AI-Powered Solutions
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Cutting-edge AI technology tailored for {data.industry}
              </p>
            </div> */}

            <div className="space-y-12">
              {/* AI Calling Agent */}
              <Card className="border-2 overflow-hidden" style={{ borderColor: 'hsl(var(--primary))' }}>
                <CardHeader className="bg-gradient-to-r" style={{ background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)) 100%)` }}>
                  <div className="flex items-center gap-4">
                    <div className=" hidden md:flex w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm  items-center justify-center">
                      <Phone className=" w-14 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl md:text-3xl text-white">
                        {data.solutions.callingAgent.title}
                      </CardTitle>
                      <p className="text-white/90 mt-2">{data.solutions.callingAgent.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {data.solutions.callingAgent.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--primary) / 0.1)' }}>
                            <span className="font-bold" style={{ color: 'hsl(var(--primary))' }}>{idx + 1}</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                          <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AI Chatbot */}
              <Card className="border-2 overflow-hidden" style={{ borderColor: 'hsl(var(--primary))' }}>
                <CardHeader className="bg-gradient-to-r" style={{ background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)) 100%)` }}>
                  <div className="flex items-center gap-4">
                    <div className=" hidden md:flex w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm  items-center justify-center">
                      {/* <MessageSquare className="w-14 h-8 text-white" /> */}
                    </div>
                    <div>
                      <CardTitle className="text-2xl md:text-3xl text-white">
                        {data.solutions.chatbot.title}
                      </CardTitle>
                      <p className="text-white/90 mt-2">{data.solutions.chatbot.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {data.solutions.chatbot.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--primary) / 0.1)' }}>
                            <span className="font-bold" style={{ color: 'hsl(var(--primary))' }}>{idx + 1}</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                          <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: 'hsl(var(--accent) / 0.2)' }}>
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {data.workflow.title}
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Step-by-step breakdown of our AI implementation process
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5" style={{ backgroundColor: 'hsl(var(--border))' }} />

              <div className="space-y-12">
                {data.workflow.steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <Card className="inline-block max-w-md">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-xl mb-2">{step.title}</h4>
                          <p style={{ color: 'hsl(var(--muted-foreground))' }}>{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl ${data.color} shadow-lg relative z-10`}>
                        {step.step}
                      </div>
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases - Real Examples */}
      <section className="py-10 md:py-12">
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Real-World Success Stories
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
                See how businesses like yours achieved measurable results
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {data.useCases.map((useCase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="h-full border-2 hover:shadow-xl transition-all group">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'hsl(var(--primary) / 0.1)' }}>
                        <BarChart3 className="w-6 h-6" style={{ color: 'hsl(var(--primary))' }} />
                      </div>
                      <CardTitle className="text-xl">{useCase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4" style={{ color: 'hsl(var(--foreground))' }}>
                        {useCase.description}
                      </p>
                      <div className="p-4 rounded-lg bg-green-50 border-l-4 border-green-500">
                        <p className="font-semibold text-green-900 flex items-start gap-2">
                          <TrendingUp className="w-5 h-5 mt-0.5 flex-shrink-0" />
                          <span>{useCase.result}</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-10 md:py-12" style={{ backgroundColor: 'hsl(var(--accent) / 0.2)' }}>
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                The Transformation
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Compare your operations before and after BizAI Hacks
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
             
              <Card className="border-2 border-red-200">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-2xl flex items-center gap-2 text-red-900">
                    <AlertTriangle className="w-6 h-6" />
                    {data.beforeAfter.before.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {data.beforeAfter.before.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 mt-0.5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">✕</span>
                        </div>
                        <span style={{ color: 'hsl(var(--foreground))' }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2" style={{ borderColor: 'hsl(var(--primary))' }}>
                <CardHeader style={{ backgroundColor: 'hsl(var(--primary) / 0.1)' }}>
                  <CardTitle className="text-2xl flex items-center gap-2" style={{ color: 'hsl(var(--primary))' }}>
                    <CheckCircle2 className="w-6 h-6" />
                    {data.beforeAfter.after.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {data.beforeAfter.after.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--primary))' }} />
                        <span style={{ color: 'hsl(var(--foreground))' }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-10 md:py-12">
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center justify-center gap-3">
              {/* <TrendingUp className="w-10 h-10 text-green-600" /> */}
              Measurable Business Impact
            </h2>

            <Card className="max-w-3xl mx-auto border-2 overflow-hidden" style={{ borderColor: 'hsl(var(--primary))' }}>
              <CardContent className="p-12">
                <p className="text-7xl md:text-8xl font-bold gradient-text mb-4">
                  {data.impact.primary.value}
                </p>
                <p className="text-3xl font-semibold mb-8" style={{ color: 'hsl(var(--foreground))' }}>
                  {data.impact.primary.label}
                </p>
                <div className="space-y-4 mt-12">
                  {data.impact.secondary.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center justify-center gap-3 text-lg"
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span style={{ color: 'hsl(var(--muted-foreground))' }}>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-10 md:py-12" style={{ backgroundColor: 'hsl(var(--accent) / 0.2)' }}>
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
                {/* <Clock className="w-10 h-10" style={{ color: 'hsl(var(--primary))' }} /> */}
                Implementation Timeline
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
                From kickoff to full deployment in just 4-5 weeks
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {data.implementationTimeline.map((phase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${data.color}`}>
                        <span className="text-white font-bold text-xl">{idx + 1}</span>
                      </div>
                      <CardTitle className="text-lg">{phase.phase}</CardTitle>
                      <p className="text-sm font-semibold" style={{ color: 'hsl(var(--primary))' }}>
                        {phase.duration}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                        {phase.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 md:py-12">
        <div className="container max-w-4xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Get answers to common questions about AI implementation
              </p>
            </div>

            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-accent/50 transition-colors"
                  >
                    <span className="font-semibold text-lg pr-4">{faq.question}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(var(--primary))' }} />
                    ) : (
                      <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(var(--primary))' }} />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6">
                      <p className="text-base leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <RequestQuote />
    </div>
  );
}