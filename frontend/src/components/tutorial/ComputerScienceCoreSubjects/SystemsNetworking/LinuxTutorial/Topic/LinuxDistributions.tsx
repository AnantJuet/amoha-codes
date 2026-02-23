import React from "react";

const LinuxDistributions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Linux Distributions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Linux distribution (distro) is a complete operating system built around the Linux kernel,
      bundled with software packages, package managers, desktop environments, and system tools.
      Each distribution is customized to serve different needs and user preferences.
    </p>

    <h2 className="text-3xl font-bold mt-8">What Makes a Linux Distribution?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Linux Distribution Components:

+------------------------------------------+
|         Desktop Environment              |
|    (GNOME, KDE, XFCE, etc.)             |
+------------------------------------------+
|         Applications & Software          |
|  (Browsers, Office, Media Players)       |
+------------------------------------------+
|         Package Manager                  |
|    (APT, DNF, Pacman, Zypper)           |
+------------------------------------------+
|         System Libraries & Tools         |
|    (glibc, systemd, etc.)               |
+------------------------------------------+
|           Linux Kernel                   |
+------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Major Distribution Families</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Family</th>
            <th className="p-3 border">Base</th>
            <th className="p-3 border">Package Manager</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Debian-based</td>
            <td className="p-3 border">Debian</td>
            <td className="p-3 border font-mono text-gray-900">apt, dpkg</td>
            <td className="p-3 border">Ubuntu, Linux Mint, Pop!_OS</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Red Hat-based</td>
            <td className="p-3 border">RHEL/Fedora</td>
            <td className="p-3 border font-mono text-gray-900">dnf, yum, rpm</td>
            <td className="p-3 border">CentOS, Fedora, AlmaLinux</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Arch-based</td>
            <td className="p-3 border">Arch Linux</td>
            <td className="p-3 border font-mono text-gray-900">pacman</td>
            <td className="p-3 border">Manjaro, EndeavourOS</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SUSE-based</td>
            <td className="p-3 border">openSUSE</td>
            <td className="p-3 border font-mono text-gray-900">zypper</td>
            <td className="p-3 border">openSUSE Leap, Tumbleweed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Independent</td>
            <td className="p-3 border">Custom</td>
            <td className="p-3 border font-mono text-gray-900">Varies</td>
            <td className="p-3 border">Gentoo, Slackware, NixOS</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Popular Linux Distributions</h2>

    <h3 className="text-2xl font-semibold mt-6">Ubuntu</h3>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-2">
      <p className="leading-relaxed">
        Most popular desktop Linux distribution, based on Debian. Known for user-friendliness
        and extensive community support. Offers LTS (Long Term Support) releases.
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li><strong>Target:</strong> Beginners, Desktop users, Servers</li>
        <li><strong>Package Manager:</strong> APT with dpkg</li>
        <li><strong>Release Cycle:</strong> Every 6 months, LTS every 2 years</li>
      </ul>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Fedora</h3>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-2">
      <p className="leading-relaxed">
        Cutting-edge distribution sponsored by Red Hat. Features latest technologies
        and serves as a testing ground for RHEL features.
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li><strong>Target:</strong> Developers, Tech enthusiasts</li>
        <li><strong>Package Manager:</strong> DNF</li>
        <li><strong>Release Cycle:</strong> Every 6 months</li>
      </ul>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Debian</h3>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-2">
      <p className="leading-relaxed">
        One of the oldest distributions, known for stability and large software repositories.
        Foundation for many other distributions including Ubuntu.
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li><strong>Target:</strong> Servers, Advanced users</li>
        <li><strong>Package Manager:</strong> APT with dpkg</li>
        <li><strong>Release Cycle:</strong> Every 2-3 years (Stable)</li>
      </ul>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Arch Linux</h3>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-2">
      <p className="leading-relaxed">
        Minimalist rolling-release distribution following the KISS principle.
        Requires manual installation and configuration.
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li><strong>Target:</strong> Advanced users, Customization enthusiasts</li>
        <li><strong>Package Manager:</strong> Pacman</li>
        <li><strong>Release Cycle:</strong> Rolling release (continuous updates)</li>
      </ul>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Kali Linux</h3>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-2">
      <p className="leading-relaxed">
        Debian-based distribution designed for penetration testing and security auditing.
        Comes pre-installed with 600+ security tools.
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li><strong>Target:</strong> Security professionals, Ethical hackers</li>
        <li><strong>Package Manager:</strong> APT</li>
        <li><strong>Includes:</strong> Nmap, Metasploit, Wireshark, Burp Suite</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Choosing the Right Distribution</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Use Case</th>
            <th className="p-3 border">Recommended Distros</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Beginners</td>
            <td className="p-3 border">Ubuntu, Linux Mint, Pop!_OS</td>
          </tr>
          <tr>
            <td className="p-3 border">Servers</td>
            <td className="p-3 border">Ubuntu Server, CentOS, Debian, RHEL</td>
          </tr>
          <tr>
            <td className="p-3 border">Development</td>
            <td className="p-3 border">Fedora, Ubuntu, Arch Linux</td>
          </tr>
          <tr>
            <td className="p-3 border">Security Testing</td>
            <td className="p-3 border">Kali Linux, Parrot OS</td>
          </tr>
          <tr>
            <td className="p-3 border">Old Hardware</td>
            <td className="p-3 border">Lubuntu, Puppy Linux, AntiX</td>
          </tr>
          <tr>
            <td className="p-3 border">Enterprise</td>
            <td className="p-3 border">RHEL, SUSE Enterprise, Ubuntu LTS</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>A Linux distribution combines the Linux kernel with software and tools</li>
        <li>Major families include Debian-based, Red Hat-based, and Arch-based distros</li>
        <li>Ubuntu is the most popular for beginners and desktop users</li>
        <li>Debian-based distros use APT, Red Hat-based use DNF/YUM, Arch uses Pacman</li>
        <li>Choose a distro based on your use case, experience level, and hardware</li>
        <li>Over 600 Linux distributions exist, each serving different purposes</li>
      </ul>
    </div>
  </div>
);

export default LinuxDistributions;
