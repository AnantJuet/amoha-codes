import React from "react";

const DiskManagement: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Disk Management
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Disk management in Linux involves partitioning disks, creating filesystems,
      and monitoring disk usage. Common tools include fdisk, parted, lsblk, and df.
    </p>

    <h2 className="text-3xl font-bold mt-8">Viewing Disk Information</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# List block devices
$ lsblk

# List with filesystem info
$ lsblk -f

# Disk usage (human-readable)
$ df -h

# Disk usage by type
$ df -hT

# Directory size
$ du -sh /path/to/dir

# Top 10 largest directories
$ du -h /home | sort -rh | head -10

# View disk partitions
$ sudo fdisk -l`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Partitioning with fdisk</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Start fdisk for a disk
$ sudo fdisk /dev/sdb

# fdisk commands:
# p - Print partition table
# n - New partition
# d - Delete partition
# t - Change partition type
# w - Write changes and exit
# q - Quit without saving`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Creating Filesystems</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Create ext4 filesystem
$ sudo mkfs.ext4 /dev/sdb1

# Create XFS filesystem
$ sudo mkfs.xfs /dev/sdb1

# Create FAT32 filesystem
$ sudo mkfs.vfat -F 32 /dev/sdb1

# Label filesystem
$ sudo e2label /dev/sdb1 "MyDisk"

# Check filesystem
$ sudo fsck /dev/sdb1`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LVM (Logical Volume Manager)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Create physical volume
$ sudo pvcreate /dev/sdb1

# Create volume group
$ sudo vgcreate myvg /dev/sdb1

# Create logical volume
$ sudo lvcreate -L 10G -n mylv myvg

# Extend logical volume
$ sudo lvextend -L +5G /dev/myvg/mylv

# Display information
$ sudo pvdisplay
$ sudo vgdisplay
$ sudo lvdisplay`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Disk Usage Commands</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Command</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">df -h</td>
            <td className="p-3 border">Show filesystem disk usage</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">du -sh</td>
            <td className="p-3 border">Show directory size</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">lsblk</td>
            <td className="p-3 border">List block devices</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">blkid</td>
            <td className="p-3 border">Show block device UUIDs</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">fdisk -l</td>
            <td className="p-3 border">List partition tables</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>df -h shows mounted filesystem usage</li>
        <li>du -sh shows directory size</li>
        <li>Always backup data before partitioning</li>
        <li>LVM allows flexible volume management</li>
      </ul>
    </div>
  </div>
);

export default DiskManagement;
