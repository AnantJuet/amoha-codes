import React from 'react';

const MachineCycle: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Machine Cycle
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Machine Cycle (also known as a CPU cycle or clock cycle) is the basic unit of time
      during which the CPU performs a single elementary operation. It is the time required
      to perform one micro-operation, such as fetching an instruction, reading from memory,
      or performing an ALU operation. One instruction cycle consists of multiple machine cycles.
    </p>

    <h2 className="text-3xl font-bold mt-8">Understanding Machine Cycles</h2>
    <p className="leading-relaxed">
      The machine cycle is synchronized with the CPU clock. Each clock tick triggers a
      state change in the processor. The duration of a machine cycle is determined by
      the clock frequency - a 3 GHz processor has a machine cycle of approximately 0.33
      nanoseconds.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Relationship: Instruction Cycle vs Machine Cycle

Instruction Cycle
+------------------------------------------------------------------+
|                                                                  |
|  +------------+  +------------+  +------------+  +------------+  |
|  |  Machine   |  |  Machine   |  |  Machine   |  |  Machine   |  |
|  |  Cycle 1   |  |  Cycle 2   |  |  Cycle 3   |  |  Cycle N   |  |
|  | (Fetch)    |  | (Decode)   |  | (Execute)  |  | (...)      |  |
|  +------------+  +------------+  +------------+  +------------+  |
|                                                                  |
+------------------------------------------------------------------+

Machine Cycle = One clock period (or multiple clock periods)
Instruction Cycle = Multiple machine cycles to complete one instruction

Example (Simple CPU):
  1 Instruction Cycle = 3-6 Machine Cycles
  Clock Frequency = 3 GHz
  Machine Cycle = 1/3 GHz = 0.33 ns
  Instruction Cycle = 1-2 ns`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Machine Cycles</h2>
    <p className="leading-relaxed">
      Machine cycles can be classified based on the operation being performed.
      Different types of machine cycles are needed for different operations.
    </p>

    <h3 className="text-2xl font-semibold mt-6">1. Opcode Fetch (OF) Cycle</h3>
    <p className="leading-relaxed">
      This is the first machine cycle of every instruction. It fetches the opcode
      from memory to identify what instruction is to be executed.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Opcode Fetch Cycle:

         CPU                          Memory
    +---------+                    +----------+
    |   PC    |----Address Bus---->|          |
    +---------+                    |          |
                                   |  Opcode  |
    +---------+                    |          |
    |   IR    |<---Data Bus--------|          |
    +---------+                    +----------+

Operations:
T1: Address out (PC to Address Bus)
T2: Memory read signal
T3: Data in (Opcode to IR)
T4: PC increment

Timing:
Clock: |--T1--|--T2--|--T3--|--T4--|
        ^     ^     ^     ^
        |     |     |     |
       Addr  Read  Data  PC++
        Out  Signal In`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Memory Read (MR) Cycle</h3>
    <p className="leading-relaxed">
      This cycle reads data or operands from memory. It is used for fetching
      instruction operands or data for load operations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Memory Read Cycle:

         CPU                          Memory
    +---------+                    +----------+
    |   MAR   |----Address Bus---->|          |
    +---------+                    |          |
                                   |   Data   |
    +---------+                    |          |
    |   MBR   |<---Data Bus--------|          |
    +---------+                    +----------+
         |
         v
    +---------+
    | Register|
    +---------+

Operations:
T1: MAR to Address Bus
T2: Assert MEMRD (Memory Read) signal
T3: Data arrives on Data Bus
T4: Latch data into MBR

Signals:
- Address Bus: Valid address
- MEMRD: Active (low)
- Data Bus: Memory outputs data`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Memory Write (MW) Cycle</h3>
    <p className="leading-relaxed">
      This cycle writes data to memory. It is used for store operations
      to save register contents to memory locations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Memory Write Cycle:

         CPU                          Memory
    +---------+                    +----------+
    |   MAR   |----Address Bus---->|          |
    +---------+                    |          |
                                   |          |
    +---------+                    |   Data   |
    |   MBR   |----Data Bus------->|   Cell   |
    +---------+                    +----------+

Operations:
T1: MAR to Address Bus
T2: MBR to Data Bus
T3: Assert MEMWR (Memory Write) signal
T4: Data latched into memory

Signals:
- Address Bus: Valid address
- Data Bus: Valid data from CPU
- MEMWR: Active (low)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. I/O Read Cycle</h3>
    <p className="leading-relaxed">
      This cycle reads data from an input device or I/O port.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`I/O Read Cycle:

         CPU                        I/O Device
    +---------+                    +----------+
    |  I/O    |----Address Bus---->|   Port   |
    | Address |                    | Address  |
    +---------+                    +----------+
                                        |
    +---------+                         |
    |   ACC   |<---Data Bus-------------+
    +---------+

