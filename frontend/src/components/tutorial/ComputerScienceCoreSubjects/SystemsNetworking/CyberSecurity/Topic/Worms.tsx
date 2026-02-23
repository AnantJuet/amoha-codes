import React from "react";

const Worms: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Computer Worms
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A computer worm is a standalone malware program that replicates itself to spread to
      other computers. Unlike viruses, worms do not need to attach to host programs and can
      propagate automatically through networks without user interaction. This self-propagating
      nature makes worms particularly dangerous for rapid, widespread infections.
    </p>

    <h2 className="text-3xl font-bold mt-8">Worm vs Virus</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">Worm</th>
            <th className="p-3 border">Virus</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Host Required</td>
            <td className="p-3 border">No (standalone)</td>
            <td className="p-3 border">Yes (attaches to files)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Propagation</td>
            <td className="p-3 border">Automatic via network</td>
            <td className="p-3 border">User action required</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Spread Speed</td>
            <td className="p-3 border">Very fast</td>
            <td className="p-3 border">Slower</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Primary Damage</td>
            <td className="p-3 border">Network/bandwidth</td>
            <td className="p-3 border">File/system corruption</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Self-Contained</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Worm Propagation Methods</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Worm Spread Mechanisms:

1. NETWORK EXPLOITATION
   - Scans for vulnerable systems
   - Exploits unpatched services
   - Example: EternalBlue (SMB vulnerability)

2. EMAIL PROPAGATION
   - Sends itself as attachment
   - Uses contact list for targets
   - Example: ILOVEYOU, Melissa

3. INSTANT MESSAGING
   - Sends malicious links
   - Spreads through chat networks
   - Example: Bropia, Kelvir

4. FILE SHARING
   - Copies to shared folders
   - Disguised as popular content
   - P2P networks common vector

5. REMOVABLE MEDIA
   - USB autorun exploitation
   - Spreads via thumb drives
   - Example: Conficker

Worm Lifecycle:
[Scan] --> [Exploit] --> [Install] --> [Propagate]
   |                                        |
   +----------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Notable Worms in History</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Historic Worm Attacks:

MORRIS WORM (1988)
- First major Internet worm
- Infected ~6,000 computers (10% of Internet)
- Exploited Unix sendmail, fingerd, rsh
- Led to creation of CERT

CODE RED (2001)
- Exploited IIS web server buffer overflow
- Infected 359,000 hosts in 14 hours
- Defaced websites, launched DDoS

SLAMMER (2003)
- Fastest spreading worm ever
- 75,000 victims in 10 minutes
- Exploited SQL Server vulnerability
- Just 376 bytes of code

CONFICKER (2008-2009)
- Infected 9-15 million computers
- Sophisticated update mechanism
- Domain generation algorithm (DGA)
- Still active in some networks

WANNACRY (2017)
- Ransomware worm (hybrid)
- EternalBlue exploit (NSA leaked)
- 230,000 computers in 150 countries
- $4 billion in damages`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Worm Components</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Typical Worm Architecture:

+------------------+
| TARGET SELECTION |
| - Random IP scan |
| - Sequential scan|
| - Hitlist        |
| - Local network  |
+--------+---------+
         |
+--------v---------+
| EXPLOIT ENGINE   |
| - Vulnerability  |
|   exploitation   |
| - Credential     |
|   attacks        |
+--------+---------+
         |
+--------v---------+
| PROPAGATION      |
| - Copy payload   |
| - Execute remote |
| - Establish      |
|   persistence    |
+--------+---------+
         |
+--------v---------+
| PAYLOAD          |
| - Backdoor       |
| - DDoS agent     |
| - Data theft     |
| - Ransomware     |
+------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Worm Defense Strategies</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Patch Management:</strong> Keep systems updated to close vulnerabilities</li>
      <li><strong>Network Segmentation:</strong> Limit lateral movement</li>
      <li><strong>Firewall Rules:</strong> Block unnecessary ports and services</li>
      <li><strong>Email Filtering:</strong> Scan attachments and block malicious content</li>
      <li><strong>Disable Autorun:</strong> Prevent USB-based propagation</li>
      <li><strong>IDS/IPS:</strong> Detect and block worm traffic patterns</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Worms are self-replicating and spread without user action</li>
        <li>They exploit network vulnerabilities for propagation</li>
        <li>Worms can spread extremely fast across networks</li>
        <li>Patching is the primary defense against network worms</li>
        <li>Network segmentation limits worm spread within organizations</li>
        <li>Modern worms often carry additional payloads like ransomware</li>
      </ul>
    </div>
  </div>
);

export default Worms;
