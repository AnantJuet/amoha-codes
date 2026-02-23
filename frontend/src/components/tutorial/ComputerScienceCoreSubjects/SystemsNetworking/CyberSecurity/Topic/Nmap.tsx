import React from "react";

const Nmap: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Nmap - Network Mapper
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Nmap (Network Mapper) is a free and open-source network scanning tool used for network
      discovery and security auditing. It is one of the most widely used tools in cybersecurity
      for port scanning, host discovery, service detection, and vulnerability assessment.
    </p>

    <h2 className="text-3xl font-bold mt-8">Nmap Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Nmap Capabilities:

+------------------------------------------------------------------+
|                        NMAP SCANNER                               |
+------------------------------------------------------------------+
|                                                                   |
|  HOST DISCOVERY          PORT SCANNING         SERVICE DETECTION  |
|  - Ping sweep            - TCP SYN scan        - Version detect   |
|  - ARP scan              - TCP connect         - OS fingerprint   |
|  - ICMP scan             - UDP scan            - Script scanning  |
|                          - Stealth scans       - NSE scripts      |
|                                                                   |
+------------------------------------------------------------------+
|                                                                   |
|  OUTPUT FORMATS: Normal | XML | Grepable | Script Kiddie         |
|                                                                   |
+------------------------------------------------------------------+

Installation:
  Linux:   sudo apt install nmap
  macOS:   brew install nmap
  Windows: Download from nmap.org`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Scan Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Scan Type</th>
            <th className="p-3 border">Command</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">SYN Scan (Stealth)</td>
            <td className="p-3 border font-mono text-gray-900">nmap -sS target</td>
            <td className="p-3 border">Half-open scan, fast and stealthy</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">TCP Connect</td>
            <td className="p-3 border font-mono text-gray-900">nmap -sT target</td>
            <td className="p-3 border">Full TCP connection, no root needed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">UDP Scan</td>
            <td className="p-3 border font-mono text-gray-900">nmap -sU target</td>
            <td className="p-3 border">Scan UDP ports, slower than TCP</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Ping Scan</td>
            <td className="p-3 border font-mono text-gray-900">nmap -sn target</td>
            <td className="p-3 border">Host discovery only, no port scan</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Version Detection</td>
            <td className="p-3 border font-mono text-gray-900">nmap -sV target</td>
            <td className="p-3 border">Detect service versions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">OS Detection</td>
            <td className="p-3 border font-mono text-gray-900">nmap -O target</td>
            <td className="p-3 border">Identify operating system</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Nmap Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic Scan Examples:

# 1. Scan single host
nmap 192.168.1.1

# 2. Scan entire subnet
nmap 192.168.1.0/24

# 3. Scan specific ports
nmap -p 22,80,443 192.168.1.1

# 4. Scan port range
nmap -p 1-1000 192.168.1.1

# 5. Scan all ports
nmap -p- 192.168.1.1

# 6. Fast scan (top 100 ports)
nmap -F 192.168.1.1

# 7. Aggressive scan (OS, version, scripts, traceroute)
nmap -A 192.168.1.1

# 8. Scan multiple targets
nmap 192.168.1.1 192.168.1.2 192.168.1.3

# 9. Scan from file
nmap -iL targets.txt

# 10. Save output to file
nmap -oN output.txt 192.168.1.1
nmap -oX output.xml 192.168.1.1`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Port States</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">State</th>
            <th className="p-3 border">Meaning</th>
            <th className="p-3 border">Response</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600 dark:text-green-400">open</td>
            <td className="p-3 border">Service accepting connections</td>
            <td className="p-3 border">SYN-ACK received</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-red-600 dark:text-red-400">closed</td>
            <td className="p-3 border">No service listening</td>
            <td className="p-3 border">RST received</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-yellow-600 dark:text-yellow-400">filtered</td>
            <td className="p-3 border">Firewall blocking</td>
            <td className="p-3 border">No response or ICMP error</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">unfiltered</td>
            <td className="p-3 border">Accessible but unknown state</td>
            <td className="p-3 border">ACK scan result</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">open|filtered</td>
            <td className="p-3 border">Cannot determine</td>
            <td className="p-3 border">No response (UDP common)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Nmap Scripting Engine (NSE)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Nmap Scripting Engine (NSE):

# Categories of scripts:
auth     - Authentication related
broadcast - Network broadcast discovery
default  - Default scripts (-sC)
discovery - Additional discovery
exploit  - Exploitation scripts
external - External service queries
fuzzer   - Fuzzing tests
intrusive - Intrusive scripts
malware  - Malware detection
safe     - Safe to run
version  - Version detection
vuln     - Vulnerability detection

# Usage Examples:

# Run default scripts
nmap -sC 192.168.1.1

# Run vulnerability scripts
nmap --script vuln 192.168.1.1

# Run specific script
nmap --script http-title 192.168.1.1

# Run multiple scripts
nmap --script "http-* and not intrusive" 192.168.1.1

# Script with arguments
nmap --script http-brute --script-args userdb=users.txt 192.168.1.1

# Common vulnerability scripts:
nmap --script smb-vuln-ms17-010 target  # EternalBlue
nmap --script ssl-heartbleed target      # Heartbleed
nmap --script http-sql-injection target  # SQL Injection`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Timing and Performance</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Template</th>
            <th className="p-3 border">Option</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Paranoid</td>
            <td className="p-3 border font-mono text-gray-900">-T0</td>
            <td className="p-3 border">IDS evasion, very slow</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Sneaky</td>
            <td className="p-3 border font-mono text-gray-900">-T1</td>
            <td className="p-3 border">IDS evasion</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Polite</td>
            <td className="p-3 border font-mono text-gray-900">-T2</td>
            <td className="p-3 border">Reduced bandwidth usage</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Normal</td>
            <td className="p-3 border font-mono text-gray-900">-T3</td>
            <td className="p-3 border">Default timing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Aggressive</td>
            <td className="p-3 border font-mono text-gray-900">-T4</td>
            <td className="p-3 border">Fast reliable networks</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Insane</td>
            <td className="p-3 border font-mono text-gray-900">-T5</td>
            <td className="p-3 border">Very fast, may miss ports</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Evasion Techniques</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Firewall/IDS Evasion Options:

# Fragment packets
nmap -f target

# Use decoys
nmap -D RND:10 target
nmap -D decoy1,decoy2,ME target

# Spoof source IP
nmap -S spoofed_ip target

# Use specific source port
nmap --source-port 53 target

# Randomize target order
nmap --randomize-hosts target_range

# Append random data
nmap --data-length 25 target

# Use different MTU
nmap --mtu 24 target`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Always obtain proper authorization before scanning networks</li>
        <li>SYN scan (-sS) is the default and most popular scan type</li>
        <li>Use -sV for service version detection and -O for OS detection</li>
        <li>NSE scripts extend Nmap with powerful capabilities</li>
        <li>Timing templates (-T0 to -T5) balance speed and stealth</li>
        <li>Save scan results in XML format for easy parsing and reporting</li>
      </ul>
    </div>
  </div>
);

export default Nmap;
