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
  { title: "Rust HOME", component: "home" },
  { title: "Rust Intro", component: "intro" },
  { title: "Rust Get Started", component: "getstarted" },
  { title: "Rust Syntax", component: "syntax" },
  { title: "Rust Comments", component: "comments" },
  {
    title: "Rust Variables",
    component: "variables",
    hasArrow: true,
    subtopics: [
      { title: "Variables", component: "variables" },
      { title: "Mutability", component: "mutability" },
      { title: "Constants", component: "constants" },
      { title: "Shadowing", component: "shadowing" },
    ],
  },
  {
    title: "Rust Data Types",
    component: "datatypes",
    hasArrow: true,
    subtopics: [
      { title: "Data Types", component: "datatypes" },
      { title: "Scalar Types", component: "scalartypes" },
      { title: "Compound Types", component: "compoundtypes" },
    ],
  },
  {
    title: "Rust Operators",
    component: "operators",
    hasArrow: true,
    subtopics: [
      { title: "Operators", component: "operators" },
      { title: "Arithmetic", component: "arithmetic" },
      { title: "Comparison", component: "comparison" },
      { title: "Logical", component: "logical" },
    ],
  },
  {
    title: "Rust Control Flow",
    component: "controlflow",
    hasArrow: true,
    subtopics: [
      { title: "if Expressions", component: "if" },
      { title: "loop", component: "loop" },
      { title: "while", component: "while" },
      { title: "for", component: "for" },
    ],
  },
  {
    title: "Rust Ownership",
    component: "ownership",
    hasArrow: true,
    subtopics: [
      { title: "Ownership", component: "ownership" },
      { title: "References & Borrowing", component: "borrowing" },
      { title: "Slices", component: "slices" },
    ],
  },
  {
    title: "Rust Structs",
    component: "structs",
    hasArrow: true,
    subtopics: [
      { title: "Defining Structs", component: "structs" },
      { title: "Methods", component: "methods" },
    ],
  },
  {
    title: "Rust Enums",
    component: "enums",
    hasArrow: true,
    subtopics: [
      { title: "Defining Enums", component: "enums" },
      { title: "Pattern Matching", component: "matching" },
      { title: "Option Enum", component: "option" },
    ],
  },
  {
    title: "Rust Functions",
    component: "functions",
    hasArrow: true,
    subtopics: [
      { title: "Functions", component: "functions" },
      { title: "Parameters", component: "parameters" },
      { title: "Return Values", component: "returnvalues" },
    ],
  },
  { title: "Rust Strings", component: "strings" },
  { title: "Rust Vectors", component: "vectors" },
  { title: "Rust Error Handling", component: "errors" },
  { title: "Rust Traits", component: "traits" },
  { title: "Rust Generics", component: "generics" },
  { title: "Rust Lifetimes", component: "lifetimes" },
];
