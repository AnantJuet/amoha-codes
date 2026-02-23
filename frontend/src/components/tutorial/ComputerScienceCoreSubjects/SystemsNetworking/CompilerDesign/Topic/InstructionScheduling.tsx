import React from "react";

const InstructionScheduling: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Instruction Scheduling ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Instruction Scheduling
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Instruction scheduling</strong> (also called instruction reordering) is a code optimization
      technique that reorders instructions to minimize execution time while preserving program semantics.
      Modern processors use pipelining and multiple execution units, making the order of instructions
      crucial for performance.
    </p>

    {/* Why Instruction Scheduling */}
    <h2 className="text-3xl font-bold mt-8">Why Instruction Scheduling Matters</h2>
    <p className="leading-relaxed">
      Modern CPUs execute instructions in pipelines and have multiple functional units. Poor instruction
      ordering can cause pipeline stalls and underutilize hardware resources.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Pipeline Stall Example:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Code without scheduling:
  MUL  R1, R2, R3    ; R1 = R2 * R3 (takes 3 cycles)
  ADD  R4, R1, R5    ; R4 = R1 + R5 (needs R1 - STALL!)

Pipeline view:
  Cycle:  1    2    3    4    5    6
  MUL:   [IF] [ID] [EX] [EX] [EX] [WB]
  ADD:        [IF] [ID] [--] [--] [EX]  <- stalls 2 cycles

Total: 6 cycles

Code with scheduling:
  MUL  R1, R2, R3    ; R1 = R2 * R3
  SUB  R6, R7, R8    ; R6 = R7 - R8 (independent)
  ADD  R9, R10, R11  ; R9 = R10 + R11 (independent)
  ADD  R4, R1, R5    ; R4 = R1 + R5 (R1 now ready)

Pipeline view:
  Cycle:  1    2    3    4    5    6
  MUL:   [IF] [ID] [EX] [EX] [EX] [WB]
  SUB:        [IF] [ID] [EX] [WB]
  ADD9:            [IF] [ID] [EX] [WB]
  ADD4:                 [IF] [ID] [EX] [WB]

Total: 6 cycles but more work done!`}
      </pre>
    </div>

    {/* Types of Hazards */}
    <h2 className="text-3xl font-bold mt-8">Pipeline Hazards</h2>
    <p className="leading-relaxed">
      Instruction scheduling must respect data dependencies to maintain correctness.
      Three types of hazards constrain instruction reordering:
    </p>

    <h3 className="text-2xl font-semibold mt-6">1. Read After Write (RAW) - True Dependency</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`ADD R1, R2, R3    ; R1 = R2 + R3 (writes R1)
SUB R4, R1, R5    ; R4 = R1 - R5 (reads R1)

Cannot reorder: SUB needs the value written by ADD
This is a TRUE dependency - must be respected`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Write After Read (WAR) - Anti-Dependency</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`ADD R1, R2, R3    ; reads R2
SUB R2, R4, R5    ; writes R2

Original order: ADD reads R2, then SUB writes R2
If reordered: SUB writes R2 first, ADD gets wrong value

Anti-dependency: Can be eliminated by register renaming`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Write After Write (WAW) - Output Dependency</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`ADD R1, R2, R3    ; writes R1
SUB R1, R4, R5    ; writes R1

Original order: R1 gets result of SUB
If reordered: R1 gets result of ADD (wrong!)

