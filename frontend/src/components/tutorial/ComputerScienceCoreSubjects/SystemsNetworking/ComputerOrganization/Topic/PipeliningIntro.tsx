import React from 'react';

const PipeliningIntro: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Pipelining
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Pipelining is a technique used in computer architecture to increase instruction throughput
      by overlapping the execution of multiple instructions. Instead of waiting for one instruction
      to complete before starting the next, pipelining divides instruction execution into stages
      and processes different instructions simultaneously in different stages.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Assembly Line Analogy</h2>
    <p className="leading-relaxed">
      Pipelining works like an assembly line in a factory. Just as a car assembly line has
      workers at different stations performing specific tasks on different cars simultaneously,
      a pipelined processor has stages working on different instructions at the same time.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Assembly Line Analogy:

Car Factory Assembly Line:
Station 1: Install Engine
Station 2: Add Body
Station 3: Paint
Station 4: Install Interior
Station 5: Final Inspection

Time ->
         T1    T2    T3    T4    T5    T6    T7    T8
Sta 1:  Car1  Car2  Car3  Car4  Car5  Car6  Car7  Car8
Sta 2:   -    Car1  Car2  Car3  Car4  Car5  Car6  Car7
Sta 3:   -     -    Car1  Car2  Car3  Car4  Car5  Car6
Sta 4:   -     -     -    Car1  Car2  Car3  Car4  Car5
Sta 5:   -     -     -     -    Car1  Car2  Car3  Car4
                                 |
                                 First car complete!

After initial fill: 1 car completed every time unit!
(Without pipeline: 5 time units per car)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Non-Pipelined vs Pipelined Execution</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Non-Pipelined (Sequential) Execution:

Each instruction completes before next begins

Time -->  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
Instr 1: [F][D][E][M][W]
Instr 2:                [F][D][E][M][W]
Instr 3:                               [F][D][E][M][W]

3 instructions take 15 cycles
Each instruction: 5 cycles
Throughput: 1 instruction per 5 cycles


Pipelined Execution:

Instructions overlap in different stages

Time -->  1  2  3  4  5  6  7  8  9
Instr 1: [F][D][E][M][W]
Instr 2:    [F][D][E][M][W]
Instr 3:       [F][D][E][M][W]
Instr 4:          [F][D][E][M][W]
Instr 5:             [F][D][E][M][W]

5 instructions complete in 9 cycles!
After pipeline fills: 1 instruction per cycle
Throughput: 1 instruction per cycle (5x improvement)

Legend:
F = Fetch, D = Decode, E = Execute, M = Memory, W = Write Back`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Basic Pipeline Concept</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`5-Stage Pipeline Structure:

+-------+    +-------+    +-------+    +-------+    +-------+
|       |    |       |    |       |    |       |    |       |
| Fetch |--->|Decode |--->|Execute|--->|Memory |--->| Write |
|       |    |       |    |       |    |       |    | Back  |
+-------+    +-------+    +-------+    +-------+    +-------+
    |            |            |            |            |
    v            v            v            v            v
 [IF/ID]     [ID/EX]      [EX/MEM]    [MEM/WB]    Complete
  Latch       Latch        Latch       Latch

Pipeline Registers:
- Store intermediate results between stages
- Allow independent operation of each stage
- Act as boundaries between pipeline stages

Data Flow:
                    Clock Cycle
Stage      1    2    3    4    5    6
-----      -    -    -    -    -    -
IF        I1   I2   I3   I4   I5   I6
ID             I1   I2   I3   I4   I5
EX                  I1   I2   I3   I4
MEM                      I1   I2   I3
WB                            I1   I2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pipeline Terminology</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Term</th>
            <th className="p-3 border">Definition</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Pipeline Stage</td>
            <td className="p-3 border">A functional unit that performs part of instruction execution</td>
          </tr>
          <tr>
            <td className="p-3 border">Pipeline Depth</td>
            <td className="p-3 border">Number of stages in the pipeline</td>
          </tr>
          <tr>
            <td className="p-3 border">Pipeline Latency</td>
            <td className="p-3 border">Time for one instruction to pass through all stages</td>
          </tr>
          <tr>
            <td className="p-3 border">Throughput</td>
            <td className="p-3 border">Number of instructions completed per time unit</td>
          </tr>
          <tr>
            <td className="p-3 border">Pipeline Register</td>
            <td className="p-3 border">Storage element between stages holding intermediate results</td>
          </tr>
          <tr>
            <td className="p-3 border">Pipeline Stall</td>
            <td className="p-3 border">Delay caused by dependencies or resource conflicts</td>
          </tr>
          <tr>
            <td className="p-3 border">Pipeline Bubble</td>
            <td className="p-3 border">Empty slot in pipeline due to stall (NOP inserted)</td>
          </tr>
          <tr>
            <td className="p-3 border">CPI</td>
            <td className="p-3 border">Cycles Per Instruction (ideal: 1 for pipelined CPU)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Pipelining Works</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Pipelining Improves Throughput, Not Latency:

Single Instruction Latency:
Non-pipelined: 5 stages x 1ns = 5ns total
Pipelined:     5 stages x 1ns = 5ns total (same!)

But Throughput Differs:

