import React from "react";

const SnapFlatpak: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Snap and Flatpak
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Snap and Flatpak are universal package formats that work across different
      Linux distributions. They provide sandboxed applications with bundled
      dependencies, ensuring consistent behavior regardless of the host system.
    </p>

    <h2 className="text-3xl font-bold mt-8">Snap (by Canonical)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Install snapd
$ sudo apt install snapd          # Debian/Ubuntu
$ sudo dnf install snapd          # Fedora

# Search for snaps
$ snap find firefox

# Install a snap
$ sudo snap install firefox

# List installed snaps
$ snap list

# Update snaps
$ sudo snap refresh

# Remove a snap
$ sudo snap remove firefox

# Show snap info
$ snap info firefox`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Flatpak</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Install flatpak
$ sudo apt install flatpak        # Debian/Ubuntu
$ sudo dnf install flatpak        # Fedora

# Add Flathub repository
$ flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Search for apps
$ flatpak search firefox

# Install an app
$ flatpak install flathub org.mozilla.firefox

# List installed apps
$ flatpak list

# Update apps
$ flatpak update

# Remove an app
$ flatpak uninstall org.mozilla.firefox

# Run an app
$ flatpak run org.mozilla.firefox`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Snap vs Flatpak Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Snap</th>
            <th className="p-3 border">Flatpak</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Developer</td>
            <td className="p-3 border">Canonical</td>
            <td className="p-3 border">Red Hat / Community</td>
          </tr>
          <tr>
            <td className="p-3 border">Store</td>
            <td className="p-3 border">Snap Store (centralized)</td>
            <td className="p-3 border">Flathub (decentralized)</td>
          </tr>
          <tr>
            <td className="p-3 border">Auto-updates</td>
            <td className="p-3 border">Yes (automatic)</td>
            <td className="p-3 border">Manual or configurable</td>
          </tr>
          <tr>
            <td className="p-3 border">CLI/Server apps</td>
            <td className="p-3 border">Supported</td>
            <td className="p-3 border">Desktop-focused</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Both provide sandboxed, distribution-agnostic packages</li>
        <li>Snap includes automatic background updates</li>
        <li>Flatpak is popular for desktop applications</li>
        <li>Both may have larger package sizes due to bundled dependencies</li>
        <li>Flathub is the main repository for Flatpak apps</li>
      </ul>
    </div>
  </div>
);

export default SnapFlatpak;
