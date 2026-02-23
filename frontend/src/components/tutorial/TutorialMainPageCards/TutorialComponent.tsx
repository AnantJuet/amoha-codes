// import React from 'react'
// import TutorialPageComponent from "./TutorialPageComponent"

// interface TutorialComponentProps {
//   darkMode: boolean;
// }


// const TutorialComponent: React.FC<TutorialComponentProps> = ({ darkMode }) => {
//   return (
//     <div
//       className={`min-h-screen pt-24 pb-16 px-6 md:px-12 transition-colors duration-500 ${
//         darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto space-y-16">
//         <TutorialPageComponent darkMode={darkMode}/>
//       </div>
      
//     </div>
//   )
// }

// export default TutorialComponent


import React from "react";
import TutorialPageComponent from "./TutorialPageComponent";

interface TutorialComponentProps {
  darkMode: boolean;
}

const TutorialComponent: React.FC<TutorialComponentProps> = ({ darkMode }) => {
  return (
    <div
      className={`min-h-screen pt-24 pb-16 px-6 md:px-12 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ✅ Pass darkMode prop safely */}
        <TutorialPageComponent darkMode={darkMode} />
      </div>
    </div>
  );
};

export default TutorialComponent;
