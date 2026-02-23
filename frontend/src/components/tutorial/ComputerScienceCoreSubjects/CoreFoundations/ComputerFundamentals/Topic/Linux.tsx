import React from 'react';

const LinuxUnix: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">
    
    {/* ================= Linux/Unix Tutorial ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Linux/Unix Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Linux is one of the most widely used open-source operating systems. It's fast, secure, stable, 
      and powers everything from smartphones and servers to cloud platforms and IoT devices. 
      Linux is especially popular among developers, system administrators, and DevOps professionals.
    </p>
    <p className="leading-relaxed">
      A Unix-like OS used in servers, cloud infrastructure, supercomputers, personal computers and embedded systems.
      Reliable and secure, making it ideal for web hosting, networking, and automation.
      Preferred in DevOps, where it's used for scripting, configuration, containerization (Docker), and CI/CD pipelines.
      Open-source and customizable, giving users full control over their systems and workflows.
    </p>

    {/* 1. Understanding Linux Basics */}
    <h2 className="text-3xl font-bold  mt-8">1. Understanding Linux Basics</h2>
    <p className="leading-relaxed">
      In this section, we will cover the basics of Linux operating system, how it works, and how it's different from Unix. 
      We'll learn about the concept of Linux distributions (distros), why they exist, and how to choose the right one based on your needs—whether you're a beginner, developer, or system admin.
    </p>

    <ol className="list-decimal list-inside space-y-1">
      <li>Introduction to Linux Operating System</li>
      <li>What are Linux Distributions?</li>
      <li>Choosing a Linux Distribution</li>
      <li>Difference between Linux/Unix</li>
      <li>Installing Linux</li>
      <li>Installing Linux Using a Virtual Machine</li>
      <li>Creating a Dual Boot System with Linux and Windows</li>
    </ol>

    {/* 2. Linux Commands */}
    <h2 className="text-3xl font-bold  mt-8">2. Linux Commands</h2>
    <p className="leading-relaxed">
      Linux commands are instructions entered in the terminal to perform tasks such as navigating directories, managing files, monitoring system performance, and installing software. 
      Here are the most commonly used Linux commands along with a complete list:
    </p>

    <ol className="list-decimal list-inside space-y-1">
      <li>25 Basic Linux Commands For Beginners</li>
      <li>Complete Linux Commands</li>
    </ol>

    {/* 3. Linux File System */}
    <h2 className="text-3xl font-bold  mt-8">3. Linux File System</h2>
    <p className="leading-relaxed">
      The Linux file system organizes data in a hierarchical structure, starting from the root ("/"). 
      It defines how files and directories are stored, accessed, and managed, ensuring efficient system navigation and resource organization.
    </p>

    <ol className="list-decimal list-inside space-y-1">
      <li>Linux File System</li>
      <li>Linux File Hierarchy Structure</li>
      <li>Linux Directory Structure</li>
      <li>File System Navigation Commands in Linux</li>
      <li>Absolute and Relative Pathnames in UNIX</li>
    </ol>

    {/* 4. File Management in Linux */}
    <h2 className="text-3xl font-bold  mt-8">4. File Management in Linux</h2>
    <p className="leading-relaxed">
      File management in Linux is all about creating, viewing, editing, moving, copying, and deleting files and directories using both the command line and graphical tools. 
      In this section, we’ll cover essential file management commands like ls, cd, cp, mv, rm, and touch, along with concepts like file paths, wildcards, and hidden files.
    </p>

    <ol className="list-decimal list-inside space-y-1">
      <li>File Management in Linux</li>
      <li>Files Listing: ls command</li>
      <li>Creating Files: touch command</li>
      <li>Displaying File Contents: cat command</li>
      <li>Copying a File: cp command</li>
      <li>Moving and Renaming a File: mv command</li>
      <li>Deleting a File: rm command</li>
      <li>File Permissions in Linux</li>
      <li>Changing Security Permissions by chmod command</li>
      <li>Soft and Hard Links in Unix/Linux</li>
      <li>Advanced File Permissions in Linux</li>
      <li>Find a File in Linux by Find Command</li>
      <li>View File Contents by cat Command</li>
    </ol>

    {/* 5. Package Management */}
    <h2 className="text-3xl font-bold  mt-8">5. Package Management</h2>
    <p className="leading-relaxed">
      Package management in Linux involves installing, updating, and removing software using package managers like apt, yum, or dnf. 
      It simplifies handling software dependencies and ensures systems stay updated and secure.
    </p>

    <ol className="list-decimal list-inside space-y-1">
      <li>Understanding Package Managers and systemctl</li>
      <li>apt-get command in Linux with Examples</li>
      <li>Debian Software Package Management (dpkg) in Linux</li>
      <li>Installing RPM Packages on Linux</li>
      <li>Installing YUM and Using YUM Commands</li>
      <li>Zypper (openSUSE)</li>
      <li>Pacman command in Arch Linux</li>
      <li>dpkg, yum, dnf, and apt-get Package Managers</li>
    </ol>

    {/* 6. User and Group Management */}
    <h2 className="text-3xl font-bold  mt-8">6. User and Group Management</h2>
    <p className="leading-relaxed">
      Managing users and groups in Linux involves creating, modifying, and controlling user accounts, assigning permissions, and organizing users into groups for efficient access control and system security.
    </p>

    <ol className="list-decimal list-inside space-y-1">
      <li>How to Check the Groups a User Belongs To</li>
      <li>sudo command in Linux with Examples</li>
      <li>User Management in Linux</li>
      <li>Changing User and Group IDs</li>
      <li>Permissions in Linux and chmod Command</li>
      <li>passwd Command in Linux</li>
    </ol>

    {/* 7. Linux Networking */}
    <h2 className="text-3xl font-bold  mt-8">7. Linux Networking</h2>
    <p className="leading-relaxed">
      Linux networking covers everything from configuring IP addresses and managing network interfaces to setting up firewalls, monitoring traffic, and enabling communication between devices and servers.
    </p>

    <ol className="list-decimal list-inside space-y-1">
      <li>Network Configuration and Troubleshooting Commands</li>
      <li>How to Configure Network Interfaces</li>
      <li>Linux Firewall and iptables Commands</li>
      <li>Managing Firewall Configuration</li>
    </ol>

    {/* 8. Shell Scripting */}
    <h2 className="text-3xl font-bold  mt-8">8. Shell Scripting</h2>
    <p className="leading-relaxed">
      Shell scripting is writing a series of commands in a script file to automate tasks in a Linux or Unix shell. 
      It simplifies repetitive tasks like file management, system monitoring, and process automation.
    </p>

    <ol className="list-decimal list-inside space-y-1">
      <li>Introduction to Shell and Kernel</li>
      <li>Creating and Running Shell Scripts</li>
      <li>Variables and Operators in Shell</li>
      <li>Bash Scripting and Functions</li>
      <li>Advanced Topics and Examples in Shell Scripting</li>
    </ol>

    {/* 9. System Administration */}
    <h2 className="text-3xl font-bold  mt-8">9. System Administration</h2>
    <p className="leading-relaxed">
      System administration in Linux involves managing and maintaining Linux systems, including user management, software installation, network configuration, and monitoring system performance.
    </p>

    <ol className="list-decimal list-inside space-y-1">
      <li>What is Linux System Administration?</li>
      <li>Basic Linux Commands and File System Navigation</li>
      <li>Monitoring and Troubleshooting Linux Servers</li>
      <li>Linux Systemd and Boot Process</li>
      <li>Controlling Systemd Services Remotely</li>
    </ol>

    {/* 10. Advanced Linux Concepts */}
    <h2 className="text-3xl font-bold mt-8">10. Advanced Linux Concepts</h2>
    <p className="leading-relaxed">
      This section covers high-level Linux concepts such as kernel modules, virtualization, networking services, and web server administration.
    </p>

    <ol className="list-decimal list-inside space-y-1">
      <li>Overview of the Linux Kernel</li>
      <li>Loadable Kernel Modules (LKMs)</li>
      <li>Virtualization with Docker Containers</li>
      <li>Networking Services (DHCP, DNS, FTP)</li>
      <li>Web Server Administration (Apache vs Nginx)</li>
    </ol>

    {/* 11. Linux in Cloud */}
    <h2 className="text-3xl font-bold  mt-8">11. Linux Cloud</h2>
    <p className="leading-relaxed">
      Linux plays a vital role in cloud computing and DevOps, forming the backbone of servers and container systems used for automation and scalability.
    </p>

    <ol className="list-decimal list-inside space-y-1">
      <li>The Role of Linux in Cloud Computing and DevOps</li>
      <li>Linux Commands in DevOps</li>
      <li>Deploying and Managing Linux in the Cloud</li>
    </ol>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold  mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Linux/Unix remains the foundation of modern computing, powering servers, networks, and cloud systems worldwide. 
      Its stability, performance, and open-source nature make it the preferred choice for developers, sysadmins, and DevOps professionals alike.
    </p>
  </div>
);

export default LinuxUnix;
