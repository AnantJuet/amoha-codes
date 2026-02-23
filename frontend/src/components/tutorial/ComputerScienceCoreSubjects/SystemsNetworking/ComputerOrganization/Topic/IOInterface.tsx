import React from 'react';

const IOInterface: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      I/O Interface
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An I/O Interface acts as a bridge between the CPU/memory and peripheral devices. It handles
      the communication protocol differences, speed mismatches, and data format conversions between
      the processor and various input/output devices. Without I/O interfaces, the CPU would not be
      able to communicate effectively with the diverse range of peripheral devices.
    </p>

    <h2 className="text-3xl font-bold mt-8">Need for I/O Interface</h2>
    <p className="leading-relaxed">
      I/O interfaces are necessary because peripheral devices differ significantly from the CPU
      in several aspects:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Speed Difference:</strong> Peripherals operate much slower than the CPU</li>
      <li><strong>Data Format:</strong> Different devices use different data formats and word lengths</li>
      <li><strong>Operating Modes:</strong> Peripherals may be serial while CPU uses parallel data</li>
      <li><strong>Control Signals:</strong> Different timing and control signal requirements</li>
      <li><strong>Error Handling:</strong> Different error detection and correction mechanisms</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`I/O Interface Connection:

+-------------+      +-----------------+      +------------------+
|             |      |                 |      |                  |
|    CPU      |<---->|   I/O Interface |<---->|  Peripheral      |
|             |      |                 |      |  Device          |
+-------------+      +-----------------+      +------------------+
      |                     |
      v                     v
+-------------+      +-----------------+
|   Memory    |      |  Data Buffers   |
|   (RAM)     |      |  Control Logic  |
+-------------+      |  Status Regs    |
                     +-----------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Functions of I/O Interface</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Synchronization</td>
            <td className="p-3 border">Coordinates data transfer timing between CPU and peripherals</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Buffering</td>
            <td className="p-3 border">Temporarily stores data to compensate for speed differences</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Conversion</td>
            <td className="p-3 border">Converts between serial and parallel data formats</td>
          </tr>
          <tr>
            <td className="p-3 border">Error Detection</td>
            <td className="p-3 border">Checks for transmission errors and reports status</td>
          </tr>
          <tr>
            <td className="p-3 border">Device Selection</td>
            <td className="p-3 border">Selects the appropriate device for communication</td>
          </tr>
          <tr>
            <td className="p-3 border">Status Reporting</td>
            <td className="p-3 border">Provides device status information to the CPU</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">I/O Interface Components</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Data Registers</h3>
    <p className="leading-relaxed">
      Hold data being transferred between CPU and peripheral devices. The data register
      acts as a buffer to hold data temporarily during the transfer process.
    </p>

    <h3 className="text-2xl font-semibold mt-6">2. Status Register</h3>
    <p className="leading-relaxed">
      Contains flags that indicate the current state of the peripheral device and the
      interface. Common status flags include:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 ml-4">
      <li><strong>Ready:</strong> Device is ready to accept or send data</li>
      <li><strong>Busy:</strong> Device is currently processing</li>
      <li><strong>Error:</strong> An error occurred during operation</li>
      <li><strong>Done:</strong> Operation completed successfully</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">3. Control Register</h3>
    <p className="leading-relaxed">
      Stores control information sent by the CPU to configure and control the peripheral
      device. This includes operation mode, interrupt enable, and other configuration settings.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`I/O Interface Register Structure:

+----------------------------------+
|        I/O Interface             |
+----------------------------------+
|                                  |
|  +----------------------------+  |
|  |     Data Register          |  |  <-- Holds data for transfer
|  +----------------------------+  |
|                                  |
|  +----------------------------+  |
|  |     Status Register        |  |  <-- Device status flags
|  |  [Ready|Busy|Error|Done]   |  |
|  +----------------------------+  |
|                                  |
|  +----------------------------+  |
|  |     Control Register       |  |  <-- Configuration settings
|  |  [Mode|IntEn|Start|Reset]  |  |
|  +----------------------------+  |
|                                  |
|  +----------------------------+  |
|  |     Control Logic          |  |  <-- Manages operations
|  +----------------------------+  |
|                                  |
+----------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">I/O Port Addressing</h2>
    <p className="leading-relaxed">
      I/O interfaces can be addressed using two main methods:
    </p>

    <h3 className="text-2xl font-semibold mt-6">1. Memory-Mapped I/O</h3>
    <p className="leading-relaxed">
      I/O devices are assigned addresses within the memory address space. The same instructions
      used for memory access (LOAD, STORE) can be used for I/O operations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Memory-Mapped I/O:

Address Space:
+--------------------+ 0xFFFF
|                    |
|   I/O Devices      | <-- I/O ports mapped here
|   (Keyboard: 0xFF00|
|    Display: 0xFF04)|
|                    |
+--------------------+ 0xF000
|                    |
|      RAM           | <-- Main Memory
|                    |
+--------------------+ 0x0000

Example Instructions:
  LOAD  R1, 0xFF00    ; Read from keyboard
  STORE R2, 0xFF04    ; Write to display

Advantages:
- Uses same instruction set
- Flexible addressing modes
- No special I/O instructions needed

