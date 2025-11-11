// // src/app/partnerships/page.tsx
// "use client";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { 
//   ArrowRight, 
//   Brain, 
//   Mic, 
//   Database, 
//   Cloud, 
//   Workflow, 
//   Shield, 
//   CheckCircle2, 
//   ExternalLink, 
//   Plus, 
//   Zap, 
//   HandHeart,
//   Award,
//   HeadphonesIcon,
//   Sparkles,
//   Star,
//   TrendingUp,
//   Server,
//   Waves
// } from "lucide-react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import RequestQuote from "../common/requestquote";

// // Strategic Partners Data
// const strategicPartners = [
//   {
//     name: "IBM Watsonx",
//     description: "Enterprise AI platform for secure model deployment, fine-tuning, and governance",
//     tagline: "",
//     IconComponent: Brain,
//     BackgroundIcon: Server,
//     iconColor: "#112262",
//     features: [
//       "On-premise & VPC deployment",
//       "Enterprise data governance",
//       "Custom model fine-tuning",
//       "SOC2 & GDPR compliant"
//     ],
//     stats: [
//       { label: "Uptime", value: "99.9%" },
//       { label: "Data Centers", value: "60+" }
//     ],
//     color: "from-blue-600 to-cyan-600",
//     link: "https://www.ibm.com/watsonx"
//   },
//   {
//     name: "Eleven Labs",
//     description: "Premium voice AI technology for natural-sounding conversational agents",
//     tagline: "",
//     IconComponent: Mic,
//     BackgroundIcon: Waves,
//     iconColor: "#112262",
//     features: [
//       "Ultra-realistic voice synthesis",
//       "Voice cloning technology",
//       "29+ language support",
//       "Real-time streaming"
//     ],
//     stats: [
//       { label: "Languages", value: "29+" },
//       { label: "Voices", value: "100+" }
//     ],
//     color: "from-purple-600 to-pink-600",
//     link: "https://elevenlabs.io"
//   }
// ];

// // Integration Categories Data
// const integrationCategories = [
//   {
//     category: "Enterprise AI Platforms",
//     icon: Brain,
//     description: "Connect with leading AI model providers",
//     color: "from-blue-500 to-cyan-500",
//     integrations: [
//       { name: "IBM Watsonx", featured: true, description: "Enterprise AI governance" },
//       { name: "OpenAI GPT", description: "Advanced language models" },
//       { name: "Google Vertex AI", description: "Unified ML platform" },
//       { name: "Azure OpenAI", description: "Microsoft AI services" }
//     ]
//   },
//   {
//     category: "Voice & Communication",
//     icon: Mic,
//     description: "Build natural conversational experiences",
//     color: "from-purple-500 to-pink-500",
//     integrations: [
//       { name: "Eleven Labs", featured: true, description: "Premium voice synthesis" },
//       { name: "Twilio", description: "Cloud communications" },
//       { name: "SIP Telephony", description: "Enterprise telephony" },
//       { name: "Microsoft Teams", description: "Team collaboration" }
//     ]
//   },
//   {
//     category: "CRM & ERP Systems",
//     icon: Workflow,
//     description: "Sync with your business systems",
//     color: "from-orange-500 to-red-500",
//     integrations: [
//       { name: "Salesforce", description: "CRM leader" },
//       { name: "ERPNext", description: "Open-source ERP" },
//       { name: "Zendesk", description: "Customer service" },
//       { name: "HubSpot", description: "Marketing & sales" }
//     ]
//   },
//   {
//     category: "Data & Analytics",
//     icon: Database,
//     description: "Visualize and analyze AI insights",
//     color: "from-green-500 to-emerald-500",
//     integrations: [
//       { name: "Power BI", description: "Microsoft analytics" },
//       { name: "Tableau", description: "Visual analytics" },
//       { name: "Snowflake", description: "Data warehouse" },
//     ]
//   },
//   {
//     category: "Security & Compliance",
//     icon: Shield,
//     description: "Enterprise-grade security controls",
//     color: "from-indigo-500 to-purple-500",
//     integrations: [
//       { name: "Okta", description: "Identity management" },
//       { name: "Azure AD", description: "Microsoft identity" },
//       { name: "AWS IAM", description: "AWS security" }
//     ]
//   },
//   // {
//   //   category: "Developer Tools",
//   //   icon: Cloud,
//   //   description: "Build custom integrations",
//   //   color: "from-cyan-500 to-blue-500",
//   //   integrations: [
//   //     { name: "REST API", description: "RESTful endpoints" },
//   //     { name: "Webhooks", description: "Real-time events" },
//   //     { name: "GraphQL", description: "Flexible queries" }
//   //   ]
//   // }
// ];

