import React from 'react';

const AccessMatrixImplementation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Access Matrix Implementation: ACLs and Capability Lists
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The access matrix model provides a theoretical framework, but storing a complete
      matrix would be impractical due to its sparsity (most cells are empty). Real
      operating systems implement access control using two main approaches: Access
      Control Lists (ACLs) and Capability Lists, each storing the non-empty entries
      in different ways.
    </p>

    {/* Implementation Approaches */}
    <h2 className="text-3xl font-bold mt-8">Implementation Approaches Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Access Matrix Storage Approaches:
===============================================================================

Original Matrix (mostly empty):
                │  File1  │  File2  │  File3  │ Printer │
         ┌──────┼─────────┼─────────┼─────────┼─────────┤
         │ Alice│   r,w   │    -    │   r     │  print  │
         │──────┼─────────┼─────────┼─────────┼─────────┤
         │  Bob │    r    │   r,w   │    -    │    -    │
         │──────┼─────────┼─────────┼─────────┼─────────┤
         │Carol │    -    │    r    │   r,w   │  print  │
         └──────┴─────────┴─────────┴─────────┴─────────┘


Store by COLUMN (ACL):                Store by ROW (Capability):
─────────────────────────             ─────────────────────────────

File1's ACL:                          Alice's Capability List:
┌────────────────────────┐            ┌─────────────────────────────┐
│ Alice: r,w             │            │ File1: r,w                  │
│ Bob: r                 │            │ File3: r                    │
└────────────────────────┘            │ Printer: print              │
                                      └─────────────────────────────┘
File2's ACL:
┌────────────────────────┐            Bob's Capability List:
│ Bob: r,w               │            ┌─────────────────────────────┐
│ Carol: r               │            │ File1: r                    │
└────────────────────────┘            │ File2: r,w                  │
                                      └─────────────────────────────┘
(Each object stores who
 can access it)                       (Each subject stores what
                                       it can access)
`}
      </pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">ACL vs Capability List Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Access Control List (ACL)</th>
            <th className="p-3 border">Capability List</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Storage</td>
            <td className="p-3 border">With each object</td>
            <td className="p-3 border">With each subject</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">View</td>
            <td className="p-3 border">Column of access matrix</td>
            <td className="p-3 border">Row of access matrix</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Answers</td>
            <td className="p-3 border">"Who can access this object?"</td>
            <td className="p-3 border">"What can this subject access?"</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Revocation</td>
            <td className="p-3 border">Easy (edit object's ACL)</td>
            <td className="p-3 border">Difficult (find all capabilities)</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Review</td>
            <td className="p-3 border">Audit object access easily</td>
            <td className="p-3 border">Audit user rights easily</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Example OS</td>
            <td className="p-3 border">Unix, Windows, NTFS</td>
            <td className="p-3 border">Hydra, CAP system, seL4</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* ACL Section */}
    <h2 className="text-3xl font-bold mt-8">Access Control Lists (ACLs)</h2>
    <p className="leading-relaxed">
      An ACL stores access rights with each object. When a subject tries to access
      an object, the system checks the object's ACL to determine if access is allowed.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
ACL Structure:
===============================================================================

File System with ACLs:

    ┌─────────────────────────────────────────────────────────────────────┐
    │                         FILE SYSTEM                                 │
    │                                                                     │
    │   /home/alice/document.txt                                         │
    │   ┌─────────────────────────────────────────────────────────────┐  │
    │   │  File Metadata:                                              │  │
    │   │    Size: 4096 bytes                                          │  │
    │   │    Created: 2026-01-10                                       │  │
    │   │                                                              │  │
    │   │  ACL:                                                        │  │
    │   │  ┌─────────────────────────────────────────────────────────┐│  │
    │   │  │  Owner (alice):    rwx                                  ││  │
    │   │  │  Group (staff):    r-x                                  ││  │
    │   │  │  User bob:         rw-                                  ││  │
    │   │  │  User carol:       r--                                  ││  │
    │   │  │  Others:           ---                                  ││  │
    │   │  └─────────────────────────────────────────────────────────┘│  │
    │   └─────────────────────────────────────────────────────────────┘  │
    │                                                                     │
    └─────────────────────────────────────────────────────────────────────┘


Access Check Process:
─────────────────────────────────────────────────────────────────────────────

    ┌─────────────┐
    │  Bob wants  │
    │  to write   │
    │  to file    │
    └──────┬──────┘
           │
           ▼
    ┌─────────────────────────────────────┐
    │  1. Identify Bob (authentication)   │
    │  2. Look up file's ACL              │
    │  3. Find entry for Bob              │
    │  4. Check if 'w' is in Bob's rights │
    │  5. Bob has 'rw-' → ALLOW           │
    └─────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Unix Permissions */}
    <h2 className="text-3xl font-bold mt-8">Unix Permission Model (Simplified ACL)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Unix File Permissions:
===============================================================================

$ ls -l /home/alice/document.txt
-rwxr-x--- 1 alice staff 4096 Jan 10 14:30 document.txt
│└┬┘└┬┘└┬┘
│ │  │  │
│ │  │  └── Others: no permissions (---)
│ │  └───── Group (staff): read + execute (r-x)
│ └──────── Owner (alice): read + write + execute (rwx)
└────────── File type (- = regular file)


Permission Bits:
─────────────────────────────────────────────────────────────────────────────

         Owner    Group    Others
         ─────    ─────    ──────
         r w x    r w x    r w x
         4 2 1    4 2 1    4 2 1    (octal values)

Example: chmod 750 file.txt
         7 = 4+2+1 = rwx (owner)
         5 = 4+0+1 = r-x (group)
         0 = 0+0+0 = --- (others)


Extended ACLs (setfacl):
─────────────────────────────────────────────────────────────────────────────

$ getfacl document.txt
# file: document.txt
# owner: alice
# group: staff
user::rwx                    ← Owner permissions
user:bob:rw-                 ← Named user (extended)
user:carol:r--               ← Named user (extended)
group::r-x                   ← Owning group
group:developers:rwx         ← Named group (extended)
mask::rwx                    ← Maximum effective permissions
other::---                   ← Everyone else

$ setfacl -m u:bob:rw document.txt   # Add/modify ACL entry
$ setfacl -x u:carol document.txt    # Remove ACL entry
`}
      </pre>
    </div>

    {/* Windows NTFS ACL */}
    <h2 className="text-3xl font-bold mt-8">Windows NTFS ACL</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Permission</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Applies To</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Full Control</td>
            <td className="p-3 border">All permissions including ownership</td>
            <td className="p-3 border">Files and folders</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Modify</td>
            <td className="p-3 border">Read, write, delete</td>
            <td className="p-3 border">Files and folders</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Read & Execute</td>
            <td className="p-3 border">Read and run programs</td>
            <td className="p-3 border">Files and folders</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">List Folder Contents</td>
            <td className="p-3 border">View folder contents</td>
            <td className="p-3 border">Folders only</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Read</td>
            <td className="p-3 border">View file contents</td>
            <td className="p-3 border">Files and folders</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Write</td>
            <td className="p-3 border">Modify file contents</td>
            <td className="p-3 border">Files and folders</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Capability Lists */}
    <h2 className="text-3xl font-bold mt-8">Capability Lists</h2>
    <p className="leading-relaxed">
      A capability is an unforgeable token that grants the holder specific access
      rights to a specific object. Each subject maintains a list of capabilities
      representing what they can access.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Capability List Structure:
