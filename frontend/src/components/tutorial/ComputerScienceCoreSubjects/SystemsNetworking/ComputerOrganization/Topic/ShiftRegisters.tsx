import React from 'react';

const ShiftRegisters: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Shift Registers
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A shift register is a type of register where stored data can be shifted from one flip-flop
      to the adjacent one with each clock pulse. This shifting capability enables serial data
      processing, data conversion between serial and parallel formats, and various timing and
      delay applications. Shift registers are classified based on how data enters and exits
      the register.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Shift Registers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Full Name</th>
            <th className="p-3 border">Data In</th>
            <th className="p-3 border">Data Out</th>
            <th className="p-3 border">Application</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">SISO</td>
            <td className="p-3 border">Serial In Serial Out</td>
            <td className="p-3 border">1 bit/clock</td>
            <td className="p-3 border">1 bit/clock</td>
            <td className="p-3 border">Delay lines</td>
          </tr>
          <tr>
            <td className="p-3 border">SIPO</td>
            <td className="p-3 border">Serial In Parallel Out</td>
            <td className="p-3 border">1 bit/clock</td>
            <td className="p-3 border">n bits at once</td>
            <td className="p-3 border">Serial to parallel converter</td>
          </tr>
          <tr>
            <td className="p-3 border">PISO</td>
            <td className="p-3 border">Parallel In Serial Out</td>
            <td className="p-3 border">n bits at once</td>
            <td className="p-3 border">1 bit/clock</td>
            <td className="p-3 border">Parallel to serial converter</td>
          </tr>
          <tr>
            <td className="p-3 border">PIPO</td>
            <td className="p-3 border">Parallel In Parallel Out</td>
            <td className="p-3 border">n bits at once</td>
            <td className="p-3 border">n bits at once</td>
            <td className="p-3 border">Buffer, temporary storage</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">SISO - Serial In Serial Out</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`4-Bit SISO Shift Register:

                    Shift Right
       ─────────────────────────────────────────►

Serial  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  Serial
Input ─►│ D    Q  ├─►│ D    Q  ├─►│ D    Q  ├─►│ D    Q  ├─► Output
        │   FF0   │  │   FF1   │  │   FF2   │  │   FF3   │
        │    ▲    │  │    ▲    │  │    ▲    │  │    ▲    │
        └────┼────┘  └────┼────┘  └────┼────┘  └────┼────┘
             │            │            │            │
             └────────────┴────────────┴────────────┘
                                  │
                                 CLK

Operation Example (Shifting in 1011):

Clock  SI   Q0   Q1   Q2   Q3(SO)  Action
─────────────────────────────────────────
 0     -    0    0    0    0      Initial state
 1     1    1    0    0    0      Shift in first 1
 2     0    0    1    0    0      Shift in 0
 3     1    1    0    1    0      Shift in 1
 4     1    1    1    0    1      Shift in 1
 5     0    0    1    1    0      Shift out first 1
 6     0    0    0    1    1      Shift out 0
 7     0    0    0    0    1      Shift out 1
 8     0    0    0    0    0      Shift out last 1

Data appears at output after n clock cycles (n-bit delay)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SISO Timing Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`SISO Timing Diagram (Shifting in 1011):

CLK:    ─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─
         │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │
         └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘

SI:     ───┐   ┌───────┐
           │   │       │
           └───┘       └───────────────────
        (LSB)1  0   1   1(MSB)

Q0:     ───────┐   ┌───┐   ┌───────┐
               │   │   │   │       │
               └───┘   └───┘       └───────

Q1:     ───────────┐   ┌───┐   ┌───────┐
                   │   │   │   │       │
                   └───┘   └───┘       └───

Q2:     ───────────────┐   ┌───┐   ┌───┐
                       │   │   │   │   │
                       └───┘   └───┘   └───

Q3/SO:  ───────────────────┐   ┌───┐   ┌───
                           │   │   │   │
                           └───┘   └───┘

        │   │   │   │   │   │   │   │   │
        0   1   2   3   4   5   6   7   8
                        │
                     Full data loaded
                     Output starts appearing`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SIPO - Serial In Parallel Out</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`4-Bit SIPO Shift Register:

Serial  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
Input ─►│ D    Q  ├─►│ D    Q  ├─►│ D    Q  ├─►│ D    Q  │
        │   FF0   │  │   FF1   │  │   FF2   │  │   FF3   │
        │    ▲    │  │    ▲    │  │    ▲    │  │    ▲    │
        └────┼────┘  └────┼────┘  └────┼────┘  └────┼────┘
             │            │            │            │
             └────────────┴────────────┴────────────┘
                                  │
                                 CLK
             │            │            │            │
             ▼            ▼            ▼            ▼
            Q0           Q1           Q2           Q3
            ─────────────────────────────────────────
                   Parallel Output (all at once)

Application: Serial to Parallel Converter
  - Receives serial data stream (UART, SPI)
  - After n clocks, all n bits available in parallel
  - Used in communication interfaces

Operation (Shifting in 1101):
Clock  SI   Q0   Q1   Q2   Q3
────────────────────────────
 0     -    0    0    0    0
 1     1    1    0    0    0
 2     0    0    1    0    0
 3     1    1    0    1    0
 4     1    1    1    0    1  <- Read parallel: 1101`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">PISO - Parallel In Serial Out</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`4-Bit PISO Shift Register:

         D0           D1           D2           D3
          │            │            │            │
          ▼            ▼            ▼            ▼
    ────────────────────────────────────────────────
                  Parallel Input
          │            │            │            │
          ▼            ▼            ▼            ▼
      ┌───┴───┐    ┌───┴───┐    ┌───┴───┐    ┌───┴───┐
      │0     1│    │0     1│    │0     1│    │0     1│
      │  MUX  │    │  MUX  │    │  MUX  │    │  MUX  │
      └───┬───┘    └───┬───┘    └───┬───┘    └───┬───┘
  SI──────│            │            │            │
          ▼            ▼            ▼            ▼
      ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  Serial
      │ D    Q  ├─►│ D    Q  ├─►│ D    Q  ├─►│ D    Q  ├─► Output
      │   FF0   │  │   FF1   │  │   FF2   │  │   FF3   │
      └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘
           └──────────────────────────────────────┘
                              │        │
                             CLK    LOAD/SHIFT

