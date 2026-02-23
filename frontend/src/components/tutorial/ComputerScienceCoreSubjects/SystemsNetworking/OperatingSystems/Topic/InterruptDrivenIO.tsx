import React from 'react';

const InterruptDrivenIO: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Interrupt-Driven I/O
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Interrupt-driven I/O is a technique where the CPU initiates an I/O operation and then
      continues executing other tasks. When the I/O device is ready, it sends an interrupt
      signal to the CPU, which then handles the data transfer. This approach eliminates the
      wasteful busy-waiting of programmed I/O.
    </p>

    {/* How Interrupt-Driven I/O Works */}
    <h2 className="text-3xl font-bold mt-8">How Interrupt-Driven I/O Works</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Interrupt-Driven I/O Timeline:

CPU Process Timeline:
┌────────────────────────────────────────────────────────────────────────┐
│   Issue   │     Execute Process A     │  ISR  │  Execute Process A    │
│   I/O     │     (useful work!)        │       │  (continues)          │
│   Command │                           │       │                       │
└────┬──────┴───────────────────────────┴───┬───┴───────────────────────┘
     │                                      │
     │ I/O Command                          │ Interrupt Signal
     ▼                                      │
┌────────────────────────────────────────────────────────────────────────┐
│                           I/O Device                                   │
│  ┌─────────────────────────────────────────────────────────────────┐  │
│  │                                                                 │  │
│  │   Receive    ──►   Perform Operation   ──►   Signal Ready       │  │
│  │   Command          (Read/Write Data)         (Send Interrupt)   │  │
│  │                                                                 │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│                                                       │               │
│                                                       ▼               │
│                                              ┌──────────────────┐     │
│                                              │ Assert IRQ Line  │─────┼──►
│                                              └──────────────────┘     │
└────────────────────────────────────────────────────────────────────────┘

