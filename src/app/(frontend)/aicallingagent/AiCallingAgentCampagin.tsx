'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Loader2, CheckCircle2, Phone, Mail, Building2, User, MapPin, Bot, Shield } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import toast from "react-hot-toast"

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
    companyState: '', // 🆕 New Field
    companyPincode: '',
  }

  const [formData, setFormData] = useState(initialFormState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'companyNo') {
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

    if (formData.companyNo.length !== 10) {
      toast.error("Mobile number must be exactly 10 digits!")
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/ai-calling-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: formData.companyName,
          contactPerson: formData.companyContact,
          email: formData.companyEmail,
          phone: formData.companyNo,
          address: formData.companyAddress,
          city: formData.companyCity,
          state: formData.companyState, // 🆕 Sending State
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
            <div className="text-center py-8 space-y-6">
              <div className="mx-auto h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Thank You! 🎉</h3>
                <p className="text-muted-foreground">Your enquiry has been submitted successfully!</p>
              </div>
              <Button onClick={handleReset} variant="outline" className="w-full">Submit Another Enquiry</Button>
            </div>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyEmail">Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input id="companyEmail" name="companyEmail" type="email" placeholder="email@company.com" value={formData.companyEmail} onChange={handleChange} className="h-12 pl-11" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyNo">Phone *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input id="companyNo" name="companyNo" type="tel" placeholder="10 Digit Number" value={formData.companyNo} onChange={handleChange} maxLength={10} className="h-12 pl-11" required />
                    </div>
                  </div>
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
                  <Label htmlFor="companyPincode">Pincode</Label>
                  <Input id="companyPincode" name="companyPincode" placeholder="400001" maxLength={6} value={formData.companyPincode} onChange={handleChange} className="h-12" />
                </div>

                <Button disabled={loading} type="submit" className="w-full h-14 text-lg font-semibold mt-2" size="lg">
                  {loading ? <Loader2 className="animate-spin mr-2" /> : 'Submit Enquiry'}
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