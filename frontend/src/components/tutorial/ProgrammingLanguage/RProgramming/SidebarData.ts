export interface SubTopic {
  title: string;
  component: string;
}

export interface SidebarItem {
  [x: string]: any;
  title: string;
  component: string;
  hasArrow?: boolean;
  subtopics?: SubTopic[];
}

export const sidebarItems: SidebarItem[] = [
  // --- R Basics ---
  { title: "R HOME", component: "Home" },
  { title: "R Introduction", component: "introduction" },
  { title: "RStudio Introduction", component: "rstudiointro" },
  { title: "R Basic Syntax", component: "basicsyntax" },
  { title: "R Hello World", component: "helloworld" },
  { title: "R Comments", component: "comments" },

  // --- Variables and Data Types ---
  {
    title: "R Variables & Data Types",
    component: "variables",
    hasArrow: true,
    subtopics: [
      { title: "Variables", component: "variables" },
      { title: "Data Types", component: "datatypes" },
      { title: "Operators", component: "operators" },
    ],
  },

  // --- Data Structures ---
  {
    title: "R Data Structures",
    component: "lists",
    hasArrow: true,
    subtopics: [
      { title: "Lists", component: "lists" },
      { title: "Matrices", component: "matrices" },
      { title: "Data Frames", component: "dataframes" },
      { title: "Factors", component: "factors" },
    ],
  },

  // --- Control Flow ---
  {
    title: "R Control Flow",
    component: "ifelse",
    hasArrow: true,
    subtopics: [
      { title: "If-Else", component: "ifelse" },
      { title: "For Loop", component: "forloop" },
      { title: "Break and Next", component: "breaknext" },
    ],
  },

  // --- Functions ---
  { title: "R Functions", component: "functions" },

  // --- Strings and I/O ---
  {
    title: "R Strings & I/O",
    component: "strings",
    hasArrow: true,
    subtopics: [
      { title: "Strings", component: "strings" },
      { title: "String Functions", component: "stringfunctions" },
      { title: "Reading Data", component: "readingdata" },
      { title: "File Handling", component: "filehandling" },
    ],
  },

  // --- Data Visualization ---
  { title: "R Histograms", component: "histograms" },

  // --- Statistics ---
  {
    title: "R Statistics",
    component: "meanmedianmode",
    hasArrow: true,
    subtopics: [
      { title: "Mean, Median, Mode", component: "meanmedianmode" },
      { title: "Hypothesis Testing", component: "hypothesistesting" },
    ],
  },
];