Output dependency: Can be eliminated by register renaming`}
      </pre>
    </div>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Dependency</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Elimination</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">RAW</td>
            <td className="p-3 border">True/Flow</td>
            <td className="p-3 border">Cannot eliminate</td>
          </tr>
          <tr>
            <td className="p-3 border">WAR</td>
            <td className="p-3 border">Anti</td>
            <td className="p-3 border">Register renaming</td>
          </tr>
          <tr>
            <td className="p-3 border">WAW</td>
            <td className="p-3 border">Output</td>
            <td className="p-3 border">Register renaming</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Dependency Graph */}
    <h2 className="text-3xl font-bold mt-8">Dependency Graph (DAG)</h2>
    <p className="leading-relaxed">
      The scheduler builds a directed acyclic graph (DAG) where nodes are instructions and edges
      represent dependencies. Instructions can be scheduled in any topological order of this DAG.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Building the Dependency DAG:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Instructions:
I1: R1 = R2 + R3
I2: R4 = R1 * R5
I3: R6 = R7 - R8
I4: R9 = R4 + R6

Dependencies:
I1 -> I2 (RAW on R1)
I2 -> I4 (RAW on R4)
I3 -> I4 (RAW on R6)

DAG:
    I1        I3
     \\        /
      I2    /
       \\   /
        I4

Valid schedules:
- I1, I2, I3, I4 (original)
- I1, I3, I2, I4 (I3 moved earlier)
- I3, I1, I2, I4 (I3 first)`}
      </pre>
    </div>

    {/* List Scheduling */}
    <h2 className="text-3xl font-bold mt-8">List Scheduling Algorithm</h2>
    <p className="leading-relaxed">
      List scheduling is a greedy algorithm that builds a schedule by selecting instructions
      from a ready list based on priority.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">List Scheduling Algorithm:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Algorithm ListScheduling(DAG, latencies):
  ready = {nodes with no predecessors}
  schedule = []

  while ready is not empty:
    // Select highest priority ready instruction
    inst = select_by_priority(ready)

    // Schedule it at earliest possible time
    schedule.append(inst, earliest_time(inst))

    // Update ready list
    for each successor s of inst:
      if all predecessors of s are scheduled:
        add s to ready

  return schedule

Priority heuristics:
1. Critical path length (longest path to exit)
2. Number of successors (more = higher priority)
3. Latency of instruction
4. Resource requirements`}
      </pre>
    </div>

    {/* Critical Path */}
    <h2 className="text-3xl font-bold mt-8">Critical Path Scheduling</h2>
    <p className="leading-relaxed">
      The critical path is the longest chain of dependent instructions. Prioritizing critical
      path instructions helps minimize total execution time.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example with latencies:
I1: LD R1, [a]      ; latency 3
I2: LD R2, [b]      ; latency 3
I3: ADD R3, R1, R2  ; latency 1, depends on I1, I2
I4: MUL R4, R3, R5  ; latency 3, depends on I3
I5: ADD R6, R4, R7  ; latency 1, depends on I4

Critical path: I1 -> I3 -> I4 -> I5
Path length: 3 + 1 + 3 + 1 = 8 cycles

Priority (critical path length from node):
I1: 8, I2: 5, I3: 5, I4: 4, I5: 1

Schedule (2 memory units, 1 ALU):
Cycle 1: I1 (LD), I2 (LD)
Cycle 2: -
Cycle 3: -
Cycle 4: I3 (ADD) - I1, I2 complete
Cycle 5: I4 (MUL)
Cycle 6: -
Cycle 7: -
Cycle 8: I5 (ADD)

Total: 8 cycles (matches critical path - optimal!)`}
      </pre>
    </div>

    {/* Resource Constraints */}
    <h2 className="text-3xl font-bold mt-8">Resource-Constrained Scheduling</h2>
    <p className="leading-relaxed">
      Real processors have limited functional units. The scheduler must respect these constraints
      when selecting instructions.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Target machine resources:
- 2 ALU units (ADD, SUB, AND, OR)
- 1 Multiplier (MUL)
- 1 Load/Store unit (LD, ST)

Instructions ready at cycle 1:
I1: LD R1, [a]
I2: ADD R2, R3, R4
I3: ADD R5, R6, R7
I4: MUL R8, R9, R10

Schedule with resource constraints:
Cycle 1:
  - LD unit: I1
  - ALU units: I2, I3 (both can go)
  - Multiplier: I4

All 4 instructions scheduled in cycle 1!

