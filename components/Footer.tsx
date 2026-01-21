import React from 'react';
import { Sprout, Mail, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-slate-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4 text-white">
            <Sprout size={24} />
            <span className="text-xl font-bold">FarmAura</span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed mb-6">
            Empowering Indian agriculture with AI-driven plant health and precision insights. Building a sustainable, data-rich future for every farmer.
          </p>
          <div className="flex gap-4">
            <a
              href="https://x.com/FarmAura_co"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Follow us on Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/farmaura.co?utm_source=qr&igsh=MXN6ZWp1d2U4dHlsaw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/17HnXJQd5w/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="mailto:Farmauraofc@gmail.com"
              className="hover:text-white transition-colors"
              aria-label="Email us"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-secondary transition-colors">Crop Advisory</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Disease Detection</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Soil Analytics</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Govt Dashboards</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-secondary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Pilot Programs</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© 2024 FarmAura Technologies. All rights reserved.</p>
        <p className="mt-2 md:mt-0 font-medium text-secondary">Made for Indian Agriculture 🇮🇳</p>
      </div>
    </footer>
  );
};

export default Footer;