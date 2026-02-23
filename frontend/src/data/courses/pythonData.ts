import type { CourseData } from '../../components/courses/shared/types';

export const pythonData: CourseData = {
  tabs: ['Features', 'Syllabus', 'Pre-requisites', 'FAQs'],
  hero: {
    title: 'Python Programming',
    description: `Start your coding journey with Python — the world's most beginner-friendly yet powerful programming language.
This course is crafted for complete beginners who want to learn programming fundamentals through hands-on Python coding.
We focus on building your core skills — implementation, debugging, logical reasoning, and clean coding — before you ever need to worry about complex algorithms`,
    trustedText: 'Trusted by 2800+ Students Previously',
  },
  about: {
    title: 'Python Programming',
    image: '/python.png',
    price: 999,
    originalPrice: 1249,
    discount: '20% Discount',
    features: [
      '<span class="font-bold mr-1 text-[#6334B9]">40+ hrs</span> of recorded content from our Live Batch',
      '<span class="font-bold mr-1 text-[#6334B9]">1 year</span> Access to all course material',
      '<span class="font-bold mr-1 text-[#6334B9]">3 months</span> of Doubt Support from Mentors',
      '<span class="font-bold mr-1 text-[#6334B9]">Lifetime access</span> to Practice Problems and Projects',
    ],
  },
  features: [
    { iconName: 'Video', title: '40+ Hours of Python Lectures', description: 'Covering the most relevant beginner-to-intermediate concepts with practical demos.' },
    { iconName: 'Code', title: '100+ Curated Practice Problems', description: 'Designed to reinforce syntax, logic, and debugging skills.' },
    { iconName: 'Lightbulb', title: 'Hints & Video Solutions', description: 'Understand why each approach works, not just how.' },
    { iconName: 'Chat', title: 'Instant Doubt Support from Expert Developers', description: 'Get unstuck fast — mentors guide you until your concept clicks.' },
    { iconName: 'Medal', title: 'Gamified Progress Tracking & Leaderboard', description: 'Earn points, stay motivated, and track your growth as you learn.' },
    { iconName: 'Contest', title: 'Internal Coding Contests on Python Topics', description: 'Timed challenges to test and solidify your skills.' },
    { iconName: 'Discussion', title: 'Post-Contest Editorials & Upsolving Sessions', description: 'Deep-dive explanations to help you think like a developer.' },
  ],
  syllabus: [
    { title: 'Module 1: Introduction to Python & Setup', subtopics: ['What is Programming & Why Python?', 'Installing Python & Setting Up IDE (VS Code / PyCharm / Jupyter)', 'Your First Program & Basic Syntax', 'Data Types & Variables', 'Type Casting and Dynamic Typing', 'Input & Output Operations'] },
    { title: 'Module 2: Control Flow and Decision Making', subtopics: ['if, elif, else Statements', 'Nested Conditions', 'for and while Loops', 'Loop Control (break, continue, pass)', 'Range Function and Iteration', 'Mini Projects: Number Guessing Game, Basic Calculator'] },
    { title: 'Module 3: Functions and Modules', subtopics: ['Function Definition & Calling', 'Arguments & Return Values', 'Default and Keyword Arguments', 'Lambda Functions', 'Importing and Using Modules', 'Recursion and Call Stack'] },
    { title: 'Module 4: Data Structures in Python', subtopics: ['Lists & List Comprehension', 'Tuples & Immutability', 'Dictionaries and Key-Value Mapping', 'Sets & Mathematical Operations', 'Nested Data Structures', 'Practice Problems: Frequency Count, Unique Elements'] },
    { title: 'Module 5: Strings and File Handling', subtopics: ['String Methods & Slicing', 'Escape Characters and Formatting', 'Reading and Writing Files', 'Working with CSV and Text Files', 'Mini Project: Word Counter & File Analyzer'] },
    { title: 'Module 6: Error Handling & Exceptions', subtopics: ['Common Runtime Errors', 'Try-Except Blocks', 'Raising Exceptions', 'Custom Error Messages', 'Using finally and else'] },
    { title: 'Module 7: Object-Oriented Programming (OOP)', subtopics: ['Classes and Objects', '__init__() Constructor', 'Instance vs Class Variables', 'Inheritance and Polymorphism', 'Encapsulation and Abstraction', 'Mini Project: Library Management System'] },
    { title: 'Module 8: Modules & Standard Libraries', subtopics: ['Understanding Modules and Packages', 'Using math, datetime, random, and os', 'Exploring pip and Installing External Libraries'] },
    { title: 'Module 9: Debugging and Optimization', subtopics: ['Syntax and Logical Error Detection', 'Using Debug Tools (IDLE / VS Code)', 'Tracing Program Flow', 'Writing Readable and Optimized Code', 'Time Complexity Basics'] },
    { title: 'Module 10: Capstone Mini Project', subtopics: ['Build a Real-World Application like:', 'Expense Tracker', 'Student Report System', 'Simple Inventory App'] },
  ],
  faqs: [
    { name: 'Course Content', questions: [{ q: 'What is the course structure?', a: 'The course is structured into self-contained modules, each covering a major topic. Modules consist of recorded lectures, practice problems, and internal contests.', isOpenInImage: false }, { q: 'How many hours of content does each level include?', a: '40+ hours of Recorded Lectures. 20+ hours of Recorded Problem Solving Videos.', isOpenInImage: false }] },
    { name: 'Doubt Support', questions: [{ q: 'How is the instant doubt support provided?', a: 'Doubt support is provided through a dedicated Telegram group with high-rated coders, ensuring quick and accurate responses.', isOpenInImage: false }] },
    { name: 'Miscellaneous', questions: [{ q: 'Will I get a certificate?', a: 'Yes, a course completion certificate is provided upon successfully finishing all modules and major assignments.', isOpenInImage: false }] },
    { name: 'Payment', questions: [{ q: 'What payment methods are accepted?', a: 'We accept all major credit cards, PayPal, and UPI payments.', isOpenInImage: false }] },
    { name: 'Validity', questions: [{ q: 'What is the validity period for course access?', a: 'You get lifetime access to all course materials and future updates.', isOpenInImage: false }] },
  ],
  prerequisites: [
    { icon: 'book', title: 'High School Maths', content: 'Basic school-level math and logical thinking' },
    { icon: 'clock', title: 'Time Commitment of 2 Hours/Day', content: 'No prior programming knowledge required' },
    { icon: 'laptop', title: 'Development Environment', content: 'A laptop or PC with Python 3 installed (or an online IDE like Replit / Jupyter Notebook)' },
  ],
};
