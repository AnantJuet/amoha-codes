import React from "react";

const VirusTypes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Computer Viruses
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Computer viruses are classified based on their target, infection method, and behavior.
      Understanding different virus types helps in implementing appropriate defenses and
      recognizing potential threats. Each type exploits different system components and
      requires specific detection and removal techniques.
    </p>

    <h2 className="text-3xl font-bold mt-8">Classification by Target</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Virus Type</th>
            <th className="p-3 border">Target</th>
            <th className="p-3 border">Characteristics</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">File Infector</td>
            <td className="p-3 border">Executable files (.exe, .com)</td>
            <td className="p-3 border">Attaches to programs</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Boot Sector</td>
            <td className="p-3 border">MBR, boot sector</td>
            <td className="p-3 border">Loads before OS</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Macro Virus</td>
            <td className="p-3 border">Document macros</td>
            <td className="p-3 border">Infects Office files</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Script Virus</td>
            <td className="p-3 border">Scripts (VBS, JS)</td>
            <td className="p-3 border">Web-based spread</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Multipartite</td>
            <td className="p-3 border">Multiple targets</td>
            <td className="p-3 border">Boot + files</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">File Infector Viruses</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`File Infector Infection Methods:

1. PREPENDING
   [Virus Code][Original Program]
   - Virus executes first
   - Then runs original program

2. APPENDING
   [Original Program][Virus Code]
   - Modifies entry point
   - Jumps to virus, returns

3. INSERTING (Cavity)
   [Program Part 1][Virus][Program Part 2]
   - Hides in unused space
   - Harder to detect

4. OVERWRITING
   [Virus Code---------]
   - Destroys original program
   - Easily detected (broken files)

Infection Trigger:
- User runs infected program
- Virus gains control
- Searches for other executables
- Infects more files
- Executes original program (or payload)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Boot Sector Viruses</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Boot Sector Virus Behavior:

Normal Boot:
BIOS --> MBR --> Boot Sector --> OS Loader --> OS

Infected Boot:
BIOS --> MBR --> [VIRUS] --> Boot Sector --> OS
                    |
                    +-- Virus loads first
                        Hides in memory
                        Infects other disks
                        Then loads OS normally

Characteristics:
- Extremely persistent (survives OS reinstall)
- Loads before antivirus
- Can infect any bootable media
- Modern: UEFI rootkits/bootkits

Examples:
- Brain (1986) - First PC boot virus
- Stoned - Common in late 1980s
- Michelangelo - Triggered on March 6`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Evasion Techniques</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Detection Difficulty</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Encrypted</td>
            <td className="p-3 border">Encrypts body, decrypts at runtime</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Polymorphic</td>
            <td className="p-3 border">Changes encryption each copy</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Metamorphic</td>
            <td className="p-3 border">Rewrites entire code</td>
            <td className="p-3 border">Very High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Stealth</td>
            <td className="p-3 border">Hides changes from OS</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Armored</td>
            <td className="p-3 border">Anti-debugging, anti-analysis</td>
            <td className="p-3 border">Medium</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Polymorphic vs Metamorphic</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Polymorphic Virus:
+----------------+     +----------------+
| Decrypt Stub   | --> | Decrypt Stub   |
| (changes)      |     | (different)    |
+----------------+     +----------------+
| Encrypted Body | --> | Encrypted Body |
| (same code)    |     | (same code)    |
+----------------+     +----------------+

- Same core functionality
- Different encryption each time
- Signature changes but behavior same

Metamorphic Virus:
+----------------+     +----------------+
| mov eax, 1     | --> | xor eax, eax   |
| add ebx, eax   |     | inc eax        |
| jmp label      |     | add ebx, eax   |
+----------------+     | jmp label      |
                       +----------------+

- Actually rewrites its code
- Same behavior, different instructions
- No consistent signature
- Much harder to detect`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>File infectors target executables and spread when programs run</li>
        <li>Boot sector viruses load before the OS and are persistent</li>
        <li>Macro viruses exploit document automation features</li>
        <li>Polymorphic viruses change encryption to evade signatures</li>
        <li>Metamorphic viruses rewrite code completely each infection</li>
        <li>Modern detection requires behavioral analysis, not just signatures</li>
      </ul>
    </div>
  </div>
);

export default VirusTypes;
