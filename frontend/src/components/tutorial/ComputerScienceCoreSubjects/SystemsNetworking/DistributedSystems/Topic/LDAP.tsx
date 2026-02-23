import React from "react";

const LDAP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      LDAP (Lightweight Directory Access Protocol)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      LDAP (Lightweight Directory Access Protocol) is an open, vendor-neutral application
      protocol for accessing and maintaining distributed directory information services.
      It is commonly used for authentication, authorization, and storing organizational
      data like user accounts, groups, and resources.
    </p>

    <h2 className="text-3xl font-bold mt-8">LDAP vs X.500</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">X.500 (DAP)</th>
            <th className="p-3 border">LDAP</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Protocol Stack</td>
            <td className="p-3 border">Full OSI stack</td>
            <td className="p-3 border">TCP/IP (simpler)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complexity</td>
            <td className="p-3 border">Complex, heavyweight</td>
            <td className="p-3 border">Simplified, lightweight</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Encoding</td>
            <td className="p-3 border">ASN.1 BER (complex)</td>
            <td className="p-3 border">Simplified ASN.1 BER</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Operations</td>
            <td className="p-3 border">Many operations</td>
            <td className="p-3 border">9 core operations</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Adoption</td>
            <td className="p-3 border">Limited</td>
            <td className="p-3 border">Widely adopted</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">LDAP Data Model</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`LDAP Directory Information Tree (DIT):

                    ┌─────────────────────────────────┐
                    │  dc=com                          │
                    │  (Domain Component)              │
                    └───────────────┬─────────────────┘
                                    │
                    ┌───────────────▼─────────────────┐
                    │  dc=example,dc=com               │
                    │  (Base DN)                       │
                    └───────────────┬─────────────────┘
                                    │
         ┌──────────────────────────┼──────────────────────────┐
         │                          │                          │
┌────────▼────────┐      ┌──────────▼────────┐      ┌──────────▼────────┐
│  ou=People      │      │  ou=Groups        │      │  ou=Services      │
│  (Org Unit)     │      │  (Org Unit)       │      │  (Org Unit)       │
└────────┬────────┘      └──────────┬────────┘      └───────────────────┘
         │                          │
    ┌────┴────┐                ┌────┴────┐
    │         │                │         │
┌───▼───┐ ┌───▼───┐        ┌───▼───┐ ┌───▼───┐
│uid=   │ │uid=   │        │cn=    │ │cn=    │
│alice  │ │bob    │        │admins │ │users  │
└───────┘ └───────┘        └───────┘ └───────┘

DN (Distinguished Name): uid=alice,ou=People,dc=example,dc=com
RDN (Relative DN): uid=alice`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LDAP Entry Structure</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`LDIF (LDAP Data Interchange Format) Entry:

# User Entry
dn: uid=alice,ou=People,dc=example,dc=com
objectClass: top
objectClass: person
objectClass: organizationalPerson
objectClass: inetOrgPerson
objectClass: posixAccount
cn: Alice Johnson
sn: Johnson
givenName: Alice
uid: alice
mail: alice@example.com
mail: a.johnson@example.com
userPassword: {SSHA}W6ph5Mm5Pz8GgiULbPgzG37mj9g=
uidNumber: 1001
gidNumber: 1001
homeDirectory: /home/alice
loginShell: /bin/bash
telephoneNumber: +1-555-123-4567
departmentNumber: Engineering
title: Software Engineer
manager: uid=bob,ou=People,dc=example,dc=com

# Group Entry
dn: cn=developers,ou=Groups,dc=example,dc=com
objectClass: top
objectClass: groupOfNames
cn: developers
description: Development team members
member: uid=alice,ou=People,dc=example,dc=com
member: uid=bob,ou=People,dc=example,dc=com`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LDAP Operations</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Parameters</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Bind</td>
            <td className="p-3 border">Authenticate to server</td>
            <td className="p-3 border">DN, credentials, auth method</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Unbind</td>
            <td className="p-3 border">Close connection</td>
            <td className="p-3 border">None</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Search</td>
            <td className="p-3 border">Find entries by criteria</td>
            <td className="p-3 border">Base DN, scope, filter, attributes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Compare</td>
            <td className="p-3 border">Check attribute value</td>
            <td className="p-3 border">DN, attribute, value</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Add</td>
            <td className="p-3 border">Create new entry</td>
            <td className="p-3 border">DN, attributes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Delete</td>
            <td className="p-3 border">Remove entry</td>
            <td className="p-3 border">DN</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Modify</td>
            <td className="p-3 border">Change entry attributes</td>
            <td className="p-3 border">DN, modifications</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ModifyDN</td>
            <td className="p-3 border">Rename/move entry</td>
            <td className="p-3 border">DN, new RDN, new parent</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Abandon</td>
            <td className="p-3 border">Cancel pending operation</td>
            <td className="p-3 border">Message ID</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">LDAP Search Operation</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`LDAP Search Parameters:

