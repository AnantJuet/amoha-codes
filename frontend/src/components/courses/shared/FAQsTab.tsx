import React, { useState } from 'react';
import { ChevronDown } from './Utilities';
import type { FaqCategory } from './types';

interface AccordionItemProps {
  title: string;
  defaultOpen: boolean;
  className?: string;
  children: React.ReactNode;
  darkMode: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, defaultOpen, className, children, darkMode }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const itemClasses = darkMode
    ? 'border-gray-700 bg-gray-800 shadow-xl'
    : 'border-gray-200 bg-white shadow-lg';

  const buttonClasses = darkMode
    ? `bg-gray-800 text-white hover:bg-gray-700 ${isOpen ? 'bg-gray-700 text-[#9E7BB8]' : ''}`
    : `bg-white text-gray-800 hover:bg-gray-50 ${isOpen ? 'bg-gray-100 text-[#6334B9]' : ''}`;

  const chevronClasses = darkMode
    ? `${isOpen ? 'text-[#9E7BB8] rotate-180' : 'text-gray-400'}`
    : `${isOpen ? 'text-blue-600 rotate-180' : 'text-gray-400'}`;

  return (
    <div className={`border rounded-xl overflow-hidden ${className} ${itemClasses}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center w-full p-4 sm:p-6 text-left font-bold transition-colors duration-200 focus:outline-none ${buttonClasses}`}
      >
        <span>{title}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${chevronClasses}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] p-4 sm:p-6' : 'max-h-0'}`}>
        {children}
      </div>
    </div>
  );
};

interface FAQsTabProps {
  darkMode: boolean;
  data: FaqCategory[];
}

export const FAQsTab: React.FC<FAQsTabProps> = ({ darkMode, data }) => {
  const [activeCategory, setActiveCategory] = useState<string>(data[0]?.name || 'Course Content');

  const currentQuestions = data.find((cat) => cat.name === activeCategory)?.questions || [];

  const textClasses = darkMode ? 'text-white' : 'text-gray-800';
  const activeTabClasses = darkMode
    ? 'bg-gray-800 text-[#9E7BB8] border-b-2 border-[#9E7BB8]'
    : 'bg-white text-[#6334B9] border-b-2 border-[#6334B9]';
  const inactiveTabClasses = darkMode
    ? 'text-gray-400 hover:text-[#9E7BB8]'
    : 'text-gray-700 hover:text-[#6334B9]';

  return (
    <div className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="lg:grid lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2">
          <h2 className={`text-2xl font-bold mb-6 ${textClasses}`}>Frequently Asked Questions</h2>

          <div className={`flex flex-wrap gap-2 mb-8 ${darkMode ? 'border-gray-700' : 'border-gray-200'} border-b`}>
            {data.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-200 ${
                  activeCategory === category.name ? activeTabClasses : inactiveTabClasses
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {currentQuestions.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.q}
                darkMode={darkMode}
                defaultOpen={item.isOpenInImage || false}
                className="border-none shadow-none"
              >
                <p className={darkMode ? 'text-gray-300 whitespace-pre-line' : 'text-gray-700 whitespace-pre-line'}>
                  {item.a}
                </p>
              </AccordionItem>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1 hidden lg:block"></div>
      </div>
    </div>
  );
};
