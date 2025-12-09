"use client";

import { useState, useRef, useEffect } from "react";
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
import RequestQuote from "../../app/(frontend)/common/requestquote";

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
  "Accounting",
  "Advertising",
  "Aerospace",
  "Agriculture",
  "Airline",
  "Apparel & Accessories",
  "Automotive",
  "Banking",
  "Biotechnology",
  "Broadcasting",
  "Brokerage",
  "Chemical",
  "Computer",
  "Consulting",
  "Consumer Products",
  "Cosmetics",
  "Defense",
  "Department Stores",
  "Education",
  "Electronics",
  "Energy",
  "Entertainment & Leisure",
  "Executive Search",
  "Financial Services",
  "Food, Beverage & Tobacco",
  "Grocery",
  "Health Care",
  "Internet Publishing",
  "Investment Banking",
  "Legal",
  "Manufacturing",
  "Music",
  "Newspaper Publishers",
  "Online Auctions",
  "Pension Funds",
  "Pharmaceuticals",
  "Private Equity",
  "Publishing",
  "Real Estate",
  "Retail & Wholesale",
  "Securities & Commodity Exchanges",
  "Service",
  "Soap & Detergent",
  "Software",
  "Sports",
  "Technology",
  "Telecommunications",
  "Television",
  "Transportation",
  "Venture Capital",
  "Society",
  "Construction",
  "Hotel",
  "Logistics & Warehousing",
].map((ind) => ({ value: ind, label: ind }));

// State and City Data
const statesAndCities: { [key: string]: string[] } = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Tirupati", "Rajahmundry", "Kakinada", "Kadapa", "Anantapur"],
  "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tawang", "Ziro", "Bomdila"],
  "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tinsukia", "Tezpur", "Bongaigaon"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Purnia", "Arrah", "Begusarai"],
  "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg", "Rajnandgaon", "Jagdalpur"],
  "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Bicholim"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", "Vapi", "Navsari", "Bharuch", "Anand", "Morbi", "Mehsana", "Junagadh"],
  "Haryana": ["Gurugram", "Faridabad", "Panipat", "Ambala", "Karnal", "Hisar", "Rohtak", "Sonipat", "Yamunanagar"],
  "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Kullu", "Solan", "Mandi", "Palampur", "Baddi"],
  "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh", "Deoghar", "Giridih"],
  "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubli", "Belgaum", "Dharwad", "Gulbarga", "Davangere", "Shimoga"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kannur", "Kollam", "Palakkad", "Alappuzha"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar", "Rewa", "Satna", "Dewas"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Thane", "Navi Mumbai", "Kolhapur", "Solapur", "Amravati", "Sangli"],
  "Manipur": ["Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Kakching"],
  "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongstoin", "Williamnagar"],
  "Mizoram": ["Aizawl", "Lunglei", "Champhai", "Serchhip", "Kolasib"],
  "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur", "Puri", "Balasore"],
  "Punjab": ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Pathankot"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner", "Ajmer", "Alwar", "Bharatpur", "Sikar"],
  "Sikkim": ["Gangtok", "Namchi", "Gyalshing", "Mangan", "Ravangla"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Erode", "Vellore", "Thoothukudi"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Secunderabad", "Ramagundam"],
  "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar", "Belonia"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Prayagraj", "Noida", "Ghaziabad", "Meerut", "Bareilly", "Aligarh", "Moradabad"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Rishikesh", "Nainital", "Mussoorie", "Roorkee", "Haldwani", "Rudrapur"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Darjeeling", "Kharagpur", "Haldia"],
  "Delhi": ["New Delhi", "Central Delhi", "South Delhi", "North Delhi", "East Delhi", "West Delhi"],
  "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Kathua", "Udhampur"],
  "Ladakh": ["Leh", "Kargil"],
  "Puducherry": ["Puducherry", "Karaikal", "Mahe", "Yanam"],
  "Chandigarh": ["Chandigarh"],
  "Andaman and Nicobar Islands": ["Port Blair", "Diglipur", "Rangat"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
  "Lakshadweep": ["Kavaratti", "Agatti", "Minicoy"],
};

const statesList = Object.keys(statesAndCities).sort();

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
<<<<<<< HEAD
    value: "+91 90235 06084",
=======
    value: "+91 97237 23322",