┌─────────────────────────────────────────────────────────────────┐
│  SEARCH REQUEST                                                  │
├─────────────────────────────────────────────────────────────────┤
│  Base DN:     dc=example,dc=com                                 │
│  Scope:       subtree                                           │
│  Filter:      (&(objectClass=person)(department=Engineering))   │
│  Attributes:  cn, mail, telephoneNumber                         │
│  Size Limit:  100                                               │
│  Time Limit:  30 seconds                                        │
└─────────────────────────────────────────────────────────────────┘

Search Scopes:
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  base (0):     Search only the base entry                       │
│  ┌───────┐                                                     │
│  │ BASE  │ ← Only this entry                                   │
│  └───────┘                                                     │
│                                                                 │
│  one (1):      Search immediate children only                   │
│  ┌───────┐                                                     │
│  │ BASE  │                                                     │
│  └───┬───┘                                                     │
│      ├── Child1 ← Searched                                     │
│      └── Child2 ← Searched                                     │
│           └── Grandchild (not searched)                        │
│                                                                 │
│  sub (2):      Search entire subtree                            │
│  ┌───────┐                                                     │
│  │ BASE  │ ← Searched                                          │
│  └───┬───┘                                                     │
│      ├── Child1 ← Searched                                     │
│      └── Child2 ← Searched                                     │
│           └── Grandchild ← Searched                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Search Filter Syntax</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`LDAP Search Filter Examples:

# Simple equality
(uid=alice)
(objectClass=person)

# Presence (attribute exists)
(mail=*)

# Substring matching
(cn=A*)          # Starts with A
(cn=*son)        # Ends with son
(cn=*li*)        # Contains li

# Comparison
(uidNumber>=1000)
(uidNumber<=2000)

# Compound filters
(&(objectClass=person)(department=Sales))           # AND
(|(department=Sales)(department=Marketing))         # OR
(!(accountLocked=TRUE))                             # NOT

# Complex example: Active engineers in US offices
(&
  (objectClass=inetOrgPerson)
  (department=Engineering)
  (|(l=New York)(l=San Francisco)(l=Seattle))
  (!(accountStatus=disabled))
)

# Find users who are members of admin group
(&
  (objectClass=person)
  (memberOf=cn=admins,ou=Groups,dc=example,dc=com)
)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LDAP Authentication</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Simple Bind</h3>
        <p className="leading-relaxed mb-2">
          Client sends DN and password in plaintext. Should only be used
          over encrypted connection (LDAPS/StartTLS).
        </p>
        <div className="font-mono text-sm text-gray-900 bg-gray-100 text-gray-900 p-2 rounded mt-2">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Bind DN: uid=alice,ou=People,dc=example,dc=com
Password: secret123`}
          </pre>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">SASL Bind</h3>
        <p className="leading-relaxed mb-2">
          Uses SASL mechanisms for flexible authentication. Supports
          Kerberos, DIGEST-MD5, EXTERNAL (certificates), etc.
        </p>
        <div className="font-mono text-sm text-gray-900 bg-gray-100 text-gray-900 p-2 rounded mt-2">
          <pre className="whitespace-pre-wrap text-gray-900">
{`SASL Mechanism: GSSAPI
Kerberos Principal: alice@EXAMPLE.COM`}
          </pre>
        </div>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">LDAP Security</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`LDAP Security Options:

1. LDAPS (LDAP over SSL/TLS)
   ┌────────────┐        ┌────────────┐
   │   Client   │◄──────►│   Server   │
   │            │  TLS   │  Port 636  │
   └────────────┘        └────────────┘
   - Encrypted from start
   - Uses port 636

