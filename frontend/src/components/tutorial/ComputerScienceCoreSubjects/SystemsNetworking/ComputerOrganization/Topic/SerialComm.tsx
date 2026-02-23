import React from 'react';

const SerialComm: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Serial Communication
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Serial communication is a method of data transmission where bits are sent one at a time,
      sequentially, over a single communication line. Despite being slower than parallel
      communication for a given clock rate, serial communication is widely used due to its
      simplicity, lower cost, and ability to maintain signal integrity over long distances.
    </p>

    <h2 className="text-3xl font-bold mt-8">Serial vs Parallel Transmission</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Serial Communication:

Sender                                              Receiver
+------+                                            +------+
|      |  Bit 0 -> Bit 1 -> Bit 2 -> ... -> Bit 7   |      |
| Data |==========================================> | Data |
|      |              Single Wire                   |      |
+------+                                            +------+

Timing: [B0][B1][B2][B3][B4][B5][B6][B7]
         |   |   |   |   |   |   |   |
         T0  T1  T2  T3  T4  T5  T6  T7

One byte takes 8 bit times

Parallel Communication:

Sender                                    Receiver
+------+     Bit 7 ===================== +------+
|      |     Bit 6 ===================== |      |
| Data |     Bit 5 ===================== | Data |
|      |     Bit 4 ===================== |      |
|      |     Bit 3 ===================== |      |
|      |     Bit 2 ===================== |      |
|      |     Bit 1 ===================== |      |
|      |     Bit 0 ===================== |      |
+------+     (8 wires)                   +------+

Timing: [B0-B7]
        All 8 bits sent simultaneously
One byte takes 1 bit time`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Serial Transmission</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Asynchronous Serial Communication</h3>
    <p className="leading-relaxed">
      Data is sent character by character with start and stop bits framing each character.
      No separate clock signal is needed; sender and receiver use agreed-upon timing.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Asynchronous Data Frame:

Idle  Start   Data Bits (LSB first)    Parity  Stop  Idle
High   Low   D0  D1  D2  D3  D4  D5  D6  D7    Bit   High
  |     |     |   |   |   |   |   |   |   |     |     |
~~+     +-----+---+---+---+---+---+---+---+-----+-----+~~~
        |<------------ 1 Character ----------->|

Standard Frame Formats:
- 8N1: 8 data bits, No parity, 1 stop bit (most common)
- 7E1: 7 data bits, Even parity, 1 stop bit
- 8O2: 8 data bits, Odd parity, 2 stop bits

Frame Components:
- Start Bit: Always LOW (0), signals start of frame
- Data Bits: 5 to 9 bits, LSB transmitted first
- Parity Bit: Optional error detection
- Stop Bits: 1, 1.5, or 2 bits, always HIGH (1)

Example - Sending ASCII 'A' (0x41 = 01000001):

Idle |Start| D0 | D1 | D2 | D3 | D4 | D5 | D6 | D7 |Stop|Idle
  1  |  0  |  1 |  0 |  0 |  0 |  0 |  0 |  1 |  0 |  1 |  1
     |     | LSB                             MSB  |    |`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Synchronous Serial Communication</h3>
    <p className="leading-relaxed">
      Data is sent in continuous streams with a shared clock signal. More efficient for
      large data transfers as there's no overhead of start/stop bits for each byte.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Synchronous Transmission:

+--------+     Data Line      +--------+
| Sender |===================>|Receiver|
|        |                    |        |
|        |     Clock Line     |        |
|        |===================>|        |
+--------+                    +--------+

Clock:  _|~|_|~|_|~|_|~|_|~|_|~|_|~|_|~|_
Data:   -<B0>-<B1>-<B2>-<B3>-<B4>-<B5>-<B6>-<B7>-...
           ^    ^    ^    ^    ^    ^    ^    ^
           Sample points on clock edge

Synchronous Frame Format:

+--------+--------+------------------+--------+
|  Sync  |  Sync  |     Data         |  CRC   |
| Char 1 | Char 2 | (multiple bytes) |        |
+--------+--------+------------------+--------+

Advantages over Asynchronous:
- No start/stop bit overhead
- Higher effective data rate
- Better for continuous data streams

