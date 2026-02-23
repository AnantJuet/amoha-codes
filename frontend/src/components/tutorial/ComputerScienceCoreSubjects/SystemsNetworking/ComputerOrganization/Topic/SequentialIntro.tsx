import React from 'react';

const SequentialIntro: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Sequential Circuits
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Sequential circuits are a fundamental category of digital circuits whose outputs depend not only
      on the current inputs but also on the history of previous inputs. Unlike combinational circuits,
      sequential circuits possess memory elements that store information about past states, making them
      essential for building complex digital systems like processors, memory units, and controllers.
    </p>

    <h2 className="text-3xl font-bold mt-8">Combinational vs Sequential Circuits</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Combinational Circuits</th>
            <th className="p-3 border">Sequential Circuits</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Output Dependency</td>
            <td className="p-3 border">Current inputs only</td>
            <td className="p-3 border">Current inputs + Previous state</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory</td>
            <td className="p-3 border">No memory elements</td>
            <td className="p-3 border">Contains memory (flip-flops/latches)</td>
          </tr>
          <tr>
            <td className="p-3 border">Feedback</td>
            <td className="p-3 border">No feedback path</td>
            <td className="p-3 border">Feedback path exists</td>
          </tr>
          <tr>
            <td className="p-3 border">Clock</td>
            <td className="p-3 border">Not required</td>
            <td className="p-3 border">Usually required (synchronous)</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">Adders, Multiplexers, Decoders</td>
            <td className="p-3 border">Counters, Registers, FSMs</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Block Diagram of Sequential Circuit</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Sequential Circuit General Structure:

                    ┌─────────────────────────────────┐
                    │                                 │
    Inputs ────────►│    Combinational Logic          │────────► Outputs
                    │                                 │
                    └─────────────┬───────────────────┘
                                  │
                                  │ Next State
                                  ▼
                    ┌─────────────────────────────────┐
      Clock ───────►│    Memory Elements              │
                    │    (Flip-Flops/Latches)         │
                    └─────────────┬───────────────────┘
                                  │
                                  │ Present State
                                  │
                    ┌─────────────┴───────────────────┐
                    │                                 │
                    └───────────►  Feedback  ◄────────┘

Mathematical Representation:
  Output: Z = f(X, Q)    where X = input, Q = present state
  Next State: Q+ = g(X, Q)

  Z and Q+ are functions of both current inputs and present state`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Sequential Circuits</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Synchronous Sequential Circuits</h3>
    <p className="leading-relaxed">
      In synchronous circuits, state changes occur only at discrete time intervals defined by a
      clock signal. All memory elements are synchronized to the same clock, ensuring predictable
      and coordinated operation.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Synchronous Circuit Timing:

Clock Signal:
      ┌───┐   ┌───┐   ┌───┐   ┌───┐   ┌───┐
      │   │   │   │   │   │   │   │   │   │
  ────┘   └───┘   └───┘   └───┘   └───┘   └────
      ↑       ↑       ↑       ↑       ↑
      │       │       │       │       │
   State   State   State   State   State
   Change  Change  Change  Change  Change

Characteristics:
  - All flip-flops change state at clock edges
  - Predictable timing behavior
  - Easier to design and analyze
  - Most common in modern digital systems`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Asynchronous Sequential Circuits</h3>
    <p className="leading-relaxed">
      Asynchronous circuits do not use a global clock signal. State transitions occur whenever
      inputs change, making timing analysis more complex but potentially faster in certain
      applications.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Asynchronous Circuit Behavior:

Input Signal:
  ──────┐       ┌───────────┐       ┌─────
        │       │           │       │
        └───────┘           └───────┘
        ↓       ↓           ↓       ↓
     State   State       State   State
     Change  Change      Change  Change

