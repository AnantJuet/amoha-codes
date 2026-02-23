import React from 'react';

const ProtectionGoals: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Protection Goals and Principles
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Protection in operating systems refers to the mechanisms that control access
      of programs, processes, and users to the resources defined by a computer system.
      Protection goals define what we want to achieve, while protection principles
      guide how we implement these mechanisms effectively and securely.
    </p>

    {/* Why Protection is Needed */}
    <h2 className="text-3xl font-bold mt-8">Why Protection is Needed</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Reasons for Protection:
===============================================================================

1. PREVENT UNAUTHORIZED ACCESS
   ┌───────────────────────────────────────────────────────────────────────┐
   │                                                                       │
   │   User A's Files        Protection        User B's Files             │
   │   ┌─────────────┐       Boundary          ┌─────────────┐            │
   │   │ Documents   │ ◄────────X─────────────►│ Documents   │            │
   │   │ Photos      │       [BLOCKED]         │ Photos      │            │
   │   │ Secrets     │                         │ Secrets     │            │
   │   └─────────────┘                         └─────────────┘            │
   │                                                                       │
   └───────────────────────────────────────────────────────────────────────┘

2. PREVENT MALICIOUS SOFTWARE
   ┌───────────────────────────────────────────────────────────────────────┐
   │                                                                       │
   │   Malware                Protection         System Files              │
   │   ┌─────────────┐       Mechanism           ┌─────────────┐          │
   │   │  Virus      │ ──────────X──────────────►│ /etc/passwd │          │
   │   │  Process    │       [DENIED]            │ /bin/       │          │
   │   └─────────────┘                           └─────────────┘          │
   │                                                                       │
   └───────────────────────────────────────────────────────────────────────┘

3. ENSURE SYSTEM RELIABILITY
   ┌───────────────────────────────────────────────────────────────────────┐
   │                                                                       │
   │   Buggy Process          Protection         Kernel Memory            │
   │   ┌─────────────┐       Barrier            ┌─────────────┐           │
   │   │  Faulty     │ ──────────X──────────────►│ Critical    │          │
   │   │  Code       │       [BLOCKED]          │ Data        │           │
   │   └─────────────┘                          └─────────────┘           │
   │                                                                       │
   │   A bug in one process cannot corrupt kernel or other processes      │
   │                                                                       │
   └───────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Primary Protection Goals */}
    <h2 className="text-3xl font-bold mt-8">Primary Protection Goals</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Goal</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">OS Implementation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Resource Isolation</td>
            <td className="p-3 border">Prevent processes from interfering with each other</td>
            <td className="p-3 border">Virtual memory, process isolation</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Access Control</td>
            <td className="p-3 border">Control who can access what resources</td>
            <td className="p-3 border">File permissions, ACLs</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Data Integrity</td>
            <td className="p-3 border">Prevent unauthorized modification</td>
            <td className="p-3 border">Read-only memory, checksums</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">System Reliability</td>
            <td className="p-3 border">Prevent system crashes from user errors</td>
            <td className="p-3 border">Kernel mode separation</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Accountability</td>
            <td className="p-3 border">Track who accessed what</td>
            <td className="p-3 border">Audit logs, access logging</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Protection Principles */}
    <h2 className="text-3xl font-bold mt-8">Saltzer and Schroeder's Design Principles</h2>
    <p className="leading-relaxed">
      In 1975, Jerome Saltzer and Michael Schroeder defined eight design principles
      for building secure systems. These principles remain fundamental to modern
      operating system security design.
    </p>

    {/* Principle 1: Least Privilege */}
    <h3 className="text-2xl font-semibold mt-6">1. Principle of Least Privilege</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Least Privilege:
===============================================================================
"Every program and user should operate using the least set of privileges
necessary to complete the task."

Example - Web Server:
─────────────────────────────────────────────────────────────────────────────

