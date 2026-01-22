import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Activity, Droplets, Sun, Bug, ScanLine, Layers, Eye, Zap, MapPin } from 'lucide-react';

type ViewMode = 'visible' | 'ndvi' | 'thermal';

interface ViewConfig {
  label: string;
  color: string;
  img: string;
  overlay: string;
  stats: {
    primary: { name: string; value: string; color: string; width: string };
    secondary: { name: string; value: string; color: string; width: string };
    status: { label: string; color: string; icon: typeof Activity };
  };
}

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>('visible');
  const [currentTime, setCurrentTime] = useState(new Date());
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let interval: number;
    if (isScanning) {
      interval = window.setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 2;
        });
      }, 50);
    } else {
      setScanProgress(0);
    }
    return () => clearInterval(interval);
  }, [isScanning]);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const viewConfigs: Record<ViewMode, ViewConfig> = {
    visible: {
      label: 'Visible Spectrum',
      color: 'bg-green-500',
      img: '/images/farmer.jpg',
      overlay: 'opacity-60',
      stats: {
        primary: { name: 'Canopy Coverage', value: '78%', color: 'bg-green-400', width: '78%' },
        secondary: { name: 'Field Uniformity', value: '0.85', color: 'bg-blue-400', width: '85%' },
        status: { label: 'Operational', color: 'bg-green-500/20', icon: Activity }
      }
    },
    ndvi: {
      label: 'Vegetative Index (NDVI)',
      color: 'bg-emerald-400',
      img: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=400&auto=format&fit=crop',
      overlay: 'opacity-80 mix-blend-color-dodge',
      stats: {
        primary: { name: 'Chlorophyll Vigor', value: '0.82', color: 'bg-emerald-400', width: '82%' },
        secondary: { name: 'Biomass Index', value: '0.91', color: 'bg-green-500', width: '91%' },
        status: { label: 'Healthy', color: 'bg-emerald-500/20', icon: Layers }
      }
    },
    thermal: {
      label: 'Moisture Proxy (Thermal)',
      color: 'bg-orange-500',
      img: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=400&auto=format&fit=crop',
      overlay: 'opacity-70 saturate-200 hue-rotate-180',
      stats: {
        primary: { name: 'Water Stress Index', value: '0.34', color: 'bg-orange-400', width: '34%' },
        secondary: { name: 'Evapotranspiration', value: '4.2mm', color: 'bg-cyan-400', width: '68%' },
        status: { label: 'Moderate Stress', color: 'bg-orange-500/20', icon: Droplets }
      }
    }
  };

  const currentConfig = viewConfigs[viewMode];
  const StatusIcon = currentConfig.stats.status.icon;

  return (
    <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-primary-dark">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1625246333195-58197bd47d72?q=80&w=2070&auto=format&fit=crop"
          alt="Precision Agriculture"
          className="w-full h-full object-cover scale-105 transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px) scale(1.05)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
            <Zap size={14} className="text-yellow-400" />
            <span className="text-white">Pilot-Ready Decision Support</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Intelligent Crop Advisory for <br />
            <span className="text-secondary italic">Precision Agriculture</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
            Providing institutions and agricultural stakeholders with AI-driven crop advisories using field data, remote sensing, and agronomic insights—bridging digital intelligence with on-ground farm decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex justify-center items-center gap-2 px-8 py-4 bg-secondary text-primary-dark rounded-lg font-bold text-lg hover:bg-white transition-all shadow-lg"
            >
              Inquire for Pilot
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#process"
              className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Operational Framework
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-end">
          <div
            className="bg-white/5 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-2xl w-96 relative overflow-hidden transition-all duration-300 ease-out"
            style={{
              transform: `rotateX(${(mousePosition.y - 0.5) * -10}deg) rotateY(${(mousePosition.x - 0.5) * 10}deg)`,
            }}
            onMouseEnter={() => setIsScanning(true)}
            onMouseLeave={() => setIsScanning(false)}
          >
            {/* Header with Live Status */}
            <div className="mb-4 pb-3 border-b border-white/10">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isScanning ? 'bg-red-500 animate-pulse' : 'bg-green-400'}`}></div>
                  <span className="text-white font-mono text-[10px] tracking-widest uppercase">Decision Support Feed</span>
                </div>
                <div className="text-right">
                  <div className="text-[9px] text-slate-400 font-mono">
                    {currentTime.toLocaleTimeString('en-US', { hour12: false })}
                  </div>
                </div>
              </div>

              {/* Live Coordinates */}
              <div className="flex items-center gap-1 text-[9px] text-slate-400 font-mono">
                <MapPin size={10} className="text-green-400" />
                <span>13.0827°N, 77.5877°E</span>
                <span className="ml-auto text-green-400">● LIVE</span>
              </div>
            </div>

            <div className="space-y-5">
              {/* Image Viewer with Scanning Line */}
              <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                <img
                  src={currentConfig.img}
                  className={`w-full h-full object-cover transition-all duration-500 ${currentConfig.overlay}`}
                  alt="Analysis Mode"
                />

                {/* Active Scanning Line */}
                {isScanning && (
                  <div
                    className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_10px_rgba(239,68,68,0.8)] transition-all duration-100"
                    style={{
                      top: `${scanProgress}%`,
                    }}
                  />
                )}

                {/* Layer Label */}
                <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-[9px] text-white font-mono backdrop-blur-sm">
                  <div className="flex items-center gap-1">
                    <Layers size={10} />
                    <span>LAYER: {currentConfig.label}</span>
                  </div>
                </div>

                {/* Scan Progress Indicator */}
                {isScanning && (
                  <div className="absolute top-2 right-2 bg-red-500/80 px-2 py-1 rounded text-[9px] text-white font-mono backdrop-blur-sm animate-pulse">
                    SCANNING {scanProgress}%
                  </div>
                )}
              </div>

              {/* Interactive Layer Toggles */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setViewMode('visible')}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${viewMode === 'visible'
                    ? 'bg-green-500/20 border border-green-500/50'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                >
                  <Eye size={14} className={viewMode === 'visible' ? 'text-green-400' : 'text-slate-400'} />
                  <span className={`text-[9px] font-bold uppercase ${viewMode === 'visible' ? 'text-green-400' : 'text-slate-400'}`}>
                    Visible
                  </span>
                </button>

                <button
                  onClick={() => setViewMode('ndvi')}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${viewMode === 'ndvi'
                    ? 'bg-emerald-500/20 border border-emerald-500/50'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                >
                  <Layers size={14} className={viewMode === 'ndvi' ? 'text-emerald-400' : 'text-slate-400'} />
                  <span className={`text-[9px] font-bold uppercase ${viewMode === 'ndvi' ? 'text-emerald-400' : 'text-slate-400'}`}>
                    Health
                  </span>
                </button>

                <button
                  onClick={() => setViewMode('thermal')}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${viewMode === 'thermal'
                    ? 'bg-orange-500/20 border border-orange-500/50'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                >
                  <Droplets size={14} className={viewMode === 'thermal' ? 'text-orange-400' : 'text-slate-400'} />
                  <span className={`text-[9px] font-bold uppercase ${viewMode === 'thermal' ? 'text-orange-400' : 'text-slate-400'}`}>
                    Moisture
                  </span>
                </button>
              </div>

              {/* Dynamic HUD Stats */}
              <div className="space-y-3">
                {/* Primary Stat */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-tighter text-slate-400">
                    <span>{currentConfig.stats.primary.name}</span>
                    <span className="text-white font-bold">{currentConfig.stats.primary.value}</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`${currentConfig.stats.primary.color} h-full transition-all duration-500`}
                      style={{ width: currentConfig.stats.primary.width }}
                    ></div>
                  </div>
                </div>

                {/* Secondary Stat */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-tighter text-slate-400">
                    <span>{currentConfig.stats.secondary.name}</span>
                    <span className="text-white font-bold">{currentConfig.stats.secondary.value}</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`${currentConfig.stats.secondary.color} h-full transition-all duration-500`}
                      style={{ width: currentConfig.stats.secondary.width }}
                    ></div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center justify-between pt-2">
                  <div className={`flex items-center gap-2 px-3 py-2 ${currentConfig.stats.status.color} rounded-lg border border-white/10`}>
                    <StatusIcon size={14} className="text-white" />
                    <span className="text-[10px] font-bold text-white uppercase">{currentConfig.stats.status.label}</span>
                  </div>
                  <div className="text-[9px] text-slate-400 font-mono">
                    ID: FA-{Math.floor(Math.random() * 9000) + 1000}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;