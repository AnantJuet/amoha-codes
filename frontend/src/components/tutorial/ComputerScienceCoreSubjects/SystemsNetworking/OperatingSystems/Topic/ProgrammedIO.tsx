import React from 'react';

const ProgrammedIO: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Programmed I/O
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Programmed I/O (PIO) is the simplest form of I/O where the CPU is directly responsible
      for all data transfer operations. The CPU continuously monitors the device status
      through polling and performs all data movement between the device and memory.
    </p>

    {/* How Programmed I/O Works */}
    <h2 className="text-3xl font-bold mt-8">How Programmed I/O Works</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Programmed I/O Operation Flow:

┌────────────────────────────────────────────────────────────────────┐
│                           CPU                                       │
│                                                                    │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │  Step 1: Send Command                                      │   │
│  │  ─────────────────────────────────────────────────────────►│   │
│  │  Write command to device's command register                │   │
│  └────────────────────────────────────────────────────────────┘   │
│                           │                                        │
│                           ▼                                        │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │  Step 2: Poll Status Register                              │   │
│  │  ◄─────────────────────────────────────────────────────────    │
│  │  Read status register repeatedly (busy-wait loop)          │   │
│  │                                                            │   │
│  │     while (status_register & BUSY_BIT) {                   │   │
│  │         // Keep checking - CPU stuck here!                 │   │
│  │     }                                                      │   │
│  └────────────────────────────────────────────────────────────┘   │
│                           │                                        │
│                           ▼                                        │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │  Step 3: Transfer Data                                     │   │
│  │  ◄─────────────────────────────────────────────────────────►   │
│  │  CPU reads from/writes to data register                    │   │
│  │  One byte/word at a time                                   │   │
│  └────────────────────────────────────────────────────────────┘   │
│                           │                                        │
│                           ▼                                        │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │  Step 4: Repeat until done                                 │   │
│  │  Loop back to Step 2 for next byte/word                    │   │
│  └────────────────────────────────────────────────────────────┘   │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Polling Mechanism */}
    <h2 className="text-3xl font-bold mt-8">The Polling Mechanism</h2>
    <p className="leading-relaxed">
      Polling is the technique where the CPU repeatedly checks the status of a device to
      determine if it is ready for data transfer. This is also called busy-waiting because
      the CPU is occupied doing nothing useful while waiting.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Polling Loop Visualization:

Time ──────────────────────────────────────────────────────────────►

CPU Activity:
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│Check│Check│Check│Check│Check│Check│READY│XFER │Check│Check│READY│
│Busy │Busy │Busy │Busy │Busy │Busy │     │DATA │Busy │Busy │     │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
  │     │     │     │     │     │     │     │     │     │     │
  ▼     ▼     ▼     ▼     ▼     ▼     ▼     ▼     ▼     ▼     ▼

Device Status:
┌─────────────────────────────────────┬─────┬─────────────────┬─────┐
│              BUSY                   │READY│     BUSY        │READY│
│    (Device performing operation)    │     │ (Next byte)     │     │
└─────────────────────────────────────┴─────┴─────────────────┴─────┘

█ = CPU cycles wasted on polling
▒ = Useful work (data transfer)

