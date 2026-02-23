import React from "react";

const UserAccounts: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Understanding User Accounts
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Linux is a multi-user operating system where each user has a unique account
      with their own files, settings, and permissions. Understanding user accounts
      is fundamental to Linux system administration and security.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Users</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">User Type</th>
            <th className="p-3 border">UID Range</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Root (Superuser)</td>
            <td className="p-3 border font-mono text-gray-900">0</td>
            <td className="p-3 border">Full system access, administrative tasks</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">System Users</td>
            <td className="p-3 border font-mono text-gray-900">1-999</td>
            <td className="p-3 border">Services and daemons (www-data, mysql)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Regular Users</td>
            <td className="p-3 border font-mono text-gray-900">1000+</td>
            <td className="p-3 border">Normal user accounts</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">User Information Files</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Main user configuration files
/etc/passwd    - User account information
/etc/shadow    - Encrypted passwords
/etc/group     - Group definitions
/etc/gshadow   - Group passwords`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">/etc/passwd Structure</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`$ cat /etc/passwd
john:x:1000:1000:John Doe,,,:/home/john:/bin/bash

# Field breakdown:
# john       - Username
# x          - Password placeholder (actual in /etc/shadow)
# 1000       - User ID (UID)
# 1000       - Primary Group ID (GID)
# John Doe   - GECOS field (full name, room, phone, etc.)
# /home/john - Home directory
# /bin/bash  - Login shell

# Example entries:
root:x:0:0:root:/root:/bin/bash
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">/etc/shadow Structure</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`$ sudo cat /etc/shadow
john:$6$xyz...encrypted...:19374:0:99999:7:::

# Field breakdown:
# john           - Username
# $6$xyz...      - Encrypted password ($6$ = SHA-512)
# 19374          - Last password change (days since Jan 1, 1970)
# 0              - Minimum days between password changes
# 99999          - Maximum days password is valid
# 7              - Days before expiry to warn user
# (empty)        - Days after expiry account is disabled
# (empty)        - Account expiration date
# (empty)        - Reserved field

# Password field meanings:
# *   - Account is locked
# !   - Password not set
# !!  - Account disabled`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Viewing User Information</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Current user
$ whoami
john

# Detailed user info
$ id
uid=1000(john) gid=1000(john) groups=1000(john),27(sudo),1001(developers)

# Info for specific user
$ id jane
uid=1001(jane) gid=1001(jane) groups=1001(jane),1001(developers)

# Currently logged in users
$ who
john     pts/0        2026-01-16 10:00 (192.168.1.100)

# More detailed: w command
$ w
 10:30:00 up 5 days,  2:30,  1 user,  load average: 0.00, 0.01, 0.05
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
john     pts/0    192.168.1.100    10:00    0.00s  0.03s  0.00s w

# User's login history
$ last john
john     pts/0        192.168.1.100    Thu Jan 16 10:00   still logged in`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">User Account Commands</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Command</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">useradd</td>
            <td className="p-3 border">Create new user account</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">usermod</td>
            <td className="p-3 border">Modify existing user account</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">userdel</td>
            <td className="p-3 border">Delete user account</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">passwd</td>
            <td className="p-3 border">Change user password</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">chage</td>
            <td className="p-3 border">Manage password aging</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Root (UID 0) has unrestricted system access</li>
        <li>System users (UID 1-999) run services, not for human login</li>
        <li>Regular users start from UID 1000</li>
        <li>/etc/passwd contains user info, /etc/shadow contains passwords</li>
        <li>Use id command to see user and group membership</li>
        <li>Never edit /etc/passwd or /etc/shadow directly - use proper commands</li>
      </ul>
    </div>
  </div>
);

export default UserAccounts;
