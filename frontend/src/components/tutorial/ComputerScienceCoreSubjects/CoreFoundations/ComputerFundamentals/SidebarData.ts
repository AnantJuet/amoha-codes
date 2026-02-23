import { 
  BookOpen, 
  Cpu, 
  Layers, 
  Globe, 
  FileText, 
  KeyRound, 
  Database, 
  Code, 
  Network, 
  Shield, 
  Briefcase 
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
  hasArrow?: boolean; // To show dropdown arrow
  subtopics?: SubTopic[]; // Nested topics
}

export const sidebarItems: SidebarItem[] = [
  { title: "Tutorial", component: "Home", icon: BookOpen },
  

  {
    title: "1. Introduction",
    component: "Introduction",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "Computer and its Types", component: "ComputerTypes" },
      { title: "Applications of Computers", component: "ApplicationsOfComputers" },
    ],
  },

  {
    title: "2. Components",
    component: "Components",
    icon: Cpu,
    hasArrow: true,
    subtopics: [
      { title: "Hardware", component: "Hardware" },
      { title: "Software", component: "Software" },
      { title: "Central Processing Unit (CPU)", component: "CPU" },
      { title: "Computer Memory", component: "Memory" },
      { title: "Input Devices", component: "InputDevices" },
      { title: "Output Devices", component: "OutputDevices" },
    ],
  },

  {
    title: "3. Operating Systems",
    component: "OperatingSystems",
    icon: Layers,
    hasArrow: true,
    subtopics: [
      { title: "Introduction", component: "OSIntroduction" },
      { title: "Windows", component: "Windows" },
      { title: "Linux", component: "Linux" },
      { title: "iOS", component: "iOS" },
      { title: "macOS", component: "macOS" },
      { title: "ChromeOS", component: "ChromeOS" },
    ],
  },

  {
    title: "4. Internet & WWW",
    component: "InternetWWW",
    icon: Globe,
    hasArrow: true,
    subtopics: [
      { title: "Web Browser", component: "WebBrowser" },
      { title: "Web Server", component: "WebServer" },
      { title: "Web Protocols", component: "WebProtocols" },
      { title: "Web Security", component: "WebSecurity" },
      { title: "Databases", component: "Databases" },
      { title: "Internet", component: "Internet" },
      { title: "WiFi", component: "WiFi" },
    ],
  },

  {
    title: "5. Office Tools",
    component: "OfficeTools",
    icon: FileText,
    hasArrow: true,
    subtopics: [
      { title: "Word Processing: MS Word, Google Docs", component: "WordProcessing" },
      { title: "Spreadsheets: MS Excel, Google Sheets", component: "Spreadsheets" },
      { title: "Presentations: MS PowerPoint, Google Slides", component: "Presentations" },
      { title: "Email Clients: Outlook, Gmail", component: "EmailClients" },
      { title: "Collaboration Tools: Google Drive, OneDrive, Dropbox", component: "CollaborationTools" },
    ],
  },

  {
    title: "6. Shortcut Keys",
    component: "ShortcutKeys",
    icon: KeyRound,
    hasArrow: true,
    subtopics: [
      { title: "Shortcut Keys", component: "GeneralShortcuts" },
      { title: "Function Keys on Keyboard", component: "FunctionKeys" },
      { title: "Windows Shortcut Keys", component: "WindowsShortcuts" },
      { title: "Shortcuts for Ubuntu", component: "UbuntuShortcuts" },
    ],
  },

  {
    title: "7. Key Comparison",
    component: "KeyComparison",
    icon: Database,
    hasArrow: true,
    subtopics: [
      { title: "RAM vs ROM", component: "RAMvsROM" },
      { title: "Hard Disk vs Floppy Disk", component: "HardDiskvsFloppyDisk" },
      { title: "CD-ROM vs Magnetic Disks", component: "CDROMvsMagneticDisks" },
      { title: "OCR vs MICR", component: "OCRvsMICR" },
      { title: "Magnetic Disk vs Optical Disk", component: "MagneticvsOpticalDisk" },
      { title: "HDD vs SSD", component: "HDDvsSSD" },
      { title: "CD vs DVD", component: "CDvsDVD" },
      { title: "Blu-Ray vs DVD", component: "BluRayvsDVD" },
      { title: "Software vs Utility Software", component: "SoftwarevsUtility" },
      { title: "Software vs Operating System", component: "SoftwarevsOS" },
      { title: "System Software vs Application Software", component: "SystemvsApplication" },
      { title: "Barcode vs QR Code", component: "BarcodevsQR" },
    ],
  },

  {
    title: "8. Introduction to Programming",
    component: "ProgrammingIntro",
    icon: Code,
    hasArrow: true,
    subtopics: [
      { title: "C", component: "C" },
      { title: "C++", component: "CPP" },
      { title: "C#", component: "CSharp" },
      { title: "Java", component: "Java" },
      { title: "Python", component: "Python" },
      { title: "JavaScript", component: "JavaScript" },
      { title: "Logic Building Problems", component: "LogicBuilding" },
    ],
  },

  {
    title: "9. Computer Networks",
    component: "ComputerNetworks",
    icon: Network,
    hasArrow: true,
    subtopics: [
      { title: "Introduction", component: "NetworkIntro" },
      { title: "Types of Networks (LAN, WAN, MAN)", component: "NetworkTypes" },
      { title: "Network Topologies", component: "NetworkTopologies" },
      { title: "Web Protocols", component: "NetworkProtocols" },
      { title: "Network Devices", component: "NetworkDevices" },
    ],
  },

  {
    title: "10. Security and Privacy",
    component: "SecurityPrivacy",
    icon: Shield,
    hasArrow: true,
    subtopics: [
      { title: "What is Computer Security?", component: "ComputerSecurity" },
      { title: "Importance of Computer Security", component: "SecurityImportance" },
      { title: "Common Security Threats", component: "SecurityThreats" },
      { title: "Malware", component: "Malware" },
      { title: "Network Security Measures", component: "NetworkSecurity" },
      { title: "Access Control", component: "AccessControl" },
      { title: "User Authentication", component: "UserAuthentication" },
      { title: "Online Privacy", component: "OnlinePrivacy" },
    ],
  },

  {
    title: "11. Careers & Jobs in Computer Science",
    component: "CareersJobs",
    icon: Briefcase,
    hasArrow: true,
    subtopics: [
      { title: "The Role of Computers in Tech Careers", component: "TechCareers" },
      { title: "Non-Tech Roles", component: "NonTechRoles" },
    ],
  },
];
