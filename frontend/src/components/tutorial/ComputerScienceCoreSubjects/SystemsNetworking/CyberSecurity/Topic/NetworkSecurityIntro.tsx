import React from "react";

const NetworkSecurityIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Network Security Fundamentals
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Network security encompasses the policies, processes, and technologies used to protect
      computer networks and data from unauthorized access, misuse, and attacks. It ensures the
      confidentiality, integrity, and availability of network resources.
    </p>

    <h2 className="text-3xl font-bold mt-8">Network Security Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Network Security Layers:

+--------------------------------------------------+
|              NETWORK SECURITY STACK               |
+--------------------------------------------------+
|                                                  |
|  +-----------+  +-----------+  +-----------+     |
|  | Physical  |  | Network   |  | Endpoint  |     |
|  | Security  |  | Perimeter |  | Security  |     |
|  +-----------+  +-----------+  +-----------+     |
|                                                  |
|  +-----------+  +-----------+  +-----------+     |
|  |Application|  |   Data    |  |  Identity |     |
|  | Security  |  | Security  |  | Management|     |
|  +-----------+  +-----------+  +-----------+     |
|                                                  |
+--------------------------------------------------+

Goal: Protect the CIA Triad
- Confidentiality: Prevent unauthorized access
- Integrity: Prevent unauthorized modification
- Availability: Ensure resources are accessible`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">How Network Security Works</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Layer</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Technologies</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Physical Security</td>
            <td className="p-3 border">Protect physical infrastructure</td>
            <td className="p-3 border">Locks, CCTV, access cards</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Technical Security</td>
            <td className="p-3 border">Software and hardware controls</td>
            <td className="p-3 border">Firewalls, IDS/IPS, encryption</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Administrative</td>
            <td className="p-3 border">Policies and procedures</td>
            <td className="p-3 border">Security policies, training</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Network Security Controls</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Essential Security Controls:

1. ACCESS CONTROL
   - Authentication (who are you?)
   - Authorization (what can you do?)
   - Network Access Control (NAC)

2. PERIMETER DEFENSE
   - Firewalls (traffic filtering)
   - IDS/IPS (intrusion detection/prevention)
   - VPN (secure remote access)

3. NETWORK SEGMENTATION
   - VLANs (logical separation)
   - DMZ (demilitarized zone)
   - Micro-segmentation

4. MONITORING & DETECTION
   - SIEM (Security Event Management)
   - Network traffic analysis
   - Log management

5. ENCRYPTION
   - TLS/SSL (data in transit)
   - VPN tunnels
   - Protocol encryption`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Network Threats</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Threat</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Defense</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">DoS/DDoS</td>
            <td className="p-3 border">Overwhelm resources</td>
            <td className="p-3 border">Rate limiting, DDoS protection</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Man-in-the-Middle</td>
            <td className="p-3 border">Intercept communications</td>
            <td className="p-3 border">Encryption, certificates</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Packet Sniffing</td>
            <td className="p-3 border">Capture network traffic</td>
            <td className="p-3 border">Encryption, switched networks</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Port Scanning</td>
            <td className="p-3 border">Discover open services</td>
            <td className="p-3 border">Firewall, port blocking</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ARP Spoofing</td>
            <td className="p-3 border">Redirect traffic</td>
            <td className="p-3 border">Static ARP, ARP inspection</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Network Security Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Typical Network Security Architecture:

              INTERNET
                 |
           [DDoS Mitigation]
                 |
           [Firewall/Router]
                 |
    +------------+------------+
    |            |            |
  [DMZ]     [Internal]   [Management]
    |       Network       Network
    |            |            |
 Web/Mail   Workstations   Admin
 Servers    Servers        Systems
                 |
           [IDS/IPS]
                 |
           [Core Switch]
                 |
    +------+------+------+
    |      |      |      |
  [VLAN] [VLAN] [VLAN] [VLAN]
   HR    Finance  Dev    IT`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Best Practices</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Defense in Depth:</strong> Multiple layers of security controls</li>
      <li><strong>Least Privilege:</strong> Minimum necessary access rights</li>
      <li><strong>Network Segmentation:</strong> Isolate sensitive systems</li>
      <li><strong>Regular Updates:</strong> Patch systems and firmware</li>
      <li><strong>Continuous Monitoring:</strong> Real-time threat detection</li>
      <li><strong>Incident Response:</strong> Prepared response plans</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Network security protects data in transit and network resources</li>
        <li>Combines physical, technical, and administrative controls</li>
        <li>Defense in depth provides multiple layers of protection</li>
        <li>Continuous monitoring is essential for threat detection</li>
        <li>Security must adapt to evolving threats</li>
        <li>Zero Trust architecture assumes no implicit trust</li>
      </ul>
    </div>
  </div>
);

export default NetworkSecurityIntro;
