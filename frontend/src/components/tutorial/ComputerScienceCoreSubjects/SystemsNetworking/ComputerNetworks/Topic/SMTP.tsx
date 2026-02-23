import React from "react";

const SMTP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SMTP - Simple Mail Transfer Protocol
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Simple Mail Transfer Protocol (SMTP)</strong> is the standard protocol for sending
      emails across the Internet. It operates on port 25 (or 587 for submission) and uses a
      command-response model to transfer messages between mail servers.
    </p>

    <h2 className="text-3xl font-bold mt-8">SMTP Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Email Delivery Flow:

+--------+     +-------------+     +-------------+     +--------+
| Sender |---->| Sender's    |---->| Recipient's |---->|Recipient|
|  MUA   |     | Mail Server |     | Mail Server |     |  MUA   |
+--------+     | (MSA/MTA)   |     |   (MTA/MDA) |     +--------+
               +-------------+     +-------------+
                    SMTP               SMTP          POP3/IMAP

MUA = Mail User Agent (email client)
MSA = Mail Submission Agent
MTA = Mail Transfer Agent
MDA = Mail Delivery Agent

Ports:
- Port 25:  SMTP (server-to-server)
- Port 587: SMTP Submission (client-to-server)
- Port 465: SMTPS (deprecated, but still used)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SMTP Commands</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Command</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">HELO/EHLO</td>
            <td className="p-3 border">Initiate session</td>
            <td className="p-3 border font-mono text-gray-900">EHLO mail.example.com</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">MAIL FROM</td>
            <td className="p-3 border">Specify sender</td>
            <td className="p-3 border font-mono text-gray-900">MAIL FROM:&lt;user@example.com&gt;</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">RCPT TO</td>
            <td className="p-3 border">Specify recipient</td>
            <td className="p-3 border font-mono text-gray-900">RCPT TO:&lt;dest@example.org&gt;</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">DATA</td>
            <td className="p-3 border">Begin message body</td>
            <td className="p-3 border font-mono text-gray-900">DATA</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">QUIT</td>
            <td className="p-3 border">End session</td>
            <td className="p-3 border font-mono text-gray-900">QUIT</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">RSET</td>
            <td className="p-3 border">Reset session</td>
            <td className="p-3 border font-mono text-gray-900">RSET</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">AUTH</td>
            <td className="p-3 border">Authenticate</td>
            <td className="p-3 border font-mono text-gray-900">AUTH LOGIN</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">SMTP Session Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`S: 220 mail.example.com ESMTP ready
C: EHLO client.example.org
S: 250-mail.example.com Hello
S: 250-SIZE 35882577
S: 250-AUTH LOGIN PLAIN
S: 250 STARTTLS
C: MAIL FROM:<sender@example.org>
S: 250 OK
C: RCPT TO:<recipient@example.com>
S: 250 OK
C: DATA
S: 354 Start mail input; end with <CRLF>.<CRLF>
C: From: sender@example.org
C: To: recipient@example.com
C: Subject: Test Email
C:
C: This is the message body.
C: .
S: 250 OK: Message queued
C: QUIT
S: 221 Bye`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SMTP Response Codes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Response Code Categories:

2xx - Success
  220: Service ready
  250: Requested action completed
  251: User not local; will forward

3xx - Intermediate
  354: Start mail input

4xx - Temporary Failure
  421: Service not available
  450: Mailbox unavailable (busy)
  451: Local error in processing

5xx - Permanent Failure
  500: Syntax error
  550: Mailbox unavailable
  551: User not local
  553: Mailbox name not allowed
  554: Transaction failed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Security Extensions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SMTP Security Mechanisms:

1. STARTTLS
   - Upgrades connection to TLS
   - Encrypts data in transit
   - C: STARTTLS
   - S: 220 Ready to start TLS

2. SMTP AUTH
   - Authenticates sender
   - Methods: LOGIN, PLAIN, CRAM-MD5
   - Prevents unauthorized relay

3. SPF (Sender Policy Framework)
   - DNS record specifying authorized senders
   - v=spf1 mx -all

4. DKIM (DomainKeys Identified Mail)
   - Digital signature in email header
   - Verifies message integrity

5. DMARC
   - Policy for handling SPF/DKIM failures
   - Reporting mechanism`}
      </pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>SMTP is used for sending emails (not receiving)</li>
        <li>Uses port 25 (relay) or 587 (submission)</li>
        <li>Text-based command-response protocol</li>
        <li>STARTTLS provides encryption</li>
        <li>SPF, DKIM, DMARC prevent email spoofing</li>
      </ul>
    </div>
  </div>
);

export default SMTP;
