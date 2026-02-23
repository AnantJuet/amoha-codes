import React from "react";

const HackerTypes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Hackers
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Hackers are individuals who use their technical skills to gain access to computer systems.
      They are categorized based on their intentions, legal status, and the nature of their activities.
      Understanding these categories is essential for cybersecurity professionals.
    </p>

    <h2 className="text-3xl font-bold mt-8">Hacker Classification by Intent</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Also Known As</th>
            <th className="p-3 border">Intent</th>
            <th className="p-3 border">Legal Status</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">White Hat</td>
            <td className="p-3 border">Ethical Hackers</td>
            <td className="p-3 border">Improve security, find vulnerabilities</td>
            <td className="p-3 border">Legal (authorized)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Black Hat</td>
            <td className="p-3 border">Crackers</td>
            <td className="p-3 border">Malicious, personal gain</td>
            <td className="p-3 border">Illegal</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Grey Hat</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">Mixed, often disclose vulnerabilities</td>
            <td className="p-3 border">Legally ambiguous</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Script Kiddie</td>
            <td className="p-3 border">Skiddie</td>
            <td className="p-3 border">Uses pre-made tools without understanding</td>
            <td className="p-3 border">Often illegal</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hacktivist</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">Political or social causes</td>
            <td className="p-3 border">Illegal</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Nation-State</td>
            <td className="p-3 border">APT (Advanced Persistent Threat)</td>
            <td className="p-3 border">Government-sponsored espionage</td>
            <td className="p-3 border">State-sanctioned</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Security Team Classifications</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SECURITY TEAM COLORS:

RED TEAM (Offensive)
├── Simulates real-world attacks
├── Tests organization's defenses
├── Uses attacker methodologies
└── Goal: Find weaknesses before real attackers

BLUE TEAM (Defensive)
├── Protects organization's assets
├── Monitors for threats
├── Responds to incidents
└── Goal: Detect, prevent, and respond

PURPLE TEAM (Collaborative)
├── Bridges red and blue teams
├── Shares attack/defense knowledge
├── Continuous improvement loop
└── Goal: Maximize security effectiveness

WHITE TEAM (Oversight)
├── Manages exercises
├── Sets rules of engagement
├── Judges outcomes
└── Goal: Fair and controlled testing`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Threat Actor Profiles</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Actor Type</th>
            <th className="p-3 border">Resources</th>
            <th className="p-3 border">Sophistication</th>
            <th className="p-3 border">Primary Motivation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Script Kiddies</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Notoriety, curiosity</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Insiders</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Variable</td>
            <td className="p-3 border">Revenge, financial gain</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cybercriminals</td>
            <td className="p-3 border">Medium-High</td>
            <td className="p-3 border">Medium-High</td>
            <td className="p-3 border">Financial gain</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hacktivists</td>
            <td className="p-3 border">Low-Medium</td>
            <td className="p-3 border">Variable</td>
            <td className="p-3 border">Ideology, politics</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Nation-States</td>
            <td className="p-3 border">Very High</td>
            <td className="p-3 border">Very High</td>
            <td className="p-3 border">Espionage, disruption</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Motivations and Tactics</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`HACKER MOTIVATIONS:

Financial Gain
├── Ransomware attacks
├── Credit card theft
├── Cryptocurrency mining
└── Corporate espionage

Ideological/Political
├── Website defacement
├── Data leaks (whistleblowing)
├── DDoS attacks on targets
└── Propaganda distribution

Revenge/Personal
├── Disgruntled employees
├── Competitive sabotage
├── Personal vendettas
└── Data destruction

Challenge/Curiosity
├── Proving technical skills
├── Bug bounty hunting
├── Security research
└── Learning and exploration

State-Sponsored
├── Critical infrastructure attacks
├── Intelligence gathering
├── Election interference
└── Cyberwarfare capabilities`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>White hat hackers work legally with authorization to improve security</li>
        <li>Black hat hackers operate illegally for malicious purposes</li>
        <li>Grey hat hackers fall between ethical and malicious categories</li>
        <li>Red, blue, and purple teams represent different security functions</li>
        <li>Threat actors range from script kiddies to nation-state actors</li>
        <li>Understanding motivations helps predict and prevent attacks</li>
      </ul>
    </div>
  </div>
);

export default HackerTypes;