If we had 3 ADDs ready:
  - Only 2 can issue per cycle
  - Third ADD waits for cycle 2`}
      </pre>
    </div>

    {/* Local vs Global Scheduling */}
    <h2 className="text-3xl font-bold mt-8">Local vs Global Scheduling</h2>

    <h3 className="text-2xl font-semibold mt-6">Local Scheduling</h3>
    <p className="leading-relaxed">
      Reorders instructions within a single basic block. Simpler because there is no control flow.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Global Scheduling</h3>
    <p className="leading-relaxed">
      Moves instructions across basic block boundaries. More powerful but more complex due to
      control flow considerations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Trace Scheduling (Global):</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Original code:
  if (cond) {
    a = b + c    // Block B1
    x = a * 2
  } else {
    a = b - c    // Block B2
  }
  y = a + 1      // Block B3

Trace: Most likely path B1 -> B3
Schedule along trace, may need compensation code

After trace scheduling:
  // Speculatively execute from B3
  temp = b + c       // Start of B1 work
  if (!cond) goto B2
  a = temp           // Finish B1
  x = a * 2
  y = a + 1          // B3 hoisted
  goto end
B2:
  a = b - c
  y = a + 1          // Compensation code
end:`}
      </pre>
    </div>

    {/* Software Pipelining */}
    <h2 className="text-3xl font-bold mt-8">Software Pipelining</h2>
    <p className="leading-relaxed">
      For loops, software pipelining overlaps iterations to keep the pipeline full.
      This creates a kernel that processes multiple iterations simultaneously.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Original loop:
for (i = 0; i < n; i++) {
  LD   R1, A[i]      ; cycle 1
  MUL  R2, R1, R3    ; cycle 4 (after LD completes)
  ST   B[i], R2      ; cycle 7 (after MUL completes)
}
// 7 cycles per iteration

Software pipelined:
// Prologue: start iterations 0, 1, 2
LD R1, A[0]
LD R4, A[1]; MUL R2, R1, R3
LD R7, A[2]; MUL R5, R4, R3; ST B[0], R2

// Kernel: steady state (3 iterations in flight)
for (i = 3; i < n; i++) {
  LD R1, A[i]; MUL R2, R(i-1), R3; ST B[i-2], R(i-2)
}
// 1 cycle per iteration in kernel!

// Epilogue: drain remaining iterations`}
      </pre>
    </div>

    {/* Scheduling and Register Allocation */}
    <h2 className="text-3xl font-bold mt-8">Scheduling vs Register Allocation</h2>
    <p className="leading-relaxed">
      Instruction scheduling and register allocation are interdependent and can conflict:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Conflict example:

Good for scheduling (spread loads apart):
  LD R1, [a]
  LD R2, [b]
  LD R3, [c]
  LD R4, [d]
  ADD R5, R1, R2
  ADD R6, R3, R4
  // But needs 6 registers!

Good for register pressure (use registers quickly):
  LD R1, [a]
  LD R2, [b]
  ADD R1, R1, R2    // R2 now free
  LD R2, [c]
  LD R3, [d]
  ADD R2, R2, R3
  // Only needs 3 registers, but may stall

Approaches:
1. Schedule first, then allocate (may cause spills)
2. Allocate first, then schedule (may limit reordering)
3. Integrated scheduling + allocation (complex but best)`}
      </pre>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      Which type of dependency cannot be eliminated by register renaming?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Write After Read (WAR)</li>
      <li>(B) Write After Write (WAW)</li>
      <li>(C) Read After Write (RAW)</li>
      <li>(D) Both WAR and WAW</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) RAW (true dependency) cannot be eliminated because the second instruction genuinely needs the value produced by the first.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      What is the critical path in instruction scheduling?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) The path with the most instructions</li>
      <li>(B) The longest chain of dependent instructions</li>
      <li>(C) The path through the most basic blocks</li>
      <li>(D) The path with the most memory operations</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) The critical path is the longest chain of dependent instructions, determining minimum execution time.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      Why might instruction scheduling increase register pressure?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Scheduled instructions use more memory</li>
      <li>(B) Spreading instructions apart extends live ranges of values</li>
      <li>(C) Scheduling creates new variables</li>
      <li>(D) Scheduled code runs slower</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Moving instructions apart means values must live longer (in registers), increasing register pressure.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Instruction scheduling reorders instructions to minimize pipeline stalls</li>
      <li>RAW dependencies (true dependencies) must be respected; WAR and WAW can be renamed away</li>
      <li>List scheduling uses priority heuristics to select from ready instructions</li>
      <li>Critical path scheduling prioritizes the longest dependency chain</li>
      <li>Software pipelining overlaps loop iterations for better throughput</li>
      <li>Scheduling and register allocation can conflict; integrated approaches work best</li>
    </ul>

  </div>
);

export default InstructionScheduling;
