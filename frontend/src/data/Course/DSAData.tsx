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
    title: 'Complete Coverage of DSA Algorithms', 
    description: 'From Arrays and Graphs to Dynamic Programming and Number Theory.' 
  },
  { 
    iconName: 'Code', 
    title: 'Pattern-based Learning Approach', 
    description: 'Learn how to identify patterns behind 90% of interview problems.' 
  },
  { 
    iconName: 'Lightbulb', 
    title: '100+ Practice Problems with Video Hints', 
    description: 'Reinforce every concept through structured exercises.' 
  },
  { 
    iconName: 'Chat', 
    title: 'Contest-Oriented Thinking', 
    description: 'Strengthen your implementation speed and accuracy.' 
  },
  { 
    iconName: 'Medal', 
    title: 'Expert-Led Concept Breakdown', 
    description: 'Understand not just what works, but why it works.' 
  },

];

// Data for the Syllabus tab
export const SYLLABUS_DATA: ModuleItem[] = [
  {
    title: 'Module 1: Arrays & Patterns',
    subtopics: [
      'Prefix Sum, Suffix Sum, and Difference Array',
      'Sliding Window (Fixed & Variable)',
      'Two Pointers and Fast–Slow Pointers',
      'Kadane’s Algorithm (Maximum Subarray)',
      'Merge Intervals',
      'Cyclic Sort',
      'Dutch National Flag',
      'Moore’s Voting Algorithm',
      'Unique Element Problems',
    ],
  },
  {
    title: 'Module 2: Strings',
    subtopics: [
      'KMP Algorithm',
      'Z Algorithm',
      'Rabin–Karp (Hashing)',
      'Manacher’s Algorithm',
      'Trie-based Searching',
      'Suffix Array / Tree',
      'Aho–Corasick Pattern Matching',
      'Rolling Hash',
      'Boyer–Moore Algorithm',
    ],
  },
  {
    title: 'Module 3: Hashing',
    subtopics: [
      'Frequency Counting and Hash Maps',
      'Prefix Hashing',
      'Rolling Hash',
      'Double Hashing',
      'Bloom Filter Concepts',
    ],
  },
  {
    title: 'Module 4: Linked List',
    subtopics: [
      'Reversal (Iterative & Recursive)',
      'Cycle Detection (Floyd’s Algorithm)',
      'Merge Two Sorted Lists',
      'Add Two Numbers',
      'Remove Nth Node from End',
      'Copy List with Random Pointer',
      'Flatten / Reorder Lists',
    ],
  },
  {
    title: 'Module 5: Stack & Queue',
    subtopics: [
      'Monotonic Stack',
      'Next Greater Element',
      'Min/Max Stack Design',
      'Sliding Window Maximum (Deque)',
      'Queue using Stack / Stack using Queue',
      'Circular Queue',
    ],
  },
  {
    title: 'Module 6: Heap / Priority Queue',
    subtopics: [
      'Min Heap & Max Heap',
      'Build Heap and Heapify',
      'Kth Largest / Smallest Element',
      'Merge K Sorted Lists',
      'Median in a Stream',
    ],
  },
  {
    title: 'Module 7: Recursion & Backtracking',
    subtopics: [
      'Subsets, Subsequences, and Permutations',
      'N-Queens',
      'Sudoku Solver',
      'Word Search',
      'Rat in a Maze',
      'Hamiltonian Path & Knight’s Tour',
    ],
  },
  {
    title: 'Module 8: Divide & Conquer',
    subtopics: [
      'Merge Sort and Quick Sort',
      'Binary Search Patterns',
      'Median of Two Sorted Arrays',
      'Maximum Subarray (Divide & Conquer)',
      'Strassen’s Matrix Multiplication',
      'Closest Pair of Points',
    ],
  },
  {
    title: 'Module 9: Dynamic Programming',
    subtopics: [
      '0/1 and Unbounded Knapsack',
      'Longest Common Subsequence / Substring',
      'Longest Increasing Subsequence',
      'Matrix Chain Multiplication',
      'Minimum Path Sum / Edit Distance',
      'Coin Change',
      'Palindromic Substrings',
      'DP on Trees / Graphs',
      'Bitmask DP',
    ],
  },
  {
    title: 'Module 10: Greedy Algorithms',
    subtopics: [
      'Activity / Interval Scheduling',
      'Fractional Knapsack',
      'Minimum Spanning Tree (Prim’s & Kruskal’s)',
      'Huffman Coding',
      'Job Sequencing',
      'Minimum Coins',
      'Gas Station / Circular Tour',
      'Graph Coloring (Greedy)',
    ],
  },
  {
    title: 'Module 11: Graph Algorithms',
    subtopics: [
      'BFS & DFS Traversals',
      'Dijkstra’s and Bellman-Ford Algorithms',
      'Floyd-Warshall (All-Pairs Shortest Path)',
      'Prim’s & Kruskal’s MST',
      'Topological Sort',
      'Strongly Connected Components (Kosaraju / Tarjan)',
      'Disjoint Set Union (Union-Find)',
      'Cycle Detection',
      'Eulerian / Hamiltonian Paths',
      'Graph Coloring',
    ],
  },
  {
    title: 'Module 12: Trees & Binary Search Trees',
    subtopics: [
      'Preorder / Inorder / Postorder Traversals',
      'Level Order, Zigzag, and Boundary Traversal',
      'Lowest Common Ancestor',
      'Diameter and Height Calculations',
      'Balanced / Symmetric Tree Checks',
      'BST Insert, Delete, and Search',
      'Kth Smallest / Largest in BST',
    ],
  },
  {
    title: 'Module 13: Advanced Data Structures',
    subtopics: [
      'Segment Tree (Range Queries, Lazy Propagation)',
      'Fenwick Tree (Binary Indexed Tree)',
      'Sparse Table',
      'LCA using Binary Lifting',
      'Heavy-Light Decomposition',
      'Trie, Suffix Array, and Suffix Tree',
      'Balanced BSTs (AVL, Red-Black, Treap)',
    ],
  },
  {
    title: 'Module 14: Math & Number Theory',
    subtopics: [
      'GCD / LCM and Euclid’s Algorithm',
      'Sieve of Eratosthenes',
      'Modular Arithmetic & Exponentiation',
      'Prime Factorization',
      'Chinese Remainder Theorem',
      'Fermat’s Little Theorem',
      'Fast Fourier Transform (FFT)',
      'Combinatorics and Catalan Numbers',
    ],
  },
  {
    title: 'Module 15: Bit Manipulation',
    subtopics: [
      'Bitwise Operations (Check, Set, Clear, Toggle)',
      'Count Set Bits',
      'Power of Two Checks',
      'XOR Tricks and Subset Generation',
      'Bitmask DP',
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
