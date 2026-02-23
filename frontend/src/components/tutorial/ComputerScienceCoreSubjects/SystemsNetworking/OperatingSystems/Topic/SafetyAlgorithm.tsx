import React from 'react';

const SafetyAlgorithm: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Safety Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Safety Algorithm is the core component of the Banker's Algorithm. It determines
      whether a system is in a safe state by attempting to find a sequence of process
      executions that allows all processes to complete without deadlock.
    </p>

    {/* Algorithm Overview */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Purpose:
─────────────────────────────────────────────────────────────
    Determine if there exists a SAFE SEQUENCE <P1, P2, ..., Pn>
    such that each process can obtain its maximum needed
    resources and complete execution.

Key Idea:
─────────────────────────────────────────────────────────────
    Simulate execution: Find a process that can finish with
    current resources. When it finishes, it releases resources,
    potentially allowing other processes to finish.

    If ALL processes can finish → SAFE
    If ANY process cannot finish → UNSAFE
`}
      </pre>
    </div>

    {/* Algorithm Steps */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Steps</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Safety Algorithm (Formal Definition):
─────────────────────────────────────────────────────────────

Input:
    Available[m]     - Available resources of each type
    Allocation[n][m] - Resources allocated to each process
    Need[n][m]       - Resources each process still needs

Output:
    Boolean (Safe/Unsafe) and Safe Sequence if safe

─────────────────────────────────────────────────────────────

STEP 1: Initialize work vectors
─────────────────────────────────────────────────────────────
    Work[m] ← Available[m]        // Copy available resources
    Finish[n] ← {false, ..., false}  // No process finished yet
    SafeSequence ← empty list     // To store the sequence

STEP 2: Find a candidate process
─────────────────────────────────────────────────────────────
    Find an index i such that BOTH conditions hold:
        (a) Finish[i] == false       // Not yet finished
        (b) Need[i] <= Work          // Can satisfy its needs
            (Need[i][j] <= Work[j] for all j from 0 to m-1)

    If no such i exists → Go to STEP 4

STEP 3: Simulate process completion
─────────────────────────────────────────────────────────────
    // Process i can finish; simulate its completion
    Work ← Work + Allocation[i]   // Pi releases its resources
    Finish[i] ← true              // Mark Pi as finished
    SafeSequence.append(i)        // Add to safe sequence

    Go to STEP 2                  // Find next process

STEP 4: Check final state
─────────────────────────────────────────────────────────────
    If Finish[i] == true for ALL i:
        Return SAFE, SafeSequence
    Else:
        Return UNSAFE
`}
      </pre>
    </div>

    {/* Visual Representation */}
    <h2 className="text-3xl font-bold mt-8">Visual Algorithm Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Algorithm Flowchart:
─────────────────────────────────────────────────────────────

    ┌────────────────────────────────┐
    │  Initialize:                   │
    │  Work = Available              │
    │  Finish[all] = false           │
    └────────────────────────────────┘
                    │
                    ▼
    ┌────────────────────────────────┐
    │  Find i where:                 │◄──────────┐
    │  Finish[i]=false AND           │           │
    │  Need[i] <= Work               │           │
    └────────────────────────────────┘           │
                    │                            │
         Found     │      Not Found              │
            │      │         │                   │
            ▼      │         ▼                   │
    ┌──────────────┐   ┌──────────────────┐      │
    │ Work += Alloc│   │ All Finish=true? │      │
    │ Finish[i]=T  │   └──────────────────┘      │
    │ Add i to seq │         │                   │
    └──────────────┘    Yes  │  No              │
            │            │   │   │               │
            │            ▼   │   ▼               │
            │     ┌──────┐   │ ┌────────┐        │
            │     │ SAFE │   │ │ UNSAFE │        │
            │     └──────┘   │ └────────┘        │
            │                │                   │
            └────────────────┴───────────────────┘
