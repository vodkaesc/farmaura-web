import React from 'react';
import Section from './ui/Section';
import { ShieldCheck, CloudRain, AlertTriangle, Trees, Users, BookOpen, Scaling, Award } from 'lucide-react';
import certificateImg from '../images/certificate.png';

const About: React.FC = () => {
  return (
    <Section id="about" title="Philosophy & Institutional Alignment" subtitle="Addressing the implementation gap between high-level data and field-ready action.">
      <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
        {/* Left: The Challenge & Scalability Gap */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <AlertTriangle className="text-orange-500" size={24} />
              The Advisory Challenge
            </h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              Agricultural stakeholders face a dual crisis: <strong>fragmented advisory</strong> and <strong>climate uncertainty</strong>. While data availability has increased, the ability to act on it is often stalled by a lack of hyper-local relevance.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500">
                  <Scaling size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">The Scalability Barrier</h4>
                  <p className="text-sm text-slate-600">Generic, top-down systems fail to scale because they ignore the unique micro-climatic and soil variability of individual clusters. True scale requires hyper-local precision.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500">
                  <CloudRain size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Climate Volatility</h4>
                  <p className="text-sm text-slate-600">Traditional farming wisdom is increasingly challenged by shifting monsoons. Institutional systems need data-backed resilience to support farmer decision-making.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Heritage & Philosophy */}
        <div className="bg-primary/5 p-8 md:p-12 rounded-[2.5rem] border border-primary/10 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <Trees className="text-primary-light" size={24} />
              Rooted in the Field
            </h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              FarmAura is born from a legacy of Indian farming. Our founders come from an agricultural family background, where we witnessed firsthand the gap between "official data" and the reality on the ground.
            </p>
            <p className="text-slate-700 mb-8 leading-relaxed">
              We believe in a <strong>pilot-first, government-aligned philosophy</strong>. FarmAura is building an AI-assisted advisory platform designed specifically for institutional deployment, ensuring that every insight is human-validated and policy-sensitive.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-primary/10">
                <span className="block text-xs font-bold text-primary-light uppercase tracking-widest mb-1">Philosophy</span>
                <span className="text-sm font-semibold text-slate-800">Institutional Pilot-Ready</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-primary/10">
                <span className="block text-xs font-bold text-primary-light uppercase tracking-widest mb-1">Approach</span>
                <span className="text-sm font-semibold text-slate-800">Decision-Support System</span>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-primary/10">
              <p className="text-slate-600 italic text-sm">
                "Our mission is to support public extension services with a layer of intelligent decision support that respects the sovereign and diverse nature of Indian agriculture."
              </p>
            </div>
          </div>
          {/* Aesthetic element */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Recognition Block */}
      <div className="mt-8 bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
            {/* Certificate Image - Larger and Clearer */}
            <div className="w-full md:w-[500px] h-[350px] bg-slate-50 border-2 border-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
              <img
                src={certificateImg}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                alt="SIH Certificate"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center justify-center md:justify-start gap-2">
              <Award size={20} className="text-primary" />
              Recognition & Validation
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-4 max-w-2xl">
              Recognized as a <strong>Smart India Hackathon (SIH) Grand Finalist</strong>, with the solution shortlisted and evaluated by government and domain experts.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <span className="px-3 py-1 bg-slate-50 rounded text-xs font-semibold text-slate-500 border border-slate-200">
                Grand Finalist
              </span>
              <span className="px-3 py-1 bg-slate-50 rounded text-xs font-semibold text-slate-500 border border-slate-200">
                Evaluated by AICTE
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;