import React from "react";

const UsermodCommand: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      usermod Command
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The usermod command modifies existing user accounts. It can change
      username, home directory, shell, group membership, and many other
      user attributes. Requires root privileges.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic syntax
$ sudo usermod [options] username`}
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
            <td className="p-3 border font-mono text-gray-900">-l</td>
            <td className="p-3 border">Change login name</td>
            <td className="p-3 border font-mono text-gray-900">usermod -l newname oldname</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-d</td>
            <td className="p-3 border">Change home directory</td>
            <td className="p-3 border font-mono text-gray-900">usermod -d /new/home john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-m</td>
            <td className="p-3 border">Move home directory contents</td>
            <td className="p-3 border font-mono text-gray-900">usermod -d /new/home -m john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-s</td>
            <td className="p-3 border">Change login shell</td>
            <td className="p-3 border font-mono text-gray-900">usermod -s /bin/zsh john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-g</td>
            <td className="p-3 border">Change primary group</td>
            <td className="p-3 border font-mono text-gray-900">usermod -g developers john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-G</td>
            <td className="p-3 border">Set supplementary groups</td>
            <td className="p-3 border font-mono text-gray-900">usermod -G sudo,docker john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-aG</td>
            <td className="p-3 border">Append to groups (keep existing)</td>
            <td className="p-3 border font-mono text-gray-900">usermod -aG docker john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-L</td>
            <td className="p-3 border">Lock user account</td>
            <td className="p-3 border font-mono text-gray-900">usermod -L john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-U</td>
            <td className="p-3 border">Unlock user account</td>
            <td className="p-3 border font-mono text-gray-900">usermod -U john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-e</td>
            <td className="p-3 border">Set expiration date</td>
            <td className="p-3 border font-mono text-gray-900">usermod -e 2026-12-31 john</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Managing Group Membership</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Add user to additional group (IMPORTANT: use -a with -G)
$ sudo usermod -aG sudo john          # Add to sudo group
$ sudo usermod -aG docker john        # Add to docker group

# WARNING: -G without -a REPLACES all groups!
$ sudo usermod -G developers john     # REMOVES from all other groups!

# Add to multiple groups at once
$ sudo usermod -aG sudo,docker,developers john

# Check current groups
$ groups john
john : john sudo docker developers

# Change primary group
$ sudo usermod -g developers john`}
      </pre>
    </div>

    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-4 border-l-4 border-red-500">
      <p className="font-bold text-red-700 dark:text-red-300">Important Warning:</p>
      <p className="mt-2">
        Always use <code className="font-mono text-gray-900">-aG</code> (append) when adding groups.
        Using <code className="font-mono text-gray-900">-G</code> alone will remove the user from all
        groups not listed, potentially locking them out of sudo access!
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Changing Username and Home Directory</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Change username (user must be logged out)
$ sudo usermod -l johndoe john

# Change home directory (does NOT move files)
$ sudo usermod -d /home/johndoe johndoe

# Change home directory AND move contents
$ sudo usermod -d /home/johndoe -m johndoe

# Complete rename process:
$ sudo usermod -l johndoe john
$ sudo usermod -d /home/johndoe -m johndoe
$ sudo groupmod -n johndoe john    # Rename group too`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Locking and Unlocking Accounts</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Lock a user account (prevents login)
$ sudo usermod -L john

# Check if locked (! prefix in shadow file)
$ sudo grep john /etc/shadow
john:!$6$encrypted...:...

# Unlock account
$ sudo usermod -U john

# Alternative: Set shell to nologin
$ sudo usermod -s /usr/sbin/nologin john

# Expire account immediately
$ sudo usermod -e 1 john    # Expired since epoch

# Remove expiration
$ sudo usermod -e "" john`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Give user sudo access
$ sudo usermod -aG sudo john

# Allow user to use Docker
$ sudo usermod -aG docker john
# User must log out and back in for changes to take effect

# Change user's shell to zsh
$ sudo usermod -s /bin/zsh john

# Update user's full name
$ sudo usermod -c "John Michael Doe" john

# Set temporary account expiration
$ sudo usermod -e 2026-03-31 contractor

# Verify changes
$ id john
$ grep john /etc/passwd`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Always use -aG (not just -G) to add groups without removing existing ones</li>
        <li>User must log out and back in for group changes to take effect</li>
        <li>Use -m with -d to move home directory contents</li>
        <li>Lock accounts with -L, unlock with -U</li>
        <li>User must be logged out to change username</li>
        <li>Verify changes with id, groups, and grep commands</li>
      </ul>
    </div>
  </div>
);

export default UsermodCommand;
