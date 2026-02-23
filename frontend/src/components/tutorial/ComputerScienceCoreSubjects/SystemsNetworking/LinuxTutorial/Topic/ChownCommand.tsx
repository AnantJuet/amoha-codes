import React from "react";

const ChownCommand: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      chown Command
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The chown (change owner) command changes the user and/or group ownership of files
      and directories. Only root or the file owner (with some restrictions) can change ownership.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic syntax
$ chown [options] [owner][:group] file(s)

# Change owner only
$ chown newowner file.txt

# Change owner and group
$ chown newowner:newgroup file.txt

# Change group only (note the colon)
$ chown :newgroup file.txt

# Options:
# -R    Recursive (directories and contents)
# -v    Verbose (show files being changed)
# -c    Like verbose but only show changes
# --reference=FILE   Use ownership from another file`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Changing Owner</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Change file owner (requires root/sudo)
$ sudo chown john file.txt

# Check the change
$ ls -l file.txt
-rw-r--r-- 1 john developers 1234 Jan 16 10:00 file.txt

# Change owner of multiple files
$ sudo chown john file1.txt file2.txt file3.txt

# Change owner using user ID
$ sudo chown 1000 file.txt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Changing Owner and Group</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Change both owner and group
$ sudo chown john:developers file.txt

# Alternative syntax (deprecated but works)
$ sudo chown john.developers file.txt

# Check the change
$ ls -l file.txt
-rw-r--r-- 1 john developers 1234 Jan 16 10:00 file.txt

# Change group only (keep current owner)
$ sudo chown :developers file.txt

# Change owner, set group to owner's login group
$ sudo chown john: file.txt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recursive Ownership Change</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Change ownership recursively
$ sudo chown -R john:developers /path/to/directory/

# Verbose recursive change
$ sudo chown -Rv john:developers /path/to/directory/
changed ownership of '/path/to/directory/file1.txt' to john:developers
changed ownership of '/path/to/directory/file2.txt' to john:developers
...

# Show only changes (quiet on unchanged)
$ sudo chown -Rc john:developers /path/to/directory/`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Using --reference</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Copy ownership from another file
$ sudo chown --reference=source.txt target.txt

# This sets target.txt to have the same owner and group as source.txt

# Useful for restoring ownership after modification
$ ls -l source.txt
-rw-r--r-- 1 www-data www-data 1234 Jan 16 10:00 source.txt

$ sudo chown --reference=source.txt newfile.txt
$ ls -l newfile.txt
-rw-r--r-- 1 www-data www-data 5678 Jan 16 11:00 newfile.txt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Web server files (common scenario)
$ sudo chown -R www-data:www-data /var/www/html/

# User home directory
$ sudo chown -R john:john /home/john/

# Shared project directory
$ sudo chown -R :developers /opt/project/
$ sudo chmod -R g+w /opt/project/

# Fix ownership after copying files as root
$ sudo chown -R $(whoami):$(id -gn) ~/downloaded_files/

# Set ownership for application logs
$ sudo chown syslog:adm /var/log/myapp.log`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Checking Current Ownership</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Using ls -l
$ ls -l file.txt
-rw-r--r-- 1 john developers 1234 Jan 16 10:00 file.txt
              │      │
              │      └── Group
              └── Owner

# Using stat
$ stat file.txt
  File: file.txt
  Size: 1234            Blocks: 8          IO Block: 4096   regular file
Access: (0644/-rw-r--r--)  Uid: ( 1000/    john)   Gid: ( 1000/developers)
...

# Show only owner and group
$ stat -c "%U %G" file.txt
john developers`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Use Cases</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Scenario</th>
            <th className="p-3 border">Command</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Web server files</td>
            <td className="p-3 border font-mono text-gray-900">sudo chown -R www-data:www-data /var/www/</td>
          </tr>
          <tr>
            <td className="p-3 border">Home directory</td>
            <td className="p-3 border font-mono text-gray-900">sudo chown -R user:user /home/user/</td>
          </tr>
          <tr>
            <td className="p-3 border">Shared folder</td>
            <td className="p-3 border font-mono text-gray-900">sudo chown -R :team /shared/</td>
          </tr>
          <tr>
            <td className="p-3 border">Database files</td>
            <td className="p-3 border font-mono text-gray-900">sudo chown -R mysql:mysql /var/lib/mysql/</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>chown requires root privileges to change file ownership</li>
        <li>Use owner:group to change both at once</li>
        <li>Use :group to change only the group</li>
        <li>-R flag applies changes recursively to directories</li>
        <li>--reference copies ownership from another file</li>
        <li>Always verify ownership with ls -l after changes</li>
      </ul>
    </div>
  </div>
);

export default ChownCommand;
