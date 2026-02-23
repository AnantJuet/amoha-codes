import React, { useState } from 'react';
// Import Layout
import Layout from './Layout.tsx';
// Import sidebar data
import { sidebarItems } from './SidebarData.ts';

// Import Topic Components
import Home from './Topic/Home.tsx';

// Number Theory
import NumberSystems from './Topic/NumberSystems.tsx';
import NumberConversions from './Topic/NumberConversions.tsx';
import PrimeNumbers from './Topic/PrimeNumbers.tsx';
import GcdLcm from './Topic/GcdLcm.tsx';
import ModularArithmetic from './Topic/ModularArithmetic.tsx';
import EuclideanAlgorithm from './Topic/EuclideanAlgorithm.tsx';
import ExtendedEuclidean from './Topic/ExtendedEuclidean.tsx';
import FermatsTheorem from './Topic/FermatsTheorem.tsx';
import ChineseRemainder from './Topic/ChineseRemainder.tsx';
import EulerTotient from './Topic/EulerTotient.tsx';

// Combinatorics
import CountingPrinciples from './Topic/CountingPrinciples.tsx';
import Permutations from './Topic/Permutations.tsx';
import Combinations from './Topic/Combinations.tsx';
import BinomialTheorem from './Topic/BinomialTheorem.tsx';
import PascalsTriangle from './Topic/PascalsTriangle.tsx';
import PigeonholePrinciple from './Topic/PigeonholePrinciple.tsx';
import InclusionExclusion from './Topic/InclusionExclusion.tsx';
import RecurrenceRelations from './Topic/RecurrenceRelations.tsx';
import GeneratingFunctions from './Topic/GeneratingFunctions.tsx';
import CatalanNumbers from './Topic/CatalanNumbers.tsx';

// Set Theory & Logic
import IntroSets from './Topic/IntroSets.tsx';
import SetOperations from './Topic/SetOperations.tsx';
import VennDiagrams from './Topic/VennDiagrams.tsx';
import PropositionalLogic from './Topic/PropositionalLogic.tsx';
import TruthTables from './Topic/TruthTables.tsx';
import LogicalEquivalences from './Topic/LogicalEquivalences.tsx';
import PredicateLogic from './Topic/PredicateLogic.tsx';
import Quantifiers from './Topic/Quantifiers.tsx';
import MathProofs from './Topic/MathProofs.tsx';
import ProofTechniques from './Topic/ProofTechniques.tsx';

// Relations & Functions
import IntroRelations from './Topic/IntroRelations.tsx';
import RelationTypes from './Topic/RelationTypes.tsx';
import RelationRepresentation from './Topic/RelationRepresentation.tsx';
import EquivalenceRelations from './Topic/EquivalenceRelations.tsx';
import PartialOrders from './Topic/PartialOrders.tsx';
import IntroFunctions from './Topic/IntroFunctions.tsx';
import FunctionTypes from './Topic/FunctionTypes.tsx';
import FunctionComposition from './Topic/FunctionComposition.tsx';

// Graph Theory
import IntroGraphs from './Topic/IntroGraphs.tsx';
import GraphTerminology from './Topic/GraphTerminology.tsx';
import GraphRepresentation from './Topic/GraphRepresentation.tsx';
import Trees from './Topic/Trees.tsx';
import GraphTraversals from './Topic/GraphTraversals.tsx';
import ShortestPaths from './Topic/ShortestPaths.tsx';
import MinSpanningTrees from './Topic/MinSpanningTrees.tsx';
import EulerianHamiltonian from './Topic/EulerianHamiltonian.tsx';
import GraphColoring from './Topic/GraphColoring.tsx';
import Planarity from './Topic/Planarity.tsx';

