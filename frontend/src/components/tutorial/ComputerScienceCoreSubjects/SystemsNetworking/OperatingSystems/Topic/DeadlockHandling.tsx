import React from 'react';

const DeadlockHandling: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Methods for Handling Deadlocks
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Operating systems employ various strategies to handle deadlocks. These methods differ
      in their approach, overhead, and guarantees. The choice of method depends on the
      system requirements and the cost-benefit trade-off of each approach.
    </p>

    {/* Overview */}
    <h2 className="text-3xl font-bold mt-8">Deadlock Handling Approaches</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Deadlock Handling Methods:
─────────────────────────────────────────────────────────────

                    ┌─────────────────────────────────┐
                    │     DEADLOCK HANDLING           │
                    └─────────────────────────────────┘
                                 │
            ┌────────────────────┼────────────────────┐
            │                    │                    │
            ▼                    ▼                    ▼
    ┌───────────────┐    ┌───────────────┐    ┌───────────────┐
    │  Prevention/  │    │   Detection   │    │   Ignorance   │
    │   Avoidance   │    │ & Recovery    │    │  (Ostrich)    │
    └───────────────┘    └───────────────┘    └───────────────┘
            │                    │                    │
   Ensure deadlock     Allow deadlock,      Pretend deadlock
   never occurs        then fix it          doesn't exist

            ▲                    ▲                    ▲
            │                    │                    │
     High overhead        Medium overhead      Zero overhead
     Zero deadlocks       Rare deadlocks       Rare deadlocks
                                               (hope for best)
`}
      </pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Method Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Overhead</th>
            <th className="p-3 border">Effect</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Prevention</td>
            <td className="p-3 border">Break one of the four necessary conditions</td>
            <td className="p-3 border">High (restricts system)</td>
            <td className="p-3 border">Deadlock impossible</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Avoidance</td>
            <td className="p-3 border">Make careful decisions at runtime</td>
            <td className="p-3 border">Medium (requires info)</td>
            <td className="p-3 border">Deadlock avoided</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Detection</td>
            <td className="p-3 border">Allow deadlock, detect when it occurs</td>
            <td className="p-3 border">Medium (periodic check)</td>
            <td className="p-3 border">Deadlock detected</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Recovery</td>
            <td className="p-3 border">Break deadlock once detected</td>
            <td className="p-3 border">High (when needed)</td>
            <td className="p-3 border">Deadlock resolved</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Ignorance</td>
            <td className="p-3 border">Ignore the problem entirely</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">User must reboot</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Prevention */}
    <h2 className="text-3xl font-bold mt-8">1. Deadlock Prevention</h2>
    <p className="leading-relaxed">
      Ensure that at least one of the four necessary conditions cannot hold:
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Condition</th>
            <th className="p-3 border">Prevention Method</th>
            <th className="p-3 border">Practical?</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Mutual Exclusion</td>
            <td className="p-3 border">Make resources sharable (e.g., read-only files)</td>
            <td className="p-3 border">Limited (some resources inherently exclusive)</td>
          </tr>
          <tr>
            <td className="p-3 border">Hold and Wait</td>
            <td className="p-3 border">Request all resources at once, or release before new request</td>
            <td className="p-3 border">Yes, but wasteful</td>
          </tr>
          <tr>
            <td className="p-3 border">No Preemption</td>
            <td className="p-3 border">Allow OS to preempt resources</td>
            <td className="p-3 border">Only for some resources</td>
          </tr>
          <tr>
            <td className="p-3 border">Circular Wait</td>
            <td className="p-3 border">Impose total ordering of resource types</td>
            <td className="p-3 border">Yes, commonly used</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Avoidance */}
    <h2 className="text-3xl font-bold mt-8">2. Deadlock Avoidance</h2>
    <p className="leading-relaxed">
      Make dynamic decisions to ensure the system never enters an unsafe state:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Deadlock Avoidance Process:
─────────────────────────────────────────────────────────────

    Process requests resource
             │
             ▼
    ┌─────────────────────────┐
    │   Would this allocation │
    │   leave system in a     │
    │   SAFE STATE?           │
    └───────────┬─────────────┘
                │
        ┌───────┴───────┐
        │               │
        ▼               ▼
       YES              NO
        │               │
        ▼               ▼
    ┌─────────┐    ┌─────────┐
    │  Grant  │    │  Deny   │
    │ request │    │ request │
    │         │    │ (wait)  │
    └─────────┘    └─────────┘

Requires advance knowledge of maximum resource needs.
Uses Banker's Algorithm for multiple resource types.
`}
      </pre>
    </div>

    {/* Detection */}
    <h2 className="text-3xl font-bold mt-8">3. Deadlock Detection</h2>
    <p className="leading-relaxed">
      Allow deadlocks to occur but detect them using resource allocation graphs or
      detection algorithms:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Detection Approaches:
