import React, { useState } from 'react';
import { Hero } from './Hero';
import { AboutCourse } from './AboutCourse';
import { FeaturesTab } from './FeaturesTab';
import { SyllabusTab } from './SyllabusTab';
import { FAQsTab } from './FAQsTab';
import { PrerequisitesTab } from './PrerequisitesTab';
import type { CourseData, TabName } from './types';

interface CourseLayoutProps {
  darkMode: boolean;
  courseData: CourseData;
}

export const CourseLayout: React.FC<CourseLayoutProps> = ({ darkMode, courseData }) => {
  const [activeTab, setActiveTab] = useState<TabName>('Features');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Features':
        return <FeaturesTab darkMode={darkMode} data={courseData.features} />;
      case 'Syllabus':
        return <SyllabusTab darkMode={darkMode} data={courseData.syllabus} />;
      case 'FAQs':
        return <FAQsTab darkMode={darkMode} data={courseData.faqs} />;
      case 'Pre-requisites':
        return <PrerequisitesTab darkMode={darkMode} data={courseData.prerequisites} />;
      default:
        return null;
    }
  };

  const mainContainerClasses = darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 font-sans text-gray-900';
  const tabsContainerClasses = darkMode ? 'bg-gray-900 shadow-2xl' : 'bg-white shadow-xl';
  const borderClasses = darkMode ? 'border-gray-700' : 'border-gray-200';
  const activeTabClasses = darkMode ? 'border-[#9E7BB8] text-[#9E7BB8]' : 'border-[#6334B9] text-[#6334B9]';
  const inactiveTabClasses = darkMode
    ? 'border-transparent text-gray-400 hover:text-gray-200'
    : 'border-transparent text-gray-500 hover:text-gray-700';

  return (
    <div className={`min-h-screen font-sans ${mainContainerClasses}`}>
      <div className="relative">
        <Hero darkMode={darkMode} data={courseData.hero} />

        <div className="hidden lg:block fixed top-24 right-20 w-[360px] z-20">
          <AboutCourse darkMode={darkMode} data={courseData.about} />
        </div>
      </div>

      <div className={`-mt-8 relative z-10 ${tabsContainerClasses} rounded-t-3xl`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`border-b ${borderClasses} sticky top-0 z-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="flex overflow-x-auto whitespace-nowrap -mb-px">
              {courseData.tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-4 sm:px-6 text-base font-medium transition-colors duration-200 focus:outline-none border-b-2
                    ${activeTab === tab ? activeTabClasses : inactiveTabClasses}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="pb-16 pt-8">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};
