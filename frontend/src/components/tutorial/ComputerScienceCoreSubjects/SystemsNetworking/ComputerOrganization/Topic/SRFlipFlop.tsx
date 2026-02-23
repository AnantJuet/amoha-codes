import React from 'react';

const SRFlipFlop: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SR Flip-Flop
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The SR (Set-Reset) flip-flop is the most basic type of flip-flop and serves as the foundation
      for understanding other flip-flop types. It has two inputs: S (Set) which forces the output
      to 1, and R (Reset) which forces the output to 0. The SR flip-flop is also known as the
      RS flip-flop and comes in both latch (level-triggered) and flip-flop (edge-triggered) variants.
    </p>

    <h2 className="text-3xl font-bold mt-8">SR Latch (Basic)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`SR Latch using NOR Gates:

            S ─────┬───────────────────┐
                   │                   │
                   │    ┌─────┐        │
                   └───►│     │        │
                        │ NOR ├───┬────┴──► Q
            ┌──────────►│     │   │
            │           └─────┘   │
            │                     │
            │    ┌─────┐         │
            │    │     │◄────────┘
            └────┤ NOR ├───┬──────────► Q'
                 │     │   │
            R ──►│     │   │
                 └─────┘   │
                           │
                 ┌─────────┘
                 │
                 └────────────────────────►

SR Latch using NAND Gates:

            S' ────────────┬──────────────┐
                           │              │
                  ┌────────┴───┐          │
                  │            │          │
                  │   NAND     ├──┬───────┴──► Q
          ┌──────►│            │  │
          │       └────────────┘  │
          │                       │
          │       ┌────────────┐  │
          │       │            │◄─┘
          └───────┤   NAND     ├──┬──────────► Q'
                  │            │  │
            R' ──►│            │  │
                  └────────────┘  │
                                  │
                  ┌───────────────┘
                  └──────────────────────────►

Note: NAND implementation has active-low inputs (S', R')`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SR Flip-Flop Symbol</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Clocked SR Flip-Flop Symbol:

    ┌───────────────────┐
    │                   │
  S─┤                   ├─Q
    │    SR Flip-Flop   │
  R─┤                   ├─Q'
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
  S─┤                   ├─Q
    │    SR Flip-Flop   │
  R─┤                   ├─Q'
    │                   │
    │         ▲         │
    └─────────┼─────────┘
              │    │
             CLK   ▼
                  CLR (active-low)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Characteristic Table</h2>
    <p className="leading-relaxed">
      The characteristic table shows the next state of the flip-flop based on current inputs
      and present state.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">S</th>
            <th className="p-3 border">R</th>
            <th className="p-3 border">Q(next)</th>
            <th className="p-3 border">Operation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">Q (no change)</td>
            <td className="p-3 border">Hold / Memory</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">Reset</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Set</td>
          </tr>
          <tr className="bg-red-100 dark:bg-red-900/30">
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Invalid / Undefined</td>
            <td className="p-3 border">Forbidden State</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Characteristic Equation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`SR Flip-Flop Characteristic Equation:

  Q(next) = S + R'Q

  With constraint: S.R = 0  (S and R cannot both be 1)

Derivation using K-map:

            SR
         00  01  11  10
     ┌────┬────┬────┬────┐
Q  0 │ 0  │ 0  │ X  │ 1  │
     ├────┼────┼────┼────┤
   1 │ 1  │ 0  │ X  │ 1  │
     └────┴────┴────┴────┘

From K-map:
  Q(next) = S + R'Q

Where:
  S = 1 sets Q to 1
  R = 1 resets Q to 0
  S = R = 0 maintains previous state
  S = R = 1 is invalid (both Q and Q' would be same)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Excitation Table</h2>
    <p className="leading-relaxed">
      The excitation table shows what inputs are required to achieve a desired state transition.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Q</th>
            <th className="p-3 border">Q(next)</th>
            <th className="p-3 border">S</th>
            <th className="p-3 border">R</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">X</td>
            <td className="p-3 border">Stay at 0: Don't set, reset optional</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">Change 0 to 1: Must set, must not reset</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Change 1 to 0: Must reset, must not set</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">X</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">Stay at 1: Set optional, don't reset</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
      X = Don't care (can be 0 or 1)
    </p>

    <h2 className="text-3xl font-bold mt-8">Timing Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`SR Flip-Flop Timing Diagram (Positive Edge-Triggered):

CLK:    ───┐  ┌───┐  ┌───┐  ┌───┐  ┌───┐  ┌───┐  ┌───
           │  │   │  │   │  │   │  │   │  │   │  │
           └──┘   └──┘   └──┘   └──┘   └──┘   └──┘
            ↑      ↑      ↑      ↑      ↑      ↑

S:      ───────┐        ┌───────────────┐
               │        │               │
               └────────┘               └─────────────

R:      ────────────────────────┐              ┌─────
                                │              │
                                └──────────────┘

Q:      ───────┐                ┌───────┐
               │                │       │
               └────────────────┘       └─────────────

Q':     ───────┘                └───────┘
               ┌────────────────┐       ┌─────────────
               │                │       │

        │      │      │      │      │      │
        t0     t1     t2     t3     t4     t5

