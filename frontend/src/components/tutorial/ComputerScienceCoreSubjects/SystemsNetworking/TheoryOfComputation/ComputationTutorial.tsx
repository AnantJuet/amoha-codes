import React, { useState } from 'react';
import Layout from './Layout';
import { sidebarItems } from './SidebarData';

// Import Topic Components
import Home from './Topic/Home';
import TOCIntroduction from './Topic/TOCIntroduction';
import AlphabetStrings from './Topic/AlphabetStrings';
import ChomskyHierarchy from './Topic/ChomskyHierarchy';
import FAIntroduction from './Topic/FAIntroduction';
import DFA from './Topic/DFA';
import NFA from './Topic/NFA';

// Introduction Section
import FormalProofs from './Topic/FormalProofs';
import MathPreliminaries from './Topic/MathPreliminaries';

// Finite Automata Section
import EpsilonNFA from './Topic/EpsilonNFA';
import NFAtoDFA from './Topic/NFAtoDFA';
import EpsilonNFAtoNFA from './Topic/EpsilonNFAtoNFA';
import DFAMinimization from './Topic/DFAMinimization';
import MooreMachine from './Topic/MooreMachine';
import MealyMachine from './Topic/MealyMachine';
import MooreToMealy from './Topic/MooreToMealy';
import MealyToMoore from './Topic/MealyToMoore';

// Regular Expressions Section
import REIntroduction from './Topic/REIntroduction';
import REOperators from './Topic/REOperators';
import REIdentities from './Topic/REIdentities';
import ArdensTheorem from './Topic/ArdensTheorem';
import REtoFA from './Topic/REtoFA';
import FAtoRE from './Topic/FAtoRE';
import RegularProperties from './Topic/RegularProperties';
import ClosureRegular from './Topic/ClosureRegular';
import PumpingLemmaRegular from './Topic/PumpingLemmaRegular';
import NonRegularity from './Topic/NonRegularity';
import MyhillNerode from './Topic/MyhillNerode';
import DecisionRegular from './Topic/DecisionRegular';

// Context-Free Grammars Section
import CFGIntroduction from './Topic/CFGIntroduction';
import CFGComponents from './Topic/CFGComponents';
import DerivationsParseTree from './Topic/DerivationsParseTree';
import LRDerivations from './Topic/LRDerivations';
import CFGAmbiguity from './Topic/CFGAmbiguity';
import CFGSimplification from './Topic/CFGSimplification';
import UselessSymbols from './Topic/UselessSymbols';
import UnitProductions from './Topic/UnitProductions';
import NullProductions from './Topic/NullProductions';
import ChomskyNormalForm from './Topic/ChomskyNormalForm';
import GreibachNormalForm from './Topic/GreibachNormalForm';
import ClosureCFL from './Topic/ClosureCFL';
import PumpingLemmaCFL from './Topic/PumpingLemmaCFL';
import NonCFL from './Topic/NonCFL';

// Pushdown Automata Section
import PDAIntroduction from './Topic/PDAIntroduction';
import PDAComponents from './Topic/PDAComponents';
import PDAAcceptance from './Topic/PDAAcceptance';
import PDAFinalState from './Topic/PDAFinalState';
import PDAEmptyStack from './Topic/PDAEmptyStack';
import PDAExamples from './Topic/PDAExamples';
import DPDA from './Topic/DPDA';
import DPDAvsNPDA from './Topic/DPDAvsNPDA';
import CFGtoPDA from './Topic/CFGtoPDA';
import PDAtoCFG from './Topic/PDAtoCFG';
import TwoStackPDA from './Topic/TwoStackPDA';

// Turing Machines Section
import TMIntroduction from './Topic/TMIntroduction';
import TMComponents from './Topic/TMComponents';
import TMExamples from './Topic/TMExamples';
import TMAcceptor from './Topic/TMAcceptor';
import TMTransducer from './Topic/TMTransducer';
import MultiTapeTM from './Topic/MultiTapeTM';
import NDTM from './Topic/NDTM';
import UniversalTM from './Topic/UniversalTM';
import LBA from './Topic/LBA';
import ChurchTuringThesis from './Topic/ChurchTuringThesis';
import RecursiveRE from './Topic/RecursiveRE';
import HaltingProblem from './Topic/HaltingProblem';

