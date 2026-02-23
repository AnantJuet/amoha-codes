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
    title: '80+ Hours of High-Quality Video Content',
    description: 'Comprehensive, beginner-friendly modules that gradually advance to complex integrations.',
  },
  {
    iconName: 'Code',
    title: '7+ Real-World Projects',
    description: 'Build and deploy a full range of applications from To-Do Apps to E-Commerce platforms.',
  },
  {
    iconName: 'Lightbulb',
    title: 'Instant Doubt Support by Experienced Mentors',
    description: '3 months of personalized help from developers who work with the MERN stack professionally.',
  },
  {
    iconName: 'Chat',
    title: 'Code Reviews & Project Feedback',
    description: 'Get structured guidance on improving your design, logic, and architecture.',
  },
  {
    iconName: 'Medal',
    title: 'Certificate of Completion',
    description: 'Industry-verified certificate for your portfolio and LinkedIn.',
  },
  // Adding placeholders to complete a standard 7-item feature list
  {
    iconName: 'Contest',
    title: 'Authentication System (JWT-based)',
    description: 'Learn to secure your applications with industry-standard JWT authentication.',
  },
  {
    iconName: 'Discussion',
    title: 'Full-Stack MERN Dashboard',
    description: 'Master data visualization and management by building a complete dashboard.',
  },
];
// Data for the Syllabus tab
export const SYLLABUS_DATA: ModuleItem[] = [
  {
    title: 'Module 1: Web Development Foundations',
    subtopics: [
      'HTML5, CSS3, JavaScript Basics',
      'ES6+ (Arrow Functions, Modules, Async/Await)',
      'Git & GitHub Workflow',
      'HTTP, REST, and APIs',
    ],
  },
  {
    title: 'Module 2: React.js Fundamentals',
    subtopics: [
      'JSX, Virtual DOM, and Component Architecture',
      'Props, State, and Hooks (useState, useEffect, useRef)',
      'Routing with React Router',
      'Forms and Controlled Components',
      'Context API and Redux Toolkit',
      'Tailwind CSS & Responsive Design',
    ],
  },
  {
    title: 'Module 3: Backend Development with Node.js',
    subtopics: [
      'Introduction to Node.js & NPM',
      'Creating Servers with Express.js',
      'Middleware, Routers, and Controllers',
      'Working with Environment Variables',
      'RESTful APIs and CRUD Operations',
    ],
  },
  {
    title: 'Module 4: Databases with MongoDB',
    subtopics: [
      'Introduction to NoSQL Databases',
      'CRUD Operations in MongoDB',
      'Designing Collections and Documents',
      'Mongoose ODM and Schema Design',
      'Data Relationships (Embedding vs Referencing)',
    ],
  },
  {
    title: 'Module 5: Authentication & Authorization',
    subtopics: [
      'JWT (JSON Web Token) Authentication',
      'Password Hashing (bcrypt)',
      'Session and Cookie Management',
      'Role-Based Access Control',
      'Protecting Routes and Endpoints',
    ],
  },
  {
    title: 'Module 6: Advanced MERN Concepts',
    subtopics: [
      'Connecting Frontend (React) with Backend (Node + Express)',
      'State Management for Async Operations',
      'File Uploads & Cloud Storage',
      'Environment Configuration',
      'Handling Errors and Validations',
    ],
  },
  {
    title: 'Module 7: Deployment & DevOps Basics',
    subtopics: [
      'Version Control and CI/CD Setup',
      'Deploying Frontend on Vercel / Netlify',
      'Deploying Backend on Render / AWS',
      'MongoDB Atlas Setup',
      'Production Optimization',
    ],
  },
  {
    title: 'Module 8: Real-Time Features',
    subtopics: [
      'Introduction to WebSockets',
      'Building a Chat App with Socket.io',
      'Notifications and Live Updates',
    ],
  },
  {
    title: 'Module 9: Testing & Debugging',
    subtopics: [
      'Unit Testing with Jest',
      'Postman API Testing',
      'Logging & Error Tracking',
    ],
  },
  {
    title: 'Module 10: Capstone Project',
    subtopics: [
      'End-to-End Full-Stack Application (E-commerce / Social App / SaaS Dashboard)',
      'Full Deployment + Review',
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
