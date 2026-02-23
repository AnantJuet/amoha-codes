import React from "react";

const LDAPSecurity: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      LDAP Security
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      LDAP (Lightweight Directory Access Protocol) is used for accessing and managing
      directory services, including user authentication and authorization. Securing LDAP
      is critical as it often contains sensitive organizational data and credentials.
      LDAPS and LDAP with STARTTLS provide encrypted communications.
    </p>

    <h2 className="text-3xl font-bold mt-8">LDAP vs LDAPS</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">LDAP</th>
            <th className="p-3 border">LDAPS</th>
            <th className="p-3 border">LDAP + STARTTLS</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Port</td>
            <td className="p-3 border">389</td>
            <td className="p-3 border">636</td>
            <td className="p-3 border">389</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Encryption</td>
            <td className="p-3 border">None (plaintext)</td>
            <td className="p-3 border">TLS from start</td>
            <td className="p-3 border">TLS after STARTTLS</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Security Level</td>
            <td className="p-3 border">Low (insecure)</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Certificate Required</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes (server)</td>
            <td className="p-3 border">Yes (server)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Downgrade Risk</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Possible</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">LDAP Authentication Methods</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`LDAP BIND (AUTHENTICATION) METHODS:

ANONYMOUS BIND
├── No credentials required
├── Read-only access to public attributes
├── Should be disabled or restricted
└── bind_dn = "" (empty)

SIMPLE BIND
├── Username (DN) and password in cleartext
├── MUST use LDAPS or STARTTLS
├── Most common method
└── Example: bind with "cn=admin,dc=example,dc=com"

SASL (Simple Authentication and Security Layer)
├── More secure authentication mechanisms
├── Supports multiple methods:
│   ├── DIGEST-MD5 (challenge-response)
│   ├── GSSAPI (Kerberos integration)
│   ├── EXTERNAL (client certificate)
│   └── PLAIN (username/password via SASL)
└── Recommended for enterprise environments

AUTHENTICATION FLOW:
┌──────────────────────────────────────────────────────┐
│ Client                         LDAP Server           │
│    │                               │                 │
│    │── STARTTLS ──────────────────►│ (if using TLS) │
│    │◄─ TLS Established ────────────│                │
│    │                               │                 │
│    │── Bind Request ──────────────►│                │
│    │   (DN + credentials)          │                │
│    │                               │ Verify creds   │
│    │◄─ Bind Response ──────────────│                │
│    │   (success/failure)           │                │
│    │                               │                 │
│    │── Search/Modify Request ─────►│                │
│    │◄─ Results ────────────────────│                │
└──────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LDAP Security Best Practices</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`LDAP HARDENING CHECKLIST:

ENCRYPTION:
├── Always use LDAPS (port 636) or STARTTLS
├── Use TLS 1.2 or 1.3 only
├── Disable SSLv2, SSLv3, TLS 1.0, 1.1
└── Use certificates from trusted CA

AUTHENTICATION:
├── Disable anonymous binds
├── Use SASL with Kerberos (GSSAPI) where possible
├── Enforce strong password policies
├── Implement account lockout after failed attempts
└── Use service accounts with minimal privileges

ACCESS CONTROL:
├── Implement ACLs for directory entries
├── Apply principle of least privilege
├── Separate admin and read-only accounts
├── Restrict who can modify sensitive attributes
└── Log all authentication attempts

NETWORK SECURITY:
├── Firewall LDAP ports (389, 636)
├── Only allow connections from trusted networks
├── Use VPN for remote LDAP access
└── Monitor LDAP traffic for anomalies`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LDAP Commands and Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# LDAP Search (unencrypted - avoid in production)
$ ldapsearch -x -H ldap://ldap.example.com -b "dc=example,dc=com" \
    -D "cn=admin,dc=example,dc=com" -W "(uid=jsmith)"

# LDAPS Search (encrypted)
$ ldapsearch -x -H ldaps://ldap.example.com -b "dc=example,dc=com" \
    -D "cn=admin,dc=example,dc=com" -W "(uid=jsmith)"

# LDAP with STARTTLS
$ ldapsearch -x -H ldap://ldap.example.com -ZZ -b "dc=example,dc=com" \
    -D "cn=admin,dc=example,dc=com" -W "(uid=jsmith)"

# Test LDAP connection
$ ldapwhoami -x -H ldaps://ldap.example.com \
    -D "cn=admin,dc=example,dc=com" -W

# Enumerate users (common attack)
$ ldapsearch -x -H ldap://192.168.1.100 -b "dc=corp,dc=local" \
    "(objectClass=user)" sAMAccountName

# OpenLDAP ACL Example (slapd.conf)
access to attrs=userPassword
    by self write
    by anonymous auth
    by * none

access to *
    by self write
    by users read
    by * none`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common LDAP Attacks</h2>
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
            <td className="p-3 border font-semibold">LDAP Injection</td>
            <td className="p-3 border">Manipulate LDAP queries via user input</td>
            <td className="p-3 border">Input validation, parameterized queries</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Credential Sniffing</td>
            <td className="p-3 border">Capture plaintext credentials</td>
            <td className="p-3 border">Use LDAPS or STARTTLS</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Anonymous Enumeration</td>
            <td className="p-3 border">Extract user/group information</td>
            <td className="p-3 border">Disable anonymous binds</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Brute Force</td>
            <td className="p-3 border">Password guessing attacks</td>
            <td className="p-3 border">Account lockout, rate limiting</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">MITM Attack</td>
            <td className="p-3 border">Intercept LDAP communications</td>
            <td className="p-3 border">TLS with certificate validation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Always use LDAPS (port 636) or STARTTLS for encrypted communication</li>
        <li>Disable anonymous binds to prevent information disclosure</li>
        <li>Use SASL/GSSAPI for Kerberos integration in Active Directory</li>
        <li>Implement strict ACLs to protect sensitive directory attributes</li>
        <li>LDAP injection is similar to SQL injection; validate all inputs</li>
        <li>Monitor and log LDAP authentication attempts for security auditing</li>
      </ul>
    </div>
  </div>
);

export default LDAPSecurity;
