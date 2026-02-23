import React from "react";

const UserdelCommand: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      userdel Command
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The userdel command deletes user accounts from the system. It can optionally
      remove the user's home directory and mail spool. This is an irreversible
      operation, so use with caution.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic syntax
$ sudo userdel [options] username

# Delete user (keeps home directory)
$ sudo userdel john

# Delete user and home directory
$ sudo userdel -r john`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Command Options</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Option</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">-r, --remove</td>
            <td className="p-3 border">Remove home directory and mail spool</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-f, --force</td>
            <td className="p-3 border">Force removal even if user is logged in</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-Z, --selinux-user</td>
            <td className="p-3 border">Remove SELinux user mapping</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Deletion Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Check user exists before deletion
$ id john
uid=1001(john) gid=1001(john) groups=1001(john),27(sudo)

# Delete user account only (keeps files)
$ sudo userdel john
# Home directory /home/john still exists
# Files owned by UID 1001 remain

# Delete user and home directory
$ sudo userdel -r john
# Removes /home/john
# Removes mail spool /var/mail/john

# Force delete even if logged in (use carefully!)
$ sudo userdel -rf john`}
      </pre>
    </div>

    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-4 border-l-4 border-red-500">
      <p className="font-bold text-red-700 dark:text-red-300">Warning:</p>
      <p className="mt-2">
        Deleting a user with <code className="font-mono text-gray-900">-r</code> permanently removes
        their home directory and all contents. This cannot be undone!
        Always backup important data first.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pre-Deletion Checklist</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# 1. Check if user is logged in
$ who | grep john
$ w | grep john

# 2. Kill user's processes if needed
$ sudo pkill -u john
# or
$ sudo killall -u john

# 3. Backup important data
$ sudo tar -czvf /backup/john-home.tar.gz /home/john

# 4. Find files owned by user (outside home)
$ sudo find / -user john 2>/dev/null

# 5. Check crontabs
$ sudo crontab -u john -l

# 6. Now delete the user
$ sudo userdel -r john`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Handling Orphaned Files</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# After deleting user without -r, home directory remains
# Files are owned by numeric UID (no username)
$ ls -l /home/
drwxr-xr-x 2 1001 1001 4096 Jan 16 10:00 john

# Find all files owned by old UID
$ sudo find / -uid 1001 2>/dev/null

# Reassign files to another user
$ sudo chown -R newuser:newgroup /home/john
$ sudo find / -uid 1001 -exec chown newuser {} \;

# Or delete orphaned files
$ sudo find / -uid 1001 -delete

# Clean up group if it still exists
$ sudo groupdel john`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">userdel vs deluser</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold">On Debian/Ubuntu systems:</p>
      <pre className="font-mono mt-2 bg-gray-100 text-gray-900 p-3 rounded text-gray-900">
{`# deluser is the friendlier Debian alternative
$ sudo deluser john

# Remove user and home directory
$ sudo deluser --remove-home john

# Remove user from a group (without deleting user)
$ sudo deluser john developers

# Remove all files owned by user
$ sudo deluser --remove-all-files john`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete User Removal Process</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`#!/bin/bash
# Complete user removal script

USER="john"

# Check if user exists
if ! id "$USER" &>/dev/null; then
    echo "User $USER does not exist"
    exit 1
fi

# Kill user processes
echo "Killing processes..."
sudo pkill -u $USER

# Backup home directory
echo "Backing up home directory..."
sudo tar -czvf /backup/${'${USER}'}-$(date +%Y%m%d).tar.gz /home/$USER

# Delete crontab
echo "Removing crontab..."
sudo crontab -r -u $USER 2>/dev/null

# Delete user and home
echo "Deleting user..."
sudo userdel -r $USER

# Delete group if exists
sudo groupdel $USER 2>/dev/null

echo "User $USER has been removed"`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>userdel without -r keeps the home directory intact</li>
        <li>userdel -r removes home directory and mail spool</li>
        <li>Always backup important data before deleting users</li>
        <li>Kill user processes before deletion to avoid issues</li>
        <li>Find and handle orphaned files after deletion</li>
        <li>deluser is friendlier alternative on Debian/Ubuntu</li>
      </ul>
    </div>
  </div>
);

export default UserdelCommand;
