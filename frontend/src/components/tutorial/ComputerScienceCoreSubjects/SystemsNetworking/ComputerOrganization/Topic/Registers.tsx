import React from 'react';

const Registers: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Registers: Fundamentals
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A register is a group of flip-flops used to store multiple bits of data. Each flip-flop
      in a register stores one bit, so an n-bit register contains n flip-flops. Registers are
      fundamental building blocks in computer architecture, used for temporary data storage,
      data transfer, and various computational operations within the CPU.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Register Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`4-Bit Parallel Register (using D Flip-Flops):

    D3         D2         D1         D0
     │          │          │          │
     ▼          ▼          ▼          ▼
┌─────────┐┌─────────┐┌─────────┐┌─────────┐
│    D    ││    D    ││    D    ││    D    │
│   FF    ││   FF    ││   FF    ││   FF    │
│    Q    ││    Q    ││    Q    ││    Q    │
└────┬────┘└────┬────┘└────┬────┘└────┬────┘
     │          │          │          │
     │    ▲     │    ▲     │    ▲     │    ▲
     │    │     │    │     │    │     │    │
     └────┼─────┴────┼─────┴────┼─────┴────┘
          │          │          │          │
          └──────────┴──────────┴──────────┘
                          │
                         CLK (common clock)
     │          │          │          │
     ▼          ▼          ▼          ▼
    Q3         Q2         Q1         Q0

Operation:
  At each clock edge, all D inputs are captured simultaneously
  D[3:0] -> Q[3:0] (parallel load)
  All bits change at the same time (synchronous)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Registers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Data Input</th>
            <th className="p-3 border">Data Output</th>
            <th className="p-3 border">Application</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Parallel In/Parallel Out (PIPO)</td>
            <td className="p-3 border">All bits at once</td>
            <td className="p-3 border">All bits at once</td>
            <td className="p-3 border">Buffer storage</td>
          </tr>
          <tr>
            <td className="p-3 border">Serial In/Serial Out (SISO)</td>
            <td className="p-3 border">One bit at a time</td>
            <td className="p-3 border">One bit at a time</td>
            <td className="p-3 border">Delay lines</td>
          </tr>
          <tr>
            <td className="p-3 border">Serial In/Parallel Out (SIPO)</td>
            <td className="p-3 border">One bit at a time</td>
            <td className="p-3 border">All bits at once</td>
            <td className="p-3 border">Serial-to-parallel conversion</td>
          </tr>
          <tr>
            <td className="p-3 border">Parallel In/Serial Out (PISO)</td>
            <td className="p-3 border">All bits at once</td>
            <td className="p-3 border">One bit at a time</td>
            <td className="p-3 border">Parallel-to-serial conversion</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Register with Load Control</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`4-Bit Register with Load Enable:

                 LOAD
                  │
    D3   D2   D1  │  D0
     │    │    │  │   │
     ▼    ▼    ▼  ▼   ▼
   ┌───┐┌───┐┌───┐ ┌───┐
   │   ││   ││   │ │   │
   │ M ││ M ││ M │ │ M │  M = 2:1 MUX
   │ U ││ U ││ U │ │ U │
   │ X ││ X ││ X │ │ X │
   └─┬─┘└─┬─┘└─┬─┘ └─┬─┘
     │    │    │     │
     ▼    ▼    ▼     ▼
┌─────────┐┌─────────┐┌─────────┐┌─────────┐
│    D    ││    D    ││    D    ││    D    │
│   FF    ││   FF    ││   FF    ││   FF    │
│    Q    ││    Q    ││    Q    ││    Q    │
└────┬────┘└────┬────┘└────┬────┘└────┬────┘
     │          │          │          │
     └──────────┴──────────┴──────────┘
                      │
                     CLK
     │          │          │          │
     ▼          ▼          ▼          ▼
    Q3         Q2         Q1         Q0
     │          │          │          │
     └──────────┴──────────┴──────────┘
                    │
              Feedback to MUX

MUX Logic for each bit:
  MUX_out = LOAD ? D : Q

When LOAD = 1: D inputs are loaded (new data)
When LOAD = 0: Q is fed back (hold current value)

