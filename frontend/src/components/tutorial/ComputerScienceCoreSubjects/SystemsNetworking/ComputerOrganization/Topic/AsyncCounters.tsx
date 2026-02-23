import React from 'react';

const AsyncCounters: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Asynchronous (Ripple) Counters
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Asynchronous counters, also known as ripple counters, are sequential circuits where only
      the first flip-flop receives the external clock signal. Each subsequent flip-flop is
      clocked by the output of the previous flip-flop, causing state changes to "ripple"
      through the counter from LSB to MSB. While simpler to design than synchronous counters,
      asynchronous counters have cumulative propagation delays that limit their operating speed.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Asynchronous (Ripple) Counter Structure:

The clock "ripples" from one flip-flop to the next.

                     T=1         T=1         T=1
                      │           │           │
                      ▼           ▼           ▼
    ┌─────────┐  ┌─────────┐  ┌─────────┐
CLK─┤▼     Q  ├──┤▼     Q  ├──┤▼     Q  │
    │   FF0   │  │   FF1   │  │   FF2   │
    │      Q' │  │      Q' │  │      Q' │
    └─────────┘  └─────────┘  └─────────┘
         │            │            │
         ▼            ▼            ▼
        Q0           Q1           Q2
       (LSB)                     (MSB)

Key Features:
  - Only FF0 receives external clock
  - FF1 is clocked by Q0 (or Q0')
  - FF2 is clocked by Q1 (or Q1')
  - Each FF output triggers the next
  - Changes "ripple" through the counter
  - Simpler wiring than synchronous

Clocking Chain:
  CLK → FF0 → Q0 → FF1 → Q1 → FF2 → Q2
              (clock)    (clock)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3-Bit Asynchronous Up Counter</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`3-Bit Asynchronous Up Counter using T Flip-Flops:

All T inputs tied to 1 (always toggle mode).
Each FF clocked by Q' of previous stage.

               T=1           T=1           T=1
                │             │             │
                ▼             ▼             ▼
    ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
CLK─┤▼        Q   │  │         Q   │  │         Q   │
    │    FF0      ├──┤▼   FF1     ├──┤▼   FF2      │──► Q2
    │         Q'  │  │         Q'  │  │         Q'  │
    └─────────────┘  └─────────────┘  └─────────────┘
           │                │                │
           ▼                ▼                ▼
          Q0               Q1               Q2

For Up Counter:
  - Use negative edge-triggered FFs, OR
  - Clock next stage with Q' output

Why Q' for up counting:
  When Q0 goes 1→0, Q0' goes 0→1
  Rising edge on Q0' triggers FF1 toggle
  This happens exactly when count increments past odd numbers

State Sequence:
  Count: 0→1→2→3→4→5→6→7→0...
  Q2Q1Q0: 000→001→010→011→100→101→110→111→000`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Timing Diagram with Propagation Delay</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Asynchronous Counter Timing (showing propagation delays):

CLK:  ───┐  ┌───┐  ┌───┐  ┌───┐  ┌───┐  ┌───┐  ┌───┐  ┌───
         │  │   │  │   │  │   │  │   │  │   │  │   │  │
         └──┘   └──┘   └──┘   └──┘   └──┘   └──┘   └──┘
          0    1    2    3    4    5    6    7    0

Q0:   ────┐     ┌─────┐     ┌─────┐     ┌─────┐     ┌────
          │     │     │     │     │     │     │     │
          └─────┘     └─────┘     └─────┘     └─────┘
          │←tpd→│

Q1:   ────────┐           ┌───────────┐           ┌──────
              │           │           │           │
              └───────────┘           └───────────┘
              │←──tpd──→│

Q2:   ────────────────┐                       ┌──────────
                      │                       │
                      └───────────────────────┘
                      │←────tpd────→│

ZOOM: Transition from 011 to 100 (3→4):

CLK:  ────────────┐
                  │
                  └──────────────────────────────────────

Q0:   ──────────────┐
                    │  ←──tpd──→
                    └────────────────────────────────────

Q1:   ────────────────────┐
                          │  ←──tpd──→
                          └──────────────────────────────

Q2:   ────────────────────────────┐
                                  │  ←──tpd──→
                                  └──────────────────────

                    │                                │
             CLK edge                         All stable
                    ├────────3 × tpd────────────────►│

Total delay = n × tpd for n-bit counter
During this time, intermediate values appear (glitches)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Glitch Problem</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-4">
      <pre className="text-sm text-gray-900">
{`Glitches in Asynchronous Counters:

During ripple, intermediate invalid states appear briefly.

Example: Transition from 7 to 0 (111 → 000)

Time      Q2  Q1  Q0  Decimal  Notes
───────────────────────────────────────
t         1   1   1     7      Before CLK edge
t+tpd     1   1   0     6      Q0 toggles first
t+2tpd    1   0   0     4      Q1 toggles second
t+3tpd    0   0   0     0      Q2 toggles last

Invalid sequence: 7 → 6 → 4 → 0

These glitches can cause problems:
  - Incorrect readings if sampled during ripple
  - False triggers in connected circuits
  - Decoding errors

Solutions:
  1. Use synchronous counter (no glitches)
  2. Strobe/sample only after settling time
  3. Use Gray code counter (only 1 bit changes)
  4. Add output latches with delayed enable

Maximum operating frequency:
  fmax = 1 / (n × tpd + tsu)

Where n = number of flip-flops
Much slower than synchronous: fmax_sync = 1 / (tpd + tsu)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3-Bit Asynchronous Down Counter</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`3-Bit Asynchronous Down Counter:

For Down Counter: Clock next stage with Q (not Q').

               T=1           T=1           T=1
                │             │             │
                ▼             ▼             ▼
    ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
CLK─┤▼        Q   ├──┤▼        Q   ├──┤▼        Q   │
    │    FF0      │  │    FF1      │  │    FF2      │
    │         Q'  │  │         Q'  │  │         Q'  │
    └─────────────┘  └─────────────┘  └─────────────┘
           │                │                │
           ▼                ▼                ▼
          Q0               Q1               Q2

State Sequence:
  Count: 7→6→5→4→3→2→1→0→7...
  Q2Q1Q0: 111→110→101→100→011→010→001→000→111

Why Q for down counting:
  When Q0 goes 0→1, rising edge triggers FF1
  This happens when count goes from even to odd
  Which is correct for counting down!

Alternative: Use positive edge-triggered FFs
  with Q' clocking (same as up counter)
  but the direction depends on edge type`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">MOD-N Asynchronous Counter</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Asynchronous MOD-6 Counter (counts 0-5):

Method: Detect state 6 (110) and reset to 0.

               T=1           T=1           T=1
                │             │             │
                ▼             ▼             ▼
    ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
CLK─┤▼        Q   ├──┤▼        Q   ├──┤▼        Q   │
    │    FF0      │  │    FF1      │  │    FF2      │
    │   CLR    Q' │  │   CLR    Q' │  │   CLR    Q' │
    └─────┬───────┘  └─────┬───────┘  └─────┬───────┘
          │                │                │
          └────────────────┴────────────────┘
                           │
                        ┌──┴──┐
                Q2 ────►│     │
                        │NAND │─── CLR (active low)
                Q1 ────►│     │
                        └─────┘

Detection Logic:
  CLR = (Q2.Q1)' = NAND(Q2, Q1)
  When Q2=1 and Q1=1 (state 110), CLR goes LOW
  All flip-flops reset to 0

State Sequence:
  000 → 001 → 010 → 011 → 100 → 101 → [110] → 000
                                        ↑
                                    Brief glitch!
                                    Resets immediately

Problem: State 110 appears momentarily (~1 gate delay)
This is the detect-and-reset glitch.

MOD-10 (Decade) Counter:
  Detect state 1010 (10)
  CLR = NAND(Q3, Q1)
  Reset when Q3=1 and Q1=1`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Diagrams</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`3-Bit Asynchronous Up Counter State Diagram:

    ┌──────────────────────────────────────────┐
    │                                          │
    ▼                                          │
┌───────┐    ┌───────┐    ┌───────┐    ┌───────┐
│  000  │───►│  001  │───►│  010  │───►│  011  │
│   0   │    │   1   │    │   2   │    │   3   │
└───────┘    └───────┘    └───────┘    └───────┘
                                           │
    ┌──────────────────────────────────────┘
    │
    ▼
┌───────┐    ┌───────┐    ┌───────┐    ┌───────┐
│  100  │───►│  101  │───►│  110  │───►│  111  │──┐
│   4   │    │   5   │    │   6   │    │   7   │  │
└───────┘    └───────┘    └───────┘    └───────┘  │
                                                   │
    ┌──────────────────────────────────────────────┘
    │
    └──► (wraps to 000)


MOD-6 Asynchronous Counter State Diagram:

    ┌──────────────────────────────────────────┐
    │                                          │
    ▼                                          │
┌───────┐    ┌───────┐    ┌───────┐    ┌───────┐
│  000  │───►│  001  │───►│  010  │───►│  011  │
│   0   │    │   1   │    │   2   │    │   3   │
└───────┘    └───────┘    └───────┘    └───────┘
                                           │
    ┌──────────────────────────────────────┘
    │
    ▼
┌───────┐    ┌───────┐    ┌ ─ ─ ─ ┐
│  100  │───►│  101  │───►  110     ─ ─ ─ Reset!
│   4   │    │   5   │    │ glitch│
└───────┘    └───────┘    └ ─ ─ ─ ┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison: Asynchronous vs Synchronous</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Asynchronous</th>
            <th className="p-3 border">Synchronous</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Clock Distribution</td>
            <td className="p-3 border">Ripples through FFs</td>
            <td className="p-3 border">Common to all FFs</td>
          </tr>
          <tr>
            <td className="p-3 border">Propagation Delay</td>
            <td className="p-3 border">n x tpd (cumulative)</td>
            <td className="p-3 border">1 x tpd (parallel)</td>
          </tr>
          <tr>
            <td className="p-3 border">Max Frequency</td>
            <td className="p-3 border">Lower (1/(n.tpd))</td>
            <td className="p-3 border">Higher (1/tpd)</td>
          </tr>
          <tr>
            <td className="p-3 border">Glitches</td>
            <td className="p-3 border">Yes, during ripple</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Design Complexity</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">Complex</td>
          </tr>
          <tr>
            <td className="p-3 border">Gate Count</td>
            <td className="p-3 border">Lower</td>
            <td className="p-3 border">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border">Power</td>
            <td className="p-3 border">Lower</td>
            <td className="p-3 border">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border">MOD-N Design</td>
            <td className="p-3 border">Reset glitch issue</td>
            <td className="p-3 border">Clean transitions</td>
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
            <td className="p-3 border">74LS90</td>
            <td className="p-3 border">Asynchronous Decade</td>
            <td className="p-3 border">MOD-2 x MOD-5</td>
          </tr>
          <tr>
            <td className="p-3 border">74LS92</td>
            <td className="p-3 border">Asynchronous Divide-by-12</td>
            <td className="p-3 border">MOD-12</td>
          </tr>
          <tr>
            <td className="p-3 border">74LS93</td>
            <td className="p-3 border">Asynchronous Binary</td>
            <td className="p-3 border">MOD-2 x MOD-8</td>
          </tr>
          <tr>
            <td className="p-3 border">74LS196</td>
            <td className="p-3 border">Presettable Decade</td>
            <td className="p-3 border">MOD-10</td>
          </tr>
          <tr>
            <td className="p-3 border">74LS197</td>
            <td className="p-3 border">Presettable Binary</td>
            <td className="p-3 border">MOD-16</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Frequency Division:</strong> Simple clock dividers where glitches are acceptable
      </li>
      <li>
        <strong>Event Counting:</strong> Low-speed pulse counting applications
      </li>
      <li>
        <strong>Timing Circuits:</strong> When exact timing is not critical
      </li>
      <li>
        <strong>LED Displays:</strong> Human eye cannot perceive brief glitches
      </li>
      <li>
        <strong>Educational:</strong> Teaching counter concepts (simpler to understand)
      </li>
      <li>
        <strong>Low-Power:</strong> Battery-operated devices where speed is not critical
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Only the first flip-flop receives the external clock</li>
        <li>Each subsequent FF is clocked by the output of the previous one</li>
        <li>State changes ripple through the counter with cumulative delay</li>
        <li>Total propagation delay = n x single flip-flop delay</li>
        <li>Maximum frequency is limited by ripple time</li>
        <li>Glitches occur during state transitions</li>
        <li>Simpler design, fewer gates than synchronous</li>
        <li>MOD-N requires detect-and-reset with brief glitch</li>
        <li>Up counter: clock with Q'; Down counter: clock with Q</li>
        <li>Best for low-speed, low-power applications</li>
      </ul>
    </div>
  </div>
);

export default AsyncCounters;
