import {
  BookOpen,
  Search,
  ArrowUpDown,
  Zap,
  Grid,
  GitBranch,
  RotateCcw,
  Network,
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

  // ================= 1. Analysis of Algorithms =================
  {
    title: "1. Analysis of Algorithms",
    component: "AnalysisOfAlgorithms",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "Asymptotic Analysis", component: "AsymptoticAnalysis" },
      { title: "Big O Notation", component: "BigONotation" },
      { title: "Time Complexity", component: "TimeComplexity" },
      { title: "Space Complexity", component: "SpaceComplexity" },
      { title: "Best, Average and Worst Case", component: "BestAverageWorst" },
    ],
  },

  // ================= 2. Searching Algorithms =================
  {
    title: "2. Searching Algorithms",
    component: "SearchingAlgorithms",
    icon: Search,
    hasArrow: true,
    subtopics: [
      { title: "Linear Search", component: "LinearSearch" },
      { title: "Binary Search", component: "BinarySearch" },
      { title: "Ternary Search", component: "TernarySearch" },
      { title: "Jump Search", component: "JumpSearch" },
      { title: "Interpolation Search", component: "InterpolationSearch" },
      { title: "Exponential Search", component: "ExponentialSearch" },
    ],
  },

  // ================= 3. Sorting Algorithms =================
  {
    title: "3. Sorting Algorithms",
    component: "SortingAlgorithms",
    icon: ArrowUpDown,
    hasArrow: true,
    subtopics: [
      { title: "Bubble Sort", component: "BubbleSort" },
      { title: "Selection Sort", component: "SelectionSort" },
      { title: "Insertion Sort", component: "InsertionSort" },
      { title: "Merge Sort", component: "MergeSort" },
      { title: "Quick Sort", component: "QuickSort" },
      { title: "Heap Sort", component: "HeapSortAlgo" },
      { title: "Counting Sort", component: "CountingSort" },
      { title: "Radix Sort", component: "RadixSort" },
      { title: "Bucket Sort", component: "BucketSort" },
    ],
  },

  // ================= 4. Greedy Algorithms =================
  {
    title: "4. Greedy Algorithms",
    component: "GreedyAlgorithms",
    icon: Zap,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Greedy", component: "GreedyIntro" },
      { title: "Activity Selection", component: "ActivitySelection" },
      { title: "Huffman Coding", component: "HuffmanCoding" },
      { title: "Job Sequencing", component: "JobSequencing" },
      { title: "Fractional Knapsack", component: "FractionalKnapsack" },
      { title: "Prim's Algorithm", component: "PrimsAlgorithm" },
      { title: "Kruskal's Algorithm", component: "KruskalsAlgorithm" },
      { title: "Dijkstra's Algorithm", component: "DijkstraAlgorithm" },
    ],
  },

  // ================= 5. Dynamic Programming =================
  {
    title: "5. Dynamic Programming",
    component: "DynamicProgramming",
    icon: Grid,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to DP", component: "DPIntro" },
      { title: "Fibonacci Numbers", component: "FibonacciDP" },
      { title: "Longest Common Subsequence", component: "LCS" },
      { title: "Longest Increasing Subsequence", component: "LIS" },
      { title: "0/1 Knapsack", component: "Knapsack01" },
      { title: "Matrix Chain Multiplication", component: "MatrixChain" },
      { title: "Edit Distance", component: "EditDistance" },
      { title: "Coin Change", component: "CoinChange" },
    ],
  },

  // ================= 6. Divide and Conquer =================
  {
    title: "6. Divide and Conquer",
    component: "DivideAndConquer",
    icon: GitBranch,
    hasArrow: true,
    subtopics: [
      { title: "Introduction", component: "DACIntro" },
      { title: "Binary Search (D&C)", component: "BinarySearchDAC" },
      { title: "Merge Sort (D&C)", component: "MergeSortDAC" },
      { title: "Quick Sort (D&C)", component: "QuickSortDAC" },
      { title: "Strassen's Matrix Multiplication", component: "StrassenMatrix" },
      { title: "Closest Pair of Points", component: "ClosestPair" },
    ],
  },

  // ================= 7. Backtracking =================
  {
    title: "7. Backtracking",
    component: "Backtracking",
    icon: RotateCcw,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Backtracking", component: "BacktrackingIntro" },
      { title: "N Queens Problem", component: "NQueens" },
      { title: "Sudoku Solver", component: "SudokuSolver" },
      { title: "Rat in a Maze", component: "RatInMaze" },
      { title: "Hamiltonian Cycle", component: "HamiltonianCycle" },
      { title: "Subset Sum", component: "SubsetSum" },
    ],
  },

  // ================= 8. Graph Algorithms =================
  {
    title: "8. Graph Algorithms",
    component: "GraphAlgorithms",
    icon: Network,
    hasArrow: true,
    subtopics: [
      { title: "BFS Algorithm", component: "BFSAlgo" },
      { title: "DFS Algorithm", component: "DFSAlgo" },
      { title: "Topological Sort", component: "TopologicalSortAlgo" },
      { title: "Shortest Path (Dijkstra)", component: "DijkstraShortestPath" },
      { title: "Bellman Ford", component: "BellmanFord" },
      { title: "Floyd Warshall", component: "FloydWarshall" },
      { title: "Minimum Spanning Tree", component: "MST" },
      { title: "Cycle Detection", component: "CycleDetection" },
    ],
  },
];
