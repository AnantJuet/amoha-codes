import React from 'react';

const Counters: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Counters: Introduction
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A counter is a sequential circuit that cycles through a predetermined sequence of states
      in response to clock pulses. Counters are fundamental components in digital systems,
      used for counting events, generating timing sequences, frequency division, and as
      building blocks for more complex control circuits. They can count up, count down,
      or follow any specified sequence.
    </p>

    <h2 className="text-3xl font-bold mt-8">Counter Basics</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`What is a Counter?

A counter is essentially a register that cycles through states:

  ┌───────────────────────────────────────────────────┐
  │                                                   │
  │    State 0 ─► State 1 ─► State 2 ─► ... ─► State N
  │       ▲                                      │
  │       └──────────────────────────────────────┘
  │                    (wraps around)
  │                                                   │
  └───────────────────────────────────────────────────┘

Key Components:
  - Flip-flops: Store the count value
  - Logic gates: Determine next state
  - Clock: Triggers state transitions

For an n-bit binary counter:
  - Contains n flip-flops
  - Counts from 0 to 2^n - 1
  - Has 2^n unique states

Example: 3-bit binary counter
  States: 000 → 001 → 010 → 011 → 100 → 101 → 110 → 111 → 000
  Count:    0     1     2     3     4     5     6     7     0`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Counter Classification</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Classification</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border" rowSpan={2}>By Clocking</td>
            <td className="p-3 border">Synchronous</td>
            <td className="p-3 border">All flip-flops share common clock</td>
          </tr>
          <tr>
            <td className="p-3 border">Asynchronous (Ripple)</td>
            <td className="p-3 border">Output of one FF clocks the next</td>
          </tr>
          <tr>
            <td className="p-3 border" rowSpan={2}>By Direction</td>
            <td className="p-3 border">Up Counter</td>
            <td className="p-3 border">Counts in ascending order</td>
          </tr>
          <tr>
            <td className="p-3 border">Down Counter</td>
            <td className="p-3 border">Counts in descending order</td>
          </tr>
          <tr>
            <td className="p-3 border" rowSpan={2}>By Modulus</td>
            <td className="p-3 border">Binary Counter</td>
            <td className="p-3 border">Mod-2^n (counts 0 to 2^n-1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Decade Counter</td>
            <td className="p-3 border">Mod-10 (counts 0 to 9)</td>
          </tr>
          <tr>
            <td className="p-3 border" rowSpan={2}>By Sequence</td>
            <td className="p-3 border">Natural Binary</td>
            <td className="p-3 border">Standard binary sequence</td>
          </tr>
          <tr>
            <td className="p-3 border">Non-binary</td>
            <td className="p-3 border">Custom sequence (Gray, BCD)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Counter Parameters</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Important Counter Parameters:

1. Modulus (MOD):
   Number of unique states before the counter repeats

   MOD-N counter: Counts from 0 to N-1

   Examples:
     MOD-8 (3-bit binary): 0,1,2,3,4,5,6,7,0,...
     MOD-10 (decade): 0,1,2,3,4,5,6,7,8,9,0,...
     MOD-16 (4-bit binary): 0,1,2,...,15,0,...

   Formula: n flip-flops → max MOD = 2^n
   To count MOD-N: Need ceil(log2(N)) flip-flops

2. Count Direction:
   Up: 0→1→2→...→(N-1)→0
   Down: (N-1)→(N-2)→...→1→0→(N-1)
   Up/Down: Controlled by direction input

3. Maximum Frequency:
   Synchronous: fmax = 1/(tpd + tsu)
   Asynchronous: fmax = 1/(n × tpd)  [slower!]

4. Propagation Delay:
   Synchronous: Same for all bits (1 × tpd)
   Asynchronous: Cumulative (n × tpd for n bits)

5. Terminal Count (TC):
   Signal indicating counter has reached final state
   Up counter: TC when count = MAX
   Down counter: TC when count = 0`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Table for 3-Bit Binary Counter</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Clock</th>
            <th className="p-3 border">Q2</th>
            <th className="p-3 border">Q1</th>
            <th className="p-3 border">Q0</th>
            <th className="p-3 border">Decimal</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">0</td></tr>
          <tr><td className="p-3 border">1</td><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">1</td><td className="p-3 border">1</td></tr>
          <tr><td className="p-3 border">2</td><td className="p-3 border">0</td><td className="p-3 border">1</td><td className="p-3 border">0</td><td className="p-3 border">2</td></tr>
          <tr><td className="p-3 border">3</td><td className="p-3 border">0</td><td className="p-3 border">1</td><td className="p-3 border">1</td><td className="p-3 border">3</td></tr>
          <tr><td className="p-3 border">4</td><td className="p-3 border">1</td><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">4</td></tr>
          <tr><td className="p-3 border">5</td><td className="p-3 border">1</td><td className="p-3 border">0</td><td className="p-3 border">1</td><td className="p-3 border">5</td></tr>
          <tr><td className="p-3 border">6</td><td className="p-3 border">1</td><td className="p-3 border">1</td><td className="p-3 border">0</td><td className="p-3 border">6</td></tr>
          <tr><td className="p-3 border">7</td><td className="p-3 border">1</td><td className="p-3 border">1</td><td className="p-3 border">1</td><td className="p-3 border">7</td></tr>
          <tr className="bg-green-100 dark:bg-green-900/30"><td className="p-3 border">8</td><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">0 (wrap)</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Timing Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`3-Bit Binary Up Counter Timing Diagram:

CLK:  ─┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐─
       └┘└┘└┘└┘└┘└┘└┘└┘└┘└┘└┘└┘└┘└┘└┘└┘└┘
        0  1  2  3  4  5  6  7  0  1  2

Q0:   ──┐  ┌──┐  ┌──┐  ┌──┐  ┌──┐  ┌──┐
        │  │  │  │  │  │  │  │  │  │  │
        └──┘  └──┘  └──┘  └──┘  └──┘  └──
      (Toggles every clock - frequency = CLK/2)

Q1:   ────┐     ┌────┐     ┌────┐     ┌──
          │     │    │     │    │     │
          └─────┘    └─────┘    └─────┘
      (Toggles every 2 clocks - frequency = CLK/4)

Q2:   ────────┐           ┌────────┐
              │           │        │
              └───────────┘        └────────
      (Toggles every 4 clocks - frequency = CLK/8)

Count: 0  1  2  3  4  5  6  7  0  1  2...

Observations:
  - Q0 (LSB) toggles at every clock edge
  - Q1 toggles when Q0 transitions from 1 to 0
  - Q2 toggles when Q1Q0 transitions from 11 to 00
  - Each bit divides frequency by 2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`3-Bit Binary Up Counter State Diagram:

        ┌──────────────────────────────────────────┐
        │                                          │
        ▼                                          │
    ┌───────┐    ┌───────┐    ┌───────┐    ┌───────┐
    │  000  │───►│  001  │───►│  010  │───►│  011  │
    │   0   │    │   1   │    │   2   │    │   3   │
    └───────┘    └───────┘    └───────┘    └───────┘
                                                │
    ┌───────────────────────────────────────────┘
    │
    ▼
    ┌───────┐    ┌───────┐    ┌───────┐    ┌───────┐
    │  100  │───►│  101  │───►│  110  │───►│  111  │
    │   4   │    │   5   │    │   6   │    │   7   │
    └───────┘    └───────┘    └───────┘    └───┬───┘
                                               │
        ┌──────────────────────────────────────┘
        │              (wraps to 000)
        ▼

MOD-8 counter: 8 states, 3 flip-flops
Each transition occurs on clock edge`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Synchronous vs Asynchronous Counters</h2>
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
            <td className="p-3 border">Common to all flip-flops</td>
            <td className="p-3 border">Ripples through flip-flops</td>
          </tr>
          <tr>
            <td className="p-3 border">State Changes</td>
            <td className="p-3 border">All bits change simultaneously</td>
            <td className="p-3 border">Bits change in sequence</td>
          </tr>
          <tr>
            <td className="p-3 border">Propagation Delay</td>
            <td className="p-3 border">1 flip-flop delay</td>
            <td className="p-3 border">Cumulative (n x delay)</td>
          </tr>
          <tr>
            <td className="p-3 border">Max Frequency</td>
            <td className="p-3 border">Higher</td>
            <td className="p-3 border">Lower</td>
          </tr>
          <tr>
            <td className="p-3 border">Glitches</td>
            <td className="p-3 border">Minimal</td>
            <td className="p-3 border">Possible during ripple</td>
          </tr>
          <tr>
            <td className="p-3 border">Design Complexity</td>
            <td className="p-3 border">Higher (more gates)</td>
            <td className="p-3 border">Lower (simpler wiring)</td>
          </tr>
          <tr>
            <td className="p-3 border">Power Consumption</td>
            <td className="p-3 border">Higher</td>
            <td className="p-3 border">Lower</td>
          </tr>
          <tr>
            <td className="p-3 border">Modulus Design</td>
            <td className="p-3 border">Any modulus possible</td>
            <td className="p-3 border">Non-binary more complex</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Modulus Calculation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Designing MOD-N Counters:

Step 1: Determine number of flip-flops needed
  n = ceil(log2(N))

Examples:
  MOD-10: n = ceil(log2(10)) = ceil(3.32) = 4 flip-flops
  MOD-12: n = ceil(log2(12)) = ceil(3.58) = 4 flip-flops
  MOD-60: n = ceil(log2(60)) = ceil(5.91) = 6 flip-flops

Step 2: Design the reset logic

Method 1: Detect and Reset (Asynchronous Clear)
  When count reaches N, generate reset signal

  Example: MOD-6 counter (counts 0-5)
  Detect state 110 (6) and reset to 000

  Reset = Q2.Q1.Q0'  (detected for 1 gate delay)

  Problem: Brief glitch at 110 before reset

Method 2: Preset Next State (Synchronous)
  Use state machine design
  Next state of 5 is 0 instead of 6

  No glitches, cleaner design

Step 3: Verify count sequence
  Count: 0→1→2→3→4→5→0→1→...

  States 6 and 7 are unused (don't care)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Counter Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Counter</th>
            <th className="p-3 border">Modulus</th>
            <th className="p-3 border">Flip-Flops</th>
            <th className="p-3 border">Application</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Binary Counter</td>
            <td className="p-3 border">2^n</td>
            <td className="p-3 border">n</td>
            <td className="p-3 border">General counting</td>
          </tr>
          <tr>
            <td className="p-3 border">Decade (BCD)</td>
            <td className="p-3 border">10</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Decimal displays</td>
          </tr>
          <tr>
            <td className="p-3 border">Ring Counter</td>
            <td className="p-3 border">n</td>
            <td className="p-3 border">n</td>
            <td className="p-3 border">Sequencing</td>
          </tr>
          <tr>
            <td className="p-3 border">Johnson Counter</td>
            <td className="p-3 border">2n</td>
            <td className="p-3 border">n</td>
            <td className="p-3 border">Phase generation</td>
          </tr>
          <tr>
            <td className="p-3 border">MOD-12</td>
            <td className="p-3 border">12</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">12-hour clock</td>
          </tr>
          <tr>
            <td className="p-3 border">MOD-60</td>
            <td className="p-3 border">60</td>
            <td className="p-3 border">6</td>
            <td className="p-3 border">Minutes/seconds</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Event Counting:</strong> Count pulses, products on assembly line
      </li>
      <li>
        <strong>Frequency Division:</strong> Divide clock for slower circuits
      </li>
      <li>
        <strong>Digital Clocks:</strong> Hours, minutes, seconds counting
      </li>
      <li>
        <strong>Timing Generation:</strong> Produce specific time delays
      </li>
      <li>
        <strong>Address Generation:</strong> Memory address sequencing
      </li>
      <li>
        <strong>ADC/DAC:</strong> Analog-to-digital converter control
      </li>
      <li>
        <strong>Program Counter:</strong> Instruction address in CPU
      </li>
      <li>
        <strong>Frequency Measurement:</strong> Count cycles in time period
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Counters cycle through predetermined sequence of states</li>
        <li>Modulus (MOD) is the number of unique states</li>
        <li>n flip-flops can create maximum MOD-2^n counter</li>
        <li>Synchronous counters are faster but more complex</li>
        <li>Asynchronous counters are simpler but have ripple delay</li>
        <li>Up counters increment; down counters decrement</li>
        <li>Non-binary modulus requires additional reset logic</li>
        <li>Each counter output divides clock frequency by 2</li>
        <li>Terminal count signals when counter reaches final state</li>
      </ul>
    </div>
  </div>
);

export default Counters;
