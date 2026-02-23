import React from 'react';

const BootingProcess: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Booting Process
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Booting is the process of starting a computer from a powered-off state until the operating system
      is loaded and ready for user interaction. Understanding the boot process is essential for system
      administrators and developers working on system-level software.
    </p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">What is Booting?</h2>
    <p className="leading-relaxed">
      Booting (derived from "bootstrapping") refers to the sequence of operations that initializes the
      computer hardware and loads the operating system. The term comes from the phrase "pulling oneself
      up by one's bootstraps," as the computer must essentially start itself.
    </p>

    {/* Types of Booting */}
    <h2 className="text-3xl font-bold mt-8">Types of Booting</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Cold Boot (Hard Boot):</strong> Starting the computer from a completely powered-off state.
        All hardware is initialized from scratch, and RAM contents are lost.
      </li>
      <li>
        <strong>Warm Boot (Soft Boot):</strong> Restarting the computer without turning off power (e.g.,
        pressing Ctrl+Alt+Del or clicking "Restart"). Some hardware initialization may be skipped.
      </li>
    </ul>

    {/* Boot Process Steps */}
    <h2 className="text-3xl font-bold mt-8">Steps in the Boot Process</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Power-On Self-Test (POST)</h3>
    <p className="leading-relaxed">
      When power is applied, the CPU begins executing code from a fixed memory address (usually in ROM/flash).
      POST performs hardware diagnostics:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Checks CPU registers and flags</li>
      <li>Tests RAM integrity</li>
      <li>Verifies timer and interrupt controller</li>
      <li>Initializes video display</li>
      <li>Detects and tests connected devices</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. BIOS/UEFI Initialization</h3>
    <p className="leading-relaxed">
      The firmware (BIOS or UEFI) initializes system hardware and provides basic services:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Initializes and configures hardware devices</li>
      <li>Sets up interrupt vector table</li>
      <li>Detects bootable devices</li>
      <li>Provides hardware abstraction layer</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">3. Boot Device Selection</h3>
    <p className="leading-relaxed">
      The firmware searches for a bootable device according to the configured boot order. Bootable media include:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Hard disk drive (HDD/SSD)</li>
      <li>USB flash drive</li>
      <li>CD/DVD drive</li>
      <li>Network boot (PXE)</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">4. Master Boot Record (MBR) / GUID Partition Table (GPT)</h3>
    <p className="leading-relaxed">
      The firmware reads the first sector of the boot device:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li><strong>MBR (Legacy):</strong> 512-byte sector containing partition table and boot code</li>
      <li><strong>GPT (Modern):</strong> More flexible partition scheme used with UEFI</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">5. Boot Loader Execution</h3>
    <p className="leading-relaxed">
      The boot loader is a small program that loads the operating system kernel:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li><strong>GRUB:</strong> Common Linux boot loader supporting multiple OS</li>
      <li><strong>Windows Boot Manager:</strong> Loads Windows operating system</li>
      <li><strong>LILO:</strong> Legacy Linux boot loader</li>
    </ul>
    <p className="leading-relaxed mt-2">
      The boot loader performs these functions:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Presents boot menu (if multiple OS installed)</li>
      <li>Loads kernel image into memory</li>
      <li>Passes boot parameters to the kernel</li>
      <li>Transfers control to the kernel</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">6. Kernel Loading</h3>
    <p className="leading-relaxed">
      The kernel takes control and initializes the operating system:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Decompresses kernel if compressed</li>
      <li>Sets up memory management (paging tables)</li>
      <li>Initializes kernel data structures</li>
      <li>Probes and initializes hardware drivers</li>
      <li>Mounts root file system</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">7. Init Process</h3>
    <p className="leading-relaxed">
      The kernel starts the first user-space process (init/systemd):
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Process ID (PID) 1</li>
      <li>Parent of all other user processes</li>
      <li>Runs startup scripts</li>
      <li>Starts system services</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">8. System Services and Login</h3>
    <p className="leading-relaxed">
      The init system starts required services:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Network services</li>
      <li>Display manager (GUI login)</li>
      <li>Background daemons</li>
      <li>Login prompt or graphical login screen</li>
    </ul>

    {/* BIOS vs UEFI */}
    <h2 className="text-3xl font-bold mt-8">BIOS vs UEFI</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">BIOS</th>
            <th className="p-3 border">UEFI</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Interface</td>
            <td className="p-3 border">Text-based</td>
            <td className="p-3 border">Graphical</td>
          </tr>
          <tr>
            <td className="p-3 border">Partition Scheme</td>
            <td className="p-3 border">MBR</td>
            <td className="p-3 border">GPT</td>
          </tr>
          <tr>
            <td className="p-3 border">Disk Size Support</td>
            <td className="p-3 border">Up to 2TB</td>
            <td className="p-3 border">Over 2TB</td>
          </tr>
          <tr>
            <td className="p-3 border">Boot Speed</td>
            <td className="p-3 border">Slower</td>
            <td className="p-3 border">Faster</td>
          </tr>
          <tr>
            <td className="p-3 border">Security</td>
            <td className="p-3 border">Basic</td>
            <td className="p-3 border">Secure Boot</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Boot process bridges hardware initialization and OS execution</li>
      <li>Modern systems use UEFI with faster boot times and security features</li>
      <li>The boot loader enables multi-boot configurations</li>
      <li>Init/systemd is the ancestor of all user processes</li>
    </ul>
  </div>
);

export default BootingProcess;
