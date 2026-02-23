import React, { useState } from 'react';
import Layout from './Layout';
import { sidebarItems } from './SidebarData';

// Import Topic Components
import Home from './Topic/Home';
import OSIntroduction from './Topic/OSIntroduction';
import OSFunctions from './Topic/OSFunctions';
import TypesOfOS from './Topic/TypesOfOS';
import OSStructure from './Topic/OSStructure';
import SystemCalls from './Topic/SystemCalls';
import SystemCallTypes from './Topic/SystemCallTypes';
import OSServices from './Topic/OSServices';
import Kernel from './Topic/Kernel';
import KernelTypes from './Topic/KernelTypes';
import BootingProcess from './Topic/BootingProcess';

// Process Management
import ProcessConcept from './Topic/ProcessConcept';
import ProcessStates from './Topic/ProcessStates';
import ProcessControlBlock from './Topic/ProcessControlBlock';
import ProcessOperations from './Topic/ProcessOperations';
import ContextSwitching from './Topic/ContextSwitching';
import ProcessVsThread from './Topic/ProcessVsThread';
import MultithreadingModels from './Topic/MultithreadingModels';
import ThreadTypes from './Topic/ThreadTypes';
import IPC from './Topic/IPC';
import SharedMemory from './Topic/SharedMemory';
import MessagePassing from './Topic/MessagePassing';

// CPU Scheduling
import CPUSchedulingBasics from './Topic/CPUSchedulingBasics';
import SchedulingCriteria from './Topic/SchedulingCriteria';
import PreemptiveVsNonPreemptive from './Topic/PreemptiveVsNonPreemptive';
import FCFS from './Topic/FCFS';
import SJF from './Topic/SJF';
import SRTF from './Topic/SRTF';
import PriorityScheduling from './Topic/PriorityScheduling';
import RoundRobin from './Topic/RoundRobin';
import MultilevelQueue from './Topic/MultilevelQueue';
import MultilevelFeedbackQueue from './Topic/MultilevelFeedbackQueue';
import ConvoyEffect from './Topic/ConvoyEffect';
import StarvationAging from './Topic/StarvationAging';

// Process Synchronization
import SynchronizationIntro from './Topic/SynchronizationIntro';
import RaceCondition from './Topic/RaceCondition';
import CriticalSection from './Topic/CriticalSection';
import PetersonsSolution from './Topic/PetersonsSolution';
import HardwareSynchronization from './Topic/HardwareSynchronization';
import MutexLocks from './Topic/MutexLocks';
import Semaphores from './Topic/Semaphores';
import SemaphoreTypes from './Topic/SemaphoreTypes';
import Monitors from './Topic/Monitors';
import ProducerConsumer from './Topic/ProducerConsumer';
import ReadersWriters from './Topic/ReadersWriters';
import DiningPhilosophers from './Topic/DiningPhilosophers';

// Deadlocks
import DeadlockIntro from './Topic/DeadlockIntro';
import DeadlockConditions from './Topic/DeadlockConditions';
import ResourceAllocationGraph from './Topic/ResourceAllocationGraph';
import DeadlockHandling from './Topic/DeadlockHandling';
import DeadlockPrevention from './Topic/DeadlockPrevention';
import DeadlockAvoidance from './Topic/DeadlockAvoidance';
import BankersAlgorithm from './Topic/BankersAlgorithm';
import SafetyAlgorithm from './Topic/SafetyAlgorithm';
import DeadlockDetection from './Topic/DeadlockDetection';
import DeadlockRecovery from './Topic/DeadlockRecovery';

// Memory Management
import MemoryManagementIntro from './Topic/MemoryManagementIntro';
import LogicalVsPhysicalAddress from './Topic/LogicalVsPhysicalAddress';
import MemoryAllocation from './Topic/MemoryAllocation';
import ContiguousAllocation from './Topic/ContiguousAllocation';
import FixedPartitioning from './Topic/FixedPartitioning';
import VariablePartitioning from './Topic/VariablePartitioning';
import Fragmentation from './Topic/Fragmentation';
import Compaction from './Topic/Compaction';
import Paging from './Topic/Paging';
import PageTable from './Topic/PageTable';
import TLB from './Topic/TLB';
import Segmentation from './Topic/Segmentation';
import SegmentationWithPaging from './Topic/SegmentationWithPaging';

// Virtual Memory
import VirtualMemoryIntro from './Topic/VirtualMemoryIntro';
import DemandPaging from './Topic/DemandPaging';
import PageFault from './Topic/PageFault';
import PageReplacementIntro from './Topic/PageReplacementIntro';
import FIFOReplacement from './Topic/FIFOReplacement';
import OptimalReplacement from './Topic/OptimalReplacement';
import LRUReplacement from './Topic/LRUReplacement';
import LRUApproximation from './Topic/LRUApproximation';
import CountingAlgorithms from './Topic/CountingAlgorithms';
import Thrashing from './Topic/Thrashing';
import WorkingSetModel from './Topic/WorkingSetModel';
import PageFaultFrequency from './Topic/PageFaultFrequency';

// File Systems
import FileSystemIntro from './Topic/FileSystemIntro';
import FileConcepts from './Topic/FileConcepts';
import FileAttributes from './Topic/FileAttributes';
import FileOperations from './Topic/FileOperations';
import FileAccessMethods from './Topic/FileAccessMethods';
import DirectoryStructure from './Topic/DirectoryStructure';
import SingleLevelDirectory from './Topic/SingleLevelDirectory';
import TwoLevelDirectory from './Topic/TwoLevelDirectory';
import TreeDirectory from './Topic/TreeDirectory';
import AcyclicGraphDirectory from './Topic/AcyclicGraphDirectory';
import FileSystemImplementation from './Topic/FileSystemImplementation';
import AllocationMethods from './Topic/AllocationMethods';
import ContiguousFileAllocation from './Topic/ContiguousFileAllocation';
import LinkedAllocation from './Topic/LinkedAllocation';
import IndexedAllocation from './Topic/IndexedAllocation';
import FreeSpaceManagement from './Topic/FreeSpaceManagement';

