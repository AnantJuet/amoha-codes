import React from "react";

const SecurityIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Network Security
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      Network security encompasses the policies, practices, and technologies designed to protect the integrity,
      confidentiality, and accessibility of computer networks and data. As organizations increasingly rely on
      networked systems, securing these networks has become critical to business operations and personal privacy.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Why Network Security Matters</h2>
    <p className="text-lg leading-relaxed dark:text-gray-300">
      With the exponential growth of internet-connected devices and digital communication, the attack surface
      for malicious actors has expanded dramatically. Network security protects against data breaches, financial
      losses, reputation damage, and service disruptions.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Core Security Goals (CIA Triad)</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Goal</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Example</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">Confidentiality</td>
            <td className="border border-gray-300 px-4 py-2">Ensuring data is only accessible to authorized parties</td>
            <td className="border border-gray-300 px-4 py-2">Encryption of sensitive files</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">Integrity</td>
            <td className="border border-gray-300 px-4 py-2">Protecting data from unauthorized modification</td>
            <td className="border border-gray-300 px-4 py-2">Hash verification of downloads</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">Availability</td>
            <td className="border border-gray-300 px-4 py-2">Ensuring systems and data are accessible when needed</td>
            <td className="border border-gray-300 px-4 py-2">DDoS protection services</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Additional Security Goals</h2>
    <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
      <li><strong>Authentication:</strong> Verifying the identity of users, devices, or systems</li>
      <li><strong>Authorization:</strong> Granting appropriate access levels based on identity</li>
      <li><strong>Non-repudiation:</strong> Preventing denial of actions (e.g., digital signatures)</li>
      <li><strong>Accountability:</strong> Tracking actions to specific users or systems</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Network Security Layers</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <ul className="space-y-2 dark:text-gray-300">
        <li><strong>Physical Security:</strong> Protecting hardware, cables, and data centers</li>
        <li><strong>Network Security:</strong> Firewalls, IDS/IPS, network segmentation</li>
        <li><strong>Application Security:</strong> Secure coding, input validation, authentication</li>
        <li><strong>Data Security:</strong> Encryption, access controls, backup strategies</li>
        <li><strong>Endpoint Security:</strong> Antivirus, device management, patch management</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Common Security Mechanisms</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-bold mb-2 dark:text-white">Preventive Controls</h3>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>Firewalls</li>
          <li>Access Control Lists</li>
          <li>Encryption</li>
          <li>Authentication systems</li>
        </ul>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">Detective Controls</h3>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>Intrusion Detection Systems</li>
          <li>Log monitoring</li>
          <li>Security audits</li>
          <li>Network monitoring</li>
        </ul>
      </div>
      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
        <h3 className="font-bold mb-2 dark:text-white">Corrective Controls</h3>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>Incident response</li>
          <li>Backup restoration</li>
          <li>Patch management</li>
          <li>System recovery</li>
        </ul>
      </div>
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="font-bold mb-2 dark:text-white">Deterrent Controls</h3>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>Security policies</li>
          <li>Warning banners</li>
          <li>User training</li>
          <li>Legal agreements</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>Network security protects the confidentiality, integrity, and availability of data and systems</li>
        <li>The CIA triad forms the foundation of security goals</li>
        <li>Security must be implemented at multiple layers for defense in depth</li>
        <li>Both preventive and detective controls are essential for comprehensive security</li>
        <li>Network security is an ongoing process, not a one-time implementation</li>
      </ul>
    </div>
  </div>
);

export default SecurityIntro;
