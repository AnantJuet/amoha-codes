import React from 'react';

const DMA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Direct Memory Access (DMA)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Direct Memory Access (DMA) is a hardware feature that allows I/O devices to transfer
      data directly to and from memory without CPU intervention. The CPU only sets up the
      transfer and is notified when it completes, making DMA highly efficient for bulk
      data transfers.
    </p>

    {/* DMA Concept */}
    <h2 className="text-3xl font-bold mt-8">The DMA Concept</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Without DMA (CPU does all transfers):
─────────────────────────────────────

    ┌─────┐     ┌─────┐     ┌────────┐
    │ CPU │◄───►│ Bus │◄───►│ Memory │
    └──┬──┘     └──┬──┘     └────────┘
       │           │
       │           │     Every byte goes through CPU!
       │           │
       ▼           ▼
    ┌─────────────────┐
    │     Device      │
    └─────────────────┘

    Device → CPU → Memory (Read)
    Memory → CPU → Device (Write)


With DMA (Direct device-memory transfer):
─────────────────────────────────────────

    ┌─────┐                          ┌────────┐
    │ CPU │  (Setup only)            │ Memory │
    └──┬──┘                          └───┬────┘
       │                                  │
       │ 1. Setup DMA                     │
       ▼                                  │
    ┌──────────────┐                      │
    │     DMA      │◄─────────────────────┘
    │  Controller  │      Direct transfer!
    └──────┬───────┘
           │
           │ 2. Transfer data directly
           ▼
    ┌─────────────────┐
    │     Device      │
    └─────────────────┘

    Device ◄──────────────────► Memory (Direct!)
    CPU is FREE to do other work!
