import React, { useState } from 'react';
import Layout from './Layout';
import { sidebarItems } from './SidebarData';

// Import Topic Components - Home and Introduction
import Home from './Topic/Home';
import Introduction from './Topic/Introduction';
import DWIntroduction from './Topic/DWIntroduction';
import DWHistory from './Topic/DWHistory';
import OLTPvsOLAP from './Topic/OLTPvsOLAP';
import DWCharacteristics from './Topic/DWCharacteristics';
import DWBenefits from './Topic/DWBenefits';
import DWChallenges from './Topic/DWChallenges';

// Import DW Architecture Components
import DWArchitecture from './Topic/DWArchitecture';
import ArchitectureOverview from './Topic/ArchitectureOverview';
import SingleTierArch from './Topic/SingleTierArch';
import TwoTierArch from './Topic/TwoTierArch';
import ThreeTierArch from './Topic/ThreeTierArch';
import DWComponents from './Topic/DWComponents';
import Metadata from './Topic/Metadata';
import DataMarts from './Topic/DataMarts';
import DataMartTypes from './Topic/DataMartTypes';
import ODS from './Topic/ODS';

// Import Dimensional Modeling Components
import DimensionalModeling from './Topic/DimensionalModeling';
import DimModelIntro from './Topic/DimModelIntro';
import FactTables from './Topic/FactTables';
import FactTableTypes from './Topic/FactTableTypes';
import DimensionTables from './Topic/DimensionTables';
import DimensionTypes from './Topic/DimensionTypes';
import SCDTypes from './Topic/SCDTypes';
import StarSchema from './Topic/StarSchema';
import SnowflakeSchema from './Topic/SnowflakeSchema';
import GalaxySchema from './Topic/GalaxySchema';
import StarVsSnowflake from './Topic/StarVsSnowflake';
import SurrogateKeys from './Topic/SurrogateKeys';

// Import ETL Process Components
import ETLProcess from './Topic/ETLProcess';
import ETLIntro from './Topic/ETLIntro';
import ETLvsELT from './Topic/ETLvsELT';
import DataExtraction from './Topic/DataExtraction';
import DataTransformation from './Topic/DataTransformation';
import DataLoading from './Topic/DataLoading';
import DataCleansing from './Topic/DataCleansing';
import DataValidation from './Topic/DataValidation';
import ETLTools from './Topic/ETLTools';
import ETLScheduling from './Topic/ETLScheduling';
import ETLMonitoring from './Topic/ETLMonitoring';
import IncrementalLoading from './Topic/IncrementalLoading';
import CDCTechniques from './Topic/CDCTechniques';

// Import OLAP Operations Components
import OLAPIntro from './Topic/OLAPIntro';
import OLAPArchitecture from './Topic/OLAPArchitecture';
import MOLAPvsROLAP from './Topic/MOLAPvsROLAP';
import OLAPCube from './Topic/OLAPCube';
import OLAPOperations from './Topic/OLAPOperations';
import DrillOperations from './Topic/DrillOperations';
import SliceDice from './Topic/SliceDice';
import PivotRotate from './Topic/PivotRotate';
import OLAPTools from './Topic/OLAPTools';
import MDXBasics from './Topic/MDXBasics';
import OLAPvsOLTP from './Topic/OLAPvsOLTP';

// Import Data Mining Components
import DataMining from './Topic/DataMining';
import DataMiningIntro from './Topic/DataMiningIntro';
import DataMiningTechniques from './Topic/DataMiningTechniques';
import Classification from './Topic/Classification';
import Clustering from './Topic/Clustering';
import AssociationRules from './Topic/AssociationRules';
import Regression from './Topic/Regression';
import AnomalyDetection from './Topic/AnomalyDetection';
import TextMining from './Topic/TextMining';
import DataMiningTools from './Topic/DataMiningTools';
import DataMiningProcess from './Topic/DataMiningProcess';
import DataMiningApplications from './Topic/DataMiningApplications';

// Import Business Intelligence Components
import BusinessIntelligence from './Topic/BusinessIntelligence';
import BIIntro from './Topic/BIIntro';
import BIArchitecture from './Topic/BIArchitecture';
import BIvsDataWarehouse from './Topic/BIvsDataWarehouse';
import Reporting from './Topic/Reporting';
import Dashboards from './Topic/Dashboards';
import KPIMetrics from './Topic/KPIMetrics';
import SelfServiceBI from './Topic/SelfServiceBI';
import BITools from './Topic/BITools';
import BIBestPractices from './Topic/BIBestPractices';

