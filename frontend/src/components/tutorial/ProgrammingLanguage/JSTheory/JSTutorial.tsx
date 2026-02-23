
import React, { useState, useMemo } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { tutorialData, tutorialContent, type SidebarItem } from "../JSTheory/JSData";


interface pythonTutorialProps {
 darkMode: boolean;
}


const flattenData = (data: typeof tutorialData): string[] => {
  const result: string[] = [];
  const seenHrefs = new Set<string>(); 

  const traverse = (items: SidebarItem[]) => {
    items.forEach((item) => {
     
      if (item.href && !seenHrefs.has(item.href)) {
        result.push(item.href);
        seenHrefs.add(item.href);
      }
      
    
      if (item.children && item.children.length > 0) {
        traverse(item.children);
      }
    });
  };

  traverse(data);
  return result;
};


const pythonTutorial: React.FC<pythonTutorialProps> = ({ darkMode }) => {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const flatHrefs = useMemo(() => flattenData(tutorialData), []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeHref, setActiveHref] = useState(flatHrefs.length > 0 ? flatHrefs[0] : "python_home.asp");
  const currentIndex = flatHrefs.indexOf(activeHref);
  const goPrevious = () => {
    if (currentIndex > 0) setActiveHref(flatHrefs[currentIndex - 1]);
  };

  const goNext = () => {
    if (currentIndex < flatHrefs.length - 1) setActiveHref(flatHrefs[currentIndex + 1]);
  };

  return (
    <div className={`flex h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <Sidebar
        data={tutorialData}
        activeHref={activeHref}
        onSelect={setActiveHref}
        darkMode={darkMode}
      />

      <div className={`flex flex-col flex-1 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
        <MainContent topic={tutorialContent[activeHref]} darkMode={darkMode} />

        {/* Sticky Previous/Next Buttons */}
        <div className={`sticky bottom-0 flex justify-between p-4 border-t border-gray-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
          <button
            onClick={goPrevious}
            disabled={currentIndex <= 0}
            className={`px-4 py-2 rounded ${darkMode ? "bg-gray-700 text-white disabled:opacity-50" : "bg-gray-200 text-gray-900 disabled:opacity-50"}`}
          >
            Previous
          </button>
          <button
            onClick={goNext}
            disabled={currentIndex >= flatHrefs.length - 1}
            className={`px-4 py-2 rounded ${darkMode ? "bg-gray-700 text-white disabled:opacity-50" : "bg-gray-200 text-gray-900 disabled:opacity-50"}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default pythonTutorial;