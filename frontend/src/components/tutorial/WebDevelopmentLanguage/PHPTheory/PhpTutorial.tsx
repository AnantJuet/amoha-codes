import React, { useState, useMemo } from "react";
import NewSidebar from "./NewSidebar";
import NewMainContent from "./NewMainContent";
import { tutorialData, tutorialContent, type SidebarItem } from "./PHPData";


interface PhpTutorialProps {
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


const PhpTutorial: React.FC<PhpTutorialProps> = ({ darkMode }) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const flatHrefs = useMemo(() => flattenData(tutorialData), []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeHref, setActiveHref] = useState(flatHrefs.length > 0 ? flatHrefs[0] : "php_home");
  const currentIndex = flatHrefs.indexOf(activeHref);
  const goPrevious = () => {
    if (currentIndex > 0) setActiveHref(flatHrefs[currentIndex - 1]);
  };

  const goNext = () => {
    if (currentIndex < flatHrefs.length - 1) setActiveHref(flatHrefs[currentIndex + 1]);
  };

  return (
    <div className={`flex h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <NewSidebar
        data={tutorialData}
        activeHref={activeHref}
        onSelect={setActiveHref}
        darkMode={darkMode}
      />

      <div className={`flex flex-col flex-1 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
        <NewMainContent topic={tutorialContent[activeHref]} darkMode={darkMode} />

        {/* Sticky Previous/Next Buttons */}
        <div className={`sticky bottom-0 flex justify-between p-4 border-t ${darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white text-gray-900 border-gray-300"}`}>
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

export default PhpTutorial;