Most CPU cycles are wasted checking the busy status!
`}
      </pre>
    </div>

    {/* Pseudocode Example */}
    <h2 className="text-3xl font-bold mt-8">Programmed I/O: Code Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
// Reading data from a device using Programmed I/O

#define STATUS_REG   0x64    // Status register port
#define DATA_REG     0x60    // Data register port
#define COMMAND_REG  0x64    // Command register port
#define BUSY_BIT     0x02    // Busy bit in status register
#define DATA_READY   0x01    // Data ready bit

void read_from_device(char* buffer, int count) {
    int i;

    for (i = 0; i < count; i++) {
        // Step 1: Send read command (if needed)
        outb(COMMAND_REG, READ_COMMAND);

        // Step 2: Poll - wait until device is ready
        while (inb(STATUS_REG) & BUSY_BIT) {
            // Busy-wait loop
            // CPU does nothing but check status
            // This wastes CPU cycles!
        }

        // Step 3: Check if data is available
        while (!(inb(STATUS_REG) & DATA_READY)) {
            // Wait for data ready
        }

        // Step 4: Read the data byte
        buffer[i] = inb(DATA_REG);
    }
}

// Writing data to a device using Programmed I/O

void write_to_device(char* buffer, int count) {
    int i;

    for (i = 0; i < count; i++) {
        // Poll - wait until device can accept data
        while (inb(STATUS_REG) & BUSY_BIT) {
            // Busy-wait
        }

        // Write one byte to the device
        outb(DATA_REG, buffer[i]);
    }
}
`}
      </pre>
    </div>

    {/* CPU Utilization */}
    <h2 className="text-3xl font-bold mt-8">CPU Utilization Analysis</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Example: Reading 1 KB from a slow device

Assumptions:
- Device data rate: 1 byte per 100 microseconds
- CPU clock: 1 GHz (1 ns per cycle)
- Poll instruction: 10 cycles = 10 ns
- Polls per byte: ~10,000 (100 us / 10 ns)

Time Analysis for 1 KB (1024 bytes):
═══════════════════════════════════════════════════════════════

Total transfer time: 1024 × 100 us = 102,400 us = 0.1 seconds

CPU cycles spent polling:
  Per byte: 10,000 polls × 10 cycles = 100,000 cycles
  Total: 1024 × 100,000 = 102,400,000 cycles

CPU cycles for data transfer:
  Per byte: ~5 cycles
  Total: 1024 × 5 = 5,120 cycles

═══════════════════════════════════════════════════════════════

                    Polling: 102,400,000 cycles (99.99%)
                    Transfer:      5,120 cycles  (0.01%)
                                   ─────────────────────
                    Total:   102,405,120 cycles

CPU Utilization for actual work: 0.01% !!

┌─────────────────────────────────────────────────────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░│
│                 Wasted (Polling)                     │Work│
└─────────────────────────────────────────────────────────────┘
  ▓ = Polling overhead (99.99%)
  ░ = Useful work (0.01%)
