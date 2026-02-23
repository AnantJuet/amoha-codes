import React from 'react';

const SecurityThreatsOS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Security Threats in Operating Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Security threats are potential dangers that can exploit vulnerabilities in an
      operating system, leading to unauthorized access, data theft, system damage,
      or service disruption. Understanding these threats is essential for designing
      secure systems and implementing appropriate countermeasures.
    </p>

    {/* Classification of Threats */}
    <h2 className="text-3xl font-bold mt-8">Classification of Security Threats</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Security Threat Classification:
===============================================================================

                            SECURITY THREATS
                                   │
           ┌───────────────────────┼───────────────────────┐
           ▼                       ▼                       ▼
    ┌─────────────┐         ┌─────────────┐         ┌─────────────┐
    │  PROGRAM    │         │   SYSTEM    │         │   NETWORK   │
    │  THREATS    │         │   THREATS   │         │   THREATS   │
    │             │         │             │         │             │
    │ - Viruses   │         │ - Worms     │         │ - DoS       │
    │ - Trojans   │         │ - Port      │         │ - Sniffing  │
    │ - Backdoors │         │   Scanning  │         │ - Spoofing  │
    │ - Logic     │         │ - Privilege │         │ - MITM      │
    │   Bombs     │         │   Escalation│         │ - Phishing  │
    └─────────────┘         └─────────────┘         └─────────────┘

