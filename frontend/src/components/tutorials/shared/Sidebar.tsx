import React from 'react';

interface SidebarItem {
  id: string;
  title: string;
  path: string;
}

interface SidebarProps {
  darkMode?: boolean;
  items: SidebarItem[];
  activeId?: string;
  onItemClick?: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  darkMode = false,
  items,
  activeId,
  onItemClick,
}) => {
  const containerClasses = darkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-gray-200';

  const itemClasses = darkMode
    ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900';

  const activeClasses = darkMode
    ? 'bg-purple-900/50 text-purple-300 border-l-4 border-purple-500'
    : 'bg-purple-50 text-purple-700 border-l-4 border-purple-600';

  return (
    <div className={`w-64 border-r ${containerClasses} h-full overflow-y-auto`}>
      <nav className="p-4">
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onItemClick?.(item.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeId === item.id ? activeClasses : itemClasses
                }`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
