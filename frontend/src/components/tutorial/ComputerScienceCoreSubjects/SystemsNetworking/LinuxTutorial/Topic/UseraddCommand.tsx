import React from "react";

const UseraddCommand: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      useradd Command
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The useradd command creates new user accounts in Linux. It is a low-level
      utility that provides full control over user creation. On Debian-based systems,
      adduser is a friendlier alternative with interactive prompts.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic syntax
$ sudo useradd [options] username

# Create user with defaults
$ sudo useradd john

# After creation, set password
$ sudo passwd john
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Options</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Option</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">-m</td>
            <td className="p-3 border">Create home directory</td>
            <td className="p-3 border font-mono text-gray-900">useradd -m john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-d</td>
            <td className="p-3 border">Specify home directory path</td>
            <td className="p-3 border font-mono text-gray-900">useradd -d /opt/john john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-s</td>
            <td className="p-3 border">Set login shell</td>
            <td className="p-3 border font-mono text-gray-900">useradd -s /bin/bash john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-g</td>
            <td className="p-3 border">Primary group</td>
            <td className="p-3 border font-mono text-gray-900">useradd -g developers john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-G</td>
            <td className="p-3 border">Supplementary groups</td>
            <td className="p-3 border font-mono text-gray-900">useradd -G sudo,docker john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-u</td>
            <td className="p-3 border">Specify UID</td>
            <td className="p-3 border font-mono text-gray-900">useradd -u 1500 john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-c</td>
            <td className="p-3 border">Comment (full name)</td>
            <td className="p-3 border font-mono text-gray-900">{`useradd -c "John Doe" john`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-e</td>
            <td className="p-3 border">Account expiration date</td>
            <td className="p-3 border font-mono text-gray-900">useradd -e 2026-12-31 john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-r</td>
            <td className="p-3 border">Create system user</td>
            <td className="p-3 border font-mono text-gray-900">useradd -r serviceuser</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete User Creation Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Create regular user with all common settings
$ sudo useradd -m -s /bin/bash -c "John Doe" -G sudo,developers john
$ sudo passwd john

# Create system user (for services)
$ sudo useradd -r -s /usr/sbin/nologin -d /var/lib/myapp myapp

# Create user with specific UID and home
$ sudo useradd -m -u 2000 -d /home/custom -s /bin/bash jane

# Create temporary user with expiration
$ sudo useradd -m -e 2026-03-31 -s /bin/bash contractor

# Verify user was created
$ id john
uid=1001(john) gid=1001(john) groups=1001(john),27(sudo),1002(developers)

$ grep john /etc/passwd
john:x:1001:1001:John Doe:/home/john:/bin/bash`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">adduser vs useradd</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold">On Debian/Ubuntu systems:</p>
      <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
        <li><strong>useradd:</strong> Low-level command, requires options for home directory</li>
        <li><strong>adduser:</strong> Interactive frontend, creates home directory by default</li>
      </ul>
      <pre className="font-mono mt-3 bg-gray-100 text-gray-900 p-3 rounded text-gray-900">
{`# adduser is more user-friendly (Debian/Ubuntu)
$ sudo adduser john
Adding user 'john' ...
Adding new group 'john' (1001) ...
Adding new user 'john' (1001) with group 'john' ...
Creating home directory '/home/john' ...
Copying files from '/etc/skel' ...
Enter new UNIX password:
Full Name []: John Doe
Room Number []:
Work Phone []:
Home Phone []:
Other []:
Is the information correct? [Y/n] Y`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Default Settings (/etc/default/useradd)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# View default settings
$ useradd -D
GROUP=100
HOME=/home
INACTIVE=-1
EXPIRE=
SHELL=/bin/sh
SKEL=/etc/skel

# Or check the config file
$ cat /etc/default/useradd

# /etc/skel contains default files copied to new home directories
$ ls -la /etc/skel
.bashrc
.profile
.bash_logout`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>useradd requires root/sudo privileges</li>
        <li>Use -m to create home directory (not default on all systems)</li>
        <li>Always set a password after creating user with passwd command</li>
        <li>Use -G for supplementary groups (sudo, docker, etc.)</li>
        <li>Use -r for system/service accounts (no login shell)</li>
        <li>adduser is friendlier alternative on Debian/Ubuntu</li>
      </ul>
    </div>
  </div>
);

export default UseraddCommand;