// Import Big Data & Data Lakes Components
import BigDataLakes from './Topic/BigDataLakes';
import BigDataIntro from './Topic/BigDataIntro';
import DataLakeIntro from './Topic/DataLakeIntro';
import DataLakeArchitecture from './Topic/DataLakeArchitecture';
import DataLakevsDW from './Topic/DataLakevsDW';
import DataLakehouse from './Topic/DataLakehouse';
import DataGovernance from './Topic/DataGovernance';
import DataCatalog from './Topic/DataCatalog';
import DataQuality from './Topic/DataQuality';
import CloudDW from './Topic/CloudDW';
import FutureTrends from './Topic/FutureTrends';

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
  Introduction,
  DWIntroduction,
  DWHistory,
  OLTPvsOLAP,
  DWCharacteristics,
  DWBenefits,
  DWChallenges,
  // DW Architecture
  DWArchitecture,
  ArchitectureOverview,
  SingleTierArch,
  TwoTierArch,
  ThreeTierArch,
  DWComponents,
  Metadata,
  DataMarts,
  DataMartTypes,
  ODS,
  // Dimensional Modeling
  DimensionalModeling,
  DimModelIntro,
  FactTables,
  FactTableTypes,
  DimensionTables,
  DimensionTypes,
  SCDTypes,
  StarSchema,
  SnowflakeSchema,
  GalaxySchema,
  StarVsSnowflake,
  SurrogateKeys,
  // ETL Process - Map sidebar keys to created components
  ETLProcess,
  ETLIntroduction: ETLIntro,
  ExtractPhase: DataExtraction,
  ExtractionTechniques: DataExtraction,
  TransformPhase: DataTransformation,
  TransformationRules: DataTransformation,
  DataCleansing,
  LoadPhase: DataLoading,
  LoadTypes: IncrementalLoading,
  DataQuality,
  DataQualityDimensions: DataValidation,
  ETLTools,
  ELTvsETL: ETLvsELT,
  // Additional ETL components
  ETLIntro,
  ETLvsELT,
  DataExtraction,
  DataTransformation,
  DataLoading,
  DataValidation,
  ETLScheduling,
  ETLMonitoring,
  IncrementalLoading,
  CDCTechniques,
  // OLAP Operations - Map sidebar keys to created components
  OLAPIntroduction: OLAPIntro,
  OLAPServerTypes: OLAPArchitecture,
  ROLAP: MOLAPvsROLAP,
  MOLAP: MOLAPvsROLAP,
  HOLAP: MOLAPvsROLAP,
  RollUp: DrillOperations,
  DrillDown: DrillOperations,
  Slice: SliceDice,
  Dice: SliceDice,
  Pivot: PivotRotate,
  OLAPCubes: OLAPCube,
  // Additional OLAP components
  OLAPIntro,
  OLAPArchitecture,
  MOLAPvsROLAP,
  OLAPCube,
  OLAPOperations,
  DrillOperations,
  SliceDice,
  PivotRotate,
  OLAPTools,
  MDXBasics,
  OLAPvsOLTP,
  // Data Mining - Map sidebar keys to created components
  DataMining,
  DataMiningIntro,
  DataMiningProcess,
  AssociationRules,
  AprioriAlgorithm: AssociationRules,
  Classification,
  DecisionTrees: Classification,
  Clustering,
  KMeansClustering: Clustering,
  Prediction: Regression,
  RegressionAnalysis: Regression,
  DataMiningApplications,
  // Additional Data Mining components
  DataMiningTechniques,
  Regression,
  AnomalyDetection,
  TextMining,
  DataMiningTools,
  // Business Intelligence - Map sidebar keys to created components
  BusinessIntelligence,
  BIIntroduction: BIIntro,
  BIArchitecture,
  BIComponents: BIvsDataWarehouse,
  ReportingDashboards: Dashboards,
  KPIsMetrics: KPIMetrics,
  DataVisualization: Dashboards,
  SelfServiceBI,
  BITools,
  BIBestPractices,
  // Additional BI components
  BIIntro,
  BIvsDataWarehouse,
  Reporting,
  Dashboards,
  KPIMetrics,
  // Big Data & Data Lakes - Map sidebar keys to created components
  BigDataLakes,
  BigDataIntro,
  BigData5Vs: BigDataIntro,
  BigDataTechnologies: BigDataIntro,
  HadoopEcosystem: BigDataIntro,
  DataLakesIntro: DataLakeIntro,
  DataLakeArchitecture,
  DWvsDataLake: DataLakevsDW,
  DataLakehouse,
  CloudDW,
  ModernDataStack: FutureTrends,
  // Additional Big Data components
  DataLakeIntro,
  DataLakevsDW,
  DataGovernance,
  DataCatalog,
  FutureTrends,
};

const WarehousingTutorial: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
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

export default WarehousingTutorial;
