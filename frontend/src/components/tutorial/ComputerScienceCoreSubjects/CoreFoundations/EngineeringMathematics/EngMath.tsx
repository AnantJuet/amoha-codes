import React, { useState } from 'react';
// Import Layout
import Layout from './Layout.tsx';

// Import specific topic components
import Home from './Topic/Home.tsx';
import PropositionalIntro from './Topic/PropositionalIntro.tsx';
import PropositionsLaws from './Topic/PropositionsLaws.tsx';
import PropositionalEquivalences from './Topic/PropositionalEquivalences.tsx';
import PDNF_PCNC from './Topic/PDNF_PCNC.tsx';
import PredicatesQuantifiers from './Topic/PredicatesQuantifiers.tsx';
import PredicatesRules from './Topic/PredicatesRules.tsx';
import NestedQuantifiers from './Topic/NestedQuantifiers.tsx';
import RulesInference from './Topic/RulesInference.tsx';
import SetsInMaths from './Topic/SetsInMaths.tsx';
import RepresentationOfSets from './Topic/RepresentationOfSets.tsx'
import SetTheorySymbols from './Topic/SetTheorySymbols.tsx';
import SubsetsSupersets from './Topic/SubsetsSupersets.tsx';
import PowerSet from './Topic/PowerSet.tsx';
import PowerSetProperties from './Topic/PowerSetProperties.tsx';
import SetTheoryFormulas from './Topic/SetTheoryFormulas.tsx';
import InclusionExclusion from './Topic/InclusionExclusion.tsx';
import ProofsIntroduction from './Topic/ProofsIntroduction.tsx';
import SequenceSeries from './Topic/SequenceSeries.tsx';
import RelationsIntro from './Topic/RelationsIntro.tsx';
import RelationsRepresentation from './Topic/RelationsRepresentation.tsx';
import RelationsMatricesGraphs from './Topic/RelationsMatricesGraphs.tsx';
import RelationsClosure from './Topic/RelationsClosure.tsx';
import PartialOrders from './Topic/PartialOrders.tsx';
import HasseDiagrams from './Topic/HasseDiagrams.tsx';
import EquivalenceRelations from './Topic/EquivalenceRelations.tsx';
import TotalFunctions from './Topic/TotalFunctions.tsx';
import ClassesFunctions from './Topic/ClassesFunctions.tsx';
import GeneratingFunctions from './Topic/GeneratingFunctions.tsx';
import Groups from './Topic/Groups.tsx';
import RingsFields from './Topic/RingsFields.tsx';
import IndependentSets from './Topic/IndependentSets.tsx';
import CombinatoricsBasics from './Topic/CombinatoricsBasics.tsx';
import PnC_Binomial from './Topic/PnC_Binomial.tsx';
import GeneralizedPnC1 from './Topic/GeneralizedPnC1.tsx';
import GeneralizedPnC2 from './Topic/GeneralizedPnC2.tsx';
import BinomialCorollaries from './Topic/BinomialCorollaries.tsx';
import PigeonHole from './Topic/PigeonHole.tsx';
import SumSquares from './Topic/SumSquares.tsx';
import NthTermPolynomial from './Topic/NthTermPolynomial.tsx';
import RecurrenceRelations from './Topic/RecurrenceRelations.tsx';
import ProbabilityIntro from './Topic/ProbabilityIntro.tsx';
import ConditionalProbability from './Topic/ConditionalProbability.tsx';
import BayesFormula from './Topic/BayesFormula.tsx';
import RandomVariables from './Topic/RandomVariables.tsx';
import GraphTheoryBasics from './Topic/GraphTheoryBasics.tsx';
import GraphTypes from './Topic/GraphTypes.tsx';
import WalksTrails from './Topic/WalksTrails.tsx';
import GraphIsomorphisms from './Topic/GraphIsomorphisms.tsx';
import EulerHamiltonian from './Topic/EulerHamiltonian.tsx';
import PlanarGraphs from './Topic/PlanarGraphs.tsx';
import Matching from './Topic/Matching.tsx';


