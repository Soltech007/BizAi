"use client";

import { useState, useRef } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  Building2,
  Check,
  Loader2,
  Sparkles,
  Contact,
} from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
// import { supabase } from "@/lib/supabase"; // Make sure this path is correct
import RequestQuote from "../common/requestquote";
import { set } from "date-fns";

// Add these option arrays before the component
const employeeRanges = [
  { value: "1-10", label: "1-10" },
  { value: "11-50", label: "11-50" },
  { value: "51-200", label: "51-200" },
  { value: "201-500", label: "201-500" },
  { value: "501-1000", label: "501-1000" },
  { value: "1000+", label: "1000+" },
];

const industries = [
  "Accounting", "Advertising", "Aerospace", "Agriculture", "Airline", "Apparel & Accessories",
  "Automotive", "Banking", "Biotechnology", "Broadcasting", "Brokerage", "Chemical",
  "Computer", "Consulting", "Consumer Products", "Cosmetics", "Defense", "Department Stores",
  "Education", "Electronics", "Energy", "Entertainment & Leisure", "Executive Search",
  "Financial Services", "Food, Beverage & Tobacco", "Grocery", "Health Care", "Internet Publishing",
  "Investment Banking", "Legal", "Manufacturing", "Music", "Newspaper Publishers", "Online Auctions",
  "Pension Funds", "Pharmaceuticals", "Private Equity", "Publishing", "Real Estate",
  "Retail & Wholesale", "Securities & Commodity Exchanges", "Service", "Soap & Detergent",
  "Software", "Sports", "Technology", "Telecommunications", "Television", "Transportation",
  "Venture Capital", "Society", "Construction", "Hotel", "Logistics & Warehousing",
].map(ind => ({ value: ind, label: ind }));


const marketSegments = [
  { value: "enterprise", label: "Enterprise" },
  { value: "mid-market", label: "Mid-Market" },
  { value: "smb", label: "Small & Medium Business" },
  { value: "startup", label: "Startup" },
];

const territories = [
  { value: "north-america", label: "North America" },
  { value: "europe", label: "Europe" },
  { value: "asia-pacific", label: "Asia Pacific" },
  { value: "middle-east", label: "Middle East" },
  { value: "latin-america", label: "Latin America" },
  { value: "africa", label: "Africa" },
];

const contactReasons = [
  { value: "demo", label: "Request a Demo" },
  { value: "pricing", label: "Pricing & Licensing" },
  { value: "consultation", label: "Consultation / Strategy" },
  { value: "support", label: "Support & Maintenance" },
  { value: "partnership", label: "Partnerships" },
  { value: "other", label: "Other" },
];

// Quick contact cards data
const quickContacts = [
  {
    title: "Email Us",
    value: "contact@bizaihacks.com",
    action: "mailto:contact@bizaihacks.com",
    icon: <Mail className="w-6 h-6" />,
    description: "Our team typically replies within 1 business day.",
  },
  {
    title: "Call Us",
    value: "+91 90235 06084",
    action: "tel:+919876543210",
    icon: <Phone className="w-6 h-6" />,
    description: "Available Mon-Fri, 9am-6pm IST.",
  },
  {
    title: "WhatsApp",
    value: "+91 90235 06084",
    action: "https://wa.me/919876543210",
    icon: <MessageSquare className="w-6 h-6" />,
    description: "Chat with us instantly on WhatsApp.",
  },
];

