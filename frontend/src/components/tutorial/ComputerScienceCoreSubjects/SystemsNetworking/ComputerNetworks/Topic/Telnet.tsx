import React from "react";

const Telnet: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Telnet Protocol
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Telnet (Teletype Network)</strong> is a protocol that provides bidirectional
      interactive text-oriented communication over a network. It allows users to access
      remote computers as if they were directly connected, but transmits data in plaintext.
    </p>

    <h2 className="text-3xl font-bold mt-8">Telnet Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Telnet Connection:

+----------------+                 +----------------+
|  Telnet Client |    Port 23     |  Telnet Server |
|  (Terminal)    |<--------------->|  (Remote Host) |
+----------------+     TCP         +----------------+

How it works:
1. Client initiates TCP connection to port 23
2. Server accepts and establishes session
3. Client sends keystrokes to server
4. Server executes commands
5. Server sends output back to client
6. Displayed on client terminal`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Network Virtual Terminal (NVT)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NVT - Standard Interface:

Telnet defines a Network Virtual Terminal (NVT) as a
standard representation for communication.

NVT Characteristics:
- 7-bit ASCII character set
- Standard control characters
- Line-oriented or character-oriented mode

Character Meanings:
- CR (Carriage Return): Move to line beginning
- LF (Line Feed): Move to next line
- NUL: No operation
- BEL: Ring bell/alert

This abstraction allows different systems
to communicate regardless of their native
terminal types.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Telnet Commands</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Command</th>
            <th className="p-3 border">Code</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">WILL</td>
            <td className="p-3 border">251</td>
            <td className="p-3 border">Sender wants to enable option</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">WON'T</td>
            <td className="p-3 border">252</td>
            <td className="p-3 border">Sender refuses to enable option</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">DO</td>
            <td className="p-3 border">253</td>
            <td className="p-3 border">Sender wants receiver to enable</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">DON'T</td>
            <td className="p-3 border">254</td>
            <td className="p-3 border">Sender wants receiver to disable</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">IAC</td>
            <td className="p-3 border">255</td>
            <td className="p-3 border">Interpret As Command</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Security Concerns</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-4">
      <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">Warning: Telnet is Insecure</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>No Encryption:</strong> All data including passwords sent in plaintext</li>
        <li><strong>Eavesdropping:</strong> Anyone on the network can capture credentials</li>
        <li><strong>No Integrity:</strong> Data can be modified in transit</li>
        <li><strong>No Authentication:</strong> No server verification</li>
      </ul>
      <p className="mt-4 font-semibold">
        Always use SSH instead of Telnet for remote access!
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Telnet Usage Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Connect to remote host
$ telnet hostname 23

Trying hostname...
Connected to hostname.
Escape character is '^]'.

login: username
Password: ********

Welcome to hostname!
$ whoami
username
$ exit
Connection closed by foreign host.

# Testing other services (debugging)
$ telnet mail.example.com 25
$ telnet web.example.com 80`}
      </pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Telnet provides remote terminal access on port 23</li>
        <li>Uses Network Virtual Terminal (NVT) abstraction</li>
        <li>Transmits all data in plaintext (insecure)</li>
        <li>Replaced by SSH for secure remote access</li>
        <li>Still useful for debugging network services</li>
      </ul>
    </div>
  </div>
);

export default Telnet;