>>>>>>> 49348d4ed6f203e50201fa07449bba9a7f7d4c14
    action: "tel:+919876543210",
    icon: <Phone className="w-6 h-6" />,
    description: "Available Mon-Fri, 9am-6pm IST.",
  },
  {
    title: "WhatsApp",
<<<<<<< HEAD
    value: "+91 90235 06084",
=======
    value: "+91 97237 23322",
>>>>>>> 49348d4ed6f203e50201fa07449bba9a7f7d4c14
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
    state: "",
    city: "",
  };
  
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  
  // State for custom input handling
  const [showCustomState, setShowCustomState] = useState(false);
  const [showCustomCity, setShowCustomCity] = useState(false);
  const [customState, setCustomState] = useState("");
  const [customCity, setCustomCity] = useState("");
  const [availableCities, setAvailableCities] = useState<string[]>([]);

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const formInView = useInView(formRef, { once: true, amount: 0.1 });

  // Update available cities when state changes
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
      setFormData({ ...formData, state: "other", city: "" });
    } else {
      setShowCustomState(false);
      setCustomState("");
      setFormData({ ...formData, state: value, city: "" });
    }
  };

  const handleCityChange = (value: string) => {
    if (value === "other") {
      setShowCustomCity(true);
      setFormData({ ...formData, city: "other" });
    } else {
      setShowCustomCity(false);
      setCustomCity("");
      setFormData({ ...formData, city: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Prepare final form data with custom values if needed
    const finalFormData = {
      ...formData,
      state: showCustomState ? customState : formData.state,
      city: showCustomCity ? customCity : formData.city,
    };

    setLoading(true);
    const loadingToast = toast.loading("Sending your message...");

    try {
      const response = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalFormData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Data Sent Successfully", {
          position: "top-center",
          icon: "✅",
          style: {
            background: `btn-primary-custom`,
            marginTop: "50px",
            color: `hsl(var(--foreground))`,
            borderRadius: "8px",
          },
        });

        setFormData(initialFormState);
        setShowCustomState(false);
        setShowCustomCity(false);
        setCustomState("");
        setCustomCity("");
      } else {
        toast.error(
          data._server_messages || data.error || "Failed to create lead."
        );
      }
    } catch (error) {
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
                  <form className="space-y-6" onSubmit={handleSubmit}>
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
                            placeholder="First Name"
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
                            placeholder="Last Name"
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
                            placeholder="contact@bizaihacks.com"
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
                            placeholder="https://bizaihacks.com/"
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

                      {/* Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-2 sm:col-span-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
<<<<<<< HEAD
                            placeholder="+91 90235 06084"
=======
                            placeholder="+91 97237 23322"
>>>>>>> 49348d4ed6f203e50201fa07449bba9a7f7d4c14
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

                    {/* Location Information Section */}
                    <div className="space-y-4">
                      <h3
                        className="text-lg font-semibold"
                        style={{ color: "hsl(var(--primary))" }}
                      >
                        Location Information
                      </h3>

                      {/* State & City */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* State Dropdown */}
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <select
                            id="state"
<<<<<<< HEAD
=======
                            aria-label="Select State"
>>>>>>> 49348d4ed6f203e50201fa07449bba9a7f7d4c14
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={showCustomState ? "other" : formData.state}
                            onChange={(e) => handleStateChange(e.target.value)}
                            disabled={loading}
                          >
                            <option value="">Select State</option>
                            {statesList.map((state) => (
                              <option key={state} value={state}>
                                {state}
                              </option>
                            ))}
                            <option value="other">➕ Other (Add Custom)</option>
                          </select>
                          
                          {/* Custom State Input */}
                          {showCustomState && (
                            <Input
                              placeholder="Enter your state"
                              value={customState}
                              onChange={(e) => setCustomState(e.target.value)}
                              disabled={loading}
                              className="mt-2"
                            />
                          )}
                        </div>

                        {/* City Dropdown */}
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <select
                            id="city"
<<<<<<< HEAD
=======
                            aria-label="Select City"
>>>>>>> 49348d4ed6f203e50201fa07449bba9a7f7d4c14
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={showCustomCity && !showCustomState ? "other" : formData.city}
                            onChange={(e) => handleCityChange(e.target.value)}
                            disabled={loading || (!formData.state && !showCustomState)}
                          >
                            <option value="">
                              {!formData.state && !showCustomState 
                                ? "Select State First" 
                                : showCustomState 
                                  ? "Enter City Below" 
                                  : "Select City"}
                            </option>
                            {!showCustomState && availableCities.map((city) => (
                              <option key={city} value={city}>
                                {city}
                              </option>
                            ))}
                            {!showCustomState && formData.state && (
                              <option value="other">➕ Other (Add Custom)</option>
                            )}
                          </select>
                          
                          {/* Custom City Input */}
                          {(showCustomCity || showCustomState) && (
                            <Input
                              placeholder="Enter your city"
<<<<<<< HEAD
=======
                              aria-label="Enter your city"
>>>>>>> 49348d4ed6f203e50201fa07449bba9a7f7d4c14
                              value={customCity}
                              onChange={(e) => setCustomCity(e.target.value)}
                              disabled={loading}
                              className="mt-2"
                            />
                          )}
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
<<<<<<< HEAD
=======
                          aria-label="Company Name"
>>>>>>> 49348d4ed6f203e50201fa07449bba9a7f7d4c14
                          placeholder="Bizaihacks"
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

                      {/* No of Employees */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="noOfEmployees">No of Employees</Label>
                          <select
                            id="noOfEmployees"
<<<<<<< HEAD
=======
                              aria-label="Number of Employees"
>>>>>>> 49348d4ed6f203e50201fa07449bba9a7f7d4c14
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

                      {/* Industry */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry</Label>
                          <select
                            id="industry"
<<<<<<< HEAD
=======
                            aria-label="Select Industry"
>>>>>>> 49348d4ed6f203e50201fa07449bba9a7f7d4c14
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
                      Vibrant Park, Survey No. 182 <br /> Near NH 8, GIDC Phase
                      1, <br />
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
      {/* <RequestQuote /> */}
    </div>
  );
}