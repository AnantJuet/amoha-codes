import {
  BookOpen,
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

  // ================= 1. Number Theory =================
  {
    title: "Number Theory",
    component: "NumberTheory",
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Number Systems", component: "NumberSystems" },
      { title: "Binary, Octal, Hexadecimal Conversions", component: "NumberConversions" },
      { title: "Prime Numbers and Primality Testing", component: "PrimeNumbers" },
      { title: "GCD and LCM", component: "GcdLcm" },
      { title: "Modular Arithmetic", component: "ModularArithmetic" },
      { title: "Euclidean Algorithm", component: "EuclideanAlgorithm" },
      { title: "Extended Euclidean Algorithm", component: "ExtendedEuclidean" },
      { title: "Fermat's Little Theorem", component: "FermatsTheorem" },
      { title: "Chinese Remainder Theorem", component: "ChineseRemainder" },
      { title: "Euler's Totient Function", component: "EulerTotient" },
    ],
  },

  // ================= 2. Combinatorics =================
  {
    title: "Combinatorics",
    component: "Combinatorics",
    hasArrow: true,
    subtopics: [
      { title: "Fundamental Counting Principles", component: "CountingPrinciples" },
      { title: "Permutations", component: "Permutations" },
      { title: "Combinations", component: "Combinations" },
      { title: "Binomial Theorem", component: "BinomialTheorem" },
      { title: "Pascal's Triangle", component: "PascalsTriangle" },
      { title: "Pigeonhole Principle", component: "PigeonholePrinciple" },
      { title: "Inclusion-Exclusion Principle", component: "InclusionExclusion" },
      { title: "Recurrence Relations", component: "RecurrenceRelations" },
      { title: "Generating Functions", component: "GeneratingFunctions" },
      { title: "Catalan Numbers", component: "CatalanNumbers" },
    ],
  },

  // ================= 3. Set Theory & Logic =================
  {
    title: "Set Theory & Logic",
    component: "SetTheoryLogic",
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Sets", component: "IntroSets" },
      { title: "Set Operations", component: "SetOperations" },
      { title: "Venn Diagrams", component: "VennDiagrams" },
      { title: "Propositional Logic", component: "PropositionalLogic" },
      { title: "Truth Tables", component: "TruthTables" },
      { title: "Logical Equivalences", component: "LogicalEquivalences" },
      { title: "Predicate Logic", component: "PredicateLogic" },
      { title: "Quantifiers", component: "Quantifiers" },
      { title: "Mathematical Proofs", component: "MathProofs" },
      { title: "Proof Techniques", component: "ProofTechniques" },
    ],
  },

  // ================= 4. Relations & Functions =================
  {
    title: "Relations & Functions",
    component: "RelationsFunctions",
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Relations", component: "IntroRelations" },
      { title: "Properties of Relations", component: "RelationProperties" },
      { title: "Equivalence Relations", component: "EquivalenceRelations" },
      { title: "Partial Orders", component: "PartialOrders" },
      { title: "Introduction to Functions", component: "IntroFunctions" },
      { title: "Types of Functions", component: "FunctionTypes" },
      { title: "Function Composition", component: "FunctionComposition" },
      { title: "Inverse Functions", component: "InverseFunctions" },
    ],
  },

  // ================= 5. Graph Theory =================
  {
    title: "Graph Theory",
    component: "GraphTheory",
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Graphs", component: "IntroGraphs" },
      { title: "Types of Graphs", component: "GraphTypes" },
      { title: "Graph Representation", component: "GraphRepresentation" },
      { title: "Graph Traversal (BFS & DFS)", component: "GraphTraversal" },
      { title: "Connectivity", component: "Connectivity" },
      { title: "Trees and Spanning Trees", component: "TreesSpanning" },
      { title: "Shortest Path Algorithms", component: "ShortestPath" },
      { title: "Euler and Hamilton Paths", component: "EulerHamilton" },
      { title: "Graph Coloring", component: "GraphColoring" },
      { title: "Planar Graphs", component: "PlanarGraphs" },
    ],
  },

  // ================= 6. Linear Algebra =================
  {
    title: "Linear Algebra",
    component: "LinearAlgebra",
    hasArrow: true,
    subtopics: [
      { title: "Vectors and Vector Spaces", component: "Vectors" },
      { title: "Matrix Operations", component: "MatrixOperations" },
      { title: "Matrix Types", component: "MatrixTypes" },
      { title: "Determinants", component: "Determinants" },
      { title: "Matrix Inverse", component: "MatrixInverse" },
      { title: "System of Linear Equations", component: "LinearEquations" },
      { title: "Gaussian Elimination", component: "GaussianElimination" },
      { title: "Eigenvalues and Eigenvectors", component: "Eigenvalues" },
      { title: "Linear Transformations", component: "LinearTransformations" },
    ],
  },

  // ================= 7. Probability =================
  {
    title: "Probability",
    component: "Probability",
    hasArrow: true,
    subtopics: [
      { title: "Basic Probability Concepts", component: "BasicProbability" },
      { title: "Conditional Probability", component: "ConditionalProbability" },
      { title: "Bayes' Theorem", component: "BayesTheorem" },
      { title: "Random Variables", component: "RandomVariables" },
      { title: "Probability Distributions", component: "ProbabilityDistributions" },
      { title: "Expected Value and Variance", component: "ExpectedValue" },
      { title: "Binomial Distribution", component: "BinomialDistribution" },
      { title: "Poisson Distribution", component: "PoissonDistribution" },
      { title: "Normal Distribution", component: "NormalDistribution" },
    ],
  },

  // ================= 8. Algorithms & Complexity =================
  {
    title: "Algorithms & Complexity",
    component: "AlgorithmsComplexity",
    hasArrow: true,
    subtopics: [
      { title: "Asymptotic Notation", component: "AsymptoticNotation" },
      { title: "Time Complexity Analysis", component: "TimeComplexity" },
      { title: "Space Complexity", component: "SpaceComplexity" },
      { title: "Master Theorem", component: "MasterTheorem" },
      { title: "Amortized Analysis", component: "AmortizedAnalysis" },
      { title: "NP-Completeness Introduction", component: "NPCompleteness" },
    ],
  },
];
