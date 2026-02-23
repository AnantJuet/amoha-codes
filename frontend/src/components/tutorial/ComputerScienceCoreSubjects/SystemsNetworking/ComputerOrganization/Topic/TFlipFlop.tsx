import React from 'react';

const TFlipFlop: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      T Flip-Flop
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The T (Toggle) flip-flop is a specialized flip-flop that toggles its output state whenever
      the T input is high during a clock edge. When T=0, the output holds its previous value.
      This simple toggle behavior makes the T flip-flop ideal for building binary counters
      and frequency dividers, where the output needs to switch between states at regular intervals.
    </p>

    <h2 className="text-3xl font-bold mt-8">T Flip-Flop Symbol</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`T Flip-Flop Symbol:

    ┌───────────────────┐
    │                   │
  T─┤                   ├─Q
    │    T Flip-Flop    │
    │                   ├─Q'
    │                   │
    │         ▲         │
    └─────────┼─────────┘
              │
             CLK

With Preset and Clear:

          PR (active-low)
           │
           ▼
    ┌──────┴────────────┐
    │                   │
  T─┤                   ├─Q
    │    T Flip-Flop    │
    │                   ├─Q'
    │                   │
    │         ▲         │
    └─────────┼─────────┘
              │    │
             CLK   ▼
                  CLR (active-low)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Characteristic Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">T</th>
            <th className="p-3 border">Q(next)</th>
            <th className="p-3 border">Operation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">Q (no change)</td>
            <td className="p-3 border">Hold</td>
          </tr>
          <tr className="bg-green-100 dark:bg-green-900/30">
            <td className="p-3 border">1</td>
            <td className="p-3 border">Q' (complement)</td>
            <td className="p-3 border">Toggle</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Truth Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">T</th>
            <th className="p-3 border">Q</th>
            <th className="p-3 border">Q(next)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Characteristic Equation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`T Flip-Flop Characteristic Equation:

  Q(next) = T XOR Q = TQ' + T'Q

Derivation using K-map:

          T
       0     1
    ┌─────┬─────┐
Q 0 │  0  │  1  │
    ├─────┼─────┤
  1 │  1  │  0  │
    └─────┴─────┘

From the pattern, Q(next) = T XOR Q

Alternative forms:
  Q(next) = T ⊕ Q           (XOR notation)
  Q(next) = TQ' + T'Q       (Sum of Products)
  Q(next) = (T + Q)(T' + Q') (Product of Sums)

Verification:
  T=0, Q=0: Q(next) = 0 XOR 0 = 0 (Hold)
  T=0, Q=1: Q(next) = 0 XOR 1 = 1 (Hold)
  T=1, Q=0: Q(next) = 1 XOR 0 = 1 (Toggle)
  T=1, Q=1: Q(next) = 1 XOR 1 = 0 (Toggle)

