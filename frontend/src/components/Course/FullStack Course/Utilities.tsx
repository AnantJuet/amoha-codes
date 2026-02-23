
import React, { useState } from 'react';

// --- ICONS ---
// Using inline SVG components to avoid external dependencies

export const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);
export const MinusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);
export const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
);
export const CheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14 9 11"></polyline></svg>
);

// Generic Icon component mapping for the Features section
export const FeatureIcon: React.FC<{ name: string, className?: string }> = ({ name, className = 'w-6 h-6' }) => {
  const iconClass = `p-2 rounded-lg text-blue-600 bg-blue-100 ${className}`;

  // Simple SVG mapping to match the look in the image
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video': return <svg className={iconClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="12" x2="21" y2="12"></line><line x1="12" y1="3" x2="12" y2="21"></line></svg>;
      case 'Code': return <svg className={iconClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
      case 'Lightbulb': return <svg className={iconClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .5-2 0-3-.5-1.5-3-2-3-4"></path><path d="M10 20v-9a3 3 0 0 1 6 0v9"></path><line x1="8" y1="20" x2="16" y2="20"></line></svg>;
      case 'Chat': return <svg className={iconClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
      case 'Medal': return <svg className={iconClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.62 12 2 9.19 8.62 2 9.24 7.46 13.97 5.82 21z"></path></svg>;
      case 'Contest': return <svg className={iconClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
      case 'Discussion': return <svg className={iconClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5A2.5 2.5 0 0 1 18.5 9h-1.39A6 6 0 0 0 12 4.41V3a1 1 0 0 0-2 0v1.41A6 6 0 0 0 5.89 9H4.5A2.5 2.5 0 0 1 2 11.5v5A2.5 2.5 0 0 1 4.5 19h15A2.5 2.5 0 0 1 21 16.5z"></path></svg>;
      default: return null;
    }
  };

  return getIcon(name);
};


// --- ACCORDION COMPONENT ---

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, defaultOpen = false, className = 'bg-white' }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border border-gray-200 rounded-xl mb-4 overflow-hidden shadow-sm transition-all duration-300 ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-5 text-left font-semibold text-lg text-gray-800 focus:outline-none"
      >
        <span>{title}</span>
        {isOpen ? (
          <MinusIcon className="w-5 h-5 text-[#6334B9] transition-transform duration-300" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] py-4' : 'max-h-0'}`}
      >
        <div className="px-5 pb-5 text-gray-600">
          {children}
        </div>
      </div>
    </div>
  );
};
