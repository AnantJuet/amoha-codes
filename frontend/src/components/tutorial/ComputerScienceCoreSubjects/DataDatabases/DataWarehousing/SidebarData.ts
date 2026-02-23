import {
  BookOpen,
  Database,
  Layers,
  RefreshCw,
  BarChart3,
  Search,
  TrendingUp,
  Cloud,
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

  // ================= 1. Introduction to Data Warehousing =================
  {
    title: "1. Introduction",
    component: "Introduction",
    icon: BookOpen,
    hasArrow: true,
    subtopics: [
      { title: "What is Data Warehousing?", component: "DWIntroduction" },
      { title: "History and Evolution", component: "DWHistory" },
      { title: "OLTP vs OLAP", component: "OLTPvsOLAP" },
      { title: "Characteristics of Data Warehouse", component: "DWCharacteristics" },
      { title: "Benefits of Data Warehousing", component: "DWBenefits" },
      { title: "Challenges in Data Warehousing", component: "DWChallenges" },
    ],
  },

  // ================= 2. Data Warehouse Architecture =================
  {
    title: "2. DW Architecture",
    component: "DWArchitecture",
    icon: Database,
    hasArrow: true,
    subtopics: [
      { title: "Architecture Overview", component: "ArchitectureOverview" },
      { title: "Single-Tier Architecture", component: "SingleTierArch" },
      { title: "Two-Tier Architecture", component: "TwoTierArch" },
      { title: "Three-Tier Architecture", component: "ThreeTierArch" },
      { title: "Components of Data Warehouse", component: "DWComponents" },
      { title: "Metadata and Its Types", component: "Metadata" },
      { title: "Data Marts", component: "DataMarts" },
      { title: "Dependent vs Independent Data Marts", component: "DataMartTypes" },
      { title: "Operational Data Store (ODS)", component: "ODS" },
    ],
  },

  // ================= 3. Dimensional Modeling =================
  {
    title: "3. Dimensional Modeling",
    component: "DimensionalModeling",
    icon: Layers,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Dimensional Modeling", component: "DimModelIntro" },
      { title: "Fact Tables", component: "FactTables" },
      { title: "Types of Fact Tables", component: "FactTableTypes" },
      { title: "Dimension Tables", component: "DimensionTables" },
      { title: "Types of Dimensions", component: "DimensionTypes" },
      { title: "Slowly Changing Dimensions (SCD)", component: "SCDTypes" },
      { title: "Star Schema", component: "StarSchema" },
      { title: "Snowflake Schema", component: "SnowflakeSchema" },
      { title: "Galaxy Schema (Fact Constellation)", component: "GalaxySchema" },
      { title: "Star vs Snowflake Schema", component: "StarVsSnowflake" },
      { title: "Surrogate Keys", component: "SurrogateKeys" },
    ],
  },

  // ================= 4. ETL Process =================
  {
    title: "4. ETL Process",
    component: "ETLProcess",
    icon: RefreshCw,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to ETL", component: "ETLIntroduction" },
      { title: "Extract Phase", component: "ExtractPhase" },
      { title: "Data Extraction Techniques", component: "ExtractionTechniques" },
      { title: "Transform Phase", component: "TransformPhase" },
      { title: "Data Transformation Rules", component: "TransformationRules" },
      { title: "Data Cleansing", component: "DataCleansing" },
      { title: "Load Phase", component: "LoadPhase" },
      { title: "Load Types (Full vs Incremental)", component: "LoadTypes" },
      { title: "Data Quality", component: "DataQuality" },
      { title: "Data Quality Dimensions", component: "DataQualityDimensions" },
      { title: "ETL Tools Overview", component: "ETLTools" },
      { title: "ELT vs ETL", component: "ELTvsETL" },
    ],
  },

  // ================= 5. OLAP Operations =================
  {
    title: "5. OLAP Operations",
    component: "OLAPOperations",
    icon: BarChart3,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to OLAP", component: "OLAPIntroduction" },
      { title: "OLAP Server Types", component: "OLAPServerTypes" },
      { title: "ROLAP (Relational OLAP)", component: "ROLAP" },
      { title: "MOLAP (Multidimensional OLAP)", component: "MOLAP" },
      { title: "HOLAP (Hybrid OLAP)", component: "HOLAP" },
      { title: "Roll-up Operation", component: "RollUp" },
      { title: "Drill-down Operation", component: "DrillDown" },
      { title: "Slice Operation", component: "Slice" },
      { title: "Dice Operation", component: "Dice" },
      { title: "Pivot (Rotate) Operation", component: "Pivot" },
      { title: "OLAP Cubes", component: "OLAPCubes" },
    ],
  },

  // ================= 6. Data Mining =================
  {
    title: "6. Data Mining",
    component: "DataMining",
    icon: Search,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Data Mining", component: "DataMiningIntro" },
      { title: "Data Mining Process", component: "DataMiningProcess" },
      { title: "Association Rule Mining", component: "AssociationRules" },
      { title: "Apriori Algorithm", component: "AprioriAlgorithm" },
      { title: "Classification", component: "Classification" },
      { title: "Decision Trees", component: "DecisionTrees" },
      { title: "Clustering", component: "Clustering" },
      { title: "K-Means Clustering", component: "KMeansClustering" },
      { title: "Prediction and Forecasting", component: "Prediction" },
      { title: "Regression Analysis", component: "RegressionAnalysis" },
      { title: "Data Mining Applications", component: "DataMiningApplications" },
    ],
  },

  // ================= 7. Business Intelligence =================
  {
    title: "7. Business Intelligence",
    component: "BusinessIntelligence",
    icon: TrendingUp,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Business Intelligence", component: "BIIntroduction" },
      { title: "BI Architecture", component: "BIArchitecture" },
      { title: "BI Components", component: "BIComponents" },
      { title: "Reporting and Dashboards", component: "ReportingDashboards" },
      { title: "KPIs and Metrics", component: "KPIsMetrics" },
      { title: "Data Visualization", component: "DataVisualization" },
      { title: "Self-Service BI", component: "SelfServiceBI" },
      { title: "BI Tools Overview", component: "BITools" },
      { title: "BI Best Practices", component: "BIBestPractices" },
    ],
  },

  // ================= 8. Big Data and Data Lakes =================
  {
    title: "8. Big Data & Data Lakes",
    component: "BigDataLakes",
    icon: Cloud,
    hasArrow: true,
    subtopics: [
      { title: "Introduction to Big Data", component: "BigDataIntro" },
      { title: "Characteristics of Big Data (5 Vs)", component: "BigData5Vs" },
      { title: "Big Data Technologies", component: "BigDataTechnologies" },
      { title: "Hadoop Ecosystem", component: "HadoopEcosystem" },
      { title: "Introduction to Data Lakes", component: "DataLakesIntro" },
      { title: "Data Lake Architecture", component: "DataLakeArchitecture" },
      { title: "Data Warehouse vs Data Lake", component: "DWvsDataLake" },
      { title: "Data Lakehouse", component: "DataLakehouse" },
      { title: "Cloud Data Warehousing", component: "CloudDW" },
      { title: "Modern Data Stack", component: "ModernDataStack" },
    ],
  },
];
