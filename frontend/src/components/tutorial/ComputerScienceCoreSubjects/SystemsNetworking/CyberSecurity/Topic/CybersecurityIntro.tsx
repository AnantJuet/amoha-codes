import React from "react";

const CybersecurityIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is Cybersecurity?
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Cybersecurity is the practice of protecting computer systems, networks, programs, and data
      from digital attacks, unauthorized access, damage, or theft. It encompasses technologies,
      processes, and practices designed to safeguard digital assets in our increasingly connected world.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      Cybersecurity, also known as information technology security, refers to the body of technologies,
      processes, and practices designed to protect networks, devices, programs, and data from attack,
      damage, or unauthorized access.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Cybersecurity Domains:

+--------------------------------------------------+
|              CYBERSECURITY LANDSCAPE             |
+--------------------------------------------------+
|                                                  |
|  +------------+  +------------+  +------------+  |
|  | Network    |  | Application|  | Information|  |
|  | Security   |  | Security   |  | Security   |  |
|  +------------+  +------------+  +------------+  |
|                                                  |
|  +------------+  +------------+  +------------+  |
|  | Operational|  | Disaster   |  | End-user   |  |
|  | Security   |  | Recovery   |  | Education  |  |
|  +------------+  +------------+  +------------+  |
|                                                  |
+--------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why is Cybersecurity Important?</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Reason</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Data Protection</td>
            <td className="p-3 border">Safeguards sensitive personal and business information</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Financial Security</td>
            <td className="p-3 border">Prevents financial losses from cyber attacks and fraud</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Business Continuity</td>
            <td className="p-3 border">Ensures operations continue without disruption</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Reputation Management</td>
            <td className="p-3 border">Maintains customer trust and brand integrity</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Regulatory Compliance</td>
            <td className="p-3 border">Meets legal requirements (GDPR, HIPAA, PCI-DSS)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Core Components of Cybersecurity</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Network Security:</strong> Protects network infrastructure from unauthorized access and attacks</li>
      <li><strong>Application Security:</strong> Ensures software and apps are free from vulnerabilities</li>
      <li><strong>Information Security:</strong> Protects data integrity and privacy in storage and transit</li>
      <li><strong>Operational Security:</strong> Processes for handling and protecting data assets</li>
      <li><strong>Disaster Recovery:</strong> Plans to restore operations after security incidents</li>
      <li><strong>End-user Education:</strong> Training users to recognize and avoid security threats</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Types of Cyber Threats</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Threat Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Malware</td>
            <td className="p-3 border">Malicious software designed to harm systems</td>
            <td className="p-3 border">Viruses, worms, trojans, ransomware</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Phishing</td>
            <td className="p-3 border">Fraudulent attempts to obtain sensitive data</td>
            <td className="p-3 border">Email scams, fake websites</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Man-in-the-Middle</td>
            <td className="p-3 border">Intercepting communications between parties</td>
            <td className="p-3 border">Session hijacking, eavesdropping</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DoS/DDoS</td>
            <td className="p-3 border">Overwhelming systems to deny service</td>
            <td className="p-3 border">Traffic flooding, resource exhaustion</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SQL Injection</td>
            <td className="p-3 border">Inserting malicious code into database queries</td>
            <td className="p-3 border">Data theft, database manipulation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cybersecurity Career Paths</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common Cybersecurity Roles:

1. Security Analyst
   - Monitor and analyze security incidents
   - Implement security measures
   - Salary Range: $70K - $100K

2. Penetration Tester
   - Identify vulnerabilities through testing
   - Simulate cyber attacks
   - Salary Range: $80K - $130K

3. Security Engineer
   - Design and implement security systems
   - Develop security protocols
   - Salary Range: $90K - $150K

4. Security Architect
   - Design overall security infrastructure
   - Create security frameworks
   - Salary Range: $120K - $180K

5. Chief Information Security Officer (CISO)
   - Lead security strategy and teams
   - Executive-level decision making
   - Salary Range: $200K - $400K+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Cybersecurity is essential in our digital-first world</li>
        <li>It involves protecting confidentiality, integrity, and availability of data</li>
        <li>Threats are constantly evolving, requiring continuous learning</li>
        <li>Defense-in-depth strategy provides multiple layers of protection</li>
        <li>Human factor is often the weakest link in security</li>
        <li>Regular updates and patches are crucial for maintaining security</li>
      </ul>
    </div>
  </div>
);

export default CybersecurityIntro;