export default function ContactPage() {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    phoneExt: "",
    mobile: "",
    whatsapp: "",
    website: "",
    fax: "",
    company: "",
    noOfEmployees: "",
    annualRevenue: "",
    industry: "",
    marketSegment: "",
    territory: "",
    reason: "",
    message: "",
  };
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormState);


  const heroRef = useRef(null);
  const formRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const formInView = useInView(formRef, { once: true, amount: 0.1 });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.firstName || !formData.email) {
    toast.error("Please fill in all required fields.");
    return;
  }

  setLoading(true);
  const loadingToast = toast.loading("Sending your message...");

  try {
    // call our server-side API route
    const response = await fetch("/api/send-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log("Server Response:", data);

    if (response.ok) {
      toast.success("Lead created successfully in ERPNext!");
      setFormData(initialFormState);
    } else {
      toast.error(data._server_messages || data.error || "Failed to create lead.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    toast.error("Something went wrong. Try again later.");
  } finally {
    setLoading(false);
    toast.dismiss(loadingToast);
  }
};



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="py-12 md:py-10"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--primary) / 0.05) 0%, hsl(var(--secondary) / 0.05) 100%)",
        }}
      >
        <div className="container max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl text-center mx-auto">
            <span className="hero-badge inline-flex items-center gap-2 mb-6">
              <Contact className="w-4 h-4" />
              Contact Us
            </span>
            <motion.h1
              className="text-4xl md:text-6xl font-bold font-headline tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Let's Build the Future of AI,{" "}
              <span className="gradient-text">Together</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Have questions about our AI solutions? Want to see a live demo?
              We're here to help you accelerate your business outcomes.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <div className="py-16 bg-background border-b">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickContacts.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.15 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-3 rounded-lg"
                        style={{
                          background: "hsl(var(--primary) / 0.1)",
                          color: "hsl(var(--primary))",
                        }}
                        whileHover={{ rotate: 15, scale: 1.1 }}
                      >
                        {contact.icon}
                      </motion.div>
                      <div className="flex-grow">
                        <h3 className="font-semibold mb-1">{contact.title}</h3>
                        <a
                          href={contact.action}
                          className="font-medium hover:underline"
                          style={{ color: "hsl(var(--primary))" }}
                        >
                          {contact.value}
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div ref={formRef} className="py-10 md:py-10 " id="form">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-headline">
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form and our AI experts will get back to you
                    shortly.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    {/* Personal Information Section */}
                    <div className="space-y-4">
                      <h3
                        className="text-lg font-semibold"
                        style={{ color: "hsl(var(--primary))" }}
                      >
                        Personal Information
                      </h3>

                      {/* Name Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                firstName: e.target.value,
                              })
                            }
                            required
                            disabled={loading}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                lastName: e.target.value,
                              })
                            }
                            disabled={loading}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Contact Information Section */}
                    <div className="space-y-4">
                      <h3
                        className="text-lg font-semibold"
                        style={{ color: "hsl(var(--primary))" }}
                      >
                        Contact Information
                      </h3>

                      {/* Email & Website */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="test@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            required
                            disabled={loading}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website">Website</Label>
                          <Input
                            id="website"
                            type="url"
                            placeholder="https://example.com"
                            value={formData.website}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                website: e.target.value,
                              })
                            }
                            disabled={loading}
                          />
                        </div>
                      </div>

                      {/* Phone & Extension */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-2 sm:col-span-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 90235 06084"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            disabled={loading}
                          />
                        </div>
                     
                      </div>

                    </div>

                    {/* Organization Information Section */}
                    <div className="space-y-4">
                      <h3
                        className="text-lg font-semibold"
                        style={{ color: "hsl(var(--primary))" }}
                      >
                        Organization Information
                      </h3>

                      {/* Company Name */}
                      <div className="space-y-2">
                        <Label htmlFor="company">Organization Name</Label>
                        <Input
                          id="company"
                          placeholder="Demo Corp"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                          disabled={loading}
                        />
                      </div>

                      {/* No of Employees & Annual Revenue */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="noOfEmployees">No of Employees</Label>
                          <select
                            id="noOfEmployees"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={formData.noOfEmployees}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                noOfEmployees: e.target.value,
                              })
                            }
                            disabled={loading}
                          >
                            <option value="">Select range</option>
                            {employeeRanges.map((range) => (
                              <option key={range.value} value={range.value}>
                                {range.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      
                      </div>

                      {/* Industry & Market Segment */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry</Label>
                          <select
                            id="industry"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={formData.industry}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                industry: e.target.value,
                              })
                            }
                            disabled={loading}
                          >
                            <option value="">Select industry</option>
                            {industries.map((industry) => (
                              <option
                                key={industry.value}
                                value={industry.value}
                              >
                                {industry.label}
                              </option>
                            ))}
                          </select>
                        </div>
                       
                      </div>

                  
                    </div>

                    {/* Inquiry Details Section */}
                    {/* <div className="space-y-4">
                      <h3
                        className="text-lg font-semibold"
                        style={{ color: "hsl(var(--primary))" }}
                      >
                        Inquiry Details
                      </h3>

                    
                      <div className="space-y-2">
                        <Label>How can we help you? *</Label>
                        <RadioGroup
                          value={formData.reason}
                          onValueChange={(value: any) =>
                            setFormData({ ...formData, reason: value })
                          }
                          disabled={loading}
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {contactReasons.map((reason) => (
                              <div
                                key={reason.value}
                                className="flex items-center space-x-2"
                              >
                                <RadioGroupItem
                                  value={reason.value}
                                  id={reason.value}
                                />
                                <Label
                                  htmlFor={reason.value}
                                  className="font-normal cursor-pointer"
                                >
                                  {reason.label}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project or questions..."
                          className="min-h-[120px]"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          required
                          disabled={loading}
                        />
                      </div>
                    </div> */}

                    <div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full btn-primary-custom"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </div>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting, you agree to our{" "}
                      <Link href="/privacy" className="underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Side Info */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <Card className="">
                  <CardHeader>
                    <CardTitle>What to Expect?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "Free AI Strategy Session",
                        desc: "Understand high-ROI use-cases for your business.",
                      },
                      {
                        title: "Personalized Demo",
                        desc: "See our AI Calling Agent and Chatbot in action.",
                      },
                      {
                        title: "Custom Proposal",
                        desc: "A detailed plan with transparent pricing.",
                      },
                      {
                        title: "ROI Calculator & Timeline",
                        desc: "Get projected cost savings and implementation roadmap.",
                      },
                      {
                        title: "Integration Assessment",
                        desc: "Review compatibility with your existing systems (CRM, ERP, etc.).",
                      },
                      {
                        title: "Proof of Concept Options",
                        desc: "Start with a pilot project to validate value before full deployment.",
                      },
                      {
                        title: "Training & Support Plan",
                        desc: "Comprehensive onboarding and 24/7 technical assistance included.",
                      },
                      {
                        title: "Data Security Review",
                        desc: "We evaluate your current security posture and compliance readiness.",
                      },
                      // {
                      //   title: "AI Workflow Optimization",
                      //   desc: "Identify areas where automation can reduce manual workload.",
                      // },
                      // {
                      //   title: "Scalability Consultation",
                      //   desc: "Plan how to expand AI usage across departments efficiently.",
                      // },
                      // {
                      //   title: "Post-Implementation Monitoring",
                      //   desc: "Track performance metrics and ensure consistent AI accuracy.",
                      // },
                      // {
                      //   title: "Dedicated Account Manager",
                      //   desc: "Get a single point of contact for all your AI project needs.",
                      // },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Check
                          className="w-5 h-5 mt-0.5 flex-shrink-0"
                          style={{ color: "hsl(var(--primary))" }}
                        />
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          <p
                            className="text-sm"
                            style={{ color: "hsl(var(--muted-foreground))" }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2
                        className="w-5 h-5"
                        style={{ color: "hsl(var(--primary))" }}
                      />
                      Head Office
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                    Vibrant  Park,  Survey No. 182 <br /> Near NH 8, GIDC Phase 1, <br/>
                 Vapi, Gujarat - 396195, India
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <RequestQuote />
    </div>
  );
}
