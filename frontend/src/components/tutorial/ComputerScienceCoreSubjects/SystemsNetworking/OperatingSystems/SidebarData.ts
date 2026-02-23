import {
  BookOpen,
  Cpu,
  Clock,
  Lock,
  AlertTriangle,
  HardDrive,
  FolderOpen,
  Database,
  Shield,
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

  // ================= 1. Introduction to Operating Systems =================
  {
    title: "1. Introduction",
    component: "Introduction",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "What is an Operating System?", component: "OSIntroduction" },
      { title: "Functions of Operating System", component: "OSFunctions" },
      { title: "Types of Operating Systems", component: "TypesOfOS" },
      { title: "Operating System Structure", component: "OSStructure" },
      { title: "System Calls", component: "SystemCalls" },
      { title: "Types of System Calls", component: "SystemCallTypes" },
      { title: "Operating System Services", component: "OSServices" },
      { title: "Kernel in Operating System", component: "Kernel" },
      { title: "Microkernel vs Monolithic Kernel", component: "KernelTypes" },
      { title: "Booting Process", component: "BootingProcess" },
    ],
  },

  // ================= 2. Process Management =================
  {
    title: "2. Process Management",
    component: "ProcessManagement",
    icon: Cpu,
    hasArrow: true,
    subtopics: [
      { title: "Process Concept", component: "ProcessConcept" },
      { title: "Process States", component: "ProcessStates" },
      { title: "Process Control Block (PCB)", component: "ProcessControlBlock" },
      { title: "Process Operations", component: "ProcessOperations" },
      { title: "Context Switching", component: "ContextSwitching" },
      { title: "Process vs Thread", component: "ProcessVsThread" },
      { title: "Multithreading Models", component: "MultithreadingModels" },
      { title: "User Level vs Kernel Level Threads", component: "ThreadTypes" },
      { title: "Inter-Process Communication", component: "IPC" },
      { title: "Shared Memory Systems", component: "SharedMemory" },
      { title: "Message Passing Systems", component: "MessagePassing" },
    ],
  },

  // ================= 3. CPU Scheduling =================
  {
    title: "3. CPU Scheduling",
    component: "CPUScheduling",
    icon: Clock,
    hasArrow: true,
    subtopics: [
      { title: "CPU Scheduling Basics", component: "CPUSchedulingBasics" },
      { title: "Scheduling Criteria", component: "SchedulingCriteria" },
      { title: "Preemptive vs Non-Preemptive", component: "PreemptiveVsNonPreemptive" },
      { title: "First Come First Serve (FCFS)", component: "FCFS" },
      { title: "Shortest Job First (SJF)", component: "SJF" },
      { title: "Shortest Remaining Time First", component: "SRTF" },
      { title: "Priority Scheduling", component: "PriorityScheduling" },
      { title: "Round Robin Scheduling", component: "RoundRobin" },
      { title: "Multilevel Queue Scheduling", component: "MultilevelQueue" },
      { title: "Multilevel Feedback Queue", component: "MultilevelFeedbackQueue" },
      { title: "Convoy Effect", component: "ConvoyEffect" },
      { title: "Starvation and Aging", component: "StarvationAging" },
    ],
  },

  // ================= 4. Process Synchronization =================
  {
    title: "4. Process Synchronization",
    component: "ProcessSynchronization",
    icon: Lock,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Synchronization", component: "SynchronizationIntro" },
      { title: "Race Condition", component: "RaceCondition" },
      { title: "Critical Section Problem", component: "CriticalSection" },
      { title: "Peterson's Solution", component: "PetersonsSolution" },
      { title: "Hardware Synchronization", component: "HardwareSynchronization" },
      { title: "Mutex Locks", component: "MutexLocks" },
      { title: "Semaphores", component: "Semaphores" },
      { title: "Binary vs Counting Semaphores", component: "SemaphoreTypes" },
      { title: "Monitors", component: "Monitors" },
      { title: "Producer-Consumer Problem", component: "ProducerConsumer" },
      { title: "Readers-Writers Problem", component: "ReadersWriters" },
      { title: "Dining Philosophers Problem", component: "DiningPhilosophers" },
    ],
  },

  // ================= 5. Deadlocks =================
  {
    title: "5. Deadlocks",
    component: "Deadlocks",
    icon: AlertTriangle,
    hasArrow: true,
    subtopics: [
      { title: "Deadlock Introduction", component: "DeadlockIntro" },
      { title: "Necessary Conditions for Deadlock", component: "DeadlockConditions" },
      { title: "Resource Allocation Graph", component: "ResourceAllocationGraph" },
      { title: "Methods for Handling Deadlocks", component: "DeadlockHandling" },
      { title: "Deadlock Prevention", component: "DeadlockPrevention" },
      { title: "Deadlock Avoidance", component: "DeadlockAvoidance" },
      { title: "Banker's Algorithm", component: "BankersAlgorithm" },
      { title: "Safety Algorithm", component: "SafetyAlgorithm" },
      { title: "Deadlock Detection", component: "DeadlockDetection" },
      { title: "Recovery from Deadlock", component: "DeadlockRecovery" },
    ],
  },

  // ================= 6. Memory Management =================
  {
    title: "6. Memory Management",
    component: "MemoryManagement",
    icon: HardDrive,
    hasArrow: true,
    subtopics: [
      { title: "Memory Management Introduction", component: "MemoryManagementIntro" },
      { title: "Logical vs Physical Address", component: "LogicalVsPhysicalAddress" },
      { title: "Memory Allocation Techniques", component: "MemoryAllocation" },
      { title: "Contiguous Memory Allocation", component: "ContiguousAllocation" },
      { title: "Fixed Partitioning", component: "FixedPartitioning" },
      { title: "Variable Partitioning", component: "VariablePartitioning" },
      { title: "Memory Fragmentation", component: "Fragmentation" },
      { title: "Compaction", component: "Compaction" },
      { title: "Paging", component: "Paging" },
      { title: "Page Table", component: "PageTable" },
      { title: "Translation Lookaside Buffer (TLB)", component: "TLB" },
      { title: "Segmentation", component: "Segmentation" },
      { title: "Segmentation with Paging", component: "SegmentationWithPaging" },
    ],
  },

  // ================= 7. Virtual Memory =================
  {
    title: "7. Virtual Memory",
    component: "VirtualMemory",
    icon: Database,
    hasArrow: true,
    subtopics: [
      { title: "Virtual Memory Introduction", component: "VirtualMemoryIntro" },
      { title: "Demand Paging", component: "DemandPaging" },
      { title: "Page Fault", component: "PageFault" },
      { title: "Page Replacement Introduction", component: "PageReplacementIntro" },
      { title: "FIFO Page Replacement", component: "FIFOReplacement" },
      { title: "Optimal Page Replacement", component: "OptimalReplacement" },
      { title: "LRU Page Replacement", component: "LRUReplacement" },
      { title: "LRU Approximation Algorithms", component: "LRUApproximation" },
      { title: "Counting Based Algorithms", component: "CountingAlgorithms" },
      { title: "Thrashing", component: "Thrashing" },
      { title: "Working Set Model", component: "WorkingSetModel" },
      { title: "Page Fault Frequency", component: "PageFaultFrequency" },
    ],
  },

  // ================= 8. File Systems =================
  {
    title: "8. File Systems",
    component: "FileSystems",
    icon: FolderOpen,
    hasArrow: true,
    subtopics: [
      { title: "File System Introduction", component: "FileSystemIntro" },
      { title: "File Concepts", component: "FileConcepts" },
      { title: "File Attributes", component: "FileAttributes" },
      { title: "File Operations", component: "FileOperations" },
      { title: "File Access Methods", component: "FileAccessMethods" },
      { title: "Directory Structure", component: "DirectoryStructure" },
      { title: "Single Level Directory", component: "SingleLevelDirectory" },
      { title: "Two Level Directory", component: "TwoLevelDirectory" },
      { title: "Tree Structured Directory", component: "TreeDirectory" },
      { title: "Acyclic Graph Directory", component: "AcyclicGraphDirectory" },
      { title: "File System Implementation", component: "FileSystemImplementation" },
      { title: "Allocation Methods", component: "AllocationMethods" },
      { title: "Contiguous Allocation", component: "ContiguousFileAllocation" },
      { title: "Linked Allocation", component: "LinkedAllocation" },
      { title: "Indexed Allocation", component: "IndexedAllocation" },
      { title: "Free Space Management", component: "FreeSpaceManagement" },
    ],
  },

  // ================= 9. Disk Management =================
  {
    title: "9. Disk Management",
    component: "DiskManagement",
    icon: HardDrive,
    hasArrow: true,
    subtopics: [
      { title: "Disk Structure", component: "DiskStructure" },
      { title: "Disk Scheduling Introduction", component: "DiskSchedulingIntro" },
      { title: "FCFS Disk Scheduling", component: "FCFSDisk" },
      { title: "SSTF Disk Scheduling", component: "SSTF" },
      { title: "SCAN Disk Scheduling", component: "SCAN" },
      { title: "C-SCAN Disk Scheduling", component: "CSCAN" },
      { title: "LOOK Disk Scheduling", component: "LOOK" },
      { title: "C-LOOK Disk Scheduling", component: "CLOOK" },
      { title: "RAID Structure", component: "RAID" },
      { title: "RAID Levels", component: "RAIDLevels" },
    ],
  },

  // ================= 10. I/O Systems =================
  {
    title: "10. I/O Systems",
    component: "IOSystems",
    icon: Cpu,
    hasArrow: true,
    subtopics: [
      { title: "I/O Hardware", component: "IOHardware" },
      { title: "I/O Techniques", component: "IOTechniques" },
      { title: "Programmed I/O", component: "ProgrammedIO" },
      { title: "Interrupt Driven I/O", component: "InterruptDrivenIO" },
      { title: "Direct Memory Access (DMA)", component: "DMA" },
      { title: "Device Controllers", component: "DeviceControllers" },
      { title: "Device Drivers", component: "DeviceDrivers" },
      { title: "I/O Scheduling", component: "IOScheduling" },
      { title: "Buffering", component: "Buffering" },
      { title: "Caching", component: "Caching" },
      { title: "Spooling", component: "Spooling" },
    ],
  },

  // ================= 11. Security and Protection =================
  {
    title: "11. Security & Protection",
    component: "SecurityProtection",
    icon: Shield,
    hasArrow: true,
    subtopics: [
      { title: "Security Introduction", component: "SecurityIntro" },
      { title: "Security Threats", component: "SecurityThreatsOS" },
      { title: "Program Threats", component: "ProgramThreats" },
      { title: "System and Network Threats", component: "SystemNetworkThreats" },
      { title: "Protection Goals", component: "ProtectionGoals" },
      { title: "Domain of Protection", component: "ProtectionDomain" },
      { title: "Access Matrix", component: "AccessMatrix" },
      { title: "Implementation of Access Matrix", component: "AccessMatrixImplementation" },
      { title: "Authentication", component: "Authentication" },
      { title: "Encryption", component: "Encryption" },
    ],
  },
];
