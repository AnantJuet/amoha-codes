import React from 'react';

const TCPIPApplication: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Application Layer in TCP/IP Model
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Application Layer is the topmost layer of the TCP/IP model and provides network services
      directly to end-user applications. It acts as an interface between user software and the
      network, handling protocols for various application-level services like web browsing, email,
      file transfer, and remote access.
    </p>

    <h2 className="text-3xl font-bold mt-8">Position in TCP/IP Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    TCP/IP Model:
    +------------------------+
    |    Application Layer   |  <- THIS LAYER
    +------------------------+       (HTTP, FTP, SMTP, DNS, etc.)
    |    Transport Layer     |
    +------------------------+
    |    Internet Layer      |
    +------------------------+
    |  Network Access Layer  |
    +------------------------+

    Note: TCP/IP Application Layer combines OSI's
    Application, Presentation, and Session layers
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Functions</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Network Service Access:</strong> Provides access to network services for applications</li>
      <li><strong>Data Representation:</strong> Ensures data is presented in a format both systems understand</li>
      <li><strong>Session Management:</strong> Establishes, maintains, and terminates communication sessions</li>
      <li><strong>User Authentication:</strong> Verifies user identity for secure access</li>
      <li><strong>Resource Sharing:</strong> Enables file sharing, printing, and database access</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Common Application Layer Protocols</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Protocol</th>
            <th className="p-3 border">Port</th>
            <th className="p-3 border">Transport</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">HTTP/HTTPS</td>
            <td className="p-3 border">80/443</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">Web browsing</td>
          </tr>
          <tr>
            <td className="p-3 border">FTP</td>
            <td className="p-3 border">20/21</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">File transfer</td>
          </tr>
          <tr>
            <td className="p-3 border">SMTP</td>
            <td className="p-3 border">25</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">Sending email</td>
          </tr>
          <tr>
            <td className="p-3 border">POP3/IMAP</td>
            <td className="p-3 border">110/143</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">Receiving email</td>
          </tr>
          <tr>
            <td className="p-3 border">DNS</td>
            <td className="p-3 border">53</td>
            <td className="p-3 border">UDP/TCP</td>
            <td className="p-3 border">Domain name resolution</td>
          </tr>
          <tr>
            <td className="p-3 border">DHCP</td>
            <td className="p-3 border">67/68</td>
            <td className="p-3 border">UDP</td>
            <td className="p-3 border">IP address assignment</td>
          </tr>
          <tr>
            <td className="p-3 border">SSH</td>
            <td className="p-3 border">22</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">Secure remote access</td>
          </tr>
          <tr>
            <td className="p-3 border">Telnet</td>
            <td className="p-3 border">23</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">Remote terminal (insecure)</td>
          </tr>
          <tr>
            <td className="p-3 border">SNMP</td>
            <td className="p-3 border">161/162</td>
            <td className="p-3 border">UDP</td>
            <td className="p-3 border">Network management</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Protocol Categories</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Web Services</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>HTTP - HyperText Transfer Protocol</li>
          <li>HTTPS - Secure HTTP with SSL/TLS</li>
          <li>WebSocket - Full-duplex communication</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Email Services</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>SMTP - Sending emails</li>
          <li>POP3 - Downloading emails</li>
          <li>IMAP - Syncing emails across devices</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">File Transfer</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>FTP - File Transfer Protocol</li>
          <li>SFTP - Secure FTP over SSH</li>
          <li>TFTP - Trivial FTP (simple, no auth)</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Network Management</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>DNS - Name resolution</li>
          <li>DHCP - IP configuration</li>
          <li>SNMP - Network monitoring</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Client-Server Model</h2>
    <p className="leading-relaxed">
      Most application layer protocols follow the client-server model, where clients request services
      and servers provide them. The application layer handles the communication between client and
      server applications.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    HTTP Example:

    Client (Browser)                    Server (Web Server)
         |                                    |
         |--- HTTP GET /index.html --------> |
         |                                    |
         | <-- HTTP 200 OK + HTML content --- |
         |                                    |

    DNS Example:

    Client                DNS Server              Root/TLD/Auth
         |                     |                        |
         |-- Query: google.com -->|                     |
         |                     |-- Recursive lookup --> |
         |                     |<-- IP: 142.250.x.x --- |
         |<-- IP: 142.250.x.x --|                       |
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Differences from OSI Model</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">OSI Layers</th>
            <th className="p-3 border">TCP/IP Equivalent</th>
            <th className="p-3 border">Function</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Application (7)</td>
            <td className="p-3 border" rowSpan={3}>Application Layer</td>
            <td className="p-3 border">User interface, network services</td>
          </tr>
          <tr>
            <td className="p-3 border">Presentation (6)</td>
            <td className="p-3 border">Data translation, encryption</td>
          </tr>
          <tr>
            <td className="p-3 border">Session (5)</td>
            <td className="p-3 border">Session management</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Application Layer is the topmost layer of TCP/IP model</li>
        <li>Combines OSI's Application, Presentation, and Session layers</li>
        <li>Provides network services directly to user applications</li>
        <li>Includes protocols like HTTP, FTP, SMTP, DNS, DHCP</li>
        <li>Most protocols follow client-server architecture</li>
        <li>Uses port numbers to identify specific services</li>
      </ul>
    </div>
  </div>
);

export default TCPIPApplication;
