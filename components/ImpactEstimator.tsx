import React, { useState } from 'react';
import Section from './ui/Section';
import { Calculator, TrendingUp, Droplets, Wallet, Sprout, ArrowRight } from 'lucide-react';

const ImpactEstimator: React.FC = () => {
  const [acres, setAcres] = useState(50);
  const [crop, setCrop] = useState('Cotton');

  const benchmarks = {
    Cotton: { water: 20, yield: 15, cost: 18 },
    Paddy: { water: 25, yield: 10, cost: 12 },
    Maize: { water: 15, yield: 12, cost: 14 },
    Wheat: { water: 12, yield: 8, cost: 16 }
  };

  const current = benchmarks[crop as keyof typeof benchmarks];

  return (
    <Section id="estimator" title="Pilot Impact Modeler" subtitle="Indicative objectives based on early-stage conceptual modeling." className="bg-slate-50">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
        <div className="p-8 lg:w-2/5 bg-primary text-white">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="text-secondary" />
            <h3 className="text-xl font-bold">Simulation Parameters</h3>
          </div>
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-4 uppercase tracking-wider">Primary Crop Under Observation</label>
              <div className="grid grid-cols-2 gap-3">
                {Object.keys(benchmarks).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCrop(c)}
                    className={`px-4 py-3 rounded-xl border text-sm font-bold transition-all ${crop === c ? 'bg-secondary text-primary border-secondary' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-4 uppercase tracking-wider">Pilot Area (Acres)</label>
              <input 
                type="range" 
                min="10" 
                max="1000" 
                step="10"
                value={acres}
                onChange={(e) => setAcres(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-secondary"
              />
              <div className="flex justify-between mt-4">
                <span className="text-2xl font-bold">{acres} <span className="text-sm font-normal text-slate-400">Acres</span></span>
              </div>
            </div>
          </div>
          <div className="mt-12 p-4 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-xs text-slate-400 italic">
              *Model outputs are indicative pilot benchmarks. Actual results depend on regional conditions and protocol compliance.
            </p>
          </div>
        </div>

        <div className="p-8 lg:w-3/5">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="text-primary" />
            <h3 className="text-xl font-bold text-slate-800">Target Objectives for Pilot</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
              <p className="text-3xl font-bold text-blue-700">~{current.water}%</p>
              <p className="text-xs font-bold text-blue-500 uppercase mt-1">Water Efficiency Aim</p>
            </div>
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
              <p className="text-3xl font-bold text-emerald-700">~{current.yield}%</p>
              <p className="text-xs font-bold text-emerald-500 uppercase mt-1">Potential Yield Gain</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100 text-center">
              <p className="text-3xl font-bold text-orange-700">~{current.cost}%</p>
              <p className="text-xs font-bold text-orange-500 uppercase mt-1">Target Input Saving</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2">Methodology Note</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                The platform aims to optimize resource allocation across {acres} acres of {crop} through precision scheduling. We focus on identifying nutrient gaps and water stress indicators to prevent resource over-application.
              </p>
            </div>
            <a 
              href="#process" 
              className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-light transition-all shadow-lg flex items-center justify-center gap-2 group"
            >
              Review Pilot Methodology
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ImpactEstimator;