`}
      </pre>
    </div>

    {/* Detailed Example */}
    <h2 className="text-3xl font-bold mt-8">Step-by-Step Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Example System:
─────────────────────────────────────────────────────────────
    4 Processes: P0, P1, P2, P3
    3 Resource Types: A (9), B (3), C (6)

Current State:
─────────────────────────────────────────────────────────────
           Allocation      Max          Need
           A   B   C     A   B   C     A   B   C
         ┌───────────┐ ┌───────────┐ ┌───────────┐
    P0   │ 1   0   0 │ │ 3   2   2 │ │ 2   2   2 │
    P1   │ 6   1   2 │ │ 6   1   3 │ │ 0   0   1 │
    P2   │ 2   1   1 │ │ 3   1   4 │ │ 1   0   3 │
    P3   │ 0   0   2 │ │ 4   2   2 │ │ 4   2   0 │
         └───────────┘ └───────────┘ └───────────┘

    Total Allocated: A=9, B=2, C=5
    Available = [9-9, 3-2, 6-5] = [0, 1, 1]
`}
      </pre>
    </div>

    {/* Iteration 1 */}
    <h3 className="text-2xl font-semibold mt-6">Iteration 1</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Initial State:
    Work = [0, 1, 1]
    Finish = [F, F, F, F]
    SafeSequence = []

Find process i where Finish[i]=false AND Need[i] <= Work:
─────────────────────────────────────────────────────────────

    i=0: Finish[0]=F ✓
         Need[0]=[2,2,2] <= Work=[0,1,1]?
         2<=0? NO ✗  → Cannot select P0

    i=1: Finish[1]=F ✓
         Need[1]=[0,0,1] <= Work=[0,1,1]?
         0<=0? YES, 0<=1? YES, 1<=1? YES ✓
         → SELECT P1

Simulate P1 completion:
─────────────────────────────────────────────────────────────
    Work = Work + Allocation[1]
         = [0,1,1] + [6,1,2] = [6, 2, 3]
    Finish[1] = true
    SafeSequence = [P1]

State after iteration 1:
    Work = [6, 2, 3]
    Finish = [F, T, F, F]
`}
      </pre>
    </div>

    {/* Iteration 2 */}
    <h3 className="text-2xl font-semibold mt-6">Iteration 2</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Current State:
    Work = [6, 2, 3]
    Finish = [F, T, F, F]

Find process i where Finish[i]=false AND Need[i] <= Work:
─────────────────────────────────────────────────────────────

    i=0: Finish[0]=F ✓
         Need[0]=[2,2,2] <= Work=[6,2,3]?
         2<=6? YES, 2<=2? YES, 2<=3? YES ✓
         → SELECT P0

Simulate P0 completion:
─────────────────────────────────────────────────────────────
    Work = Work + Allocation[0]
         = [6,2,3] + [1,0,0] = [7, 2, 3]
    Finish[0] = true
    SafeSequence = [P1, P0]

State after iteration 2:
    Work = [7, 2, 3]
    Finish = [T, T, F, F]
`}
      </pre>
    </div>

    {/* Iteration 3 */}
    <h3 className="text-2xl font-semibold mt-6">Iteration 3</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Current State:
    Work = [7, 2, 3]
    Finish = [T, T, F, F]

Find process i where Finish[i]=false AND Need[i] <= Work:
─────────────────────────────────────────────────────────────

    i=2: Finish[2]=F ✓
         Need[2]=[1,0,3] <= Work=[7,2,3]?
         1<=7? YES, 0<=2? YES, 3<=3? YES ✓
         → SELECT P2

Simulate P2 completion:
─────────────────────────────────────────────────────────────
    Work = Work + Allocation[2]
         = [7,2,3] + [2,1,1] = [9, 3, 4]
    Finish[2] = true
    SafeSequence = [P1, P0, P2]

State after iteration 3:
    Work = [9, 3, 4]
    Finish = [T, T, T, F]
`}
      </pre>
    </div>

    {/* Iteration 4 */}
    <h3 className="text-2xl font-semibold mt-6">Iteration 4</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Current State:
    Work = [9, 3, 4]
    Finish = [T, T, T, F]

Find process i where Finish[i]=false AND Need[i] <= Work:
─────────────────────────────────────────────────────────────

    i=3: Finish[3]=F ✓
         Need[3]=[4,2,0] <= Work=[9,3,4]?
         4<=9? YES, 2<=3? YES, 0<=4? YES ✓
         → SELECT P3

Simulate P3 completion:
─────────────────────────────────────────────────────────────
    Work = Work + Allocation[3]
         = [9,3,4] + [0,0,2] = [9, 3, 6]
    Finish[3] = true
    SafeSequence = [P1, P0, P2, P3]

State after iteration 4:
    Work = [9, 3, 6]
    Finish = [T, T, T, T]
`}
      </pre>
    </div>

    {/* Final Check */}
    <h3 className="text-2xl font-semibold mt-6">Final Check</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Final State Check:
