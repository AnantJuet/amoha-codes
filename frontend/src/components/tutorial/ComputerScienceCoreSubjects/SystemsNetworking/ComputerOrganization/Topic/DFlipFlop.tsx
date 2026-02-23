import React from 'react';

const DFlipFlop: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      D Flip-Flop
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The D (Data or Delay) flip-flop is the simplest and most widely used flip-flop in modern
      digital systems. It has a single data input D that is transferred to the output Q at the
      clock edge. The D flip-flop eliminates the invalid state problem by having only one input,
      making it ideal for data storage, registers, and synchronization applications.
    </p>

    <h2 className="text-3xl font-bold mt-8">D Flip-Flop Symbol</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`D Flip-Flop Symbol:

    ┌───────────────────┐
    │                   │
  D─┤                   ├─Q
    │    D Flip-Flop    │
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
  D─┤                   ├─Q
    │    D Flip-Flop    │
    │                   ├─Q'
    │                   │
    │         ▲         │
    └─────────┼─────────┘
              │    │
             CLK   ▼
                  CLR (active-low)

Edge Triggering Indicators:
  ▲ or ─►│  = Positive edge-triggered
  ▼ or ─○►│ = Negative edge-triggered`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Characteristic Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">D</th>
            <th className="p-3 border">Q(next)</th>
            <th className="p-3 border">Operation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">Reset / Store 0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Set / Store 1</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
      The output simply follows the input at each clock edge - the simplest behavior!
    </p>

    <h2 className="text-3xl font-bold mt-8">Characteristic Equation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`D Flip-Flop Characteristic Equation:

  Q(next) = D

This is the simplest characteristic equation possible!

Truth Table with Present State:
┌───┬───┬──────────┐
│ D │ Q │ Q(next)  │
├───┼───┼──────────┤
│ 0 │ 0 │    0     │
│ 0 │ 1 │    0     │
│ 1 │ 0 │    1     │
│ 1 │ 1 │    1     │
└───┴───┴──────────┘

Notice: Q(next) depends ONLY on D, not on present Q
This is why D flip-flop is also called "Data" flip-flop

The "Delay" interpretation:
  The output Q equals the input D from ONE clock cycle ago

  Time:     t0    t1    t2    t3    t4
  D:         1     0     1     1     0
  Q:         X     1     0     1     1
             └─────┴─────┴─────┴─────┘
               Output is delayed by one clock cycle`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Excitation Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Q</th>
            <th className="p-3 border">Q(next)</th>
            <th className="p-3 border">D</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">To stay at 0, input D=0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">To change 0 to 1, input D=1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">To change 1 to 0, input D=0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">To stay at 1, input D=1</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
      Key insight: D always equals the desired next state Q(next). No don't cares!
    </p>

    <h2 className="text-3xl font-bold mt-8">Timing Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`D Flip-Flop Timing Diagram (Positive Edge-Triggered):

CLK:    ───┐  ┌───┐  ┌───┐  ┌───┐  ┌───┐  ┌───┐  ┌───
           │  │   │  │   │  │   │  │   │  │   │  │
           └──┘   └──┘   └──┘   └──┘   └──┘   └──┘
            ↑      ↑      ↑      ↑      ↑      ↑
            │      │      │      │      │      │
            1      2      3      4      5      6

D:      ───────┐        ┌─────────────┐        ┌─────
               │        │             │        │
               └────────┘             └────────┘

Q:      ───────────┐        ┌─────────────┐
                   │        │             │
                   └────────┘             └────────

        │      │      │      │      │      │
        t0     t1     t2     t3     t4     t5

Analysis:
  Edge 1: D=1 -> Q becomes 1
  Edge 2: D=0 -> Q becomes 0
  Edge 3: D=0 -> Q stays 0
  Edge 4: D=1 -> Q becomes 1
  Edge 5: D=1 -> Q stays 1
  Edge 6: D=0 -> Q becomes 0

Key timing parameters:
  - Setup time (tsu): D must be stable before clock edge
  - Hold time (th): D must remain stable after clock edge
  - Clock-to-Q delay (tcq): Time for Q to change after clock edge`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">D Flip-Flop Implementations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`1. D Flip-Flop from SR Flip-Flop:

   Connect S = D and R = D'

         D ──┬────────► S ──┐
             │              │  ┌─────────┐
             │    ┌───┐     ├──┤         ├──► Q
             └───►│NOT├────►│R │   SR    │
                  └───┘     └──┤  FF     ├──► Q'
                               └─────────┘

   When D=1: S=1, R=0 -> Q=1
   When D=0: S=0, R=1 -> Q=0

2. D Flip-Flop from JK Flip-Flop:

   Connect J = D and K = D'

         D ──┬────────► J ──┐
             │              │  ┌─────────┐
             │    ┌───┐     ├──┤         ├──► Q
             └───►│NOT├────►│K │   JK    │
                  └───┘     └──┤  FF     ├──► Q'
                               └─────────┘

3. D Latch using Transmission Gates:

             D ──────┬──────────────┐
                     │              │
                  ┌──┴──┐           │
         CLK ────►│ TG  ├───────────┼──► Q
                  └──┬──┘           │
                     │    ┌───┐     │
                     └───►│NOT├─────┘
                          └───┘

