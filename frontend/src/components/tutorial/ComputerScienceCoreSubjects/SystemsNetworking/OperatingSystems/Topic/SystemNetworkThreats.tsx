import React from 'react';

const SystemNetworkThreats: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      System and Network Threats
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      System and network threats exploit vulnerabilities in operating system services
      and network protocols to gain unauthorized access, disrupt services, or steal
      information. These threats target the infrastructure rather than individual
      programs, making them particularly dangerous as they can affect entire organizations.
    </p>

    {/* System vs Network Threats */}
    <h2 className="text-3xl font-bold mt-8">System vs Network Threats</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">System Threats</th>
            <th className="p-3 border">Network Threats</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Target</td>
            <td className="p-3 border">OS services, local processes</td>
            <td className="p-3 border">Network protocols, communication</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Scope</td>
            <td className="p-3 border">Single system</td>
            <td className="p-3 border">Multiple systems/entire network</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Examples</td>
            <td className="p-3 border">Privilege escalation, rootkits</td>
            <td className="p-3 border">DoS, packet sniffing, spoofing</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Access</td>
            <td className="p-3 border">Often requires initial access</td>
            <td className="p-3 border">Can be remote/anonymous</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* System Threats Section */}
    <h2 className="text-3xl font-bold mt-8">System Threats</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Port Scanning</h3>
    <p className="leading-relaxed">
      Port scanning is a reconnaissance technique used to discover open ports
      and services running on a target system. Attackers use this information
      to identify potential vulnerabilities.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Port Scanning Process:
===============================================================================

    Attacker                                Target System
    ────────                                ─────────────
        │                                   ┌───────────────────┐
        │                                   │ Port 21: FTP      │
        │    ──────► SYN (Port 21) ──────►  │ Port 22: SSH      │
        │    ◄────── SYN-ACK ◄──────────    │ Port 23: Closed   │
        │                                   │ Port 80: HTTP     │
        │    ──────► SYN (Port 22) ──────►  │ Port 443: HTTPS   │
        │    ◄────── SYN-ACK ◄──────────    │ Port 3306: MySQL  │
        │                                   └───────────────────┘
        │    ──────► SYN (Port 23) ──────►
        │    ◄────── RST (Closed) ◄──────


Port Scan Results:
═══════════════════════════════════════════════════════════════════════════
$ nmap -sV 192.168.1.100

PORT     STATE    SERVICE    VERSION
21/tcp   open     ftp        vsftpd 2.3.4 (vulnerable!)
22/tcp   open     ssh        OpenSSH 7.9
23/tcp   closed   telnet
80/tcp   open     http       Apache 2.4.41
443/tcp  open     https      Apache 2.4.41
3306/tcp open     mysql      MySQL 5.7.28

[Attacker now knows services and versions to exploit]
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Privilege Escalation</h3>
    <p className="leading-relaxed">
      Privilege escalation occurs when an attacker gains higher-level permissions
      than they are authorized for, typically escalating from a regular user to
      administrator or root access.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Privilege Escalation:
===============================================================================

Types of Privilege Escalation:
─────────────────────────────────────────────────────────────────────────────

Vertical Escalation:              Horizontal Escalation:
(Lower to Higher Privilege)       (Same Privilege, Different User)

    ┌─────────────┐                   ┌─────────────┐   ┌─────────────┐
    │    ROOT     │                   │   User A    │   │   User B    │
    │  (Target)   │                   │  (Attacker) │   │  (Target)   │
    └──────▲──────┘                   └──────┬──────┘   └──────▲──────┘
           │                                 │                 │
           │ Escalate                        └────────────────┘
           │                                    Access B's data
    ┌──────┴──────┐
    │ Regular     │
    │ User        │
    │ (Attacker)  │
    └─────────────┘


Common Escalation Vectors:
═══════════════════════════════════════════════════════════════════════════

┌───────────────────────┬─────────────────────────────────────────────────────┐
│ SUID/SGID Binaries    │ Exploiting misconfigured set-user-id programs      │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ Kernel Exploits       │ CVE-2021-4034 (Polkit), Dirty COW                   │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ Sudo Misconfiguration │ NOPASSWD entries, vulnerable sudo versions         │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ Cron Jobs             │ World-writable scripts run by root                 │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ Weak Permissions      │ Sensitive files readable by all users              │
└───────────────────────┴─────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Rootkits</h3>
    <p className="leading-relaxed">
      A rootkit is a collection of software tools that enables unauthorized access
      to a computer while actively hiding its presence. Rootkits can modify the
      operating system to conceal malicious activity.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Rootkit Levels:
===============================================================================

