import React from 'react';

const ApplicationFunctions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Application Layer Functions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Application Layer is the topmost layer in both the OSI and TCP/IP models. It provides
      the interface between user applications and the network. This layer enables network services
      like email, file transfer, web browsing, and remote access directly to end users and applications.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Functions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Network Virtual Terminal</td>
            <td className="p-3 border">Remote login capability</td>
            <td className="p-3 border">Telnet, SSH</td>
          </tr>
          <tr>
            <td className="p-3 border">File Transfer</td>
            <td className="p-3 border">Move files between systems</td>
            <td className="p-3 border">FTP, TFTP, SFTP</td>
          </tr>
          <tr>
            <td className="p-3 border">Mail Services</td>
            <td className="p-3 border">Email send/receive</td>
            <td className="p-3 border">SMTP, POP3, IMAP</td>
          </tr>
          <tr>
            <td className="p-3 border">Directory Services</td>
            <td className="p-3 border">Name resolution</td>
            <td className="p-3 border">DNS, LDAP</td>
          </tr>
          <tr>
            <td className="p-3 border">Web Services</td>
            <td className="p-3 border">Web content delivery</td>
            <td className="p-3 border">HTTP, HTTPS</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Application Layer Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Application Layer Services:

    +----------------------------------------------------------+
    |                    USER APPLICATIONS                      |
    |  (Browser, Email Client, FTP Client, Terminal)           |
    +----------------------------------------------------------+
                              |
    +----------------------------------------------------------+
    |                   APPLICATION LAYER                       |
    |  +----------+  +------+  +------+  +------+  +------+    |
    |  |   HTTP   |  | SMTP |  | FTP  |  | DNS  |  | SSH  |    |
    |  +----------+  +------+  +------+  +------+  +------+    |
    +----------------------------------------------------------+
                              |
    +----------------------------------------------------------+
    |                   TRANSPORT LAYER                         |
    |              (TCP/UDP - Port Numbers)                     |
    +----------------------------------------------------------+
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Client-Server Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Client-Server Architecture:

    Client                              Server
    +----------+                   +----------+
    |          | --- Request --->  |          |
    | Browser  |                   |   Web    |
    |          | <-- Response ---  |  Server  |
    +----------+                   +----------+

    Characteristics:
    - Client initiates communication
    - Server waits for requests (always on)
    - Server has fixed, known address
    - Clients may have dynamic addresses
    - Scalability through multiple servers

    Examples:
    - Web: Browser (client) <-> Apache/Nginx (server)
    - Email: Outlook (client) <-> Mail server
    - DNS: Resolver (client) <-> DNS server
      `}</pre>
    </div>

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
            <td className="p-3 border">HTTP</td>
            <td className="p-3 border">80</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">Web pages</td>
          </tr>
          <tr>
            <td className="p-3 border">HTTPS</td>
            <td className="p-3 border">443</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">Secure web</td>
          </tr>
          <tr>
            <td className="p-3 border">FTP</td>
            <td className="p-3 border">20, 21</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">File transfer</td>
          </tr>
          <tr>
            <td className="p-3 border">SSH</td>
            <td className="p-3 border">22</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">Secure shell</td>
          </tr>
          <tr>
            <td className="p-3 border">DNS</td>
            <td className="p-3 border">53</td>
            <td className="p-3 border">UDP/TCP</td>
            <td className="p-3 border">Name resolution</td>
          </tr>
          <tr>
            <td className="p-3 border">SMTP</td>
            <td className="p-3 border">25</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">Send email</td>
          </tr>
          <tr>
            <td className="p-3 border">DHCP</td>
            <td className="p-3 border">67, 68</td>
            <td className="p-3 border">UDP</td>
            <td className="p-3 border">IP assignment</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Application layer interfaces with user applications</li>
        <li>Provides network services like web, email, file transfer</li>
        <li>Uses client-server or peer-to-peer models</li>
        <li>Each protocol has designated port numbers</li>
        <li>Works with TCP or UDP at transport layer</li>
        <li>Abstracts network complexity from users</li>
      </ul>
    </div>
  </div>
);

export default ApplicationFunctions;
