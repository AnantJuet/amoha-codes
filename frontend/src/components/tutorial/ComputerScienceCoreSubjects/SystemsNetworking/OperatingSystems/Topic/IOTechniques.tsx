import React from 'react';

const IOTechniques: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      I/O Techniques Overview
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      I/O techniques define how the CPU communicates with I/O devices to transfer data.
      The three primary techniques are Programmed I/O, Interrupt-Driven I/O, and Direct Memory
      Access (DMA). Each technique offers different trade-offs between CPU involvement,
      efficiency, and complexity.
    </p>

    {/* Overview Diagram */}
    <h2 className="text-3xl font-bold mt-8">I/O Techniques at a Glance</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Evolution of I/O Techniques:

Programmed I/O          Interrupt-Driven I/O          DMA
(Simplest)              (Better)                      (Best)
     │                        │                         │
     ▼                        ▼                         ▼
┌─────────────┐         ┌─────────────┐          ┌─────────────┐
│    CPU      │         │    CPU      │          │    CPU      │
│ Busy waits  │         │ Does other  │          │ Does other  │
│ for device  │         │ work, gets  │          │ work, DMA   │
│             │         │ interrupted │          │ handles I/O │
└──────┬──────┘         └──────┬──────┘          └──────┬──────┘
       │                       │                        │
       │ CPU does              │ CPU handles            │ Only one
       │ ALL work              │ data transfer          │ interrupt
       │                       │ on interrupt           │ per block
       ▼                       ▼                        ▼
┌─────────────┐         ┌─────────────┐          ┌─────────────┐
│   Device    │         │   Device    │          │   Device    │
└─────────────┘         └─────────────┘          └─────────────┘

CPU Utilization:   Low                Medium              High
I/O Throughput:    Low                Medium              High
Complexity:        Simple             Moderate            Complex
`}
      </pre>
    </div>

    {/* Programmed I/O */}
    <h2 className="text-3xl font-bold mt-8">1. Programmed I/O (Polling)</h2>
    <p className="leading-relaxed">
      In programmed I/O, the CPU is responsible for all data transfer. The CPU continuously
      polls the device status register to check if the device is ready, then transfers data
      one unit at a time.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Programmed I/O Process:

┌─────────────────────────────────────────────────────────────────┐
│                        CPU Execution                             │
└─────────────────────────────────────────────────────────────────┘
      │
      ▼
┌─────────────────┐
│  Issue I/O      │
│  Command        │───────────────────►  Device starts operation
└────────┬────────┘
         │
         ▼
┌─────────────────┐      ┌─────────────────┐
│  Read Status    │◄─────│  Status = Busy  │
│  Register       │      └─────────────────┘
└────────┬────────┘
         │
         │ No ┌─────────────────┐
         ├───►│  Ready?         │───┐
         │    └─────────────────┘   │
         │                          │ (Polling Loop - CPU waits)
         │◄─────────────────────────┘
         │
         │ Yes
         ▼
┌─────────────────┐
│  Transfer Data  │◄──────────────────►  One byte/word at a time
│  (CPU moves it) │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  More Data?     │
└────────┬────────┘
         │ Yes ─────────► (Loop back to poll status)
         │ No
         ▼
┌─────────────────┐
│     Done        │
└─────────────────┘

Problem: CPU spends most time waiting (busy-waiting)!
`}
      </pre>
    </div>

    {/* Interrupt-Driven I/O */}
    <h2 className="text-3xl font-bold mt-8">2. Interrupt-Driven I/O</h2>
    <p className="leading-relaxed">
      With interrupt-driven I/O, the CPU issues an I/O command and then continues with other
      tasks. When the device is ready, it sends an interrupt to the CPU, which then handles
      the data transfer.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Interrupt-Driven I/O Process:

CPU Timeline:
├──────────────────────────────────────────────────────────────────┤
│ Issue   │  Execute Other      │ ISR:    │ Continue Other        │
│ I/O Cmd │  Process/Thread     │ Handle  │ Process/Thread        │
│         │                     │ Data    │                       │
├────┬────┴─────────────────────┴────┬────┴───────────────────────┤
     │                               │
     │ Command                       │ Interrupt!
     ▼                               │