When LOAD=1: Parallel data D[3:0] loaded
When LOAD=0: Data shifts right, serial out at Q3

Operation (Outputting 1101):
Cycle  LOAD  SI   Q0   Q1   Q2   Q3(SO)
──────────────────────────────────────
 0      1    -    1    1    0    1    <- Load 1101
 1      0    0    0    1    1    0    <- Shift, SO=1
 2      0    0    0    0    1    1    <- Shift, SO=0
 3      0    0    0    0    0    1    <- Shift, SO=1
 4      0    0    0    0    0    0    <- Shift, SO=1

Serial output sequence: 1, 0, 1, 1 (LSB first)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">PIPO - Parallel In Parallel Out</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`4-Bit PIPO Shift Register:

         D0           D1           D2           D3
          │            │            │            │
          ▼            ▼            ▼            ▼
    ────────────────────────────────────────────────
                  Parallel Input
          │            │            │            │
          ▼            ▼            ▼            ▼
      ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
      │ D    Q  │  │ D    Q  │  │ D    Q  │  │ D    Q  │
      │   FF0   │  │   FF1   │  │   FF2   │  │   FF3   │
      │    ▲    │  │    ▲    │  │    ▲    │  │    ▲    │
      └────┼────┘  └────┼────┘  └────┼────┘  └────┼────┘
           │            │            │            │
           └────────────┴────────────┴────────────┘
                                │
                               CLK
           │            │            │            │
           ▼            ▼            ▼            ▼
          Q0           Q1           Q2           Q3
    ────────────────────────────────────────────────
                  Parallel Output

Simplest register - just stores and outputs data
All bits loaded at clock edge
All bits available at outputs immediately

Truth Table:
CLK  D[3:0]   Q[3:0]
────────────────────
 ↑   1010     1010
 ↑   0101     0101
 ↑   1111     1111

Applications:
  - Buffer storage
  - Temporary holding register
  - Pipeline stage registers`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Bidirectional Shift Register</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Bidirectional Shift Register:

Can shift data left or right based on control signal.

       Left        Right
       Input       Input
         │           │
         ▼           ▼
      ┌──┴───────────┴──┐
      │                 │
      │   ◄── or ──►    │
      │                 │
      └─────────────────┘

Control: DIR (Direction)
  DIR = 0: Shift Right (Q[i] <- Q[i-1])
  DIR = 1: Shift Left  (Q[i] <- Q[i+1])

Implementation for one stage:
                       DIR
                        │
                ┌───────┴───────┐
                │               │
      Qi-1 ────►│0              │
                │    2:1 MUX    ├───► Di (to FF)
      Qi+1 ────►│1              │
                │               │
                └───────────────┘

Example operation:
Initial: Q = 1010

Shift Right (DIR=0):
  1010 -> 0101 -> 0010 -> 0001 -> 0000

Shift Left (DIR=1):
  1010 -> 0100 -> 1000 -> 0000

Applications:
  - Multiplication/Division by 2
  - Barrel shifter building block`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Universal Shift Register</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Universal Shift Register (74194 type):

Combines all shift register capabilities.

Control Signals (S1, S0):
┌────┬────┬─────────────────────────┐
│ S1 │ S0 │ Operation               │
├────┼────┼─────────────────────────┤
│ 0  │ 0  │ Hold (no change)        │
│ 0  │ 1  │ Shift Right             │
│ 1  │ 0  │ Shift Left              │
│ 1  │ 1  │ Parallel Load           │
└────┴────┴─────────────────────────┘