// Disk Management
import DiskStructure from './Topic/DiskStructure';
import DiskSchedulingIntro from './Topic/DiskSchedulingIntro';
import FCFSDisk from './Topic/FCFSDisk';
import SSTF from './Topic/SSTF';
import SCAN from './Topic/SCAN';
import CSCAN from './Topic/CSCAN';
import LOOK from './Topic/LOOK';
import CLOOK from './Topic/CLOOK';
import RAID from './Topic/RAID';
import RAIDLevels from './Topic/RAIDLevels';

// I/O Systems
import IOHardware from './Topic/IOHardware';
import IOTechniques from './Topic/IOTechniques';
import ProgrammedIO from './Topic/ProgrammedIO';
import InterruptDrivenIO from './Topic/InterruptDrivenIO';
import DMA from './Topic/DMA';
import DeviceControllers from './Topic/DeviceControllers';
import DeviceDrivers from './Topic/DeviceDrivers';
import IOScheduling from './Topic/IOScheduling';
import Buffering from './Topic/Buffering';
import Caching from './Topic/Caching';
import Spooling from './Topic/Spooling';

// Security and Protection
import SecurityIntro from './Topic/SecurityIntro';
import SecurityThreatsOS from './Topic/SecurityThreatsOS';
import ProgramThreats from './Topic/ProgramThreats';
import SystemNetworkThreats from './Topic/SystemNetworkThreats';
import ProtectionGoals from './Topic/ProtectionGoals';
import ProtectionDomain from './Topic/ProtectionDomain';
import AccessMatrix from './Topic/AccessMatrix';
import AccessMatrixImplementation from './Topic/AccessMatrixImplementation';
import Authentication from './Topic/Authentication';
import Encryption from './Topic/Encryption';

// Map topic keys to components
const topicComponents: { [key: string]: React.FC } = {
  Home,
  // Introduction
  OSIntroduction,
  OSFunctions,
  TypesOfOS,
  OSStructure,
  SystemCalls,
  SystemCallTypes,
  OSServices,
  Kernel,
  KernelTypes,
  BootingProcess,
  // Process Management
  ProcessConcept,
  ProcessStates,
  ProcessControlBlock,
  ProcessOperations,
  ContextSwitching,
  ProcessVsThread,
  MultithreadingModels,
  ThreadTypes,
  IPC,
  SharedMemory,
  MessagePassing,
  // CPU Scheduling
  CPUSchedulingBasics,
  SchedulingCriteria,
  PreemptiveVsNonPreemptive,
  FCFS,
  SJF,
  SRTF,
  PriorityScheduling,
  RoundRobin,
  MultilevelQueue,
  MultilevelFeedbackQueue,
  ConvoyEffect,
  StarvationAging,
  // Process Synchronization
  SynchronizationIntro,
  RaceCondition,
  CriticalSection,
  PetersonsSolution,
  HardwareSynchronization,
  MutexLocks,
  Semaphores,
  SemaphoreTypes,
  Monitors,
  ProducerConsumer,
  ReadersWriters,
  DiningPhilosophers,
  // Deadlocks
  DeadlockIntro,
  DeadlockConditions,
  ResourceAllocationGraph,
  DeadlockHandling,
  DeadlockPrevention,
  DeadlockAvoidance,
  BankersAlgorithm,
  SafetyAlgorithm,
  DeadlockDetection,
  DeadlockRecovery,
  // Memory Management
  MemoryManagementIntro,
  LogicalVsPhysicalAddress,
  MemoryAllocation,
  ContiguousAllocation,
  FixedPartitioning,
  VariablePartitioning,
  Fragmentation,
  Compaction,
  Paging,
  PageTable,
  TLB,
  Segmentation,
  SegmentationWithPaging,
  // Virtual Memory
  VirtualMemoryIntro,
  DemandPaging,
  PageFault,
  PageReplacementIntro,
  FIFOReplacement,
  OptimalReplacement,
  LRUReplacement,
  LRUApproximation,
  CountingAlgorithms,
  Thrashing,
  WorkingSetModel,
  PageFaultFrequency,
  // File Systems
  FileSystemIntro,
  FileConcepts,
  FileAttributes,
  FileOperations,
  FileAccessMethods,
  DirectoryStructure,
  SingleLevelDirectory,
  TwoLevelDirectory,
  TreeDirectory,
  AcyclicGraphDirectory,
  FileSystemImplementation,
  AllocationMethods,
  ContiguousFileAllocation,
  LinkedAllocation,
  IndexedAllocation,
  FreeSpaceManagement,
  // Disk Management
  DiskStructure,
  DiskSchedulingIntro,
  FCFSDisk,
  SSTF,
  SCAN,
  CSCAN,
  LOOK,
  CLOOK,
  RAID,
  RAIDLevels,
  // I/O Systems
  IOHardware,
  IOTechniques,
  ProgrammedIO,
  InterruptDrivenIO,
  DMA,
  DeviceControllers,
  DeviceDrivers,
  IOScheduling,
  Buffering,
  Caching,
  Spooling,
  // Security
  SecurityIntro,
  SecurityThreatsOS,
  ProgramThreats,
  SystemNetworkThreats,
  ProtectionGoals,
  ProtectionDomain,
  AccessMatrix,
  AccessMatrixImplementation,
  Authentication,
  Encryption,
};

const OperatingSystemsTutorial: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
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

export default OperatingSystemsTutorial;
