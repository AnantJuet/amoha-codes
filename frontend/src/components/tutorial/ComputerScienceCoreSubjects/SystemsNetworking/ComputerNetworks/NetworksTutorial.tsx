import React, { useState } from 'react';
import Layout from './Layout';
import { sidebarItems } from './SidebarData';

// Import all Topic Components
import Home from './Topic/Home';
import CNIntroduction from './Topic/CNIntroduction';
import NetworkTypes from './Topic/NetworkTypes';
import NetworkTopologies from './Topic/NetworkTopologies';
import NetworkComponents from './Topic/NetworkComponents';
import TransmissionModes from './Topic/TransmissionModes';
import NetworkArchitecture from './Topic/NetworkArchitecture';
import OSIModel from './Topic/OSIModel';
import PhysicalLayer from './Topic/PhysicalLayer';
import DataLinkLayer from './Topic/DataLinkLayer';
import NetworkLayer from './Topic/NetworkLayer';
import TransportLayer from './Topic/TransportLayer';
import SessionLayer from './Topic/SessionLayer';
import PresentationLayer from './Topic/PresentationLayer';
import ApplicationLayer from './Topic/ApplicationLayer';
import TCPIPModel from './Topic/TCPIPModel';
import TCPIPvsOSI from './Topic/TCPIPvsOSI';

