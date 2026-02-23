
import React from "react";
import { type TopicContent } from "../../../../components/tutorial/ProgrammingLanguage/PythonTheory/pythonData";

interface MainContentProps {
  topic?: TopicContent;
  darkMode?: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ topic, darkMode }) => {
  if (!topic)
    return (
      <div className="p-6 text-gray-500 dark:text-gray-400 ">
        Select a topic from the sidebar.
      </div>
    );

  return (
    <div
      className={`flex-1 p-8 overflow-y-auto  mt-20 scrollbar-hide text-gray-900 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <h1
        className={`text-3xl font-bold text-[#6334B9] ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
      >
        {topic.title}
      </h1>
       {topic.subtitle && (
      <p
        className={`text-3xl font-bold text-[#6334B9] ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
      >
        {topic.subtitle}
      </p>
       )}
      <div className={`prose max-w-none dark:prose-invert ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>{topic.content}</div>
    </div>
  );
};

export default MainContent;


