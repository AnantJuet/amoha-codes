import React from 'react';
import { FEATURES_DATA } from '../../../data/Course/AIMLData';
import { FeatureIcon } from './Utilities'; 


interface FeaturesTabProps {
  darkMode: boolean; // Added darkMode prop
}

export const FeaturesTab: React.FC<FeaturesTabProps> = ({darkMode}) => {
  
  // Dynamic classes based on the darkMode prop
  const mainContainerClasses = darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  const headingClasses = darkMode ? 'text-white' : 'text-gray-800';
  const itemBorderClasses = darkMode ? 'border-gray-700 hover:shadow-white/10' : 'border-gray-100 hover:shadow-lg';
  const titleClasses = darkMode ? 'text-white' : 'text-gray-800';
  const descriptionClasses = darkMode ? 'text-gray-400' : 'text-gray-600';
  const noteBoxClasses = darkMode 
    ? 'bg-purple-950/40 border-[#9E7BB8] text-[#9E7BB8]' 
    : 'bg-blue-50 border-[#6334B9] text-[#6334B9]';
  const codeforcesGrayClasses = darkMode ? 'bg-gray-500' : 'bg-gray-400';
  

  return (
    <div className={`py-8 ${mainContainerClasses}`}>

      <div className="lg:grid lg:grid-cols-3 lg:gap-10">

        <div className="lg:col-span-2">
          
          <h2 className={`text-2xl font-bold mb-6 ${headingClasses}`}>Course Features</h2>
          
          {/* Features List */}
          <div className="grid gap-6">
            {FEATURES_DATA.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-start p-4 border rounded-xl transition duration-300 hover:shadow-lg ${itemBorderClasses}`}
              >

                <div className="p-2 rounded-lg bg-blue-100 text-[#6334B9] flex-shrink-0">
                   <FeatureIcon name={item.iconName} className="w-6 h-8" />
                </div>
                
                <div className="ml-4">
                  <h3 className={`text-lg font-semibold ${titleClasses}`}>{item.title}</h3>
                  <p className={`mt-1 text-sm sm:text-base ${descriptionClasses}`}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Important Note Box */}
          <div className={`mt-8 p-4 sm:p-6 border-l-4 rounded-r-lg shadow-inner ${noteBoxClasses}`}>
            <p className="font-semibold">
              Important Note: <span className="font-normal">Doubt support includes problems up to basic-intermediate difficulty (around LeetCode Easy–Medium).</span>
            </p>
            <div className="flex space-x-0.5 mt-1">
              {/* Codeforces rating color indicators */}
              <div className={`w-2 h-4 rounded-sm ${codeforcesGrayClasses}`}></div> 
                <div className="w-2 h-4 bg-green-500 rounded-sm"></div>
              <div className="w-2 h-4 bg-cyan-400 rounded-sm"></div> 
              <div className="w-2 h-4 bg-[#6334B9] rounded-sm"></div> 
              
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1 hidden lg:block">
     
        </div>
        
      </div>
    </div>
  ); 
};