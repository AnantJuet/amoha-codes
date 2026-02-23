// --- DATA STRUCTURES ---

export type TabName = 'Features' | 'Syllabus' | 'Pre-requisites' | 'FAQs';

export interface FeatureItem {
  iconName: string; // Used for icon mapping
  title: string;
  description: string;
}

export interface ModuleItem {
  title: string;
  subtopics: string[];
}

export interface FaqItem {
  isOpenInImage: boolean;
  q: string;
  a: string;
}

export interface FaqCategory {
  name: string;
  questions: FaqItem[];
}

export const TABS: TabName[] = ['Features', 'Syllabus', 'Pre-requisites', 'FAQs'];

// Data for the Features tab
export const FEATURES_DATA: FeatureItem[] = [
  {
    iconName: 'Video',
    title: '65+ Hours of Expert-Led Content',
    description: 'Step-by-step progression from fundamentals to real-world project architecture.',
  },
  {
    iconName: 'Code',
    title: 'Industry-Standard Projects',
    description: 'Develop 5+ projects, including Portfolio, Blog, E-commerce (with Redux), and Chat applications.',
  },
  {
    iconName: 'Chat',
    title: 'Instant Mentor Support',
    description: '3 months of doubt-solving assistance from frontend engineers in top companies.',
  },
  {
    iconName: 'Lightbulb',
    title: 'Modern Tooling',
    description: 'Learn Git, GitHub, Vite, Babel, Webpack, and ESLint setup for professional workflows.',
  },
  {
    iconName: 'Medal',
    title: 'Certification',
    description: 'Earn a verified certificate showcasing your React.js proficiency.',
  },
  // Adding placeholders to complete a standard 7-item feature list
  {
    iconName: 'Contest',
    title: 'E-commerce Store (with Redux)',
    description: 'Master advanced state management by building a complete e-commerce platform.',
  },
  {
    iconName: 'Discussion',
    title: 'Dashboard UI with Charts',
    description: 'Practice data visualization and component design by building a dashboard interface.',
  },
];
// Data for the Syllabus tab
export const SYLLABUS_DATA: ModuleItem[] = [
  {
    title: 'Module 1: Web Development Foundations',
    subtopics: [
      'HTML5 & Semantic Elements',
      'CSS3 & Flexbox/Grid Layouts',
      'JavaScript Fundamentals',
      'DOM Manipulation',
    ],
  },
  {
    title: 'Module 2: Modern JavaScript (ES6+)',
    subtopics: [
      'Let, Const, Arrow Functions',
      'Destructuring, Spread, Rest',
      'Modules and Imports/Exports',
      'Async/Await, Promises, and Fetch API',
    ],
  },
  {
    title: 'Module 3: React.js Fundamentals',
    subtopics: [
      'Introduction to React',
      'JSX and Virtual DOM',
      'Functional vs Class Components',
      'Props, State, and Component Hierarchy',
      'Conditional Rendering and Lists',
    ],
  },
  {
    title: 'Module 4: Advanced React Concepts',
    subtopics: [
      'React Hooks (useState, useEffect, useRef, useMemo, useCallback)',
      'Custom Hooks',
      'Context API and Global State',
      'Form Handling and Validation',
      'Component Optimization',
    ],
  },
  {
    title: 'Module 5: State Management',
    subtopics: [
      'Redux Fundamentals',
      'Actions, Reducers, Store',
      'Redux Toolkit and Async Thunks',
      'Integration with APIs',
    ],
  },
  {
    title: 'Module 6: Styling and UI Frameworks',
    subtopics: [
      'CSS Modules and Styled Components',
      'Tailwind CSS Deep Dive',
      'Material UI Components and Theming',
      'Responsive and Dark Mode Design',
    ],
  },
  {
    title: 'Module 7: API Integration & Data Fetching',
    subtopics: [
      'REST APIs with Axios and Fetch',
      'React Query for Data Caching',
      'Error and Loading States Handling',
    ],
  },
  {
    title: 'Module 8: Routing and Navigation',
    subtopics: [
      'React Router v6',
      'Dynamic Routing and Nested Routes',
      'Protected Routes and Redirects',
    ],
  },
  {
    title: 'Module 9: Performance & Optimization',
    subtopics: [
      'Lazy Loading, Code Splitting',
      'Memoization Techniques',
      'Debugging with React DevTools',
    ],
  },
  {
    title: 'Module 10: Deployment & Hosting',
    subtopics: [
      'Version Control (Git & GitHub)',
      'Build & Deploy on Vercel/Netlify',
      'Environment Variables & Configs',
    ],
  },
  {
    title: 'Module 11: Capstone Project',
    subtopics: [
      'Build & Deploy a Full React Application (e.g., E-commerce / Dashboard / Portfolio)',
      'Peer Review + Code Walkthrough',
    ],
  },
];
// Data for the FAQs tab
export const FAQS_DATA: FaqCategory[] = [
  {
    name: 'Course Content',
    questions: [
      {
        q: 'What is the course structure?', a: 'The course is structured into self-contained modules, each covering a major topic. Modules consist of recorded lectures, practice problems, and internal contests.',
        isOpenInImage: false
      },
      {
        q: 'How many hours of content does each level include?', a: '40+ hours of Recorded Lectures. 20+ hours of Recorded Problem Solving Videos.',
        isOpenInImage: false
      },
      {
        q: 'What are the speaking languages used throughout the course?', a: 'The primary language of instruction is English, but technical terms are clearly explained.',
        isOpenInImage: false
      },
      {
        q: 'Is the course programming language dependent?', a: 'The core concepts are language-agnostic, but all code examples and solutions are provided in C++.',
        isOpenInImage: false
      },
      {
        q: 'How long are the lecture recordings?', a: 'Most lecture recordings are between 15 and 45 minutes long, designed for optimal focus and retention.',
        isOpenInImage: false
      },
    ],
  },
  {
    name: 'Doubt Support',
    questions: [
      {
        q: 'How is the instant doubt support provided?', a: 'Doubt support is provided through a dedicated Telegram group with high-rated coders, ensuring quick and accurate responses.',
        isOpenInImage: false
      },
      {
        q: 'What is the allowed difficulty of doubts?', a: 'Allowed difficulty of doubts is up to 1300 rating on Codeforces. For higher difficulty problems, you should learn the concepts first.',
        isOpenInImage: false
      },
    ],
  },
  {
    name: 'Miscellaneous',
    questions: [
      {
        q: 'Will I get a certificate?', a: 'Yes, a course completion certificate is provided upon successfully finishing all modules and major assignments.',
        isOpenInImage: false
      },
      {
        q: 'Is there a refund policy?', a: 'A full refund is available within 7 days of enrollment, provided you have not accessed more than 2 modules.',
        isOpenInImage: false
      },
    ],
  },
  {
    name: 'Payment',
    questions: [
      {
        q: 'What payment methods are accepted?', a: 'We accept all major credit cards, PayPal, and UPI payments.',
        isOpenInImage: false
      },
    ],
  },
  {
    name: 'Practice Problems',
    questions: [
      {
        q: 'Where are the practice problems hosted?', a: 'Practice problems are hosted on our internal platform and on popular online judges like Codeforces and CodeChef.',
        isOpenInImage: false
      },
    ],
  },
  {
    name: 'Validity',
    questions: [
      {
        q: 'What is the validity period for course access?', a: 'You get lifetime access to all course materials and future updates.',
        isOpenInImage: false
      },
    ],
  },
];
