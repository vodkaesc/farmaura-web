import React from 'react';
import Section from './ui/Section';
import { Play, MonitorPlay } from 'lucide-react';

const VideoDemo: React.FC = () => {
  // REPLACE THE ID BELOW WITH YOUR YOUTUBE VIDEO ID
  // Example: if link is https://www.youtube.com/watch?v=dQw4w9WgXcQ, the ID is dQw4w9WgXcQ
  const VIDEO_ID = "weXpkhFjh4E"; 

  return (
    <Section id="demo" title="See FarmAura in Action" subtitle="Experience the full workflow: from onboarding to real-time advisory." className="bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Video Container */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 bg-slate-900 aspect-video group">
          <iframe 
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
            title="FarmAura App Demonstration"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
        
        {/* Feature Highlights */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-secondary transition-colors">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-4 border border-slate-100">
                    <span className="font-bold">1</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Easy Onboarding</h4>
                <p className="text-sm text-slate-600">See how farmers create profiles and map their land in under 2 minutes.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-secondary transition-colors">
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-4 border border-slate-100">
                    <span className="font-bold">2</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Live Diagnostics</h4>
                <p className="text-sm text-slate-600">Watch the AI identify pests and soil deficiencies from simple photos.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-secondary transition-colors">
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-4 border border-slate-100">
                    <span className="font-bold">3</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Instant Advisory</h4>
                <p className="text-sm text-slate-600">Observe how complex data is converted into simple, local-language advice.</p>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default VideoDemo;