import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, title, subtitle, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-6 md:px-12 lg:px-24 scroll-mt-28 ${dark ? 'bg-primary text-white' : 'bg-white text-slate-800'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-16 text-center max-w-3xl mx-auto">
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-primary'}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg md:text-xl ${dark ? 'text-gray-300' : 'text-slate-600'}`}>
                {subtitle}
              </p>
            )}
            <div className={`h-1 w-20 mx-auto mt-6 rounded-full ${dark ? 'bg-accent' : 'bg-primary-light'}`}></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;