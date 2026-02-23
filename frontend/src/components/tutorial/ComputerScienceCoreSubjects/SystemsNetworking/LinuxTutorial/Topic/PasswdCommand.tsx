import React from "react";

const PasswdCommand: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      passwd Command
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The passwd command changes user passwords in Linux. Regular users can change
      their own password, while root can change any user's password and manage
      password policies.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Usage</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Change your own password
$ passwd
Changing password for john.
Current password:
New password:
Retype new password:
passwd: password updated successfully

# Change another user's password (root only)
$ sudo passwd john
New password:
Retype new password:
passwd: password updated successfully`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Command Options</h2>
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
            <td className="p-3 border">Lock password (disable account)</td>
            <td className="p-3 border font-mono text-gray-900">passwd -l john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-u</td>
            <td className="p-3 border">Unlock password</td>
            <td className="p-3 border font-mono text-gray-900">passwd -u john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-d</td>
            <td className="p-3 border">Delete password (no password needed)</td>
            <td className="p-3 border font-mono text-gray-900">passwd -d john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-e</td>
            <td className="p-3 border">Expire password (force change)</td>
            <td className="p-3 border font-mono text-gray-900">passwd -e john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-S</td>
            <td className="p-3 border">Show password status</td>
            <td className="p-3 border font-mono text-gray-900">passwd -S john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-n</td>
            <td className="p-3 border">Minimum days between changes</td>
            <td className="p-3 border font-mono text-gray-900">passwd -n 7 john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-x</td>
            <td className="p-3 border">Maximum days password is valid</td>
            <td className="p-3 border font-mono text-gray-900">passwd -x 90 john</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-w</td>
            <td className="p-3 border">Warning days before expiry</td>
            <td className="p-3 border font-mono text-gray-900">passwd -w 14 john</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Checking Password Status</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Check password status
$ sudo passwd -S john
john P 01/16/2026 0 99999 7 -1

# Output explanation:
# john     - Username
# P        - Status (P=usable password, L=locked, NP=no password)
# 01/16/2026 - Date of last password change
# 0        - Minimum days between changes
# 99999    - Maximum days password valid
# 7        - Warning days before expiry
# -1       - Inactive days (account disabled after)

# Status codes:
# P  - Password is set and usable
# L  - Account is locked
# NP - No password (password-less login)
# LK - Account is locked (alternate)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Locking and Unlocking Accounts</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Lock a user account
$ sudo passwd -l john
passwd: password expiry information changed.

# Verify it's locked
$ sudo passwd -S john
john L 01/16/2026 0 99999 7 -1

# User sees this when trying to login:
# Authentication failure

# Unlock the account
$ sudo passwd -u john
passwd: password expiry information changed.

# Alternative: use usermod
$ sudo usermod -L john    # Lock
$ sudo usermod -U john    # Unlock`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Password Aging with chage</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# View password aging info
$ sudo chage -l john
Last password change                    : Jan 16, 2026
Password expires                        : Apr 16, 2026
Password inactive                       : never
Account expires                         : never
Minimum number of days between password change  : 0
Maximum number of days between password change  : 90
Number of days of warning before password expires : 7

# Set password to expire in 90 days
$ sudo chage -M 90 john

# Force password change on next login
$ sudo chage -d 0 john

# Set account expiration date
$ sudo chage -E 2026-12-31 john

# Interactive mode
$ sudo chage john`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Password Policy Configuration</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Default password aging in /etc/login.defs
$ grep PASS /etc/login.defs
PASS_MAX_DAYS   99999    # Max days password valid
PASS_MIN_DAYS   0        # Min days between changes
PASS_WARN_AGE   7        # Warning days before expiry
PASS_MIN_LEN    5        # Minimum password length

# Password quality in /etc/pam.d/common-password
# Controls complexity requirements

# Example strict password policy
$ sudo passwd -n 1 -x 90 -w 14 john
# Min 1 day between changes
# Max 90 days valid
# Warn 14 days before expiry`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Regular users can only change their own password</li>
        <li>Root can change any password and manage policies</li>
        <li>Use -l to lock and -u to unlock accounts</li>
        <li>Use -e to force password change on next login</li>
        <li>Use -S to check password status</li>
        <li>Use chage for detailed password aging management</li>
      </ul>
    </div>
  </div>
);

export default PasswdCommand;
