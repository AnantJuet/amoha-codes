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
    title: '40+ Hours of Structured Lectures', 
    description: 'Carefully designed to take you from zero to confident Java coder.' 
  },
  { 
    iconName: 'Code', 
    title: '100+ Curated Practice Problems', 
    description: 'Covering variables, arrays, loops, objects, and real-world coding tasks.' 
  },
  { 
    iconName: 'Lightbulb', 
    title: 'Step-by-Step Video Explanations & Hints', 
    description: 'Get guided walkthroughs to understand each concept deeply.' 
  },
  { 
    iconName: 'Chat', 
    title: 'Instant Doubt Support from Mentors', 
    description: 'Resolve your queries instantly and keep your learning momentum strong.' 
  },
  { 
    iconName: 'Medal', 
    title: 'Gamified Progress Tracking & Leaderboard', 
    description: 'Stay motivated and track your progress in an interactive environment.' 
  },
  { 
    iconName: 'Contest', 
    title: 'Internal Coding Challenges & Mini Projects', 
    description: 'Build mini apps and scripts to apply what you learn.' 
  },
  { 
    iconName: 'Discussion', 
    title: 'Post-Project Discussions', 
    description: 'Learn optimization, code refactoring, and industry-level coding practices.' 
  },
];

// Data for the Syllabus tab
export const SYLLABUS_DATA: ModuleItem[] = [
  {
    title: 'Module 1: JavaScript Basics & Environment Setup',
    subtopics: [
      'Introduction to Programming Concepts',
      'Setting up Node.js & Browser Console',
      'Variables, Constants, Data Types',
      'Operators, Expressions & Input/Output',
      'Writing your First JS Program',
    ],
  },
  {
    title: 'Module 2: Control Flow & Loops',
    subtopics: [
      'Conditional Statements (if, else, switch)',
      'Loops (for, while, do-while)',
      'Break and Continue Statements',
      'Logic Building Exercises',
    ],
  },
  {
    title: 'Module 3: Functions & Scope',
    subtopics: [
      'Declaring and Invoking Functions',
      'Arrow Functions & Function Expressions',
      'Scope and Hoisting',
      'Default & Rest Parameters',
      'Recursion Basics',
    ],
  },
  {
    title: 'Module 4: Arrays & Objects',
    subtopics: [
      'Array Operations & Iteration',
      'Object Creation and Manipulation',
      'Nested Structures',
      'JSON Basics and Parsing',
    ],
  },
  {
    title: 'Module 5: Strings & Regular Expressions',
    subtopics: [
      'String Manipulation Techniques',
      'Template Literals',
      'Regex for Pattern Matching',
      'Common String Problems',
    ],
  },
  {
    title: 'Module 6: Error Handling & Debugging',
    subtopics: [
      'Syntax and Runtime Errors',
      'Using try, catch, and finally',
      'Debugging with Browser Tools',
      'Writing Clean and Readable Code',
    ],
  },
  {
    title: 'Module 7: ES6+ Features',
    subtopics: [
      'Let, Const, and Block Scope',
      'Arrow Functions',
      'Destructuring and Spread Operator',
      'Modules and Imports',
      'Promises and Async/Await',
    ],
  },
  {
    title: 'Module 8: DOM Manipulation',
    subtopics: [
      'Understanding the Document Object Model',
      'Selecting and Modifying Elements',
      'Event Handling',
      'Mini Projects: To-Do App, Counter, Form Validator',
    ],
  },
  {
    title: 'Module 9: Working with APIs',
    subtopics: [
      'Fetch API and JSON Data',
      'Consuming Public APIs',
      'Handling Errors in Async Code',
    ],
  },
  {
    title: 'Module 10: Mini Projects & Debugging Practice',
    subtopics: [
      'Interactive Quiz App',
      'Expense Tracker',
      'Real-Time Clock',
      'Debugging Common JS Bugs',
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