Key Difference from Programmed I/O:
───────────────────────────────────
Programmed I/O: CPU polls repeatedly while waiting
Interrupt I/O:  CPU does useful work while waiting
`}
      </pre>
    </div>

    {/* Interrupt Handling Process */}
    <h2 className="text-3xl font-bold mt-8">Interrupt Handling Process</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Step-by-Step Interrupt Handling:

                    Device asserts interrupt
                            │
                            ▼
┌───────────────────────────────────────────────────────────────────────┐
│  Step 1: INTERRUPT DETECTION                                          │
│  ─────────────────────────────                                        │
│  • CPU checks interrupt line at end of each instruction cycle         │
│  • If interrupt is pending and interrupts are enabled → proceed       │
└───────────────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌───────────────────────────────────────────────────────────────────────┐
│  Step 2: SAVE CPU STATE                                               │
│  ──────────────────────────                                           │
│  • Push current PC (Program Counter) to stack                         │
│  • Push processor status register (flags) to stack                    │
│  • Save other registers (depending on architecture)                   │
│                                                                       │
│  Stack before:          Stack after:                                  │
│  ┌─────────────┐        ┌─────────────┐                              │
│  │    ...      │        │    ...      │                              │
│  ├─────────────┤        ├─────────────┤                              │
│  │   (empty)   │        │ Return PC   │ ← Saved program counter      │
│  └─────────────┘        ├─────────────┤                              │
│                         │   Flags     │ ← Saved status flags         │
│                         └─────────────┘                              │
└───────────────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌───────────────────────────────────────────────────────────────────────┐
│  Step 3: DISABLE INTERRUPTS                                           │
│  ────────────────────────────                                         │
│  • Set interrupt disable flag to prevent nested interrupts            │
│  • (Optional: Some systems allow nested interrupts with priorities)   │
└───────────────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌───────────────────────────────────────────────────────────────────────┐
│  Step 4: DETERMINE INTERRUPT SOURCE                                   │
│  ─────────────────────────────────────                                │
│  Method A: Vectored Interrupts                                        │
│  • Device provides interrupt number                                   │
│  • CPU looks up handler address in Interrupt Vector Table (IVT)       │
│                                                                       │
│  Method B: Polling                                                    │
│  • CPU polls each device to find which one interrupted                │
└───────────────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌───────────────────────────────────────────────────────────────────────┐
│  Step 5: EXECUTE INTERRUPT SERVICE ROUTINE (ISR)                      │
│  ──────────────────────────────────────────────                       │
│  • Jump to ISR address from IVT                                       │
│  • ISR handles the I/O (reads/writes data)                            │
│  • ISR acknowledges the interrupt to the device                       │
└───────────────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌───────────────────────────────────────────────────────────────────────┐
│  Step 6: RESTORE CPU STATE                                            │
│  ─────────────────────────                                            │
│  • Pop saved flags from stack                                         │
│  • Pop saved PC from stack                                            │
│  • Re-enable interrupts                                               │
│  • Resume interrupted program                                         │
└───────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Interrupt Vector Table */}
    <h2 className="text-3xl font-bold mt-8">Interrupt Vector Table (IVT)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Interrupt Vector Table Structure:

Memory Address 0x00000000 (typically at start of memory)
┌─────────────────────────────────────────────────────────────────────┐
│                    Interrupt Vector Table                           │
├───────────┬────────────────────────┬────────────────────────────────┤
│  Vector # │    Description         │    Handler Address             │
├───────────┼────────────────────────┼────────────────────────────────┤
│    0      │  Divide by Zero        │    0x00001000                  │
│    1      │  Debug Exception       │    0x00001100                  │
│    2      │  NMI (Non-Maskable)    │    0x00001200                  │
│    3      │  Breakpoint            │    0x00001300                  │
│    ...    │  ...                   │    ...                         │
│    32     │  Timer Interrupt       │    0x00010000  ──────┐         │
│    33     │  Keyboard (IRQ 1)      │    0x00010100  ────┐ │         │
│    34     │  Cascade (IRQ 2)       │    0x00010200      │ │         │
│    ...    │  ...                   │    ...             │ │         │
│    46     │  Disk (IRQ 14)         │    0x00010E00      │ │         │
│    47     │  Secondary IDE         │    0x00010F00      │ │         │
└───────────┴────────────────────────┴──────────────────┼─┼─────────────
                                                        │ │
                                                        │ │
    Keyboard ISR at 0x00010100: ◄───────────────────────┘ │
    ┌────────────────────────────────────┐                │
    │  keyboard_isr:                     │                │
    │      push registers                │                │
    │      read scan code from port      │                │
    │      process keypress              │                │
    │      send EOI to PIC               │                │
    │      pop registers                 │                │
    │      iret                          │                │
    └────────────────────────────────────┘                │
                                                          │
    Timer ISR at 0x00010000: ◄─────────────────────────────┘
    ┌────────────────────────────────────┐
    │  timer_isr:                        │
    │      push registers                │
    │      update system time            │
    │      schedule next process         │
    │      send EOI to PIC               │
    │      pop registers                 │
    │      iret                          │
    └────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Interrupt Controller */}
    <h2 className="text-3xl font-bold mt-8">Programmable Interrupt Controller (PIC)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
PIC Architecture (8259A):

┌───────────────────────────────────────────────────────────────────────┐
│                                                                       │
│   Device IRQ Lines            Master PIC              CPU            │
│   ───────────────             ──────────              ───            │
│                                                                       │
│   IRQ0 (Timer)     ──────►┌────────────────┐                         │
│   IRQ1 (Keyboard)  ──────►│                │                         │
│   IRQ2 (Cascade)   ──────►│   Master PIC   │                         │
│   IRQ3 (COM2)      ──────►│    (8259A)     │──────►  INTR ──────► CPU│
│   IRQ4 (COM1)      ──────►│                │                         │
│   IRQ5 (LPT2)      ──────►│                │                         │
│   IRQ6 (Floppy)    ──────►│                │                         │
│   IRQ7 (LPT1)      ──────►└────────────────┘                         │
│                                   ▲                                   │
│                                   │ Cascade                          │
│                                   │                                   │
│   IRQ8 (RTC)       ──────►┌────────────────┐                         │
│   IRQ9 (ACPI)      ──────►│                │                         │
│   IRQ10 (Available)──────►│   Slave PIC    │                         │
│   IRQ11 (Available)──────►│    (8259A)     │                         │
│   IRQ12 (PS/2 Mouse)─────►│                │                         │
│   IRQ13 (FPU)      ──────►│                │                         │
│   IRQ14 (Primary IDE)────►│                │                         │
│   IRQ15 (Secondary IDE)──►└────────────────┘                         │
│                                                                       │
└───────────────────────────────────────────────────────────────────────┘

Priority: IRQ0 (highest) → IRQ7, IRQ8 → IRQ15 (lowest)
`}
      </pre>
    </div>

    {/* ISR Example Code */}
    <h2 className="text-3xl font-bold mt-8">Interrupt Service Routine Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
// Keyboard Interrupt Service Routine Example

#define KEYBOARD_DATA_PORT   0x60
#define KEYBOARD_STATUS_PORT 0x64
#define PIC_EOI              0x20
#define PIC_MASTER_CMD       0x20

// Global keyboard buffer
volatile char keyboard_buffer[256];
volatile int buffer_head = 0;
volatile int buffer_tail = 0;

