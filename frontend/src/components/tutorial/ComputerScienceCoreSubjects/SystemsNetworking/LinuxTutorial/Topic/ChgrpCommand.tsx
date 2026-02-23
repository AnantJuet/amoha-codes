import React from "react";

const ChgrpCommand: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      chgrp Command
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The chgrp (change group) command changes the group ownership of files and directories.
      Unlike chown, regular users can use chgrp to change files to groups they belong to.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic syntax
$ chgrp [options] group file(s)

# Options:
# -R           Recursive (directories and contents)
# -v           Verbose (show files being changed)
# -c           Like verbose but only show changes
# -h           Change symbolic links (not their targets)
# --reference  Use group from another file`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Basic Usage</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Change group of a file
$ chgrp developers file.txt

# Verify the change
$ ls -l file.txt
-rw-r--r-- 1 john developers 1234 Jan 16 10:00 file.txt

# Change group of multiple files
$ chgrp developers file1.txt file2.txt file3.txt

# Change group using group ID (GID)
$ chgrp 1001 file.txt

# Change group with verbose output
$ chgrp -v developers file.txt
changed group of 'file.txt' from users to developers`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recursive Changes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Change group recursively for directory and contents
$ chgrp -R developers /path/to/project/

# Recursive with verbose output
$ chgrp -Rv developers /path/to/project/
changed group of '/path/to/project/' from users to developers
changed group of '/path/to/project/src' from users to developers
changed group of '/path/to/project/src/main.py' from users to developers
...

# Show only actual changes
$ chgrp -Rc developers /path/to/project/`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Using --reference</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Copy group from another file
$ chgrp --reference=source.txt target.txt

# Example usage
$ ls -l source.txt
-rw-r--r-- 1 john developers 1234 Jan 16 10:00 source.txt

$ ls -l target.txt
-rw-r--r-- 1 jane users 5678 Jan 16 11:00 target.txt

$ chgrp --reference=source.txt target.txt
$ ls -l target.txt
-rw-r--r-- 1 jane developers 5678 Jan 16 11:00 target.txt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">chgrp vs chown :group</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold">These commands are equivalent:</p>
      <pre className="font-mono mt-2 bg-gray-100 text-gray-900 p-3 rounded text-gray-900">
{`# Using chgrp
$ chgrp developers file.txt

# Using chown with :group
$ chown :developers file.txt`}
      </pre>
      <p className="mt-3">
        <strong>Difference:</strong> chgrp is a dedicated command for changing groups,
        while chown can change both owner and group. Regular users can use chgrp
        to change to any group they belong to.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Finding Your Groups</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# List groups you belong to
$ groups
john sudo developers docker

# List groups for another user
$ groups jane
jane : jane developers www-data

# Detailed group information
$ id
uid=1000(john) gid=1000(john) groups=1000(john),27(sudo),1001(developers),999(docker)

# List all groups on the system
$ cat /etc/group
root:x:0:
daemon:x:1:
...
developers:x:1001:john,jane,bob
...`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Set up shared project directory
$ mkdir /opt/project
$ chgrp -R developers /opt/project
$ chmod -R g+w /opt/project

# Web content group ownership
$ sudo chgrp -R www-data /var/www/html

# Docker socket access
$ sudo chgrp docker /var/run/docker.sock

# Log file group for monitoring
$ sudo chgrp adm /var/log/app.log

# Change group for all files matching pattern
$ chgrp developers *.py`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Handling Symbolic Links</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# By default, chgrp follows symbolic links
$ chgrp developers symlink     # Changes the target file's group

# Use -h to change the symbolic link itself
$ chgrp -h developers symlink  # Changes the symlink's group

# Note: symbolic link groups are often ignored by the filesystem`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>chgrp changes group ownership of files and directories</li>
        <li>Regular users can change files to groups they belong to</li>
        <li>Use -R for recursive changes on directories</li>
        <li>chgrp is equivalent to chown :group</li>
        <li>Use groups command to see which groups you belong to</li>
        <li>Combine with chmod g+w for group write access</li>
      </ul>
    </div>
  </div>
);

export default ChgrpCommand;
