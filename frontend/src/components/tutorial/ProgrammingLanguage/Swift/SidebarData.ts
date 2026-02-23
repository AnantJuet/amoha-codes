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
  // --- Swift Basics ---
  { title: "Swift HOME", component: "Home" },
  { title: "Swift Intro", component: "intro" },
  { title: "Swift Get Started", component: "getstarted" },
  { title: "Swift Syntax", component: "syntax" },
  { title: "Swift Statements", component: "statements" },
  { title: "Swift Comments", component: "comments" },
  {
    title: "Swift Variables",
    component: "variables",
    hasArrow: true,
    subtopics: [
      { title: "Variables", component: "variables" },
      { title: "Print Variables", component: "printvariables" },
      { title: "Identifiers", component: "identifiers" },
      { title: "Multiple Variables", component: "multiplevariables" },
      { title: "Constants", component: "constants" },
    ],
  },
  { title: "Swift Constants", component: "swiftconstant" },
    {
    title: "Swift Output",
    component: "output",
    hasArrow: true,
    subtopics: [
      { title: "Print Text", component: "printtext" },
      { title: "Print Numbers", component: "printnumbers" },

    ],
  },

    {
    title: "Swift Data Types",
    component: "datatypes",
    hasArrow: true,
    subtopics: [
      { title: "Data Types", component: "datatypes" },
      { title: "Boolean", component: "boolean" },
      { title: "Numbers", component: "numbers" },
      { title: "Character", component: "character" },
    ],
  },
    { title: "Swift TypeCasting", component: "typecasting" },

     {
    title: "Swift Arrays",
    component: "arrays",
    hasArrow: true,
    subtopics: [
      { title: "Arrays", component: "arrays" },
      { title: "Loop Through an Array", component: "looparray" },
      { title: "Indices & Bounds", component: "indices" },
      { title: "Array Slices", component: "arrayslices" },
      { title: "MultiDimensional Array", component: "multidimensionalarray" },

    ],
  },

  // --- Expandable Sections with Subtopics ---
  {
    title: "Swift Operators",
    component: "operators",
    hasArrow: true,
    subtopics: [
      { title: "Operators", component: "operators" },
      { title: "Arithmetic", component: "arithmetic" },
      { title: "Assignment", component: "assignment" },
      { title: "Comparison", component: "comparison" },
      { title: "Logical", component: "logical" },
      { title: "Operator Precedence", component: "precedence" },
    ],
  },
      {
    title: "Swift Strings",
    component: "strings",
    hasArrow: true,
    subtopics: [
      { title: " Strings", component: "strings" },
      { title: "Concatenation", component: "concatenation" },
      { title: "Numbers and  Strings", component: "numbersstring" },
      { title: "Special Character", component: "specialcharacter" },
    ],
  },
    { title: "Swift Ranges", component: "ranges" },

  {
    title: "Swift If...Else",
    component: "ifelse",
    hasArrow: true,
    subtopics: [
      { title: "If...Else", component: "ifelse" },
      { title: "if", component: "if" },
      { title: "else", component: "else" },
      { title: "else if ", component: "elseif" },
      { title: "Nested if ", component: "nestedif" },
   
    ],
  },
    {
    title: "Swift Switches",
    component: "switches",
    
  },

     {
    title: "Swift While Loop",
    component: "whileloop",
    hasArrow: true,
    subtopics: [
      { title: "  While Loop", component: "whileloop" },
      { title: "Repeat/While Loop", component: "repeatwhileloop" },
  
    ],
  },
       {
    title: "Swift For Loop",
    component: "forloop",
    hasArrow: true,
    subtopics: [
      { title: " For Loop", component: "forloop" },
      { title: "Nested Loop", component: "nestedloop" },
      { title: "For - Each Loop", component: "foreachloop" },
  
    ],
  },
   { title: "Swift Break/Continue", component: "break" },
    { title: "Swift Collection", 
      component: "collection",
      hasArrow: true,
       subtopics: [
      { title: " Overview", component: "overview" },
      { title: "Sets", component: "sets" },
      { title: "Dictionaries", component: "dictionaries" },
      { title: "map,filter,reduce", component: "map" },
      { title: "Sorting", component: "sorting" },
      { title: "Mutability (let vs var)", component: "mutability" },
  
    ],
    
    
    },
    { title: "Swift Types & Function", 
      component: "collection",
      hasArrow: true,
       subtopics: [
      { title: " Swift Function", component: "swiftfunction" },
      { title: "Swift Optional", component: "optional" },
      { title: "Swift Enums & Patterns", component: "enums" },
      { title: "Swift Closures", component: "closure" },
      { title: "Tuples & Types Aliases", component: "tuples" },
      
  
    ],
    
    
    },  

];
