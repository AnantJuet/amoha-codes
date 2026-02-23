import React from 'react';
import type { AboutData } from './types';

interface AboutCourseProps {
  darkMode: boolean;
  data: AboutData;
}

export const AboutCourse: React.FC<AboutCourseProps> = ({ darkMode, data }) => {
  const containerClasses = darkMode ? 'bg-gray-800 shadow-2xl' : 'bg-white shadow-2xl';
  const headerClasses = darkMode ? 'text-gray-100' : 'text-gray-900';
  const priceClasses = darkMode ? 'text-white' : 'text-gray-900';
  const featureTextClasses = darkMode ? 'text-gray-300' : 'text-gray-700';

  return (
    <div className={`w-full rounded-xl p-0 overflow-hidden ${containerClasses}`}>
      <div className="relative h-48">
        <img
          src={data.image}
          alt={`${data.title} Course Overview`}
          className="absolute inset-0 w-full h-full object-contain mt-5"
        />
        <div className="absolute inset-0 flex items-center justify-center"></div>
        <div className="absolute top-0 left-0 right-0 p-4 pt-1 bg-gradient-to-b from-black/70 to-transparent text-white">
          <h3 className="text-sm font-semibold tracking-wider mb-2">ABOUT THE COURSE</h3>
        </div>
      </div>

      <div className="p-6">
        <h2 className={`text-xl font-bold mb-2 ${headerClasses}`}>
          {data.title}
        </h2>

        <div className="flex items-baseline mb-5">
          <span className={`text-xl font-bold mr-2 ${priceClasses}`}>
            &#8377;{data.price}
          </span>
          <span className="text-sm line-through text-gray-500 mr-3">
            &#8377;{data.originalPrice}
          </span>
          <span className="text-sm font-semibold px-2 py-0.5 rounded-sm bg-green-100 text-green-700">
            {data.discount}
          </span>
        </div>

        <ul className={`space-y-3 text-base mb-6 ${featureTextClasses}`}>
          {data.features.map((feature, index) => (
            <li key={index} className="font-medium" dangerouslySetInnerHTML={{ __html: feature }} />
          ))}
        </ul>

        <button className="w-full py-3 text-lg font-medium rounded-lg bg-[#6334B9] text-white hover:bg-[#6334B9] transition duration-300 shadow-lg">
          Enroll Now
        </button>
      </div>
    </div>
  );
};
