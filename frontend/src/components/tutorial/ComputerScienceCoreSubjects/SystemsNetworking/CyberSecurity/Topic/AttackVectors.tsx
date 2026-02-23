import React from "react";

const AttackVectors: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Attack Vectors
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An attack vector is the path or method that an attacker uses to gain unauthorized access to a
      system, network, or application. Understanding attack vectors is crucial for implementing
      effective security controls and protecting against cyber threats.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is an Attack Vector?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Attack Vector Concept:

  Attacker                    Target System
     |                              |
     |    +-------------------+     |
     |--->| Attack Vector     |---->|
     |    +-------------------+     |
     |    | - Email           |     |
     |    | - Web Application |     |
     |    | - Network         |     |
     |    | - Physical Access |     |
     |    | - Social Media    |     |
     |    +-------------------+     |

Attack Vector = Path + Method + Vulnerability`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Attack Vectors</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Vector</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Common Attacks</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Email</td>
            <td className="p-3 border">Most common vector for initial access</td>
            <td className="p-3 border">Phishing, malware attachments, BEC</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Web Applications</td>
            <td className="p-3 border">Exploiting vulnerabilities in web apps</td>
            <td className="p-3 border">SQLi, XSS, CSRF, RCE</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Network</td>
            <td className="p-3 border">Targeting network infrastructure</td>
            <td className="p-3 border">Port scanning, MITM, DDoS</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Removable Media</td>
            <td className="p-3 border">USB drives and portable devices</td>
            <td className="p-3 border">USB malware, BadUSB</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Supply Chain</td>
            <td className="p-3 border">Compromising third-party software</td>
            <td className="p-3 border">Compromised updates, libraries</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Email-Based Attack Vectors</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Email Attack Flow:

Attacker --> Crafts Email --> Victim Opens --> Compromise
   |              |              |              |
   |   Payload:   |   Methods:   |   Results:   |
   |   - Malware  |   - Link     |   - Creds    |
   |   - Link     |   - Attach   |   - Malware  |
   |   - Request  |   - Reply    |   - Access   |

Common Email Threats:
1. Phishing - Fake login pages
2. Spear Phishing - Targeted attacks
3. Whaling - C-level targeting
4. BEC - Business Email Compromise
5. Malicious Attachments
6. Malicious Links`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Web Application Attack Vectors</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Injection Attacks:</strong> SQL, NoSQL, OS command injection</li>
      <li><strong>Broken Authentication:</strong> Session hijacking, credential stuffing</li>
      <li><strong>Sensitive Data Exposure:</strong> Unencrypted data transmission</li>
      <li><strong>XML External Entities:</strong> XXE attacks on XML parsers</li>
      <li><strong>Security Misconfiguration:</strong> Default credentials, open ports</li>
      <li><strong>Insecure Deserialization:</strong> Object manipulation attacks</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">3. Network-Based Attack Vectors</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Attack</th>
            <th className="p-3 border">Vector Type</th>
            <th className="p-3 border">Defense</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Port Scanning</td>
            <td className="p-3 border">Reconnaissance</td>
            <td className="p-3 border">Firewalls, IDS/IPS</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">MITM</td>
            <td className="p-3 border">Interception</td>
            <td className="p-3 border">TLS, certificate validation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DNS Spoofing</td>
            <td className="p-3 border">Redirection</td>
            <td className="p-3 border">DNSSEC, secure DNS</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Rogue Access Points</td>
            <td className="p-3 border">Wireless</td>
            <td className="p-3 border">WIPS, network monitoring</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Physical Attack Vectors</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Physical Attack Methods:

+------------------+  +------------------+
| Unauthorized     |  | Device           |
| Access           |  | Tampering        |
| - Tailgating     |  | - USB drops      |
| - Lock picking   |  | - Hardware mods  |
| - Badge cloning  |  | - Keyloggers     |
+------------------+  +------------------+

+------------------+  +------------------+
| Dumpster Diving  |  | Social           |
|                  |  | Engineering      |
| - Documents      |  | - Impersonation  |
| - Storage media  |  | - Pretexting     |
| - Device theft   |  | - Shoulder surf  |
+------------------+  +------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">5. Supply Chain Attack Vectors</h2>
    <p className="leading-relaxed">
      Supply chain attacks target the weakest link in the software supply chain to compromise
      multiple organizations through a single point of entry.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Compromised Software Updates:</strong> Injecting malware into legitimate updates</li>
      <li><strong>Third-Party Libraries:</strong> Malicious code in dependencies</li>
      <li><strong>Hardware Tampering:</strong> Modified devices during manufacturing</li>
      <li><strong>Vendor Compromise:</strong> Attacking through trusted suppliers</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Attack Vector Analysis</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Attack Surface Assessment:

Step 1: Identify Entry Points
        - Network interfaces
        - Web applications
        - Email gateways
        - Physical access points

Step 2: Map Attack Vectors
        - Internal vs External
        - Technical vs Social
        - Active vs Passive

Step 3: Assess Risk
        - Likelihood x Impact = Risk
        - Prioritize high-risk vectors

Step 4: Implement Controls
        - Preventive controls
        - Detective controls
        - Corrective controls`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Attack vectors are paths attackers use to gain access</li>
        <li>Email remains the most exploited attack vector</li>
        <li>Reducing attack surface minimizes potential entry points</li>
        <li>Defense in depth addresses multiple attack vectors</li>
        <li>Regular vulnerability assessments identify new vectors</li>
        <li>User awareness training addresses social engineering vectors</li>
      </ul>
    </div>
  </div>
);

export default AttackVectors;