Characteristics:
  - No clock signal required
  - State changes with any input change
  - Faster response time
  - More complex design and analysis
  - Susceptible to race conditions and hazards`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison of Synchronous and Asynchronous Circuits</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Synchronous</th>
            <th className="p-3 border">Asynchronous</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Clock</td>
            <td className="p-3 border">Required</td>
            <td className="p-3 border">Not required</td>
          </tr>
          <tr>
            <td className="p-3 border">State Transitions</td>
            <td className="p-3 border">At clock edges</td>
            <td className="p-3 border">Immediate on input change</td>
          </tr>
          <tr>
            <td className="p-3 border">Design Complexity</td>
            <td className="p-3 border">Lower</td>
            <td className="p-3 border">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border">Timing Analysis</td>
            <td className="p-3 border">Simpler</td>
            <td className="p-3 border">Complex</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Limited by clock</td>
            <td className="p-3 border">Can be faster</td>
          </tr>
          <tr>
            <td className="p-3 border">Power Consumption</td>
            <td className="p-3 border">Higher (continuous clock)</td>
            <td className="p-3 border">Lower (event-driven)</td>
          </tr>
          <tr>
            <td className="p-3 border">Reliability</td>
            <td className="p-3 border">More reliable</td>
            <td className="p-3 border">Race conditions possible</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Elements</h2>
    <p className="leading-relaxed">
      Sequential circuits use memory elements to store state information. The two main types are
      latches (level-sensitive) and flip-flops (edge-triggered).
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Memory Element Types:

1. Latches (Level-Sensitive):
   ┌─────────────────────────────────┐
   │  Input changes are captured     │
   │  while the enable signal is     │
   │  HIGH (or LOW for some types)   │
   └─────────────────────────────────┘

   Enable:  ─────────┐    HIGH    ┌─────────
                     └────────────┘
                     ← Transparent →

2. Flip-Flops (Edge-Triggered):
   ┌─────────────────────────────────┐
   │  Input changes are captured     │
   │  only at clock edges            │
   │  (rising or falling edge)       │
   └─────────────────────────────────┘

   Clock:   ────┐  ┌────┐  ┌────┐  ┌────
               │  │    │  │    │  │
               └──┘    └──┘    └──┘
               ↑  ↑    ↑  ↑    ↑  ↑
            Rising  Rising  Rising
            edges   edges   edges`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Table and State Diagram</h2>
    <p className="leading-relaxed">
      Sequential circuits are described using state tables (tabular form) and state diagrams
      (graphical form) that show all possible states and transitions.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Example: 2-bit Binary Counter

State Table:
┌─────────────┬───────────┬────────┐
│ Present     │ Next      │        │
│ State (Q1Q0)│ State     │ Output │
├─────────────┼───────────┼────────┤
│    00       │    01     │   00   │
│    01       │    10     │   01   │
│    10       │    11     │   10   │
│    11       │    00     │   11   │
└─────────────┴───────────┴────────┘

State Diagram:
                    ┌───────────────┐
                    │               │
                    ▼               │
              ┌──────────┐         │
         ┌───►│    00    │─────────┘
         │    └──────────┘
         │         │
         │         ▼
         │    ┌──────────┐
         │    │    01    │
         │    └──────────┘
         │         │
         │         ▼
         │    ┌──────────┐
         │    │    10    │
         │    └──────────┘
         │         │
         │         ▼
         │    ┌──────────┐
         └────│    11    │
              └──────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Characteristic Equations</h2>
    <p className="leading-relaxed">
      Characteristic equations mathematically describe how the next state of a memory element
      depends on its current state and inputs. They are essential for designing sequential circuits.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Common Characteristic Equations:

SR Flip-Flop:
  Q(next) = S + R'Q
  Constraint: SR = 0 (S and R cannot both be 1)

JK Flip-Flop:
  Q(next) = JQ' + K'Q

D Flip-Flop:
  Q(next) = D

T Flip-Flop:
  Q(next) = TQ' + T'Q = T XOR Q

Where:
  Q(next) = Next state after clock edge
  Q = Current/Present state
  Q' = Complement of current state
  S, R, J, K, D, T = Input signals`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of Sequential Circuits</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Counters:</strong> Count events, generate timing sequences
      </li>
      <li>
        <strong>Registers:</strong> Store and transfer data in processors
      </li>
      <li>
        <strong>Memory:</strong> RAM, ROM, and cache systems
      </li>
      <li>
        <strong>Finite State Machines:</strong> Control units, protocol handlers
      </li>
      <li>
        <strong>Serial Communication:</strong> UART, SPI, I2C interfaces
      </li>
      <li>
        <strong>Frequency Dividers:</strong> Clock division and generation
      </li>
      <li>
        <strong>Sequence Detectors:</strong> Pattern recognition in data streams
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Timing Concepts</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Critical Timing Parameters:

1. Setup Time (tsu):
   ├──────────────────┤
   │     tsu          │
   Data ──────────────┼────────────
                      ▲
                    Clock Edge
   Data must be stable BEFORE clock edge

2. Hold Time (th):
                      ├────────────┤
                      │     th     │
   Data ──────────────┼────────────
                      ▲
                    Clock Edge
   Data must remain stable AFTER clock edge

3. Propagation Delay (tpd):
                      ├─────────────┤
   Clock Edge ────────┤    tpd      │
                      ▼             ▼
   Output Change      Old State    New State

4. Clock-to-Output Delay (tco):
   Time from clock edge to valid output`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Sequential circuits have memory and their outputs depend on present state and inputs</li>
        <li>They contain feedback paths that enable state storage</li>
        <li>Synchronous circuits use clock signals for coordinated state changes</li>
        <li>Asynchronous circuits respond immediately to input changes</li>
        <li>Basic memory elements are latches (level-sensitive) and flip-flops (edge-triggered)</li>
        <li>State tables and diagrams describe all possible states and transitions</li>
        <li>Characteristic equations mathematically define next-state behavior</li>
        <li>Timing parameters (setup, hold, propagation delay) are critical for reliable operation</li>
      </ul>
    </div>
  </div>
);

export default SequentialIntro;
