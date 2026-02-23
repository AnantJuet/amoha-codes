// import React, { useState } from 'react';
// import { sidebarItems } from "./SidebarData.ts";
// import { ChevronDown, ChevronRight } from "lucide-react";

// interface SidebarProps {
//   selected: string;
//   onSelect: (component: string) => void;
// }

// const CFSidebar: React.FC<SidebarProps> = ({ selected, onSelect }) => {
//   const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

//   const toggleSection = (title: string) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [title]: !prev[title],
//     }));
//   };

//   return (
//     <div className="w-72 h-screen bg-gray-900 text-gray-100 fixed top-0 left-0 overflow-y-auto z-10 shadow-2xl">
//       <div className="p-5 border-b border-gray-700 bg-gray-800 sticky top-0">
//         <h2 className="text-2xl font-bold text-blue-400">Interactive Tutorial</h2>
//         <p className="text-sm text-gray-400">Computer Fundamentals</p>
//       </div>

//       <ul className="p-3 space-y-1">
//         {sidebarItems.map((item) => {
//           const isOpen = openSections[item.title] || false;
//           const hasSubtopics = item.subtopics && item.subtopics.length > 0;

//           return (
//             <li key={item.component}>
//               {/* Main Item */}
//               <button
//                 onClick={() => (hasSubtopics ? toggleSection(item.title) : onSelect(item.component))}
//                 className={`flex items-center justify-between w-full px-4 py-2 rounded-lg transition-all duration-200 ${
//                   selected === item.component
//                     ? "bg-blue-600 text-white shadow-md font-semibold"
//                     : "text-gray-300 hover:bg-gray-700 hover:text-white"
//                 }`}
//               >
//                 <span>{item.title}</span>
//                 {hasSubtopics && (
//                   <span>
//                     {isOpen ? (
//                       <ChevronDown size={18} className="text-gray-400" />
//                     ) : (
//                       <ChevronRight size={18} className="text-gray-400" />
//                     )}
//                   </span>
//                 )}
//               </button>

//               {/* Subtopics */}
//               {hasSubtopics && isOpen && (
//                 <ul className="ml-6 mt-1 border-l border-gray-700 pl-3 space-y-1">
//                   {item.subtopics.map((sub) => (
//                     <li key={sub.component}>
//                       <button
//                         onClick={() => onSelect(sub.component)}
//                         className={`block w-full text-left px-3 py-1.5 rounded-md text-sm transition-all duration-150 ${
//                           selected === sub.component
//                             ? "bg-blue-500 text-white"
//                             : "text-gray-400 hover:bg-gray-700 hover:text-white"
//                         }`}
//                       >
//                         {sub.title}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default CFSidebar;


import React, { useState } from "react";
import { sidebarItems } from "./SidebarData";
import { ChevronDown, ChevronRight } from "lucide-react";

interface SidebarProps {
  selected: string;
  onSelect: (component: string) => void;
  darkMode: boolean;
}

const CFSidebar: React.FC<SidebarProps> = ({ selected, onSelect, darkMode }) => {
  const [openGroups, setOpenGroups] = useState<{ [key: string]: boolean }>({});

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside
      className={`w-72 border-r min-h-screen overflow-y-auto mt-25 p-4
        ${darkMode ? "bg-gray-900 text-white border-gray-700" 
                   : "bg-gray-50 text-gray-900 border-gray-200"}`}
    >
      <div
        className={`p-5 border-b 
          ${darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"}`}
      >
        <h2 className="text-2xl font-bold text-[#6334B9]">CF Tutorial</h2>
      </div>

      <div className="pt-4 space-y-3">
        {sidebarItems.map((item) => (
          <div key={item.component}>
            <button
              onClick={() =>
                item.hasArrow ? toggleGroup(item.title) : onSelect(item.component)
              }
              className={`flex items-center justify-between w-full text-left font-semibold py-2 px-3 rounded-md transition-all
                ${
                  selected === item.component
                    ? darkMode
                      ? "bg-[#6334B9] text-black"
                      : "bg-blue-500 text-white"
                    : darkMode
                    ? "text-white hover:bg-gray-700"
                    : "text-gray-800 hover:bg-blue-100 hover:text-blue-700"
                }`}
            >
              <span>{item.title}</span>
              {item.hasArrow &&
                (openGroups[item.title] ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                ))}
            </button>

            {item.hasArrow && openGroups[item.title] && item.subtopics && (
              <ul
                className={`ml-4 mt-1 space-y-1 border-l pl-3 
                  ${darkMode ? "border-gray-600" : "border-gray-300"}`}
              >
                {item.subtopics.map((sub) => (
                  <li key={sub.component}>
                    <button
                      onClick={() => onSelect(sub.component)}
                      className={`block w-full text-left px-2 py-1 rounded-md text-sm transition-all
                        ${
                          selected === sub.component
                            ? darkMode
                              ? "bg-[#6334B9] text-black"
                              : "bg-blue-200 text-blue-800"
                            : darkMode
                            ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                            : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                        }`}
                    >
                      {sub.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default CFSidebar;