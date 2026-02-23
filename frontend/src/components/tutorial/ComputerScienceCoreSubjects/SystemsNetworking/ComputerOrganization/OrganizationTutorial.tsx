import React, { useState } from 'react';
import Layout from './Layout';
import { sidebarItems } from './SidebarData';

// Import Topic Components
import Home from './Topic/Home';
import COAIntroduction from './Topic/COAIntroduction';
import OrgVsArch from './Topic/OrgVsArch';
import FunctionalUnits from './Topic/FunctionalUnits';
import VonNeumann from './Topic/VonNeumann';
import Harvard from './Topic/Harvard';
import BusArchitecture from './Topic/BusArchitecture';
import SystemBus from './Topic/SystemBus';
import ComputerGenerations from './Topic/ComputerGenerations';

// Data Representation
import NumberSystems from './Topic/NumberSystems';
import BinarySystem from './Topic/BinarySystem';
import OctalSystem from './Topic/OctalSystem';
import HexSystem from './Topic/HexSystem';
import NumberConversions from './Topic/NumberConversions';
import BinaryArithmetic from './Topic/BinaryArithmetic';
import SignedNumbers from './Topic/SignedNumbers';
import Complements from './Topic/Complements';
import FixedPoint from './Topic/FixedPoint';
import FloatingPoint from './Topic/FloatingPoint';
import IEEE754 from './Topic/IEEE754';
import BCDCode from './Topic/BCDCode';
import GrayCode from './Topic/GrayCode';
import ErrorDetection from './Topic/ErrorDetection';

// Digital Logic
import LogicGates from './Topic/LogicGates';
import BooleanAlgebra from './Topic/BooleanAlgebra';
import DeMorgan from './Topic/DeMorgan';
import KMaps from './Topic/KMaps';
import CombinationalCircuits from './Topic/CombinationalCircuits';
import Adders from './Topic/Adders';
import Subtractors from './Topic/Subtractors';
import Multiplexers from './Topic/Multiplexers';
import Demultiplexers from './Topic/Demultiplexers';
import Encoders from './Topic/Encoders';
import Decoders from './Topic/Decoders';
import Comparators from './Topic/Comparators';

// Sequential Circuits
import SequentialIntro from './Topic/SequentialIntro';
import FlipFlops from './Topic/FlipFlops';
import SRFlipFlop from './Topic/SRFlipFlop';
import JKFlipFlop from './Topic/JKFlipFlop';
import DFlipFlop from './Topic/DFlipFlop';
import TFlipFlop from './Topic/TFlipFlop';
import Registers from './Topic/Registers';
import ShiftRegisters from './Topic/ShiftRegisters';
import Counters from './Topic/Counters';
import SyncCounters from './Topic/SyncCounters';
import AsyncCounters from './Topic/AsyncCounters';

// CPU Organization
import CPUStructure from './Topic/CPUStructure';
import RegisterOrg from './Topic/RegisterOrg';
import StackOrg from './Topic/StackOrg';
import InstructionFormat from './Topic/InstructionFormat';
import AddressingModes from './Topic/AddressingModes';
import InstructionCycle from './Topic/InstructionCycle';
import MachineCycle from './Topic/MachineCycle';
import MicroOperations from './Topic/MicroOperations';
import RTL from './Topic/RTL';
import ALUOrg from './Topic/ALUOrg';

// Control Unit
import ControlUnitOrg from './Topic/ControlUnitOrg';
import HardwiredControl from './Topic/HardwiredControl';
import MicroprogrammedControl from './Topic/MicroprogrammedControl';
import MicroinstructionFormat from './Topic/MicroinstructionFormat';
import HorizontalVertical from './Topic/HorizontalVertical';
import ControlMemory from './Topic/ControlMemory';

// Memory Organization
import MemoryHierarchy from './Topic/MemoryHierarchy';
import MainMemory from './Topic/MainMemory';
import RAMTypes from './Topic/RAMTypes';
import ROMTypes from './Topic/ROMTypes';
import CacheMemory from './Topic/CacheMemory';
import CacheMapping from './Topic/CacheMapping';
import DirectMapping from './Topic/DirectMapping';
import AssociativeMapping from './Topic/AssociativeMapping';
import SetAssociativeMapping from './Topic/SetAssociativeMapping';
import CacheReplacement from './Topic/CacheReplacement';
import CacheWritePolicies from './Topic/CacheWritePolicies';
import VirtualMemoryCOA from './Topic/VirtualMemoryCOA';
import SecondaryStorage from './Topic/SecondaryStorage';

