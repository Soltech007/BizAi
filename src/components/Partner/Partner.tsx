"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
  "Real Estate",
  "Automobile",
  "Agriculture & Agri-Tech",
  "Chemical & Industries",
  "Healthcare",
  "Logistics",
  "Banking & Financial Services",
  "Education & EdTech",
  "E-Commerce & Retail",
  "Reseller",
  "Consultant",
  "System Integrator",
  "Value Added Reseller",
  "IT Services",
  "Manufacturing",
  "Hospitality",
  "Media & Entertainment",
  "Telecom",
  "Other"
];

// ✅ Benefits Data
const benefits = [
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

// ✅ Custom Input Style Class
const inputClassName = "h-12 rounded-xl bg-white focus:ring-primary/20 shadow-sm";

export default function ChannelPartnerPremiumPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    contactNo: "",
    email: "",
    natureOfBusiness: "",
    country: "",
    city: "",
    estimatedBusiness: "",
    typeOfBusiness: "",
  });

  const [submitting, setSubmitting] = useState(false);

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

  // ✅ Type of Business States
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

  // ✅ Filtered Business Types
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
    handleChange("city", ""); // Reset city
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

  // ✅ Select Business Type
  const selectBusinessType = (type: string) => {
    handleChange("typeOfBusiness", type);
    setBusinessTypeSearch("");
    setShowBusinessTypeDropdown(false);
    setShowAddBusinessType(false);
    setCustomBusinessType("");
  };

  // ✅ Add Custom Business Type
  const addCustomBusinessType = () => {
    if (customBusinessType.trim()) {
      selectBusinessType(customBusinessType.trim());
    }
  };

  // ✅ Close all dropdowns
  const closeAllDropdowns = () => {
    setShowCountryDropdown(false);
    setShowCityDropdown(false);
    setShowBusinessTypeDropdown(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.companyName || !formData.email || !formData.contactNo) {
      toast.error("Please fill Company Name, Email and Contact Number.");
      return;
    }

    if (!formData.country || !formData.city) {
      toast.error("Please select Country and City.");
      return;
    }

    try {
      setSubmitting(true);
      // API call here
      await new Promise((r) => setTimeout(r, 1500));

      toast.success("Application submitted successfully! We'll contact you soon.", {
        duration: 5000,
        icon: "🎉",
      });

      // Reset form
      setFormData({
        companyName: "",
        contactPerson: "",
        contactNo: "",
        email: "",
        natureOfBusiness: "",
        country: "",
        city: "",
        estimatedBusiness: "",
        typeOfBusiness: "",
      });
    } catch {
      toast.error("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

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
              Channel Partner Program
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
              Join our partner network and unlock exclusive benefits, high
              revenue share, and dedicated support to scale your business.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-200/50 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ✅ MAIN CONTENT */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
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
                  <h2 className="text-2xl lg:text-3xl font-bold leading-tight drop-shadow-lg">
                    Partner with Us
                  </h2>
                  <p className="mt-2 text-white/90 text-sm lg:text-base">
                    Enterprise AI solutions, training & revenue partnerships.
                  </p>

                  {/* Stats */}
                  <div className="flex gap-6 mt-6">
                    <div>
                      <p className="text-2xl font-bold">500+</p>
                      <p className="text-xs text-white/70">Active Partners</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">₹50Cr+</p>
                      <p className="text-xs text-white/70">Partner Revenue</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">40%</p>
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
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-xl">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  Partner Registration Form
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Fill in your details — our team will reach out within 1-2 business days.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Company & Contact Person */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-slate-400" />
                      Company Name *
                    </label>
                    <Input
                      placeholder="Acme Pvt Ltd"
                      value={formData.companyName}
                      onChange={(e) => handleChange("companyName", e.target.value)}
                      className={inputClassName}
                      disabled={submitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <User className="w-4 h-4 text-slate-400" />
                      Contact Person
                    </label>
                    <Input
                      placeholder="John Doe"
                      value={formData.contactPerson}
                      onChange={(e) => handleChange("contactPerson", e.target.value)}
                      className={inputClassName}
                      disabled={submitting}
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
<<<<<<< HEAD
                      placeholder="+91 90235 06084"
=======
                      placeholder="+91 97237 23322"
>>>>>>> 49348d4ed6f203e50201fa07449bba9a7f7d4c14
                      value={formData.contactNo}
                      onChange={(e) => handleChange("contactNo", e.target.value)}
                      className={inputClassName}
                      disabled={submitting}
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
                    />
                  </div>
                </div>

                {/* Row 3: Country & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* ✅ COUNTRY DROPDOWN */}
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

                      {/* Dropdown */}
                      {showCountryDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute z-50 top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl max-h-80 overflow-hidden"
                        >
                          {/* Search */}
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

                          {/* List */}
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

                          {/* Add Custom */}
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

                  {/* ✅ CITY DROPDOWN */}
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

                      {/* Dropdown */}
                      {showCityDropdown && formData.country && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute z-50 top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl max-h-80 overflow-hidden"
                        >
                          {/* Search */}
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

                          {/* List */}
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

                          {/* Add Custom */}
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

                {/* Row 4: Nature of Business */}
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

                {/* Row 5: Type of Business & Estimated Business */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* ✅ TYPE OF BUSINESS - SEARCHABLE WITH CUSTOM INPUT */}
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

                      {/* Dropdown */}
                      {showBusinessTypeDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute z-50 top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl max-h-80 overflow-hidden"
                        >
                          {/* Search */}
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

                          {/* List */}
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

                          {/* Add Custom */}
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

                  {/* ✅ ESTIMATED BUSINESS */}
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
                        <SelectItem value="< ₹5 Lakhs" className="py-3 cursor-pointer hover:bg-primary/5">{"< ₹5 Lakhs"}</SelectItem>
                        <SelectItem value="₹5L - ₹20L" className="py-3 cursor-pointer hover:bg-primary/5">₹5L - ₹20L</SelectItem>
                        <SelectItem value="₹20L - ₹50L" className="py-3 cursor-pointer hover:bg-primary/5">₹20L - ₹50L</SelectItem>
                        <SelectItem value="₹50L - ₹1Cr" className="py-3 cursor-pointer hover:bg-primary/5">₹50L - ₹1Cr</SelectItem>
                        <SelectItem value="> ₹1 Crore" className="py-3 cursor-pointer hover:bg-primary/5">{"> ₹1 Crore"}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-14 text-base font-semibold mt-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Handshake className="w-5 h-5 mr-2" />
                      Submit Application
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