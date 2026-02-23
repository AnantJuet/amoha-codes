import React from 'react';

const ApplicationLayer: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Application Layer (Layer 7) - OSI Model
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Application Layer is the seventh and topmost layer of the OSI model. It is the layer
      closest to the end user and provides network services directly to user applications. This
      layer serves as the interface between the network and the software applications that need
      to communicate over the network. It includes protocols for email, file transfer, web
      browsing, and other network services.
    </p>

    {/* Position in OSI */}
    <h2 className="text-3xl font-bold mt-8">Position in OSI Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  OSI Model:

  +-------------------+
  | 7. APPLICATION <--+  (You are here!)
  +-------------------+
  | 6. Presentation   |
  +-------------------+
  | 5. Session        |
  +-------------------+
  | 4. Transport      |
  +-------------------+
  | 3. Network        |
  +-------------------+
  | 2. Data Link      |
  +-------------------+
  | 1. Physical       |
  +-------------------+

  Data Unit: Data (Message)
  Interface: Between user applications and network
  Protocols: HTTP, FTP, SMTP, DNS, DHCP, Telnet, SSH, SNMP
`}</pre>
    </div>

    {/* Functions */}
    <h2 className="text-3xl font-bold mt-8">Functions of Application Layer</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Network Virtual Terminal</td>
            <td className="p-3 border">Enables remote login to hosts (Telnet, SSH)</td>
          </tr>
          <tr>
            <td className="p-3 border">File Transfer</td>
            <td className="p-3 border">Transfer files between systems (FTP, TFTP, SFTP)</td>
          </tr>
          <tr>
            <td className="p-3 border">Mail Services</td>
            <td className="p-3 border">Send and receive email (SMTP, POP3, IMAP)</td>
          </tr>
          <tr>
            <td className="p-3 border">Directory Services</td>
            <td className="p-3 border">Resolve domain names to IP addresses (DNS)</td>
          </tr>
          <tr>
            <td className="p-3 border">Web Services</td>
            <td className="p-3 border">Deliver web content (HTTP, HTTPS)</td>
          </tr>
          <tr>
            <td className="p-3 border">Network Management</td>
            <td className="p-3 border">Monitor and manage network devices (SNMP)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* HTTP */}
    <h2 className="text-3xl font-bold mt-8">HTTP (Hypertext Transfer Protocol)</h2>
    <p className="leading-relaxed">
      HTTP is the foundation of data communication on the World Wide Web. It is a request-response
      protocol where clients (browsers) request resources and servers respond with the requested content.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  HTTP Request-Response Model:

  Client (Browser)                              Server
       |                                          |
       |   HTTP Request                           |
       |   GET /index.html HTTP/1.1              |
       |   Host: www.example.com                  |
       |----------------------------------------->|
       |                                          |
       |                                   [Process]
       |                                          |
       |   HTTP Response                          |
       |   HTTP/1.1 200 OK                        |
       |   Content-Type: text/html                |
       |   <html>...</html>                       |
       |<-----------------------------------------|
       |                                          |


  HTTP Methods:
  +--------+------------------------------------------+
  | Method | Purpose                                  |
  +--------+------------------------------------------+
  | GET    | Retrieve resource (read-only)            |
  | POST   | Submit data to server (create)           |
  | PUT    | Update entire resource                   |
  | PATCH  | Partial update of resource               |
  | DELETE | Delete resource                          |
  | HEAD   | GET without response body                |
  | OPTIONS| Get supported methods                    |
  +--------+------------------------------------------+


  HTTP Status Codes:
  +------+----------------+---------------------------+
  | Code | Category       | Examples                  |
  +------+----------------+---------------------------+
  | 1xx  | Informational  | 100 Continue              |
  | 2xx  | Success        | 200 OK, 201 Created       |
  | 3xx  | Redirection    | 301 Moved, 302 Found      |
  | 4xx  | Client Error   | 400 Bad Request, 404 Not Found |
  | 5xx  | Server Error   | 500 Internal Error, 503 Service Unavailable |
  +------+----------------+---------------------------+
`}</pre>
    </div>

    {/* DNS */}
    <h2 className="text-3xl font-bold mt-8">DNS (Domain Name System)</h2>
    <p className="leading-relaxed">
      DNS is the phone book of the Internet. It translates human-readable domain names
      (like www.example.com) to IP addresses (like 93.184.216.34) that computers use to identify each other.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  DNS Resolution Process:

  User types: www.example.com

  1. Browser Cache
     |
     v (not found)
  2. OS Cache / hosts file
     |
     v (not found)
  3. Recursive DNS Resolver (ISP)
     |
     v (not found)
  4. Root DNS Server
     |-- "Try .com TLD server"
     v
  5. TLD Server (.com)
     |-- "Try example.com nameserver"
     v
  6. Authoritative DNS Server (example.com)
     |-- "www.example.com = 93.184.216.34"
     v
  7. IP returned to browser

  +-------+                                      +-------+
  |Browser| ----> www.example.com ? -----------> | Local |
  +-------+                                      |  DNS  |
                                                 +---+---+
                                                     |
        +--------------------------------------------+
        |                    |                   |
        v                    v                   v
  +-----------+        +-----------+      +-----------+
  | Root DNS  |------->| .com TLD  |----->|Authoritative|
  | Server    |        | Server    |      | Server    |
  +-----------+        +-----------+      +-----------+


  DNS Record Types:
  +-------+------------------------------------------+
  | Type  | Purpose                                  |
  +-------+------------------------------------------+
  | A     | Maps hostname to IPv4 address           |
  | AAAA  | Maps hostname to IPv6 address           |
  | CNAME | Alias for another domain name           |
  | MX    | Mail exchange server for domain         |
  | NS    | Authoritative nameserver for domain     |
  | PTR   | Reverse DNS lookup (IP to name)         |
  | TXT   | Text records (SPF, DKIM, etc.)          |
  | SOA   | Start of Authority (zone info)          |
  +-------+------------------------------------------+
