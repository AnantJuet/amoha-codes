import React from 'react';

const JKFlipFlop: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      JK Flip-Flop
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The JK flip-flop is considered the most versatile and universal flip-flop. It eliminates the
      invalid state problem of the SR flip-flop by defining the J=K=1 condition as a toggle operation.
      Named after Jack Kilby, the inventor of the integrated circuit, the JK flip-flop can perform
      all four possible operations: hold, set, reset, and toggle.
    </p>

    <h2 className="text-3xl font-bold mt-8">JK Flip-Flop Symbol</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`JK Flip-Flop Symbol:

    ┌───────────────────┐
    │                   │
  J─┤                   ├─Q
    │    JK Flip-Flop   │
  K─┤                   ├─Q'
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
  J─┤                   ├─Q
    │    JK Flip-Flop   │
  K─┤                   ├─Q'
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
            <th className="p-3 border">J</th>
            <th className="p-3 border">K</th>
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
          <tr className="bg-green-100 dark:bg-green-900/30">
            <td className="p-3 border">1</td>
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
            <th className="p-3 border">J</th>
            <th className="p-3 border">K</th>
            <th className="p-3 border">Q</th>
            <th className="p-3 border">Q(next)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
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
{`JK Flip-Flop Characteristic Equation:

  Q(next) = JQ' + K'Q

Derivation using K-map:

             JK
          00  01  11  10
     ┌────┬────┬────┬────┐
Q  0 │ 0  │ 0  │ 1  │ 1  │
     ├────┼────┼────┼────┤
   1 │ 1  │ 0  │ 0  │ 1  │
     └────┴────┴────┴────┘

Grouping 1s:
  - J term: Row where Q=0, columns 11 and 10 -> JQ'
  - K' term: Row where Q=1, columns 00 and 10 -> K'Q

Therefore: Q(next) = JQ' + K'Q

Verification:
  J=0, K=0: Q(next) = 0.Q' + 1.Q = Q (Hold)
  J=0, K=1: Q(next) = 0.Q' + 0.Q = 0 (Reset)
  J=1, K=0: Q(next) = 1.Q' + 1.Q = 1 (Set)
  J=1, K=1: Q(next) = 1.Q' + 0.Q = Q' (Toggle)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Excitation Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Q</th>
            <th className="p-3 border">Q(next)</th>
            <th className="p-3 border">J</th>
            <th className="p-3 border">K</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">X</td>
            <td className="p-3 border">Stay at 0: J=0, K=don't care</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">X</td>
            <td className="p-3 border">Change 0 to 1: J=1, K=don't care</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">X</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Change 1 to 0: J=don't care, K=1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">X</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">Stay at 1: J=don't care, K=0</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
      X = Don't care. The flexibility of don't cares makes JK ideal for counter design.
    </p>

    <h2 className="text-3xl font-bold mt-8">Timing Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`JK Flip-Flop Timing Diagram (Positive Edge-Triggered):

CLK:    ───┐  ┌───┐  ┌───┐  ┌───┐  ┌───┐  ┌───┐  ┌───
           │  │   │  │   │  │   │  │   │  │   │  │
           └──┘   └──┘   └──┘   └──┘   └──┘   └──┘
            ↑      ↑      ↑      ↑      ↑      ↑

J:      ───────┐              ┌───────────────────────
               │              │
               └──────────────┘

K:      ──────────────────────┐        ┌──────────────
                              │        │
                              └────────┘

Q:      ───────┐        ┌─────┘  ┌─────┘
               │        │        │
               └────────┘        └────────────────────

        │      │      │      │      │      │
        t0     t1     t2     t3     t4     t5

Analysis (assume initial Q=1):
  t0: J=1, K=0 -> Set (Q stays 1)
  t1: J=0, K=0 -> Hold (Q=1)
  t2: J=0, K=0 -> Hold (Q=1)
  t3: J=1, K=1 -> Toggle (Q becomes 0)
  t4: J=1, K=1 -> Toggle (Q becomes 1)
  t5: J=0, K=1 -> Reset (Q becomes 0)

Toggle Operation (J=K=1):
  Clock cycle: Q toggles between 0 and 1
  This is the key feature that SR flip-flop lacks`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`JK Flip-Flop State Diagram:

                    JK = 00 or 01
                    ┌─────────┐
                    │         │
                    │    ▼    │
             ┌──────┴─────────────────┐
             │                        │
   JK=01,11  │        Q = 0           │  JK=10,11
   (Reset)   │                        │  (Set/Toggle)
     ┌──────►│                        │◄───────┐
     │       └────────────────────────┘        │
     │              │                          │
     │              │ JK = 10 or 11            │
     │              │ (Set/Toggle)             │
     │              ▼                          │
     │       ┌────────────────────────┐        │
     │       │                        │        │
     │       │        Q = 1           │        │
     │       │                        │────────┘
     └───────│                        │  JK=00,10
             └────────────────────────┘  (Hold)
                      │
                      │ JK = 00 or 10
                      │ (Hold/Set)
                      ▼
                    ┌─────────┐
                    │         │
                    └─────────┘

All four operations possible from either state!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">JK Flip-Flop Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`JK Flip-Flop from SR Flip-Flop:

The invalid state S=R=1 is prevented by ANDing with Q feedback.

           J ──┬───────────────────┐
               │                   │
               │    ┌─────┐        │
               └───►│     │        │
          Q'──────►│ AND ├────────┴───► S
                   └─────┘
                                          ┌─────────┐
                                          │         │
                   ┌─────┐                │   SR    ├──► Q
               ┌──►│     │                │  Flip   │
          Q ──────►│ AND ├────────────────│  Flop   ├──► Q'
               │   └─────┘        ┌──────►│         │
               │                  │       └─────────┘
           K ──┴──────────────────┘             ▲
                                               │
                                              CLK

Logic:
  S = J.Q'  (Set only if J=1 AND currently Q=0)
  R = K.Q   (Reset only if K=1 AND currently Q=1)

This ensures S and R are never both 1:
  If Q=0: S can be 1, but R=K.0=0
  If Q=1: R can be 1, but S=J.0=0

When J=K=1:
  If Q=0: S=1, R=0 -> Q becomes 1 (Set)
  If Q=1: S=0, R=1 -> Q becomes 0 (Reset)
  Result: Toggle!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Master-Slave JK Flip-Flop</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Master-Slave JK Flip-Flop:

Prevents race condition during toggle by using two stages.

    ┌─────────────────────────────────────────────────┐
    │                                                 │
    │   MASTER (JK Latch)        SLAVE (SR Latch)    │
    │  ┌───────────────┐        ┌───────────────┐    │
  J─┼─►│               │──Qm───►│               │────┼──► Q
    │  │   JK Latch    │        │   SR Latch    │    │
  K─┼─►│               │──Qm'──►│               │────┼──► Q'
    │  │     En        │        │     En        │    │
    │  └───────┬───────┘        └───────┬───────┘    │
    │          │                        │            │
    │          │      ┌───┐            │            │
  CLK─┼──────────┴─────►│NOT├─────────────┘            │
    │                 └───┘                          │
    └─────────────────────────────────────────────────┘

Operation:
  CLK = 1: Master responds to J,K; Slave holds
  CLK = 0: Master holds; Slave copies Master's output

Timing:
  CLK:    ┌────────────────┐          ┌────────────────┐
          │                │          │                │
  ────────┘                └──────────┘                └────
           ↑                ↑          ↑
           │                │          │
         Master           Slave      Master
         captures         captures   captures
         J,K              Qm         J,K

Ones-Catching Problem:
  If J momentarily becomes 1 while CLK=1,
  Master may capture it even if J returns to 0
  before CLK falls. Edge-triggered versions solve this.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conversion to Other Flip-Flops</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`JK Flip-Flop as Universal Flip-Flop:

1. JK to D Flip-Flop:
   Connect: J = D, K = D'

         D ──┬────────► J ──┐
             │              │  ┌─────────┐
             │    ┌───┐     ├──┤         ├──► Q
             └───►│NOT├────►│K │   JK    │
                  └───┘     └──┤         ├──► Q'
                               └─────────┘

2. JK to T Flip-Flop:
   Connect: J = K = T

         T ──┬────────► J ──┐
             │              │  ┌─────────┐
             │              ├──┤         ├──► Q
             └────────────►│K │   JK    │
                           └──┤         ├──► Q'
                              └─────────┘

3. JK to SR Flip-Flop:
   Connect: J = S, K = R (with SR=0 constraint)

         S ──────────► J ──┐
                           │  ┌─────────┐
                           ├──┤         ├──► Q
         R ──────────► K ──┘  │   JK    │
                              │         ├──► Q'
                              └─────────┘
   Note: Must ensure S and R are never both 1`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Counters:</strong> The toggle function makes JK ideal for binary counters
      </li>
      <li>
        <strong>Frequency Dividers:</strong> J=K=1 divides clock frequency by 2
      </li>
      <li>
        <strong>Shift Registers:</strong> Versatile data shifting capabilities
      </li>
      <li>
        <strong>Finite State Machines:</strong> Universal for any state transition
      </li>
      <li>
        <strong>Data Storage:</strong> Can hold, set, reset, or toggle as needed
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Comparison with SR Flip-Flop</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">SR Flip-Flop</th>
            <th className="p-3 border">JK Flip-Flop</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Both inputs = 1</td>
            <td className="p-3 border">Invalid state</td>
            <td className="p-3 border">Toggle operation</td>
          </tr>
          <tr>
            <td className="p-3 border">Operations</td>
            <td className="p-3 border">Hold, Set, Reset</td>
            <td className="p-3 border">Hold, Set, Reset, Toggle</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Simpler</td>
            <td className="p-3 border">More complex</td>
          </tr>
          <tr>
            <td className="p-3 border">Counter Design</td>
            <td className="p-3 border">Requires additional logic</td>
            <td className="p-3 border">Direct toggle available</td>
          </tr>
          <tr>
            <td className="p-3 border">Versatility</td>
            <td className="p-3 border">Limited</td>
            <td className="p-3 border">Universal</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>JK flip-flop is the most versatile flip-flop type</li>
        <li>Eliminates the invalid state problem of SR flip-flop</li>
        <li>J=K=1 causes toggle operation (Q becomes Q')</li>
        <li>Characteristic equation: Q(next) = JQ' + K'Q</li>
        <li>Can be converted to D, T, or SR flip-flop with simple connections</li>
        <li>Excitation table has more don't cares, simplifying design</li>
        <li>Ideal for counter design due to toggle capability</li>
        <li>Master-slave configuration prevents race conditions</li>
        <li>Edge-triggered versions avoid ones-catching problem</li>
      </ul>
    </div>
  </div>
);

export default JKFlipFlop;
