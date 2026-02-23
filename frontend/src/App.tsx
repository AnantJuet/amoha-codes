

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/MainPageComponents/Navbar";
import Footer from "./components/MainPageComponents/Footer";
// import Home from "./pages/Homepage";
// import About from "./components/About";
import PracticePage from "./pages/PracticePage/MainPracticePage";
import Courses from "./components/MainPageComponents/Courses";
import Careers from "./components/MainPageComponents/Careers";
import Contact from "./components/MainPageComponents/ContactUs";
import BusinessPartners from "./components/MainPageComponents/BusinessPartner";
// import { LaunchingSoon } from "./components/LaunchingSoon.tsx";

// Individual practice section pages
// import DSAProblems from "./pages/ServiceBasedPatternDSA";//ye change kiya commit ke time changes
import ServiceBasedDSA from "./pages/PracticePage/ServiceBasedDSA";
import Blind75 from "./pages/PracticePage/Blind75.tsx";
import AllInOneDSA from "./pages/PracticePage/ALLINONEDSA";
import Algorithm from "./pages/PracticePage/Algorithm";
import ServiceBasedPatternDSA from "./pages/PracticePage/ServiceBasedPatternDSA";
import NumbersProblems from "./pages/PracticePage/NumbersProblems";
import ProgrammingLang from "./pages/PracticePage/ProgrammingLang.tsx";
import CP from "./pages/PracticePage/CP.tsx";

import Homepage from "./pages/MainPage/Homepage";
import Practice from "./pages/PracticePage/Practice";
import CppTutorial from "./components/tutorial/ProgrammingLanguage/CPPTheory/CppTutorial.tsx";


// IMPORT TUTORIAL SECTION PAGE
// import SdePreparationPage from "./components/tutorial/Exxxtraaaaacode.tsx";
// import SdePreparationPage from "./pages/SdePreparationPage.tsx";
import TutorialPage from "./pages/TutorialPage/TutorialPage.tsx";
// AngerManagementPage

import SdePreparationComponent from "./components/tutorial/TutorialMainPageCards/SdePreparationComponent.tsx";
import ComputerScienceCoreSubjects from "./components/tutorial/TutorialMainPageCards/ComputerScienceCoreSubjects.tsx"
import Programminglanguage from "./components/tutorial/TutorialMainPageCards/Programminglanguage.tsx";
import WebDevLanguage from "./components/tutorial/TutorialMainPageCards/WebDevLanguage.tsx";
import MobileDevLanguage from "./components/tutorial/TutorialMainPageCards/MobileDevLanguage.tsx";
import SystemProgrammingPage from "./components/tutorial/TutorialMainPageCards/SystemProgrammingPage.tsx";
import DatabaseLanguagePage from "./components/tutorial/TutorialMainPageCards/DatabaseLanguagePage.tsx";
import GameDevelopmentpage from "./components/tutorial/TutorialMainPageCards/GameDevelopmentpage.tsx";
import ScriptingLanguagePage from "./components/tutorial/TutorialMainPageCards/ScriptingLanguagePage.tsx";

import Exxxtraaaaacode from "./components/tutorial/TutorialMainPageCards/Exxxtraaaaacode.tsx";
import { LaunchingSoon } from "./components/MainPageComponents/LaunchingSoon.tsx";
import TrendingTechnologies from "./components/tutorial/TutorialMainPageCards/TrendingTechnologies.tsx";
import W3School from "./components/tutorial/TutorialMainPageCards/W3School.tsx";

