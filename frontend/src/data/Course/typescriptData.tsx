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
    title: '40+ Hours of Recorded Lectures', 
    description: 'Structured to make your TypeScript foundation solid and industry-ready.' 
  },
  { 
    iconName: 'Code', 
    title: '100+ Curated Practice Problems', 
    description: 'From syntax basics to advanced object-oriented programming.' 
  },
  { 
    iconName: 'Lightbulb', 
    title: 'Video Explanations and Code Hints', 
    description: 'Strengthen your understanding and solve problems step-by-step.' 
  },
  { 
    iconName: 'Chat', 
    title: 'Instant Mentor Support', 
    description: 'Resolve your doubts directly from experienced TypeScript developers.' 
  },
  { 
    iconName: 'Medal', 
    title: 'Gamified Progress & Leaderboard', 
    description: 'Track progress, earn points, and stay motivated while learning.' 
  },
  { 
    iconName: 'Contest', 
    title: 'Mini Projects with TypeScript', 
    description: 'Build small web applications to apply and test your learning.' 
  },
  { 
    iconName: 'Discussion', 
    title: 'Debugging & Post-Project Reviews', 
    description: 'Learn professional debugging and refactoring techniques.' 
  },
];

// Data for the Syllabus tab
export const SYLLABUS_DATA: ModuleItem[] = [
  {
    title: 'Module 1: Getting Started with TypeScript',
    subtopics: [
      'What is TypeScript and Why Use It',
      'Installing Node.js & TypeScript Compiler',
      'Setting up VS Code',
      'Writing and Running Your First Program',
      'Understanding .ts vs .js',
    ],
  },
  {
    title: 'Module 2: Type System Fundamentals',
    subtopics: [
      'Basic Types (string, number, boolean, any)',
      'Arrays and Tuples',
      'Type Inference and Type Aliases',
      'Union and Intersection Types',
      'Enums and Literal Types',
    ],
  },
  {
    title: 'Module 3: Functions in TypeScript',
    subtopics: [
      'Function Declarations and Expressions',
      'Optional and Default Parameters',
      'Rest Parameters',
      'Function Return Types',
      'Arrow Functions',
    ],
  },
  {
    title: 'Module 4: Object-Oriented Programming',
    subtopics: [
      'Classes and Objects',
      'Constructors and Access Modifiers',
      'Inheritance and Polymorphism',
      'Abstract Classes and Interfaces',
      'Getters and Setters',
    ],
  },
  {
    title: 'Module 5: Advanced TypeScript Concepts',
    subtopics: [
      'Generics and Type Constraints',
      'Utility Types (Partial, Readonly, etc.)',
      'Type Narrowing and Guards',
      'Mapped and Conditional Types',
    ],
  },
  {
    title: 'Module 6: Modules and Namespaces',
    subtopics: [
      'Import/Export Syntax',
      'Organizing Code into Modules',
      'Working with Default and Named Exports',
      'Using Third-Party Type Definitions (@types)',
    ],
  },
  {
    title: 'Module 7: Error Handling & Debugging',
    subtopics: [
      'Compile-Time vs Runtime Errors',
      'Using try, catch, and finally',
      'Type Checking Tools',
      'Debugging TypeScript with VS Code',
    ],
  },
  {
    title: 'Module 8: Working with Async Code',
    subtopics: [
      'Promises and Async/Await',
      'Handling API Calls',
      'Fetching Data from JSON APIs',
      'Error Handling in Asynchronous Code',
    ],
  },
  {
    title: 'Module 9: DOM & Event Handling (Browser)',
    subtopics: [
      'Selecting and Manipulating Elements',
      'Adding Event Listeners',
      'Handling Forms and Inputs',
      'Mini Projects: Todo App, Stopwatch, Calculator',
    ],
  },
  {
    title: 'Module 10: Mini Projects & TypeScript Best Practices',
    subtopics: [
      'Building and Structuring a TypeScript Project',
      'Compiling and Running Code Efficiently',
      'Using tsconfig.json',
      'TypeScript Coding Standards and Clean Code Principles',
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
