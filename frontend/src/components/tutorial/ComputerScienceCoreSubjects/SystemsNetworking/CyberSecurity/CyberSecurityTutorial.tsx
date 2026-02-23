import React, { useState } from 'react';
import Layout from './Layout';
import { sidebarItems } from './SidebarData';

// Import Topic Components
import Home from './Topic/Home';
import CybersecurityIntro from './Topic/CybersecurityIntro';
import CIATriad from './Topic/CIATriad';
import CyberThreats from './Topic/CyberThreats';
import AttackVectors from './Topic/AttackVectors';
import SecurityGoals from './Topic/SecurityGoals';
import CyberKillChain from './Topic/CyberKillChain';
import DefenseInDepth from './Topic/DefenseInDepth';
import SecurityPolicies from './Topic/SecurityPolicies';

// Cryptography
import CryptographyIntro from './Topic/CryptographyIntro';
import SymmetricEncryption from './Topic/SymmetricEncryption';
import DES from './Topic/DES';
import AES from './Topic/AES';
import AsymmetricEncryption from './Topic/AsymmetricEncryption';
import RSA from './Topic/RSA';
import DiffieHellman from './Topic/DiffieHellman';
import ECC from './Topic/ECC';
import HashFunctions from './Topic/HashFunctions';
import MD5SHA from './Topic/MD5SHA';
import DigitalSignatures from './Topic/DigitalSignatures';
import DigitalCertificates from './Topic/DigitalCertificates';
import PKI from './Topic/PKI';

// Network Security
import NetworkSecurityIntro from './Topic/NetworkSecurityIntro';
import Firewalls from './Topic/Firewalls';
import FirewallTypes from './Topic/FirewallTypes';
import FirewallRules from './Topic/FirewallRules';
import IDS from './Topic/IDS';
import IPS from './Topic/IPS';
import IDSvsIPS from './Topic/IDSvsIPS';
import VPN from './Topic/VPN';
import VPNProtocols from './Topic/VPNProtocols';
import SSLTLS from './Topic/SSLTLS';
import TLSHandshake from './Topic/TLSHandshake';
import NetworkSegmentation from './Topic/NetworkSegmentation';
import DMZ from './Topic/DMZ';

// Web Security
import WebSecurityIntro from './Topic/WebSecurityIntro';
import OWASPTop10 from './Topic/OWASPTop10';
import XSS from './Topic/XSS';
import XSSTypes from './Topic/XSSTypes';
import XSSPrevention from './Topic/XSSPrevention';
import SQLInjection from './Topic/SQLInjection';
import SQLInjectionTypes from './Topic/SQLInjectionTypes';
import SQLInjectionPrevention from './Topic/SQLInjectionPrevention';
import CSRF from './Topic/CSRF';
import CSRFPrevention from './Topic/CSRFPrevention';
import BrokenAuthentication from './Topic/BrokenAuthentication';
import SecurityMisconfigurations from './Topic/SecurityMisconfigurations';
import SensitiveDataExposure from './Topic/SensitiveDataExposure';
import XXE from './Topic/XXE';
import InsecureDeserialization from './Topic/InsecureDeserialization';

// Authentication & Authorization
import AuthenticationIntro from './Topic/AuthenticationIntro';
import AuthenticationFactors from './Topic/AuthenticationFactors';
import PasswordSecurity from './Topic/PasswordSecurity';
import MFA from './Topic/MFA';
import OAuth from './Topic/OAuth';
import OAuthFlows from './Topic/OAuthFlows';
import OpenIDConnect from './Topic/OpenIDConnect';
import JWT from './Topic/JWT';
import JWTStructure from './Topic/JWTStructure';
import SessionManagement from './Topic/SessionManagement';
import SSO from './Topic/SSO';
import RBAC from './Topic/RBAC';
import ABAC from './Topic/ABAC';
import AccessControl from './Topic/AccessControl';
import InputValidation from './Topic/InputValidation';

// Malware
import MalwareIntro from './Topic/MalwareIntro';
import Viruses from './Topic/Viruses';
import VirusTypes from './Topic/VirusTypes';
import Worms from './Topic/Worms';
import Trojans from './Topic/Trojans';
import Ransomware from './Topic/Ransomware';
import Spyware from './Topic/Spyware';
import Adware from './Topic/Adware';
import Rootkits from './Topic/Rootkits';
import Botnets from './Topic/Botnets';
import Keyloggers from './Topic/Keyloggers';
import MalwareAnalysis from './Topic/MalwareAnalysis';
import Antivirus from './Topic/Antivirus';

// Ethical Hacking
import EthicalHackingIntro from './Topic/EthicalHackingIntro';
import HackerTypes from './Topic/HackerTypes';
import PenetrationTesting from './Topic/PenetrationTesting';
import PenTestPhases from './Topic/PenTestPhases';
import VulnerabilityAssessment from './Topic/VulnerabilityAssessment';
import Reconnaissance from './Topic/Reconnaissance';
import ScanningEnumeration from './Topic/ScanningEnumeration';
import Exploitation from './Topic/Exploitation';
import PostExploitation from './Topic/PostExploitation';
import SocialEngineering from './Topic/SocialEngineering';
import Phishing from './Topic/Phishing';
import Reporting from './Topic/Reporting';

