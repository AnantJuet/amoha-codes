// Replaced with the new content for AboutCourseContainer.tsx

import React from 'react';

interface AboutCourseContainerProps {
  darkMode: boolean; // Added darkMode prop
}

export const AboutCourseContainer: React.FC<AboutCourseContainerProps> = ({ darkMode }) => {
  // Replace this with the actual path to your instructor's image
  
  // Dynamic classes
  const containerClasses = darkMode ? 'bg-gray-800 shadow-2xl' : 'bg-white shadow-2xl';
  const headerClasses = darkMode ? 'text-gray-100' : 'text-gray-900';
  const priceClasses = darkMode ? 'text-white' : 'text-gray-900';
  const featureTextClasses = darkMode ? 'text-gray-300' : 'text-gray-700';

  return (

    <div className={`w-full rounded-xl p-0 overflow-hidden ${containerClasses}`}>

            <div className="relative h-48">
        <img 
          src="/HTML.png"
          alt="HTML Course Overview" 
         className="absolute inset-0 w-full h-full object-contain mt-6"
        />
        
        <div className="absolute top-0 left-0 right-0 p-4 pt-1 bg-gradient-to-b from-black/70 to-transparent text-white">
          <h3 className="text-sm font-semibold tracking-wider mb-2">ABOUT THE COURSE</h3>

        </div>
      </div>
      
      {/* Course Details Section - Body */}
      <div className="p-6">
        <h2 className={`text-xl font-bold mb-2 ${headerClasses}`}>
         HTML Programming
        </h2>
        
        {/* Pricing */}
        <div className="flex items-baseline mb-5">
          <span className={`text-xl font-bold mr-2 ${priceClasses}`}>
            &#8377;999
          </span>
          <span className="text-sm line-through text-gray-500 mr-3">
            &#8377;1249
          </span>
          <span className="text-sm font-semibold px-2 py-0.5 rounded-sm bg-green-100 text-green-700">
            20% Discount
          </span>
        </div>
        
        {/* Features List */}
        <ul className={`space-y-3 text-base mb-6 ${featureTextClasses}`}>
          <li className="font-medium">
            <span className="font-bold mr-1 text-[#6334B9]">60+ hrs</span> of recorded content from our live batch
          </li>
          <li className="font-medium">
            <span className="font-bold mr-1 text-[#6334B9]">1 year</span>Access to all video lectures
          </li>
          <li className="font-medium">
            <span className="font-bold mr-1 text-[#6334B9]">3 months</span> of doubt support from Expert mentors
          </li>
          <li className="font-medium">
            <span className="font-bold mr-1 text-[#6334B9]">Lifetime access</span> to practice problems
          </li>
        </ul>
        
        {/* Enroll Button */}
        <button className="w-full py-3 text-lg font-medium rounded-lg bg-[#6334B9] text-white hover:bg-[#6334B9] transition duration-300 shadow-lg">
          Enroll Now
        </button>
      </div>
    </div>
  );
};