Disadvantages:
- Reduces available memory space
- Need address decoding logic`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. I/O-Mapped I/O (Port-Mapped I/O)</h3>
    <p className="leading-relaxed">
      I/O devices have a separate address space from memory. Special I/O instructions (IN, OUT)
      are used to communicate with peripheral devices.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`I/O-Mapped (Isolated) I/O:

Separate Address Spaces:

Memory Space:           I/O Space:
+---------------+       +---------------+
|    RAM        |       | Port 0x03F8   | (COM1)
|    ROM        |       | Port 0x0378   | (LPT1)
+---------------+       | Port 0x0060   | (Keyboard)
   0x0000-0xFFFF           0x0000-0xFFFF

Example Instructions:
  IN  AL, 0x60        ; Read from keyboard port
  OUT 0x378, AL       ; Write to printer port

Control Line:
- M/IO# signal distinguishes memory vs I/O access
- M/IO# = 1: Memory operation
- M/IO# = 0: I/O operation

Advantages:
- Full memory space available
- Clear separation of concerns
- Simpler address decoding

Disadvantages:
- Requires special I/O instructions
- Limited addressing modes`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">I/O Interface Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Data Transfer Sequence:

CPU Writing to Device:
1. CPU checks status register (Ready flag)
2. If ready, CPU writes data to data register
3. CPU sets control register (Start operation)
4. Interface transfers data to device
5. Device acknowledges completion
6. Interface updates status register

CPU Reading from Device:
1. CPU sends read command via control register
2. Interface requests data from device
3. Device sends data to interface
4. Interface stores data in data register
5. Interface sets status flag (Data Ready)
6. CPU reads data from data register

Timing Diagram:
         _____         _____
CPU_CLK |     |_______|     |_______

        _______________
CS      _____|         |____________

            ___________
RD/WR   ___|           |____________

             __________
DATA    ----<__________>------------
                 VALID`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of I/O Interfaces</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Interface Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example Devices</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Parallel Interface</td>
            <td className="p-3 border">Transfers multiple bits simultaneously</td>
            <td className="p-3 border">Printer (LPT), IDE drive</td>
          </tr>
          <tr>
            <td className="p-3 border">Serial Interface</td>
            <td className="p-3 border">Transfers one bit at a time</td>
            <td className="p-3 border">USB, RS-232, SATA</td>
          </tr>
          <tr>
            <td className="p-3 border">Programmable Interface</td>
            <td className="p-3 border">Configurable for various applications</td>
            <td className="p-3 border">8255 PPI, 8251 USART</td>
          </tr>
          <tr>
            <td className="p-3 border">DMA Interface</td>
            <td className="p-3 border">Direct memory access without CPU</td>
            <td className="p-3 border">8237 DMA controller</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Handshaking Protocols</h2>
    <p className="leading-relaxed">
      Handshaking ensures synchronized data transfer between the interface and peripheral:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Handshaking for Output:

Interface                          Device
    |                                 |
    |---- Data Valid (STROBE) ------->|
    |                                 |
    |<--- Acknowledge (ACK) ----------|
    |                                 |

Timing:
        ________________________
DATA    <______________________>
              VALID DATA
             _____
STROBE  ____|     |_____________
                   _____
ACK     __________|     |_______

Handshaking for Input:

Device                            Interface
    |                                 |
    |---- Data Available (DAV) ------>|
    |                                 |
    |<--- Data Accepted (DAC) --------|
    |                                 |`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">8255 Programmable Peripheral Interface</h2>
    <p className="leading-relaxed">
      The Intel 8255 is a widely used programmable I/O interface chip that provides
      three 8-bit I/O ports (Port A, Port B, Port C) configurable for different modes.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`8255 PPI Block Diagram:

              +-------------------+
              |       8255        |
   D0-D7 <--->|    Data Bus       |
              |    Buffer         |
              +-------------------+
                      |
          +-----------+-----------+
          |           |           |
    +-----+---+ +-----+---+ +-----+---+
    | Port A  | | Port B  | | Port C  |
    | PA0-PA7 | | PB0-PB7 | | PC0-PC7 |
    +---------+ +---------+ +---------+
         |           |           |
    (Peripheral) (Peripheral) (Handshake
      Group A      Group B     Signals)

Modes of Operation:
- Mode 0: Basic Input/Output
- Mode 1: Strobed Input/Output (Handshaking)
- Mode 2: Bidirectional Bus (Port A only)

Control Word Format:
Bit 7: Mode Set Flag (1 = Active)
Bits 6-5: Port A Mode (00=Mode 0, 01=Mode 1, 1x=Mode 2)
Bit 4: Port A Direction (1=Input, 0=Output)
Bit 3: Port C Upper Direction
Bit 2: Port B Mode (0=Mode 0, 1=Mode 1)
Bit 1: Port B Direction
Bit 0: Port C Lower Direction`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>I/O Interface bridges the gap between CPU and peripheral devices</li>
        <li>Handles speed differences through buffering and synchronization</li>
        <li>Contains data, status, and control registers</li>
        <li>Memory-mapped I/O uses same address space as memory</li>
        <li>I/O-mapped (isolated) I/O uses separate address space with special instructions</li>
        <li>Handshaking protocols ensure reliable data transfer</li>
        <li>Programmable interfaces like 8255 provide flexible I/O configuration</li>
        <li>I/O interfaces perform data format conversion (serial/parallel)</li>
      </ul>
    </div>
  </div>
);

export default IOInterface;