// Security Protocols
import ProtocolsOverview from './Topic/ProtocolsOverview';
import IPSec from './Topic/IPSec';
import IPSecModes from './Topic/IPSecModes';
import SSH from './Topic/SSH';
import SSHAuth from './Topic/SSHAuth';
import HTTPS from './Topic/HTTPS';
import Kerberos from './Topic/Kerberos';
import RADIUS from './Topic/RADIUS';
import LDAPSecurity from './Topic/LDAPSecurity';
import DNSSEC from './Topic/DNSSEC';
import WPAProtocols from './Topic/WPAProtocols';
import SMIME from './Topic/SMIME';

// Tools & Frameworks
import ToolsOverview from './Topic/ToolsOverview';
import Nmap from './Topic/Nmap';
import Wireshark from './Topic/Wireshark';
import Metasploit from './Topic/Metasploit';
import BurpSuite from './Topic/BurpSuite';
import Nessus from './Topic/Nessus';
import KaliLinux from './Topic/KaliLinux';
import SIEM from './Topic/SIEM';
import NISTFramework from './Topic/NISTFramework';
import ISO27001 from './Topic/ISO27001';
import MITREAttack from './Topic/MITREAttack';
import CISControls from './Topic/CISControls';

// Incident Response
import IncidentResponse from './Topic/IncidentResponse';
import IncidentResponseIntro from './Topic/IncidentResponseIntro';
import IRLifecycle from './Topic/IRLifecycle';
import IRPreparation from './Topic/IRPreparation';
import IRDetection from './Topic/IRDetection';
import IRContainment from './Topic/IRContainment';
import IREradication from './Topic/IREradication';
import IRPostIncident from './Topic/IRPostIncident';
import DigitalForensics from './Topic/DigitalForensics';
import LogAnalysis from './Topic/LogAnalysis';
import ThreatIntelligence from './Topic/ThreatIntelligence';
import BusinessContinuity from './Topic/BusinessContinuity';
import DisasterRecovery from './Topic/DisasterRecovery';

// Placeholder component for topics not yet created
const _ComingSoon: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Content Coming Soon</h1>
    <p className="text-lg">This topic is under development. Please check back later.</p>
  </div>
);
void _ComingSoon;

// Map topic keys to components
const topicComponents: { [key: string]: React.FC } = {
  Home,
  // Introduction
  CybersecurityIntro,
  CIATriad,
  CyberThreats,
  AttackVectors,
  SecurityGoals,
  CyberKillChain,
  DefenseInDepth,
  SecurityPolicies,
  // Cryptography
  CryptographyIntro,
  SymmetricEncryption,
  DES,
  AES,
  AsymmetricEncryption,
  RSA,
  DiffieHellman,
  ECC,
  HashFunctions,
  MD5SHA,
  DigitalSignatures,
  DigitalCertificates,
  PKI,
  // Network Security
  NetworkSecurityIntro,
  Firewalls,
  FirewallTypes,
  FirewallRules,
  IDS,
  IPS,
  IDSvsIPS,
  VPN,
  VPNProtocols,
  SSLTLS,
  TLSHandshake,
  NetworkSegmentation,
  DMZ,
  // Web Security
  WebSecurityIntro,
  OWASPTop10,
  XSS,
  XSSTypes,
  XSSPrevention,
  SQLInjection,
  SQLInjectionTypes,
  SQLInjectionPrevention,
  CSRF,
  CSRFPrevention,
  BrokenAuthentication,
  SecurityMisconfigurations,
  SensitiveDataExposure,
  XXE,
  InsecureDeserialization,
  // Authentication & Authorization
  AuthenticationIntro,
  AuthenticationFactors,
  PasswordSecurity,
  MFA,
  OAuth,
  OAuthFlows,
  OpenIDConnect,
  JWT,
  JWTStructure,
  SessionManagement,
  SSO,
  RBAC,
  ABAC,
  AccessControl,
  InputValidation,
  // Malware
  MalwareIntro,
  Viruses,
  VirusTypes,
  Worms,
  Trojans,
  Ransomware,
  Spyware,
  Adware,
  Rootkits,
  Botnets,
  Keyloggers,
  MalwareAnalysis,
  Antivirus,
  // Ethical Hacking
  EthicalHackingIntro,
  HackerTypes,
  PenetrationTesting,
  PenTestPhases,
  VulnerabilityAssessment,
  Reconnaissance,
  ScanningEnumeration,
  Exploitation,
  PostExploitation,
  SocialEngineering,
  Phishing,
  Reporting,
  // Security Protocols
  ProtocolsOverview,
  IPSec,
  IPSecModes,
  SSH,
  SSHAuth,
  HTTPS,
  Kerberos,
  RADIUS,
  LDAPSecurity,
  DNSSEC,
  WPAProtocols,
  SMIME,
  // Tools & Frameworks
  ToolsOverview,
  Nmap,
  Wireshark,
  Metasploit,
  BurpSuite,
  Nessus,
  KaliLinux,
  SIEM,
  NISTFramework,
  ISO27001,
  MITREAttack,
  CISControls,
  // Incident Response
  IncidentResponseIntro,
  IncidentResponse,
  IRLifecycle,
  IRPreparation,
  IRDetection,
  IRContainment,
  IREradication,
  IRPostIncident,
  DigitalForensics,
  LogAnalysis,
  ThreatIntelligence,
  BusinessContinuity,
  DisasterRecovery,
};

const CyberSecurityTutorial: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
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

export default CyberSecurityTutorial;
