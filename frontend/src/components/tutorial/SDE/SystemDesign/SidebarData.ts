import {
  BookOpen,
  Server,
  Database,
  Layers,
  GitBranch,
  Settings,
  FileCode,
  Briefcase,
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

  // ================= 1. System Design Basics =================
  {
    title: "1. System Design Basics",
    component: "SystemDesignBasics",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to System Design", component: "SDIntroduction" },
      { title: "Key Concepts and Terminologies", component: "KeyConcepts" },
      { title: "Design Principles", component: "DesignPrinciples" },
      { title: "Functional vs Non-Functional Requirements", component: "Requirements" },
    ],
  },

  // ================= 2. Scalability =================
  {
    title: "2. Scalability",
    component: "Scalability",
    icon: Server,
    hasArrow: true,
    subtopics: [
      { title: "What is Scalability", component: "WhatIsScalability" },
      { title: "Horizontal vs Vertical Scaling", component: "HorizontalVerticalScaling" },
      { title: "Load Balancing", component: "LoadBalancing" },
      { title: "Caching", component: "Caching" },
      { title: "Content Delivery Network (CDN)", component: "CDN" },
    ],
  },

  // ================= 3. Database Design =================
  {
    title: "3. Database Design",
    component: "DatabaseDesign",
    icon: Database,
    hasArrow: true,
    subtopics: [
      { title: "SQL vs NoSQL", component: "SQLvsNoSQL" },
      { title: "Database Sharding", component: "DatabaseSharding" },
      { title: "Database Replication", component: "DatabaseReplication" },
      { title: "Indexing", component: "Indexing" },
      { title: "CAP Theorem", component: "CAPTheorem" },
      { title: "ACID Properties", component: "ACIDProperties" },
    ],
  },

  // ================= 4. High Level Design (HLD) =================
  {
    title: "4. High Level Design (HLD)",
    component: "HighLevelDesign",
    icon: Layers,
    hasArrow: true,
    subtopics: [
      { title: "What is HLD", component: "WhatIsHLD" },
      { title: "Microservices Architecture", component: "MicroservicesArchitecture" },
      { title: "Monolithic vs Microservices", component: "MonolithicVsMicroservices" },
      { title: "API Gateway", component: "APIGateway" },
      { title: "Message Queues", component: "MessageQueues" },
    ],
  },

  // ================= 5. Low Level Design (LLD) =================
  {
    title: "5. Low Level Design (LLD)",
    component: "LowLevelDesign",
    icon: FileCode,
    hasArrow: true,
    subtopics: [
      { title: "What is LLD", component: "WhatIsLLD" },
      { title: "SOLID Principles", component: "SOLIDPrinciples" },
      { title: "Design Patterns Overview", component: "DesignPatternsOverview" },
      { title: "UML Diagrams", component: "UMLDiagrams" },
    ],
  },

  // ================= 6. Design Patterns =================
  {
    title: "6. Design Patterns",
    component: "DesignPatterns",
    icon: GitBranch,
    hasArrow: true,
    subtopics: [
      { title: "Singleton Pattern", component: "SingletonPattern" },
      { title: "Factory Pattern", component: "FactoryPattern" },
      { title: "Observer Pattern", component: "ObserverPattern" },
      { title: "Strategy Pattern", component: "StrategyPattern" },
      { title: "Decorator Pattern", component: "DecoratorPattern" },
      { title: "Adapter Pattern", component: "AdapterPattern" },
    ],
  },

  // ================= 7. System Components =================
  {
    title: "7. System Components",
    component: "SystemComponents",
    icon: Settings,
    hasArrow: true,
    subtopics: [
      { title: "DNS and Domain Resolution", component: "DNS" },
      { title: "Proxies and Reverse Proxies", component: "Proxies" },
      { title: "Rate Limiting", component: "RateLimiting" },
      { title: "Consistent Hashing", component: "ConsistentHashing" },
      { title: "Heartbeat and Health Checks", component: "Heartbeat" },
    ],
  },

  // ================= 8. System Design Interview Questions =================
  {
    title: "8. Interview Questions",
    component: "InterviewQuestions",
    icon: Briefcase,
    hasArrow: true,
    subtopics: [
      { title: "Design URL Shortener", component: "DesignURLShortener" },
      { title: "Design Twitter", component: "DesignTwitter" },
      { title: "Design Netflix", component: "DesignNetflix" },
      { title: "Design Dropbox", component: "DesignDropbox" },
      { title: "Design Uber", component: "DesignUber" },
      { title: "Design WhatsApp", component: "DesignWhatsApp" },
      { title: "Design Parking Lot", component: "DesignParkingLot" },
      { title: "Design Rate Limiter", component: "DesignRateLimiter" },
    ],
  },
];