┌─────────────────────────────────┐  │
│         Device                  │  │
│  ┌───────────────────────────┐  │  │
│  │ Executes command          │  │  │
│  │ (Read/Write operation)    │  │  │
│  └───────────────────────────┘  │  │
│              │                  │  │
│              ▼ When ready       │  │
│  ┌───────────────────────────┐  │  │
│  │ Assert Interrupt Line     │──┼──┘
│  └───────────────────────────┘  │
│                                 │
└─────────────────────────────────┘

Interrupt Service Routine (ISR):
1. Save CPU state (registers)
2. Read data from device (or write next byte)
3. Acknowledge interrupt
4. Restore CPU state
5. Return from interrupt

Advantage: CPU can do useful work while waiting!
Disadvantage: One interrupt per byte/word transferred (high overhead for bulk data)
`}
      </pre>
    </div>

    {/* DMA */}
    <h2 className="text-3xl font-bold mt-8">3. Direct Memory Access (DMA)</h2>
    <p className="leading-relaxed">
      DMA allows devices to transfer data directly to/from memory without CPU intervention
      for each byte. The CPU only initiates the transfer and is interrupted once when the
      entire block is transferred.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
DMA Transfer Process:

CPU Timeline:
├──────────────────────────────────────────────────────────────────────┤
│ Setup   │  Execute Other Work (CPU fully available)  │ ISR:  │ Cont │
│ DMA     │                                            │ Done! │      │
├────┬────┴────────────────────────────────────────────┴───┬───┴──────┤
     │                                                     │
     │ 1. Set up DMA:                                      │ Interrupt
     │    - Memory address                                 │ (once per
     │    - Byte count                                     │  BLOCK)
     │    - Direction (read/write)                         │
     │                                                     │
     ▼                                                     │
┌────────────────────────────────────────────────────────┐ │
│                  DMA Controller                        │ │
│  ┌──────────────────────────────────────────────────┐  │ │
│  │ Takes control of bus (cycle stealing or burst)   │  │ │
│  │ Transfers data directly: Device ◄──► Memory      │  │ │
│  │ Decrements count until zero                      │  │ │
│  └──────────────────────────────────────────────────┘  │ │
│                        │                               │ │
│                        ▼ When complete                 │ │
│  ┌──────────────────────────────────────────────────┐  │ │
│  │ Assert Interrupt to signal completion            │──┼─┘
│  └──────────────────────────────────────────────────┘  │
│                                                        │
└────────────────────────────────────────────────────────┘

Advantage: CPU free during entire transfer, only ONE interrupt per block!
`}
      </pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison of I/O Techniques</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Programmed I/O</th>
            <th className="p-3 border">Interrupt-Driven</th>
            <th className="p-3 border">DMA</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">CPU Involvement</td>
            <td className="p-3 border">100% (busy waiting)</td>
            <td className="p-3 border">Per byte/word</td>
            <td className="p-3 border">Setup only</td>
          </tr>
          <tr>
            <td className="p-3 border">CPU Efficiency</td>
            <td className="p-3 border">Very Low</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border">Interrupts</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">One per byte/word</td>
            <td className="p-3 border">One per block</td>
          </tr>
          <tr>
            <td className="p-3 border">Hardware Cost</td>
            <td className="p-3 border">Lowest</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Higher (DMA controller)</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Transfer</td>
            <td className="p-3 border">CPU moves data</td>
            <td className="p-3 border">CPU moves data</td>
            <td className="p-3 border">DMA moves data</td>
          </tr>
          <tr>
            <td className="p-3 border">Best For</td>
            <td className="p-3 border">Simple, slow devices</td>
            <td className="p-3 border">Keyboard, mouse</td>
            <td className="p-3 border">Disk, network, video</td>
          </tr>
          <tr>
            <td className="p-3 border">Latency</td>
            <td className="p-3 border">Lowest (if not busy)</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Setup overhead</td>
          </tr>
          <tr>
            <td className="p-3 border">Throughput</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* CPU Cycles Comparison */}
    <h2 className="text-3xl font-bold mt-8">CPU Cycles: A Quantitative Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Scenario: Transfer 1000 bytes from disk to memory

