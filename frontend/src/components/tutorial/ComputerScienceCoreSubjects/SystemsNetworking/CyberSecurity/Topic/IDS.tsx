import React from "react";

const IDS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Intrusion Detection Systems (IDS)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An Intrusion Detection System (IDS) is a security technology that monitors network traffic
      or system activities for malicious behavior or policy violations. It alerts security teams
      when suspicious activity is detected.
    </p>

    <h2 className="text-3xl font-bold mt-8">How IDS Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`IDS Architecture:

Network Traffic
      |
      v
+------------------+
|  Data Collection |  Sensors/Agents
+------------------+
      |
      v
+------------------+
|    Analysis      |  Detection Engine
|  - Signatures    |
|  - Anomalies     |
|  - Heuristics    |
+------------------+
      |
      v
+------------------+
|   Alert/Report   |  Console/SIEM
+------------------+
      |
      v
Security Team Reviews

Note: IDS only DETECTS and ALERTS
      It does NOT block traffic`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of IDS</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">NIDS</td>
            <td className="p-3 border">Network-based, monitors network traffic</td>
            <td className="p-3 border">Perimeter monitoring</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">HIDS</td>
            <td className="p-3 border">Host-based, monitors system activities</td>
            <td className="p-3 border">Server protection</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hybrid</td>
            <td className="p-3 border">Combines NIDS and HIDS</td>
            <td className="p-3 border">Comprehensive coverage</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detection Methods</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. SIGNATURE-BASED DETECTION
   - Matches traffic against known attack patterns
   - Like antivirus signatures
   - Pros: Accurate for known attacks, low false positives
   - Cons: Cannot detect new/unknown attacks (zero-days)

   Example Signature:
   alert tcp any any -> any 80 (content:"cmd.exe";
   msg:"Web attack"; sid:1000001;)

2. ANOMALY-BASED DETECTION
   - Learns normal behavior baseline
   - Alerts on deviations from normal
   - Pros: Can detect unknown attacks
   - Cons: Higher false positive rate

   Normal: 100 logins/hour
   Detected: 5000 logins/hour = ALERT!

3. HEURISTIC/BEHAVIOR-BASED
   - Rules based on suspicious behavior patterns
   - Combines signature and anomaly approaches
   - Example: Port scan followed by connection attempts`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">NIDS Deployment</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NIDS Placement:

         Internet
             |
        [Firewall]
             |
        [NIDS Sensor] <-- Monitor all traffic
             |
    +--------+--------+
    |        |        |
  [DMZ]  [Internal] [Management]

Sensor Deployment Methods:
1. SPAN Port - Mirror traffic to sensor
2. Network TAP - Physical copy of traffic
3. Inline - Traffic passes through sensor`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">HIDS vs NIDS</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">NIDS</th>
            <th className="p-3 border">HIDS</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Monitors</td>
            <td className="p-3 border">Network traffic</td>
            <td className="p-3 border">Host activities</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Deployment</td>
            <td className="p-3 border">Network segments</td>
            <td className="p-3 border">Individual hosts</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Encrypted Traffic</td>
            <td className="p-3 border">Cannot inspect</td>
            <td className="p-3 border">Can see decrypted</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Resource Impact</td>
            <td className="p-3 border">Dedicated appliance</td>
            <td className="p-3 border">Uses host resources</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Popular IDS Solutions</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Snort:</strong> Open-source NIDS, signature-based</li>
      <li><strong>Suricata:</strong> Open-source, multi-threaded IDS/IPS</li>
      <li><strong>OSSEC:</strong> Open-source HIDS</li>
      <li><strong>Zeek (Bro):</strong> Network analysis framework</li>
      <li><strong>Security Onion:</strong> Linux distro with multiple IDS tools</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>IDS detects and alerts but does not block attacks</li>
        <li>NIDS monitors network traffic, HIDS monitors hosts</li>
        <li>Signature-based is accurate but misses zero-days</li>
        <li>Anomaly-based can detect unknown attacks but has more false positives</li>
        <li>Proper placement and tuning are critical for effectiveness</li>
        <li>Alerts must be monitored and investigated promptly</li>
      </ul>
    </div>
  </div>
);

export default IDS;
