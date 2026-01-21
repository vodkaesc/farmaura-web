import React from 'react';
import Section from './ui/Section';
import { Target, TrendingUp, Shield, BarChart3, CheckCircle2 } from 'lucide-react';

const operationalFocus = [
  {
    title: "Cluster-Level Insight",
    description: "FarmAura focuses on delivering high-resolution insights (30m x 30m) designed to account for localized micro-climates.",
    icon: Target,
    items: ["Cluster-level granularity", "Micro-climate logic", "Crop-specific modeling"]
  },
  {
    title: "Institutional Readiness",
    description: "Built to support existing public infrastructure. Our interfaces aim to provide aggregate visibility for better resource planning.",
    icon: BarChart3,
    items: ["Unified district visibility", "Pattern identification", "Resource optimization support"]
  },
  {
    title: "Climate Sensitivity",
    description: "Models are designed to suggest adjustments for sowing windows based on monsoon trends and localized weather shifts.",
    icon: Shield,
    items: ["Adaptive crop calendars", "Weather stress indicators", "Early-warning frameworks"]
  },
  {
    title: "Data Stewardship",
    description: "A framework committed to data sovereignty. All insights are managed on secure servers with protocols aligned with local standards.",
    icon: TrendingUp, 
    items: ["Secure architecture", "Role-based access", "Sovereign-aligned storage"]
  }
];

const Benefits: React.FC = () => {
  return (
    <Section id="benefits" title="Operational Focus Areas" subtitle="How our framework aligns with the priorities of agricultural stakeholders." className="bg-secondary-beige/30">
      <div className="grid md:grid-cols-2 gap-8">
        {operationalFocus.map((adv, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                    <adv.icon size={32} strokeWidth={1.5} />
                </div>
            </div>
            <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{adv.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                    {adv.description}
                </p>
                <ul className="space-y-2">
                    {adv.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                            <CheckCircle2 size={16} className="text-secondary-light text-green-600" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Benefits;