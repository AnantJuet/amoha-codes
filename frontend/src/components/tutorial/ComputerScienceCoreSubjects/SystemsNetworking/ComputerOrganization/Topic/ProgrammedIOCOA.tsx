import React from 'react';

const ProgrammedIOCOA: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Programmed I/O
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Programmed I/O (PIO) is the simplest method of data transfer between the CPU and peripheral
      devices. In this technique, the CPU directly controls the I/O operation by executing
      specific I/O instructions. The CPU is responsible for checking device status, transferring
      data, and managing the entire I/O process through program control.
    </p>

    <h2 className="text-3xl font-bold mt-8">How Programmed I/O Works</h2>
    <p className="leading-relaxed">
      In programmed I/O, the CPU actively participates in every step of the data transfer process.
      The processor executes I/O instructions to check device status, send commands, and transfer
      data byte by byte or word by word.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Programmed I/O Data Flow:

    +--------+                    +------------------+
    |        |  1. Status Check   |                  |
    |  CPU   |<-------------------|  I/O Interface   |
    |        |                    |                  |
    |        |  2. Command        |   +----------+   |
    |        |------------------->|   | Status   |   |
    |        |                    |   | Register |   |
    |        |  3. Data Transfer  |   +----------+   |
    |        |<------------------>|   | Data     |   |
    |        |                    |   | Register |   |
    +--------+                    |   +----------+   |
                                  +------------------+
                                          |
                                  +-------+-------+
                                  |   Peripheral  |
                                  |    Device     |
                                  +---------------+

Steps:
1. CPU reads status register to check if device is ready
2. If ready, CPU sends command to control register
3. CPU transfers data to/from data register
4. CPU repeats until all data is transferred`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Programmed I/O Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Programmed I/O for Output:

START:
    Load data word into accumulator

WAIT_LOOP:
    Read status register
    Check READY bit
    If NOT READY, goto WAIT_LOOP    ; Busy waiting

TRANSFER:
    Write data to I/O data register
    Decrement word count
    If word count > 0, goto START

DONE:
    Signal completion

Assembly Example (Output to Printer):

    MOV  CX, COUNT          ; Number of bytes to send
    LEA  SI, BUFFER         ; Source buffer address

LOOP:
    IN   AL, STATUS_PORT    ; Read printer status
    TEST AL, READY_BIT      ; Check ready flag
    JZ   LOOP               ; Wait if not ready

    LODSB                   ; Load byte from buffer
    OUT  DATA_PORT, AL      ; Send to printer

    DEC  CX                 ; Decrement counter
    JNZ  LOOP               ; Continue if more data

    ; Transfer complete`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Programmed I/O</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Unconditional I/O</h3>
    <p className="leading-relaxed">
      The CPU assumes the device is always ready and transfers data without checking status.
      This is only suitable for very simple devices that are always available.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Unconditional I/O:

; Simple LED output - no status check needed
MOV  AL, LED_PATTERN
OUT  LED_PORT, AL

; Read switch input - always available
IN   AL, SWITCH_PORT
MOV  SWITCH_VALUE, AL

Suitable for:
- Simple output devices (LEDs, seven-segment displays)
- Always-ready input devices (DIP switches)
- Devices with very fast response times`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Conditional (Polled) I/O</h3>
    <p className="leading-relaxed">
      The CPU repeatedly checks (polls) the device status before transferring data. This
      ensures the device is ready but wastes CPU cycles during the waiting period.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Conditional (Polled) I/O:

; Read from keyboard with polling
POLL_KEYBOARD:
    IN   AL, KEYBOARD_STATUS    ; Read status register
    TEST AL, DATA_READY         ; Check if key pressed
    JZ   POLL_KEYBOARD          ; Keep polling if not ready

    IN   AL, KEYBOARD_DATA      ; Read the key code
    MOV  KEY_BUFFER, AL         ; Store in buffer

Polling Loop Timing:

CPU Time  ----+----+----+----+----+----+----+----
              |    |    |    |    |    |    |    |
Poll      -->[ ]  [ ]  [ ]  [ ]  [X]
                              Device becomes ready
                                    |
                              Data Transfer

[ ] = Poll (status check)
[X] = Data ready, transfer occurs

CPU utilization during polling: ~100%
Effective work done: Near 0% until device ready`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Busy Waiting (Polling)</h2>
    <p className="leading-relaxed">
      The main characteristic of programmed I/O is busy waiting, where the CPU continuously
      polls the device status register until the device becomes ready. This is also called
      spin-waiting or polling.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Busy Waiting Analysis:

