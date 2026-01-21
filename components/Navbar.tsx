import React, { useState, useEffect } from 'react';
import { Menu, X, Sprout, Download } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#process' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Technology', href: '#technology' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section
      const sections = navItems.map(item => item.href.substring(1));
      let currentSection = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is within the top part of viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    window.print();
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('');
      return;
    }

    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2 group" 
          onClick={(e) => handleNavClick(e, '#')}
        >
          <div className="bg-primary p-2 rounded-lg text-white group-hover:bg-primary-light transition-colors">
            <Sprout size={24} />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-primary' : 'text-white drop-shadow-md'}`}>
            FarmAura
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a 
                key={item.label} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-all relative py-1 ${
                  scrolled ? 'text-slate-700 hover:text-primary' : 'text-white/90 hover:text-white drop-shadow-sm'
                } ${isActive ? (scrolled ? 'text-primary' : 'text-white font-bold') : ''}`}
              >
                {item.label}
                {isActive && (
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full transition-all duration-300 ${
                    scrolled ? 'bg-primary' : 'bg-secondary'
                  }`} />
                )}
              </a>
            );
          })}
          
          <div className="flex items-center gap-3">
            <button 
              onClick={handleDownload}
              className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all ${
                scrolled 
                  ? 'text-slate-600 hover:text-primary hover:bg-slate-50' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              title="Save as PDF"
            >
              <Download size={18} />
              <span className="hidden xl:inline">Brochure</span>
            </button>

            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`px-5 py-2.5 rounded-md font-semibold text-sm transition-all shadow-md ${
                scrolled 
                  ? 'bg-primary text-white hover:bg-primary-light' 
                  : 'bg-white text-primary hover:bg-secondary'
              }`}
            >
              Request Pilot
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-slate-800' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-slate-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-6 px-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`font-medium py-2 border-b border-slate-50 last:border-0 ${
                activeSection === item.href.substring(1) ? 'text-primary font-bold' : 'text-slate-700'
              }`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => { handleDownload(); setIsOpen(false); }}
            className="flex items-center justify-center gap-2 text-slate-700 font-medium py-2 border-b border-slate-50"
          >
            <Download size={16} />
            Download Brochure
          </button>
          <a 
            href="#contact"
            className="mt-2 text-center w-full bg-primary text-white py-3 rounded-md font-semibold"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Request Pilot
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;