import React, { useState, useEffect } from 'react';
import Section from './ui/Section';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    quote: "The approach to predictive pest modeling shows significant potential for early-warning systems. We are interested in how this integrates with existing district data flows.",
    author: "Consulting Scientist",
    role: "Agricultural Research Advisor",
    org: "Regional Research Institute"
  },
  {
    quote: "FarmAura's design allows for a unified view of district-wide crop health. This level of visibility is exactly what's needed for better resource planning.",
    author: "Strategy Lead",
    role: "Ex-Agricultural Officer",
    org: "Policy Advisory Group"
  },
  {
    quote: "Focusing on fertilizer cost reduction through Soil Health Card integration is a critical need. The platform's methodology is well-aligned with our FPO objectives.",
    author: "FPO Advisor",
    role: "Development Lead",
    org: "Farmers Collective Initiative"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((idx) => (idx + 1) % reviews.length);
          return 0;
        }
        return prev + 1;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((idx) => (idx - 1 + reviews.length) % reviews.length);
    setProgress(0);
  };

  const handleNext = () => {
    setActiveIndex((idx) => (idx + 1) % reviews.length);
    setProgress(0);
  };

  return (
    <Section id="testimonials" className="bg-primary text-white overflow-hidden" dark>
      <div className="grid lg:grid-cols-5 gap-16 items-center">
        <div className="lg:col-span-2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">Advisor Perspectives</h2>
          <p className="text-lg text-secondary/80 mb-8">
            The FarmAura platform is being refined in collaboration with sector experts to ensure institutional alignment.
          </p>
          <div className="flex gap-4">
             <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all"><ChevronLeft /></button>
             <button onClick={handleNext} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all"><ChevronRight /></button>
          </div>
        </div>
        <div className="lg:col-span-3 relative">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-16 rounded-[2rem] relative min-h-[380px] flex flex-col justify-center">
            <Quote className="text-secondary/5 absolute top-10 left-10" size={100} />
            <div key={activeIndex} className="relative z-10">
              <p className="text-xl md:text-2xl text-slate-100 italic mb-10 leading-relaxed font-light">
                "{reviews[activeIndex].quote}"
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/10 text-white font-bold flex items-center justify-center text-2xl">
                  {reviews[activeIndex].author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{reviews[activeIndex].author}</h4>
                  <p className="text-sm text-secondary font-medium">{reviews[activeIndex].role}</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">{reviews[activeIndex].org}</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 overflow-hidden rounded-b-[2rem]">
               <div className="h-full bg-secondary transition-all duration-100 linear" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;