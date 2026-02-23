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
  { label: "Git Home", href: "git_home" },
  { label: "Git Intro", href: "git_intro" },
  { label: "Git Installation", href: "git_installation" },
  { label: "Git Config", href: "git_config" },
  {
    label: "Git Basics",
    href: "git_basics",
    isHeader: true,
    children: [
      { label: "Git Init", href: "git_init" },
      { label: "Git Clone", href: "git_clone" },
      { label: "Git Add (Staging)", href: "git_staging" },
      { label: "Git Commit", href: "git_commit" },
      { label: "Git Status", href: "git_status" },
    ],
  },
  {
    label: "Branching & Merging",
    href: "git_branching",
    isHeader: true,
    children: [
      { label: "Git Branch", href: "git_branch" },
      { label: "Git Checkout", href: "git_checkout" },
      { label: "Git Merge", href: "git_merge" },
      { label: "Merge Conflicts", href: "git_merge_conflicts" },
    ],
  },
  {
    label: "Remote Repositories",
    href: "git_remote",
    isHeader: true,
    children: [
      { label: "Git Remote", href: "git_remote_cmd" },
      { label: "Git Push", href: "git_push" },
      { label: "Git Pull", href: "git_pull" },
      { label: "Git Fetch", href: "git_fetch" },
    ],
  },
  {
    label: "Git History",
    href: "git_history",
    isHeader: true,
    children: [
      { label: "Git Log", href: "git_log" },
      { label: "Git Diff", href: "git_diff" },
      { label: "Git Reset", href: "git_reset" },
      { label: "Git Revert", href: "git_revert" },
    ],
  },
  {
    label: "Advanced Git",
    href: "git_advanced",
    isHeader: true,
    children: [
      { label: "Git Stash", href: "git_stash" },
      { label: "Git Rebase", href: "git_rebase" },
      { label: "Git Cherry-Pick", href: "git_cherry_pick" },
      { label: "Git Tags", href: "git_tags" },
    ],
  },
  { label: "Git Flow", href: "git_flow" },
  { label: "Best Practices", href: "git_best_practices" },
];