─────────────────────────────────────────────────────────────
    Finish = [T, T, T, T]

    All Finish[i] == true? YES!

RESULT: SYSTEM IS SAFE
SAFE SEQUENCE: <P1, P0, P2, P3>

─────────────────────────────────────────────────────────────
Verification:
─────────────────────────────────────────────────────────────
    P1 runs with [0,1,1], needs [0,0,1] → releases [6,1,2]
    P0 runs with [6,2,3], needs [2,2,2] → releases [1,0,0]
    P2 runs with [7,2,3], needs [1,0,3] → releases [2,1,1]
    P3 runs with [9,3,4], needs [4,2,0] → releases [0,0,2]

    Final: All resources returned = [9, 3, 6] = Total resources ✓
`}
      </pre>
    </div>

    {/* Unsafe State Example */}
    <h2 className="text-3xl font-bold mt-8">Unsafe State Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Modified Example (Unsafe):
─────────────────────────────────────────────────────────────
    Suppose Available = [0, 0, 1] instead

           Allocation      Need
           A   B   C     A   B   C
    P0   │ 1   0   0 │ │ 2   2   2 │
    P1   │ 6   1   2 │ │ 0   0   1 │
    P2   │ 2   1   1 │ │ 1   0   3 │
    P3   │ 0   0   2 │ │ 4   2   0 │

    Available = [0, 1, 0]  (Changed!)

Safety Check:
─────────────────────────────────────────────────────────────
    Work = [0, 1, 0]
    Finish = [F, F, F, F]

Iteration 1:
    P0: Need=[2,2,2] <= [0,1,0]? 2>0 NO ✗
    P1: Need=[0,0,1] <= [0,1,0]? 1>0 NO ✗
    P2: Need=[1,0,3] <= [0,1,0]? 1>0 NO ✗
    P3: Need=[4,2,0] <= [0,1,0]? 4>0 NO ✗

    NO PROCESS CAN BE SELECTED!

Final Check:
    Finish = [F, F, F, F]
    Not all Finish[i] == true

RESULT: SYSTEM IS UNSAFE!

No safe sequence exists. The system could deadlock.
`}
      </pre>
    </div>

    {/* Implementation Details */}
    <h2 className="text-3xl font-bold mt-8">Implementation Details</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Pseudocode Implementation:
─────────────────────────────────────────────────────────────

function SafetyAlgorithm(Available, Allocation, Need, n, m):
    // Step 1: Initialize
    Work[m]
    for j = 0 to m-1:
        Work[j] = Available[j]

    Finish[n]
    for i = 0 to n-1:
        Finish[i] = false

    SafeSequence = []

    // Step 2 & 3: Find and simulate processes
    count = 0
    while count < n:
        found = false

        for i = 0 to n-1:
            if Finish[i] == false:
                // Check if Need[i] <= Work
                canFinish = true
                for j = 0 to m-1:
                    if Need[i][j] > Work[j]:
                        canFinish = false
                        break

                if canFinish:
                    // Simulate completion
                    for j = 0 to m-1:
                        Work[j] = Work[j] + Allocation[i][j]
                    Finish[i] = true
                    SafeSequence.append(i)
                    count++
                    found = true
                    break  // Start from beginning

        if not found:
            break  // No process can proceed

    // Step 4: Final check
    for i = 0 to n-1:
        if Finish[i] == false:
            return (UNSAFE, null)

    return (SAFE, SafeSequence)
