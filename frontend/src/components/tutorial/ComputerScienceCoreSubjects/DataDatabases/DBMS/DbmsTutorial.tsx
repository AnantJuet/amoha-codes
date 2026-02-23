import React, { useState } from 'react';
import Layout from './Layout';
import { sidebarItems } from './SidebarData';

// Import Topic Components - Home
import Home from './Topic/Home';

// Import Introduction Components
import DBMSIntroduction from './Topic/DBMSIntroduction';
import DBMSConcepts from './Topic/DBMSConcepts';
import FileSystemVsDBMS from './Topic/FileSystemVsDBMS';
import DBMSAdvantages from './Topic/DBMSAdvantages';
import DBMSArchitecture from './Topic/DBMSArchitecture';
import ThreeSchemaArchitecture from './Topic/ThreeSchemaArchitecture';
import DataIndependence from './Topic/DataIndependence';
import DatabaseLanguages from './Topic/DatabaseLanguages';
import DataModels from './Topic/DataModels';
import DatabaseUsers from './Topic/DatabaseUsers';

// Import ER Model Components
import ERModelIntro from './Topic/ERModelIntro';
import EntitySets from './Topic/EntitySets';
import Attributes from './Topic/Attributes';
import KeysInER from './Topic/KeysInER';
import Relationships from './Topic/Relationships';
import Cardinality from './Topic/Cardinality';
import ERDiagrams from './Topic/ERDiagrams';
import ERNotations from './Topic/ERNotations';
import ExtendedER from './Topic/ExtendedER';
import GeneralizationSpecialization from './Topic/GeneralizationSpecialization';
import Aggregation from './Topic/Aggregation';
import ERToRelational from './Topic/ERToRelational';

// Import Relational Model Components
import RelationalModelIntro from './Topic/RelationalModelIntro';
import RelationalConcepts from './Topic/RelationalConcepts';
import RelationsAndTuples from './Topic/RelationsAndTuples';
import AttributesDomains from './Topic/AttributesDomains';
import RelationalKeys from './Topic/RelationalKeys';
import SuperCandidateKey from './Topic/SuperCandidateKey';
import PrimaryForeignKey from './Topic/PrimaryForeignKey';
import AlternateCompositeKey from './Topic/AlternateCompositeKey';
import IntegrityConstraints from './Topic/IntegrityConstraints';
import DomainConstraints from './Topic/DomainConstraints';
import ReferentialIntegrity from './Topic/ReferentialIntegrity';
import RelationalAnomalies from './Topic/RelationalAnomalies';

// Import Relational Algebra Components
import RelationalAlgebraIntro from './Topic/RelationalAlgebraIntro';
import SelectionOperation from './Topic/SelectionOperation';
import ProjectionOperation from './Topic/ProjectionOperation';
import UnionOperation from './Topic/UnionOperation';
import SetDifferenceOperation from './Topic/SetDifferenceOperation';
import CartesianProduct from './Topic/CartesianProduct';
import RenameOperation from './Topic/RenameOperation';
import JoinOperations from './Topic/JoinOperations';
import NaturalJoin from './Topic/NaturalJoin';
import OuterJoins from './Topic/OuterJoins';
import DivisionOperation from './Topic/DivisionOperation';
import RelationalCalculus from './Topic/RelationalCalculus';
import TupleCalculus from './Topic/TupleCalculus';
import DomainCalculus from './Topic/DomainCalculus';

// Import SQL Components
import SQLIntroduction from './Topic/SQLIntroduction';
import SQLDataTypes from './Topic/SQLDataTypes';
import DDLCommands from './Topic/DDLCommands';
import CreateStatement from './Topic/CreateStatement';
import AlterStatement from './Topic/AlterStatement';
import DropTruncate from './Topic/DropTruncate';
import DMLCommands from './Topic/DMLCommands';
import InsertStatement from './Topic/InsertStatement';
import UpdateStatement from './Topic/UpdateStatement';
import DeleteStatement from './Topic/DeleteStatement';
import SelectStatement from './Topic/SelectStatement';
import SQLClauses from './Topic/SQLClauses';
import SQLJoins from './Topic/SQLJoins';
import SQLSubqueries from './Topic/SQLSubqueries';
import SQLViews from './Topic/SQLViews';
import SQLDCL from './Topic/SQLDCL';
import SQLTCL from './Topic/SQLTCL';
import SQLAggregation from './Topic/SQLAggregation';
import SetOperations from './Topic/SetOperations';

