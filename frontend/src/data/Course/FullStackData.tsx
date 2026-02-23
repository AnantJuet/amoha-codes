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
    title: '80+ Hours of Recorded Lectures',
    description: 'Covers the complete modern web stack, taught by industry engineers.',
  },
  {
    iconName: 'Code',
    title: 'Real-World Projects',
    description: 'Build and deploy production-grade apps — e-commerce, chat apps, portfolio systems, and dashboards.',
  },
  {
    iconName: 'Chat',
    title: 'Doubt Support by Expert Developers',
    description: 'Guided mentorship from professionals with real-world experience.',
  },
  {
    iconName: 'Lightbulb',
    title: 'Code Reviews & Debugging Sessions',
    description: 'Improve code quality and learn professional practices.',
  },
  {
    iconName: 'Medal',
    title: 'Certificate of Completion',
    description: 'Showcase your skills and strengthen your resume.',
  },
  // Adding placeholders to complete a standard 7-item feature list
  {
    iconName: 'Contest',
    title: 'Full-Stack Deployment & Scaling',
    description: 'Master CI/CD and learn how to deploy production-ready applications.',
  },
  {
    iconName: 'Discussion',
    title: 'Access to Premium Templates',
    description: 'Jumpstart your projects with professionally designed boilerplate code.',
  },
];
// Data for the Syllabus tab
export const SYLLABUS_DATA: ModuleItem[] = [
  {
    title: 'Module 1: Web Foundations',
    subtopics: [
      'Internet & How Websites Work',
      'HTML5, CSS3, and Responsive Design',
      'JavaScript Essentials',
    ],
  },
  {
    title: 'Module 2: Advanced JavaScript',
    subtopics: [
      'DOM Manipulation',
      'Asynchronous JS: Callbacks, Promises, Async/Await',
      'Fetch API & Error Handling',
      'ES6+ Features',
    ],
  },
  {
    title: 'Module 3: Frontend Development with React',
    subtopics: [
      'Component Architecture',
      'Props, State, and Lifecycle',
      'React Hooks and Context API',
      'Routing with React Router',
      'State Management with Redux',
      'Project: Build a React Portfolio Site',
    ],
  },
  {
    title: 'Module 4: Backend Development with Node.js & Express',
    subtopics: [
      'Setting up RESTful APIs',
      'Routing, Middleware, and Controllers',
      'Handling JSON and Query Params',
      'Error Handling and Logging',
      'Project: REST API for Blog Application',
    ],
  },
  {
    title: 'Module 5: Databases',
    subtopics: [
      'SQL vs NoSQL Concepts',
      'MongoDB CRUD Operations',
      'Mongoose Models and Validation',
      'PostgreSQL with Node.js',
      'Project: Data-driven App with MongoDB',
    ],
  },
  {
    title: 'Module 6: Authentication & Authorization',
    subtopics: [
      'JWT (JSON Web Tokens)',
      'OAuth & Google Login',
      'Session & Cookie Management',
      'Role-Based Access Control',
    ],
  },
  {
    title: 'Module 7: Deployment & DevOps Basics',
    subtopics: [
      'Version Control with Git & GitHub',
      'CI/CD Concepts',
      'Hosting Frontend on Vercel / Netlify',
      'Deploying Node.js apps on Render / AWS',
      'Environment Variables and Security',
    ],
  },
  {
    title: 'Module 8: Full-Stack Integration',
    subtopics: [
      'Connecting React Frontend with Node Backend',
      'API Calls and Cross-Origin Setup (CORS)',
      'Project: Full-Stack E-commerce Application',
    ],
  },
  {
    title: 'Module 9: Testing & Performance Optimization',
    subtopics: [
      'Unit Testing with Jest',
      'Load Testing & Monitoring',
      'Frontend Performance Optimization',
    ],
  },
  {
    title: 'Module 10: Capstone Project',
    subtopics: [
      'Build & Deploy a Real-World Full-Stack Application',
      '(e.g., Social Media App, Task Manager, or SaaS Dashboard)',
      'End-to-End Project Submission and Review',
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
