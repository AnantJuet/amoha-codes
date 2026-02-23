import {
  BookOpen,
  FolderTree,
  Terminal,
  Lock,
  Users,
  Activity,
  Package,
  FileText,
  Code,
  Network,
  Settings,
  Edit3
} from "lucide-react";

export interface SubTopic {
  title: string;
  component: string;
}

export interface SidebarItem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  title: string;
  component: string;
  hasArrow?: boolean;
  subtopics?: SubTopic[];
}

export const sidebarItems: SidebarItem[] = [
  { title: "Tutorial", component: "Home", icon: BookOpen },

  {
    title: "1. Introduction",
    component: "Introduction",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "What is Linux?", component: "WhatIsLinux" },
      { title: "History of Linux", component: "LinuxHistory" },
      { title: "Linux Distributions", component: "LinuxDistributions" },
      { title: "Installing Linux", component: "InstallingLinux" },
    ],
  },

  {
    title: "2. Linux Basics",
    component: "LinuxBasics",
    icon: FolderTree,
    hasArrow: true,
    subtopics: [
      { title: "Linux File System", component: "FileSystem" },
      { title: "Directory Structure", component: "DirectoryStructure" },
      { title: "File Types in Linux", component: "FileTypes" },
      { title: "Absolute vs Relative Paths", component: "PathTypes" },
    ],
  },

  {
    title: "3. Basic Commands",
    component: "BasicCommands",
    icon: Terminal,
    hasArrow: true,
    subtopics: [
      { title: "Navigation Commands (ls, cd, pwd)", component: "NavigationCommands" },
      { title: "File Operations (cp, mv, rm)", component: "FileOperations" },
      { title: "Directory Commands (mkdir, rmdir)", component: "DirectoryCommands" },
      { title: "File Viewing (cat, less, more)", component: "FileViewing" },
      { title: "File Search (find, locate)", component: "FileSearch" },
      { title: "Help Commands (man, info, --help)", component: "HelpCommands" },
    ],
  },

  {
    title: "4. File Permissions",
    component: "FilePermissions",
    icon: Lock,
    hasArrow: true,
    subtopics: [
      { title: "Understanding Permissions", component: "UnderstandingPermissions" },
      { title: "chmod Command", component: "ChmodCommand" },
      { title: "chown Command", component: "ChownCommand" },
      { title: "chgrp Command", component: "ChgrpCommand" },
      { title: "Special Permissions (SUID, SGID, Sticky)", component: "SpecialPermissions" },
    ],
  },

  {
    title: "5. User Management",
    component: "UserManagement",
    icon: Users,
    hasArrow: true,
    subtopics: [
      { title: "User Accounts Overview", component: "UserAccounts" },
      { title: "useradd Command", component: "UseraddCommand" },
      { title: "usermod Command", component: "UsermodCommand" },
      { title: "userdel Command", component: "UserdelCommand" },
      { title: "passwd Command", component: "PasswdCommand" },
      { title: "Groups and groupadd", component: "GroupManagement" },
      { title: "su and sudo Commands", component: "SuSudoCommands" },
    ],
  },

  {
    title: "6. Process Management",
    component: "ProcessManagement",
    icon: Activity,
    hasArrow: true,
    subtopics: [
      { title: "Understanding Processes", component: "UnderstandingProcesses" },
      { title: "ps Command", component: "PsCommand" },
      { title: "top and htop Commands", component: "TopHtopCommands" },
      { title: "kill and killall Commands", component: "KillCommands" },
      { title: "Background Jobs (bg, fg, jobs)", component: "BackgroundJobs" },
      { title: "nohup and & Operator", component: "NohupCommand" },
      { title: "nice and renice Commands", component: "NiceRenice" },
    ],
  },

  {
    title: "7. Package Management",
    component: "PackageManagement",
    icon: Package,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Package Managers", component: "PackageManagersIntro" },
      { title: "APT (Debian/Ubuntu)", component: "AptPackageManager" },
      { title: "YUM and DNF (RHEL/Fedora)", component: "YumDnfPackageManager" },
      { title: "Pacman (Arch Linux)", component: "PacmanPackageManager" },
      { title: "Snap and Flatpak", component: "SnapFlatpak" },
      { title: "Compiling from Source", component: "CompilingFromSource" },
    ],
  },

  {
    title: "8. Text Processing",
    component: "TextProcessing",
    icon: FileText,
    hasArrow: true,
    subtopics: [
      { title: "cat and tac Commands", component: "CatTacCommands" },
      { title: "head and tail Commands", component: "HeadTailCommands" },
      { title: "grep Command", component: "GrepCommand" },
      { title: "sed Command", component: "SedCommand" },
      { title: "awk Command", component: "AwkCommand" },
      { title: "sort and uniq Commands", component: "SortUniqCommands" },
      { title: "cut and paste Commands", component: "CutPasteCommands" },
      { title: "wc Command", component: "WcCommand" },
    ],
  },

  {
    title: "9. Shell Scripting",
    component: "ShellScripting",
    icon: Code,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Shell Scripting", component: "ShellScriptingIntro" },
      { title: "Variables in Shell", component: "ShellVariables" },
      { title: "Input and Output", component: "ShellInputOutput" },
      { title: "Conditional Statements (if, case)", component: "ConditionalStatements" },
      { title: "Loops (for, while, until)", component: "ShellLoops" },
      { title: "Functions in Shell", component: "ShellFunctions" },
      { title: "Arrays in Shell", component: "ShellArrays" },
      { title: "Script Debugging", component: "ScriptDebugging" },
    ],
  },

  {
    title: "10. Networking Commands",
    component: "NetworkingCommands",
    icon: Network,
    hasArrow: true,
    subtopics: [
      { title: "Network Configuration (ifconfig, ip)", component: "NetworkConfiguration" },
      { title: "netstat and ss Commands", component: "NetstatSsCommands" },
      { title: "ping and traceroute", component: "PingTraceroute" },
      { title: "SSH (Secure Shell)", component: "SshCommand" },
      { title: "SCP and SFTP", component: "ScpSftpCommands" },
      { title: "wget and curl Commands", component: "WgetCurlCommands" },
      { title: "Firewall (iptables, ufw)", component: "FirewallCommands" },
    ],
  },

  {
    title: "11. System Administration",
    component: "SystemAdministration",
    icon: Settings,
    hasArrow: true,
    subtopics: [
      { title: "systemctl and Service Management", component: "SystemctlCommand" },
      { title: "Cron Jobs and Scheduling", component: "CronJobs" },
      { title: "Log Files and journalctl", component: "LogFiles" },
      { title: "Disk Management (df, du, fdisk)", component: "DiskManagement" },
      { title: "Mount and Unmount", component: "MountUnmount" },
      { title: "Backup and Archive (tar, gzip)", component: "BackupArchive" },
      { title: "System Monitoring", component: "SystemMonitoring" },
    ],
  },

  {
    title: "12. Vi/Vim Editor",
    component: "ViVimEditor",
    icon: Edit3,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Vi/Vim", component: "VimIntroduction" },
      { title: "Vim Modes", component: "VimModes" },
      { title: "Basic Navigation", component: "VimNavigation" },
      { title: "Editing Commands", component: "VimEditing" },
      { title: "Search and Replace", component: "VimSearchReplace" },
      { title: "Saving and Exiting", component: "VimSaveExit" },
      { title: "Vim Configuration (.vimrc)", component: "VimConfiguration" },
    ],
  },
];
