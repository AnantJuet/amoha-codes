import React from 'react';

const SyncCounters: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Synchronous Counters
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Synchronous counters are sequential circuits where all flip-flops are clocked simultaneously
      by a common clock signal. This parallel clocking eliminates the cumulative propagation delay
      problem of asynchronous counters, making synchronous counters faster and more suitable for
      high-speed applications. The next state logic determines which flip-flops toggle at each
      clock edge based on the current state.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Synchronous Counter Structure:

                    Next State
                      Logic
                        │
         ┌──────────────┼──────────────┐
         │              │              │
         ▼              ▼              ▼
    ┌─────────┐    ┌─────────┐    ┌─────────┐
    │  J   Q  │    │  J   Q  │    │  J   Q  │
    │   FF0   │    │   FF1   │    │   FF2   │
    │  K   Q' │    │  K   Q' │    │  K   Q' │
    │    ▲    │    │    ▲    │    │    ▲    │
    └────┼────┘    └────┼────┘    └────┼────┘
         │              │              │
         └──────────────┴──────────────┘
                        │
                       CLK (common clock to all)
         │              │              │
         ▼              ▼              ▼
        Q0             Q1             Q2

Key Features:
  - All flip-flops share the same clock
  - All outputs change simultaneously (within gate delay)
  - Combinational logic determines which FFs toggle
  - Faster operation, no ripple delay
  - More complex design, requires more gates`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3-Bit Synchronous Up Counter</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Design of 3-Bit Synchronous Up Counter using JK Flip-Flops:

State Table:
┌─────────────┬─────────────┬───────────────────┐
│ Present     │ Next        │ JK Inputs         │
│ Q2 Q1 Q0    │ Q2 Q1 Q0    │ J2K2  J1K1  J0K0  │
├─────────────┼─────────────┼───────────────────┤
│ 0  0  0     │ 0  0  1     │  0X    0X    1X   │
│ 0  0  1     │ 0  1  0     │  0X    1X    X1   │
│ 0  1  0     │ 0  1  1     │  0X    X0    1X   │
│ 0  1  1     │ 1  0  0     │  1X    X1    X1   │
│ 1  0  0     │ 1  0  1     │  X0    0X    1X   │
│ 1  0  1     │ 1  1  0     │  X0    1X    X1   │
│ 1  1  0     │ 1  1  1     │  X0    X0    1X   │
│ 1  1  1     │ 0  0  0     │  X1    X1    X1   │
└─────────────┴─────────────┴───────────────────┘

K-maps for J and K inputs:

J0:          K0:          (Q0 always toggles)
   Q1Q0         Q1Q0
Q2 00 01 11 10  00 01 11 10
 0  1  X  X  1   0  X  X  0
 1  1  X  X  1   1  X  X  1

J0 = 1, K0 = 1 (always toggle)

J1:          K1:          (Q1 toggles when Q0=1)
   Q1Q0         Q1Q0
Q2 00 01 11 10  00 01 11 10
 0  0  1  X  X   0  0  X  X
 1  0  1  X  X   1  1  X  X

J1 = Q0, K1 = Q0

J2:          K2:          (Q2 toggles when Q1.Q0=1)
   Q1Q0         Q1Q0
Q2 00 01 11 10  00 01 11 10
 0  0  0  1  0   0  0  X  X
 1  X  X  X  X   1  0  0  1

J2 = Q1.Q0, K2 = Q1.Q0`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Circuit Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`3-Bit Synchronous Up Counter Circuit:

                              ┌───────────────────┐
                              │                   │
          1 ─────────────────►│J              Q  ├───► Q0
                              │      FF0         │
          1 ─────────────────►│K              Q' │
                              │        ▲         │
                              └────────┼─────────┘
                                       │
                              ┌───────┐│         │
              ┌──────────────►│J      ││    Q  ├───► Q1
              │               │    FF1│         │
              │    ┌─────────►│K      │    Q' │
              │    │          │      ▲│         │
              │    │          └──────┼┼─────────┘
              │    │                 ││
              │    │      ┌─────┐    ││
              │    │   ┌─►│     │    ││
              │    │   │  │ AND ├────┼┼──────────► J2
              │    │   │  │     │    ││
              │    ├───┼──│     │    ││
              │    │   │  └─────┘    ││
              │    │   │             ││
              │    │   └─────────────┼┴───────────► K2
              │    │                 │
              │    └─── Q0 ─────────►│
              │                      │
              └───── Q0 ────────────►│
                                     │
          CLK ───────────────────────┴─────────────►
                              (common to all FFs)

Logic Equations:
  J0 = K0 = 1 (always toggle)
  J1 = K1 = Q0 (toggle when Q0=1)
  J2 = K2 = Q0.Q1 (toggle when Q0=Q1=1)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Timing Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`3-Bit Synchronous Up Counter Timing:

