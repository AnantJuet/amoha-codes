import React from 'react';

const ResourceAllocationGraph: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Resource Allocation Graph
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Resource Allocation Graph (RAG) is a directed graph used to describe the state of
      a system in terms of processes and resources. It provides a visual representation
      that helps in detecting deadlocks by identifying cycles in the graph.
    </p>

    {/* Components */}
    <h2 className="text-3xl font-bold mt-8">Graph Components</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Representation</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Process</td>
            <td className="p-3 border">Circle (O)</td>
            <td className="p-3 border">A process in the system</td>
          </tr>
          <tr>
            <td className="p-3 border">Resource Type</td>
            <td className="p-3 border">Rectangle (Box)</td>
            <td className="p-3 border">A type of resource</td>
          </tr>
          <tr>
            <td className="p-3 border">Resource Instance</td>
            <td className="p-3 border">Dot inside rectangle</td>
            <td className="p-3 border">Individual unit of a resource type</td>
          </tr>
          <tr>
            <td className="p-3 border">Request Edge</td>
            <td className="p-3 border">Process to Resource (Pi → Rj)</td>
            <td className="p-3 border">Process is waiting for resource</td>
          </tr>
          <tr>
            <td className="p-3 border">Assignment Edge</td>
            <td className="p-3 border">Resource to Process (Rj → Pi)</td>
            <td className="p-3 border">Resource is allocated to process</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Notation */}
    <h2 className="text-3xl font-bold mt-8">Graph Notation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Symbol Legend:
─────────────────────────────────────────────────────────────

    (P1)        Process P1 (Circle)

    ┌───────┐
    │  • •  │   Resource R with 2 instances (Rectangle with dots)
    │  R1   │
    └───────┘

    (P1) ──────────► R1    Request Edge: P1 requests R1

    R1 ──────────► (P1)    Assignment Edge: R1 assigned to P1
`}
      </pre>
    </div>

    {/* Example: No Deadlock */}
    <h2 className="text-3xl font-bold mt-8">Example 1: No Deadlock</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Resource Allocation Graph (No Cycle = No Deadlock):
─────────────────────────────────────────────────────────────

    ┌─────┐                          ┌─────┐
    │  •  │                          │  •  │
    │ R1  │                          │ R2  │
    └──┬──┘                          └──┬──┘
       │                                │
       │ assigned                       │ assigned
       ▼                                ▼
     (P1) ─────────────────────────► (P2)
                requests R2

System State:
  - R1 is assigned to P1
  - R2 is assigned to P2
  - P1 requests R2

Analysis:
  - No cycle exists
  - P2 can finish and release R2
  - Then P1 can get R2 and finish
  - NO DEADLOCK
`}
      </pre>
    </div>

    {/* Example: With Deadlock */}
    <h2 className="text-3xl font-bold mt-8">Example 2: Deadlock (Single Instance)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Resource Allocation Graph (Cycle = Deadlock with single instances):
─────────────────────────────────────────────────────────────

         ┌─────┐              ┌─────┐
         │  •  │              │  •  │
         │ R1  │              │ R2  │
         └──┬──┘              └──┬──┘
            │                    │
            │ assigned           │ assigned
            ▼                    ▼
          (P1) ──────────────► (P2)
            ▲      requests      │
            │        R2          │
            │                    │ requests
            └────────────────────┘
                    R1

Cycle: P1 → R2 → P2 → R1 → P1

With SINGLE INSTANCE per resource type:
  Cycle → DEADLOCK (guaranteed)

  P1 holds R1, wants R2
  P2 holds R2, wants R1
  Neither can proceed → DEADLOCK!
