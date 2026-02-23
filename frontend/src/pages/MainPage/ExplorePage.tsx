
import React from "react";
// import TutorialComponent from "../components/tutorial/TutorialComponent";
import ExploreAllComponent from "../../components/Course/ExploreAllComponent";

interface TutorialPageProps {
  darkMode: boolean;
}

const TutorialPage: React.FC<TutorialPageProps> = ({ darkMode }) => {
  return (
    <div
      className={`min-h-screen pt-24 pb-16 px-6 md:px-12 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* <TutorialComponent darkMode={darkMode} /> */}
        <ExploreAllComponent darkMode={darkMode} />
      </div>
    </div>
  );
};

export default TutorialPage;
