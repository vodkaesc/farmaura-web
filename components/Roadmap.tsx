import React from 'react';
import Section from './ui/Section';

const Roadmap: React.FC = () => {
  return (
    <Section id="roadmap" title="Strategic Roadmap" className="bg-secondary-beige">
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 transform md:-translate-x-1/2"></div>

        {/* Phase 1 */}
        <div className="relative flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 flex justify-start md:justify-end md:pr-12 pl-20 md:pl-0 mb-4 md:mb-0 w-full">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary w-full md:w-auto">
              <span className="text-primary font-bold text-sm tracking-wider uppercase mb-1 block">Phase 1</span>
              <h4 className="text-lg font-bold text-slate-800">MVP & Pilot Validation</h4>
              <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                <li>Core AI Model Development</li>
                <li>Initial Field Trials (1000 acres)</li>
                <li>Data Validation with KVKs</li>
              </ul>
            </div>
          </div>
          <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-sm z-10"></div>
          <div className="md:w-1/2"></div>
        </div>

        {/* Phase 2 */}
        <div className="relative flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2"></div>
          <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-sm z-10"></div>
          <div className="md:w-1/2 flex justify-start md:pl-12 pl-20 w-full">
             <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-accent w-full md:w-auto">
              <span className="text-accent font-bold text-sm tracking-wider uppercase mb-1 block">Phase 2</span>
              <h4 className="text-lg font-bold text-slate-800">District-Level Scale</h4>
              <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                <li>Institutional Dashboard Launch</li>
                <li>Integration with State Portals</li>
                <li>Expansion to 10 Districts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-start md:justify-end md:pr-12 pl-20 md:pl-0 mb-4 md:mb-0 w-full">
            <div className="bg-white/50 p-6 rounded-xl border-l-4 border-slate-400 w-full md:w-auto grayscale opacity-80">
              <span className="text-slate-500 font-bold text-sm tracking-wider uppercase mb-1 block">Phase 3 (Future)</span>
              <h4 className="text-lg font-bold text-slate-700">Multi-State Ecosystem</h4>
              <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
                <li>Pan-India Operations</li>
                <li>Market Linkage Integration</li>
                <li>Advanced Carbon Credits Module</li>
              </ul>
            </div>
          </div>
          <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-300 rounded-full border-4 border-white shadow-sm z-10"></div>
          <div className="md:w-1/2"></div>
        </div>

      </div>
    </Section>
  );
};

export default Roadmap;