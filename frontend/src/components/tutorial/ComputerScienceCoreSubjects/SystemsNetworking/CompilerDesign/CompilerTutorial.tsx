import React, { useState } from 'react';
import Layout from './Layout';
import { sidebarItems } from './SidebarData';

// Import Topic Components - Introduction
import Home from './Topic/Home';
import CompilerIntroduction from './Topic/CompilerIntroduction';
import LanguageProcessors from './Topic/LanguageProcessors';
import CompilerPhases from './Topic/CompilerPhases';
import CompilerVsInterpreter from './Topic/CompilerVsInterpreter';
import CompilerTools from './Topic/CompilerTools';
import Bootstrapping from './Topic/Bootstrapping';
import CrossCompiler from './Topic/CrossCompiler';
import SingleVsMultiPass from './Topic/SingleVsMultiPass';
import CompilerArchitecture from './Topic/CompilerArchitecture';
import SymbolTableOverview from './Topic/SymbolTableOverview';

// Import Topic Components - Lexical Analysis
import LexicalAnalysisIntro from './Topic/LexicalAnalysisIntro';
import TokensPatternLexemes from './Topic/TokensPatternLexemes';
import InputBuffering from './Topic/InputBuffering';
import TokenSpecification from './Topic/TokenSpecification';
import RegularExpressions from './Topic/RegularExpressions';
import RegularDefinitions from './Topic/RegularDefinitions';
import FiniteAutomata from './Topic/FiniteAutomata';
import NFA from './Topic/NFA';
import DFA from './Topic/DFA';
import NFAtoDFA from './Topic/NFAtoDFA';
import DFAMinimization from './Topic/DFAMinimization';
import LEX from './Topic/LEX';
import LexicalErrors from './Topic/LexicalErrors';

// Import Topic Components - Syntax Analysis
import SyntaxAnalysisIntro from './Topic/SyntaxAnalysisIntro';
import CFG from './Topic/CFG';
import ParseTrees from './Topic/ParseTrees';
import Derivations from './Topic/Derivations';
import AmbiguousGrammars from './Topic/AmbiguousGrammars';
import LeftRecursion from './Topic/LeftRecursion';
import LeftFactoring from './Topic/LeftFactoring';
import TopDownParsing from './Topic/TopDownParsing';
import RecursiveDescentParser from './Topic/RecursiveDescentParser';
import PredictiveParsing from './Topic/PredictiveParsing';
import FirstFollow from './Topic/FirstFollow';
import LL1Parser from './Topic/LL1Parser';
import LL1ParsingTable from './Topic/LL1ParsingTable';
import BottomUpParsing from './Topic/BottomUpParsing';
import ShiftReduceParsing from './Topic/ShiftReduceParsing';
import OperatorPrecedence from './Topic/OperatorPrecedence';
import LRParsingOverview from './Topic/LRParsingOverview';
import LR0Parsing from './Topic/LR0Parsing';
import SLR1Parser from './Topic/SLR1Parser';
import CLR1Parser from './Topic/CLR1Parser';
import LALR1Parser from './Topic/LALR1Parser';
import YACC from './Topic/YACC';
import SyntaxErrors from './Topic/SyntaxErrors';

// Import Topic Components - Semantic Analysis
import SemanticAnalysisIntro from './Topic/SemanticAnalysisIntro';
import SDD from './Topic/SDD';
import SDT from './Topic/SDT';
import SAttributed from './Topic/SAttributed';
import LAttributed from './Topic/LAttributed';
import AttributeGrammars from './Topic/AttributeGrammars';
import AttributeEvaluation from './Topic/AttributeEvaluation';
import TypeSystems from './Topic/TypeSystems';
import TypeChecking from './Topic/TypeChecking';
import TypeExpressions from './Topic/TypeExpressions';
import TypeEquivalence from './Topic/TypeEquivalence';
import TypeConversions from './Topic/TypeConversions';
import SymbolTableImplementation from './Topic/SymbolTableImplementation';
import ScopeBinding from './Topic/ScopeBinding';
import SemanticErrors from './Topic/SemanticErrors';

