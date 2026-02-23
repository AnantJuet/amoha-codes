import React from "react";

const Spyware: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Spyware
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Spyware is malicious software designed to secretly monitor and collect information
      about users without their knowledge or consent. It can track browsing habits, capture
      keystrokes, steal credentials, and transmit personal data to attackers. Spyware often
      operates stealthily in the background, making detection challenging.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Spyware</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Data Collected</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Keyloggers</td>
            <td className="p-3 border">Record keystrokes</td>
            <td className="p-3 border">Passwords, messages</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Password Stealers</td>
            <td className="p-3 border">Extract saved credentials</td>
            <td className="p-3 border">Stored passwords</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Banking Trojans</td>
            <td className="p-3 border">Target financial data</td>
            <td className="p-3 border">Banking credentials</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Infostealers</td>
            <td className="p-3 border">Collect various data</td>
            <td className="p-3 border">Cookies, history, files</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Stalkerware</td>
            <td className="p-3 border">Monitor individuals</td>
            <td className="p-3 border">Location, calls, messages</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">How Spyware Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Spyware Operation Flow:

1. INSTALLATION
   +------------------+
   | Bundled software |
   | Malicious email  |
   | Drive-by download|
   | Physical access  |
   +--------+---------+
            |
2. PERSISTENCE
   +--------v---------+
   | Registry entries |
   | Startup programs |
   | Service install  |
   | DLL injection    |
   +--------+---------+
            |
3. DATA COLLECTION
   +--------v---------+
   | Keystrokes       |
   | Screenshots      |
   | Browser data     |
   | File access      |
   | Network traffic  |
   +--------+---------+
            |
4. EXFILTRATION
   +--------v---------+
   | C2 server upload |
   | Email reports    |
   | Cloud storage    |
   | Encrypted tunnel |
   +------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Collection Techniques</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Spyware Collection Methods:

KEYLOGGING:
- Hardware keyloggers (physical device)
- Software hooks (API interception)
- Form grabbing (browser injection)
- Kernel-level logging

SCREEN CAPTURE:
- Periodic screenshots
- Video recording
- Targeted capture (banking sites)

BROWSER DATA:
- Cookies and session tokens
- Browsing history
- Saved passwords
- Form autofill data
- Bookmarks

SYSTEM INFO:
- Installed software
- Hardware configuration
- Network connections
- Running processes

COMMUNICATION:
- Email content
- Chat messages
- VoIP recordings
- Social media activity

FILE ACCESS:
- Document contents
- Cryptocurrency wallets
- Configuration files
- Database files`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Commercial vs Malicious Spyware</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Commercial Spyware</th>
            <th className="p-3 border">Criminal Spyware</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Marketed As</td>
            <td className="p-3 border">Employee monitoring, parental control</td>
            <td className="p-3 border">Hidden, not marketed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Legality</td>
            <td className="p-3 border">Gray area (consent required)</td>
            <td className="p-3 border">Illegal</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Examples</td>
            <td className="p-3 border">FlexiSpy, mSpy, Pegasus</td>
            <td className="p-3 border">RedLine, Vidar</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Target</td>
            <td className="p-3 border">Specific individuals</td>
            <td className="p-3 border">Mass infection</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detection and Removal</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Spyware Detection Indicators:

SYMPTOMS:
- Slow system performance
- Unexpected pop-ups
- Changed browser settings
- High network activity
- Unknown programs running
- Antivirus disabled
- Battery drain (mobile)

DETECTION METHODS:
1. Anti-spyware scans
2. Process monitoring
3. Network traffic analysis
4. Registry inspection
5. Startup program review
6. File integrity checks

REMOVAL STEPS:
1. Disconnect from network
2. Boot in safe mode
3. Run anti-malware scan
4. Remove identified threats
5. Clear browser data
6. Reset changed settings
7. Update all passwords
8. Monitor for reinfection`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Spyware secretly monitors user activity and collects data</li>
        <li>Keyloggers capture passwords and sensitive input</li>
        <li>Infostealers target saved credentials and browser data</li>
        <li>Commercial stalkerware poses significant privacy risks</li>
        <li>Regular anti-spyware scans help detect infections</li>
        <li>Be cautious with software downloads and email attachments</li>
      </ul>
    </div>
  </div>
);

export default Spyware;
