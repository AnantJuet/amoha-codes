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
    description: 'Learn HTML the right way — from the structure of a tag to complete responsive pages.',
  },
  {
    iconName: 'Code',
    title: '100+ Curated Practice Projects & Exercises',
    description: 'Every topic comes with small website-building tasks to make learning hands-on and fun.',
  },
  {
    iconName: 'Lightbulb',
    title: 'Hints and Video Solutions',
    description: 'Get help whenever you’re stuck. Build confidence with guided practice.',
  },
  {
    iconName: 'Chat',
    title: 'Instant Doubt Support',
    description: 'Expert mentors available to solve your queries instantly.',
  },
  {
    iconName: 'Medal',
    title: 'Gamified Progress Tracking & Leaderboard',
    description: 'Stay motivated while climbing the ranks as an aspiring web developer.',
  },
  {
    iconName: 'Contest',
    title: 'Mini Internal Web Projects & Challenges',
    description: 'Apply your learning through real projects like portfolio pages, forms, and landing pages.',
  },
  {
    iconName: 'Discussion',
    title: 'Post-Project Feedback & Discussion',
    description: 'Learn from expert reviews and enhance your web development standards.',
  },
];
// Data for the Syllabus tab
export const SYLLABUS_DATA: ModuleItem[] = [
  {
    title: 'Module 1: Getting Started with HTML',
    subtopics: [
      'What is HTML and How the Web Works',
      'Understanding Browsers, Editors, and Inspect Tools',
      'Writing Your First HTML Page',
      'Structure of an HTML Document',
    ],
  },
  {
    title: 'Module 2: HTML Fundamentals',
    subtopics: [
      'Tags, Elements, and Attributes',
      'Headings, Paragraphs, and Text Formatting',
      'Links, Lists, and Tables',
      'Comments and Code Readability',
    ],
  },
  {
    title: 'Module 3: Working with Media',
    subtopics: [
      'Images and Image Optimization',
      'Audio and Video Embedding',
      'Using the <iframe> Tag for External Media',
    ],
  },
  {
    title: 'Module 4: Forms and User Input',
    subtopics: [
      'Input Types, Labels, and Placeholders',
      'Creating Login & Registration Forms',
      'Form Validation Basics',
    ],
  },
  {
    title: 'Module 5: Semantic HTML',
    subtopics: [
      'Header, Footer, Article, and Section Tags',
      'Accessibility and SEO Basics',
      'Clean and Semantic Web Design',
    ],
  },
  {
    title: 'Module 6: HTML5 Advanced Features',
    subtopics: [
      '<canvas> and <svg> Elements',
      'Audio & Video APIs',
      'Geolocation and Web Storage Overview',
    ],
  },
  {
    title: 'Module 7: Project Module',
    subtopics: [
      'Build Your First Personal Portfolio Page',
      'Create a Contact Form with Validation',
      'Mini Web Page Projects for Practice',
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
