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
    title: 'Concept-to-Problem Approach',
    description: 'Every topic starts with detailed explanation and ends with practical implementation.',
  },
  {
    iconName: 'Code',
    title: 'Pattern-Based Learning',
    description: 'Understand the logic behind questions, not just the solutions.',
  },
  {
    iconName: 'Lightbulb',
    title: 'Detailed Problem Discussions (450+)',
    description: 'Each problem includes hints, step-by-step solutions, and code walk-throughs.',
  },
  {
    iconName: 'Chat',
    title: 'Weekly Assignments and Mock Tests',
    description: 'Evaluate your understanding regularly.',
  },
  {
    iconName: 'Medal',
    title: 'Topic-Wise Leaderboard & Progress Tracker',
    description: 'Stay motivated with a gamified progress system.',
  },
  {
    iconName: 'Contest',
    title: 'Real Interview Simulation',
    description: 'Includes timed coding rounds and curated company-level problems.',
  },

];
// Data for the Syllabus tab
export const SYLLABUS_DATA: ModuleItem[] = [
  {
    title: 'Module 1: Programming Foundations',
    subtopics: [
      'Input/Output, Loops, and Conditionals',
      'Functions and Recursion',
      'Arrays and Strings (Basics)',
      'Time & Space Complexity',
    ],
  },
  {
    title: 'Module 2: Arrays and Patterns',
    subtopics: [
      'Prefix & Suffix Sums',
      'Sliding Window Techniques',
      'Two Pointers, Fast–Slow Patterns',
      'Kadane’s Algorithm, Merge Intervals, Dutch Flag Problem',
    ],
  },
  {
    title: 'Module 3: Strings',
    subtopics: [
      'Pattern Matching (KMP, Z, Rabin-Karp)',
      'Substring Problems',
      'Palindromes and Anagram Challenges',
      'Trie Basics and String Hashing',
    ],
  },
  {
    title: 'Module 4: Linked List',
    subtopics: [
      'Singly and Doubly Linked Lists',
      'Reversal, Cycle Detection, Merge, Flattening',
      'Random Pointer and Reorder Problems',
    ],
  },
  {
    title: 'Module 5: Stack & Queue',
    subtopics: [
      'Stack Implementation and Next Greater Element',
      'Monotonic Stack, Min/Max Stack',
      'Sliding Window Maximum (Deque)',
      'Queue using Stack, Stack using Queue',
    ],
  },
  {
    title: 'Module 6: Recursion & Backtracking',
    subtopics: [
      'Subsets, Permutations, and Combinations',
      'N-Queens, Sudoku Solver, Word Search',
      'Rat in a Maze and Backtracking Templates',
    ],
  },
  {
    title: 'Module 7: Searching & Sorting',
    subtopics: [
      'Binary Search Patterns',
      'Merge Sort and Quick Sort',
      'Binary Search on Answer Problems',
    ],
  },
  {
    title: 'Module 8: Hashing & Maps',
    subtopics: [
      'Frequency Maps, Prefix Hash, Rolling Hash',
      'Hash-based Counting Problems',
    ],
  },
  {
    title: 'Module 9: Heap & Priority Queue',
    subtopics: [
      'Min/Max Heap',
      'Kth Largest Element',
      'Merge K Sorted Lists',
      'Median in a Stream',
    ],
  },
  {
    title: 'Module 10: Trees & Binary Search Trees',
    subtopics: [
      'Traversals (Inorder, Preorder, Postorder)',
      'Lowest Common Ancestor',
      'Height, Diameter, Balance Check',
      'BST Operations and Range Queries',
    ],
  },
  {
    title: 'Module 11: Graph Algorithms',
    subtopics: [
      'BFS, DFS',
      'Dijkstra, Bellman-Ford, Floyd-Warshall',
      'Topological Sort, SCCs (Kosaraju/Tarjan)',
      'MST (Prim’s & Kruskal’s), Union-Find',
      'Cycle Detection & Graph Coloring',
    ],
  },
  {
    title: 'Module 12: Dynamic Programming (DP)',
    subtopics: [
      '0/1 Knapsack, Unbounded Knapsack',
      'LCS, LIS, Matrix Chain Multiplication',
      'Edit Distance, Minimum Path Sum, Coin Change',
      'DP on Strings, Trees, and Graphs',
      'Bitmask DP',
    ],
  },
  {
    title: 'Module 13: Greedy Algorithms',
    subtopics: [
      'Activity Selection, Fractional Knapsack',
      'Huffman Coding',
      'Job Sequencing, Gas Station, Coin Change',
    ],
  },
  {
    title: 'Module 14: Advanced Data Structures',
    subtopics: [
      'Segment Tree, Fenwick Tree',
      'Sparse Table, Trie, Suffix Tree',
      'LCA (Binary Lifting), Heavy-Light Decomposition',
    ],
  },
  {
    title: 'Module 15: Math & Bit Manipulation',
    subtopics: [
      'GCD, LCM, Sieve of Eratosthenes',
      'Modular Arithmetic, Exponentiation',
      'XOR Tricks, Counting Bits, Bitmask Problems',
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
