// src/data/data.ts

import { FaServicestack } from 'react-icons/fa';
import { Service } from './types';
import { Lightbulb, GraduationCap, Rocket, BarChart3, Clock, Languages, GitBranch, Home, Car, LightbulbIcon, Building, Leaf, FlaskConical } from "lucide-react";

export const services: Service[] = [
  {
   id: "consultation",
    title: "AI Consultation & Strategy",
    description: "We help you identify high-impact AI opportunities and create a clear roadmap for successful implementation.",
    icon: Lightbulb,
    painPoints: [
      "Unsure where to start with AI.",
      "Difficulty in identifying ROI-driven use cases.",
      "Lack of a clear AI strategy and roadmap.",
      "Concerns about data readiness and privacy."
    ],
    solutions: [
      "AI Readiness Assessment to gauge your current capabilities.",
      "Use-Case Discovery workshops to prioritize opportunities.",
      "Proof of Concept (PoC) planning to validate ideas quickly.",
      "Data governance and integration strategy development."
    ],
  },
  {
    id: "implementation",
    title: "Implementation & Support",
    description: "Our experts build, deploy, and scale enterprise-grade AI solutions with ongoing support and optimization.",
    icon: Rocket,
    painPoints: [
      "Lack of in-house expertise to build AI solutions.",
      "Integration challenges with existing systems (ERP, CRM).",
      "Concerns about scalability and maintenance.",
      "Need for reliable, 24/7 technical support."
    ],
    solutions: [
      "End-to-end development of chatbots and voice agents.",
      "Seamless integration with Salesforce, Zendesk, ERPNext, etc.",
      "Continuous monitoring, maintenance, and performance tuning.",
      "SLA-based managed services for peace of mind."
    ],
  },
  {
    id: "training",
    title: "AI Training & Enablement",
    description: "Empower your teams with hands-on training for executives, developers, and end-users to drive AI adoption.",
    icon: GraduationCap,
    painPoints: [
      "Skill gap in the workforce for AI technologies.",
      "Low adoption rate of new AI tools by employees.",
      "Executives need to understand AI's strategic impact.",
      "Developers require practical skills on new platforms."
    ],
    solutions: [
      "Executive workshops on AI strategy and risk management.",
      "Bootcamps on prompt engineering for practitioners.",
      "Developer training on Watsonx, APIs, and voice integration.",
      "Change management and end-user adoption programs."
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Turn your raw data into actionable insights with our business intelligence and predictive analytics services.",
    icon: BarChart3,
    painPoints: [
      "Data is spread across multiple, siloed systems.",
      "Inability to get real-time insights for decision-making.",
      "Struggling to predict future trends and customer behavior.",
      "Lack of a clear view of key performance indicators (KPIs)."
    ],
    solutions: [
      "Automated data pipelines (ETL/ELT) to create a single source of truth.",
      "Interactive BI dashboards using Power BI and Tableau.",
      "Predictive analytics models for forecasting and segmentation.",
      "Custom KPI tracking and performance reporting."
    ],
  },
];



export const crossIndustryBenefits = [
    { title: "24/7 Availability", description: "Always-on support across voice and chat channels.", icon: Clock },
    { title: "Multilingual Support", description: "Engage customers in their native language with realistic AI voices.", icon: Languages },
    { title: "Seamless Integration", description: "Connects with your existing ERP, CRM, and custom systems.", icon: GitBranch },
    { title: "Data-Driven Insights", description: "Get actionable analytics from every interaction to improve processes.", icon: BarChart3 }
];