`}
      </pre>
    </div>

    {/* DMA Controller Architecture */}
    <h2 className="text-3xl font-bold mt-8">DMA Controller Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
DMA Controller (DMAC) Internal Structure:

┌─────────────────────────────────────────────────────────────────────┐
│                        DMA Controller                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  For each DMA channel (e.g., Channel 0):                           │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                                                             │   │
│  │  ┌─────────────────────────────────────────────────────┐   │   │
│  │  │  Memory Address Register (MAR)                      │   │   │
│  │  │  Points to current memory location for transfer     │   │   │
│  │  │  Increments/decrements after each transfer          │   │   │
│  │  └─────────────────────────────────────────────────────┘   │   │
│  │                                                             │   │
│  │  ┌─────────────────────────────────────────────────────┐   │   │
│  │  │  Count Register (CR)                                │   │   │
│  │  │  Number of bytes/words remaining to transfer        │   │   │
│  │  │  Decrements after each transfer                     │   │   │
│  │  │  When reaches 0 → transfer complete                 │   │   │
│  │  └─────────────────────────────────────────────────────┘   │   │
│  │                                                             │   │
│  │  ┌─────────────────────────────────────────────────────┐   │   │
│  │  │  Control Register                                   │   │   │
│  │  │  ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐ │   │   │
│  │  │  │ Dir │Mode │Auto │ Pri │ Req │ TC  │Enable│ ... │ │   │   │
│  │  │  └─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘ │   │   │
│  │  │  Dir: Read/Write direction                         │   │   │
│  │  │  Mode: Single/Block/Demand/Cascade                 │   │   │
│  │  │  Auto: Auto-initialize after complete              │   │   │
│  │  │  TC: Terminal count (complete) flag                │   │   │
│  │  └─────────────────────────────────────────────────────┘   │   │
│  │                                                             │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  Common Registers:                                                  │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  Status Register: Channel status, TC flags, requests       │   │
│  │  Command Register: Controller-wide settings                │   │
│  │  Request Register: Software DMA requests                   │   │
│  │  Mask Register: Enable/disable channels                    │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  ┌──────────────────┐                                              │
│  │  Bus Arbitration │ ← Controls when DMAC takes the bus          │
│  │  Logic           │                                              │
│  └──────────────────┘                                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* DMA Transfer Process */}
    <h2 className="text-3xl font-bold mt-8">DMA Transfer Process</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Complete DMA Transfer Sequence:

Step 1: CPU PROGRAMS DMA CONTROLLER
───────────────────────────────────
CPU writes to DMA registers:
- Starting memory address (where to read/write)
- Byte count (how much data)
- Direction (read from device or write to device)
- Mode (single, block, demand)
- Enable the channel

       CPU
        │
        │ Write registers
        ▼
    ┌───────────────┐
    │     DMAC      │  Memory Addr = 0x1000
    │               │  Count = 512 bytes
    │               │  Direction = READ (device→memory)
    └───────────────┘


Step 2: CPU TELLS DEVICE TO START
─────────────────────────────────
CPU sends command to device (e.g., "read sector 100")
        │
        ▼
    ┌───────────────┐
    │    Device     │  ← Receives read command
    │   (e.g., Disk)│     Starts reading data
    └───────────────┘


Step 3: DEVICE REQUESTS DMA
───────────────────────────
When device has data ready, it asserts DMA Request (DRQ) line

    ┌───────────────┐         DRQ          ┌───────────────┐
    │    Device     │─────────────────────►│     DMAC      │
    │               │                      │               │
    └───────────────┘                      └───────────────┘


Step 4: DMAC REQUESTS BUS
─────────────────────────
DMAC asserts Bus Request (BREQ) to CPU

    ┌───────────────┐         BREQ         ┌───────────────┐
    │     DMAC      │─────────────────────►│      CPU      │
    │               │                      │               │
    └───────────────┘                      └───────────────┘


Step 5: CPU GRANTS BUS
──────────────────────
CPU finishes current bus cycle, then grants bus to DMAC

    ┌───────────────┐         BGRANT       ┌───────────────┐
    │      CPU      │─────────────────────►│     DMAC      │
    │  (tri-states  │                      │ (takes control│
    │   bus lines)  │                      │   of bus)     │
    └───────────────┘                      └───────────────┘


Step 6: DMA TRANSFER OCCURS
───────────────────────────
DMAC performs transfer: Device ◄──────► Memory

    ┌───────────────┐                      ┌───────────────┐
    │    Memory     │◄─────────────────────│    Device     │
    │               │      Data directly   │               │
    │   0x1000:     │      via bus         │               │
    │   [data...]   │                      │               │
    └───────────────┘                      └───────────────┘
              ▲                                   │
              │           DMA Controller          │
              │           controls bus            │
              └─────── ┌───────────────┐ ─────────┘
                       │     DMAC      │
                       │ MAR++, Count--│
                       └───────────────┘


Step 7: REPEAT OR COMPLETE
──────────────────────────
- If Count > 0 and more data: repeat steps 3-6
- If Count = 0: DMAC releases bus, sends interrupt to CPU

    ┌───────────────┐                      ┌───────────────┐
    │     DMAC      │────── Interrupt ────►│      CPU      │
    │ (TC reached)  │                      │ (handles ISR) │
    └───────────────┘                      └───────────────┘
`}
      </pre>
    </div>

    {/* DMA Transfer Modes */}
    <h2 className="text-3xl font-bold mt-8">DMA Transfer Modes</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Mode</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Bus Usage</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Cycle Stealing</td>
            <td className="p-3 border">Transfer one byte/word, then release bus</td>
            <td className="p-3 border">Interleaved with CPU</td>
            <td className="p-3 border">Slow devices, minimal CPU impact</td>
          </tr>
          <tr>
            <td className="p-3 border">Burst Mode</td>
            <td className="p-3 border">Transfer entire block before releasing bus</td>
            <td className="p-3 border">Exclusive during transfer</td>
            <td className="p-3 border">High-speed transfers (disk, network)</td>
          </tr>
          <tr>
            <td className="p-3 border">Demand Mode</td>
            <td className="p-3 border">Transfer while device requests, then release</td>
            <td className="p-3 border">As long as device needs</td>
            <td className="p-3 border">Streaming devices</td>
          </tr>
          <tr>
            <td className="p-3 border">Transparent</td>
            <td className="p-3 border">Only transfer when CPU not using bus</td>
            <td className="p-3 border">Zero CPU impact</td>
            <td className="p-3 border">Background transfers</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Transfer Modes Diagram */}
    <h2 className="text-3xl font-bold mt-8">Transfer Modes Visualized</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Time →