2. StartTLS
   ┌────────────┐        ┌────────────┐
   │   Client   │◄──────►│   Server   │
   │            │ Plain  │  Port 389  │
   │            │ then   │            │
   │            │ TLS    │            │
   └────────────┘        └────────────┘
   - Starts unencrypted on port 389
   - Upgrades to TLS with StartTLS command

3. Access Control Lists (ACLs)
   ┌─────────────────────────────────────────────────────────────┐
   │  access to attrs=userPassword                               │
   │    by self write                                            │
   │    by anonymous auth                                        │
   │    by * none                                                │
   │                                                             │
   │  access to dn.subtree="ou=People,dc=example,dc=com"        │
   │    by group.exact="cn=admins,ou=Groups,dc=example,dc=com"  │
   │       write                                                 │
   │    by users read                                            │
   │    by anonymous none                                        │
   └─────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common LDAP Uses</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Use Case</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Authentication</td>
            <td className="p-3 border">Verify user credentials</td>
            <td className="p-3 border">Linux PAM, web app login</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Authorization</td>
            <td className="p-3 border">Check group membership</td>
            <td className="p-3 border">Access control, sudo rights</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Address Book</td>
            <td className="p-3 border">Store contact information</td>
            <td className="p-3 border">Email clients, phone directories</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">User Management</td>
            <td className="p-3 border">Central user account store</td>
            <td className="p-3 border">NSS, Active Directory</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">PKI</td>
            <td className="p-3 border">Certificate storage</td>
            <td className="p-3 border">SSL/TLS certificate lookup</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DNS Backend</td>
            <td className="p-3 border">Store DNS zones</td>
            <td className="p-3 border">BIND with LDAP backend</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">LDAP URL Format</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`LDAP URL Syntax:

ldap://host:port/base_dn?attributes?scope?filter?extensions

Examples:

# Simple connection
ldap://ldap.example.com/

# With base DN
ldap://ldap.example.com/dc=example,dc=com

# Search for user
ldap://ldap.example.com/ou=People,dc=example,dc=com?cn,mail?sub?(uid=alice)

# LDAPS (secure)
ldaps://ldap.example.com:636/dc=example,dc=com

Components:
┌─────────────────────────────────────────────────────────────────┐
│  Scheme:     ldap:// or ldaps://                                │
│  Host:       ldap.example.com                                   │
│  Port:       389 (default) or 636 (LDAPS)                       │
│  Base DN:    dc=example,dc=com                                  │
│  Attributes: cn,mail (comma-separated)                          │
│  Scope:      base, one, or sub                                  │
│  Filter:     (uid=alice)                                        │
│  Extensions: Optional extensions                                │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LDAP Command Line Tools</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common ldap-utils Commands:

# Search for entries
ldapsearch -x -H ldap://localhost -b "dc=example,dc=com" \
  -D "cn=admin,dc=example,dc=com" -W "(objectClass=person)"

# Add entry from LDIF file
ldapadd -x -H ldap://localhost \
  -D "cn=admin,dc=example,dc=com" -W -f newuser.ldif

# Modify entry
ldapmodify -x -H ldap://localhost \
  -D "cn=admin,dc=example,dc=com" -W -f changes.ldif

# Delete entry
ldapdelete -x -H ldap://localhost \
  -D "cn=admin,dc=example,dc=com" -W \
  "uid=alice,ou=People,dc=example,dc=com"

# Test authentication (bind)
ldapwhoami -x -H ldap://localhost \
  -D "uid=alice,ou=People,dc=example,dc=com" -W

# Change password
ldappasswd -x -H ldap://localhost \
  -D "cn=admin,dc=example,dc=com" -W \
  -S "uid=alice,ou=People,dc=example,dc=com"`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>LDAP is a lightweight protocol for directory access over TCP/IP</li>
        <li>Data is organized in a tree (DIT) with entries identified by DN</li>
        <li>Entries contain attributes; object classes define allowed attributes</li>
        <li>Nine core operations: bind, unbind, search, compare, add, delete, modify, modifyDN, abandon</li>
        <li>Search filters use prefix notation with AND (&), OR (|), NOT (!)</li>
        <li>Three search scopes: base, one (single level), sub (subtree)</li>
        <li>Security: Use LDAPS or StartTLS for encryption, ACLs for access control</li>
        <li>Common uses: authentication, authorization, address books, user management</li>
      </ul>
    </div>
  </div>
);

export default LDAP;
