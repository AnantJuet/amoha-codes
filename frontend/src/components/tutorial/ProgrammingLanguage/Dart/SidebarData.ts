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
  { title: "Dart HOME", component: "home" },
  { title: "Dart Intro", component: "intro" },
  { title: "Dart Get Started", component: "getstarted" },
  { title: "Dart Syntax", component: "syntax" },
  { title: "Dart Comments", component: "comments" },
  {
    title: "Dart Variables",
    component: "variables",
    hasArrow: true,
    subtopics: [
      { title: "Variables", component: "variables" },
      { title: "var, final, const", component: "varfinalconst" },
      { title: "Late Variables", component: "late" },
    ],
  },
  {
    title: "Dart Data Types",
    component: "datatypes",
    hasArrow: true,
    subtopics: [
      { title: "Numbers", component: "numbers" },
      { title: "Strings", component: "strings" },
      { title: "Booleans", component: "booleans" },
      { title: "Lists", component: "lists" },
      { title: "Maps", component: "maps" },
    ],
  },
  {
    title: "Dart Operators",
    component: "operators",
    hasArrow: true,
    subtopics: [
      { title: "Arithmetic", component: "arithmetic" },
      { title: "Comparison", component: "comparison" },
      { title: "Logical", component: "logical" },
      { title: "Null-aware", component: "nullaware" },
    ],
  },
  {
    title: "Dart Control Flow",
    component: "controlflow",
    hasArrow: true,
    subtopics: [
      { title: "if/else", component: "ifelse" },
      { title: "switch", component: "switch" },
    ],
  },
  {
    title: "Dart Loops",
    component: "loops",
    hasArrow: true,
    subtopics: [
      { title: "for Loop", component: "for" },
      { title: "while Loop", component: "while" },
      { title: "for-in Loop", component: "forin" },
    ],
  },
  {
    title: "Dart Functions",
    component: "functions",
    hasArrow: true,
    subtopics: [
      { title: "Functions", component: "functions" },
      { title: "Parameters", component: "parameters" },
      { title: "Arrow Functions", component: "arrow" },
      { title: "Anonymous Functions", component: "anonymous" },
    ],
  },
  {
    title: "Dart OOP",
    component: "oop",
    hasArrow: true,
    subtopics: [
      { title: "Classes", component: "classes" },
      { title: "Constructors", component: "constructors" },
      { title: "Inheritance", component: "inheritance" },
      { title: "Abstract Classes", component: "abstract" },
      { title: "Mixins", component: "mixins" },
    ],
  },
  {
    title: "Dart Null Safety",
    component: "nullsafety",
    hasArrow: true,
    subtopics: [
      { title: "Null Safety", component: "nullsafety" },
      { title: "Nullable Types", component: "nullable" },
      { title: "Null Operators", component: "nulloperators" },
    ],
  },
  {
    title: "Dart Async",
    component: "async",
    hasArrow: true,
    subtopics: [
      { title: "Futures", component: "futures" },
      { title: "async/await", component: "asyncawait" },
      { title: "Streams", component: "streams" },
    ],
  },
  { title: "Dart Collections", component: "collections" },
  { title: "Dart Exceptions", component: "exceptions" },
];
