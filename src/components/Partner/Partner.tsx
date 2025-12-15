"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import {
  Handshake,
  Building2,
  User,
  Phone,
  Mail,
  Briefcase,
  Globe,
  MapPin,
  IndianRupee,
  ChevronDown,
  Search,
  Plus,
  Check,
  Loader2,
  Sparkles,
  BadgeCheck,
  TrendingUp,
  Users,
  Building,
  FileText,
  CreditCard,
  Wallet,
  UserCheck,
  Target,
  ArrowLeft,
  CheckCircle2,
  Shield,
} from "lucide-react";

// ✅ Complete Country List
const allCountries = [
  "Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Austria",
  "Bahrain", "Bangladesh", "Belgium", "Bhutan", "Brazil", "Canada", "Chile",
  "China", "Colombia", "Czech Republic", "Denmark", "Egypt", "Ethiopia",
  "Finland", "France", "Germany", "Ghana", "Greece", "Hong Kong", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Lebanon", "Malaysia",
  "Maldives", "Mexico", "Morocco", "Myanmar", "Nepal", "Netherlands",
  "New Zealand", "Nigeria", "Norway", "Oman", "Pakistan", "Philippines",
  "Poland", "Portugal", "Qatar", "Romania", "Russia", "Saudi Arabia",
  "Singapore", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sweden",
  "Switzerland", "Taiwan", "Thailand", "Turkey", "UAE", "UK", "Ukraine",
  "USA", "Vietnam", "Yemen", "Zimbabwe"
].sort();

// ✅ City Database by Country
const cityDatabase: Record<string, string[]> = {
  India: [
    "Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune",
    "Ahmedabad", "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore",
    "Thane", "Bhopal", "Visakhapatnam", "Vadodara", "Patna", "Ludhiana",
    "Agra", "Nashik", "Ranchi", "Faridabad", "Meerut", "Rajkot", "Varanasi",
    "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Allahabad", "Guwahati",
    "Chandigarh", "Noida", "Gurgaon", "Coimbatore", "Kochi", "Trivandrum",
    "Mangalore", "Mysore", "Jodhpur", "Udaipur", "Dehradun", "Jammu"
  ],
  USA: [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia",
    "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville",
    "Fort Worth", "Columbus", "Charlotte", "San Francisco", "Indianapolis",
    "Seattle", "Denver", "Washington DC", "Boston", "Nashville", "Detroit",
    "Portland", "Las Vegas", "Miami", "Atlanta", "Minneapolis"
  ],
  UK: [
    "London", "Birmingham", "Manchester", "Glasgow", "Liverpool", "Leeds",
    "Sheffield", "Edinburgh", "Bristol", "Leicester", "Coventry", "Bradford",
    "Cardiff", "Belfast", "Nottingham", "Kingston upon Hull", "Newcastle"
  ],
  UAE: [
    "Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah",
    "Umm Al Quwain", "Al Ain"
  ],
  Canada: [
    "Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa",
    "Winnipeg", "Quebec City", "Hamilton", "Kitchener"
  ],
  Australia: [
    "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast",
    "Canberra", "Newcastle", "Hobart", "Darwin"
  ],
  Singapore: ["Singapore"],
  Germany: [
    "Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart",
    "Dusseldorf", "Leipzig", "Dortmund", "Essen"
  ],
  France: [
    "Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg",
    "Montpellier", "Bordeaux", "Lille"
  ],
  Japan: [
    "Tokyo", "Osaka", "Yokohama", "Nagoya", "Sapporo", "Fukuoka", "Kobe",
    "Kyoto", "Kawasaki", "Saitama"
  ],
  China: [
    "Shanghai", "Beijing", "Guangzhou", "Shenzhen", "Chengdu", "Hangzhou",
    "Wuhan", "Xi'an", "Nanjing", "Tianjin"
  ],
  "Saudi Arabia": [
    "Riyadh", "Jeddah", "Mecca", "Medina", "Dammam", "Khobar", "Tabuk"
  ],
  Qatar: ["Doha", "Al Wakrah", "Al Khor", "Umm Salal"],
  Kuwait: ["Kuwait City", "Hawalli", "Salmiya", "Farwaniya"],
  Bahrain: ["Manama", "Riffa", "Muharraq"],
  Oman: ["Muscat", "Salalah", "Sohar", "Nizwa"],
};

// ✅ Business Types List
const businessTypes = [
  "Real Estate", "Automobile", "Agriculture & Agri-Tech", "Chemical & Industries",
  "Healthcare", "Logistics", "Banking & Financial Services", "Education & EdTech",
  "E-Commerce & Retail", "Reseller", "Consultant", "System Integrator",
  "Value Added Reseller", "IT Services", "Manufacturing", "Hospitality",
  "Media & Entertainment", "Telecom", "Digital Marketing Agency", "Freelancer", "Other"
];

// ✅ Lead Generation Methods for Sales Partner
const leadGenerationMethods = [
  { value: "Direct Sales", label: "Direct Sales", icon: "🎯" },
  { value: "Reference Network", label: "Reference Network", icon: "🤝" },
  { value: "Digital Marketing", label: "Digital Marketing", icon: "📱" },
  { value: "Cold Calling", label: "Cold Calling", icon: "📞" },
];

