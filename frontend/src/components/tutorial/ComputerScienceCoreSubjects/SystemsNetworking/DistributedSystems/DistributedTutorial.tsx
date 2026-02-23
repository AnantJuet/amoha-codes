import React, { useState } from 'react';
import Layout from './Layout';
import { sidebarItems } from './SidebarData';

// Import Topic Components - Introduction
import Home from './Topic/Home';
import DSDefinition from './Topic/DSDefinition';
import DSCharacteristics from './Topic/DSCharacteristics';
import DSAdvantages from './Topic/DSAdvantages';
import DSChallenges from './Topic/DSChallenges';
import DSGoals from './Topic/DSGoals';
import DSTypes from './Topic/DSTypes';

// Import Topic Components - System Models
import SystemModelsIntro from './Topic/SystemModelsIntro';
import ArchitecturalModels from './Topic/ArchitecturalModels';
import ClientServer from './Topic/ClientServer';
import PeerToPeer from './Topic/PeerToPeer';
import InteractionModels from './Topic/InteractionModels';
import SyncVsAsync from './Topic/SyncVsAsync';
import FailureModels from './Topic/FailureModels';
import ByzantineFailures from './Topic/ByzantineFailures';

// Import Topic Components - Communication
import IPCDistributed from './Topic/IPCDistributed';
import SocketsCommunication from './Topic/SocketsCommunication';
import RPC from './Topic/RPC';
import RPCImplementation from './Topic/RPCImplementation';
import RMI from './Topic/RMI';
import MessagePassingDS from './Topic/MessagePassingDS';
import MessageQueuing from './Topic/MessageQueuing';
import PubSubSystems from './Topic/PubSubSystems';
import GroupCommunication from './Topic/GroupCommunication';

// Import Topic Components - Naming and Directory
import NamingIntro from './Topic/NamingIntro';
import NamesIdentifiers from './Topic/NamesIdentifiers';
import FlatNaming from './Topic/FlatNaming';
import StructuredNaming from './Topic/StructuredNaming';
import NameResolution from './Topic/NameResolution';
import DirectoryServices from './Topic/DirectoryServices';
import DNS from './Topic/DNS';
import LDAP from './Topic/LDAP';

// Import Topic Components - Synchronization
import SyncIntro from './Topic/SyncIntro';
import PhysicalClocks from './Topic/PhysicalClocks';
import ClockSyncAlgorithms from './Topic/ClockSyncAlgorithms';
import CristiansAlgorithm from './Topic/CristiansAlgorithm';
import BerkeleyAlgorithm from './Topic/BerkeleyAlgorithm';
import NTP from './Topic/NTP';
import LogicalClocks from './Topic/LogicalClocks';
import LamportClocks from './Topic/LamportClocks';
import VectorClocks from './Topic/VectorClocks';
import MutualExclusionDS from './Topic/MutualExclusionDS';
import CentralizedMutex from './Topic/CentralizedMutex';
import DistributedMutex from './Topic/DistributedMutex';
import TokenRingMutex from './Topic/TokenRingMutex';
import ElectionAlgorithms from './Topic/ElectionAlgorithms';
import BullyAlgorithm from './Topic/BullyAlgorithm';
import RingAlgorithm from './Topic/RingAlgorithm';

// Import Topic Components - Consistency and Replication
import ReplicationIntro from './Topic/ReplicationIntro';
import ReplicationReasons from './Topic/ReplicationReasons';
import DataCentricConsistency from './Topic/DataCentricConsistency';
import StrictConsistency from './Topic/StrictConsistency';
import SequentialConsistency from './Topic/SequentialConsistency';
import CausalConsistency from './Topic/CausalConsistency';
import EventualConsistency from './Topic/EventualConsistency';
import ClientCentricConsistency from './Topic/ClientCentricConsistency';
import ReplicaManagement from './Topic/ReplicaManagement';
import ConsistencyProtocols from './Topic/ConsistencyProtocols';
import PrimaryBasedProtocols from './Topic/PrimaryBasedProtocols';
import ReplicatedWriteProtocols from './Topic/ReplicatedWriteProtocols';
import CAPTheorem from './Topic/CAPTheorem';

// Import Topic Components - Fault Tolerance
import FaultToleranceIntro from './Topic/FaultToleranceIntro';
import FaultTypes from './Topic/FaultTypes';
import FailureDetection from './Topic/FailureDetection';
import HeartbeatMechanisms from './Topic/HeartbeatMechanisms';
import ProcessResilience from './Topic/ProcessResilience';
import ReliableCommunication from './Topic/ReliableCommunication';
import TwoPhaseCommit from './Topic/TwoPhaseCommit';
import ThreePhaseCommit from './Topic/ThreePhaseCommit';
import RecoveryTechniques from './Topic/RecoveryTechniques';
import Checkpointing from './Topic/Checkpointing';
import MessageLogging from './Topic/MessageLogging';