// // Benefits Data
// const benefits = [
//   { 
//     title: "Enterprise Security", 
//     desc: "SOC2 & GDPR compliant infrastructure",
//     icon: Shield,
//     color: "bg-gray-200"
//   },
//   { 
//     title: "Certified Partners", 
//     desc: "Official technology partnerships",
//     icon: Award,
//     color: "bg-gray-200"
//   },
//   { 
//     title: "Dedicated Support", 
//     desc: "24/7 technical assistance",
//     icon: HeadphonesIcon,
//     color: "bg-gray-200"
//   }
// ];

// // Trust Metrics Data
// const trustMetrics = [
//   { value: "99.9%", label: "Uptime SLA", icon: TrendingUp },
//   { value: "24/7", label: "Support", icon: HeadphonesIcon },
//   { value: "SOC2", label: "Certified", icon: Shield },
//   { value: "50+", label: "Integrations", icon: Star }
// ];

// // Animation Variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15
//     }
//   }
// };

// const scaleIn = {
//   hidden: { scale: 0.8, opacity: 0 },
//   visible: { 
//     scale: 1, 
//     opacity: 1,
//     transition: { type: "spring", stiffness: 100 }
//   }
// };

// export default function PartnershipsPage() {
//   return (
//     <div className="min-h-screen">
//       {/* ==================== HERO SECTION ==================== */}
//       <section className="py-12 md:py-10 border-b relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--accent) / 0.3)' }}>
//         <motion.div
//           className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />

//         <div className="container max-w-6xl px-4 md:px-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center"
//           >
//             <span className="hero-badge inline-flex items-center gap-2 mb-6">
//               <HandHeart className="w-4 h-4" />
//               Partnerships & Integrations
//             </span>
//             <motion.h1 
//               className="text-4xl md:text-6xl font-headline font-bold mb-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               Built on <span className="gradient-text">Industry Leaders</span>
//             </motion.h1>
//             <motion.p 
//               className="text-xl max-w-3xl mx-auto" 
//               style={{ color: 'hsl(var(--muted-foreground))' }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               Partnering with global technology leaders to deliver enterprise-grade AI solutions 
//               with unmatched security, scalability, and performance
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ==================== TRUST METRICS ==================== */}
//       <section className="py-12 border-b">
//         <div className="container max-w-6xl px-4 md:px-8">
//           <motion.div
//             className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
//             variants={staggerContainer}
//             initial="visible"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {trustMetrics.map((metric, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeInUp}
//                 whileHover={{ y: -5, scale: 1.05 }}
//                 className="text-center p-6 rounded-xl border-2"
//                 style={{ 
//                   borderColor: 'hsl(var(--border))',
//                   background: 'hsl(var(--card))' 
//                 }}
//               >
//                 <motion.div
//                   className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3"
//                   style={{ background: 'hsl(var(--primary) / 0.1)' }}
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   <metric.icon className="w-6 h-6" style={{ color: 'hsl(var(--primary))' }} />
//                 </motion.div>
//                 <div className="text-3xl font-bold gradient-text font-headline">
//                   {metric.value}
//                 </div>
//                 <div className="text-sm mt-1" style={{ color: 'hsl(var(--muted-foreground))' }}>
//                   {metric.label}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ==================== STRATEGIC PARTNERS ==================== */}
//       <section className="py-20 md:py-28 relative overflow-hidden">
//         <motion.div
//           className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             x: [0, 50, 0],
//             y: [0, 30, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />

//         <div className="container max-w-6xl px-4 md:px-8 relative z-10">
//           {/* Section Header */}
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <motion.span 
//               className="hero-badge inline-flex items-center gap-2 mb-6"
//               initial={{ scale: 0, rotate: -180 }}
//               whileInView={{ scale: 1, rotate: 0 }}
//               viewport={{ once: true }}
//               transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
//             >
//               <HandHeart className="w-4 h-4" />
//               Our Technology Partners
//             </motion.span>

//             <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
//               <motion.span
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3 }}
//               >
//                 Strategic Technology{" "}
//               </motion.span>
//               <span className="relative inline-block">
//                 <motion.span
//                   className="gradient-text relative z-10"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.5 }}
//                 >
//                   Partners
//                 </motion.span>
                
//                 <motion.div
//                   className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-sm -z-10"
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.7, duration: 0.8 }}
//                 />
                
//                 <motion.div
//                   className="absolute -top-2 -right-3"
//                   initial={{ scale: 0, rotate: 0 }}
//                   whileInView={{ scale: 1, rotate: 360 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.9, type: "spring" }}
//                 >
//                   <Sparkles className="w-5 h-5 text-primary" />
//                 </motion.div>
//               </span>
//             </h2>

//             <motion.p 
//               className="text-lg max-w-3xl mx-auto" 
//               style={{ color: 'hsl(var(--muted-foreground))' }}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.6 }}
//             >
//               We partner with industry leaders to deliver enterprise-grade AI solutions
//             </motion.p>
//           </motion.div>

//           {/* Partner Cards */}
//           <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
//             {strategicPartners.map((partner, index) => {
//               const MainIcon = partner.IconComponent;
//               const BgIcon = partner.BackgroundIcon;
              
//               return (
//                 <motion.div
//                   key={partner.name}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                   whileHover={{ y: -10, scale: 1.02 }}
//                 >
//                   <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-2 overflow-hidden relative"
//                     style={{ borderColor: 'hsl(var(--border))' }}
//                   >
//                     {/* Partner Header */}
//                     <div className={`bg-primary p-8 md:p-10 relative overflow-hidden`}>
//                       {/* Animated Pattern */}
//                       <motion.div
//                         className="absolute inset-0 opacity-10"
//                         style={{
//                           backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
//                           backgroundSize: '30px 30px'
//                         }}
//                         animate={{
//                           backgroundPosition: ['0px 0px', '30px 30px'],
//                         }}
//                         transition={{
//                           duration: 20,
//                           repeat: Infinity,
//                           ease: "linear"
//                         }}
//                       />

//                       {/* Large Background Icon */}
//                       <motion.div 
//                         className="absolute -top-8 -right-8 opacity-10"
//                         animate={{
//                           rotate: [0, 10, -10, 0],
//                           scale: [1, 1.1, 1],
//                         }}
//                         transition={{
//                           duration: 6,
//                           repeat: Infinity,
//                           ease: "easeInOut"
//                         }}
//                       >
//                         <BgIcon className="w-56 h-56 text-white" strokeWidth={1} />
//                       </motion.div>

//                       <div className="relative z-10">
//                         {/* Main Icon Badge */}
//                         <motion.div
//                           className="inline-flex items-center justify-center w-20 h-20 bg-white/95 backdrop-blur-sm rounded-2xl mb-4 shadow-xl"
//                           whileHover={{ scale: 1.15, rotate: 360 }}
//                           transition={{ duration: 0.6, type: "spring" }}
//                         >
//                           <MainIcon 
//                             className="w-11 h-11" 
//                             style={{ color: partner.iconColor }}
//                             strokeWidth={1.5}
//                           />
//                         </motion.div>