export const tutorialContent: Record<string, TopicContent> = {
  "git_home": {
    title: "Git Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Learn Git
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>Git</strong> is the world's most popular version control system.
        </p>
        <p className="leading-relaxed mb-4">
          Git tracks changes in your code and allows multiple developers to work together on projects.
        </p>
        <p className="leading-relaxed mb-4">
          Git is essential for modern software development and is used by millions of developers worldwide.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">What You Will Learn</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>How to set up and configure Git</li>
          <li>Basic Git commands (init, add, commit, push, pull)</li>
          <li>Working with branches and merging</li>
          <li>Collaborating with remote repositories</li>
          <li>Advanced features like stashing and rebasing</li>
          <li>Git Flow and best practices</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Example: Basic Git Workflow</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Initialize a new repository
git init

# Add files to staging
git add .

# Commit changes
git commit -m "Initial commit"

# Push to remote
git push origin main`}
          </pre>
        </div>
      </>
    ),
  },

  "git_intro": {
    title: "Introduction to Git",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          What is Git?
        </h2>
        <p className="leading-relaxed mb-4">
          Git is a <strong>distributed version control system</strong> created by Linus Torvalds in 2005.
        </p>
        <p className="leading-relaxed mb-4">
          It was originally developed to manage the Linux kernel source code and has since become the standard for version control.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Why Use Git?</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Track Changes:</strong> Keep a complete history of all modifications</li>
          <li><strong>Collaboration:</strong> Multiple developers can work on the same project</li>
          <li><strong>Branching:</strong> Create separate lines of development</li>
          <li><strong>Backup:</strong> Your code is stored in multiple locations</li>
          <li><strong>Rollback:</strong> Easily revert to previous versions</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Git vs Other VCS</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-purple-100 dark:bg-purple-900">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Feature</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Git</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">SVN</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Mercurial</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Type</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Distributed</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Centralized</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Distributed</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Speed</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Very Fast</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Slower</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fast</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Branching</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Lightweight</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Heavy</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Lightweight</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Key Concepts</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Repository:</strong> A folder that Git tracks</li>
          <li><strong>Commit:</strong> A snapshot of your changes</li>
          <li><strong>Branch:</strong> An independent line of development</li>
          <li><strong>Remote:</strong> A version of your repo hosted elsewhere</li>
        </ul>
      </>
    ),
  },

  "git_installation": {
    title: "Git Installation",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Installing Git
        </h2>
        <p className="leading-relaxed mb-4">
          Git can be installed on Windows, macOS, and Linux systems.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Windows Installation</h3>
        <ol className="list-decimal list-inside ml-4 mb-4 space-y-2">
          <li>Download Git from <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">https://git-scm.com</code></li>
          <li>Run the installer and follow the prompts</li>
          <li>Choose default options or customize as needed</li>
          <li>Open Git Bash or Command Prompt to verify</li>
        </ol>

        <h3 className="text-xl font-medium mb-3 mt-8">macOS Installation</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Using Homebrew
brew install git

# Or download from git-scm.com`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Linux Installation</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Debian/Ubuntu
sudo apt-get update
sudo apt-get install git

# Fedora
sudo dnf install git

# Arch Linux
sudo pacman -S git`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Verify Installation</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`git --version
# Output: git version 2.43.0`}
          </pre>
        </div>
      </>
    ),
  },

  "git_config": {
    title: "Git Configuration",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Configuring Git
        </h2>
        <p className="leading-relaxed mb-4">
          After installing Git, you need to configure your identity and preferences.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Setting Your Identity</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Set your name
git config --global user.name "Your Name"

# Set your email
git config --global user.email "your.email@example.com"`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Configuration Levels</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-purple-100 dark:bg-purple-900">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Level</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Flag</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Scope</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">System</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">--system</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">All users on the system</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Global</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">--global</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Current user (all repos)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Local</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">--local</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Current repository only</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Useful Configurations</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Set default branch name
git config --global init.defaultBranch main

# Set default editor
git config --global core.editor "code --wait"

# Enable colored output
git config --global color.ui auto

# View all configurations
git config --list`}
          </pre>
        </div>
      </>
    ),
  },

  "git_init": {
    title: "Git Init",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Init - Initialize a Repository
        </h2>
        <p className="leading-relaxed mb-4">
          The <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">git init</code> command creates a new Git repository.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Basic Usage</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Navigate to your project folder
cd my-project

# Initialize a new Git repository
git init

# Output: Initialized empty Git repository in /path/to/my-project/.git/`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">What Happens?</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Creates a hidden <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">.git</code> folder</li>
          <li>This folder contains all Git tracking information</li>
          <li>Your project files remain unchanged</li>
          <li>The repository starts with no commits</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Initialize with a Specific Branch</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Initialize with 'main' as default branch
git init -b main

# Or initialize and rename branch
git init
git branch -m master main`}
          </pre>
        </div>
      </>
    ),
  },

  "git_clone": {
    title: "Git Clone",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Clone - Copy a Repository
        </h2>
        <p className="leading-relaxed mb-4">
          The <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">git clone</code> command copies an existing repository.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Basic Cloning</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Clone via HTTPS
git clone https://github.com/user/repository.git

# Clone via SSH
git clone git@github.com:user/repository.git

# Clone into a specific folder
git clone https://github.com/user/repository.git my-folder`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Clone Options</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Shallow clone (only recent history)
git clone --depth 1 https://github.com/user/repo.git

# Clone a specific branch
git clone -b develop https://github.com/user/repo.git

# Clone without checking out files
git clone --no-checkout https://github.com/user/repo.git`}
          </pre>
        </div>
      </>
    ),
  },

  "git_staging": {
    title: "Git Staging (Add)",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Add - Staging Changes
        </h2>
        <p className="leading-relaxed mb-4">
          The <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">git add</code> command adds changes to the staging area.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">The Staging Area</h3>
        <p className="leading-relaxed mb-4">
          The staging area is an intermediate step between your working directory and the repository.
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
          <p className="font-mono text-sm">
            Working Directory → <strong>Staging Area</strong> → Repository
          </p>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Staging Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Stage a specific file
git add filename.txt

# Stage multiple files
git add file1.txt file2.txt

# Stage all changes in current directory
git add .

# Stage all changes in repository
git add -A

# Stage only modified files (not new)
git add -u

# Interactive staging
git add -p`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Unstaging Files</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Unstage a file
git reset HEAD filename.txt

# Or using restore (Git 2.23+)
git restore --staged filename.txt`}
          </pre>
        </div>
      </>
    ),
  },

  "git_commit": {
    title: "Git Commit",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Commit - Save Changes
        </h2>
        <p className="leading-relaxed mb-4">
          The <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">git commit</code> command saves staged changes to the repository.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Basic Commit</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Commit with a message
git commit -m "Add new feature"

# Commit with multi-line message
git commit -m "Title" -m "Description"

# Open editor for message
git commit`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Commit Options</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Stage and commit all tracked files
git commit -am "Update files"

# Amend the last commit
git commit --amend

# Amend without changing message
git commit --amend --no-edit`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Good Commit Messages</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Use present tense: "Add feature" not "Added feature"</li>
          <li>Keep the first line under 50 characters</li>
          <li>Add details in the body if needed</li>
          <li>Reference issue numbers when applicable</li>
        </ul>
      </>
    ),
  },

  "git_status": {
    title: "Git Status",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Status - Check Repository State
        </h2>
        <p className="leading-relaxed mb-4">
          The <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">git status</code> command shows the state of your working directory and staging area.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Basic Usage</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`git status

# Short format
git status -s

# Show branch info
git status -b`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Understanding the Output</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-purple-100 dark:bg-purple-900">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Symbol</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">??</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Untracked file</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">A</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Added (staged)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">M</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Modified</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">D</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Deleted</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">R</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Renamed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "git_branch": {
    title: "Git Branch",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Branch - Manage Branches
        </h2>
        <p className="leading-relaxed mb-4">
          Branches allow you to develop features, fix bugs, or experiment in isolation.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Branch Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# List all branches
git branch

# List remote branches
git branch -r

# List all branches (local and remote)
git branch -a

# Create a new branch
git branch feature-name

# Delete a branch
git branch -d feature-name

# Force delete
git branch -D feature-name

# Rename current branch
git branch -m new-name`}
          </pre>
        </div>
      </>
    ),
  },

  "git_checkout": {
    title: "Git Checkout",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Checkout - Switch Branches
        </h2>
        <p className="leading-relaxed mb-4">
          The <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">git checkout</code> command switches branches or restores files.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Switching Branches</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Switch to existing branch
git checkout feature-branch

# Create and switch to new branch
git checkout -b new-feature

# Switch to previous branch
git checkout -

# Modern alternative (Git 2.23+)
git switch feature-branch
git switch -c new-feature`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Restoring Files</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Discard changes in a file
git checkout -- filename.txt

# Restore file from specific commit
git checkout abc123 -- filename.txt

# Modern alternative
git restore filename.txt`}
          </pre>
        </div>
      </>
    ),
  },

  "git_merge": {
    title: "Git Merge",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Merge - Combine Branches
        </h2>
        <p className="leading-relaxed mb-4">
          The <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">git merge</code> command combines changes from different branches.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Basic Merge</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# First, switch to target branch
git checkout main

# Merge feature branch into main
git merge feature-branch

# Merge with commit message
git merge feature-branch -m "Merge feature"`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Merge Types</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Fast-forward:</strong> Linear history, no merge commit</li>
          <li><strong>Three-way:</strong> Creates a merge commit</li>
          <li><strong>Squash:</strong> Combines all commits into one</li>
        </ul>

        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# No fast-forward (always create merge commit)
git merge --no-ff feature-branch

# Squash merge
git merge --squash feature-branch`}
          </pre>
        </div>
      </>
    ),
  },

  "git_merge_conflicts": {
    title: "Merge Conflicts",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Resolving Merge Conflicts
        </h2>
        <p className="leading-relaxed mb-4">
          Conflicts occur when Git cannot automatically merge changes.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Conflict Markers</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> feature-branch`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Resolving Conflicts</h3>
        <ol className="list-decimal list-inside ml-4 mb-4 space-y-2">
          <li>Open the conflicted file</li>
          <li>Find and edit conflict markers</li>
          <li>Remove the markers and keep desired code</li>
          <li>Stage the resolved file</li>
          <li>Complete the merge with a commit</li>
        </ol>

        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# After manually resolving conflicts
git add resolved-file.txt
git commit -m "Resolve merge conflicts"

# Abort a merge
git merge --abort`}
          </pre>
        </div>
      </>
    ),
  },

  "git_remote_cmd": {
    title: "Git Remote",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Remote - Manage Remote Repositories
        </h2>
        <p className="leading-relaxed mb-4">
          Remote repositories are versions of your project hosted on the internet or network.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Remote Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# List remotes
git remote
git remote -v

# Add a remote
git remote add origin https://github.com/user/repo.git

# Remove a remote
git remote remove origin

# Rename a remote
git remote rename origin upstream

# Show remote details
git remote show origin

# Change remote URL
git remote set-url origin https://github.com/user/new-repo.git`}
          </pre>
        </div>
      </>
    ),
  },

  "git_push": {
    title: "Git Push",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Push - Upload Changes
        </h2>
        <p className="leading-relaxed mb-4">
          The <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">git push</code> command uploads local commits to a remote repository.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Push Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Push to remote
git push origin main

# Push and set upstream
git push -u origin main

# Push all branches
git push --all

# Push tags
git push --tags

# Force push (use with caution!)
git push --force`}
          </pre>
        </div>
      </>
    ),
  },

  "git_pull": {
    title: "Git Pull",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Pull - Download Changes
        </h2>
        <p className="leading-relaxed mb-4">
          The <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">git pull</code> command fetches and merges remote changes.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Pull Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Pull from remote
git pull origin main

# Pull with rebase
git pull --rebase origin main

# Pull all branches
git pull --all`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Pull vs Fetch</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>git pull:</strong> Fetches AND merges automatically</li>
          <li><strong>git fetch:</strong> Only downloads, no merge</li>
        </ul>
      </>
    ),
  },

  "git_fetch": {
    title: "Git Fetch",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Fetch - Download Without Merging
        </h2>
        <p className="leading-relaxed mb-4">
          The <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">git fetch</code> command downloads changes without merging.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Fetch Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Fetch from origin
git fetch origin

# Fetch all remotes
git fetch --all

# Fetch and prune deleted branches
git fetch --prune

# View fetched changes
git log origin/main

# Merge after fetch
git merge origin/main`}
          </pre>
        </div>
      </>
    ),
  },

  "git_log": {
    title: "Git Log",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Log - View Commit History
        </h2>
        <p className="leading-relaxed mb-4">
          The <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">git log</code> command shows commit history.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Log Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Basic log
git log

# One line per commit
git log --oneline

# Show graph
git log --graph --oneline

# Limit number of commits
git log -n 5

# Search by author
git log --author="John"

# Search by message
git log --grep="fix"

# Show changes
git log -p

# Pretty format
git log --pretty=format:"%h - %an: %s"`}
          </pre>
        </div>
      </>
    ),
  },

  "git_diff": {
    title: "Git Diff",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Diff - Compare Changes
        </h2>
        <p className="leading-relaxed mb-4">
          The <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">git diff</code> command shows differences between commits, branches, or files.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Diff Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Unstaged changes
git diff

# Staged changes
git diff --staged

# Between commits
git diff abc123 def456

# Between branches
git diff main feature-branch

# Specific file
git diff filename.txt

# Summary only
git diff --stat`}
          </pre>
        </div>
      </>
    ),
  },

  "git_reset": {
    title: "Git Reset",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Reset - Undo Changes
        </h2>
        <p className="leading-relaxed mb-4">
          The <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">git reset</code> command undoes changes by moving HEAD.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Reset Modes</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-purple-100 dark:bg-purple-900">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Mode</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Staging</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Working Dir</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">--soft</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Preserved</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Preserved</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">--mixed</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Reset</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Preserved</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">--hard</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Reset</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Reset</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Soft reset - keep changes staged
git reset --soft HEAD~1

# Mixed reset (default)
git reset HEAD~1

# Hard reset - discard all changes
git reset --hard HEAD~1`}
          </pre>
        </div>
      </>
    ),
  },

  "git_revert": {
    title: "Git Revert",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Revert - Safe Undo
        </h2>
        <p className="leading-relaxed mb-4">
          The <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">git revert</code> command creates a new commit that undoes changes.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Revert Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Revert a specific commit
git revert abc123

# Revert without committing
git revert --no-commit abc123

# Revert multiple commits
git revert HEAD~3..HEAD`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Reset vs Revert</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Reset:</strong> Rewrites history (dangerous for shared branches)</li>
          <li><strong>Revert:</strong> Creates new commit (safe for shared branches)</li>
        </ul>
      </>
    ),
  },

  "git_stash": {
    title: "Git Stash",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Stash - Temporarily Save Changes
        </h2>
        <p className="leading-relaxed mb-4">
          The <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">git stash</code> command temporarily stores uncommitted changes.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Stash Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Stash changes
git stash

# Stash with message
git stash save "Work in progress"

# List stashes
git stash list

# Apply latest stash
git stash apply

# Apply and remove stash
git stash pop

# Apply specific stash
git stash apply stash@{2}

# Drop a stash
git stash drop stash@{0}

# Clear all stashes
git stash clear

# Show stash contents
git stash show -p stash@{0}`}
          </pre>
        </div>
      </>
    ),
  },

  "git_rebase": {
    title: "Git Rebase",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Rebase - Reapply Commits
        </h2>
        <p className="leading-relaxed mb-4">
          The <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">git rebase</code> command reapplies commits on top of another base.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Basic Rebase</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Rebase current branch onto main
git rebase main

# Interactive rebase
git rebase -i HEAD~3

# Continue after resolving conflicts
git rebase --continue

# Abort rebase
git rebase --abort`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Merge vs Rebase</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Merge:</strong> Preserves history, creates merge commits</li>
          <li><strong>Rebase:</strong> Linear history, rewrites commits</li>
        </ul>

        <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 p-4 mb-4">
          <p className="font-semibold">Warning:</p>
          <p>Never rebase commits that have been pushed to a shared repository!</p>
        </div>
      </>
    ),
  },

  "git_cherry_pick": {
    title: "Git Cherry-Pick",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Cherry-Pick - Apply Specific Commits
        </h2>
        <p className="leading-relaxed mb-4">
          The <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">git cherry-pick</code> command applies specific commits from one branch to another.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Cherry-Pick Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Cherry-pick a commit
git cherry-pick abc123

# Cherry-pick without committing
git cherry-pick --no-commit abc123

# Cherry-pick a range
git cherry-pick abc123..def456`}
          </pre>
        </div>
      </>
    ),
  },

  "git_tags": {
    title: "Git Tags",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Tags - Mark Important Points
        </h2>
        <p className="leading-relaxed mb-4">
          Tags are used to mark specific points in history, typically for releases.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Tag Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# List tags
git tag

# Create lightweight tag
git tag v1.0.0

# Create annotated tag
git tag -a v1.0.0 -m "Version 1.0.0"

# Tag a specific commit
git tag v1.0.0 abc123

# Push tags
git push origin v1.0.0
git push origin --tags

# Delete tag
git tag -d v1.0.0`}
          </pre>
        </div>
      </>
    ),
  },

  "git_flow": {
    title: "Git Flow",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Flow - Branching Model
        </h2>
        <p className="leading-relaxed mb-4">
          Git Flow is a branching model that defines a strict branching structure for projects.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Branch Types</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-purple-100 dark:bg-purple-900">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Branch</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">main</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Production-ready code</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">develop</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Integration branch</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">feature/*</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">New features</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">release/*</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Release preparation</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">hotfix/*</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Emergency fixes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Git Flow Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Initialize git flow
git flow init

# Start a feature
git flow feature start my-feature

# Finish a feature
git flow feature finish my-feature

# Start a release
git flow release start 1.0.0

# Finish a release
git flow release finish 1.0.0`}
          </pre>
        </div>
      </>
    ),
  },

  "git_best_practices": {
    title: "Git Best Practices",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Git Best Practices
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Commit Best Practices</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Write clear, concise commit messages</li>
          <li>Make small, focused commits</li>
          <li>Commit related changes together</li>
          <li>Test before committing</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Branch Best Practices</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Use descriptive branch names</li>
          <li>Keep branches short-lived</li>
          <li>Delete merged branches</li>
          <li>Pull regularly from main</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Collaboration Best Practices</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Pull before push</li>
          <li>Use pull requests for code review</li>
          <li>Never force push to shared branches</li>
          <li>Keep the main branch stable</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">.gitignore Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Dependencies
node_modules/
vendor/

# Build outputs
dist/
build/

# Environment files
.env
.env.local

# IDE files
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db`}
          </pre>
        </div>
      </>
    ),
  },
};
