// Replaced with the new content for SyllabusTab.tsx

import React, { useState } from 'react';
// [SYLLABUS_DATA and ChevronDown are omitted for brevity, assume they are present]
import { ChevronDown } from './Utilities'; 
import { SYLLABUS_DATA } from '../../../data/Course/FullStackData';


interface SyllabusTabProps {
    darkMode: boolean; // Added darkMode prop
}

export const SyllabusTab: React.FC<SyllabusTabProps> = ({ darkMode }) => {

  const [openModule, setOpenModule] = useState<number>(0); 

  const handleToggle = (index: number) => {
    setOpenModule(openModule === index ? -1 : index);
  };

  const handleExpandCollapseAll = () => {
    setOpenModule(openModule === -1 ? 0 : -1); 
  };
  
  // Dynamic classes
  const textClasses = darkMode ? 'text-white' : 'text-gray-800';
  const buttonColorClasses = darkMode ? 'text-[#9E7BB8] hover:text-[#9E7BB8]' : 'text-[#6334B9] hover:text-[#6334B9]';
  
  const moduleContainerClasses = darkMode ? 'border-gray-700 bg-gray-800 shadow-xl' : 'border-gray-200 bg-white shadow-md';
  
  const inactiveButtonClasses = darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-50';
  const activeChevronClasses = darkMode ? 'text-white rotate-180' : 'text-gray-400';
  
  const subtopicClasses = darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700';


  return (
    <div className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      

      <div className="lg:grid lg:grid-cols-3 lg:gap-10">
        
        <div className="lg:col-span-2">
          
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-2xl font-bold ${textClasses}`}>Syllabus</h2>
            <button
              onClick={handleExpandCollapseAll} 
              className={`font-medium text-sm transition ${buttonColorClasses}`}
            >
              {openModule === -1 ? 'Expand All' : 'Collapse All'}
              <ChevronDown 
                className={`w-4 h-4 inline-block ml-1 align-sub transition-transform duration-300 ${
                  openModule !== -1 ? 'rotate-180' : ''
                } ${buttonColorClasses}`} 
              />
            </button>
          </div>

          <div className="space-y-4">
            {SYLLABUS_DATA.map((module, index) => (
              <div key={index} className={`border rounded-xl overflow-hidden ${moduleContainerClasses}`}>
                <button
                  onClick={() => handleToggle(index)}
                  // Active/Open module styling
                  className={`flex justify-between items-center w-full p-4 sm:p-6 text-left font-bold transition-colors duration-200 ${
                    openModule === index
                      ? 'bg-[#6334B9] text-white' 
                      : inactiveButtonClasses
                  }`}
                >
                  <span>{module.title}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openModule === index ? activeChevronClasses : 'text-gray-400'
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openModule === index ? 'max-h-[1000px] p-4 sm:p-6' : 'max-h-0'
                  }`}
                >
                  <div className="flex flex-wrap gap-2 pt-2">
                    {module.subtopics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className={`px-3 py-1 text-sm font-medium rounded-full whitespace-nowrap ${subtopicClasses}`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
    
        <div className="lg:col-span-1 hidden lg:block">
          
        </div>
        
      </div>
    </div>
  );
};