//                         {/* Tagline */}
//                         {/* <motion.div
//                           className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-3"
//                           initial={{ opacity: 0, x: -20 }}
//                           whileInView={{ opacity: 1, x: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: 0.2 }}
//                         >
//                           {partner.tagline}
//                         </motion.div> */}

//                         <motion.h3 
//                           className="text-3xl md:text-4xl font-headline font-bold text-white mb-3"
//                           initial={{ opacity: 0, x: -20 }}
//                           whileInView={{ opacity: 1, x: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: 0.3 }}
//                         >
//                           {partner.name}
//                         </motion.h3>

//                         <motion.p 
//                           className="text-white/90 text-base md:text-lg leading-relaxed mb-4"
//                           initial={{ opacity: 0 }}
//                           whileInView={{ opacity: 1 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: 0.4 }}
//                         >
//                           {partner.description}
//                         </motion.p>

//                         {/* Stats */}
//                         <div className="flex gap-6">
//                           {partner.stats.map((stat, i) => (
//                             <motion.div
//                               key={i}
//                               className="text-center"
//                               initial={{ scale: 0 }}
//                               whileInView={{ scale: 1 }}
//                               viewport={{ once: true }}
//                               transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
//                             >
//                               <div className="text-2xl font-bold text-white">
//                                 {stat.value}
//                               </div>
//                               <div className="text-xs text-white/70">
//                                 {stat.label}
//                               </div>
//                             </motion.div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Partner Content */}
//                     <CardContent className="p-8">
//                       <motion.div 
//                         className="space-y-3 mb-6"
//                         variants={staggerContainer}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                       >
//                         {partner.features.map((feature, i) => (
//                           <motion.div 
//                             key={i} 
//                             className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-all"
//                             variants={fadeInUp}
//                             whileHover={{ x: 5 }}
//                             transition={{ type: "spring", stiffness: 300 }}
//                           >
//                             <motion.div
//                               initial={{ scale: 0, rotate: -180 }}
//                               whileInView={{ scale: 1, rotate: 0 }}
//                               viewport={{ once: true }}
//                               transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
//                             >
//                               <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(var(--primary))' }} />
//                             </motion.div>
//                             <span className="font-medium">{feature}</span>
//                           </motion.div>
//                         ))}
//                       </motion.div>

//                       <div className="flex gap-3">
//                         <motion.div
//                           className="flex-1"
//                           whileHover={{ scale: 1.03 }}
//                           whileTap={{ scale: 0.97 }}
//                         >
//                           <Button 
//                             asChild
//                             variant="outline" 
//                             className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 font-semibold"
//                           >
//                             <a href={partner.link} target="_blank" rel="noopener noreferrer">
//                               Know More 
//                               <motion.span
//                                 className="inline-block ml-2"
//                                 animate={{ x: [0, 5, 0] }}
//                                 transition={{ duration: 1.5, repeat: Infinity }}
//                               >
//                                 <ExternalLink className="w-4 h-4" />
//                               </motion.span>
//                             </a>
//                           </Button>
//                         </motion.div>
//                         <motion.div
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                         >
//                           <Button 
//                             size="icon"
//                             variant="outline"
//                             className="group-hover:bg-primary/10 group-hover:border-primary transition-all"
//                           >
//                             <Star className="w-4 h-4" />
//                           </Button>
//                         </motion.div>
//                       </div>
//                     </CardContent>

