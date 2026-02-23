import React from "react";

const YumDnfPackageManager: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      YUM and DNF Package Managers
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      YUM (Yellowdog Updater Modified) and DNF (Dandified YUM) are package managers
      for RPM-based distributions like RHEL, CentOS, Fedora, and AlmaLinux.
      DNF is the next-generation version of YUM with improved performance.
    </p>

    <h2 className="text-3xl font-bold mt-8">DNF Commands (Modern)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Check for updates
$ sudo dnf check-update

# Upgrade all packages
$ sudo dnf upgrade

# Install a package
$ sudo dnf install vim

# Remove a package
$ sudo dnf remove vim

# Search for packages
$ dnf search vim

# Show package info
$ dnf info vim

# List installed packages
$ dnf list installed

# Clean cache
$ sudo dnf clean all`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">YUM Commands (Legacy)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Most commands are the same, just replace dnf with yum
$ sudo yum update           # Same as dnf upgrade
$ sudo yum install vim
$ sudo yum remove vim
$ yum search vim
$ yum info vim`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Managing Repositories</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# List repositories
$ dnf repolist
$ dnf repolist all          # Include disabled

# Enable/disable repository
$ sudo dnf config-manager --enable repo-name
$ sudo dnf config-manager --disable repo-name

# Add EPEL repository (CentOS/RHEL)
$ sudo dnf install epel-release

# Repository config files
/etc/yum.repos.d/*.repo`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>DNF is the modern replacement for YUM (Fedora 22+, RHEL 8+)</li>
        <li>Most YUM commands work with DNF</li>
        <li>Use dnf upgrade instead of dnf update (same result)</li>
        <li>EPEL provides extra packages for RHEL/CentOS</li>
        <li>DNF has better dependency resolution and performance</li>
      </ul>
    </div>
  </div>
);

export default YumDnfPackageManager;
