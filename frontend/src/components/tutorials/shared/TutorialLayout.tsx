import React from 'react';

interface TutorialLayoutProps {
  darkMode?: boolean;
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export const TutorialLayout: React.FC<TutorialLayoutProps> = ({
  darkMode = false,
  title,
  lastUpdated,
  children,
}) => {
  const containerClasses = darkMode
    ? 'bg-gray-900 text-white'
    : 'bg-white text-gray-900';

  const borderClasses = darkMode
    ? 'border-gray-700'
    : 'border-gray-200';

  return (
    <div className={`p-8 space-y-8 rounded-xl shadow-lg mt-20 ${containerClasses}`}>
      <h1 className={`text-4xl font-extrabold border-b-2 pb-2 ${borderClasses}`}>
        {title}
      </h1>
      {lastUpdated && (
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Last Updated: {lastUpdated}
        </p>
      )}
      {children}
    </div>
  );
};
