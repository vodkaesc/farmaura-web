import React from 'react';
import Section from './ui/Section';

const Impact: React.FC = () => {
  return (
    <Section id="impact" title="Pilot Objectives" subtitle="Defining measurable targets for institutional deployment.">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
          <p className="text-lg font-bold text-primary mb-1 uppercase tracking-tighter">Objective</p>
          <p className="text-3xl font-bold text-slate-800 mb-2">Cost Optimization</p>
          <p className="text-xs text-slate-500">Reducing unnecessary input application</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
          <p className="text-lg font-bold text-accent mb-1 uppercase tracking-tighter">Metric</p>
          <p className="text-3xl font-bold text-slate-800 mb-2">Decision Accuracy</p>
          <p className="text-xs text-slate-500">Focus on explainable AI insights</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
          <p className="text-lg font-bold text-orange-500 mb-1 uppercase tracking-tighter">Scale</p>
          <p className="text-3xl font-bold text-slate-800 mb-2">Cluster-Level</p>
          <p className="text-xs text-slate-500">Designed for 1,000+ acre blocks</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
          <p className="text-lg font-bold text-primary-light mb-1 uppercase tracking-tighter">Availability</p>
          <p className="text-3xl font-bold text-slate-800 mb-2">Real-time Feed</p>
          <p className="text-xs text-slate-500">Near-continuous field monitoring</p>
        </div>
      </div>

      <div className="text-center mb-12">
        <h3 className="text-xl font-bold text-slate-800 mb-8 uppercase tracking-widest text-sm">Deployment Design Partners</h3>
        <div className="flex flex-wrap justify-center gap-6 opacity-60">
            <div className="flex items-center gap-2 font-semibold text-slate-500 text-sm border border-slate-200 px-4 py-2 rounded-lg">
                State Agri Frameworks
            </div>
            <div className="flex items-center gap-2 font-semibold text-slate-500 text-sm border border-slate-200 px-4 py-2 rounded-lg">
                FPO Clusters
            </div>
            <div className="flex items-center gap-2 font-semibold text-slate-500 text-sm border border-slate-200 px-4 py-2 rounded-lg">
                Research Collectives
            </div>
        </div>
        <p className="text-[10px] text-slate-400 mt-8 uppercase tracking-widest font-bold">Disclaimer: Metrics are pilot targets and subject to field validation.</p>
      </div>
    </Section>
  );
};

export default Impact;