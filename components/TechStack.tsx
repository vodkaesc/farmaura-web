import React from 'react';
import Section from './ui/Section';
import { Cpu, Cloud, Smartphone, Server, Globe, ArrowRight, Zap } from 'lucide-react';

const TechStack: React.FC = () => {
  return (
    <Section id="technology" title="Powered by Advanced Technology" subtitle="Robust, scalable, and secure infrastructure designed for India." dark>
      <style>{`
        @keyframes flow-beam {
          0% { left: -20%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .animate-flow-beam {
          animation: flow-beam 3s infinite linear;
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
      `}</style>
      
      <div className="grid lg:grid-cols-3 gap-8 mb-24">
        
        {/* Col 1: AI Core - Cool Blue Theme */}
        <div className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_50px_rgba(2,132,199,0.4)] hover:border-accent">
          {/* Animated Background Gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-all duration-700 group-hover:bg-accent/20 group-hover:scale-150"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-slate-800/80 rounded-xl border border-white/10 shadow-inner group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                <Cpu size={28} className="text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-xl text-white group-hover:text-accent transition-colors duration-300">AI & Analytics Core</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3 group/item">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 group-hover/item:shadow-[0_0_10px_currentColor] transition-shadow duration-300"></span>
                <span className="group-hover/item:text-white transition-colors duration-300">Proprietary ML Models (Python)</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 group-hover/item:shadow-[0_0_10px_currentColor] transition-shadow duration-300"></span>
                <span className="group-hover/item:text-white transition-colors duration-300">Predictive Crop Modeling</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 group-hover/item:shadow-[0_0_10px_currentColor] transition-shadow duration-300"></span>
                <span className="group-hover/item:text-white transition-colors duration-300">Computer Vision for Disease ID</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Col 2: Data Sources - Organic Green Theme */}
        <div className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_50px_rgba(216,243,220,0.3)] hover:border-secondary">
           {/* Animated Background Gradient */}
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -ml-20 -mb-20 transition-all duration-700 group-hover:bg-secondary/20 group-hover:scale-150"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-slate-800/80 rounded-xl border border-white/10 shadow-inner group-hover:bg-secondary group-hover:border-secondary transition-all duration-500">
                <Globe size={28} className="text-secondary group-hover:text-primary-dark transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-xl text-white group-hover:text-secondary transition-colors duration-300">Trusted Data Sources</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3 group/item">
                <span className="w-2 h-2 rounded-full bg-secondary mt-2 group-hover/item:shadow-[0_0_10px_currentColor] transition-shadow duration-300"></span>
                <span className="group-hover/item:text-white transition-colors duration-300">IMD Weather APIs</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="w-2 h-2 rounded-full bg-secondary mt-2 group-hover/item:shadow-[0_0_10px_currentColor] transition-shadow duration-300"></span>
                <span className="group-hover/item:text-white transition-colors duration-300">ISRO Bhuvan Satellite Imagery</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="w-2 h-2 rounded-full bg-secondary mt-2 group-hover/item:shadow-[0_0_10px_currentColor] transition-shadow duration-300"></span>
                <span className="group-hover/item:text-white transition-colors duration-300">Digitized Soil Health Cards</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Col 3: Architecture - Robust Orange/Tech Theme */}
        <div className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_50px_rgba(251,146,60,0.4)] hover:border-orange-400">
           {/* Animated Background Gradient */}
           <div className="absolute top-0 left-1/2 w-64 h-64 bg-orange-400/10 rounded-full blur-[80px] -translate-x-1/2 -mt-32 transition-all duration-700 group-hover:bg-orange-400/20 group-hover:scale-150"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-slate-800/80 rounded-xl border border-white/10 shadow-inner group-hover:bg-orange-400 group-hover:border-orange-400 transition-all duration-500">
                <Cloud size={28} className="text-orange-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-xl text-white group-hover:text-orange-400 transition-colors duration-300">Enterprise Architecture</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3 group/item">
                <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 group-hover/item:shadow-[0_0_10px_currentColor] transition-shadow duration-300"></span>
                <span className="group-hover/item:text-white transition-colors duration-300">Cloud-Native & Scalable</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 group-hover/item:shadow-[0_0_10px_currentColor] transition-shadow duration-300"></span>
                <span className="group-hover/item:text-white transition-colors duration-300">Offline-First Mobile Capability</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 group-hover/item:shadow-[0_0_10px_currentColor] transition-shadow duration-300"></span>
                <span className="group-hover/item:text-white transition-colors duration-300">Gov-Grade Data Security (AES-256)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Process Flow Visualization */}
      <div className="bg-slate-900/50 rounded-2xl p-10 border border-white/10 relative overflow-hidden">
        {/* Decorative background grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <h3 className="text-center font-bold text-xl text-white mb-16 relative z-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">End-to-End Data Flow</span>
        </h3>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 relative max-w-5xl mx-auto z-10">
          
          {/* Connector Line Base (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-white/10 -z-10">
            {/* Animated Data Packet 1 */}
            <div className="absolute top-1/2 -translate-y-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent animate-flow-beam"></div>
            {/* Animated Data Packet 2 (Delayed) */}
            <div className="absolute top-1/2 -translate-y-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-flow-beam" style={{ animationDelay: '1.5s' }}></div>
          </div>

          {/* Step 1: Data Collection */}
          <div className="flex flex-col items-center text-center group w-48">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl animate-pulse-ring"></div>
              <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-secondary flex items-center justify-center text-secondary shadow-[0_0_30px_rgba(216,243,220,0.15)] relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                <Server size={32} />
                <div className="absolute top-0 right-0 bg-secondary text-primary-dark text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-slate-900">IN</div>
              </div>
            </div>
            <p className="font-bold text-white text-lg mb-2">Data Collection</p>
            <p className="text-sm text-slate-400">Satellite, Weather Stations & Soil Sensors</p>
            
            <ArrowRight className="md:hidden mt-6 text-white/20 animate-bounce" />
          </div>

          {/* Step 2: AI Processing */}
          <div className="flex flex-col items-center text-center group w-48">
             <div className="relative mb-6">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse-ring" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-accent flex items-center justify-center text-accent shadow-[0_0_30px_rgba(2,132,199,0.25)] relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                <Cpu size={32} className="group-hover:animate-[spin_4s_linear_infinite]" />
              </div>
              {/* Processing indicators */}
              <div className="absolute -right-2 top-0 w-2 h-2 bg-accent rounded-full animate-ping"></div>
              <div className="absolute -left-2 bottom-0 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>
            <p className="font-bold text-white text-lg mb-2">AI Processing</p>
            <p className="text-sm text-slate-400">ML Validation & Insight Generation</p>

            <ArrowRight className="md:hidden mt-6 text-white/20 animate-bounce" />
          </div>

          {/* Step 3: Advisory Delivery */}
          <div className="flex flex-col items-center text-center group w-48">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse-ring" style={{ animationDelay: '1s' }}></div>
              <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-green-500 flex items-center justify-center text-green-500 shadow-[0_0_30px_rgba(34,197,94,0.25)] relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                <Smartphone size={32} />
                <div className="absolute -bottom-1 -right-1 bg-green-500 text-slate-900 rounded-full p-1">
                  <Zap size={12} fill="currentColor" />
                </div>
              </div>
            </div>
            <p className="font-bold text-white text-lg mb-2">Advisory Delivery</p>
            <p className="text-sm text-slate-400">Real-time Alerts via App & Dashboard</p>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default TechStack;