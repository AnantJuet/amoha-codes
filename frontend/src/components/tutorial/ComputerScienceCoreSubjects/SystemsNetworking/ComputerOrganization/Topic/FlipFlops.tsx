import React from 'react';

const FlipFlops: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Flip-Flops: Overview
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Flip-flops are the fundamental building blocks of sequential logic circuits. They are bistable
      multivibrators capable of storing one bit of information. Unlike latches which are level-sensitive,
      flip-flops are edge-triggered, meaning they change state only at specific clock transitions,
      making them essential for synchronous digital systems.
    </p>

    <h2 className="text-3xl font-bold mt-8">Latch vs Flip-Flop</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Latch</th>
            <th className="p-3 border">Flip-Flop</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Triggering</td>
            <td className="p-3 border">Level-sensitive</td>
            <td className="p-3 border">Edge-triggered</td>
          </tr>
          <tr>
            <td className="p-3 border">State Change</td>
            <td className="p-3 border">During entire high/low period</td>
            <td className="p-3 border">Only at clock edge</td>
          </tr>
          <tr>
            <td className="p-3 border">Clock Sensitivity</td>
            <td className="p-3 border">Enable signal level</td>
            <td className="p-3 border">Rising or falling edge</td>
          </tr>
          <tr>
            <td className="p-3 border">Transparency</td>
            <td className="p-3 border">Transparent when enabled</td>
            <td className="p-3 border">Non-transparent</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Simpler</td>
            <td className="p-3 border">More complex</td>
          </tr>
          <tr>
            <td className="p-3 border">Use Case</td>
            <td className="p-3 border">Asynchronous circuits</td>
            <td className="p-3 border">Synchronous circuits</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Edge Triggering Concept</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Edge Triggering Types:

Positive Edge-Triggered (Rising Edge):
                   ┌────────┐
  Clock            │        │
       ────────────┘        └────────────
                   ▲
                   │
              State changes here
              (0 to 1 transition)

Negative Edge-Triggered (Falling Edge):
       ┌────────────┐
  Clock│            │
       │            └────────────────────
                    ▲
                    │
               State changes here
               (1 to 0 transition)

Timing Diagram Example:
Clock:  ───┐  ┌───┐  ┌───┐  ┌───┐  ┌───
           │  │   │  │   │  │   │  │
           └──┘   └──┘   └──┘   └──┘
           ↑      ↑      ↑      ↑
           │      │      │      │
Data:  ────┴──────┴──────┴──────┴───────
         D1     D2     D3     D4

Output Q (positive edge-triggered):
  Q samples input D only at rising edges
  Output holds value between clock edges`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Flip-Flops</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Inputs</th>
            <th className="p-3 border">Characteristic Equation</th>
            <th className="p-3 border">Primary Use</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">SR Flip-Flop</td>
            <td className="p-3 border">S (Set), R (Reset)</td>
            <td className="p-3 border">Q+ = S + R'Q (SR=0)</td>
            <td className="p-3 border">Basic storage</td>
          </tr>
          <tr>
            <td className="p-3 border">JK Flip-Flop</td>
            <td className="p-3 border">J, K</td>
            <td className="p-3 border">Q+ = JQ' + K'Q</td>
            <td className="p-3 border">Universal flip-flop</td>
          </tr>
          <tr>
            <td className="p-3 border">D Flip-Flop</td>
            <td className="p-3 border">D (Data)</td>
            <td className="p-3 border">Q+ = D</td>
            <td className="p-3 border">Data storage, registers</td>
          </tr>
          <tr>
            <td className="p-3 border">T Flip-Flop</td>
            <td className="p-3 border">T (Toggle)</td>
            <td className="p-3 border">Q+ = T XOR Q</td>
            <td className="p-3 border">Counters, frequency division</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Flip-Flop Symbols</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Standard Flip-Flop Symbols:

SR Flip-Flop:              JK Flip-Flop:
    ┌─────────┐               ┌─────────┐
  S─┤         ├─Q           J─┤         ├─Q
    │   SR    │               │   JK    │
  R─┤         ├─Q'          K─┤         ├─Q'
    │    ▲    │               │    ▲    │
    └────┼────┘               └────┼────┘
         │                         │
        CLK                       CLK

D Flip-Flop:               T Flip-Flop:
    ┌─────────┐               ┌─────────┐
  D─┤         ├─Q           T─┤         ├─Q
    │    D    │               │    T    │
    │         ├─Q'            │         ├─Q'
    │    ▲    │               │    ▲    │
    └────┼────┘               └────┼────┘
         │                         │
        CLK                       CLK

Clock Edge Indicators:
  ▲ = Positive edge-triggered (rising edge)
  ▼ = Negative edge-triggered (falling edge)
  ○▲ = Negative edge with bubble at clock input`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Excitation Tables</h2>
    <p className="leading-relaxed">
      Excitation tables show the required inputs to cause a specific state transition.
      They are the inverse of characteristic tables and are essential for sequential circuit design.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Q</th>
            <th className="p-3 border">Q+</th>
            <th className="p-3 border">SR</th>
            <th className="p-3 border">JK</th>
            <th className="p-3 border">D</th>
            <th className="p-3 border">T</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0X</td>
            <td className="p-3 border">0X</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">10</td>
            <td className="p-3 border">1X</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">01</td>
            <td className="p-3 border">X1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">X0</td>
            <td className="p-3 border">X0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
      X = Don't care (can be 0 or 1)
    </p>

    <h2 className="text-3xl font-bold mt-8">Flip-Flop Conversions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Converting Between Flip-Flop Types:

Any flip-flop type can be converted to another using combinational logic.

Example: D Flip-Flop from SR Flip-Flop

