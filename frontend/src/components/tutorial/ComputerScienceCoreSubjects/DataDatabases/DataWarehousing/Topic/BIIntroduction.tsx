import React from "react";

const BIIntroduction: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Business Intelligence
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Business Intelligence is a set of concepts and methodologies to improve decision-making in
      business through the use of facts and fact-based systems. The goal of Business Intelligence
      is to improve decision-making in business ideas and analysis. Business Intelligence is not
      just a concept; it's a group of concepts and methodologies.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Business Intelligence?</h2>
    <p className="leading-relaxed">
      Business Intelligence refers to a collection of mathematical models and analysis methods
      that utilize data to produce valuable information and insight for making important decisions.
      Business Intelligence uses analytics and gut feelings for making decisions.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Business Intelligence System Architecture:

Level 6: +------------------+
         |    Decisions     |  ← Strategic decisions based on insights
         +--------+---------+
                  |
Level 5: +--------v---------+
         |   Optimization   |  ← What-if analysis, scenario modeling
         +--------+---------+
                  |
Level 4: +--------v---------+
         |   Data Mining    |  ← Pattern discovery, ML, predictions
         +--------+---------+
                  |
Level 3: +--------v---------+
         | Data Exploration |  ← Query, reports, statistical analysis
         +--------+---------+
                  |
Level 2: +--------v---------+
         |  Data Warehouse  |  ← ETL, data marts, centralized storage
         +--------+---------+
                  |
Level 1: +--------v---------+
         |   Data Sources   |  ← Operational systems, external data
         +------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Main Components of Business Intelligence System</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Data Source</h3>
    <p className="leading-relaxed">
      The first step is gathering and consolidating data from an array of primary and secondary
      sources. These sources vary in origin and format, consisting mainly of operational system
      data but also potentially containing unstructured documents like emails and data from
      external providers.
    </p>

    <h3 className="text-2xl font-semibold mt-6">2. Data Mart / Data Warehouse</h3>
    <p className="leading-relaxed">
      Through the utilization of extraction and transformation tools (ETL), data is acquired from
      various sources and saved in databases designed specifically for business intelligence
      analysis. These databases, commonly known as data warehouses and data marts, serve as a
      centralized location for the gathered data.
    </p>

    <h3 className="text-2xl font-semibold mt-6">3. Data Exploration</h3>
    <p className="leading-relaxed">
      This level offers essential resources for conducting passive analysis in business intelligence.
      These resources include query and reporting systems, along with statistical methods. These
      techniques are referred to as passive because decision makers must first develop ideas or
      establish criteria for data extraction before utilizing analysis tools.
    </p>

    <h3 className="text-2xl font-semibold mt-6">4. Data Mining</h3>
    <p className="leading-relaxed">
      This level focuses on extracting valuable information and knowledge from data using various
      techniques such as mathematical models, pattern recognition, machine learning, and data mining.
      Unlike passive tools, active models do not rely on decision makers to come up with hypothesis
      but instead aim to enhance their understanding.
    </p>

    <h3 className="text-2xl font-semibold mt-6">5. Optimization</h3>
    <p className="leading-relaxed">
      At this level, objectives are clearly identified and performance indicators are chosen to
      evaluate different options. Mathematical models are created by utilizing the connections
      between control variables, parameters, and evaluation metrics. "What-if" scenarios are
      explored to understand the impact of changing variables.
    </p>

    <h3 className="text-2xl font-semibold mt-6">6. Decisions</h3>
    <p className="leading-relaxed">
      The final level where insights from all previous stages are synthesized to make informed
      business decisions. This is where strategy meets data-driven insights.
    </p>

    <h2 className="text-3xl font-bold mt-8">Role of Business Intelligence</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Fact-based Decision Making:</strong> Replace gut feelings with data-driven decisions</li>
      <li><strong>360 Degrees Perspective:</strong> Comprehensive view of your business from all angles</li>
      <li><strong>KPI Measurement:</strong> Creating Key Performance Indicators based on historic data</li>
      <li><strong>Benchmarking:</strong> Identify and set benchmarks for different processes</li>
      <li><strong>Trend Identification:</strong> Identify market trends and spot business problems</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Types of Users of Business Intelligence</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">User Type</th>
            <th className="p-3 border">Role</th>
            <th className="p-3 border">BI Usage</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Executives</td>
            <td className="p-3 border">Strategic decision makers</td>
            <td className="p-3 border">Dashboards, KPIs, high-level reports</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Managers</td>
            <td className="p-3 border">Tactical decision makers</td>
            <td className="p-3 border">Detailed reports, trend analysis</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Analysts</td>
            <td className="p-3 border">Data analysis specialists</td>
            <td className="p-3 border">Ad-hoc queries, data mining</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Operational Users</td>
            <td className="p-3 border">Day-to-day operations</td>
            <td className="p-3 border">Standard reports, alerts</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Popular Business Intelligence Tools</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Tool</th>
            <th className="p-3 border">Vendor</th>
            <th className="p-3 border">Key Features</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Power BI</td>
            <td className="p-3 border">Microsoft</td>
            <td className="p-3 border">Integration with Microsoft ecosystem, DAX</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Tableau</td>
            <td className="p-3 border">Salesforce</td>
            <td className="p-3 border">Visual analytics, drag-and-drop interface</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Looker</td>
            <td className="p-3 border">Google</td>
            <td className="p-3 border">LookML modeling, embedded analytics</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Qlik Sense</td>
            <td className="p-3 border">Qlik</td>
            <td className="p-3 border">Associative engine, self-service BI</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of Business Intelligence</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Sales Analysis:</strong> Track sales performance, identify trends, forecast revenue</li>
      <li><strong>Customer Analytics:</strong> Understand customer behavior, segmentation, churn prediction</li>
      <li><strong>Financial Reporting:</strong> Budget tracking, expense analysis, financial forecasting</li>
      <li><strong>Supply Chain:</strong> Inventory optimization, supplier performance, demand planning</li>
      <li><strong>Human Resources:</strong> Workforce analytics, attrition analysis, performance tracking</li>
      <li><strong>Marketing:</strong> Campaign effectiveness, ROI analysis, market trends</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>BI transforms raw data into actionable business insights</li>
        <li>Six-layer architecture from data sources to decisions</li>
        <li>Enables fact-based decision making across all organizational levels</li>
        <li>Combines passive analysis (querying) with active analysis (data mining)</li>
        <li>KPIs and benchmarks are essential outputs of BI systems</li>
        <li>Modern BI tools provide self-service analytics capabilities</li>
      </ul>
    </div>
  </div>
);

export default BIIntroduction;