// Decidability Section
import DecidabilityIntro from './Topic/DecidabilityIntro';
import DecidableLanguages from './Topic/DecidableLanguages';
import UndecidableLanguages from './Topic/UndecidableLanguages';
import HaltingUndecidable from './Topic/HaltingUndecidable';
import ReductionTechniques from './Topic/ReductionTechniques';
import RicesTheorem from './Topic/RicesTheorem';
import PostCorrespondence from './Topic/PostCorrespondence';
import DecidableRegular from './Topic/DecidableRegular';
import DecidableCFL from './Topic/DecidableCFL';
import UndecidableCFL from './Topic/UndecidableCFL';
import TuringReducibility from './Topic/TuringReducibility';

// Complexity Theory Section
import ComplexityIntro from './Topic/ComplexityIntro';
import TimeComplexity from './Topic/TimeComplexity';
import SpaceComplexity from './Topic/SpaceComplexity';
import ClassP from './Topic/ClassP';
import ClassNP from './Topic/ClassNP';
import PvsNP from './Topic/PvsNP';
import NPComplete from './Topic/NPComplete';
import CookLevinTheorem from './Topic/CookLevinTheorem';
import NPHard from './Topic/NPHard';
import PolyTimeReductions from './Topic/PolyTimeReductions';
import CommonNPComplete from './Topic/CommonNPComplete';
import ApproximationAlgorithms from './Topic/ApproximationAlgorithms';
import PSPACE from './Topic/PSPACE';

// Map topic keys to components
const topicComponents: { [key: string]: React.FC } = {
  Home,
  // Introduction
  TOCIntroduction,
  AlphabetSymbols: AlphabetStrings,
  StringsOperations: AlphabetStrings,
  LanguagesOperations: AlphabetStrings,
  ChomskyHierarchy,
  AutomataOverview: FAIntroduction,
  FormalProofs,
  MathPreliminaries,
  // Finite Automata
  FAIntroduction,
  DFA,
  DFAExamples: DFA,
  NFA,
  NFAExamples: NFA,
  EpsilonNFA,
  NFAtoDFA,
  EpsilonNFAtoNFA,
  DFAMinimization,
  MooreMachine,
  MealyMachine,
  MooreToMealy,
  MealyToMoore,
  // Regular Expressions
  REIntroduction,
  REOperators,
  REIdentities,
  ArdensTheorem,
  REtoFA,
  FAtoRE,
  RegularProperties,
  ClosureRegular,
  PumpingLemmaRegular,
  NonRegularity,
  MyhillNerode,
  DecisionRegular,
  // Context-Free Grammars
  CFGIntroduction,
  CFGComponents,
  DerivationsParseTree,
  LRDerivations,
  CFGAmbiguity,
  CFGSimplification,
  UselessSymbols,
  UnitProductions,
  NullProductions,
  ChomskyNormalForm,
  GreibachNormalForm,
  ClosureCFL,
  PumpingLemmaCFL,
  NonCFL,
  // Pushdown Automata
  PDAIntroduction,
  PDAComponents,
  PDAAcceptance,
  PDAFinalState,
  PDAEmptyStack,
  PDAExamples,
  DPDA,
  DPDAvsNPDA,
  CFGtoPDA,
  PDAtoCFG,
  TwoStackPDA,
  // Turing Machines
  TMIntroduction,
  TMComponents,
  TMExamples,
  TMAcceptor,
  TMTransducer,
  MultiTapeTM,
  NDTM,
  UniversalTM,
  LBA,
  ChurchTuringThesis,
  RecursiveRE,
  HaltingProblem,
  // Decidability
  DecidabilityIntro,
  DecidableLanguages,
  UndecidableLanguages,
  HaltingUndecidable,
  ReductionTechniques,
  RicesTheorem,
  PostCorrespondence,
  DecidableRegular,
  DecidableCFL,
  UndecidableCFL,
  TuringReducibility,
  // Complexity Theory
  ComplexityIntro,
  TimeComplexity,
  SpaceComplexity,
  ClassP,
  ClassNP,
  PvsNP,
  NPComplete,
  CookLevinTheorem,
  NPHard,
  PolyTimeReductions,
  CommonNPComplete,
  ApproximationAlgorithms,
  PSPACE,
};

const ComputationTutorial: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
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

export default ComputationTutorial;