//                     {/* Hover Effects */}
//                     <motion.div 
//                       className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}
//                     />
//                     <motion.div
//                       className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                       style={{
//                         boxShadow: `0 0 30px hsl(var(--primary) / 0.3)`
//                       }}
//                     />
//                   </Card>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Partnership Benefits */}
//           <motion.div 
//             className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {benefits.map((item, i) => (
//               <motion.div 
//                 key={i} 
//                 className="text-center group"
//                 variants={scaleIn}
//                 whileHover={{ y: -8, scale: 1.05 }}
//               >
//                 <motion.div 
//                   className={`w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-gradient-to-br ${item.color} relative overflow-hidden`}
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.8, type: "spring" }}
//                 >
//                   <motion.div
//                     className="absolute inset-0 bg-white rounded-2xl"
//                     animate={{
//                       scale: [1, 1.5, 1.5],
//                       opacity: [0.3, 0, 0]
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       ease: "easeOut"
//                     }}
//                   />
//                   <item.icon className="w-10 h-10 text-[hsl(var(--primary))] relative z-10" />
//                 </motion.div>

//                 <h3 className="font-bold text-xl mb-2 font-headline group-hover:text-primary transition-colors">
//                   {item.title}
//                 </h3>
//                 <p className="text-base leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Trust Badge */}
//           <motion.div
//             className="mt-16 text-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//           >
//             <motion.div 
//               className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2"
//               style={{ 
//                 borderColor: 'hsl(var(--primary) / 0.2)',
//                 background: 'hsl(var(--primary) / 0.05)'
//               }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <motion.div
//                 animate={{ rotate: [0, 360] }}
//                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//               >
//                 <Shield className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
//               </motion.div>
//               <span className="font-semibold text-sm md:text-base">
//                 Powered by enterprise-grade technology partnerships
//               </span>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ==================== INTEGRATIONS GRID ==================== */}
//       <section className="py-10 md:py-10 border-t relative overflow-hidden">
//         {/* Background Pattern */}
//         <motion.div 
//           className="absolute inset-0 opacity-5"
//           animate={{
//             backgroundPosition: ["0% 0%", "100% 100%"],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             repeatType: "reverse"
//           }}
//         >
//           <div className="absolute inset-0" style={{
//             backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)',
//             backgroundSize: '50px 50px'
//           }} />
//         </motion.div>

//         {/* <div className="container max-w-7xl px-4 md:px-8 relative z-10">
//           <div className="text-center mb-16">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <motion.span 
//                 className="hero-badge inline-flex items-center gap-2 mb-6"
//                 animate={{
//                   boxShadow: [
//                     "0 0 0 0 hsla(var(--primary), 0.4)",
//                     "0 0 0 10px hsla(var(--primary), 0)",
//                   ],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                 }}
//               >
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//                 >
//                   <Zap className="w-4 h-4" />
//                 </motion.div>
//                 50+ Integrations
//               </motion.span>
//               <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
//                 Ecosystem <span className="gradient-text">Integrations</span>
//               </h2>
//               <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
//                 Seamlessly connect with your existing technology stack
//               </p>
//             </motion.div>
//           </div>