`}
      </pre>
    </div>

    {/* Complexity Analysis */}
    <h2 className="text-3xl font-bold mt-8">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Complexity</th>
            <th className="p-3 border">Explanation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Time - Best Case</td>
            <td className="p-3 border">O(n * m)</td>
            <td className="p-3 border">Processes found in order 0, 1, 2, ...</td>
          </tr>
          <tr>
            <td className="p-3 border">Time - Worst Case</td>
            <td className="p-3 border">O(n^2 * m)</td>
            <td className="p-3 border">Must scan all n processes, n times</td>
          </tr>
          <tr>
            <td className="p-3 border">Space</td>
            <td className="p-3 border">O(n + m)</td>
            <td className="p-3 border">Work[m] + Finish[n] arrays</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Trace Table */}
    <h2 className="text-3xl font-bold mt-8">Execution Trace Table</h2>
    <p className="leading-relaxed">
      A trace table helps visualize the algorithm's execution step by step.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Iter</th>
            <th className="p-2 border">Work</th>
            <th className="p-2 border">Finish</th>
            <th className="p-2 border">Selected</th>
            <th className="p-2 border">Reason</th>
            <th className="p-2 border">New Work</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-2 border">Init</td>
            <td className="p-2 border">[0,1,1]</td>
            <td className="p-2 border">[F,F,F,F]</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">[0,1,1]</td>
          </tr>
          <tr>
            <td className="p-2 border">1</td>
            <td className="p-2 border">[0,1,1]</td>
            <td className="p-2 border">[F,F,F,F]</td>
            <td className="p-2 border">P1</td>
            <td className="p-2 border">[0,0,1] &le; [0,1,1]</td>
            <td className="p-2 border">[6,2,3]</td>
          </tr>
          <tr>
            <td className="p-2 border">2</td>
            <td className="p-2 border">[6,2,3]</td>
            <td className="p-2 border">[F,T,F,F]</td>
            <td className="p-2 border">P0</td>
            <td className="p-2 border">[2,2,2] &le; [6,2,3]</td>
            <td className="p-2 border">[7,2,3]</td>
          </tr>
          <tr>
            <td className="p-2 border">3</td>
            <td className="p-2 border">[7,2,3]</td>
            <td className="p-2 border">[T,T,F,F]</td>
            <td className="p-2 border">P2</td>
            <td className="p-2 border">[1,0,3] &le; [7,2,3]</td>
            <td className="p-2 border">[9,3,4]</td>
          </tr>
          <tr>
            <td className="p-2 border">4</td>
            <td className="p-2 border">[9,3,4]</td>
            <td className="p-2 border">[T,T,T,F]</td>
            <td className="p-2 border">P3</td>
            <td className="p-2 border">[4,2,0] &le; [9,3,4]</td>
            <td className="p-2 border">[9,3,6]</td>
          </tr>
          <tr className="bg-green-100 dark:bg-green-900">
            <td className="p-2 border">Final</td>
            <td className="p-2 border">[9,3,6]</td>
            <td className="p-2 border">[T,T,T,T]</td>
            <td className="p-2 border" colSpan={3}>SAFE - Sequence: P1, P0, P2, P3</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Important Notes */}
    <h2 className="text-3xl font-bold mt-8">Important Notes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Multiple Safe Sequences:
─────────────────────────────────────────────────────────────
    A system may have multiple safe sequences.
    The algorithm finds ONE, not necessarily all.

    Example: If P1 and P3 can both run first,
    valid sequences could be:
        <P1, P0, P2, P3>
        <P1, P0, P3, P2>
        <P1, P3, P0, P2>
        etc.

Order of Checking:
─────────────────────────────────────────────────────────────
    The algorithm typically checks processes in order (0, 1, 2, ...).
    Different orderings may produce different valid sequences.

Work Array Purpose:
─────────────────────────────────────────────────────────────
    Work simulates resources that WOULD be available
    if finished processes released their resources.

    Work does NOT modify actual Available vector.
    This is a SIMULATION for safety checking.
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Safety Algorithm determines if a safe sequence exists</li>
      <li>Uses Work and Finish as temporary simulation vectors</li>
      <li>Iteratively finds processes that can complete with available resources</li>
      <li>Simulates resource release when a process completes</li>
      <li>System is safe if and only if all processes can finish</li>
      <li>Time complexity is O(n^2 * m) in the worst case</li>
      <li>Multiple valid safe sequences may exist</li>
      <li>The algorithm is deterministic given the same input</li>
    </ul>
  </div>
);

export default SafetyAlgorithm;
