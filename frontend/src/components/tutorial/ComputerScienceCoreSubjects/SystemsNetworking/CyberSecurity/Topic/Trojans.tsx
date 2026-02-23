import React from "react";

const Trojans: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Trojan Horses
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Trojan horse (or Trojan) is malware that disguises itself as legitimate software to
      trick users into installing it. Unlike viruses and worms, Trojans do not replicate
      themselves. Instead, they rely on social engineering to convince users to execute them,
      after which they perform malicious actions while appearing to function normally.
    </p>

    <h2 className="text-3xl font-bold mt-8">Trojan Characteristics</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Trojan vs Other Malware:

+------------------+------------------+------------------+
| TROJAN           | VIRUS            | WORM             |
+------------------+------------------+------------------+
| Disguised as     | Attaches to      | Standalone       |
| legitimate       | files            | program          |
+------------------+------------------+------------------+
| Does NOT         | Replicates via   | Self-replicates  |
| self-replicate   | host files       | via network      |
+------------------+------------------+------------------+
| Social           | Needs host       | Automatic        |
| engineering      | execution        | propagation      |
+------------------+------------------+------------------+
| User installs    | User runs        | No user action   |
| voluntarily      | infected file    | needed           |
+------------------+------------------+------------------+

Named after Greek mythology:
Greeks hid soldiers in wooden horse
City of Troy welcomed it inside
Soldiers emerged and conquered city`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Trojans</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Backdoor</td>
            <td className="p-3 border">Remote access to system</td>
            <td className="p-3 border">Back Orifice, NetBus</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Downloader</td>
            <td className="p-3 border">Downloads additional malware</td>
            <td className="p-3 border">Emotet, TrickBot</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dropper</td>
            <td className="p-3 border">Contains and installs malware</td>
            <td className="p-3 border">Various installers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Banking</td>
            <td className="p-3 border">Steals financial credentials</td>
            <td className="p-3 border">Zeus, Dridex</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">RAT</td>
            <td className="p-3 border">Remote administration tool</td>
            <td className="p-3 border">DarkComet, njRAT</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Ransomware</td>
            <td className="p-3 border">Encrypts files for ransom</td>
            <td className="p-3 border">CryptoLocker</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Remote Access Trojans (RATs)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RAT Capabilities:

Attacker                    Victim's Computer
+----------+                +------------------+
|  Control |  <-----------> | RAT Client       |
|  Panel   |   Encrypted    +------------------+
+----------+   Connection   | Capabilities:    |
                           | - Screen capture |
                           | - Webcam access  |
                           | - Keylogging     |
                           | - File manager   |
                           | - Shell access   |
                           | - Registry edit  |
                           | - Process list   |
                           | - Password dump  |
                           +------------------+

Common RATs:
- DarkComet: Full-featured, widely used
- njRAT: Popular in Middle East
- Poison Ivy: APT groups favorite
- Quasar: Open-source .NET RAT
- Remcos: Commercial "remote admin"

RATs often use:
- Reverse connections (victim calls out)
- Dynamic DNS for C2
- Encrypted communication
- Process injection to hide`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Distribution Methods</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Trojan Distribution Channels:

1. FAKE SOFTWARE
   - Cracked games and software
   - Fake antivirus programs
   - Counterfeit applications
   - Malicious browser extensions

2. EMAIL ATTACHMENTS
   - Fake invoices (PDF, DOC)
   - "Shipping notifications"
   - Resume submissions
   - Tax documents

3. MALVERTISING
   - Malicious advertisements
   - Fake download buttons
   - Drive-by downloads

4. SOCIAL ENGINEERING
   - Tech support scams
   - Fake updates
   - "Your computer is infected!"

5. BUNDLED SOFTWARE
   - Legitimate software + hidden Trojan
   - Freeware with "extras"
   - Supply chain attacks

6. WATERING HOLE
   - Compromise trusted sites
   - Target specific groups
   - Inject malware silently`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detection and Prevention</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Download from trusted sources:</strong> Official sites, verified publishers</li>
      <li><strong>Antivirus software:</strong> Real-time scanning and updates</li>
      <li><strong>Email caution:</strong> Dont open unexpected attachments</li>
      <li><strong>Software updates:</strong> Patch vulnerabilities promptly</li>
      <li><strong>Firewall monitoring:</strong> Watch for outbound connections</li>
      <li><strong>Behavior analysis:</strong> Monitor for suspicious activity</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Trojans disguise as legitimate software to trick users</li>
        <li>They do not self-replicate like viruses or worms</li>
        <li>RATs provide full remote control to attackers</li>
        <li>Banking Trojans target financial credentials</li>
        <li>Social engineering is key to Trojan distribution</li>
        <li>Only download software from trusted, verified sources</li>
      </ul>
    </div>
  </div>
);

export default Trojans;
