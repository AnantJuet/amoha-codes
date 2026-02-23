import React from "react";

export interface SidebarItem {
  label: string;
  href: string;
  isHeader?: boolean;
  children?: SidebarItem[];
}

export interface TopicContent {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export const tutorialData: SidebarItem[] = [
  { label: "Unix Home", href: "unix_home" },
  { label: "Introduction", href: "unix_intro" },
  { label: "History", href: "unix_history" },
  {
    label: "File System",
    href: "unix_filesystem",
    isHeader: true,
    children: [
      { label: "Directory Structure", href: "unix_directory" },
      { label: "File Types", href: "unix_file_types" },
      { label: "Paths", href: "unix_paths" },
    ]
  },
  {
    label: "Basic Commands",
    href: "unix_commands",
    isHeader: true,
    children: [
      { label: "Navigation", href: "unix_navigation" },
      { label: "File Operations", href: "unix_file_ops" },
      { label: "Directory Operations", href: "unix_dir_ops" },
      { label: "Viewing Files", href: "unix_viewing" },
    ]
  },
  {
    label: "File Permissions",
    href: "unix_permissions",
    isHeader: true,
    children: [
      { label: "Understanding Permissions", href: "unix_perm_basics" },
      { label: "chmod Command", href: "unix_chmod" },
      { label: "chown & chgrp", href: "unix_chown" },
    ]
  },
  {
    label: "Process Management",
    href: "unix_processes",
    isHeader: true,
    children: [
      { label: "Process Basics", href: "unix_process_basics" },
      { label: "ps Command", href: "unix_ps" },
      { label: "Kill & Signals", href: "unix_kill" },
      { label: "Background Jobs", href: "unix_jobs" },
    ]
  },
  {
    label: "Shell Scripting",
    href: "unix_scripting",
    isHeader: true,
    children: [
      { label: "Script Basics", href: "unix_script_basics" },
      { label: "Variables", href: "unix_variables" },
      { label: "Conditionals", href: "unix_conditionals" },
      { label: "Loops", href: "unix_loops" },
    ]
  },
  {
    label: "Text Processing",
    href: "unix_text",
    isHeader: true,
    children: [
      { label: "grep", href: "unix_grep" },
      { label: "sed", href: "unix_sed" },
      { label: "awk", href: "unix_awk" },
    ]
  },
  {
    label: "Networking",
    href: "unix_networking",
    isHeader: true,
    children: [
      { label: "Network Commands", href: "unix_network_cmds" },
      { label: "SSH", href: "unix_ssh" },
      { label: "File Transfer", href: "unix_transfer" },
    ]
  },
];

export const tutorialContent: Record<string, TopicContent> = {
  "unix_home": {
    title: "Unix Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Welcome to Unix Tutorial
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>Unix</strong> is a powerful, multiuser, multitasking operating system that has influenced many modern operating systems including Linux and macOS.
        </p>
        <h3 className="text-xl font-medium mb-3">What You Will Learn</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Unix file system and directory structure</li>
          <li>Essential commands for file and directory management</li>
          <li>File permissions and ownership</li>
          <li>Process management</li>
          <li>Shell scripting basics</li>
          <li>Text processing with grep, sed, and awk</li>
          <li>Networking commands</li>
        </ul>
      </>
    ),
  },
  "unix_intro": {
    title: "Introduction to Unix",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is Unix?
        </h2>
        <p className="leading-relaxed mb-4">
          Unix is an operating system developed in the 1970s at Bell Labs. It is known for its stability, security, and powerful command-line interface.
        </p>
        <h3 className="text-xl font-medium mb-3">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Multiuser:</strong> Multiple users can work simultaneously</li>
          <li><strong>Multitasking:</strong> Run multiple processes concurrently</li>
          <li><strong>Portability:</strong> Runs on various hardware platforms</li>
          <li><strong>Hierarchical File System:</strong> Organized directory structure</li>
          <li><strong>Shell:</strong> Powerful command interpreter</li>
        </ul>
      </>
    ),
  },
  "unix_history": {
    title: "Unix History",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          History of Unix
        </h2>
        <h3 className="text-xl font-medium mb-3">Timeline</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>1969:</strong> Unix created at Bell Labs by Ken Thompson and Dennis Ritchie</li>
          <li><strong>1973:</strong> Unix rewritten in C programming language</li>
          <li><strong>1979:</strong> BSD (Berkeley Software Distribution) released</li>
          <li><strong>1983:</strong> System V released by AT&T</li>
          <li><strong>1991:</strong> Linux created by Linus Torvalds</li>
          <li><strong>2001:</strong> macOS (Darwin) released, based on BSD</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Unix Variants</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Linux (Ubuntu, CentOS, Fedora)</li>
          <li>BSD (FreeBSD, OpenBSD, NetBSD)</li>
          <li>macOS/Darwin</li>
          <li>Solaris</li>
          <li>AIX</li>
        </ul>
      </>
    ),
  },
  "unix_filesystem": {
    title: "Unix File System",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Unix File System
        </h2>
        <p className="leading-relaxed mb-4">
          The Unix file system is a hierarchical structure starting from the root directory (/).
        </p>
        <h3 className="text-xl font-medium mb-3">Key Concepts</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Everything in Unix is treated as a file</li>
          <li>Directories are special files containing other files</li>
          <li>Case-sensitive file names</li>
          <li>Hidden files start with a dot (.)</li>
        </ul>
      </>
    ),
  },
  "unix_directory": {
    title: "Directory Structure",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Unix Directory Structure
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`/
├── bin/     # Essential user binaries
├── boot/    # Boot loader files
├── dev/     # Device files
├── etc/     # System configuration
├── home/    # User home directories
├── lib/     # System libraries
├── opt/     # Optional software
├── proc/    # Process information
├── root/    # Root user home
├── sbin/    # System binaries
├── tmp/     # Temporary files
├── usr/     # User programs
└── var/     # Variable data files`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_file_types": {
    title: "File Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Unix File Types
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>- (Regular):</strong> Normal files (text, binary)</li>
          <li><strong>d (Directory):</strong> Contains other files</li>
          <li><strong>l (Symbolic Link):</strong> Points to another file</li>
          <li><strong>c (Character Device):</strong> Character-based devices</li>
          <li><strong>b (Block Device):</strong> Block-based devices</li>
          <li><strong>p (Named Pipe):</strong> Inter-process communication</li>
          <li><strong>s (Socket):</strong> Network communication</li>
        </ul>
      </>
    ),
  },
  "unix_paths": {
    title: "Paths",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Unix Paths
        </h2>
        <h3 className="text-xl font-medium mb-3">Absolute Path</h3>
        <p className="leading-relaxed mb-4">
          Starts from root directory (/). Always specifies the complete path.
        </p>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`/home/user/documents/file.txt`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Relative Path</h3>
        <p className="leading-relaxed mb-4">
          Relative to current working directory.
        </p>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`./documents/file.txt
../parent/file.txt
~/user/file.txt  # ~ represents home directory`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_commands": {
    title: "Basic Commands",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Unix Basic Commands
        </h2>
        <p className="leading-relaxed mb-4">
          Unix commands are entered in the terminal and follow the syntax: command [options] [arguments]
        </p>
        <h3 className="text-xl font-medium mb-3">Command Syntax</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`command -options arguments

# Examples:
ls -la /home
cp -r source dest
grep -i "pattern" file.txt`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_navigation": {
    title: "Navigation Commands",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Navigation Commands
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Print working directory
pwd

# Change directory
cd /path/to/directory
cd ..          # Parent directory
cd ~           # Home directory
cd -           # Previous directory

# List directory contents
ls             # Basic listing
ls -l          # Long format
ls -a          # Show hidden files
ls -la         # Long format with hidden
ls -lh         # Human-readable sizes`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_file_ops": {
    title: "File Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          File Operations
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create empty file
touch filename.txt

# Copy file
cp source.txt dest.txt
cp -r source_dir/ dest_dir/

# Move/Rename file
mv oldname.txt newname.txt
mv file.txt /new/location/

# Remove file
rm filename.txt
rm -f filename.txt    # Force delete
rm -r directory/      # Remove directory

# Create symbolic link
ln -s target linkname`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_dir_ops": {
    title: "Directory Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Directory Operations
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create directory
mkdir dirname
mkdir -p parent/child/grandchild

# Remove empty directory
rmdir dirname

# Remove directory with contents
rm -r dirname
rm -rf dirname    # Force remove

# Copy directory
cp -r source/ destination/

# Find files
find /path -name "*.txt"
find . -type f -size +1M`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_viewing": {
    title: "Viewing Files",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Viewing File Contents
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Display entire file
cat filename.txt

# Display with line numbers
cat -n filename.txt

# View first lines
head filename.txt
head -n 20 filename.txt

# View last lines
tail filename.txt
tail -f filename.txt    # Follow file updates

# Page through file
less filename.txt
more filename.txt

# Word count
wc filename.txt         # lines, words, chars
wc -l filename.txt      # lines only`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_permissions": {
    title: "File Permissions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Unix File Permissions
        </h2>
        <p className="leading-relaxed mb-4">
          Unix uses a permission system that controls read, write, and execute access for owner, group, and others.
        </p>
        <h3 className="text-xl font-medium mb-3">Permission Types</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>r (read):</strong> View file contents or list directory</li>
          <li><strong>w (write):</strong> Modify file or directory</li>
          <li><strong>x (execute):</strong> Run file or access directory</li>
        </ul>
      </>
    ),
  },
  "unix_perm_basics": {
    title: "Understanding Permissions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Understanding Permissions
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-rwxr-xr-- 1 user group 1234 Jan 1 12:00 file.txt
│└┬┘└┬┘└┬┘
│ │  │  └── Others permissions (r--)
│ │  └───── Group permissions (r-x)
│ └──────── Owner permissions (rwx)
└────────── File type (- = regular file)

Numeric representation:
r = 4, w = 2, x = 1
rwx = 7, r-x = 5, r-- = 4
Example: 755 = rwxr-xr-x`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_chmod": {
    title: "chmod Command",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          chmod - Change File Permissions
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Numeric mode
chmod 755 file.txt     # rwxr-xr-x
chmod 644 file.txt     # rw-r--r--
chmod 700 script.sh    # rwx------

# Symbolic mode
chmod u+x file.txt     # Add execute for user
chmod g-w file.txt     # Remove write for group
chmod o=r file.txt     # Set others to read only
chmod a+x file.txt     # Add execute for all

# Recursive
chmod -R 755 directory/`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_chown": {
    title: "chown & chgrp",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Changing Ownership
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Change owner
chown user file.txt
chown user:group file.txt

# Change group
chgrp groupname file.txt

# Recursive ownership change
chown -R user:group directory/

# View current ownership
ls -l file.txt`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_processes": {
    title: "Process Management",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Process Management
        </h2>
        <p className="leading-relaxed mb-4">
          A process is a running instance of a program. Unix provides tools to view, manage, and control processes.
        </p>
        <h3 className="text-xl font-medium mb-3">Process States</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Running:</strong> Currently executing</li>
          <li><strong>Sleeping:</strong> Waiting for resources</li>
          <li><strong>Stopped:</strong> Suspended</li>
          <li><strong>Zombie:</strong> Terminated but not cleaned up</li>
        </ul>
      </>
    ),
  },
  "unix_process_basics": {
    title: "Process Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Process Basics
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# View running processes
ps aux          # All processes
ps -ef          # Full format
top             # Interactive process viewer
htop            # Enhanced process viewer

# Process ID
echo $$         # Current shell PID
echo $PPID      # Parent process PID

# Run process in background
command &

# View background jobs
jobs`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_ps": {
    title: "ps Command",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          ps Command
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Basic usage
ps              # Current shell processes
ps aux          # All processes (BSD style)
ps -ef          # All processes (System V style)

# Filter processes
ps aux | grep nginx
ps -u username  # User's processes

# Tree view
ps auxf
pstree

# Columns explained
# USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_kill": {
    title: "Kill & Signals",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Killing Processes
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Kill by PID
kill PID           # SIGTERM (graceful)
kill -9 PID        # SIGKILL (force)
kill -15 PID       # SIGTERM

# Kill by name
pkill processname
killall processname

# Common signals
# SIGHUP (1)  - Hangup
# SIGINT (2)  - Interrupt (Ctrl+C)
# SIGKILL (9) - Force kill
# SIGTERM (15)- Graceful termination
# SIGSTOP (19)- Stop process

# List all signals
kill -l`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_jobs": {
    title: "Background Jobs",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Background Jobs
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Run in background
command &

# Suspend current job
Ctrl+Z

# List jobs
jobs

# Resume in background
bg %1

# Resume in foreground
fg %1

# Keep running after logout
nohup command &
disown %1`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_scripting": {
    title: "Shell Scripting",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Shell Scripting Basics
        </h2>
        <p className="leading-relaxed mb-4">
          Shell scripts automate repetitive tasks by combining Unix commands into executable files.
        </p>
        <h3 className="text-xl font-medium mb-3">Script Structure</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash
# This is a comment
echo "Hello, World!"

# Make executable
chmod +x script.sh

# Run script
./script.sh`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_script_basics": {
    title: "Script Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Script Basics
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash
# Shebang line specifies interpreter

# Print output
echo "Hello"
printf "Formatted %s\n" "text"

# Read input
read -p "Enter name: " name
echo "Hello, $name"

# Exit status
exit 0    # Success
exit 1    # Error

# Access arguments
$0        # Script name
$1, $2    # Arguments
$#        # Number of arguments
$@        # All arguments`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_variables": {
    title: "Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Shell Variables
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Variable assignment (no spaces!)
name="John"
age=25

# Using variables
echo $name
echo "Hello, $name"
echo "Age: ${'${age}'} years"

# Command substitution
today=$(date)
files=$(ls)

# Arithmetic
result=$((5 + 3))
((count++))

# Environment variables
export PATH=$PATH:/new/path
echo $HOME
echo $USER`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_conditionals": {
    title: "Conditionals",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Conditional Statements
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# If statement
if [ condition ]; then
    commands
elif [ condition ]; then
    commands
else
    commands
fi

# Test operators
[ -f file ]     # File exists
[ -d dir ]      # Directory exists
[ -z "$var" ]   # String is empty
[ "$a" = "$b" ] # Strings equal
[ $a -eq $b ]   # Numbers equal
[ $a -gt $b ]   # Greater than

# Example
if [ -f "$file" ]; then
    echo "File exists"
else
    echo "File not found"
fi`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_loops": {
    title: "Loops",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Loop Structures
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# For loop
for i in 1 2 3 4 5; do
    echo $i
done

for file in *.txt; do
    echo "Processing $file"
done

for ((i=0; i<10; i++)); do
    echo $i
done

# While loop
while [ condition ]; do
    commands
done

# Until loop
until [ condition ]; do
    commands
done

# Break and continue
break       # Exit loop
continue    # Skip to next iteration`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_text": {
    title: "Text Processing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Text Processing Tools
        </h2>
        <p className="leading-relaxed mb-4">
          Unix provides powerful text processing tools: grep for searching, sed for editing, and awk for data extraction.
        </p>
        <h3 className="text-xl font-medium mb-3">Overview</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>grep:</strong> Search for patterns in text</li>
          <li><strong>sed:</strong> Stream editor for transforming text</li>
          <li><strong>awk:</strong> Pattern scanning and processing language</li>
        </ul>
      </>
    ),
  },
  "unix_grep": {
    title: "grep Command",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          grep - Pattern Searching
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Basic search
grep "pattern" file.txt

# Common options
grep -i "pattern" file     # Case insensitive
grep -v "pattern" file     # Invert match
grep -n "pattern" file     # Show line numbers
grep -c "pattern" file     # Count matches
grep -r "pattern" dir/     # Recursive search
grep -l "pattern" *.txt    # List matching files

# Regular expressions
grep "^start" file         # Lines starting with
grep "end$" file           # Lines ending with
grep "a.b" file            # Any char between a and b
grep "a*b" file            # Zero or more 'a'
grep -E "a|b" file         # Extended regex (OR)`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_sed": {
    title: "sed Command",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          sed - Stream Editor
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Substitution
sed 's/old/new/' file        # First occurrence
sed 's/old/new/g' file       # All occurrences
sed 's/old/new/gi' file      # Case insensitive

# Edit in place
sed -i 's/old/new/g' file

# Delete lines
sed '5d' file                # Delete line 5
sed '/pattern/d' file        # Delete matching lines

# Print specific lines
sed -n '5p' file             # Print line 5
sed -n '1,10p' file          # Lines 1-10

# Multiple operations
sed -e 's/a/b/' -e 's/c/d/' file`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_awk": {
    title: "awk Command",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          awk - Data Processing
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Print columns
awk '{print $1}' file        # First column
awk '{print $1, $3}' file    # Columns 1 and 3
awk '{print $NF}' file       # Last column

# Field separator
awk -F: '{print $1}' /etc/passwd
awk -F, '{print $2}' data.csv

# Pattern matching
awk '/pattern/ {print}' file
awk '$3 > 100 {print $1}' file

# Built-in variables
# NR - Line number
# NF - Number of fields
# $0 - Entire line

# Example: Sum column
awk '{sum += $1} END {print sum}' file`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_networking": {
    title: "Networking",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Unix Networking
        </h2>
        <p className="leading-relaxed mb-4">
          Unix provides various commands for network configuration, diagnostics, and file transfer.
        </p>
        <h3 className="text-xl font-medium mb-3">Key Commands</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>ping:</strong> Test network connectivity</li>
          <li><strong>ssh:</strong> Secure remote login</li>
          <li><strong>scp:</strong> Secure file copy</li>
          <li><strong>netstat:</strong> Network statistics</li>
          <li><strong>curl:</strong> Transfer data from URLs</li>
        </ul>
      </>
    ),
  },
  "unix_network_cmds": {
    title: "Network Commands",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Network Commands
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Test connectivity
ping hostname
ping -c 4 google.com

# DNS lookup
nslookup domain.com
dig domain.com

# Network configuration
ifconfig
ip addr

# Network connections
netstat -tuln
ss -tuln

# Route information
route -n
ip route

# HTTP requests
curl https://api.example.com
wget https://example.com/file.zip`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_ssh": {
    title: "SSH",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          SSH - Secure Shell
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Connect to remote server
ssh user@hostname
ssh -p 2222 user@hostname

# Generate SSH key
ssh-keygen -t rsa -b 4096

# Copy public key to server
ssh-copy-id user@hostname

# SSH config file (~/.ssh/config)
Host myserver
    HostName 192.168.1.100
    User admin
    Port 22
    IdentityFile ~/.ssh/id_rsa

# Connect using config
ssh myserver

# Run remote command
ssh user@host "ls -la"`}
          </pre>
        </div>
      </>
    ),
  },
  "unix_transfer": {
    title: "File Transfer",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          File Transfer
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# SCP - Secure Copy
scp file.txt user@host:/path/
scp user@host:/path/file.txt ./
scp -r directory/ user@host:/path/

# SFTP - Secure FTP
sftp user@host
# Commands: get, put, ls, cd, pwd

# rsync - Efficient file sync
rsync -avz source/ dest/
rsync -avz source/ user@host:/path/
rsync -avz --delete source/ dest/

# wget - Download files
wget https://example.com/file.zip
wget -O newname.zip https://example.com/file.zip

# curl - Transfer data
curl -O https://example.com/file.zip
curl -o output.txt https://api.example.com`}
          </pre>
        </div>
      </>
    ),
  },
};
