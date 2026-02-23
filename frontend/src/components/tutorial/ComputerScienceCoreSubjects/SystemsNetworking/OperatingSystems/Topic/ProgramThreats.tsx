import React from 'react';

const ProgramThreats: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Program Threats: Viruses, Worms, Trojans, and Logic Bombs
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Program threats are malicious software (malware) that exploit vulnerabilities
      in programs or systems to cause harm. These threats can replicate, spread,
      steal data, destroy files, or provide unauthorized access. Understanding the
      different types of program threats is essential for implementing effective
      security measures.
    </p>

    {/* Overview Comparison */}
    <h2 className="text-3xl font-bold mt-8">Comparison of Program Threats</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Threat</th>
            <th className="p-3 border">Self-Replication</th>
            <th className="p-3 border">Host Required</th>
            <th className="p-3 border">User Action</th>
            <th className="p-3 border">Trigger</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Virus</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Yes (attaches to files)</td>
            <td className="p-3 border">Required</td>
            <td className="p-3 border">Host execution</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Worm</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No (standalone)</td>
            <td className="p-3 border">Not required</td>
            <td className="p-3 border">Network vulnerability</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Trojan Horse</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No (disguised)</td>
            <td className="p-3 border">Required</td>
            <td className="p-3 border">User runs program</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Logic Bomb</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes (embedded)</td>
            <td className="p-3 border">Not required</td>
            <td className="p-3 border">Condition met</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Virus Section */}
    <h2 className="text-3xl font-bold mt-8">1. Computer Virus</h2>
    <p className="leading-relaxed">
      A virus is a malicious code fragment that attaches itself to a legitimate
      program or file. It replicates by modifying other programs to include a
      copy of itself. Viruses require host programs and user action to spread.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Virus Lifecycle:
===============================================================================

1. DORMANT PHASE        2. PROPAGATION         3. TRIGGERING         4. EXECUTION
   ┌─────────────┐         ┌─────────────┐        ┌─────────────┐       ┌─────────────┐
   │   Virus     │         │   Virus     │        │   Virus     │       │   Virus     │
   │   Idle      │ ──────► │ Replicates  │ ─────► │  Condition  │ ────► │  Payload    │
   │             │         │             │        │   Met       │       │  Executes   │
   │ Waiting for │         │ Infects     │        │             │       │             │
   │ activation  │         │ new files   │        │ Date/Event  │       │ Damage/     │
   │             │         │             │        │ triggers    │       │ Disruption  │
   └─────────────┘         └─────────────┘        └─────────────┘       └─────────────┘


Virus Infection Process:
===============================================================================

Original Program:              Infected Program:
┌──────────────────────┐       ┌──────────────────────┐
│                      │       │    VIRUS CODE        │ ← Inserted virus
│                      │       ├──────────────────────┤
│    PROGRAM CODE      │  ───► │                      │
│                      │       │    PROGRAM CODE      │
│                      │       │    (modified)        │
│                      │       │                      │
└──────────────────────┘       └──────────────────────┘