Application Level:      User Space Rootkits     Kernel Rootkits     Firmware
────────────────────────────────────────────────────────────────────────────

    ┌────────────────────────────────────────────────────────────────────┐
    │                         USER SPACE                                  │
    │    ┌──────────────────┐    ┌──────────────────┐                    │
    │    │ Modified         │    │ Malicious        │ ← Library Rootkit │
    │    │ Binaries (ps,ls) │    │ Shared Libs      │                    │
    │    └──────────────────┘    └──────────────────┘                    │
    └────────────────────────────────────────────────────────────────────┘
                                        │
    ┌────────────────────────────────────▼───────────────────────────────┐
    │                      KERNEL SPACE                                   │
    │    ┌──────────────────┐    ┌──────────────────┐                    │
    │    │ LKM Rootkit      │    │ Syscall Table    │ ← Kernel Rootkit  │
    │    │ (Loadable Module)│    │ Hooking          │                    │
    │    └──────────────────┘    └──────────────────┘                    │
    └────────────────────────────────────────────────────────────────────┘
                                        │
    ┌────────────────────────────────────▼───────────────────────────────┐
    │                      FIRMWARE/BIOS                                  │
    │    ┌──────────────────────────────────────────────────────┐        │
    │    │ Bootkits - Infect MBR/UEFI, persist across reboots   │        │
    │    └──────────────────────────────────────────────────────┘        │
    └────────────────────────────────────────────────────────────────────┘


Rootkit Hiding Techniques:
═══════════════════════════════════════════════════════════════════════════
- Process hiding:    Not shown in ps, top commands
- File hiding:       Not visible in directory listings
- Network hiding:    Hide open ports and connections
- Log modification:  Remove evidence from system logs
`}
      </pre>
    </div>

    {/* Network Threats Section */}
    <h2 className="text-3xl font-bold mt-8">Network Threats</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Denial of Service (DoS) Attacks</h3>
    <p className="leading-relaxed">
      DoS attacks aim to make a system or network resource unavailable to legitimate
      users by overwhelming it with traffic or exploiting vulnerabilities to crash
      the service.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Types of DoS Attacks:
===============================================================================

1. Volumetric Attack (Bandwidth Exhaustion):
─────────────────────────────────────────────────────────────────────────────

                    ┌─────────────────┐
    Attacker ──────►│                 │
    Attacker ──────►│   TARGET        │◄──── Normal traffic blocked
    Attacker ──────►│   SERVER        │
    Attacker ──────►│                 │
    Attacker ──────►│ [Overwhelmed]   │
                    └─────────────────┘

    Examples: UDP Flood, ICMP Flood, Amplification attacks


2. Protocol Attack (Resource Exhaustion):
─────────────────────────────────────────────────────────────────────────────

    SYN Flood Attack:

    Attacker                              Server
        │                                    │
        │ ──── SYN (spoofed IP) ────────►   │ Allocates memory
        │ ──── SYN (spoofed IP) ────────►   │ Allocates more
        │ ──── SYN (spoofed IP) ────────►   │ Connection table
        │ ──── SYN (spoofed IP) ────────►   │ fills up...
        │ ──── SYN (spoofed IP) ────────►   │
        │                                    │ [EXHAUSTED]
        │                                    │ Cannot accept
        │                                    │ legitimate connections


3. Application Layer Attack:
─────────────────────────────────────────────────────────────────────────────

    Slowloris Attack:

    GET / HTTP/1.1\r\n
    Host: target.com\r\n
    X-a: b\r\n          ← Never completes the request
    X-a: b\r\n          ← Keeps connection open
    X-a: b\r\n          ← Exhausts server's connection pool
    ...
    [Never sends final \r\n\r\n]
`}
      </pre>
    </div>

    {/* DDoS Attack */}
    <h3 className="text-2xl font-semibold mt-6">2. Distributed DoS (DDoS) Attacks</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
DDoS Attack Using Botnet:
===============================================================================

                            ┌─────────────────┐
                            │    ATTACKER     │
                            │  Command & Ctrl │
                            └────────┬────────┘
                                     │
                                     │ Commands
                                     ▼
        ┌────────────────────────────────────────────────────────┐
        │                      BOTNET                            │
        │  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐ │
        │  │ Bot │  │ Bot │  │ Bot │  │ Bot │  │ Bot │  │ Bot │ │
        │  └──┬──┘  └──┬──┘  └──┬──┘  └──┬──┘  └──┬──┘  └──┬──┘ │
        └─────┼────────┼───────┼────────┼────────┼────────┼─────┘
              │        │       │        │        │        │
              └────────┴───────┴────┬───┴────────┴────────┘
                                    │
                                    │ Massive traffic
                                    ▼
                            ┌─────────────────┐
                            │     TARGET      │
                            │     SERVER      │
                            │                 │
                            │   [OFFLINE]     │
                            └─────────────────┘


