import {
  BookOpen,
  Cpu,
  HardDrive,
  Zap,
  Database,
  GitBranch,
  Settings,
  Layers,
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

  // ================= 1. Introduction =================
  {
    title: "1. Introduction",
    component: "Introduction",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "What is Computer Organization?", component: "COAIntroduction" },
      { title: "Organization vs Architecture", component: "OrgVsArch" },
      { title: "Functional Units of Computer", component: "FunctionalUnits" },
      { title: "Von Neumann Architecture", component: "VonNeumann" },
      { title: "Harvard Architecture", component: "Harvard" },
      { title: "Bus Architecture", component: "BusArchitecture" },
      { title: "System Bus Structure", component: "SystemBus" },
      { title: "Computer Generations", component: "ComputerGenerations" },
    ],
  },

  // ================= 2. Data Representation =================
  {
    title: "2. Data Representation",
    component: "DataRepresentation",
    icon: Database,
    hasArrow: true,
    subtopics: [
      { title: "Number Systems", component: "NumberSystems" },
      { title: "Binary Number System", component: "BinarySystem" },
      { title: "Octal Number System", component: "OctalSystem" },
      { title: "Hexadecimal Number System", component: "HexSystem" },
      { title: "Number System Conversions", component: "NumberConversions" },
      { title: "Binary Arithmetic", component: "BinaryArithmetic" },
      { title: "Signed Number Representation", component: "SignedNumbers" },
      { title: "1's and 2's Complement", component: "Complements" },
      { title: "Fixed Point Representation", component: "FixedPoint" },
      { title: "Floating Point Representation", component: "FloatingPoint" },
      { title: "IEEE 754 Standard", component: "IEEE754" },
      { title: "BCD Code", component: "BCDCode" },
      { title: "Gray Code", component: "GrayCode" },
      { title: "Error Detection Codes", component: "ErrorDetection" },
    ],
  },

  // ================= 3. Digital Logic Circuits =================
  {
    title: "3. Digital Logic",
    component: "DigitalLogic",
    icon: GitBranch,
    hasArrow: true,
    subtopics: [
      { title: "Logic Gates", component: "LogicGates" },
      { title: "Boolean Algebra", component: "BooleanAlgebra" },
      { title: "De Morgan's Theorems", component: "DeMorgan" },
      { title: "Karnaugh Maps (K-Maps)", component: "KMaps" },
      { title: "Combinational Circuits", component: "CombinationalCircuits" },
      { title: "Half Adder and Full Adder", component: "Adders" },
      { title: "Half Subtractor and Full Subtractor", component: "Subtractors" },
      { title: "Multiplexers", component: "Multiplexers" },
      { title: "Demultiplexers", component: "Demultiplexers" },
      { title: "Encoders", component: "Encoders" },
      { title: "Decoders", component: "Decoders" },
      { title: "Comparators", component: "Comparators" },
    ],
  },

  // ================= 4. Sequential Circuits =================
  {
    title: "4. Sequential Circuits",
    component: "SequentialCircuits",
    icon: Layers,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Sequential Circuits", component: "SequentialIntro" },
      { title: "Flip-Flops", component: "FlipFlops" },
      { title: "SR Flip-Flop", component: "SRFlipFlop" },
      { title: "JK Flip-Flop", component: "JKFlipFlop" },
      { title: "D Flip-Flop", component: "DFlipFlop" },
      { title: "T Flip-Flop", component: "TFlipFlop" },
      { title: "Registers", component: "Registers" },
      { title: "Shift Registers", component: "ShiftRegisters" },
      { title: "Counters", component: "Counters" },
      { title: "Synchronous Counters", component: "SyncCounters" },
      { title: "Asynchronous Counters", component: "AsyncCounters" },
    ],
  },

  // ================= 5. CPU Organization =================
  {
    title: "5. CPU Organization",
    component: "CPUOrganization",
    icon: Cpu,
    hasArrow: true,
    subtopics: [
      { title: "CPU Structure and Function", component: "CPUStructure" },
      { title: "General Register Organization", component: "RegisterOrg" },
      { title: "Stack Organization", component: "StackOrg" },
      { title: "Instruction Format", component: "InstructionFormat" },
      { title: "Addressing Modes", component: "AddressingModes" },
      { title: "Instruction Cycle", component: "InstructionCycle" },
      { title: "Machine Cycle", component: "MachineCycle" },
      { title: "Micro-operations", component: "MicroOperations" },
      { title: "Register Transfer Language", component: "RTL" },
      { title: "ALU Organization", component: "ALUOrg" },
    ],
  },

  // ================= 6. Control Unit =================
  {
    title: "6. Control Unit",
    component: "ControlUnit",
    icon: Settings,
    hasArrow: true,
    subtopics: [
      { title: "Control Unit Organization", component: "ControlUnitOrg" },
      { title: "Hardwired Control Unit", component: "HardwiredControl" },
      { title: "Microprogrammed Control Unit", component: "MicroprogrammedControl" },
      { title: "Microinstruction Format", component: "MicroinstructionFormat" },
      { title: "Horizontal vs Vertical Microprogramming", component: "HorizontalVertical" },
      { title: "Control Memory", component: "ControlMemory" },
    ],
  },

  // ================= 7. Memory Organization =================
  {
    title: "7. Memory Organization",
    component: "MemoryOrganization",
    icon: HardDrive,
    hasArrow: true,
    subtopics: [
      { title: "Memory Hierarchy", component: "MemoryHierarchy" },
      { title: "Main Memory", component: "MainMemory" },
      { title: "RAM Types", component: "RAMTypes" },
      { title: "ROM Types", component: "ROMTypes" },
      { title: "Cache Memory", component: "CacheMemory" },
      { title: "Cache Mapping Techniques", component: "CacheMapping" },
      { title: "Direct Mapping", component: "DirectMapping" },
      { title: "Associative Mapping", component: "AssociativeMapping" },
      { title: "Set Associative Mapping", component: "SetAssociativeMapping" },
      { title: "Cache Replacement Policies", component: "CacheReplacement" },
      { title: "Cache Write Policies", component: "CacheWritePolicies" },
      { title: "Virtual Memory", component: "VirtualMemoryCOA" },
      { title: "Secondary Storage", component: "SecondaryStorage" },
    ],
  },

  // ================= 8. Input/Output Organization =================
  {
    title: "8. I/O Organization",
    component: "IOOrganization",
    icon: Zap,
    hasArrow: true,
    subtopics: [
      { title: "I/O Interface", component: "IOInterface" },
      { title: "I/O Bus and Interface Modules", component: "IOBus" },
      { title: "Programmed I/O", component: "ProgrammedIOCOA" },
      { title: "Interrupt Driven I/O", component: "InterruptIO" },
      { title: "Direct Memory Access (DMA)", component: "DMACOA" },
      { title: "I/O Processor", component: "IOProcessor" },
      { title: "Serial Communication", component: "SerialComm" },
      { title: "Parallel Communication", component: "ParallelComm" },
    ],
  },

  // ================= 9. Pipelining =================
  {
    title: "9. Pipelining",
    component: "Pipelining",
    icon: GitBranch,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Pipelining", component: "PipeliningIntro" },
      { title: "Pipeline Stages", component: "PipelineStages" },
      { title: "Pipeline Hazards", component: "PipelineHazards" },
      { title: "Structural Hazards", component: "StructuralHazards" },
      { title: "Data Hazards", component: "DataHazards" },
      { title: "Control Hazards", component: "ControlHazards" },
      { title: "Hazard Resolution Techniques", component: "HazardResolution" },
      { title: "Pipeline Performance", component: "PipelinePerformance" },
      { title: "Instruction Level Parallelism", component: "ILP" },
      { title: "Superscalar Architecture", component: "Superscalar" },
    ],
  },

  // ================= 10. Parallel Processing =================
  {
    title: "10. Parallel Processing",
    component: "ParallelProcessing",
    icon: Layers,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Parallel Processing", component: "ParallelIntro" },
      { title: "Flynn's Classification", component: "FlynnsClassification" },
      { title: "SISD Architecture", component: "SISD" },
      { title: "SIMD Architecture", component: "SIMD" },
      { title: "MISD Architecture", component: "MISD" },
      { title: "MIMD Architecture", component: "MIMD" },
      { title: "Array Processors", component: "ArrayProcessors" },
      { title: "Vector Processors", component: "VectorProcessors" },
      { title: "Multiprocessor Systems", component: "Multiprocessors" },
      { title: "Interconnection Networks", component: "InterconnectionNetworks" },
    ],
  },
];
