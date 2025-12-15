'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { 
  Loader2, CheckCircle2, Building2, User, Phone, Mail, MapPin, 
  Briefcase, Users, TrendingUp, FileText, HelpCircle, Shield,
  Handshake
} from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import toast from "react-hot-toast"

// --- CONSTANTS ---
const businessTypes = [
  { value: "IT Services", label: "IT Services" },
  { value: "Digital Marketing Agency", label: "Digital Marketing Agency" },
  { value: "ERP / CRM Consultant", label: "ERP / CRM Consultant" },
  { value: "Freelancer", label: "Freelancer" },
  { value: "Other", label: "Other" },
];

const industriesServed = [
  "Agriculture", "Automotive", "Banking & Finance", "Chemical", "Construction",
  "Education", "Healthcare", "Hospitality", "IT & Software", "Logistics",
  "Manufacturing", "Real Estate", "Retail", "Telecom", "Other"
];

const experienceRanges = [
  { value: "0-1", label: "0-1 Year" },
  { value: "1-3", label: "1-3 Years" },
  { value: "3-5", label: "3-5 Years" },
  { value: "5-10", label: "5-10 Years" },
  { value: "10+", label: "10+ Years" },
];

const staffRanges = [
  { value: "1-5", label: "1-5" },
  { value: "6-15", label: "6-15" },
  { value: "16-30", label: "16-30" },
  { value: "31-50", label: "31-50" },
  { value: "50+", label: "50+" },
];

const salesVolumeRanges = [
  { value: "Below 1 Lakh", label: "Below ₹1 Lakh" },
  { value: "1-5 Lakhs", label: "₹1-5 Lakhs" },
  { value: "5-10 Lakhs", label: "₹5-10 Lakhs" },
  { value: "10-25 Lakhs", label: "₹10-25 Lakhs" },
  { value: "25+ Lakhs", label: "₹25+ Lakhs" },
];

const hearAboutUs = [
  { value: "Google Search", label: "Google Search" },
  { value: "Social Media", label: "Social Media" },
  { value: "LinkedIn", label: "LinkedIn" },
  { value: "Referral", label: "Referral" },
  { value: "Event/Webinar", label: "Event/Webinar" },
  { value: "Other", label: "Other" },
];

