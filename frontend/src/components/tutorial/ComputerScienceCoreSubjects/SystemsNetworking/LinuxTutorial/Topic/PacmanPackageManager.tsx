import React from "react";

const PacmanPackageManager: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Pacman Package Manager
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Pacman is the package manager for Arch Linux and its derivatives like Manjaro
      and EndeavourOS. It combines a simple binary package format with an easy-to-use
      build system for creating packages from source.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Sync database and upgrade system
$ sudo pacman -Syu

# Install a package
$ sudo pacman -S vim

# Remove a package
$ sudo pacman -R vim

# Remove package with dependencies
$ sudo pacman -Rs vim

# Search for package
$ pacman -Ss vim

# Show package info
$ pacman -Si vim

# List installed packages
$ pacman -Q

# Show info about installed package
$ pacman -Qi vim`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pacman Flags Explained</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Flag</th>
            <th className="p-3 border">Meaning</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">-S</td>
            <td className="p-3 border">Sync (install from repos)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-R</td>
            <td className="p-3 border">Remove</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-Q</td>
            <td className="p-3 border">Query (installed packages)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-y</td>
            <td className="p-3 border">Refresh package database</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-u</td>
            <td className="p-3 border">Upgrade</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-s</td>
            <td className="p-3 border">Search</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">AUR (Arch User Repository)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# AUR helpers make installing AUR packages easier
# Install yay (popular AUR helper)
$ git clone https://aur.archlinux.org/yay.git
$ cd yay
$ makepkg -si

# Using yay (same syntax as pacman)
$ yay -S google-chrome
$ yay -Ss spotify`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Always use -Syu to sync and upgrade together</li>
        <li>Use -Rs to remove packages and orphaned dependencies</li>
        <li>AUR provides community-maintained packages</li>
        <li>Use an AUR helper like yay for easier AUR access</li>
        <li>Arch follows a rolling release model</li>
      </ul>
    </div>
  </div>
);

export default PacmanPackageManager;
