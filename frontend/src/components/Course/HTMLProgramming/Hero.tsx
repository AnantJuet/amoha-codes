import React from 'react';
// Assuming CheckCircle is available from a utilities file as suggested by the original import
import { CheckCircle } from './Utilities'; 

interface HeroProps {
  darkMode: boolean; // Added darkMode prop
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  
  // Dynamic classes based on the darkMode prop
  const backgroundClasses = darkMode ? 'bg-gray-900' : 'bg-gray-700';
  const headingClasses = darkMode ? 'text-white' : 'text-white'; // Heading remains white/light for contrast on both dark and gray backgrounds
  const paragraphClasses = darkMode ? 'text-gray-300' : 'text-gray-300'; // Paragraph remains light gray
  const exploreButtonClasses = darkMode 
    ? 'border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900' 
    : 'border-white text-white hover:bg-white hover:text-gray-900';
  const enrollButtonClasses = 'bg-[#6334B9] text-white hover:bg-[#6334B9]'; // Purple button remains the same
  const trustedTextClasses = darkMode ? 'text-green-400' : 'text-green-400'; // Trust text remains green

  return (
    <div className={`${backgroundClasses} ${headingClasses} pt-16 pb-12 sm:pt-24 sm:pb-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:w-3/4">
          <h1 className={`text-5xl sm:text-4xl font-extrabold tracking-tight mb-4 ${headingClasses}`}>
            HTML Programming
          </h1>
          <p className={`mt-4 text-xl max-w-3xl leading-relaxed ${paragraphClasses}`}>
Level 1 is designed for absolute beginners who are starting their web development journey.
Here, the focus isn’t on frameworks or fancy libraries, but on mastering the building blocks of the web — HTML (HyperText Markup Language).
You’ll learn how websites are structured, how content is displayed, and how to write clean, semantic HTML code that forms the backbone of every great webpage.
🧱 Build your foundation.
💻 Create beautiful, functional static websites.
🚀 Prepare yourself for CSS, JavaScript, and full-stack development ahead.
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
            Trusted by 2800+ Students Previously
          </p>
        </div>
      </div>
    </div>
  );
};