// Map topic keys (from SidebarData) to actual components
const topicComponents: { [key: string]: React.FC } = {
  // 1. Propositional and First-Order Logic
  Home:Home,
  PropositionalIntro:PropositionalIntro,
  PropositionsLaws:PropositionsLaws,
  PropositionalEquivalences:PropositionalEquivalences,
  PDNF_PCNC:PDNF_PCNC,
  PredicatesQuantifiers:PredicatesQuantifiers,
  PredicatesRules:PredicatesRules,
  NestedQuantifiers:NestedQuantifiers,
  RulesInference:RulesInference,

  // 2.Set Theory
  SetsInMaths:SetsInMaths,
  RepresentationOfSets:RepresentationOfSets,
  SetTheorySymbols:SetTheorySymbols,
  SubsetsSupersets:SubsetsSupersets,
  PowerSet:PowerSet,
  PowerSetProperties:PowerSetProperties,
  SetTheoryFormulas:SetTheoryFormulas,
  InclusionExclusion:InclusionExclusion,
  ProofsIntroduction:ProofsIntroduction,
  SequenceSeries:SequenceSeries,
  RelationsIntro:RelationsIntro,
  RelationsRepresentation:RelationsRepresentation,
  RelationsMatricesGraphs:RelationsMatricesGraphs,
  RelationsClosure:RelationsClosure,
  PartialOrders:PartialOrders,
  HasseDiagrams:HasseDiagrams,
  EquivalenceRelations:EquivalenceRelations,
  TotalFunctions:TotalFunctions,
  ClassesFunctions:ClassesFunctions,
  GeneratingFunctions:GeneratingFunctions,
  Groups:Groups,
  RingsFields:RingsFields,
  IndependentSets:IndependentSets,

  // 3.
  CombinatoricsBasics:CombinatoricsBasics,
  PnC_Binomial:PnC_Binomial,
  GeneralizedPnC1:GeneralizedPnC1,
  GeneralizedPnC2:GeneralizedPnC2,
  BinomialCorollaries:BinomialCorollaries,
  PigeonHole:PigeonHole,
  SumSquares:SumSquares,
  NthTermPolynomial:NthTermPolynomial,
  RecurrenceRelations:RecurrenceRelations,

  // 4.
  ProbabilityIntro:ProbabilityIntro,
  ConditionalProbability:ConditionalProbability,
  BayesFormula:BayesFormula,
  RandomVariables:RandomVariables,

  // 5.
  GraphTheoryBasics:GraphTheoryBasics,
  GraphTypes:GraphTypes,
  WalksTrails:WalksTrails,
  GraphIsomorphisms:GraphIsomorphisms,
  EulerHamiltonian:EulerHamiltonian,
  PlanarGraphs:PlanarGraphs,
  Matching:Matching,
  // GraphMeasurements:GraphMeasurements,
  // BetweennessCentrality:BetweennessCentrality,
  // BinaryTreeNodesHeight:BinaryTreeNodesHeight,
  // GraphTheoryPractice:GraphTheoryPractice,
 
};

// const MainApplication: React.FC = () => {
//   // Initialize 'selected' with the first sidebar item's component key
//   const [selectedTopic, setSelectedTopic] = useState<string>(
//     sidebarItems[0]?.component || 'Overview'
//   );

//   const handleSelectTopic = (componentKey: string) => {
//     setSelectedTopic(componentKey);
//   };

//   // Dynamically get the selected Component
//   const CurrentComponent = topicComponents[selectedTopic];

//   return (
//     <div className="MainApplication">
//       <Layout selected={selectedTopic} onSelect={handleSelectTopic}>
//         {CurrentComponent ? (
//           <CurrentComponent />
//         ) : (
//           <div className="text-center p-10 text-xl text-red-500">
//             Topic content not found for "{selectedTopic}".
//           </div>
//         )}
//       </Layout>
//     </div>
//   );
// };

// export default MainApplication;



const EngMath: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const handleSelectTopic = (key: string) => {
   setSelectedTopic(key);

  };

  const CurrentComponent = topicComponents[selectedTopic] || Home;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default EngMath;