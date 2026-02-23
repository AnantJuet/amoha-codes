// ReactjsTheory/SidebarData.ts

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
  // --- React Basics ---
  { title: "React HOME", component: "Home" },
  { title: "Introduction to React", component: "introduction" },
  { title: "Getting Started", component: "gettingstarted" },
  { title: "Environment Setup", component: "environmentsetup" },
  { title: "React JSX", component: "jsx" },
  { title: "Virtual DOM", component: "virtualdom" },

  // --- Components ---
  {
    title: "React Components",
    component: "components",
    hasArrow: true,
    subtopics: [
      { title: "Components Overview", component: "components" },
      { title: "Functional Components", component: "functionalcomponents" },
      { title: "Class Components", component: "classcomponents" },
      { title: "Component Lifecycle", component: "lifecycle" },
      { title: "Pure Components", component: "purecomponents" },
      { title: "Higher Order Components", component: "hoc" },
    ],
  },

  // --- Props and State ---
  {
    title: "Props and State",
    component: "props",
    hasArrow: true,
    subtopics: [
      { title: "Props in React", component: "props" },
      { title: "State in React", component: "state" },
      { title: "Lifting State Up", component: "liftingstate" },
      { title: "PropTypes", component: "proptypes" },
    ],
  },

  // --- React Hooks ---
  {
    title: "React Hooks",
    component: "hooks",
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Hooks", component: "hooks" },
      { title: "useState Hook", component: "usestate" },
      { title: "useEffect Hook", component: "useeffect" },
      { title: "useContext Hook", component: "usecontext" },
      { title: "useRef Hook", component: "useref" },
      { title: "useReducer Hook", component: "usereducer" },
      { title: "useMemo Hook", component: "usememo" },
      { title: "useCallback Hook", component: "usecallback" },
      { title: "Custom Hooks", component: "customhooks" },
    ],
  },

  // --- Event Handling ---
  {
    title: "Event Handling",
    component: "forms",
    hasArrow: true,
    subtopics: [
      { title: "Forms in React", component: "forms" },
      { title: "Controlled Components", component: "controlledcomponents" },
    ],
  },

  // --- React Router ---
  {
    title: "React Router",
    component: "router",
    hasArrow: true,
    subtopics: [
      { title: "React Router", component: "router" },
      { title: "Route Parameters", component: "routeparams" },
      { title: "Navigation", component: "navigation" },
    ],
  },

  // --- State Management ---
  {
    title: "State Management",
    component: "redux",
    hasArrow: true,
    subtopics: [
      { title: "Redux Introduction", component: "redux" },
      { title: "Redux Toolkit", component: "reduxtoolkit" },
    ],
  },

  // --- Advanced React ---
  {
    title: "Advanced React",
    component: "codesplitting",
    hasArrow: true,
    subtopics: [
      { title: "Code Splitting", component: "codesplitting" },
      { title: "React Performance", component: "performance" },
    ],
  },
];
