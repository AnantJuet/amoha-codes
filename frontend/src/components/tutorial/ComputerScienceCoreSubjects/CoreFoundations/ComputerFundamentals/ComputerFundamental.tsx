import React, { useState } from 'react';
// Import Layout
import Layout from '../ComputerFundamentals/Layout.tsx';
 

// Import specific topic components
import Home from '../ComputerFundamentals/Topic/Home.tsx';
import Introduction from './Topic/Introduction.tsx';
import ComputerTypes from './Topic/ComputerTypes.tsx';
import ApplicationsOfComputers from './Topic/ApplicationsOfComputers.tsx';
import Hardware from './Topic/Hardware.tsx';
import Software from './Topic/Software.tsx'
import CPU from './Topic/CPU.tsx';
import Memory from './Topic/Memory.tsx';
import InputDevices from './Topic/InputDevices.tsx';
import OutputDevices from './Topic/OutputDevices.tsx';
import OSIntroduction from './Topic/OSIntroduction.tsx';
import Windows from './Topic/Windows.tsx';
import Linux from './Topic/Linux.tsx';
import iOS from './Topic/iOS.tsx';
import macOS from './Topic/macOS.tsx';
import ChromeOS from './Topic/ChromeOS.tsx';
import WebBrowser from './Topic/WebBrowser.tsx';
import WebServer from './Topic/WebServer.tsx';
import WebProtocols from './Topic/WebProtocols.tsx';
import WebSecurity from './Topic/WebSecurity.tsx';
import Databases from './Topic/Databases.tsx';
import Internet from './Topic/Internet.tsx';
import WiFi from './Topic/WiFi.tsx';
import WordProcessing from './Topic/WordProcessing.tsx';
import Spreadsheets from './Topic/Spreadsheets.tsx';
import Presentations from './Topic/Presentations.tsx';
import EmailClients from './Topic/EmailClients.tsx';
import CollaborationTools from './Topic/CollaborationTools.tsx';
import GeneralShortcuts from './Topic/GeneralShortcuts.tsx';
import FunctionKeys from './Topic/FunctionKeys.tsx';
import WindowsShortcuts from './Topic/WindowsShortcuts.tsx';
import UbuntuShortcuts from './Topic/UbuntuShortcuts.tsx';
import RAMvsROM from './Topic/RAMvsROM.tsx';
import HardDiskvsFloppyDisk from './Topic/HardDiskvsFloppyDisk.tsx';
import CDROMvsMagneticDisks from './Topic/CDROMvsMagneticDisks.tsx';
import OCRvsMICR from './Topic/OCRvsMICR.tsx';
import MagneticvsOpticalDisk from './Topic/MagneticvsOpticalDisk.tsx';
import HDDvsSSD from './Topic/HDDvsSSD.tsx';
import CDvsDVD from './Topic/CDvsDVD.tsx';
import BluRayvsDVD from './Topic/BluRayvsDVD.tsx';
import SoftwarevsUtility from './Topic/SoftwarevsUtility.tsx';
import SoftwarevsOS from './Topic/SoftwarevsOS.tsx';
import SystemvsApplication from './Topic/SystemvsApplication.tsx';
import BarcodevsQR from './Topic/BarcodevsQR.tsx';
import C from './Topic/C.tsx';
import CPP from './Topic/CPP.tsx';
import CSharp from './Topic/CSharp.tsx';
import Java from './Topic/Java.tsx';
import Python from './Topic/Python.tsx';
import JavaScript from './Topic/JavaScript.tsx';
import LogicBuilding from './Topic/LogicBuilding.tsx';
import NetworkIntro from './Topic/NetworkIntro.tsx';
import NetworkTypes from './Topic/NetworkTypes.tsx';
import NetworkTopologies from './Topic/NetworkTopologies.tsx';
import NetworkProtocols from './Topic/NetworkProtocols.tsx';
import NetworkDevices from './Topic/NetworkDevices.tsx';
import ComputerSecurity from './Topic/ComputerSecurity.tsx';
import SecurityImportance from './Topic/SecurityImportance.tsx';
import SecurityThreats from './Topic/SecurityThreats.tsx';
import Malware from './Topic/Malware.tsx';
import NetworkSecurity from './Topic/NetworkSecurity.tsx';
import AccessControl from './Topic/AccessControl.tsx';
import UserAuthentication from './Topic/UserAuthentication.tsx';
import OnlinePrivacy from './Topic/OnlinePrivacy.tsx';
import TechCareers from './Topic/TechCareers.tsx';
import NonTechRoles from './Topic/NonTechRoles.tsx';