// Import Topic Components - Distributed File Systems
import DFSIntro from './Topic/DFSIntro';
import DFSArchitecture from './Topic/DFSArchitecture';
import FileNaming from './Topic/FileNaming';
import FileCaching from './Topic/FileCaching';
import FileReplication from './Topic/FileReplication';
import NFS from './Topic/NFS';
import AFS from './Topic/AFS';
import GFS from './Topic/GFS';
import HDFS from './Topic/HDFS';

// Import Topic Components - Distributed Transactions
import DistTransIntro from './Topic/DistTransIntro';
import ACIDProperties from './Topic/ACIDProperties';
import TransactionModels from './Topic/TransactionModels';
import FlatTransactions from './Topic/FlatTransactions';
import NestedTransactions from './Topic/NestedTransactions';
import DistributedCommit from './Topic/DistributedCommit';
import ConcurrencyControl from './Topic/ConcurrencyControl';
import DistributedLocking from './Topic/DistributedLocking';
import TimestampOrdering from './Topic/TimestampOrdering';
import OptimisticCC from './Topic/OptimisticCC';
import DistributedDeadlock from './Topic/DistributedDeadlock';

// Import Topic Components - Distributed Databases
import DistDBIntro from './Topic/DistDBIntro';
import DistDBArchitecture from './Topic/DistDBArchitecture';
import DataFragmentation from './Topic/DataFragmentation';
import HorizontalFragmentation from './Topic/HorizontalFragmentation';
import VerticalFragmentation from './Topic/VerticalFragmentation';
import DataAllocation from './Topic/DataAllocation';
import DistributedQueryProcessing from './Topic/DistributedQueryProcessing';
import DistDBDesign from './Topic/DistDBDesign';
import NoSQLDatabases from './Topic/NoSQLDatabases';
import NewSQLDatabases from './Topic/NewSQLDatabases';

// Map topic keys to components
const topicComponents: { [key: string]: React.FC } = {
  Home,
  // Introduction
  DSDefinition,
  DSCharacteristics,
  DSAdvantages,
  DSChallenges,
  DSGoals,
  DSTypes,
  // System Models
  SystemModelsIntro,
  ArchitecturalModels,
  ClientServer,
  PeerToPeer,
  InteractionModels,
  SyncVsAsync,
  FailureModels,
  ByzantineFailures,
  // Communication
  IPCDistributed,
  SocketsCommunication,
  RPC,
  RPCImplementation,
  RMI,
  MessagePassingDS,
  MessageQueuing,
  PubSubSystems,
  GroupCommunication,
  // Naming and Directory
  NamingIntro,
  NamesIdentifiers,
  FlatNaming,
  StructuredNaming,
  NameResolution,
  DirectoryServices,
  DNS,
  LDAP,
  // Synchronization
  SyncIntro,
  PhysicalClocks,
  ClockSyncAlgorithms,
  CristiansAlgorithm,
  BerkeleyAlgorithm,
  NTP,
  LogicalClocks,
  LamportClocks,
  VectorClocks,
  MutualExclusionDS,
  CentralizedMutex,
  DistributedMutex,
  TokenRingMutex,
  ElectionAlgorithms,
  BullyAlgorithm,
  RingAlgorithm,
  // Consistency and Replication
  ReplicationIntro,
  ReplicationReasons,
  DataCentricConsistency,
  StrictConsistency,
  SequentialConsistency,
  CausalConsistency,
  EventualConsistency,
  ClientCentricConsistency,
  ReplicaManagement,
  ConsistencyProtocols,
  PrimaryBasedProtocols,
  ReplicatedWriteProtocols,
  CAPTheorem,
  // Fault Tolerance
  FaultToleranceIntro,
  FaultTypes,
  FailureDetection,
  HeartbeatMechanisms,
  ProcessResilience,
  ReliableCommunication,
  TwoPhaseCommit,
  ThreePhaseCommit,
  RecoveryTechniques,
  Checkpointing,
  MessageLogging,
  // Distributed File Systems
  DFSIntro,
  DFSArchitecture,
  FileNaming,
  FileCaching,
  FileReplication,
  NFS,
  AFS,
  GFS,
  HDFS,
  // Distributed Transactions
  DistTransIntro,
  ACIDProperties,
  TransactionModels,
  FlatTransactions,
  NestedTransactions,
  DistributedCommit,
  ConcurrencyControl,
  DistributedLocking,
  TimestampOrdering,
  OptimisticCC,
  DistributedDeadlock,
  // Distributed Databases
  DistDBIntro,
  DistDBArchitecture,
  DataFragmentation,
  HorizontalFragmentation,
  VerticalFragmentation,
  DataAllocation,
  DistributedQueryProcessing,
  DistDBDesign,
  NoSQLDatabases,
  NewSQLDatabases,
};

const DistributedTutorial: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
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

export default DistributedTutorial;