// Import Topic Components - Intermediate Code Generation
import IntermediateCodeIntro from './Topic/IntermediateCodeIntro';
import IntermediateRepresentations from './Topic/IntermediateRepresentations';
import ThreeAddressCode from './Topic/ThreeAddressCode';
import Quadruples from './Topic/Quadruples';
import Triples from './Topic/Triples';
import IndirectTriples from './Topic/IndirectTriples';
import SyntaxTrees from './Topic/SyntaxTrees';
import DAG from './Topic/DAG';
import PostfixNotation from './Topic/PostfixNotation';
import ExpressionTranslation from './Topic/ExpressionTranslation';
import BooleanTranslation from './Topic/BooleanTranslation';
import ControlFlowTranslation from './Topic/ControlFlowTranslation';
import Backpatching from './Topic/Backpatching';
import ArrayTranslation from './Topic/ArrayTranslation';
import ProcedureTranslation from './Topic/ProcedureTranslation';

// Import Topic Components - Code Optimization
import OptimizationIntro from './Topic/OptimizationIntro';
import OptimizationSources from './Topic/OptimizationSources';
import OptimizationCriteria from './Topic/OptimizationCriteria';
import LocalOptimization from './Topic/LocalOptimization';
import PeepholeOptimization from './Topic/PeepholeOptimization';
import GlobalOptimization from './Topic/GlobalOptimization';
import BasicBlocks from './Topic/BasicBlocks';
import FlowGraphs from './Topic/FlowGraphs';
import CommonSubexpression from './Topic/CommonSubexpression';
import DeadCodeElimination from './Topic/DeadCodeElimination';
import CopyPropagation from './Topic/CopyPropagation';
import ConstantFolding from './Topic/ConstantFolding';
import LoopOptimization from './Topic/LoopOptimization';
import CodeMotion from './Topic/CodeMotion';
import InductionVariables from './Topic/InductionVariables';
import StrengthReduction from './Topic/StrengthReduction';
import DataFlowAnalysis from './Topic/DataFlowAnalysis';
import ReachingDefinitions from './Topic/ReachingDefinitions';
import LiveVariableAnalysis from './Topic/LiveVariableAnalysis';
import AvailableExpressions from './Topic/AvailableExpressions';

// Import Topic Components - Code Generation
import CodeGenerationIntro from './Topic/CodeGenerationIntro';
import CodeGenerationIssues from './Topic/CodeGenerationIssues';
import TargetMachine from './Topic/TargetMachine';
import InstructionSelection from './Topic/InstructionSelection';
import RegisterAllocation from './Topic/RegisterAllocation';
import RegisterAssignment from './Topic/RegisterAssignment';
import GraphColoring from './Topic/GraphColoring';
import InstructionScheduling from './Topic/InstructionScheduling';
import SimpleCodeGenerator from './Topic/SimpleCodeGenerator';
import DAGCodeGeneration from './Topic/DAGCodeGeneration';
import TreeCodeGeneration from './Topic/TreeCodeGeneration';
import AddressingModes from './Topic/AddressingModes';
import ObjectCodeGeneration from './Topic/ObjectCodeGeneration';

// Import Topic Components - Runtime Environment
import RuntimeEnvironmentIntro from './Topic/RuntimeEnvironmentIntro';
import StorageOrganization from './Topic/StorageOrganization';
import StackAllocation from './Topic/StackAllocation';
import HeapManagement from './Topic/HeapManagement';
import ActivationRecords from './Topic/ActivationRecords';
import ActivationTrees from './Topic/ActivationTrees';
import ParameterPassing from './Topic/ParameterPassing';
import GarbageCollection from './Topic/GarbageCollection';
import ReferenceCounting from './Topic/ReferenceCounting';
import MarkAndSweep from './Topic/MarkAndSweep';
import CopyingCollectors from './Topic/CopyingCollectors';
import StaticDynamicScoping from './Topic/StaticDynamicScoping';
import Linker from './Topic/Linker';
import Loader from './Topic/Loader';
import GenerationalGC from './Topic/GenerationalGC';
import StorageAllocationStrategies from './Topic/StorageAllocationStrategies';
import CallingConventions from './Topic/CallingConventions';
import ClosuresAndContinuations from './Topic/ClosuresAndContinuations';