===============================================================================

    ┌─────────────────────────────────────────────────────────────────────┐
    │                       PROCESS "Alice's Shell"                        │
    │                                                                     │
    │   Capability Table (C-List):                                        │
    │   ┌─────────────────────────────────────────────────────────────┐  │
    │   │  Index │  Object Reference  │  Rights        │  Type        │  │
    │   │────────┼────────────────────┼────────────────┼──────────────│  │
    │   │   0    │  0x7F001234        │  r,w           │  File        │  │
    │   │   1    │  0x7F005678        │  r             │  File        │  │
    │   │   2    │  0x7F00ABCD        │  execute       │  Process     │  │
    │   │   3    │  0x7F00FF00        │  send,receive  │  Port        │  │
    │   │   4    │  0x7F002222        │  print         │  Device      │  │
    │   └─────────────────────────────────────────────────────────────┘  │
    │                                                                     │
    └─────────────────────────────────────────────────────────────────────┘


Capability Structure:
─────────────────────────────────────────────────────────────────────────────

    ┌─────────────────────────────────────────────────────────────────┐
    │                      CAPABILITY                                 │
    │                                                                 │
    │   ┌───────────────────────────┬─────────────────────────────┐  │
    │   │   Object Identifier       │   Access Rights             │  │
    │   │   (unforgeable pointer)   │   (r, w, x, etc.)           │  │
    │   │                           │                             │  │
    │   │   Points to the actual    │   What operations are       │  │
    │   │   object in the system    │   permitted                 │  │
    │   └───────────────────────────┴─────────────────────────────┘  │
    │                                                                 │
    └─────────────────────────────────────────────────────────────────┘

