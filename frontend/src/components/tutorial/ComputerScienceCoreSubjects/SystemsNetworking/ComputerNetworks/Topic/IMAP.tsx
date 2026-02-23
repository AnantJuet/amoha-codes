import React from "react";

const IMAP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      IMAP - Internet Message Access Protocol
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Internet Message Access Protocol (IMAP)</strong> is an application layer protocol
      for accessing email on a remote server. Unlike POP3, IMAP keeps emails on the server,
      allowing synchronized access from multiple devices.
    </p>

    <h2 className="text-3xl font-bold mt-8">IMAP Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`IMAP Email Access:

+----------+     +----------+     +----------+
|  Phone   |     |  Laptop  |     |  Desktop |
+----------+     +----------+     +----------+
     |                |                |
     +----------------+----------------+
                      |
                      v IMAP
              +---------------+
              |  Mail Server  |
              |  +---------+  |
              |  | INBOX   |  |
              |  | Sent    |  |
              |  | Drafts  |  |
              |  | Trash   |  |
              |  +---------+  |
              +---------------+

Port 143: IMAP (plain)
Port 993: IMAPS (SSL/TLS)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">IMAP Commands</h2>
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
            <td className="p-3 border font-mono text-gray-900">LOGIN</td>
            <td className="p-3 border">Authenticate user</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">SELECT</td>
            <td className="p-3 border">Open a mailbox</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">EXAMINE</td>
            <td className="p-3 border">Open mailbox read-only</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">CREATE</td>
            <td className="p-3 border">Create new mailbox</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">DELETE</td>
            <td className="p-3 border">Delete mailbox</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">LIST</td>
            <td className="p-3 border">List mailboxes</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">FETCH</td>
            <td className="p-3 border">Retrieve message data</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">STORE</td>
            <td className="p-3 border">Modify message flags</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">SEARCH</td>
            <td className="p-3 border">Search messages</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">COPY</td>
            <td className="p-3 border">Copy messages to mailbox</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">LOGOUT</td>
            <td className="p-3 border">End session</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">IMAP Session Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`S: * OK IMAP4rev1 Service Ready
C: a001 LOGIN john secret123
S: a001 OK LOGIN completed
C: a002 SELECT INBOX
S: * 3 EXISTS
S: * 1 RECENT
S: * FLAGS (\Answered \Flagged \Deleted \Seen \Draft)
S: a002 OK [READ-WRITE] SELECT completed
C: a003 FETCH 1 (FLAGS BODY[HEADER.FIELDS (FROM SUBJECT)])
S: * 1 FETCH (FLAGS (\Seen) BODY[HEADER.FIELDS (FROM SUBJECT)] {42}
S: From: sender@example.com
S: Subject: Hello
S: )
S: a003 OK FETCH completed
C: a004 LOGOUT
S: * BYE IMAP4rev1 Server logging out
S: a004 OK LOGOUT completed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">IMAP Features</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Key IMAP Features:

1. SERVER-SIDE STORAGE
   - Emails remain on server
   - Access from any device
   - Synchronized state

2. FOLDER MANAGEMENT
   - Create/delete folders
   - Move messages between folders
   - Hierarchical organization

3. PARTIAL FETCH
   - Download headers only
   - Fetch specific parts
   - Saves bandwidth

4. MESSAGE FLAGS
   - \Seen (read)
   - \Answered (replied)
   - \Flagged (important)
   - \Deleted (marked for deletion)
   - \Draft (incomplete)

5. SEARCH CAPABILITY
   - Server-side search
   - Complex queries
   - Date/size/flag filters`}
      </pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>IMAP keeps emails on the server</li>
        <li>Supports multiple device synchronization</li>
        <li>Uses port 143 (plain) or 993 (SSL/TLS)</li>
        <li>Supports folders and message flags</li>
        <li>Can fetch partial messages to save bandwidth</li>
      </ul>
    </div>
  </div>
);

export default IMAP;
