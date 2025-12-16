'use client'

import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle2, Phone, Mail, Building2, User, MapPin, Bot, Shield, ChevronDown, Search } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import toast from "react-hot-toast"

// 🌍 Complete ISD Code List
const countryCodes = [
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+1', country: 'USA', flag: '🇺🇸' },
  { code: '+1', country: 'Canada', flag: '🇨🇦' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+39', country: 'Italy', flag: '🇮🇹' },
  { code: '+34', country: 'Spain', flag: '🇪🇸' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+82', country: 'South Korea', flag: '🇰🇷' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷' },
  { code: '+52', country: 'Mexico', flag: '🇲🇽' },
  { code: '+7', country: 'Russia', flag: '🇷🇺' },
  { code: '+27', country: 'South Africa', flag: '🇿🇦' },
  { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
  { code: '+254', country: 'Kenya', flag: '🇰🇪' },
  { code: '+20', country: 'Egypt', flag: '🇪🇬' },
  { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
  { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
  { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+977', country: 'Nepal', flag: '🇳🇵' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
  { code: '+66', country: 'Thailand', flag: '🇹🇭' },
  { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
  { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
  { code: '+63', country: 'Philippines', flag: '🇵🇭' },
  { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
  { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
  { code: '+32', country: 'Belgium', flag: '🇧🇪' },
  { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
  { code: '+43', country: 'Austria', flag: '🇦🇹' },
  { code: '+46', country: 'Sweden', flag: '🇸🇪' },
  { code: '+47', country: 'Norway', flag: '🇳🇴' },
  { code: '+45', country: 'Denmark', flag: '🇩🇰' },
  { code: '+358', country: 'Finland', flag: '🇫🇮' },
  { code: '+48', country: 'Poland', flag: '🇵🇱' },
  { code: '+351', country: 'Portugal', flag: '🇵🇹' },
  { code: '+30', country: 'Greece', flag: '🇬🇷' },
  { code: '+90', country: 'Turkey', flag: '🇹🇷' },
  { code: '+972', country: 'Israel', flag: '🇮🇱' },
  { code: '+974', country: 'Qatar', flag: '🇶🇦' },
  { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
  { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
  { code: '+968', country: 'Oman', flag: '🇴🇲' },
  { code: '+962', country: 'Jordan', flag: '🇯🇴' },
  { code: '+961', country: 'Lebanon', flag: '🇱🇧' },
  { code: '+98', country: 'Iran', flag: '🇮🇷' },
  { code: '+93', country: 'Afghanistan', flag: '🇦🇫' },
  { code: '+353', country: 'Ireland', flag: '🇮🇪' },
  { code: '+36', country: 'Hungary', flag: '🇭🇺' },
  { code: '+420', country: 'Czech Republic', flag: '🇨🇿' },
  { code: '+40', country: 'Romania', flag: '🇷🇴' },
  { code: '+380', country: 'Ukraine', flag: '🇺🇦' },
  { code: '+54', country: 'Argentina', flag: '🇦🇷' },
  { code: '+56', country: 'Chile', flag: '🇨🇱' },
  { code: '+57', country: 'Colombia', flag: '🇨🇴' },
  { code: '+51', country: 'Peru', flag: '🇵🇪' },
  { code: '+58', country: 'Venezuela', flag: '🇻🇪' },
]

// 🔽 ISD Code Dropdown Component
const ISDCodeDropdown = ({ 
  selectedCode, 
  onSelect 
}: { 
  selectedCode: typeof countryCodes[0], 
  onSelect: (code: typeof countryCodes[0]) => void 
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearch('')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filteredCodes = countryCodes.filter(
    c => c.country.toLowerCase().includes(search.toLowerCase()) || 
         c.code.includes(search)
  )

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 h-12 px-3 bg-muted/50 border border-r-0 border-input rounded-l-md hover:bg-muted transition-colors min-w-[100px]"
      >
        <span className="text-xl mb-1">{selectedCode.flag}</span>
        <span className="text-sm font-medium">{selectedCode.code}</span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-1 w-72 bg-background border border-input rounded-lg shadow-xl z-50 overflow-hidden"
          >
            {/* Search Box */}
            <div className="p-2 border-b border-input">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search country..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full h-10 pl-9 pr-3 bg-muted/50 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  autoFocus
                />
              </div>
            </div>

            {/* Country List */}
            <div className="max-h-60 overflow-y-auto">
              {filteredCodes.length > 0 ? (
                filteredCodes.map((country, index) => (
                  <button
                    key={`${country.code}-${country.country}-${index}`}
                    type="button"
                    onClick={() => {
                      onSelect(country)
                      setIsOpen(false)
                      setSearch('')
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors text-left ${
                      selectedCode.code === country.code && selectedCode.country === country.country
                        ? 'bg-primary/10 text-primary'
                        : ''
                    }`}
                  >
                    <span className="text-xl">{country.flag}</span>
                    <span className="flex-1 text-sm font-medium">{country.country}</span>
                    <span className="text-sm text-muted-foreground">{country.code}</span>
                  </button>
                ))
              ) : (
                <div className="px-4 py-6 text-center text-muted-foreground text-sm">
                  No country found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const AICallingAgentPage = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // ✅ State Added
  const initialFormState = {
    companyName: '',
    companyContact: '',
    companyEmail: '',
    companyNo: '',
    companyAddress: '',
    companyCity: '',
    companyState: '',
    companyPincode: '',
  }

  const [formData, setFormData] = useState(initialFormState)
  
  // 🆕 ISD Code State
  const [selectedISD, setSelectedISD] = useState(countryCodes[0]) // Default: India

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'companyNo') {
      const numericValue = value.replace(/\D/g, '').slice(0, 15) // Allow up to 15 digits for international
      setFormData(prev => ({ ...prev, [name]: numericValue }))
    } else if (name === 'companyPincode') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10)
      setFormData(prev => ({ ...prev, [name]: numericValue }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.companyName || !formData.companyContact || !formData.companyEmail || !formData.companyNo) {
      toast.error("Please fill all required fields!")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.companyEmail)) {
      toast.error("Please enter a valid email!")
      return
    }

    if (formData.companyNo.length < 6) {
      toast.error("Please enter a valid phone number!")
      return
    }

    setLoading(true)

    // 🆕 Full phone number with ISD code
    const fullPhoneNumber = `${selectedISD.code}${formData.companyNo}`

    try {
      const response = await fetch("/api/ai-calling-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: formData.companyName,
          contactPerson: formData.companyContact,
          email: formData.companyEmail,
          phone: fullPhoneNumber, // 🆕 Sending with ISD code
          countryCode: selectedISD.code, // 🆕 Separate country code
          country: selectedISD.country, // 🆕 Country name
          address: formData.companyAddress,
          city: formData.companyCity,
          state: formData.companyState,
          pincode: formData.companyPincode,
          source: "AI Calling Agent - Ads Campaign",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true)
        toast.success("🎉 Form Submitted Successfully!")
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
    setSelectedISD(countryCodes[0])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/30 flex items-center justify-center p-4">
      <div className="fixed top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg relative z-10"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 rounded-2xl blur-xl opacity-70" />
        <div className="relative bg-background border-2 border-primary/20 rounded-2xl p-6 md:p-8 shadow-2xl">
          {success ? (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8 space-y-6"
            >
              <div className="mx-auto h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Thank You! 🎉</h3>
                <p className="text-muted-foreground">Your enquiry has been submitted successfully!</p>
              </div>
              <Button onClick={handleReset} variant="outline" className="w-full">Submit Another Enquiry</Button>
            </motion.div>
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-2xl font-bold font-headline">AI Calling Agent</h1>
                <p className="text-muted-foreground mt-2">Fill the form & get a callback</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input id="companyName" name="companyName" placeholder="Your Company Name" value={formData.companyName} onChange={handleChange} className="h-12 pl-11" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyContact">Contact Person *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input id="companyContact" name="companyContact" placeholder="Your Full Name" value={formData.companyContact} onChange={handleChange} className="h-12 pl-11" required />
                  </div>
                </div>

                {/* 🆕 Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="companyEmail">Email *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input id="companyEmail" name="companyEmail" type="email" placeholder="email@company.com" value={formData.companyEmail} onChange={handleChange} className="h-12 pl-11" required />
                  </div>
                </div>

                {/* 🆕 Phone with ISD Code */}
                <div className="space-y-2">
                  <Label htmlFor="companyNo">Phone Number *</Label>
                  <div className="flex">
                    <ISDCodeDropdown 
                      selectedCode={selectedISD} 
                      onSelect={setSelectedISD} 
                    />
                    <div className="relative flex-1">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input 
                        id="companyNo" 
                        name="companyNo" 
                        type="tel" 
                        placeholder="Phone Number" 
                        value={formData.companyNo} 
                        onChange={handleChange} 
                        maxLength={15} 
                        className="h-12 pl-11 rounded-l-none border-l-0" 
                        required 
                      />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Selected: {selectedISD.flag} {selectedISD.country} ({selectedISD.code})
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyAddress">Company Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input id="companyAddress" name="companyAddress" placeholder="Address..." value={formData.companyAddress} onChange={handleChange} className="h-12 pl-11" />
                  </div>
                </div>

                {/* City & State */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyCity">City</Label>
                    <Input id="companyCity" name="companyCity" placeholder="Mumbai" value={formData.companyCity} onChange={handleChange} className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyState">State</Label>
                    <Input id="companyState" name="companyState" placeholder="Maharashtra" value={formData.companyState} onChange={handleChange} className="h-12" />
                  </div>
                </div>
                
                {/* Pincode */}
                <div className="space-y-2">
                  <Label htmlFor="companyPincode">Pincode / ZIP Code</Label>
                  <Input id="companyPincode" name="companyPincode" placeholder="400001" maxLength={10} value={formData.companyPincode} onChange={handleChange} className="h-12" />
                </div>

                <Button disabled={loading} type="submit" className="w-full h-14 text-lg font-semibold mt-2" size="lg">
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Enquiry'
                  )}
                </Button>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Shield className="w-4 h-4" /><span>Your data is 100% secure</span>
                </div>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default AICallingAgentPage