Bad Design:                          Good Design:
┌─────────────────────┐              ┌─────────────────────┐
│     Web Server      │              │     Web Server      │
│                     │              │                     │
│  Running as ROOT    │              │  Running as www-data│
│                     │              │                     │
│  Can access:        │              │  Can access:        │
│  - ALL files        │              │  - /var/www only    │
│  - ALL processes    │              │  - Specific ports   │
│  - Network          │              │  - Network          │
│  - Hardware         │              │                     │
│                     │              │  Cannot access:     │
│  [HIGH RISK]        │              │  - /etc/passwd      │
│  If compromised,    │              │  - Other users      │
│  attacker gets      │              │  - Hardware         │
│  FULL CONTROL       │              │                     │
│                     │              │  [LIMITED DAMAGE]   │
└─────────────────────┘              └─────────────────────┘


Implementation:
$ sudo -u www-data ./webserver    # Run with limited user
$ chmod 750 /var/www              # Restrict directory access
$ setcap cap_net_bind_service=+ep # Only specific capabilities
`}
      </pre>
    </div>

    {/* Principle 2: Fail-Safe Defaults */}
    <h3 className="text-2xl font-semibold mt-6">2. Fail-Safe Defaults</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Fail-Safe Defaults:
===============================================================================
"Access decisions should be based on permission rather than exclusion.
Default should be DENY access."

                    ┌─────────────────────────────────────────┐
                    │              ACCESS REQUEST              │
                    └───────────────────┬─────────────────────┘
                                        │
                    ┌───────────────────▼─────────────────────┐
                    │         Permission Granted?              │
                    └───────────────────┬─────────────────────┘
                                        │
                     ┌──────────────────┼──────────────────┐
                     │                  │                  │
                 YES │              UNKNOWN            NO  │
                     ▼                  ▼                  ▼
           ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
           │     ALLOW       │  │     DENY        │  │     DENY        │
           │                 │  │   (Default)     │  │                 │
           └─────────────────┘  └─────────────────┘  └─────────────────┘

Example - New User Created:
─────────────────────────────────────────────────────────────────────────────
$ useradd newuser

New user gets:
- Access to own home directory: YES
- Access to other users' files: NO (default deny)
- Access to system files: NO (default deny)
- Sudo privileges: NO (default deny)
`}
      </pre>
    </div>

    {/* Other Principles Table */}
    <h3 className="text-2xl font-semibold mt-6">3-8. Additional Principles</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Principle</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Complete Mediation</td>
            <td className="p-3 border">Every access to every object must be checked</td>
            <td className="p-3 border">Check permissions on every file access, not just open()</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Open Design</td>
            <td className="p-3 border">Security should not depend on secrecy of design</td>
            <td className="p-3 border">Linux kernel is open source yet secure</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Separation of Privilege</td>
            <td className="p-3 border">Require multiple keys/conditions to access</td>
            <td className="p-3 border">Two-factor authentication, dual signatures</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Least Common Mechanism</td>
            <td className="p-3 border">Minimize shared mechanisms between users</td>
            <td className="p-3 border">Separate user address spaces</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Psychological Acceptability</td>
            <td className="p-3 border">Security mechanisms should be easy to use</td>
            <td className="p-3 border">Simple file permissions (rwx)</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Economy of Mechanism</td>
            <td className="p-3 border">Keep design simple and small</td>
            <td className="p-3 border">Microkernel approach</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Complete Mediation Detail */}
    <h2 className="text-3xl font-bold mt-8">Complete Mediation in Detail</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Complete Mediation:
===============================================================================

Every resource access goes through the Reference Monitor:

    ┌──────────────┐                              ┌──────────────┐
    │   Process    │                              │   Resource   │
    │   (Subject)  │                              │   (Object)   │
    └──────┬───────┘                              └──────▲───────┘
           │                                             │
           │  Access Request                             │
           ▼                                             │
    ╔════════════════════════════════════════════════════╪════════╗
    ║                  REFERENCE MONITOR                  │        ║
    ║  ┌────────────────────────────────────────────────┐│        ║
    ║  │                                                ││        ║
    ║  │  1. Authenticate Subject                       ││        ║
    ║  │  2. Determine Access Rights                    ││        ║
    ║  │  3. Compare with Security Policy               ││        ║
    ║  │  4. Grant or Deny Access                       ││        ║
    ║  │  5. Log the Access Attempt                     ││        ║
    ║  │                                                ││        ║
    ║  └────────────────────────────────────────────────┘│        ║
    ║                        │                           │        ║
    ║            ┌───────────┴───────────┐               │        ║
    ║            ▼                       ▼               │        ║
    ║      [ALLOW]                  [DENY]               │        ║
    ║         │                        │                 │        ║
    ╚═════════╪════════════════════════╪═════════════════╪════════╝
              │                        │                 │
              └────────────────────────┼─────────────────┘
                                       │
                                       ▼
                               [Access Denied
                                Error Returned]

