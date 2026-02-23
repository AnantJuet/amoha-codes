import React from "react";

const DigitalForensics: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Digital Forensics
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Digital forensics is the process of identifying, preserving, analyzing, and presenting
      digital evidence in a manner that is legally acceptable. It is used to investigate
      cybercrimes, security incidents, and policy violations while maintaining the integrity
      of evidence for potential legal proceedings.
    </p>

    <h2 className="text-3xl font-bold mt-8">Digital Forensics Process</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Digital Forensics Investigation Process:

+------------------------------------------------------------------+
|  1. IDENTIFICATION  -->  2. PRESERVATION  -->  3. COLLECTION     |
|                                                                   |
|  Identify evidence       Protect evidence        Acquire data     |
|  sources and scope       from alteration         forensically     |
+------------------------------------------------------------------+
                              |
                              v
+------------------------------------------------------------------+
|  4. EXAMINATION  -->  5. ANALYSIS  -->  6. PRESENTATION          |
|                                                                   |
|  Extract relevant       Interpret and        Report findings     |
|  data                   correlate data       professionally      |
+------------------------------------------------------------------+

Forensic Principles:
1. Minimize handling of original evidence
2. Document everything
3. Maintain chain of custody
4. Use write blockers when possible
5. Verify integrity with hashes
6. Work on copies, not originals`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Digital Forensics</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Focus Area</th>
            <th className="p-3 border">Key Evidence</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Computer Forensics</td>
            <td className="p-3 border">Workstations, servers</td>
            <td className="p-3 border">Files, registry, logs, artifacts</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Memory Forensics</td>
            <td className="p-3 border">RAM analysis</td>
            <td className="p-3 border">Running processes, network connections, malware</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Network Forensics</td>
            <td className="p-3 border">Network traffic</td>
            <td className="p-3 border">Packets, flows, connections</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Mobile Forensics</td>
            <td className="p-3 border">Smartphones, tablets</td>
            <td className="p-3 border">Messages, calls, apps, location</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cloud Forensics</td>
            <td className="p-3 border">Cloud services</td>
            <td className="p-3 border">Logs, snapshots, configurations</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Malware Forensics</td>
            <td className="p-3 border">Malicious software</td>
            <td className="p-3 border">Behavior, IOCs, capabilities</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Evidence Acquisition</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Evidence Acquisition Methods:

ORDER OF VOLATILITY (Collect in this order):
1. Registers, cache
2. Memory (RAM)
3. Network state (connections)
4. Running processes
5. Disk storage
6. Remote logging data
7. Physical configuration
8. Archival media

DISK IMAGING
# Create forensic image with dd
dd if=/dev/sda of=/evidence/disk.img bs=4M conv=noerror,sync

# Verify with hash
md5sum /dev/sda
md5sum /evidence/disk.img

# Better: Use forensic tools
FTK Imager, dc3dd, Guymager

MEMORY ACQUISITION
# Windows
winpmem_mini_x64.exe memory.raw

# Linux
LiME (Linux Memory Extractor)
insmod lime.ko "path=/evidence/memory.lime format=lime"

# Commercial
Magnet RAM Capture
Belkasoft Live RAM Capturer

CHAIN OF CUSTODY
+------------------+----------------------------------+
| Date/Time        | When evidence was handled        |
| Handler          | Who handled it                   |
| Action           | What was done                    |
| Location         | Where evidence was/went          |
| Signature        | Handler's signature              |
+------------------+----------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Forensic Tools</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common Digital Forensics Tools:

DISK FORENSICS
+------------------+----------------------------------+
| Autopsy          | Open source, GUI-based           |
| EnCase           | Commercial, industry standard    |
| FTK              | Commercial, powerful indexing    |
| Sleuth Kit       | Open source, CLI tools           |
+------------------+----------------------------------+

MEMORY FORENSICS
+------------------+----------------------------------+
| Volatility       | Open source, extensive plugins   |
| Rekall           | Open source, Volatility fork     |
| WinDbg           | Microsoft debugger               |
+------------------+----------------------------------+

NETWORK FORENSICS
+------------------+----------------------------------+
| Wireshark        | Packet analysis                  |
| NetworkMiner     | Network forensic analyzer        |
| Zeek (Bro)       | Network security monitor         |
+------------------+----------------------------------+

MOBILE FORENSICS
+------------------+----------------------------------+
| Cellebrite       | Commercial, comprehensive        |
| Oxygen Forensic  | Commercial, mobile extraction    |
| AXIOM            | Magnet commercial tool           |
+------------------+----------------------------------+

MALWARE ANALYSIS
+------------------+----------------------------------+
| IDA Pro          | Disassembler                     |
| Ghidra           | NSA reverse engineering tool     |
| Any.Run          | Interactive sandbox              |
| Cuckoo Sandbox   | Open source sandbox              |
+------------------+----------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Windows Forensic Artifacts</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Artifact</th>
            <th className="p-3 border">Location</th>
            <th className="p-3 border">Information</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Event Logs</td>
            <td className="p-3 border">%SystemRoot%\System32\winevt\Logs</td>
            <td className="p-3 border">Security, system, application events</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Registry</td>
            <td className="p-3 border">%SystemRoot%\System32\config</td>
            <td className="p-3 border">System config, user activity</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Prefetch</td>
            <td className="p-3 border">%SystemRoot%\Prefetch</td>
            <td className="p-3 border">Application execution history</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">$MFT</td>
            <td className="p-3 border">Root of NTFS volume</td>
            <td className="p-3 border">File system metadata</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">NTUSER.DAT</td>
            <td className="p-3 border">%UserProfile%</td>
            <td className="p-3 border">User-specific registry</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Browser Data</td>
            <td className="p-3 border">%AppData%\Local\{"{Browser}"}</td>
            <td className="p-3 border">History, downloads, cache</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Amcache</td>
            <td className="p-3 border">%SystemRoot%\AppCompat\Programs</td>
            <td className="p-3 border">Application compatibility data</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Forensics Analysis</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Volatility Framework Commands:

# Identify memory profile
volatility -f memory.raw imageinfo

# List processes
volatility -f memory.raw --profile=Win10x64 pslist
volatility -f memory.raw --profile=Win10x64 pstree

# Find hidden processes
volatility -f memory.raw --profile=Win10x64 psscan

# Network connections
volatility -f memory.raw --profile=Win10x64 netscan

# Command history
volatility -f memory.raw --profile=Win10x64 cmdscan
volatility -f memory.raw --profile=Win10x64 consoles

# Detect code injection
volatility -f memory.raw --profile=Win10x64 malfind

# Dump suspicious process
volatility -f memory.raw --profile=Win10x64 procdump -p 1234 -D output/

# Registry analysis
volatility -f memory.raw --profile=Win10x64 hivelist
volatility -f memory.raw --profile=Win10x64 printkey -K "Software\Microsoft\Windows\CurrentVersion\Run"`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Forensic Report Elements</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Case Information:</strong> Case number, examiner, dates</li>
      <li><strong>Evidence Description:</strong> Items examined, hashes, chain of custody</li>
      <li><strong>Methodology:</strong> Tools and procedures used</li>
      <li><strong>Findings:</strong> Technical findings with supporting evidence</li>
      <li><strong>Timeline:</strong> Chronological sequence of relevant events</li>
      <li><strong>Conclusions:</strong> Summary of what the evidence shows</li>
      <li><strong>Appendices:</strong> Tool output, hash values, raw data</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Always work on forensic copies, never original evidence</li>
        <li>Maintain chain of custody documentation</li>
        <li>Collect volatile evidence first (memory before disk)</li>
        <li>Verify integrity with cryptographic hashes</li>
        <li>Use write blockers when acquiring disk images</li>
        <li>Document every step of the investigation</li>
      </ul>
    </div>
  </div>
);

export default DigitalForensics;