// Map topic keys (from SidebarData) to actual components
const topicComponents: { [key: string]: React.FC } = {
  // 1.
  Home: Home,
  Introduction: Introduction,
  // 2.
  ComputerTypes:ComputerTypes,
  ApplicationsOfComputers:ApplicationsOfComputers,
  Hardware:Hardware,
  Software:Software,
  CPU:CPU,
  Memory:Memory,
  InputDevices:InputDevices,
  OutputDevices:OutputDevices,
  // 3.
  OSIntroduction:OSIntroduction,
  Windows:Windows,
  Linux:Linux,
  iOS:iOS,
  macOS:macOS,
  ChromeOS:ChromeOS,
  // 4.
  WebBrowser:WebBrowser,
  WebServer:WebServer,
  WebProtocols:WebProtocols,
  WebSecurity:WebSecurity,
  Databases:Databases,
  Internet:Internet,
  WiFi:WiFi,
  // 5.
  WordProcessing:WordProcessing,
  Spreadsheets:Spreadsheets,
  Presentations:Presentations,
  EmailClients:EmailClients,
  CollaborationTools:CollaborationTools,
  // 6.
  GeneralShortcuts:GeneralShortcuts,
  FunctionKeys:FunctionKeys,
  WindowsShortcuts:WindowsShortcuts,
  UbuntuShortcuts:UbuntuShortcuts,
  // 7.
  RAMvsROM:RAMvsROM,
  HardDiskvsFloppyDisk:HardDiskvsFloppyDisk,
  CDROMvsMagneticDisks:CDROMvsMagneticDisks,
  OCRvsMICR:OCRvsMICR,
  MagneticvsOpticalDisk:MagneticvsOpticalDisk,
  HDDvsSSD:HDDvsSSD,
  CDvsDVD:CDvsDVD,
  BluRayvsDVD:BluRayvsDVD,
  SoftwarevsUtility:SoftwarevsUtility,
  SoftwarevsOS:SoftwarevsOS,
  SystemvsApplication:SystemvsApplication,
  BarcodevsQR:BarcodevsQR,
  // 8.
  C:C,
  CPP:CPP,
  CSharp:CSharp,
  Java:Java,
  Python:Python,
  JavaScript:JavaScript,
  LogicBuilding:LogicBuilding,
  // 9.
  NetworkIntro:NetworkIntro,
  NetworkTypes:NetworkTypes,
  NetworkTopologies:NetworkTopologies,
  NetworkProtocols:NetworkProtocols,
  NetworkDevices:NetworkDevices,
  // 10.
  ComputerSecurity:ComputerSecurity,
  SecurityImportance:SecurityImportance,
  SecurityThreats:SecurityThreats,
  Malware:Malware,
  NetworkSecurity:NetworkSecurity,
  AccessControl:AccessControl,
  UserAuthentication:UserAuthentication,
  OnlinePrivacy:OnlinePrivacy,
  // 11.
  TechCareers:TechCareers,
  NonTechRoles:NonTechRoles,  
};

// const MainApplication: React.FC = () => {
//   // Initialize 'selected' with the first sidebar item's component key
//   const [selectedTopic, setSelectedTopic] = useState<string>(
//     sidebarItems[0]?.component || 'Overview'
//   );

//   const handleSelectTopic = (componentKey: string) => {
//     setSelectedTopic(componentKey);
//   };

//   // Dynamically get the selected Component
//   const CurrentComponent = topicComponents[selectedTopic];

//   return (
//     <div className="MainApplication">
//       <Layout selected={selectedTopic} onSelect={handleSelectTopic}>
//         {CurrentComponent ? (
//           <CurrentComponent />
//         ) : (
//           <div className="text-center p-10 text-xl text-red-500">
//             Topic content not found for "{selectedTopic}".
//           </div>
//         )}
//       </Layout>
//     </div>
//   );
// };

// export default MainApplication;


const ComputerFundamental: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const handleSelectTopic = (key: string) => {
   setSelectedTopic(key);

  };

  const CurrentComponent = topicComponents[selectedTopic] || Home;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default ComputerFundamental;