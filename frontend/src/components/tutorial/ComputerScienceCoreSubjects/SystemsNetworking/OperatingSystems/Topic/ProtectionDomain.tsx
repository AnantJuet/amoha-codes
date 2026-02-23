import React from 'react';

const ProtectionDomain: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Protection Domain and Domain Switching
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A protection domain defines the set of resources that a process can access
      and the operations it can perform on those resources. Understanding protection
      domains is fundamental to implementing access control in operating systems,
      as it allows the OS to enforce the principle of least privilege.
    </p>

    {/* What is a Protection Domain */}
    <h2 className="text-3xl font-bold mt-8">What is a Protection Domain?</h2>
    <p className="leading-relaxed">
      A protection domain is a collection of access rights. Each access right is
      an ordered pair (object, rights-set) where object is a resource and rights-set
      specifies the permitted operations on that object.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Protection Domain Structure:
===============================================================================

Domain D1 = { (File1, {read, write}), (File2, {read}), (Printer, {print}) }
Domain D2 = { (File2, {read, write}), (File3, {read, write, execute}) }
Domain D3 = { (File1, {read}), (Printer, {print}), (Network, {send, receive}) }

Visualization:
─────────────────────────────────────────────────────────────────────────────

    ┌─────────────────────────────────────────────────────────────────────┐
    │                         PROTECTION DOMAINS                          │
    │                                                                     │
    │    Domain D1                   Domain D2                           │
    │    ┌───────────────────┐       ┌───────────────────┐               │
    │    │                   │       │                   │               │
    │    │  File1: R, W      │       │  File2: R, W      │               │
    │    │  File2: R         │       │  File3: R, W, X   │               │
    │    │  Printer: Print   │       │                   │               │
    │    │                   │       │                   │               │
    │    └───────────────────┘       └───────────────────┘               │
    │                                                                     │
    │    Domain D3                                                        │
    │    ┌───────────────────┐                                           │
    │    │                   │                                           │
    │    │  File1: R         │    Process P executes in                  │
    │    │  Printer: Print   │    exactly ONE domain at                  │
    │    │  Network: S, R    │    any given time                         │
    │    │                   │                                           │
    │    └───────────────────┘                                           │
    │                                                                     │
    └─────────────────────────────────────────────────────────────────────┘