// Additional Topic Imports
import ClientServerP2P from './Topic/ClientServerP2P';
import StandardsProtocols from './Topic/StandardsProtocols';
import NetworkAccessLayer from './Topic/NetworkAccessLayer';
import InternetLayer from './Topic/InternetLayer';
import TCPIPTransport from './Topic/TCPIPTransport';
import TCPIPApplication from './Topic/TCPIPApplication';
import EncapsulationDecapsulation from './Topic/EncapsulationDecapsulation';
import PDUs from './Topic/PDUs';
import PhysicalLayerFunctions from './Topic/PhysicalLayerFunctions';
import GuidedMedia from './Topic/GuidedMedia';
import TwistedPair from './Topic/TwistedPair';
import CoaxialCable from './Topic/CoaxialCable';
import FiberOptic from './Topic/FiberOptic';
import UnguidedMedia from './Topic/UnguidedMedia';
import RadioWaves from './Topic/RadioWaves';
import Microwaves from './Topic/Microwaves';
import InfraredSatellite from './Topic/InfraredSatellite';
import Multiplexing from './Topic/Multiplexing';
import FDMTDMWDM from './Topic/FDMTDMWDM';
import SwitchingTechniques from './Topic/SwitchingTechniques';
import CircuitSwitching from './Topic/CircuitSwitching';
import PacketSwitching from './Topic/PacketSwitching';
import MessageSwitching from './Topic/MessageSwitching';
import DataLinkFunctions from './Topic/DataLinkFunctions';
import Framing from './Topic/Framing';
import CharacterStuffing from './Topic/CharacterStuffing';
import BitStuffing from './Topic/BitStuffing';
import ErrorDetection from './Topic/ErrorDetection';
import ParityCheck from './Topic/ParityCheck';
import Checksum from './Topic/Checksum';
import CRC from './Topic/CRC';
import ErrorCorrection from './Topic/ErrorCorrection';
import HammingCode from './Topic/HammingCode';
import FlowControl from './Topic/FlowControl';
import StopAndWait from './Topic/StopAndWait';
import SlidingWindow from './Topic/SlidingWindow';
import GoBackN from './Topic/GoBackN';
import SelectiveRepeat from './Topic/SelectiveRepeat';
import MACSublayer from './Topic/MACSublayer';
import ALOHA from './Topic/ALOHA';
import CSMACD from './Topic/CSMACD';
import CSMACA from './Topic/CSMACA';
import Ethernet from './Topic/Ethernet';
import NetworkLayerFunctions from './Topic/NetworkLayerFunctions';
import IPAddressingBasics from './Topic/IPAddressingBasics';
import IPv4Classes from './Topic/IPv4Classes';
import ClassfulAddressing from './Topic/ClassfulAddressing';
import CIDR from './Topic/CIDR';
import Subnetting from './Topic/Subnetting';
import Supernetting from './Topic/Supernetting';
import VLSM from './Topic/VLSM';
import IPv4Header from './Topic/IPv4Header';
import IPv6Intro from './Topic/IPv6Intro';
import IPv6Addressing from './Topic/IPv6Addressing';
import IPv6Header from './Topic/IPv6Header';
import IPv4vsIPv6 from './Topic/IPv4vsIPv6';
import ARP from './Topic/ARP';
import RARP from './Topic/RARP';
import ICMP from './Topic/ICMP';
import RoutingIntro from './Topic/RoutingIntro';
import StaticDynamicRouting from './Topic/StaticDynamicRouting';
import DistanceVectorRouting from './Topic/DistanceVectorRouting';
import LinkStateRouting from './Topic/LinkStateRouting';
import RIP from './Topic/RIP';
import OSPF from './Topic/OSPF';
import BGP from './Topic/BGP';
import NAT from './Topic/NAT';
import TransportFunctions from './Topic/TransportFunctions';
import PortNumbers from './Topic/PortNumbers';
import SocketProgramming from './Topic/SocketProgramming';
import UDP from './Topic/UDP';
import UDPHeader from './Topic/UDPHeader';
import TCP from './Topic/TCP';
import TCPHeader from './Topic/TCPHeader';
import TCPConnection from './Topic/TCPConnection';
import ThreeWayHandshake from './Topic/ThreeWayHandshake';
import TCPTermination from './Topic/TCPTermination';
import TCPvsUDP from './Topic/TCPvsUDP';
import TCPFlowControl from './Topic/TCPFlowControl';
import CongestionControl from './Topic/CongestionControl';
import SlowStart from './Topic/SlowStart';
import CongestionAvoidance from './Topic/CongestionAvoidance';
import FastRetransmit from './Topic/FastRetransmit';
import TCPTimers from './Topic/TCPTimers';
import ApplicationFunctions from './Topic/ApplicationFunctions';
import HTTP from './Topic/HTTP';
import HTTPMethods from './Topic/HTTPMethods';
import HTTPStatusCodes from './Topic/HTTPStatusCodes';
import HTTPS from './Topic/HTTPS';
import DNS from './Topic/DNS';
import DNSResolution from './Topic/DNSResolution';
import DNSRecords from './Topic/DNSRecords';
import DHCP from './Topic/DHCP';
import DHCPProcess from './Topic/DHCPProcess';
import FTP from './Topic/FTP';
import TFTP from './Topic/TFTP';
import SMTP from './Topic/SMTP';
import POP3 from './Topic/POP3';
import IMAP from './Topic/IMAP';
import Telnet from './Topic/Telnet';
import SSH from './Topic/SSH';
import SNMP from './Topic/SNMP';
import SecurityIntro from './Topic/SecurityIntro';
import SecurityAttacks from './Topic/SecurityAttacks';
import ActivePassiveAttacks from './Topic/ActivePassiveAttacks';
import CryptographyBasics from './Topic/CryptographyBasics';
import SymmetricEncryption from './Topic/SymmetricEncryption';
import DES from './Topic/DES';
import AES from './Topic/AES';
import AsymmetricEncryption from './Topic/AsymmetricEncryption';
import RSA from './Topic/RSA';
import DigitalSignatures from './Topic/DigitalSignatures';
import DigitalCertificates from './Topic/DigitalCertificates';
import HashFunctions from './Topic/HashFunctions';
import MD5SHA from './Topic/MD5SHA';
import SSLTLS from './Topic/SSLTLS';
import Firewalls from './Topic/Firewalls';
import FirewallTypes from './Topic/FirewallTypes';
import VPN from './Topic/VPN';
import IPSec from './Topic/IPSec';
import IDS from './Topic/IDS';
import WirelessIntro from './Topic/WirelessIntro';
import WLAN from './Topic/WLAN';
import IEEE80211 from './Topic/IEEE80211';
import WiFi from './Topic/WiFi';
import WiFiSecurity from './Topic/WiFiSecurity';
import Bluetooth from './Topic/Bluetooth';
import MobileNetworks from './Topic/MobileNetworks';
import MobileGenerations from './Topic/MobileGenerations';
import CellularArchitecture from './Topic/CellularArchitecture';
import AdHocNetworks from './Topic/AdHocNetworks';
import SensorNetworks from './Topic/SensorNetworks';
import HiddenTerminal from './Topic/HiddenTerminal';
import ExposedTerminal from './Topic/ExposedTerminal';

