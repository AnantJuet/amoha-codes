import React from 'react';

const SecurityIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Operating System Security
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Operating system security is concerned with ensuring that the computer system
      operates correctly, resources are used only by authorized users, and data is
      protected from unauthorized access, modification, or destruction. Security
      encompasses the mechanisms and policies that protect the system from internal
      and external threats.
    </p>

    {/* Security vs Protection */}
    <h2 className="text-3xl font-bold mt-8">Security vs Protection</h2>
    <p className="leading-relaxed">
      While often used interchangeably, security and protection have distinct meanings
      in operating system context:
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Security</th>
            <th className="p-3 border">Protection</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Definition</td>
            <td className="p-3 border">Defense against external and internal attacks</td>
            <td className="p-3 border">Control of access to resources by processes</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Scope</td>
            <td className="p-3 border">Broader (includes authentication, encryption)</td>
            <td className="p-3 border">Narrower (resource access control)</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Focus</td>
            <td className="p-3 border">Preventing unauthorized access from outside</td>
            <td className="p-3 border">Controlling access within the system</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Example</td>
            <td className="p-3 border">Password authentication, firewall</td>
            <td className="p-3 border">File permissions, memory protection</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Security Goals - CIA Triad */}
    <h2 className="text-3xl font-bold mt-8">Security Goals: The CIA Triad</h2>
    <p className="leading-relaxed">
      The three fundamental security goals are Confidentiality, Integrity, and Availability,
      commonly known as the CIA triad:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
The CIA Triad:
===============================================================================

                         ┌─────────────────────┐
                         │  CONFIDENTIALITY    │
                         │                     │
                         │  Only authorized    │
                         │  users can access   │
                         │  information        │
                         └──────────┬──────────┘
                                    │
                                    ▼
        ┌───────────────────────────────────────────────────────┐
        │                    SECURITY                           │
        │                                                       │
        │   Protecting information and systems from threats     │
        └───────────────┬───────────────────────┬───────────────┘
                        │                       │
                        ▼                       ▼
         ┌─────────────────────┐   ┌─────────────────────┐
         │     INTEGRITY       │   │   AVAILABILITY      │
         │                     │   │                     │
         │  Data is accurate   │   │  Resources are      │
         │  and unmodified     │   │  accessible when    │
         │  by unauthorized    │   │  needed             │
         │  parties            │   │                     │
         └─────────────────────┘   └─────────────────────┘

Examples:
─────────────────────────────────────────────────────────────────
Confidentiality: Encrypted files, private emails, passwords
Integrity:       Checksums, digital signatures, version control
Availability:    Redundant servers, backups, DDoS protection
`}
      </pre>
    </div>

    {/* Additional Security Goals */}
    <h2 className="text-3xl font-bold mt-8">Additional Security Goals</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Goal</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Authenticity</td>
            <td className="p-3 border">Verification of identity of users/systems</td>
            <td className="p-3 border">Digital certificates, two-factor auth</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Non-repudiation</td>
            <td className="p-3 border">Cannot deny having performed an action</td>
            <td className="p-3 border">Digital signatures, audit logs</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Accountability</td>
            <td className="p-3 border">Actions can be traced to responsible entity</td>
            <td className="p-3 border">Access logs, user activity monitoring</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Privacy</td>
            <td className="p-3 border">Control over personal information</td>
            <td className="p-3 border">Data anonymization, consent management</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Security Policies */}
    <h2 className="text-3xl font-bold mt-8">Security Policies</h2>
    <p className="leading-relaxed">
      A security policy is a set of rules and guidelines that define how security
      is implemented and maintained within an organization or system. Security
      policies form the foundation of any security framework.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Security Policy Framework:
===============================================================================

┌─────────────────────────────────────────────────────────────────────────────┐
│                          SECURITY POLICY                                     │
│                                                                             │
│  "What security means for this organization/system"                         │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
           ┌───────────────────────┼───────────────────────┐
           ▼                       ▼                       ▼
┌─────────────────────┐ ┌─────────────────────┐ ┌─────────────────────┐
│   ACCESS CONTROL    │ │   DATA PROTECTION   │ │   NETWORK SECURITY  │
│   POLICY            │ │   POLICY            │ │   POLICY            │
│                     │ │                     │ │                     │
│ - Who can access    │ │ - Classification    │ │ - Firewall rules    │
│ - What resources    │ │ - Encryption        │ │ - Allowed protocols │
│ - When/Where        │ │ - Retention         │ │ - VPN requirements  │
└─────────────────────┘ └─────────────────────┘ └─────────────────────┘
           │                       │                       │
           └───────────────────────┼───────────────────────┘
                                   ▼
                    ┌─────────────────────────┐
                    │    IMPLEMENTATION       │
                    │    MECHANISMS           │
                    │                         │
                    │  - Technical controls   │
                    │  - Procedures           │
                    │  - Training             │
                    └─────────────────────────┘
`}
      </pre>
    </div>

    {/* Types of Security Policies */}
    <h2 className="text-3xl font-bold mt-8">Types of Security Policies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Policy Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">OS Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Discretionary (DAC)</td>
            <td className="p-3 border">Owner controls access to their resources</td>
            <td className="p-3 border">Unix file permissions (rwx)</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Mandatory (MAC)</td>
            <td className="p-3 border">System enforces access based on labels</td>
            <td className="p-3 border">SELinux, security clearances</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Role-Based (RBAC)</td>
            <td className="p-3 border">Access based on user's role in organization</td>
            <td className="p-3 border">Admin vs User groups</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Attribute-Based (ABAC)</td>
            <td className="p-3 border">Access based on attributes of users/resources</td>
            <td className="p-3 border">Time-based access, location-based</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Security Mechanisms */}
    <h2 className="text-3xl font-bold mt-8">Security Mechanisms in Operating Systems</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
