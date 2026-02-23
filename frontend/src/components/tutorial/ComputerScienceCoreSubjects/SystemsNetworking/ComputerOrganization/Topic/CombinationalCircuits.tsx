import React from 'react';

const CombinationalCircuits: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Combinational Circuits
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Combinational circuits are digital circuits where the output depends solely on the
      current input values. Unlike sequential circuits, they have no memory - the same
      inputs will always produce the same outputs. These circuits form the foundation
      of arithmetic units, data selectors, and encoders in computer systems.
    </p>

    <h2 className="text-3xl font-bold mt-8">Combinational vs Sequential Circuits</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Combinational</th>
            <th className="p-3 border">Sequential</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Memory</td>
            <td className="p-3 border">No memory elements</td>
            <td className="p-3 border">Contains memory (flip-flops)</td>
          </tr>
          <tr>
            <td className="p-3 border">Output Depends On</td>
            <td className="p-3 border">Current inputs only</td>
            <td className="p-3 border">Current inputs + past state</td>
          </tr>
          <tr>
            <td className="p-3 border">Feedback</td>
            <td className="p-3 border">No feedback paths</td>
            <td className="p-3 border">Has feedback paths</td>
          </tr>
          <tr>
            <td className="p-3 border">Clock</td>
            <td className="p-3 border">Not required</td>
            <td className="p-3 border">Usually required</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">Adders, Multiplexers, Decoders</td>
            <td className="p-3 border">Counters, Registers, FSMs</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Block Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Combinational Circuit Block Diagram:

              +-------------------------+
              |                         |
  Inputs      |    Combinational        |      Outputs
  -------->   |       Circuit           |   -------->
  (n lines)   |    (Logic Gates)        |   (m lines)
              |                         |
              +-------------------------+

  n input variables -> 2^n possible input combinations
  m output variables

Mathematical Representation:
  Y1 = f1(X1, X2, ..., Xn)
  Y2 = f2(X1, X2, ..., Xn)
  ...
  Ym = fm(X1, X2, ..., Xn)

