import React from "react";

const SuSudoCommands: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      su and sudo Commands
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The su (substitute user) and sudo (superuser do) commands allow users to
      execute commands with different privileges. Understanding when and how to
      use these commands is essential for Linux system administration and security.
    </p>

    <h2 className="text-3xl font-bold mt-8">su vs sudo Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">su</th>
            <th className="p-3 border">sudo</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Purpose</td>
            <td className="p-3 border">Switch to another user</td>
            <td className="p-3 border">Execute single command as another user</td>
          </tr>
          <tr>
            <td className="p-3 border">Password</td>
            <td className="p-3 border">Target user's password</td>
            <td className="p-3 border">Your own password</td>
          </tr>
          <tr>
            <td className="p-3 border">Logging</td>
            <td className="p-3 border">Basic</td>
            <td className="p-3 border">Detailed audit log</td>
          </tr>
          <tr>
            <td className="p-3 border">Granularity</td>
            <td className="p-3 border">All or nothing</td>
            <td className="p-3 border">Fine-grained control</td>
          </tr>
          <tr>
            <td className="p-3 border">Configuration</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">/etc/sudoers</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">su Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Switch to root (requires root password)
$ su
Password:
#

# Switch to root with login shell (loads root's environment)
$ su -
Password:
# pwd
/root

# Switch to another user
$ su john
Password:    # john's password
$ whoami
john

# Switch to user with login shell
$ su - john

# Run single command as root
$ su -c "apt update"
Password:

# Exit back to original user
$ exit`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">sudo Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Run command as root
$ sudo apt update
[sudo] password for john:    # Your password

# Run command as specific user
$ sudo -u postgres psql

# Run interactive shell as root
$ sudo -i
# whoami
root
# exit

# Run shell preserving environment
$ sudo -s

# Run command without password (if allowed)
$ sudo -n ls /root

# Edit file with root privileges
$ sudo nano /etc/hosts

# List sudo privileges
$ sudo -l
User john may run the following commands:
    (ALL : ALL) ALL`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">sudo Configuration (/etc/sudoers)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Always edit with visudo (validates syntax)
$ sudo visudo

# sudoers file format:
# user/group  host=(runas)  commands

# Example entries:
root    ALL=(ALL:ALL) ALL           # Root can do everything
%sudo   ALL=(ALL:ALL) ALL           # sudo group members can do everything
%admin  ALL=(ALL) ALL               # admin group

# Allow john to run apt without password
john    ALL=(ALL) NOPASSWD: /usr/bin/apt

# Allow jane to restart nginx
jane    ALL=(ALL) NOPASSWD: /bin/systemctl restart nginx

# Allow developers to run docker
%developers ALL=(ALL) NOPASSWD: /usr/bin/docker

# Command aliases
Cmnd_Alias NETWORKING = /sbin/route, /sbin/ifconfig
john ALL = NETWORKING`}
      </pre>
    </div>

    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-4 border-l-4 border-red-500">
      <p className="font-bold text-red-700 dark:text-red-300">Important:</p>
      <p className="mt-2">
        Always use <code className="font-mono text-gray-900">visudo</code> to edit /etc/sudoers.
        It validates syntax and prevents you from locking yourself out with
        a broken configuration.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Adding Users to sudo Group</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Add user to sudo group (Debian/Ubuntu)
$ sudo usermod -aG sudo john

# Add user to wheel group (RHEL/CentOS/Fedora)
$ sudo usermod -aG wheel john

# User must log out and back in for changes to take effect

# Verify sudo access
$ sudo -l
Matching Defaults entries for john on localhost:
    env_reset, mail_badpass, secure_path=...

User john may run the following commands on localhost:
    (ALL : ALL) ALL`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">sudo Session and Caching</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Password is cached for 15 minutes by default
$ sudo apt update     # Asks for password
$ sudo apt upgrade    # No password needed (within timeout)

# Force password prompt
$ sudo -k
$ sudo apt update     # Asks for password again

# Validate and extend timeout without running command
$ sudo -v

# Run multiple commands with single password entry
$ sudo sh -c 'apt update && apt upgrade'

# Configure timeout in sudoers
Defaults    timestamp_timeout=30    # 30 minutes
Defaults    timestamp_timeout=0     # Always ask`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Options</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">sudo Option</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">-i</td>
            <td className="p-3 border">Login shell as root</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-s</td>
            <td className="p-3 border">Shell as root (keeps environment)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-u user</td>
            <td className="p-3 border">Run as specified user</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-l</td>
            <td className="p-3 border">List allowed commands</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-k</td>
            <td className="p-3 border">Invalidate cached password</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-v</td>
            <td className="p-3 border">Extend timeout without command</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-e</td>
            <td className="p-3 border">Edit file (sudoedit)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>su requires the target user's password; sudo uses your own password</li>
        <li>sudo provides better logging and fine-grained access control</li>
        <li>Use su - to get a proper login shell with the target user's environment</li>
        <li>Always use visudo to edit /etc/sudoers</li>
        <li>Add users to sudo (Debian) or wheel (RHEL) group for sudo access</li>
        <li>sudo caches passwords for 15 minutes by default</li>
      </ul>
    </div>
  </div>
);

export default SuSudoCommands;