`}
      </pre>
    </div>

    {/* Example: Cycle but No Deadlock */}
    <h2 className="text-3xl font-bold mt-8">Example 3: Cycle but No Deadlock (Multiple Instances)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Resource Allocation Graph with Multiple Instances:
─────────────────────────────────────────────────────────────

         ┌───────┐            ┌───────┐
         │  •  • │            │  •  • │
         │  R1   │            │  R2   │
         └─┬───┬─┘            └─┬───┬─┘
           │   │                │   │
           │   │                │   │
           │   └────────────────┼───┼────► (P3)
           │                    │   │
           │ assigned           │   │ assigned
           ▼                    ▼   │
         (P1) ──────────────► (P2)◄─┘
           ▲     requests R2    │
           │                    │ requests R1
           └────────────────────┘

System State:
  - R1 has 2 instances: 1 to P1, 1 to P3
  - R2 has 2 instances: 1 to P2, 1 to P3
  - P1 requests R2
  - P2 requests R1

Cycle exists: P1 → R2 → P2 → R1 → P1

BUT NO DEADLOCK!
  - P3 can finish (holds R1 and R2, requests nothing)
  - P3 releases R1 and R2
  - P1 or P2 can then proceed

With MULTIPLE INSTANCES:
  Cycle → POSSIBLE deadlock (not guaranteed)
`}
      </pre>
    </div>

    {/* Rules for Deadlock Detection */}
    <h2 className="text-3xl font-bold mt-8">Deadlock Detection Rules</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Instances</th>
            <th className="p-3 border">No Cycle</th>
            <th className="p-3 border">Cycle Exists</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Single Instance</td>
            <td className="p-3 border">No Deadlock</td>
            <td className="p-3 border font-bold">DEADLOCK (guaranteed)</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Multiple Instances</td>
            <td className="p-3 border">No Deadlock</td>
            <td className="p-3 border">Possible Deadlock (not guaranteed)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Complex Example */}
    <h2 className="text-3xl font-bold mt-8">Complex Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Complex RAG with 4 Processes and 3 Resources:
─────────────────────────────────────────────────────────────

    ┌───────┐          ┌───────┐          ┌───────┐
    │   •   │          │  • •  │          │ • • • │
    │  R1   │          │  R2   │          │  R3   │
    └───┬───┘          └─┬───┬─┘          └─┬─┬─┬─┘
        │                │   │              │ │ │
        │                │   │              │ │ │
        │assign    assign│   │assign   assign│ │ │assign
        │                │   │              │ │ │
        ▼                ▼   │              │ │ │
      (P1)────────────►(P2)──┼──────────────┼─┘ │
        │   requests R2  ▲   │              │   │
        │                │   ▼              ▼   │
        │              (P3)◄───────────────(P4)◄┘
        │                │
        │                │
        └────────────────┘
           requests R3

Allocations:               Requests:
  R1 → P1                   P1 → R2, R3
  R2 → P2, P3               P2 → R3
  R3 → P3, P4               P4 → R2

Analysis:
  Check for cycles involving all processes that are waiting...
`}
      </pre>
    </div>

    {/* Graph Reduction */}
    <h2 className="text-3xl font-bold mt-8">Graph Reduction Algorithm</h2>
    <p className="leading-relaxed">
      To determine if a system with multiple instances is deadlocked:
    </p>
    <ol className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li>Find a process whose requests can all be satisfied</li>
      <li>Remove that process and release its resources (remove edges)</li>
      <li>Repeat until no more processes can be removed</li>
      <li>If all processes are removed → No Deadlock</li>
      <li>If some processes remain → Deadlock involving those processes</li>
    </ol>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Graph Reduction Example:
─────────────────────────────────────────────────────────────

Initial:                          After P3 finishes:
   R1(••) → P1, P2                   R1(••) → P1, P2
   R2(•)  → P3                       R2(•)  → available!
   P1 → R2                           P1 → R2
   P2 → R2                           P2 → R2

Step 1: P3 has R2, needs nothing    Step 2: P1 gets R2
        P3 can finish!                       P1 can finish!
        Remove P3, release R2

After P1 finishes:                  After P2 finishes:
   R1(••) → P2                         R1(••) → available
   R2(•)  → available                  R2(•)  → available
   P2 → R2                             All done!

All processes removed → NO DEADLOCK
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>RAG shows resource allocation and request relationships</li>
      <li>Request edges point from process to resource</li>
      <li>Assignment edges point from resource to process</li>
      <li>No cycle means no deadlock (always)</li>
      <li>With single instances, cycle means deadlock</li>
      <li>With multiple instances, cycle only indicates possible deadlock</li>
      <li>Graph reduction can detect deadlock with multiple instances</li>
    </ul>
  </div>
);

export default ResourceAllocationGraph;
