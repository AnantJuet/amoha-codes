import React, { useState } from 'react';
import Layout from './Layout';
import { sidebarItems } from './SidebarData';

// Import Topic Components
import Home from './Topic/Home';

// Introduction Topics
import SDIntroduction from './Topic/SDIntroduction';
import KeyConcepts from './Topic/KeyConcepts';
import DesignPrinciples from './Topic/DesignPrinciples';
import Requirements from './Topic/Requirements';

// Scalability Topics
import WhatIsScalability from './Topic/WhatIsScalability';
import HorizontalVerticalScaling from './Topic/HorizontalVerticalScaling';
import LoadBalancing from './Topic/LoadBalancing';
import Caching from './Topic/Caching';
import CDN from './Topic/CDN';

// Database Topics
import SQLvsNoSQL from './Topic/SQLvsNoSQL';
import DatabaseSharding from './Topic/DatabaseSharding';
import DatabaseReplication from './Topic/DatabaseReplication';
import Indexing from './Topic/Indexing';
import CAPTheorem from './Topic/CAPTheorem';
import ACIDProperties from './Topic/ACIDProperties';

// HLD Topics
import WhatIsHLD from './Topic/WhatIsHLD';
import MicroservicesArchitecture from './Topic/MicroservicesArchitecture';
import MonolithicVsMicroservices from './Topic/MonolithicVsMicroservices';
import APIGateway from './Topic/APIGateway';
import MessageQueues from './Topic/MessageQueues';

// LLD Topics
import WhatIsLLD from './Topic/WhatIsLLD';
import SOLIDPrinciples from './Topic/SOLIDPrinciples';
import DesignPatternsOverview from './Topic/DesignPatternsOverview';
import UMLDiagrams from './Topic/UMLDiagrams';

// Design Patterns
import SingletonPattern from './Topic/SingletonPattern';
import FactoryPattern from './Topic/FactoryPattern';
import ObserverPattern from './Topic/ObserverPattern';
import StrategyPattern from './Topic/StrategyPattern';
import DecoratorPattern from './Topic/DecoratorPattern';
import AdapterPattern from './Topic/AdapterPattern';

// Advanced Topics
import DNS from './Topic/DNS';
import Proxies from './Topic/Proxies';
import RateLimiting from './Topic/RateLimiting';

// Interview Topics
import DesignURLShortener from './Topic/DesignURLShortener';
import DesignTwitter from './Topic/DesignTwitter';
import DesignNetflix from './Topic/DesignNetflix';
import DesignDropbox from './Topic/DesignDropbox';
import DesignUber from './Topic/DesignUber';

// Advanced Topics additional imports
import ConsistentHashing from './Topic/ConsistentHashing';
import Heartbeat from './Topic/Heartbeat';

// Interview Topics additional imports
import DesignWhatsApp from './Topic/DesignWhatsApp';
import DesignParkingLot from './Topic/DesignParkingLot';
import DesignRateLimiter from './Topic/DesignRateLimiter';

// Map topic keys to components
const topicComponents: { [key: string]: React.FC } = {
  Home,
  SDIntroduction,
  KeyConcepts,
  DesignPrinciples,
  Requirements,
  WhatIsScalability,
  HorizontalVerticalScaling,
  LoadBalancing,
  Caching,
  CDN,
  SQLvsNoSQL,
  DatabaseSharding,
  DatabaseReplication,
  Indexing,
  CAPTheorem,
  ACIDProperties,
  WhatIsHLD,
  MicroservicesArchitecture,
  MonolithicVsMicroservices,
  APIGateway,
  MessageQueues,
  WhatIsLLD,
  SOLIDPrinciples,
  DesignPatternsOverview,
  UMLDiagrams,
  SingletonPattern,
  FactoryPattern,
  ObserverPattern,
  StrategyPattern,
  DecoratorPattern,
  AdapterPattern,
  DNS,
  Proxies,
  RateLimiting,
  ConsistentHashing,
  Heartbeat,
  DesignURLShortener,
  DesignTwitter,
  DesignNetflix,
  DesignDropbox,
  DesignUber,
  DesignWhatsApp,
  DesignParkingLot,
  DesignRateLimiter,
};

const SystemDesignTutorial: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
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

export default SystemDesignTutorial;
