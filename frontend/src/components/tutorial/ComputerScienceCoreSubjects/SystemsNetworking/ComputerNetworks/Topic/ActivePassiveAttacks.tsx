import React from "react";

const ActivePassiveAttacks: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Active vs Passive Attacks
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      Network security attacks are broadly categorized into two types: passive attacks and active attacks.
      Understanding the distinction between these categories is fundamental to implementing appropriate
      security measures and detection mechanisms.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Passive Attacks</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <p className="dark:text-gray-300 mb-4">
        Passive attacks involve monitoring or eavesdropping on network transmissions without altering the data.
        The attacker's goal is to obtain information without being detected. These attacks are difficult to
        detect because they don't modify data or affect system operations.
      </p>
      <h3 className="font-bold mt-4 mb-2 dark:text-white">Types of Passive Attacks:</h3>
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li><strong>Eavesdropping:</strong> Intercepting and reading transmitted messages</li>
        <li><strong>Traffic Analysis:</strong> Observing patterns in communication (frequency, timing, size)</li>
        <li><strong>Packet Sniffing:</strong> Capturing network packets for analysis</li>
        <li><strong>Wiretapping:</strong> Monitoring communications on network cables</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Active Attacks</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
      <p className="dark:text-gray-300 mb-4">
        Active attacks involve modifying data streams or creating false streams. These attacks directly
        impact system operations and can be detected, though they may cause significant damage before detection.
      </p>
      <h3 className="font-bold mt-4 mb-2 dark:text-white">Types of Active Attacks:</h3>
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li><strong>Masquerade:</strong> Pretending to be a legitimate entity</li>
        <li><strong>Replay:</strong> Capturing and retransmitting data to gain unauthorized access</li>
        <li><strong>Modification:</strong> Altering legitimate messages in transit</li>
        <li><strong>Denial of Service:</strong> Preventing legitimate users from accessing resources</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Comparison Table</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Aspect</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Passive Attacks</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Active Attacks</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">Data Modification</td>
            <td className="border border-gray-300 px-4 py-2">No modification</td>
            <td className="border border-gray-300 px-4 py-2">Data is modified or fabricated</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">Detection</td>
            <td className="border border-gray-300 px-4 py-2">Difficult to detect</td>
            <td className="border border-gray-300 px-4 py-2">Easier to detect</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">Prevention</td>
            <td className="border border-gray-300 px-4 py-2">Emphasis on prevention (encryption)</td>
            <td className="border border-gray-300 px-4 py-2">Emphasis on detection and recovery</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">Target</td>
            <td className="border border-gray-300 px-4 py-2">Confidentiality</td>
            <td className="border border-gray-300 px-4 py-2">Integrity and Availability</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">System Impact</td>
            <td className="border border-gray-300 px-4 py-2">No direct impact</td>
            <td className="border border-gray-300 px-4 py-2">Direct system impact</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">Examples</td>
            <td className="border border-gray-300 px-4 py-2">Sniffing, Traffic analysis</td>
            <td className="border border-gray-300 px-4 py-2">DoS, MITM, Spoofing</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Visual Representation</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold text-center mb-4 dark:text-white">Passive Attack Flow</h3>
        <div className="text-center dark:text-gray-300">
          <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded mb-2">Sender</div>
          <div className="text-2xl mb-2">↓</div>
          <div className="bg-yellow-100 dark:bg-yellow-800 p-2 rounded mb-2">Attacker (Observes)</div>
          <div className="text-2xl mb-2">↓</div>
          <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded">Receiver</div>
          <p className="text-sm mt-2 italic">Data flows normally; attacker only monitors</p>
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold text-center mb-4 dark:text-white">Active Attack Flow</h3>
        <div className="text-center dark:text-gray-300">
          <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded mb-2">Sender</div>
          <div className="text-2xl mb-2">↓</div>
          <div className="bg-red-100 dark:bg-red-800 p-2 rounded mb-2">Attacker (Modifies/Blocks)</div>
          <div className="text-2xl mb-2">↓</div>
          <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded">Receiver</div>
          <p className="text-sm mt-2 italic">Data is altered, delayed, or blocked</p>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Defense Mechanisms</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">Against Passive Attacks</h3>
        <ul className="list-disc list-inside dark:text-gray-300">
          <li>Strong encryption (AES, RSA)</li>
          <li>Secure protocols (TLS/SSL)</li>
          <li>VPNs for secure tunneling</li>
          <li>Traffic padding</li>
          <li>Secure key exchange</li>
        </ul>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">Against Active Attacks</h3>
        <ul className="list-disc list-inside dark:text-gray-300">
          <li>Intrusion Detection Systems</li>
          <li>Digital signatures</li>
          <li>Message authentication codes</li>
          <li>Firewalls and access controls</li>
          <li>Anti-replay mechanisms</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>Passive attacks monitor without modifying data; active attacks alter or disrupt communication</li>
        <li>Passive attacks are harder to detect but easier to prevent through encryption</li>
        <li>Active attacks are detectable but require rapid response mechanisms</li>
        <li>Both attack types require different defensive strategies</li>
        <li>A comprehensive security approach must address both passive and active threats</li>
      </ul>
    </div>
  </div>
);

export default ActivePassiveAttacks;
