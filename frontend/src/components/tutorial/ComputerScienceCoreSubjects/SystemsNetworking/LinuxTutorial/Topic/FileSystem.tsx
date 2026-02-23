import React from "react";

const FileSystem: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Linux File System
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Linux file system is a hierarchical structure that organizes all files and directories
      starting from a single root directory (/). Unlike Windows which uses drive letters (C:, D:),
      Linux treats everything as a file, including hardware devices, and uses a unified tree structure.
    </p>

    <h2 className="text-3xl font-bold mt-8">File System Hierarchy</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Linux File System Tree:

                        / (root)
                           |
    +-------+-------+------+------+-------+-------+
    |       |       |      |      |       |       |
   bin    etc     home   usr    var     tmp    dev
    |       |       |      |      |       |       |
    |     config  users  +--+   logs   temp   devices
    |     files     |    |  |    |
   cmds         +---+   bin lib  |
                |   |           +---+
               user1 user2     log  mail`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Important Directories</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Directory</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Contents</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/</td>
            <td className="p-3 border">Root directory</td>
            <td className="p-3 border">Top-level directory, everything starts here</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/bin</td>
            <td className="p-3 border">Essential binaries</td>
            <td className="p-3 border">ls, cp, mv, cat, bash</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/boot</td>
            <td className="p-3 border">Boot files</td>
            <td className="p-3 border">Linux kernel, bootloader (GRUB)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/dev</td>
            <td className="p-3 border">Device files</td>
            <td className="p-3 border">sda (disk), tty (terminal), null</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/etc</td>
            <td className="p-3 border">Configuration files</td>
            <td className="p-3 border">passwd, fstab, hosts, sudoers</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/home</td>
            <td className="p-3 border">User home directories</td>
            <td className="p-3 border">/home/username for each user</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/lib</td>
            <td className="p-3 border">Shared libraries</td>
            <td className="p-3 border">Libraries needed by /bin and /sbin</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/mnt</td>
            <td className="p-3 border">Mount point</td>
            <td className="p-3 border">Temporary mount for file systems</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/opt</td>
            <td className="p-3 border">Optional software</td>
            <td className="p-3 border">Third-party applications</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/proc</td>
            <td className="p-3 border">Process information</td>
            <td className="p-3 border">Virtual filesystem for process data</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/root</td>
            <td className="p-3 border">Root user's home</td>
            <td className="p-3 border">Home directory for superuser</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/sbin</td>
            <td className="p-3 border">System binaries</td>
            <td className="p-3 border">fdisk, fsck, init (admin commands)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/tmp</td>
            <td className="p-3 border">Temporary files</td>
            <td className="p-3 border">Cleared on reboot</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/usr</td>
            <td className="p-3 border">User programs</td>
            <td className="p-3 border">/usr/bin, /usr/lib, /usr/share</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/var</td>
            <td className="p-3 border">Variable data</td>
            <td className="p-3 border">Logs, mail, spool, cache</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">File System Types</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common Linux File Systems:

ext4 (Fourth Extended File System)
- Default for most Linux distributions
- Supports files up to 16TB, volumes up to 1EB
- Journaling for crash recovery

XFS
- High performance, scalable
- Good for large files and parallel I/O
- Used by Red Hat Enterprise Linux

Btrfs (B-tree File System)
- Copy-on-write (CoW)
- Snapshots and subvolumes
- Built-in RAID support

ZFS
- Enterprise-level features
- Data integrity verification
- Compression and deduplication

# View mounted file systems
$ df -Th
Filesystem     Type   Size  Used Avail Use% Mounted on
/dev/sda1      ext4   100G   45G   50G  47% /
/dev/sdb1      xfs     2T  1.2T  800G  60% /data`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">File Types in Linux</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">File Type</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">-</td>
            <td className="p-3 border">Regular File</td>
            <td className="p-3 border">Text, binary, image files</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">d</td>
            <td className="p-3 border">Directory</td>
            <td className="p-3 border">Container for other files</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">l</td>
            <td className="p-3 border">Symbolic Link</td>
            <td className="p-3 border">Pointer to another file</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">c</td>
            <td className="p-3 border">Character Device</td>
            <td className="p-3 border">Character-by-character I/O (terminal)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">b</td>
            <td className="p-3 border">Block Device</td>
            <td className="p-3 border">Block I/O (hard drives)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">s</td>
            <td className="p-3 border">Socket</td>
            <td className="p-3 border">Inter-process communication</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">p</td>
            <td className="p-3 border">Named Pipe (FIFO)</td>
            <td className="p-3 border">First-in-first-out communication</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Linux uses a single unified file system tree starting at / (root)</li>
        <li>Everything in Linux is treated as a file, including devices</li>
        <li>/etc contains configuration, /home contains user data, /var contains logs</li>
        <li>ext4 is the most common file system, with journaling for reliability</li>
        <li>File types can be identified by the first character in ls -l output</li>
        <li>The file system follows the Filesystem Hierarchy Standard (FHS)</li>
      </ul>
    </div>
  </div>
);

export default FileSystem;
