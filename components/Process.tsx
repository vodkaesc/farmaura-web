import React from 'react';
import Section from './ui/Section';
import { Satellite, Cpu, Radio, RotateCw, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Satellite,
    title: "1. Data Aggregation",
    description: "We ingest hyper-local weather data, satellite imagery (Sentinel/Landsat), and ground-truth soil sensor data.",
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    icon: Cpu,
    title: "2. AI Synthesis",
    description: "Our proprietary ML models analyze vegetative indices (NDVI), pest patterns, and nutrient gaps in real-time.",
    color: "text-purple-500",
    bg: "bg-purple-50"
  },
  {
    icon: Radio,
    title: "3. Actionable Advisory",
    description: "Precise recommendations are dispatched to farmers and district officials via SMS, App, and Dashboards.",
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    icon: RotateCw,
    title: "4. Feedback Loop",
    description: "Post-harvest data is fed back into the system, continuously refining accuracy for the next crop cycle.",
    color: "text-orange-500",
    bg: "bg-orange-50"
  }
];

const Process: React.FC = () => {
  return (
    <Section id="process" title="How It Works" subtitle="From Satellite to Soil: A seamless flow of intelligence." className="bg-white">
      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className={`w-24 h-24 mx-auto ${step.bg} rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg z-10 relative border-4 border-white`}>
                <step.icon size={32} className={step.color} strokeWidth={1.5} />
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 text-slate-300">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
              
              <div className="text-center px-2">
                <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <div className="inline-block bg-secondary/30 rounded-lg px-6 py-3 border border-secondary text-primary-dark font-medium text-sm">
                ⚙️  Compatible with existing State Agriculture Portals
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Process;