//           <motion.div 
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {integrationCategories.map((category, index) => (
//               <motion.div
//                 key={category.category}
//                 variants={fadeInUp}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <Card className="h-full group hover:shadow-2xl transition-all duration-500 relative overflow-hidden border-2"
//                   style={{ borderColor: 'hsl(var(--border))' }}
//                 >
              
//                   <motion.div 
//                     className={`h-1 bg-gradient-to-r ${category.color}`}
//                     initial={{ scaleX: 0 }}
//                     whileInView={{ scaleX: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1, duration: 0.6 }}
//                   />

//                   <CardHeader className="pb-4">
                    
//                     <div className="flex items-start justify-between mb-4">
//                       <motion.div 
//                         className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${category.color}`}
//                         whileHover={{ 
//                           scale: 1.1,
//                           rotate: [0, -10, 10, -10, 0]
//                         }}
//                         transition={{ duration: 0.5 }}
//                       >
//                         <category.icon className="w-7 h-7 text-white" />
//                       </motion.div>
//                       <motion.span 
//                         className="px-3 py-1 rounded-full text-xs font-bold"
//                         style={{
//                           background: 'hsl(var(--primary) / 0.1)',
//                           color: 'hsl(var(--primary))'
//                         }}
//                         initial={{ scale: 0 }}
//                         whileInView={{ scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.3, type: "spring" }}
//                       >
//                         {category.integrations.length} tools
//                       </motion.span>
//                     </div>

//                     <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
//                       {category.category}
//                     </CardTitle>
//                     <p className="text-sm leading-relaxed"
//                       style={{ color: 'hsl(var(--muted-foreground))' }}
//                     >
//                       {category.description}
//                     </p>
//                   </CardHeader>

//                   <CardContent className="pt-0">
//                     <div className="space-y-0">
//                       {category.integrations.map((integration, i) => (
//                         <motion.div 
//                           key={i} 
//                           className="group/item flex items-start justify-between p-3 -mx-3 rounded-lg transition-all duration-200 hover:bg-accent/50 cursor-pointer"
//                           initial={{ opacity: 0, x: -20 }}
//                           whileInView={{ opacity: 1, x: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: i * 0.1 }}
//                           whileHover={{ x: 5 }}
//                         >
//                           <div className="flex-1 min-w-0">
//                             <div className="flex items-center gap-2 mb-1">
//                               <span className="font-semibold text-sm group-hover/item:text-primary transition-colors">
//                                 {integration.name}
//                               </span>
//                               {integration.featured && (
//                                 <motion.span 
//                                   className="px-1.5 py-0.5 rounded text-xs font-bold"
//                                   style={{ 
//                                     background: 'hsl(var(--primary) / 0.1)',
//                                     color: 'hsl(var(--primary))'
//                                   }}
//                                   animate={{
//                                     scale: [1, 1.1, 1],
//                                   }}
//                                   transition={{
//                                     duration: 2,
//                                     repeat: Infinity,
//                                   }}
//                                 >
//                                   ★
//                                 </motion.span>
//                               )}
//                             </div>
//                             <p className="text-xs truncate"
//                               style={{ color: 'hsl(var(--muted-foreground))' }}
//                             >
//                               {integration.description}
//                             </p>
//                           </div>
//                           <motion.div
//                             initial={{ opacity: 0, x: -10 }}
//                             whileHover={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.2 }}
//                           >
//                             <ExternalLink 
//                               className="w-4 h-4 ml-2 flex-shrink-0"
//                               style={{ color: 'hsl(var(--primary))' }}
//                             />
//                           </motion.div>
//                         </motion.div>
//                       ))}
//                     </div>

//                     <div className="mt-4 pt-4 border-t"
//                       style={{ borderColor: 'hsl(var(--border))' }}
//                     >
//                       <motion.button 
//                         className="w-full flex items-center justify-center gap-2 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:bg-accent"
//                         style={{ color: 'hsl(var(--primary))' }}
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                       >
//                         <Plus className="w-4 h-4" />
//                         View all integrations
//                       </motion.button>
//                     </div>
//                   </CardContent>

//                   <motion.div 
//                     className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
//                   />
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
//           >
//             {[
//               { value: "50+", label: "Integrations" },
//               { value: "6", label: "Categories" },
//               { value: "99.9%", label: "Uptime SLA" },
//               { value: "24/7", label: "Support" }
//             ].map((stat, i) => (
//               <motion.div 
//                 key={i} 
//                 className="text-center"
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1, type: "spring" }}
//                 whileHover={{ scale: 1.1, y: -5 }}
//               >
//                 <motion.div 
//                   className="text-3xl md:text-4xl font-bold gradient-text font-headline mb-2"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                 >
//                   {stat.value}
//                 </motion.div>
//                 <div className="text-sm font-medium"
//                   style={{ color: 'hsl(var(--muted-foreground))' }}
//                 >
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div> */}
//       </section>

//       {/* ===== CTA SECTION ==== */}
//      <RequestQuote />
//     </div>
//   );
// }