// // src/App.tsx

// import React, { useState, useMemo } from 'react';
// // Corrected import paths
// import { CppSidebar } from '../components/tutorial/CPPTheory/Sidebar';
// import { ContentArea } from '../components/tutorial/CPPTheory/MainContent';
// import {
//   tutorialData,
//   tutorialContent,
//   flattenData,
//   SidebarItem,
// } from '../data/tutorial/ Cpp/CppData';

// const fallbackContent = {
//   title: "Content Not Found",
//   subtitle: "Please select a topic from the sidebar.",
//   content: <p className="text-red-500">The content for this URL could not be loaded.</p>
// };

// const App: React.FC = () => {
//   // 1. Flatten the data first
//   const flatTutorialData: SidebarItem[] = useMemo(() => flattenData(tutorialData), []);

//   // 2. Determine Initial Topic (FIXED: Starts with the 1st item for reliability)
//   const initialTopic = flatTutorialData[0]?.href || "cpp_home.asp";
//   const [activeTopicHref, setActiveTopicHref] = useState<string>(initialTopic);

//   // 3. Dark Mode State
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const handleDarkModeToggle = () => {
//     setIsDarkMode(prev => !prev);
//   };

//   // 4. Mobile Menu State for Responsiveness
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const handleMobileToggle = () => {
//       setIsMobileOpen(prev => !prev);
//   };
//   
//   const handleTopicClick = (href: string) => {
//     setActiveTopicHref(href);
//     // Auto-close sidebar on mobile after selection
//     setIsMobileOpen(false); 
//     
//     const mainContent = document.getElementById('main-content-scroll');
//     if (mainContent) {
//       mainContent.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   // --- Navigation Logic (Reliable) ---
//   const currentTopicIndex = flatTutorialData.findIndex(
//     (item) => item.href === activeTopicHref
//   );

//   const prevTopic =
//     currentTopicIndex > 0 ? flatTutorialData[currentTopicIndex - 1] : null;

//   const nextTopic =
//     currentTopicIndex >= 0 && currentTopicIndex < flatTutorialData.length - 1
//       ? flatTutorialData[currentTopicIndex + 1]
//       : null;
//       
//   const currentContent =
//     tutorialContent[activeTopicHref] || fallbackContent;

//   return (
//     // The 'dark' class on the container enables Tailwind's dark mode selectors
//     <div className={`flex min-h-screen antialiased font-sans ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>

//       {/* 1. Sidebar Component */}
//       <CppSidebar
//         activeTopicHref={activeTopicHref}
//         onTopicClick={handleTopicClick}
//         isDarkMode={isDarkMode}
//         onToggleDarkMode={handleDarkModeToggle}
//         isMobileOpen={isMobileOpen} // Controls mobile visibility
//       />
      
//       {/* Mobile Backdrop Overlay (Clicking this closes the sidebar on small screens) */}
//       {isMobileOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={handleMobileToggle}></div>
//       )}

//       {/* 2. Main Content Component */}
//       <ContentArea
//         currentContent={currentContent}
//         prevTopic={prevTopic}
//         nextTopic={nextTopic}
//         onTopicClick={handleTopicClick}
//         isDarkMode={isDarkMode}
//         onToggleSidebar={handleMobileToggle} // Pass mobile toggle to the main content header
//       />
//     </div>
//   );
// };

// export default App;