Each output is a Boolean function of the inputs.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Design Procedure</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <pre className="text-sm text-gray-900">
{`Steps to Design a Combinational Circuit:

Step 1: Problem Specification
  - Define the problem clearly
  - Identify inputs and outputs
  - Assign variable names

Step 2: Truth Table
  - List all possible input combinations
  - Determine output for each combination
  - Identify don't care conditions if any

Step 3: Boolean Expression
  - Write output expressions from truth table
  - Use Sum of Products (SOP) or Product of Sums (POS)

Step 4: Simplification
  - Apply Boolean algebra laws
  - Use Karnaugh maps
  - Use Quine-McCluskey method (for many variables)

Step 5: Circuit Implementation
  - Draw logic gate diagram
  - Consider available gate types
  - Minimize gate count and levels

Step 6: Verification
  - Verify against truth table
  - Check all input combinations
  - Test for timing issues`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: 2-Bit Comparator Design</h2>

    <h3 className="text-2xl font-semibold mt-6">Step 1: Problem Specification</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Design a circuit to compare two 2-bit numbers.

Inputs: A1A0 (first number), B1B0 (second number)
Outputs:
  G = 1 when A > B
  E = 1 when A = B
  L = 1 when A < B`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Step 2: Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">A1</th>
            <th className="p-2 border">A0</th>
            <th className="p-2 border">B1</th>
            <th className="p-2 border">B0</th>
            <th className="p-2 border">A</th>
            <th className="p-2 border">B</th>
            <th className="p-2 border">G</th>
            <th className="p-2 border">E</th>
            <th className="p-2 border">L</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td></tr>
          <tr><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">1</td></tr>
          <tr><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">2</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">1</td></tr>
          <tr><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">3</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">1</td></tr>
          <tr><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td></tr>
          <tr><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td></tr>
          <tr><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">2</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">1</td></tr>
          <tr><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">3</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">1</td></tr>
          <tr><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">2</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td></tr>
          <tr><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">2</td><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td></tr>
          <tr><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">2</td><td className="p-2 border">2</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td></tr>
          <tr><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">2</td><td className="p-2 border">3</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">1</td></tr>
          <tr><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">3</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td></tr>
          <tr><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">3</td><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td></tr>
          <tr><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">3</td><td className="p-2 border">2</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td></tr>
          <tr><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">3</td><td className="p-2 border">3</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Step 3-4: K-Map Simplification</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`K-Map for E (Equal) output:
E = 1 when A1A0 = B1B0

                B1B0
             00  01  11  10
           +---+---+---+---+
       00  | 1 |   |   |   |
           +---+---+---+---+
       01  |   | 1 |   |   |
  A1A0     +---+---+---+---+
       11  |   |   | 1 |   |
           +---+---+---+---+
       10  |   |   |   | 1 |
           +---+---+---+---+

E = A1'A0'B1'B0' + A1'A0B1'B0 + A1A0B1B0 + A1A0'B1B0'
  = (A1 XNOR B1)(A0 XNOR B0)

Simplified using XNOR gates:
  E = (A1 XNOR B1) AND (A0 XNOR B0)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Combinational Circuits</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Circuits</th>
            <th className="p-3 border">Function</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Arithmetic</td>
            <td className="p-3 border">Half/Full Adder, Subtractor, ALU</td>
            <td className="p-3 border">Perform mathematical operations</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Routing</td>
            <td className="p-3 border">Multiplexer, Demultiplexer</td>
            <td className="p-3 border">Route data between sources</td>
          </tr>
          <tr>
            <td className="p-3 border">Code Converters</td>
            <td className="p-3 border">Encoder, Decoder, BCD converters</td>
            <td className="p-3 border">Convert between representations</td>
          </tr>
          <tr>
            <td className="p-3 border">Comparison</td>
            <td className="p-3 border">Comparator, Equality checker</td>
            <td className="p-3 border">Compare binary values</td>
          </tr>
          <tr>
            <td className="p-3 border">Parity</td>
            <td className="p-3 border">Parity generator/checker</td>
            <td className="p-3 border">Error detection</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Timing Considerations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Propagation Delay in Combinational Circuits:

             Input Change
                  |
                  v
        +------------------+
        |                  |
        |     Circuit      |-----> Output Change
        |                  |         (after tpd)
        +------------------+

Key Timing Parameters:

1. Propagation Delay (tpd):
   - Time from input change to stable output
   - Depends on number of gate levels
   - tpd = n x tgate (for n levels)

2. Critical Path:
   - Longest delay path through circuit
   - Determines maximum operating speed
   - Target for optimization

3. Hazards:
   - Unwanted output glitches during transitions
   - Static hazard: brief incorrect output
   - Dynamic hazard: multiple transitions

Example:
  If each gate has 10ns delay:
  2-level circuit: tpd = 20ns
  4-level circuit: tpd = 40ns

  Max frequency = 1 / tpd
  2-level: 50 MHz
  4-level: 25 MHz`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Circuit Implementation Methods</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Implementation Options:

1. Discrete Logic Gates
   +---+  +---+
   | & |--| | |-- Output
   +---+  +---+
   Pros: Simple, educational
   Cons: Large, expensive for complex designs

2. Programmable Logic Devices (PLDs)
   - PAL (Programmable Array Logic)
   - PLA (Programmable Logic Array)
   - GAL (Generic Array Logic)

   Pros: Flexible, reprogrammable
   Cons: Limited capacity

3. FPGAs (Field Programmable Gate Arrays)
   Pros: High capacity, fast development
   Cons: Higher power, cost per unit

4. ASICs (Application Specific ICs)
   Pros: Optimized, low power, fast
   Cons: High development cost, no changes

5. ROM/PROM (Read Only Memory)
   - Truth table stored directly
   - Address = inputs, Data = outputs

   Pros: Simple for complex functions
   Cons: Exponential size growth`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Design Optimization Goals</h2>
    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mt-4">
      <pre className="text-sm text-gray-900">
{`Optimization Criteria:

1. Minimize Gate Count
   - Fewer gates = lower cost
   - Use Boolean simplification
   - Share common sub-expressions

2. Minimize Gate Levels
   - Fewer levels = faster circuit
   - Trade-off with gate count
   - Two-level forms (SOP, POS) are fast

3. Minimize Fan-in
   - Fan-in = number of gate inputs
   - Limited by gate technology
   - Decompose large gates

4. Minimize Fan-out
   - Fan-out = number of driven gates
   - Affects signal strength
   - Use buffers if needed

5. Use Available Gates
   - Design with available IC types
   - NAND/NOR-only implementations
   - Standard cell libraries

Trade-off Example:
  Expression: F = AB + AC + BC

  Minimal SOP: 3 AND gates + 1 OR gate = 4 gates, 2 levels
  Factored: A(B+C) + BC = saves gates but adds level`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Combinational Circuits Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Circuit</th>
            <th className="p-3 border">Inputs</th>
            <th className="p-3 border">Outputs</th>
            <th className="p-3 border">Function</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Half Adder</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">2 (Sum, Carry)</td>
            <td className="p-3 border">Add two bits</td>
          </tr>
          <tr>
            <td className="p-3 border">Full Adder</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">2 (Sum, Carry)</td>
            <td className="p-3 border">Add three bits</td>
          </tr>
          <tr>
            <td className="p-3 border">2:1 MUX</td>
            <td className="p-3 border">3 (2 data + 1 select)</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Select one of two inputs</td>
          </tr>
          <tr>
            <td className="p-3 border">1:2 DEMUX</td>
            <td className="p-3 border">2 (1 data + 1 select)</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Route to one of two outputs</td>
          </tr>
          <tr>
            <td className="p-3 border">2:4 Decoder</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Activate one of four outputs</td>
          </tr>
          <tr>
            <td className="p-3 border">4:2 Encoder</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Encode active input</td>
          </tr>
          <tr>
            <td className="p-3 border">Comparator</td>
            <td className="p-3 border">2n</td>
            <td className="p-3 border">3 (G, E, L)</td>
            <td className="p-3 border">Compare n-bit numbers</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Combinational circuits have no memory - output depends only on current inputs</li>
        <li>Design process: Specification, Truth Table, Boolean Expression, Simplification, Implementation</li>
        <li>Use K-Maps or Boolean algebra to minimize expressions</li>
        <li>Critical path determines maximum operating speed</li>
        <li>Trade-offs exist between gate count and gate levels</li>
        <li>Common circuits: Adders, MUX, DEMUX, Encoders, Decoders, Comparators</li>
        <li>Implementation options: Discrete gates, PLDs, FPGAs, ASICs</li>
        <li>Hazards can cause unwanted glitches during transitions</li>
        <li>Always verify design against truth table</li>
        <li>Consider available gate types during implementation</li>
      </ul>
    </div>
  </div>
);

export default CombinationalCircuits;