Block Diagram:
                    S1  S0
                     │   │
    SL_IN ──────────►│   │◄──────────── SR_IN
         D0  D1  D2  │D3 │
          │   │   │   │   │
          ▼   ▼   ▼   ▼   ▼
    ┌─────────────────────────────────────────┐
    │                                         │
    │         Universal Shift Register        │
    │                                         │
    │  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐    │
    │  │ MUX │  │ MUX │  │ MUX │  │ MUX │    │
    │  │  │  │  │  │  │  │  │  │  │  │  │    │
    │  │  ▼  │  │  ▼  │  │  ▼  │  │  ▼  │    │
    │  │ D FF│──│ D FF│──│ D FF│──│ D FF│    │
    │  └──┬──┘  └──┬──┘  └──┬──┘  └──┬──┘    │
    │     │        │        │        │        │
    └─────┼────────┼────────┼────────┼────────┘
          │        │        │        │
          ▼        ▼        ▼        ▼
         Q0       Q1       Q2       Q3
                      │
                     CLK

MUX selection for each flip-flop i:
  S1S0=00: Select Qi (hold)
  S1S0=01: Select Qi-1 (shift right)
  S1S0=10: Select Qi+1 (shift left)
  S1S0=11: Select Di (parallel load)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Ring Counter</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Ring Counter (Circular Shift Register):

Output of last FF feeds back to first FF.

    ┌────────────────────────────────────────────────┐
    │                                                │
    │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
    └─►│ D    Q  ├─►│ D    Q  ├─►│ D    Q  ├─►│ D    Q  ├─┐
       │   FF0   │  │   FF1   │  │   FF2   │  │   FF3   │ │
       └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘ │
            └──────────────────────────────────────────┘──┘
                                 │
                                CLK

Count Sequence (initialized to 1000):
Clock   Q0  Q1  Q2  Q3
─────────────────────
  0     1   0   0   0
  1     0   1   0   0
  2     0   0   1   0
  3     0   0   0   1
  4     1   0   0   0   <- Repeats
  5     0   1   0   0

States: n states for n-bit counter
One-hot encoding (only one bit is 1)
Simple decoding - each output is a state indicator

Applications:
  - Sequencer/timing generator
  - State machine implementation`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Johnson Counter (Twisted Ring)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Johnson Counter (Twisted Ring Counter):

Complement of last FF feeds back to first FF.

    ┌────────────────────────────────────────────────────┐
    │ Q3'                                                │
    │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
    └─►│ D    Q  ├─►│ D    Q  ├─►│ D    Q  ├─►│ D    Q  │
       │   FF0   │  │   FF1   │  │   FF2   │  │   FF3   │
       └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘
            └──────────────────────────────────────────┘
                                 │                    │
                                CLK                  Q3

Count Sequence (initialized to 0000):
Clock   Q0  Q1  Q2  Q3
─────────────────────
  0     0   0   0   0
  1     1   0   0   0    <- Q3'=1 shifts in
  2     1   1   0   0
  3     1   1   1   0
  4     1   1   1   1
  5     0   1   1   1    <- Q3'=0 shifts in
  6     0   0   1   1
  7     0   0   0   1
  8     0   0   0   0    <- Repeats

States: 2n states for n-bit counter (more than ring!)
n-bit Johnson counter has 2n states
Self-correcting from most invalid states

Advantages over Ring Counter:
  - Double the number of states (2n vs n)
  - Simpler initialization`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Data Conversion:</strong> Serial-to-parallel and parallel-to-serial conversion
      </li>
      <li>
        <strong>Communication:</strong> UART, SPI, I2C protocols
      </li>
      <li>
        <strong>Arithmetic:</strong> Multiplication and division by powers of 2
      </li>
      <li>
        <strong>Delay Lines:</strong> Creating specific time delays in digital circuits
      </li>
      <li>
        <strong>Sequence Generation:</strong> Pseudo-random number generators (LFSR)
      </li>
      <li>
        <strong>Pattern Recognition:</strong> Matching bit sequences
      </li>
      <li>
        <strong>LED Displays:</strong> Scrolling text and running lights
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Comparison Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Clocks to Load</th>
            <th className="p-3 border">Clocks to Read</th>
            <th className="p-3 border">Pins Needed</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">SISO</td>
            <td className="p-3 border">n</td>
            <td className="p-3 border">n</td>
            <td className="p-3 border">Fewest (SI, SO, CLK)</td>
          </tr>
          <tr>
            <td className="p-3 border">SIPO</td>
            <td className="p-3 border">n</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">SI + n outputs</td>
          </tr>
          <tr>
            <td className="p-3 border">PISO</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">n</td>
            <td className="p-3 border">n inputs + SO</td>
          </tr>
          <tr>
            <td className="p-3 border">PIPO</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Most (n in + n out)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Shift registers move data between flip-flops with each clock pulse</li>
        <li>SISO: Serial input and output - used for delays</li>
        <li>SIPO: Serial to parallel conversion - receiver interface</li>
        <li>PISO: Parallel to serial conversion - transmitter interface</li>
        <li>PIPO: All parallel - buffer storage</li>
        <li>Universal shift registers combine all modes with control signals</li>
        <li>Ring counter: circular shift with n states</li>
        <li>Johnson counter: twisted ring with 2n states</li>
        <li>Essential for serial communication protocols (UART, SPI, I2C)</li>
      </ul>
    </div>
  </div>
);

export default ShiftRegisters;
