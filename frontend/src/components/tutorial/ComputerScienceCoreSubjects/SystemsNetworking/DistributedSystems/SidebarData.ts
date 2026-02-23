import {
  BookOpen,
  Network,
  MessageSquare,
  Tag,
  Clock,
  Copy,
  Shield,
  FolderOpen,
  GitBranch,
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

  // ================= 1. Introduction to Distributed Systems =================
  {
    title: "1. Introduction",
    component: "Introduction",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "What is a Distributed System?", component: "DSDefinition" },
      { title: "Characteristics of Distributed Systems", component: "DSCharacteristics" },
      { title: "Advantages of Distributed Systems", component: "DSAdvantages" },
      { title: "Challenges in Distributed Systems", component: "DSChallenges" },
      { title: "Goals and Design Issues", component: "DSGoals" },
      { title: "Types of Distributed Systems", component: "DSTypes" },
    ],
  },

  // ================= 2. System Models =================
  {
    title: "2. System Models",
    component: "SystemModels",
    icon: Network,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to System Models", component: "SystemModelsIntro" },
      { title: "Architectural Models", component: "ArchitecturalModels" },
      { title: "Client-Server Architecture", component: "ClientServer" },
      { title: "Peer-to-Peer Architecture", component: "PeerToPeer" },
      { title: "Interaction Models", component: "InteractionModels" },
      { title: "Synchronous vs Asynchronous Systems", component: "SyncVsAsync" },
      { title: "Failure Models", component: "FailureModels" },
      { title: "Byzantine Failures", component: "ByzantineFailures" },
    ],
  },

  // ================= 3. Communication =================
  {
    title: "3. Communication",
    component: "Communication",
    icon: MessageSquare,
    hasArrow: true,
    subtopics: [
      { title: "Inter-Process Communication (IPC)", component: "IPCDistributed" },
      { title: "Sockets and TCP/UDP", component: "SocketsCommunication" },
      { title: "Remote Procedure Call (RPC)", component: "RPC" },
      { title: "RPC Implementation", component: "RPCImplementation" },
      { title: "Remote Method Invocation (RMI)", component: "RMI" },
      { title: "Message Passing", component: "MessagePassingDS" },
      { title: "Message Queuing", component: "MessageQueuing" },
      { title: "Publish-Subscribe Systems", component: "PubSubSystems" },
      { title: "Group Communication", component: "GroupCommunication" },
    ],
  },

  // ================= 4. Naming and Directory Services =================
  {
    title: "4. Naming & Directory",
    component: "NamingDirectory",
    icon: Tag,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Naming", component: "NamingIntro" },
      { title: "Names, Identifiers, and Addresses", component: "NamesIdentifiers" },
      { title: "Flat Naming", component: "FlatNaming" },
      { title: "Structured Naming", component: "StructuredNaming" },
      { title: "Name Resolution", component: "NameResolution" },
      { title: "Directory Services", component: "DirectoryServices" },
      { title: "DNS (Domain Name System)", component: "DNS" },
      { title: "LDAP", component: "LDAP" },
    ],
  },

  // ================= 5. Synchronization =================
  {
    title: "5. Synchronization",
    component: "Synchronization",
    icon: Clock,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Synchronization", component: "SyncIntro" },
      { title: "Physical Clocks", component: "PhysicalClocks" },
      { title: "Clock Synchronization Algorithms", component: "ClockSyncAlgorithms" },
      { title: "Cristian's Algorithm", component: "CristiansAlgorithm" },
      { title: "Berkeley Algorithm", component: "BerkeleyAlgorithm" },
      { title: "NTP (Network Time Protocol)", component: "NTP" },
      { title: "Logical Clocks", component: "LogicalClocks" },
      { title: "Lamport's Logical Clocks", component: "LamportClocks" },
      { title: "Vector Clocks", component: "VectorClocks" },
      { title: "Mutual Exclusion", component: "MutualExclusionDS" },
      { title: "Centralized Algorithm", component: "CentralizedMutex" },
      { title: "Distributed Algorithm", component: "DistributedMutex" },
      { title: "Token Ring Algorithm", component: "TokenRingMutex" },
      { title: "Election Algorithms", component: "ElectionAlgorithms" },
      { title: "Bully Algorithm", component: "BullyAlgorithm" },
      { title: "Ring Algorithm", component: "RingAlgorithm" },
    ],
  },

  // ================= 6. Consistency and Replication =================
  {
    title: "6. Consistency & Replication",
    component: "ConsistencyReplication",
    icon: Copy,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Replication", component: "ReplicationIntro" },
      { title: "Reasons for Replication", component: "ReplicationReasons" },
      { title: "Data-Centric Consistency Models", component: "DataCentricConsistency" },
      { title: "Strict Consistency", component: "StrictConsistency" },
      { title: "Sequential Consistency", component: "SequentialConsistency" },
      { title: "Causal Consistency", component: "CausalConsistency" },
      { title: "Eventual Consistency", component: "EventualConsistency" },
      { title: "Client-Centric Consistency Models", component: "ClientCentricConsistency" },
      { title: "Replica Management", component: "ReplicaManagement" },
      { title: "Consistency Protocols", component: "ConsistencyProtocols" },
      { title: "Primary-Based Protocols", component: "PrimaryBasedProtocols" },
      { title: "Replicated-Write Protocols", component: "ReplicatedWriteProtocols" },
      { title: "CAP Theorem", component: "CAPTheorem" },
    ],
  },

  // ================= 7. Fault Tolerance =================
  {
    title: "7. Fault Tolerance",
    component: "FaultTolerance",
    icon: Shield,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Fault Tolerance", component: "FaultToleranceIntro" },
      { title: "Types of Faults", component: "FaultTypes" },
      { title: "Failure Detection", component: "FailureDetection" },
      { title: "Heartbeat Mechanisms", component: "HeartbeatMechanisms" },
      { title: "Process Resilience", component: "ProcessResilience" },
      { title: "Reliable Communication", component: "ReliableCommunication" },
      { title: "Two-Phase Commit (2PC)", component: "TwoPhaseCommit" },
      { title: "Three-Phase Commit (3PC)", component: "ThreePhaseCommit" },
      { title: "Recovery Techniques", component: "RecoveryTechniques" },
      { title: "Checkpointing", component: "Checkpointing" },
      { title: "Message Logging", component: "MessageLogging" },
    ],
  },

  // ================= 8. Distributed File Systems =================
  {
    title: "8. Distributed File Systems",
    component: "DistributedFileSystems",
    icon: FolderOpen,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to DFS", component: "DFSIntro" },
      { title: "DFS Architecture", component: "DFSArchitecture" },
      { title: "File Naming and Transparency", component: "FileNaming" },
      { title: "File Caching", component: "FileCaching" },
      { title: "File Replication", component: "FileReplication" },
      { title: "NFS (Network File System)", component: "NFS" },
      { title: "AFS (Andrew File System)", component: "AFS" },
      { title: "GFS (Google File System)", component: "GFS" },
      { title: "HDFS (Hadoop Distributed File System)", component: "HDFS" },
    ],
  },

  // ================= 9. Distributed Transactions =================
  {
    title: "9. Distributed Transactions",
    component: "DistributedTransactions",
    icon: GitBranch,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Distributed Transactions", component: "DistTransIntro" },
      { title: "ACID Properties", component: "ACIDProperties" },
      { title: "Transaction Models", component: "TransactionModels" },
      { title: "Flat Transactions", component: "FlatTransactions" },
      { title: "Nested Transactions", component: "NestedTransactions" },
      { title: "Distributed Commit Protocols", component: "DistributedCommit" },
      { title: "Concurrency Control", component: "ConcurrencyControl" },
      { title: "Distributed Locking", component: "DistributedLocking" },
      { title: "Timestamp Ordering", component: "TimestampOrdering" },
      { title: "Optimistic Concurrency Control", component: "OptimisticCC" },
      { title: "Deadlock Handling in Distributed Systems", component: "DistributedDeadlock" },
    ],
  },

  // ================= 10. Distributed Databases =================
  {
    title: "10. Distributed Databases",
    component: "DistributedDatabases",
    icon: Database,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Distributed Databases", component: "DistDBIntro" },
      { title: "Distributed Database Architecture", component: "DistDBArchitecture" },
      { title: "Data Fragmentation", component: "DataFragmentation" },
      { title: "Horizontal Fragmentation", component: "HorizontalFragmentation" },
      { title: "Vertical Fragmentation", component: "VerticalFragmentation" },
      { title: "Data Allocation", component: "DataAllocation" },
      { title: "Distributed Query Processing", component: "DistributedQueryProcessing" },
      { title: "Distributed Database Design", component: "DistDBDesign" },
      { title: "NoSQL Databases", component: "NoSQLDatabases" },
      { title: "NewSQL Databases", component: "NewSQLDatabases" },
    ],
  },
];
