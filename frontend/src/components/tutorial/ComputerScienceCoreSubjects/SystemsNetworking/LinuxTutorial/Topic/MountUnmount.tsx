import React from "react";

const MountUnmount: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Mount and Unmount
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Mounting makes a filesystem accessible at a specific directory (mount point).
      The mount and umount commands manage this process.
    </p>

    <h2 className="text-3xl font-bold mt-8">mount Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Show all mounted filesystems
$ mount

# Mount a partition
$ sudo mount /dev/sdb1 /mnt/data

# Mount with specific filesystem type
$ sudo mount -t ext4 /dev/sdb1 /mnt/data

# Mount read-only
$ sudo mount -o ro /dev/sdb1 /mnt/data

# Mount with options
$ sudo mount -o rw,noexec /dev/sdb1 /mnt/data

# Mount ISO file
$ sudo mount -o loop image.iso /mnt/iso

# Mount NFS share
$ sudo mount -t nfs server:/share /mnt/nfs

# Mount CIFS/SMB share
$ sudo mount -t cifs //server/share /mnt/smb -o username=user`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">umount Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Unmount by mount point
$ sudo umount /mnt/data

# Unmount by device
$ sudo umount /dev/sdb1

# Force unmount (use carefully)
$ sudo umount -f /mnt/data

# Lazy unmount (detaches filesystem)
$ sudo umount -l /mnt/data

# Find what's using the mount point
$ lsof +f -- /mnt/data
$ fuser -m /mnt/data`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">/etc/fstab</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# /etc/fstab format:
# <device> <mount point> <type> <options> <dump> <fsck>

# Examples:
/dev/sdb1  /mnt/data  ext4  defaults  0  2
UUID=xxxx  /mnt/backup  xfs  defaults,noatime  0  0
//server/share  /mnt/smb  cifs  credentials=/etc/creds,uid=1000  0  0

# Mount all fstab entries
$ sudo mount -a

# Get UUID of device
$ sudo blkid /dev/sdb1`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Mount Options</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Option</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">defaults</td>
            <td className="p-3 border">rw, suid, dev, exec, auto, nouser, async</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">ro</td>
            <td className="p-3 border">Mount read-only</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">rw</td>
            <td className="p-3 border">Mount read-write</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">noexec</td>
            <td className="p-3 border">Prevent execution of binaries</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">nosuid</td>
            <td className="p-3 border">Ignore SUID bits</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">noatime</td>
            <td className="p-3 border">Don't update access times</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Create mount point directory before mounting</li>
        <li>Use /etc/fstab for persistent mounts</li>
        <li>Use UUID instead of device names for reliability</li>
        <li>Unmount before removing storage devices</li>
      </ul>
    </div>
  </div>
);

export default MountUnmount;