// Import Normalization Components
import NormalizationIntro from './Topic/NormalizationIntro';
import FunctionalDependencies from './Topic/FunctionalDependencies';
import AttributeClosure from './Topic/AttributeClosure';
import CanonicalCover from './Topic/CanonicalCover';
import FirstNormalForm from './Topic/FirstNormalForm';
import SecondNormalForm from './Topic/SecondNormalForm';
import ThirdNormalForm from './Topic/ThirdNormalForm';
import BCNF from './Topic/BCNF';
import FourthNormalForm from './Topic/FourthNormalForm';
import FifthNormalForm from './Topic/FifthNormalForm';
import Denormalization from './Topic/Denormalization';

// Import Transactions Components
import TransactionsIntro from './Topic/TransactionsIntro';
import ACIDProperties from './Topic/ACIDProperties';
import TransactionStates from './Topic/TransactionStates';
import Serializability from './Topic/Serializability';
import ConflictSerializability from './Topic/ConflictSerializability';
import ViewSerializability from './Topic/ViewSerializability';
import RecoverableSchedules from './Topic/RecoverableSchedules';
import IsolationLevels from './Topic/IsolationLevels';

// Import Concurrency Control Components
import ConcurrencyControl from './Topic/ConcurrencyControl';
import LockBasedProtocols from './Topic/LockBasedProtocols';
import TwoPhaseLocking from './Topic/TwoPhaseLocking';
import Deadlock from './Topic/Deadlock';
import DeadlockHandling from './Topic/DeadlockHandling';
import TimestampProtocols from './Topic/TimestampProtocols';
import MultiVersionCC from './Topic/MultiVersionCC';

// Import Recovery System Components
import RecoverySystem from './Topic/RecoverySystem';
import LogBasedRecovery from './Topic/LogBasedRecovery';
import CheckpointRecovery from './Topic/CheckpointRecovery';
import ShadowPaging from './Topic/ShadowPaging';
import ARIESRecovery from './Topic/ARIESRecovery';

// Import File Organization Components
import FileOrganization from './Topic/FileOrganization';
import SequentialFileOrg from './Topic/SequentialFileOrg';
import HeapFileOrg from './Topic/HeapFileOrg';
import Indexing from './Topic/Indexing';
import ClusteredIndex from './Topic/ClusteredIndex';
import DenseSparseIndex from './Topic/DenseSpareIndex';
import MultiLevelIndex from './Topic/MultiLevelIndex';
import BTreeIndex from './Topic/BTreeIndex';
import Hashing from './Topic/Hashing';

// Import Query Processing Components
import QueryProcessing from './Topic/QueryProcessing';
import QueryOptimization from './Topic/QueryOptimization';
import CostEstimation from './Topic/CostEstimation';
import JoinAlgorithms from './Topic/JoinAlgorithms';

