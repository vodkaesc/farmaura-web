import React from 'react';
import Section from './ui/Section';
import { Smartphone, Zap, Leaf, BarChart3 } from 'lucide-react';

const AppShowcase: React.FC = () => {
  return (
    <Section id="app-showcase" title="Field Intelligence in Your Pocket" subtitle="Designed for usability in the field, providing farmers with intuitive access to complex agronomic data." className="bg-slate-50">

      {/* Introduction */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm text-sm font-medium text-slate-600">
          <Smartphone size={16} className="text-primary" />
          <span>Android & iOS Ready</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm text-sm font-medium text-slate-600">
          <Zap size={16} className="text-orange-500" />
          <span>Offline Capable</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm text-sm font-medium text-slate-600">
          <Leaf size={16} className="text-green-500" />
          <span>Local Language Support</span>
        </div>
      </div>

      {/* Phone Mockups Grid */}
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start">

        {/* Phone 1: Dashboard */}
        <div className="flex flex-col items-center">
          <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
              {/* REPLACE WITH YOUR DASHBOARD SCREENSHOT */}
              <img
                src="images/Dashboard_UI.jpeg"
                alt="FarmAura Dashboard Interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 rounded-[2rem]"></div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-lg font-bold text-slate-800 flex items-center justify-center gap-2">
              <BarChart3 size={20} className="text-primary" />
              Unified Dashboard
            </h3>
            <p className="text-sm text-slate-600 mt-2 max-w-[250px] mx-auto">
              Real-time weather, quick actions, and farm performance at a glance.
            </p>
          </div>
        </div>

        {/* Phone 2: Pest Detection */}
        <div className="flex flex-col items-center md:-mt-12">
          <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl ring-4 ring-primary/10">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
              {/* REPLACE WITH YOUR PEST DETECTION SCREENSHOT */}
              <img
                src="images/pest_detection_UI.jpeg"
                alt="AI Pest Detection Interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 rounded-[2rem]"></div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-lg font-bold text-slate-800 flex items-center justify-center gap-2">
              <Zap size={20} className="text-yellow-500" />
              AI Diagnostics
            </h3>
            <p className="text-sm text-slate-600 mt-2 max-w-[250px] mx-auto">
              Instant pest identification and severity analysis using computer vision.
            </p>
          </div>
        </div>

        {/* Phone 3: Crop Advisory */}
        <div className="flex flex-col items-center">
          <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
              {/* REPLACE WITH YOUR CROP ADVISORY SCREENSHOT */}
              <img
                src="images/Crop_Advisory_UI.jpeg"
                alt="Crop Advisory Interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 rounded-[2rem]"></div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-lg font-bold text-slate-800 flex items-center justify-center gap-2">
              <Leaf size={20} className="text-green-600" />
              Crop Advisory Interface
            </h3>
            <p className="text-sm text-slate-600 mt-2 max-w-[250px] mx-auto">
              AI-driven crop nutrient recommendations based on soil parameters, crop stage, and local conditions for precision fertilization.
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default AppShowcase;