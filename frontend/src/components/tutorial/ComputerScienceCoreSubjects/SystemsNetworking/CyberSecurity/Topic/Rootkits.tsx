import React from "react";

const Rootkits: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Rootkits
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A rootkit is a collection of malicious software designed to provide unauthorized access
      to a computer while actively hiding its presence. Rootkits operate at deep system levels,
      modifying operating system components to evade detection by security software. They are
      among the most dangerous and difficult-to-detect forms of malware.
    </p>

    <h2 className="text-3xl font-bold mt-8">Rootkit Types by Level</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`System Privilege Levels:

Ring -1: Hypervisor (Virtual Machine Monitor)
         [Hypervisor Rootkits - Blue Pill]
         |
Ring 0:  Kernel Mode (OS Core)
         [Kernel Rootkits - Most dangerous]
         |
Ring 1:  Device Drivers
         [Driver Rootkits]
         |
Ring 2:  Device Drivers (less privileged)
         |
Ring 3:  User Mode (Applications)
         [User-mode Rootkits - Easiest to detect]

The lower the ring, the more control the rootkit has
Kernel rootkits can hide anything from Ring 3 processes`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Rootkit Categories</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Target</th>
            <th className="p-3 border">Detection Difficulty</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">User-mode</td>
            <td className="p-3 border">Application level</td>
            <td className="p-3 border">Moderate</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Kernel-mode</td>
            <td className="p-3 border">OS kernel</td>
            <td className="p-3 border">Very Hard</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Bootkit</td>
            <td className="p-3 border">Boot process (MBR/UEFI)</td>
            <td className="p-3 border">Extremely Hard</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hypervisor</td>
            <td className="p-3 border">Below OS</td>
            <td className="p-3 border">Near Impossible</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Firmware</td>
            <td className="p-3 border">BIOS/UEFI/hardware</td>
            <td className="p-3 border">Extremely Hard</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Rootkit Hiding Techniques</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Rootkit Concealment Methods:

1. API HOOKING
   Normal: App --> API --> Result (shows malware)
   Hooked: App --> [Hook] --> Filtered Result (malware hidden)

   Example: Hooks NtQueryDirectoryFile
   - Intercepts file listing requests
   - Removes rootkit files from results

2. DIRECT KERNEL OBJECT MANIPULATION (DKOM)
   - Modifies kernel data structures
   - Unlinks processes from process list
   - Process runs but is invisible

3. SYSTEM CALL TABLE MODIFICATION
   - Replaces syscall handlers
   - Controls all kernel interactions
   - Filters all sensitive operations

4. VIRTUAL MEMORY SUBVERSION
   - Hides in unallocated memory
   - Modifies page tables
   - Memory forensics evasion

5. INTERRUPT DESCRIPTOR TABLE (IDT) HOOKS
   - Intercepts hardware/software interrupts
   - Controls system at lowest level`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Notable Rootkits</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Famous Rootkits in History:

SONY BMG ROOTKIT (2005)
- Installed via music CDs
- Hidden copy protection
- Created security vulnerability
- Major PR disaster for Sony

STUXNET (2010)
- Nation-state cyber weapon
- Targeted Iranian nuclear facilities
- Used multiple zero-days
- Kernel driver rootkit component

TDL/TDSS (2008-2011)
- Bootkit + kernel rootkit
- Infected millions of computers
- Sophisticated anti-detection
- Sold as malware-as-a-service

LOJAX (2018)
- First UEFI rootkit in the wild
- Survives OS reinstall
- Survives hard drive replacement
- APT28 (Fancy Bear) attributed

COBALTSTRIKE (Legitimate tool, often misused)
- Professional red team toolkit
- Kernel mode implants
- Memory-only operation`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detection Methods</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Rootkit Detection Approaches:

1. SIGNATURE-BASED (Limited effectiveness)
   - Known rootkit patterns
   - Easily evaded by new variants

2. BEHAVIOR-BASED
   - Monitor for hooking activity
   - Detect hidden processes
   - Watch for kernel modifications

3. CROSS-VIEW COMPARISON
   - Compare high-level vs low-level views
   - Discrepancies indicate hiding

   Example:
   User API says: 50 files
   Raw disk read: 51 files
   --> 1 hidden file detected!

4. INTEGRITY CHECKING
   - Hash critical system files
   - Compare against known good
   - Detect unauthorized changes

5. BOOT FROM CLEAN MEDIA
   - Scan from trusted environment
   - Rootkit cannot hide from external OS

TOOLS:
- GMER, RootkitRevealer
- Volatility (memory forensics)
- chkrootkit, rkhunter (Linux)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Rootkits hide malware by modifying OS components</li>
        <li>Kernel rootkits operate at Ring 0 with full system access</li>
        <li>Bootkits and firmware rootkits survive OS reinstallation</li>
        <li>Detection requires comparing different system views</li>
        <li>Complete removal often requires clean OS installation</li>
        <li>Secure Boot helps prevent bootkit infections</li>
      </ul>
    </div>
  </div>
);

export default Rootkits;