By Intent:                  By Source:
─────────────               ─────────────
- Malicious                 - External (hackers, malware)
- Accidental                - Internal (employees, insiders)
- Natural disasters         - Environmental (hardware failure)
`}
      </pre>
    </div>

    {/* Threat Categories Table */}
    <h2 className="text-3xl font-bold mt-8">Threat Categories Overview</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Target</th>
            <th className="p-3 border">Examples</th>
            <th className="p-3 border">Impact</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Interception</td>
            <td className="p-3 border">Confidentiality</td>
            <td className="p-3 border">Eavesdropping, packet sniffing</td>
            <td className="p-3 border">Data theft</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Interruption</td>
            <td className="p-3 border">Availability</td>
            <td className="p-3 border">DoS attacks, sabotage</td>
            <td className="p-3 border">Service disruption</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Modification</td>
            <td className="p-3 border">Integrity</td>
            <td className="p-3 border">Data tampering, file corruption</td>
            <td className="p-3 border">Data manipulation</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Fabrication</td>
            <td className="p-3 border">Authenticity</td>
            <td className="p-3 border">Spoofing, forged messages</td>
            <td className="p-3 border">False data injection</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Threat Model Diagram */}
    <h2 className="text-3xl font-bold mt-8">Threat Model: Attack Surfaces</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Operating System Attack Surfaces:
===============================================================================

                    ┌─────────────────────────────────────┐
    External        │         NETWORK INTERFACE           │
    Attacks  ──────►│  - Remote exploits                  │
                    │  - Malware downloads                │
                    │  - Network-based attacks            │
                    └──────────────────┬──────────────────┘
                                       │
                    ┌──────────────────▼──────────────────┐
    User            │         USER INTERFACE              │
    Attacks  ──────►│  - Social engineering               │
                    │  - Malicious input                  │
                    │  - Phishing                         │
                    └──────────────────┬──────────────────┘
                                       │
                    ┌──────────────────▼──────────────────┐
    Application     │         APPLICATION LAYER           │
    Attacks  ──────►│  - Buffer overflows                 │
                    │  - Code injection                   │
                    │  - Privilege escalation             │
                    └──────────────────┬──────────────────┘
                                       │
                    ┌──────────────────▼──────────────────┐
    Kernel          │         OPERATING SYSTEM KERNEL     │
    Attacks  ──────►│  - Rootkits                         │
                    │  - Kernel exploits                  │
                    │  - Driver vulnerabilities           │
                    └──────────────────┬──────────────────┘
                                       │
                    ┌──────────────────▼──────────────────┐
    Physical        │         HARDWARE LAYER              │
    Attacks  ──────►│  - Cold boot attacks                │
                    │  - Hardware tampering               │
                    │  - Side-channel attacks             │
                    └─────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Common Threat Types */}
    <h2 className="text-3xl font-bold mt-8">Common OS Security Threats</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Malware (Malicious Software)</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Behavior</th>
            <th className="p-3 border">Spread Method</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Virus</td>
            <td className="p-3 border">Attaches to programs, replicates</td>
            <td className="p-3 border">Infected files, user action</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Worm</td>
            <td className="p-3 border">Self-replicating, network-based</td>
            <td className="p-3 border">Network, no user action needed</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Trojan Horse</td>
            <td className="p-3 border">Disguises as legitimate software</td>
            <td className="p-3 border">User downloads/installs</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Ransomware</td>
            <td className="p-3 border">Encrypts data, demands payment</td>
            <td className="p-3 border">Phishing, exploit kits</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Spyware</td>
            <td className="p-3 border">Collects user information secretly</td>
            <td className="p-3 border">Bundled software, web downloads</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Rootkit</td>
            <td className="p-3 border">Hides malware presence in kernel</td>
            <td className="p-3 border">Exploits, other malware</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Attack Techniques */}
    <h3 className="text-2xl font-semibold mt-6">2. Attack Techniques</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Common Attack Techniques:
===============================================================================

Buffer Overflow Attack:
─────────────────────────────────────────────────────────────────────────
  Normal:                      Overflow:
  ┌─────────────────────┐      ┌─────────────────────┐
  │  Return Address     │      │  OVERWRITTEN !!!    │ ← Attacker's code
  ├─────────────────────┤      ├─────────────────────┤
  │  Saved Frame Ptr    │      │  OVERWRITTEN !!!    │
  ├─────────────────────┤      ├─────────────────────┤
  │  Local Variables    │      │  AAAAAAAAAAAAAAA    │ ← Overflow data
  ├─────────────────────┤      ├─────────────────────┤
  │  Buffer[64]         │      │  Malicious Input    │ ← User input > 64
  └─────────────────────┘      └─────────────────────┘

Privilege Escalation:
─────────────────────────────────────────────────────────────────────────
  User Space                    Kernel Space
  ┌──────────────┐              ┌──────────────┐
  │ Regular User │ ──exploit──► │    Root      │
  │ Privileges   │              │  Privileges  │
  └──────────────┘              └──────────────┘

  Methods:
  - Exploiting SUID binaries
  - Kernel vulnerabilities
  - Misconfigured permissions
  - Password cracking

SQL/Command Injection:
─────────────────────────────────────────────────────────────────────────
  Input: ' OR '1'='1'; DROP TABLE users; --

  Expected: SELECT * FROM users WHERE name = 'alice'
  Injected: SELECT * FROM users WHERE name = '' OR '1'='1'; DROP TABLE users;
`}
      </pre>
    </div>

    {/* Insider Threats */}
    <h3 className="text-2xl font-semibold mt-6">3. Insider Threats</h3>
    <p className="leading-relaxed">
      Threats originating from within the organization, including employees,
      contractors, or partners with legitimate access:
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Motivation</th>
            <th className="p-3 border">Example Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Malicious Insider</td>
            <td className="p-3 border">Financial gain, revenge</td>
            <td className="p-3 border">Data theft, sabotage</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Careless Insider</td>
            <td className="p-3 border">Negligence, lack of training</td>
            <td className="p-3 border">Accidental data exposure</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Compromised Insider</td>
            <td className="p-3 border">Account hijacking</td>
            <td className="p-3 border">Unauthorized access via stolen creds</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Threat Lifecycle */}
    <h2 className="text-3xl font-bold mt-8">Attack Lifecycle</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Cyber Kill Chain (Attack Stages):
===============================================================================

