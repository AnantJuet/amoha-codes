import React from "react";

const IDS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Intrusion Detection Systems (IDS)
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      An Intrusion Detection System (IDS) is a security tool that monitors network traffic or
      system activities for malicious activities or policy violations. Unlike firewalls that
      block traffic, IDS primarily detects and alerts on suspicious activity, providing visibility
      into potential security incidents.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">IDS vs IPS</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Aspect</th>
            <th className="border border-gray-300 px-4 py-2 text-left">IDS (Detection)</th>
            <th className="border border-gray-300 px-4 py-2 text-left">IPS (Prevention)</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Action</td>
            <td className="border border-gray-300 px-4 py-2">Detects and alerts</td>
            <td className="border border-gray-300 px-4 py-2">Detects and blocks</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Deployment</td>
            <td className="border border-gray-300 px-4 py-2">Passive (monitors copy)</td>
            <td className="border border-gray-300 px-4 py-2">Inline (in traffic path)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Latency</td>
            <td className="border border-gray-300 px-4 py-2">No impact</td>
            <td className="border border-gray-300 px-4 py-2">Adds latency</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">False Positive Impact</td>
            <td className="border border-gray-300 px-4 py-2">Alert noise</td>
            <td className="border border-gray-300 px-4 py-2">Blocks legitimate traffic</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Types of IDS</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-bold mb-2 dark:text-white">Network-based IDS (NIDS)</h3>
        <p className="dark:text-gray-300 text-sm mb-2">
          Monitors network traffic at strategic points (switches, routers).
        </p>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>Analyzes packet headers and payloads</li>
          <li>Detects network-level attacks</li>
          <li>Can monitor entire network segments</li>
          <li>Examples: Snort, Suricata, Zeek</li>
        </ul>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">Host-based IDS (HIDS)</h3>
        <p className="dark:text-gray-300 text-sm mb-2">
          Monitors individual host systems for suspicious activities.
        </p>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>Analyzes system logs, file changes</li>
          <li>Detects local attacks and malware</li>
          <li>Can see encrypted traffic post-decryption</li>
          <li>Examples: OSSEC, Tripwire, AIDE</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Detection Methods</h2>
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">1. Signature-based Detection</h3>
        <p className="dark:text-gray-300 text-sm">
          Compares traffic against a database of known attack patterns (signatures).
        </p>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div>
            <p className="font-semibold text-green-600 dark:text-green-400 text-sm">Pros:</p>
            <ul className="list-disc list-inside text-sm dark:text-gray-300">
              <li>High accuracy for known attacks</li>
              <li>Fast detection</li>
              <li>Low false positives</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-red-600 dark:text-red-400 text-sm">Cons:</p>
            <ul className="list-disc list-inside text-sm dark:text-gray-300">
              <li>Cannot detect zero-day attacks</li>
              <li>Requires regular updates</li>
              <li>Can be evaded with obfuscation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">2. Anomaly-based Detection</h3>
        <p className="dark:text-gray-300 text-sm">
          Establishes baseline of normal behavior and alerts on deviations.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div>
            <p className="font-semibold text-green-600 dark:text-green-400 text-sm">Pros:</p>
            <ul className="list-disc list-inside text-sm dark:text-gray-300">
              <li>Can detect unknown attacks</li>
              <li>Detects zero-day threats</li>
              <li>Adapts to environment</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-red-600 dark:text-red-400 text-sm">Cons:</p>
            <ul className="list-disc list-inside text-sm dark:text-gray-300">
              <li>Higher false positive rate</li>
              <li>Requires training period</li>
              <li>Baseline can be poisoned</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">3. Stateful Protocol Analysis</h3>
        <p className="dark:text-gray-300 text-sm">
          Compares observed events against predetermined profiles of normal protocol behavior.
          Understands and tracks protocol states.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">IDS Architecture</h2>
    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
      <div className="text-center dark:text-gray-300">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded">
            <p className="font-bold">Sensors</p>
            <p className="text-sm">Collect data</p>
          </div>
          <span className="text-2xl">→</span>
          <div className="bg-green-100 dark:bg-green-800 p-3 rounded">
            <p className="font-bold">Analyzers</p>
            <p className="text-sm">Process & detect</p>
          </div>
          <span className="text-2xl">→</span>
          <div className="bg-orange-100 dark:bg-orange-800 p-3 rounded">
            <p className="font-bold">Management</p>
            <p className="text-sm">Console & alerts</p>
          </div>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Common IDS Tools</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Tool</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Snort</td>
            <td className="border border-gray-300 px-4 py-2">NIDS/NIPS</td>
            <td className="border border-gray-300 px-4 py-2">Open-source, rule-based detection</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Suricata</td>
            <td className="border border-gray-300 px-4 py-2">NIDS/NIPS</td>
            <td className="border border-gray-300 px-4 py-2">Multi-threaded, high-performance</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Zeek (Bro)</td>
            <td className="border border-gray-300 px-4 py-2">NIDS</td>
            <td className="border border-gray-300 px-4 py-2">Network analysis framework</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">OSSEC</td>
            <td className="border border-gray-300 px-4 py-2">HIDS</td>
            <td className="border border-gray-300 px-4 py-2">Log analysis, file integrity</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Challenges</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li><strong>False Positives:</strong> Legitimate traffic flagged as malicious</li>
        <li><strong>False Negatives:</strong> Actual attacks missed by the system</li>
        <li><strong>Encrypted Traffic:</strong> Cannot inspect TLS-encrypted content</li>
        <li><strong>High Volume:</strong> Managing alerts in high-traffic environments</li>
        <li><strong>Evasion Techniques:</strong> Attackers can fragment or obfuscate attacks</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>IDS detects and alerts; IPS detects and blocks threats</li>
        <li>NIDS monitors network traffic; HIDS monitors host systems</li>
        <li>Signature-based detection is accurate but cannot find zero-day attacks</li>
        <li>Anomaly-based detection can find new threats but has more false positives</li>
        <li>Modern security requires both IDS/IPS alongside other security controls</li>
      </ul>
    </div>
  </div>
);

export default IDS;