Cycle Stealing Mode:
┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐
│CPU│DMA│CPU│CPU│DMA│CPU│CPU│CPU│DMA│CPU│CPU│DMA│CPU│CPU│CPU│DMA│
│   │ 1 │   │   │ 2 │   │   │   │ 3 │   │   │ 4 │   │   │   │ 5 │
└───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘
     ▲       ▲       ▲       ▲       ▲       ▲       ▲       ▲
     └───────┴───────┴───────┴───────┴───────┴───────┴───────┘
     One byte/word at a time, interleaved with CPU cycles


Burst Mode:
┌───┬───┬───┬───────────────────────────────────────────┬───┬───┐
│CPU│CPU│CPU│         DMA Burst Transfer                │CPU│CPU│
│   │   │   │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │...│ n │   │   │
└───┴───┴───┴───────────────────────────────────────────┴───┴───┘
            │◄──────── Entire block transferred ────────►│
            CPU blocked during burst


Demand Mode:
┌───┬───┬───────────────────────┬───┬───┬───────────────┬───┬───┐
│CPU│CPU│    DMA (device ready) │CPU│CPU│ DMA (ready)   │CPU│CPU│
│   │   │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │   │   │ 7 │ 8 │ 9 │10 │   │   │
└───┴───┴───────────────────────┴───┴───┴───────────────┴───┴───┘
            ▲                   ▲       ▲               ▲
            │ Device asserts    │       │ Device asserts│
            │ request           │       │ request again │
            └──── DRQ high ─────┘       └──── DRQ high ─┘


Transparent Mode:
┌───┬   ┬───┬   ┬───┬   ┬───┬   ┬───┬   ┬───┬   ┬───┬   ┬───┬   ┐
│CPU│DMA│CPU│DMA│CPU│DMA│CPU│DMA│CPU│DMA│CPU│DMA│CPU│DMA│CPU│DMA│
│   │ 1 │   │ 2 │   │ 3 │   │ 4 │   │ 5 │   │ 6 │   │ 7 │   │ 8 │
└───┴   ┴───┴   ┴───┴   ┴───┴   ┴───┴   ┴───┴   ┴───┴   ┴───┴   ┘
     ▲       ▲       ▲       ▲       ▲       ▲       ▲       ▲
     └───────┴───────┴───────┴───────┴───────┴───────┴───────┘
     DMA only uses bus when CPU doesn't need it (no impact!)
