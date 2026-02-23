import React from "react";

const Botnets: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Botnets
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A botnet is a network of compromised computers (bots or zombies) controlled by an
      attacker (botmaster) through a command and control (C2) infrastructure. Botnets can
      consist of thousands or millions of infected devices and are used for various malicious
      activities including DDoS attacks, spam campaigns, cryptocurrency mining, and credential theft.
    </p>

    <h2 className="text-3xl font-bold mt-8">Botnet Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Botnet Components:

                    +-------------+
                    | Botmaster   |  Attacker controlling botnet
                    +------+------+
                           |
                    +------v------+
                    | C2 Server   |  Command & Control
                    +------+------+
                           |
         +-----------------+-----------------+
         |                 |                 |
    +----v----+       +----v----+       +----v----+
    |   Bot   |       |   Bot   |       |   Bot   |
    | (Zombie)|       | (Zombie)|       | (Zombie)|
    +---------+       +---------+       +---------+
    Infected          Infected          Infected
    Computer          Computer          Computer

Botnet Size Examples:
- Small: 1,000 - 10,000 bots
- Medium: 10,000 - 100,000 bots
- Large: 100,000+ bots
- Massive: Millions (Mirai, Conficker)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">C2 Communication Models</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Model</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Resilience</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Centralized (IRC/HTTP)</td>
            <td className="p-3 border">Single C2 server</td>
            <td className="p-3 border">Low (single point of failure)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hierarchical</td>
            <td className="p-3 border">Tiered C2 structure</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">P2P</td>
            <td className="p-3 border">Decentralized, no central C2</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Domain Flux (DGA)</td>
            <td className="p-3 border">Algorithmically generated domains</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fast Flux</td>
            <td className="p-3 border">Rapidly changing IPs</td>
            <td className="p-3 border">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Botnet Uses</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Botnet Attack Capabilities:

1. DDoS ATTACKS
   - Volumetric attacks (bandwidth flood)
   - Application layer attacks (HTTP flood)
   - Protocol attacks (SYN flood)
   - Amplification attacks

2. SPAM CAMPAIGNS
   - Mass email distribution
   - Phishing campaigns
   - Malware distribution
   - Bypasses IP blacklists

3. CREDENTIAL THEFT
   - Keylogging across botnet
   - Form grabbing
   - Credential stuffing attacks

4. CRYPTOCURRENCY MINING
   - Distributed mining power
   - Uses victims' electricity
   - Cryptojacking

5. CLICK FRAUD
   - Fake ad clicks
   - Revenue from advertisers
   - Millions in fraud

6. PROXY SERVICES
   - Anonymous browsing
   - Sold to criminals
   - Attack attribution evasion`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Famous Botnets</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Notable Botnets in History:

MIRAI (2016)
- Targeted IoT devices
- Default credentials attack
- 620 Gbps DDoS attack on Krebs
- Source code leaked, spawned variants

CONFICKER (2008-2009)
- Infected 9-15 million computers
- P2P and DGA communication
- Never fully utilized
- Still active in some networks

ZEUS/ZBOT (2007-2010)
- Banking Trojan botnet
- Stole hundreds of millions
- Source code leaked
- Spawned GameOver Zeus

EMOTET (2014-2021)
- Started as banking Trojan
- Evolved to malware distributor
- Ransomware delivery
- Takedown in 2021

NECURS (2012-2020)
- Largest spam botnet
- 9 million bots at peak
- Distributed Locky ransomware
- Takedown by Microsoft

MOZI (2019-present)
- IoT botnet
- P2P architecture
- DDoS and mining`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Botnet Defense</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Patch Management:</strong> Close vulnerabilities exploited for infection</li>
      <li><strong>Network Monitoring:</strong> Detect C2 traffic patterns</li>
      <li><strong>DNS Sinkholing:</strong> Redirect known C2 domains</li>
      <li><strong>Egress Filtering:</strong> Block unauthorized outbound connections</li>
      <li><strong>IoT Security:</strong> Change default credentials, update firmware</li>
      <li><strong>Threat Intelligence:</strong> Stay informed about active botnets</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Botnets are networks of compromised devices under attacker control</li>
        <li>C2 infrastructure enables botmaster to issue commands</li>
        <li>P2P and DGA make botnets resilient to takedowns</li>
        <li>Common uses include DDoS, spam, mining, and credential theft</li>
        <li>IoT devices are increasingly targeted for botnets</li>
        <li>Detection focuses on identifying C2 communication patterns</li>
      </ul>
    </div>
  </div>
);

export default Botnets;