`}
      </pre>
    </div>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Simple to implement</td>
            <td className="p-3 border">Wastes CPU cycles (busy-waiting)</td>
          </tr>
          <tr>
            <td className="p-3 border">No special hardware required</td>
            <td className="p-3 border">CPU cannot do other tasks</td>
          </tr>
          <tr>
            <td className="p-3 border">Predictable timing</td>
            <td className="p-3 border">Poor for slow devices</td>
          </tr>
          <tr>
            <td className="p-3 border">Low latency for fast devices</td>
            <td className="p-3 border">Not suitable for multitasking</td>
          </tr>
          <tr>
            <td className="p-3 border">No interrupt overhead</td>
            <td className="p-3 border">Poor system throughput</td>
          </tr>
          <tr>
            <td className="p-3 border">Easy debugging</td>
            <td className="p-3 border">Not power efficient</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* When to Use Programmed I/O */}
    <h2 className="text-3xl font-bold mt-8">When to Use Programmed I/O</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Simple Embedded Systems:</strong> Microcontrollers with single-task operation
        where complexity must be minimized.
      </li>
      <li>
        <strong>Very Fast Devices:</strong> When device response time is so short that
        interrupt overhead would be greater than polling time.
      </li>
      <li>
        <strong>Real-Time Systems:</strong> When deterministic timing is critical and
        interrupt latency is unacceptable.
      </li>
      <li>
        <strong>Initialization/Diagnostics:</strong> During boot-up when interrupt system
        is not yet configured.
      </li>
      <li>
        <strong>Small Data Transfers:</strong> When transferring just a few bytes and
        setting up interrupts would be overkill.
      </li>
    </ul>

    {/* Real-World Examples */}
    <h2 className="text-3xl font-bold mt-8">Real-World Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Example 1: Simple Serial Port (UART) Polling

┌─────────────────────────────────────────────────────────────┐
│                    UART Controller                          │
│                                                             │
│  Status Register (at base + 5):                             │
│  ┌───┬───┬───┬───┬───┬───┬───┬───┐                         │
│  │ 7 │ 6 │ 5 │ 4 │ 3 │ 2 │ 1 │ 0 │                         │
│  └───┴───┴───┴───┴───┴───┴───┴───┘                         │
│    │       │               │   │                            │
│    │       │               │   └── Data Ready (RxRDY)       │
│    │       │               └────── Tx Buffer Empty (TxRDY)  │
│    │       └────────────────────── Break/Error              │
│    └────────────────────────────── Unused                   │
│                                                             │
│  Data Register (at base + 0):                               │
│  ┌───────────────────────────────┐                         │
│  │     8-bit Data In/Out         │                         │
│  └───────────────────────────────┘                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Polling code for UART:
─────────────────────────────────────────────────────────────
// Wait for received data
while (!(inb(UART_STATUS) & RxRDY))
    ;  // Poll until data ready
char c = inb(UART_DATA);  // Read the character

// Wait to transmit
while (!(inb(UART_STATUS) & TxRDY))
    ;  // Poll until transmitter ready
outb(UART_DATA, 'A');  // Send character


Example 2: PS/2 Keyboard Controller Polling

┌─────────────────────────────────────────────────────────────┐
│              Keyboard Controller (8042)                     │
│                                                             │
│  Status Port (0x64):                                        │
│  ┌───┬───┬───┬───┬───┬───┬───┬───┐                         │
│  │ 7 │ 6 │ 5 │ 4 │ 3 │ 2 │ 1 │ 0 │                         │
│  └───┴───┴───┴───┴───┴───┴───┴───┘                         │
│                            │   │                            │
│                            │   └── Output Buffer Full      │
│                            └────── Input Buffer Full       │
│                                                             │
│  Data Port (0x60):                                          │
│  ┌───────────────────────────────┐                         │
│  │     Scan Code / Command       │                         │
│  └───────────────────────────────┘                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘

// Poll for keypress
while (!(inb(0x64) & 0x01))
    ;  // Wait for output buffer full
unsigned char scancode = inb(0x60);  // Read scan code
`}
      </pre>
    </div>

    {/* Comparison with Other Methods */}
    <h2 className="text-3xl font-bold mt-8">Programmed I/O vs Other Techniques</h2>
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
            <td className="p-3 border">CPU during I/O</td>
            <td className="p-3 border">Busy polling</td>
            <td className="p-3 border">Does other work</td>
            <td className="p-3 border">Does other work</td>
          </tr>
          <tr>
            <td className="p-3 border">Data transfer by</td>
            <td className="p-3 border">CPU</td>
            <td className="p-3 border">CPU</td>
            <td className="p-3 border">DMA controller</td>
          </tr>
          <tr>
            <td className="p-3 border">Notification</td>
            <td className="p-3 border">Polling</td>
            <td className="p-3 border">Interrupt</td>
            <td className="p-3 border">Interrupt (once)</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Simplest</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Complex</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Programmed I/O uses polling (busy-waiting) to check device status</li>
      <li>CPU is 100% occupied during I/O operation - cannot do other work</li>
      <li>Simple to implement but wastes CPU cycles on slow devices</li>
      <li>Best suited for simple systems, fast devices, or initialization code</li>
      <li>Not suitable for multitasking operating systems with slow devices</li>
      <li>No special hardware required beyond basic device registers</li>
      <li>Modern systems use interrupt-driven I/O or DMA instead for efficiency</li>
    </ul>
  </div>
);

export default ProgrammedIO;
