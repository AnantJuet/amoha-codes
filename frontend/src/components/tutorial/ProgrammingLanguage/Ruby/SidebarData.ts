export interface SubTopic {
  title: string;
  component: string;
}

export interface SidebarItem {
  title: string;
  component: string;
  hasArrow?: boolean;
  subtopics?: SubTopic[];
}

export const sidebarItems: SidebarItem[] = [
  { title: "Ruby HOME", component: "home" },
  { title: "Ruby Intro", component: "intro" },
  { title: "Ruby Get Started", component: "getstarted" },
  { title: "Ruby Syntax", component: "syntax" },
  { title: "Ruby Comments", component: "comments" },
  {
    title: "Ruby Variables",
    component: "variables",
    hasArrow: true,
    subtopics: [
      { title: "Variables", component: "variables" },
      { title: "Variable Scope", component: "scope" },
      { title: "Constants", component: "constants" },
    ],
  },
  {
    title: "Ruby Data Types",
    component: "datatypes",
    hasArrow: true,
    subtopics: [
      { title: "Numbers", component: "numbers" },
      { title: "Strings", component: "strings" },
      { title: "Symbols", component: "symbols" },
      { title: "Booleans", component: "booleans" },
    ],
  },
  {
    title: "Ruby Operators",
    component: "operators",
    hasArrow: true,
    subtopics: [
      { title: "Arithmetic", component: "arithmetic" },
      { title: "Comparison", component: "comparison" },
      { title: "Logical", component: "logical" },
    ],
  },
  {
    title: "Ruby Control Flow",
    component: "controlflow",
    hasArrow: true,
    subtopics: [
      { title: "if/else", component: "ifelse" },
      { title: "unless", component: "unless" },
      { title: "case", component: "case" },
    ],
  },
  {
    title: "Ruby Loops",
    component: "loops",
    hasArrow: true,
    subtopics: [
      { title: "while", component: "while" },
      { title: "for", component: "for" },
      { title: "each", component: "each" },
      { title: "times", component: "times" },
    ],
  },
  {
    title: "Ruby Methods",
    component: "methods",
    hasArrow: true,
    subtopics: [
      { title: "Defining Methods", component: "methods" },
      { title: "Parameters", component: "parameters" },
      { title: "Return Values", component: "returnvalues" },
    ],
  },
  { title: "Ruby Arrays", component: "arrays" },
  { title: "Ruby Hashes", component: "hashes" },
  {
    title: "Ruby Blocks",
    component: "blocks",
    hasArrow: true,
    subtopics: [
      { title: "Blocks", component: "blocks" },
      { title: "Procs", component: "procs" },
      { title: "Lambdas", component: "lambdas" },
    ],
  },
  {
    title: "Ruby OOP",
    component: "oop",
    hasArrow: true,
    subtopics: [
      { title: "Classes", component: "classes" },
      { title: "Objects", component: "objects" },
      { title: "Inheritance", component: "inheritance" },
      { title: "Modules", component: "modules" },
    ],
  },
  { title: "Ruby Exceptions", component: "exceptions" },
  { title: "Ruby File I/O", component: "fileio" },
];
