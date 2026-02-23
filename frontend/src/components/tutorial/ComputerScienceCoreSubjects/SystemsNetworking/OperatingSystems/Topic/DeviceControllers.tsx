import React from 'react';

const DeviceControllers: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Device Controllers
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A device controller is an electronic circuit that acts as an interface between an I/O
      device and the computer system. It handles the low-level details of device operation,
      translating high-level commands from the CPU into signals the device understands and
      vice versa.
    </p>

    {/* Device Controller Role */}
    <h2 className="text-3xl font-bold mt-8">Role of Device Controllers</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Device Controller in the I/O System:

┌─────────────────────────────────────────────────────────────────────────┐
│                            Computer System                              │
│                                                                         │
│  ┌─────────┐     ┌───────────┐     ┌──────────────────────────────────┐│
│  │         │     │           │     │       Device Controller          ││
│  │   CPU   │◄───►│  System   │◄───►│  ┌─────────────────────────────┐ ││
│  │         │     │   Bus     │     │  │ • Receives commands from CPU│ ││
│  └─────────┘     │           │     │  │ • Controls device operation │ ││
│                  │           │     │  │ • Buffers data temporarily  │ ││
│  ┌─────────┐     │           │     │  │ • Handles error detection   │ ││
│  │         │     │           │     │  │ • Converts data formats     │ ││
│  │ Memory  │◄───►│           │     │  │ • Generates interrupts      │ ││
│  │         │     │           │     │  └─────────────────────────────┘ ││
│  └─────────┘     └───────────┘     └──────────────┬───────────────────┘│
│                                                   │                     │
└───────────────────────────────────────────────────┼─────────────────────┘
                                                    │
                                                    │ Device-specific
                                                    │ signals
                                                    ▼
                                    ┌───────────────────────────────┐
                                    │        Physical Device        │
                                    │    (Disk, Keyboard, etc.)     │
                                    └───────────────────────────────┘
`}
      </pre>
    </div>

    {/* Controller Architecture */}
    <h2 className="text-3xl font-bold mt-8">Device Controller Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Internal Structure of a Device Controller:

┌─────────────────────────────────────────────────────────────────────────┐
│                        Device Controller                                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │                      Interface to System Bus                      │ │
│  │  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────────┐ │ │
│  │  │  Address Decoder │ │  Bus Interface  │ │  Interrupt Logic    │ │ │
│  │  │  (recognizes    │ │  (reads/writes  │ │  (generates IRQ     │ │ │
│  │  │   I/O addresses)│ │   bus signals)  │ │   when needed)      │ │ │
│  │  └─────────────────┘ └─────────────────┘ └─────────────────────┘ │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                    │                                    │
│                                    ▼                                    │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │                          Registers                                │ │
│  │                                                                   │ │
│  │  ┌─────────────────────────────────────────────────────────────┐ │ │
│  │  │  Status Register                                            │ │ │
│  │  │  ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐         │ │ │
│  │  │  │Busy │Done │Error│ IRQ │Ready│ OVF │ UND │ ... │         │ │ │
│  │  │  │     │     │     │Enable│    │     │     │     │         │ │ │
│  │  │  └─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘         │ │ │
│  │  └─────────────────────────────────────────────────────────────┘ │ │
│  │  ┌─────────────────────────────────────────────────────────────┐ │ │
│  │  │  Control/Command Register                                   │ │ │
│  │  │  Commands: READ, WRITE, SEEK, FORMAT, RESET, etc.          │ │ │
│  │  └─────────────────────────────────────────────────────────────┘ │ │
│  │  ┌─────────────────────────────────────────────────────────────┐ │ │
│  │  │  Data Register(s)                                           │ │ │
│  │  │  Temporary storage for data being transferred               │ │ │
│  │  └─────────────────────────────────────────────────────────────┘ │ │
│  │                                                                   │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                    │                                    │
│                                    ▼                                    │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │                        Control Logic                              │ │
│  │  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────────┐ │ │
│  │  │  Microcontroller│ │  State Machine  │ │  Timing Control     │ │ │
│  │  │  or ASIC        │ │                 │ │                     │ │ │
│  │  └─────────────────┘ └─────────────────┘ └─────────────────────┘ │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                    │                                    │
│                                    ▼                                    │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │                    Data Buffer (Optional)                         │ │
│  │  Local memory to buffer data during transfer (cache/buffer)       │ │
│  │  Size varies: KB for disks, bytes for simple devices              │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                    │                                    │
│                                    ▼                                    │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │                     Device Interface                              │ │
│  │  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────────┐ │ │
│  │  │ Signal Convert  │ │  Error Detection│ │  Physical Driver    │ │ │
│  │  │ (digital/analog)│ │  (parity, CRC)  │ │  (motors, heads)    │ │ │
│  │  └─────────────────┘ └─────────────────┘ └─────────────────────┘ │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Controller Functions */}
    <h2 className="text-3xl font-bold mt-8">Functions of Device Controllers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Command Interpretation</td>
            <td className="p-3 border">Decodes commands from CPU</td>
            <td className="p-3 border">Disk: Read sector 100</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Buffering</td>
            <td className="p-3 border">Temporarily stores data during transfer</td>
            <td className="p-3 border">Buffer one disk sector (512 bytes)</td>
          </tr>
          <tr>
            <td className="p-3 border">Error Detection/Correction</td>
            <td className="p-3 border">Checks data integrity</td>
            <td className="p-3 border">CRC check on disk data</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Conversion</td>
            <td className="p-3 border">Converts between formats</td>
            <td className="p-3 border">Serial to parallel conversion</td>
          </tr>
          <tr>
            <td className="p-3 border">Device Control</td>
            <td className="p-3 border">Manages device operations</td>
            <td className="p-3 border">Move disk head, spin motor</td>
          </tr>
          <tr>
            <td className="p-3 border">Status Reporting</td>
            <td className="p-3 border">Reports device state to CPU</td>
            <td className="p-3 border">Busy, ready, error flags</td>
          </tr>
          <tr>
            <td className="p-3 border">Interrupt Generation</td>
            <td className="p-3 border">Signals CPU when operation complete</td>
            <td className="p-3 border">Interrupt after read complete</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Controller Registers */}
    <h2 className="text-3xl font-bold mt-8">Controller Registers in Detail</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Typical Device Controller Register Set:

┌─────────────────────────────────────────────────────────────────────────┐
│                         Status Register (Read-Only)                      │
├─────────────────────────────────────────────────────────────────────────┤
│ Bit │  Name           │  Description                                    │
├─────┼─────────────────┼─────────────────────────────────────────────────┤
│  0  │  BUSY           │  Device is busy with an operation               │
│  1  │  DONE/READY     │  Operation complete, device ready               │
│  2  │  ERROR          │  Error occurred during operation                │
│  3  │  DATA_AVAILABLE │  Data register has valid data to read           │
│  4  │  BUFFER_EMPTY   │  Output buffer is empty, can accept data        │
│  5  │  INTERRUPT_EN   │  Interrupts are enabled                         │
│  6  │  OVERFLOW       │  Data overflow occurred                         │
│  7  │  TIMEOUT        │  Operation timed out                            │
└─────┴─────────────────┴─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                      Control Register (Write-Only)                       │
├─────────────────────────────────────────────────────────────────────────┤
│ Bits │  Name          │  Description                                    │
├──────┼────────────────┼─────────────────────────────────────────────────┤
│  0-3 │  COMMAND       │  Operation code (READ, WRITE, SEEK, etc.)       │
│   4  │  IRQ_ENABLE    │  Enable interrupt on completion                 │
│   5  │  RESET         │  Reset the device                               │
│   6  │  START         │  Start the operation                            │
│   7  │  DMA_MODE      │  Enable DMA transfers                           │
└──────┴────────────────┴─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                        Data Register (Read/Write)                        │
├─────────────────────────────────────────────────────────────────────────┤
│  Width: 8, 16, or 32 bits depending on device                           │
│  Purpose: Transfer data between CPU and device                          │
│  - Read: CPU reads data from device                                     │
│  - Write: CPU sends data to device                                      │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                     Address Register (Write-Only)                        │
├─────────────────────────────────────────────────────────────────────────┤
│  For devices with addressable locations (disks, memory-mapped devices)  │
│  - Disk: Sector number, cylinder, head                                  │
│  - Memory: Memory address for DMA transfers                             │
└─────────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Example: Disk Controller */}
    <h2 className="text-3xl font-bold mt-8">Example: Disk Controller</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Hard Disk Controller Architecture:

┌─────────────────────────────────────────────────────────────────────────┐
│                         Hard Disk Controller                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  To System Bus (SATA/PCIe)                                             │
│       │                                                                 │
│       ▼                                                                 │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  Host Bus Interface                                             │   │
│  │  - SATA/SAS/NVMe protocol handling                              │   │
│  │  - Command queue management (NCQ - Native Command Queuing)      │   │
│  └──────────────────────────────┬──────────────────────────────────┘   │
│                                 │                                       │
│                                 ▼                                       │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  Controller Processor                                           │   │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │   │
│  │  │  Command        │  │  Firmware       │  │  Error          │ │   │
│  │  │  Parser         │  │  (Flash ROM)    │  │  Handling       │ │   │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘ │   │
│  └──────────────────────────────┬──────────────────────────────────┘   │
│                                 │                                       │
│                                 ▼                                       │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  Data Buffer (Cache)                                            │   │
│  │  - Typically 64MB - 256MB DRAM                                  │   │
│  │  - Caches frequently accessed sectors                           │   │
│  │  - Buffers write operations                                     │   │
│  └──────────────────────────────┬──────────────────────────────────┘   │
│                                 │                                       │
│                                 ▼                                       │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  ECC Engine                                                     │   │
│  │  - Error Correction Code generation/checking                    │   │
│  │  - Can correct multi-bit errors                                 │   │
│  └──────────────────────────────┬──────────────────────────────────┘   │
│                                 │                                       │
│                                 ▼                                       │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  Servo Control                                                  │   │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │   │
│  │  │  Head Position  │  │  Motor Control  │  │  Read/Write     │ │   │
│  │  │  Control        │  │  (Spindle RPM)  │  │  Amplifier      │ │   │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘ │   │
│  └──────────────────────────────┬──────────────────────────────────┘   │
│                                 │                                       │
└─────────────────────────────────┼───────────────────────────────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────┐
                    │     Physical Disk Platters  │
                    │     ┌───────────────────┐   │
                    │     │   ◉◉◉◉◉◉◉◉◉◉◉◉◉   │   │
                    │     │   ◉◉◉◉◉◉◉◉◉◉◉◉◉   │   │
                    │     │   ◉◉◉◉◉◉◉◉◉◉◉◉◉   │   │
                    │     └───────────────────┘   │
                    │         Read/Write Heads    │
                    └─────────────────────────────┘
`}
      </pre>
    </div>

    {/* Types of Device Controllers */}
    <h2 className="text-3xl font-bold mt-8">Types of Device Controllers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Controller Type</th>
            <th className="p-3 border">Devices</th>
            <th className="p-3 border">Key Features</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Storage Controllers</td>
            <td className="p-3 border">HDD, SSD, RAID</td>
            <td className="p-3 border">Large buffer, ECC, command queuing</td>
          </tr>
          <tr>
            <td className="p-3 border">Network Controllers (NIC)</td>
            <td className="p-3 border">Ethernet, WiFi</td>
            <td className="p-3 border">DMA, checksum offload, packet buffers</td>
          </tr>
          <tr>
            <td className="p-3 border">Graphics Controllers (GPU)</td>
            <td className="p-3 border">Display, Rendering</td>
            <td className="p-3 border">Frame buffer, 3D acceleration</td>
          </tr>
          <tr>
            <td className="p-3 border">USB Host Controllers</td>
            <td className="p-3 border">USB devices</td>
            <td className="p-3 border">Protocol handling, hub support</td>
          </tr>
          <tr>
            <td className="p-3 border">Audio Controllers</td>
            <td className="p-3 border">Sound cards</td>
            <td className="p-3 border">DAC/ADC, mixing, DMA streaming</td>
          </tr>
          <tr>
            <td className="p-3 border">Input Controllers</td>
            <td className="p-3 border">Keyboard, Mouse</td>
            <td className="p-3 border">Scan code generation, interrupt</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Modern Controllers */}
    <h2 className="text-3xl font-bold mt-8">Modern Controller Features</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Bus Mastering:</strong> Controller can independently access system bus
        and memory without CPU intervention (integrated DMA).
      </li>
      <li>
        <strong>Command Queuing:</strong> Can hold multiple commands and optimize their
        execution order (e.g., NCQ for SATA, NVMe queues).
      </li>
      <li>
        <strong>Offload Processing:</strong> Handles complex operations like encryption,
        compression, or checksum calculation.
      </li>
      <li>
        <strong>Power Management:</strong> Can enter low-power states and wake on specific
        events.
      </li>
      <li>
        <strong>Hot-Plug Support:</strong> Handles device connection/disconnection without
        system restart.
      </li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Device controllers interface between CPU/memory and physical devices</li>
      <li>Controllers have registers for status, control, data, and addresses</li>
      <li>They perform command interpretation, buffering, and error handling</li>
      <li>Complex controllers (disk, network) have onboard processors and memory</li>
      <li>Modern controllers support bus mastering, command queuing, and offloading</li>
      <li>Device drivers communicate with controllers through their registers</li>
      <li>Understanding controller architecture is essential for driver development</li>
    </ul>
  </div>
);

export default DeviceControllers;
