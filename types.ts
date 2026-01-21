import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  items: string[];
}
