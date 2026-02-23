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
  { iconName: 'Video', title: ' 40+ Hours of Structured C++ Lectures', description: 'Learn every concept from scratch, with clear explanations and code walkthroughs.' },
  { iconName: 'Code', title: '100+ Curated Practice Problems', description: 'Solve beginner-to-intermediate problems that cover all major C++ topics.' },
  { iconName: 'Lightbulb', title: 'Hints and Video Solutions for Every Problems', description: 'Never get stuck — learn problem-solving approaches directly from mentors.' },
  { iconName: 'Chat', title: 'Instant Doubt Support by Expert Coders', description: 'Our mentors (high-rated on Codeforces and LeetCode) help you overcome roadblocks quickly..' },
  { iconName: 'Medal', title: 'Gamified Progress Tracking & Leaderboard', description: 'Track your journey, earn points, and compete with peers as you learn..' },
  { iconName: 'Contest', title: 'Internal Coding Contests on C++ Topics', description: 'Test your skills in real-time with in-house competitive contests.             ' },
  { iconName: 'Discussion', title: 'Post-Contest Editorials & Upsolving Sessions', description: 'Analyze solutions, learn new tricks, and level up your reasoning..' },
];

// Data for the Syllabus tab
export const SYLLABUS_DATA: ModuleItem[] = [
  {
    title: 'Module 1: Introduction to C++ & Getting Started',
    subtopics: ['What is Programming?',' Your First C++ Program','Input and Output and Data Flow', 'C++ Syntax, Structure, and Compilation', 'Comments, Tokens, and Identifiers', 'Variables, Constants, and Data Types','Type Casting and Overflow','Basic Mathematical Operations'],
  },
  {
    title: 'Module 2:  Control Flow and Decision Making',
    subtopics: ['Conditional Statements (if, else if, else)', 'Switch-Case Statements', 'Nested Conditions and Edge Cases','Loops: for, while, and do-while','Nested Loops and Loop Control (break, continue)','Scope and Lifetime of Variables','Mini Projects: Number Guessing Game, Calculator'],
  },
  {
    title: 'Module 3: Functions and Recursion',
    subtopics: ['Function Definition, Declaration & Calling', 'Parameters, Return Values, and Scope', 'Pass by Value vs Pass by Reference','Default and Inline Functions','Recursion: Concept and Call Stack','Recursive vs Iterative Thinking','Example Problems: Factorial, Fibonacci, Power Calculation'],
  },
  {
    title: 'Module 4: Arrays and Basic Data Handling',
    subtopics: ['Introduction to Arrays', '1D Arrays: Traversal, Insertion, Deletion, and Worst Cases', 'Searching and Updating Elements','Multi-Dimensional Arrays (2D Arrays & Matrices)','Common Array Operations: Reverse, Rotate, Sum, Average','Passing Arrays to Functions','Mini Project: Matrix Addition and Transpose'],
  },
  {
    title: 'Module 5: Strings and Character Handling',
    subtopics: ['Understanding char Arrays and String Literals', 'Introduction to std::string Class', 'Common String Functions (length(), substr(), find(), etc.)','Converting between Strings and Numbers','Comparing and Modifying Strings','Palindrome, Anagram, and Frequency Problems','String Streams and Input Handling'],
  },
  {
    title: 'Module 6: Pointers and Memory Management',
    subtopics: ['Understanding Memory Layout (Stack vs Heap)', 'Introduction to Pointers', 'Pointer Arithmetic','nullptr and Dangling Pointers','Dynamic Memory Allocation (new, delete)','References and Aliasing','Passing by Pointer and by Reference','Practical Use Cases of Pointers'],
  },
  {
    title: 'Module 7: Object-Oriented Programming (OOPs)',
    subtopics: ['What is OOP and Why It Matters', 'Classes and Objects', 'Constructors and Destructors', 'Access Modifiers (Public, Private, Protected)','Encapsulation and Abstraction','Function and Operator Overloading','this Pointer','Static Members and Friend Functions'],
  },
  {
    title: 'Module 8: Inheritance & Polymorphism',
    subtopics: ['Introduction to Inheritance', 'Types: Single, Multiple, Multilevel, Hierarchical', 'Constructor Chaining in Inheritance','Function Overriding','Virtual Functions and Runtime Polymorphism','Abstract Classes and Pure Virtual Functions','Base Class Pointers and Derived Class Objects'],
  },
  {
    title: 'Module 9: Advanced C++ Concepts and STL Basics',
    subtopics: ['Introduction to Templates (Function & Class Templates)', 'Exception Handling (try, catch, throw)', 'File Handling in C++ (fstream, ifstream, ofstream)', 'Namespaces and Header Files','Understanding the Standard Template Library (STL)[vector, pair, map, set, stack, queue]','Algorithms Library (sort, find, binary_search, etc.)'],
  },
  {
    title: 'Module 10:  Debugging & Code Optimization',
    subtopics: ['Common Syntax and Logical Errors', 'Debugging','Breakpoints and Step Execution','Time and Space Complexity Basics','Writing Readable and Maintainable Code','Optimization Tips for Beginners','Best Practices for C++ Programmers'],
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
