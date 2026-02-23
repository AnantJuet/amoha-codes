import React from "react";

const BigDataIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Big Data
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Big Data refers to datasets that are too large, fast, or complex for traditional
      data processing methods. It's characterized by the 5 Vs and requires specialized
      technologies to capture, store, analyze, and derive value from the data.
    </p>

    {/* 5 Vs of Big Data */}
    <h2 className="text-3xl font-bold mt-8">The 5 Vs of Big Data</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`The 5 Vs of Big Data:
════════════════════════════════════════════════════════════════

        ┌─────────────────────────────────────────────────────┐
        │                     BIG DATA                         │
        │                                                      │
        │                       ┌───┐                          │
        │                       │ V │                          │
        │                       │ o │                          │
        │                       │ l │                          │
        │                       │ u │                          │
        │              ┌───┐    │ m │    ┌───┐                │
        │              │ V │    │ e │    │ V │                │
        │              │ e │    └─┬─┘    │ a │                │
        │              │ r │      │      │ r │                │
        │              │ a │◄─────┼─────►│ i │                │
        │              │ c │      │      │ e │                │
        │              │ i │    ┌─┴─┐    │ t │                │
        │              │ t │    │   │    │ y │                │
        │              │ y │◄───┤ V ├───►│   │                │
        │              └───┘    │ e │    └───┘                │
        │                       │ l │                          │
        │                       │ o │                          │
        │              ┌───┐    │ c │    ┌───┐                │
        │              │ V │◄───│ i ├───►│ V │                │
        │              │ a │    │ t │    │ a │                │
        │              │ l │    │ y │    │ l │                │
        │              │ u │    └───┘    │ i │                │
        │              │ e │             │ d │                │
        │              └───┘             │ i │                │
        │                                │ t │                │
        │                                │ y │                │
        │                                └───┘                │
        └─────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Detailed 5 Vs */}
    <h2 className="text-3xl font-bold mt-8">Understanding the 5 Vs</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2 text-blue-800 dark:text-blue-200">Volume</h3>
        <p className="text-sm mb-2">Scale of data - petabytes to exabytes.</p>
        <ul className="list-disc list-inside text-xs">
          <li>2.5 quintillion bytes created daily</li>
          <li>90% of world's data created in last 2 years</li>
          <li>Enterprise data doubles every 2-3 years</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2 text-green-800 dark:text-green-200">Velocity</h3>
        <p className="text-sm mb-2">Speed of data generation and processing.</p>
        <ul className="list-disc list-inside text-xs">
          <li>Real-time streaming data</li>
          <li>500M tweets per day</li>
          <li>Millisecond response requirements</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold text-lg mb-2 text-purple-800 dark:text-purple-200">Variety</h3>
        <p className="text-sm mb-2">Different types and formats of data.</p>
        <ul className="list-disc list-inside text-xs">
          <li>Structured (tables, databases)</li>
          <li>Semi-structured (JSON, XML)</li>
          <li>Unstructured (text, images, video)</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/20">
        <h3 className="font-bold text-lg mb-2 text-orange-800 dark:text-orange-200">Veracity</h3>
        <p className="text-sm mb-2">Quality and trustworthiness of data.</p>
        <ul className="list-disc list-inside text-xs">
          <li>Data uncertainty and inconsistency</li>
          <li>Missing or incomplete data</li>
          <li>Data quality challenges at scale</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20 md:col-span-2">
        <h3 className="font-bold text-lg mb-2 text-red-800 dark:text-red-200">Value</h3>
        <p className="text-sm mb-2">Business value derived from data.</p>
        <ul className="list-disc list-inside text-xs">
          <li>Turning data into actionable insights</li>
          <li>ROI from data investments</li>
          <li>Competitive advantage through analytics</li>
        </ul>
      </div>
    </div>

    {/* Big Data Technologies */}
    <h2 className="text-3xl font-bold mt-8">Big Data Technology Stack</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Big Data Technology Ecosystem:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                       ANALYTICS                                  │
│   Spark MLlib │ TensorFlow │ PyTorch │ ML Platforms            │
├─────────────────────────────────────────────────────────────────┤
│                       PROCESSING                                 │
│   ┌─────────────────┐    ┌─────────────────┐                   │
│   │     BATCH       │    │    STREAMING     │                   │
│   │  Apache Spark   │    │  Apache Kafka    │                   │
│   │  Apache Hive    │    │  Apache Flink    │                   │
│   │  Presto/Trino   │    │  Spark Streaming │                   │
│   └─────────────────┘    └─────────────────┘                   │
├─────────────────────────────────────────────────────────────────┤
│                       STORAGE                                    │
│   HDFS │ S3 │ Azure Blob │ GCS │ Delta Lake │ Iceberg         │
├─────────────────────────────────────────────────────────────────┤
│                    RESOURCE MANAGEMENT                           │
│          YARN │ Kubernetes │ Mesos                              │
├─────────────────────────────────────────────────────────────────┤
│                    INFRASTRUCTURE                                │
│      On-Premises Clusters │ Cloud (AWS/Azure/GCP)              │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Big Data Sources */}
    <h2 className="text-3xl font-bold mt-8">Big Data Sources</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Source</th>
            <th className="p-3 border">Data Type</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Social Media</td>
            <td className="p-3 border">Unstructured</td>
            <td className="p-3 border">Tweets, posts, likes, shares</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">IoT Sensors</td>
            <td className="p-3 border">Semi-structured</td>
            <td className="p-3 border">Temperature, location, metrics</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Web Logs</td>
            <td className="p-3 border">Semi-structured</td>
            <td className="p-3 border">Clickstream, page views</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Transactional</td>
            <td className="p-3 border">Structured</td>
            <td className="p-3 border">Sales, inventory, financial</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Machine Data</td>
            <td className="p-3 border">Semi-structured</td>
            <td className="p-3 border">Application logs, system metrics</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Big Data is defined by the 5 Vs: Volume, Velocity, Variety, Veracity, Value</li>
        <li>Traditional databases can't handle Big Data scale</li>
        <li>Distributed computing (Hadoop, Spark) enables Big Data processing</li>
        <li>Data comes in structured, semi-structured, and unstructured forms</li>
        <li>Cloud platforms have democratized Big Data access</li>
        <li>Real value comes from analytics, not just storage</li>
        <li>Data quality (veracity) is a major challenge at scale</li>
        <li>Big Data enables AI/ML at unprecedented scale</li>
      </ul>
    </div>
  </div>
);

export default BigDataIntro;