The XOR relationship shows the toggle behavior clearly:
  When T=0: Output unchanged (XOR with 0)
  When T=1: Output complemented (XOR with 1)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Excitation Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Q</th>
            <th className="p-3 border">Q(next)</th>
            <th className="p-3 border">T</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">No change needed, T=0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Need to toggle, T=1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Need to toggle, T=1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">No change needed, T=0</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
      Key insight: T = Q XOR Q(next). Toggle when state changes, hold when state stays same.
    </p>

    <h2 className="text-3xl font-bold mt-8">Timing Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`T Flip-Flop Timing Diagram (Positive Edge-Triggered):

CLK:    ───┐  ┌───┐  ┌───┐  ┌───┐  ┌───┐  ┌───┐  ┌───
           │  │   │  │   │  │   │  │   │  │   │  │
           └──┘   └──┘   └──┘   └──┘   └──┘   └──┘
            ↑      ↑      ↑      ↑      ↑      ↑
            1      2      3      4      5      6

T:      ───────────┐        ┌─────────────────────────
                   │        │
                   └────────┘

Q:      ─────────────┐   ┌────────┐   ┌───────────────
                     │   │        │   │
                     └───┘        └───┘

        │      │      │      │      │      │
        t0     t1     t2     t3     t4     t5

Analysis (initial Q=0):
  Edge 1: T=1 -> Toggle (Q: 0->1)
  Edge 2: T=1 -> Toggle (Q: 1->0)
  Edge 3: T=0 -> Hold (Q stays 0)
  Edge 4: T=1 -> Toggle (Q: 0->1)
  Edge 5: T=1 -> Toggle (Q: 1->0)
  Edge 6: T=1 -> Toggle (Q: 0->1)

T=1 permanently (Always Toggle Mode):
CLK:    ───┐  ┌───┐  ┌───┐  ┌───┐  ┌───┐  ┌───
           │  │   │  │   │  │   │  │   │  │
           └──┘   └──┘   └──┘   └──┘   └──┘

T:      ──────────────────────────────────────────
        (Always high)

Q:      ───────┐     ┌─────┐     ┌─────┐
               │     │     │     │     │
               └─────┘     └─────┘     └─────

Output toggles at every clock edge - frequency divider!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`T Flip-Flop State Diagram:

                      T = 0
                   ┌─────────┐
                   │  (Hold) │
                   │    ▼    │
             ┌─────┴─────────────────┐
             │                       │
   T = 0     │        Q = 0          │
   (Hold)    │                       │
     ┌──────►│                       │◄────────┐
     │       └───────────────────────┘         │
     │              │        ▲                 │
     │              │        │                 │
     │    T = 1     │        │     T = 1       │
     │   (Toggle)   │        │    (Toggle)     │
     │              ▼        │                 │
     │       ┌───────────────────────┐         │
     │       │                       │         │
     │       │        Q = 1          │         │
     │       │                       │─────────┘
     └───────│                       │   T = 0
             └───────────────────────┘  (Hold)
                      │
                      │ T = 0 (Hold)
                      ▼
                   ┌─────────┐
                   │         │
                   └─────────┘

Two states with symmetric transitions:
  T=0: Stay in current state
  T=1: Move to other state`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">T Flip-Flop Implementations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`1. T Flip-Flop from JK Flip-Flop:

   Connect J = K = T

         T ──┬────────► J ──┐
             │              │  ┌─────────┐
             │              ├──┤         ├──► Q
             └────────────►│K │   JK    │
                           └──┤  FF     ├──► Q'
                              └─────────┘
                                   ▲
                                  CLK

   When T=0: J=K=0 -> Hold
   When T=1: J=K=1 -> Toggle

2. T Flip-Flop from D Flip-Flop:

   Use XOR gate: D = T XOR Q

    ┌─────────────────────────────────┐
    │                                 │
    │  ┌─────┐    ┌─────────────┐     │
  T─┼─►│     │    │             │     │
    │  │ XOR ├───►│D         Q  ├─────┼──► Q
    │  │     │    │   D FF      │     │
    └─►│     │    │         Q'  ├─────┼──► Q'
       └─────┘    │      ▲      │     │
                  └──────┼──────┘     │
                        CLK          │
                                      │
    └─────────────────────────────────┘
              Q feedback

   Logic: D = T XOR Q
   When T=0: D = Q (hold)
   When T=1: D = Q' (toggle)

