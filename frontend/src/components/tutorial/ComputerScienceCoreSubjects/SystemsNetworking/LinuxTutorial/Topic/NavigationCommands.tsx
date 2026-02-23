import React from "react";

const NavigationCommands: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Navigation Commands (ls, cd, pwd)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Navigation commands are essential for moving around the Linux file system. The three most
      fundamental commands are ls (list), cd (change directory), and pwd (print working directory).
      Mastering these commands is the first step in becoming proficient with the Linux command line.
    </p>

    <h2 className="text-3xl font-bold mt-8">pwd - Print Working Directory</h2>
    <p className="leading-relaxed">
      The pwd command displays the absolute path of the current directory you are in.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Show current directory
$ pwd
/home/username

# After changing to Documents
$ cd Documents
$ pwd
/home/username/Documents

# pwd options
$ pwd -L    # Print logical path (with symlinks)
$ pwd -P    # Print physical path (resolve symlinks)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ls - List Directory Contents</h2>
    <p className="leading-relaxed">
      The ls command lists files and directories in the current or specified directory.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic listing
$ ls
Desktop  Documents  Downloads  Pictures

# Long format with details
$ ls -l
total 16
drwxr-xr-x 2 user user 4096 Jan 13 10:00 Desktop
drwxr-xr-x 2 user user 4096 Jan 13 10:00 Documents
drwxr-xr-x 2 user user 4096 Jan 13 10:00 Downloads
drwxr-xr-x 2 user user 4096 Jan 13 10:00 Pictures

# Show hidden files (starting with .)
$ ls -a
.  ..  .bashrc  .config  Desktop  Documents

# Combine options: long format + hidden + human readable
$ ls -lah
total 52K
drwxr-xr-x  8 user user 4.0K Jan 13 10:00 .
drwxr-xr-x  3 root root 4.0K Jan 10 09:00 ..
-rw-r--r--  1 user user  220 Jan 10 09:00 .bashrc
drwx------  3 user user 4.0K Jan 13 10:00 .config
drwxr-xr-x  2 user user 4.0K Jan 13 10:00 Desktop`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Common ls Options</h3>
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
            <td className="p-3 border">Long format with details</td>
            <td className="p-3 border font-mono text-gray-900">ls -l</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-a</td>
            <td className="p-3 border">Show all files including hidden</td>
            <td className="p-3 border font-mono text-gray-900">ls -a</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-h</td>
            <td className="p-3 border">Human-readable sizes (KB, MB, GB)</td>
            <td className="p-3 border font-mono text-gray-900">ls -lh</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-R</td>
            <td className="p-3 border">Recursive listing of subdirectories</td>
            <td className="p-3 border font-mono text-gray-900">ls -R</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-t</td>
            <td className="p-3 border">Sort by modification time</td>
            <td className="p-3 border font-mono text-gray-900">ls -lt</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-S</td>
            <td className="p-3 border">Sort by file size</td>
            <td className="p-3 border font-mono text-gray-900">ls -lS</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-r</td>
            <td className="p-3 border">Reverse order</td>
            <td className="p-3 border font-mono text-gray-900">ls -lr</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-d</td>
            <td className="p-3 border">List directories themselves, not contents</td>
            <td className="p-3 border font-mono text-gray-900">ls -d */</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">cd - Change Directory</h2>
    <p className="leading-relaxed">
      The cd command changes the current working directory to the specified path.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Change to Documents directory
$ cd Documents
$ pwd
/home/username/Documents

# Go to home directory (multiple ways)
$ cd              # No argument goes to home
$ cd ~            # ~ represents home directory
$ cd $HOME        # Using HOME environment variable

# Go to root directory
$ cd /

# Go to parent directory
$ cd ..

# Go back to previous directory
$ cd -

# Navigate multiple levels
$ cd ../../       # Go up two directories

# Use absolute path
$ cd /var/log

# Use relative path
$ cd Downloads/Music

# Go to another user's home (if permitted)
$ cd ~otheruser`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Special Directory Symbols</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Meaning</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">~</td>
            <td className="p-3 border">Home directory</td>
            <td className="p-3 border font-mono text-gray-900">cd ~</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">.</td>
            <td className="p-3 border">Current directory</td>
            <td className="p-3 border font-mono text-gray-900">./script.sh</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">..</td>
            <td className="p-3 border">Parent directory</td>
            <td className="p-3 border font-mono text-gray-900">cd ..</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-</td>
            <td className="p-3 border">Previous directory</td>
            <td className="p-3 border font-mono text-gray-900">cd -</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">/</td>
            <td className="p-3 border">Root directory</td>
            <td className="p-3 border font-mono text-gray-900">cd /</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# List only directories
$ ls -d */

# List files by size (largest first)
$ ls -lhS

# List most recently modified files
$ ls -lt | head -10

# List files with specific extension
$ ls *.txt

# Count files in a directory
$ ls -1 | wc -l

# Navigate to a path with spaces
$ cd "My Documents"
$ cd My\\ Documents

# Check where you are after navigation
$ cd /var/log && pwd
/var/log`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>pwd shows your current location in the file system</li>
        <li>ls lists files; use -l for details, -a for hidden files, -h for readable sizes</li>
        <li>cd changes directories; cd alone goes to home directory</li>
        <li>~ represents home, .. is parent, . is current, / is root</li>
        <li>cd - returns to the previous directory</li>
        <li>Use Tab key for auto-completion of paths and file names</li>
      </ul>
    </div>
  </div>
);

export default NavigationCommands;
