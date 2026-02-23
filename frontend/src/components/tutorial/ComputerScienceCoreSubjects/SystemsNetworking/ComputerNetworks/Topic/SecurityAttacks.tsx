import React from "react";

const SecurityAttacks: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Security Attacks
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      Security attacks are deliberate actions aimed at compromising the security of information systems.
      Understanding different attack types is crucial for implementing effective defense mechanisms.
      These attacks can target confidentiality, integrity, or availability of network resources.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Classification of Attacks</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Attack Type</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Target</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Passive</td>
            <td className="border border-gray-300 px-4 py-2">Eavesdropping, Traffic Analysis</td>
            <td className="border border-gray-300 px-4 py-2">Confidentiality</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Active</td>
            <td className="border border-gray-300 px-4 py-2">Modification, Fabrication</td>
            <td className="border border-gray-300 px-4 py-2">Integrity</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Active</td>
            <td className="border border-gray-300 px-4 py-2">DoS, DDoS</td>
            <td className="border border-gray-300 px-4 py-2">Availability</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Common Attack Types</h2>

    <div className="space-y-4">
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h3 className="font-bold text-lg mb-2 dark:text-white">1. Man-in-the-Middle (MITM) Attack</h3>
        <p className="dark:text-gray-300">
          Attacker intercepts communication between two parties, potentially altering or stealing data.
          Can occur through ARP spoofing, DNS spoofing, or session hijacking.
        </p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h3 className="font-bold text-lg mb-2 dark:text-white">2. Denial of Service (DoS)</h3>
        <p className="dark:text-gray-300">
          Overwhelming a system with traffic or requests to make it unavailable.
          DDoS uses multiple sources, making it harder to mitigate.
        </p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h3 className="font-bold text-lg mb-2 dark:text-white">3. Phishing</h3>
        <p className="dark:text-gray-300">
          Social engineering attack using fraudulent communications to steal sensitive information.
          Variants include spear phishing (targeted) and whaling (executives).
        </p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h3 className="font-bold text-lg mb-2 dark:text-white">4. SQL Injection</h3>
        <p className="dark:text-gray-300">
          Inserting malicious SQL code into application queries to manipulate databases.
          Can lead to data theft, modification, or deletion.
        </p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h3 className="font-bold text-lg mb-2 dark:text-white">5. Cross-Site Scripting (XSS)</h3>
        <p className="dark:text-gray-300">
          Injecting malicious scripts into web pages viewed by other users.
          Can steal session cookies, credentials, or spread malware.
        </p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h3 className="font-bold text-lg mb-2 dark:text-white">6. Malware</h3>
        <p className="dark:text-gray-300">
          Malicious software including viruses, worms, trojans, ransomware, and spyware.
          Can spread through email, downloads, or network vulnerabilities.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Network-Specific Attacks</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Attack</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Layer</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">ARP Spoofing</td>
            <td className="border border-gray-300 px-4 py-2">Data Link</td>
            <td className="border border-gray-300 px-4 py-2">Sending fake ARP messages to link attacker's MAC to legitimate IP</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">IP Spoofing</td>
            <td className="border border-gray-300 px-4 py-2">Network</td>
            <td className="border border-gray-300 px-4 py-2">Forging source IP addresses in packets</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">SYN Flood</td>
            <td className="border border-gray-300 px-4 py-2">Transport</td>
            <td className="border border-gray-300 px-4 py-2">Exhausting server resources with half-open connections</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">DNS Poisoning</td>
            <td className="border border-gray-300 px-4 py-2">Application</td>
            <td className="border border-gray-300 px-4 py-2">Corrupting DNS cache to redirect traffic</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Session Hijacking</td>
            <td className="border border-gray-300 px-4 py-2">Application</td>
            <td className="border border-gray-300 px-4 py-2">Taking over an authenticated user session</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Attack Prevention Strategies</h2>
    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li>Implement strong authentication and access controls</li>
        <li>Use encryption for data in transit and at rest</li>
        <li>Keep systems patched and updated</li>
        <li>Deploy firewalls and intrusion detection systems</li>
        <li>Conduct regular security audits and penetration testing</li>
        <li>Train users on security awareness</li>
        <li>Implement network segmentation</li>
        <li>Use secure coding practices</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>Security attacks can be classified as passive (monitoring) or active (modification)</li>
        <li>Different attacks target different security goals: confidentiality, integrity, or availability</li>
        <li>Network attacks can occur at any layer of the protocol stack</li>
        <li>Defense requires a multi-layered approach combining technology and user awareness</li>
        <li>Understanding attack methods is essential for implementing effective countermeasures</li>
      </ul>
    </div>
  </div>
);

export default SecurityAttacks;