DDoS Attack Statistics:
═══════════════════════════════════════════════════════════════════════════
- Largest recorded: 3.47 Tbps (2021)
- Average attack: 100+ Gbps
- Botnets: Millions of compromised devices (IoT, computers)
- Mitigation: CDN, traffic scrubbing, rate limiting
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Packet Sniffing</h3>
    <p className="leading-relaxed">
      Packet sniffing is the practice of capturing and analyzing network traffic.
      While used legitimately for network troubleshooting, attackers use it to
      intercept sensitive data like passwords and session tokens.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Packet Sniffing Attack:
===============================================================================

Normal Network Communication:

    User                  Network                   Server
      │                      │                        │
      │ ── Password:abc123 ──┼─────────────────────► │
      │                      │                        │

Sniffing Attack:

    User                  Network                   Server
      │                      │                        │
      │ ── Password:abc123 ──┼─────────────────────► │
      │                      │                        │
                     ┌───────┴───────┐
                     │   ATTACKER    │
                     │   (Sniffing)  │
                     │               │
                     │ Captured:     │
                     │ Password:     │
                     │ abc123        │
                     └───────────────┘


Promiscuous Mode:
═══════════════════════════════════════════════════════════════════════════
- Normal: NIC only receives frames addressed to its MAC
- Promiscuous: NIC receives ALL frames on the network segment
- Attacker enables promiscuous mode to capture all traffic
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. Spoofing Attacks</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">What is Faked</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">IP Spoofing</td>
            <td className="p-3 border">Source IP address</td>
            <td className="p-3 border">Hide identity, bypass IP-based auth</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">ARP Spoofing</td>
            <td className="p-3 border">MAC address mappings</td>
            <td className="p-3 border">Redirect traffic through attacker</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">DNS Spoofing</td>
            <td className="p-3 border">DNS responses</td>
            <td className="p-3 border">Redirect to malicious sites</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Email Spoofing</td>
            <td className="p-3 border">Sender address</td>
            <td className="p-3 border">Phishing, impersonation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">5. Man-in-the-Middle (MITM) Attack</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Man-in-the-Middle Attack:
===============================================================================

Normal Communication:
─────────────────────────────────────────────────────────────────────────────

    Client ◄────────────────────────────────────────────► Server
                        Direct connection


MITM Attack:
─────────────────────────────────────────────────────────────────────────────

    Client ◄──────────► ATTACKER ◄──────────► Server
                            │
                  ┌─────────┴─────────┐
                  │                   │
                  │  - Intercepts     │
                  │  - Reads data     │
                  │  - Modifies data  │
                  │  - Impersonates   │
                  │    both sides     │
                  │                   │
                  └───────────────────┘

    Client thinks it's talking to Server
    Server thinks it's talking to Client
    Attacker sees and controls everything!


MITM Techniques:
═══════════════════════════════════════════════════════════════════════════
- ARP Poisoning: Redirect LAN traffic
- DNS Spoofing: Redirect domain lookups
- SSL Stripping: Downgrade HTTPS to HTTP
- Evil Twin WiFi: Fake access point
`}
      </pre>
    </div>

    {/* Countermeasures */}
    <h2 className="text-3xl font-bold mt-8">Countermeasures</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Threat</th>
            <th className="p-3 border">Countermeasures</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Port Scanning</td>
            <td className="p-3 border">Firewalls, IDS/IPS, close unused ports</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Privilege Escalation</td>
            <td className="p-3 border">Patching, least privilege, RBAC</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Rootkits</td>
            <td className="p-3 border">Secure boot, integrity checking, rootkit scanners</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">DoS/DDoS</td>
            <td className="p-3 border">Rate limiting, CDN, traffic scrubbing, SYN cookies</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Sniffing</td>
            <td className="p-3 border">Encryption (TLS/SSL), VPN, switched networks</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Spoofing</td>
            <td className="p-3 border">Packet filtering, DNSSEC, ARP inspection</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">MITM</td>
            <td className="p-3 border">End-to-end encryption, certificate pinning</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>System threats target OS services and local resources</li>
      <li>Network threats exploit communication protocols and infrastructure</li>
      <li>DoS attacks disrupt availability; DDoS uses botnets for amplification</li>
      <li>Sniffing captures unencrypted network traffic</li>
      <li>Spoofing falsifies identity information (IP, MAC, DNS)</li>
      <li>MITM attacks intercept and potentially modify communications</li>
      <li>Defense requires encryption, monitoring, and proper configuration</li>
    </ul>
  </div>
);

export default SystemNetworkThreats;
