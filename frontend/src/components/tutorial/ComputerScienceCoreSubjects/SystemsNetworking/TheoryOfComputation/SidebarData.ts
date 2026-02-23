import {
  BookOpen,
  Binary,
  Repeat,
  FileText,
  Layers,
  Cpu,
  HelpCircle,
  Zap,
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

  // ================= 1. Introduction to TOC =================
  {
    title: "1. Introduction",
    component: "Introduction",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "What is Theory of Computation?", component: "TOCIntroduction" },
      { title: "Alphabet and Symbols", component: "AlphabetSymbols" },
      { title: "Strings and Operations", component: "StringsOperations" },
      { title: "Languages and Operations", component: "LanguagesOperations" },
      { title: "Chomsky Hierarchy", component: "ChomskyHierarchy" },
      { title: "Automata Theory Overview", component: "AutomataOverview" },
      { title: "Formal Proofs Techniques", component: "FormalProofs" },
      { title: "Mathematical Preliminaries", component: "MathPreliminaries" },
    ],
  },

  // ================= 2. Finite Automata =================
  {
    title: "2. Finite Automata",
    component: "FiniteAutomata",
    icon: Binary,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Finite Automata", component: "FAIntroduction" },
      { title: "Deterministic Finite Automata (DFA)", component: "DFA" },
      { title: "DFA Examples", component: "DFAExamples" },
      { title: "Non-deterministic Finite Automata (NFA)", component: "NFA" },
      { title: "NFA Examples", component: "NFAExamples" },
      { title: "Epsilon-NFA (e-NFA)", component: "EpsilonNFA" },
      { title: "NFA to DFA Conversion", component: "NFAtoDFA" },
      { title: "e-NFA to NFA Conversion", component: "EpsilonNFAtoNFA" },
      { title: "DFA Minimization", component: "DFAMinimization" },
      { title: "Moore Machine", component: "MooreMachine" },
      { title: "Mealy Machine", component: "MealyMachine" },
      { title: "Moore to Mealy Conversion", component: "MooreToMealy" },
      { title: "Mealy to Moore Conversion", component: "MealyToMoore" },
    ],
  },

  // ================= 3. Regular Expressions =================
  {
    title: "3. Regular Expressions",
    component: "RegularExpressions",
    icon: Repeat,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Regular Expressions", component: "REIntroduction" },
      { title: "Regular Expression Operators", component: "REOperators" },
      { title: "Identities in Regular Expressions", component: "REIdentities" },
      { title: "Arden's Theorem", component: "ArdensTheorem" },
      { title: "Regular Expression to FA", component: "REtoFA" },
      { title: "FA to Regular Expression", component: "FAtoRE" },
      { title: "Regular Languages Properties", component: "RegularProperties" },
      { title: "Closure Properties of Regular Languages", component: "ClosureRegular" },
      { title: "Pumping Lemma for Regular Languages", component: "PumpingLemmaRegular" },
      { title: "Proving Non-Regularity", component: "NonRegularity" },
      { title: "Myhill-Nerode Theorem", component: "MyhillNerode" },
      { title: "Decision Properties of Regular Languages", component: "DecisionRegular" },
    ],
  },

  // ================= 4. Context-Free Grammars =================
  {
    title: "4. Context-Free Grammars",
    component: "ContextFreeGrammars",
    icon: FileText,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to CFG", component: "CFGIntroduction" },
      { title: "Components of CFG", component: "CFGComponents" },
      { title: "Derivations and Parse Trees", component: "DerivationsParseTree" },
      { title: "Leftmost and Rightmost Derivations", component: "LRDerivations" },
      { title: "Ambiguity in CFG", component: "CFGAmbiguity" },
      { title: "Simplification of CFG", component: "CFGSimplification" },
      { title: "Removal of Useless Symbols", component: "UselessSymbols" },
      { title: "Removal of Unit Productions", component: "UnitProductions" },
      { title: "Removal of Null Productions", component: "NullProductions" },
      { title: "Chomsky Normal Form (CNF)", component: "ChomskyNormalForm" },
      { title: "Greibach Normal Form (GNF)", component: "GreibachNormalForm" },
      { title: "Closure Properties of CFLs", component: "ClosureCFL" },
      { title: "Pumping Lemma for CFLs", component: "PumpingLemmaCFL" },
      { title: "Proving Non-Context-Free", component: "NonCFL" },
    ],
  },

  // ================= 5. Pushdown Automata =================
  {
    title: "5. Pushdown Automata",
    component: "PushdownAutomata",
    icon: Layers,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to PDA", component: "PDAIntroduction" },
      { title: "Components of PDA", component: "PDAComponents" },
      { title: "PDA Acceptance Methods", component: "PDAAcceptance" },
      { title: "PDA by Final State", component: "PDAFinalState" },
      { title: "PDA by Empty Stack", component: "PDAEmptyStack" },
      { title: "PDA Examples", component: "PDAExamples" },
      { title: "Deterministic PDA (DPDA)", component: "DPDA" },
      { title: "DPDA vs NPDA", component: "DPDAvsNPDA" },
      { title: "CFG to PDA Conversion", component: "CFGtoPDA" },
      { title: "PDA to CFG Conversion", component: "PDAtoCFG" },
      { title: "Two-Stack PDA", component: "TwoStackPDA" },
    ],
  },

  // ================= 6. Turing Machines =================
  {
    title: "6. Turing Machines",
    component: "TuringMachines",
    icon: Cpu,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Turing Machines", component: "TMIntroduction" },
      { title: "Components of Turing Machine", component: "TMComponents" },
      { title: "Turing Machine Examples", component: "TMExamples" },
      { title: "Turing Machine as Language Acceptor", component: "TMAcceptor" },
      { title: "Turing Machine as Transducer", component: "TMTransducer" },
      { title: "Multi-Tape Turing Machine", component: "MultiTapeTM" },
      { title: "Non-Deterministic Turing Machine", component: "NDTM" },
      { title: "Universal Turing Machine", component: "UniversalTM" },
      { title: "Linear Bounded Automata", component: "LBA" },
      { title: "Church-Turing Thesis", component: "ChurchTuringThesis" },
      { title: "Recursive and Recursively Enumerable Languages", component: "RecursiveRE" },
      { title: "Turing Machine Halting Problem", component: "HaltingProblem" },
    ],
  },

  // ================= 7. Decidability =================
  {
    title: "7. Decidability",
    component: "Decidability",
    icon: HelpCircle,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Decidability", component: "DecidabilityIntro" },
      { title: "Decidable Languages", component: "DecidableLanguages" },
      { title: "Undecidable Languages", component: "UndecidableLanguages" },
      { title: "Undecidability of Halting Problem", component: "HaltingUndecidable" },
      { title: "Reduction Techniques", component: "ReductionTechniques" },
      { title: "Rice's Theorem", component: "RicesTheorem" },
      { title: "Post Correspondence Problem", component: "PostCorrespondence" },
      { title: "Decidability of Regular Languages", component: "DecidableRegular" },
      { title: "Decidability of CFLs", component: "DecidableCFL" },
      { title: "Undecidable Problems for CFLs", component: "UndecidableCFL" },
      { title: "Turing Reducibility", component: "TuringReducibility" },
    ],
  },

  // ================= 8. Complexity Theory =================
  {
    title: "8. Complexity Theory",
    component: "ComplexityTheory",
    icon: Zap,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Complexity Theory", component: "ComplexityIntro" },
      { title: "Time Complexity", component: "TimeComplexity" },
      { title: "Space Complexity", component: "SpaceComplexity" },
      { title: "Class P", component: "ClassP" },
      { title: "Class NP", component: "ClassNP" },
      { title: "P vs NP Problem", component: "PvsNP" },
      { title: "NP-Complete Problems", component: "NPComplete" },
      { title: "Cook-Levin Theorem (SAT)", component: "CookLevinTheorem" },
      { title: "NP-Hard Problems", component: "NPHard" },
      { title: "Polynomial Time Reductions", component: "PolyTimeReductions" },
      { title: "Common NP-Complete Problems", component: "CommonNPComplete" },
      { title: "Approximation Algorithms", component: "ApproximationAlgorithms" },
      { title: "PSPACE and Beyond", component: "PSPACE" },
    ],
  },
];
