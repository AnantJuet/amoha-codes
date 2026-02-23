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
  { title: "C HOME", component: "home" },
  { title: "C Intro", component: "intro" },
  { title: "C Get Started", component: "getstarted" },
  { title: "C Syntax", component: "syntax" },
  { title: "C Comments", component: "comments" },
  {
    title: "C Variables",
    component: "variables",
    hasArrow: true,
    subtopics: [
      { title: "Create Variables", component: "variables" },
      { title: "Format Specifiers", component: "formatspecifiers" },
      { title: "Change Values", component: "changevalues" },
      { title: "Multiple Variables", component: "multiplevariables" },
      { title: "Variable Names", component: "variablenames" },
    ],
  },
  { title: "C Constants", component: "constants" },
  {
    title: "C Data Types",
    component: "datatypes",
    hasArrow: true,
    subtopics: [
      { title: "Data Types", component: "datatypes" },
      { title: "Characters", component: "characters" },
      { title: "Numbers", component: "numbers" },
      { title: "Decimal Precision", component: "decimalprecision" },
      { title: "Type Conversion", component: "typeconversion" },
    ],
  },
  {
    title: "C Operators",
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
    title: "C Conditions",
    component: "conditions",
    hasArrow: true,
    subtopics: [
      { title: "Conditions", component: "conditions" },
      { title: "if Statement", component: "if" },
      { title: "if else", component: "ifelse" },
      { title: "else if", component: "elseif" },
      { title: "Short Hand if", component: "shorthandif" },
    ],
  },
  {
    title: "C Switch",
    component: "switch",
    hasArrow: true,
    subtopics: [
      { title: "Switch Statement", component: "switch" },
      { title: "Break/Default", component: "breakdefault" },
    ],
  },
  {
    title: "C Loops",
    component: "loops",
    hasArrow: true,
    subtopics: [
      { title: "While Loop", component: "whileloop" },
      { title: "Do While Loop", component: "dowhileloop" },
      { title: "For Loop", component: "forloop" },
      { title: "Break/Continue", component: "breakcontinue" },
    ],
  },
  {
    title: "C Arrays",
    component: "arrays",
    hasArrow: true,
    subtopics: [
      { title: "Arrays", component: "arrays" },
      { title: "Array Size", component: "arraysize" },
      { title: "Multidimensional Arrays", component: "multiarrays" },
    ],
  },
  { title: "C Strings", component: "strings" },
  { title: "C User Input", component: "userinput" },
  {
    title: "C Pointers",
    component: "pointers",
    hasArrow: true,
    subtopics: [
      { title: "Pointers", component: "pointers" },
      { title: "Pointers & Arrays", component: "pointersarrays" },
    ],
  },
  {
    title: "C Functions",
    component: "functions",
    hasArrow: true,
    subtopics: [
      { title: "Functions", component: "functions" },
      { title: "Parameters", component: "parameters" },
      { title: "Return Values", component: "returnvalues" },
      { title: "Recursion", component: "recursion" },
    ],
  },
  {
    title: "C Structures",
    component: "structures",
    hasArrow: true,
    subtopics: [
      { title: "Structures", component: "structures" },
      { title: "Struct & Pointers", component: "structpointers" },
    ],
  },
  {
    title: "C Memory",
    component: "memory",
    hasArrow: true,
    subtopics: [
      { title: "Memory Management", component: "memory" },
      { title: "Memory Allocation", component: "memoryallocation" },
      { title: "Memory Access", component: "memoryaccess" },
    ],
  },
  {
    title: "C Files",
    component: "files",
    hasArrow: true,
    subtopics: [
      { title: "File Handling", component: "files" },
      { title: "Create/Write Files", component: "createfiles" },
      { title: "Read Files", component: "readfiles" },
    ],
  },
];
