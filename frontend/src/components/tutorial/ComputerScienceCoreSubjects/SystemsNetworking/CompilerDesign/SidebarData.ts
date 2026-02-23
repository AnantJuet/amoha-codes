import {
  BookOpen,
  FileText,
  GitBranch,
  CheckCircle,
  Code,
  Zap,
  Cpu,
  Database,
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

  // ================= 1. Introduction to Compilers =================
  {
    title: "1. Introduction",
    component: "Introduction",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "What is a Compiler?", component: "CompilerIntroduction" },
      { title: "Language Processors", component: "LanguageProcessors" },
      { title: "Phases of a Compiler", component: "CompilerPhases" },
      { title: "Compiler vs Interpreter", component: "CompilerVsInterpreter" },
      { title: "Compiler Construction Tools", component: "CompilerTools" },
      { title: "Bootstrapping", component: "Bootstrapping" },
      { title: "Cross Compiler", component: "CrossCompiler" },
      { title: "Single Pass vs Multi Pass Compiler", component: "SingleVsMultiPass" },
      { title: "Compiler Architecture", component: "CompilerArchitecture" },
      { title: "Symbol Table Overview", component: "SymbolTableOverview" },
    ],
  },

  // ================= 2. Lexical Analysis =================
  {
    title: "2. Lexical Analysis",
    component: "LexicalAnalysis",
    icon: FileText,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Lexical Analysis", component: "LexicalAnalysisIntro" },
      { title: "Tokens, Patterns, and Lexemes", component: "TokensPatternLexemes" },
      { title: "Input Buffering", component: "InputBuffering" },
      { title: "Specification of Tokens", component: "TokenSpecification" },
      { title: "Regular Expressions", component: "RegularExpressions" },
      { title: "Regular Definitions", component: "RegularDefinitions" },
      { title: "Finite Automata", component: "FiniteAutomata" },
      { title: "NFA (Non-deterministic FA)", component: "NFA" },
      { title: "DFA (Deterministic FA)", component: "DFA" },
      { title: "NFA to DFA Conversion", component: "NFAtoDFA" },
      { title: "DFA Minimization", component: "DFAMinimization" },
      { title: "LEX - Lexical Analyzer Generator", component: "LEX" },
      { title: "Lexical Errors and Recovery", component: "LexicalErrors" },
    ],
  },

  // ================= 3. Syntax Analysis =================
  {
    title: "3. Syntax Analysis",
    component: "SyntaxAnalysis",
    icon: GitBranch,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Syntax Analysis", component: "SyntaxAnalysisIntro" },
      { title: "Context-Free Grammars (CFG)", component: "CFG" },
      { title: "Parse Trees", component: "ParseTrees" },
      { title: "Derivations (Leftmost & Rightmost)", component: "Derivations" },
      { title: "Ambiguous Grammars", component: "AmbiguousGrammars" },
      { title: "Left Recursion Elimination", component: "LeftRecursion" },
      { title: "Left Factoring", component: "LeftFactoring" },
      { title: "Top-Down Parsing", component: "TopDownParsing" },
      { title: "Recursive Descent Parser", component: "RecursiveDescentParser" },
      { title: "Predictive Parsing", component: "PredictiveParsing" },
      { title: "FIRST and FOLLOW Sets", component: "FirstFollow" },
      { title: "LL(1) Parser", component: "LL1Parser" },
      { title: "LL(1) Parsing Table", component: "LL1ParsingTable" },
      { title: "Bottom-Up Parsing", component: "BottomUpParsing" },
      { title: "Shift-Reduce Parsing", component: "ShiftReduceParsing" },
      { title: "Operator Precedence Parsing", component: "OperatorPrecedence" },
      { title: "LR Parsing Overview", component: "LRParsingOverview" },
      { title: "LR(0) Items and Parsing", component: "LR0Parsing" },
      { title: "SLR(1) Parser", component: "SLR1Parser" },
      { title: "CLR(1) Parser", component: "CLR1Parser" },
      { title: "LALR(1) Parser", component: "LALR1Parser" },
      { title: "YACC - Parser Generator", component: "YACC" },
      { title: "Syntax Errors and Recovery", component: "SyntaxErrors" },
    ],
  },

  // ================= 4. Semantic Analysis =================
  {
    title: "4. Semantic Analysis",
    component: "SemanticAnalysis",
    icon: CheckCircle,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Semantic Analysis", component: "SemanticAnalysisIntro" },
      { title: "Syntax-Directed Definitions", component: "SDD" },
      { title: "Syntax-Directed Translation", component: "SDT" },
      { title: "S-Attributed Definitions", component: "SAttributed" },
      { title: "L-Attributed Definitions", component: "LAttributed" },
      { title: "Attribute Grammars", component: "AttributeGrammars" },
      { title: "Evaluation of Attributes", component: "AttributeEvaluation" },
      { title: "Type Systems", component: "TypeSystems" },
      { title: "Type Checking", component: "TypeChecking" },
      { title: "Type Expressions", component: "TypeExpressions" },
      { title: "Type Equivalence", component: "TypeEquivalence" },
      { title: "Type Conversions (Coercions)", component: "TypeConversions" },
      { title: "Symbol Table Implementation", component: "SymbolTableImplementation" },
      { title: "Scope and Binding", component: "ScopeBinding" },
      { title: "Semantic Errors", component: "SemanticErrors" },
    ],
  },

  // ================= 5. Intermediate Code Generation =================
  {
    title: "5. Intermediate Code",
    component: "IntermediateCode",
    icon: Code,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Intermediate Code", component: "IntermediateCodeIntro" },
      { title: "Intermediate Representations", component: "IntermediateRepresentations" },
      { title: "Three-Address Code (TAC)", component: "ThreeAddressCode" },
      { title: "Quadruples", component: "Quadruples" },
      { title: "Triples", component: "Triples" },
      { title: "Indirect Triples", component: "IndirectTriples" },
      { title: "Syntax Trees (AST)", component: "SyntaxTrees" },
      { title: "Directed Acyclic Graph (DAG)", component: "DAG" },
      { title: "Postfix Notation", component: "PostfixNotation" },
      { title: "Translation of Expressions", component: "ExpressionTranslation" },
      { title: "Translation of Boolean Expressions", component: "BooleanTranslation" },
      { title: "Translation of Control Flow", component: "ControlFlowTranslation" },
      { title: "Backpatching", component: "Backpatching" },
      { title: "Translation of Arrays", component: "ArrayTranslation" },
      { title: "Translation of Procedures", component: "ProcedureTranslation" },
    ],
  },

  // ================= 6. Code Optimization =================
  {
    title: "6. Code Optimization",
    component: "CodeOptimization",
    icon: Zap,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Code Optimization", component: "OptimizationIntro" },
      { title: "Sources of Optimization", component: "OptimizationSources" },
      { title: "Optimization Criteria", component: "OptimizationCriteria" },
      { title: "Local Optimization", component: "LocalOptimization" },
      { title: "Peephole Optimization", component: "PeepholeOptimization" },
      { title: "Global Optimization", component: "GlobalOptimization" },
      { title: "Basic Blocks", component: "BasicBlocks" },
      { title: "Flow Graphs", component: "FlowGraphs" },
      { title: "Common Subexpression Elimination", component: "CommonSubexpression" },
      { title: "Dead Code Elimination", component: "DeadCodeElimination" },
      { title: "Copy Propagation", component: "CopyPropagation" },
      { title: "Constant Folding & Propagation", component: "ConstantFolding" },
      { title: "Loop Optimization", component: "LoopOptimization" },
      { title: "Code Motion", component: "CodeMotion" },
      { title: "Induction Variables", component: "InductionVariables" },
      { title: "Strength Reduction", component: "StrengthReduction" },
      { title: "Data Flow Analysis", component: "DataFlowAnalysis" },
      { title: "Reaching Definitions", component: "ReachingDefinitions" },
      { title: "Live Variable Analysis", component: "LiveVariableAnalysis" },
      { title: "Available Expressions", component: "AvailableExpressions" },
    ],
  },

  // ================= 7. Code Generation =================
  {
    title: "7. Code Generation",
    component: "CodeGeneration",
    icon: Cpu,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Code Generation", component: "CodeGenerationIntro" },
      { title: "Issues in Code Generation", component: "CodeGenerationIssues" },
      { title: "Target Machine", component: "TargetMachine" },
      { title: "Instruction Selection", component: "InstructionSelection" },
      { title: "Register Allocation", component: "RegisterAllocation" },
      { title: "Register Assignment", component: "RegisterAssignment" },
      { title: "Graph Coloring for Registers", component: "GraphColoring" },
      { title: "Instruction Scheduling", component: "InstructionScheduling" },
      { title: "Simple Code Generator", component: "SimpleCodeGenerator" },
      { title: "Code Generation from DAG", component: "DAGCodeGeneration" },
      { title: "Code Generation from Trees", component: "TreeCodeGeneration" },
      { title: "Addressing Modes", component: "AddressingModes" },
      { title: "Object Code Generation", component: "ObjectCodeGeneration" },
    ],
  },

  // ================= 8. Runtime Environments =================
  {
    title: "8. Runtime Environments",
    component: "RuntimeEnvironments",
    icon: Database,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Runtime Environments", component: "RuntimeEnvironmentIntro" },
      { title: "Storage Organization", component: "StorageOrganization" },
      { title: "Static Storage Allocation", component: "StaticAllocation" },
      { title: "Stack Storage Allocation", component: "StackAllocation" },
      { title: "Heap Storage Allocation", component: "HeapAllocation" },
      { title: "Activation Records", component: "ActivationRecords" },
      { title: "Activation Trees", component: "ActivationTrees" },
      { title: "Control Stack", component: "ControlStack" },
      { title: "Access to Non-local Data", component: "NonLocalData" },
      { title: "Static Scope (Lexical Scope)", component: "StaticScope" },
      { title: "Dynamic Scope", component: "DynamicScope" },
      { title: "Access Links and Display", component: "AccessLinksDisplay" },
      { title: "Parameter Passing Mechanisms", component: "ParameterPassing" },
      { title: "Heap Management", component: "HeapManagement" },
      { title: "Garbage Collection", component: "GarbageCollection" },
      { title: "Reference Counting", component: "ReferenceCounting" },
      { title: "Mark and Sweep", component: "MarkAndSweep" },
      { title: "Copying Collectors", component: "CopyingCollectors" },
    ],
  },
];
