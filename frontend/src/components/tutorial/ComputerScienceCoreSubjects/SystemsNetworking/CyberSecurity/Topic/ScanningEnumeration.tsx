import React from "react";

const ScanningEnumeration: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Scanning and Enumeration
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Scanning and enumeration follow reconnaissance and involve actively probing
      the target to discover live hosts, open ports, services, and detailed system
      information. This phase provides the technical details needed for exploitation.
    </p>

    <h2 className="text-3xl font-bold mt-8">Scanning Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Scan Type</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Common Tools</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Host Discovery</td>
            <td className="p-3 border">Find live hosts on network</td>
            <td className="p-3 border">Nmap, ping, ARP scan</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Port Scanning</td>
            <td className="p-3 border">Identify open ports</td>
            <td className="p-3 border">Nmap, masscan, RustScan</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Service Detection</td>
            <td className="p-3 border">Identify running services</td>
            <td className="p-3 border">Nmap -sV, banner grabbing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">OS Detection</td>
            <td className="p-3 border">Identify operating system</td>
            <td className="p-3 border">Nmap -O, p0f</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Vulnerability Scan</td>
            <td className="p-3 border">Find known vulnerabilities</td>
            <td className="p-3 border">Nessus, OpenVAS, Nmap NSE</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Port Scan Techniques</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`PORT SCANNING METHODS:

TCP CONNECT SCAN (-sT)
├── Full TCP handshake (SYN, SYN-ACK, ACK)
├── Most reliable but easily detected
└── No special privileges required

SYN SCAN (-sS) [Stealth]
├── Half-open scan (SYN, SYN-ACK, RST)
├── Faster and less likely logged
└── Requires root/admin privileges

FIN/XMAS/NULL SCANS (-sF/-sX/-sN)
├── Send unusual flag combinations
├── May bypass simple firewalls
└── Unreliable on Windows

UDP SCAN (-sU)
├── Slower than TCP scans
├── Important for services like DNS, SNMP
└── Open ports may not respond

ACK SCAN (-sA)
├── Used to map firewall rules
├── Determines filtered vs unfiltered
└── Cannot determine open/closed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Nmap Command Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Host Discovery
$ nmap -sn 192.168.1.0/24              # Ping sweep
$ nmap -Pn 192.168.1.1                 # Skip host discovery

# Port Scanning
$ nmap -p 22,80,443 192.168.1.1        # Specific ports
$ nmap -p 1-1000 192.168.1.1           # Port range
$ nmap -p- 192.168.1.1                 # All 65535 ports
$ nmap --top-ports 100 192.168.1.1     # Top 100 ports

# Service/Version Detection
$ nmap -sV 192.168.1.1                 # Version detection
$ nmap -sV --version-intensity 5       # Aggressive detection

# OS Detection
$ nmap -O 192.168.1.1                  # OS fingerprinting
$ nmap -A 192.168.1.1                  # Aggressive (OS + version + scripts)

# Stealth Scanning
$ nmap -sS -T2 192.168.1.1             # Slow SYN scan
$ nmap -f 192.168.1.1                  # Fragment packets
$ nmap -D RND:10 192.168.1.1           # Decoy scan

# NSE Scripts
$ nmap --script=vuln 192.168.1.1       # Vulnerability scripts
$ nmap --script=default 192.168.1.1    # Default scripts
$ nmap --script=smb-enum-* 192.168.1.1 # SMB enumeration

# Output Options
$ nmap -oN scan.txt 192.168.1.1        # Normal output
$ nmap -oX scan.xml 192.168.1.1        # XML output
$ nmap -oA scan 192.168.1.1            # All formats`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Enumeration Techniques</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Service</th>
            <th className="p-3 border">Port</th>
            <th className="p-3 border">Enumeration Tools</th>
            <th className="p-3 border">Information Gathered</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">SMB</td>
            <td className="p-3 border">445, 139</td>
            <td className="p-3 border">smbclient, enum4linux, CrackMapExec</td>
            <td className="p-3 border">Shares, users, policies</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">LDAP</td>
            <td className="p-3 border">389, 636</td>
            <td className="p-3 border">ldapsearch, ADExplorer</td>
            <td className="p-3 border">Users, groups, OUs, ACLs</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SNMP</td>
            <td className="p-3 border">161</td>
            <td className="p-3 border">snmpwalk, onesixtyone</td>
            <td className="p-3 border">System info, interfaces, routes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DNS</td>
            <td className="p-3 border">53</td>
            <td className="p-3 border">dig, dnsenum, dnsrecon</td>
            <td className="p-3 border">Zone transfers, records</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">NFS</td>
            <td className="p-3 border">2049</td>
            <td className="p-3 border">showmount, nfsstat</td>
            <td className="p-3 border">Exported shares, permissions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">HTTP/HTTPS</td>
            <td className="p-3 border">80, 443</td>
            <td className="p-3 border">nikto, gobuster, dirb</td>
            <td className="p-3 border">Directories, files, vulns</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">SMB Enumeration Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# List SMB shares
$ smbclient -L //192.168.1.1 -N

# Connect to share
$ smbclient //192.168.1.1/share -U username

# Enumerate with enum4linux
$ enum4linux -a 192.168.1.1

# CrackMapExec enumeration
$ crackmapexec smb 192.168.1.1 -u '' -p '' --shares
$ crackmapexec smb 192.168.1.1 -u user -p pass --users

# Nmap SMB scripts
$ nmap --script=smb-enum-shares,smb-enum-users 192.168.1.1`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>SYN scan is the default and most common technique</li>
        <li>Service version detection helps identify exploitable software</li>
        <li>Nmap NSE scripts automate many enumeration tasks</li>
        <li>SMB and LDAP enumeration are critical in Windows environments</li>
        <li>Slow scans help evade detection but take longer</li>
        <li>Always document all discovered services and versions</li>
      </ul>
    </div>
  </div>
);

export default ScanningEnumeration;
