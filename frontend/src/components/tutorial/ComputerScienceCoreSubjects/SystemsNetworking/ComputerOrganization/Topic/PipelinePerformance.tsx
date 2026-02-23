import React from 'react';

const PipelinePerformance: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Pipeline Performance
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Pipeline performance analysis measures how effectively a pipelined processor
      executes instructions. Key metrics include throughput, latency, speedup, and
      efficiency. Understanding these metrics helps in designing better pipelines
      and identifying performance bottlenecks in existing systems.
    </p>

    <h2 className="text-3xl font-bold mt-8">Performance Metrics</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Key Pipeline Performance Metrics:

1. Throughput: Instructions completed per unit time
   Ideal: 1 instruction per cycle

2. Latency: Time for one instruction to complete
   = Number of stages x Cycle time

3. CPI (Cycles Per Instruction): Average cycles per instruction
   Ideal: 1.0

4. Speedup: Performance gain over non-pipelined
   = Non-pipelined time / Pipelined time

5. Efficiency: Actual vs ideal performance
   = Ideal CPI / Actual CPI = 1 / CPI

6. IPC (Instructions Per Cycle): Inverse of CPI
   = 1 / CPI (higher is better)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Speedup Calculation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Pipeline Speedup Formula:

For n instructions and k pipeline stages:

Non-pipelined execution time:
T_seq = n x k x t_cycle

Pipelined execution time:
T_pipe = (k + n - 1) x t_cycle
         ^           ^
    Fill time    One instruction per cycle after

Speedup:
S = T_seq / T_pipe
S = (n x k) / (k + n - 1)

As n approaches infinity:
lim(n->inf) S = k

Maximum speedup equals number of pipeline stages!

Example Calculation:
k = 5 stages, n = 1000 instructions

T_seq = 1000 x 5 = 5000 cycles
T_pipe = 5 + 1000 - 1 = 1004 cycles
Speedup = 5000 / 1004 = 4.98x

Nearly 5x speedup (close to ideal for large n)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CPI Analysis</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`CPI Breakdown:

CPI = CPI_ideal + CPI_stalls

CPI = 1 + (Structural_stalls + Data_stalls + Control_stalls)

Detailed Formula:
CPI = 1 + (f_struct x p_struct) +
          (f_data x p_data) +
          (f_control x p_control x miss_rate)

Where:
f = frequency of instruction type
p = penalty in cycles
miss_rate = branch misprediction rate

Example:
- Structural hazards: 5% of cycles, 1 cycle penalty
- Load-use hazards: 15% of loads, loads are 25% of instructions
- Branch mispredictions: 10% of branches, branches are 20%, 2 cycle penalty

CPI = 1 + (0.05 x 1) + (0.25 x 0.15 x 1) + (0.20 x 0.10 x 2)
CPI = 1 + 0.05 + 0.0375 + 0.04
CPI = 1.1275

Efficiency = 1 / 1.1275 = 88.7%`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pipeline Efficiency</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Pipeline Efficiency:

Efficiency = (Ideal throughput) / (Actual throughput)
           = (1 instr/cycle) / (1/CPI instr/cycle)
           = 1 / CPI

Alternatively:
Efficiency = (Useful cycles) / (Total cycles)

Pipeline Utilization (per stage):
U_stage = (Active cycles) / (Total cycles)

Example - Pipeline with stalls:
Cycle:    1   2   3   4   5   6   7   8   9   10
I1:      [F] [D] [E] [M] [W]
I2:          [F] [D] [--][E] [M] [W]
I3:              [F] [--][D] [E] [M] [W]
I4:                  [--][F] [D] [E] [M] [W]

Total cycles: 10
Instructions completed: 4
CPI = 10/4 = 2.5
Efficiency = 1/2.5 = 40%

Stage utilization:
IF:  Active 4/10 = 40%
ID:  Active 4/10 = 40%
EX:  Active 4/10 = 40%
MEM: Active 4/10 = 40%
WB:  Active 4/10 = 40%`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Clock Cycle Time Considerations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Clock Cycle Time Determination:

Cycle time = max(stage delays) + register overhead

Stage Delays (example):
+--------+--------+--------+--------+--------+
|   IF   |   ID   |   EX   |  MEM   |   WB   |
+--------+--------+--------+--------+--------+
| 200ps  | 150ps  | 250ps  | 300ps  | 100ps  |
+--------+--------+--------+--------+--------+
                             ^
                    Slowest stage!

Clock period >= 300ps (for this example)
Actual: 300ps + ~20ps (register setup) = 320ps

Unbalanced vs Balanced Pipeline:

Unbalanced:
Stages: [100ps][300ps][150ps][200ps][100ps]
Clock = 300ps (limited by slowest)
Wasted time in fast stages!

Balanced:
Stages: [170ps][170ps][170ps][170ps][170ps]
Clock = 170ps
Better utilization!

Effect of Balancing:
Unbalanced: Clock = 300ps, CPI = 1.0 -> T_instr = 300ps
Balanced:   Clock = 170ps, CPI = 1.0 -> T_instr = 170ps
Speedup from balancing = 300/170 = 1.76x`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pipeline Depth Trade-offs</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Deep Pipeline Analysis:

Deeper pipeline = more stages = shorter clock period

Example:
5-stage pipeline: Cycle = 200ps
10-stage pipeline: Cycle = 100ps (ideally)
20-stage pipeline: Cycle = 50ps (ideally)

Reality: Diminishing returns due to:
1. Register/latch overhead (fixed ~20ps per stage)
2. Increased hazard penalties
3. Branch misprediction penalty increases

Trade-off Analysis:

Depth    Cycle      Overhead    Effective    Branch
(stages) (logic)    (latch)     Cycle        Penalty
------   --------   ---------   ----------   --------
5        200ps      20ps        220ps        2 cycles
10       100ps      20ps        120ps        5 cycles
20       50ps       20ps        70ps         10 cycles

Performance with Branches:
CPI = 1 + (branch_freq x mispredict_rate x penalty)

5-stage:  CPI = 1 + (0.20 x 0.10 x 2) = 1.04
10-stage: CPI = 1 + (0.20 x 0.10 x 5) = 1.10
20-stage: CPI = 1 + (0.20 x 0.10 x 10) = 1.20

Execution time per instruction:
5-stage:  220ps x 1.04 = 228.8ps
10-stage: 120ps x 1.10 = 132ps (faster!)
20-stage: 70ps x 1.20 = 84ps (fastest, if predictor good)

Optimal depth depends on:
- Technology (latch overhead)
- Branch predictor accuracy
- Application characteristics`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Performance Equations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Fundamental Performance Equation:

CPU Time = IC x CPI x Cycle_Time

Where:
IC = Instruction Count (from program/compiler)
CPI = Cycles Per Instruction (from pipeline)
Cycle_Time = Clock period (from hardware)

For Pipelined Processor:
CPU Time = IC x CPI_pipeline x Cycle_pipeline

CPI_pipeline = 1 + Stall_cycles_per_instruction

Comparing Two Pipelines:

Pipeline A: 5 stages, 200ps cycle, CPI = 1.1
Pipeline B: 10 stages, 110ps cycle, CPI = 1.2

Time per instruction:
A: 200ps x 1.1 = 220ps
B: 110ps x 1.2 = 132ps

Pipeline B is 220/132 = 1.67x faster!

MIPS (Million Instructions Per Second):
MIPS = Clock_Rate / (CPI x 10^6)
     = IC / (Execution_Time x 10^6)

Example:
Clock = 2 GHz, CPI = 1.25
MIPS = 2000 / 1.25 = 1600 MIPS`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Amdahl's Law for Pipelines</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Amdahl's Law Application:

Speedup_overall = 1 / ((1-f) + f/S)

Where:
f = fraction of execution that can be improved
S = speedup of the improved portion

Pipeline Example:
- Pipelining improves instruction execution (90% of time)
- Memory stalls unaffected (10% of time)
- Pipeline provides 5x speedup for execution

Speedup = 1 / ((1-0.9) + 0.9/5)
        = 1 / (0.1 + 0.18)
        = 1 / 0.28
        = 3.57x

Even with 5x pipeline speedup, memory limits overall gain to 3.57x

Implication:
Focus optimization on largest bottleneck!

Memory Wall Problem:
- Processor speed increases ~50%/year (historical)
- Memory speed increases ~7%/year
- Gap widens over time
- Memory becomes bigger bottleneck

Solutions:
- Better caches
- Memory prefetching
- Out-of-order execution (hide latency)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Real-World Pipeline Performance</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Processor</th>
            <th className="p-3 border">Pipeline Depth</th>
            <th className="p-3 border">IPC (typical)</th>
            <th className="p-3 border">Notes</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">MIPS R2000</td>
            <td className="p-3 border">5</td>
            <td className="p-3 border">~0.8</td>
            <td className="p-3 border">Classic RISC</td>
          </tr>
          <tr>
            <td className="p-3 border">Intel Pentium</td>
            <td className="p-3 border">5</td>
            <td className="p-3 border">~1.0</td>
            <td className="p-3 border">Superscalar</td>
          </tr>
          <tr>
            <td className="p-3 border">Pentium 4</td>
            <td className="p-3 border">20-31</td>
            <td className="p-3 border">~0.8</td>
            <td className="p-3 border">Deep pipeline</td>
          </tr>
          <tr>
            <td className="p-3 border">ARM Cortex-A53</td>
            <td className="p-3 border">8</td>
            <td className="p-3 border">~0.9</td>
            <td className="p-3 border">Mobile efficient</td>
          </tr>
          <tr>
            <td className="p-3 border">Apple M1</td>
            <td className="p-3 border">~16</td>
            <td className="p-3 border">~3-4</td>
            <td className="p-3 border">Wide superscalar</td>
          </tr>
          <tr>
            <td className="p-3 border">Intel Core i9</td>
            <td className="p-3 border">~14-19</td>
            <td className="p-3 border">~2-4</td>
            <td className="p-3 border">Modern x86</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Performance Optimization Strategies</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Reduce CPI:</strong> Better hazard handling, forwarding, prediction</li>
      <li><strong>Reduce Cycle Time:</strong> Balance stages, better circuits</li>
      <li><strong>Reduce IC:</strong> Better compilers, CISC instructions</li>
      <li><strong>Increase ILP:</strong> Superscalar, out-of-order, VLIW</li>
      <li><strong>Hide Latency:</strong> Prefetching, multithreading</li>
      <li><strong>Improve Memory:</strong> Better caches, memory systems</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Pipeline speedup approaches number of stages as instruction count grows</li>
        <li>CPI = 1 + stall cycles; ideal CPI is 1.0</li>
        <li>Clock period is determined by slowest pipeline stage</li>
        <li>Balancing stage delays improves overall performance</li>
        <li>Deeper pipelines offer higher clock speeds but increased hazard penalties</li>
        <li>Branch predictor accuracy is critical for deep pipelines</li>
        <li>Amdahl's Law limits speedup when some portions cannot be improved</li>
        <li>Modern CPUs achieve IPC greater than 1 through superscalar design</li>
        <li>Performance = IC x CPI x Cycle_Time (optimize all three!)</li>
        <li>Real-world performance depends on workload and system design</li>
      </ul>
    </div>
  </div>
);

export default PipelinePerformance;