`}
      </pre>
    </div>

    {/* DMA Code Example */}
    <h2 className="text-3xl font-bold mt-8">Programming the DMA Controller</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
// Example: Setting up DMA for disk read transfer

// DMA Channel 2 registers (for floppy disk)
#define DMA_ADDR_CH2    0x04    // Address register
#define DMA_COUNT_CH2   0x05    // Count register
#define DMA_PAGE_CH2    0x81    // Page register (high address bits)
#define DMA_MODE        0x0B    // Mode register
#define DMA_MASK        0x0A    // Mask register
#define DMA_FLIPFLOP    0x0C    // Flip-flop reset

void setup_dma_read(void* buffer, unsigned int count) {
    unsigned long addr = (unsigned long)buffer;

    // Step 1: Disable the DMA channel while programming
    outb(DMA_MASK, 0x06);  // Mask channel 2 (bit 2 = channel, bit 0-1 = mask set)

    // Step 2: Reset flip-flop for 16-bit address/count
    outb(DMA_FLIPFLOP, 0xFF);  // Any value resets it

    // Step 3: Set memory address (low byte, then high byte)
    outb(DMA_ADDR_CH2, addr & 0xFF);          // Low byte
    outb(DMA_ADDR_CH2, (addr >> 8) & 0xFF);   // High byte

    // Step 4: Set page register (bits 16-23 of address)
    outb(DMA_PAGE_CH2, (addr >> 16) & 0xFF);

    // Step 5: Reset flip-flop again for count
    outb(DMA_FLIPFLOP, 0xFF);

    // Step 6: Set transfer count (count - 1, as it's 0-based)
    count--;
    outb(DMA_COUNT_CH2, count & 0xFF);        // Low byte
    outb(DMA_COUNT_CH2, (count >> 8) & 0xFF); // High byte

    // Step 7: Set mode: single transfer, read, auto-init off, channel 2
    // Mode byte: [7:6]=00 demand, 01 single, 10 block
    //            [5]=0 addr increment, [4]=0 no auto-init
    //            [3:2]=01 read (device→memory), 10 write
    //            [1:0]=channel number
    outb(DMA_MODE, 0x46);  // 01 00 01 10 = single, read, channel 2

    // Step 8: Unmask (enable) the channel
    outb(DMA_MASK, 0x02);  // Enable channel 2

    // DMA is now ready. When device is triggered, transfer will occur.
}

// ISR called when DMA transfer completes
void dma_complete_isr(void) {
    // Check if transfer completed successfully
    unsigned char status = inb(DMA_STATUS);

    if (status & 0x04) {  // Terminal count reached for channel 2
        // Transfer complete!
        // Process the data in buffer
    }

    // Send EOI to interrupt controller
    outb(PIC_CMD, PIC_EOI);
}
`}
      </pre>
    </div>

    {/* Efficiency Comparison */}
    <h2 className="text-3xl font-bold mt-8">Efficiency Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Transferring 1 MB from disk to memory:

═══════════════════════════════════════════════════════════════════════

Programmed I/O:
───────────────
• CPU reads each byte from device, writes to memory
• Cycles per byte: ~10 (read device) + ~10 (write memory) = 20
• Total cycles: 1,048,576 × 20 = 20,971,520 cycles
• Plus polling overhead: ~100,000,000 cycles (waiting)
• CPU Utilization: 100% (all busy with I/O)

═══════════════════════════════════════════════════════════════════════

Interrupt-Driven I/O:
─────────────────────
• One interrupt per byte
• Interrupt overhead: ~500 cycles
• Data transfer: ~20 cycles
• Total per byte: 520 cycles
• Total: 1,048,576 × 520 = 545,259,520 cycles!
• (Too many interrupts - system crawls)

═══════════════════════════════════════════════════════════════════════

DMA:
────
• DMA setup: ~1,000 cycles
• DMA completion interrupt: ~500 cycles
• Total CPU involvement: ~1,500 cycles
• CPU Utilization during transfer: ~0% (FREE!)

═══════════════════════════════════════════════════════════════════════

CPU Cycles Comparison for 1 MB transfer:

                           │◄──── DMA (1,500 cycles) - Barely visible!
┌──────────────────────────┴──────────────────────────────────────────┐
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│                  Interrupt-Driven (545 million)                     │
├─────────────────────────────────────────────────────────────────────┤
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│       Programmed I/O (121 million)                                  │
└─────────────────────────────────────────────────────────────────────┘

Winner: DMA by orders of magnitude!
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>DMA enables direct data transfer between devices and memory without CPU</li>
      <li>CPU only sets up the transfer (address, count, direction) then is free</li>
      <li>DMA controller has its own registers for address, count, and control</li>
      <li>Transfer modes include cycle stealing, burst, demand, and transparent</li>
      <li>Burst mode is fastest but blocks CPU; cycle stealing interleaves with CPU</li>
      <li>CPU receives only one interrupt when entire transfer completes</li>
      <li>Essential for high-bandwidth devices: disks, network, graphics, audio</li>
      <li>Modern systems use bus mastering where devices contain their own DMA</li>
    </ul>
  </div>
);

export default DMA;
