import React from "react";

const KaliLinux: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Kali Linux - Security Testing Distribution
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Kali Linux is a Debian-based Linux distribution designed for digital forensics and
      penetration testing. It is maintained by Offensive Security and comes pre-installed
      with over 600 security tools, making it the go-to platform for security professionals,
      ethical hackers, and cybersecurity researchers.
    </p>

    <h2 className="text-3xl font-bold mt-8">Kali Linux Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Kali Linux Tool Categories:

+------------------------------------------------------------------+
|                        KALI LINUX                                 |
+------------------------------------------------------------------+
|                                                                   |
|  INFORMATION         VULNERABILITY        EXPLOITATION            |
|  GATHERING           ANALYSIS             TOOLS                   |
|  - Nmap              - Nessus             - Metasploit            |
|  - Maltego           - OpenVAS            - BeEF                  |
|  - Recon-ng          - Nikto              - SQLMap                |
|                                                                   |
|  WIRELESS            WEB                  PASSWORD                |
|  ATTACKS             APPLICATIONS         ATTACKS                 |
|  - Aircrack-ng       - Burp Suite         - Hydra                 |
|  - Kismet            - OWASP ZAP          - John the Ripper       |
|  - Wifite            - Gobuster           - Hashcat               |
|                                                                   |
|  FORENSICS           SOCIAL               SNIFFING &              |
|  TOOLS               ENGINEERING          SPOOFING                |
|  - Autopsy           - SET                - Wireshark             |
|  - Volatility        - Maltego            - Ettercap              |
|  - Foremost          - Gophish            - Bettercap             |
|                                                                   |
+------------------------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Installation Options</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Use Case</th>
            <th className="p-3 border">Pros/Cons</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Bare Metal</td>
            <td className="p-3 border">Dedicated security workstation</td>
            <td className="p-3 border">Best performance, full hardware access</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Virtual Machine</td>
            <td className="p-3 border">Learning, safe testing</td>
            <td className="p-3 border">Easy snapshots, isolated environment</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Live USB</td>
            <td className="p-3 border">Portable, on-demand use</td>
            <td className="p-3 border">No installation, can add persistence</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">WSL2</td>
            <td className="p-3 border">Windows integration</td>
            <td className="p-3 border">Convenient, limited hardware access</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Docker</td>
            <td className="p-3 border">Container-based tools</td>
            <td className="p-3 border">Lightweight, CI/CD integration</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cloud (AWS/Azure)</td>
            <td className="p-3 border">Remote testing</td>
            <td className="p-3 border">Scalable, different source IP</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Essential Commands</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Basic Kali Linux Commands:

# System Update
sudo apt update && sudo apt upgrade -y

# Install specific tool
sudo apt install <tool-name>

# Search for tools
apt search <keyword>

# List installed tools
dpkg -l | grep <tool-name>

# Update Metasploit
msfupdate

# Update Kali repositories
sudo apt update

# Full system upgrade
sudo apt full-upgrade

# Clean up
sudo apt autoremove

# Start services
sudo systemctl start postgresql
sudo systemctl start apache2
sudo systemctl start ssh

# Enable services on boot
sudo systemctl enable postgresql
sudo systemctl enable ssh`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Popular Tool Categories</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Kali Tools by Category:

INFORMATION GATHERING
├── nmap          - Network scanner
├── maltego       - OSINT and link analysis
├── recon-ng      - Web reconnaissance
├── theHarvester  - Email and domain harvesting
├── whois         - Domain lookup
└── dnsenum       - DNS enumeration

WEB APPLICATION TESTING
├── burpsuite     - Web proxy and scanner
├── nikto         - Web server scanner
├── gobuster      - Directory brute force
├── sqlmap        - SQL injection automation
├── wpscan        - WordPress scanner
└── dirb          - Directory brute forcer

WIRELESS TESTING
├── aircrack-ng   - WiFi security tools
├── kismet        - Wireless detector and sniffer
├── wifite        - Automated WiFi auditing
├── fern-wifi     - GUI WiFi cracker
└── reaver        - WPS attack tool

PASSWORD ATTACKS
├── hydra         - Network login brute forcer
├── john          - Password cracker
├── hashcat       - GPU password cracker
├── crunch        - Wordlist generator
└── cewl          - Custom wordlist generator

EXPLOITATION
├── metasploit    - Exploitation framework
├── searchsploit  - Exploit database search
├── beef-xss      - Browser exploitation
├── setoolkit     - Social engineering toolkit
└── msfvenom      - Payload generator`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Penetration Testing Workflow</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Phase</th>
            <th className="p-3 border">Tools</th>
            <th className="p-3 border">Objective</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1. Reconnaissance</td>
            <td className="p-3 border">nmap, maltego, whois</td>
            <td className="p-3 border">Gather target information</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2. Scanning</td>
            <td className="p-3 border">nmap, nikto, openvas</td>
            <td className="p-3 border">Identify vulnerabilities</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3. Exploitation</td>
            <td className="p-3 border">metasploit, sqlmap</td>
            <td className="p-3 border">Gain access to systems</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4. Post-Exploitation</td>
            <td className="p-3 border">meterpreter, mimikatz</td>
            <td className="p-3 border">Maintain access, pivot</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">5. Reporting</td>
            <td className="p-3 border">Dradis, Faraday</td>
            <td className="p-3 border">Document findings</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Kali Best Practices</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Kali Linux Best Practices:

1. SECURITY
   - Change default credentials immediately
   - Use non-root user for daily tasks
   - Keep system updated
   - Use encrypted storage

2. VIRTUAL MACHINE SETUP
   - Allocate 4+ GB RAM
   - 80+ GB disk space
   - Enable VM snapshots
   - Configure network adapters appropriately

3. BEFORE TESTING
   - Obtain written authorization
   - Define scope clearly
   - Set up logging
   - Prepare backup tools

4. DURING TESTING
   - Document everything
   - Use workspaces/projects
   - Take screenshots
   - Monitor for issues

5. AFTER TESTING
   - Clean up artifacts
   - Secure findings
   - Generate reports
   - Delete sensitive data`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Useful Resources</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Official Documentation:</strong> kali.org/docs</li>
      <li><strong>Tool Documentation:</strong> kali.org/tools</li>
      <li><strong>Kali Forums:</strong> forums.kali.org</li>
      <li><strong>Offensive Security Training:</strong> offsec.com</li>
      <li><strong>Practice Labs:</strong> HackTheBox, TryHackMe, VulnHub</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Kali is designed for security testing, not as a daily driver OS</li>
        <li>Always obtain proper authorization before testing</li>
        <li>Use virtual machines for safe, isolated testing</li>
        <li>Keep the system and tools regularly updated</li>
        <li>Familiarize yourself with Linux command line basics</li>
        <li>Practice in legal environments like CTF platforms</li>
      </ul>
    </div>
  </div>
);

export default KaliLinux;
