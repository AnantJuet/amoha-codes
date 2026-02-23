import React from "react";

const CIATriad: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      CIA Triad
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The CIA Triad is a foundational model in information security that represents the three core
      principles of security: Confidentiality, Integrity, and Availability. These three principles
      guide security policies and measures in any organization.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is the CIA Triad?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`                     CIA TRIAD

                  CONFIDENTIALITY
                       /\\
                      /  \\
                     /    \\
                    /      \\
                   /   CIA  \\
                  /   TRIAD  \\
                 /            \\
                /______________\\
          INTEGRITY          AVAILABILITY

Each principle supports the others:
- Without Confidentiality: Data is exposed
- Without Integrity: Data cannot be trusted
- Without Availability: Data is inaccessible`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Confidentiality</h2>
    <p className="leading-relaxed">
      Confidentiality ensures that sensitive information is accessible only to authorized individuals,
      processes, or systems. It protects data from unauthorized disclosure.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Mechanism</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Encryption</td>
            <td className="p-3 border">Convert data to unreadable format</td>
            <td className="p-3 border">AES, RSA encryption</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Access Control</td>
            <td className="p-3 border">Restrict who can access resources</td>
            <td className="p-3 border">Role-based access, permissions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Authentication</td>
            <td className="p-3 border">Verify user identity</td>
            <td className="p-3 border">Passwords, biometrics, MFA</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Classification</td>
            <td className="p-3 border">Categorize data by sensitivity</td>
            <td className="p-3 border">Public, Internal, Confidential</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Confidentiality Threats:
- Eavesdropping / Sniffing
- Man-in-the-Middle attacks
- Social Engineering
- Insider Threats
- Improper Access Controls

Example Breach:
  Scenario: Employee leaves laptop in public
  Impact: Unauthorized access to customer data
  Prevention: Full disk encryption + screen lock`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Integrity</h2>
    <p className="leading-relaxed">
      Integrity ensures that data is accurate, consistent, and trustworthy throughout its lifecycle.
      It prevents unauthorized modification of information and ensures data has not been tampered with.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Mechanism</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Hashing</td>
            <td className="p-3 border">Create fingerprint of data</td>
            <td className="p-3 border">SHA-256, MD5 checksums</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Digital Signatures</td>
            <td className="p-3 border">Verify authenticity and integrity</td>
            <td className="p-3 border">Code signing, document signing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Version Control</td>
            <td className="p-3 border">Track changes to data</td>
            <td className="p-3 border">Git, document versioning</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Input Validation</td>
            <td className="p-3 border">Ensure data meets expected format</td>
            <td className="p-3 border">Form validation, sanitization</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Integrity Threats:
- Data corruption
- Malware modifications
- Man-in-the-Middle attacks
- SQL Injection
- Unauthorized alterations

Example Implementation:
  File: document.pdf
  Hash: SHA256 = a1b2c3d4e5f6...

  Verification:
  1. Calculate hash of received file
  2. Compare with original hash
  3. If match → Integrity verified
  4. If different → File modified!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Availability</h2>
    <p className="leading-relaxed">
      Availability ensures that information and resources are accessible to authorized users when needed.
      Systems must be operational and recover quickly from disruptions.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Mechanism</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Redundancy</td>
            <td className="p-3 border">Duplicate critical components</td>
            <td className="p-3 border">RAID, load balancers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Backups</td>
            <td className="p-3 border">Regular data copies</td>
            <td className="p-3 border">Daily backups, offsite storage</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Failover Systems</td>
            <td className="p-3 border">Automatic switching to backup</td>
            <td className="p-3 border">Hot standby, cluster failover</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DDoS Protection</td>
            <td className="p-3 border">Mitigate denial of service</td>
            <td className="p-3 border">CDN, traffic filtering</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Availability Threats:
- DDoS attacks
- Hardware failures
- Power outages
- Natural disasters
- Ransomware

High Availability Architecture:

  Users → Load Balancer → [Server 1]
                       → [Server 2]
                       → [Server 3]
                              ↓
                         Database
                         (Primary)
                              ↓
                         Database
                         (Replica)

SLA Metrics:
- 99.9% uptime = 8.76 hours downtime/year
- 99.99% uptime = 52.56 minutes downtime/year
- 99.999% uptime = 5.26 minutes downtime/year`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Balancing the CIA Triad</h2>
    <p className="leading-relaxed">
      Organizations must balance all three principles based on their needs. Overemphasizing one
      aspect may compromise another.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Scenario</th>
            <th className="p-3 border">Priority Focus</th>
            <th className="p-3 border">Reason</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Banking System</td>
            <td className="p-3 border">Confidentiality + Integrity</td>
            <td className="p-3 border">Protect financial data and transactions</td>
          </tr>
          <tr>
            <td className="p-3 border">E-commerce Website</td>
            <td className="p-3 border">Availability + Confidentiality</td>
            <td className="p-3 border">Must be accessible, protect customer data</td>
          </tr>
          <tr>
            <td className="p-3 border">Medical Records</td>
            <td className="p-3 border">All Three Equally</td>
            <td className="p-3 border">Privacy, accuracy, and emergency access</td>
          </tr>
          <tr>
            <td className="p-3 border">News Website</td>
            <td className="p-3 border">Availability + Integrity</td>
            <td className="p-3 border">Content must be accessible and accurate</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Confidentiality:</strong> Keep data private and accessible only to authorized users</li>
        <li><strong>Integrity:</strong> Ensure data is accurate and has not been tampered with</li>
        <li><strong>Availability:</strong> Ensure systems and data are accessible when needed</li>
        <li>The three principles are interconnected and must be balanced</li>
        <li>Different organizations prioritize different aspects based on their needs</li>
        <li>CIA Triad is the foundation of all security policies and frameworks</li>
      </ul>
    </div>
  </div>
);

export default CIATriad;