3. T Flip-Flop from SR Flip-Flop:

         T ──┬───────────────────┐
             │                   │
             │    ┌─────┐        │
             └───►│     │        │
          Q'────►│ AND ├────────┴───► S
                 └─────┘
                                       ┌─────────┐
             ┌───►┌─────┐              │         │
             │    │     │              │   SR    ├──► Q
          T ─┴───►│ AND ├──────────────│  FF     │
                  │     │       ┌─────►│         ├──► Q'
          Q ─────►│     │       │      └─────────┘
                  └─────┘       │           ▲
                               │          CLK
                     R ────────┘

   S = T.Q' (Set when T=1 and currently 0)
   R = T.Q  (Reset when T=1 and currently 1)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Binary Counter Using T Flip-Flops</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`3-Bit Asynchronous (Ripple) Counter:

Each T flip-flop toggles when its clock input goes from 1 to 0.
T inputs are all tied to 1 (always toggle mode).

                T=1          T=1          T=1
                 │            │            │
                 ▼            ▼            ▼
    ┌─────────┐  ┌─────────┐  ┌─────────┐
CLK─┤▼        ├──┤▼        ├──┤▼        │
    │   Q0    │  │   Q1    │  │   Q2    │
    │   T FF  │  │   T FF  │  │   T FF  │
    │         │  │         │  │         │
    └────┬────┘  └────┬────┘  └────┬────┘
         │            │            │
         └──► LSB     └──► Bit 1   └──► MSB

Count Sequence:
Clock  Q2  Q1  Q0  | Decimal
─────────────────────────────
  0     0   0   0  |    0
  1     0   0   1  |    1
  2     0   1   0  |    2
  3     0   1   1  |    3
  4     1   0   0  |    4
  5     1   0   1  |    5
  6     1   1   0  |    6
  7     1   1   1  |    7
  8     0   0   0  |    0  (wraps)

Timing Diagram:
CLK:  ─┘└┘└┘└┘└┘└┘└┘└┘└─
Q0:   ──┘ └─┘ └─┘ └─┘ └──  (Toggles every CLK)
Q1:   ────┘   └───┘   └──  (Toggles every 2 CLK)
Q2:   ────────┘       └──  (Toggles every 4 CLK)

Frequency Division:
  Q0 frequency = CLK/2
  Q1 frequency = CLK/4
  Q2 frequency = CLK/8`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Binary Counters:</strong> Both synchronous and asynchronous counters
      </li>
      <li>
        <strong>Frequency Dividers:</strong> Divide clock frequency by powers of 2
      </li>
      <li>
        <strong>Frequency Synthesizers:</strong> Generate multiple clock frequencies
      </li>
      <li>
        <strong>Event Counters:</strong> Count pulses or events
      </li>
      <li>
        <strong>Toggle Switches:</strong> Alternate between two states
      </li>
      <li>
        <strong>State Machines:</strong> Simplify designs requiring toggle behavior
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Comparison with Other Flip-Flops</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">T Flip-Flop</th>
            <th className="p-3 border">D Flip-Flop</th>
            <th className="p-3 border">JK Flip-Flop</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Inputs</td>
            <td className="p-3 border">1 (T)</td>
            <td className="p-3 border">1 (D)</td>
            <td className="p-3 border">2 (J, K)</td>
          </tr>
          <tr>
            <td className="p-3 border">Operations</td>
            <td className="p-3 border">Hold, Toggle</td>
            <td className="p-3 border">Set, Reset</td>
            <td className="p-3 border">All four</td>
          </tr>
          <tr>
            <td className="p-3 border">Best For</td>
            <td className="p-3 border">Counters</td>
            <td className="p-3 border">Registers</td>
            <td className="p-3 border">General purpose</td>
          </tr>
          <tr>
            <td className="p-3 border">Characteristic Eq.</td>
            <td className="p-3 border">Q+ = T XOR Q</td>
            <td className="p-3 border">Q+ = D</td>
            <td className="p-3 border">Q+ = JQ' + K'Q</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>T flip-flop has two modes: Hold (T=0) and Toggle (T=1)</li>
        <li>Characteristic equation: Q(next) = T XOR Q</li>
        <li>Perfect for building binary counters and frequency dividers</li>
        <li>Can be constructed from JK flip-flop (J=K=T) or D flip-flop (D=T XOR Q)</li>
        <li>With T=1 always, output toggles every clock - divide-by-2</li>
        <li>Cascading T flip-flops creates ripple counter</li>
        <li>Excitation table: T = Q XOR Q(next)</li>
        <li>Simplest flip-flop for applications requiring toggle behavior</li>
      </ul>
    </div>
  </div>
);

export default TFlipFlop;