CLK:  ───┐  ┌───┐  ┌───┐  ┌───┐  ┌───┐  ┌───┐  ┌───┐  ┌───
         │  │   │  │   │  │   │  │   │  │   │  │   │  │
         └──┘   └──┘   └──┘   └──┘   └──┘   └──┘   └──┘
          0    1    2    3    4    5    6    7    0

Q0:   ────┐     ┌─────┐     ┌─────┐     ┌─────┐     ┌────
          │     │     │     │     │     │     │     │
          └─────┘     └─────┘     └─────┘     └─────┘

Q1:   ────────┐           ┌───────────┐           ┌──────
              │           │           │           │
              └───────────┘           └───────────┘

Q2:   ────────────────┐                       ┌──────────
                      │                       │
                      └───────────────────────┘

Count: 0    1    2    3    4    5    6    7    0

All outputs change SIMULTANEOUSLY at clock edge!
(No ripple delay like asynchronous counters)

Compare timing at count 3→4:
  Synchronous: Q2,Q1,Q0 all change at same instant
  Asynchronous: Q0→Q1→Q2 change sequentially with delays`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Synchronous Down Counter</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`3-Bit Synchronous Down Counter:

State Sequence: 7→6→5→4→3→2→1→0→7...

State Table:
┌─────────────┬─────────────┐
│ Present     │ Next        │
│ Q2 Q1 Q0    │ Q2 Q1 Q0    │
├─────────────┼─────────────┤
│ 0  0  0     │ 1  1  1     │
│ 0  0  1     │ 0  0  0     │
│ 0  1  0     │ 0  0  1     │
│ 0  1  1     │ 0  1  0     │
│ 1  0  0     │ 0  1  1     │
│ 1  0  1     │ 1  0  0     │
│ 1  1  0     │ 1  0  1     │
│ 1  1  1     │ 1  1  0     │
└─────────────┴─────────────┘