Access Rights Legend: R = Read, W = Write, X = Execute, S = Send
`}
      </pre>
    </div>

    {/* Domain Association */}
    <h2 className="text-3xl font-bold mt-8">Domain Association Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Association</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">User-based</td>
            <td className="p-3 border">Domain = set of rights for a user</td>
            <td className="p-3 border">Unix user permissions</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Process-based</td>
            <td className="p-3 border">Domain = set of rights for a process</td>
            <td className="p-3 border">Sandboxed applications</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Procedure-based</td>
            <td className="p-3 border">Domain = set of rights for local variables</td>
            <td className="p-3 border">Function scope in programming</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Ring-based</td>
            <td className="p-3 border">Domain = privilege level (ring)</td>
            <td className="p-3 border">Intel x86 protection rings</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Unix Domain Example */}
    <h2 className="text-3xl font-bold mt-8">Domain Implementation in Unix</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Unix Protection Domains:
===============================================================================

In Unix, domain is associated with user ID (UID):

User: alice (UID 1000)                 User: bob (UID 1001)
Domain D_alice:                        Domain D_bob:
┌──────────────────────────────┐       ┌──────────────────────────────┐
│                              │       │                              │
│  /home/alice/*: rwx          │       │  /home/bob/*: rwx            │
│  /tmp/*: rwx                 │       │  /tmp/*: rwx                 │
│  /usr/bin/*: rx              │       │  /usr/bin/*: rx              │
│  /var/log/*: r               │       │  /var/log/*: r               │
│                              │       │                              │
└──────────────────────────────┘       └──────────────────────────────┘


Process Domain:
─────────────────────────────────────────────────────────────────────────────
$ ps aux | grep alice
alice    1234  bash     ← Running in D_alice

$ id
uid=1000(alice) gid=1000(alice) groups=1000(alice),27(sudo)

Domain includes:
- UID rights (primary domain)
- GID rights (group domain)
- Supplementary group rights (additional domains)

Access Check:
┌─────────────────────────────────────────────────────────────────────────┐
│  When process accesses file:                                            │
│                                                                         │
│  1. Check if process UID = file owner UID → use owner permissions      │
│  2. Else check if process GID = file GID → use group permissions       │
│  3. Else → use other permissions                                        │
└─────────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Domain Switching */}
    <h2 className="text-3xl font-bold mt-8">Domain Switching</h2>
    <p className="leading-relaxed">
      Domain switching occurs when a process transitions from one protection domain
      to another. This is necessary when a process needs different privileges to
      perform certain operations.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Domain Switching Concept:
===============================================================================

Process P starts in Domain D1, switches to D2 for privileged operation:

Timeline:
─────────────────────────────────────────────────────────────────────────────

    Process P
        │
        │ (running in D1)
        ▼
    ┌────────────────┐
    │   Domain D1    │    Normal operations
    │   (User mode)  │    - Read own files
    │                │    - Execute programs
    └───────┬────────┘
            │
            │ DOMAIN SWITCH (controlled)
            │
            ▼
    ╔════════════════╗
    ║   Domain D2    ║    Privileged operations
    ║   (Elevated)   ║    - Modify system files
    ║                ║    - Access hardware
    ╚═══════╤════════╝
            │
            │ RETURN TO D1
            │
            ▼
    ┌────────────────┐
    │   Domain D1    │    Back to normal
    │   (User mode)  │
    │                │
    └────────────────┘


Switch must be:
- Controlled: Only through defined mechanisms
- Audited: System can track switches
- Reversible: Can return to original domain
`}
      </pre>
    </div>

    {/* Types of Domain Switching */}
    <h2 className="text-3xl font-bold mt-8">Types of Domain Switching</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Mechanism</th>
            <th className="p-3 border">How It Works</th>
            <th className="p-3 border">Unix Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">SUID/SGID</td>
            <td className="p-3 border">Execute with file owner's privileges</td>
            <td className="p-3 border">passwd (SUID root)</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">sudo</td>
            <td className="p-3 border">Execute command as another user</td>
            <td className="p-3 border">sudo apt update</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">su</td>
            <td className="p-3 border">Switch to another user's shell</td>
            <td className="p-3 border">su - root</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">System Calls</td>
            <td className="p-3 border">Switch to kernel mode</td>
            <td className="p-3 border">open(), read(), write()</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Capabilities</td>
            <td className="p-3 border">Grant specific privileges</td>
            <td className="p-3 border">CAP_NET_BIND_SERVICE</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* SUID Example */}
    <h2 className="text-3xl font-bold mt-8">SUID: Set-User-ID Domain Switching</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
SUID Domain Switching Example - passwd command:
===============================================================================

$ ls -l /usr/bin/passwd
-rwsr-xr-x 1 root root 68208 /usr/bin/passwd
   │
   └── 's' indicates SUID bit set


How it works:
─────────────────────────────────────────────────────────────────────────────

