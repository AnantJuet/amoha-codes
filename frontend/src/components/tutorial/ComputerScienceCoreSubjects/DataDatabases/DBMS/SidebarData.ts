import {
  BookOpen,
  Database,
  GitBranch,
  Table,
  Code,
  Layers,
  RefreshCw,
  Lock,
  Shield,
  HardDrive,
  Search,
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

  // ================= 1. Introduction to DBMS =================
  {
    title: "1. Introduction",
    component: "Introduction",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "What is DBMS?", component: "DBMSIntroduction" },
      { title: "DBMS Concepts and Terminology", component: "DBMSConcepts" },
      { title: "File System vs DBMS", component: "FileSystemVsDBMS" },
      { title: "Advantages of DBMS", component: "DBMSAdvantages" },
      { title: "DBMS Architecture", component: "DBMSArchitecture" },
      { title: "Three Schema Architecture", component: "ThreeSchemaArchitecture" },
      { title: "Data Independence", component: "DataIndependence" },
      { title: "Database Languages", component: "DatabaseLanguages" },
      { title: "Data Models", component: "DataModels" },
      { title: "Database Users and DBA", component: "DatabaseUsers" },
    ],
  },

  // ================= 2. ER Model =================
  {
    title: "2. ER Model",
    component: "ERModel",
    icon: GitBranch,
    hasArrow: true,
    subtopics: [
      { title: "ER Model Introduction", component: "ERModelIntro" },
      { title: "Entity and Entity Sets", component: "EntitySets" },
      { title: "Attributes and Types", component: "Attributes" },
      { title: "Keys in ER Model", component: "KeysInER" },
      { title: "Relationships and Types", component: "Relationships" },
      { title: "Cardinality and Participation", component: "Cardinality" },
      { title: "ER Diagrams", component: "ERDiagrams" },
      { title: "ER Diagram Notations", component: "ERNotations" },
      { title: "Extended ER Features", component: "ExtendedER" },
      { title: "Generalization and Specialization", component: "GeneralizationSpecialization" },
      { title: "Aggregation", component: "Aggregation" },
      { title: "ER to Relational Mapping", component: "ERToRelational" },
    ],
  },

  // ================= 3. Relational Model =================
  {
    title: "3. Relational Model",
    component: "RelationalModel",
    icon: Table,
    hasArrow: true,
    subtopics: [
      { title: "Relational Model Introduction", component: "RelationalModelIntro" },
      { title: "Relational Model Concepts", component: "RelationalConcepts" },
      { title: "Relations and Tuples", component: "RelationsAndTuples" },
      { title: "Attributes and Domains", component: "AttributesDomains" },
      { title: "Keys in Relational Model", component: "RelationalKeys" },
      { title: "Super Key and Candidate Key", component: "SuperCandidateKey" },
      { title: "Primary Key and Foreign Key", component: "PrimaryForeignKey" },
      { title: "Alternate and Composite Keys", component: "AlternateCompositeKey" },
      { title: "Integrity Constraints", component: "IntegrityConstraints" },
      { title: "Domain Constraints", component: "DomainConstraints" },
      { title: "Referential Integrity", component: "ReferentialIntegrity" },
      { title: "Relational Model Anomalies", component: "RelationalAnomalies" },
    ],
  },

  // ================= 4. Relational Algebra =================
  {
    title: "4. Relational Algebra",
    component: "RelationalAlgebra",
    icon: Database,
    hasArrow: true,
    subtopics: [
      { title: "Relational Algebra Introduction", component: "RelationalAlgebraIntro" },
      { title: "Selection Operation", component: "SelectionOperation" },
      { title: "Projection Operation", component: "ProjectionOperation" },
      { title: "Union Operation", component: "UnionOperation" },
      { title: "Set Difference Operation", component: "SetDifferenceOperation" },
      { title: "Cartesian Product", component: "CartesianProduct" },
      { title: "Rename Operation", component: "RenameOperation" },
      { title: "Join Operations", component: "JoinOperations" },
      { title: "Natural Join", component: "NaturalJoin" },
      { title: "Outer Joins", component: "OuterJoins" },
      { title: "Division Operation", component: "DivisionOperation" },
      { title: "Relational Calculus", component: "RelationalCalculus" },
      { title: "Tuple Relational Calculus", component: "TupleCalculus" },
      { title: "Domain Relational Calculus", component: "DomainCalculus" },
    ],
  },

  // ================= 5. SQL =================
  {
    title: "5. SQL",
    component: "SQL",
    icon: Code,
    hasArrow: true,
    subtopics: [
      { title: "SQL Introduction", component: "SQLIntroduction" },
      { title: "SQL Data Types", component: "SQLDataTypes" },
      { title: "DDL Commands", component: "DDLCommands" },
      { title: "CREATE Statement", component: "CreateStatement" },
      { title: "ALTER Statement", component: "AlterStatement" },
      { title: "DROP and TRUNCATE", component: "DropTruncate" },
      { title: "DML Commands", component: "DMLCommands" },
      { title: "INSERT Statement", component: "InsertStatement" },
      { title: "UPDATE Statement", component: "UpdateStatement" },
      { title: "DELETE Statement", component: "DeleteStatement" },
      { title: "SELECT Statement", component: "SelectStatement" },
      { title: "WHERE Clause", component: "WhereClause" },
      { title: "ORDER BY Clause", component: "OrderByClause" },
      { title: "GROUP BY and HAVING", component: "GroupByHaving" },
      { title: "SQL Joins", component: "SQLJoins" },
      { title: "INNER JOIN", component: "InnerJoin" },
      { title: "LEFT and RIGHT JOIN", component: "LeftRightJoin" },
      { title: "FULL OUTER JOIN", component: "FullOuterJoin" },
      { title: "CROSS JOIN and Self Join", component: "CrossSelfJoin" },
      { title: "Subqueries", component: "Subqueries" },
      { title: "Correlated Subqueries", component: "CorrelatedSubqueries" },
      { title: "SQL Views", component: "SQLViews" },
      { title: "DCL Commands", component: "DCLCommands" },
      { title: "TCL Commands", component: "TCLCommands" },
      { title: "SQL Aggregate Functions", component: "AggregateFunctions" },
      { title: "SQL Set Operations", component: "SQLSetOperations" },
    ],
  },

  // ================= 6. Normalization =================
  {
    title: "6. Normalization",
    component: "Normalization",
    icon: Layers,
    hasArrow: true,
    subtopics: [
      { title: "Normalization Introduction", component: "NormalizationIntro" },
      { title: "Need for Normalization", component: "NeedForNormalization" },
      { title: "Functional Dependencies", component: "FunctionalDependencies" },
      { title: "Types of Functional Dependencies", component: "FDTypes" },
      { title: "Armstrong's Axioms", component: "ArmstrongsAxioms" },
      { title: "Closure of Attributes", component: "AttributeClosure" },
      { title: "Canonical Cover", component: "CanonicalCover" },
      { title: "First Normal Form (1NF)", component: "FirstNormalForm" },
      { title: "Second Normal Form (2NF)", component: "SecondNormalForm" },
      { title: "Third Normal Form (3NF)", component: "ThirdNormalForm" },
      { title: "Boyce-Codd Normal Form (BCNF)", component: "BCNF" },
      { title: "Fourth Normal Form (4NF)", component: "FourthNormalForm" },
      { title: "Fifth Normal Form (5NF)", component: "FifthNormalForm" },
      { title: "Multivalued Dependencies", component: "MultivaluedDependencies" },
      { title: "Join Dependencies", component: "JoinDependencies" },
      { title: "Denormalization", component: "Denormalization" },
    ],
  },

  // ================= 7. Transactions =================
  {
    title: "7. Transactions",
    component: "Transactions",
    icon: RefreshCw,
    hasArrow: true,
    subtopics: [
      { title: "Transaction Introduction", component: "TransactionIntro" },
      { title: "Transaction Concepts", component: "TransactionConcepts" },
      { title: "ACID Properties", component: "ACIDProperties" },
      { title: "Atomicity", component: "Atomicity" },
      { title: "Consistency", component: "Consistency" },
      { title: "Isolation", component: "Isolation" },
      { title: "Durability", component: "Durability" },
      { title: "Transaction States", component: "TransactionStates" },
      { title: "Schedule and Serializability", component: "ScheduleSerializability" },
      { title: "Conflict Serializability", component: "ConflictSerializability" },
      { title: "View Serializability", component: "ViewSerializability" },
      { title: "Recoverability", component: "Recoverability" },
      { title: "Cascading Rollback", component: "CascadingRollback" },
      { title: "Isolation Levels", component: "IsolationLevels" },
    ],
  },

  // ================= 8. Concurrency Control =================
  {
    title: "8. Concurrency Control",
    component: "ConcurrencyControl",
    icon: Lock,
    hasArrow: true,
    subtopics: [
      { title: "Concurrency Control Introduction", component: "ConcurrencyIntro" },
      { title: "Concurrency Problems", component: "ConcurrencyProblems" },
      { title: "Lost Update Problem", component: "LostUpdateProblem" },
      { title: "Dirty Read Problem", component: "DirtyReadProblem" },
      { title: "Unrepeatable Read", component: "UnrepeatableRead" },
      { title: "Phantom Read", component: "PhantomRead" },
      { title: "Lock-Based Protocols", component: "LockBasedProtocols" },
      { title: "Binary Locks", component: "BinaryLocks" },
      { title: "Shared and Exclusive Locks", component: "SharedExclusiveLocks" },
      { title: "Two-Phase Locking (2PL)", component: "TwoPhaseLocking" },
      { title: "Strict and Rigorous 2PL", component: "StrictRigorous2PL" },
      { title: "Deadlock in DBMS", component: "DeadlockDBMS" },
      { title: "Deadlock Prevention", component: "DeadlockPreventionDBMS" },
      { title: "Deadlock Detection", component: "DeadlockDetectionDBMS" },
      { title: "Timestamp-Based Protocols", component: "TimestampProtocols" },
      { title: "Thomas Write Rule", component: "ThomasWriteRule" },
      { title: "Multiversion Concurrency Control", component: "MVCC" },
      { title: "Optimistic Concurrency Control", component: "OptimisticCC" },
    ],
  },

  // ================= 9. Recovery System =================
  {
    title: "9. Recovery System",
    component: "RecoverySystem",
    icon: Shield,
    hasArrow: true,
    subtopics: [
      { title: "Recovery System Introduction", component: "RecoveryIntro" },
      { title: "Failure Classification", component: "FailureClassification" },
      { title: "Storage Structure", component: "StorageStructure" },
      { title: "Recovery and Atomicity", component: "RecoveryAtomicity" },
      { title: "Log-Based Recovery", component: "LogBasedRecovery" },
      { title: "Deferred Database Modification", component: "DeferredModification" },
      { title: "Immediate Database Modification", component: "ImmediateModification" },
      { title: "Checkpointing", component: "Checkpointing" },
      { title: "Shadow Paging", component: "ShadowPaging" },
      { title: "ARIES Recovery Algorithm", component: "ARIESAlgorithm" },
      { title: "Write-Ahead Logging", component: "WriteAheadLogging" },
      { title: "Recovery with Concurrent Transactions", component: "ConcurrentRecovery" },
      { title: "Database Backup", component: "DatabaseBackup" },
    ],
  },

  // ================= 10. File Organization =================
  {
    title: "10. File Organization",
    component: "FileOrganization",
    icon: HardDrive,
    hasArrow: true,
    subtopics: [
      { title: "File Organization Introduction", component: "FileOrgIntro" },
      { title: "File and Record Structure", component: "FileRecordStructure" },
      { title: "Sequential File Organization", component: "SequentialFile" },
      { title: "Heap File Organization", component: "HeapFile" },
      { title: "Indexed File Organization", component: "IndexedFile" },
      { title: "Primary Index", component: "PrimaryIndex" },
      { title: "Secondary Index", component: "SecondaryIndex" },
      { title: "Clustering Index", component: "ClusteringIndex" },
      { title: "Dense and Sparse Index", component: "DenseSparseIndex" },
      { title: "Multilevel Index", component: "MultilevelIndex" },
      { title: "B-Tree", component: "BTree" },
      { title: "B+ Tree", component: "BPlusTree" },
      { title: "B+ Tree Operations", component: "BPlusTreeOperations" },
      { title: "Hashing Techniques", component: "HashingTechniques" },
      { title: "Static Hashing", component: "StaticHashing" },
      { title: "Dynamic Hashing", component: "DynamicHashing" },
      { title: "Extendible Hashing", component: "ExtendibleHashing" },
      { title: "Linear Hashing", component: "LinearHashing" },
    ],
  },

  // ================= 11. Query Processing and Optimization =================
  {
    title: "11. Query Processing",
    component: "QueryProcessing",
    icon: Search,
    hasArrow: true,
    subtopics: [
      { title: "Query Processing Introduction", component: "QueryProcessingIntro" },
      { title: "Query Processing Steps", component: "QueryProcessingSteps" },
      { title: "Query Parser", component: "QueryParser" },
      { title: "Query Optimizer", component: "QueryOptimizer" },
      { title: "Query Execution", component: "QueryExecution" },
      { title: "Cost Estimation", component: "CostEstimation" },
      { title: "Selection Operation Cost", component: "SelectionCost" },
      { title: "Join Operation Cost", component: "JoinCost" },
      { title: "Query Optimization Techniques", component: "OptimizationTechniques" },
      { title: "Heuristic Optimization", component: "HeuristicOptimization" },
      { title: "Cost-Based Optimization", component: "CostBasedOptimization" },
      { title: "Equivalence Rules", component: "EquivalenceRules" },
      { title: "Materialized Views", component: "MaterializedViews" },
      { title: "Query Execution Plans", component: "ExecutionPlans" },
    ],
  },
];