// I/O Organization
import IOInterface from './Topic/IOInterface';
import IOBus from './Topic/IOBus';
import ProgrammedIOCOA from './Topic/ProgrammedIOCOA';
import InterruptIO from './Topic/InterruptIO';
import DMACOA from './Topic/DMACOA';
import IOProcessor from './Topic/IOProcessor';
import SerialComm from './Topic/SerialComm';
import ParallelComm from './Topic/ParallelComm';

// Pipelining
import PipeliningIntro from './Topic/PipeliningIntro';
import PipelineStages from './Topic/PipelineStages';
import PipelineHazards from './Topic/PipelineHazards';
import StructuralHazards from './Topic/StructuralHazards';
import DataHazards from './Topic/DataHazards';
import ControlHazards from './Topic/ControlHazards';
import HazardResolution from './Topic/HazardResolution';
import PipelinePerformance from './Topic/PipelinePerformance';
import ILP from './Topic/ILP';
import Superscalar from './Topic/Superscalar';

// Parallel Processing
import ParallelIntro from './Topic/ParallelIntro';
import FlynnsClassification from './Topic/FlynnsClassification';
import SISD from './Topic/SISD';
import SIMD from './Topic/SIMD';
import MISD from './Topic/MISD';
import MIMD from './Topic/MIMD';
import ArrayProcessors from './Topic/ArrayProcessors';
import VectorProcessors from './Topic/VectorProcessors';
import Multiprocessors from './Topic/Multiprocessors';
import InterconnectionNetworks from './Topic/InterconnectionNetworks';

// Map topic keys to components
const topicComponents: { [key: string]: React.FC } = {
  Home,
  // Introduction
  COAIntroduction,
  OrgVsArch,
  FunctionalUnits,
  VonNeumann,
  Harvard,
  BusArchitecture,
  SystemBus,
  ComputerGenerations,
  // Data Representation
  NumberSystems,
  BinarySystem,
  OctalSystem,
  HexSystem,
  NumberConversions,
  BinaryArithmetic,
  SignedNumbers,
  Complements,
  FixedPoint,
  FloatingPoint,
  IEEE754,
  BCDCode,
  GrayCode,
  ErrorDetection,
  // Digital Logic
  LogicGates,
  BooleanAlgebra,
  DeMorgan,
  KMaps,
  CombinationalCircuits,
  Adders,
  Subtractors,
  Multiplexers,
  Demultiplexers,
  Encoders,
  Decoders,
  Comparators,
  // Sequential Circuits
  SequentialIntro,
  FlipFlops,
  SRFlipFlop,
  JKFlipFlop,
  DFlipFlop,
  TFlipFlop,
  Registers,
  ShiftRegisters,
  Counters,
  SyncCounters,
  AsyncCounters,
  // CPU Organization
  CPUStructure,
  RegisterOrg,
  StackOrg,
  InstructionFormat,
  AddressingModes,
  InstructionCycle,
  MachineCycle,
  MicroOperations,
  RTL,
  ALUOrg,
  // Control Unit
  ControlUnitOrg,
  HardwiredControl,
  MicroprogrammedControl,
  MicroinstructionFormat,
  HorizontalVertical,
  ControlMemory,
  // Memory Organization
  MemoryHierarchy,
  MainMemory,
  RAMTypes,
  ROMTypes,
  CacheMemory,
  CacheMapping,
  DirectMapping,
  AssociativeMapping,
  SetAssociativeMapping,
  CacheReplacement,
  CacheWritePolicies,
  VirtualMemoryCOA,
  SecondaryStorage,
  // I/O Organization
  IOInterface,
  IOBus,
  ProgrammedIOCOA,
  InterruptIO,
  DMACOA,
  IOProcessor,
  SerialComm,
  ParallelComm,
  // Pipelining
  PipeliningIntro,
  PipelineStages,
  PipelineHazards,
  StructuralHazards,
  DataHazards,
  ControlHazards,
  HazardResolution,
  PipelinePerformance,
  ILP,
  Superscalar,
  // Parallel Processing
  ParallelIntro,
  FlynnsClassification,
  SISD,
  SIMD,
  MISD,
  MIMD,
  ArrayProcessors,
  VectorProcessors,
  Multiprocessors,
  InterconnectionNetworks,
};

const OrganizationTutorial: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
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

export default OrganizationTutorial;