User alice (UID 1000) runs passwd:

    ┌─────────────────────────────────────────────────────────────────────┐
    │                                                                     │
    │   alice@system:~$ passwd                                            │
    │                                                                     │
    │   ┌───────────────┐         ┌───────────────┐                      │
    │   │  Process      │         │  Process      │                      │
    │   │  UID: 1000    │ ──────► │  UID: 1000    │                      │
    │   │  EUID: 1000   │   exec  │  EUID: 0      │ ← Effective UID = 0  │
    │   │  (alice)      │         │  (root)       │   (root's domain!)   │
    │   └───────────────┘         └───────┬───────┘                      │
    │                                     │                               │
    │                                     ▼                               │
    │                             ┌───────────────┐                      │
    │                             │ Can modify    │                      │
    │                             │ /etc/shadow   │ ← Owned by root      │
    │                             │ (password     │   Normally no        │
    │                             │  hashes)      │   access for alice   │
    │                             └───────────────┘                      │
    │                                                                     │
    └─────────────────────────────────────────────────────────────────────┘


Security Note:
─────────────────────────────────────────────────────────────────────────────
- SUID programs run with elevated privileges
- Must be carefully written to avoid security vulnerabilities
- Buffer overflows in SUID programs can give attacker root access
- Modern systems minimize SUID programs and use capabilities instead
`}
      </pre>
    </div>

    {/* System Call Domain Switching */}
    <h2 className="text-3xl font-bold mt-8">System Call Domain Switching</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
User Mode to Kernel Mode Domain Switch:
===============================================================================

    ┌─────────────────────────────────────────────────────────────────────┐
    │                        USER SPACE (Ring 3)                          │
    │                                                                     │
    │    ┌─────────────────┐                                             │
    │    │  Application    │                                             │
    │    │                 │                                             │
    │    │  int fd = open( │                                             │
    │    │   "/etc/passwd",│                                             │
    │    │   O_RDONLY);    │                                             │
    │    └────────┬────────┘                                             │
    │             │                                                       │
    │             │ System Call (interrupt/syscall instruction)          │
    └─────────────┼───────────────────────────────────────────────────────┘
                  │
    ══════════════╪════════════════════════════════════════════════════════
                  │    DOMAIN SWITCH (Trap to kernel)
    ══════════════╪════════════════════════════════════════════════════════
                  │
    ┌─────────────┼───────────────────────────────────────────────────────┐
    │             ▼                                                       │
    │    ┌─────────────────┐           KERNEL SPACE (Ring 0)             │
    │    │  System Call    │                                             │
    │    │  Handler        │                                             │
    │    │                 │                                             │
    │    │  - Verify args  │                                             │
    │    │  - Check perms  │                                             │
    │    │  - Do operation │                                             │
    │    │  - Return result│                                             │
    │    └────────┬────────┘                                             │
    │             │                                                       │
    └─────────────┼───────────────────────────────────────────────────────┘
                  │
    ══════════════╪════════════════════════════════════════════════════════
                  │    RETURN TO USER MODE
    ══════════════╪════════════════════════════════════════════════════════
                  │
    ┌─────────────▼───────────────────────────────────────────────────────┐
    │    ┌─────────────────┐                                             │
    │    │  Application    │                                             │
    │    │  continues...   │                                             │
    │    │                 │                                             │
    │    │  fd = 3         │ ← File descriptor returned                  │
    │    └─────────────────┘                                             │
    │                        USER SPACE (Ring 3)                          │
    └─────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Protection Rings */}
    <h2 className="text-3xl font-bold mt-8">Intel x86 Protection Rings</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Hardware Protection Rings:
===============================================================================

                    ┌─────────────────────────────────────────┐
                    │              Ring 3 (User)              │
                    │         Applications, user code         │
                    │                                         │
                    │    ┌─────────────────────────────────┐  │
                    │    │         Ring 2 (Device)        │  │
                    │    │       Device drivers (rare)     │  │
                    │    │                                 │  │
                    │    │    ┌─────────────────────────┐  │  │
                    │    │    │     Ring 1 (Driver)     │  │  │
                    │    │    │   Privileged drivers    │  │  │
                    │    │    │                         │  │  │
                    │    │    │    ┌─────────────────┐  │  │  │
                    │    │    │    │   Ring 0        │  │  │  │
                    │    │    │    │   (Kernel)      │  │  │  │
                    │    │    │    │                 │  │  │  │
                    │    │    │    │  Full hardware  │  │  │  │
                    │    │    │    │  access         │  │  │  │
                    │    │    │    └─────────────────┘  │  │  │
                    │    │    └─────────────────────────┘  │  │
                    │    └─────────────────────────────────┘  │
                    └─────────────────────────────────────────┘

Most OS use only Ring 0 (kernel) and Ring 3 (user)

Privilege Level:    Ring 0 > Ring 1 > Ring 2 > Ring 3
                   (Most)                     (Least)
`}
      </pre>
    </div>

    {/* Domain Switching Security */}
    <h2 className="text-3xl font-bold mt-8">Domain Switching Security Considerations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Concern</th>
            <th className="p-3 border">Risk</th>
            <th className="p-3 border">Mitigation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Unauthorized switching</td>
            <td className="p-3 border">Privilege escalation</td>
            <td className="p-3 border">Only through controlled interfaces</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">State leakage</td>
            <td className="p-3 border">Information disclosure</td>
            <td className="p-3 border">Clear registers on switch</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Return confusion</td>
            <td className="p-3 border">Confused deputy problem</td>
            <td className="p-3 border">Validate caller permissions</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Excessive privileges</td>
            <td className="p-3 border">Overly broad access</td>
            <td className="p-3 border">Use capabilities instead of SUID</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>A protection domain defines what resources a process can access</li>
      <li>Domains can be associated with users, processes, or privilege levels</li>
      <li>Domain switching allows temporary privilege elevation</li>
      <li>SUID/SGID programs enable controlled domain switching in Unix</li>
      <li>System calls switch from user mode to kernel mode</li>
      <li>Protection rings provide hardware support for domain isolation</li>
      <li>Domain switching must be controlled, audited, and reversible</li>
    </ul>
  </div>
);

export default ProtectionDomain;