Toggle Conditions for Down Counter:
  Q0: Toggles every clock (J0=K0=1)
  Q1: Toggles when Q0=0 (J1=K1=Q0')
  Q2: Toggles when Q1=Q0=0 (J2=K2=Q1'.Q0')

Logic Equations:
  J0 = K0 = 1
  J1 = K1 = Q0'
  J2 = K2 = Q0'.Q1'

Compare with Up Counter:
  Up Counter:   J[i] = K[i] = Q[i-1].Q[i-2]...Q[0]
  Down Counter: J[i] = K[i] = Q'[i-1].Q'[i-2]...Q'[0]`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Synchronous Up/Down Counter</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`3-Bit Synchronous Up/Down Counter:

Control Signal: UP/DOWN' (1=Up, 0=Down)

Toggle Conditions:
  Up mode (U=1):
    Q0 toggles always
    Q1 toggles when Q0=1
    Q2 toggles when Q1.Q0=1

  Down mode (U=0):
    Q0 toggles always
    Q1 toggles when Q0=0
    Q2 toggles when Q1=Q0=0

Combined Logic (using MUX approach):

For Q1: Toggle when (U.Q0 + U'.Q0')
        = U.Q0 + U'.Q0'
        = U XNOR Q0

For Q2: Toggle when (U.Q1.Q0 + U'.Q1'.Q0')

Logic Equations:
  J0 = K0 = 1
  J1 = K1 = (U AND Q0) OR (U' AND Q0')
  J2 = K2 = (U AND Q1 AND Q0) OR (U' AND Q1' AND Q0')

                       U
                       │
              ┌────────┴────────┐
              │                 │
          ┌───┴───┐         ┌───┴───┐
   Q0 ───►│       │  Q0' ──►│       │
          │  AND  │         │  AND  │
   U  ───►│       │  U' ───►│       │
          └───┬───┘         └───┬───┘
              │                 │
              └────────┬────────┘
                       │
                      OR
                       │
                       ▼
                   J1 = K1`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Synchronous MOD-N Counter</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Synchronous MOD-6 Counter (counts 0-5):

State Table:
┌─────────────┬─────────────┬───────────────────┐
│ Present     │ Next        │ JK Inputs         │
│ Q2 Q1 Q0    │ Q2 Q1 Q0    │ J2K2  J1K1  J0K0  │
├─────────────┼─────────────┼───────────────────┤
│ 0  0  0     │ 0  0  1     │  0X    0X    1X   │
│ 0  0  1     │ 0  1  0     │  0X    1X    X1   │
│ 0  1  0     │ 0  1  1     │  0X    X0    1X   │
│ 0  1  1     │ 1  0  0     │  1X    X1    X1   │
│ 1  0  0     │ 1  0  1     │  X0    0X    1X   │
│ 1  0  1     │ 0  0  0     │  X1    0X    X1   │ ← Reset
│ 1  1  0     │ X  X  X     │  XX    XX    XX   │ (unused)
│ 1  1  1     │ X  X  X     │  XX    XX    XX   │ (unused)
└─────────────┴─────────────┴───────────────────┘

K-maps give:
  J0 = 1
  K0 = 1
  J1 = Q0.Q2'
  K1 = Q0
  J2 = Q0.Q1
  K2 = Q0

State Diagram:
    ┌──────────────────────────────────────┐
    │                                      │
    ▼                                      │
┌───────┐  ┌───────┐  ┌───────┐  ┌───────┐│
│  000  │→│  001  │→│  010  │→│  011  ││
│   0   │  │   1   │  │   2   │  │   3   ││
└───────┘  └───────┘  └───────┘  └───────┘│
                                     │     │
                                     ▼     │
                               ┌───────┐  │
                           ┌──│  100  │  │
                           │  │   4   │  │
                           │  └───────┘  │
                           │       │     │
                           │       ▼     │
                           │  ┌───────┐  │
                           │  │  101  │──┘
                           │  │   5   │
                           │  └───────┘
                           │       │
                           └───────┘
                            (wraps to 0)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">BCD (Decade) Counter</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Synchronous BCD (MOD-10) Counter:

Counts: 0→1→2→3→4→5→6→7→8→9→0...

State Table Analysis:
┌─────────────────┬─────────────────┐
│    Present      │      Next       │
│  Q3 Q2 Q1 Q0    │  Q3 Q2 Q1 Q0    │
├─────────────────┼─────────────────┤
│  0  0  0  0     │  0  0  0  1     │
│  0  0  0  1     │  0  0  1  0     │
│  0  0  1  0     │  0  0  1  1     │
│  0  0  1  1     │  0  1  0  0     │
│  0  1  0  0     │  0  1  0  1     │
│  0  1  0  1     │  0  1  1  0     │
│  0  1  1  0     │  0  1  1  1     │
│  0  1  1  1     │  1  0  0  0     │
│  1  0  0  0     │  1  0  0  1     │
│  1  0  0  1     │  0  0  0  0     │ ← Reset
└─────────────────┴─────────────────┘

Derived Logic Equations:
  J0 = 1
  K0 = 1
  J1 = Q0.Q3'
  K1 = Q0
  J2 = Q0.Q1
  K2 = Q0.Q1
  J3 = Q0.Q1.Q2
  K3 = Q0

Reset occurs at 1001→0000 (9→0)
States 1010 through 1111 are unused

Applications:
  - Digital clocks (units digit)
  - Frequency counters
  - Event counters with decimal display
  - 74LS90, 74LS160, 74LS162 ICs`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Synchronous Counter with D Flip-Flops</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`3-Bit Synchronous Up Counter using D Flip-Flops:

For D flip-flops: D = Q(next)

State Table:
┌─────────────┬─────────────┬─────────────┐
│ Present     │ Next        │ D Inputs    │
│ Q2 Q1 Q0    │ Q2 Q1 Q0    │ D2  D1  D0  │
├─────────────┼─────────────┼─────────────┤
│ 0  0  0     │ 0  0  1     │ 0   0   1   │
│ 0  0  1     │ 0  1  0     │ 0   1   0   │
│ 0  1  0     │ 0  1  1     │ 0   1   1   │
│ 0  1  1     │ 1  0  0     │ 1   0   0   │
│ 1  0  0     │ 1  0  1     │ 1   0   1   │
│ 1  0  1     │ 1  1  0     │ 1   1   0   │
│ 1  1  0     │ 1  1  1     │ 1   1   1   │
│ 1  1  1     │ 0  0  0     │ 0   0   0   │
└─────────────┴─────────────┴─────────────┘

K-maps give:
  D0 = Q0'
  D1 = Q0 XOR Q1
  D2 = Q0.Q1 XOR Q2

These are the same as:
  D0 = Q0 XOR 1  (always toggle)
  D1 = Q1 XOR Q0  (toggle when Q0=1)
  D2 = Q2 XOR (Q0.Q1)  (toggle when Q0=Q1=1)

The D input equals present state XOR toggle condition`}
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
            <td className="p-3 border">No cumulative propagation delay</td>
            <td className="p-3 border">More complex design</td>
          </tr>
          <tr>
            <td className="p-3 border">Higher operating frequency</td>
            <td className="p-3 border">Requires more logic gates</td>
          </tr>
          <tr>
            <td className="p-3 border">No glitches or spikes in output</td>
            <td className="p-3 border">Higher power consumption</td>
          </tr>
          <tr>
            <td className="p-3 border">Easy to design any modulus</td>
            <td className="p-3 border">More interconnections</td>
          </tr>
          <tr>
            <td className="p-3 border">All outputs valid simultaneously</td>
            <td className="p-3 border">Larger chip area</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common IC Examples</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">IC Number</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Modulus</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">74LS160</td>
            <td className="p-3 border">Synchronous Decade</td>
            <td className="p-3 border">MOD-10</td>
          </tr>
          <tr>
            <td className="p-3 border">74LS161</td>
            <td className="p-3 border">Synchronous Binary</td>
            <td className="p-3 border">MOD-16</td>
          </tr>
          <tr>
            <td className="p-3 border">74LS162</td>
            <td className="p-3 border">Synchronous Decade</td>
            <td className="p-3 border">MOD-10</td>
          </tr>
          <tr>
            <td className="p-3 border">74LS163</td>
            <td className="p-3 border">Synchronous Binary</td>
            <td className="p-3 border">MOD-16</td>
          </tr>
          <tr>
            <td className="p-3 border">74LS191</td>
            <td className="p-3 border">Sync Up/Down Binary</td>
            <td className="p-3 border">MOD-16</td>
          </tr>
          <tr>
            <td className="p-3 border">74LS192</td>
            <td className="p-3 border">Sync Up/Down Decade</td>
            <td className="p-3 border">MOD-10</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>All flip-flops share a common clock in synchronous counters</li>
        <li>All outputs change simultaneously at clock edge</li>
        <li>No cumulative propagation delay - faster operation</li>
        <li>Toggle conditions determined by combinational logic</li>
        <li>JK flip-flops simplify design with don't care conditions</li>
        <li>D flip-flops use D = Q XOR (toggle condition) pattern</li>
        <li>Any modulus counter can be designed systematically</li>
        <li>More complex but essential for high-speed applications</li>
        <li>Outputs are always valid - no glitches during transitions</li>
      </ul>
    </div>
  </div>
);

export default SyncCounters;
