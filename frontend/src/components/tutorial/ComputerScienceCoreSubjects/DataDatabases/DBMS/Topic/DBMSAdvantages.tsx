import React from "react";

const DBMSAdvantages: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Advantages of DBMS</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Database Management Systems offer numerous advantages over traditional file-based systems.
      These benefits make DBMS the preferred choice for managing data in modern applications.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Advantages</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantage</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Data Independence</td>
            <td className="p-3 border">Applications are insulated from data storage changes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Reduced Redundancy</td>
            <td className="p-3 border">Normalization minimizes duplicate data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Consistency</td>
            <td className="p-3 border">Single source of truth for all applications</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Sharing</td>
            <td className="p-3 border">Multiple users and applications can access data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Security</td>
            <td className="p-3 border">Fine-grained access control and authentication</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Integrity</td>
            <td className="p-3 border">Constraints ensure data accuracy and validity</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Concurrent Access</td>
            <td className="p-3 border">Multiple users can access simultaneously</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Backup & Recovery</td>
            <td className="p-3 border">Built-in mechanisms for data protection</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of DBMS</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Cost:</strong> Hardware, software, and training expenses</li>
      <li><strong>Complexity:</strong> Requires skilled administrators</li>
      <li><strong>Performance Overhead:</strong> Additional processing for security, integrity</li>
      <li><strong>Single Point of Failure:</strong> Database crash affects all applications</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>DBMS provides centralized data management</li>
        <li>Benefits outweigh costs for most applications</li>
        <li>Data independence is a crucial advantage</li>
        <li>ACID properties ensure reliable transactions</li>
      </ul>
    </div>
  </div>
);

export default DBMSAdvantages;