// Map topic keys to components
const topicComponents: { [key: string]: React.FC } = {
  Home,
  // Introduction
  NetworkingIntro: CNIntroduction,
  NetworkTypes,
  NetworkTopologies,
  NetworkComponents,
  TransmissionModes,
  NetworkArchitecture,
  ClientServerP2P,
  StandardsProtocols,
  // OSI Model
  OSIIntro: OSIModel,
  PhysicalLayer,
  DataLinkLayer,
  NetworkLayer,
  TransportLayer,
  SessionLayer,
  PresentationLayer,
  ApplicationLayer,
  OSIvsTCPIP: TCPIPvsOSI,
  // TCP/IP Model
  TCPIPIntro: TCPIPModel,
  NetworkAccessLayer,
  InternetLayer,
  TCPIPTransport,
  TCPIPApplication,
  EncapsulationDecapsulation,
  PDUs,
  // Physical Layer
  PhysicalLayerFunctions,
  GuidedMedia,
  TwistedPair,
  CoaxialCable,
  FiberOptic,
  UnguidedMedia,
  RadioWaves,
  Microwaves,
  InfraredSatellite,
  Multiplexing,
  FDMTDMWDM,
  SwitchingTechniques,
  CircuitSwitching,
  PacketSwitching,
  MessageSwitching,
  // Data Link Layer
  DataLinkFunctions,
  Framing,
  CharacterStuffing,
  BitStuffing,
  ErrorDetection,
  ParityCheck,
  Checksum,
  CRC,
  ErrorCorrection,
  HammingCode,
  FlowControl,
  StopAndWait,
  SlidingWindow,
  GoBackN,
  SelectiveRepeat,
  MACSublayer,
  ALOHA,
  CSMACD,
  CSMACA,
  Ethernet,
  // Network Layer
  NetworkLayerFunctions,
  IPAddressingBasics,
  IPv4Classes,
  ClassfulAddressing,
  CIDR,
  Subnetting,
  Supernetting,
  VLSM,
  IPv4Header,
  IPv6Intro,
  IPv6Addressing,
  IPv6Header,
  IPv4vsIPv6,
  ARP,
  RARP,
  ICMP,
  RoutingIntro,
  StaticDynamicRouting,
  DistanceVectorRouting,
  LinkStateRouting,
  RIP,
  OSPF,
  BGP,
  NAT,
  // Transport Layer
  TransportFunctions,
  PortNumbers,
  SocketProgramming,
  UDP,
  UDPHeader,
  TCP,
  TCPHeader,
  TCPConnection,
  ThreeWayHandshake,
  TCPTermination,
  TCPvsUDP,
  TCPFlowControl,
  CongestionControl,
  SlowStart,
  CongestionAvoidance,
  FastRetransmit,
  TCPTimers,
  // Application Layer
  ApplicationFunctions,
  HTTP,
  HTTPMethods,
  HTTPStatusCodes,
  HTTPS,
  DNS,
  DNSResolution,
  DNSRecords,
  DHCP,
  DHCPProcess,
  FTP,
  TFTP,
  SMTP,
  POP3,
  IMAP,
  Telnet,
  SSH,
  SNMP,
  // Network Security
  SecurityIntro,
  SecurityAttacks,
  ActivePassiveAttacks,
  CryptographyBasics,
  SymmetricEncryption,
  DES,
  AES,
  AsymmetricEncryption,
  RSA,
  DigitalSignatures,
  DigitalCertificates,
  HashFunctions,
  MD5SHA,
  SSLTLS,
  Firewalls,
  FirewallTypes,
  VPN,
  IPSec,
  IDS,
  // Wireless Networks
  WirelessIntro,
  WLAN,
  IEEE80211,
  WiFi,
  WiFiSecurity,
  Bluetooth,
  MobileNetworks,
  MobileGenerations,
  CellularArchitecture,
  AdHocNetworks,
  SensorNetworks,
  HiddenTerminal,
  ExposedTerminal,
};

const NetworksTutorial: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
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

export default NetworksTutorial;
