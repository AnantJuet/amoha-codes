import {
  BookOpen,
  Lock,
  Shield,
  Globe,
  Key,
  Bug,
  Search,
  FileKey,
  Wrench,
  AlertTriangle,
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

  // ================= 1. Introduction to Cybersecurity =================
  {
    title: "1. Introduction",
    component: "Introduction",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "What is Cybersecurity?", component: "CybersecurityIntro" },
      { title: "CIA Triad", component: "CIATriad" },
      { title: "Types of Cyber Threats", component: "CyberThreats" },
      { title: "Attack Vectors", component: "AttackVectors" },
      { title: "Security Goals and Principles", component: "SecurityGoals" },
      { title: "Cyber Kill Chain", component: "CyberKillChain" },
      { title: "Defense in Depth", component: "DefenseInDepth" },
      { title: "Security Policies", component: "SecurityPolicies" },
    ],
  },

  // ================= 2. Cryptography =================
  {
    title: "2. Cryptography",
    component: "Cryptography",
    icon: Lock,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Cryptography", component: "CryptographyIntro" },
      { title: "Symmetric Encryption", component: "SymmetricEncryption" },
      { title: "DES Algorithm", component: "DES" },
      { title: "AES Algorithm", component: "AES" },
      { title: "Asymmetric Encryption", component: "AsymmetricEncryption" },
      { title: "RSA Algorithm", component: "RSA" },
      { title: "Diffie-Hellman Key Exchange", component: "DiffieHellman" },
      { title: "Elliptic Curve Cryptography", component: "ECC" },
      { title: "Hash Functions", component: "HashFunctions" },
      { title: "MD5 and SHA Algorithms", component: "MD5SHA" },
      { title: "Digital Signatures", component: "DigitalSignatures" },
      { title: "Digital Certificates", component: "DigitalCertificates" },
      { title: "PKI (Public Key Infrastructure)", component: "PKI" },
    ],
  },

  // ================= 3. Network Security =================
  {
    title: "3. Network Security",
    component: "NetworkSecurity",
    icon: Shield,
    hasArrow: true,
    subtopics: [
      { title: "Network Security Fundamentals", component: "NetworkSecurityIntro" },
      { title: "Firewalls", component: "Firewalls" },
      { title: "Types of Firewalls", component: "FirewallTypes" },
      { title: "Firewall Rules and Policies", component: "FirewallRules" },
      { title: "Intrusion Detection Systems (IDS)", component: "IDS" },
      { title: "Intrusion Prevention Systems (IPS)", component: "IPS" },
      { title: "IDS vs IPS", component: "IDSvsIPS" },
      { title: "VPN (Virtual Private Network)", component: "VPN" },
      { title: "VPN Protocols", component: "VPNProtocols" },
      { title: "SSL/TLS Protocol", component: "SSLTLS" },
      { title: "TLS Handshake", component: "TLSHandshake" },
      { title: "Network Segmentation", component: "NetworkSegmentation" },
      { title: "DMZ (Demilitarized Zone)", component: "DMZ" },
    ],
  },

  // ================= 4. Web Security =================
  {
    title: "4. Web Security",
    component: "WebSecurity",
    icon: Globe,
    hasArrow: true,
    subtopics: [
      { title: "Web Security Introduction", component: "WebSecurityIntro" },
      { title: "OWASP Top 10 Overview", component: "OWASPTop10" },
      { title: "Cross-Site Scripting (XSS)", component: "XSS" },
      { title: "Types of XSS Attacks", component: "XSSTypes" },
      { title: "XSS Prevention", component: "XSSPrevention" },
      { title: "SQL Injection", component: "SQLInjection" },
      { title: "SQL Injection Types", component: "SQLInjectionTypes" },
      { title: "SQL Injection Prevention", component: "SQLInjectionPrevention" },
      { title: "Cross-Site Request Forgery (CSRF)", component: "CSRF" },
      { title: "CSRF Prevention", component: "CSRFPrevention" },
      { title: "Broken Authentication", component: "BrokenAuthentication" },
      { title: "Security Misconfigurations", component: "SecurityMisconfigurations" },
      { title: "Sensitive Data Exposure", component: "SensitiveDataExposure" },
      { title: "XML External Entities (XXE)", component: "XXE" },
      { title: "Insecure Deserialization", component: "InsecureDeserialization" },
    ],
  },

  // ================= 5. Authentication and Authorization =================
  {
    title: "5. Authentication & Authorization",
    component: "AuthenticationAuthorization",
    icon: Key,
    hasArrow: true,
    subtopics: [
      { title: "Authentication Fundamentals", component: "AuthenticationIntro" },
      { title: "Authentication Factors", component: "AuthenticationFactors" },
      { title: "Password Security", component: "PasswordSecurity" },
      { title: "Multi-Factor Authentication (MFA)", component: "MFA" },
      { title: "OAuth 2.0", component: "OAuth" },
      { title: "OAuth 2.0 Flows", component: "OAuthFlows" },
      { title: "OpenID Connect", component: "OpenIDConnect" },
      { title: "JSON Web Tokens (JWT)", component: "JWT" },
      { title: "JWT Structure and Claims", component: "JWTStructure" },
      { title: "Session Management", component: "SessionManagement" },
      { title: "Single Sign-On (SSO)", component: "SSO" },
      { title: "Role-Based Access Control (RBAC)", component: "RBAC" },
      { title: "Attribute-Based Access Control (ABAC)", component: "ABAC" },
    ],
  },

  // ================= 6. Malware =================
  {
    title: "6. Malware",
    component: "Malware",
    icon: Bug,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Malware", component: "MalwareIntro" },
      { title: "Computer Viruses", component: "Viruses" },
      { title: "Types of Viruses", component: "VirusTypes" },
      { title: "Worms", component: "Worms" },
      { title: "Trojans", component: "Trojans" },
      { title: "Ransomware", component: "Ransomware" },
      { title: "Spyware", component: "Spyware" },
      { title: "Adware", component: "Adware" },
      { title: "Rootkits", component: "Rootkits" },
      { title: "Botnets", component: "Botnets" },
      { title: "Keyloggers", component: "Keyloggers" },
      { title: "Malware Analysis Basics", component: "MalwareAnalysis" },
      { title: "Antivirus and Anti-Malware", component: "Antivirus" },
    ],
  },

  // ================= 7. Ethical Hacking =================
  {
    title: "7. Ethical Hacking",
    component: "EthicalHacking",
    icon: Search,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Ethical Hacking", component: "EthicalHackingIntro" },
      { title: "Types of Hackers", component: "HackerTypes" },
      { title: "Penetration Testing", component: "PenetrationTesting" },
      { title: "Penetration Testing Phases", component: "PenTestPhases" },
      { title: "Vulnerability Assessment", component: "VulnerabilityAssessment" },
      { title: "Reconnaissance", component: "Reconnaissance" },
      { title: "Scanning and Enumeration", component: "ScanningEnumeration" },
      { title: "Exploitation Techniques", component: "Exploitation" },
      { title: "Post-Exploitation", component: "PostExploitation" },
      { title: "Social Engineering", component: "SocialEngineering" },
      { title: "Phishing Attacks", component: "Phishing" },
      { title: "Reporting and Documentation", component: "Reporting" },
    ],
  },

  // ================= 8. Security Protocols =================
  {
    title: "8. Security Protocols",
    component: "SecurityProtocols",
    icon: FileKey,
    hasArrow: true,
    subtopics: [
      { title: "Security Protocols Overview", component: "ProtocolsOverview" },
      { title: "IPSec Protocol", component: "IPSec" },
      { title: "IPSec Modes (Transport & Tunnel)", component: "IPSecModes" },
      { title: "SSH Protocol", component: "SSH" },
      { title: "SSH Authentication", component: "SSHAuth" },
      { title: "HTTPS Protocol", component: "HTTPS" },
      { title: "Kerberos", component: "Kerberos" },
      { title: "RADIUS", component: "RADIUS" },
      { title: "LDAP Security", component: "LDAPSecurity" },
      { title: "DNSSEC", component: "DNSSEC" },
      { title: "WPA/WPA2/WPA3", component: "WPAProtocols" },
      { title: "S/MIME", component: "SMIME" },
    ],
  },

  // ================= 9. Security Tools and Frameworks =================
  {
    title: "9. Tools & Frameworks",
    component: "ToolsFrameworks",
    icon: Wrench,
    hasArrow: true,
    subtopics: [
      { title: "Security Tools Overview", component: "ToolsOverview" },
      { title: "Nmap", component: "Nmap" },
      { title: "Wireshark", component: "Wireshark" },
      { title: "Metasploit", component: "Metasploit" },
      { title: "Burp Suite", component: "BurpSuite" },
      { title: "Nessus", component: "Nessus" },
      { title: "Kali Linux", component: "KaliLinux" },
      { title: "SIEM Systems", component: "SIEM" },
      { title: "NIST Cybersecurity Framework", component: "NISTFramework" },
      { title: "ISO 27001", component: "ISO27001" },
      { title: "MITRE ATT&CK Framework", component: "MITREAttack" },
      { title: "CIS Controls", component: "CISControls" },
    ],
  },

  // ================= 10. Incident Response =================
  {
    title: "10. Incident Response",
    component: "IncidentResponse",
    icon: AlertTriangle,
    hasArrow: true,
    subtopics: [
      { title: "Incident Response Introduction", component: "IncidentResponseIntro" },
      { title: "Incident Response Lifecycle", component: "IRLifecycle" },
      { title: "Preparation Phase", component: "IRPreparation" },
      { title: "Detection and Analysis", component: "IRDetection" },
      { title: "Containment Strategies", component: "IRContainment" },
      { title: "Eradication and Recovery", component: "IREradication" },
      { title: "Post-Incident Activity", component: "IRPostIncident" },
      { title: "Digital Forensics Basics", component: "DigitalForensics" },
      { title: "Log Analysis", component: "LogAnalysis" },
      { title: "Threat Intelligence", component: "ThreatIntelligence" },
      { title: "Business Continuity Planning", component: "BusinessContinuity" },
      { title: "Disaster Recovery", component: "DisasterRecovery" },
    ],
  },
];