Non-pipelined:
- 1 instruction every 5ns
- Throughput = 200 MIPS (Million Instructions Per Second)

Pipelined (after filling):
- 1 instruction every 1ns
- Throughput = 1000 MIPS (5x improvement!)

Key Insight:
+--------------------------------------------------+
| Pipelining does NOT make individual instructions |
| faster. It increases the RATE at which           |
| instructions complete.                           |
+--------------------------------------------------+

Speedup Formula:
Ideal Speedup = Number of Pipeline Stages

In practice: Speedup < Number of Stages
(Due to hazards, stalls, and non-uniform stage times)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pipeline Timing</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Pipeline Clock Cycle Time:

The clock period is determined by the SLOWEST stage

Stage Times:
+-------+--------+--------+--------+--------+
| Fetch | Decode |Execute | Memory | Write  |
+-------+--------+--------+--------+--------+
|  1ns  |  1ns   |  2ns   |  1.5ns |  0.5ns |
+-------+--------+--------+--------+--------+
                    ^
              Slowest stage!

Clock Period = max(all stage times) = 2ns

Problem: Fast stages waste time waiting

Solutions:
1. Balance stage times (redesign stages)
2. Accept the inefficiency
3. Add more stages (superpipelining)

Balanced Pipeline:
+-------+--------+--------+--------+--------+
| Fetch | Decode |Execute | Memory | Write  |
+-------+--------+--------+--------+--------+
|  1ns  |  1ns   |  1ns   |  1ns   |  1ns   |
+-------+--------+--------+--------+--------+

Clock Period = 1ns (all stages equal)
Better utilization of all stages!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pipeline Performance Metrics</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Performance Calculations:

Given:
- n = number of instructions
- k = number of pipeline stages
- t = clock cycle time

Non-Pipelined Execution Time:
T_nonpipe = n * k * t

Pipelined Execution Time:
T_pipe = (k + n - 1) * t
       = k*t + (n-1)*t
         ^        ^
    Fill time   n-1 instructions @ 1 per cycle

Speedup:
S = T_nonpipe / T_pipe
S = (n * k * t) / ((k + n - 1) * t)
S = (n * k) / (k + n - 1)

As n -> infinity:
S -> k (approaches number of stages)

Example:
k = 5 stages, n = 100 instructions, t = 1ns

T_nonpipe = 100 * 5 * 1ns = 500ns
T_pipe = (5 + 100 - 1) * 1ns = 104ns

Speedup = 500 / 104 = 4.8x (close to 5 stages)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pipeline Challenges</h2>
    <p className="leading-relaxed">
      While pipelining greatly improves throughput, several challenges prevent achieving
      ideal performance:
    </p>

    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Structural Hazards:</strong> Resource conflicts when multiple instructions need the same hardware</li>
      <li><strong>Data Hazards:</strong> Dependencies between instructions (one needs result of another)</li>
      <li><strong>Control Hazards:</strong> Branch instructions change program flow unpredictably</li>
      <li><strong>Memory Delays:</strong> Cache misses cause long stalls</li>
      <li><strong>Unbalanced Stages:</strong> Some stages take longer than others</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Impact of Hazards:

Ideal Pipeline (no hazards):
Time:  1  2  3  4  5  6  7  8  9
I1:   [F][D][E][M][W]
I2:      [F][D][E][M][W]
I3:         [F][D][E][M][W]
CPI = 1.0

With Hazards (stalls):
Time:  1  2  3  4  5  6  7  8  9  10 11
I1:   [F][D][E][M][W]
I2:      [F][D][--][E][M][W]       <- Stall (data hazard)
I3:         [F][--][D][E][M][W]
CPI = 11/3 = 3.67 (much worse!)

[--] = Pipeline stall/bubble`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Pipelines</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Instruction Pipeline</td>
            <td className="p-3 border">Overlaps instruction execution stages</td>
            <td className="p-3 border">MIPS, ARM processors</td>
          </tr>
          <tr>
            <td className="p-3 border">Arithmetic Pipeline</td>
            <td className="p-3 border">Overlaps stages of arithmetic operations</td>
            <td className="p-3 border">FP multiply, add units</td>
          </tr>
          <tr>
            <td className="p-3 border">Superpipeline</td>
            <td className="p-3 border">Many stages (deep pipeline)</td>
            <td className="p-3 border">Pentium 4 (20+ stages)</td>
          </tr>
          <tr>
            <td className="p-3 border">Superscalar</td>
            <td className="p-3 border">Multiple parallel pipelines</td>
            <td className="p-3 border">Modern x86, ARM</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Pipelining overlaps execution of multiple instructions to increase throughput</li>
        <li>Works like an assembly line: different stages process different instructions</li>
        <li>Pipeline registers hold intermediate results between stages</li>
        <li>Improves throughput (instructions per second) not individual instruction latency</li>
        <li>Ideal speedup equals number of pipeline stages</li>
        <li>Clock cycle time determined by slowest stage</li>
        <li>Hazards (structural, data, control) reduce pipeline efficiency</li>
        <li>CPI approaches 1.0 for well-designed pipelines</li>
        <li>Modern processors use deep pipelines with hazard resolution techniques</li>
      </ul>
    </div>
  </div>
);

export default PipeliningIntro;
