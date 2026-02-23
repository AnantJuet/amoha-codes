import React from "react";

const SecurityGoals: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Security Goals and Principles
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Security goals and principles form the foundation of information security, guiding organizations
      in protecting their assets and data. These goals define what security measures aim to achieve,
      while principles guide how to implement effective security controls.
    </p>

    <h2 className="text-3xl font-bold mt-8">Core Security Goals</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Security Goals Framework:

+--------------------------------------------------+
|            CORE SECURITY OBJECTIVES              |
+--------------------------------------------------+
|                                                  |
|    Confidentiality    Integrity    Availability  |
|         |                |              |        |
|    +---------+      +---------+    +---------+   |
|    | Protect |      | Ensure  |    | Ensure  |   |
|    | from    |      | data    |    | access  |   |
|    | unauth  |      | accuracy|    | when    |   |
|    | access  |      |         |    | needed  |   |
|    +---------+      +---------+    +---------+   |
|                                                  |
|    Additional Goals:                             |
|    - Authentication  - Non-repudiation           |
|    - Authorization   - Accountability            |
+--------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Extended Security Goals</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Goal</th>
            <th className="p-3 border">Definition</th>
            <th className="p-3 border">Implementation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Authentication</td>
            <td className="p-3 border">Verifying identity of users/systems</td>
            <td className="p-3 border">MFA, passwords, biometrics</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Authorization</td>
            <td className="p-3 border">Determining permitted actions</td>
            <td className="p-3 border">RBAC, ACLs, permissions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Non-repudiation</td>
            <td className="p-3 border">Preventing denial of actions</td>
            <td className="p-3 border">Digital signatures, audit logs</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Accountability</td>
            <td className="p-3 border">Tracking actions to individuals</td>
            <td className="p-3 border">Logging, monitoring, auditing</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fundamental Security Principles</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Least Privilege</h3>
    <p className="leading-relaxed">
      Users and systems should have only the minimum access rights needed to perform their functions.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Least Privilege Example:

Role: Database Administrator
+----------------------------------+
| Privileges:                      |
| + Database configuration         |
| + Backup and restore             |
| + User management                |
| - Application code deployment    |
| - Network configuration          |
| - Operating system access        |
+----------------------------------+

Role: Application User
+----------------------------------+
| Privileges:                      |
| + Read own data                  |
| + Update own profile             |
| - Access other users' data       |
| - Administrative functions       |
| - Database direct access         |
+----------------------------------+`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Defense in Depth</h3>
    <p className="leading-relaxed">
      Multiple layers of security controls provide redundancy if one layer fails.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Defense in Depth Layers:

Layer 7: Policies & Training -------> Human layer
Layer 6: Physical Security ---------> Facility protection
Layer 5: Network Perimeter ---------> Firewalls, IDS/IPS
Layer 4: Internal Network ----------> Segmentation, VLANs
Layer 3: Host Security -------------> Antivirus, hardening
Layer 2: Application Security ------> Secure coding, WAF
Layer 1: Data Security -------------> Encryption, DLP

Each layer provides protection if others fail`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Separation of Duties</h3>
    <p className="leading-relaxed">
      Critical tasks require multiple individuals to complete, preventing fraud and errors.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Task</th>
            <th className="p-3 border">Role 1</th>
            <th className="p-3 border">Role 2</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Code Deployment</td>
            <td className="p-3 border">Developer writes code</td>
            <td className="p-3 border">Ops deploys to production</td>
          </tr>
          <tr>
            <td className="p-3 border">Financial Transaction</td>
            <td className="p-3 border">Requester initiates</td>
            <td className="p-3 border">Manager approves</td>
          </tr>
          <tr>
            <td className="p-3 border">Access Provisioning</td>
            <td className="p-3 border">Manager requests</td>
            <td className="p-3 border">IT implements</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. Fail Secure</h3>
    <p className="leading-relaxed">
      Systems should default to a secure state when they fail, denying access rather than allowing it.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Fail Secure vs Fail Open:

Fail Secure (Preferred):
+------------------------+
| System Error Occurs    |
|          |             |
|          v             |
| Deny All Access        |
| Log the incident       |
| Alert administrators   |
+------------------------+

Fail Open (Risk):
+------------------------+
| System Error Occurs    |
|          |             |
|          v             |
| Allow All Access       |
| Potential security     |
| breach!                |
+------------------------+`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">5. Security by Design</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Build security in from the start:</strong> Not as an afterthought</li>
      <li><strong>Threat modeling:</strong> Identify risks during design phase</li>
      <li><strong>Secure defaults:</strong> Systems secure out of the box</li>
      <li><strong>Minimize attack surface:</strong> Reduce entry points</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Additional Security Principles</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Principle</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Keep It Simple</td>
            <td className="p-3 border">Complex systems have more vulnerabilities</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Open Design</td>
            <td className="p-3 border">Security should not depend on secrecy of design</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complete Mediation</td>
            <td className="p-3 border">Check every access attempt</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Economy of Mechanism</td>
            <td className="p-3 border">Keep security mechanisms simple and small</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>CIA triad forms the core of security goals</li>
        <li>Least privilege minimizes access to only what is needed</li>
        <li>Defense in depth provides multiple security layers</li>
        <li>Separation of duties prevents fraud and single points of failure</li>
        <li>Security should be built into systems from the beginning</li>
        <li>Fail secure ensures systems default to safe states</li>
      </ul>
    </div>
  </div>
);

export default SecurityGoals;
