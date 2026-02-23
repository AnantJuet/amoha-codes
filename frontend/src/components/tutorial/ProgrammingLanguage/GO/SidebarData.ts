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
  // --- GO Basics ---
  { title: "GO HOME", component: "Home" },
  { title: "GO Intro", component: "intro" },
  { title: "GO Get Started", component: "getstarted" },
  { title: "GO Syntax", component: "syntax" },
  { title: "GO Comments", component: "comments" },
  {
    title: "GO Variables",
    component: "variables",
    hasArrow: true,
    subtopics: [
      { title: "Declare Variables", component: "declarevariables" },
      { title: "Declare Multiple Variables", component: "multiplevariables" },
      { title: "Naming Rules", component: "namingrules" },
    ],
  },
  { title: "GO Constants", component: "goconstants" },
    {
    title: "GO Output",
    component: "output",
    hasArrow: true,
    subtopics: [
      { title: "Output Function", component: "outputfunction" },
      { title: "Formatting Verbs", component: "formattingverbs" },

    ],
  },

    {
    title: "GO Data Types",
    component: "datatypes",
    hasArrow: true,
    subtopics: [
      { title: "Basic Data Types", component: "datatypes" },
      { title: "Boolean", component: "boolean" },
      { title: "Integer", component: "Integer" },
      { title: "Float", component: "float" },
    ],
  },
  { title: "GO Arrays", component: "arrays" },
     {
    title: "GO Slices",
    component: "slices",
    hasArrow: true,
    subtopics: [
      { title: "Create Slice", component: "createslice" },
      { title: "Modify Slice", component: "modifyslice" },

    ],
  },

  // --- Expandable Sections with Subtopics ---
  {
    title: "GO Operators",
    component: "operators",
    hasArrow: true,
    subtopics: [
      { title: "Operators", component: "operators" },
      { title: "Arithmetic", component: "arithmetic" },
      { title: "Assignment", component: "assignment" },
      { title: "Comparison", component: "comparison" },
      { title: "Logical", component: "logical" },
      { title: "Bitwise", component: "bitwise" },
    ],
  },
  {
    title: "GO Conditions",
    component: "conditions",
    hasArrow: true,
    subtopics: [
      { title: "Conditions", component: "condition" },
      { title: "if Statement", component: "if" },
      { title: "if else Statement", component: "ifelse" },
      { title: "else if Statement", component: "elseif" },
      { title: "Nested if ", component: "nestedif" },
   
    ],
  },
    {
    title: "GO Switches",
    component: "switches",
    hasArrow: true,
    subtopics: [
      { title: "Single-case", component: "singlecase" },
      { title: "Multi-Case", component: "multicase" },
  
    ],
  },
 { title: "GO Loops", component: "loops" },
     {
    title: "GO Functions",
    component: "function",
    hasArrow: true,
    subtopics: [
      { title: "Create/Call Function", component: "callfunction" },
      { title: "Parameters/Arguments", component: "parameters" },
      { title: "Function Returns", component: "returns" },
      { title: "Recursion", component: "recursion" },
  
    ],
  },
   { title: "GO Struct", component: "struct" },
    { title: "GO Maps", component: "maps" },

];
