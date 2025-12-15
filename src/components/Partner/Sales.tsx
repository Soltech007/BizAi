'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { 
  Loader2, CheckCircle2, Building2, User, Phone, Mail, MapPin, 
  Briefcase, TrendingUp, Shield, CreditCard, Wallet, UserCheck,
  Target
} from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import toast from "react-hot-toast"

// --- CONSTANTS ---
const experienceRanges = [
  { value: "0-1", label: "0-1 Year" },
  { value: "1-3", label: "1-3 Years" },
  { value: "3-5", label: "3-5 Years" },
  { value: "5-10", label: "5-10 Years" },
  { value: "10+", label: "10+ Years" },
];

const leadGenerationMethods = [
  { value: "Direct Sales", label: "Direct Sales", icon: "🎯" },
  { value: "Reference Network", label: "Reference Network", icon: "🤝" },
  { value: "Digital Marketing", label: "Digital Marketing", icon: "📱" },
  { value: "Cold Calling", label: "Cold Calling", icon: "📞" },
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
const SalesPartnerPage = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const initialFormState = {
    fullName: '',
    companyName: '',
    mobile: '',
    email: '',
    state: '',
    city: '',
    partnerType: '', // Individual or Company
    salesExperience: '',
    preferredSalesArea: '',
    leadGenerationMethods: [] as string[],
    bankName: '',
    accountHolderName: '',
    accountNumber: '',
    ifscCode: '',
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

  const handleLeadMethodChange = (method: string) => {
    setFormData(prev => ({
      ...prev,
      leadGenerationMethods: prev.leadGenerationMethods.includes(method)
        ? prev.leadGenerationMethods.filter(m => m !== method)
        : [...prev.leadGenerationMethods, method]
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === 'mobile' || name === 'accountNumber') {
      const numericValue = value.replace(/\D/g, '')
      if (name === 'mobile') {
        setFormData(prev => ({ ...prev, [name]: numericValue.slice(0, 10) }))
      } else {
        setFormData(prev => ({ ...prev, [name]: numericValue }))
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.fullName || !formData.mobile || !formData.email) {
      toast.error("Please fill all required fields!")
      return
    }

    if (!agreed) {
      toast.error("Please agree to the terms!")
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
        partnerCategory: "Sales Partner",
        source: "Sales Partner Application Form",
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
      <div className="fixed top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

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
              <Target className="w-4 h-4" />
              Sales Partnership
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold mb-4">
              Become a <span className="gradient-text">Sales Partner</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg max-w-2xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
              Join BizAiHacks as a Sales Partner. We generate invoices, you bring clients — 
              and earn attractive commissions as per company policy.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-3xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-primary/20 to-green-500/20 rounded-2xl blur-xl opacity-50" />
            
            <Card className="relative border-2 border-primary/20 shadow-2xl">
              <CardHeader className="border-b bg-accent/30 p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-500/10 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-headline">Sales Partner Application</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Start earning with every successful referral</p>
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
                      <h3 className="text-3xl font-bold mb-2">Welcome Aboard! 🎉</h3>
                      <p className="text-muted-foreground text-lg">
                        Your Sales Partner application has been submitted successfully!
                      </p>
                      <p className="text-muted-foreground mt-2">
                        We'll review your application and contact you within 24-48 hours.
                      </p>
                    </div>
                    <Button onClick={handleReset} variant="outline" size="lg" className="mt-4">
                      Submit Another Application
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Section 1: Personal / Company Details */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 pb-2 border-b">
                        <User className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold">Personal / Company Details</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="fullName"
                              name="fullName"
                              placeholder="Your Full Name"
                              value={formData.fullName}
                              onChange={handleChange}
                              className="h-12 pl-11"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="companyName">Company Name (Optional)</Label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="companyName"
                              name="companyName"
                              placeholder="If applicable"
                              value={formData.companyName}
                              onChange={handleChange}
                              className="h-12 pl-11"
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
                              placeholder="email@example.com"
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
                    </div>

                    {/* Section 2: Sales Profile */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 pb-2 border-b">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold">Sales Profile</h3>
                      </div>

                      <div className="space-y-2">
                        <Label>Are you an Individual or Company? *</Label>
                        <div className="flex gap-4">
                          <label className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            formData.partnerType === 'Individual' 
                              ? 'border-primary bg-primary/10' 
                              : 'border-border hover:border-primary/50'
                          }`}>
                            <input
                              type="radio"
                              name="partnerType"
                              value="Individual"
                              checked={formData.partnerType === 'Individual'}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <User className={`w-5 h-5 ${formData.partnerType === 'Individual' ? 'text-primary' : 'text-muted-foreground'}`} />
                            <span className={`font-medium ${formData.partnerType === 'Individual' ? 'text-primary' : ''}`}>Individual</span>
                          </label>
                          <label className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            formData.partnerType === 'Company' 
                              ? 'border-primary bg-primary/10' 
                              : 'border-border hover:border-primary/50'
                          }`}>
                            <input
                              type="radio"
                              name="partnerType"
                              value="Company"
                              checked={formData.partnerType === 'Company'}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <Building2 className={`w-5 h-5 ${formData.partnerType === 'Company' ? 'text-primary' : 'text-muted-foreground'}`} />
                            <span className={`font-medium ${formData.partnerType === 'Company' ? 'text-primary' : ''}`}>Company</span>
                          </label>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="salesExperience">Sales Experience (Years)</Label>
                          <select
                            id="salesExperience"
                            name="salesExperience"
                            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            value={formData.salesExperience}
                            onChange={handleChange}
                          >
                            <option value="">Select Experience</option>
                            {experienceRanges.map((range) => (
                              <option key={range.value} value={range.value}>{range.label}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="preferredSalesArea">Preferred Sales Area</Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="preferredSalesArea"
                              name="preferredSalesArea"
                              placeholder="e.g., Mumbai, Maharashtra"
                              value={formData.preferredSalesArea}
                              onChange={handleChange}
                              className="h-12 pl-11"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Lead Generation Info */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 pb-2 border-b">
                        <Target className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold">Lead Generation Info</h3>
                      </div>

                      <div className="space-y-2">
                        <Label>How will you generate leads? (Select all that apply)</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {leadGenerationMethods.map((method) => (
                            <label
                              key={method.value}
                              className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                formData.leadGenerationMethods.includes(method.value)
                                  ? 'border-primary bg-primary/10'
                                  : 'border-border hover:border-primary/50'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={formData.leadGenerationMethods.includes(method.value)}
                                onChange={() => handleLeadMethodChange(method.value)}
                                className="sr-only"
                              />
                              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                                formData.leadGenerationMethods.includes(method.value) 
                                  ? 'bg-primary border-primary' 
                                  : 'border-muted-foreground'
                              }`}>
                                {formData.leadGenerationMethods.includes(method.value) && (
                                  <CheckCircle2 className="w-4 h-4 text-white" />
                                )}
                              </div>
                              <span className="text-lg">{method.icon}</span>
                              <span className="font-medium text-sm">{method.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Section 4: Bank Details (Optional) */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 pb-2 border-b">
                        <Wallet className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold">Bank Details <span className="text-sm font-normal text-muted-foreground">(Optional - for commission payout)</span></h3>
                      </div>

                      <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg">
                        <p className="text-sm text-amber-800 dark:text-amber-200">
                          💡 You can provide bank details later. These are only required when you're ready to receive commission payouts.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="bankName">Bank Name</Label>
                          <div className="relative">
                            <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="bankName"
                              name="bankName"
                              placeholder="e.g., HDFC Bank"
                              value={formData.bankName}
                              onChange={handleChange}
                              className="h-12 pl-11"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="accountHolderName">Account Holder Name</Label>
                          <div className="relative">
                            <UserCheck className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              id="accountHolderName"
                              name="accountHolderName"
                              placeholder="As per bank records"
                              value={formData.accountHolderName}
                              onChange={handleChange}
                              className="h-12 pl-11"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="accountNumber">Account Number</Label>
                          <Input
                            id="accountNumber"
                            name="accountNumber"
                            type="text"
                            placeholder="Enter Account Number"
                            value={formData.accountNumber}
                            onChange={handleChange}
                            className="h-12"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="ifscCode">IFSC Code</Label>
                          <Input
                            id="ifscCode"
                            name="ifscCode"
                            placeholder="e.g., HDFC0001234"
                            value={formData.ifscCode}
                            onChange={handleChange}
                            className="h-12"
                            maxLength={11}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Agreement */}
                    <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-800">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                          className="mt-1 h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-600"
                        />
                        <span className="text-sm leading-relaxed">
                          <strong>Agreement:</strong> I understand that sales invoice will be generated by BizAiHacks 
                          and commission will be paid as per company policy. I agree to work as a Sales Partner and 
                          adhere to the partnership guidelines.
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <Button
                      disabled={loading || !agreed}
                      type="submit"
                      className="w-full h-14 text-lg font-semibold bg-green-600 hover:bg-green-700"
                      size="lg"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin mr-2" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Target className="w-5 h-5 mr-2" />
                          Apply as Sales Partner
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

export default SalesPartnerPage