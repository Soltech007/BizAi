'use client'

import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X, Loader2, CheckCircle2 } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import toast from "react-hot-toast"

// --- CONSTANTS ---
const employeeRanges = [
  { value: "1-10", label: "1-10" },
  { value: "11-50", label: "11-50" },
  { value: "51-200", label: "51-200" },
  { value: "201-500", label: "201-500" },
  { value: "501-1000", label: "501-1000" },
  { value: "1000+", label: "1000+" },
];

const industries = [
  "Agriculture", "Automotive", "Banking", "Chemical", "Consulting", "Education", 
  "Financial Services", "Health Care", "Manufacturing", "Real Estate", 
  "Retail & Wholesale", "Software", "Technology", "Logistics & Warehousing", "Other"
].map((ind) => ({ value: ind, label: ind }));

const statesAndCities: { [key: string]: string[] } = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur"],
  "Delhi": ["New Delhi", "South Delhi", "North Delhi"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Vapi"],
  "Karnataka": ["Bengaluru", "Mysuru", "Hubli"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  "Telangana": ["Hyderabad", "Warangal"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Noida", "Ghaziabad"],
  "West Bengal": ["Kolkata", "Howrah"],
  // Add more as needed
};
const statesList = Object.keys(statesAndCities).sort();


// --- POPUP MODAL ---
const EnquiryModal = ({ isOpen, onClose, pageContext }: { isOpen: boolean; onClose: () => void; pageContext: string }) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  
  // Initial State Object
  const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    industry: '',
    noOfEmployees: '',
    state: '',
    city: '',
    message: ''
  }
  
  const [formData, setFormData] = useState(initialFormState)
  
  // Custom Location Logic
  const [showCustomState, setShowCustomState] = useState(false);
  const [showCustomCity, setShowCustomCity] = useState(false);
  const [customState, setCustomState] = useState("");
  const [customCity, setCustomCity] = useState("");
  const [availableCities, setAvailableCities] = useState<string[]>([]);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  // Handle State Selection Change
  useEffect(() => {
    if (formData.state && formData.state !== "other" && statesAndCities[formData.state]) {
      setAvailableCities(statesAndCities[formData.state]);
      setShowCustomCity(false);
      setFormData(prev => ({ ...prev, city: "" }));
    } else if (formData.state === "other") {
      setAvailableCities([]);
      setShowCustomCity(true);
    } else {
      setAvailableCities([]);
    }
  }, [formData.state]);

  const handleStateChange = (value: string) => {
    if (value === "other") {
      setShowCustomState(true);
      setFormData(prev => ({ ...prev, state: "other", city: "" }));
    } else {
      setShowCustomState(false);
      setCustomState("");
      setFormData(prev => ({ ...prev, state: value, city: "" }));
    }
  };

  const handleCityChange = (value: string) => {
    if (value === "other") {
      setShowCustomCity(true);
      setFormData(prev => ({ ...prev, city: "other" }));
    } else {
      setShowCustomCity(false);
      setCustomCity("");
      setFormData(prev => ({ ...prev, city: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.firstName || !formData.email) {
      toast.error("Name and Email are required")
      return
    }

    setLoading(true)

    // Prepare Final Data Object
    const finalFormData = {
        ...formData,
        state: showCustomState ? customState : formData.state,
        city: showCustomCity ? customCity : formData.city,
        source: pageContext 
    };

    try {
      const response = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalFormData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true)
        toast.success("Inquiry Sent Successfully!")
        setTimeout(() => {
            onClose()
            setSuccess(false)
            setFormData(initialFormState)
            setShowCustomState(false)
            setShowCustomCity(false)
            setCustomState("")
            setCustomCity("")
        }, 2500)
      } else {
        toast.error(data.error || "Submission failed.")
      }
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 ">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl bg-background border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Close Button */}
            <div className="absolute right-4 top-4 z-10">
               <button 
                 onClick={onClose} 
                 className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
               >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
              {success ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Thank You!</h3>
                  <p className="text-muted-foreground">
                    We have received your inquiry regarding <br/>
                    <span className="font-semibold text-primary">{pageContext}</span>.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6 pr-8">
                    <h3 className="text-2xl font-bold font-headline">Get a Quote</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Regarding: <span className="text-primary font-semibold">{pageContext}</span>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* --- Personal Info --- */}
                    <div>
                        <h4 className="text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wider border-b pb-1">Personal Details</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name *</Label>
                                <Input 
                                    id="firstName" 
                                    placeholder="First Name" 
                                    value={formData.firstName}
                                    onChange={(e) => setFormData(prev => ({...prev, firstName: e.target.value}))}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input 
                                    id="lastName" 
                                    placeholder="Last Name" 
                                    value={formData.lastName}
                                    onChange={(e) => setFormData(prev => ({...prev, lastName: e.target.value}))}
                                />
                            </div>
                        </div>
                    </div>

                    {/* --- Contact Info --- */}
                    <div>
                        <h4 className="text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wider border-b pb-1">Contact Info</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email *</Label>
                                <Input 
                                    id="email" 
                                    type="email" 
                                    placeholder="work@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input 
                                    id="phone" 
                                    type="tel" 
                                    placeholder="+91..."
                                    value={formData.phone}
                                    onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                                />
                            </div>
                            <div className="space-y-2 sm:col-span-2">
                                <Label htmlFor="website">Website (Optional)</Label>
                                <Input 
                                    id="website" 
                                    type="url"
                                    placeholder="https://yourcompany.com"
                                    value={formData.website}
                                    onChange={(e) => setFormData(prev => ({...prev, website: e.target.value}))}
                                />
                            </div>
                        </div>
                    </div>

                    {/* --- Organization Info --- */}
                    <div>
                        <h4 className="text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wider border-b pb-1">Organization & Location</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                             <div className="space-y-2">
                                <Label htmlFor="company">Organization Name</Label>
                                <Input 
                                    id="company" 
                                    placeholder="Company Name"
                                    value={formData.company}
                                    onChange={(e) => setFormData(prev => ({...prev, company: e.target.value}))}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="industry">Industry</Label>
                                <select
                                    id="industry"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    value={formData.industry}
                                    onChange={(e) => setFormData(prev => ({...prev, industry: e.target.value}))}
                                >
                                    <option value="">Select Industry</option>
                                    {industries.map((ind) => (
                                        <option key={ind.value} value={ind.value}>{ind.label}</option>
                                    ))}
                                </select>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="employees">No. of Employees</Label>
                                <select
                                    id="employees"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    value={formData.noOfEmployees}
                                    onChange={(e) => setFormData(prev => ({...prev, noOfEmployees: e.target.value}))}
                                >
                                    <option value="">Select Range</option>
                                    {employeeRanges.map((range) => (
                                        <option key={range.value} value={range.value}>{range.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* State/City */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             <div className="space-y-2">
                                <Label htmlFor="state">State</Label>
                                <select
                                    id="state"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    value={showCustomState ? "other" : formData.state}
                                    onChange={(e) => handleStateChange(e.target.value)}
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
                                        className="mt-2"
                                        value={customState}
                                        onChange={(e) => setCustomState(e.target.value)}
                                    />
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="city">City</Label>
                                <select
                                    id="city"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    value={showCustomCity && !showCustomState ? "other" : formData.city}
                                    onChange={(e) => handleCityChange(e.target.value)}
                                    disabled={!formData.state && !showCustomState}
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
                                        className="mt-2"
                                        value={customCity}
                                        onChange={(e) => setCustomCity(e.target.value)}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* --- Message --- */}
                    {/* <div className="space-y-2">
                        <Label htmlFor="message">Requirements / Message</Label>
                        <textarea 
                            id="message"
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
                            placeholder="Tell us about your requirements..."
                            value={formData.message}
                            onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                        />
                    </div> */}

                    <Button disabled={loading} type="submit" className="w-full btn-primary-custom h-12 text-base mt-4">
                      {loading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : 'Submit Request'}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

// --- 3. MAIN COMPONENT ---
const RequestQuote = ({ pageContext = "General Inquiry" }: { pageContext?: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="py-10 md:py-10">
          <div className="container max-w-6xl px-4 md:px-8">
            <motion.div 
              className="text-center rounded-2xl py-16 px-6 relative overflow-hidden"
              style={{
                background: 'linear-gradient(to bottom, hsl(var(--accent)), hsl(var(--background)))'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl"
                style={{ backgroundColor: 'hsl(var(--primary) / 0.05)' }}
                animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.h2 
                className="text-3xl md:text-4xl font-bold font-headline mb-4 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Ready to Build Your Solution?
              </motion.h2>
              <motion.p 
                className="text-lg max-w-2xl mx-auto mb-8 relative z-10"
                style={{ color: 'hsl(var(--muted-foreground))' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Let's discuss your requirements for <strong>{pageContext}</strong> and build a custom roadmap.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4 justify-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={() => setIsModalOpen(true)}
                    className="btn-primary-custom h-11 px-8 text-base"
                  >
                    For Inquiry
                    <motion.span
                      className="inline-block ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <EnquiryModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            pageContext={pageContext}
        />
    </>
  )
}

export default RequestQuote