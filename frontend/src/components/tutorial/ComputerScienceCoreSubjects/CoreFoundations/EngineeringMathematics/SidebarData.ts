import { 
  BookOpen, 
} from "lucide-react";

// export interface SubTopic {
//   title: string;
//   component: string;
// }

// export interface SidebarItem {
//   [x: string]: unknown;
//   title: string;
//   component: string;
//   hasArrow?: boolean; // To show dropdown arrow
//   subtopics?: SubTopic[]; // Nested topics
// }

export interface SubTopic {
  title: string;
  component: string;
}

export interface SidebarItem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  title: string;
  component: string;
  hasArrow?: boolean; // To show dropdown arrow
  subtopics?: SubTopic[]; // Nested topics
}


export const sidebarItems: SidebarItem[] = [
  { title: "Tutorial", component: "Home", icon: BookOpen },

  // ================= 1. Logic =================
  {
    title: "Propositional and First-Order Logic",
    component: "Logic",
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Propositional Logic", component: "PropositionalIntro" },
      { title: "Propositions Laws and Algebra", component: "PropositionsLaws" },
      { title: "Propositional Equivalences", component: "PropositionalEquivalences" },
      { title: "PDNF and PCNF", component: "PDNF_PCNC" },
      { title: "Predicates and Quantifiers", component: "PredicatesQuantifiers" },
      { title: "Predicates and Quantifiers Rules", component: "PredicatesRules" },
      { title: "Theorems on Nested Quantifiers", component: "NestedQuantifiers" },
      { title: "Rules of Inference", component: "RulesInference" },
    ],
  },

  // ================= 2. Set Theory =================
  {
    title: "Set Theory",
    component: "SetTheory",
    hasArrow: true,
    subtopics: [
      { title: "Sets in Maths", component: "SetsInMaths" },
      { title: "Representation of Sets", component: "RepresentationOfSets" },
      { title: "Set Theory Symbols", component: "SetTheorySymbols" },
      { title: "Subsets & Supersets", component: "SubsetsSupersets" },
      { title: "Power Set", component: "PowerSet" },
      { title: "Properties of Power Set", component: "PowerSetProperties" },
      { title: "Set Theory Formulas", component: "SetTheoryFormulas" },
      { title: "Inclusion-Exclusion", component: "InclusionExclusion" },
      { title: "Introduction to Proofs", component: "ProofsIntroduction" },
      { title: "Sequence, Series, and Summations", component: "SequenceSeries" },
      { title: "Introduction to Relations", component: "RelationsIntro" },
      { title: "Representing Relations", component: "RelationsRepresentation" },
      { title: "Representing Relations in Matrices and Graphs", component: "RelationsMatricesGraphs" },
      { title: "Closure of Relations", component: "RelationsClosure" },
      { title: "Partial Orders and Lattices", component: "PartialOrders" },
      { title: "Hasse Diagrams", component: "HasseDiagrams" },
      { title: "Equivalence Relations on a finite set", component: "EquivalenceRelations" },
      { title: "Total number of Possible Functions", component: "TotalFunctions" },
      { title: "Classes of Functions", component: "ClassesFunctions" },
      { title: "Generating Functions", component: "GeneratingFunctions" },
      { title: "Groups", component: "Groups" },
      { title: "Rings, Integral Domains and Fields", component: "RingsFields" },
      { title: "Independent Sets, Covering and Matching", component: "IndependentSets" },
    ],
  },

  // ================= 3. Combinatorics =================
  {
    title: "Combinatorics",
    component: "Combinatorics",
    hasArrow: true,
    subtopics: [
      { title: "Combinatorics Basics", component: "CombinatoricsBasics" },
      { title: "PnC and Binomial Coefficients", component: "PnC_Binomial" },
      { title: "Generalized PnC- [Set 1]", component: "GeneralizedPnC1" },
      { title: "Generalized PnC- [Set 2]", component: "GeneralizedPnC2" },
      { title: "Corollaries of Binomial Theorem", component: "BinomialCorollaries" },
      { title: "Pigeon Hole Principle", component: "PigeonHole" },
      { title: "Sum of squares of even and odd natural numbers", component: "SumSquares" },
      { title: "Finding the nth term of any Polynomial Sequence", component: "NthTermPolynomial" },
      { title: "Types of Recurrence Relations", component: "RecurrenceRelations" },
    ],
  },

  // ================= 4. Probability =================
  {
    title: "Probability",
    component: "Probability",
    hasArrow: true,
    subtopics: [
      { title: "Probability", component: "ProbabilityIntro" },
      { title: "Conditional Probability", component: "ConditionalProbability" },
      { title: "Bayes’s Formula", component: "BayesFormula" },
      { title: "Random Variables", component: "RandomVariables" },
    ],
  },

  // ================= 5. Graph Theory =================
  {
    title: "Graph Theory",
    component: "GraphTheory",
    hasArrow: true,
    subtopics: [
      { title: "Graph Theory Basics", component: "GraphTheoryBasics" },
      { title: "Graph Types", component: "GraphTypes" },
      { title: "Walks, Trails, Paths, Cycles, and Circuits in Graph", component: "WalksTrails" },
      { title: "Graph Isomorphisms and Connectivity", component: "GraphIsomorphisms" },
      { title: "Euler and Hamiltonian Paths", component: "EulerHamiltonian" },
      { title: "Planar Graphs and Graph Coloring", component: "PlanarGraphs" },
      { title: "Matching", component: "Matching" },
      { title: "Graph Measurements", component: "GraphMeasurements" },
      { title: "Betweenness Centrality", component: "BetweennessCentrality" },
      { title: "Number of nodes and height of binary tree", component: "BinaryTreeNodesHeight" },
      { title: "Graph Theory Practice Questions", component: "GraphTheoryPractice" },
    ],
  },

  // ================= 6. Linear Algebra =================
  {
    title: "Linear Algebra",
    component: "LinearAlgebra",
    hasArrow: true,
    subtopics: [
      { title: "Matrix Introduction", component: "MatrixIntro" },
      { title: "Different Operations on Matrices", component: "MatrixOperations" },
      { title: "Representations of Matrices and Graphs in Relations", component: "MatrixGraphRelations" },
      { title: "System of Linear Equations", component: "LinearEquations" },
      { title: "LU Decomposition of a System of Linear Equations", component: "LUDecomposition" },
      { title: "Doolittle Algorithm: LU Decomposition", component: "DoolittleLU" },
      { title: "Eigen Values and Eigen Vectors", component: "EigenValuesVectors" },
      { title: "Quiz on Linear Algebra", component: "LinearAlgebraQuiz" },
    ],
  },

  // ================= 7. Calculus =================
  {
    title: "Calculus",
    component: "Calculus",
    hasArrow: true,
    subtopics: [
      { title: "Limits, Continuity, and Differentiability", component: "LimitsContinuity" },
      { title: "Inverse functions and composition of functions", component: "InverseComposition" },
      { title: "Rolle’s Mean Value Theorem", component: "RollesTheorem" },
      { title: "Lagrange’s Mean Value Theorem", component: "LagrangeTheorem" },
      { title: "Cauchy’s Mean Value Theorem", component: "CauchyTheorem" },
      { title: "Unimodal functions and Bimodal functions", component: "UnimodalBimodal" },
      { title: "Indefinite Integrals", component: "IndefiniteIntegrals" },
    ],
  },

  // ================= 8. Statistics & Numerical Methods =================
  {
    title: "Statistics and Numerical Methods",
    component: "Statistics",
    hasArrow: true,
    subtopics: [
      { title: "Scales of Measurement", component: "ScalesMeasurement" },
      { title: "Univariate, Bivariate, and Multivariate Data", component: "DataTypes" },
      { title: "Mean, Variance, and Standard Deviation", component: "MeanVarianceSD" },
      { title: "Covariance and Correlation", component: "CovarianceCorrelation" },
      { title: "Law of Total Probability", component: "TotalProbability" },
      { title: "Binomial Distribution", component: "BinomialDistribution" },
      { title: "Hypergeometric Distribution Model", component: "Hypergeometric" },
      { title: "Probability Poisson Distribution", component: "PoissonDistribution" },
      { title: "Uniform Distribution", component: "UniformDistribution" },
      { title: "Exponential Distribution", component: "ExponentialDistribution" },
      { title: "Normal Distribution", component: "NormalDistribution" },
      { title: "Homogeneous Poisson Process", component: "HomogeneousPoisson" },
      { title: "Nonhomogeneous Poisson Processes", component: "NonhomogeneousPoisson" },
      { title: "Renewal processes in Probability", component: "RenewalProcesses" },
      { title: "Newton’s Divided Difference Interpolation Formula", component: "NewtonInterpolation" },
    ],
  },
];