Protocols: SPI, I2C, HDLC, SDLC`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RS-232 Standard</h2>
    <p className="leading-relaxed">
      RS-232 is a widely used standard for serial communication between computers and
      peripheral devices. It defines electrical characteristics, signal timing, and
      connector pinouts.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`RS-232 Voltage Levels:

        Logic 1          Logic 0
        (Mark)           (Space)

     -15V to -3V      +3V to +15V

             -15V ----+
                      |
        Logic 1 ------|-------- -3V
                      |
          Invalid ----|-------- +3V
                      |
        Logic 0 ------|-------- +15V
                      |

Note: Inverted logic compared to TTL
- Negative voltage = Logic 1
- Positive voltage = Logic 0

DB-9 Connector Pinout:
Pin  Name   Direction  Description
---  ----   ---------  -----------
1    DCD    Input      Data Carrier Detect
2    RXD    Input      Receive Data
3    TXD    Output     Transmit Data
4    DTR    Output     Data Terminal Ready
5    GND    -          Signal Ground
6    DSR    Input      Data Set Ready
7    RTS    Output     Request To Send
8    CTS    Input      Clear To Send
9    RI     Input      Ring Indicator

+-------------------+
|  1   2   3   4   5|
|    6   7   8   9  |
+-------------------+
   Female DB-9 view`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Flow Control</h2>

    <h3 className="text-2xl font-semibold mt-6">Hardware Flow Control (RTS/CTS)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`RTS/CTS Hardware Handshaking:

Sender                              Receiver
  |                                    |
  |---- RTS (Request To Send) -------->|
  |                                    |
  |<--- CTS (Clear To Send) -----------|
  |                                    |
  |==== Data Transfer ================>|
  |                                    |
  |<--- CTS Low (Buffer Full) ---------|
  |                                    |
  |     (Sender pauses)                |
  |                                    |
  |<--- CTS High (Buffer Ready) -------|
  |                                    |
  |==== Data Transfer Resumes ========>|

Timeline:
RTS:  _____|~~~~~~~~~~~~~~~~~~|_____
CTS:  ________|~~~~~~~~~|___|~~|____
DATA: ________|=========|___|==|____
                   ^      ^
                   |      Buffer full, pause`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Software Flow Control (XON/XOFF)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`XON/XOFF Software Handshaking:

Control Characters:
- XON  (DC1) = 0x11 = Continue transmission
- XOFF (DC3) = 0x13 = Pause transmission

Sender                              Receiver
  |                                    |
  |==== Data =========================>|
  |                                    | Buffer filling
  |<--- XOFF (0x13) -------------------|
  |                                    |
  |     (Sender pauses)                | Buffer draining
  |                                    |
  |<--- XON (0x11) --------------------|
  |                                    |
  |==== Data Resumes =================>|

Advantages:
- Only needs 2 wires (TX, RX)
- Simple to implement

Disadvantages:
- Cannot use XON/XOFF characters in data
- Small delay before flow stops`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Baud Rate and Bit Rate</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Baud Rate vs Bit Rate:

Baud Rate = Number of signal changes per second
Bit Rate = Number of bits transmitted per second

For binary signaling (2 levels): Baud Rate = Bit Rate

For multi-level signaling:
Bit Rate = Baud Rate x log2(Number of levels)

Example with 4-level signaling:
- 2 bits encoded per baud
- 9600 baud = 19200 bps

Common Serial Baud Rates:
+--------+----------------+
| Baud   | Typical Use    |
+--------+----------------+
|   300  | Old modems     |
|  1200  | Old modems     |
|  2400  | Legacy devices |
|  4800  | Legacy devices |
|  9600  | Common default |
| 19200  | Serial console |
| 38400  | Higher speed   |
| 57600  | Higher speed   |
|115200  | USB-Serial     |
+--------+----------------+

Effective Data Rate Calculation (8N1):
- 8 data bits + 1 start + 1 stop = 10 bits per character
- At 9600 baud: 9600 / 10 = 960 characters/second
- 960 x 8 = 7680 bps effective data rate
- Efficiency = 80% (8 data bits / 10 total bits)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">UART (Universal Asynchronous Receiver/Transmitter)</h2>
    <p className="leading-relaxed">
      A UART is a hardware device that converts parallel data from the CPU to serial
      format for transmission, and vice versa for reception.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`UART Block Diagram:

