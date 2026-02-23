// --- DATA STRUCTURES ---

export type TabName = 'Features' | 'Syllabus' | 'Pre-requisites' | 'FAQs';

export interface FeatureItem {
  iconName: string; // Used for icon mapping
  title: string;
  description: string;
}

export interface ModuleItem {
  title: string;
  subtopics: string[];
}

export interface FaqItem {
  isOpenInImage: boolean;
  q: string;
  a: string;
}

export interface FaqCategory {
  name: string;
  questions: FaqItem[];
}

export const TABS: TabName[] = ['Features', 'Syllabus', 'Pre-requisites', 'FAQs'];

// Data for the Features tab
export const FEATURES_DATA: FeatureItem[] = [
  {
    iconName: 'Video',
    title: '70+ Hours of Expert Lectures',
    description: 'Step-by-step coverage from basic concepts to scalable architecture design.',
  },
  {
    iconName: 'Code',
    title: 'Hands-On Labs & Projects',
    description: 'Work on realistic datasets, cloud pipelines, and batch + stream processing systems.',
  },
  {
    iconName: 'Chat',
    title: 'Instant Doubt Support',
    description: 'Mentorship from professional Data Engineers working in top product companies.',
  },
  {
    iconName: 'Contest',
    title: 'Industry-Ready Portfolio Projects',
    description: 'Build and deploy full data pipelines — from ingestion to analytics.',
  },
  {
    iconName: 'Medal',
    title: 'Certification',
    description: 'Validate your skills and strengthen your professional profile.',
  },
  
];

// Data for the Syllabus tab
export const SYLLABUS_DATA: ModuleItem[] = [
  {
    title: 'Module 1: Foundations of Data Engineering',
    subtopics: [
      'Understanding Data Ecosystems',
      'Role of a Data Engineer',
      'Overview of OLTP vs OLAP systems',
    ],
  },
  {
    title: 'Module 2: Programming Foundations',
    subtopics: [
      'Python for Data Engineering',
      'Working with Files, APIs, and Databases',
      'Shell Scripting and Automation',
    ],
  },
  {
    title: 'Module 3: SQL Mastery',
    subtopics: [
      'Joins, Subqueries, and Window Functions',
      'Query Optimization and Indexing',
      'Data Cleaning with SQL',
    ],
  },
  {
    title: 'Module 4: Data Modeling & Warehousing',
    subtopics: [
      'Star and Snowflake Schema Design',
      'Normalization vs Denormalization',
      'Introduction to Data Lakes and Lakehouses',
    ],
  },
  {
    title: 'Module 5: ETL & Data Pipelines',
    subtopics: [
      'Batch vs Stream Processing',
      'Designing ETL with Python and Pandas',
      'Workflow Orchestration with Apache Airflow',
    ],
  },
  {
    title: 'Module 6: Distributed Data Processing',
    subtopics: [
      'Hadoop Architecture',
      'Apache Spark Fundamentals (RDD, DataFrame, PySpark)',
      'Writing and Optimizing Spark Jobs',
    ],
  },
  {
    title: 'Module 7: Real-Time Data Streaming',
    subtopics: [
      'Kafka Architecture and Stream Processing',
      'Consumer-Producer Models',
      'Integrating Kafka with Spark and Airflow',
    ],
  },
  {
    title: 'Module 8: Cloud Data Engineering',
    subtopics: [
      'AWS S3, Redshift, Glue, Athena',
      'GCP BigQuery, Dataflow, Pub/Sub',
      'Azure Data Factory Basics',
    ],
  },
  {
    title: 'Module 9: Data Governance & Security',
    subtopics: [
      'Data Lineage, Quality, and Auditing',
      'Access Control and Encryption',
      'Logging and Monitoring',
    ],
  },
  {
    title: 'Module 10: Capstone Projects',
    subtopics: [
      'Building a YouTube Analytics Pipeline',
      'Real-Time Stock Market Stream with Kafka & Spark',
      'End-to-End ETL with Airflow + Redshift',
    ],
  },
];
// Data for the FAQs tab
export const FAQS_DATA: FaqCategory[] = [
  {
    name: 'Course Content',
    questions: [
      {
        q: 'What is the course structure?', a: 'The course is structured into self-contained modules, each covering a major topic. Modules consist of recorded lectures, practice problems, and internal contests.',
        isOpenInImage: false
      },
      {
        q: 'How many hours of content does each level include?', a: '40+ hours of Recorded Lectures. 20+ hours of Recorded Problem Solving Videos.',
        isOpenInImage: false
      },
      {
        q: 'What are the speaking languages used throughout the course?', a: 'The primary language of instruction is English, but technical terms are clearly explained.',
        isOpenInImage: false
      },
      {
        q: 'Is the course programming language dependent?', a: 'The core concepts are language-agnostic, but all code examples and solutions are provided in C++.',
        isOpenInImage: false
      },
      {
        q: 'How long are the lecture recordings?', a: 'Most lecture recordings are between 15 and 45 minutes long, designed for optimal focus and retention.',
        isOpenInImage: false
      },
    ],
  },
  {
    name: 'Doubt Support',
    questions: [
      {
        q: 'How is the instant doubt support provided?', a: 'Doubt support is provided through a dedicated Telegram group with high-rated coders, ensuring quick and accurate responses.',
        isOpenInImage: false
      },
      {
        q: 'What is the allowed difficulty of doubts?', a: 'Allowed difficulty of doubts is up to 1300 rating on Codeforces. For higher difficulty problems, you should learn the concepts first.',
        isOpenInImage: false
      },
    ],
  },
  {
    name: 'Miscellaneous',
    questions: [
      {
        q: 'Will I get a certificate?', a: 'Yes, a course completion certificate is provided upon successfully finishing all modules and major assignments.',
        isOpenInImage: false
      },
      {
        q: 'Is there a refund policy?', a: 'A full refund is available within 7 days of enrollment, provided you have not accessed more than 2 modules.',
        isOpenInImage: false
      },
    ],
  },
  {
    name: 'Payment',
    questions: [
      {
        q: 'What payment methods are accepted?', a: 'We accept all major credit cards, PayPal, and UPI payments.',
        isOpenInImage: false
      },
    ],
  },
  {
    name: 'Practice Problems',
    questions: [
      {
        q: 'Where are the practice problems hosted?', a: 'Practice problems are hosted on our internal platform and on popular online judges like Codeforces and CodeChef.',
        isOpenInImage: false
      },
    ],
  },
  {
    name: 'Validity',
    questions: [
      {
        q: 'What is the validity period for course access?', a: 'You get lifetime access to all course materials and future updates.',
        isOpenInImage: false
      },
    ],
  },
];
