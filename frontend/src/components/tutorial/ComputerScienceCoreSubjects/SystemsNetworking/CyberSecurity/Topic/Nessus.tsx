import React from "react";

const Nessus: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Nessus - Vulnerability Scanner
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Nessus is one of the most widely deployed vulnerability scanners in the world. Developed
      by Tenable, it helps organizations identify vulnerabilities, configuration issues, and
      malware in their IT infrastructure. It supports a wide range of systems including
      networks, web applications, cloud environments, and containers.
    </p>

    <h2 className="text-3xl font-bold mt-8">Nessus Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Nessus Scanner Architecture:

+------------------------------------------------------------------+
|                       NESSUS SCANNER                              |
+------------------------------------------------------------------+
|                                                                   |
|  +------------------+     +------------------+                    |
|  |    WEB UI        |     |   SCAN ENGINE    |                    |
|  | - Configuration  |<--->| - Plugin Engine  |                    |
|  | - Reports        |     | - Vulnerability  |                    |
|  | - Scheduling     |     |   Database       |                    |
|  +------------------+     +------------------+                    |
|                                  |                                |
|                                  v                                |
|  +----------------------------------------------------------+    |
|  |                     PLUGIN LIBRARY                        |    |
|  | 150,000+ Plugins covering:                                |    |
|  | - CVEs, CWEs, Misconfigurations                          |    |
|  | - Compliance checks, Best practices                       |    |
|  +----------------------------------------------------------+    |
|                                                                   |
+------------------------------------------------------------------+
                                  |
                                  v
+------------------------------------------------------------------+
|                      TARGET SYSTEMS                               |
| [Windows] [Linux] [Network Devices] [Web Apps] [Cloud] [IoT]     |
+------------------------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Nessus Product Versions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Version</th>
            <th className="p-3 border">Target Use</th>
            <th className="p-3 border">Key Features</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Nessus Essentials</td>
            <td className="p-3 border">Education, small environments</td>
            <td className="p-3 border">Free, 16 IP limit</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Nessus Professional</td>
            <td className="p-3 border">Consultants, pen testers</td>
            <td className="p-3 border">Unlimited IPs, advanced features</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Nessus Expert</td>
            <td className="p-3 border">Enterprises</td>
            <td className="p-3 border">External attack surface, cloud</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Tenable.io</td>
            <td className="p-3 border">Enterprise SaaS</td>
            <td className="p-3 border">Cloud-based, asset tracking</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Tenable.sc</td>
            <td className="p-3 border">Enterprise on-premises</td>
            <td className="p-3 border">Full visibility, dashboards</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Scan Types</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Nessus Scan Templates:

DISCOVERY SCANS
+---------------------------+--------------------------------+
| Host Discovery            | Find live hosts on network     |
| OS Identification         | Identify operating systems     |
| Service Discovery         | Enumerate running services     |
+---------------------------+--------------------------------+

VULNERABILITY SCANS
+---------------------------+--------------------------------+
| Basic Network Scan        | Common vulnerabilities         |
| Advanced Scan             | Customizable settings          |
| Web Application Tests     | OWASP Top 10 vulnerabilities   |
| Malware Scan              | Known malware detection        |
| Credentialed Scan         | Deep system analysis           |
+---------------------------+--------------------------------+

COMPLIANCE SCANS
+---------------------------+--------------------------------+
| PCI DSS                   | Payment Card Industry          |
| HIPAA                     | Healthcare                     |
| CIS Benchmarks            | Center for Internet Security   |
| DISA STIG                 | DoD Security Guidelines        |
| Custom Audit              | Organization-specific          |
+---------------------------+--------------------------------+

Credentialed vs Non-Credentialed:
- Non-credentialed: Network-based, external view
- Credentialed: Authenticated, deeper analysis
  - Windows: Local admin, domain admin
  - Linux: Root or sudo access
  - SSH keys or username/password`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Vulnerability Severity Levels</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Severity</th>
            <th className="p-3 border">CVSS Range</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Priority</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-red-600 dark:text-red-400">Critical</td>
            <td className="p-3 border">9.0 - 10.0</td>
            <td className="p-3 border">Easily exploitable, high impact</td>
            <td className="p-3 border">Immediate</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-orange-600 dark:text-orange-400">High</td>
            <td className="p-3 border">7.0 - 8.9</td>
            <td className="p-3 border">Significant risk</td>
            <td className="p-3 border">Within 24-48 hours</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-yellow-600 dark:text-yellow-400">Medium</td>
            <td className="p-3 border">4.0 - 6.9</td>
            <td className="p-3 border">Moderate risk</td>
            <td className="p-3 border">Within 1-2 weeks</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600 dark:text-blue-400">Low</td>
            <td className="p-3 border">0.1 - 3.9</td>
            <td className="p-3 border">Limited risk</td>
            <td className="p-3 border">Within 30 days</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-gray-600 dark:text-gray-400">Info</td>
            <td className="p-3 border">0.0</td>
            <td className="p-3 border">Informational only</td>
            <td className="p-3 border">Review as needed</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Scanning Best Practices</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Nessus Scanning Best Practices:

1. PREPARATION
   - Obtain authorization
   - Define scope and targets
   - Whitelist scanner IP
   - Schedule off-peak scans
   - Prepare credentials

2. SCAN CONFIGURATION
   - Use credentialed scans when possible
   - Enable Safe Checks for production
   - Configure appropriate timing
   - Set network throttling if needed

3. SCAN EXECUTION
   - Monitor scan progress
   - Watch for false positives
   - Check for scan errors
   - Verify completion

4. REPORTING
   - Review results by severity
   - Validate critical findings
   - Document remediation steps
   - Track remediation progress

5. REMEDIATION CYCLE
   +--------+     +--------+     +--------+
   |  SCAN  | --> | REPORT | --> |  FIX   |
   +--------+     +--------+     +--------+
        ^                            |
        |                            v
        +-------- RESCAN <-----------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Plugin Categories</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Plugin Family</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">OS Vulnerabilities</td>
            <td className="p-3 border">Windows, Ubuntu, CentOS</td>
            <td className="p-3 border">MS17-010 (EternalBlue)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Web Servers</td>
            <td className="p-3 border">Apache, Nginx, IIS</td>
            <td className="p-3 border">SSL/TLS vulnerabilities</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Databases</td>
            <td className="p-3 border">MySQL, PostgreSQL, Oracle</td>
            <td className="p-3 border">Default credentials</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Network Devices</td>
            <td className="p-3 border">Cisco, Juniper, Firewall</td>
            <td className="p-3 border">Outdated firmware</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Compliance</td>
            <td className="p-3 border">PCI, CIS, HIPAA</td>
            <td className="p-3 border">Password policy checks</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Report Elements</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Executive Summary:</strong> High-level overview for management</li>
      <li><strong>Vulnerability Details:</strong> Full technical information</li>
      <li><strong>Remediation Guidance:</strong> Steps to fix each issue</li>
      <li><strong>CVE References:</strong> Links to vulnerability databases</li>
      <li><strong>Plugin Output:</strong> Raw scanner output for verification</li>
      <li><strong>Risk Scores:</strong> CVSS and VPR (Vulnerability Priority Rating)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Credentialed scans provide significantly more accurate results</li>
        <li>Use Safe Checks mode for production environments</li>
        <li>Regularly update plugins for latest vulnerability coverage</li>
        <li>Validate critical findings before reporting</li>
        <li>Track remediation progress with regular rescans</li>
        <li>Integrate with patch management and ticketing systems</li>
      </ul>
    </div>
  </div>
);

export default Nessus;
