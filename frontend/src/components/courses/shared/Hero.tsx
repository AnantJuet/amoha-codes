import React from 'react';
import { CheckCircle } from './Utilities';
import type { HeroData } from './types';

interface HeroProps {
  darkMode: boolean;
  data: HeroData;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, data }) => {
  const backgroundClasses = darkMode ? 'bg-gray-900' : 'bg-gray-700';
  const headingClasses = 'text-white';
  const paragraphClasses = 'text-gray-300';
  const exploreButtonClasses = darkMode
    ? 'border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900'
    : 'border-white text-white hover:bg-white hover:text-gray-900';
  const enrollButtonClasses = 'bg-[#6334B9] text-white hover:bg-[#6334B9]';
  const trustedTextClasses = 'text-green-400';

  return (
    <div className={`${backgroundClasses} ${headingClasses} pt-16 pb-12 sm:pt-24 sm:pb-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:w-3/4">
          <h1 className={`text-5xl sm:text-4xl font-extrabold tracking-tight mb-4 ${headingClasses}`}>
            {data.title}
          </h1>
          <p className={`mt-4 text-xl max-w-3xl leading-relaxed whitespace-pre-line ${paragraphClasses}`}>
            {data.description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className={`px-8 py-3 text-lg font-medium rounded-xl border transition duration-300 shadow-lg ${exploreButtonClasses}`}>
              Explore Course
            </button>
            <button className={`px-8 py-3 text-lg font-medium rounded-xl transition duration-300 shadow-lg ${enrollButtonClasses}`}>
              Enroll Now
            </button>
          </div>
          <p className={`mt-8 text-sm flex items-center ${trustedTextClasses}`}>
            <CheckCircle className="w-5 h-5 mr-2" />
            {data.trustedText}
          </p>
        </div>
      </div>
    </div>
  );
};
