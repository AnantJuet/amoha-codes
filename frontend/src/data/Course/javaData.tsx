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
  { iconName: 'Video', title: ' 40+ Hours of Structured Java Lectures', description: 'Covering every beginner to intermediate concept with crystal-clear explanations.' },
  { iconName: 'Code', title: '100+ Curated Java Practice Problems', description: 'Hands-on problems that build your logic and confidence.' },
  { iconName: 'Lightbulb', title: 'Hints and Video Solutions for Every Challenges', description: 'Understand the reasoning behind each solution, not just the syntax.' },
  { iconName: 'Chat', title: 'Instant Doubt Support by Expert Coders', description: 'Learn directly from experienced Java developers and educators.' },
  { iconName: 'Medal', title: 'Gamified Progress Tracking & Leaderboard', description: 'Stay motivated, unlock milestones, and compete with peers.' },
  { iconName: 'Contest', title: 'Internal Coding Contests on Java Topics', description: 'Deepen your understanding with post-contest explanations.' },
  { iconName: 'Discussion', title: 'Post-Contest Editorials & Upsolving Sessions', description: 'Deepen your understanding with post-contest explanations.' },
];

// Data for the Syllabus tab
export const SYLLABUS_DATA: ModuleItem[] = [
  {
    title: 'Module 1: Introduction to Java & Setup',
    subtopics: [
      'What is Java? Why Java?',
      'Installing JDK and Setting Up IDE',
      'Writing Your First Java Program',
      'Compilation & Execution Flow',
      'Basic Syntax & Code Structure',
      'Variables, Constants & Data Types',
      'Input and Output in Java (Scanner, System.out)',
    ],
  },
  {
    title: 'Module 2: Operators, Conditions & Loops',
    subtopics: [
      'Arithmetic, Logical & Relational Operators',
      'Conditional Statements (if, else if, switch)',
      'Loops: for, while, do-while',
      'Break and Continue Statements',
      'Nested Loops & Common Patterns',
      'Mini Project: Number Guessing or Simple Calculator',
    ],
  },
  {
    title: 'Module 3: Functions & Methods',
    subtopics: [
      'Defining and Calling Methods',
      'Parameters & Return Values',
      'Pass by Value in Java',
      'Method Overloading',
      'Recursion and Stack Tracing',
      'Practical Exercises',
    ],
  },
  {
    title: 'Module 4: Arrays and Collections (Beginner)',
    subtopics: [
      'Single & Multi-Dimensional Arrays',
      'Array Operations (Insert, Delete, Update)',
      'For-each Loop & Enhanced Iteration',
      'Introduction to Java Collections Framework',
      'ArrayList, LinkedList & Basic Operations',
      'Mini Project: Student Score Tracker',
    ],
  },
  {
    title: 'Module 5: Strings and File Handling',
    subtopics: [
      'String Basics and Immutability',
      'String Methods (charAt, substring, split, etc.)',
      'StringBuilder and StringBuffer',
      'File I/O (FileReader, BufferedReader, FileWriter)',
      'Reading/Writing Text Files',
      'Mini Project: Word Counter',
    ],
  },
  {
    title: 'Module 6: Exception Handling',
    subtopics: [
      'Introduction to Exceptions',
      'Try, Catch, Finally, and Throw',
      'Checked vs Unchecked Exceptions',
      'Custom Exceptions',
      'Handling Multiple Exceptions',
    ],
  },
  {
    title: 'Module 7: Object-Oriented Programming (OOP)',
    subtopics: [
      'Classes and Objects',
      'Constructors & Destructors',
      'this Keyword',
      'Access Modifiers (public, private, protected)',
      'Static Members & Methods',
      'Encapsulation & Abstraction',
      'Mini Project: Bank Account System',
    ],
  },
  {
    title: 'Module 8: Inheritance, Polymorphism & Interfaces',
    subtopics: [
      'Types of Inheritance in Java',
      'Method Overriding',
      'Super Keyword & Constructor Chaining',
      'Abstract Classes',
      'Interfaces & Multiple Inheritance',
      'Upcasting and Downcasting',
    ],
  },
  {
    title: 'Module 9: Advanced Topics & Packages',
    subtopics: [
      'Understanding Packages and Imports',
      'Introduction to Wrapper Classes & Autoboxing',
      'Java Collections (HashMap, HashSet, TreeMap)',
      'Generics & Type Safety',
      'Inner Classes and Anonymous Classes',
      'Basic File Serialization',
    ],
  },
  {
    title: 'Module 10: Debugging & Code Optimization',
    subtopics: [
      'Identifying Syntax & Logical Errors',
      'Using Debugger Tools (IntelliJ / Eclipse)',
      'Breakpoints and Step Execution',
      'Writing Clean, Maintainable Code',
      'Time and Space Complexity Basics',
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
