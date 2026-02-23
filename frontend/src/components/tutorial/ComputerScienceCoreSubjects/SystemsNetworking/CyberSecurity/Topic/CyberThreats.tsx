import React from "react";

const CyberThreats: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Cyber Threats
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Cyber threats are malicious activities that seek to damage, steal, or disrupt digital systems,
      networks, and data. Understanding these threats is essential for implementing effective security
      measures and protecting organizational assets.
    </p>

    <h2 className="text-3xl font-bold mt-8">Categories of Cyber Threats</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Cyber Threat Landscape:

+--------------------------------------------------+
|              THREAT CATEGORIES                   |
+--------------------------------------------------+
|                                                  |
|  +------------+  +------------+  +------------+  |
|  | Malware    |  | Social     |  | Network    |  |
|  | Attacks    |  | Engineering|  | Attacks    |  |
|  +------------+  +------------+  +------------+  |
|                                                  |
|  +------------+  +------------+  +------------+  |
|  | Web App    |  | Insider    |  | Advanced   |  |
|  | Attacks    |  | Threats    |  | Persistent |  |
|  +------------+  +------------+  +------------+  |
|                                                  |
+--------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Malware Threats</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Impact</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Viruses</td>
            <td className="p-3 border">Self-replicating code that attaches to programs</td>
            <td className="p-3 border">File corruption, system damage</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Worms</td>
            <td className="p-3 border">Self-propagating malware spreading via networks</td>
            <td className="p-3 border">Network congestion, resource exhaustion</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Trojans</td>
            <td className="p-3 border">Disguised as legitimate software</td>
            <td className="p-3 border">Backdoor access, data theft</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Ransomware</td>
            <td className="p-3 border">Encrypts data and demands payment</td>
            <td className="p-3 border">Financial loss, operational disruption</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Spyware</td>
            <td className="p-3 border">Secretly monitors user activity</td>
            <td className="p-3 border">Privacy breach, credential theft</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Social Engineering Threats</h2>
    <p className="leading-relaxed">
      Social engineering exploits human psychology rather than technical vulnerabilities to gain
      unauthorized access or information.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Social Engineering Attack Flow:

  Attacker         Target
     |                |
     | 1. Research    |
     |--------------->|
     |                |
     | 2. Build Trust |
     |--------------->|
     |                |
     | 3. Manipulate  |
     |--------------->|
     |                |
     | 4. Execute     |
     |<---------------|
     |                |

Common Types:
- Phishing: Fraudulent emails/websites
- Spear Phishing: Targeted attacks
- Whaling: Executive-level attacks
- Pretexting: Fabricated scenarios
- Baiting: Malware via physical media
- Quid Pro Quo: Favors for information`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Network-Based Threats</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Attack Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Prevention</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">DoS/DDoS</td>
            <td className="p-3 border">Overwhelms resources to deny service</td>
            <td className="p-3 border">Traffic filtering, CDN, rate limiting</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Man-in-the-Middle</td>
            <td className="p-3 border">Intercepts communication between parties</td>
            <td className="p-3 border">Encryption, certificate pinning</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ARP Spoofing</td>
            <td className="p-3 border">Redirects traffic via forged ARP messages</td>
            <td className="p-3 border">Static ARP entries, ARP inspection</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DNS Poisoning</td>
            <td className="p-3 border">Corrupts DNS cache with false records</td>
            <td className="p-3 border">DNSSEC, secure DNS servers</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Web Application Threats</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>SQL Injection:</strong> Malicious SQL queries to manipulate databases</li>
      <li><strong>Cross-Site Scripting (XSS):</strong> Injecting malicious scripts into web pages</li>
      <li><strong>Cross-Site Request Forgery (CSRF):</strong> Forging requests on behalf of users</li>
      <li><strong>Security Misconfiguration:</strong> Improper security settings and defaults</li>
      <li><strong>Broken Authentication:</strong> Weak session management and credentials</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">5. Advanced Persistent Threats (APTs)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`APT Attack Lifecycle:

1. Initial Compromise
   - Spear phishing, zero-day exploits

2. Establish Foothold
   - Install backdoors, malware

3. Escalate Privileges
   - Gain admin/root access

4. Internal Reconnaissance
   - Map network, identify targets

5. Move Laterally
   - Spread to other systems

6. Maintain Presence
   - Persistent access mechanisms

7. Complete Mission
   - Data exfiltration, sabotage

8. Cover Tracks
   - Remove evidence, logs`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">6. Insider Threats</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Mitigation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Malicious Insider</td>
            <td className="p-3 border">Intentional harm by employees</td>
            <td className="p-3 border">Monitoring, access controls</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Negligent Insider</td>
            <td className="p-3 border">Unintentional security breaches</td>
            <td className="p-3 border">Training, awareness programs</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Compromised Insider</td>
            <td className="p-3 border">Credentials stolen by external attackers</td>
            <td className="p-3 border">MFA, anomaly detection</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Cyber threats constantly evolve; stay updated on new attack vectors</li>
        <li>Defense in depth combines multiple security layers for protection</li>
        <li>Human factors are often the weakest link in security</li>
        <li>Regular security assessments help identify vulnerabilities</li>
        <li>Incident response planning is essential for threat mitigation</li>
        <li>Zero Trust architecture assumes no implicit trust</li>
      </ul>
    </div>
  </div>
);

export default CyberThreats;
