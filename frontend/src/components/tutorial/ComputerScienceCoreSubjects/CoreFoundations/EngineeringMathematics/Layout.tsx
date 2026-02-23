// import React from 'react';
// // Import the sidebar component from the sibling file, now including the file extension
// import EMSidebar from "./EMSidebar.tsx"; 

// interface LayoutProps {
//   children: React.ReactNode;
//   selected: string;
//   onSelect: (component: string) => void;
// }

// const Layout: React.FC<LayoutProps> = ({ children, selected, onSelect }) => (
//   <div className="min-h-screen bg-gray-100">
//     <EMSidebar selected={selected} onSelect={onSelect} />
//     {/* ml-72 offsets the 72-unit width of the fixed sidebar */}
//     <main className="ml-72 flex-1 p-8">
//       {children}
//     </main>
//   </div>
// );

// export default Layout;



import React from "react";
 
import CFSidebar from "./EMSidebar";

interface LayoutProps {
  children: React.ReactNode;
  selected: string;
  onSelect: (component: string) => void;
  darkMode: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, selected, onSelect, darkMode }) => {
  return (
    <div className={`flex min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <CFSidebar selected={selected} onSelect={onSelect} darkMode={darkMode} />

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