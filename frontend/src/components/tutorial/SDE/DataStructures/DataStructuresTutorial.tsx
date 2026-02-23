import React, { useState } from 'react';
import Layout from './Layout';
import { sidebarItems } from './SidebarData';

// Import Topic Components
import Home from './Topic/Home';
import PlaceholderTopic from './Topic/PlaceholderTopic';

// Array Topics
import ArrayIntroduction from './Topic/ArrayIntroduction';
import ArrayOperations from './Topic/ArrayOperations';
import ArraySearching from './Topic/ArraySearching';
import ArraySorting from './Topic/ArraySorting';
import ArrayRotation from './Topic/ArrayRotation';
import SubarrayProblems from './Topic/SubarrayProblems';
import TwoPointer from './Topic/TwoPointer';
import SlidingWindow from './Topic/SlidingWindow';

// Linked List Topics
import LinkedListIntro from './Topic/LinkedListIntro';
import SinglyLinkedList from './Topic/SinglyLinkedList';
import DoublyLinkedList from './Topic/DoublyLinkedList';
import CircularLinkedList from './Topic/CircularLinkedList';
import LinkedListOperations from './Topic/LinkedListOperations';
import ReverseLinkedList from './Topic/ReverseLinkedList';
import DetectLoop from './Topic/DetectLoop';
import MergeSortedLists from './Topic/MergeSortedLists';

// Stack Topics
import StackIntro from './Topic/StackIntro';
import StackOperations from './Topic/StackOperations';
import StackArray from './Topic/StackArray';
import StackLinkedList from './Topic/StackLinkedList';
import BalancedParentheses from './Topic/BalancedParentheses';
import InfixToPostfix from './Topic/InfixToPostfix';
import NextGreaterElement from './Topic/NextGreaterElement';

// Queue Topics
import QueueIntro from './Topic/QueueIntro';
import QueueOperations from './Topic/QueueOperations';
import CircularQueue from './Topic/CircularQueue';
import Deque from './Topic/Deque';
import PriorityQueueImpl from './Topic/PriorityQueueImpl';

// Binary Tree Topics
import BinaryTreeIntro from './Topic/BinaryTreeIntro';
import TreeTraversals from './Topic/TreeTraversals';
import LevelOrderTraversal from './Topic/LevelOrderTraversal';
import TreeHeight from './Topic/TreeHeight';
import TreeDiameter from './Topic/TreeDiameter';
import LCA from './Topic/LCA';
import BalancedTree from './Topic/BalancedTree';

// BST Topics
import BSTIntro from './Topic/BSTIntro';
import BSTSearch from './Topic/BSTSearch';
import BSTInsert from './Topic/BSTInsert';
import BSTDelete from './Topic/BSTDelete';
import InorderSuccessor from './Topic/InorderSuccessor';
import CheckBST from './Topic/CheckBST';

// Heap Topics
import HeapIntro from './Topic/HeapIntro';
import BinaryHeap from './Topic/BinaryHeap';
import Heapify from './Topic/Heapify';
import HeapSort from './Topic/HeapSort';
import KLargestElements from './Topic/KLargestElements';

// Hashing Topics
import HashingIntro from './Topic/HashingIntro';
import HashFunctions from './Topic/HashFunctions';
import CollisionHandling from './Topic/CollisionHandling';
import OpenAddressing from './Topic/OpenAddressing';
import HashMapImpl from './Topic/HashMapImpl';
import CountDistinct from './Topic/CountDistinct';

// Graph Topics
import GraphIntro from './Topic/GraphIntro';
import GraphRepresentations from './Topic/GraphRepresentations';
import BFS from './Topic/BFS';
import DFS from './Topic/DFS';
import DetectCycle from './Topic/DetectCycle';
import TopologicalSort from './Topic/TopologicalSort';
import ShortestPath from './Topic/ShortestPath';

// Queue additional imports
import QueueUsingStack from './Topic/QueueUsingStack';

// BST additional imports
import AVLTree from './Topic/AVLTree';

// Trie Topics
import TrieIntro from './Topic/TrieIntro';
import TrieInsertSearch from './Topic/TrieInsertSearch';
import TrieDelete from './Topic/TrieDelete';
import Autocomplete from './Topic/Autocomplete';
import WordSearch from './Topic/WordSearch';

// Placeholder for PriorityQueue (different from PriorityQueueImpl)
const PriorityQueue: React.FC = () => <PlaceholderTopic title="Priority Queue" />;

// Map topic keys to components
const topicComponents: { [key: string]: React.FC } = {
  Home,
  ArrayIntroduction,
  ArrayOperations,
  ArraySearching,
  ArraySorting,
  ArrayRotation,
  SubarrayProblems,
  TwoPointer,
  SlidingWindow,
  LinkedListIntro,
  SinglyLinkedList,
  DoublyLinkedList,
  CircularLinkedList,
  LinkedListOperations,
  ReverseLinkedList,
  DetectLoop,
  MergeSortedLists,
  StackIntro,
  StackOperations,
  StackArray,
  StackLinkedList,
  BalancedParentheses,
  InfixToPostfix,
  NextGreaterElement,
  QueueIntro,
  QueueOperations,
  CircularQueue,
  Deque,
  PriorityQueue,
  PriorityQueueImpl,
  QueueUsingStack,
  BinaryTreeIntro,
  TreeTraversals,
  LevelOrderTraversal,
  TreeHeight,
  TreeDiameter,
  LCA,
  BalancedTree,
  BSTIntro,
  BSTSearch,
  BSTInsert,
  BSTDelete,
  InorderSuccessor,
  CheckBST,
  AVLTree,
  HeapIntro,
  BinaryHeap,
  Heapify,
  HeapSort,
  KLargestElements,
  HashingIntro,
  HashFunctions,
  CollisionHandling,
  OpenAddressing,
  HashMapImpl,
  CountDistinct,
  GraphIntro,
  GraphRepresentations,
  BFS,
  DFS,
  DetectCycle,
  TopologicalSort,
  ShortestPath,
  TrieIntro,
  TrieInsertSearch,
  TrieDelete,
  Autocomplete,
  WordSearch,
};

const DataStructuresTutorial: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
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

export default DataStructuresTutorial;
