export interface IndustrySolution {
  slug: string;
  industry: string;
  iconName: string;
  color: string;
  tagline: string;
  heroStats: {
    label: string;
    value: string;
  }[];
  challenges: {
    title: string;
    description: string;
    impact: string;
  }[];
  approach: {
    consultation: string;
    training: string;
  };
  solutions: {
    callingAgent: {
      title: string;
      description: string;
      features: {
        title: string;
        description: string;
      }[];
    };
    chatbot: {
      title: string;
      description: string;
      features: {
        title: string;
        description: string;
      }[];
    };
  };
  workflow: {
    title: string;
    steps: {
      step: number;
      title: string;
      description: string;
    }[];
  };
  useCases: {
    title: string;
    description: string;
    result: string;
  }[];
  impact: {
    primary: { value: string; label: string };
    secondary: string[];
  };
  beforeAfter: {
    before: {
      title: string;
      points: string[];
    };
    after: {
      title: string;
      points: string[];
    };
  };
  implementationTimeline: {
    phase: string;
    duration: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const industrySolutionsData: IndustrySolution[] = [
  {
    slug: "realestate",
    industry: "Real Estate",
    iconName: "Building2",
    color: "bg-[hsl(var(--primary))]",
    tagline: "Engage buyers 24/7 and accelerate sales cycles with conversational AI.",
    heroStats: [
      { label: "Lead Response Time", value: "60% Faster" },
      { label: "Conversion Rate", value: "+45%" },
      { label: "Cost Per Lead", value: "-40%" },
    ],
    challenges: [
      {
        title: "Missed Leads Due to Delayed Responses",
        description: "Sales teams struggle to respond quickly to incoming inquiries, especially during peak hours and weekends.",
        impact: "70% of leads go cold within the first hour without response",
      },
      {
        title: "Manual Lead Qualification",
        description: "Time-consuming process of qualifying leads manually leads to inefficiency and missed opportunities.",
        impact: "Sales team spends 60% time on unqualified leads",
      },
      {
        title: "Inconsistent Follow-ups",
        description: "Post-site visit follow-ups are often delayed or forgotten, resulting in lost sales.",
        impact: "30% potential sales lost due to poor follow-up",
      },
    ],
    approach: {
      consultation: "We analyze your entire buyer journey—from first contact to property handover. Our team maps lead funnels, identifies bottlenecks, and designs AI touchpoints that align with your sales process.",
      training: "Your sales team receives comprehensive training on AI-assisted CRM workflows, enabling seamless human-AI collaboration. We ensure your team knows when to let AI handle routine tasks and when to step in for high-value interactions.",
    },
    solutions: {
      callingAgent: {
        title: "AI Calling Agent for Real Estate",
        description: "Intelligent voice automation that handles lead qualification, appointment scheduling, and follow-ups with human-like conversations.",
        features: [
          {
            title: "Instant Lead Qualification",
            description: "AI agent calls new leads within 60 seconds, asks qualifying questions about budget, location preference, and timeline, then scores and routes to appropriate sales rep.",
          },
          {
            title: "Automated Site Visit Scheduling",
            description: "Checks real-time availability, books appointments, sends calendar invites, and provides directions via SMS/WhatsApp—all without human intervention.",
          },
          {
            title: "Post-Visit Follow-ups",
            description: "Automatically follows up within 24 hours after site visits, collects feedback, answers queries, and schedules next steps based on prospect interest level.",
          },
          {
            title: "Multilingual Support",
            description: "Converses in multiple Indian languages (Hindi, Marathi, Tamil, Telugu, etc.) using natural voice synthesis to reach diverse buyer segments.",
          },
        ],
      },
      chatbot: {
        title: "AI Chatbot for Property Discovery",
        description: "24/7 conversational assistant on your website and WhatsApp that guides prospects through property options, pricing, and financing.",
        features: [
          {
            title: "Interactive Property Search",
            description: "Understands natural queries like 'Show me 2BHK under 80 lakhs in Powai' and presents relevant listings with photos, floor plans, and virtual tours.",
          },
          {
            title: "EMI & Loan Calculator",
            description: "Provides instant EMI calculations, loan eligibility checks, and connects with partner banks for pre-approved offers.",
          },
          {
            title: "Document & Booking Assistance",
            description: "Guides buyers through documentation checklist, booking process, and payment schedules with automated reminders and updates.",
          },
          {
            title: "WhatsApp Integration",
            description: "Prospects can search properties, book visits, and get updates directly via WhatsApp—the channel they already use daily.",
          },
        ],
      },
    },
    workflow: {
      title: "How BizAI Hacks Works for Real Estate",
      steps: [
        {
          step: 1,
          title: "Lead Capture",
          description: "Prospect fills form on website, clicks ad, or calls your number. AI instantly captures and categorizes the lead.",
        },
        {
          step: 2,
          title: "Instant Engagement",
          description: "Within 60 seconds, AI calling agent reaches out via phone or chatbot engages on website/WhatsApp.",
        },
        {
          step: 3,
          title: "Qualification & Scoring",
          description: "AI asks targeted questions about budget, location, timeline, and preferences. Lead is scored and prioritized.",
        },
        {
          step: 4,
          title: "Appointment Booking",
          description: "Based on interest level, AI schedules site visit with available sales rep and sends confirmations.",
        },
        {
          step: 5,
          title: "Human Handoff",
          description: "Qualified leads with complete context are passed to sales team for site visit and closing.",
        },
        {
          step: 6,
          title: "Automated Follow-up",
          description: "Post-visit, AI follows up, nurtures leads, sends offers, and brings them back into sales funnel.",
        },
      ],
    },
    useCases: [
      {
        title: "Weekend Lead Management",
        description: "Builder receives 200+ leads on weekends from property portals. AI agent qualifies all leads, books 50+ site visits for Monday-Tuesday.",
        result: "Zero missed opportunities, 60% reduction in sales team workload",
      },
      {
        title: "Post-Launch Campaign",
        description: "New project launch generates 500 inquiries in 3 days. AI chatbot answers FAQs, shares brochure, and schedules visits based on urgency.",
        result: "85% leads engaged within 1 hour, 40% conversion to site visits",
      },
      {
        title: "Follow-up Automation",
        description: "500 prospects who visited site but didn't book. AI agent calls each one, offers personalized deals, and re-engages 150 prospects.",
        result: "30% revival rate, 45 additional bookings worth ₹18 crores",
      },
    ],
    impact: {
      primary: { value: "60%", label: "Faster Lead Response Time" },
      secondary: [
        "45% increase in lead-to-visit conversion",
        "40% reduction in cost per qualified lead",
        "3x improvement in follow-up consistency",
        "24/7 availability without additional staffing costs",
      ],
    },
    beforeAfter: {
      before: {
        title: "Before BizAI Hacks",
        points: [
          "Leads wait 4-8 hours for first response",
          "60% of weekend leads never contacted",
          "Sales team overwhelmed with unqualified inquiries",
          "Manual follow-ups missed or delayed",
          "No tracking of lead engagement history",
          "High cost per acquisition due to inefficiency",
        ],
      },
      after: {
        title: "After BizAI Hacks",
        points: [
          "Every lead contacted within 60 seconds",
          "100% lead coverage, 24/7 including weekends",
          "Only pre-qualified leads reach sales team",
          "Automated, timely follow-ups for every prospect",
          "Complete lead journey tracked in CRM",
          "Lower CAC with higher conversion rates",
        ],
      },
    },
    implementationTimeline: [
      {
        phase: "Discovery & Planning",
        duration: "Week 1",
        description: "Analyze your current lead flow, CRM setup, and sales process. Define AI integration points and success metrics.",
      },
      {
        phase: "AI Configuration",
        duration: "Week 2-3",
        description: "Configure AI agents with your property data, pricing, FAQs. Set up calling scripts and chatbot flows. Integrate with your CRM.",
      },
      {
        phase: "Training & Testing",
        duration: "Week 4",
        description: "Train your sales team on the AI system. Run pilot tests with sample leads and refine based on feedback.",
      },
      {
        phase: "Launch & Optimization",
        duration: "Week 5+",
        description: "Go live with full deployment. Monitor performance, gather insights, and continuously optimize AI responses.",
      },
    ],
    faqs: [
      {
        question: "Will AI replace our sales team?",
        answer: "No! AI handles repetitive tasks like lead qualification and follow-ups, freeing your sales team to focus on high-value activities like site visits, negotiations, and closing deals. It's about augmentation, not replacement.",
      },
      {
        question: "How does AI handle complex property queries?",
        answer: "Our AI is trained on your complete property portfolio including pricing, amenities, floor plans, and possession timelines. For queries beyond its scope, it seamlessly transfers to a human agent with full context.",
      },
      {
        question: "Can it integrate with our existing CRM?",
        answer: "Yes! We integrate with popular CRMs like Salesforce, Zoho, and custom systems. All lead interactions, scores, and appointments sync automatically.",
      },
      {
        question: "What about data security and privacy?",
        answer: "We follow enterprise-grade security with data encryption, GDPR compliance, and secure API integrations. Customer data is stored in Indian servers with strict access controls.",
      },
      {
        question: "How long does implementation take?",
        answer: "Typically 4-5 weeks from kickoff to full deployment. We can fast-track for urgent launches with a dedicated implementation team.",
      },
    ],
  },
  {
    slug: "automobile",
    industry: "Automobile",
    iconName: "CarFront",
    color: "bg-[hsl(var(--primary))]",
    tagline: "Boost customer engagement and post-sale experience with automation.",
    heroStats: [
      { label: "Service Attendance", value: "40% Rise" },
      { label: "Test Drive Bookings", value: "+55%" },
      { label: "Customer Satisfaction", value: "4.5/5" },
    ],
    challenges: [
      {
        title: "Service Center Congestion",
        description: "Walk-in customers face long wait times, and service reminders are often missed, leading to poor maintenance adherence.",
        impact: "Only 35% customers return for scheduled servicing",
      },
      {
        title: "Manual Test Drive Scheduling",
        description: "Potential buyers have to call dealership, wait for response, and coordinate schedules manually, causing friction.",
        impact: "40% test drive requests drop off due to poor scheduling experience",
      },
      {
        title: "Post-Purchase Engagement Gap",
        description: "After delivery, customers rarely hear from dealership except for service reminders, missing cross-sell opportunities.",
        impact: "Low repeat purchase rate and minimal accessory/insurance upsells",
      },
    ],
    approach: {
      consultation: "We study your complete customer lifecycle—from lead generation to service retention. We map touchpoints in sales, after-sales, and service departments to identify automation opportunities.",
      training: "Your CRM teams, service advisors, and sales staff are trained to work alongside AI. We enable hybrid workflows where AI handles routine interactions and humans focus on relationship building.",
    },
    solutions: {
      callingAgent: {
        title: "AI Calling Agent for Automotive",
        description: "Automated voice system that sends service reminders, books test drives, and collects feedback to improve customer retention.",
        features: [
          {
            title: "Proactive Service Reminders",
            description: "AI automatically calls customers 7 days before scheduled service, confirms appointment, and sends workshop location/time via SMS.",
          },
          {
            title: "Recall & Safety Notifications",
            description: "Instantly notify all affected customers about recalls, safety campaigns, or software updates with automated calling and booking assistance.",
          },
          {
            title: "Post-Service Follow-up",
            description: "Within 24 hours of service completion, AI calls to collect feedback, address concerns, and schedule next service appointment.",
          },
          {
            title: "Insurance & Extended Warranty Alerts",
            description: "Calls customers 30 days before insurance expiry with renewal options and connects with partner insurers for seamless renewal.",
          },
        ],
      },
      chatbot: {
        title: "AI Chatbot for Sales & Support",
        description: "Conversational assistant for website and WhatsApp that handles vehicle inquiries, test drive bookings, and financing queries.",
        features: [
          {
            title: "Instant Test Drive Booking",
            description: "Prospects choose model, preferred date/time, and location. AI checks availability and confirms booking with sales rep assignment.",
          },
          {
            title: "Vehicle Comparison & Specifications",
            description: "Answers detailed questions about features, variants, colors, and pricing. Provides side-by-side comparisons for multiple models.",
          },
          {
            title: "Finance & Loan Assistance",
            description: "Calculates EMI, checks loan eligibility, and connects with partner banks for pre-approved offers—all within the chat interface.",
          },
          {
            title: "Service & Parts Inquiry",
            description: "Customers can check service costs, book appointments, order genuine parts, and track service status via WhatsApp chatbot.",
          },
        ],
      },
    },
    workflow: {
      title: "How BizAI Hacks Works for Automobile Industry",
      steps: [
        {
          step: 1,
          title: "Customer Data Integration",
          description: "AI syncs with your DMS (Dealer Management System) to access customer purchase history, service records, and preferences.",
        },
        {
          step: 2,
          title: "Trigger-Based Automation",
          description: "Based on triggers like service due date, insurance expiry, or new model launch, AI initiates relevant outreach.",
        },
        {
          step: 3,
          title: "Multi-Channel Engagement",
          description: "AI reaches customers via their preferred channel—phone call, WhatsApp, SMS, or email—with personalized messages.",
        },
        {
          step: 4,
          title: "Intent Recognition",
          description: "AI understands customer intent (book service, ask about new model, report issue) and routes to appropriate workflow.",
        },
        {
          step: 5,
          title: "Appointment & Action",
          description: "Based on conversation, AI books appointments, sends confirmations, or escalates to human agent with full context.",
        },
        {
          step: 6,
          title: "Feedback & Analytics",
          description: "Post-interaction, AI collects feedback and generates insights for dealership to improve processes and offerings.",
        },
      ],
    },
    useCases: [
      {
        title: "New Model Launch Campaign",
        description: "Dealership launches new SUV model. AI chatbot engages 5000+ prospects on website, WhatsApp. Books 300 test drives in 2 weeks.",
        result: "55% increase in test drive bookings, 40% conversion to sales",
      },
      {
        title: "Service Reminder Automation",
        description: "10,000 customers due for service. AI calls each one, confirms 6,000 appointments, reduces no-shows by sending reminders.",
        result: "40% rise in on-time service attendance, ₹50L additional service revenue",
      },
      {
        title: "Post-Delivery Engagement",
        description: "500 customers delivered vehicles in last 30 days. AI calls for feedback, offers accessories, promotes extended warranty.",
        result: "4.8/5 satisfaction score, ₹15L in accessory sales, 200 warranty upsells",
      },
    ],
    impact: {
      primary: { value: "40%", label: "Rise in On-Time Service Attendance" },
      secondary: [
        "55% increase in test drive conversions",
        "4.5/5 average customer satisfaction score",
        "30% boost in accessory and insurance upsells",
        "Consistent engagement throughout customer lifecycle",
      ],
    },
    beforeAfter: {
      before: {
        title: "Before BizAI Hacks",
        points: [
          "Service reminders sent via generic SMS, often ignored",
          "Test drive requests handled manually, causing delays",
          "No systematic post-delivery follow-up",
          "Low customer engagement between service intervals",
          "Missed opportunities for accessory/insurance sales",
          "Limited feedback collection from customers",
        ],
      },
      after: {
        title: "After BizAI Hacks",
        points: [
          "Personalized voice calls for service reminders with booking",
          "Instant test drive booking via chatbot, zero wait time",
          "Automated post-delivery calls for feedback and upsells",
          "Continuous engagement via WhatsApp for tips, offers",
          "Proactive cross-sell campaigns for accessories and warranties",
          "Systematic feedback collection with actionable insights",
        ],
      },
    },
    implementationTimeline: [
      {
        phase: "DMS Integration & Data Sync",
        duration: "Week 1-2",
        description: "Connect AI with your Dealer Management System. Import customer data, service schedules, and inventory information.",
      },
      {
        phase: "AI Training & Customization",
        duration: "Week 3",
        description: "Train AI on your vehicle lineup, pricing, service packages, and dealership policies. Configure calling and chat scripts.",
      },
      {
        phase: "Pilot Testing",
        duration: "Week 4",
        description: "Run pilot with select customer segment. Test service reminders, test drive bookings, and feedback collection.",
      },
      {
        phase: "Full Rollout",
        duration: "Week 5+",
        description: "Deploy across all customer touchpoints. Monitor performance, optimize based on real-world data, and scale up.",
      },
    ],
    faqs: [
      {
        question: "Can AI handle complex technical queries about vehicles?",
        answer: "AI is trained on your complete vehicle specifications, features, and common queries. For highly technical questions, it seamlessly transfers to a product specialist with conversation context.",
      },
      {
        question: "How does it integrate with our DMS?",
        answer: "We have pre-built integrations with popular automotive DMS platforms like AutoManager, DealerSocket, and CDK. Custom integrations are also available.",
      },
      {
        question: "What if customers prefer speaking to humans?",
        answer: "AI always offers the option to connect with a human agent. The transfer is instant with full conversation history passed along, ensuring seamless experience.",
      },
      {
        question: "Can we customize the voice and language?",
        answer: "Yes! You can choose voice gender, tone, and language. We support all major Indian languages for regional dealerships.",
      },
      {
        question: "How do you measure ROI?",
        answer: "We track metrics like service attendance rate, test drive conversions, customer satisfaction scores, and revenue from upsells. Most clients see positive ROI within 3 months.",
      },
    ],
  },
  {
    slug: "agriculture",
    industry: "Agriculture & Agri-Tech",
    iconName: "Leaf",
    color: "bg-[hsl(var(--primary))]",
    tagline: "Empower farmers with 24×7 multilingual AI communication.",
    heroStats: [
      { label: "Farmer Reach", value: "10x Scale" },
      { label: "Advisory Response", value: "24/7" },
      { label: "Language Support", value: "15+ Language" },
    ],
    challenges: [
      {
        title: "Last-Mile Communication Gap",
        description: "Farmers in remote areas struggle to get timely information about weather, prices, and best practices due to limited connectivity and language barriers.",
        impact: "60% farmers make uninformed decisions affecting crop yield",
      },
      {
        title: "Limited Extension Services",
        description: "Agricultural extension officers can't reach all farmers personally, especially during critical sowing and harvesting periods.",
        impact: "Only 1 extension officer per 1000 farmers, inadequate coverage",
      },
      {
        title: "Manual Advisory & Support",
        description: "Helplines are overwhelmed during peak seasons, and farmers wait hours for answers to time-sensitive queries.",
        impact: "70% calls go unanswered during peak agricultural season",
      },
    ],
    approach: {
      consultation: "We map your farmer network, communication channels, and information flow. Identify critical touchpoints where timely AI intervention can improve outcomes.",
      training: "Train your agri-extension workers and support staff on AI-assisted advisory workflows. Enable them to leverage AI for scalable farmer engagement.",
    },
    solutions: {
      callingAgent: {
        title: "AI Calling Agent for Farmers",
        description: "Multilingual voice automation that delivers weather alerts, market prices, and government scheme updates directly to farmers' mobile phones.",
        features: [
          {
            title: "Weather & Rainfall Alerts",
            description: "AI calls farmers in their regional language (Hindi, Marathi, Tamil, etc.) with 3-day weather forecast, rainfall predictions, and farming advisories.",
          },
          {
            title: "Market Price Updates",
            description: "Daily calls with mandi prices for their crops, helping farmers make informed decisions about when and where to sell produce.",
          },
          {
            title: "Subsidy & Scheme Notifications",
            description: "Proactive calls about government subsidies, PM-KISAN installments, crop insurance deadlines, and application assistance.",
          },
          {
            title: "Pest & Disease Alerts",
            description: "Region-specific alerts about pest outbreaks or crop diseases with preventive measures and treatment recommendations.",
          },
        ],
      },
      chatbot: {
        title: "AI Chatbot for Agri Advisory",
        description: "WhatsApp-based chatbot that answers crop-specific questions, provides best practices, and connects farmers with experts.",
        features: [
          {
            title: "Crop-Specific FAQs",
            description: "Farmers ask questions in their language about sowing, fertilizer doses, irrigation schedules. AI provides instant, crop-specific guidance.",
          },
          {
            title: "Soil Health & Fertilizer Recommendations",
            description: "Based on soil test results (uploaded via photo), AI suggests appropriate fertilizer mix and application timing.",
          },
          {
            title: "Insurance Claim Assistance",
            description: "Step-by-step guidance on crop insurance claim process, document checklist, and status tracking via WhatsApp.",
          },
          {
            title: "Expert Connect",
            description: "For complex queries, AI schedules call-back from agricultural expert or connects to nearest Krishi Vigyan Kendra.",
          },
        ],
      },
    },
    workflow: {
      title: "How BizAI Hacks Works for Agriculture",
      steps: [
        {
          step: 1,
          title: "Farmer Registration",
          description: "Farmers register via missed call, SMS, or through field officers. Profile includes crop type, land size, and language preference.",
        },
        {
          step: 2,
          title: "Trigger-Based Alerts",
          description: "AI monitors weather data, market prices, and government announcements. Triggers relevant alerts based on farmer profile.",
        },
        {
          step: 3,
          title: "Multilingual Voice Call",
          description: "AI calls farmer in their regional language with personalized information—weather alert, price update, or advisory.",
        },
        {
          step: 4,
          title: "Interactive Response",
          description: "Farmer can respond via keypress (IVR) or voice to ask follow-up questions, request expert call, or access more information.",
        },
        {
          step: 5,
          title: "WhatsApp Follow-up",
          description: "Detailed information, images, videos, and documents sent via WhatsApp for farmer to refer later.",
        },
        {
          step: 6,
          title: "Expert Escalation",
          description: "Complex queries routed to human experts with complete context for personalized assistance.",
        },
      ],
    },
    useCases: [
      {
        title: "Pre-Monsoon Advisory Campaign",
        description: "50,000 farmers in drought-prone region. AI calls each one with soil preparation tips, drought-resistant seed recommendations.",
        result: "80% farmers adopted recommended practices, 30% yield improvement",
      },
      {
        title: "Market Price Information",
        description: "10,000 cotton farmers receive daily AI calls with mandi prices from 5 nearest markets, helping them time their sales better.",
        result: "15% better price realization, ₹2000/quintal higher average selling price",
      },
      {
        title: "Crop Insurance Awareness",
        description: "During enrollment season, AI calls 1 lakh farmers with insurance benefits, deadlines, and application process via WhatsApp chatbot.",
        result: "3x increase in insurance enrollment, 70,000 farmers covered",
      },
    ],
    impact: {
      primary: { value: "24×7", label: "Continuous Advisory Access" },
      secondary: [
        "10x scale in farmer reach without additional manpower",
        "15+ languages supported for pan-India coverage",
        "Timely decisions leading to 20-30% better outcomes",
        "90% farmer satisfaction with AI advisory services",
      ],
    },
    beforeAfter: {
      before: {
        title: "Before BizAI Hacks",
        points: [
          "Farmers rely on neighbors or local dealers for advice",
          "Weather information accessed from TV, often too late",
          "No systematic market price dissemination",
          "Extension officers can reach only 5-10% farmers personally",
          "Government schemes have low awareness and enrollment",
          "Language barriers prevent access to online resources",
        ],
      },
      after: {
        title: "After BizAI Hacks",
        points: [
          "Every farmer gets personalized, science-based advisory",
          "Proactive weather alerts 3 days in advance via call",
          "Daily market price updates for informed selling decisions",
          "AI extends reach of officers to 100% farmer base",
          "Automated scheme notifications with application assistance",
          "Complete support in farmer's own language (15+ languages)",
        ],
      },
    },
    implementationTimeline: [
      {
        phase: "Farmer Data Collection",
        duration: "Week 1-2",
        description: "Collect farmer database with crop details, contact info, and language preferences. Can integrate with existing databases.",
      },
      {
        phase: "AI Training & Localization",
        duration: "Week 3",
        description: "Train AI on crop-specific advisories, regional farming practices, and local languages. Configure voice synthesis for natural speech.",
      },
      {
        phase: "Pilot in Select Region",
        duration: "Week 4",
        description: "Deploy in one district with 5000 farmers. Test alerts, collect feedback, and refine based on farmer responses.",
      },
      {
        phase: "Scale Across Regions",
        duration: "Week 5+",
        description: "Roll out to additional districts/states. Continuous improvement based on farmer engagement and seasonal requirements.",
      },
    ],
    faqs: [
      {
        question: "Can illiterate farmers use this system?",
        answer: "Absolutely! The system works via voice calls in local language—farmers just listen and respond via keypress or voice. No smartphone or reading required.",
      },
      {
        question: "How accurate is the agricultural advice?",
        answer: "AI is trained on verified agricultural research, government guidelines, and expert knowledge. For complex cases, it connects to human agronomists.",
      },
      {
        question: "What about areas with poor internet connectivity?",
        answer: "Voice calls work on basic 2G networks. WhatsApp chatbot requires minimal data and works offline once messages are downloaded.",
      },
      {
        question: "Can it integrate with our existing farmer database?",
        answer: "Yes! We integrate with Excel sheets, CRM systems, or government databases. Data privacy and security are maintained throughout.",
      },
      {
        question: "How do you handle 15+ languages?",
        answer: "We use advanced multilingual AI models trained specifically for Indian languages, including regional dialects and agricultural terminology.",
      },
    ],
  },
  // Continue in same file after Agriculture   ...

{
  slug: "chemical",
  industry: "Chemical & Industries",
  iconName: "FlaskConical",
  color: "bg-[hsl(var(--primary))]",
  tagline: "Streamline safety, compliance, and operations using AI automation.",
  heroStats: [
    { label: "Emergency Response", value: "25% Faster" },
    { label: "Safety Compliance", value: "+35%" },
    { label: "Downtime Reduction", value: "-20%" },
  ],
  challenges: [
    {
      title: "High Safety Communication Load",
      description: "Manual broadcasting of safety protocols, compliance alerts, and emergency notifications is time-consuming and error-prone.",
      impact: "25% delay in critical safety communications during emergencies",
    },
    {
      title: "Complex Supply Chain Coordination",
      description: "Managing inventory, coordinating with multiple suppliers, and tracking hazardous materials requires constant manual effort.",
      impact: "15-20% inventory holding costs due to poor coordination",
    },
    {
      title: "Slow Escalation During Plant Events",
      description: "Critical incidents require immediate escalation to multiple stakeholders, but manual calling causes dangerous delays.",
      impact: "Average 30-minute delay in emergency response time",
    },
  ],
  approach: {
    consultation: "We identify safety and operations communication touchpoints across your facilities. Map critical workflows, compliance requirements, and emergency response protocols.",
    training: "Safety officers and operations teams are enabled with AI escalation workflows. We train staff on hybrid safety systems where AI ensures zero-delay communication.",
  },
  solutions: {
    callingAgent: {
      title: "AI Safety Communication Agent",
      description: "Automated voice system for safety drills, compliance reminders, emergency broadcasts, and incident escalation with immediate reach.",
      features: [
        {
          title: "Safety Drill Broadcasts",
          description: "Schedule and execute safety drills with automated calls to all staff. Track acknowledgments and send follow-up reminders to non-responders.",
        },
        {
          title: "Compliance Alert System",
          description: "Automated reminders for safety inspections, equipment certifications, and regulatory compliance deadlines with escalation for missed items.",
        },
        {
          title: "Emergency Escalation",
          description: "In case of plant incidents, AI instantly calls relevant personnel in priority order, tracks responses, and escalates until acknowledged.",
        },
        {
          title: "Shift Handover Communications",
          description: "Automated calls to incoming shift staff with critical updates, safety concerns, and operational status from previous shift.",
        },
      ],
    },
    chatbot: {
      title: "AI Operations & MSDS Chatbot",
      description: "24/7 internal chatbot for MSDS queries, incident logging, maintenance requests, and supply chain coordination.",
      features: [
        {
          title: "MSDS & SDS Quick Access",
          description: "Employees can instantly query Material Safety Data Sheets for any chemical via chat. Get handling procedures, hazard info, and first-aid measures.",
        },
        {
          title: "Incident Reporting & Logging",
          description: "Report near-misses, safety violations, or equipment issues via chat. AI logs incident, assigns case number, and notifies relevant departments.",
        },
        {
          title: "Maintenance Request Automation",
          description: "Report equipment issues or request preventive maintenance via chatbot. AI creates work orders and tracks resolution status.",
        },
        {
          title: "Supply Chain Reorder Triggers",
          description: "AI monitors inventory levels and triggers automated reorder requests when critical materials fall below safety stock levels.",
        },
      ],
    },
  },
  workflow: {
    title: "How BizAI Hacks Works for Chemical Industry",
    steps: [
      {
        step: 1,
        title: "System Integration",
        description: "Connect AI with your ERP, inventory management, and safety systems. Import MSDS database, employee contacts, and compliance schedules.",
      },
      {
        step: 2,
        title: "Safety Protocol Setup",
        description: "Configure emergency escalation trees, compliance reminder schedules, and safety drill sequences based on your protocols.",
      },
      {
        step: 3,
        title: "Automated Monitoring",
        description: "AI continuously monitors compliance deadlines, inventory levels, and scheduled safety events to trigger proactive communications.",
      },
      {
        step: 4,
        title: "Event-Based Triggers",
        description: "When an event occurs (incident, low stock, inspection due), AI initiates relevant workflow—calls, messages, or escalations.",
      },
      {
        step: 5,
        title: "Real-Time Response Tracking",
        description: "AI tracks acknowledgments, responses, and actions taken. Escalates if no response within defined time windows.",
      },
      {
        step: 6,
        title: "Analytics & Reporting",
        description: "Generate compliance reports, incident analytics, and communication effectiveness metrics for continuous improvement.",
      },
    ],
  },
  useCases: [
    {
      title: "Emergency Evacuation Drill",
      description: "Chemical plant conducts evacuation drill. AI calls 500 employees across 3 shifts with drill instructions and tracks acknowledgments.",
      result: "100% employee reach in 5 minutes vs. 30 minutes with manual calling",
    },
    {
      title: "Compliance Deadline Management",
      description: "250 equipment certifications due across 6 months. AI sends reminders 30, 15, and 7 days before expiry. Escalates overdue items.",
      result: "Zero compliance violations, 100% on-time certifications",
    },
    {
      title: "Chemical Spill Incident",
      description: "Minor spill detected at 2 AM. AI calls emergency response team, safety officer, and plant manager in sequence until acknowledged.",
      result: "Response team on-site in 8 minutes vs. 35 minutes previously",
    },
  ],
  impact: {
    primary: { value: "25%", label: "Faster Emergency Communication" },
    secondary: [
      "35% improvement in safety compliance adherence",
      "20% reduction in downtime incidents",
      "100% communication coverage, zero missed alerts",
      "Faster incident response saving potential millions in damages",
    ],
  },
  beforeAfter: {
    before: {
      title: "Before BizAI Hacks",
      points: [
        "Safety alerts sent via generic emails, often missed",
        "Manual calling during emergencies causes delays",
        "MSDS lookups require physical binders or desktop access",
        "Compliance deadlines tracked in spreadsheets, prone to errors",
        "No systematic follow-up on safety drill participation",
        "Slow escalation during night shifts or weekends",
      ],
    },
    after: {
      title: "After BizAI Hacks",
      points: [
        "Automated voice calls ensure critical alerts are heard",
        "Instant emergency escalation with response tracking",
        "Mobile MSDS access via chatbot for on-site workers",
        "Automated compliance tracking with proactive reminders",
        "100% drill participation tracking with auto-escalation",
        "24/7 consistent emergency response regardless of shift",
      ],
    },
  },
  implementationTimeline: [
    {
      phase: "Safety Audit & Integration",
      duration: "Week 1-2",
      description: "Audit current safety systems, compliance requirements, and communication protocols. Integrate with ERP and safety management systems.",
    },
    {
      phase: "AI Configuration & Testing",
      duration: "Week 3",
      description: "Set up emergency escalation trees, MSDS database, and compliance schedules. Configure calling scripts and chatbot flows.",
    },
    {
      phase: "Pilot Safety Drill",
      duration: "Week 4",
      description: "Conduct pilot safety drill using AI system. Test emergency broadcasts, response tracking, and escalation mechanisms.",
    },
    {
      phase: "Full Deployment",
      duration: "Week 5+",
      description: "Roll out across all facilities. Train safety officers and staff. Monitor performance and continuously optimize.",
    },
  ],
  faqs: [
    {
      question: "Is the system compliant with industry safety regulations?",
      answer: "Yes! Our system is designed to support compliance with ISO 45001, OSHA regulations, and local safety standards. We provide audit logs and compliance reports.",
    },
    {
      question: "What happens if AI fails during an emergency?",
      answer: "We have redundant failover systems and manual override options. Your existing emergency protocols remain as backup. AI augments, not replaces, safety systems.",
    },
    {
      question: "Can it handle multi-site operations?",
      answer: "Absolutely! We support multi-facility deployments with site-specific configurations, centralized monitoring, and consolidated reporting.",
    },
    {
      question: "How secure is the MSDS database?",
      answer: "Data is encrypted, access-controlled, and hosted on secure servers. Only authorized personnel can access sensitive chemical information.",
    },
    {
      question: "Can we customize emergency escalation workflows?",
      answer: "Yes! Escalation trees, response times, and notification sequences are fully customizable based on your safety protocols and organizational structure.",
    },
  ],
},

{
  slug: "healthcare",
  industry: "Healthcare",
  iconName: "Heart",
  color: "bg-[hsl(var(--primary))]",
  tagline: "Reduce patient no-shows and improve engagement with AI.",
  heroStats: [
    { label: "Missed Appointments", value: "50% Reduction" },
    { label: "Patient Satisfaction", value: "4.7/5" },
    { label: "Front-desk Workload", value: "-60%" },
  ],
  challenges: [
    {
      title: "Long Patient Query Response Times",
      description: "Front-desk staff overwhelmed with appointment bookings, billing queries, and general inquiries, leading to long wait times and poor patient experience.",
      impact: "Average 15-minute hold time, 30% call abandonment rate",
    },
    {
      title: "Manual Billing and Lab Result Queries",
      description: "Patients constantly calling to check lab results, billing status, and insurance coverage, consuming significant staff time.",
      impact: "40% of calls are routine queries that could be automated",
    },
    {
      title: "High Front-Desk Workloads",
      description: "Receptionists juggling multiple tasks—appointments, check-ins, phone calls—leading to errors and patient dissatisfaction.",
      impact: "25% missed appointment confirmations, 15% booking errors",
    },
  ],
  approach: {
    consultation: "We analyze patient communication and appointment workflows from registration to discharge. Identify touchpoints where AI can improve experience and reduce manual workload.",
    training: "Train front-desk staff for AI-assisted patient management. Enable them to focus on complex patient needs while AI handles routine interactions.",
  },
  solutions: {
    callingAgent: {
      title: "AI Patient Communication Agent",
      description: "Automated voice system for appointment confirmations, reminders, and follow-ups that improves attendance and patient satisfaction.",
      features: [
        {
          title: "Appointment Confirmation Calls",
          description: "AI calls patients 48 hours before appointment to confirm. Allows rescheduling via voice, sends confirmation SMS, and updates calendar automatically.",
        },
        {
          title: "Pre-Appointment Reminders",
          description: "24-hour reminder calls with preparation instructions (fasting, documents to bring, insurance card, etc.) to ensure patients come prepared.",
        },
        {
          title: "Post-Consultation Follow-ups",
          description: "AI calls patients 3 days post-visit to check recovery, remind about medication, and schedule follow-up if needed.",
        },
        {
          title: "Lab Result Notifications",
          description: "Automated calls when lab results are ready. For normal results, AI provides summary. Abnormal results trigger doctor callback scheduling.",
        },
      ],
    },
    chatbot: {
      title: "AI Virtual Health Assistant",
      description: "24/7 chatbot for appointment booking, insurance FAQs, symptom triage, and general health information on website and WhatsApp.",
      features: [
        {
          title: "Intelligent Appointment Booking",
          description: "Patients describe symptoms or choose department. AI suggests appropriate doctor, shows available slots, and books appointment with calendar integration.",
        },
        {
          title: "Insurance & Billing Support",
          description: "Answer questions about insurance coverage, co-pays, billing queries, and payment options. Provide cost estimates for common procedures.",
        },
        {
          title: "Symptom Triage & Guidance",
          description: "Basic symptom checker that provides guidance on urgency (emergency, schedule appointment, self-care) and recommends appropriate specialty.",
        },
        {
          title: "Prescription Refill Requests",
          description: "Patients request prescription refills via chat. AI forwards to doctor, notifies patient when ready, and provides pharmacy pickup details.",
        },
      ],
    },
  },
  workflow: {
    title: "How BizAI Hacks Works for Healthcare",
    steps: [
      {
        step: 1,
        title: "EMR/HMS Integration",
        description: "Connect AI with your Electronic Medical Records or Hospital Management System. Sync appointment schedules, patient demographics, and contact preferences.",
      },
      {
        step: 2,
        title: "Automated Scheduling",
        description: "When appointment is booked (online/phone/in-person), AI automatically queues confirmation and reminder calls based on your protocols.",
      },
      {
        step: 3,
        title: "Multi-Channel Outreach",
        description: "AI reaches patients via their preferred channel—voice call, SMS, WhatsApp, or email—with appointment details and instructions.",
      },
      {
        step: 4,
        title: "Smart Responses",
        description: "AI handles patient responses (confirm, reschedule, cancel) and updates appointment system in real-time. Complex queries escalated to staff.",
      },
      {
        step: 5,
        title: "Check-in Assistance",
        description: "On appointment day, chatbot can help with pre-check-in, digital forms, insurance verification, and directions to department.",
      },
      {
        step: 6,
        title: "Post-Visit Care",
        description: "After visit, AI sends care instructions, medication reminders, and follow-up appointment suggestions based on diagnosis codes.",
      },
    ],
  },
  useCases: [
    {
      title: "Appointment No-Show Reduction",
      description: "250-bed hospital with 500 daily appointments. AI implements confirmation + reminder calling, reducing no-shows from 20% to 8%.",
      result: "50% reduction in no-shows, $500K annual revenue recovery",
    },
    {
      title: "Insurance Query Automation",
      description: "Chatbot handles 2000+ monthly insurance coverage queries. Provides instant answers about copays, coverage, and in-network status.",
      result: "60% reduction in front-desk insurance calls, 5-minute average resolution vs. 20 minutes",
    },
    {
      title: "Post-Surgery Follow-up",
      description: "100 surgery patients per month. AI calls each patient on days 1, 3, and 7 post-op to check recovery, remind about medications.",
      result: "4.8/5 patient satisfaction, early detection of 15 complications requiring intervention",
    },
  ],
  impact: {
    primary: { value: "50%", label: "Reduction in Missed Appointments" },
    secondary: [
      "60% decrease in front-desk call volume",
      "4.7/5 average patient satisfaction score",
      "70% faster response to routine queries",
      "24/7 patient access to appointment and billing info",
    ],
  },
  beforeAfter: {
    before: {
      title: "Before BizAI Hacks",
      points: [
        "Patients wait 10-15 minutes on hold for appointments",
        "20% no-show rate due to missed confirmations",
        "Insurance queries consume 40% of front-desk time",
        "After-hours calls go to voicemail, resolved next day",
        "No systematic post-discharge follow-up",
        "Frequent booking errors due to staff overwhelm",
      ],
    },
    after: {
      title: "After BizAI Hacks",
      points: [
        "Instant appointment booking via chatbot, zero wait",
        "8% no-show rate with automated confirmations and reminders",
        "90% insurance queries resolved by chatbot instantly",
        "24/7 self-service for booking and basic inquiries",
        "100% post-discharge follow-up calls for care continuity",
        "Near-zero booking errors with AI-assisted scheduling",
      ],
    },
  },
  implementationTimeline: [
    {
      phase: "EMR Integration & Data Setup",
      duration: "Week 1-2",
      description: "Integrate with EMR/HMS system. Import appointment templates, provider schedules, insurance plans, and patient contact preferences.",
    },
    {
      phase: "AI Training & Customization",
      duration: "Week 3",
      description: "Train AI on your appointment policies, insurance plans, and triage protocols. Set up calling scripts and chatbot flows for your specialty.",
    },
    {
      phase: "Staff Training & Pilot",
      duration: "Week 4",
      description: "Train front-desk and clinical staff on AI system. Run pilot with select departments and refine based on feedback.",
    },
    {
      phase: "Full Deployment",
      duration: "Week 5+",
      description: "Deploy across all departments. Monitor appointment adherence, patient satisfaction, and continuously optimize AI interactions.",
    },
  ],
  faqs: [
    {
      question: "Is the system HIPAA compliant?",
      answer: "Yes! We are fully HIPAA compliant with encrypted communications, secure data storage, Business Associate Agreement (BAA), and regular security audits.",
    },
    {
      question: "What if a patient has a medical emergency?",
      answer: "Our triage system is designed to detect emergency keywords and immediately advises calling 911 or going to ER. We never replace emergency medical judgment.",
    },
    {
      question: "Can it integrate with Epic, Cerner, or Athenahealth?",
      answer: "Yes! We have pre-built integrations with major EMR systems including Epic, Cerner, Athenahealth, and eClinicalWorks. Custom integrations are also available.",
    },
    {
      question: "How do you ensure patient data privacy?",
      answer: "All patient data is encrypted in transit and at rest. We use secure APIs, maintain strict access controls, and never store PHI longer than necessary.",
    },
    {
      question: "Can patients opt-out of automated communications?",
      answer: "Absolutely. Patients can opt-out at any time, and we honor their communication preferences (call, text, email, or manual contact only).",
    },
  ],
},

{
  slug: "logistics",
  industry: "Logistics",
  iconName: "Truck",
  color: "bg-[hsl(var(--primary))]",
  tagline: "Deliver real-time updates and reduce customer call volume.",
  heroStats: [
    { label: "Status Call Reduction", value: "60%" },
    { label: "Delivery Efficiency", value: "+25%" },
    { label: "Customer Satisfaction", value: "4.6/5" },
  ],
  challenges: [
    {
      title: "Constant 'Where is My Order?' Calls",
      description: "Customer service overwhelmed with shipment status inquiries, diverting resources from resolving actual issues.",
      impact: "50-60% of customer service calls are simple tracking queries",
    },
    {
      title: "High Cost of Manual Tracking",
      description: "Agents manually looking up tracking info, explaining delivery timelines, and sending updates consumes significant time and cost.",
      impact: "$15-20 per call cost for what should be automated self-service",
    },
    {
      title: "Irregular Driver Communication",
      description: "Difficulty coordinating with drivers for delivery confirmations, route changes, and pickup updates leads to delays and miscommunication.",
      impact: "25% delivery delays due to poor driver coordination",
    },
  ],
  approach: {
    consultation: "Study shipment tracking and customer communication flows from booking to delivery. Map pain points in dispatcher, driver, and customer touchpoints.",
    training: "Train dispatch teams for AI-assisted coordination. Enable customer service to focus on complex issues while AI handles routine tracking queries.",
  },
  solutions: {
    callingAgent: {
      title: "AI Logistics Communication Agent",
      description: "Proactive voice automation for delivery alerts, driver coordination, and exception handling with real-time shipment updates.",
      features: [
        {
          title: "Proactive Delivery Alerts",
          description: "AI calls customers when shipment is out for delivery with estimated time window. Confirms recipient availability and provides delivery instructions.",
        },
        {
          title: "Delay & Exception Notifications",
          description: "Automatic calls to customers when delays occur, explaining reason, new ETA, and options (reschedule, alternate address, hold at facility).",
        },
        {
          title: "Driver Coordination Calls",
          description: "AI calls drivers for pickup confirmations, delivery updates, and route optimization suggestions based on real-time traffic data.",
        },
        {
          title: "Proof of Delivery Collection",
          description: "After delivery, AI calls recipient for confirmation, collects feedback rating, and logs any delivery issues for resolution.",
        },
      ],
    },
    chatbot: {
      title: "AI Shipment Tracking Chatbot",
      description: "24/7 conversational assistant for real-time tracking, delivery scheduling, and shipment queries on website, WhatsApp, and customer portal.",
      features: [
        {
          title: "Live Shipment Tracking",
          description: "Customers enter tracking number or order ID to get real-time location, estimated delivery, and shipment history with last 10 scan updates.",
        },
        {
          title: "Delivery Scheduling & Rescheduling",
          description: "Customers can choose delivery date/time preferences, reschedule missed deliveries, or request hold at location—all via chat.",
        },
        {
          title: "Address Change & Corrections",
          description: "Before final mile dispatch, customers can update delivery address, add instructions, or change recipient details via chatbot.",
        },
        {
          title: "Claims & Issue Reporting",
          description: "Report damaged items, missing shipments, or delivery issues. AI creates claim ticket, assigns case number, and provides resolution timeline.",
        },
      ],
    },
  },
  workflow: {
    title: "How BizAI Hacks Works for Logistics",
    steps: [
      {
        step: 1,
        title: "TMS Integration",
        description: "Connect AI with your Transportation Management System. Sync shipment data, tracking events, driver info, and customer details.",
      },
      {
        step: 2,
        title: "Event-Based Triggers",
        description: "AI monitors shipment events (picked up, in transit, out for delivery, delivered, delayed) and triggers relevant customer or driver communications.",
      },
      {
        step: 3,
        title: "Smart Customer Outreach",
        description: "Based on shipment status and customer preferences, AI sends proactive updates via call, SMS, WhatsApp, or email.",
      },
      {
        step: 4,
        title: "Self-Service Portal",
        description: "Customers access chatbot for tracking, rescheduling, or issue reporting without calling customer service.",
      },
      {
        step: 5,
        title: "Driver Coordination",
        description: "AI coordinates with drivers for confirmations, route updates, and exception handling, reducing dispatcher workload.",
      },
      {
        step: 6,
        title: "Analytics & Optimization",
        description: "Track delivery performance, customer satisfaction, and communication effectiveness to optimize routes and service quality.",
      },
    ],
  },
  useCases: [
    {
      title: "Last-Mile Delivery Notifications",
      description: "E-commerce logistics handling 10,000 daily deliveries. AI sends out-for-delivery calls to all recipients with 2-hour time windows.",
      result: "60% reduction in 'where is my order' calls, 95% successful first-attempt deliveries",
    },
    {
      title: "Delay Management",
      description: "Weather causes 500 shipments to be delayed. AI proactively calls all affected customers with new ETAs and rescheduling options.",
      result: "85% customer satisfaction despite delays, minimal complaint escalations",
    },
    {
      title: "Pickup Coordination",
      description: "B2B logistics with 200 daily pickups. AI calls shippers 1 hour before pickup window to confirm readiness and shipment details.",
      result: "25% improvement in pickup efficiency, fewer failed pickup attempts",
    },
  ],
  impact: {
    primary: { value: "60%", label: "Reduction in Status Inquiry Calls" },
    secondary: [
      "25% improvement in delivery efficiency",
      "4.6/5 average customer satisfaction score",
      "30% reduction in failed delivery attempts",
      "Proactive communication reducing complaint volume by 40%",
    ],
  },
  beforeAfter: {
    before: {
      title: "Before BizAI Hacks",
      points: [
        "Customers call multiple times for tracking updates",
        "Customer service spends 60% time on tracking queries",
        "No proactive communication about delays or exceptions",
        "Manual driver coordination causing dispatch bottlenecks",
        "High failed delivery rate due to recipient unavailability",
        "Reactive problem-solving after customer complaints",
      ],
    },
    after: {
      title: "After BizAI Hacks",
      points: [
        "Customers get proactive updates at every shipment milestone",
        "Self-service chatbot handles 80% of tracking queries",
        "Automatic delay notifications with rescheduling options",
        "AI-driven driver coordination optimizing routes",
        "Pre-delivery calls ensuring recipient availability",
        "Proactive issue detection and resolution before complaints",
      ],
    },
  },
  implementationTimeline: [
    {
      phase: "TMS Integration & Data Mapping",
      duration: "Week 1-2",
      description: "Integrate with your TMS, carrier APIs, and GPS systems. Map shipment lifecycle events and communication triggers.",
    },
    {
      phase: "Communication Workflow Setup",
      duration: "Week 3",
      description: "Configure notification templates, calling scripts, and chatbot flows for different shipment types and customer segments.",
    },
    {
      phase: "Pilot with Select Routes",
      duration: "Week 4",
      description: "Test with specific delivery routes or customer segments. Monitor delivery success rates and gather feedback.",
    },
    {
      phase: "Full Network Rollout",
      duration: "Week 5+",
      description: "Deploy across entire logistics network. Optimize based on performance data and scale up communications.",
    },
  ],
  faqs: [
    {
      question: "Does it work with third-party carriers?",
      answer: "Yes! We integrate with FedEx, UPS, DHL, and regional carriers via their APIs. We can also work with your own fleet management system.",
    },
    {
      question: "What if customers don't answer AI calls?",
      answer: "We send follow-up SMS with the same information and tracking link. Customers can also access updates anytime via chatbot or customer portal.",
    },
    {
      question: "Can it handle international shipments?",
      answer: "Absolutely! We support multi-language communications and international tracking with customs status updates and delivery across borders.",
    },
    {
      question: "How does it reduce failed deliveries?",
      answer: "Proactive calls confirm recipient availability before final mile. Customers can reschedule, update address, or add delivery instructions in advance.",
    },
    {
      question: "Can we customize delivery time windows?",
      answer: "Yes! Time windows, communication frequency, and notification preferences are fully customizable based on your service levels and customer segments.",
    },
  ],
},

{
  slug: "banking",
  industry: "Banking & Financial Services",
  iconName: "Landmark",
  color: "bg-[hsl(var(--primary))]",
  tagline: "Automate customer queries, loan processing, and KYC reminders.",
  heroStats: [
    { label: "Support Cost Reduction", value: "45%" },
    { label: "Loan Processing Time", value: "50% Faster" },
    { label: "Customer Engagement", value: "+60%" },
  ],
  challenges: [
    {
      title: "Heavy Inbound Traffic for Loan & EMI Queries",
      description: "Customer service overwhelmed with repetitive questions about loan eligibility, EMI calculations, account balance, and payment status.",
      impact: "60-70% of calls are routine queries consuming agent time",
    },
    {
      title: "Manual Follow-ups for Payments and Renewals",
      description: "Credit card payments, loan EMIs, and policy renewals require manual reminder calls, leading to missed follow-ups and defaults.",
      impact: "15-20% payment delays due to missed reminders",
    },
    {
      title: "Complex KYC and Documentation Processes",
      description: "Manual KYC verification, document collection, and compliance checks create bottlenecks in customer onboarding and loan approvals.",
      impact: "7-10 day average loan approval time, poor customer experience",
    },
  ],
  approach: {
    consultation: "Analyze customer service touchpoints and loan workflows from application to disbursal. Identify automation opportunities in KYC, verification, and customer communication.",
    training: "Train support teams for secure AI-human handoffs. Enable relationship managers to focus on complex financial advisory while AI handles routine transactions.",
  },
  solutions: {
    callingAgent: {
      title: "AI Banking Communication Agent",
      description: "Secure voice automation for payment reminders, loan updates, KYC verification, and customer service callbacks with banking-grade security.",
      features: [
        {
          title: "EMI & Payment Reminders",
          description: "AI calls customers 7, 3, and 1 day before EMI due date. Provides payment options (net banking, UPI, auto-debit) and confirms receipt.",
        },
        {
          title: "Loan Status Updates",
          description: "Proactive calls to loan applicants with application status, pending documents, verification updates, and approval/disbursement notifications.",
        },
        {
          title: "KYC Update Reminders",
          description: "Automated calls for periodic KYC updates, Aadhaar re-verification, and document renewals with instructions and upload links.",
        },
        {
          title: "Credit Card Renewal & Upsell",
          description: "Calls to eligible customers for credit limit increase offers, premium card upgrades, and renewal reminders with instant approval for pre-qualified customers.",
        },
      ],
    },
    chatbot: {
      title: "AI Banking Virtual Assistant",
      description: "Secure 24/7 chatbot for account queries, loan applications, product information, and transaction support on banking app and WhatsApp.",
      features: [
        {
          title: "Secure Account Access",
          description: "After OTP authentication, customers can check balance, view mini-statement, download statements, and track recent transactions via chat.",
        },
        {
          title: "Instant Loan Eligibility Check",
          description: "Customers input basic details (income, employment, existing loans). AI provides instant pre-approval indication and loan amount eligibility.",
        },
        {
          title: "Product Comparison & Recommendations",
          description: "AI explains different loan products, credit cards, investment options, and recommends best fit based on customer profile and needs.",
        },
        {
          title: "Transaction Dispute & Support",
          description: "Report unauthorized transactions, failed payments, or card issues. AI creates ticket, blocks card if needed, and provides resolution timeline.",
        },
      ],
    },
  },
  workflow: {
    title: "How BizAI Hacks Works for Banking",
    steps: [
      {
        step: 1,
        title: "Core Banking Integration",
        description: "Securely connect AI with your core banking system, loan management platform, and CRM. Implement bank-grade encryption and access controls.",
      },
      {
        step: 2,
        title: "Customer Authentication",
        description: "AI uses multi-factor authentication (OTP, security questions, biometrics) before providing account information or processing requests.",
      },
      {
        step: 3,
        title: "Trigger-Based Outreach",
        description: "Based on events (EMI due, loan approval, KYC expiry, suspicious transaction), AI initiates relevant secure communication.",
      },
      {
        step: 4,
        title: "Secure Information Exchange",
        description: "All customer interactions are encrypted. Sensitive data (account numbers, balances) shared only after successful authentication.",
      },
      {
        step: 5,
        title: "Transaction Processing",
        description: "For payments, AI guides through secure payment gateway. For loan applications, collects required info and routes to underwriting.",
      },
      {
        step: 6,
        title: "Compliance & Audit Logs",
        description: "All AI interactions logged for regulatory compliance, audit trails, and dispute resolution with timestamped records.",
      },
    ],
  },
  useCases: [
    {
      title: "Personal Loan EMI Reminder Campaign",
      description: "50,000 active loan accounts. AI calls customers 3 days before due date, provides payment options, and confirms transactions.",
      result: "45% reduction in payment delays, 98% on-time EMI collection rate",
    },
    {
      title: "Credit Card Application Processing",
      description: "5,000 monthly applications. Chatbot pre-qualifies applicants, collects documents, and schedules verification calls for eligible candidates.",
      result: "50% faster processing, approval time reduced from 10 days to 5 days",
    },
    {
      title: "Home Loan KYC Updates",
      description: "20,000 customers due for annual KYC update. AI calls each customer, explains process, sends secure upload link, and tracks completion.",
      result: "90% compliance within deadline vs. 60% previously",
    },
  ],
  impact: {
    primary: { value: "45%", label: "Drop in Support Costs" },
    secondary: [
      "50% faster loan processing and approval",
      "98% on-time EMI collection rate",
      "60% increase in customer engagement",
      "90% routine queries resolved without human agents",
    ],
  },
  beforeAfter: {
    before: {
      title: "Before BizAI Hacks",
      points: [
        "Customers wait 15-20 minutes on hold for balance inquiry",
        "Manual EMI reminders via SMS, often ignored",
        "Loan applications take 10-15 days due to manual processing",
        "KYC updates require branch visits, poor compliance",
        "After-hours queries go unanswered until next business day",
        "High agent workload for repetitive queries",
      ],
    },
    after: {
      title: "After BizAI Hacks",
      points: [
        "Instant account info via chatbot with secure authentication",
        "Personalized voice calls for EMI reminders with payment links",
        "Loan processing time cut to 5 days with AI automation",
        "Digital KYC updates via AI-guided process, 90% compliance",
        "24/7 self-service for banking queries and transactions",
        "Agents focus on complex financial advisory and relationship building",
      ],
    },
  },
  implementationTimeline: [
    {
      phase: "Security & Compliance Setup",
      duration: "Week 1-2",
      description: "Establish secure API connections, implement encryption, set up authentication protocols, and ensure regulatory compliance (RBI, PCI-DSS).",
    },
    {
      phase: "Core Banking Integration",
      duration: "Week 3",
      description: "Integrate with core banking system, loan management platform, and payment gateways. Configure secure data exchange and transaction workflows.",
    },
    {
      phase: "Security Testing & Audit",
      duration: "Week 4",
      description: "Conduct penetration testing, security audits, and compliance verification. Test all authentication and authorization mechanisms.",
    },
    {
      phase: "Phased Rollout",
      duration: "Week 5+",
      description: "Start with non-transactional queries, then add payment reminders, then full loan processing. Monitor security and performance continuously.",
    },
  ],
  faqs: [
    {
      question: "Is customer financial data secure?",
      answer: "Absolutely! We use bank-grade encryption (AES-256), secure APIs, and comply with RBI guidelines, PCI-DSS, and data protection regulations. All data is stored in India.",
    },
    {
      question: "Can AI process actual transactions?",
      answer: "AI can guide customers through secure payment gateways and UPI links but doesn't store payment credentials. All transactions use bank's existing security infrastructure.",
    },
    {
      question: "What about fraud prevention?",
      answer: "AI has built-in fraud detection. Suspicious patterns trigger additional verification, alerts to fraud team, and can temporarily lock accounts pending manual review.",
    },
    {
      question: "How do you ensure regulatory compliance?",
      answer: "We maintain comprehensive audit logs, follow KYC/AML guidelines, provide consent management, and support regulatory reporting requirements.",
    },
    {
      question: "Can customers opt-out of AI interactions?",
      answer: "Yes. Customers can always choose to speak with human agents. We honor Do Not Disturb (DND) preferences and communication channel preferences.",
    },
  ],
},

{
  slug: "education",
  industry: "Education & EdTech",
  iconName: "GraduationCap",
  color: "bg-[hsl(var(--primary))]",
  tagline: "Enhance student experience and automate communication workflows.",
  heroStats: [
    { label: "Query Resolution", value: "70% Faster" },
    { label: "Admission Conversion", value: "+40%" },
    { label: "Student Satisfaction", value: "4.8/5" },
  ],
  challenges: [
    {
      title: "Missed Admission Leads Due to Delayed Follow-up",
      description: "Admission counselors struggle to follow up with thousands of inquiries during peak season, leading to lost enrollments.",
      impact: "40-50% of admission leads go cold without proper follow-up",
    },
    {
      title: "High Student Query Volume",
      description: "Students constantly call for results, exam schedules, course details, fee receipts, and library hours, overwhelming admin staff.",
      impact: "Admin staff spends 70% time answering repetitive questions",
    },
    {
      title: "Manual Attendance and Fee Reminders",
      description: "Manual calling for attendance issues and fee payments is time-consuming and often ineffective, leading to defaulters.",
      impact: "25% fee collection delays, poor attendance tracking",
    },
  ],
  approach: {
    consultation: "Map student lifecycle and communication touchpoints from inquiry to graduation. Identify automation opportunities in admissions, academics, and administration.",
    training: "Train counselors and admin staff for AI-assisted workflows. Enable them to focus on student counseling and complex cases while AI handles routine communications.",
  },
  solutions: {
    callingAgent: {
      title: "AI Student Communication Agent",
      description: "Automated voice system for admission follow-ups, fee reminders, attendance alerts, and event notifications with personalized student outreach.",
      features: [
        {
          title: "Admission Follow-up Calls",
          description: "AI calls prospective students within 24 hours of inquiry, provides course details, answers FAQs, and schedules counselor appointments for interested candidates.",
        },
        {
          title: "Fee Payment Reminders",
          description: "Automated calls to students/parents before fee deadlines with installment details, payment links, and options to request extension or financial aid.",
        },
        {
          title: "Attendance Alerts",
          description: "AI calls parents when student attendance drops below threshold. Provides attendance percentage, classes missed, and importance of regular attendance.",
        },
        {
          title: "Exam & Event Notifications",
          description: "Reminder calls for exam schedules, project submissions, campus events, and parent-teacher meetings with date, time, and preparation guidelines.",
        },
      ],
    },
    chatbot: {
      title: "AI Campus Assistant",
      description: "24/7 virtual assistant for course info, admission queries, academic support, and campus services on website, app, and WhatsApp.",
      features: [
        {
          title: "Course & Admission Information",
          description: "Students ask about courses, eligibility, syllabus, career prospects, and admission process. AI provides detailed info and application guidance.",
        },
        {
          title: "Academic Schedule & Results",
          description: "Access exam schedules, class timetables, result declarations, and academic calendar. Get notifications for schedule changes or result updates.",
        },
        {
          title: "Fee & Scholarship Queries",
          description: "Check fee structure, payment status, receipt download, and scholarship eligibility. Apply for scholarships or installment plans via chatbot.",
        },
        {
          title: "Campus Services Support",
          description: "Information about library hours, hostel facilities, transport schedules, cafeteria menu, and sports facilities. Book resources or report issues.",
        },
      ],
    },
  },
  workflow: {
    title: "How BizAI Hacks Works for Education",
    steps: [
      {
        step: 1,
        title: "Student Information System Integration",
        description: "Connect AI with your Student Information System (SIS), Learning Management System (LMS), and admission portal. Sync student data and academic records.",
      },
      {
        step: 2,
        title: "Lead Capture & Distribution",
        description: "When student inquiry comes in (website form, call, walk-in), AI captures details, qualifies interest level, and assigns to appropriate counselor.",
      },
      {
        step: 3,
        title: "Automated Student Outreach",
        description: "Based on triggers (inquiry, fee due, low attendance, exam approaching), AI initiates relevant communication via preferred channel.",
      },
      {
        step: 4,
        title: "Self-Service Portal",
        description: "Students access chatbot for instant answers to academic, administrative, and campus queries without waiting for office hours.",
      },
      {
        step: 5,
        title: "Counselor Handoff",
        description: "For complex queries or high-intent admission leads, AI schedules appointments with counselors/faculty with complete context.",
      },
      {
        step: 6,
        title: "Analytics & Insights",
        description: "Track admission funnel, student engagement, attendance trends, and fee collection to improve institutional performance.",
      },
    ],
  },
  useCases: [
    {
      title: "Admission Season Lead Management",
      description: "10,000 admission inquiries in 2 months. AI follows up with each lead, qualifies 3,000 serious candidates, and books 1,500 counselor appointments.",
      result: "40% increase in admission conversion, zero missed follow-ups",
    },
    {
      title: "Fee Collection Automation",
      description: "5,000 students with quarterly fee payment. AI sends reminders 15, 7, and 3 days before deadline. Calls defaulters with payment options.",
      result: "95% on-time fee collection vs. 70% previously, ₹2 crore faster revenue realization",
    },
    {
      title: "Student Support Chatbot",
      description: "15,000 students access chatbot for exam schedules, result queries, fee receipts, and campus info. 10,000 monthly interactions.",
      result: "70% faster query resolution, 60% reduction in admin staff workload",
    },
  ],
  impact: {
    primary: { value: "70%", label: "Faster Query Resolution" },
    secondary: [
      "40% increase in admission conversion rate",
      "95% on-time fee collection with automated reminders",
      "4.8/5 student satisfaction score",
      "24/7 student support without additional staff",
    ],
  },
  beforeAfter: {
    before: {
      title: "Before BizAI Hacks",
      points: [
        "Admission leads wait 2-3 days for counselor callback",
        "50% of inquiries never contacted during peak season",
        "Students call admin office repeatedly for basic info",
        "Manual fee reminders via email/SMS, often ignored",
        "No systematic parent communication for attendance issues",
        "Limited support outside office hours (9 AM - 5 PM)",
      ],
    },
    after: {
      title: "After BizAI Hacks",
      points: [
        "Every inquiry receives AI follow-up within 24 hours",
        "100% lead coverage with intelligent prioritization",
        "24/7 self-service chatbot for academic and admin queries",
        "Personalized voice calls for fee reminders with payment links",
        "Automated parent alerts for attendance and academic concerns",
        "Round-the-clock student support for better experience",
      ],
    },
  },
  implementationTimeline: [
    {
      phase: "SIS/LMS Integration",
      duration: "Week 1-2",
      description: "Integrate with Student Information System, admission portal, and learning management platform. Import student data and academic calendars.",
    },
    {
      phase: "Knowledge Base Setup",
      duration: "Week 3",
      description: "Configure chatbot with course catalog, admission FAQs, fee structure, academic policies, and campus information. Set up calling scripts.",
    },
    {
      phase: "Staff Training & Pilot",
      duration: "Week 4",
      description: "Train admission counselors and admin staff on AI system. Run pilot with select programs or student batches.",
    },
    {
      phase: "Campus-Wide Rollout",
      duration: "Week 5+",
      description: "Deploy across all departments and programs. Promote chatbot to students via app, website, and orientation sessions.",
    },
  ],
  faqs: [
    {
      question: "Can AI provide accurate academic information?",
      answer: "Yes! AI is trained on your official course catalog, academic regulations, and policies. It's updated regularly and provides consistent, accurate information.",
    },
    {
      question: "What about sensitive student data?",
      answer: "We follow strict data privacy standards. Student records are protected with role-based access, and we never share data with third parties.",
    },
    {
      question: "Can parents access student information?",
      answer: "With proper authentication (parent ID, student roll number, OTP), parents can access attendance, fee status, and academic performance via chatbot.",
    },
    {
      question: "How do you handle admission counseling?",
      answer: "AI handles initial qualification and FAQs. High-intent candidates are scheduled with human counselors who receive complete conversation context for personalized guidance.",
    },
    {
      question: "Can it support multiple languages?",
      answer: "Yes! We support regional languages for vernacular medium institutions and can switch languages based on student preference.",
    },
  ],
},

{
  slug: "ecommerce",
  industry: "E-Commerce & Retail",
  iconName: "ShoppingCart",
  color: "bg-[hsl(var(--primary))]",
  tagline: "Enhance customer experience and increase conversions using AI automation.",
  heroStats: [
    { label: "Cart Recovery", value: "+35%" },
    { label: "Repeat Purchases", value: "+45%" },
    { label: "Support Cost", value: "-50%" },
  ],
  challenges: [
    {
      title: "High Cart Abandonment & Poor Post-Purchase Engagement",
      description: "70% of shopping carts are abandoned, and post-purchase communication is limited to generic order confirmations, missing retention opportunities.",
      impact: "Billions in lost revenue from abandoned carts annually",
    },
    {
      title: "Delayed Responses to Order, Refund, and Delivery Queries",
      description: "Customer service overwhelmed with repetitive queries about order status, delivery tracking, return policies, and refund status.",
      impact: "50-60% of support tickets are simple tracking queries",
    },
    {
      title: "Manual Customer Support for Returns and Exchanges",
      description: "Returns, exchanges, and refunds require manual intervention, creating delays and poor customer experience during critical moments.",
      impact: "5-7 day average resolution time for return requests",
    },
  ],
  approach: {
    consultation: "Analyze customer journey and support workflows from product discovery to post-purchase. Identify automation opportunities in cart recovery, order support, and retention.",
    training: "Train support teams for AI-assisted customer service. Enable them to focus on complex issues and relationship building while AI handles routine queries.",
  },
  solutions: {
    callingAgent: {
      title: "AI E-Commerce Engagement Agent",
      description: "Intelligent voice automation for cart recovery, order confirmations, delivery updates, and personalized offers to boost conversions and retention.",
      features: [
        {
          title: "Abandoned Cart Recovery Calls",
          description: "AI calls customers 2 hours after cart abandonment. Reminds about items, offers limited-time discount codes, and provides one-click checkout links via SMS.",
        },
        {
          title: "Order Confirmation & Tracking Updates",
          description: "Confirmation calls after high-value orders, dispatch notifications, and delivery day reminders with tracking links and delivery time windows.",
        },
        {
          title: "Post-Purchase Feedback Collection",
          description: "AI calls customers 3 days after delivery to collect product ratings, identify issues, and offer support if dissatisfied.",
        },
        {
          title: "Personalized Offer Campaigns",
          description: "Calls to high-value customers with exclusive offers, early access to sales, and personalized product recommendations based on purchase history.",
        },
      ],
    },
    chatbot: {
      title: "AI Shopping Assistant",
      description: "24/7 conversational commerce assistant for product discovery, order support, returns, and personalized recommendations on website and WhatsApp.",
      features: [
        {
          title: "Product Discovery & Recommendations",
          description: "Customers describe what they're looking for. AI suggests relevant products, compares options, and provides styling/usage tips based on preferences.",
        },
        {
          title: "Live Order Tracking & Updates",
          description: "Check order status, track shipments in real-time, get delivery estimates, and receive proactive updates for delays or exceptions.",
        },
        {
          title: "Easy Returns & Exchanges",
          description: "Initiate return requests via chat. AI checks eligibility, generates return label, schedules pickup, and provides refund timeline or exchange options.",
        },
        {
          title: "Size & Fit Assistance",
          description: "AI provides size recommendations based on customer measurements, product dimensions, and reviews. Reduces return rates due to sizing issues.",
        },
      ],
    },
  },
  workflow: {
    title: "How BizAI Hacks Works for E-Commerce",
    steps: [
      {
        step: 1,
        title: "E-Commerce Platform Integration",
        description: "Connect AI with Shopify, WooCommerce, Magento, or custom platform. Sync product catalog, orders, customer data, and inventory in real-time.",
      },
      {
        step: 2,
        title: "Customer Behavior Tracking",
        description: "AI monitors customer actions—cart additions, abandonments, purchases, returns—to trigger relevant automated communications.",
      },
      {
        step: 3,
        title: "Personalized Outreach",
        description: "Based on customer segment (new, returning, VIP) and behavior, AI sends personalized product recommendations, offers, and support.",
      },
      {
        step: 4,
        title: "Conversational Shopping",
        description: "Customers interact with chatbot for product search, comparisons, and purchases. AI guides through entire shopping journey.",
      },
      {
        step: 5,
        title: "Post-Purchase Support",
        description: "AI handles order tracking, delivery updates, return requests, and issue resolution, escalating complex cases to human agents.",
      },
      {
        step: 6,
        title: "Retention & Loyalty",
        description: "AI identifies repeat purchase opportunities, sends personalized offers, and engages customers to build long-term loyalty.",
      },
    ],
  },
  useCases: [
    {
      title: "Abandoned Cart Recovery Campaign",
      description: "Fashion e-commerce with 5,000 daily cart abandonments. AI calls 70% of them within 2 hours with personalized discount codes.",
      result: "35% cart recovery rate, ₹2 crore monthly revenue from recovered carts",
    },
    {
      title: "Order Support Automation",
      description: "Electronics retailer handling 10,000 monthly orders. Chatbot provides instant tracking, return processing, and issue resolution.",
      result: "50% reduction in support costs, 4.6/5 customer satisfaction score",
    },
    {
      title: "Repeat Purchase Campaign",
      description: "Beauty brand calls 1,000 customers who bought skincare 60 days ago with replenishment reminders and loyalty discounts.",
      result: "45% repeat purchase rate, 30% increase in customer lifetime value",
    },
  ],
  impact: {
    primary: { value: "35%", label: "Boost in Repeat Purchases" },
    secondary: [
      "35% cart abandonment recovery rate",
      "50% reduction in customer support costs",
      "45% increase in repeat purchase rate",
      "4.6/5 average customer satisfaction score",
    ],
  },
  beforeAfter: {
    before: {
      title: "Before BizAI Hacks",
      points: [
        "70% cart abandonment with no recovery attempts",
        "Generic order confirmation emails, no personalization",
        "Customers call/email for tracking updates, long wait times",
        "Manual return requests taking 5-7 days to process",
        "No systematic post-purchase engagement",
        "Limited product discovery support on website",
      ],
    },
    after: {
      title: "After BizAI Hacks",
      points: [
        "Proactive cart recovery calls within 2 hours, 35% recovery",
        "Personalized order confirmations and delivery updates via call/SMS",
        "Instant self-service tracking via chatbot, zero wait time",
        "Automated return processing with 24-hour pickup scheduling",
        "AI-driven repeat purchase campaigns and loyalty programs",
        "Conversational shopping assistant guiding product discovery",
      ],
    },
  },
  implementationTimeline: [
    {
      phase: "Platform Integration & Setup",
      duration: "Week 1-2",
      description: "Integrate with e-commerce platform, payment gateway, and shipping partners. Sync product catalog, customer data, and order information.",
    },
    {
      phase: "AI Training & Personalization",
      duration: "Week 3",
      description: "Train AI on product catalog, return policies, and customer service protocols. Set up personalization engine based on customer segments.",
    },
    {
      phase: "Pilot with Select Products",
      duration: "Week 4",
      description: "Test cart recovery, order support, and chatbot with specific product categories. Optimize based on conversion and satisfaction data.",
    },
    {
      phase: "Full Store Rollout",
      duration: "Week 5+",
      description: "Deploy across entire product catalog and customer base. Continuously optimize campaigns based on purchase patterns and feedback.",
    },
  ],
  faqs: [
    {
      question: "Can AI handle complex product queries?",
      answer: "AI is trained on your complete product catalog including specifications, reviews, and comparisons. For highly specific queries, it seamlessly transfers to product specialists.",
    },
    {
      question: "How does cart recovery work without being intrusive?",
      answer: "We use intelligent timing (not immediate), personalized messaging, and respect DND preferences. Customers can opt-out anytime.",
    },
    {
      question: "Can it integrate with our existing e-commerce platform?",
      answer: "Yes! We have integrations with Shopify, WooCommerce, Magento, BigCommerce, and custom platforms via APIs.",
    },
    {
      question: "What about payment security?",
      answer: "We never handle payment credentials. AI provides secure checkout links to your existing payment gateway. All transactions use your current security infrastructure.",
    },
    {
      question: "How do you measure ROI for cart recovery?",
      answer: "We track recovered cart value, conversion rate, and attribute revenue directly to AI interventions. Most clients see 10-15x ROI within first quarter.",
    },
  ],
},

];

export const getIndustryBySlug = (slug: string): IndustrySolution | undefined => {
  return industrySolutionsData.find((industry) => industry.slug === slug);
};