4. Master-Slave D Flip-Flop:

    ┌─────────────────────────────────────────┐
    │   D Latch (Master)    D Latch (Slave)   │
    │   ┌───────────┐      ┌───────────┐      │
  D─┼──►│     D     │──────│     D     │──────┼──► Q
    │   │   En=CLK  │      │  En=CLK'  │      │
    │   └───────────┘      └───────────┘      │
    │         ▲                  ▲            │
    │         │      ┌───┐      │            │
  CLK─┼─────────┴─────►│NOT├──────┘            │
    │                └───┘                    │
    └─────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">D Latch vs D Flip-Flop</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">D Latch</th>
            <th className="p-3 border">D Flip-Flop</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Control</td>
            <td className="p-3 border">Enable signal (level)</td>
            <td className="p-3 border">Clock signal (edge)</td>
          </tr>
          <tr>
            <td className="p-3 border">Transparency</td>
            <td className="p-3 border">Yes (when enabled)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Capture</td>
            <td className="p-3 border">Throughout enable high</td>
            <td className="p-3 border">Only at clock edge</td>
          </tr>
          <tr>
            <td className="p-3 border">Glitch Sensitivity</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Low</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Simpler</td>
            <td className="p-3 border">More complex</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`D Latch Behavior (Level-Sensitive):

Enable:  ────────┐     HIGH    ┌────────────
                 └─────────────┘
                 ← Transparent →← Latched →

When Enable = HIGH:
  Q follows D (transparent mode)

When Enable = LOW:
  Q holds last value (latched mode)

D Flip-Flop Behavior (Edge-Triggered):

CLK:    ────────┐  ┌────────┐  ┌────────
                │  │        │  │
                └──┘        └──┘
                ↑           ↑
                │           │
              Data        Data
            captured    captured

Only samples D at the exact clock edge moment
Much more predictable for synchronous design`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">D Flip-Flop with Enable</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`D Flip-Flop with Clock Enable:

              ┌───────────────────┐
              │                   │
  D ──┬──────►│ 0                 │
      │       │   MUX         D   ├──► Q
      │  ┌───►│ 1             FF  │
      │  │    │   ▲               │
      │  │    │   │               │
      │  │    └───┼───────────────┘
      │  │        │           ▲
      │  │       EN          CLK
      │  │
      │  └────────────────────────────┐
      │                               │
      └───────────────────────────────┘
                                    Q feedback

Truth Table:
┌─────┬─────┬───┬──────────┐
│ CLK │ EN  │ D │ Q(next)  │
├─────┼─────┼───┼──────────┤
│  ↑  │  0  │ X │    Q     │  (Hold)
│  ↑  │  1  │ 0 │    0     │  (Load 0)
│  ↑  │  1  │ 1 │    1     │  (Load 1)
└─────┴─────┴───┴──────────┘

When EN=0: Output holds previous value
When EN=1: Output follows D input`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`D Flip-Flop State Diagram:

                      D = 0
                   ┌─────────┐
                   │         │
                   │    ▼    │
             ┌─────┴─────────────────┐
             │                       │
   D = 0     │        Q = 0          │  D = 1
  (Reset)    │                       │  (Set)
     ┌──────►│                       │◄────────┐
     │       └───────────────────────┘         │
     │              │                          │
     │              │ D = 1                    │
     │              │ (Set)                    │
     │              ▼                          │
     │       ┌───────────────────────┐         │
     │       │                       │         │
     │       │        Q = 1          │         │
     │       │                       │─────────┘
     └───────│                       │   D = 1
             └───────────────────────┘  (Stay)
                      │
                      │ D = 0 (Reset)
                      ▼

Simple state transitions:
  D=0 always goes to/stays in Q=0
  D=1 always goes to/stays in Q=1`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Registers:</strong> Multi-bit data storage (n D flip-flops for n-bit register)
      </li>
      <li>
        <strong>Shift Registers:</strong> Serial-to-parallel and parallel-to-serial conversion
      </li>
      <li>
        <strong>Pipeline Stages:</strong> Data synchronization between processing stages
      </li>
      <li>
        <strong>Frequency Dividers:</strong> With feedback Q' to D, divides frequency by 2
      </li>
      <li>
        <strong>Synchronizers:</strong> Prevent metastability in clock domain crossing
      </li>
      <li>
        <strong>Memory Elements:</strong> Building block for RAM and register files
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Frequency Divider Using D Flip-Flop</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Divide-by-2 Circuit:

    ┌─────────────────────────────┐
    │                             │
    │  ┌───────────────────┐      │
    │  │                   │      │
    └─►│D               Q  ├──────┼──► Output (f/2)
       │   D Flip-Flop     │      │
       │               Q'  ├──────┘
       │        ▲          │
       └────────┼──────────┘
                │
           Input Clock (f)

Timing:
CLK:    ─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─
         │ │ │ │ │ │ │ │ │ │ │ │ │ │
         └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘

Q:      ───┐   ┌───┐   ┌───┐   ┌───
           │   │   │   │   │   │
           └───┘   └───┘   └───┘

Q toggles every clock cycle (D = Q')
Output frequency = Input frequency / 2

Cascading for division by 2^n:
  Stage 1: f/2
  Stage 2: f/4
  Stage 3: f/8
  ...and so on`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>D flip-flop has the simplest characteristic equation: Q(next) = D</li>
        <li>Output simply copies input at each clock edge</li>
        <li>No invalid states - only one data input eliminates ambiguity</li>
        <li>Also called "Delay" flip-flop as output is delayed by one clock</li>
        <li>Most commonly used flip-flop in modern digital design</li>
        <li>D latch is level-sensitive; D flip-flop is edge-triggered</li>
        <li>Essential for registers, pipelines, and synchronization</li>
        <li>With Q' feedback to D, creates divide-by-2 circuit</li>
        <li>Can be built from SR or JK flip-flop using an inverter</li>
      </ul>
    </div>
  </div>
);

export default DFlipFlop;
