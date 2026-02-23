import React from 'react';

const SQLvsNoSQL: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SQL vs NoSQL Databases
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      SQL and NoSQL are two fundamental types of database systems designed for different data management needs.
      SQL databases are known for their structured, table-based format and strong data integrity features,
      while NoSQL databases offer flexibility and scalability, making them suitable for handling large volumes
      of unstructured data.
    </p>

    <h2 className="text-2xl font-bold mt-6">What is SQL?</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>SQL (Structured Query Language) is a standardized programming language used for managing and manipulating relational databases</li>
      <li>Allows users to query, insert, update, and delete data stored in tables</li>
      <li>Widely used due to its powerful and intuitive syntax</li>
      <li>Examples: MySQL, PostgreSQL, SQL Server, Oracle</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">What is NoSQL?</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>NoSQL refers to a diverse category of database systems designed to handle large volumes of unstructured or semi-structured data</li>
      <li>Does not rely on a fixed schema and can store data in various formats</li>
      <li>Types: Key-value pairs, documents, column-family stores, or graph structures</li>
      <li>Examples: MongoDB, Cassandra, Redis, CouchBase</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Why NoSQL is Used Over SQL</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Scalability:</strong> NoSQL databases are designed to scale out horizontally, making them suitable for big data applications</li>
      <li><strong>Flexibility:</strong> NoSQL databases do not require a predefined schema, allowing for easy storage and retrieval of diverse data types</li>
      <li><strong>Performance:</strong> For certain workloads, NoSQL databases can offer faster data access and better performance</li>
      <li><strong>Handling Unstructured Data:</strong> NoSQL databases excel at storing and managing unstructured or semi-structured data like JSON documents</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">SQL</th>
            <th className="p-3 border">NoSQL</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Data Model</td>
            <td className="p-3 border">Relational (tables with rows and columns)</td>
            <td className="p-3 border">Non-relational (documents, key-value, graphs)</td>
          </tr>
          <tr>
            <td className="p-3 border">Schema</td>
            <td className="p-3 border">Fixed, predefined schema</td>
            <td className="p-3 border">Dynamic, flexible schema</td>
          </tr>
          <tr>
            <td className="p-3 border">Scaling</td>
            <td className="p-3 border">Vertical scaling (scale up)</td>
            <td className="p-3 border">Horizontal scaling (scale out)</td>
          </tr>
          <tr>
            <td className="p-3 border">ACID Compliance</td>
            <td className="p-3 border">Strong ACID support</td>
            <td className="p-3 border">Eventual consistency (some support ACID)</td>
          </tr>
          <tr>
            <td className="p-3 border">Query Language</td>
            <td className="p-3 border">SQL (standardized)</td>
            <td className="p-3 border">Varies by database</td>
          </tr>
          <tr>
            <td className="p-3 border">Best For</td>
            <td className="p-3 border">Complex queries, transactions</td>
            <td className="p-3 border">Big data, real-time applications</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Is NoSQL Better for Big Data Applications?</h2>
    <p className="leading-relaxed">
      NoSQL databases work better for Big Data applications. Here's why:
    </p>
    <ul className="list-disc list-inside space-y-2 mt-4">
      <li><strong>Scalability:</strong> NoSQL databases can grow by adding more servers to handle bigger workloads</li>
      <li><strong>Flexible Schema:</strong> NoSQL databases let you store data in different forms - unstructured, semi-structured, and structured</li>
      <li><strong>Performance:</strong> Optimized for high read/write throughput</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">When to Use SQL vs NoSQL</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Use SQL When:</h4>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Data is highly structured</li>
          <li>Complex queries are needed</li>
          <li>Strong consistency is required</li>
          <li>Transactions are critical</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Use NoSQL When:</h4>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Data is unstructured or semi-structured</li>
          <li>High scalability is needed</li>
          <li>Flexible schema is required</li>
          <li>High throughput is priority</li>
        </ul>
      </div>
    </div>
  </div>
);

export default SQLvsNoSQL;