Timeline for Slow Device:

Time (ms):  0    1    2    3    4    5    6    7    8
            |----|----|----|----|----|----|----|----|

CPU:        Poll Poll Poll Poll Poll Poll Poll Poll Transfer
                                                    ^
                                            Device ready after 7ms

CPU Cycles Wasted (Example):
- CPU Clock: 1 GHz (1 billion cycles/sec)
- Device response time: 10 ms
- Poll instruction cycles: ~20 cycles
- Time per poll: 20 ns

Wasted cycles = (10 ms / 20 ns) * 20 = 10,000,000 cycles!

Busy Waiting Problem:
+--------------------------------------------------+
| While waiting for device:                        |
| - CPU cannot execute other programs              |
| - Power is consumed without useful work          |
| - System appears unresponsive                    |
| - Multiple slow devices compound the problem     |
+--------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Keyboard Input with Programmed I/O</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Keyboard Interface Registers:

Address 0x60: Data Register (read key scan code)
Address 0x64: Status Register (bit 0 = Output Buffer Full)

Reading a Keystroke:

read_key:
    ; Wait for key press
wait_key:
    IN   AL, 0x64           ; Read status port
    AND  AL, 0x01           ; Mask output buffer full bit
    JZ   wait_key           ; Loop until data available

    ; Read the scan code
    IN   AL, 0x60           ; Read key scan code
    RET                     ; Return with key in AL

C Equivalent:

unsigned char read_key() {
    // Poll status register
    while ((inb(0x64) & 0x01) == 0) {
        // Busy wait - do nothing
    }
    // Read and return key code
    return inb(0x60);
}

Timing:
- Typical typing speed: 5 keys/second
- Time between keystrokes: 200 ms
- CPU cycles wasted per keystroke: ~200 million!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Printer Output with Programmed I/O</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Parallel Printer Port Registers:

Address 0x378: Data Register (character to print)
Address 0x379: Status Register (bit 7 = Busy, inverted)
Address 0x37A: Control Register

Printing a String:

print_string:
    MOV  SI, string_ptr     ; Point to string

print_loop:
    LODSB                   ; Load character
    OR   AL, AL             ; Check for null terminator
    JZ   print_done         ; Exit if end of string

    ; Wait for printer ready
wait_printer:
    IN   AL, 0x379          ; Read status
    TEST AL, 0x80           ; Check busy bit (inverted)
    JZ   wait_printer       ; Wait if busy

    ; Send character
    LODSB                   ; Reload character
    OUT  0x378, AL          ; Send to printer

    ; Strobe the character
    IN   AL, 0x37A          ; Read control
    OR   AL, 0x01           ; Set strobe bit
    OUT  0x37A, AL          ; Strobe high
    AND  AL, 0xFE           ; Clear strobe bit
    OUT  0x37A, AL          ; Strobe low

    JMP  print_loop         ; Next character

