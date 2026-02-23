import {
  BookOpen,
  Layers,
  Network,
  Cable,
  Link,
  Globe,
  ArrowRightLeft,
  Server,
  Shield,
  Wifi,
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

  // ================= 1. Introduction to Computer Networks =================
  {
    title: "1. Introduction",
    component: "Introduction",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "What is Computer Networking?", component: "NetworkingIntro" },
      { title: "Types of Computer Networks", component: "NetworkTypes" },
      { title: "Network Topologies", component: "NetworkTopologies" },
      { title: "Network Components & Devices", component: "NetworkComponents" },
      { title: "Transmission Modes", component: "TransmissionModes" },
      { title: "Network Architecture", component: "NetworkArchitecture" },
      { title: "Client-Server vs Peer-to-Peer", component: "ClientServerP2P" },
      { title: "Standards & Protocols", component: "StandardsProtocols" },
    ],
  },

  // ================= 2. OSI Model =================
  {
    title: "2. OSI Model",
    component: "OSIModel",
    icon: Layers,
    hasArrow: true,
    subtopics: [
      { title: "OSI Model Introduction", component: "OSIIntro" },
      { title: "Physical Layer (Layer 1)", component: "PhysicalLayer" },
      { title: "Data Link Layer (Layer 2)", component: "DataLinkLayer" },
      { title: "Network Layer (Layer 3)", component: "NetworkLayer" },
      { title: "Transport Layer (Layer 4)", component: "TransportLayer" },
      { title: "Session Layer (Layer 5)", component: "SessionLayer" },
      { title: "Presentation Layer (Layer 6)", component: "PresentationLayer" },
      { title: "Application Layer (Layer 7)", component: "ApplicationLayer" },
      { title: "OSI vs TCP/IP Model", component: "OSIvsTCPIP" },
    ],
  },

  // ================= 3. TCP/IP Model =================
  {
    title: "3. TCP/IP Model",
    component: "TCPIPModel",
    icon: Network,
    hasArrow: true,
    subtopics: [
      { title: "TCP/IP Model Introduction", component: "TCPIPIntro" },
      { title: "Network Access Layer", component: "NetworkAccessLayer" },
      { title: "Internet Layer", component: "InternetLayer" },
      { title: "Transport Layer (TCP/IP)", component: "TCPIPTransport" },
      { title: "Application Layer (TCP/IP)", component: "TCPIPApplication" },
      { title: "Encapsulation & Decapsulation", component: "EncapsulationDecapsulation" },
      { title: "Protocol Data Units (PDUs)", component: "PDUs" },
    ],
  },

  // ================= 4. Physical Layer =================
  {
    title: "4. Physical Layer",
    component: "PhysicalLayerConcepts",
    icon: Cable,
    hasArrow: true,
    subtopics: [
      { title: "Physical Layer Functions", component: "PhysicalLayerFunctions" },
      { title: "Guided Transmission Media", component: "GuidedMedia" },
      { title: "Twisted Pair Cable", component: "TwistedPair" },
      { title: "Coaxial Cable", component: "CoaxialCable" },
      { title: "Fiber Optic Cable", component: "FiberOptic" },
      { title: "Unguided Transmission Media", component: "UnguidedMedia" },
      { title: "Radio Waves", component: "RadioWaves" },
      { title: "Microwaves", component: "Microwaves" },
      { title: "Infrared & Satellite", component: "InfraredSatellite" },
      { title: "Multiplexing Techniques", component: "Multiplexing" },
      { title: "FDM, TDM, WDM", component: "FDMTDMWDM" },
      { title: "Switching Techniques", component: "SwitchingTechniques" },
      { title: "Circuit Switching", component: "CircuitSwitching" },
      { title: "Packet Switching", component: "PacketSwitching" },
      { title: "Message Switching", component: "MessageSwitching" },
    ],
  },

  // ================= 5. Data Link Layer =================
  {
    title: "5. Data Link Layer",
    component: "DataLinkLayerConcepts",
    icon: Link,
    hasArrow: true,
    subtopics: [
      { title: "Data Link Layer Functions", component: "DataLinkFunctions" },
      { title: "Framing Techniques", component: "Framing" },
      { title: "Character Count & Stuffing", component: "CharacterStuffing" },
      { title: "Bit Stuffing", component: "BitStuffing" },
      { title: "Error Detection", component: "ErrorDetection" },
      { title: "Parity Check", component: "ParityCheck" },
      { title: "Checksum", component: "Checksum" },
      { title: "CRC (Cyclic Redundancy Check)", component: "CRC" },
      { title: "Error Correction", component: "ErrorCorrection" },
      { title: "Hamming Code", component: "HammingCode" },
      { title: "Flow Control", component: "FlowControl" },
      { title: "Stop and Wait Protocol", component: "StopAndWait" },
      { title: "Sliding Window Protocol", component: "SlidingWindow" },
      { title: "Go-Back-N ARQ", component: "GoBackN" },
      { title: "Selective Repeat ARQ", component: "SelectiveRepeat" },
      { title: "MAC Sublayer", component: "MACSublayer" },
      { title: "ALOHA Protocols", component: "ALOHA" },
      { title: "CSMA/CD", component: "CSMACD" },
      { title: "CSMA/CA", component: "CSMACA" },
      { title: "Ethernet", component: "Ethernet" },
    ],
  },

  // ================= 6. Network Layer =================
  {
    title: "6. Network Layer",
    component: "NetworkLayerConcepts",
    icon: Globe,
    hasArrow: true,
    subtopics: [
      { title: "Network Layer Functions", component: "NetworkLayerFunctions" },
      { title: "IP Addressing Basics", component: "IPAddressingBasics" },
      { title: "IPv4 Address Classes", component: "IPv4Classes" },
      { title: "Classful Addressing", component: "ClassfulAddressing" },
      { title: "Classless Addressing (CIDR)", component: "CIDR" },
      { title: "Subnetting", component: "Subnetting" },
      { title: "Supernetting", component: "Supernetting" },
      { title: "Variable Length Subnet Mask", component: "VLSM" },
      { title: "IPv4 Header Format", component: "IPv4Header" },
      { title: "IPv6 Introduction", component: "IPv6Intro" },
      { title: "IPv6 Addressing", component: "IPv6Addressing" },
      { title: "IPv6 Header Format", component: "IPv6Header" },
      { title: "IPv4 vs IPv6", component: "IPv4vsIPv6" },
      { title: "ARP Protocol", component: "ARP" },
      { title: "RARP Protocol", component: "RARP" },
      { title: "ICMP Protocol", component: "ICMP" },
      { title: "Routing Introduction", component: "RoutingIntro" },
      { title: "Static vs Dynamic Routing", component: "StaticDynamicRouting" },
      { title: "Distance Vector Routing", component: "DistanceVectorRouting" },
      { title: "Link State Routing", component: "LinkStateRouting" },
      { title: "RIP Protocol", component: "RIP" },
      { title: "OSPF Protocol", component: "OSPF" },
      { title: "BGP Protocol", component: "BGP" },
      { title: "NAT (Network Address Translation)", component: "NAT" },
    ],
  },

  // ================= 7. Transport Layer =================
  {
    title: "7. Transport Layer",
    component: "TransportLayerConcepts",
    icon: ArrowRightLeft,
    hasArrow: true,
    subtopics: [
      { title: "Transport Layer Functions", component: "TransportFunctions" },
      { title: "Port Numbers", component: "PortNumbers" },
      { title: "Socket Programming Basics", component: "SocketProgramming" },
      { title: "UDP Protocol", component: "UDP" },
      { title: "UDP Header Format", component: "UDPHeader" },
      { title: "TCP Protocol", component: "TCP" },
      { title: "TCP Header Format", component: "TCPHeader" },
      { title: "TCP Connection Establishment", component: "TCPConnection" },
      { title: "Three-Way Handshake", component: "ThreeWayHandshake" },
      { title: "TCP Connection Termination", component: "TCPTermination" },
      { title: "TCP vs UDP", component: "TCPvsUDP" },
      { title: "Flow Control in TCP", component: "TCPFlowControl" },
      { title: "Congestion Control", component: "CongestionControl" },
      { title: "Slow Start Algorithm", component: "SlowStart" },
      { title: "Congestion Avoidance", component: "CongestionAvoidance" },
      { title: "Fast Retransmit & Recovery", component: "FastRetransmit" },
      { title: "TCP Timers", component: "TCPTimers" },
    ],
  },

  // ================= 8. Application Layer =================
  {
    title: "8. Application Layer",
    component: "ApplicationLayerConcepts",
    icon: Server,
    hasArrow: true,
    subtopics: [
      { title: "Application Layer Functions", component: "ApplicationFunctions" },
      { title: "HTTP Protocol", component: "HTTP" },
      { title: "HTTP Methods", component: "HTTPMethods" },
      { title: "HTTP Status Codes", component: "HTTPStatusCodes" },
      { title: "HTTPS Protocol", component: "HTTPS" },
      { title: "DNS (Domain Name System)", component: "DNS" },
      { title: "DNS Resolution Process", component: "DNSResolution" },
      { title: "DNS Record Types", component: "DNSRecords" },
      { title: "DHCP Protocol", component: "DHCP" },
      { title: "DHCP Process (DORA)", component: "DHCPProcess" },
      { title: "FTP Protocol", component: "FTP" },
      { title: "TFTP Protocol", component: "TFTP" },
      { title: "SMTP Protocol", component: "SMTP" },
      { title: "POP3 Protocol", component: "POP3" },
      { title: "IMAP Protocol", component: "IMAP" },
      { title: "Telnet Protocol", component: "Telnet" },
      { title: "SSH Protocol", component: "SSH" },
      { title: "SNMP Protocol", component: "SNMP" },
    ],
  },

  // ================= 9. Network Security =================
  {
    title: "9. Network Security",
    component: "NetworkSecurity",
    icon: Shield,
    hasArrow: true,
    subtopics: [
      { title: "Network Security Introduction", component: "SecurityIntro" },
      { title: "Security Attacks", component: "SecurityAttacks" },
      { title: "Active vs Passive Attacks", component: "ActivePassiveAttacks" },
      { title: "Cryptography Basics", component: "CryptographyBasics" },
      { title: "Symmetric Key Encryption", component: "SymmetricEncryption" },
      { title: "DES Algorithm", component: "DES" },
      { title: "AES Algorithm", component: "AES" },
      { title: "Asymmetric Key Encryption", component: "AsymmetricEncryption" },
      { title: "RSA Algorithm", component: "RSA" },
      { title: "Digital Signatures", component: "DigitalSignatures" },
      { title: "Digital Certificates", component: "DigitalCertificates" },
      { title: "Hash Functions", component: "HashFunctions" },
      { title: "MD5 and SHA", component: "MD5SHA" },
      { title: "SSL/TLS Protocol", component: "SSLTLS" },
      { title: "Firewalls", component: "Firewalls" },
      { title: "Types of Firewalls", component: "FirewallTypes" },
      { title: "VPN (Virtual Private Network)", component: "VPN" },
      { title: "IPSec Protocol", component: "IPSec" },
      { title: "Intrusion Detection Systems", component: "IDS" },
    ],
  },

  // ================= 10. Wireless Networks =================
  {
    title: "10. Wireless Networks",
    component: "WirelessNetworks",
    icon: Wifi,
    hasArrow: true,
    subtopics: [
      { title: "Wireless Networks Introduction", component: "WirelessIntro" },
      { title: "Wireless LAN (WLAN)", component: "WLAN" },
      { title: "IEEE 802.11 Standards", component: "IEEE80211" },
      { title: "Wi-Fi Technology", component: "WiFi" },
      { title: "Wi-Fi Security (WEP, WPA, WPA2)", component: "WiFiSecurity" },
      { title: "Bluetooth Technology", component: "Bluetooth" },
      { title: "Mobile Networks", component: "MobileNetworks" },
      { title: "2G, 3G, 4G, 5G", component: "MobileGenerations" },
      { title: "Cellular Network Architecture", component: "CellularArchitecture" },
      { title: "Ad-hoc Networks", component: "AdHocNetworks" },
      { title: "Wireless Sensor Networks", component: "SensorNetworks" },
      { title: "Hidden Terminal Problem", component: "HiddenTerminal" },
      { title: "Exposed Terminal Problem", component: "ExposedTerminal" },
    ],
  },
];
