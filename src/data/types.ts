// src/data/types.ts
import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  painPoints: string[];
  solutions: string[];
}

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}