// ✅ Experience Ranges
const experienceRanges = [
  { value: "0-1", label: "0-1 Year" },
  { value: "1-3", label: "1-3 Years" },
  { value: "3-5", label: "3-5 Years" },
  { value: "5-10", label: "5-10 Years" },
  { value: "10+", label: "10+ Years" },
];

// ✅ Benefits Data
const channelPartnerBenefits = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "High Revenue Share",
    desc: "Up to 40% commission on deals",
  },
  {
    icon: <BadgeCheck className="w-5 h-5" />,
    title: "Certified Partner",
    desc: "Official certification & badge",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Dedicated Support",
    desc: "Priority partner assistance",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Exclusive Access",
    desc: "Early access to new products",
  },
];

const salesPartnerBenefits = [
  {
    icon: <IndianRupee className="w-5 h-5" />,
    title: "Attractive Commission",
    desc: "Earn on every successful deal",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "No Investment",
    desc: "Start with zero investment",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Full Support",
    desc: "We handle invoicing & delivery",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Growth Path",
    desc: "Scale to Channel Partner level",
  },
];

// ✅ Partner Type Options
const partnerTypes = [
  {
    id: "channel",
    title: "Channel Partner",
    icon: <Building2 className="w-8 h-8" />,
    description: "You generate invoices, we provide AI solutions & products",
    features: [
      "Generate your own sales invoices",
      "Access to complete product portfolio",
      "Higher margins & exclusive pricing",
      "Requires GST registration",
    ],
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-600",
  },
  {
    id: "sales",
    title: "Sales Partner",
    icon: <Target className="w-8 h-8" />,
    description: "We generate invoices, you earn commission per deal",
    features: [
      "BizAiHacks generates all invoices",
      "Commission paid as per policy",
      "No GST registration required",
      "Perfect for individuals & freelancers",
    ],
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-600",
  },
];

// ✅ Custom Input Style Class
const inputClassName = "h-12 rounded-xl bg-white focus:ring-primary/20 shadow-sm";

