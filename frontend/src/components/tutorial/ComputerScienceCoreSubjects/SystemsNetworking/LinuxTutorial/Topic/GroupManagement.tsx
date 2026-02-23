import React from "react";

const GroupManagement: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Group Management in Linux
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Groups in Linux allow multiple users to share access to files and resources.
      Each user has a primary group and can belong to multiple supplementary groups.
      Group management is essential for controlling access to shared resources.
    </p>

    <h2 className="text-3xl font-bold mt-8">Group Configuration Files</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# /etc/group - Group definitions
$ cat /etc/group
root:x:0:
daemon:x:1:
sudo:x:27:john,jane
developers:x:1001:john,jane,bob
docker:x:999:john

# Format: groupname:password:GID:members
# groupname  - Name of the group
# password   - Usually 'x' (password in /etc/gshadow)
# GID        - Group ID number
# members    - Comma-separated list of members`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Creating Groups (groupadd)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Create a new group
$ sudo groupadd developers

# Create group with specific GID
$ sudo groupadd -g 2000 webteam

# Create system group (GID below 1000)
$ sudo groupadd -r systemgroup

# Verify group was created
$ grep developers /etc/group
developers:x:1001:`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Modifying Groups (groupmod)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Rename a group
$ sudo groupmod -n newname oldname
$ sudo groupmod -n devteam developers

# Change group GID
$ sudo groupmod -g 2001 devteam

# Verify changes
$ grep devteam /etc/group
devteam:x:2001:john,jane`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Deleting Groups (groupdel)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Delete a group
$ sudo groupdel developers

# Note: Cannot delete a group that is a user's primary group
$ sudo groupdel john
groupdel: cannot remove the primary group of user 'john'

# First change user's primary group, then delete
$ sudo usermod -g users john
$ sudo groupdel john`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Managing Group Membership</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Add user to group (using usermod)
$ sudo usermod -aG developers john

# Add user to multiple groups
$ sudo usermod -aG sudo,docker,developers john

# Using gpasswd to add user
$ sudo gpasswd -a john developers
Adding user john to group developers

# Remove user from group
$ sudo gpasswd -d john developers
Removing user john from group developers

# Alternative: deluser (Debian/Ubuntu)
$ sudo deluser john developers`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Viewing Group Information</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# List all groups current user belongs to
$ groups
john sudo developers docker

# List groups for specific user
$ groups jane
jane : jane developers www-data

# Detailed group membership
$ id john
uid=1000(john) gid=1000(john) groups=1000(john),27(sudo),1001(developers),999(docker)

# List all members of a group
$ getent group developers
developers:x:1001:john,jane,bob

# List all groups on system
$ cat /etc/group`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">gpasswd Command</h2>
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
            <td className="p-3 border font-mono text-gray-900">-a</td>
            <td className="p-3 border">Add user to group</td>
            <td className="p-3 border font-mono text-gray-900">gpasswd -a john devs</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-d</td>
            <td className="p-3 border">Remove user from group</td>
            <td className="p-3 border font-mono text-gray-900">gpasswd -d john devs</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-A</td>
            <td className="p-3 border">Set group administrators</td>
            <td className="p-3 border font-mono text-gray-900">gpasswd -A john devs</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-M</td>
            <td className="p-3 border">Set member list</td>
            <td className="p-3 border font-mono text-gray-900">gpasswd -M john,jane devs</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Example: Shared Project</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Create a group for the project team
$ sudo groupadd webproject

# Add team members to the group
$ sudo gpasswd -a john webproject
$ sudo gpasswd -a jane webproject
$ sudo gpasswd -a bob webproject

# Create shared directory
$ sudo mkdir /opt/webproject
$ sudo chgrp webproject /opt/webproject
$ sudo chmod 2775 /opt/webproject

# Now all members can collaborate
# SGID ensures new files inherit group ownership

# Members need to log out/in for group changes to take effect
# Or use: newgrp webproject`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Each user has one primary group and can have multiple supplementary groups</li>
        <li>Use groupadd to create, groupmod to modify, groupdel to delete groups</li>
        <li>Use gpasswd or usermod -aG to manage group membership</li>
        <li>Users must log out and back in for group changes to take effect</li>
        <li>Cannot delete a group that is a user's primary group</li>
        <li>Use SGID on directories for shared project folders</li>
      </ul>
    </div>
  </div>
);

export default GroupManagement;