const statesAndCities: { [key: string]: string[] } = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati"],
  "Delhi": ["New Delhi", "South Delhi", "North Delhi", "East Delhi"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Vapi"],
  "Karnataka": ["Bengaluru", "Mysuru", "Hubli", "Mangalore"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
  "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Kota"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Noida", "Ghaziabad", "Varanasi"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur"],
};
const statesList = Object.keys(statesAndCities).sort();

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// --- MAIN COMPONENT ---
const ChannelPartnerPage = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const initialFormState = {
    companyName: '',
    applicantName: '',
    mobile: '',
    email: '',
    state: '',
    city: '',
    businessAddress: '',
    businessType: '',
    yearsOfExperience: '',
    staffCount: '',
    industriesServed: [] as string[],
    expectedSalesVolume: '',
    existingClients: '',
    gstNumber: '',
    panNumber: '',
    hearAboutUs: '',
    whyPartner: '',
  }

  const [formData, setFormData] = useState(initialFormState)
  const [showCustomState, setShowCustomState] = useState(false)
  const [showCustomCity, setShowCustomCity] = useState(false)
  const [customState, setCustomState] = useState("")
  const [customCity, setCustomCity] = useState("")
  const [availableCities, setAvailableCities] = useState<string[]>([])

  // Handle State Selection Change
  useEffect(() => {
    if (formData.state && formData.state !== "other" && statesAndCities[formData.state]) {
      setAvailableCities(statesAndCities[formData.state])
      setShowCustomCity(false)
      setFormData(prev => ({ ...prev, city: "" }))
    } else if (formData.state === "other") {
      setAvailableCities([])
      setShowCustomCity(true)
    } else {
      setAvailableCities([])
    }
  }, [formData.state])

  const handleStateChange = (value: string) => {
    if (value === "other") {
      setShowCustomState(true)
      setFormData(prev => ({ ...prev, state: "other", city: "" }))
    } else {
      setShowCustomState(false)
      setCustomState("")
      setFormData(prev => ({ ...prev, state: value, city: "" }))
    }
  }

  const handleCityChange = (value: string) => {
    if (value === "other") {
      setShowCustomCity(true)
      setFormData(prev => ({ ...prev, city: "other" }))
    } else {
      setShowCustomCity(false)
      setCustomCity("")
      setFormData(prev => ({ ...prev, city: value }))
    }
  }

  const handleIndustryChange = (industry: string) => {
    setFormData(prev => ({
      ...prev,
      industriesServed: prev.industriesServed.includes(industry)
        ? prev.industriesServed.filter(i => i !== industry)
        : [...prev.industriesServed, industry]
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === 'mobile') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10)
      setFormData(prev => ({ ...prev, [name]: numericValue }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.companyName || !formData.applicantName || !formData.mobile || !formData.email) {
      toast.error("Please fill all required fields!")
      return
    }

    if (!agreed) {
      toast.error("Please agree to the declaration!")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email!")
      return
    }

    if (formData.mobile.length !== 10) {
      toast.error("Mobile number must be exactly 10 digits!")
      return
    }

    setLoading(true)

    try {
      const finalFormData = {
        ...formData,
        state: showCustomState ? customState : formData.state,
        city: showCustomCity ? customCity : formData.city,
        partnerType: "Channel Partner",
        source: "Channel Partner Application Form",
      }

      const response = await fetch("/api/partner-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalFormData),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(true)
        toast.success("🎉 Application Submitted Successfully!")
      } else {
        toast.error(data.error || "Something went wrong!")
      }
    } catch (error) {
      console.error(error)
      toast.error("Network error. Please try again!")
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setSuccess(false)
    setFormData(initialFormState)
    setAgreed(false)
    setShowCustomState(false)
    setShowCustomCity(false)
    setCustomState("")
    setCustomCity("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/30">
      {/* Background Effects */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="py-12 md:py-16 border-b" style={{ backgroundColor: "hsl(var(--accent) / 0.3)" }}>
        <div className="container max-w-4xl px-4 md:px-8">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="hero-badge inline-flex items-center gap-2 mb-4">
              <Handshake className="w-4 h-4" />
              Partnership Program
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold mb-4">
              Become a <span className="gradient-text">Channel Partner</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg max-w-2xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
              Grow your business with BizAiHacks by becoming our trusted Channel Partner. 
              Generate your own invoices while we provide cutting-edge AI solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 rounded-2xl blur-xl opacity-50" />
            
            <Card className="relative border-2 border-primary/20 shadow-2xl">
              <CardHeader className="border-b bg-accent/30 p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-headline">Channel Partner Application</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Fill in your details to apply</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 md:p-8">
                {success ? (
                  <motion.div 
                    className="text-center py-12 space-y-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="mx-auto h-24 w-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Thank You! 🎉</h3>
                      <p className="text-muted-foreground text-lg">
                        Your Channel Partner application has been submitted successfully!
                      </p>
                      <p className="text-muted-foreground mt-2">
                        Our team will review your application and get back to you within 2-3 business days.
                      </p>
                    </div>
                    <Button onClick={handleReset} variant="outline" size="lg" className="mt-4">
                      Submit Another Application
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Section 1: Basic Details */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 pb-2 border-b">
                        <User className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold">Basic Details</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="companyName">Company / Firm Name *</Label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="companyName"
                              name="companyName"
                              placeholder="Your Company Name"
                              value={formData.companyName}
                              onChange={handleChange}
                              className="h-12 pl-11"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="applicantName">Applicant Full Name *</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="applicantName"
                              name="applicantName"
                              placeholder="Your Full Name"
                              value={formData.applicantName}
                              onChange={handleChange}
                              className="h-12 pl-11"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="mobile">Mobile Number *</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="mobile"
                              name="mobile"
                              type="tel"
                              placeholder="10 Digit Number"
                              value={formData.mobile}
                              onChange={handleChange}
                              maxLength={10}
                              className="h-12 pl-11"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="email@company.com"
                              value={formData.email}
                              onChange={handleChange}
                              className="h-12 pl-11"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="state">State *</Label>
                          <select
                            id="state"
                            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            value={showCustomState ? "other" : formData.state}
                            onChange={(e) => handleStateChange(e.target.value)}
                            required
                          >
                            <option value="">Select State</option>
                            {statesList.map((state) => (
                              <option key={state} value={state}>{state}</option>
                            ))}
                            <option value="other">➕ Other</option>
                          </select>
                          {showCustomState && (
                            <Input
                              placeholder="Enter State"
                              className="mt-2 h-12"
                              value={customState}
                              onChange={(e) => setCustomState(e.target.value)}
                            />
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <select
                            id="city"
                            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            value={showCustomCity && !showCustomState ? "other" : formData.city}
                            onChange={(e) => handleCityChange(e.target.value)}
                            disabled={!formData.state && !showCustomState}
                            required
                          >
                            <option value="">
                              {!formData.state && !showCustomState ? "Select State First" : showCustomState ? "Enter City Below" : "Select City"}
                            </option>
                            {!showCustomState && availableCities.map((city) => (
                              <option key={city} value={city}>{city}</option>
                            ))}
                            {!showCustomState && formData.state && (
                              <option value="other">➕ Other</option>
                            )}
                          </select>
                          {(showCustomCity || showCustomState) && (
                            <Input
                              placeholder="Enter City"
                              className="mt-2 h-12"
                              value={customCity}
                              onChange={(e) => setCustomCity(e.target.value)}
                            />
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="businessAddress">Business Address *</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                          <textarea
                            id="businessAddress"
                            name="businessAddress"
                            placeholder="Complete Business Address"
                            value={formData.businessAddress}
                            onChange={handleChange}
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 pl-11 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Business Information */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 pb-2 border-b">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold">Business Information</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="businessType">Type of Business</Label>
                          <select
                            id="businessType"
                            name="businessType"
                            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            value={formData.businessType}
                            onChange={handleChange}
                          >
                            <option value="">Select Type</option>
                            {businessTypes.map((type) => (
                              <option key={type.value} value={type.value}>{type.label}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="yearsOfExperience">Years of Experience</Label>
                          <select
                            id="yearsOfExperience"
                            name="yearsOfExperience"
                            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            value={formData.yearsOfExperience}
                            onChange={handleChange}
                          >
                            <option value="">Select Experience</option>
                            {experienceRanges.map((range) => (
                              <option key={range.value} value={range.value}>{range.label}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="staffCount">Sales / Technical Staff</Label>
                          <select
                            id="staffCount"
                            name="staffCount"
                            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            value={formData.staffCount}
                            onChange={handleChange}
                          >
                            <option value="">Select Range</option>
                            {staffRanges.map((range) => (
                              <option key={range.value} value={range.value}>{range.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Sales & Market Info */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 pb-2 border-b">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold">Sales & Market Info</h3>
                      </div>

                      <div className="space-y-2">
                        <Label>Industries You Serve (Select Multiple)</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-4 border rounded-lg bg-accent/20">
                          {industriesServed.map((industry) => (
                            <label
                              key={industry}
                              className={`flex items-center gap-2 p-2 rounded-md cursor-pointer transition-colors text-sm ${
                                formData.industriesServed.includes(industry)
                                  ? 'bg-primary/20 border-primary text-primary'
                                  : 'bg-background border hover:bg-accent'
                              } border`}
                            >
                              <input
                                type="checkbox"
                                checked={formData.industriesServed.includes(industry)}
                                onChange={() => handleIndustryChange(industry)}
                                className="sr-only"
                              />
                              <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                                formData.industriesServed.includes(industry) ? 'bg-primary border-primary' : 'border-muted-foreground'
                              }`}>
                                {formData.industriesServed.includes(industry) && (
                                  <CheckCircle2 className="w-3 h-3 text-white" />
                                )}
                              </div>
                              <span className="text-xs">{industry}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expectedSalesVolume">Expected Monthly Sales Volume</Label>
                          <select
                            id="expectedSalesVolume"
                            name="expectedSalesVolume"
                            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            value={formData.expectedSalesVolume}
                            onChange={handleChange}
                          >
                            <option value="">Select Range</option>
                            {salesVolumeRanges.map((range) => (
                              <option key={range.value} value={range.value}>{range.label}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="existingClients">Existing Clients Count</Label>
                          <div className="relative">
                            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="existingClients"
                              name="existingClients"
                              type="number"
                              placeholder="e.g., 25"
                              value={formData.existingClients}
                              onChange={handleChange}
                              className="h-12 pl-11"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 4: GST & Legal */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 pb-2 border-b">
                        <FileText className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold">GST & Legal</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="gstNumber">GST Number</Label>
                          <Input
                            id="gstNumber"
                            name="gstNumber"
                            placeholder="e.g., 27AABCU9603R1ZM"
                            value={formData.gstNumber}
                            onChange={handleChange}
                            className="h-12"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="panNumber">PAN Number</Label>
                          <Input
                            id="panNumber"
                            name="panNumber"
                            placeholder="e.g., ABCDE1234F"
                            value={formData.panNumber}
                            onChange={handleChange}
                            className="h-12"
                            maxLength={10}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 5: Partnership Understanding */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 pb-2 border-b">
                        <HelpCircle className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold">Partnership Understanding</h3>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
                          <select
                            id="hearAboutUs"
                            name="hearAboutUs"
                            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            value={formData.hearAboutUs}
                            onChange={handleChange}
                          >
                            <option value="">Select Option</option>
                            {hearAboutUs.map((option) => (
                              <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="whyPartner">Why do you want to become a Channel Partner?</Label>
                          <textarea
                            id="whyPartner"
                            name="whyPartner"
                            placeholder="Share your motivation and vision for this partnership..."
                            value={formData.whyPartner}
                            onChange={handleChange}
                            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Declaration */}
                    <div className="p-4 bg-accent/30 rounded-lg border-2 border-primary/20">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                          className="mt-1 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm leading-relaxed">
                          <strong>Declaration:</strong> I understand that sales invoice will be generated by me (Channel Partner) 
                          and BizAiHacks will provide solutions/products. I agree to the terms and conditions of the partnership program.
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <Button
                      disabled={loading || !agreed}
                      type="submit"
                      className="w-full h-14 text-lg font-semibold"
                      size="lg"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin mr-2" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Handshake className="w-5 h-5 mr-2" />
                          Apply as Channel Partner
                        </>
                      )}
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4" />
                      <span>Your data is 100% secure and confidential</span>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ChannelPartnerPage