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
    title: '70+ Hours of HD Video Lectures',
    description: 'From fundamentals to advanced architecture with hands-on demos.',
  },
  {
    iconName: 'Code',
    title: '6+ Real Projects',
    description: 'Build practical apps like an E-commerce Store, Blog App, and Authentication Dashboard.',
  },
  {
    iconName: 'Chat',
    title: '3-Month Doubt & Mentor Support',
    description: 'Instant help from experienced React and Next.js developers.',
  },
  {
    iconName: 'Medal',
    title: 'Certificate of Completion',
    description: 'Industry-recognized proof of skill mastery.',
  },
  {
    iconName: 'Lightbulb',
    title: 'Advanced Features Coverage',
    description: 'Includes topics like Server-Side Rendering (SSR), API Integration, and Real-Time Chat.',
  },
  // Adding placeholders to complete a standard 7-item feature list
  {
    iconName: 'Contest',
    title: 'Full Portfolio Deployment with CI/CD',
    description: 'Master the process of building and deploying production-ready applications.',
  },
  {
    iconName: 'Discussion',
    title: 'E-commerce Store with Next.js & Redux',
    description: 'Deep dive into complex state management and full-stack integration.',
  },
];
// Data for the Syllabus tab
export const SYLLABUS_DATA: ModuleItem[] = [
  {
    title: 'Module 1: Web & JavaScript Foundations',
    subtopics: [
      'HTML5, CSS3, and Responsive Design',
      'Core JavaScript Concepts',
      'ES6+ Features (Destructuring, Async/Await, Modules)',
    ],
  },
  {
    title: 'Module 2: React.js Core Concepts',
    subtopics: [
      'JSX, Virtual DOM & Rendering',
      'Props, State, and Event Handling',
      'React Hooks (useState, useEffect, useRef, useMemo, useCallback)',
      'Conditional Rendering and Component Reusability',
    ],
  },
  {
    title: 'Module 3: Advanced React & State Management',
    subtopics: [
      'Context API vs Redux Toolkit',
      'Async State with Redux Thunk / RTK Query',
      'Forms, Validation, and Controlled Inputs',
      'Performance Optimization in React',
    ],
  },
  {
    title: 'Module 4: Styling in React',
    subtopics: [
      'CSS Modules, Styled Components',
      'Tailwind CSS Fundamentals',
      'Responsive & Dark Mode Design',
      'ShadCN/UI Component Library Integration',
    ],
  },
  {
    title: 'Module 5: Introduction to Next.js',
    subtopics: [
      'Why Next.js? CSR vs SSR vs SSG',
      'File-Based Routing & App Router',
      'Layouts, Nested Routes, and Dynamic Paths',
      'Static Site Generation (SSG)',
      'Server-Side Rendering (SSR)',
      'Data Fetching (getServerSideProps, getStaticProps)',
    ],
  },
  {
    title: 'Module 6: Advanced Next.js Concepts',
    subtopics: [
      'Server Actions and API Routes',
      'Middleware and Authentication',
      'Integrating Databases (MongoDB / PostgreSQL)',
      'Dynamic Metadata & SEO Optimization',
      'Image Optimization and Lazy Loading',
    ],
  },
  {
    title: 'Module 7: API Integration & Data Handling',
    subtopics: [
      'REST API Integration',
      'GraphQL Basics with Next.js',
      'Axios and Fetch',
      'React Query and Caching Strategies',
    ],
  },
  {
    title: 'Module 8: Authentication & Security',
    subtopics: [
      'NextAuth.js Implementation',
      'JWT Authentication',
      'Protected Routes and Role-Based Access',
    ],
  },
  {
    title: 'Module 9: Testing & Performance',
    subtopics: [
      'Unit Testing with Jest',
      'Lighthouse Audits & Performance Metrics',
      'Debugging Next.js Applications',
    ],
  },
  {
    title: 'Module 10: Deployment & DevOps',
    subtopics: [
      'Git & GitHub Workflow',
      'Environment Configurations',
      'Deployment on Vercel & Render',
      'Versioning and CI/CD Setup',
    ],
  },
  {
    title: 'Module 11: Capstone Project',
    subtopics: [
      'End-to-End Next.js Application (E-commerce / SaaS Dashboard / Blog Platform)',
      'Deployed and Reviewed by Mentors',
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
