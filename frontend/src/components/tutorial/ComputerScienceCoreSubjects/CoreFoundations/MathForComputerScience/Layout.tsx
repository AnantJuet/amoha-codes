import React from "react";
import MCSSidebar from "./MCSSidebar";

interface LayoutProps {
  children: React.ReactNode;
  selected: string;
  onSelect: (component: string) => void;
  darkMode: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, selected, onSelect, darkMode }) => {
  return (
    <div className={`flex min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <MCSSidebar selected={selected} onSelect={onSelect} darkMode={darkMode} />

      <main
        className={`flex-1 p-8 overflow-y-auto prose max-w-none
          ${darkMode ? "prose-invert text-white bg-gray-900" : "text-gray-900 bg-white"}`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