Truth Table:
┌──────┬─────┬─────────────┐
│ LOAD │ CLK │   Q(next)   │
├──────┼─────┼─────────────┤
│  0   │  ↑  │  Q (hold)   │
│  1   │  ↑  │  D (load)   │
└──────┴─────┴─────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Register Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Common Register Operations:

1. LOAD (Parallel Load):
   Store new data into register
   All bits loaded simultaneously

   Before: Q = 0101
   Load:   D = 1100
   After:  Q = 1100

2. HOLD (No Change):
   Maintain current contents
   Clock pulses have no effect

   Q stays the same regardless of D inputs

3. CLEAR (Reset):
   Set all bits to 0
   Usually asynchronous (immediate)

   Before: Q = 1010
   Clear
   After:  Q = 0000

4. SET (Preset):
   Set all bits to 1
   Usually asynchronous

   Before: Q = 0101
   Set
   After:  Q = 1111

5. COMPLEMENT:
   Invert all bits
   Q = Q'

   Before: Q = 1010
   Complement
   After:  Q = 0101

6. INCREMENT:
   Add 1 to register value
   Q = Q + 1

   Before: Q = 0101 (5)
   Increment
   After:  Q = 0110 (6)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Timing Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`4-Bit Register Timing Diagram:

CLK:    ───┐  ┌───┐  ┌───┐  ┌───┐  ┌───┐  ┌───
           │  │   │  │   │  │   │  │   │  │
           └──┘   └──┘   └──┘   └──┘   └──┘

LOAD:   ───────┐        ┌───────────────────────
               │        │
               └────────┘

D[3:0]: ═══════╪════════╪═══════════════════════
        (0101) │ (1010) │      (1100)
               │        │

Q[3:0]: ═══════════════╪════════╪═══════════════
        (XXXX)  (XXXX)  │ (1010) │    (1100)
                        │        │

        │      │      │      │      │
        t0     t1     t2     t3     t4

Analysis:
  t0-t1: LOAD=0, Q holds undefined state
  t1: LOAD=1, D=0101, but Q doesn't change (no clock edge yet)
  t2: Clock edge with LOAD=1, Q captures D=1010
  t3: Clock edge with LOAD=1, Q captures D=1100
  t4: LOAD=0, Q holds 1100`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multi-Function Register</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Universal Register with Multiple Operations:

Control signals determine operation:
  S1 S0 | Operation
  ──────┼───────────
  0  0  | Hold (no change)
  0  1  | Shift right
  1  0  | Shift left
  1  1  | Parallel load

Implementation using 4:1 MUX for each flip-flop:

For flip-flop i:
              S1 S0
                │
                ▼
         ┌──────────────┐
  Qi ───►│ 0            │
         │              │
  Qi+1 ─►│ 1   4:1 MUX  ├──► Di
         │              │
  Qi-1 ─►│ 2            │
         │              │
  Di ───►│ 3            │
         └──────────────┘

Operation Selection:
  00 (Hold): Di = Qi (current value)
  01 (Shift Right): Di = Qi+1 (bit from left)
  10 (Shift Left): Di = Qi-1 (bit from right)
  11 (Load): Di = external input

This creates a versatile building block!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CPU Register Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Register</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Typical Size</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Program Counter (PC)</td>
            <td className="p-3 border">Holds address of next instruction</td>
            <td className="p-3 border">32/64 bits</td>
          </tr>
          <tr>
            <td className="p-3 border">Instruction Register (IR)</td>
            <td className="p-3 border">Holds current instruction</td>
            <td className="p-3 border">32/64 bits</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Address Register (MAR)</td>
            <td className="p-3 border">Holds memory address for access</td>
            <td className="p-3 border">32/64 bits</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Data Register (MDR)</td>
            <td className="p-3 border">Holds data to/from memory</td>
            <td className="p-3 border">32/64 bits</td>
          </tr>
          <tr>
            <td className="p-3 border">Accumulator (ACC)</td>
            <td className="p-3 border">Stores arithmetic results</td>
            <td className="p-3 border">32/64 bits</td>
          </tr>
          <tr>
            <td className="p-3 border">Stack Pointer (SP)</td>
            <td className="p-3 border">Points to top of stack</td>
            <td className="p-3 border">32/64 bits</td>
          </tr>
          <tr>
            <td className="p-3 border">Status/Flag Register</td>
            <td className="p-3 border">Holds condition flags (Z, C, N, V)</td>
            <td className="p-3 border">8-32 bits</td>
          </tr>
          <tr>
            <td className="p-3 border">General Purpose Registers</td>
            <td className="p-3 border">Temporary data storage</td>
            <td className="p-3 border">32/64 bits each</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Register File</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Register File: Collection of Registers with Addressing

