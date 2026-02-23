import type { CourseData } from '../../components/courses/shared/types';

export const cssData: CourseData = {
  tabs: ['Features', 'Syllabus', 'Pre-requisites', 'FAQs'],
  hero: {
    title: 'CSS Programming',
    description: `Level 1 is crafted for beginners who want to transform plain HTML pages into visually stunning and responsive websites.
This course focuses on mastering Cascading Style Sheets (CSS) — the creative layer of the web.
You'll learn how to style elements, position layouts, design animations, and build responsive pages that look amazing on any device.
🎨 Design sleek, modern web pages
📱 Learn responsive layouts and flexbox/grid
🚀 Prepare for advanced frontend frameworks like React & Tailwind`,
    trustedText: 'Trusted by 2800+ Students Previously',
  },
  about: {
    title: 'CSS Programming',
    image: '/css.png',
    price: 999,
    originalPrice: 1249,
    discount: '20% Discount',
    features: [
      '<span class="font-bold mr-1 text-[#6334B9]">50+ hrs</span> of recorded content from our Live Batch',
      '<span class="font-bold mr-1 text-[#6334B9]">1 year</span> Access to all course material',
      '<span class="font-bold mr-1 text-[#6334B9]">3 months</span> of Doubt Support from Mentors',
      '<span class="font-bold mr-1 text-[#6334B9]">Lifetime access</span> to Practice Projects and Styling Challenges',
    ],
  },
  features: [
    { iconName: 'Video', title: '50+ Hours of Recorded Lectures', description: 'Dive into the art of styling — from color theory to responsive design.' },
    { iconName: 'Code', title: '100+ Practice Exercises & Mini Projects', description: 'Hands-on activities to master each CSS concept through real-world implementation.' },
    { iconName: 'Lightbulb', title: 'Hints, Code Walkthroughs & Solutions', description: 'Understand not just what works, but why it works.' },
    { iconName: 'Chat', title: 'Instant Doubt Support by Frontend Experts', description: 'Never get stuck while experimenting with layouts and properties.' },
    { iconName: 'Medal', title: 'Gamified Progress Tracker & Leaderboard', description: 'Keep your creative journey exciting and rewarding.' },
    { iconName: 'Contest', title: 'Design Challenges & Internal Contests', description: 'Compete, learn, and showcase your best design ideas.' },
    { iconName: 'Discussion', title: 'Project Feedback & Mentor Sessions', description: 'Polish your CSS skills with personalized reviews from experts.' },
  ],
  syllabus: [
    { title: 'Module 1: Getting Started with CSS', subtopics: ['What is CSS and How It Works with HTML', 'Types of CSS — Inline, Internal, and External', 'Syntax, Selectors, and Specificity', 'Linking CSS Files and Managing Stylesheets'] },
    { title: 'Module 2: Colors, Text & Fonts', subtopics: ['Working with Colors (RGB, HEX, HSL)', 'Typography: Font Families, Weights, and Sizes', 'Text Spacing, Line Height, and Readability', 'Using Google Fonts & Custom Fonts'] },
    { title: 'Module 3: The Box Model', subtopics: ['Understanding Margin, Padding, and Border', 'Box Sizing & Content Flow', 'Layout Control with Display Property'] },
    { title: 'Module 4: Positioning & Layout', subtopics: ['Position: Static, Relative, Absolute, Fixed, Sticky', 'Float and Clear Properties', 'Z-Index and Stacking Context', 'Introduction to CSS Grid & Flexbox'] },
    { title: 'Module 5: Flexbox Deep Dive', subtopics: ['Understanding Main and Cross Axis', 'Aligning Items and Justifying Content', 'Building Responsive Layouts with Flexbox'] },
    { title: 'Module 6: CSS Grid Layout', subtopics: ['Creating Complex Page Layouts', 'Grid Lines, Areas, and Templates', 'Combining Grid and Flexbox'] },
    { title: 'Module 7: Styling Forms & Elements', subtopics: ['Buttons, Inputs, and Custom Checkboxes', 'Form Layouts and User Experience Enhancements', 'Hover and Focus Effects'] },
    { title: 'Module 8: Responsive Web Design', subtopics: ['Media Queries & Breakpoints', 'Mobile-First Design Philosophy', 'Fluid Layouts and Relative Units'] },
    { title: 'Module 9: Transitions, Transformations & Animations', subtopics: ['Keyframes and Animation Timing', 'Hover Animations, Parallax Effects, and Smooth Transitions', '2D & 3D Transformations'] },
    { title: 'Module 10: Final Projects', subtopics: ['Build a Personal Portfolio Website', 'Create a Responsive Landing Page', 'Style a Blog or Product Page from Scratch'] },
  ],
  faqs: [
    {
      name: 'Course Content',
      questions: [
        { q: 'What is the course structure?', a: 'The course is structured into self-contained modules, each covering a major topic. Modules consist of recorded lectures, practice problems, and internal contests.', isOpenInImage: false },
        { q: 'How many hours of content does each level include?', a: '40+ hours of Recorded Lectures. 20+ hours of Recorded Problem Solving Videos.', isOpenInImage: false },
        { q: 'What are the speaking languages used throughout the course?', a: 'The primary language of instruction is English, but technical terms are clearly explained.', isOpenInImage: false },
        { q: 'Is the course programming language dependent?', a: 'The core concepts are language-agnostic, but all code examples and solutions are provided in C++.', isOpenInImage: false },
        { q: 'How long are the lecture recordings?', a: 'Most lecture recordings are between 15 and 45 minutes long, designed for optimal focus and retention.', isOpenInImage: false },
      ],
    },
    {
      name: 'Doubt Support',
      questions: [
        { q: 'How is the instant doubt support provided?', a: 'Doubt support is provided through a dedicated Telegram group with high-rated coders, ensuring quick and accurate responses.', isOpenInImage: false },
        { q: 'What is the allowed difficulty of doubts?', a: 'Allowed difficulty of doubts is up to 1300 rating on Codeforces. For higher difficulty problems, you should learn the concepts first.', isOpenInImage: false },
      ],
    },
    {
      name: 'Miscellaneous',
      questions: [
        { q: 'Will I get a certificate?', a: 'Yes, a course completion certificate is provided upon successfully finishing all modules and major assignments.', isOpenInImage: false },
        { q: 'Is there a refund policy?', a: 'A full refund is available within 7 days of enrollment, provided you have not accessed more than 2 modules.', isOpenInImage: false },
      ],
    },
    {
      name: 'Payment',
      questions: [{ q: 'What payment methods are accepted?', a: 'We accept all major credit cards, PayPal, and UPI payments.', isOpenInImage: false }],
    },
    {
      name: 'Practice Problems',
      questions: [{ q: 'Where are the practice problems hosted?', a: 'Practice problems are hosted on our internal platform and on popular online judges like Codeforces and CodeChef.', isOpenInImage: false }],
    },
    {
      name: 'Validity',
      questions: [{ q: 'What is the validity period for course access?', a: 'You get lifetime access to all course materials and future updates.', isOpenInImage: false }],
    },
  ],
  prerequisites: [
    { icon: 'book', title: 'High School Maths', content: 'Basic school-level math and logical thinking' },
    { icon: 'clock', title: 'Time Commitment of 2 Hours/Day', content: 'No prior programming knowledge required' },
    { icon: 'laptop', title: 'Development Environment', content: 'A laptop or PC with a modern web browser (Chrome, Firefox, etc.)' },
  ],
};