Key Property: Capabilities cannot be forged or modified by user processes
`}
      </pre>
    </div>

    {/* Capability Operations */}
    <h2 className="text-3xl font-bold mt-8">Capability Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Capability-Based Access:
===============================================================================

1. Access Object Using Capability:
─────────────────────────────────────────────────────────────────────────────

    Process                                        Object
       │                                              │
       │  ┌────────────────┐                          │
       │  │ Capability #2  │                          │
       │  │ Obj: 0x7F00AB  │                          │
       │  │ Rights: r,w    │                          │
       │  └───────┬────────┘                          │
       │          │                                   │
       │          │  Present capability               │
       │          ▼                                   │
       │    ┌──────────────────────┐                  │
       │    │   Reference Monitor  │                  │
       │    │                      │                  │
       │    │  1. Valid capability?│                  │
       │    │  2. Object matches?  │                  │
       │    │  3. Operation in     │                  │
       │    │     rights set?      │                  │
       │    └──────────┬───────────┘                  │
       │               │                              │
       │               │ If valid                     │
       │               ▼                              │
       │         ┌─────────────┐          ┌──────────▼─────────┐
       │         │   ALLOW     │─────────►│   Access Granted   │
       │         └─────────────┘          └────────────────────┘


2. Passing Capabilities Between Processes:
─────────────────────────────────────────────────────────────────────────────

    Process A                    Process B
    ┌─────────────────┐          ┌─────────────────┐
    │ C-List:         │          │ C-List:         │
    │ [0] File1: rw   │          │ [0] File2: r    │
    │ [1] Port: send  │          │                 │
    └────────┬────────┘          └────────▲────────┘
             │                            │
             │  Copy capability           │
             │  (with reduced rights)     │
             └────────────────────────────┘

Process A grants File1:r to Process B:
- A sends capability through trusted channel
- B receives capability in its C-List
- Rights can only be reduced, not amplified
`}
      </pre>
    </div>

    {/* Protecting Capabilities */}
    <h2 className="text-3xl font-bold mt-8">Protecting Capabilities</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example System</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Tagged Architecture</td>
            <td className="p-3 border">Hardware tag bit marks capability memory</td>
            <td className="p-3 border">IBM System/38, AS/400</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Segregated Storage</td>
            <td className="p-3 border">Capabilities in kernel-only memory</td>
            <td className="p-3 border">Hydra, seL4</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Cryptographic</td>
            <td className="p-3 border">Encrypt capabilities with system key</td>
            <td className="p-3 border">Amoeba, Web (JWT tokens)</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Language-Based</td>
            <td className="p-3 border">Type system enforces capability rules</td>
            <td className="p-3 border">E language, Joe-E</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Revocation Problem */}
    <h2 className="text-3xl font-bold mt-8">The Revocation Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Revocation Comparison:
===============================================================================

ACL Revocation (Easy):
─────────────────────────────────────────────────────────────────────────────

    File's ACL:                    After removing Bob:
    ┌────────────────────┐         ┌────────────────────┐
    │ Alice: rw          │         │ Alice: rw          │
    │ Bob: r   ←─────────┼─ REMOVE │ Carol: r           │
    │ Carol: r           │         │                    │
    └────────────────────┘         └────────────────────┘

    Simple: Edit one place (the object's ACL)


Capability Revocation (Difficult):
─────────────────────────────────────────────────────────────────────────────

    Bob's C-List:      Carol's C-List:     David's C-List:
    ┌────────────┐     ┌────────────┐      ┌────────────┐
    │ File: r    │     │ File: r    │      │ File: r    │
    │ (copied    │     │ (copied    │      │ (copied    │
    │  from Bob) │     │  from Bob) │      │  from Bob) │
    └────────────┘     └────────────┘      └────────────┘

    Problem: Must find ALL copies of the capability!


Solutions to Capability Revocation:
═══════════════════════════════════════════════════════════════════════════

1. Indirect Capabilities:
   Capability → Indirection Table → Object
   Revoke by removing table entry

2. Time-Limited Capabilities:
   Capabilities expire after set time
   Must be renewed

3. Capability Tracking:
   System tracks all capability copies
   Can revoke by invalidating all copies
`}
      </pre>
    </div>

    {/* Modern Usage */}
    <h2 className="text-3xl font-bold mt-8">Modern Usage</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">System</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Notes</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Unix/Linux</td>
            <td className="p-3 border">ACL (simplified + extended)</td>
            <td className="p-3 border">File descriptors are capabilities</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Windows NTFS</td>
            <td className="p-3 border">ACL</td>
            <td className="p-3 border">Rich ACL with inheritance</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">seL4</td>
            <td className="p-3 border">Capability</td>
            <td className="p-3 border">Formally verified microkernel</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Web (OAuth)</td>
            <td className="p-3 border">Capability (tokens)</td>
            <td className="p-3 border">Access tokens are capabilities</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Android</td>
            <td className="p-3 border">Hybrid</td>
            <td className="p-3 border">ACLs + Intents (capabilities)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>ACLs store access rights with objects (column view of access matrix)</li>
      <li>Capability lists store access rights with subjects (row view)</li>
      <li>ACLs make revocation easy but auditing user rights hard</li>
      <li>Capabilities make delegation easy but revocation hard</li>
      <li>Unix file permissions are a simplified form of ACL</li>
      <li>Modern systems often use hybrid approaches</li>
      <li>File descriptors in Unix are essentially capabilities</li>
    </ul>
  </div>
);

export default AccessMatrixImplementation;
