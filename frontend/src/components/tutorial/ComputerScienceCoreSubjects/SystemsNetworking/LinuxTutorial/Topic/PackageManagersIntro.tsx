import React from "react";

const PackageManagersIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Package Managers
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Package managers are tools that automate the process of installing, upgrading,
      configuring, and removing software. They handle dependencies, verify packages,
      and maintain a database of installed software.
    </p>

    <h2 className="text-3xl font-bold mt-8">Package Manager by Distribution</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Distribution</th>
            <th className="p-3 border">Package Manager</th>
            <th className="p-3 border">Package Format</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Debian, Ubuntu, Mint</td>
            <td className="p-3 border font-mono text-gray-900">apt, dpkg</td>
            <td className="p-3 border font-mono text-gray-900">.deb</td>
          </tr>
          <tr>
            <td className="p-3 border">RHEL, CentOS, Fedora</td>
            <td className="p-3 border font-mono text-gray-900">dnf, yum, rpm</td>
            <td className="p-3 border font-mono text-gray-900">.rpm</td>
          </tr>
          <tr>
            <td className="p-3 border">Arch, Manjaro</td>
            <td className="p-3 border font-mono text-gray-900">pacman</td>
            <td className="p-3 border font-mono text-gray-900">.pkg.tar.zst</td>
          </tr>
          <tr>
            <td className="p-3 border">openSUSE</td>
            <td className="p-3 border font-mono text-gray-900">zypper</td>
            <td className="p-3 border font-mono text-gray-900">.rpm</td>
          </tr>
          <tr>
            <td className="p-3 border">Alpine</td>
            <td className="p-3 border font-mono text-gray-900">apk</td>
            <td className="p-3 border font-mono text-gray-900">.apk</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900 text-sm">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Debian/Ubuntu (apt)          # RHEL/Fedora (dnf)           # Arch (pacman)

# Update package list
sudo apt update                 sudo dnf check-update          sudo pacman -Sy

# Upgrade all packages
sudo apt upgrade                sudo dnf upgrade               sudo pacman -Syu

# Install package
sudo apt install vim            sudo dnf install vim           sudo pacman -S vim

# Remove package
sudo apt remove vim             sudo dnf remove vim            sudo pacman -R vim

# Search packages
apt search vim                  dnf search vim                 pacman -Ss vim

# Show package info
apt show vim                    dnf info vim                   pacman -Si vim

# List installed packages
dpkg -l                         rpm -qa                        pacman -Q`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Universal Package Formats</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        Modern Linux also supports universal package formats that work across distributions:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-2">
        <li><strong>Snap:</strong> Developed by Canonical, sandboxed packages</li>
        <li><strong>Flatpak:</strong> Desktop application sandboxing</li>
        <li><strong>AppImage:</strong> Portable, no installation needed</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Package managers handle installation, dependencies, and updates</li>
        <li>Different distributions use different package managers</li>
        <li>Always update package lists before installing new software</li>
        <li>Use official repositories when possible for security</li>
        <li>Universal formats (Snap, Flatpak) provide cross-distribution compatibility</li>
      </ul>
    </div>
  </div>
);

export default PackageManagersIntro;