// Linear Algebra
import VectorsMatrices from './Topic/VectorsMatrices.tsx';
import MatrixOperations from './Topic/MatrixOperations.tsx';
import SystemsLinearEquations from './Topic/SystemsLinearEquations.tsx';
import Determinants from './Topic/Determinants.tsx';
import MatrixInverse from './Topic/MatrixInverse.tsx';
import VectorSpaces from './Topic/VectorSpaces.tsx';
import LinearTransformations from './Topic/LinearTransformations.tsx';
import Eigenvalues from './Topic/Eigenvalues.tsx';
import BooleanAlgebra from './Topic/BooleanAlgebra.tsx';

// Probability
import IntroProbability from './Topic/IntroProbability.tsx';
import ConditionalProbability from './Topic/ConditionalProbability.tsx';
import BayesTheorem from './Topic/BayesTheorem.tsx';
import RandomVariables from './Topic/RandomVariables.tsx';
import ExpectedValue from './Topic/ExpectedValue.tsx';
import CommonDistributions from './Topic/CommonDistributions.tsx';
import Variance from './Topic/Variance.tsx';
import LawLargeNumbers from './Topic/LawLargeNumbers.tsx';
import CentralLimitTheorem from './Topic/CentralLimitTheorem.tsx';

// Algorithms & Complexity
import BigONotation from './Topic/BigONotation.tsx';
import MasterTheorem from './Topic/MasterTheorem.tsx';
import RecurrenceSolving from './Topic/RecurrenceSolving.tsx';
import PvsNP from './Topic/PvsNP.tsx';
import ComputabilityBasics from './Topic/ComputabilityBasics.tsx';
import AmortizedAnalysis from './Topic/AmortizedAnalysis.tsx';

// Map topic keys (from SidebarData) to actual components
const topicComponents: { [key: string]: React.FC } = {
  Home,
  // Number Theory
  NumberSystems,
  NumberConversions,
  PrimeNumbers,
  GcdLcm,
  ModularArithmetic,
  EuclideanAlgorithm,
  ExtendedEuclidean,
  FermatsTheorem,
  ChineseRemainder,
  EulerTotient,
  // Combinatorics
  CountingPrinciples,
  Permutations,
  Combinations,
  BinomialTheorem,
  PascalsTriangle,
  PigeonholePrinciple,
  InclusionExclusion,
  RecurrenceRelations,
  GeneratingFunctions,
  CatalanNumbers,
  // Set Theory & Logic
  IntroSets,
  SetOperations,
  VennDiagrams,
  PropositionalLogic,
  TruthTables,
  LogicalEquivalences,
  PredicateLogic,
  Quantifiers,
  MathProofs,
  ProofTechniques,
  // Relations & Functions
  IntroRelations,
  RelationTypes,
  RelationRepresentation,
  EquivalenceRelations,
  PartialOrders,
  IntroFunctions,
  FunctionTypes,
  FunctionComposition,
  // Graph Theory
  IntroGraphs,
  GraphTerminology,
  GraphRepresentation,
  Trees,
  GraphTraversals,
  ShortestPaths,
  MinSpanningTrees,
  EulerianHamiltonian,
  GraphColoring,
  Planarity,
  // Linear Algebra
  VectorsMatrices,
  MatrixOperations,
  SystemsLinearEquations,
  Determinants,
  MatrixInverse,
  VectorSpaces,
  LinearTransformations,
  Eigenvalues,
  BooleanAlgebra,
  // Probability
  IntroProbability,
  ConditionalProbability,
  BayesTheorem,
  RandomVariables,
  ExpectedValue,
  CommonDistributions,
  Variance,
  LawLargeNumbers,
  CentralLimitTheorem,
  // Algorithms & Complexity
  BigONotation,
  MasterTheorem,
  RecurrenceSolving,
  PvsNP,
  ComputabilityBasics,
  AmortizedAnalysis,
};

const MathCS: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  // Initialize 'selected' with the first sidebar item's component key
  const [selectedTopic, setSelectedTopic] = useState<string>(
    sidebarItems[0]?.component || 'Home'
  );

  const handleSelectTopic = (componentKey: string) => {
    setSelectedTopic(componentKey);
  };

  // Dynamically get the selected Component
  const CurrentComponent = topicComponents[selectedTopic] || Home;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default MathCS;
