import React, { useState } from 'react';
import Layout from './Layout';
import { sidebarItems } from "./SidebarData";

// Import topic components
import Home from './Topic/Home';
// Introduction
import WhatIsLinux from './Topic/WhatIsLinux';
import LinuxHistory from './Topic/LinuxHistory';
import LinuxDistributions from './Topic/LinuxDistributions';
import InstallingLinux from './Topic/InstallingLinux';
// Linux Basics
import FileSystem from './Topic/FileSystem';
import DirectoryStructure from './Topic/DirectoryStructure';
import FileTypes from './Topic/FileTypes';
import PathTypes from './Topic/PathTypes';
// Basic Commands
import NavigationCommands from './Topic/NavigationCommands';
import FileOperations from './Topic/FileOperations';
import DirectoryCommands from './Topic/DirectoryCommands';
import FileViewing from './Topic/FileViewing';
import FileSearch from './Topic/FileSearch';
import HelpCommands from './Topic/HelpCommands';
// File Permissions
import UnderstandingPermissions from './Topic/UnderstandingPermissions';
import ChmodCommand from './Topic/ChmodCommand';
import ChownCommand from './Topic/ChownCommand';
import ChgrpCommand from './Topic/ChgrpCommand';
import SpecialPermissions from './Topic/SpecialPermissions';
// User Management
import UserAccounts from './Topic/UserAccounts';
import UseraddCommand from './Topic/UseraddCommand';
import UsermodCommand from './Topic/UsermodCommand';
import UserdelCommand from './Topic/UserdelCommand';
import PasswdCommand from './Topic/PasswdCommand';
import GroupManagement from './Topic/GroupManagement';
import SuSudoCommands from './Topic/SuSudoCommands';
// Process Management
import UnderstandingProcesses from './Topic/UnderstandingProcesses';
import PsCommand from './Topic/PsCommand';
import TopHtopCommands from './Topic/TopHtopCommands';
import KillCommands from './Topic/KillCommands';
import BackgroundJobs from './Topic/BackgroundJobs';
import NohupCommand from './Topic/NohupCommand';
import NiceRenice from './Topic/NiceRenice';
// Package Management
import PackageManagersIntro from './Topic/PackageManagersIntro';
import AptPackageManager from './Topic/AptPackageManager';
import YumDnfPackageManager from './Topic/YumDnfPackageManager';
import PacmanPackageManager from './Topic/PacmanPackageManager';
import SnapFlatpak from './Topic/SnapFlatpak';
import CompilingFromSource from './Topic/CompilingFromSource';
// Text Processing
import CatTacCommands from './Topic/CatTacCommands';
import HeadTailCommands from './Topic/HeadTailCommands';
import GrepCommand from './Topic/GrepCommand';
import SedCommand from './Topic/SedCommand';
import AwkCommand from './Topic/AwkCommand';
import SortUniqCommands from './Topic/SortUniqCommands';
import CutPasteCommands from './Topic/CutPasteCommands';
import WcCommand from './Topic/WcCommand';
// Shell Scripting
import ShellScriptingIntro from './Topic/ShellScriptingIntro';
import ShellVariables from './Topic/ShellVariables';
import ShellInputOutput from './Topic/ShellInputOutput';
import ConditionalStatements from './Topic/ConditionalStatements';
import ShellLoops from './Topic/ShellLoops';
import ShellFunctions from './Topic/ShellFunctions';
import ShellArrays from './Topic/ShellArrays';
import ScriptDebugging from './Topic/ScriptDebugging';
// Networking Commands
import NetworkConfiguration from './Topic/NetworkConfiguration';
import NetstatSsCommands from './Topic/NetstatSsCommands';
import PingTraceroute from './Topic/PingTraceroute';
import SshCommand from './Topic/SshCommand';
import ScpSftpCommands from './Topic/ScpSftpCommands';
import WgetCurlCommands from './Topic/WgetCurlCommands';
import FirewallCommands from './Topic/FirewallCommands';
// System Administration
import SystemctlCommand from './Topic/SystemctlCommand';
import CronJobs from './Topic/CronJobs';
import LogFiles from './Topic/LogFiles';
import DiskManagement from './Topic/DiskManagement';
import MountUnmount from './Topic/MountUnmount';
import BackupArchive from './Topic/BackupArchive';
import SystemMonitoring from './Topic/SystemMonitoring';
// Vi/Vim Editor
import VimIntroduction from './Topic/VimIntroduction';
import VimModes from './Topic/VimModes';
import VimNavigation from './Topic/VimNavigation';
import VimEditing from './Topic/VimEditing';
import VimSearchReplace from './Topic/VimSearchReplace';
import VimSaveExit from './Topic/VimSaveExit';
import VimConfiguration from './Topic/VimConfiguration';

// Map topic keys (from SidebarData) to actual components
const topicComponents: { [key: string]: React.FC } = {
  Home,
  // Introduction
  WhatIsLinux,
  LinuxHistory,
  LinuxDistributions,
  InstallingLinux,
  // Linux Basics
  FileSystem,
  DirectoryStructure,
  FileTypes,
  PathTypes,
  // Basic Commands
  NavigationCommands,
  FileOperations,
  DirectoryCommands,
  FileViewing,
  FileSearch,
  HelpCommands,
  // File Permissions
  UnderstandingPermissions,
  ChmodCommand,
  ChownCommand,
  ChgrpCommand,
  SpecialPermissions,
  // User Management
  UserAccounts,
  UseraddCommand,
  UsermodCommand,
  UserdelCommand,
  PasswdCommand,
  GroupManagement,
  SuSudoCommands,
  // Process Management
  UnderstandingProcesses,
  PsCommand,
  TopHtopCommands,
  KillCommands,
  BackgroundJobs,
  NohupCommand,
  NiceRenice,
  // Package Management
  PackageManagersIntro,
  AptPackageManager,
  YumDnfPackageManager,
  PacmanPackageManager,
  SnapFlatpak,
  CompilingFromSource,
  // Text Processing
  CatTacCommands,
  HeadTailCommands,
  GrepCommand,
  SedCommand,
  AwkCommand,
  SortUniqCommands,
  CutPasteCommands,
  WcCommand,
  // Shell Scripting
  ShellScriptingIntro,
  ShellVariables,
  ShellInputOutput,
  ConditionalStatements,
  ShellLoops,
  ShellFunctions,
  ShellArrays,
  ScriptDebugging,
  // Networking Commands
  NetworkConfiguration,
  NetstatSsCommands,
  PingTraceroute,
  SshCommand,
  ScpSftpCommands,
  WgetCurlCommands,
  FirewallCommands,
  // System Administration
  SystemctlCommand,
  CronJobs,
  LogFiles,
  DiskManagement,
  MountUnmount,
  BackupArchive,
  SystemMonitoring,
  // Vi/Vim Editor
  VimIntroduction,
  VimModes,
  VimNavigation,
  VimEditing,
  VimSearchReplace,
  VimSaveExit,
  VimConfiguration,
};

const LinuxTutorial: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>(
    sidebarItems[0]?.component || 'Home'
  );

  const handleSelectTopic = (key: string) => {
    setSelectedTopic(key);
  };

  const CurrentComponent = topicComponents[selectedTopic] || Home;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default LinuxTutorial;