// The ISR - called when keyboard interrupt occurs
void keyboard_isr(void) {
    // Step 1: Save registers (usually done automatically or by compiler)

    // Step 2: Read the scan code from keyboard
    unsigned char status = inb(KEYBOARD_STATUS_PORT);

    if (status & 0x01) {  // Check if data is available
        unsigned char scancode = inb(KEYBOARD_DATA_PORT);

        // Step 3: Process the scan code
        if (!(scancode & 0x80)) {  // Key press (not release)
            char ascii = scancode_to_ascii(scancode);

            // Add to circular buffer
            keyboard_buffer[buffer_head] = ascii;
            buffer_head = (buffer_head + 1) % 256;
        }
    }

    // Step 4: Send End-Of-Interrupt (EOI) to PIC
    // This is CRITICAL - tells PIC we're done handling
    outb(PIC_MASTER_CMD, PIC_EOI);

    // Step 5: Restore registers and return (iret instruction)
}

// Main program - reads from buffer when ready
char read_keyboard(void) {
    // Wait for data in buffer (could also use semaphore)
    while (buffer_head == buffer_tail) {
        // Buffer empty - could yield to other processes
        schedule();  // Let other processes run
    }

    char c = keyboard_buffer[buffer_tail];
    buffer_tail = (buffer_tail + 1) % 256;
    return c;
}
`}
      </pre>
    </div>

    {/* CPU Efficiency Comparison */}
    <h2 className="text-3xl font-bold mt-8">CPU Efficiency Analysis</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Comparison: Programmed I/O vs Interrupt-Driven I/O

Scenario: Reading keystrokes (1 character per second, user types 60 WPM)
CPU: 1 GHz (1 billion cycles per second)

═══════════════════════════════════════════════════════════════════════

Programmed I/O (Polling):
─────────────────────────
Time between keystrokes: ~200 ms (at 60 WPM, ~5 chars/sec)
Polling cycle: 100 cycles
Polls per keystroke: 200ms × 1GHz / 100 = 2,000,000 polls

CPU cycles wasted polling: 2,000,000 × 100 = 200,000,000 cycles
CPU cycles for reading data: ~50 cycles

CPU Utilization: 200,000,000 / 200,000,000 = 100% (all wasted polling!)

═══════════════════════════════════════════════════════════════════════

Interrupt-Driven I/O:
─────────────────────
Interrupt overhead: ~500 cycles (context save/restore)
ISR execution: ~200 cycles
Total per keystroke: ~700 cycles

CPU cycles for I/O: 700 cycles
CPU cycles available for other work: 200,000,000 - 700 = 199,999,300

CPU Utilization for other work: 99.9996%!

═══════════════════════════════════════════════════════════════════════

Visual Comparison (200 million cycles):

Programmed I/O:
┌────────────────────────────────────────────────────────────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│                         All polling (100%)                          │
└────────────────────────────────────────────────────────────────────┘

Interrupt-Driven I/O:
┌────────────────────────────────────────────────────────────────────┐
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓│
│           Available for other work (99.9996%)               │ISR│  │
└────────────────────────────────────────────────────────────────────┘
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
            <td className="p-3 border">CPU can do useful work while waiting</td>
            <td className="p-3 border">Interrupt overhead per transfer</td>
          </tr>
          <tr>
            <td className="p-3 border">No busy-waiting (no wasted cycles)</td>
            <td className="p-3 border">Context switch overhead</td>
          </tr>
          <tr>
            <td className="p-3 border">Better for multitasking systems</td>
            <td className="p-3 border">More complex to implement</td>
          </tr>
          <tr>
            <td className="p-3 border">Responsive to I/O events</td>
            <td className="p-3 border">Requires interrupt controller hardware</td>
          </tr>
          <tr>
            <td className="p-3 border">Supports multiple devices</td>
            <td className="p-3 border">High overhead for bulk transfers</td>
          </tr>
          <tr>
            <td className="p-3 border">Good for slow, infrequent I/O</td>
            <td className="p-3 border">Interrupt latency can vary</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Interrupt-driven I/O allows CPU to do useful work while waiting for devices</li>
      <li>Device signals CPU via interrupt when ready, triggering an ISR</li>
      <li>Interrupt Vector Table maps interrupt numbers to handler addresses</li>
      <li>PIC (Programmable Interrupt Controller) manages multiple interrupt sources</li>
      <li>ISR must save state, handle I/O, send EOI, and restore state</li>
      <li>Much more efficient than programmed I/O for slow devices</li>
      <li>Still has per-byte overhead; DMA is better for bulk transfers</li>
    </ul>
  </div>
);

export default InterruptDrivenIO;
