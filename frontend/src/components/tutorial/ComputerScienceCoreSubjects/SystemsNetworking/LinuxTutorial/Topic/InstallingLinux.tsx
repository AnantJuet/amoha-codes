import React from "react";

const InstallingLinux: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Installing Linux
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Installing Linux can be done in several ways: as a primary operating system,
      in a dual-boot configuration alongside Windows, in a virtual machine, or using
      Windows Subsystem for Linux (WSL). This guide covers the main installation methods.
    </p>

    <h2 className="text-3xl font-bold mt-8">Installation Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Best For</th>
            <th className="p-3 border">Pros</th>
            <th className="p-3 border">Cons</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Full Installation</td>
            <td className="p-3 border">Dedicated Linux users</td>
            <td className="p-3 border">Best performance</td>
            <td className="p-3 border">Replaces existing OS</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dual Boot</td>
            <td className="p-3 border">Users needing both OS</td>
            <td className="p-3 border">Access to both systems</td>
            <td className="p-3 border">Requires restart to switch</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Virtual Machine</td>
            <td className="p-3 border">Testing, Learning</td>
            <td className="p-3 border">Safe, isolated environment</td>
            <td className="p-3 border">Reduced performance</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">WSL (Windows)</td>
            <td className="p-3 border">Developers on Windows</td>
            <td className="p-3 border">Easy setup, integrated</td>
            <td className="p-3 border">Limited GUI support</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Live USB</td>
            <td className="p-3 border">Testing before installing</td>
            <td className="p-3 border">No changes to system</td>
            <td className="p-3 border">No persistent storage</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pre-Installation Requirements</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Minimum RAM:</strong> 2GB (4GB recommended)</li>
        <li><strong>Disk Space:</strong> 20GB minimum (50GB+ recommended)</li>
        <li><strong>USB Drive:</strong> 8GB+ for bootable media</li>
        <li><strong>Backup:</strong> Always backup important data before installation</li>
        <li><strong>ISO Image:</strong> Download from official distribution website</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Creating Bootable USB</h2>
    <p className="leading-relaxed">
      To install Linux, you need to create a bootable USB drive with the Linux ISO image.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Using dd command on Linux/macOS
# WARNING: Be careful with the device name (/dev/sdX)

# Find your USB device
$ lsblk

# Unmount the USB if mounted
$ sudo umount /dev/sdX

# Write ISO to USB (replace X with your device letter)
$ sudo dd if=ubuntu-24.04-desktop-amd64.iso of=/dev/sdX bs=4M status=progress

# Alternative: Use Etcher (GUI tool)
# Available for Windows, macOS, and Linux`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Recommended Tools for Creating Bootable USB</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Tool</th>
            <th className="p-3 border">Platform</th>
            <th className="p-3 border">Features</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Rufus</td>
            <td className="p-3 border">Windows</td>
            <td className="p-3 border">Fast, supports UEFI/MBR</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Etcher</td>
            <td className="p-3 border">Windows, macOS, Linux</td>
            <td className="p-3 border">Easy to use, validates image</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Ventoy</td>
            <td className="p-3 border">Windows, Linux</td>
            <td className="p-3 border">Boot multiple ISOs from one USB</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">dd</td>
            <td className="p-3 border">Linux, macOS</td>
            <td className="p-3 border">Built-in command line tool</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Installation Steps (Ubuntu Example)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Step 1: Boot from USB
- Insert bootable USB
- Restart computer
- Press F12/F2/Del to enter boot menu
- Select USB drive

Step 2: Try or Install
- Choose "Try Ubuntu" to test without installing
- Choose "Install Ubuntu" to proceed with installation

Step 3: Select Language and Keyboard
- Choose your preferred language
- Select keyboard layout

Step 4: Installation Type
- Normal installation (recommended)
- Minimal installation (basic tools only)
- Check "Install third-party software" for drivers

Step 5: Disk Partitioning
Option A: Erase disk and install (entire disk)
Option B: Install alongside Windows (dual boot)
Option C: Something else (manual partitioning)

Step 6: Set Timezone
- Select your location on the map

Step 7: Create User Account
- Enter your name
- Choose username
- Set password
- Choose hostname

Step 8: Wait for Installation
- Installation typically takes 10-30 minutes

Step 9: Restart
- Remove USB when prompted
- Boot into your new Linux system`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Manual Partition Scheme (Advanced)</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Partition</th>
            <th className="p-3 border">Mount Point</th>
            <th className="p-3 border">Size</th>
            <th className="p-3 border">File System</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">EFI System</td>
            <td className="p-3 border font-mono text-gray-900">/boot/efi</td>
            <td className="p-3 border">512MB - 1GB</td>
            <td className="p-3 border">FAT32</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Root</td>
            <td className="p-3 border font-mono text-gray-900">/</td>
            <td className="p-3 border">30-50GB+</td>
            <td className="p-3 border">ext4</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Swap</td>
            <td className="p-3 border font-mono text-gray-900">swap</td>
            <td className="p-3 border">Equal to RAM</td>
            <td className="p-3 border">swap</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Home</td>
            <td className="p-3 border font-mono text-gray-900">/home</td>
            <td className="p-3 border">Remaining space</td>
            <td className="p-3 border">ext4</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Post-Installation Steps</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Update the system
$ sudo apt update && sudo apt upgrade -y

# Install essential tools
$ sudo apt install build-essential git curl wget vim

# Install multimedia codecs
$ sudo apt install ubuntu-restricted-extras

# Configure firewall
$ sudo ufw enable

# Set up additional software repositories (if needed)
$ sudo add-apt-repository universe
$ sudo add-apt-repository multiverse`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Always backup important data before installing Linux</li>
        <li>Download ISO images only from official distribution websites</li>
        <li>Use tools like Rufus, Etcher, or Ventoy to create bootable USB</li>
        <li>For dual boot, install Windows first, then Linux</li>
        <li>UEFI systems require an EFI System Partition (ESP)</li>
        <li>After installation, update the system and install essential software</li>
      </ul>
    </div>
  </div>
);

export default InstallingLinux;
