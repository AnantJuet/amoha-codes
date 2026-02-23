import React from "react";

const IDSvsIPS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      IDS vs IPS
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      While Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS) both monitor
      for malicious activity, they differ fundamentally in their response capabilities. Understanding
      these differences helps in selecting the right solution for your security needs.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Differences</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`IDS vs IPS Comparison:

IDS (Intrusion Detection System):
+------------------+
| Network Traffic  |
+------------------+
        |
   Copy to IDS (passive)
        |
        v
+------------------+
|      IDS         |---> ALERT ---> Security Team
| (Out-of-band)    |              investigates
+------------------+

Traffic continues unaffected


IPS (Intrusion Prevention System):
+------------------+
| Network Traffic  |
+------------------+
        |
   Through IPS (inline)
        |
        v
+------------------+
|      IPS         |---> BLOCK/ALLOW
| (Inline)         |
+------------------+
        |
        v
Only clean traffic passes`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detailed Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">IDS</th>
            <th className="p-3 border">IPS</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Primary Function</td>
            <td className="p-3 border">Detect and alert</td>
            <td className="p-3 border">Detect and prevent</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Deployment</td>
            <td className="p-3 border">Out-of-band (passive)</td>
            <td className="p-3 border">Inline (active)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Response</td>
            <td className="p-3 border">Alerts only</td>
            <td className="p-3 border">Blocks automatically</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Network Impact</td>
            <td className="p-3 border">No latency added</td>
            <td className="p-3 border">May add latency</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Failure Mode</td>
            <td className="p-3 border">No traffic impact</td>
            <td className="p-3 border">Can block all traffic</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">False Positive Impact</td>
            <td className="p-3 border">Alert noise</td>
            <td className="p-3 border">Blocks legitimate traffic</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Deployment Architectures</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`IDS Deployment:

    Internet
        |
    [Firewall]
        |
    [Switch]----[SPAN Port]----[IDS]
        |                         |
    Network                   Alerts
                            to SIEM


IPS Deployment:

    Internet
        |
    [Firewall]
        |
       [IPS]  <-- Inline, all traffic passes through
        |
    [Switch]
        |
    Network`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use Each</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Use IDS When:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>You need visibility without blocking</li>
          <li>Learning about attack patterns</li>
          <li>Network cannot tolerate latency</li>
          <li>Starting security program</li>
          <li>Compliance monitoring required</li>
        </ul>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Use IPS When:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Need automatic threat blocking</li>
          <li>Protecting critical assets</li>
          <li>Mature security program</li>
          <li>Properly tuned to reduce false positives</li>
          <li>High-value targets</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Combined Approach</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Best Practice: Use Both

    Internet
        |
    [Firewall]
        |
       [IPS]  <-- Block known attacks
        |
    [Switch]----[IDS]  <-- Monitor for anomalies
        |           |
    Network      SIEM
                   |
              Security Team

Benefits:
1. IPS blocks known attacks automatically
2. IDS provides deeper analysis and monitoring
3. Reduces alert fatigue on IPS
4. IDS catches what IPS misses
5. Better overall security posture`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Modern Convergence</h2>
    <p className="leading-relaxed">
      Today, many solutions combine IDS and IPS capabilities:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>NGFW:</strong> Next-Generation Firewalls include IPS functionality</li>
      <li><strong>UTM:</strong> Unified Threat Management combines multiple security functions</li>
      <li><strong>XDR:</strong> Extended Detection and Response provides comprehensive protection</li>
      <li><strong>SIEM:</strong> Correlates alerts from both IDS and IPS</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>IDS detects and alerts; IPS detects and blocks</li>
        <li>IDS is passive (out-of-band); IPS is active (inline)</li>
        <li>IPS can cause service disruption from false positives</li>
        <li>Use IDS for monitoring, IPS for protection</li>
        <li>Best practice is to use both in a layered approach</li>
        <li>Modern NGFWs often include both capabilities</li>
      </ul>
    </div>
  </div>
);

export default IDSvsIPS;
