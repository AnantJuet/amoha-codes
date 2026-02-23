import React from "react";

const FirewallTypes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Firewalls
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Firewalls have evolved significantly over time, from simple packet filters to sophisticated
      next-generation systems. Understanding the different types helps in selecting the right
      solution for specific security requirements.
    </p>

    <h2 className="text-3xl font-bold mt-8">Firewall Types Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Firewall Evolution:

Generation 1: Packet Filtering
     |
     v
Generation 2: Stateful Inspection
     |
     v
Generation 3: Application Layer
     |
     v
Generation 4: Next-Generation (NGFW)

Inspection Depth:
+------------------------------------------+
| NGFW        | Deep packet + App + Threat |
+------------------------------------------+
| Application | Application layer content  |
+------------------------------------------+
| Stateful    | Connection state + packets |
+------------------------------------------+
| Packet      | IP headers only            |
+------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Packet Filtering Firewall</h2>
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
            <td className="p-3 border font-semibold">OSI Layer</td>
            <td className="p-3 border">Network (Layer 3) and Transport (Layer 4)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Inspection</td>
            <td className="p-3 border">IP addresses, ports, protocols</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Pros</td>
            <td className="p-3 border">Fast, simple, low resource usage</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cons</td>
            <td className="p-3 border">No state tracking, easily spoofed</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Stateful Inspection Firewall</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Stateful Inspection:

Tracks connection state in a state table:

State Table:
+--------+----------+----------+--------+-------+
| Source | Dest     | Src Port | Dst    | State |
| IP     | IP       |          | Port   |       |
+--------+----------+----------+--------+-------+
| 10.0.1.5| 8.8.8.8 | 52341    | 53     | EST   |
| 10.0.1.8| 93.184.x| 49152    | 443    | EST   |
| 10.0.1.3| 10.0.2.1| 22       | 22     | NEW   |
+--------+----------+----------+--------+-------+

Benefits:
- Tracks TCP handshake (SYN, SYN-ACK, ACK)
- Only allows return traffic for established connections
- More secure than simple packet filtering`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Application Layer Firewall (Proxy)</h2>
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
            <td className="p-3 border font-semibold">OSI Layer</td>
            <td className="p-3 border">Application (Layer 7)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Inspection</td>
            <td className="p-3 border">Application content (HTTP, FTP, DNS)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Pros</td>
            <td className="p-3 border">Deep inspection, content filtering</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cons</td>
            <td className="p-3 border">Slower, requires more resources</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Circuit-Level Gateway</h2>
    <p className="leading-relaxed">
      Monitors TCP handshakes to determine if a session is legitimate. Works at the session
      layer and does not inspect packet contents after connection is established.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li>Validates TCP connection setup</li>
      <li>Does not inspect actual data packets</li>
      <li>Lower overhead than application proxies</li>
      <li>Often combined with other firewall types</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">5. Next-Generation Firewall (NGFW)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NGFW Features:

+--------------------------------------------------+
|           NEXT-GENERATION FIREWALL                |
+--------------------------------------------------+
|                                                  |
| Traditional Firewall Features:                   |
| - Packet filtering                               |
| - Stateful inspection                            |
| - NAT and VPN                                    |
|                                                  |
| Advanced Features:                               |
| - Deep Packet Inspection (DPI)                   |
| - Application awareness and control              |
| - Intrusion Prevention System (IPS)              |
| - SSL/TLS inspection                             |
| - Threat intelligence integration                |
| - User identity awareness                        |
| - Sandboxing                                     |
| - Advanced malware protection                    |
|                                                  |
+--------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">6. Web Application Firewall (WAF)</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Purpose</td>
            <td className="p-3 border">Protect web applications</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Protection</td>
            <td className="p-3 border">SQL injection, XSS, CSRF</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Deployment</td>
            <td className="p-3 border">In front of web servers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Standards</td>
            <td className="p-3 border">OWASP Core Rule Set</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Layer</th>
            <th className="p-3 border">Speed</th>
            <th className="p-3 border">Security</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Packet Filter</td>
            <td className="p-3 border">3-4</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border">Basic</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Stateful</td>
            <td className="p-3 border">3-4</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border">Good</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Application</td>
            <td className="p-3 border">7</td>
            <td className="p-3 border">Slow</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">NGFW</td>
            <td className="p-3 border">3-7</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Highest</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Packet filtering is fast but provides basic security</li>
        <li>Stateful inspection tracks connection state for better security</li>
        <li>Application layer firewalls inspect content but are slower</li>
        <li>NGFWs combine multiple security functions in one device</li>
        <li>WAFs specifically protect web applications</li>
        <li>Choose firewall type based on security needs and performance requirements</li>
      </ul>
    </div>
  </div>
);

export default FirewallTypes;
