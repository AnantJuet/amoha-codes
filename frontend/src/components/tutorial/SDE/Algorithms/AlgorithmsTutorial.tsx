import React, { useState } from 'react';
import Layout from './Layout';
import { sidebarItems } from './SidebarData';

// Import Topic Components
import Home from './Topic/Home';

// Analysis of Algorithms
import AsymptoticAnalysis from './Topic/AsymptoticAnalysis';
import BigONotation from './Topic/BigONotation';
import TimeComplexity from './Topic/TimeComplexity';
import SpaceComplexity from './Topic/SpaceComplexity';
import BestAverageWorst from './Topic/BestAverageWorst';

// Searching Algorithms
import LinearSearch from './Topic/LinearSearch';
import BinarySearch from './Topic/BinarySearch';
import TernarySearch from './Topic/TernarySearch';
import JumpSearch from './Topic/JumpSearch';
import InterpolationSearch from './Topic/InterpolationSearch';
import ExponentialSearch from './Topic/ExponentialSearch';

// Sorting Algorithms
import BubbleSort from './Topic/BubbleSort';
import SelectionSort from './Topic/SelectionSort';
import InsertionSort from './Topic/InsertionSort';
import MergeSort from './Topic/MergeSort';
import QuickSort from './Topic/QuickSort';
import HeapSortAlgo from './Topic/HeapSortAlgo';
import CountingSort from './Topic/CountingSort';
import RadixSort from './Topic/RadixSort';
import BucketSort from './Topic/BucketSort';

// Greedy Algorithms
import GreedyIntro from './Topic/GreedyIntro';
import ActivitySelection from './Topic/ActivitySelection';
import HuffmanCoding from './Topic/HuffmanCoding';
import JobSequencing from './Topic/JobSequencing';
import FractionalKnapsack from './Topic/FractionalKnapsack';
import PrimsAlgorithm from './Topic/PrimsAlgorithm';
import KruskalsAlgorithm from './Topic/KruskalsAlgorithm';
import DijkstraAlgorithm from './Topic/DijkstraAlgorithm';

// Dynamic Programming
import DPIntro from './Topic/DPIntro';
import FibonacciDP from './Topic/FibonacciDP';
import LCS from './Topic/LCS';
import LIS from './Topic/LIS';
import Knapsack01 from './Topic/Knapsack01';
import MatrixChain from './Topic/MatrixChain';
import EditDistance from './Topic/EditDistance';
import CoinChange from './Topic/CoinChange';

// Divide and Conquer
import DACIntro from './Topic/DACIntro';
import BinarySearchDAC from './Topic/BinarySearchDAC';
import MergeSortDAC from './Topic/MergeSortDAC';
import QuickSortDAC from './Topic/QuickSortDAC';
import StrassenMatrix from './Topic/StrassenMatrix';
import ClosestPair from './Topic/ClosestPair';

// Graph Algorithms
import BFSAlgo from './Topic/BFSAlgo';
import DFSAlgo from './Topic/DFSAlgo';
import TopologicalSortAlgo from './Topic/TopologicalSortAlgo';
import DijkstraShortestPath from './Topic/DijkstraShortestPath';
import BellmanFord from './Topic/BellmanFord';
import FloydWarshall from './Topic/FloydWarshall';
import MST from './Topic/MST';
import CycleDetection from './Topic/CycleDetection';

// Backtracking Algorithms
import BacktrackingIntro from './Topic/BacktrackingIntro';
import NQueens from './Topic/NQueens';
import SudokuSolver from './Topic/SudokuSolver';
import RatInMaze from './Topic/RatInMaze';
import HamiltonianCycle from './Topic/HamiltonianCycle';
import SubsetSum from './Topic/SubsetSum';

// Map topic keys to components
const topicComponents: { [key: string]: React.FC } = {
  Home,
  AsymptoticAnalysis,
  BigONotation,
  TimeComplexity,
  SpaceComplexity,
  BestAverageWorst,
  LinearSearch,
  BinarySearch,
  TernarySearch,
  JumpSearch,
  InterpolationSearch,
  ExponentialSearch,
  BubbleSort,
  SelectionSort,
  InsertionSort,
  MergeSort,
  QuickSort,
  HeapSortAlgo,
  CountingSort,
  RadixSort,
  BucketSort,
  GreedyIntro,
  ActivitySelection,
  HuffmanCoding,
  JobSequencing,
  FractionalKnapsack,
  PrimsAlgorithm,
  KruskalsAlgorithm,
  DijkstraAlgorithm,
  DPIntro,
  FibonacciDP,
  LCS,
  LIS,
  Knapsack01,
  MatrixChain,
  EditDistance,
  CoinChange,
  DACIntro,
  BinarySearchDAC,
  MergeSortDAC,
  QuickSortDAC,
  StrassenMatrix,
  ClosestPair,
  BacktrackingIntro,
  NQueens,
  SudokuSolver,
  RatInMaze,
  HamiltonianCycle,
  SubsetSum,
  BFSAlgo,
  DFSAlgo,
  TopologicalSortAlgo,
  DijkstraShortestPath,
  BellmanFord,
  FloydWarshall,
  MST,
  CycleDetection,
};

const AlgorithmsTutorial: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>(
    sidebarItems[0]?.component || 'Home'
  );

  const handleSelectTopic = (componentKey: string) => {
    setSelectedTopic(componentKey);
  };

  const CurrentComponent = topicComponents[selectedTopic] || Home;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default AlgorithmsTutorial;
