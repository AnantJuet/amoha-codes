import React from "react";

const FileTypes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      File Types in Linux
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      In Linux, everything is treated as a file - including hardware devices, directories,
      and special system interfaces. Understanding the different file types is essential
      for working effectively with the Linux filesystem.
    </p>

    <h2 className="text-3xl font-bold mt-8">Seven File Types in Linux</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">File Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono font-semibold text-xl text-gray-900">-</td>
            <td className="p-3 border">Regular File</td>
            <td className="p-3 border">Text, binary, image, scripts</td>
            <td className="p-3 border font-mono text-gray-900">/etc/passwd</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-xl text-gray-900">d</td>
            <td className="p-3 border">Directory</td>
            <td className="p-3 border">Contains other files and directories</td>
            <td className="p-3 border font-mono text-gray-900">/home</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-xl text-gray-900">l</td>
            <td className="p-3 border">Symbolic Link</td>
            <td className="p-3 border">Pointer to another file</td>
            <td className="p-3 border font-mono text-gray-900">/bin (link to /usr/bin)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-xl text-gray-900">c</td>
            <td className="p-3 border">Character Device</td>
            <td className="p-3 border">Character-by-character I/O</td>
            <td className="p-3 border font-mono text-gray-900">/dev/tty</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-xl text-gray-900">b</td>
            <td className="p-3 border">Block Device</td>
            <td className="p-3 border">Block-based I/O (storage)</td>
            <td className="p-3 border font-mono text-gray-900">/dev/sda</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-xl text-gray-900">s</td>
            <td className="p-3 border">Socket</td>
            <td className="p-3 border">Inter-process communication</td>
            <td className="p-3 border font-mono text-gray-900">/var/run/docker.sock</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-xl text-gray-900">p</td>
            <td className="p-3 border">Named Pipe (FIFO)</td>
            <td className="p-3 border">First-in-first-out communication</td>
            <td className="p-3 border font-mono text-gray-900">/tmp/mypipe</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Identifying File Types</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Using ls -l (first character shows type)
$ ls -l /
drwxr-xr-x   2 root root  4096 Jan 16 10:00 bin
drwxr-xr-x   3 root root  4096 Jan 16 10:00 boot
drwxr-xr-x  18 root root  4200 Jan 16 10:00 dev
drwxr-xr-x  95 root root  4096 Jan 16 10:00 etc
lrwxrwxrwx   1 root root     7 Jan 16 10:00 lib -> usr/lib

# Character meanings:
# d = directory
# - = regular file
# l = symbolic link
# c = character device
# b = block device
# s = socket
# p = named pipe

# Using file command
$ file /etc/passwd
/etc/passwd: ASCII text

$ file /bin/ls
/bin/ls: ELF 64-bit LSB pie executable

$ file /dev/sda
/dev/sda: block special

# Using stat command
$ stat /etc/passwd
  File: /etc/passwd
  Size: 2847            Blocks: 8          IO Block: 4096   regular file
  ...`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Regular Files</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        Regular files are the most common file type. They can contain:
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
        <li><strong>Text files:</strong> Scripts, configuration files, source code</li>
        <li><strong>Binary files:</strong> Executables, compiled programs</li>
        <li><strong>Data files:</strong> Images, documents, databases</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Symbolic Links vs Hard Links</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Create symbolic link (soft link)
$ ln -s /path/to/original /path/to/link

# Create hard link
$ ln /path/to/original /path/to/hardlink

# Difference:
# Symbolic link: Points to filename, can link across filesystems
# Hard link: Points to inode, same filesystem only

# Example
$ echo "Hello" > original.txt
$ ln -s original.txt symlink.txt
$ ln original.txt hardlink.txt

$ ls -li
12345 -rw-r--r-- 2 user user 6 Jan 16 10:00 original.txt
12345 -rw-r--r-- 2 user user 6 Jan 16 10:00 hardlink.txt
67890 lrwxrwxrwx 1 user user 12 Jan 16 10:00 symlink.txt -> original.txt

# Note: original and hardlink share same inode (12345)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Device Files</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# List device files
$ ls -l /dev/
brw-rw----  1 root disk    8,  0 Jan 16 10:00 sda
brw-rw----  1 root disk    8,  1 Jan 16 10:00 sda1
crw--w----  1 root tty     4,  0 Jan 16 10:00 tty0
crw-rw-rw-  1 root root    1,  3 Jan 16 10:00 null
crw-rw-rw-  1 root root    1,  5 Jan 16 10:00 zero
crw-rw-rw-  1 root root    1,  8 Jan 16 10:00 random

# Common device files:
# /dev/null  - Discards all data written to it
# /dev/zero  - Returns null bytes when read
# /dev/random - Random number generator
# /dev/sda   - First SATA/SCSI hard disk
# /dev/tty   - Current terminal`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Special Files</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">File</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Usage</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">/dev/null</td>
            <td className="p-3 border">Bit bucket - discards data</td>
            <td className="p-3 border font-mono text-gray-900">{`command > /dev/null`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">/dev/zero</td>
            <td className="p-3 border">Provides null bytes</td>
            <td className="p-3 border font-mono text-gray-900">{`dd if=/dev/zero`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">/dev/random</td>
            <td className="p-3 border">Random number generator</td>
            <td className="p-3 border font-mono text-gray-900">{`cat /dev/random`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">/dev/urandom</td>
            <td className="p-3 border">Non-blocking random</td>
            <td className="p-3 border font-mono text-gray-900">{`head -c 16 /dev/urandom`}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Linux has 7 file types: regular, directory, link, char device, block device, socket, pipe</li>
        <li>The first character of ls -l output indicates the file type</li>
        <li>Use the file command to determine file content type</li>
        <li>Symbolic links can span filesystems; hard links cannot</li>
        <li>Device files in /dev provide interfaces to hardware</li>
        <li>/dev/null is useful for discarding unwanted output</li>
      </ul>
    </div>
  </div>
);

export default FileTypes;
