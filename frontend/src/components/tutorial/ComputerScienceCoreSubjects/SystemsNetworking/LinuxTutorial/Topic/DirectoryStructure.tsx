import React from "react";

const DirectoryStructure: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Linux Directory Structure
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Linux directory structure follows the Filesystem Hierarchy Standard (FHS), organizing
      all files and directories in a tree-like structure starting from the root directory (/).
      Understanding this structure is essential for effective Linux system administration.
    </p>

    <h2 className="text-3xl font-bold mt-8">Linux Directory Tree</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`/                          Root directory
├── bin                    Essential user binaries
├── boot                   Boot loader files
├── dev                    Device files
├── etc                    System configuration files
├── home                   User home directories
│   ├── user1
│   └── user2
├── lib                    Essential shared libraries
├── lib64                  64-bit libraries
├── media                  Removable media mount points
├── mnt                    Temporary mount points
├── opt                    Optional/third-party software
├── proc                   Process information (virtual)
├── root                   Root user's home directory
├── run                    Runtime variable data
├── sbin                   System binaries
├── srv                    Service data
├── sys                    System information (virtual)
├── tmp                    Temporary files
├── usr                    User utilities and applications
│   ├── bin
│   ├── lib
│   ├── local
│   └── share
└── var                    Variable data
    ├── log
    ├── mail
    └── tmp`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Essential Directories Explained</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Directory</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Example Contents</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/</td>
            <td className="p-3 border">Root directory, top of hierarchy</td>
            <td className="p-3 border">All other directories</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/bin</td>
            <td className="p-3 border">Essential user command binaries</td>
            <td className="p-3 border">ls, cp, mv, cat, bash</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/boot</td>
            <td className="p-3 border">Static boot files</td>
            <td className="p-3 border">vmlinuz, initrd, grub</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/dev</td>
            <td className="p-3 border">Device files</td>
            <td className="p-3 border">sda, tty, null, random</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/etc</td>
            <td className="p-3 border">System-wide configuration</td>
            <td className="p-3 border">passwd, fstab, hosts</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/home</td>
            <td className="p-3 border">User home directories</td>
            <td className="p-3 border">/home/john, /home/alice</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/lib</td>
            <td className="p-3 border">Essential shared libraries</td>
            <td className="p-3 border">libc.so, ld-linux.so</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/opt</td>
            <td className="p-3 border">Optional add-on applications</td>
            <td className="p-3 border">Third-party software</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/proc</td>
            <td className="p-3 border">Process and kernel information</td>
            <td className="p-3 border">cpuinfo, meminfo, PID dirs</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/root</td>
            <td className="p-3 border">Root user home directory</td>
            <td className="p-3 border">Root user files</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/sbin</td>
            <td className="p-3 border">System administration binaries</td>
            <td className="p-3 border">fdisk, fsck, init, mount</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/tmp</td>
            <td className="p-3 border">Temporary files</td>
            <td className="p-3 border">Session files, cleared on reboot</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/usr</td>
            <td className="p-3 border">Secondary hierarchy for user data</td>
            <td className="p-3 border">Applications, libraries, docs</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">/var</td>
            <td className="p-3 border">Variable data that changes often</td>
            <td className="p-3 border">logs, mail, spool, cache</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Important Configuration Files in /etc</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`/etc/passwd      - User account information
/etc/shadow      - Encrypted user passwords
/etc/group       - Group definitions
/etc/fstab       - Filesystem mount table
/etc/hosts       - Static hostname mappings
/etc/hostname    - System hostname
/etc/sudoers     - sudo configuration
/etc/ssh/        - SSH configuration
/etc/crontab     - System cron jobs
/etc/profile     - System-wide shell profile`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Exploring Directories</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# List root directory contents
$ ls /
bin  boot  dev  etc  home  lib  media  mnt  opt  proc  root
run  sbin  srv  sys  tmp  usr  var

# View directory tree (install tree if needed)
$ tree -L 1 /
/
├── bin -> usr/bin
├── boot
├── dev
├── etc
├── home
├── lib -> usr/lib
├── mnt
├── opt
├── proc
├── root
├── run
├── sbin -> usr/sbin
├── srv
├── sys
├── tmp
├── usr
└── var

# Check disk usage of directories
$ du -sh /*
16M     /bin
145M    /boot
0       /dev
15M     /etc
4.2G    /home
...`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>/ (root) is the top of the directory hierarchy - everything starts here</li>
        <li>/etc contains system-wide configuration files</li>
        <li>/home stores user personal files and configurations</li>
        <li>/var holds variable data like logs, mail, and temporary files</li>
        <li>/proc and /sys are virtual filesystems providing system information</li>
        <li>Modern systems often merge /bin with /usr/bin and /sbin with /usr/sbin</li>
      </ul>
    </div>
  </div>
);

export default DirectoryStructure;