// Placeholder component for topics not yet created
const ComingSoon: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Content Coming Soon</h1>
    <p className="text-lg">This topic is under development. Please check back later.</p>
  </div>
);

// Map topic keys to components
const topicComponents: { [key: string]: React.FC } = {
  Home,
  // Introduction
  CompilerIntroduction,
  LanguageProcessors,
  CompilerPhases,
  CompilerVsInterpreter,
  CompilerTools,
  Bootstrapping,
  CrossCompiler,
  SingleVsMultiPass,
  CompilerArchitecture,
  SymbolTableOverview,
  // Lexical Analysis
  LexicalAnalysisIntro,
  TokensPatternLexemes,
  InputBuffering,
  TokenSpecification,
  RegularExpressions,
  RegularDefinitions,
  FiniteAutomata,
  NFA,
  DFA,
  NFAtoDFA,
  DFAMinimization,
  LEX,
  LexicalErrors,
  // Syntax Analysis
  SyntaxAnalysisIntro,
  CFG,
  ParseTrees,
  Derivations,
  AmbiguousGrammars,
  LeftRecursion,
  LeftFactoring,
  TopDownParsing,
  RecursiveDescentParser,
  PredictiveParsing,
  FirstFollow,
  LL1Parser,
  LL1ParsingTable,
  BottomUpParsing,
  ShiftReduceParsing,
  OperatorPrecedence,
  LRParsingOverview,
  LR0Parsing,
  SLR1Parser,
  CLR1Parser,
  LALR1Parser,
  YACC,
  SyntaxErrors,
  // Semantic Analysis
  SemanticAnalysisIntro,
  SDD,
  SDT,
  SAttributed,
  LAttributed,
  AttributeGrammars,
  AttributeEvaluation,
  TypeSystems,
  TypeChecking,
  TypeExpressions,
  TypeEquivalence,
  TypeConversions,
  SymbolTableImplementation,
  ScopeBinding,
  SemanticErrors,
  // Intermediate Code Generation
  IntermediateCodeIntro,
  IntermediateRepresentations,
  ThreeAddressCode,
  Quadruples,
  Triples,
  IndirectTriples,
  SyntaxTrees,
  DAG,
  PostfixNotation,
  ExpressionTranslation,
  BooleanTranslation,
  ControlFlowTranslation,
  Backpatching,
  ArrayTranslation,
  ProcedureTranslation,
  // Code Optimization
  OptimizationIntro,
  OptimizationSources,
  OptimizationCriteria,
  LocalOptimization,
  PeepholeOptimization,
  GlobalOptimization,
  BasicBlocks,
  FlowGraphs,
  CommonSubexpression,
  DeadCodeElimination,
  CopyPropagation,
  ConstantFolding,
  LoopOptimization,
  CodeMotion,
  InductionVariables,
  StrengthReduction,
  DataFlowAnalysis,
  ReachingDefinitions,
  LiveVariableAnalysis,
  AvailableExpressions,
  // Code Generation
  CodeGenerationIntro,
  CodeGenerationIssues,
  TargetMachine,
  InstructionSelection,
  RegisterAllocation,
  RegisterAssignment,
  GraphColoring,
  InstructionScheduling,
  SimpleCodeGenerator,
  DAGCodeGeneration,
  TreeCodeGeneration,
  AddressingModes,
  ObjectCodeGeneration,
  // Runtime Environment
  RuntimeEnvironmentIntro,
  StorageOrganization,
  StaticAllocation: ComingSoon,
  StackAllocation,
  HeapAllocation: ComingSoon,
  ActivationRecords,
  ActivationTrees,
  ControlStack: ComingSoon,
  NonLocalData: ComingSoon,
  StaticScope: ComingSoon,
  DynamicScope: ComingSoon,
  AccessLinksDisplay: ComingSoon,
  ParameterPassing,
  HeapManagement,
  GarbageCollection,
  ReferenceCounting,
  MarkAndSweep,
  CopyingCollectors,
  StaticDynamicScoping,
  Linker,
  Loader,
  GenerationalGC,
  StorageAllocationStrategies,
  CallingConventions,
  ClosuresAndContinuations,
};

const CompilerTutorial: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
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

export default CompilerTutorial;
