import React from "react";

const SpecialPermissions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Special Permissions (SUID, SGID, Sticky Bit)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Beyond the basic read, write, and execute permissions, Linux has three special
      permission bits: SUID, SGID, and Sticky Bit. These provide additional security
      controls for specific use cases.
    </p>

    <h2 className="text-3xl font-bold mt-8">Overview of Special Permissions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Permission</th>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Numeric</th>
            <th className="p-3 border">On Files</th>
            <th className="p-3 border">On Directories</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">SUID</td>
            <td className="p-3 border font-mono text-gray-900">s (in user execute)</td>
            <td className="p-3 border font-mono text-gray-900">4000</td>
            <td className="p-3 border">Execute as file owner</td>
            <td className="p-3 border">No effect</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SGID</td>
            <td className="p-3 border font-mono text-gray-900">s (in group execute)</td>
            <td className="p-3 border font-mono text-gray-900">2000</td>
            <td className="p-3 border">Execute as file group</td>
            <td className="p-3 border">New files inherit group</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Sticky Bit</td>
            <td className="p-3 border font-mono text-gray-900">t (in other execute)</td>
            <td className="p-3 border font-mono text-gray-900">1000</td>
            <td className="p-3 border">No effect (modern)</td>
            <td className="p-3 border">Only owner can delete files</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">SUID (Set User ID)</h2>
    <p className="leading-relaxed">
      When set on an executable, SUID allows the program to run with the permissions
      of the file owner, regardless of who executes it.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# SUID appears as 's' in owner execute position
$ ls -l /usr/bin/passwd
-rwsr-xr-x 1 root root 68208 Jan 16 10:00 /usr/bin/passwd

# If no execute permission, it shows as 'S' (uppercase)
-rwSr-xr-x indicates SUID but no owner execute

# Set SUID
$ chmod u+s program
$ chmod 4755 program

# Remove SUID
$ chmod u-s program

# Find all SUID files
$ find / -perm -4000 2>/dev/null`}
      </pre>
    </div>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold">Why passwd has SUID:</p>
      <p className="mt-2">
        The passwd command needs to modify /etc/shadow, which is only writable by root.
        SUID allows any user to change their own password while the command runs as root.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">SGID (Set Group ID)</h2>
    <p className="leading-relaxed">
      On executables, SGID runs the program with the file's group permissions.
      On directories, new files inherit the directory's group instead of the creator's primary group.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# SGID appears as 's' in group execute position
$ ls -l /usr/bin/wall
-rwxr-sr-x 1 root tty 35048 Jan 16 10:00 /usr/bin/wall

# SGID on directory (very common for shared folders)
$ ls -ld /shared
drwxrwsr-x 2 root developers 4096 Jan 16 10:00 /shared

# Set SGID
$ chmod g+s directory/
$ chmod 2775 directory/

# Remove SGID
$ chmod g-s directory/

# Set up shared directory with SGID
$ sudo mkdir /shared
$ sudo chgrp developers /shared
$ sudo chmod 2775 /shared

# Now all files created in /shared will belong to 'developers' group`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sticky Bit</h2>
    <p className="leading-relaxed">
      The sticky bit on directories prevents users from deleting or renaming files
      they do not own, even if they have write permission on the directory.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Sticky bit appears as 't' in other execute position
$ ls -ld /tmp
drwxrwxrwt 22 root root 4096 Jan 16 10:00 /tmp

# If no other execute permission, shows as 'T' (uppercase)
drwxrwxrwT indicates sticky bit but no other execute

# Set sticky bit
$ chmod +t directory/
$ chmod 1777 directory/

# Remove sticky bit
$ chmod -t directory/

# Common use: /tmp directory
# Anyone can create files, but only the owner can delete them`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Numeric Notation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Four-digit permission format: SPECIAL + OWNER + GROUP + OTHER
# Special bit values:
# 4 = SUID
# 2 = SGID
# 1 = Sticky bit

# Examples:
$ chmod 4755 file    # SUID + rwxr-xr-x
$ chmod 2755 file    # SGID + rwxr-xr-x
$ chmod 1777 dir     # Sticky + rwxrwxrwx
$ chmod 6755 file    # SUID + SGID + rwxr-xr-x

# Combining with stat
$ stat -c "%a %A %n" /tmp
1777 drwxrwxrwt /tmp`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Create shared project directory (SGID)
$ sudo mkdir /projects/team
$ sudo chgrp developers /projects/team
$ sudo chmod 2775 /projects/team
# All files created here will belong to 'developers' group

# Create temp-like directory (Sticky bit)
$ sudo mkdir /var/shared_uploads
$ sudo chmod 1777 /var/shared_uploads
# Users can upload but can't delete others' files

# Find SUID/SGID files (security audit)
$ find / -type f \( -perm -4000 -o -perm -2000 \) 2>/dev/null`}
      </pre>
    </div>

    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-4 border-l-4 border-red-500">
      <p className="font-bold text-red-700 dark:text-red-300">Security Warning:</p>
      <p className="mt-2">
        SUID programs can be security risks. They run with elevated privileges and
        can be exploited if they have vulnerabilities. Regularly audit SUID files
        on your system and remove SUID from unnecessary programs.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>SUID (4000): Execute file as owner - security sensitive</li>
        <li>SGID (2000): Execute as group, or inherit group on directories</li>
        <li>Sticky Bit (1000): Prevent deletion of others' files in directories</li>
        <li>/tmp uses sticky bit to prevent users from deleting others' files</li>
        <li>SGID on directories is useful for shared project folders</li>
        <li>Regularly audit SUID/SGID files for security</li>
      </ul>
    </div>
  </div>
);

export default SpecialPermissions;
