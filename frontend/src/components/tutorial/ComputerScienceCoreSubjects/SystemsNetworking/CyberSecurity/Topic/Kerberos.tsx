import React from "react";

const Kerberos: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Kerberos Authentication Protocol
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Kerberos is a network authentication protocol designed to provide strong authentication
      for client/server applications using secret-key cryptography. Developed at MIT, it is
      the default authentication protocol for Windows Active Directory and is widely used
      in enterprise environments.
    </p>

    <h2 className="text-3xl font-bold mt-8">Kerberos Components</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Full Name</th>
            <th className="p-3 border">Function</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">KDC</td>
            <td className="p-3 border">Key Distribution Center</td>
            <td className="p-3 border">Central authentication server (contains AS + TGS)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">AS</td>
            <td className="p-3 border">Authentication Server</td>
            <td className="p-3 border">Verifies user identity, issues TGT</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">TGS</td>
            <td className="p-3 border">Ticket Granting Service</td>
            <td className="p-3 border">Issues service tickets using TGT</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">TGT</td>
            <td className="p-3 border">Ticket Granting Ticket</td>
            <td className="p-3 border">Credential for requesting service tickets</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Service Ticket</td>
            <td className="p-3 border">ST / TGS Ticket</td>
            <td className="p-3 border">Credential for accessing specific service</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Principal</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">Unique identity (user or service)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Realm</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">Administrative domain (e.g., CORP.LOCAL)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Kerberos Authentication Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`KERBEROS AUTHENTICATION PROCESS:

     Client                    KDC (AS + TGS)              Service
        │                            │                        │
 STEP 1: AS-REQ (Authentication Service Request)
        │──── AS-REQ ───────────────►│                        │
        │     (username, timestamp   │                        │
        │      encrypted with        │                        │
        │      user's key)           │                        │
        │                            │                        │
 STEP 2: AS-REP (Authentication Service Reply)
        │◄─── AS-REP ────────────────│                        │
        │     (TGT encrypted with    │                        │
        │      TGS key, session key  │                        │
        │      encrypted with        │                        │
        │      user's key)           │                        │
        │                            │                        │
 STEP 3: TGS-REQ (Ticket Granting Service Request)
        │──── TGS-REQ ──────────────►│                        │
        │     (TGT, authenticator,   │                        │
        │      service name)         │                        │
        │                            │                        │
 STEP 4: TGS-REP (Ticket Granting Service Reply)
        │◄─── TGS-REP ───────────────│                        │
        │     (Service Ticket        │                        │
        │      encrypted with        │                        │
        │      service key)          │                        │
        │                            │                        │
 STEP 5: AP-REQ (Application Request)
        │──────────────── AP-REQ ────────────────────────────►│
        │                (Service Ticket, authenticator)      │
        │                                                     │
 STEP 6: AP-REP (Application Reply) - Optional
        │◄───────────────── AP-REP ───────────────────────────│
        │                (mutual authentication)              │`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Kerberos Ticket Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`TGT (TICKET GRANTING TICKET):
┌────────────────────────────────────────────────────┐
│ Encrypted with TGS secret key:                     │
│ ├── Client principal name                          │
│ ├── Realm                                          │
│ ├── Session key (client ↔ TGS)                     │
│ ├── Ticket validity times                          │
│ ├── Client IP addresses (optional)                 │
│ ├── Ticket flags                                   │
│ └── Authorization data                             │
└────────────────────────────────────────────────────┘

SERVICE TICKET:
┌────────────────────────────────────────────────────┐
│ Encrypted with service's secret key:               │
│ ├── Client principal name                          │
│ ├── Realm                                          │
│ ├── Session key (client ↔ service)                 │
│ ├── Ticket validity times                          │
│ ├── Client IP addresses (optional)                 │
│ └── Authorization data (PAC in Windows)            │
└────────────────────────────────────────────────────┘

AUTHENTICATOR (sent with each request):
┌────────────────────────────────────────────────────┐
│ Encrypted with session key:                        │
│ ├── Client principal name                          │
│ ├── Timestamp (prevents replay attacks)            │
│ ├── Checksum (optional)                            │
│ └── Sequence number (optional)                     │
└────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Kerberos Commands</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Linux/Unix Kerberos Commands

# Obtain TGT (kinit)
$ kinit username@REALM.COM
Password for username@REALM.COM: ********

# List cached tickets
$ klist
Ticket cache: FILE:/tmp/krb5cc_1000
Default principal: username@REALM.COM

Valid starting     Expires            Service principal
01/17/26 09:00:00  01/17/26 19:00:00  krbtgt/REALM.COM@REALM.COM

# Destroy tickets
$ kdestroy

# Request service ticket
$ kvno HTTP/webserver.realm.com@REALM.COM

# Windows Commands
C:\> klist              # List tickets
C:\> klist tgt          # Show TGT details
C:\> klist purge        # Clear ticket cache

# View Kerberos policy
C:\> net accounts`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Kerberos Attacks</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Attack</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Mitigation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Kerberoasting</td>
            <td className="p-3 border">Request service tickets and crack offline</td>
            <td className="p-3 border">Strong service account passwords, AES encryption</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">AS-REP Roasting</td>
            <td className="p-3 border">Attack accounts without pre-auth</td>
            <td className="p-3 border">Enable Kerberos pre-authentication</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Pass-the-Ticket</td>
            <td className="p-3 border">Steal and reuse Kerberos tickets</td>
            <td className="p-3 border">Protect LSASS, use Credential Guard</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Golden Ticket</td>
            <td className="p-3 border">Forge TGT using krbtgt hash</td>
            <td className="p-3 border">Rotate krbtgt password regularly</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Silver Ticket</td>
            <td className="p-3 border">Forge service ticket using service hash</td>
            <td className="p-3 border">Strong service account passwords, PAC validation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Kerberos uses tickets to avoid sending passwords over the network</li>
        <li>The KDC contains both the AS and TGS components</li>
        <li>TGT is used to request service tickets without re-authentication</li>
        <li>Kerberos relies on synchronized time (within 5 minutes typically)</li>
        <li>Windows Active Directory uses Kerberos as the default authentication</li>
        <li>Protect the krbtgt account; its compromise enables Golden Ticket attacks</li>
      </ul>
    </div>
  </div>
);

export default Kerberos;
