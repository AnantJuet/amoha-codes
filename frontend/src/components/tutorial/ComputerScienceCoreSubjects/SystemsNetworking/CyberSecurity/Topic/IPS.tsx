import React from "react";

const IPS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Intrusion Prevention Systems (IPS)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An Intrusion Prevention System (IPS) is a network security technology that monitors network
      traffic for malicious activity and can automatically take action to prevent attacks in
      real-time. Unlike IDS, IPS actively blocks threats.
    </p>

    <h2 className="text-3xl font-bold mt-8">How IPS Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`IPS Inline Architecture:

External Network
       |
       v
+------------------+
|       IPS        |  <-- Traffic MUST pass through
| +------------+   |
| | Detection  |   |
| | Engine     |   |
| +------------+   |
|       |          |
| +------------+   |
| | Prevention |   |
| | Actions    |   |
| +------------+   |
+------------------+
       |
       v
Internal Network

IPS Actions:
1. ALLOW  - Let traffic through
2. BLOCK  - Drop malicious packets
3. RESET  - Terminate connection
4. ALERT  - Log and continue
5. MODIFY - Sanitize malicious content`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of IPS</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Deployment</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Network IPS (NIPS)</td>
            <td className="p-3 border">Monitors network segments</td>
            <td className="p-3 border">Inline at network perimeter</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Host IPS (HIPS)</td>
            <td className="p-3 border">Protects individual hosts</td>
            <td className="p-3 border">Software on endpoints</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Wireless IPS (WIPS)</td>
            <td className="p-3 border">Protects wireless networks</td>
            <td className="p-3 border">Monitors Wi-Fi traffic</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Network Behavior Analysis</td>
            <td className="p-3 border">Detects anomalies in traffic</td>
            <td className="p-3 border">Enterprise networks</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detection Techniques</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`IPS Detection Methods:

1. SIGNATURE-BASED
   - Pattern matching against known attacks
   - Fast and accurate for known threats
   - Requires regular signature updates

2. ANOMALY-BASED
   - Baseline normal traffic patterns
   - Detect deviations from normal
   - Can catch zero-day attacks

3. POLICY-BASED
   - Rules defined by administrators
   - Block specific protocols, ports, IPs

4. PROTOCOL ANALYSIS
   - Validate protocol compliance
   - Detect protocol-based attacks

5. HEURISTIC/BEHAVIORAL
   - Identify suspicious patterns
   - Machine learning based detection`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">IPS Deployment</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`IPS Placement (Inline):

         Internet
             |
        [Firewall]
             |
         [IPS] <---- Must be inline to block
             |
    +--------+--------+
    |        |        |
  [DMZ]  [Internal] [Server]

High Availability Deployment:
         Internet
             |
        [Firewall]
             |
    [IPS-1]---[IPS-2]  (Active/Passive)
             |
    Internal Network

Note: IPS failure must not block traffic
      (fail-open vs fail-close decision)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Prevention Actions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Action</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Drop Packet</td>
            <td className="p-3 border">Silently discard malicious packets</td>
            <td className="p-3 border">Most common action</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Reset Connection</td>
            <td className="p-3 border">Send TCP RST to both parties</td>
            <td className="p-3 border">Terminate attacks mid-stream</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Block Source IP</td>
            <td className="p-3 border">Blacklist attacking IP address</td>
            <td className="p-3 border">Persistent attackers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Quarantine</td>
            <td className="p-3 border">Isolate infected hosts</td>
            <td className="p-3 border">Internal threats</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Challenges</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>False Positives:</strong> Blocking legitimate traffic</li>
        <li><strong>Performance Impact:</strong> Latency from deep inspection</li>
        <li><strong>Encrypted Traffic:</strong> Cannot inspect without decryption</li>
        <li><strong>Zero-Days:</strong> New attacks without signatures</li>
        <li><strong>Evasion Techniques:</strong> Attackers fragmenting or encoding</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>IPS actively blocks threats, unlike IDS which only alerts</li>
        <li>Must be deployed inline to prevent attacks</li>
        <li>Tuning is critical to minimize false positives</li>
        <li>High availability deployment prevents single point of failure</li>
        <li>Regular signature updates are essential</li>
        <li>Combine with other security layers for defense in depth</li>
      </ul>
    </div>
  </div>
);

export default IPS;