Analysis:
  t0: Initial state Q=1
  t1: S=1, R=0 at rising edge -> Q becomes 1 (already 1)
  t2: S=0, R=0 at rising edge -> Q holds (remains 1)
  t3: S=1, R=0 at rising edge -> Q=1 (Set)
  t4: S=0, R=1 at rising edge -> Q=0 (Reset)
  t5: S=0, R=0 at rising edge -> Q holds (remains 0)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`SR Flip-Flop State Diagram:

                    SR = 00
                    (Hold)
                  ┌─────────┐
                  │         │
                  │    ▼    │
             ┌────┴───────────────┐
             │                    │
      SR=01  │       Q = 0        │  SR=10
     (Reset) │                    │  (Set)
     ┌──────►│                    │◄───────┐
     │       └────────────────────┘        │
     │              │                      │
     │              │ SR = 10              │
     │              │ (Set)                │
     │              ▼                      │
     │       ┌────────────────────┐        │
     │       │                    │        │
     │       │       Q = 1        │        │
     │       │                    │────────┘
     └───────│                    │  SR=00
             └────────────────────┘  (Hold)
                      │
                      │
                      ▼
               SR = 01 (Reset)

Note: SR = 11 is forbidden and not shown`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">The Invalid State Problem</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-4">
      <pre className="text-sm text-gray-900">
{`Why S=R=1 is Invalid:

For NOR-based SR Latch:
  When S=1 and R=1:
    Q = NOR(R, Q') = NOR(1, Q') = 0
    Q'= NOR(S, Q) = NOR(1, Q) = 0

  Both Q and Q' become 0!
  This violates the fundamental rule: Q and Q' must be complements

Race Condition:
  When S and R return to 0 simultaneously:
    - The final state is unpredictable
    - Depends on which gate is slightly faster
    - Creates metastability issues

      S=R=1          S=R=0
    Q=0, Q'=0   ->   ???
                     Could be Q=0 or Q=1
                     (Non-deterministic)

Solutions:
  1. Use JK flip-flop (handles J=K=1 by toggling)
  2. Add logic to prevent S=R=1
  3. Use D flip-flop (single input eliminates issue)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Gated SR Latch</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Gated SR Latch (with Enable):

          S ───┬───────────────┐
               │    ┌─────┐    │
               └───►│     │    │
          E ──────►│ AND ├────┴───►S'──┐
                   └─────┘             │
                                       │  ┌─────────┐
                                       └──┤         │
                                          │ SR Latch├──► Q
                                       ┌──┤         │
                   ┌─────┐             │  └─────────┘
               ┌──►│     │             │
          E ──────►│ AND ├────────────►R'─┘
               │   └─────┘
          R ───┘

Truth Table:
┌───┬───┬───┬─────────────────────┐
│ E │ S │ R │     Q(next)         │
├───┼───┼───┼─────────────────────┤
│ 0 │ X │ X │ Q (no change)       │
│ 1 │ 0 │ 0 │ Q (no change)       │
│ 1 │ 0 │ 1 │ 0 (Reset)           │
│ 1 │ 1 │ 0 │ 1 (Set)             │
│ 1 │ 1 │ 1 │ Invalid             │
└───┴───┴───┴─────────────────────┘

When E=0, latch holds its state regardless of S and R`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Debouncing Switches:</strong> Eliminates mechanical switch bounce
      </li>
      <li>
        <strong>Memory Elements:</strong> Basic storage in SRAM cells
      </li>
      <li>
        <strong>Control Circuits:</strong> Start/Stop control logic
      </li>
      <li>
        <strong>Building Block:</strong> Foundation for other flip-flop types
      </li>
      <li>
        <strong>Data Latching:</strong> Temporary data storage
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Switch Debouncing Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Using SR Latch for Switch Debouncing:

Mechanical switch bounces when pressed:

Without debouncing:
  Switch:  ──┐ ┌─┐ ┌─┐ ┌────────
             │ │ │ │ │ │
             └─┘ └─┘ └─┘
            Multiple transitions!

With SR Latch debouncing:
                    ┌──────┐
  Vcc ──┬─────────►│      │
        │    ┌────►│  SR  ├──► Q (Clean output)
        │    │     │ Latch│
     ┌──┴──┐ │  ┌─►│      │
     │  S  │─┘  │  └──────┘
     │     │    │
     │  R  │────┘
     └──┬──┘
        │
       GND

When switch moves to S position: S=1, R=0 -> Q=1
When switch moves to R position: S=0, R=1 -> Q=0
Bouncing at either position maintains the set state`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>SR flip-flop is the basic building block for sequential circuits</li>
        <li>S (Set) input makes Q=1, R (Reset) input makes Q=0</li>
        <li>When S=R=0, the flip-flop maintains its previous state (memory)</li>
        <li>S=R=1 is an invalid/forbidden condition that must be avoided</li>
        <li>Characteristic equation: Q(next) = S + R'Q with constraint SR=0</li>
        <li>Can be built using NOR gates (active-high) or NAND gates (active-low)</li>
        <li>Gated SR latch adds enable control for synchronous operation</li>
        <li>Edge-triggered SR flip-flop samples inputs only at clock edge</li>
        <li>Common application: switch debouncing circuits</li>
      </ul>
    </div>
  </div>
);

export default SRFlipFlop;
