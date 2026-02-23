import React from "react";

const AptPackageManager: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      APT Package Manager
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      APT (Advanced Package Tool) is the package management system used by Debian
      and its derivatives like Ubuntu, Linux Mint, and Pop!_OS. It provides a
      high-level interface for managing .deb packages.
    </p>

    <h2 className="text-3xl font-bold mt-8">Updating Package Information</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Update package list (required before installing)
$ sudo apt update

# Upgrade all installed packages
$ sudo apt upgrade

# Full upgrade (may remove packages if needed)
$ sudo apt full-upgrade

# Update and upgrade in one command
$ sudo apt update && sudo apt upgrade -y`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Installing Packages</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Install a package
$ sudo apt install vim

# Install multiple packages
$ sudo apt install vim git curl wget

# Install without prompts
$ sudo apt install -y vim

# Install specific version
$ sudo apt install vim=2:8.2.0-1

# Install local .deb file
$ sudo apt install ./package.deb

# Reinstall a package
$ sudo apt reinstall vim`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Removing Packages</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Remove package (keep config files)
$ sudo apt remove vim

# Remove package and config files
$ sudo apt purge vim

# Remove unused dependencies
$ sudo apt autoremove

# Remove and clean in one step
$ sudo apt purge --autoremove vim`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Searching and Information</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Search for packages
$ apt search vim
$ apt search "text editor"

# Show package information
$ apt show vim

# List installed packages
$ apt list --installed

# List upgradable packages
$ apt list --upgradable

# Show package dependencies
$ apt depends vim

# Show what depends on a package
$ apt rdepends vim`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Managing Repositories</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Add repository
$ sudo add-apt-repository ppa:user/ppa-name
$ sudo apt update

# Remove repository
$ sudo add-apt-repository --remove ppa:user/ppa-name

# Repository configuration files
/etc/apt/sources.list
/etc/apt/sources.list.d/*.list

# List configured repositories
$ grep -r "^deb" /etc/apt/`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Always run apt update before installing packages</li>
        <li>Use apt remove to keep configs, apt purge to remove everything</li>
        <li>Run apt autoremove periodically to clean up dependencies</li>
        <li>Use -y flag to skip confirmation prompts in scripts</li>
        <li>apt is the recommended command (replaces apt-get)</li>
      </ul>
    </div>
  </div>
);

export default AptPackageManager;