print_done:
    RET`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multiple Device Polling</h2>
    <p className="leading-relaxed">
      When multiple devices need service, the CPU must poll each device in sequence.
      Priority can be implemented by polling order.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Multiple Device Polling Algorithm:

poll_devices:
    ; Check highest priority device first
    IN   AL, DEVICE1_STATUS
    TEST AL, READY_BIT
    JNZ  service_device1

    ; Check next priority device
    IN   AL, DEVICE2_STATUS
    TEST AL, READY_BIT
    JNZ  service_device2

    ; Check lowest priority device
    IN   AL, DEVICE3_STATUS
    TEST AL, READY_BIT
    JNZ  service_device3

    ; No device ready, continue polling
    JMP  poll_devices

service_device1:
    ; Handle device 1
    CALL device1_handler
    JMP  poll_devices

service_device2:
    ; Handle device 2
    CALL device2_handler
    JMP  poll_devices

service_device3:
    ; Handle device 3
    CALL device3_handler
    JMP  poll_devices

Priority Levels:
Device 1: Highest (checked first)
Device 2: Medium
Device 3: Lowest (may starve if others busy)`}
      </pre>
    </div>

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
            <td className="p-3 border">Simple to implement and understand</td>
            <td className="p-3 border">Wastes CPU cycles (busy waiting)</td>
          </tr>
          <tr>
            <td className="p-3 border">No special hardware required</td>
            <td className="p-3 border">CPU cannot do other work while waiting</td>
          </tr>
          <tr>
            <td className="p-3 border">Deterministic behavior</td>
            <td className="p-3 border">Poor CPU utilization with slow devices</td>
          </tr>
          <tr>
            <td className="p-3 border">Easy to debug</td>
            <td className="p-3 border">Response time depends on poll frequency</td>
          </tr>
          <tr>
            <td className="p-3 border">Good for fast, simple devices</td>
            <td className="p-3 border">Difficulty handling multiple devices</td>
          </tr>
          <tr>
            <td className="p-3 border">No interrupt overhead</td>
            <td className="p-3 border">Not suitable for real-time systems</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Performance Analysis</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Programmed I/O Performance Calculation:

Given:
- CPU clock: 2 GHz
- Device data rate: 1 MB/s
- Bytes per transfer: 1 byte
- Instructions per transfer: 10 instructions
- Average CPI: 2 cycles

CPU cycles per byte = 10 instructions * 2 CPI = 20 cycles
Time per byte = 20 cycles / (2 * 10^9) = 10 ns

Maximum transfer rate = 1 / 10 ns = 100 MB/s
(CPU can handle up to 100 MB/s if no waiting)

With device at 1 MB/s:
- Time per byte at device = 1 us
- CPU cycles per byte = 1 us * 2 GHz = 2000 cycles
- Only 20 cycles useful, 1980 cycles wasted
- CPU utilization = 20 / 2000 = 1%

CPU Efficiency Formula:
Efficiency = (Transfer time) / (Transfer time + Wait time)

For slow devices:
Efficiency = (10 ns) / (1 us) = 1%

The slower the device, the worse the CPU utilization!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use Programmed I/O</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Simple embedded systems:</strong> Where CPU has nothing else to do</li>
      <li><strong>Fast devices:</strong> Where wait time is minimal</li>
      <li><strong>Initialization sequences:</strong> Setting up devices at boot</li>
      <li><strong>Debugging:</strong> Simpler than interrupt-driven I/O</li>
      <li><strong>Single-tasking systems:</strong> Where multitasking is not required</li>
      <li><strong>Real-time constraints:</strong> When interrupt latency is unacceptable</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Programmed I/O is the simplest I/O technique with CPU controlling all transfers</li>
        <li>CPU polls device status (busy waiting) until device is ready</li>
        <li>Unconditional I/O assumes device is always ready</li>
        <li>Conditional I/O checks status before each transfer</li>
        <li>Major disadvantage is wasted CPU cycles during polling</li>
        <li>CPU utilization is poor with slow peripheral devices</li>
        <li>Multiple devices require sequential polling with priority</li>
        <li>Best suited for simple systems or fast devices</li>
        <li>Interrupt-driven I/O and DMA address the inefficiencies of programmed I/O</li>
      </ul>
    </div>
  </div>
);

export default ProgrammedIOCOA;