Operations:
T1: I/O port address to Address Bus
T2: Assert IORD (I/O Read) signal
T3: Device places data on Data Bus
T4: Latch data into Accumulator

Example: IN A, 80H  ; Read from port 80H into A`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">5. I/O Write Cycle</h3>
    <p className="leading-relaxed">
      This cycle writes data to an output device or I/O port.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`I/O Write Cycle:

         CPU                        I/O Device
    +---------+                    +----------+
    |  I/O    |----Address Bus---->|   Port   |
    | Address |                    | Address  |
    +---------+                    +----------+
                                        ^
    +---------+                         |
    |   ACC   |----Data Bus-------------+
    +---------+

Operations:
T1: I/O port address to Address Bus
T2: Accumulator to Data Bus
T3: Assert IOWR (I/O Write) signal
T4: Device latches data

Example: OUT 90H, A  ; Write A to port 90H`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Machine Cycle Timing Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Detailed Machine Cycle Timing:

Clock    __|--|__|--|__|--|__|--|__|--|__|--|__
            T1    T2    T3    T4    T5    T6

Address  ====XXXXXXXXXXXX========================
Bus           Valid Address

Data     ========================XXXXXXXX========
Bus                               Valid Data

MEMRD    __|-----------|_________________________
              Active Low

Example: Memory Read Machine Cycle

Phase    |   T1   |   T2   |   T3   |   T4   |
---------|--------|--------|--------|--------|
Clock    |  Rise  |  Fall  |  Rise  |  Fall  |
Address  | Output | Stable | Stable | Stable |
MEMRD    |  High  |  Low   |  Low   |  High  |
Data     |  Hi-Z  |  Hi-Z  | Valid  | Latch  |

T1: CPU outputs address on address bus
T2: MEMRD signal goes active (low)
T3: Memory places data on data bus
T4: CPU latches data, MEMRD goes inactive`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Wait States</h2>
    <p className="leading-relaxed">
      When memory or I/O devices are slower than the CPU, wait states (Tw) are
      inserted to allow the device to respond. This extends the machine cycle.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Machine Cycle with Wait States:

Normal Cycle (No Wait):
   T1 -- T2 -- T3 -- T4

Cycle with 1 Wait State:
   T1 -- T2 -- Tw -- T3 -- T4

Cycle with 2 Wait States:
   T1 -- T2 -- Tw -- Tw -- T3 -- T4

Wait State Mechanism:
1. CPU checks READY signal at end of T2
2. If READY=0, insert wait state (Tw)
3. Keep checking READY each Tw
4. When READY=1, proceed to T3

Timeline:
Clock    __|--|__|--|__|--|__|--|__|--|__|--|__
            T1    T2    Tw    Tw    T3    T4

READY    ________________|--|________________
                             Ready goes high`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Machine Cycles per Instruction</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Instruction Type</th>
            <th className="p-3 border">Machine Cycles</th>
            <th className="p-3 border">Cycle Types</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">MOV R1, R2</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Opcode Fetch</td>
          </tr>
          <tr>
            <td className="p-3 border">MOV R1, #data</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">OF + MR (immediate data)</td>
          </tr>
          <tr>
            <td className="p-3 border">LOAD R1, addr</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">OF + MR (addr) + MR (data)</td>
          </tr>
          <tr>
            <td className="p-3 border">STORE addr, R1</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">OF + MR (addr) + MW (data)</td>
          </tr>
          <tr>
            <td className="p-3 border">ADD R1, R2</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Opcode Fetch</td>
          </tr>
          <tr>
            <td className="p-3 border">IN A, port</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">OF + I/O Read</td>
          </tr>
          <tr>
            <td className="p-3 border">OUT port, A</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">OF + I/O Write</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">T-States (Clock Cycles)</h2>
    <p className="leading-relaxed">
      Each machine cycle consists of multiple T-states. A T-state is one clock period,
      the smallest unit of processor time.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`T-States within Machine Cycles:

Machine Cycle (Opcode Fetch): 4-6 T-states
+----+----+----+----+----+----+
| T1 | T2 | T3 | T4 | T5 | T6 |
+----+----+----+----+----+----+

