import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Data Warehousing Tutorial ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Warehousing Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Welcome to the comprehensive Data Warehousing tutorial on Amoha Codes. A data warehouse is a centralized
      repository designed for query and analysis rather than transaction processing. It integrates data from
      multiple heterogeneous sources to support analytical reporting, structured and ad-hoc queries, and
      decision making. This tutorial covers all fundamental and advanced concepts required for academic
      excellence, competitive examinations, and technical interviews.
    </p>

    {/* What You Will Learn */}
    <h2 className="text-3xl font-bold mt-8">What You Will Learn</h2>
    <p className="leading-relaxed">
      This tutorial provides in-depth coverage of data warehousing concepts, from basic principles to advanced
      techniques. Whether you're preparing for university examinations, professional certifications, technical
      interviews, or seeking to build enterprise-scale analytical solutions, this guide will help you master
      the subject comprehensively.
    </p>

    {/* Course Structure */}
    <h2 className="text-3xl font-bold mt-8">Course Structure</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">S.No</th>
            <th className="p-3 border">Topic</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Introduction</td>
            <td className="p-3 border">Data warehousing fundamentals, OLTP vs OLAP, characteristics and benefits</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">DW Architecture</td>
            <td className="p-3 border">Architecture types, components, metadata, data marts, and ODS</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Dimensional Modeling</td>
            <td className="p-3 border">Fact tables, dimension tables, star schema, snowflake schema, SCDs</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">ETL Process</td>
            <td className="p-3 border">Extract, transform, load operations, data quality, and ETL tools</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">OLAP Operations</td>
            <td className="p-3 border">Roll-up, drill-down, slice, dice, pivot, and OLAP cube concepts</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">Data Mining</td>
            <td className="p-3 border">Association rules, classification, clustering, prediction techniques</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">Business Intelligence</td>
            <td className="p-3 border">BI architecture, reporting, dashboards, KPIs, and visualization</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">Big Data & Data Lakes</td>
            <td className="p-3 border">Big data concepts, data lakes, cloud warehousing, modern data stack</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Why Learn Data Warehousing */}
    <h2 className="text-3xl font-bold mt-8">Why Learn Data Warehousing?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Data-Driven Decisions:</strong> Enable organizations to make informed business decisions based on historical data analysis</li>
      <li><strong>Career Opportunities:</strong> Opens doors to roles like Data Engineer, BI Developer, Data Architect, and Analytics Engineer</li>
      <li><strong>Enterprise Essential:</strong> Critical infrastructure for every modern enterprise handling analytical workloads</li>
      <li><strong>Foundation for Analytics:</strong> Essential knowledge for building scalable analytics and reporting solutions</li>
      <li><strong>Industry Demand:</strong> High demand for professionals skilled in data warehousing and business intelligence</li>
      <li><strong>Cloud Evolution:</strong> Understanding traditional DW concepts helps in adopting modern cloud data platforms</li>
    </ul>

    {/* Key Concepts Covered */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts Covered</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Data Warehouse Fundamentals</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Subject-Oriented, Integrated, Time-Variant, Non-Volatile</li>
          <li>OLTP vs OLAP Systems</li>
          <li>Data Warehouse Architecture Layers</li>
          <li>Metadata Management</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Dimensional Modeling</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Fact and Dimension Tables</li>
          <li>Star and Snowflake Schemas</li>
          <li>Slowly Changing Dimensions (SCD)</li>
          <li>Surrogate and Natural Keys</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">ETL and Data Quality</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Extract, Transform, Load Process</li>
          <li>Data Cleansing and Validation</li>
          <li>Incremental vs Full Load</li>
          <li>Data Quality Dimensions</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">OLAP and Analytics</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>OLAP Cube Operations</li>
          <li>Roll-up, Drill-down, Slice, Dice</li>
          <li>ROLAP, MOLAP, HOLAP</li>
          <li>Multidimensional Analysis</li>
        </ul>
      </div>
    </div>

    {/* Prerequisites */}
    <h2 className="text-3xl font-bold mt-8">Prerequisites</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Basic understanding of relational databases and SQL</li>
      <li>Familiarity with database concepts (tables, keys, relationships)</li>
      <li>Basic knowledge of data modeling concepts</li>
      <li>Understanding of business processes and reporting needs</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Data Warehousing</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Business Reporting:</strong> Generate comprehensive reports for strategic decision-making</li>
      <li><strong>Financial Analysis:</strong> Track financial performance, budgeting, and forecasting</li>
      <li><strong>Customer Analytics:</strong> Understand customer behavior, segmentation, and lifetime value</li>
      <li><strong>Supply Chain Management:</strong> Optimize inventory, logistics, and supplier performance</li>
      <li><strong>Healthcare Analytics:</strong> Patient outcomes analysis, resource optimization, and compliance</li>
      <li><strong>Retail Analytics:</strong> Sales analysis, demand forecasting, and market basket analysis</li>
    </ul>

    {/* Getting Started */}
    <h2 className="text-3xl font-bold mt-8">Getting Started</h2>
    <p className="leading-relaxed">
      Begin your journey by exploring the Introduction section, which covers the fundamental concepts of data
      warehousing including the definition, characteristics, and the differences between OLTP and OLAP systems.
      Each topic builds upon previous concepts, so following the sequential order is recommended for beginners.
      Experienced learners can navigate directly to specific topics of interest using the sidebar.
    </p>

    <p className="leading-relaxed mt-4">
      Each topic includes detailed explanations, diagrams, real-world examples, and practical scenarios to
      reinforce your understanding. The content is designed to match the depth and rigor expected in academic
      courses, professional certifications, and technical interviews.
    </p>

    {/* Important Technologies and Tools */}
    <h2 className="text-3xl font-bold mt-8">Related Technologies and Tools</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Amazon Redshift, Google BigQuery, Snowflake (Cloud Data Warehouses)</li>
      <li>Apache Spark, Apache Hive (Big Data Processing)</li>
      <li>Informatica, Talend, Apache Airflow (ETL Tools)</li>
      <li>Tableau, Power BI, Looker (BI and Visualization)</li>
      <li>dbt (Data Build Tool) for Data Transformation</li>
      <li>Apache Kafka (Real-time Data Streaming)</li>
    </ul>
  </div>
);

export default Home;