export default function ChannelPartnerPremiumPage() {
  // ✅ Partner Type Selection State
  const [selectedPartnerType, setSelectedPartnerType] = useState<"channel" | "sales" | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // ✅ Common Form Data
  const [formData, setFormData] = useState({
    // Common Fields
    companyName: "",
    contactPerson: "",
    contactNo: "",
    email: "",
    country: "",
    city: "",
    natureOfBusiness: "",
    typeOfBusiness: "",
    estimatedBusiness: "",
    
    // Channel Partner Specific
    gstNumber: "",
    panNumber: "",
    yearsOfExperience: "",
    
    // Sales Partner Specific
    partnerType: "", // Individual or Company
    salesExperience: "",
    preferredSalesArea: "",
    leadGenerationMethods: [] as string[],
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);

  // Country States
  const [countrySearch, setCountrySearch] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [customCountry, setCustomCountry] = useState("");
  const [showAddCountry, setShowAddCountry] = useState(false);

  // City States
  const [citySearch, setCitySearch] = useState("");
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [customCity, setCustomCity] = useState("");
  const [showAddCity, setShowAddCity] = useState(false);

  // Business Type States
  const [businessTypeSearch, setBusinessTypeSearch] = useState("");
  const [showBusinessTypeDropdown, setShowBusinessTypeDropdown] = useState(false);
  const [customBusinessType, setCustomBusinessType] = useState("");
  const [showAddBusinessType, setShowAddBusinessType] = useState(false);

  // Filtered Countries
  const filteredCountries = useMemo(() => {
    if (!countrySearch) return allCountries;
    return allCountries.filter((c) =>
      c.toLowerCase().includes(countrySearch.toLowerCase())
    );
  }, [countrySearch]);

  // Available Cities based on selected country
  const availableCities = useMemo(() => {
    if (!formData.country) return [];
    return cityDatabase[formData.country] || [];
  }, [formData.country]);

  // Filtered Cities
  const filteredCities = useMemo(() => {
    if (!citySearch) return availableCities;
    return availableCities.filter((c) =>
      c.toLowerCase().includes(citySearch.toLowerCase())
    );
  }, [citySearch, availableCities]);

  // Filtered Business Types
  const filteredBusinessTypes = useMemo(() => {
    if (!businessTypeSearch) return businessTypes;
    return businessTypes.filter((type) =>
      type.toLowerCase().includes(businessTypeSearch.toLowerCase())
    );
  }, [businessTypeSearch]);

  const handleChange = (key: string, value: string) =>
    setFormData((s) => ({ ...s, [key]: value }));

  // Select Country
  const selectCountry = (country: string) => {
    handleChange("country", country);
    handleChange("city", "");
    setCountrySearch("");
    setShowCountryDropdown(false);
    setShowAddCountry(false);
    setCustomCountry("");
  };

  // Add Custom Country
  const addCustomCountry = () => {
    if (customCountry.trim()) {
      selectCountry(customCountry.trim());
    }
  };

  // Select City
  const selectCity = (city: string) => {
    handleChange("city", city);
    setCitySearch("");
    setShowCityDropdown(false);
    setShowAddCity(false);
    setCustomCity("");
  };

  // Add Custom City
  const addCustomCity = () => {
    if (customCity.trim()) {
      selectCity(customCity.trim());
    }
  };

  // Select Business Type
  const selectBusinessType = (type: string) => {
    handleChange("typeOfBusiness", type);
    setBusinessTypeSearch("");
    setShowBusinessTypeDropdown(false);
    setShowAddBusinessType(false);
    setCustomBusinessType("");
  };

  // Add Custom Business Type
  const addCustomBusinessType = () => {
    if (customBusinessType.trim()) {
      selectBusinessType(customBusinessType.trim());
    }
  };

  // Handle Lead Method Change (Sales Partner)
  const handleLeadMethodChange = (method: string) => {
    setFormData(prev => ({
      ...prev,
      leadGenerationMethods: prev.leadGenerationMethods.includes(method)
        ? prev.leadGenerationMethods.filter(m => m !== method)
        : [...prev.leadGenerationMethods, method]
    }));
  };

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setShowCountryDropdown(false);
    setShowCityDropdown(false);
    setShowBusinessTypeDropdown(false);
  };

  // Reset Form
  const resetForm = () => {
    setFormData({
      companyName: "",
      contactPerson: "",
      contactNo: "",
      email: "",
      country: "",
      city: "",
      natureOfBusiness: "",
      typeOfBusiness: "",
      estimatedBusiness: "",
      gstNumber: "",
      panNumber: "",
      yearsOfExperience: "",
      partnerType: "",
      salesExperience: "",
      preferredSalesArea: "",
      leadGenerationMethods: [],
      bankName: "",
      accountHolderName: "",
      accountNumber: "",
      ifscCode: "",
    });
    setAgreed(false);
    setSelectedPartnerType(null);
    setFormSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.contactPerson || !formData.email || !formData.contactNo) {
      toast.error("Please fill all required fields.");
      return;
    }

    if (!formData.country || !formData.city) {
      toast.error("Please select Country and City.");
      return;
    }

    if (!agreed) {
      toast.error("Please agree to the terms and conditions.");
      return;
    }

    // Channel Partner specific validation
    if (selectedPartnerType === "channel" && !formData.companyName) {
      toast.error("Company Name is required for Channel Partners.");
      return;
    }

    try {
      setSubmitting(true);

      const payload = {
        ...formData,
        partnerCategory: selectedPartnerType === "channel" ? "Channel Partner" : "Sales Partner",
        source: `${selectedPartnerType === "channel" ? "Channel" : "Sales"} Partner Application Form`,
        submittedAt: new Date().toISOString(),
      };

      // API call
      const response = await fetch("/api/partner-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setFormSubmitted(true);
        toast.success("🎉 Application submitted successfully!", {
          duration: 5000,
        });
      } else {
        toast.error(data.error || "Submission failed. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Get current benefits based on selected partner type
  const currentBenefits = selectedPartnerType === "sales" ? salesPartnerBenefits : channelPartnerBenefits;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      {/* ✅ HERO SECTION */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Handshake className="w-4 h-4" />
              Partner Program
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Grow Your Business with <br />
              <span className="bg-primary bg-clip-text text-transparent">
                BizAI Hacks
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              {selectedPartnerType 
                ? selectedPartnerType === "channel"
                  ? "Generate your own invoices while we provide cutting-edge AI solutions."
                  : "Refer clients, we handle everything else. Earn attractive commissions!"
                : "Choose your partnership model and start earning with India's leading AI solutions provider."
              }
            </p>

            {/* Benefits Grid */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedPartnerType || "default"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
              >
                {currentBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-200/50 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className={`w-10 h-10 rounded-xl ${
                      selectedPartnerType === "sales" ? "bg-green-500/10 text-green-600" : "bg-primary/10 text-primary"
                    } flex items-center justify-center mx-auto mb-3`}>
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold text-slate-900 text-sm">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">{benefit.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* ✅ MAIN CONTENT */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        
        {/* ============================================ */}
        {/* STEP 1: PARTNER TYPE SELECTION */}
        {/* ============================================ */}
        <AnimatePresence mode="wait">
          {!selectedPartnerType && !formSubmitted && (
            <motion.div
              key="partner-selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                  Select Your Partnership Type
                </h2>
                <p className="text-slate-600">
                  Choose the model that best fits your business goals
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {partnerTypes.map((type, index) => (
                  <motion.div
                    key={type.id}
                    initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    onClick={() => setSelectedPartnerType(type.id as "channel" | "sales")}
                    className={`relative cursor-pointer group`}
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${type.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity`} />
                    <div className={`relative bg-white rounded-2xl p-6 border-2 ${type.borderColor} hover:border-opacity-100 transition-all shadow-lg hover:shadow-xl`}>
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl ${type.bgColor} ${type.textColor} flex items-center justify-center mb-4`}>
                        {type.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {type.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 text-sm mb-4">
                        {type.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2">
                        {type.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <Check className={`w-4 h-4 ${type.textColor} mt-0.5 flex-shrink-0`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <Button
                        className={`w-full mt-6 h-12 bg-gradient-to-r ${type.color} hover:opacity-90 text-white font-semibold rounded-xl`}
                      >
                        Select {type.title}
                        <ChevronDown className="w-4 h-4 ml-2 rotate-[-90deg]" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Comparison Note */}
              <div className="mt-8 text-center">
                <p className="text-sm text-slate-500">
                  Not sure which one to choose?{" "}
                  <a href="/contact" className="text-primary hover:underline font-medium">
                    Contact our partnership team
                  </a>
                </p>
              </div>
            </motion.div>
          )}

          {/* ============================================ */}
          {/* STEP 2: FORM (Based on Selected Partner Type) */}
          {/* ============================================ */}
          {selectedPartnerType && !formSubmitted && (
            <motion.div
              key="partner-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Back Button */}
              <div className="max-w-5xl mx-auto mb-6">
                <button
                  onClick={() => setSelectedPartnerType(null)}
                  className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Change Partner Type
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
                {/* LEFT – IMAGE PANEL */}
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-5 lg:sticky lg:top-24"
                >
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white">
                    <div className="relative w-full h-72 lg:h-[420px]">
                      <Image
                        src="/partner.jpg"
                        alt="Partner Banner"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      <div className="absolute left-6 right-6 bottom-8 text-white">
                        {/* Partner Type Badge */}
                        <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-3 ${
                          selectedPartnerType === "channel" 
                            ? "bg-blue-500/80 text-white" 
                            : "bg-green-500/80 text-white"
                        }`}>
                          {selectedPartnerType === "channel" ? (
                            <><Building2 className="w-3.5 h-3.5" /> Channel Partner</>
                          ) : (
                            <><Target className="w-3.5 h-3.5" /> Sales Partner</>
                          )}
                        </span>

                        <h2 className="text-2xl lg:text-3xl font-bold leading-tight drop-shadow-lg">
                          {selectedPartnerType === "channel" 
                            ? "Build & Scale Together"
                            : "Earn Without Investment"
                          }
                        </h2>
                        <p className="mt-2 text-white/90 text-sm lg:text-base">
                          {selectedPartnerType === "channel"
                            ? "Enterprise AI solutions, training & revenue partnerships."
                            : "Refer clients and earn attractive commissions per deal."
                          }
                        </p>

                        {/* Stats */}
                        <div className="flex gap-6 mt-6">
                          <div>
                            <p className="text-2xl font-bold">500+</p>
                            <p className="text-xs text-white/70">Active Partners</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold">
                              {selectedPartnerType === "channel" ? "₹50Cr+" : "₹10Cr+"}
                            </p>
                            <p className="text-xs text-white/70">Partner Revenue</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold">
                              {selectedPartnerType === "channel" ? "40%" : "25%"}
                            </p>
                            <p className="text-xs text-white/70">Commission</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                    {["ISO Certified", "GDPR Compliant", "24/7 Support"].map((badge) => (
                      <span
                        key={badge}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-xs font-medium text-slate-700 border shadow-sm"
                      >
                        <Check className="w-3.5 h-3.5 text-green-500" />
                        {badge}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* RIGHT – FORM */}
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="lg:col-span-7"
                >
                  <div className={`bg-white border-2 ${
                    selectedPartnerType === "channel" ? "border-blue-200/80" : "border-green-200/80"
                  } rounded-3xl p-6 md:p-8 shadow-xl`}>
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-xl ${
                          selectedPartnerType === "channel" 
                            ? "bg-blue-100 text-blue-600" 
                            : "bg-green-100 text-green-600"
                        }`}>
                          {selectedPartnerType === "channel" ? (
                            <Building2 className="w-5 h-5" />
                          ) : (
                            <Target className="w-5 h-5" />
                          )}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                          {selectedPartnerType === "channel" 
                            ? "Channel Partner Registration"
                            : "Sales Partner Registration"
                          }
                        </h3>
                      </div>
                      <p className="text-sm text-slate-500">
                        Fill in your details — our team will reach out within 1-2 business days.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* ===== COMMON FIELDS ===== */}
                      
                      {/* Row 1: Company & Contact Person */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Company Name - Required for Channel, Optional for Sales */}
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-slate-400" />
                            Company Name {selectedPartnerType === "channel" && "*"}
                          </label>
                          <Input
                            placeholder={selectedPartnerType === "sales" ? "Optional" : "Acme Pvt Ltd"}
                            value={formData.companyName}
                            onChange={(e) => handleChange("companyName", e.target.value)}
                            className={inputClassName}
                            disabled={submitting}
                            required={selectedPartnerType === "channel"}
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <User className="w-4 h-4 text-slate-400" />
                            {selectedPartnerType === "channel" ? "Contact Person *" : "Full Name *"}
                          </label>
                          <Input
                            placeholder="John Doe"
                            value={formData.contactPerson}
                            onChange={(e) => handleChange("contactPerson", e.target.value)}
                            className={inputClassName}
                            disabled={submitting}
                            required
                          />
                        </div>
                      </div>

                      {/* Row 2: Phone & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <Phone className="w-4 h-4 text-slate-400" />
                            Contact Number *
                          </label>
                          <Input
                            placeholder="+91 97237 23322"
                            value={formData.contactNo}
                            onChange={(e) => handleChange("contactNo", e.target.value)}
                            className={inputClassName}
                            disabled={submitting}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <Mail className="w-4 h-4 text-slate-400" />
                            Email ID *
                          </label>
                          <Input
                            type="email"
                            placeholder="partner@company.com"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            className={inputClassName}
                            disabled={submitting}
                            required
                          />
                        </div>
                      </div>

                      {/* Row 3: Country & City */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* COUNTRY DROPDOWN */}
                        <div className="space-y-2 relative">
                          <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <Globe className="w-4 h-4 text-slate-400" />
                            Country *
                          </label>

                          <div className="relative">
                            <div
                              className="flex items-center h-12 w-full rounded-xl border border-slate-200 bg-white px-4 cursor-pointer hover:border-primary/50 transition-colors shadow-sm"
                              onClick={() => {
                                setShowCountryDropdown(!showCountryDropdown);
                                setShowCityDropdown(false);
                                setShowBusinessTypeDropdown(false);
                              }}
                            >
                              <span className={formData.country ? "text-slate-900" : "text-slate-400"}>
                                {formData.country || "Select Country"}
                              </span>
                              <ChevronDown className={`w-4 h-4 ml-auto text-slate-400 transition-transform ${showCountryDropdown ? 'rotate-180' : ''}`} />
                            </div>

                            {showCountryDropdown && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute z-50 top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl max-h-80 overflow-hidden"
                              >
                                <div className="p-3 border-b border-slate-100 sticky top-0 bg-white">
                                  <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <Input
                                      placeholder="Search country..."
                                      value={countrySearch}
                                      onChange={(e) => setCountrySearch(e.target.value)}
                                      className="h-10 pl-10 rounded-lg bg-slate-50 border-slate-200"
                                      autoFocus
                                    />
                                  </div>
                                </div>

                                <div className="max-h-52 overflow-y-auto">
                                  {filteredCountries.length > 0 ? (
                                    filteredCountries.map((country) => (
                                      <div
                                        key={country}
                                        className={`px-4 py-3 hover:bg-primary/5 cursor-pointer flex items-center justify-between text-sm transition-colors ${
                                          formData.country === country ? 'bg-primary/10 text-primary' : 'text-slate-700'
                                        }`}
                                        onClick={() => selectCountry(country)}
                                      >
                                        {country}
                                        {formData.country === country && (
                                          <Check className="w-4 h-4 text-primary" />
                                        )}
                                      </div>
                                    ))
                                  ) : (
                                    <div className="px-4 py-6 text-center text-slate-400 text-sm">
                                      No country found
                                    </div>
                                  )}
                                </div>

                                <div className="p-3 border-t border-slate-100 bg-slate-50">
                                  {!showAddCountry ? (
                                    <button
                                      type="button"
                                      className="w-full flex items-center justify-center gap-2 py-2.5 text-sm text-primary font-medium hover:bg-primary/10 rounded-lg transition-colors"
                                      onClick={() => setShowAddCountry(true)}
                                    >
                                      <Plus className="w-4 h-4" />
                                      Add Custom Country
                                    </button>
                                  ) : (
                                    <div className="flex gap-2">
                                      <Input
                                        placeholder="Enter country name"
                                        value={customCountry}
                                        onChange={(e) => setCustomCountry(e.target.value)}
                                        className="h-10 flex-1 rounded-lg bg-white"
                                        autoFocus
                                        onKeyDown={(e) => {
                                          if (e.key === "Enter") {
                                            e.preventDefault();
                                            addCustomCountry();
                                          }
                                        }}
                                      />
                                      <Button
                                        type="button"
                                        size="sm"
                                        onClick={addCustomCountry}
                                        className="h-10 px-4 rounded-lg"
                                      >
                                        Add
                                      </Button>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </div>

                        {/* CITY DROPDOWN */}
                        <div className="space-y-2 relative">
                          <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-slate-400" />
                            City *
                          </label>

                          <div className="relative">
                            <div
                              className={`flex items-center h-12 w-full rounded-xl border border-slate-200 bg-white px-4 transition-colors shadow-sm ${
                                !formData.country
                                  ? "opacity-50 cursor-not-allowed"
                                  : "cursor-pointer hover:border-primary/50"
                              }`}
                              onClick={() => {
                                if (formData.country) {
                                  setShowCityDropdown(!showCityDropdown);
                                  setShowCountryDropdown(false);
                                  setShowBusinessTypeDropdown(false);
                                }
                              }}
                            >
                              <span className={formData.city ? "text-slate-900" : "text-slate-400"}>
                                {!formData.country
                                  ? "Select Country First"
                                  : formData.city || "Select City"}
                              </span>
                              <ChevronDown className={`w-4 h-4 ml-auto text-slate-400 transition-transform ${showCityDropdown ? 'rotate-180' : ''}`} />
                            </div>

                            {showCityDropdown && formData.country && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute z-50 top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl max-h-80 overflow-hidden"
                              >
                                <div className="p-3 border-b border-slate-100 sticky top-0 bg-white">
                                  <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <Input
                                      placeholder="Search city..."
                                      value={citySearch}
                                      onChange={(e) => setCitySearch(e.target.value)}
                                      className="h-10 pl-10 rounded-lg bg-slate-50 border-slate-200"
                                      autoFocus
                                    />
                                  </div>
                                </div>

                                <div className="max-h-52 overflow-y-auto">
                                  {filteredCities.length > 0 ? (
                                    filteredCities.map((city) => (
                                      <div
                                        key={city}
                                        className={`px-4 py-3 hover:bg-primary/5 cursor-pointer flex items-center justify-between text-sm transition-colors ${
                                          formData.city === city ? 'bg-primary/10 text-primary' : 'text-slate-700'
                                        }`}
                                        onClick={() => selectCity(city)}
                                      >
                                        {city}
                                        {formData.city === city && (
                                          <Check className="w-4 h-4 text-primary" />
                                        )}
                                      </div>
                                    ))
                                  ) : availableCities.length === 0 ? (
                                    <div className="px-4 py-6 text-center text-slate-400 text-sm">
                                      No cities available. Add custom city below.
                                    </div>
                                  ) : (
                                    <div className="px-4 py-6 text-center text-slate-400 text-sm">
                                      No city found
                                    </div>
                                  )}
                                </div>

                                <div className="p-3 border-t border-slate-100 bg-slate-50">
                                  {!showAddCity ? (
                                    <button
                                      type="button"
                                      className="w-full flex items-center justify-center gap-2 py-2.5 text-sm text-primary font-medium hover:bg-primary/10 rounded-lg transition-colors"
                                      onClick={() => setShowAddCity(true)}
                                    >
                                      <Plus className="w-4 h-4" />
                                      Add Custom City
                                    </button>
                                  ) : (
                                    <div className="flex gap-2">
                                      <Input
                                        placeholder="Enter city name"
                                        value={customCity}
                                        onChange={(e) => setCustomCity(e.target.value)}
                                        className="h-10 flex-1 rounded-lg bg-white"
                                        autoFocus
                                        onKeyDown={(e) => {
                                          if (e.key === "Enter") {
                                            e.preventDefault();
                                            addCustomCity();
                                          }
                                        }}
                                      />
                                      <Button
                                        type="button"
                                        size="sm"
                                        onClick={addCustomCity}
                                        className="h-10 px-4 rounded-lg"
                                      >
                                        Add
                                      </Button>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* ===== CHANNEL PARTNER SPECIFIC FIELDS ===== */}
                      {selectedPartnerType === "channel" && (
                        <>
                          {/* Nature of Business */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                              <Briefcase className="w-4 h-4 text-slate-400" />
                              Nature of Business
                            </label>
                            <Input
                              placeholder="SaaS / System Integrator / IT Services"
                              value={formData.natureOfBusiness}
                              onChange={(e) => handleChange("natureOfBusiness", e.target.value)}
                              className={inputClassName}
                              disabled={submitting}
                            />
                          </div>

                          {/* Type of Business & Estimated Business */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* TYPE OF BUSINESS */}
                            <div className="space-y-2 relative">
                              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                <Building className="w-4 h-4 text-slate-400" />
                                Type of Business
                              </label>

                              <div className="relative">
                                <div
                                  className="flex items-center h-12 w-full rounded-xl border border-slate-200 bg-white px-4 cursor-pointer hover:border-primary/50 transition-colors shadow-sm"
                                  onClick={() => {
                                    setShowBusinessTypeDropdown(!showBusinessTypeDropdown);
                                    setShowCountryDropdown(false);
                                    setShowCityDropdown(false);
                                  }}
                                >
                                  <span className={formData.typeOfBusiness ? "text-slate-900" : "text-slate-400"}>
                                    {formData.typeOfBusiness || "Select Type"}
                                  </span>
                                  <ChevronDown className={`w-4 h-4 ml-auto text-slate-400 transition-transform ${showBusinessTypeDropdown ? 'rotate-180' : ''}`} />
                                </div>

                                {showBusinessTypeDropdown && (
                                  <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute z-50 top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl max-h-80 overflow-hidden"
                                  >
                                    <div className="p-3 border-b border-slate-100 sticky top-0 bg-white">
                                      <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <Input
                                          placeholder="Search business type..."
                                          value={businessTypeSearch}
                                          onChange={(e) => setBusinessTypeSearch(e.target.value)}
                                          className="h-10 pl-10 rounded-lg bg-slate-50 border-slate-200"
                                          autoFocus
                                        />
                                      </div>
                                    </div>

                                    <div className="max-h-52 overflow-y-auto">
                                      {filteredBusinessTypes.length > 0 ? (
                                        filteredBusinessTypes.map((type) => (
                                          <div
                                            key={type}
                                            className={`px-4 py-3 hover:bg-primary/5 cursor-pointer flex items-center justify-between text-sm transition-colors ${
                                              formData.typeOfBusiness === type ? 'bg-primary/10 text-primary' : 'text-slate-700'
                                            }`}
                                            onClick={() => selectBusinessType(type)}
                                          >
                                            {type}
                                            {formData.typeOfBusiness === type && (
                                              <Check className="w-4 h-4 text-primary" />
                                            )}
                                          </div>
                                        ))
                                      ) : (
                                        <div className="px-4 py-6 text-center text-slate-400 text-sm">
                                          No business type found
                                        </div>
                                      )}
                                    </div>

                                    <div className="p-3 border-t border-slate-100 bg-slate-50">
                                      {!showAddBusinessType ? (
                                        <button
                                          type="button"
                                          className="w-full flex items-center justify-center gap-2 py-2.5 text-sm text-primary font-medium hover:bg-primary/10 rounded-lg transition-colors"
                                          onClick={() => setShowAddBusinessType(true)}
                                        >
                                          <Plus className="w-4 h-4" />
                                          Add Custom Type
                                        </button>
                                      ) : (
                                        <div className="flex gap-2">
                                          <Input
                                            placeholder="Enter business type"
                                            value={customBusinessType}
                                            onChange={(e) => setCustomBusinessType(e.target.value)}
                                            className="h-10 flex-1 rounded-lg bg-white"
                                            autoFocus
                                            onKeyDown={(e) => {
                                              if (e.key === "Enter") {
                                                e.preventDefault();
                                                addCustomBusinessType();
                                              }
                                            }}
                                          />
                                          <Button
                                            type="button"
                                            size="sm"
                                            onClick={addCustomBusinessType}
                                            className="h-10 px-4 rounded-lg"
                                          >
                                            Add
                                          </Button>
                                        </div>
                                      )}
                                    </div>
                                  </motion.div>
                                )}
                              </div>
                            </div>

                            {/* ESTIMATED BUSINESS */}
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                <IndianRupee className="w-4 h-4 text-slate-400" />
                                Estimated Business
                              </label>
                              <Select
                                onValueChange={(v) => handleChange("estimatedBusiness", v)}
                                disabled={submitting}
                              >
                                <SelectTrigger className="h-12 rounded-xl bg-white border-slate-200 shadow-sm hover:border-primary/50 transition-colors">
                                  <SelectValue placeholder="Select Range" />
                                </SelectTrigger>
                                <SelectContent className="bg-white border border-slate-200 rounded-xl shadow-2xl">
                                  <SelectItem value="< ₹5 Lakhs">{"< ₹5 Lakhs"}</SelectItem>
                                  <SelectItem value="₹5L - ₹20L">₹5L - ₹20L</SelectItem>
                                  <SelectItem value="₹20L - ₹50L">₹20L - ₹50L</SelectItem>
                                  <SelectItem value="₹50L - ₹1Cr">₹50L - ₹1Cr</SelectItem>
                                  <SelectItem value="> ₹1 Crore">{"> ₹1 Crore"}</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          {/* GST & PAN */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                <FileText className="w-4 h-4 text-slate-400" />
                                GST Number
                              </label>
                              <Input
                                placeholder="27AABCU9603R1ZM"
                                value={formData.gstNumber}
                                onChange={(e) => handleChange("gstNumber", e.target.value.toUpperCase())}
                                className={inputClassName}
                                disabled={submitting}
                                maxLength={15}
                              />
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                <FileText className="w-4 h-4 text-slate-400" />
                                PAN Number
                              </label>
                              <Input
                                placeholder="ABCDE1234F"
                                value={formData.panNumber}
                                onChange={(e) => handleChange("panNumber", e.target.value.toUpperCase())}
                                className={inputClassName}
                                disabled={submitting}
                                maxLength={10}
                              />
                            </div>
                          </div>
                        </>
                      )}

                      {/* ===== SALES PARTNER SPECIFIC FIELDS ===== */}
                      {selectedPartnerType === "sales" && (
                        <>
                          {/* Individual or Company */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">
                              Are you an Individual or Company? *
                            </label>
                            <div className="flex gap-4">
                              <label className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                formData.partnerType === 'Individual' 
                                  ? 'border-green-500 bg-green-50' 
                                  : 'border-slate-200 hover:border-green-300'
                              }`}>
                                <input
                                  type="radio"
                                  name="partnerType"
                                  value="Individual"
                                  checked={formData.partnerType === 'Individual'}
                                  onChange={(e) => handleChange("partnerType", e.target.value)}
                                  className="sr-only"
                                />
                                <User className={`w-5 h-5 ${formData.partnerType === 'Individual' ? 'text-green-600' : 'text-slate-400'}`} />
                                <span className={`font-medium ${formData.partnerType === 'Individual' ? 'text-green-700' : 'text-slate-700'}`}>
                                  Individual
                                </span>
                              </label>
                              <label className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                formData.partnerType === 'Company' 
                                  ? 'border-green-500 bg-green-50' 
                                  : 'border-slate-200 hover:border-green-300'
                              }`}>
                                <input
                                  type="radio"
                                  name="partnerType"
                                  value="Company"
                                  checked={formData.partnerType === 'Company'}
                                  onChange={(e) => handleChange("partnerType", e.target.value)}
                                  className="sr-only"
                                />
                                <Building2 className={`w-5 h-5 ${formData.partnerType === 'Company' ? 'text-green-600' : 'text-slate-400'}`} />
                                <span className={`font-medium ${formData.partnerType === 'Company' ? 'text-green-700' : 'text-slate-700'}`}>
                                  Company
                                </span>
                              </label>
                            </div>
                          </div>

                          {/* Sales Experience & Preferred Area */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-slate-400" />
                                Sales Experience
                              </label>
                              <Select
                                onValueChange={(v) => handleChange("salesExperience", v)}
                                disabled={submitting}
                              >
                                <SelectTrigger className="h-12 rounded-xl bg-white border-slate-200 shadow-sm">
                                  <SelectValue placeholder="Select Experience" />
                                </SelectTrigger>
                                <SelectContent className="bg-white rounded-xl shadow-2xl">
                                  {experienceRanges.map((range) => (
                                    <SelectItem key={range.value} value={range.value}>
                                      {range.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-slate-400" />
                                Preferred Sales Area
                              </label>
                              <Input
                                placeholder="e.g., Mumbai, Maharashtra"
                                value={formData.preferredSalesArea}
                                onChange={(e) => handleChange("preferredSalesArea", e.target.value)}
                                className={inputClassName}
                                disabled={submitting}
                              />
                            </div>
                          </div>

                          {/* Lead Generation Methods */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                              <Target className="w-4 h-4 text-slate-400" />
                              How will you generate leads? (Select all that apply)
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                              {leadGenerationMethods.map((method) => (
                                <label
                                  key={method.value}
                                  className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                    formData.leadGenerationMethods.includes(method.value)
                                      ? 'border-green-500 bg-green-50'
                                      : 'border-slate-200 hover:border-green-300'
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
                                      ? 'bg-green-500 border-green-500' 
                                      : 'border-slate-300'
                                  }`}>
                                    {formData.leadGenerationMethods.includes(method.value) && (
                                      <Check className="w-3 h-3 text-white" />
                                    )}
                                  </div>
                                  <span className="text-lg">{method.icon}</span>
                                  <span className="font-medium text-sm text-slate-700">{method.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          {/* Bank Details (Optional) */}
                          <div className="space-y-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                            <div className="flex items-center gap-2">
                              <Wallet className="w-5 h-5 text-amber-600" />
                              <h4 className="font-medium text-amber-800">Bank Details (Optional)</h4>
                            </div>
                            <p className="text-xs text-amber-700">
                              You can provide bank details later. These are only required when you're ready to receive commission payouts.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                  <CreditCard className="w-4 h-4 text-slate-400" />
                                  Bank Name
                                </label>
                                <Input
                                  placeholder="e.g., HDFC Bank"
                                  value={formData.bankName}
                                  onChange={(e) => handleChange("bankName", e.target.value)}
                                  className={inputClassName}
                                  disabled={submitting}
                                />
                              </div>

                              <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                  <UserCheck className="w-4 h-4 text-slate-400" />
                                  Account Holder Name
                                </label>
                                <Input
                                  placeholder="As per bank records"
                                  value={formData.accountHolderName}
                                  onChange={(e) => handleChange("accountHolderName", e.target.value)}
                                  className={inputClassName}
                                  disabled={submitting}
                                />
                              </div>

                              <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Account Number</label>
                                <Input
                                  placeholder="Enter Account Number"
                                  value={formData.accountNumber}
                                  onChange={(e) => handleChange("accountNumber", e.target.value.replace(/\D/g, ''))}
                                  className={inputClassName}
                                  disabled={submitting}
                                />
                              </div>

                              <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">IFSC Code</label>
                                <Input
                                  placeholder="e.g., HDFC0001234"
                                  value={formData.ifscCode}
                                  onChange={(e) => handleChange("ifscCode", e.target.value.toUpperCase())}
                                  className={inputClassName}
                                  disabled={submitting}
                                  maxLength={11}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {/* ===== AGREEMENT ===== */}
                      <div className={`p-4 rounded-xl border-2 ${
                        selectedPartnerType === "channel" 
                          ? "bg-blue-50 border-blue-200" 
                          : "bg-green-50 border-green-200"
                      }`}>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className={`mt-1 h-5 w-5 rounded border-gray-300 ${
                              selectedPartnerType === "channel" 
                                ? "text-blue-600 focus:ring-blue-500" 
                                : "text-green-600 focus:ring-green-500"
                            }`}
                          />
                          <span className="text-sm leading-relaxed text-slate-700">
                            {selectedPartnerType === "channel" ? (
                              <>
                                <strong>Declaration:</strong> I understand that sales invoice will be generated by me (Channel Partner) 
                                and BizAiHacks will provide solutions/products. I agree to the terms and conditions of the partnership program.
                              </>
                            ) : (
                              <>
                                <strong>Agreement:</strong> I understand that sales invoice will be generated by BizAiHacks 
                                and commission will be paid as per company policy. I agree to work as a Sales Partner and 
                                adhere to the partnership guidelines.
                              </>
                            )}
                          </span>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        className={`w-full h-14 text-base font-semibold mt-4 rounded-xl shadow-lg hover:shadow-xl transition-all ${
                          selectedPartnerType === "sales" 
                            ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700" 
                            : ""
                        }`}
                        disabled={submitting || !agreed}
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            {selectedPartnerType === "channel" ? (
                              <Building2 className="w-5 h-5 mr-2" />
                            ) : (
                              <Target className="w-5 h-5 mr-2" />
                            )}
                            Apply as {selectedPartnerType === "channel" ? "Channel" : "Sales"} Partner
                          </>
                        )}
                      </Button>

                      {/* Footer Note */}
                      <p className="text-xs text-center text-slate-400 mt-4">
                        By submitting, you agree to our{" "}
                        <a href="/termsandconditions" className="text-primary hover:underline">
                          Terms & Conditions
                        </a>{" "}
                        and{" "}
                        <a href="/privacypolicy" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </form>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* ============================================ */}
          {/* SUCCESS STATE */}
          {/* ============================================ */}
          {formSubmitted && (
            <motion.div
              key="success-state"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-lg mx-auto text-center py-16"
            >
              <div className={`mx-auto h-24 w-24 rounded-full flex items-center justify-center mb-6 ${
                selectedPartnerType === "channel" 
                  ? "bg-blue-100 text-blue-600" 
                  : "bg-green-100 text-green-600"
              }`}>
                <CheckCircle2 className="w-12 h-12" />
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Thank You! 🎉
              </h2>
              
              <p className="text-lg text-slate-600 mb-2">
                Your {selectedPartnerType === "channel" ? "Channel" : "Sales"} Partner application has been submitted successfully!
              </p>
              
              <p className="text-slate-500 mb-8">
                Our partnership team will review your application and get back to you within 1-2 business days.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={resetForm}
                  className="rounded-xl"
                >
                  Submit Another Application
                </Button>
                <Button 
                  size="lg" 
                  onClick={() => window.location.href = "/"}
                  className="rounded-xl"
                >
                  Back to Home
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Click outside to close dropdowns */}
      {(showCountryDropdown || showCityDropdown || showBusinessTypeDropdown) && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeAllDropdowns}
        />
      )}
    </div>
  );
}