Machine Cycle (Memory Read): 3 T-states
+----+----+----+
| T1 | T2 | T3 |
+----+----+----+

Machine Cycle (Memory Write): 3 T-states
+----+----+----+
| T1 | T2 | T3 |
+----+----+----+

Example Instruction: LDA 2050H (Load from address 2050H)
- Machine Cycle 1: Opcode Fetch (4 T-states)
- Machine Cycle 2: Memory Read - Low byte of address (3 T-states)
- Machine Cycle 3: Memory Read - High byte of address (3 T-states)
- Machine Cycle 4: Memory Read - Data from 2050H (3 T-states)

Total: 4 Machine Cycles, 13 T-states`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Bus Control Signals</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Signal</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Function</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">MEMRD (RD)</td>
            <td className="p-3 border">Output, Active Low</td>
            <td className="p-3 border">Memory Read operation</td>
          </tr>
          <tr>
            <td className="p-3 border">MEMWR (WR)</td>
            <td className="p-3 border">Output, Active Low</td>
            <td className="p-3 border">Memory Write operation</td>
          </tr>
          <tr>
            <td className="p-3 border">IORD</td>
            <td className="p-3 border">Output, Active Low</td>
            <td className="p-3 border">I/O Read operation</td>
          </tr>
          <tr>
            <td className="p-3 border">IOWR</td>
            <td className="p-3 border">Output, Active Low</td>
            <td className="p-3 border">I/O Write operation</td>
          </tr>
          <tr>
            <td className="p-3 border">ALE</td>
            <td className="p-3 border">Output</td>
            <td className="p-3 border">Address Latch Enable</td>
          </tr>
          <tr>
            <td className="p-3 border">READY</td>
            <td className="p-3 border">Input</td>
            <td className="p-3 border">Memory/Device ready signal</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Example: ADD Instruction</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example: ADD R1, [2000H]  (Add memory content to R1)

Machine Cycle 1: Opcode Fetch (4 T-states)
   T1: PC out to Address Bus, PC=1000
   T2: MEMRD active, increment PC
   T3: Opcode received from Memory
   T4: Opcode latched to IR, decode begins

Machine Cycle 2: Memory Read - Address Low (3 T-states)
   T1: PC out (1001)
   T2: MEMRD active, PC++
   T3: Low byte (00H) received

Machine Cycle 3: Memory Read - Address High (3 T-states)
   T1: PC out (1002)
   T2: MEMRD active, PC++
   T3: High byte (20H) received
   Complete address: 2000H

Machine Cycle 4: Memory Read - Data (3 T-states)
   T1: Address 2000H out
   T2: MEMRD active
   T3: Data from memory received

Machine Cycle 5: ALU Operation (Internal)
   T1-T2: R1 + Data -> R1
   Flags updated

Total: 5 Machine Cycles, ~16 T-states`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Performance Calculations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Machine Cycle Time Calculations:

Given:
- Clock Frequency = 2 GHz
- Machine Cycle = 4 T-states

Calculations:
1. T-state duration = 1 / Clock Frequency
   T-state = 1 / 2 GHz = 0.5 ns

2. Machine Cycle Time = T-states x T-state duration
   MC Time = 4 x 0.5 ns = 2 ns

3. If instruction has 4 machine cycles:
   Instruction Time = 4 x 2 ns = 8 ns

4. Instructions per second (for this instruction):
   IPS = 1 / 8 ns = 125 MIPS

Example Problem:
Clock = 3.5 GHz, Instruction needs 3 machine cycles,
each MC = 4 T-states

Solution:
T-state = 1/3.5 GHz = 0.286 ns
MC Time = 4 x 0.286 = 1.14 ns
Instruction Time = 3 x 1.14 = 3.43 ns`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Machine cycle is the basic unit of CPU operation time</li>
        <li>One instruction cycle contains multiple machine cycles</li>
        <li>Types: Opcode Fetch, Memory Read, Memory Write, I/O Read, I/O Write</li>
        <li>Each machine cycle consists of multiple T-states (clock cycles)</li>
        <li>Wait states extend machine cycles for slow memory/devices</li>
        <li>Bus control signals coordinate memory and I/O operations</li>
        <li>Machine cycle time = T-states x clock period</li>
        <li>Different instructions require different numbers of machine cycles</li>
      </ul>
    </div>
  </div>
);

export default MachineCycle;
