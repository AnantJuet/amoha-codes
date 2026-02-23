import {
  BookOpen,
  List,
  Layers,
  GitBranch,
  Database,
  Hash,
  Network,
  FileText,
} from "lucide-react";

export interface SubTopic {
  title: string;
  component: string;
}

export interface SidebarItem {
  [x: string]: unknown;
  title: string;
  component: string;
  hasArrow?: boolean;
  subtopics?: SubTopic[];
}

export const sidebarItems: SidebarItem[] = [
  { title: "Tutorial", component: "Home", icon: BookOpen },

  // ================= 1. Array =================
  {
    title: "1. Array",
    component: "Array",
    icon: List,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Arrays", component: "ArrayIntroduction" },
      { title: "Array Operations", component: "ArrayOperations" },
      { title: "Searching in Array", component: "ArraySearching" },
      { title: "Sorting an Array", component: "ArraySorting" },
      { title: "Array Rotation", component: "ArrayRotation" },
      { title: "Subarray Problems", component: "SubarrayProblems" },
      { title: "Two Pointer Technique", component: "TwoPointer" },
      { title: "Sliding Window", component: "SlidingWindow" },
    ],
  },

  // ================= 2. Linked List =================
  {
    title: "2. Linked List",
    component: "LinkedList",
    icon: GitBranch,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Linked List", component: "LinkedListIntro" },
      { title: "Singly Linked List", component: "SinglyLinkedList" },
      { title: "Doubly Linked List", component: "DoublyLinkedList" },
      { title: "Circular Linked List", component: "CircularLinkedList" },
      { title: "Linked List Operations", component: "LinkedListOperations" },
      { title: "Reverse a Linked List", component: "ReverseLinkedList" },
      { title: "Detect Loop", component: "DetectLoop" },
      { title: "Merge Two Sorted Lists", component: "MergeSortedLists" },
    ],
  },

  // ================= 3. Stack =================
  {
    title: "3. Stack",
    component: "Stack",
    icon: Layers,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Stack", component: "StackIntro" },
      { title: "Stack Operations", component: "StackOperations" },
      { title: "Stack using Array", component: "StackArray" },
      { title: "Stack using Linked List", component: "StackLinkedList" },
      { title: "Balanced Parentheses", component: "BalancedParentheses" },
      { title: "Infix to Postfix", component: "InfixToPostfix" },
      { title: "Next Greater Element", component: "NextGreaterElement" },
    ],
  },

  // ================= 4. Queue =================
  {
    title: "4. Queue",
    component: "Queue",
    icon: List,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Queue", component: "QueueIntro" },
      { title: "Queue Operations", component: "QueueOperations" },
      { title: "Circular Queue", component: "CircularQueue" },
      { title: "Deque", component: "Deque" },
      { title: "Priority Queue", component: "PriorityQueue" },
      { title: "Queue using Stack", component: "QueueUsingStack" },
    ],
  },

  // ================= 5. Binary Tree =================
  {
    title: "5. Binary Tree",
    component: "BinaryTree",
    icon: Network,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Binary Tree", component: "BinaryTreeIntro" },
      { title: "Tree Traversals", component: "TreeTraversals" },
      { title: "Level Order Traversal", component: "LevelOrderTraversal" },
      { title: "Height of Tree", component: "TreeHeight" },
      { title: "Diameter of Tree", component: "TreeDiameter" },
      { title: "Lowest Common Ancestor", component: "LCA" },
      { title: "Check Balanced Tree", component: "BalancedTree" },
    ],
  },

  // ================= 6. Binary Search Tree =================
  {
    title: "6. Binary Search Tree",
    component: "BST",
    icon: Network,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to BST", component: "BSTIntro" },
      { title: "Search in BST", component: "BSTSearch" },
      { title: "Insert in BST", component: "BSTInsert" },
      { title: "Delete in BST", component: "BSTDelete" },
      { title: "Inorder Successor", component: "InorderSuccessor" },
      { title: "Check if BST", component: "CheckBST" },
      { title: "AVL Tree", component: "AVLTree" },
    ],
  },

  // ================= 7. Heap =================
  {
    title: "7. Heap",
    component: "Heap",
    icon: Database,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Heap", component: "HeapIntro" },
      { title: "Binary Heap", component: "BinaryHeap" },
      { title: "Heapify", component: "Heapify" },
      { title: "Heap Sort", component: "HeapSort" },
      { title: "Priority Queue Implementation", component: "PriorityQueueImpl" },
      { title: "K Largest Elements", component: "KLargestElements" },
    ],
  },

  // ================= 8. Hashing =================
  {
    title: "8. Hashing",
    component: "Hashing",
    icon: Hash,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Hashing", component: "HashingIntro" },
      { title: "Hash Functions", component: "HashFunctions" },
      { title: "Collision Handling", component: "CollisionHandling" },
      { title: "Open Addressing", component: "OpenAddressing" },
      { title: "HashMap Implementation", component: "HashMapImpl" },
      { title: "Count Distinct Elements", component: "CountDistinct" },
    ],
  },

  // ================= 9. Graph =================
  {
    title: "9. Graph",
    component: "Graph",
    icon: Network,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Graph", component: "GraphIntro" },
      { title: "Graph Representations", component: "GraphRepresentations" },
      { title: "BFS (Breadth First Search)", component: "BFS" },
      { title: "DFS (Depth First Search)", component: "DFS" },
      { title: "Detect Cycle", component: "DetectCycle" },
      { title: "Topological Sort", component: "TopologicalSort" },
      { title: "Shortest Path", component: "ShortestPath" },
    ],
  },

  // ================= 10. Trie =================
  {
    title: "10. Trie",
    component: "Trie",
    icon: FileText,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Trie", component: "TrieIntro" },
      { title: "Insert and Search", component: "TrieInsertSearch" },
      { title: "Delete in Trie", component: "TrieDelete" },
      { title: "Autocomplete", component: "Autocomplete" },
      { title: "Word Search", component: "WordSearch" },
    ],
  },
];
