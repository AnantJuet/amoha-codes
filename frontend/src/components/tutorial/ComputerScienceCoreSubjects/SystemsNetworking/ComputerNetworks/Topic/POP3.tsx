import React from "react";

const POP3: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      POP3 - Post Office Protocol Version 3
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Post Office Protocol version 3 (POP3)</strong> is an application layer protocol
      used to retrieve emails from a mail server. It downloads emails to the client and typically
      deletes them from the server, making it ideal for single-device access.
    </p>

    <h2 className="text-3xl font-bold mt-8">POP3 Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Email Retrieval with POP3:

+--------+          +-------------+
| Email  |  POP3    |    Mail     |
| Client |<-------->|   Server    |
+--------+          +-------------+
  Port 110 (plain)
  Port 995 (POP3S/SSL)

Process:
1. Client connects to server
2. Client authenticates (USER/PASS)
3. Client retrieves messages (RETR)
4. Messages downloaded to client
5. Messages deleted from server (optional)
6. Connection closed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">POP3 Commands</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Command</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">USER username</td>
            <td className="p-3 border">Specify username</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">PASS password</td>
            <td className="p-3 border">Specify password</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">STAT</td>
            <td className="p-3 border">Get mailbox statistics</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">LIST [msg]</td>
            <td className="p-3 border">List messages</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">RETR msg</td>
            <td className="p-3 border">Retrieve message</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">DELE msg</td>
            <td className="p-3 border">Mark message for deletion</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">QUIT</td>
            <td className="p-3 border">End session (delete marked)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">RSET</td>
            <td className="p-3 border">Unmark deleted messages</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">NOOP</td>
            <td className="p-3 border">No operation (keep alive)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">POP3 Session Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`S: +OK POP3 server ready
C: USER john
S: +OK User accepted
C: PASS secret123
S: +OK Pass accepted
C: STAT
S: +OK 2 320
C: LIST
S: +OK 2 messages (320 octets)
S: 1 120
S: 2 200
S: .
C: RETR 1
S: +OK 120 octets
S: <message content>
S: .
C: DELE 1
S: +OK Message 1 deleted
C: QUIT
S: +OK Goodbye`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">POP3 vs IMAP</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">POP3</th>
            <th className="p-3 border">IMAP</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Storage</td>
            <td className="p-3 border">Client-side</td>
            <td className="p-3 border">Server-side</td>
          </tr>
          <tr>
            <td className="p-3 border">Multi-device</td>
            <td className="p-3 border">Not recommended</td>
            <td className="p-3 border">Well supported</td>
          </tr>
          <tr>
            <td className="p-3 border">Bandwidth</td>
            <td className="p-3 border">Downloads all</td>
            <td className="p-3 border">Can fetch headers only</td>
          </tr>
          <tr>
            <td className="p-3 border">Folders</td>
            <td className="p-3 border">Not supported</td>
            <td className="p-3 border">Supported</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>POP3 downloads and removes emails from server</li>
        <li>Uses port 110 (plain) or 995 (SSL/TLS)</li>
        <li>Best for single-device email access</li>
        <li>Simple protocol with few commands</li>
        <li>No server-side folder management</li>
      </ul>
    </div>
  </div>
);

export default POP3;
