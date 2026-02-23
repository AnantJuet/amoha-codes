import React from "react";

const UnderstandingPermissions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Understanding File Permissions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Linux file permissions control who can read, write, and execute files.
      This security model is fundamental to Linux and essential for system
      administration and security.
    </p>

    <h2 className="text-3xl font-bold mt-8">Permission Basics</h2>
    <p className="leading-relaxed">
      Each file and directory has three types of permissions for three categories of users:
    </p>

    <h3 className="text-2xl font-semibold mt-6">Permission Types</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Permission</th>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Value</th>
            <th className="p-3 border">For Files</th>
            <th className="p-3 border">For Directories</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Read</td>
            <td className="p-3 border font-mono text-gray-900">r</td>
            <td className="p-3 border font-mono text-gray-900">4</td>
            <td className="p-3 border">View file contents</td>
            <td className="p-3 border">List directory contents</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Write</td>
            <td className="p-3 border font-mono text-gray-900">w</td>
            <td className="p-3 border font-mono text-gray-900">2</td>
            <td className="p-3 border">Modify file contents</td>
            <td className="p-3 border">Create/delete files in directory</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Execute</td>
            <td className="p-3 border font-mono text-gray-900">x</td>
            <td className="p-3 border font-mono text-gray-900">1</td>
            <td className="p-3 border">Run as program</td>
            <td className="p-3 border">Enter (cd into) directory</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">User Categories</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Owner (User)</td>
            <td className="p-3 border font-mono text-gray-900">u</td>
            <td className="p-3 border">The user who owns the file</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Group</td>
            <td className="p-3 border font-mono text-gray-900">g</td>
            <td className="p-3 border">Users in the file's group</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Others</td>
            <td className="p-3 border font-mono text-gray-900">o</td>
            <td className="p-3 border">All other users</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">All</td>
            <td className="p-3 border font-mono text-gray-900">a</td>
            <td className="p-3 border">Everyone (u+g+o)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Reading Permissions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`$ ls -l file.txt
-rw-r--r-- 1 john developers 1234 Jan 16 10:00 file.txt

Permission breakdown:
- rw- r-- r--
│ │   │   │
│ │   │   └── Others: read only (r--)
│ │   └── Group: read only (r--)
│ └── Owner: read and write (rw-)
└── File type: - (regular file)

Numeric equivalent: 644
Owner: 4+2+0 = 6 (rw-)
Group: 4+0+0 = 4 (r--)
Other: 4+0+0 = 4 (r--)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Numeric (Octal) Permissions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Permission values:
r = 4
w = 2
x = 1

Common permission combinations:
7 = rwx (4+2+1) - Full access
6 = rw- (4+2+0) - Read and write
5 = r-x (4+0+1) - Read and execute
4 = r-- (4+0+0) - Read only
3 = -wx (0+2+1) - Write and execute
2 = -w- (0+2+0) - Write only
1 = --x (0+0+1) - Execute only
0 = --- (0+0+0) - No access

Common permission sets:
777 = rwxrwxrwx - Everyone can do everything
755 = rwxr-xr-x - Owner full, others read/execute
644 = rw-r--r-- - Owner read/write, others read
700 = rwx------ - Owner only
600 = rw------- - Owner read/write only`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Viewing Permissions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# List with permissions
$ ls -l
-rw-r--r-- 1 john developers  1234 Jan 16 10:00 file.txt
drwxr-xr-x 2 john developers  4096 Jan 16 10:00 directory

# Show numeric permissions with stat
$ stat file.txt
  File: file.txt
  Size: 1234            Blocks: 8          IO Block: 4096   regular file
Access: (0644/-rw-r--r--)  Uid: ( 1000/   john)   Gid: ( 1000/developers)
...

# Show just permissions
$ stat -c "%a %n" *
644 file.txt
755 directory`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Default Permissions (umask)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# View current umask
$ umask
0022

# umask subtracts from default permissions:
# Files:   666 - 022 = 644 (rw-r--r--)
# Dirs:    777 - 022 = 755 (rwxr-xr-x)

# Set umask for current session
$ umask 027
# New files: 640, New directories: 750

# Common umask values:
# 022 - Default (files 644, dirs 755)
# 027 - More restrictive (files 640, dirs 750)
# 077 - Private (files 600, dirs 700)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Three permission types: read (r/4), write (w/2), execute (x/1)</li>
        <li>Three user categories: owner (u), group (g), others (o)</li>
        <li>Numeric permissions combine r+w+x values (e.g., 7=rwx, 6=rw-)</li>
        <li>Directories need execute permission to be accessible (cd)</li>
        <li>umask determines default permissions for new files</li>
        <li>Use ls -l to view permissions, stat for detailed info</li>
      </ul>
    </div>
  </div>
);

export default UnderstandingPermissions;
