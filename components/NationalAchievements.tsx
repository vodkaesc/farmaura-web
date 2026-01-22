import React, { useState } from 'react';
import Section from './ui/Section';
import { Award, ShieldCheck, Landmark, Maximize2, X, FileText, Camera, ExternalLink } from 'lucide-react';

// Import achievement images
import certificationImg from '../images/certifaction.jpg';
import sihImg from '../images/sih.jpg';
import reviewImg from '../images/review.jpg';
import exhibitionImg from '../images/exibitiopn.jpg';
import sihPdf from '../Smart India Hackathon-SIH-25030.pdf';

const NationalAchievements: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const achievements = [
    {
      icon: Award,
      title: "SIH 2025 Grand Finalists",
      subtitle: "Organized by Ministry of Education & AICTE",
      description: "Ranked as champions in the National Grand Finale, receiving recognition  for technical excellence and impact.",
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      icon: Landmark,
      title: "Government-Issued Challenge",
      subtitle: "Ministry of Agriculture & Farmers Welfare",
      description: "Solution specifically engineered for the official GoI problem statement: 'Real-time tracking of machines for Crop Residue Management (CRM)'.",
      color: "text-primary",
      bg: "bg-primary/5"
    },
    {
      icon: ShieldCheck,
      title: "National Level Validation",
      subtitle: "Evaluated by Domain Experts",
      description: " शॉर्टलिस्टेड (Shortlisted) and vetted by national experts for technical feasibility, cost-efficiency, and scalability across 42,000+ CHCs.",
      color: "text-accent",
      bg: "bg-accent/5"
    }
  ];

  const galleryImages = [
    { url: certificationImg, caption: "Team receiving the Recognition Certificate at SIH Grand Finale" },
    { url: sihImg, caption: "National Merit Certificate - Smart India Hackathon" },
    { url: reviewImg, caption: "Technical presentation to the Ministry of Agriculture evaluators" },
    { url: exhibitionImg, caption: "MVP demonstration during the national exhibition" }
  ];

  return (
    <Section id="achievements" title="National Recognition & Validation" subtitle="Shortlisted, evaluated, and recognized at the highest levels of Indian innovation." className="bg-white">
      {/* Credibility Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {achievements.map((item, idx) => (
          <div key={idx} className="group p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 relative overflow-hidden">
            <div className={`w-14 h-14 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
              <item.icon size={30} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-1">{item.title}</h3>
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">{item.subtitle}</p>
            <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>

            {/* Subtle background decoration */}
            <div className="absolute -bottom-4 -right-4 opacity-[0.03] text-slate-900 group-hover:opacity-[0.07] transition-opacity">
              <item.icon size={120} />
            </div>
          </div>
        ))}
      </div>

      {/* Gallery & Documentation */}
      <div className="grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-4">
            <Camera size={14} />
            <span>Field & Event Documentation</span>
          </div>
          <h3 className="text-2xl font-bold text-primary mb-6">Credential Showcase</h3>
          <p className="text-slate-600 leading-relaxed mb-8">
            Our journey from the prototype phase to being recognized on the national stage. These visuals document the rigorous evaluation process conducted by the Ministry of Education's Innovation Cell and domain experts.
          </p>

          <div className="space-y-4">
            <div
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 cursor-pointer hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 group"
              onClick={() => window.open(sihPdf, '_blank')}
            >
              <FileText size={20} className="text-primary" />
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">Problem ID: SIH-25030</p>
                <p className="text-xs text-slate-500">Ministry of Agriculture & Farmers Welfare</p>
              </div>
              <ExternalLink size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 grid grid-cols-2 gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-zoom-in group shadow-md"
              onClick={() => setSelectedImage(img.url)}
            >
              <img src={img.url} alt={img.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-white" size={24} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-[10px] text-white font-medium truncate">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-10 right-10 text-white hover:text-secondary transition-colors">
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Achievement Preview"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain animate-in fade-in zoom-in duration-300"
          />
        </div>
      )}
    </Section>
  );
};

export default NationalAchievements;