Assumptions:
- Polling check: 50 CPU cycles
- Polls needed before ready: 100 polls
- Interrupt overhead: 500 cycles
- DMA setup: 1000 cycles
- Data move per byte: 10 cycles

═══════════════════════════════════════════════════════════════════

1. Programmed I/O:
   Polling overhead:     50 × 100 = 5,000 cycles (waiting)
   Data transfer:        10 × 1000 = 10,000 cycles
   Total:                15,000 cycles (CPU 100% occupied)

═══════════════════════════════════════════════════════════════════

2. Interrupt-Driven I/O:
   Interrupt overhead:   500 × 1000 = 500,000 cycles
   Data transfer:        10 × 1000 = 10,000 cycles
   Total:                510,000 cycles!

   Note: High overhead due to interrupt per byte!
   (Better with word-sized transfers)

═══════════════════════════════════════════════════════════════════

3. DMA:
   DMA setup:            1,000 cycles
   Completion interrupt: 500 cycles
   Total CPU time:       1,500 cycles (CPU 99.9% free during transfer!)

═══════════════════════════════════════════════════════════════════

Winner for bulk data: DMA by far!
`}
      </pre>
    </div>

    {/* When to Use Each Technique */}
    <h2 className="text-3xl font-bold mt-8">When to Use Each Technique</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Programmed I/O:</strong> Embedded systems with single-tasking, very simple
        devices, or when latency is critical and CPU is otherwise idle.
      </li>
      <li>
        <strong>Interrupt-Driven I/O:</strong> Low-bandwidth character devices like keyboards
        and mice, or when response time is more important than throughput.
      </li>
      <li>
        <strong>DMA:</strong> High-bandwidth devices like disks, network interfaces, video
        cards, or any bulk data transfer where CPU efficiency matters.
      </li>
    </ul>

    {/* Real-World Applications */}
    <h2 className="text-3xl font-bold mt-8">Real-World Applications</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Device</th>
            <th className="p-3 border">Primary I/O Technique</th>
            <th className="p-3 border">Reason</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Keyboard</td>
            <td className="p-3 border">Interrupt-Driven</td>
            <td className="p-3 border">Low data rate, responsiveness matters</td>
          </tr>
          <tr>
            <td className="p-3 border">Mouse</td>
            <td className="p-3 border">Interrupt-Driven</td>
            <td className="p-3 border">Real-time cursor movement</td>
          </tr>
          <tr>
            <td className="p-3 border">Hard Disk</td>
            <td className="p-3 border">DMA</td>
            <td className="p-3 border">Large block transfers</td>
          </tr>
          <tr>
            <td className="p-3 border">SSD (NVMe)</td>
            <td className="p-3 border">DMA</td>
            <td className="p-3 border">Very high throughput</td>
          </tr>
          <tr>
            <td className="p-3 border">Network Card</td>
            <td className="p-3 border">DMA</td>
            <td className="p-3 border">High-speed packet transfers</td>
          </tr>
          <tr>
            <td className="p-3 border">Graphics Card</td>
            <td className="p-3 border">DMA</td>
            <td className="p-3 border">Massive frame buffer transfers</td>
          </tr>
          <tr>
            <td className="p-3 border">Audio Card</td>
            <td className="p-3 border">DMA</td>
            <td className="p-3 border">Continuous audio streaming</td>
          </tr>
          <tr>
            <td className="p-3 border">Embedded Sensor</td>
            <td className="p-3 border">Programmed/Interrupt</td>
            <td className="p-3 border">Simple, low-cost requirement</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Programmed I/O is simplest but wastes CPU cycles with busy-waiting</li>
      <li>Interrupt-driven I/O frees CPU while waiting but has per-transfer overhead</li>
      <li>DMA provides highest CPU efficiency by handling bulk transfers without CPU</li>
      <li>Modern systems often combine techniques based on device characteristics</li>
      <li>Choice of technique affects system responsiveness and throughput</li>
      <li>DMA requires additional hardware (DMA controller) but greatly improves performance</li>
    </ul>
  </div>
);

export default IOTechniques;