// Course Page Import
import FullStackCourseMainPage from "./components/Course/FullStack Course/FullStackCourseMainPage.tsx";
import AIMLCourseMainPage from "./components/Course/AI&ML Mastery/AIMLCourseMainPage.tsx";
import CSSCourseMainPage from "./components/Course/CSSCourse/CSSCourseMainPage.tsx";
import DataEngineeringCourseMainPage from "./components/Course/DataEngineeringCourse/DataEngineeringCourseMainPage.tsx";
import AlgorithmCourseMainPage from "./components/Course/DSA algorithmCourse/AlgorithmCourseMainPage.tsx";
// import AtoZCourseMainPage from "./components/Course/DSA AtoZCourse copy/AtoZCourseMainPage.tsx"; // Removed: folder deleted
import NextjsCourseMainPage from "./components/Course/FrontendwithNext.js/NextjsCourseMainPage.tsx";
import ReactCourseMainPage from "./components/Course/FrontendwithReact/ReactCourseMainPage.tsx";
import HTMLCourseMainPage from "./components/Course/HTMLProgramming/HTMLCourseMainPage.tsx";
import JavaCourseMainPage from "./components/Course/JavaCourse.tsx/JavaCourseMainPage.tsx";
import JavascriptCourseMainPage from "./components/Course/JavascriptCourse/JavascriptCourseMainPage.tsx";
import MERNCourseMainPage from "./components/Course/MERNStack Development/MERNCourseMainPage.tsx";
import PythonCourseMainPage from "./components/Course/PythonCourse/PythonCourseMainPage.tsx";
import TypescriptCourseMainPage from "./components/Course/TypescriptCourse/TypescriptCourseMainPage.tsx";
import CourseMainPage from "./components/Course/C++Course/CourseMainPage.tsx";
import ExploreAllComponent from "./components/Course/ExploreAllComponent.tsx";

// import MathsCS from "./components/tutorial/ComputerScienceCoreSubject/CoreFoundations/MathsForComputerScience/MathsCS";
// import NetworksTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/ComputerNetworks/NetworksTutorial.tsx";
// import OperatingSystemsTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/OperatingSystems/OperatingSystemsTutorial.tsx";
// import OrganizationTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/ComputerOrganization/OrganizationTutorial.tsx";
// import ComputationTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/Theory Of Computation/ComputationTutorial.tsx";
// import CompilerTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/Compiler Design/CompilerTutorial.tsx";
// import DistributedTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/Distributed Systems/DistributedTutorial.tsx";
// import LinuxTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/Linux Tutorial/LinuxTutorial.tsx";
// import CyberSecurityTutorial from "./components/ComputerScienceCoreSubject/Systems&Networking/CyberSecurity Tutorial/CyberSecurityTutorial.tsx";
// import DbmsTutorial from "./components/ComputerScienceCoreSubject/Data&Databases/Database Management System(DBMS)/DbmsTutorial.tsx";
// import WarehousingTutorial from "./components/ComputerScienceCoreSubject/Data&Databases/Data Warehousing/WarehousingTutorial.tsx";
import GO from "./components/tutorial/ProgrammingLanguage/GO/GO.tsx";
import Kotlin from "./components/tutorial/ProgrammingLanguage/Kotlin/Kotlin.tsx";
import Swift from "./components/tutorial/ProgrammingLanguage/Swift/Swift.tsx";
import ComputerFundamental from "./components/tutorial/ComputerScienceCoreSubjects/CoreFoundations/ComputerFundamentals/ComputerFundamental.tsx";
import EngMath from "./components/tutorial/ComputerScienceCoreSubjects/CoreFoundations/EngineeringMathematics/EngMath.tsx";
import MathCS from "./components/tutorial/ComputerScienceCoreSubjects/CoreFoundations/MathForComputerScience/MathCS.tsx";
import JSTutorial from "./components/tutorial/ProgrammingLanguage/JSTheory/JSTutorial.tsx";
import TypescriptTutorial from "./components/tutorial/ProgrammingLanguage/TypescriptTheory/TypescriptTutorial.tsx";
import Csharp from "./components/tutorial/ProgrammingLanguage/Csharp/Csharp.tsx";
import JavaTutorial from "./components/tutorial/ProgrammingLanguage/JavaTheory/JavaTutorial.tsx";
import PythonTutorial from "./components/tutorial/ProgrammingLanguage/PythonTheory/pythonTutorial.tsx";
import CTutorial from "./components/tutorial/ProgrammingLanguage/C/C.tsx";
import RustTutorial from "./components/tutorial/ProgrammingLanguage/Rust/Rust.tsx";
import RubyTutorial from "./components/tutorial/ProgrammingLanguage/Ruby/Ruby.tsx";
import DartTutorial from "./components/tutorial/ProgrammingLanguage/Dart/Dart.tsx";
import OperatingSystemsTutorial from "./components/tutorial/ComputerScienceCoreSubjects/SystemsNetworking/OperatingSystems/OperatingSystemsTutorial.tsx";
import OrganizationTutorial from "./components/tutorial/ComputerScienceCoreSubjects/SystemsNetworking/ComputerOrganization/OrganizationTutorial.tsx";
import NetworksTutorial from "./components/tutorial/ComputerScienceCoreSubjects/SystemsNetworking/ComputerNetworks/NetworksTutorial.tsx";
import ComputationTutorial from "./components/tutorial/ComputerScienceCoreSubjects/SystemsNetworking/TheoryOfComputation/ComputationTutorial.tsx";
import CompilerTutorial from "./components/tutorial/ComputerScienceCoreSubjects/SystemsNetworking/CompilerDesign/CompilerTutorial.tsx";
import DistributedTutorial from "./components/tutorial/ComputerScienceCoreSubjects/SystemsNetworking/DistributedSystems/DistributedTutorial.tsx";
import LinuxTutorial from "./components/tutorial/ComputerScienceCoreSubjects/SystemsNetworking/LinuxTutorial/LinuxTutorial.tsx";
import CyberSecurityTutorial from "./components/tutorial/ComputerScienceCoreSubjects/SystemsNetworking/CyberSecurity/CyberSecurityTutorial.tsx";
import DbmsTutorial from "./components/tutorial/ComputerScienceCoreSubjects/DataDatabases/DBMS/DbmsTutorial.tsx";
import WarehousingTutorial from "./components/tutorial/ComputerScienceCoreSubjects/DataDatabases/DataWarehousing/WarehousingTutorial.tsx";

