import React from "react";

const ChmodCommand: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      chmod Command
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The chmod (change mode) command modifies file and directory permissions in Linux.
      It supports both symbolic and numeric (octal) modes for setting permissions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic syntax
$ chmod [options] mode file(s)

# Options:
# -R    Recursive (apply to directories and contents)
# -v    Verbose (show files being changed)
# -c    Like verbose but only show changes
# --reference=FILE   Use permissions from another file`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Numeric (Octal) Mode</h2>
    <p className="leading-relaxed">
      Numeric mode uses three digits representing owner, group, and others permissions.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Set permissions using numbers
$ chmod 755 script.sh      # rwxr-xr-x
$ chmod 644 file.txt       # rw-r--r--
$ chmod 700 private/       # rwx------
$ chmod 600 secret.key     # rw-------

# Common permission values:
# 777 - rwxrwxrwx (full access for all)
# 755 - rwxr-xr-x (executable, common for scripts)
# 644 - rw-r--r-- (readable by all, writable by owner)
# 700 - rwx------ (owner only, full access)
# 600 - rw------- (owner only, no execute)
# 400 - r-------- (read only for owner)

# Example: Making a script executable
$ chmod 755 myscript.sh
$ ./myscript.sh`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Symbolic Mode</h2>
    <p className="leading-relaxed">
      Symbolic mode uses letters and operators to modify specific permissions.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Symbolic Mode Format</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Options</th>
            <th className="p-3 border">Meaning</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Who</td>
            <td className="p-3 border font-mono text-gray-900">u, g, o, a</td>
            <td className="p-3 border">user, group, others, all</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Operator</td>
            <td className="p-3 border font-mono text-gray-900">+, -, =</td>
            <td className="p-3 border">add, remove, set exactly</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Permission</td>
            <td className="p-3 border font-mono text-gray-900">r, w, x</td>
            <td className="p-3 border">read, write, execute</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Add permissions
$ chmod u+x script.sh          # Add execute for owner
$ chmod g+w file.txt           # Add write for group
$ chmod o+r document.txt       # Add read for others
$ chmod a+x program            # Add execute for all

# Remove permissions
$ chmod u-w file.txt           # Remove write from owner
$ chmod g-x script.sh          # Remove execute from group
$ chmod o-rwx secret.txt       # Remove all from others

# Set exact permissions
$ chmod u=rwx,g=rx,o=r file    # Owner:rwx, Group:rx, Others:r
$ chmod a=r file.txt           # Set read-only for all
$ chmod u=rwx,go= private      # Owner full, no access for others

# Combine multiple changes
$ chmod u+x,g-w,o-r file.txt
$ chmod ug+x,o-rwx script.sh`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recursive Permission Changes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Change permissions recursively
$ chmod -R 755 directory/
$ chmod -R u+w,go-w directory/

# Common pattern: Different permissions for files and directories
# Directories need execute to be accessible

# Set directories to 755, files to 644
$ find /path -type d -exec chmod 755 {} \;
$ find /path -type f -exec chmod 644 {} \;

# Or using symbolic mode
$ chmod -R u+rwX,go+rX,go-w directory/
# X = execute only if directory or already executable`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Special Case: Capital X</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold">The X permission (capital X):</p>
      <p className="mt-2">
        Sets execute permission only if the file is a directory OR already has
        execute permission for some user. This is useful when recursively
        setting permissions on mixed content.
      </p>
      <pre className="font-mono mt-2 bg-gray-100 text-gray-900 p-2 rounded text-gray-900">
{`# Add execute to directories, not regular files
$ chmod -R a+X directory/`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Make script executable
$ chmod +x script.sh
$ chmod 755 script.sh

# Secure private key file
$ chmod 600 ~/.ssh/id_rsa

# Set web directory permissions
$ chmod 755 /var/www/html
$ chmod 644 /var/www/html/*.html

# Remove all permissions for others
$ chmod o-rwx sensitive_file

# Copy permissions from another file
$ chmod --reference=source.txt target.txt

# View changes being made
$ chmod -v 644 *.txt
mode of 'file1.txt' changed from 0755 (rwxr-xr-x) to 0644 (rw-r--r--)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>chmod modifies file permissions using numeric or symbolic notation</li>
        <li>Numeric mode: 755 = rwxr-xr-x, 644 = rw-r--r--</li>
        <li>Symbolic mode: u/g/o/a + +/-/= + r/w/x</li>
        <li>Use -R for recursive changes on directories</li>
        <li>Capital X adds execute only if directory or already executable</li>
        <li>Private files should typically be 600 or 700</li>
      </ul>
    </div>
  </div>
);

export default ChmodCommand;