When program runs:
1. Virus code executes first
2. Virus replicates to other files
3. Original program code runs (appears normal)
4. User unaware of infection
`}
      </pre>
    </div>

    {/* Types of Viruses */}
    <h3 className="text-2xl font-semibold mt-6">Types of Viruses</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Target</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">File Infector</td>
            <td className="p-3 border">Attaches to executable files (.exe, .com)</td>
            <td className="p-3 border">Program files</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Boot Sector</td>
            <td className="p-3 border">Infects MBR or boot sector of disk</td>
            <td className="p-3 border">Boot process</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Macro Virus</td>
            <td className="p-3 border">Embedded in document macros</td>
            <td className="p-3 border">Office documents</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Polymorphic</td>
            <td className="p-3 border">Changes its code to avoid detection</td>
            <td className="p-3 border">Evades antivirus</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Metamorphic</td>
            <td className="p-3 border">Rewrites entire code each generation</td>
            <td className="p-3 border">Advanced evasion</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Resident</td>
            <td className="p-3 border">Stays in memory, infects on access</td>
            <td className="p-3 border">Memory-resident</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Worm Section */}
    <h2 className="text-3xl font-bold mt-8">2. Computer Worm</h2>
    <p className="leading-relaxed">
      A worm is a standalone malicious program that replicates itself to spread
      to other computers. Unlike viruses, worms do not need to attach to host
      programs and can spread automatically through networks without user intervention.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Worm Propagation:
===============================================================================

                         ┌─────────────────┐
                         │   WORM          │
                         │   Origin        │
                         └────────┬────────┘
                                  │
              ┌───────────────────┼───────────────────┐
              ▼                   ▼                   ▼
    ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
    │ Computer A      │ │ Computer B      │ │ Computer C      │
    │ [INFECTED]      │ │ [INFECTED]      │ │ [INFECTED]      │
    └────────┬────────┘ └────────┬────────┘ └────────┬────────┘
             │                   │                   │
    ┌────────┴────────┐ ┌────────┴────────┐ ┌────────┴────────┐
    ▼        ▼        ▼ ▼        ▼        ▼ ▼        ▼        ▼
   D        E        F G        H        I J        K        L

   [Exponential spread across network - no user action needed]


Worm Spread Methods:
===============================================================================

┌─────────────────────────────────────────────────────────────────────────────┐
│                            WORM CAPABILITIES                                │
├─────────────────────┬───────────────────────────────────────────────────────┤
│  Network Scanning   │  Searches for vulnerable hosts on network            │
├─────────────────────┼───────────────────────────────────────────────────────┤
│  Exploit Usage      │  Uses known vulnerabilities to gain access           │
├─────────────────────┼───────────────────────────────────────────────────────┤
│  Self-Replication   │  Copies itself to new hosts automatically            │
├─────────────────────┼───────────────────────────────────────────────────────┤
│  Email Spreading    │  Sends copies via email using address book           │
├─────────────────────┼───────────────────────────────────────────────────────┤
│  Network Shares     │  Copies to shared folders and drives                 │
└─────────────────────┴───────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Notable Worms */}
    <h3 className="text-2xl font-semibold mt-6">Notable Worms in History</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Worm</th>
            <th className="p-3 border">Year</th>
            <th className="p-3 border">Impact</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Morris Worm</td>
            <td className="p-3 border">1988</td>
            <td className="p-3 border">First major worm, 10% of Internet</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Code Red</td>
            <td className="p-3 border">2001</td>
            <td className="p-3 border">Infected 359,000 hosts in 14 hours</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">SQL Slammer</td>
            <td className="p-3 border">2003</td>
            <td className="p-3 border">Doubled infections every 8.5 seconds</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Conficker</td>
            <td className="p-3 border">2008</td>
            <td className="p-3 border">9-15 million systems infected</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Trojan Horse Section */}
    <h2 className="text-3xl font-bold mt-8">3. Trojan Horse</h2>
    <p className="leading-relaxed">
      A Trojan horse is a malicious program that disguises itself as legitimate
      software. Unlike viruses, Trojans do not replicate themselves but rely on
      users to install them, thinking they are useful applications.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Trojan Horse Deception:
===============================================================================

         What User Sees:                     What Actually Happens:
         ═══════════════                     ═══════════════════════

    ┌─────────────────────────┐         ┌─────────────────────────┐
    │                         │         │                         │
    │   FREE_GAME.exe         │         │   FREE_GAME.exe         │
    │                         │         │                         │
    │   ┌─────────────────┐   │         │   ┌─────────────────┐   │
    │   │  Looks like a   │   │         │   │  Hidden         │   │
    │   │  fun game!      │   │         │   │  MALWARE        │   │
    │   └─────────────────┘   │         │   │  ═══════        │   │
    │                         │         │   │  - Keylogger    │   │
    │   [Install]  [Cancel]   │         │   │  - Backdoor     │   │
    │                         │         │   │  - Data theft   │   │
    └─────────────────────────┘         │   └─────────────────┘   │
                                        │                         │
            User clicks Install         │   Game runs normally... │
                    │                   │   while malware runs    │
                    ▼                   │   in background         │
            "Great, game works!"        └─────────────────────────┘


Common Trojan Types:
===============================================================================

┌───────────────────┬─────────────────────────────────────────────────────────┐
│  Remote Access    │  Provides attacker full control of victim's computer   │
│  Trojan (RAT)     │  Example: DarkComet, njRAT                              │
├───────────────────┼─────────────────────────────────────────────────────────┤
│  Banking Trojan   │  Steals banking credentials and financial info         │
│                   │  Example: Zeus, Emotet                                   │
├───────────────────┼─────────────────────────────────────────────────────────┤
│  Downloader       │  Downloads and installs additional malware             │
│  Trojan           │  Example: Emotet (also downloads other malware)        │
├───────────────────┼─────────────────────────────────────────────────────────┤
│  Keylogger        │  Records all keystrokes to capture passwords           │
│  Trojan           │  Example: HawkEye, Agent Tesla                          │
├───────────────────┼─────────────────────────────────────────────────────────┤
│  Ransomware       │  Encrypts files, demands payment for decryption        │
│  Trojan           │  Example: CryptoLocker, Locky                           │
└───────────────────┴─────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Logic Bomb Section */}
    <h2 className="text-3xl font-bold mt-8">4. Logic Bomb</h2>
    <p className="leading-relaxed">
      A logic bomb is malicious code inserted into a legitimate program that
      remains dormant until specific conditions are met. Once triggered, it
      executes its harmful payload. Logic bombs are often planted by insiders.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Logic Bomb Trigger Mechanism:
===============================================================================

Normal Program Execution:
─────────────────────────────────────────────────────────────────────────────

    ┌─────────────────────────────────────────────────────────────────────────┐
    │  function processPayroll() {                                            │
    │                                                                         │
    │      // Normal payroll processing                                       │
    │      calculateSalaries();                                               │
    │      processDeductions();                                               │
    │                                                                         │
    │      // LOGIC BOMB - Hidden malicious code                              │
    │      ╔═════════════════════════════════════════════════════════════════╗│
    │      ║  if (currentDate > "2026-01-15" &&                              ║│
    │      ║      !employeeExists("John Smith")) {                            ║│
    │      ║                                                                  ║│
    │      ║      // Trigger: If John Smith is terminated                     ║│
    │      ║      deleteAllDatabases();                                       ║│
    │      ║      formatDrives();                                             ║│
    │      ║  }                                                               ║│
    │      ╚═════════════════════════════════════════════════════════════════╝│
    │                                                                         │
    │      generateReports();                                                 │
    │  }                                                                      │
    └─────────────────────────────────────────────────────────────────────────┘


Logic Bomb Timeline:
═════════════════════════════════════════════════════════════════════════════

  Insertion          Dormant Period              Trigger          Execution
  ─────────          ──────────────              ───────          ─────────
      │                                              │                │
      │    Program runs normally...                  │                │
      ▼                                              ▼                ▼
  ────●────────────────────────────────────────────●────────────────●─────►
      │                                              │                │
  Code planted         Bomb waits for            Condition met     DAMAGE!
  by insider           condition                 (date/event)


Common Trigger Conditions:
═════════════════════════════════════════════════════════════════════════════

  ┌─────────────────────────────────────────────────────────────────────────┐
  │  Time-Based:       After specific date/time                             │
  │  Event-Based:      Employee termination, file deletion                  │
  │  Counter-Based:    After program runs N times                           │
  │  Condition-Based:  If specific user logs in / fails to log in           │
  └─────────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Real World Logic Bomb Case */}
    <h3 className="text-2xl font-semibold mt-6">Real-World Logic Bomb Cases</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Case</th>
            <th className="p-3 border">Year</th>
            <th className="p-3 border">Trigger</th>
            <th className="p-3 border">Impact</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Omega Engineering</td>
            <td className="p-3 border">1996</td>
            <td className="p-3 border">Termination of employee</td>
            <td className="p-3 border">$10M in damages</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">UBS PaineWebber</td>
            <td className="p-3 border">2002</td>
            <td className="p-3 border">Time-based (specific date)</td>
            <td className="p-3 border">$3M in damages</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Fannie Mae</td>
            <td className="p-3 border">2008</td>
            <td className="p-3 border">Scheduled to wipe servers</td>
            <td className="p-3 border">Discovered before trigger</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Detection and Prevention */}
    <h2 className="text-3xl font-bold mt-8">Detection and Prevention</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Threat</th>
            <th className="p-3 border">Detection Methods</th>
            <th className="p-3 border">Prevention Strategies</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Virus</td>
            <td className="p-3 border">Signature scanning, heuristics, behavior analysis</td>
            <td className="p-3 border">Antivirus, file integrity monitoring, sandboxing</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Worm</td>
            <td className="p-3 border">Network traffic analysis, IDS/IPS</td>
            <td className="p-3 border">Patching, firewalls, network segmentation</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Trojan</td>
            <td className="p-3 border">Behavioral analysis, process monitoring</td>
            <td className="p-3 border">Download only from trusted sources, code signing</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Logic Bomb</td>
            <td className="p-3 border">Code review, access logs, anomaly detection</td>
            <td className="p-3 border">Code review, separation of duties, version control</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Viruses attach to programs and require user action to spread</li>
      <li>Worms are self-replicating and spread automatically through networks</li>
      <li>Trojans disguise as legitimate software to trick users into installing them</li>
      <li>Logic bombs remain dormant until specific conditions trigger their payload</li>
      <li>Each threat type requires different detection and prevention strategies</li>
      <li>Defense in depth with multiple security layers provides best protection</li>
    </ul>
  </div>
);

export default ProgramThreats;
