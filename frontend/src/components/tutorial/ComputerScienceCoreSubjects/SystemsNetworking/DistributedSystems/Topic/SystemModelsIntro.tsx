import React from "react";

const SystemModelsIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to System Models in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      System models in distributed systems provide abstract representations of
      distributed systems that help in understanding their fundamental properties,
      behavior, and characteristics. These models serve as a foundation for
      designing, analyzing, and reasoning about distributed systems.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why System Models Matter</h2>
    <p className="leading-relaxed">
      System models help us understand and predict how a distributed system will
      behave under various conditions. They provide a framework for discussing
      system properties, comparing different designs, and identifying potential
      issues before implementation.
    </p>

    <h2 className="text-3xl font-bold mt-8">Categories of System Models</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Physical Models</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Hardware representation</li>
          <li>Network topology</li>
          <li>Geographic distribution</li>
          <li>Resource configuration</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Architectural Models</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Client-server model</li>
          <li>Peer-to-peer model</li>
          <li>Multi-tier architecture</li>
          <li>Microservices</li>
        </ul>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Fundamental Models</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Interaction models</li>
          <li>Failure models</li>
          <li>Security models</li>
          <li>Timing models</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Physical Model Characteristics</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Nodes</td>
            <td className="p-3 border">
              Computers or devices that make up the system
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Links</td>
            <td className="p-3 border">
              Communication channels between nodes
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Topology</td>
            <td className="p-3 border">
              Arrangement and interconnection of nodes
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Resources</td>
            <td className="p-3 border">
              Memory, storage, processors available at each node
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Evolution of Distributed Systems</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Timeline of Distributed System Evolution:

Early 1970s    Mainframe-based computing
               └── Centralized resources, dumb terminals

Late 1970s     Local Area Networks emerge
               └── Resource sharing, file servers

1980s          Client-Server Architecture
               └── Distributed processing begins

1990s          Internet-based Systems
               └── Web applications, email systems

2000s          Grid Computing & Clusters
               └── Large-scale distributed computing

2010s          Cloud Computing & Microservices
               └── Elastic resources, containerization

2020s          Edge Computing & IoT
               └── Distributed intelligence at the edge`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Model Assumptions</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Network Reliability:</strong> Messages may be delayed, lost, or duplicated</li>
      <li><strong>Process Behavior:</strong> Processes may fail, crash, or behave maliciously</li>
      <li><strong>Timing:</strong> Operations take finite but unpredictable time</li>
      <li><strong>Concurrency:</strong> Multiple processes execute simultaneously</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>System models abstract complex distributed systems for analysis</li>
        <li>Physical, architectural, and fundamental models serve different purposes</li>
        <li>Models help predict behavior and identify potential issues</li>
        <li>Understanding models is crucial for designing robust distributed systems</li>
        <li>No single model captures all aspects of real distributed systems</li>
      </ul>
    </div>
  </div>
);

export default SystemModelsIntro;
