import React from 'react';
import Section from './ui/Section';
import { Sprout, Scan, Database, LineChart, LayoutDashboard } from 'lucide-react';

const solutions = [
  {
    icon: Sprout,
    title: "Assisted Crop Advisory",
    description: "Data-backed insights for sowing windows and crop selection based on seasonal climate trends and localized soil profiles."
  },
  {
    icon: Scan,
    title: "Detection Support",
    description: "Computer vision tools designed to assist in early-stage pest and disease identification through user-submitted imagery."
  },
  {
    icon: Database,
    title: "Nutrient Intelligence",
    description: "Frameworks for integrating Soil Health Cards with precise fertilizer dosage suggestions to reduce input overhead."
  },
  {
    icon: LineChart,
    title: "Vigor Monitoring",
    description: "Satellite-derived vegetation indices (NDVI) to help stakeholders observe crop vigor and moisture stress across clusters."
  },
  {
    icon: LayoutDashboard,
    title: "Institutional Views",
    description: "Unified monitoring interfaces for FPOs and District Departments to track health indicators and pilot performance."
  }
];

const Services: React.FC = () => {
  return (
    <Section id="solutions" title="Functional Scope" subtitle="A modular decision-support suite designed for institutional integration." className="bg-slate-50">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group"
          >
            <div className="w-14 h-14 rounded-lg bg-secondary/30 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <item.icon size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {item.description}
            </p>
          </div>
        ))}
        
        {/* Call to Action Card */}
        <div className="bg-primary p-8 rounded-xl shadow-md flex flex-col justify-center items-center text-center text-white">
          <h3 className="text-xl font-bold mb-3">Institutional Pilots</h3>
          <p className="text-white/80 text-sm mb-6">
            Seeking to integrate precision intelligence into your district framework?
          </p>
          <a href="#contact" className="px-6 py-2 bg-white text-primary font-semibold rounded-md hover:bg-secondary transition-colors">
            Inquire for Pilot
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Services;