// SDE Tutorials
import SystemDesignTutorial from "./components/tutorial/SDE/SystemDesign/SystemDesignTutorial.tsx";
import DataStructuresTutorial from "./components/tutorial/SDE/DataStructures/DataStructuresTutorial.tsx";
import AlgorithmsTutorial from "./components/tutorial/SDE/Algorithms/AlgorithmsTutorial.tsx";

// Database Languages
import SqlTutorial from "./components/tutorial/DatabaseLanguages/SQL/SqlTutorial.tsx";
import PlsqlTutorial from "./components/tutorial/DatabaseLanguages/PLSQL/PlsqlTutorial.tsx";
import TsqlTutorial from "./components/tutorial/DatabaseLanguages/TSQL/TsqlTutorial.tsx";
import NoSQLTutorial from "./components/tutorial/DatabaseLanguages/NoSQLTheory/NoSQLTutorial.tsx";
import GraphQLTutorial from "./components/tutorial/DatabaseLanguages/GraphQLTheory/GraphQLTutorial.tsx";
import MongoDBTutorial from "./components/tutorial/DatabaseLanguages/MongoDB/MongoDBTutorial.tsx";

// Systems Programming
import AssemblyTutorial from "./components/tutorial/SystemsProgramming/AssemblyLanguage/AssemblyTutorial.tsx";
import AdaTutorial from "./components/tutorial/SystemsProgramming/AdaProgramming/AdaTutorial.tsx";
import ZigTutorial from "./components/tutorial/SystemsProgramming/ZigProgramming/ZigTutorial.tsx";
import DLanguageTutorial from "./components/tutorial/SystemsProgramming/DLanguage/DLanguageTutorial.tsx";

