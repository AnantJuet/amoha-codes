import React from 'react';

const PortNumbers: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Port Numbers
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Port numbers are 16-bit integers (0-65535) that identify specific processes or services
      on a host. They enable multiplexing of multiple applications over a single IP address.
      Combined with an IP address, a port number forms a socket address for network communication.
    </p>

    <h2 className="text-3xl font-bold mt-8">Port Number Ranges</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Range</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0-1023</td>
            <td className="p-3 border">Well-Known Ports</td>
            <td className="p-3 border">Reserved for system services, require root</td>
          </tr>
          <tr>
            <td className="p-3 border">1024-49151</td>
            <td className="p-3 border">Registered Ports</td>
            <td className="p-3 border">Assigned by IANA for specific applications</td>
          </tr>
          <tr>
            <td className="p-3 border">49152-65535</td>
            <td className="p-3 border">Dynamic/Private</td>
            <td className="p-3 border">Ephemeral ports for client connections</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Well-Known Ports</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Port</th>
            <th className="p-3 border">Protocol</th>
            <th className="p-3 border">Service</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">20, 21</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">FTP (data, control)</td>
          </tr>
          <tr>
            <td className="p-3 border">22</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">SSH</td>
          </tr>
          <tr>
            <td className="p-3 border">23</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">Telnet</td>
          </tr>
          <tr>
            <td className="p-3 border">25</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">SMTP (email sending)</td>
          </tr>
          <tr>
            <td className="p-3 border">53</td>
            <td className="p-3 border">TCP/UDP</td>
            <td className="p-3 border">DNS</td>
          </tr>
          <tr>
            <td className="p-3 border">67, 68</td>
            <td className="p-3 border">UDP</td>
            <td className="p-3 border">DHCP (server, client)</td>
          </tr>
          <tr>
            <td className="p-3 border">80</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">HTTP</td>
          </tr>
          <tr>
            <td className="p-3 border">110</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">POP3 (email retrieval)</td>
          </tr>
          <tr>
            <td className="p-3 border">143</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">IMAP (email retrieval)</td>
          </tr>
          <tr>
            <td className="p-3 border">443</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">HTTPS</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Socket Address</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Socket = IP Address + Port Number

    Example:
    192.168.1.10:80
    |__________|  |
         |        Port (HTTP)
    IP Address

    Full Connection (5-tuple for TCP):
    Source IP:      192.168.1.10
    Source Port:    52431 (ephemeral)
    Destination IP: 93.184.216.34
    Destination Port: 80
    Protocol:       TCP

    This uniquely identifies a connection
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Ephemeral Ports</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Dynamic Port Assignment</h3>
      <p className="text-sm mb-2">When a client initiates a connection:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>OS assigns a random port from ephemeral range</li>
        <li>Linux: 32768-60999 (configurable)</li>
        <li>Windows: 49152-65535</li>
        <li>Port released when connection closes</li>
        <li>Allows multiple connections to same server</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Port Scanning</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Common Port Scanning Tools:

    $ nmap -sT 192.168.1.1        # TCP connect scan
    $ nmap -sS 192.168.1.1        # SYN scan (stealth)
    $ nmap -sU 192.168.1.1        # UDP scan
    $ nmap -p 1-1000 192.168.1.1  # Specific port range

    Port States:
    - Open: Service listening
    - Closed: No service, accessible
    - Filtered: Blocked by firewall

    View listening ports:
    $ netstat -tuln
    $ ss -tuln
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">More Common Ports</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Database Ports</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>MySQL: 3306</li>
          <li>PostgreSQL: 5432</li>
          <li>MongoDB: 27017</li>
          <li>Redis: 6379</li>
          <li>MS SQL: 1433</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Other Services</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>RDP: 3389</li>
          <li>SNMP: 161, 162</li>
          <li>NTP: 123</li>
          <li>LDAP: 389</li>
          <li>HTTPS: 8443 (alternate)</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Ports are 16-bit (0-65535)</li>
        <li>Well-known: 0-1023, Registered: 1024-49151</li>
        <li>Ephemeral ports: 49152-65535 (client-side)</li>
        <li>Socket = IP + Port identifies endpoint</li>
        <li>Common: HTTP(80), HTTPS(443), SSH(22), DNS(53)</li>
        <li>Port scanning reveals open services</li>
      </ul>
    </div>
  </div>
);

export default PortNumbers;