─────────────────────────────────────────────────────────────

Single Instance Resources:
    → Use Resource Allocation Graph
    → Look for cycles
    → Cycle = Deadlock

Multiple Instance Resources:
    → Use Detection Algorithm (similar to Banker's)
    → Find processes that cannot complete
    → Remaining processes are deadlocked

When to Run Detection:
    → Every request (expensive but immediate)
    → Periodically (e.g., every 5 minutes)
    → When CPU utilization drops below threshold
`}
      </pre>
    </div>

    {/* Recovery */}
    <h2 className="text-3xl font-bold mt-8">4. Deadlock Recovery</h2>
    <p className="leading-relaxed">
      Once deadlock is detected, recover using one of these methods:
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Impact</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Process Termination</td>
            <td className="p-3 border">Kill one or more deadlocked processes</td>
            <td className="p-3 border">Work lost, may need restart</td>
          </tr>
          <tr>
            <td className="p-3 border">Resource Preemption</td>
            <td className="p-3 border">Take resources from processes</td>
            <td className="p-3 border">Rollback required</td>
          </tr>
          <tr>
            <td className="p-3 border">Rollback</td>
            <td className="p-3 border">Return process to safe checkpoint</td>
            <td className="p-3 border">Requires checkpoints</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Ostrich Algorithm */}
    <h2 className="text-3xl font-bold mt-8">5. Ostrich Algorithm (Ignorance)</h2>
    <p className="leading-relaxed">
      Pretend deadlocks don't exist. This is the approach used by many operating systems
      including UNIX and Windows:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
The Ostrich Algorithm:
─────────────────────────────────────────────────────────────

    "Stick your head in the sand and pretend
     there is no problem"

Why use it?
    1. Deadlocks are rare in most systems
    2. Prevention/avoidance is expensive
    3. Detection adds overhead
    4. Cost of handling may exceed cost of occasional reboot

Used by:
    - Most UNIX/Linux systems
    - Windows
    - Many real-world operating systems

User's Solution:
    - Notice system is unresponsive
    - Reboot the system
    - Restart applications

Trade-off:
    Convenience (rarely needed intervention)
    vs.
    Correctness (guaranteed no deadlock)
`}
      </pre>
    </div>

    {/* Combined Approach */}
    <h2 className="text-3xl font-bold mt-8">Combined Approach</h2>
    <p className="leading-relaxed">
      Real systems often combine multiple approaches based on resource types:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Practical Combined Strategy:
─────────────────────────────────────────────────────────────

Resource Type           │ Deadlock Handling Method
────────────────────────┼────────────────────────────────
Internal OS resources   │ Prevention (careful design)
User-space locks        │ Avoidance or Detection
Memory allocation       │ Prevention (ordering)
File system locks       │ Detection + Recovery
Network resources       │ Timeouts (practical prevention)
Database transactions   │ Detection + Rollback

Example: Database System
    - Uses detection for transaction locks
    - Periodically checks for cycles
    - Recovers by rolling back one transaction
    - Automatically retries rolled-back transaction
`}
      </pre>
    </div>

    {/* Summary Flow */}
    <h2 className="text-3xl font-bold mt-8">Decision Flowchart</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Choosing a Deadlock Handling Strategy:
─────────────────────────────────────────────────────────────

Is deadlock prevention practical?
    │
    ├── YES → Use Prevention (simplest, safest)
    │
    └── NO → Is max resource need known?
                │
                ├── YES → Use Avoidance (Banker's Algorithm)
                │
                └── NO → Is deadlock frequent?
                            │
                            ├── YES → Use Detection + Recovery
                            │
                            └── NO → Ignore it (Ostrich)
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Prevention ensures deadlock cannot occur but restricts resource usage</li>
      <li>Avoidance requires advance knowledge of maximum resource needs</li>
      <li>Detection and recovery allow deadlocks but handle them when they occur</li>
      <li>Ignoring deadlocks is practical when they are rare and recovery is cheap</li>
      <li>Real systems often combine multiple approaches for different resources</li>
    </ul>
  </div>
);

export default DeadlockHandling;
