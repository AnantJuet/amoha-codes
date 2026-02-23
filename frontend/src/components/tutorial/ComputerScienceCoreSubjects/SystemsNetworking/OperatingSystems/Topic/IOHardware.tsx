import React from 'react';

const IOHardware: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      I/O Hardware
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      I/O (Input/Output) hardware encompasses all the physical components that enable a computer
      system to communicate with the outside world. This includes devices for data input, output,
      and storage, along with the infrastructure that connects them to the CPU and memory.
    </p>

    {/* I/O System Architecture */}
    <h2 className="text-3xl font-bold mt-8">I/O System Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
I/O System Architecture Overview:

┌─────────────────────────────────────────────────────────────────────┐
│                              CPU                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │   ALU    │  │ Control  │  │ Registers│  │  Cache   │            │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘            │
└───────────────────────────┬─────────────────────────────────────────┘
                            │
                    ┌───────▼───────┐
                    │   System Bus   │
                    │ (Address/Data/ │
                    │   Control)     │
                    └───────┬───────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│    Memory     │   │    I/O Bus    │   │   Graphics    │
│  Controller   │   │   Interface   │   │  Controller   │
└───────┬───────┘   └───────┬───────┘   └───────┬───────┘
        │                   │                   │
        ▼                   ▼                   ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│     RAM       │   │   I/O Bus     │   │   Display     │
│               │   │  (PCIe/USB)   │   │               │
└───────────────┘   └───────┬───────┘   └───────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│    Storage    │   │   Network     │   │   USB Hub     │
│  Controller   │   │   Interface   │   │               │
│    (SATA)     │   │   (NIC)       │   │               │
└───────┬───────┘   └───────┬───────┘   └───────┬───────┘
        │                   │                   │
        ▼                   ▼                   ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│  HDD / SSD    │   │   Ethernet    │   │   Keyboard,   │