Example: 8 registers of 4 bits each (8x4 register file)

                    Write Data (4 bits)
                         │
                         ▼
    ┌─────────────────────────────────────────┐
    │                                         │
    │  ┌────────┐  Write Address (3 bits)     │
    │  │  3:8   │◄───────────────────────────────
    │  │Decoder │                             │
    │  └───┬────┘                             │
    │      │ (one-hot write enable)          │
    │      ▼                                  │
    │  ┌──────┐┌──────┐┌──────┐...┌──────┐   │
    │  │ Reg0 ││ Reg1 ││ Reg2 │   │ Reg7 │   │
    │  └──┬───┘└──┬───┘└──┬───┘   └──┬───┘   │
    │     │       │       │          │        │
    │     └───────┴───────┴──────────┘        │
    │              │                          │
    │              ▼                          │
    │  ┌────────────────────┐                 │
    │  │   8:1 MUX (4-bit)  │◄─── Read Address A
    │  └─────────┬──────────┘                 │
    │            │                            │
    │            ▼                            │
    │       Read Data A (4 bits)              │
    │                                         │
    │  ┌────────────────────┐                 │
    │  │   8:1 MUX (4-bit)  │◄─── Read Address B
    │  └─────────┬──────────┘                 │
    │            │                            │
    │            ▼                            │
    │       Read Data B (4 bits)              │
    └─────────────────────────────────────────┘

Features:
  - Two read ports (simultaneous reads)
  - One write port
  - 3-bit addresses select one of 8 registers
  - Used in CPU for general-purpose registers`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Register Transfer Notation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Register Transfer Language (RTL):

Basic notation for describing register operations:

R1 <- R2        : Copy contents of R2 to R1
R1 <- R2 + R3   : Add R2 and R3, store in R1
R1 <- 0         : Clear R1
R1 <- R1 + 1    : Increment R1
R1 <- shl(R1)   : Shift R1 left
R1[0:7]         : Bits 0 through 7 of R1

Conditional transfers:
if (condition): R1 <- R2

Example micro-operations:

Fetch cycle:
  MAR <- PC           ; Copy PC to Memory Address Register
  MDR <- M[MAR]       ; Read memory at MAR address
  IR <- MDR           ; Copy data to Instruction Register
  PC <- PC + 1        ; Increment Program Counter

Add instruction (ADD R1, R2):
  R1 <- R1 + R2       ; Add R2 to R1`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>CPU Registers:</strong> PC, IR, MAR, MDR, accumulators, GPRs
      </li>
      <li>
        <strong>Memory Interface:</strong> Buffer between CPU and memory
      </li>
      <li>
        <strong>I/O Ports:</strong> Interface with peripheral devices
      </li>
      <li>
        <strong>Pipeline Registers:</strong> Stage separation in pipelined processors
      </li>
      <li>
        <strong>FIFO Buffers:</strong> First-in-first-out data queues
      </li>
      <li>
        <strong>Status Storage:</strong> Flags and control information
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>A register is a group of flip-flops storing n bits</li>
        <li>Common operations: load, hold, clear, set, shift, complement</li>
        <li>D flip-flops are most commonly used in register construction</li>
        <li>Load enable control determines when new data is stored</li>
        <li>Register files allow addressable access to multiple registers</li>
        <li>CPU uses various specialized registers (PC, IR, MAR, MDR, etc.)</li>
        <li>Register Transfer Language describes data movement between registers</li>
        <li>Multi-function registers combine load, shift, and hold capabilities</li>
      </ul>
    </div>
  </div>
);

export default Registers;
