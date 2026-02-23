import React from "react";

const Viruses: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Computer Viruses
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A computer virus is malicious code that attaches itself to legitimate programs or files
      and replicates when the host program is executed. Like biological viruses, they cannot
      spread without a host and require user action to propagate.
    </p>

    <h2 className="text-3xl font-bold mt-8">How Viruses Work</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Virus Lifecycle:

1. INFECTION
   Virus attaches to host file
   [Clean File] + [Virus Code] = [Infected File]

2. REPLICATION
   When host executes, virus copies itself
   Infects other files on system

3. TRIGGER
   Waits for specific condition
   (date, action, time)

4. PAYLOAD
   Executes malicious action
   (damage, steal, display message)

Virus vs Worm:
- Virus: Needs host file, user action to spread
- Worm: Self-contained, spreads automatically via network`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Viruses</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Target</th>
            <th className="p-3 border">Behavior</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">File Infector</td>
            <td className="p-3 border">Executable files</td>
            <td className="p-3 border">Attaches to .exe, .com files</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Boot Sector</td>
            <td className="p-3 border">Disk boot sector</td>
            <td className="p-3 border">Loads before OS, hard to detect</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Macro Virus</td>
            <td className="p-3 border">Document macros</td>
            <td className="p-3 border">Infects Office documents</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Polymorphic</td>
            <td className="p-3 border">Various</td>
            <td className="p-3 border">Changes code to evade detection</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Metamorphic</td>
            <td className="p-3 border">Various</td>
            <td className="p-3 border">Rewrites entire code each time</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Notable Historic Viruses</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Brain (1986):</strong> First PC virus, boot sector infector</li>
      <li><strong>Melissa (1999):</strong> Macro virus spread via email</li>
      <li><strong>ILOVEYOU (2000):</strong> VBScript virus, massive damage</li>
      <li><strong>Code Red (2001):</strong> Exploited IIS vulnerability</li>
      <li><strong>Conficker (2008):</strong> Infected millions of systems</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Protection Against Viruses</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Virus Protection Measures:

1. ANTIVIRUS SOFTWARE
   - Real-time scanning
   - Regular definition updates
   - Scheduled full scans

2. SAFE COMPUTING
   - Don't open unknown attachments
   - Download from trusted sources
   - Disable macros in documents

3. SYSTEM HARDENING
   - Keep OS and software updated
   - Use standard user accounts
   - Enable UAC/AppArmor

4. BACKUP
   - Regular backups
   - Test restore procedures
   - Offline/air-gapped backups`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Viruses require host files and user action to spread</li>
        <li>Different virus types target different system components</li>
        <li>Polymorphic viruses change to evade detection</li>
        <li>Antivirus with updated signatures is essential</li>
        <li>User awareness prevents most infections</li>
        <li>Regular backups enable recovery if infected</li>
      </ul>
    </div>
  </div>
);

export default Viruses;