│               │   │   Cable       │   │   Mouse, etc  │
└───────────────┘   └───────────────┘   └───────────────┘
`}
      </pre>
    </div>

    {/* I/O Devices Classification */}
    <h2 className="text-3xl font-bold mt-8">Classification of I/O Devices</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Block Devices</td>
            <td className="p-3 border">Store and transfer data in fixed-size blocks</td>
            <td className="p-3 border">Hard drives, SSDs, USB drives</td>
          </tr>
          <tr>
            <td className="p-3 border">Character Devices</td>
            <td className="p-3 border">Transfer data one character at a time</td>
            <td className="p-3 border">Keyboard, mouse, serial ports</td>
          </tr>
          <tr>
            <td className="p-3 border">Network Devices</td>
            <td className="p-3 border">Send and receive data packets</td>
            <td className="p-3 border">Ethernet card, WiFi adapter</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Buses */}
    <h2 className="text-3xl font-bold mt-8">Buses in Computer Systems</h2>
    <p className="leading-relaxed">
      A bus is a communication pathway that connects different components of a computer. It consists
      of multiple lines that carry data, addresses, and control signals.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Bus Architecture:

┌───────────────────────────────────────────────────────────────────┐
│                         System Bus                                 │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │                    Data Bus (32/64 bits)                    │  │
│  │  ═══════════════════════════════════════════════════════    │  │
│  │  Bidirectional: Carries actual data between components      │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │                   Address Bus (32/64 bits)                  │  │
│  │  ─────────────────────────────────────────────────────────► │  │
│  │  Unidirectional: Carries memory addresses from CPU          │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │                     Control Bus                             │  │
│  │  ◄─────────────────────────────────────────────────────────►│  │
│  │  Carries control signals: Read/Write, IRQ, Clock, etc.      │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Bus Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Buses</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Bus Type</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Speed</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">System Bus (Front Side Bus)</td>
            <td className="p-3 border">Connects CPU to memory and chipset</td>
            <td className="p-3 border">Very High</td>
            <td className="p-3 border">QPI, HyperTransport</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Bus</td>
            <td className="p-3 border">Connects memory controller to RAM</td>
            <td className="p-3 border">Very High</td>
            <td className="p-3 border">DDR4, DDR5</td>
          </tr>
          <tr>
            <td className="p-3 border">Expansion Bus</td>
            <td className="p-3 border">Connects peripheral devices</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">PCIe, PCI</td>
          </tr>
          <tr>
            <td className="p-3 border">I/O Bus</td>
            <td className="p-3 border">Connects slower peripherals</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">USB, SATA</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* I/O Controllers */}
    <h2 className="text-3xl font-bold mt-8">I/O Controllers (Device Controllers)</h2>
    <p className="leading-relaxed">
      An I/O controller is an electronic component that acts as an interface between the CPU
      and an I/O device. It handles the low-level details of device communication.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Device Controller Structure:

┌─────────────────────────────────────────────────────────────┐
│                    Device Controller                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              Control/Status Register                  │  │
│  │  ┌─────────┬─────────┬─────────┬─────────┬─────────┐  │  │
│  │  │  Busy   │  Done   │  Error  │  IRQ    │  Mode   │  │  │
│  │  │  Bit    │  Bit    │  Bit    │  Enable │  Bits   │  │  │
│  │  └─────────┴─────────┴─────────┴─────────┴─────────┘  │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                   Data Register                       │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │     Data Buffer (for data transfer)             │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │               Command Register                        │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │   Read, Write, Seek, Format, etc.               │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              Controller Electronics                   │  │
│  │  - Microcontroller or ASIC                           │  │
│  │  - Signal conversion logic                           │  │
│  │  - Error detection/correction                        │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
           │                                    │
           │ To System Bus                      │ To Device
           ▼                                    ▼
      ┌─────────┐                        ┌───────────────┐
      │   CPU   │                        │   Physical    │
      │         │                        │    Device     │
      └─────────┘                        └───────────────┘
`}
      </pre>
    </div>

    {/* I/O Ports */}
    <h2 className="text-3xl font-bold mt-8">I/O Ports</h2>
    <p className="leading-relaxed">
      An I/O port is a set of registers that allow the CPU to communicate with a device controller.
      Each port has a unique address in the I/O address space.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
I/O Port Addressing:

Method 1: Port-Mapped I/O (Isolated I/O)
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   CPU uses special I/O instructions:                        │
│   - IN  port, register    (read from port)                  │
│   - OUT port, register    (write to port)                   │
│                                                             │
│   ┌─────────────────────┐    ┌─────────────────────┐       │
│   │  Memory Address     │    │   I/O Address       │       │
│   │  Space              │    │   Space             │       │
│   │  0x00000000 -       │    │   0x0000 - 0xFFFF   │       │
│   │  0xFFFFFFFF         │    │   (64K ports)       │       │
│   └─────────────────────┘    └─────────────────────┘       │
│         Separate address spaces                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Method 2: Memory-Mapped I/O
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   Device registers appear as memory locations:              │
│   - MOV register, [address]    (read from device)           │
│   - MOV [address], register    (write to device)            │
│                                                             │
│   ┌─────────────────────────────────────────────────┐      │
│   │           Unified Address Space                  │      │
│   │  ┌───────────────────────────────────────────┐  │      │
│   │  │   RAM              (0x00000000 - ...)     │  │      │
│   │  ├───────────────────────────────────────────┤  │      │
│   │  │   Device Registers (0xF0000000 - ...)     │  │      │
│   │  ├───────────────────────────────────────────┤  │      │
│   │  │   ROM/BIOS         (0xFFFF0000 - ...)     │  │      │
│   │  └───────────────────────────────────────────┘  │      │
│   └─────────────────────────────────────────────────┘      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Comparison of I/O Addressing */}
    <h2 className="text-3xl font-bold mt-8">Port-Mapped vs Memory-Mapped I/O</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Port-Mapped I/O</th>
            <th className="p-3 border">Memory-Mapped I/O</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Address Space</td>
            <td className="p-3 border">Separate I/O space</td>
            <td className="p-3 border">Shared memory space</td>
          </tr>
          <tr>
            <td className="p-3 border">Instructions</td>
            <td className="p-3 border">Special IN/OUT instructions</td>
            <td className="p-3 border">Standard memory instructions</td>
          </tr>
          <tr>
            <td className="p-3 border">Protection</td>
            <td className="p-3 border">Easy to protect (privileged)</td>
            <td className="p-3 border">Uses memory protection</td>
          </tr>
          <tr>
            <td className="p-3 border">Flexibility</td>
            <td className="p-3 border">Limited (64K ports max)</td>
            <td className="p-3 border">Very flexible</td>
          </tr>
          <tr>
            <td className="p-3 border">Caching</td>
            <td className="p-3 border">Not an issue</td>
            <td className="p-3 border">Must disable caching for I/O regions</td>
          </tr>
          <tr>
            <td className="p-3 border">Example Systems</td>
            <td className="p-3 border">x86 (traditional)</td>
            <td className="p-3 border">ARM, modern systems</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Common I/O Interfaces */}
    <h2 className="text-3xl font-bold mt-8">Common I/O Interfaces</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Interface</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Max Speed</th>
            <th className="p-3 border">Typical Use</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">PCIe 4.0</td>
            <td className="p-3 border">Parallel/Serial</td>
            <td className="p-3 border">64 GB/s (x16)</td>
            <td className="p-3 border">Graphics, NVMe SSDs</td>
          </tr>
          <tr>
            <td className="p-3 border">USB 3.2</td>
            <td className="p-3 border">Serial</td>
            <td className="p-3 border">20 Gbps</td>
            <td className="p-3 border">External devices</td>
          </tr>
          <tr>
            <td className="p-3 border">SATA III</td>
            <td className="p-3 border">Serial</td>
            <td className="p-3 border">6 Gbps</td>
            <td className="p-3 border">Hard drives, SSDs</td>
          </tr>
          <tr>
            <td className="p-3 border">NVMe</td>
            <td className="p-3 border">Protocol over PCIe</td>
            <td className="p-3 border">32 GB/s (PCIe 4.0)</td>
            <td className="p-3 border">High-speed SSDs</td>
          </tr>
          <tr>
            <td className="p-3 border">Thunderbolt 4</td>
            <td className="p-3 border">Serial</td>
            <td className="p-3 border">40 Gbps</td>
            <td className="p-3 border">External GPUs, docks</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Real-World Example */}
    <h2 className="text-3xl font-bold mt-8">Real-World Example: Reading from a Keyboard</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Keyboard Input Flow:

1. User presses key 'A'
         │
         ▼
┌─────────────────────┐
│    Keyboard         │ Key generates scan code (0x1E for 'A')
│    Hardware         │
└──────────┬──────────┘
           │ Scan code sent via USB/PS2
           ▼
┌─────────────────────┐
│  Keyboard           │ Converts scan code to USB HID report
│  Controller         │ Stores in data register
└──────────┬──────────┘
           │ Interrupt signal (IRQ 1 for PS/2, USB IRQ)
           ▼
┌─────────────────────┐
│     USB Host        │ Receives USB packet
│     Controller      │ Triggers interrupt
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│       CPU           │ Interrupt handler reads data
│   (Kernel Mode)     │ Converts to ASCII/Unicode
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   Application       │ Receives character 'A'
│   (User Mode)       │ Displays or processes it
└─────────────────────┘
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>I/O devices are classified as block, character, or network devices</li>
      <li>Buses (data, address, control) connect CPU to memory and I/O devices</li>
      <li>Device controllers act as intermediaries between CPU and physical devices</li>
      <li>Controllers have status, data, and command registers for communication</li>
      <li>Port-mapped I/O uses separate address space; memory-mapped uses unified space</li>
      <li>Modern systems use high-speed interfaces like PCIe, USB, and NVMe</li>
      <li>Understanding I/O hardware is essential for device driver development</li>
    </ul>
  </div>
);

export default IOHardware;
