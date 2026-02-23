// Csharp/SidebarData.ts

export interface SubTopic {
  title: string;
  component: string;
}

export interface SidebarItem {
  [x: string]: any;
  title: string;
  component: string;
  hasArrow?: boolean; // To show dropdown arrow
  subtopics?: SubTopic[]; // Nested topics
}

export const sidebarItems: SidebarItem[] = [
  // --- C# Basics ---
  { title: "C# HOME", component: "Home" },
  { title: "C# Intro", component: "intro" },
  { title: "C# Get Started", component: "getstarted" },
  { title: "C# Syntax", component: "syntax" },
  { title: "C# Output", component: "output" },
  { title: "C# Comments", component: "comments" },
  {
    title: "C# Variables",
    component: "variables",
    hasArrow: true,
    subtopics: [
      { title: "Variables", component: "variables" },
      { title: "Constants", component: "constants" },
      { title: "Display Variables", component: "displayvariables" },
      { title: "Multiple Variables", component: "multiplevariables" },
  
    ],
  },
  { title: "C# Data Types", component: "datatypes" },
  { title: "C# Type Casting", component: "typecasting" },
  { title: "C# User Input", component: "userinput" },
  { title: "C# Math", component: "math" },
  { title: "C# Booleans", component: "booleans" },
  { title: "C# While Loop", component: "whileloop" },
  { title: "C# Break/Continue", component: "breakcontinue" },
  { title: "C# Switch", component: "switch" },

  // --- Expandable Sections with Subtopics ---
  {
    title: "C# Operators",
    component: "operators",
    hasArrow: true,
    subtopics: [
      { title: "Arithmetic", component: "arithmetic" },
      { title: "Assignment", component: "assignment" },
      { title: "Comparison", component: "comparison" },
      { title: "Logical", component: "logical" },
    ],
  },
  {
    title: "C# Strings",
    component: "strings",
    hasArrow: true,
    subtopics: [
      { title: "Strings", component: "strings" },
      { title: "Concatenation", component: "concatenation" },
      { title: "Interpolation", component: "interpolation" },
      { title: "Access Strings", component: "access" },
      { title: "Special Characters", component: "characters" },
    ],
  },
  {
    title: "C# If..Else",
    component: "if-else",
    hasArrow: true,
    subtopics: [
      { title: "if", component: "if" },
      { title: "else", component: "else" },
      { title: "else if", component: "elseif" },
   
    ],
  },
  {
    title: "C# For Loop",
    component: "for-loop",
    hasArrow: true,
    subtopics: [
      { title: "For loop", component: "forloop" },
      { title: "Foreach loop", component: "foreachloop" },
    ],
  },
  {
    title: "C# Arrays",
    component: "arrays",
    hasArrow: true,
    subtopics: [
      { title: "Arrays", component: "arrays" },
      { title: "Loop through array", component: "looparray" },
      { title: "Sort arrays", component: "sortarrays" },
      { title: "Multidimensional arrays", component: "multidimensionalarrays" },
    ],
  },
  {
    title: "C# Methods",
    component: "methods",
    hasArrow: true,
    subtopics: [
      { title: "Methods", component: "methods" },
      { title: "Method Parameters", component: "parameters" },
      { title: "Return Values", component: "values" },
    ],
  },
];
