
import React, { useState } from "react";
import { sidebarItems } from "./SidebarData";
import { ChevronDown, ChevronRight } from "lucide-react";

interface SidebarProps {
  selected: string;
  onSelect: (component: string) => void;
  darkMode: boolean;
}

const SwiftSidebar: React.FC<SidebarProps> = ({ selected, onSelect, darkMode }) => {
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
        <h2 className="text-2xl font-bold text-[#6334B9]">Swift Tutorial</h2>
      </div>

      <div className="pt-4 space-y-3">
        {sidebarItems.map((item) => (
          <div key={item.component}>
            <button
              onClick={() =>
                item.hasArrow ? toggleGroup(item.title) : onSelect(item.component)
              }
              className={`flex items-center justify-between w-full text-left font-semibold py-2 px-3 rounded-md transition-all
                ${selected === item.component
                  ? darkMode
                    ? "bg-[#6334B9] text-black"
                    : "bg-[#6334B9] text-white"
                  : darkMode
                    ? "text-white hover:bg-gray-700"
                    : "text-gray-800 hover:bg-[#6334B9] hover:text-text-[#6334B9]"
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
                      ${selected === sub.component
                          ? "bg-[#6334B9] text-white" // Purple background, white text for selected
                          : darkMode
                            ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                            : "text-gray-600 hover:bg-[#E0D4F7] hover:text-[#6334B9]"
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

export default SwiftSidebar;