Properties of Reference Monitor:
- Tamper-proof: Cannot be modified by subjects
- Always invoked: Cannot be bypassed
- Small enough to be verified: Economy of mechanism
`}
      </pre>
    </div>

    {/* Defense in Depth */}
    <h2 className="text-3xl font-bold mt-8">Defense in Depth</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Defense in Depth - Multiple Protection Layers:
===============================================================================

                    ┌─────────────────────────────────────────────────┐
                    │             PHYSICAL SECURITY                   │
                    │   Locks, security guards, surveillance          │
                    │   ┌─────────────────────────────────────────┐   │
                    │   │           NETWORK SECURITY              │   │
                    │   │     Firewalls, IDS/IPS, VPN            │   │
                    │   │   ┌─────────────────────────────────┐   │   │
                    │   │   │       HOST SECURITY             │   │   │
                    │   │   │   Antivirus, host firewall      │   │   │
                    │   │   │   ┌─────────────────────────┐   │   │   │
                    │   │   │   │   APPLICATION SECURITY  │   │   │   │
                    │   │   │   │   Input validation      │   │   │   │
                    │   │   │   │   ┌─────────────────┐   │   │   │   │
                    │   │   │   │   │   DATA          │   │   │   │   │
                    │   │   │   │   │   SECURITY      │   │   │   │   │
                    │   │   │   │   │   Encryption    │   │   │   │   │
                    │   │   │   │   │                 │   │   │   │   │
                    │   │   │   │   │  ┌───────────┐  │   │   │   │   │
                    │   │   │   │   │  │  ASSET    │  │   │   │   │   │
                    │   │   │   │   │  └───────────┘  │   │   │   │   │
                    │   │   │   │   └─────────────────┘   │   │   │   │
                    │   │   │   └─────────────────────────┘   │   │   │
                    │   │   └─────────────────────────────────┘   │   │
                    │   └─────────────────────────────────────────┘   │
                    └─────────────────────────────────────────────────┘

Attacker must penetrate ALL layers to reach the asset
Each layer provides additional protection
`}
      </pre>
    </div>

    {/* Goals Summary Table */}
    <h2 className="text-3xl font-bold mt-8">Protection Goals Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Goal</th>
            <th className="p-3 border">Threat Addressed</th>
            <th className="p-3 border">Mechanism</th>
            <th className="p-3 border">Principle Applied</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Prevent unauthorized access</td>
            <td className="p-3 border">Intruders</td>
            <td className="p-3 border">Authentication, authorization</td>
            <td className="p-3 border">Complete mediation</td>
          </tr>
          <tr>
            <td className="p-3 border">Limit damage from breaches</td>
            <td className="p-3 border">Compromised accounts</td>
            <td className="p-3 border">Access control, sandboxing</td>
            <td className="p-3 border">Least privilege</td>
          </tr>
          <tr>
            <td className="p-3 border">Ensure data integrity</td>
            <td className="p-3 border">Tampering</td>
            <td className="p-3 border">Checksums, write protection</td>
            <td className="p-3 border">Separation of privilege</td>
          </tr>
          <tr>
            <td className="p-3 border">Maintain system stability</td>
            <td className="p-3 border">Buggy programs</td>
            <td className="p-3 border">Process isolation</td>
            <td className="p-3 border">Least common mechanism</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Protection controls access of processes and users to system resources</li>
      <li>Least privilege: Grant only minimum necessary permissions</li>
      <li>Fail-safe defaults: Default to deny access when in doubt</li>
      <li>Complete mediation: Check every access through reference monitor</li>
      <li>Open design: Security should not rely on secrecy of implementation</li>
      <li>Defense in depth: Multiple layers of protection provide resilience</li>
      <li>Good protection mechanisms should be simple and easy to use</li>
    </ul>
  </div>
);

export default ProtectionGoals;