`}</pre>
    </div>

    {/* DHCP */}
    <h2 className="text-3xl font-bold mt-8">DHCP (Dynamic Host Configuration Protocol)</h2>
    <p className="leading-relaxed">
      DHCP automatically assigns IP addresses and network configuration to devices when they join a network.
      This eliminates the need for manual IP configuration.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  DHCP DORA Process:

  Client                                       DHCP Server
    |                                               |
    |   D - DISCOVER (broadcast)                    |
    |   "I need an IP address"                      |
    |---------------------------------------------->|
    |                                               |
    |   O - OFFER                                   |
    |   "Here's an available IP: 192.168.1.100"     |
    |<----------------------------------------------|
    |                                               |
    |   R - REQUEST                                 |
    |   "I'll take 192.168.1.100"                   |
    |---------------------------------------------->|
    |                                               |
    |   A - ACKNOWLEDGE                             |
    |   "Confirmed: 192.168.1.100 is yours"         |
    |<----------------------------------------------|
    |                                               |

  DHCP provides:
  - IP Address
  - Subnet Mask
  - Default Gateway
  - DNS Server addresses
  - Lease duration

  Ports: Server = UDP 67, Client = UDP 68
`}</pre>
    </div>

    {/* Email Protocols */}
    <h2 className="text-3xl font-bold mt-8">Email Protocols</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  Email Communication Flow:

  Sender                                              Receiver
  +--------+    SMTP     +----------+    SMTP    +----------+
  | Email  |------------>| Sender's |----------->| Receiver |
  | Client |   (Port 25) | Mail     |            | Mail     |
  | (MUA)  |             | Server   |            | Server   |
  +--------+             +----------+            +----+-----+
                                                      |
                                            POP3/IMAP |
                                                      v
                                                 +--------+
                                                 | Email  |
                                                 | Client |
                                                 +--------+

  Protocol Comparison:
  +----------+------+----------------------------------------+
  | Protocol | Port | Function                               |
  +----------+------+----------------------------------------+
  | SMTP     | 25   | Send emails (Simple Mail Transfer)     |
  | POP3     | 110  | Download & delete from server          |
  | IMAP     | 143  | Access emails on server (sync)         |
  +----------+------+----------------------------------------+

  SMTP vs POP3 vs IMAP:
  - SMTP: Sending emails only
  - POP3: Downloads emails, deletes from server (offline access)
  - IMAP: Syncs emails, keeps on server (multi-device access)
