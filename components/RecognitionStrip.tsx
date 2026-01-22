import React from 'react';

const RecognitionStrip: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 border-b border-slate-200/60 py-3">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        {/* SIH Logo Placeholder - Grayscale & Muted */}
        <div className="h-8 md:h-10 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300">
          {/* REPLACE WITH ACTUAL SIH LOGO */}
          <img
            src="/images/SIH_LOGO.png"
            alt="Smart India Hackathon Logo"
            className="h-full w-auto object-contain mix-blend-multiply"
          />
        </div>

        <div className="hidden sm:block w-px h-6 bg-slate-300"></div>

        <p className="text-xs md:text-sm font-medium text-slate-500 text-center sm:text-left">
          <span className="font-semibold text-slate-700">Smart India Hackathon – Grand Finalist</span>
          <span className="hidden md:inline"> | Solution evaluated by national domain experts</span>
        </p>
      </div>
    </div>
  );
};

export default RecognitionStrip;