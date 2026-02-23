// Replaced with the new content for CourseMainPage.tsx

import React, { useState } from 'react';
import { TABS, type TabName } from '../../../data/Course/AIMLData';


import { Hero } from './Hero';
import { FeaturesTab } from './FeaturesTab';
import { SyllabusTab } from './SyllabusTab';
import { FAQsTab } from './FAQsTab';
// Use the updated PrerequisitesSection component
import PrerequisitesSection from './PrerequisitesSection'; 
import { AboutCourseContainer } from './AboutCourseContainer'; 

interface AIMLCourseMainPageProps {
 darkMode: boolean;
}

const  AIMLCourseMainPage: React.FC <AIMLCourseMainPageProps>= ({darkMode}) => { 
  const [activeTab, setActiveTab] = useState<TabName>('Features');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Features':
        return <FeaturesTab darkMode={darkMode} />;
      case 'Syllabus':
        return <SyllabusTab darkMode={darkMode} />; // Pass darkMode
      case 'FAQs':
        return <FAQsTab darkMode={darkMode} />; // Pass darkMode
      case 'Pre-requisites':
        // Renamed PrerequisitesTab to PrerequisitesSection in imports and passed darkMode
        return <PrerequisitesSection darkMode={darkMode} />; 
      default:
        return null;
    }
  };
  
  // Dynamic classes for the main page and sections
  const mainContainerClasses = darkMode ? "bg-gray-900 text-white" : "bg-gray-50 font-sans text-gray-900";
  const tabsContainerClasses = darkMode ? "bg-gray-900 shadow-2xl" : "bg-white shadow-xl";
  const borderClasses = darkMode ? "border-gray-700" : "border-gray-200";
  const activeTabClasses = darkMode ? 'border-[#9E7BB8] text-[#9E7BB8]' : 'border-[#6334B9] text-[#6334B9]';
  const inactiveTabClasses = darkMode ? 'border-transparent text-gray-400 hover:text-gray-200' : 'border-transparent text-gray-500 hover:text-gray-700';


  return (
      <div className={`min-h-screen font-sans ${mainContainerClasses}`}>

 <div className="relative">
  <Hero darkMode={darkMode} />

  {/* Sticky About Section */}
<div className="hidden lg:block fixed top-24 right-20 w-[360px] z-20">
  <AboutCourseContainer darkMode={darkMode} /> {/* Pass darkMode */}
</div>

</div>


      <div className={`-mt-8 relative z-10 ${tabsContainerClasses} rounded-t-3xl`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`border-b ${borderClasses} sticky top-0 z-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="flex overflow-x-auto whitespace-nowrap -mb-px">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-4 sm:px-6 text-base font-medium transition-colors duration-200 focus:outline-none border-b-2
                    ${activeTab === tab
                      ? activeTabClasses
                      : inactiveTabClasses
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="pb-16 pt-8">
            {renderTabContent()}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AIMLCourseMainPage;