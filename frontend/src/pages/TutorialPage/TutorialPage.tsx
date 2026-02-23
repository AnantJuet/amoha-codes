// import MobileDevelopmentPage from '../components/tutorial/MobileDevLanguage'
// import ProgramingLang from '../components/tutorial/Programminglanguage'
// import SystemsProgrammingPage from '../components/tutorial/SystemProgramingPage'
// import WebDevelopmentPage from '../components/tutorial/WebDevLanguage'
// import AIandMLPage from '../components/tutorial/AIandMLPage'
// import GameDevelopmentPage from '../components/tutorial/GameDevelopmentpage'
// import ScriptingLanguagesPage from '../components/tutorial/ScriptingLanguagePage'
// import ComputerSciencePage from '../components/tutorial/ComputerScienceCoreSubjects'
// import SDEPreparationPage from '../components/tutorial/SdePreparationComponent'
// import TutorialSleekNavbar from '../components/tutorial/TutorialSleekNavbar'

// import TutorialComponent from "../components/tutorial/TutorialComponent"

// const TutorialPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-6 md:px-12">
//       <div className="max-w-6xl mx-auto space-y-16">

//         <TutorialComponent/>
        {/* <ComputerSciencePage/> 
        {/* <TutorialSleekNavbar/> */}
         {/* <SDEPreparationPage/>  */}
       {/* <ComputerSciencePage/> */}
       {/* <ProgramingLang /> */}
       {/* <WebDevelopmentPage /> */}
        {/*<MobileDevelopmentPage /> */}
        {/*<SystemsProgrammingPage /> */}
        {/*<AIandMLPage /> */}
        {/*<GameDevelopmentPage /> */}
        {/*<ScriptingLanguagesPage /> */}
//       </div>
//     </div>
//   )
// }

// export default TutorialPage



import React from "react";
import TutorialComponent from "../../components/tutorial/TutorialMainPageCards/TutorialComponent";

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
        
        <TutorialComponent darkMode={darkMode} />
      </div>
    </div>
  );
};

export default TutorialPage;
