import React from "react";

const FileSystemVsDBMS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">File System vs DBMS</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Before DBMS, data was managed using file systems. Understanding the differences between
      file-based systems and DBMS helps appreciate why database management systems were developed.
    </p>

    <h2 className="text-3xl font-bold mt-8">File System Approach</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`File System Structure:

Application 1 -----> student.txt
Application 2 -----> course.txt
Application 3 -----> grades.txt

Problems:
- Each application manages its own files
- No central control
- Data redundancy across files
- Inconsistency when data is duplicated`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">File System</th>
            <th className="p-3 border">DBMS</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Data Redundancy</td>
            <td className="p-3 border text-red-500">High - same data in multiple files</td>
            <td className="p-3 border text-green-500">Minimal - normalization reduces duplication</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Consistency</td>
            <td className="p-3 border text-red-500">Difficult to maintain</td>
            <td className="p-3 border text-green-500">Enforced through constraints</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Sharing</td>
            <td className="p-3 border text-red-500">Limited, application-specific</td>
            <td className="p-3 border text-green-500">Easy sharing among applications</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Security</td>
            <td className="p-3 border text-red-500">OS-level file permissions only</td>
            <td className="p-3 border text-green-500">Fine-grained access control</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Concurrent Access</td>
            <td className="p-3 border text-red-500">Not supported well</td>
            <td className="p-3 border text-green-500">Built-in concurrency control</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Integrity</td>
            <td className="p-3 border text-red-500">Must be coded in each app</td>
            <td className="p-3 border text-green-500">Centralized integrity rules</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Backup & Recovery</td>
            <td className="p-3 border text-red-500">Manual, error-prone</td>
            <td className="p-3 border text-green-500">Automated, reliable</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Query Capability</td>
            <td className="p-3 border text-red-500">Custom code needed</td>
            <td className="p-3 border text-green-500">SQL - powerful query language</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Problems with File Systems</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Data Redundancy:</strong> Same data stored in multiple files</li>
      <li><strong>Data Inconsistency:</strong> Updates in one file may not reflect in others</li>
      <li><strong>Difficulty in Accessing Data:</strong> Need new programs for new queries</li>
      <li><strong>Data Isolation:</strong> Data scattered in various files and formats</li>
      <li><strong>Integrity Problems:</strong> Hard to enforce business rules</li>
      <li><strong>Atomicity Problems:</strong> Partial updates on system failure</li>
      <li><strong>Security Problems:</strong> Difficult to control access</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>File systems lack centralized data management</li>
        <li>DBMS solves redundancy, inconsistency, and security issues</li>
        <li>DBMS provides data independence and abstraction</li>
        <li>SQL provides standardized data access in DBMS</li>
      </ul>
    </div>
  </div>
);

export default FileSystemVsDBMS;