OS Security Layers:
===============================================================================

     User Level         │  System Level       │  Hardware Level
━━━━━━━━━━━━━━━━━━━━━━━│━━━━━━━━━━━━━━━━━━━━━│━━━━━━━━━━━━━━━━━━━━
                        │                     │
  ┌─────────────────┐   │  ┌─────────────────┐│  ┌─────────────────┐
  │  Authentication │   │  │  Access Control ││  │  CPU Protection │
  │  - Login/Logout │   │  │  - File perms   ││  │  - Kernel mode  │
  │  - Passwords    │   │  │  - Process      ││  │  - User mode    │
  └─────────────────┘   │  │    isolation    ││  └─────────────────┘
                        │  └─────────────────┘│
  ┌─────────────────┐   │                     │  ┌─────────────────┐
  │  Authorization  │   │  ┌─────────────────┐│  │ Memory Protect  │
  │  - User groups  │   │  │  Audit/Logging  ││  │  - MMU          │
  │  - Permissions  │   │  │  - System logs  ││  │  - Segmentation │
  └─────────────────┘   │  │  - Security     ││  └─────────────────┘
                        │  │    events       ││
  ┌─────────────────┐   │  └─────────────────┘│  ┌─────────────────┐
  │  User Accounts  │   │                     │  │  I/O Protection │
  │  - Privileges   │   │  ┌─────────────────┐│  │  - Privileged   │
  │  - Quotas       │   │  │  Cryptography   ││  │    instructions │
  └─────────────────┘   │  │  - Encryption   ││  └─────────────────┘
                        │  │  - Hashing      ││
                        │  └─────────────────┘│
`}
      </pre>
    </div>

    {/* Security Principles */}
    <h2 className="text-3xl font-bold mt-8">Fundamental Security Principles</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Principle of Least Privilege:</strong> Every program and user should
        operate with the minimum set of privileges necessary to complete their task
      </li>
      <li>
        <strong>Defense in Depth:</strong> Multiple layers of security controls should
        be implemented throughout the system
      </li>
      <li>
        <strong>Fail-Safe Defaults:</strong> The default configuration should deny
        access; access must be explicitly granted
      </li>
      <li>
        <strong>Complete Mediation:</strong> Every access to every object must be
        checked for proper authorization
      </li>
      <li>
        <strong>Open Design:</strong> Security should not depend on secrecy of the
        design or implementation
      </li>
      <li>
        <strong>Separation of Privilege:</strong> Critical operations should require
        agreement of multiple parties
      </li>
    </ul>

    {/* Real-World Example */}
    <h2 className="text-3xl font-bold mt-8">Real-World Example: Linux Security</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Linux Security Implementation:
===============================================================================

User Authentication:
$ sudo login
  Username: alice
  Password: ****
  [PAM verifies credentials against /etc/shadow]

File Access Control:
$ ls -la /home/alice/secrets.txt
  -rw------- 1 alice alice 1024 Jan 12 10:00 secrets.txt
   │││
   ││└── Others: No access
   │└─── Group: No access
   └──── Owner: Read + Write

Process Isolation:
$ ps aux | grep alice
  alice  1234  0.0  0.1  ...  bash    ← Alice's process
  alice  1235  0.0  0.2  ...  vim     ← Alice's editor

  [Process 1234 cannot access memory of process 5678 owned by bob]

Privilege Escalation (sudo):
$ sudo apt update
  [sudo] password for alice: ****
  [Checks /etc/sudoers for alice's privileges]
  [Temporarily elevates to root for this command]

Audit Logging:
$ tail /var/log/auth.log
  Jan 12 10:01:23 server sshd: Accepted password for alice from 192.168.1.100
  Jan 12 10:01:24 server sudo: alice : TTY=pts/0 ; COMMAND=/usr/bin/apt update
`}
      </pre>
    </div>

    {/* Security Architecture Diagram */}
    <h2 className="text-3xl font-bold mt-8">OS Security Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Layered Security Architecture:
===============================================================================

                    ┌─────────────────────────────────┐
                    │         USER APPLICATIONS       │
                    │    (Least Privileged Layer)     │
                    └─────────────────┬───────────────┘
                                      │
                    ┌─────────────────▼───────────────┐
                    │      AUTHENTICATION LAYER       │
                    │   Login, Password Validation    │
                    └─────────────────┬───────────────┘
                                      │
                    ┌─────────────────▼───────────────┐
                    │     AUTHORIZATION LAYER         │
                    │   Access Control, Permissions   │
                    └─────────────────┬───────────────┘
                                      │
                    ┌─────────────────▼───────────────┐
                    │     OPERATING SYSTEM KERNEL     │
                    │   Process Management, Memory    │
                    │   Management, I/O Control       │
                    └─────────────────┬───────────────┘
                                      │
                    ┌─────────────────▼───────────────┐
                    │      HARDWARE ABSTRACTION       │
                    │   CPU Modes, MMU, Interrupts    │
                    └─────────────────┬───────────────┘
                                      │
                    ┌─────────────────▼───────────────┐
                    │         PHYSICAL HARDWARE       │
                    │    (Most Privileged Layer)      │
                    └─────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Security protects against external and internal threats</li>
      <li>Protection controls resource access within the system</li>
      <li>The CIA triad (Confidentiality, Integrity, Availability) forms the core security goals</li>
      <li>Security policies define rules; mechanisms implement them</li>
      <li>Principle of least privilege is fundamental to secure system design</li>
      <li>Defense in depth uses multiple security layers for robust protection</li>
    </ul>
  </div>
);

export default SecurityIntro;