+----------------------------------------------------------+
|                         UART                              |
|                                                           |
|  CPU Side:                         Serial Side:           |
|  +--------+                        +--------+             |
|  | TX Data|                        |        |             |
|  | Buffer |-----> Shift Reg ----->| TX     |----> TXD    |
|  +--------+       (parallel       +--------+              |
|                    to serial)                             |
|  +--------+                        +--------+             |
|  | RX Data|                        |        |             |
|  | Buffer |<----- Shift Reg <-----| RX     |<---- RXD    |
|  +--------+       (serial to      +--------+              |
|                    parallel)                              |
|  +--------+                        +--------+             |
|  | Control|                        | Baud   |             |
|  |  Regs  |                        | Gen    |             |
|  +--------+                        +--------+             |
|                                                           |
+----------------------------------------------------------+

UART Registers (8250/16550 compatible):
Address  Register            Function
------   --------            --------
Base+0   RBR/THR             Receive/Transmit Buffer
Base+1   IER                 Interrupt Enable
Base+2   IIR/FCR             Interrupt ID/FIFO Control
Base+3   LCR                 Line Control (format)
Base+4   MCR                 Modem Control
Base+5   LSR                 Line Status
Base+6   MSR                 Modem Status

Line Status Register (LSR):
Bit 0: Data Ready (RX buffer has data)
Bit 1: Overrun Error
Bit 2: Parity Error
Bit 3: Framing Error
Bit 4: Break Interrupt
Bit 5: TX Holding Register Empty
Bit 6: TX Empty
Bit 7: Error in RX FIFO`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Modern Serial Interfaces</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Interface</th>
            <th className="p-3 border">Speed</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Application</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">USB 2.0</td>
            <td className="p-3 border">480 Mbps</td>
            <td className="p-3 border">Synchronous</td>
            <td className="p-3 border">Peripherals</td>
          </tr>
          <tr>
            <td className="p-3 border">USB 3.0</td>
            <td className="p-3 border">5 Gbps</td>
            <td className="p-3 border">Synchronous</td>
            <td className="p-3 border">Fast storage</td>
          </tr>
          <tr>
            <td className="p-3 border">SATA III</td>
            <td className="p-3 border">6 Gbps</td>
            <td className="p-3 border">Synchronous</td>
            <td className="p-3 border">Hard drives</td>
          </tr>
          <tr>
            <td className="p-3 border">SPI</td>
            <td className="p-3 border">~50 Mbps</td>
            <td className="p-3 border">Synchronous</td>
            <td className="p-3 border">Embedded</td>
          </tr>
          <tr>
            <td className="p-3 border">I2C</td>
            <td className="p-3 border">3.4 Mbps</td>
            <td className="p-3 border">Synchronous</td>
            <td className="p-3 border">Sensors</td>
          </tr>
          <tr>
            <td className="p-3 border">RS-485</td>
            <td className="p-3 border">10 Mbps</td>
            <td className="p-3 border">Async</td>
            <td className="p-3 border">Industrial</td>
          </tr>
        </tbody>
      </table>
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
            <td className="p-3 border">Fewer wires needed</td>
            <td className="p-3 border">Slower than parallel (same clock)</td>
          </tr>
          <tr>
            <td className="p-3 border">Lower cost cables</td>
            <td className="p-3 border">Requires serialization hardware</td>
          </tr>
          <tr>
            <td className="p-3 border">Works over long distances</td>
            <td className="p-3 border">Frame overhead (async)</td>
          </tr>
          <tr>
            <td className="p-3 border">No skew problems</td>
            <td className="p-3 border">Clock synchronization needed</td>
          </tr>
          <tr>
            <td className="p-3 border">Can achieve very high speeds</td>
            <td className="p-3 border">More complex timing</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Serial communication sends bits one at a time over a single wire</li>
        <li>Asynchronous uses start/stop bits; synchronous uses shared clock</li>
        <li>RS-232 defines voltage levels, signals, and connectors for serial ports</li>
        <li>UART converts between parallel CPU data and serial line format</li>
        <li>Flow control prevents buffer overflow (RTS/CTS or XON/XOFF)</li>
        <li>Baud rate is signal changes per second; bit rate may differ</li>
        <li>Common frame format is 8N1 (8 data, no parity, 1 stop)</li>
        <li>Modern serial (USB, SATA) achieves gigabit speeds</li>
        <li>Serial is preferred for long distance and high-speed applications</li>
      </ul>
    </div>
  </div>
);

export default SerialComm;
