import React from 'react';
import { PrerequisiteIcon } from './Utilities';
import type { PrerequisiteItem } from './types';

interface PrerequisiteCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  darkMode: boolean;
}

const PrerequisiteCard: React.FC<PrerequisiteCardProps> = ({ icon, title, content, darkMode }) => {
  return (
    <div
      className={`flex-1 min-w-[320px] p-8 rounded-2xl shadow-md transition duration-300 ${
        darkMode ? 'bg-gray-800 border border-gray-700 hover:shadow-xl' : 'bg-white border border-gray-100 hover:shadow-lg'
      }`}
    >
      <div className="flex items-center space-x-4 mb-5">
        <div className="text-3xl text-[#6334B9]">{icon}</div>
        <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
      </div>
      <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{content}</p>
    </div>
  );
};

interface PrerequisitesTabProps {
  darkMode: boolean;
  data: PrerequisiteItem[];
}

export const PrerequisitesTab: React.FC<PrerequisitesTabProps> = ({ darkMode, data }) => {
  return (
    <div className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="lg:grid lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2">
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Pre-requisites</h2>

          <div className="flex flex-wrap gap-6">
            {data.map((item, index) => (
              <PrerequisiteCard
                key={index}
                icon={<PrerequisiteIcon name={item.icon} />}
                title={item.title}
                content={item.content}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-1 hidden lg:block"></div>
      </div>
    </div>
  );
};