// Scripting Languages
import BashTutorial from "./components/tutorial/ScriptingLanguages/BashScripting/BashTutorial.tsx";
import PowerShellTutorial from "./components/tutorial/ScriptingLanguages/PowerShell/PowerShellTutorial.tsx";
import LuaTutorial from "./components/tutorial/ScriptingLanguages/LuaScripting/LuaTutorial.tsx";
import GroovyTutorial from "./components/tutorial/ScriptingLanguages/GroovyScripting/GroovyTutorial.tsx";
import PerlTutorial from "./components/tutorial/ScriptingLanguages/PerlScripting/PerlTutorial.tsx";

// Trending Tech
import CloudComputingTutorial from "./components/tutorial/TrendingTech/CloudComputing/CloudComputingTutorial.tsx";
import AWSTutorial from "./components/tutorial/TrendingTech/AWS/AWSTutorial.tsx";
import AzureTutorial from "./components/tutorial/TrendingTech/Azure/AzureTutorial.tsx";
import GitTutorial from "./components/tutorial/TrendingTech/Git/GitTutorial.tsx";
import DockerTutorial from "./components/tutorial/TrendingTech/Docker/DockerTutorial.tsx";
import KubernetesTutorial from "./components/tutorial/TrendingTech/Kubernetes/KubernetesTutorial.tsx";
import EthicalHackingTutorial from "./components/tutorial/TrendingTech/EthicalHacking/EthicalHackingTutorial.tsx";
import SpringBootTutorial from "./components/tutorial/TrendingTech/SpringBoot/SpringBootTutorial.tsx";
import SDLCTutorial from "./components/tutorial/TrendingTech/SDLC/SDLCTutorial.tsx";
import UnixTutorial from "./components/tutorial/TrendingTech/Unix/UnixTutorial.tsx";

// Web Development
import WebAssemblyTutorial from "./components/tutorial/WebDevelopment/WebAssembly/WebAssemblyTutorial.tsx";
import AspNetTutorial from "./components/tutorial/WebDevelopment/AspNet/AspNetTutorial.tsx";
import ColdFusionTutorial from "./components/tutorial/WebDevelopment/ColdFusion/ColdFusionTutorial.tsx";

// Game Development
import GDScriptTutorial from "./components/tutorial/GameDevelopment/GDScriptTutorial/GDScriptTutorial.tsx";

// PHP Tutorial
import PhpTutorial from "./components/tutorial/WebDevelopmentLanguage/PHPTheory/PhpTutorial";

// HTML and CSS Tutorials
import HTMLTutorial from "./components/tutorial/WebDevelopmentLanguage/HTMLTheory/HTMLTutorial";
import CSSTutorial from "./components/tutorial/WebDevelopmentLanguage/CSSTheory/CSSTutorial";

// Profile Page (for backend connectivity)
import Profile from "./components/MainPageComponents/Profile.tsx";