`}</pre>
    </div>

    {/* FTP */}
    <h2 className="text-3xl font-bold mt-8">FTP (File Transfer Protocol)</h2>
    <p className="leading-relaxed">
      FTP is used to transfer files between a client and server. It uses two separate connections:
      a control connection for commands and a data connection for file transfer.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  FTP Connection Model:

  Client                                    Server
    |                                          |
    |   Control Connection (Port 21)           |
    |   Commands: USER, PASS, LIST, RETR, STOR |
    |<========================================>|
    |                                          |
    |   Data Connection (Port 20 or dynamic)   |
    |   Actual file transfer                   |
    |<---------------------------------------->|
    |                                          |

  FTP Modes:
  +--------+----------------------------------------------+
  | Mode   | Description                                  |
  +--------+----------------------------------------------+
  | Active | Server initiates data connection to client   |
  |        | Server: Port 20 -> Client: Random port       |
  +--------+----------------------------------------------+
  | Passive| Client initiates data connection to server   |
  |        | Client -> Server: Random port (firewall-friendly) |
  +--------+----------------------------------------------+

  Related Protocols:
  - SFTP: SSH File Transfer Protocol (encrypted)
  - FTPS: FTP Secure (FTP over SSL/TLS)
  - TFTP: Trivial FTP (simple, no auth, UDP port 69)
`}</pre>
    </div>

    {/* Other Protocols */}
    <h2 className="text-3xl font-bold mt-8">Other Application Layer Protocols</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Protocol</th>
            <th className="p-3 border">Port</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Telnet</td>
            <td className="p-3 border">23</td>
            <td className="p-3 border">Remote terminal access (insecure, unencrypted)</td>
          </tr>
          <tr>
            <td className="p-3 border">SSH</td>
            <td className="p-3 border">22</td>
            <td className="p-3 border">Secure remote terminal access (encrypted)</td>
          </tr>
          <tr>
            <td className="p-3 border">SNMP</td>
            <td className="p-3 border">161/162</td>
            <td className="p-3 border">Network device management and monitoring</td>
          </tr>
          <tr>
            <td className="p-3 border">NTP</td>
            <td className="p-3 border">123</td>
            <td className="p-3 border">Time synchronization</td>
          </tr>
          <tr>
            <td className="p-3 border">LDAP</td>
            <td className="p-3 border">389</td>
            <td className="p-3 border">Directory services (Active Directory)</td>
          </tr>
          <tr>
            <td className="p-3 border">RDP</td>
            <td className="p-3 border">3389</td>
            <td className="p-3 border">Remote desktop access (Windows)</td>
          </tr>
          <tr>
            <td className="p-3 border">SIP</td>
            <td className="p-3 border">5060</td>
            <td className="p-3 border">VoIP signaling protocol</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Protocol Summary */}
    <h2 className="text-3xl font-bold mt-8">Quick Protocol Reference</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  Common Application Layer Protocols:

  +----------+------+------+----------------------------------+
  | Protocol | Port | L4   | Description                      |
  +----------+------+------+----------------------------------+
  | HTTP     | 80   | TCP  | Web pages (unencrypted)          |
  | HTTPS    | 443  | TCP  | Web pages (encrypted)            |
  | FTP      | 21,20| TCP  | File transfer                    |
  | SSH      | 22   | TCP  | Secure shell                     |
  | Telnet   | 23   | TCP  | Remote login (insecure)          |
  | SMTP     | 25   | TCP  | Send email                       |
  | DNS      | 53   | Both | Domain name resolution           |
  | DHCP     | 67,68| UDP  | IP address assignment            |
  | TFTP     | 69   | UDP  | Simple file transfer             |
  | POP3     | 110  | TCP  | Receive email (download)         |
  | IMAP     | 143  | TCP  | Receive email (sync)             |
  | SNMP     | 161  | UDP  | Network management               |
  | LDAP     | 389  | TCP  | Directory services               |
  | HTTPS    | 443  | TCP  | Secure HTTP                      |
  +----------+------+------+----------------------------------+
`}</pre>
    </div>

    {/* Client-Server Model */}
    <h2 className="text-3xl font-bold mt-8">Application Layer Architecture</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Client-Server</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Server always-on, waiting for requests</li>
          <li>Client initiates communication</li>
          <li>Examples: HTTP, SMTP, DNS</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Peer-to-Peer (P2P)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>No always-on server required</li>
          <li>Peers communicate directly</li>
          <li>Examples: BitTorrent, Skype</li>
        </ul>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Application Layer provides network services to applications</li>
      <li>HTTP: Web communication (GET, POST, PUT, DELETE methods)</li>
      <li>DNS: Translates domain names to IP addresses</li>
      <li>DHCP: Automatic IP address assignment (DORA process)</li>
      <li>Email: SMTP (send), POP3/IMAP (receive)</li>
      <li>FTP uses two connections: control (21) and data (20)</li>
      <li>SSH is the secure replacement for Telnet</li>
    </ul>

    {/* GATE Important */}
    <h2 className="text-3xl font-bold mt-8">Important for GATE</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Memorize common port numbers (HTTP=80, HTTPS=443, DNS=53, etc.)</li>
        <li>Understand DNS resolution process and record types</li>
        <li>Know DHCP DORA process</li>
        <li>Understand HTTP methods and status codes</li>
        <li>Know the difference between SMTP, POP3, and IMAP</li>
        <li>FTP active vs passive mode</li>
      </ul>
    </div>
  </div>
);

export default ApplicationLayer;