// Map topic keys to components
const topicComponents: { [key: string]: React.FC } = {
  Home,

  // ================= 1. Introduction =================
  DBMSIntroduction,
  DBMSConcepts,
  FileSystemVsDBMS,
  DBMSAdvantages,
  DBMSArchitecture,
  ThreeSchemaArchitecture,
  DataIndependence,
  DatabaseLanguages,
  DataModels,
  DatabaseUsers,

  // ================= 2. ER Model =================
  ERModelIntro,
  EntitySets,
  Attributes,
  KeysInER,
  Relationships,
  Cardinality,
  ERDiagrams,
  ERNotations,
  ExtendedER,
  GeneralizationSpecialization,
  Aggregation,
  ERToRelational,

  // ================= 3. Relational Model =================
  RelationalModelIntro,
  RelationalConcepts,
  RelationsAndTuples,
  AttributesDomains,
  RelationalKeys,
  SuperCandidateKey,
  PrimaryForeignKey,
  AlternateCompositeKey,
  IntegrityConstraints,
  DomainConstraints,
  ReferentialIntegrity,
  RelationalAnomalies,

  // ================= 4. Relational Algebra =================
  RelationalAlgebraIntro,
  SelectionOperation,
  ProjectionOperation,
  UnionOperation,
  SetDifferenceOperation,
  CartesianProduct,
  RenameOperation,
  JoinOperations,
  NaturalJoin,
  OuterJoins,
  DivisionOperation,
  RelationalCalculus,
  TupleCalculus,
  DomainCalculus,

  // ================= 5. SQL =================
  SQLIntroduction,
  SQLDataTypes,
  DDLCommands,
  CreateStatement,
  AlterStatement,
  DropTruncate,
  DMLCommands,
  InsertStatement,
  UpdateStatement,
  DeleteStatement,
  SelectStatement,
  WhereClause: SQLClauses,
  OrderByClause: SQLClauses,
  GroupByHaving: SQLClauses,
  SQLJoins,
  InnerJoin: SQLJoins,
  LeftRightJoin: SQLJoins,
  FullOuterJoin: SQLJoins,
  CrossSelfJoin: SQLJoins,
  Subqueries: SQLSubqueries,
  CorrelatedSubqueries: SQLSubqueries,
  SQLViews,
  DCLCommands: SQLDCL,
  TCLCommands: SQLTCL,
  AggregateFunctions: SQLAggregation,
  SQLSetOperations: SetOperations,

  // ================= 6. Normalization =================
  NormalizationIntro,
  NeedForNormalization: NormalizationIntro,
  FunctionalDependencies,
  FDTypes: FunctionalDependencies,
  ArmstrongsAxioms: AttributeClosure,
  AttributeClosure,
  CanonicalCover,
  FirstNormalForm,
  SecondNormalForm,
  ThirdNormalForm,
  BCNF,
  FourthNormalForm,
  FifthNormalForm,
  MultivaluedDependencies: FourthNormalForm,
  JoinDependencies: FifthNormalForm,
  Denormalization,

  // ================= 7. Transactions =================
  TransactionIntro: TransactionsIntro,
  TransactionConcepts: TransactionsIntro,
  ACIDProperties,
  Atomicity: ACIDProperties,
  Consistency: ACIDProperties,
  Isolation: ACIDProperties,
  Durability: ACIDProperties,
  TransactionStates,
  ScheduleSerializability: Serializability,
  ConflictSerializability,
  ViewSerializability,
  Recoverability: RecoverableSchedules,
  CascadingRollback: RecoverableSchedules,
  IsolationLevels,

  // ================= 8. Concurrency Control =================
  ConcurrencyIntro: ConcurrencyControl,
  ConcurrencyProblems: ConcurrencyControl,
  LostUpdateProblem: ConcurrencyControl,
  DirtyReadProblem: ConcurrencyControl,
  UnrepeatableRead: ConcurrencyControl,
  PhantomRead: ConcurrencyControl,
  LockBasedProtocols,
  BinaryLocks: LockBasedProtocols,
  SharedExclusiveLocks: LockBasedProtocols,
  TwoPhaseLocking,
  StrictRigorous2PL: TwoPhaseLocking,
  DeadlockDBMS: Deadlock,
  DeadlockPreventionDBMS: DeadlockHandling,
  DeadlockDetectionDBMS: DeadlockHandling,
  TimestampProtocols,
  ThomasWriteRule: TimestampProtocols,
  MVCC: MultiVersionCC,
  OptimisticCC: MultiVersionCC,

  // ================= 9. Recovery System =================
  RecoveryIntro: RecoverySystem,
  FailureClassification: RecoverySystem,
  StorageStructure: RecoverySystem,
  RecoveryAtomicity: RecoverySystem,
  LogBasedRecovery,
  DeferredModification: LogBasedRecovery,
  ImmediateModification: LogBasedRecovery,
  Checkpointing: CheckpointRecovery,
  ShadowPaging,
  ARIESAlgorithm: ARIESRecovery,
  WriteAheadLogging: LogBasedRecovery,
  ConcurrentRecovery: RecoverySystem,
  DatabaseBackup: RecoverySystem,

  // ================= 10. File Organization =================
  FileOrgIntro: FileOrganization,
  FileRecordStructure: FileOrganization,
  SequentialFile: SequentialFileOrg,
  HeapFile: HeapFileOrg,
  IndexedFile: Indexing,
  PrimaryIndex: Indexing,
  SecondaryIndex: Indexing,
  ClusteringIndex: ClusteredIndex,
  DenseSparseIndex,
  MultilevelIndex: MultiLevelIndex,
  BTree: BTreeIndex,
  BPlusTree: BTreeIndex,
  BPlusTreeOperations: BTreeIndex,
  HashingTechniques: Hashing,
  StaticHashing: Hashing,
  DynamicHashing: Hashing,
  ExtendibleHashing: Hashing,
  LinearHashing: Hashing,

  // ================= 11. Query Processing =================
  QueryProcessingIntro: QueryProcessing,
  QueryProcessingSteps: QueryProcessing,
  QueryParser: QueryProcessing,
  QueryOptimizer: QueryOptimization,
  QueryExecution: QueryProcessing,
  CostEstimation,
  SelectionCost: CostEstimation,
  JoinCost: JoinAlgorithms,
  OptimizationTechniques: QueryOptimization,
  HeuristicOptimization: QueryOptimization,
  CostBasedOptimization: QueryOptimization,
  EquivalenceRules: QueryOptimization,
  MaterializedViews: SQLViews,
  ExecutionPlans: QueryProcessing,
};

const DbmsTutorial: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
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

export default DbmsTutorial;
