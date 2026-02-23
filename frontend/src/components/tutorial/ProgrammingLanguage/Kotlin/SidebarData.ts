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
  { title: "Kotlin HOME", component: "home" },
  { title: "Kotlin Intro", component: "intro" },
  { title: "Kotlin Get Started", component: "getStarted" },
  { title: "Kotlin Syntax", component: "syntax" },
  { title: "Kotlin Output", component: "output" },
  { title: "Kotlin Comments", component: "comments" },
  { title: "Kotlin Variables", component: "variables" },
  { title: "Kotlin Data Types", component: "dataTypes" },
  { title: "Kotlin Operators", component: "operators" },
  { title: "Kotlin Strings", component: "strings" },
  { title: "Kotlin Booleans", component: "booleans" },
  { title: "Kotlin If...Else", component: "ifelse" },
  { title: "Kotlin When", component: "when" },
  { title: "Kotlin While Loop", component: "whileLoop" },
  { title: "Kotlin Break/Continue", component: "breakcontinue" },
  { title: "Kotlin Arrays", component: "arrays" },
  { title: "Kotlin For Loop", component: "forLoop" },
  { title: "Kotlin Ranges", component: "ranges" },
  { title: "Kotlin Functions", component: "functions" },

  // Kotlin Classes with OOP subtopics
  {
    title: "Kotlin Classes",
    component: "classes",
    hasArrow: true,
    subtopics: [
      { title: "Kotlin OOP", component: "oop" },
      { title: "Kotlin Classes/Objects", component: "classes" },
      { title: "Kotlin Constructors", component: "constructors" },
      { title: "Kotlin Class Functions", component: "classfunction" },
      { title: "Kotlin Inheritance", component: "inheritance" },
    ],
  },
];
