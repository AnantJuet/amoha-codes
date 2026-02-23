
import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import type { SidebarItem } from "../../../../components/tutorial/ProgrammingLanguage/PythonTheory/pythonData";


interface SidebarProps {
  data: SidebarItem[];
  activeHref: string;
  onSelect: (href: string) => void;
  darkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ data, activeHref, onSelect, darkMode }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  // Functionality to automatically open parent items (kept for correct navigation)
  const getParents = (items: SidebarItem[], href: string, parents: string[] = []): string[] | null => {
    for (const item of items) {
      if (item.href === href) return parents;
      if (item.children) {
        const result = getParents(item.children, href, [...parents, item.href]);
        if (result) return result;
      }
    }
    return null;
  };

  useEffect(() => {
    const parents = getParents(data, activeHref);
    if (parents) {
      const parentHrefsToOpen = parents.filter(parentHref => {
        const parentItem = data.find(i => i.href === parentHref);
        return parentItem && parentItem.children;
      });
      setOpenItems(parentHrefsToOpen);
    }
  }, [activeHref, data]);

  const toggleItem = (href: string) => {
    setOpenItems((prev) =>
      prev.includes(href) ? prev.filter((h) => h !== href) : [...prev, href]
    );
  };

  return (
    <aside className={`w-64 border-r h-[calc(100vh-80px)] mt-[80px] overflow-y-auto p-4 scrollbar-hide 
        ${darkMode ? "bg-gray-900 border-gray-700 text-white" : "bg-white border-gray-200 text-gray-900"}`}>
      <h2 className="text-xl font-bold mb-3 text-[#6334B9] dark:text-purple-300">Python Theory</h2>
      <ul className="space-y-1">
        {data.map((item) => {
          const hasChildren = !!item.children && item.children.length > 0;
          const isOpen = openItems.includes(item.href);

          return (
            <li key={item.href}>
              <button
                onClick={() => {
                  if (hasChildren && item.children && item.children.length > 0) {

                    onSelect(item.children[0].href);
                    if (!isOpen) toggleItem(item.href);
                  } else {
                    onSelect(item.href);
                  }
                }}

                className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-md transition-colors duration-150 ${activeHref === item.href
                    ? `${darkMode ? "bg-[#6334B9] text-black" : "bg-[#6334B9] text-black"} font-medium`
                    : `${darkMode ? "hover:bg-gray-700 text-white" : "hover:bg-[#6334B9] text-black"}`
                  } ${hasChildren ? "font-semibold" : ""}`}

              >
                <span>{item.label}</span>
                {hasChildren && (
                  <span className="ml-2">
                    {/* Chevron Icons */}
                    {isOpen
                      ? <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      : <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    }
                  </span>
                )}
              </button>

              {hasChildren && isOpen && (
                <ul className="pl-5 mt-1 space-y-1">
                  {item.children!.map((child) => (
                    <li key={child.href}>
                      <button
                        onClick={() => onSelect(child.href)}

                        className={`block text-left w-full px-3 py-1 rounded-md text-sm transition-colors duration-150 ${activeHref === child.href
                            ? `${darkMode ? "bg-[#6334B9] text-black" : "bg-[#6334B9] text-black"} font-medium`
                            : `${darkMode ? "hover:bg-gray-700 text-white" : "hover:bg-[#6334B9] text-black"}`
                          }`}
                      >
                        {child.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;