Step 1: Write conversion table
┌───┬────┬───────┐
│ D │ Q+ │  S  R │
├───┼────┼───────┤
│ 0 │ 0  │  0  X │
│ 1 │ 1  │  1  0 │
└───┴────┴───────┘

Step 2: Derive expressions
  S = D
  R = D'

Step 3: Implementation
         ┌─────────┐
    D ───┤         ├─── S ───┐
         │   NOT   │         │  ┌─────────┐
         │    │    │         └──┤         ├─ Q
         │    ▼    │            │   SR    │
         │    ────────────────R─┤  FF     ├─ Q'
         └─────────┘            │    ▲    │
                                └────┼────┘
                                    CLK

Example: T Flip-Flop from JK Flip-Flop
  Simply connect: J = K = T

Example: D Flip-Flop from JK Flip-Flop
  Connect: J = D, K = D'`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Timing Parameters</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Critical Timing Parameters for Flip-Flops:

1. Setup Time (tsu):
   ├─────────────────tsu─────────────────┤
   Data: ────────────────────┬───────────────────
                             │ stable
                             ▼
   Clock:            ────────┼───┐
                             │   │
                             ├───┘
   Data must be stable tsu before clock edge

2. Hold Time (th):
                             ├──────th──────┤
   Data: ────────────────────┬──────────────┬────
                             │   stable     │
                             ▼              ▼
   Clock:            ────────┼───┐
                             │   │
                             ├───┘
   Data must be stable th after clock edge

3. Clock-to-Q Delay (tcq):
                             ├─────────tcq─────────┤
   Clock:            ────────┼───┐
                             │   │
                             ├───┘
   Q:                        │         ┌───────────
                             │         │
                             ├─────────┘
   Output valid tcq after clock edge

4. Maximum Clock Frequency:
   fmax = 1 / (tcq + tcombinational + tsu)

Metastability:
  Occurs when setup/hold times are violated
  Output may oscillate or settle to undefined state`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Asynchronous Inputs</h2>
    <p className="leading-relaxed">
      Most flip-flops include asynchronous preset (PR) and clear (CLR) inputs that override
      the clocked behavior, allowing immediate state changes regardless of the clock.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Flip-Flop with Preset and Clear:

            PR (active low)
             │
             ▼
    ┌────────┴────────┐
  D─┤                 ├─Q
    │    D Flip-Flop  │
    │                 ├─Q'
    │       ▲         │
    └───────┼─────────┘
            │    │
           CLK   ▼
                CLR (active low)

Truth Table with Async Inputs:
┌─────┬─────┬─────┬─────┬─────────────┐
│ PR  │ CLR │ CLK │  D  │     Q       │
├─────┼─────┼─────┼─────┼─────────────┤
│  0  │  0  │  X  │  X  │  Invalid    │
│  0  │  1  │  X  │  X  │     1       │
│  1  │  0  │  X  │  X  │     0       │
│  1  │  1  │  ↑  │  0  │     0       │
│  1  │  1  │  ↑  │  1  │     1       │
└─────┴─────┴─────┴─────┴─────────────┘

Notes:
  - PR and CLR are typically active-low
  - They override clock and data inputs
  - Used for initialization/reset`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Master-Slave Configuration</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Master-Slave Flip-Flop:

Two latches in series with inverted clock signals.

    ┌─────────────────────────────────────────┐
    │                                         │
    │    MASTER LATCH       SLAVE LATCH       │
    │   ┌───────────┐      ┌───────────┐      │
  D─┼──►│     D     │──Qm──│     D     │──────┼──► Q
    │   │           │      │           │      │
    │   │   En      │      │   En      │      │
    │   └─────┬─────┘      └─────┬─────┘      │
    │         │                  │            │
    │         │    ┌───┐        │            │
  CLK─┼────────┴───►│NOT├────────┘            │
    │              └───┘                      │
    └─────────────────────────────────────────┘

Operation:
  - When CLK=1: Master captures input, Slave holds
  - When CLK=0: Master holds, Slave captures Master's output

Timing:
  CLK:    ────┐    ┌────┐    ┌────
              │    │    │    │
              └────┘    └────┘
         Master   Slave  Master  Slave
         Active   Active Active  Active

Advantage: Prevents race conditions
Disadvantage: Ones catching problem in SR type`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">SR</td>
            <td className="p-3 border">Simple, intuitive operation</td>
            <td className="p-3 border">Invalid state (S=R=1)</td>
          </tr>
          <tr>
            <td className="p-3 border">JK</td>
            <td className="p-3 border">No invalid states, versatile</td>
            <td className="p-3 border">More complex, race condition risk</td>
          </tr>
          <tr>
            <td className="p-3 border">D</td>
            <td className="p-3 border">Simplest, no constraints</td>
            <td className="p-3 border">Cannot toggle without external logic</td>
          </tr>
          <tr>
            <td className="p-3 border">T</td>
            <td className="p-3 border">Perfect for counters</td>
            <td className="p-3 border">Limited functionality</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Flip-flops are edge-triggered bistable elements that store one bit</li>
        <li>They differ from latches in being edge-triggered rather than level-sensitive</li>
        <li>Four main types: SR, JK, D, and T flip-flops</li>
        <li>Each type has a characteristic equation defining next-state behavior</li>
        <li>Excitation tables show inputs needed for desired state transitions</li>
        <li>Any flip-flop type can be converted to another using logic gates</li>
        <li>Setup and hold times must be respected for reliable operation</li>
        <li>Asynchronous preset and clear inputs allow immediate state changes</li>
        <li>Master-slave configuration prevents race conditions</li>
      </ul>
    </div>
  </div>
);

export default FlipFlops;