//import
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark class to root element for Tailwind dark: variants
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Homepage darkMode={darkMode} />} />
        <Route path="/tutorial" element={<TutorialPage darkMode={darkMode} />} />


        <Route path="/practice" element={<PracticePage darkMode={darkMode} />} />
        <Route path="/courses" element={<Courses darkMode={darkMode} />} />
        <Route path="/careers" element={<Careers darkMode={darkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        <Route path="/businesspartner" element={<BusinessPartners darkMode={darkMode} />} />
        <Route path="/launchingsoon" element={<LaunchingSoon darkMode={darkMode} />} />
        <Route path="/profile" element={<Profile darkMode={darkMode} />} />

        {/* Individual practice section pages */}
        <Route path="/practice/practice" element={<Practice darkMode={darkMode} />} />
        <Route path="/practice/service-based-dsa" element={<ServiceBasedDSA darkMode={darkMode} />} />
        <Route path="/practice/blind-75" element={<Blind75 darkMode={darkMode} />} />
        <Route path="/practice/all-in-one-dsa" element={<AllInOneDSA darkMode={darkMode} />} />
        <Route path="/practice/algorithm" element={<Algorithm darkMode={darkMode} />} />
        <Route path="/practice/service-based-pattern-dsa" element={<ServiceBasedPatternDSA darkMode={darkMode} />} />
        <Route path="/practice/NumbersProblems" element={<NumbersProblems darkMode={darkMode} />} />
        <Route path="/practice/ProgrammingLang" element={<ProgrammingLang darkMode={darkMode} />} />
        <Route path="/practice/CP" element={<CP darkMode={darkMode} />} />
        {/* Removed duplicate: CppTutorial is accessible at /CppTutorial */}

        {/* <Route path="/softskill" element={<AngerManagementPage />} /> */}

        {/* Tutorial page Routing  */}
        <Route path="/tutorial/sde-preparation" element={<SdePreparationComponent darkMode={darkMode} />} />
        <Route path="/tutorial/ComputerScienceCoreSubjects" element={<ComputerScienceCoreSubjects darkMode={darkMode} />} />
        <Route path="/tutorial/Programminglanguage" element={<Programminglanguage darkMode={darkMode} />} />
        <Route path="/tutorial/WebDevLanguage" element={<WebDevLanguage darkMode={darkMode} />} />
        <Route path="/tutorial/MobileDevLanguage" element={<MobileDevLanguage darkMode={darkMode} />} />
        <Route path="/tutorial/SystemProgrammingPage" element={<SystemProgrammingPage darkMode={darkMode} />} />
        <Route path="/tutorial/DatabaseLanguagePage" element={<DatabaseLanguagePage darkMode={darkMode} />} />
        <Route path="/tutorial/GameDevelopmentpage" element={<GameDevelopmentpage darkMode={darkMode} />} />
        <Route path="/tutorial/ScriptingLanguagePage" element={<ScriptingLanguagePage darkMode={darkMode} />} />
        <Route path="/tutorial/TrendingTechnologies" element={<TrendingTechnologies darkMode={darkMode} />} />

        <Route path="/tutorial/Exxxtraaaaacode" element={<Exxxtraaaaacode darkMode={darkMode} />} />
        <Route path="/tutorial/W3School" element={<W3School />} />




        {/* Computer Science */}
        <Route path="/ComputerFundamentals" element={<ComputerFundamental darkMode={darkMode} />} />
        <Route path="/EngMath" element={<EngMath darkMode={darkMode} />} />
        <Route path="/MathCS" element={<MathCS darkMode={darkMode} />} />
        <Route path="/JSTutorial" element={<JSTutorial darkMode={darkMode} />} />
        <Route path="/TypescriptTutorial" element={<TypescriptTutorial darkMode={darkMode} />} />
        <Route path="/Csharp" element={<Csharp darkMode={darkMode} />} />
        <Route path="/Go" element={<GO darkMode={darkMode} />} />
        <Route path="/Kotlin" element={<Kotlin darkMode={darkMode} />} />
        <Route path="/Swift" element={<Swift darkMode={darkMode} />} />
        <Route path="/CppTutorial" element={<CppTutorial darkMode={darkMode} />} />
        <Route path="/JavaTutorial" element={<JavaTutorial darkMode={darkMode} />} />
        <Route path="/pythonTutorial" element={<PythonTutorial darkMode={darkMode} />} />
        <Route path="/CTutorial/*" element={<CTutorial darkMode={darkMode} />} />
        <Route path="/RustTutorial/*" element={<RustTutorial darkMode={darkMode} />} />
        <Route path="/RubyTutorial/*" element={<RubyTutorial darkMode={darkMode} />} />
        <Route path="/DartTutorial/*" element={<DartTutorial darkMode={darkMode} />} />
        <Route path="/OperatingSystemsTutorial/*" element={<OperatingSystemsTutorial darkMode={darkMode} />} />
        <Route path="/OrganizationTutorial/*" element={<OrganizationTutorial darkMode={darkMode} />} />
        <Route path="/NetworksTutorial/*" element={<NetworksTutorial darkMode={darkMode} />} />
        <Route path="/ComputationTutorial/*" element={<ComputationTutorial darkMode={darkMode} />} />
        <Route path="/CompilerTutorial/*" element={<CompilerTutorial darkMode={darkMode} />} />
        <Route path="/DistributedTutorial/*" element={<DistributedTutorial darkMode={darkMode} />} />
        <Route path="/LinuxTutorial/*" element={<LinuxTutorial darkMode={darkMode} />} />
        <Route path="/CyberSecurityTutorial/*" element={<CyberSecurityTutorial darkMode={darkMode} />} />
        <Route path="/DbmsTutorial/*" element={<DbmsTutorial darkMode={darkMode} />} />
        <Route path="/WarehousingTutorial/*" element={<WarehousingTutorial darkMode={darkMode} />} />

        {/* SDE Tutorials */}
        <Route path="/SystemDesignTutorial/*" element={<SystemDesignTutorial darkMode={darkMode} />} />
        <Route path="/DataStructuresTutorial/*" element={<DataStructuresTutorial darkMode={darkMode} />} />
        <Route path="/AlgorithmsTutorial/*" element={<AlgorithmsTutorial darkMode={darkMode} />} />

        {/* Course Page */}
        <Route path="/FullStackCourse" element={<FullStackCourseMainPage darkMode={darkMode} />} />
        <Route path="/AIMLCourse" element={<AIMLCourseMainPage darkMode={darkMode} />} />
        <Route path="/CSSCourse" element={<CSSCourseMainPage darkMode={darkMode} />} />
        <Route path="/DataEngineeringCourse" element={<DataEngineeringCourseMainPage darkMode={darkMode} />} />
        <Route path="/DSACourse" element={<AlgorithmCourseMainPage darkMode={darkMode} />} />
        {/* <Route path="/AtoZCourse" element={<AtoZCourseMainPage darkMode={darkMode} />} /> */} {/* Removed: folder deleted */}
        <Route path="/NextjsCourse" element={<NextjsCourseMainPage darkMode={darkMode} />} />
        <Route path="/ReactCourse" element={<ReactCourseMainPage darkMode={darkMode} />} />
        <Route path="/HTMLCourse" element={<HTMLCourseMainPage darkMode={darkMode} />} />
        <Route path="/JavaCourse" element={<JavaCourseMainPage darkMode={darkMode} />} />
        <Route path="/JavascriptCourse" element={<JavascriptCourseMainPage darkMode={darkMode} />} />
        <Route path="/MernstackCourse" element={<MERNCourseMainPage darkMode={darkMode} />} />
        <Route path="/pythonCourse" element={<PythonCourseMainPage darkMode={darkMode} />} />
        <Route path="/typescriptCourse" element={<TypescriptCourseMainPage darkMode={darkMode} />} />
        <Route path="/courseMain" element={<CourseMainPage darkMode={darkMode} />} />
        <Route path="/courses/ExploreAllComponent" element={<ExploreAllComponent darkMode={darkMode} />} />




        {/* <Route path="/cs-core" element={<CourseDetailPage />} />
        <Route path="/systems-networking" element={<CourseDetailPage />} />
        <Route path="/data-databases" element={<CourseDetailPage />} />
        <Route path="/data-science" element={<CourseDetailPage />} />
        <Route path="/programming-development" element={<CourseDetailPage />} />
        <Route path="/programming-languages" element={<CourseDetailPage />} />
        <Route path="/web-development" element={<CourseDetailPage />} />
        <Route path="/mobile-development" element={<CourseDetailPage />} />
        <Route path="/systems-programming" element={<CourseDetailPage />} />
        <Route path="/ai-research" element={<CourseDetailPage />} />
        <Route path="/game-development" element={<CourseDetailPage />} />
        <Route path="/scripting-automation" element={<CourseDetailPage />} /> */}

        {/* Database Languages */}
        <Route path="/SqlTutorial/*" element={<SqlTutorial darkMode={darkMode} />} />
        <Route path="/PlsqlTutorial/*" element={<PlsqlTutorial darkMode={darkMode} />} />
        <Route path="/TsqlTutorial/*" element={<TsqlTutorial darkMode={darkMode} />} />
        <Route path="/NoSQLTutorial/*" element={<NoSQLTutorial darkMode={darkMode} />} />
        <Route path="/GraphQLTutorial/*" element={<GraphQLTutorial darkMode={darkMode} />} />
        <Route path="/MongoDBTutorial/*" element={<MongoDBTutorial darkMode={darkMode} />} />

        {/* Systems Programming */}
        <Route path="/AssemblyTutorial/*" element={<AssemblyTutorial darkMode={darkMode} />} />
        <Route path="/AdaTutorial/*" element={<AdaTutorial darkMode={darkMode} />} />
        <Route path="/ZigTutorial/*" element={<ZigTutorial darkMode={darkMode} />} />
        <Route path="/DLanguageTutorial/*" element={<DLanguageTutorial darkMode={darkMode} />} />

        {/* Scripting Languages */}
        <Route path="/BashTutorial/*" element={<BashTutorial darkMode={darkMode} />} />
        <Route path="/PowerShellTutorial/*" element={<PowerShellTutorial darkMode={darkMode} />} />
        <Route path="/LuaTutorial/*" element={<LuaTutorial darkMode={darkMode} />} />
        <Route path="/GroovyTutorial/*" element={<GroovyTutorial darkMode={darkMode} />} />
        <Route path="/PerlTutorial/*" element={<PerlTutorial darkMode={darkMode} />} />

        {/* Trending Tech */}
        <Route path="/CloudComputingTutorial/*" element={<CloudComputingTutorial darkMode={darkMode} />} />
        <Route path="/AWSTutorial/*" element={<AWSTutorial darkMode={darkMode} />} />
        <Route path="/AzureTutorial/*" element={<AzureTutorial darkMode={darkMode} />} />
        <Route path="/GitTutorial/*" element={<GitTutorial darkMode={darkMode} />} />
        <Route path="/DockerTutorial/*" element={<DockerTutorial darkMode={darkMode} />} />
        <Route path="/KubernetesTutorial/*" element={<KubernetesTutorial darkMode={darkMode} />} />
        <Route path="/EthicalHackingTutorial/*" element={<EthicalHackingTutorial darkMode={darkMode} />} />
        <Route path="/SpringBootTutorial/*" element={<SpringBootTutorial darkMode={darkMode} />} />
        <Route path="/SDLCTutorial/*" element={<SDLCTutorial darkMode={darkMode} />} />
        <Route path="/UnixTutorial/*" element={<UnixTutorial darkMode={darkMode} />} />

        {/* Web Development */}
        <Route path="/WebAssemblyTutorial/*" element={<WebAssemblyTutorial darkMode={darkMode} />} />
        <Route path="/AspNetTutorial/*" element={<AspNetTutorial darkMode={darkMode} />} />
        <Route path="/ColdFusionTutorial/*" element={<ColdFusionTutorial darkMode={darkMode} />} />
        <Route path="/Php/*" element={<PhpTutorial darkMode={darkMode} />} />
        <Route path="/Html" element={<HTMLTutorial darkMode={darkMode} />} />
        <Route path="/CSS" element={<CSSTutorial darkMode={darkMode} />} />

        {/* Game Development */}
        <Route path="/GDScriptTutorial/*" element={<GDScriptTutorial darkMode={darkMode} />} />

      </Routes>

      <Footer darkMode={darkMode} />
    </Router>
  );
};

export default App;
