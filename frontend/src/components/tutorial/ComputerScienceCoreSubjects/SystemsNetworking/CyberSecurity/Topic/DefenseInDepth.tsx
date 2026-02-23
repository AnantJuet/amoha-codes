import React from "react";

const DefenseInDepth: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Defense in Depth
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Defense in Depth (DiD) is a security strategy that employs multiple layers of security controls
      throughout an IT system. If one layer fails, other layers continue to provide protection,
      creating a comprehensive security posture.
    </p>

    <h2 className="text-3xl font-bold mt-8">Understanding Defense in Depth</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Defense in Depth Model:

         +---------------------------+
         |    POLICIES & PROCEDURES  |  <-- Human Layer
         +---------------------------+
                    |
         +---------------------------+
         |    PHYSICAL SECURITY      |  <-- Facility Protection
         +---------------------------+
                    |
         +---------------------------+
         |    NETWORK PERIMETER      |  <-- Firewalls, IDS/IPS
         +---------------------------+
                    |
         +---------------------------+
         |    INTERNAL NETWORK       |  <-- Segmentation
         +---------------------------+
                    |
         +---------------------------+
         |    HOST SECURITY          |  <-- Endpoint Protection
         +---------------------------+
                    |
         +---------------------------+
         |    APPLICATION SECURITY   |  <-- Secure Code, WAF
         +---------------------------+
                    |
         +---------------------------+
         |    DATA SECURITY          |  <-- Encryption, DLP
         +---------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">The Castle Analogy</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Medieval Castle Defense = Modern Cybersecurity

Castle:                      Network:
+--------------------+       +--------------------+
| Moat               | <---> | Firewall           |
| Outer Walls        | <---> | DMZ                |
| Inner Walls        | <---> | Network Segments   |
| Guards             | <---> | IDS/IPS            |
| Locked Doors       | <---> | Access Controls    |
| Hidden Rooms       | <---> | Encrypted Data     |
| Castle Keep        | <---> | Critical Assets    |
+--------------------+       +--------------------+

If attackers breach one layer, others still protect!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Layer 1: Physical Security</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Control</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Access Control</td>
            <td className="p-3 border">Restrict physical entry</td>
            <td className="p-3 border">Badge readers, biometrics</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Surveillance</td>
            <td className="p-3 border">Monitor and record activity</td>
            <td className="p-3 border">CCTV, motion sensors</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Environmental</td>
            <td className="p-3 border">Protect from disasters</td>
            <td className="p-3 border">Fire suppression, UPS</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Layer 2: Network Perimeter</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Firewalls:</strong> Filter traffic based on rules and policies</li>
      <li><strong>IDS/IPS:</strong> Detect and prevent intrusions</li>
      <li><strong>VPN:</strong> Secure remote access connections</li>
      <li><strong>DDoS Protection:</strong> Mitigate volumetric attacks</li>
      <li><strong>Email Security:</strong> Filter malicious emails and attachments</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Layer 3: Internal Network</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Network Segmentation:

+--------------------------------------------------+
|                    NETWORK                        |
+--------------------------------------------------+
|  +--------+   +--------+   +--------+   +------+ |
|  | DMZ    |   | Users  |   | Servers|   | PCI  | |
|  |        |   |        |   |        |   | Zone | |
|  +--------+   +--------+   +--------+   +------+ |
|      |            |            |           |     |
|      +------------+------------+-----------+     |
|                   |                              |
|            [Internal Firewall]                   |
|                   |                              |
|           +---------------+                      |
|           | Critical Zone |                      |
|           +---------------+                      |
+--------------------------------------------------+

Each segment has specific access rules and controls`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Layer 4: Host Security</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Control</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Endpoint Protection</td>
            <td className="p-3 border">Antivirus, anti-malware, EDR solutions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">System Hardening</td>
            <td className="p-3 border">Remove unnecessary services, secure configs</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Patch Management</td>
            <td className="p-3 border">Regular updates to fix vulnerabilities</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Host Firewall</td>
            <td className="p-3 border">Local traffic filtering on each system</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Layer 5: Application Security</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Secure Development:</strong> SDLC, code reviews, security testing</li>
      <li><strong>Web Application Firewall:</strong> Protect web apps from attacks</li>
      <li><strong>Input Validation:</strong> Prevent injection attacks</li>
      <li><strong>Authentication:</strong> Strong access controls and MFA</li>
      <li><strong>Session Management:</strong> Secure session handling</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Layer 6: Data Security</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Protection Controls:

+--------------------------------------------------+
|               DATA SECURITY LAYERS               |
+--------------------------------------------------+
|                                                  |
|  Encryption at Rest:                             |
|  - Full disk encryption                          |
|  - Database encryption                           |
|  - File-level encryption                         |
|                                                  |
|  Encryption in Transit:                          |
|  - TLS/SSL for communications                    |
|  - VPN for remote access                         |
|  - Encrypted email                               |
|                                                  |
|  Data Loss Prevention:                           |
|  - Content inspection                            |
|  - Policy enforcement                            |
|  - Activity monitoring                           |
|                                                  |
+--------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Layer 7: Policies and People</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Element</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Security Policies</td>
            <td className="p-3 border">Define rules and acceptable behavior</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Security Awareness</td>
            <td className="p-3 border">Train employees on threats and best practices</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Incident Response</td>
            <td className="p-3 border">Procedures for handling security incidents</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Compliance</td>
            <td className="p-3 border">Meet regulatory and industry requirements</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Benefits of Defense in Depth</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>No single point of failure in security</li>
        <li>Slows down attackers, giving time to respond</li>
        <li>Provides redundancy when one control fails</li>
        <li>Addresses both internal and external threats</li>
        <li>Supports compliance with security frameworks</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Defense in Depth uses multiple overlapping security layers</li>
        <li>Each layer addresses different types of threats</li>
        <li>If one layer fails, others continue to protect</li>
        <li>Includes technical, physical, and administrative controls</li>
        <li>People and policies are as important as technology</li>
        <li>Regular assessment ensures all layers remain effective</li>
      </ul>
    </div>
  </div>
);

export default DefenseInDepth;
