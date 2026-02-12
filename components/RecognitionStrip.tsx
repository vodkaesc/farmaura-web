import React from 'react';
import { Building2, GraduationCap, Award, ShieldCheck } from 'lucide-react';
import sihLogo from '../images/SIH_LOGO.png';

const trustBadges = [
  {
    icon: Award,
    label: 'SIH Grand Finalist',
    sublabel: 'Ministry of Education',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Building2,
    label: 'MSME Registered',
    sublabel: 'Udyam Certificate',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: GraduationCap,
    label: 'ICAR-SHITIJ 2026',
    sublabel: 'Incubation Selectee',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
];

const RecognitionStrip: React.FC = () => {
  return (
    <div className="w-full bg-white border-b border-slate-200/60 py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Desktop layout */}
        <div className="hidden sm:flex items-center justify-center gap-6 md:gap-10">
          {/* SIH Logo */}
          <div className="h-8 md:h-10 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500 flex-shrink-0">
            <img
              src={sihLogo}
              alt="Smart India Hackathon Logo"
              className="h-full w-auto object-contain mix-blend-multiply"
            />
          </div>

          <div className="w-px h-8 bg-slate-200 flex-shrink-0" />

          {/* Trust badges */}
          {trustBadges.map((badge, idx) => (
            <React.Fragment key={badge.label}>
              <div className="flex items-center gap-2.5 group cursor-default">
                <div className={`w-8 h-8 rounded-lg ${badge.bg} ${badge.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <badge.icon size={16} strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-700 leading-tight whitespace-nowrap">
                    {badge.label}
                  </span>
                  <span className="text-[10px] text-slate-400 leading-tight whitespace-nowrap">
                    {badge.sublabel}
                  </span>
                </div>
              </div>
              {idx < trustBadges.length - 1 && (
                <div className="w-px h-8 bg-slate-200 flex-shrink-0 hidden lg:block" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile layout - horizontal scroll */}
        <div className="sm:hidden flex items-center justify-start gap-5 overflow-x-auto pb-1 scrollbar-hide">
          <div className="h-7 grayscale opacity-70 flex-shrink-0">
            <img
              src={sihLogo}
              alt="Smart India Hackathon Logo"
              className="h-full w-auto object-contain mix-blend-multiply"
            />
          </div>

          <div className="w-px h-6 bg-slate-200 flex-shrink-0" />

          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 flex-shrink-0">
              <div className={`w-7 h-7 rounded-md ${badge.bg} ${badge.color} flex items-center justify-center flex-shrink-0`}>
                <badge.icon size={14} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-slate-700 leading-tight whitespace-nowrap">
                  {badge.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecognitionStrip;