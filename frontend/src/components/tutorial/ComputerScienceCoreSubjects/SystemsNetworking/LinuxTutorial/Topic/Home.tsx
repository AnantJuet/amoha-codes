import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    {/* Main Title */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Linux Tutorial
    </h1>
    <p className="text-sm">Last Updated : 13 Jan, 2026</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      This Linux Tutorial covers everything from basic to advanced concepts, including Linux fundamentals,
      command-line operations, shell scripting, system administration, and networking. Whether you are a
      beginner or an experienced user, this tutorial will help you master Linux.
    </p>

    {/* Why Learn Linux */}
    <h2 className="text-3xl font-bold mt-8">Why Learn Linux?</h2>
    <p className="italic">Linux powers most of the world's servers, supercomputers, and embedded systems!</p>
    <ul className="list-disc list-inside space-y-2">
      <li>Linux is free, open-source, and highly customizable.</li>
      <li>It is the backbone of cloud computing, DevOps, and cybersecurity.</li>
      <li>Most web servers, Android devices, and IoT systems run on Linux.</li>
      <li>Learning Linux enhances your career opportunities in IT and software development.</li>
      <li>It provides powerful command-line tools for automation and scripting.</li>
    </ul>

    <div className="p-4 border-l-4 rounded-lg">
      <strong>Tip:</strong> Practice Linux commands regularly in a terminal. You can use a virtual machine,
      WSL (Windows Subsystem for Linux), or a cloud-based Linux environment to get hands-on experience.
    </div>

    {/* Section 1 */}
    <h2 className="text-2xl font-bold">1. Introduction</h2>
    <p>
      Linux is an open-source Unix-like operating system kernel first released by Linus Torvalds in 1991.
      In this section, we will explore what Linux is, its history, various distributions, and how to install it.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>What is Linux?</li>
      <li>History of Linux</li>
      <li>Linux Distributions</li>
      <li>Installing Linux</li>
    </ul>

    {/* Section 2 */}
    <h2 className="text-2xl font-bold">2. Linux Basics</h2>
    <p>
      Understanding the Linux file system and directory structure is fundamental to working with Linux.
      This section covers the hierarchical file system, different file types, and path navigation.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Linux File System</li>
      <li>Directory Structure</li>
      <li>File Types in Linux</li>
      <li>Absolute vs Relative Paths</li>
    </ul>

    {/* Section 3 */}
    <h2 className="text-2xl font-bold">3. Basic Commands</h2>
    <p>
      The command line is the most powerful way to interact with Linux. Learn essential commands for
      navigation, file manipulation, and system operations.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Navigation Commands (ls, cd, pwd)</li>
      <li>File Operations (cp, mv, rm)</li>
      <li>Directory Commands (mkdir, rmdir)</li>
      <li>File Viewing (cat, less, more)</li>
      <li>File Search (find, locate)</li>
      <li>Help Commands (man, info, --help)</li>
    </ul>

    {/* Section 4 */}
    <h2 className="text-2xl font-bold">4. File Permissions</h2>
    <p>
      Linux uses a robust permission system to control access to files and directories. Understanding
      permissions is crucial for system security and administration.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Understanding Permissions</li>
      <li>chmod Command</li>
      <li>chown Command</li>
      <li>chgrp Command</li>
      <li>Special Permissions (SUID, SGID, Sticky Bit)</li>
    </ul>

    {/* Section 5 */}
    <h2 className="text-2xl font-bold">5. User Management</h2>
    <p>
      Linux is a multi-user operating system. This section covers how to create, modify, and manage
      user accounts and groups.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>User Accounts Overview</li>
      <li>useradd Command</li>
      <li>usermod Command</li>
      <li>userdel Command</li>
      <li>passwd Command</li>
      <li>Groups and groupadd</li>
      <li>su and sudo Commands</li>
    </ul>

    {/* Section 6 */}
    <h2 className="text-2xl font-bold">6. Process Management</h2>
    <p>
      Processes are running instances of programs. Learn how to view, manage, and control processes
      in Linux for efficient system administration.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Understanding Processes</li>
      <li>ps Command</li>
      <li>top and htop Commands</li>
      <li>kill and killall Commands</li>
      <li>Background Jobs (bg, fg, jobs)</li>
      <li>nohup and & Operator</li>
      <li>nice and renice Commands</li>
    </ul>

    {/* Section 7 */}
    <h2 className="text-2xl font-bold">7. Package Management</h2>
    <p>
      Package managers simplify software installation, updates, and removal. Different Linux distributions
      use different package management systems.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Introduction to Package Managers</li>
      <li>APT (Debian/Ubuntu)</li>
      <li>YUM and DNF (RHEL/Fedora)</li>
      <li>Pacman (Arch Linux)</li>
      <li>Snap and Flatpak</li>
      <li>Compiling from Source</li>
    </ul>

    {/* Section 8 */}
    <h2 className="text-2xl font-bold">8. Text Processing</h2>
    <p>
      Linux provides powerful text processing tools that are essential for log analysis, data manipulation,
      and scripting.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>cat and tac Commands</li>
      <li>head and tail Commands</li>
      <li>grep Command</li>
      <li>sed Command</li>
      <li>awk Command</li>
      <li>sort and uniq Commands</li>
      <li>cut and paste Commands</li>
      <li>wc Command</li>
    </ul>

    {/* Section 9 */}
    <h2 className="text-2xl font-bold">9. Shell Scripting</h2>
    <p>
      Shell scripting allows you to automate repetitive tasks and create powerful command-line utilities.
      This section covers Bash scripting fundamentals.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Introduction to Shell Scripting</li>
      <li>Variables in Shell</li>
      <li>Input and Output</li>
      <li>Conditional Statements (if, case)</li>
      <li>Loops (for, while, until)</li>
      <li>Functions in Shell</li>
      <li>Arrays in Shell</li>
      <li>Script Debugging</li>
    </ul>

    {/* Section 10 */}
    <h2 className="text-2xl font-bold">10. Networking Commands</h2>
    <p>
      Linux offers comprehensive networking tools for configuration, troubleshooting, and secure
      remote access.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Network Configuration (ifconfig, ip)</li>
      <li>netstat and ss Commands</li>
      <li>ping and traceroute</li>
      <li>SSH (Secure Shell)</li>
      <li>SCP and SFTP</li>
      <li>wget and curl Commands</li>
      <li>Firewall (iptables, ufw)</li>
    </ul>

    {/* Section 11 */}
    <h2 className="text-2xl font-bold">11. System Administration</h2>
    <p>
      System administration involves managing services, scheduling tasks, monitoring logs, and
      maintaining disk storage.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>systemctl and Service Management</li>
      <li>Cron Jobs and Scheduling</li>
      <li>Log Files and journalctl</li>
      <li>Disk Management (df, du, fdisk)</li>
      <li>Mount and Unmount</li>
      <li>Backup and Archive (tar, gzip)</li>
      <li>System Monitoring</li>
    </ul>

    {/* Section 12 */}
    <h2 className="text-2xl font-bold">12. Vi/Vim Editor</h2>
    <p>
      Vi/Vim is a powerful text editor available on virtually all Unix-like systems. Mastering Vim
      significantly improves your productivity.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Introduction to Vi/Vim</li>
      <li>Vim Modes</li>
      <li>Basic Navigation</li>
      <li>Editing Commands</li>
      <li>Search and Replace</li>
      <li>Saving and Exiting</li>
      <li>Vim Configuration (.vimrc)</li>
    </ul>

    {/* Getting Started */}
    <h2 className="text-2xl font-bold mt-8">Getting Started</h2>
    <p>
      To begin your Linux journey, you can:
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Install a Linux distribution (Ubuntu, Fedora, or Linux Mint are great for beginners)</li>
      <li>Use Windows Subsystem for Linux (WSL) on Windows 10/11</li>
      <li>Try a live USB without installing</li>
      <li>Use online Linux terminals for practice</li>
    </ul>

    <div className="p-4 border-l-4 border-green-500 rounded-lg mt-4">
      <strong>Remember:</strong> The best way to learn Linux is by doing. Open a terminal and start
      practicing commands. Don't be afraid to experiment - that's how you learn!
    </div>
  </div>
);

export default Home;