1. RECONNAISSANCE    2. WEAPONIZATION    3. DELIVERY
   ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
   │ Information │      │ Create      │      │ Send        │
   │ Gathering   │ ───► │ Payload     │ ───► │ to Target   │
   │             │      │             │      │             │
   │ - Scanning  │      │ - Malware   │      │ - Email     │
   │ - Social    │      │ - Exploit   │      │ - USB       │
   │   media     │      │   kit       │      │ - Website   │
   └─────────────┘      └─────────────┘      └─────────────┘
                                                    │
   ┌────────────────────────────────────────────────┘
   ▼
4. EXPLOITATION     5. INSTALLATION     6. COMMAND & CONTROL
   ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
   │ Trigger     │      │ Install     │      │ Remote      │
   │ Exploit     │ ───► │ Backdoor    │ ───► │ Control     │
   │             │      │             │      │             │
   │ - Buffer    │      │ - Rootkit   │      │ - C2 server │
   │   overflow  │      │ - Trojan    │      │ - Botnet    │
   │ - Vuln      │      │ - RAT       │      │ - Commands  │
   └─────────────┘      └─────────────┘      └─────────────┘
                                                    │
   ┌────────────────────────────────────────────────┘
   ▼
7. ACTIONS ON OBJECTIVES
   ┌─────────────────────────────────────────────────┐
   │ Execute Attack Goals                            │
   │                                                 │
   │ - Data exfiltration    - Lateral movement      │
   │ - Ransomware           - Persistence           │
   │ - Destruction          - Cover tracks          │
   └─────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Real-World Examples */}
    <h2 className="text-3xl font-bold mt-8">Real-World Threat Examples</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Threat</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Impact</th>
            <th className="p-3 border">Target</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">WannaCry (2017)</td>
            <td className="p-3 border">Ransomware Worm</td>
            <td className="p-3 border">200K+ systems, $4B damages</td>
            <td className="p-3 border">Windows SMB vulnerability</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Stuxnet (2010)</td>
            <td className="p-3 border">Worm</td>
            <td className="p-3 border">Destroyed centrifuges</td>
            <td className="p-3 border">SCADA/PLC systems</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Heartbleed (2014)</td>
            <td className="p-3 border">Buffer over-read</td>
            <td className="p-3 border">Private key exposure</td>
            <td className="p-3 border">OpenSSL library</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Meltdown/Spectre (2018)</td>
            <td className="p-3 border">Hardware vulnerability</td>
            <td className="p-3 border">Memory disclosure</td>
            <td className="p-3 border">CPU speculative execution</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Countermeasures */}
    <h2 className="text-3xl font-bold mt-8">Threat Countermeasures</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Threat</th>
            <th className="p-3 border">Prevention</th>
            <th className="p-3 border">Detection</th>
            <th className="p-3 border">Response</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Malware</td>
            <td className="p-3 border">Antivirus, whitelisting</td>
            <td className="p-3 border">Behavior analysis, signatures</td>
            <td className="p-3 border">Quarantine, removal</td>
          </tr>
          <tr>
            <td className="p-3 border">Buffer Overflow</td>
            <td className="p-3 border">ASLR, DEP, stack canaries</td>
            <td className="p-3 border">Runtime monitoring</td>
            <td className="p-3 border">Process termination</td>
          </tr>
          <tr>
            <td className="p-3 border">Privilege Escalation</td>
            <td className="p-3 border">Least privilege, patching</td>
            <td className="p-3 border">Audit logs, anomaly detection</td>
            <td className="p-3 border">Access revocation</td>
          </tr>
          <tr>
            <td className="p-3 border">Insider Threats</td>
            <td className="p-3 border">Background checks, training</td>
            <td className="p-3 border">User behavior analytics</td>
            <td className="p-3 border">Access termination</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Security threats target confidentiality, integrity, and availability</li>
      <li>Threats can be classified as program, system, or network-based</li>
      <li>Malware includes viruses, worms, trojans, ransomware, and rootkits</li>
      <li>Buffer overflow and privilege escalation are common attack techniques</li>
      <li>Insider threats can be as dangerous as external attacks</li>
      <li>Defense requires a layered approach: prevention, detection, and response</li>
    </ul>
  </div>
);

export default SecurityThreatsOS;
