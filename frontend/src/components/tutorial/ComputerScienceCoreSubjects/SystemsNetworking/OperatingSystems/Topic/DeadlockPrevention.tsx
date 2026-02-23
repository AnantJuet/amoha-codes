import React from 'react';

const DeadlockPrevention: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Deadlock Prevention
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Deadlock prevention aims to ensure that at least one of the four necessary conditions
      for deadlock cannot hold. By structurally preventing one condition, we guarantee
      that deadlock can never occur in the system.
    </p>

    {/* Overview */}
    <h2 className="text-3xl font-bold mt-8">Prevention Strategies Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Four Conditions and Prevention Methods:
─────────────────────────────────────────────────────────────

┌────────────────────┬────────────────────────────────────────┐
│     Condition      │         Prevention Method              │
├────────────────────┼────────────────────────────────────────┤
│ Mutual Exclusion   │ Use sharable resources (where possible)│
├────────────────────┼────────────────────────────────────────┤
│ Hold and Wait      │ Request all resources at once, OR      │
│                    │ Release before requesting new          │
├────────────────────┼────────────────────────────────────────┤
│ No Preemption      │ Allow resources to be forcibly taken   │
├────────────────────┼────────────────────────────────────────┤
│ Circular Wait      │ Impose ordering on resource requests   │
└────────────────────┴────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* 1. Mutual Exclusion */}
    <h2 className="text-3xl font-bold mt-8">1. Breaking Mutual Exclusion</h2>
    <p className="leading-relaxed">
      Make resources sharable so multiple processes can use them simultaneously.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Approach: Make resources sharable
─────────────────────────────────────────────────────────────

Example: Printer Spooling
─────────────────────────────────────────────────────────────
                                     ┌─────────────┐
     Process A ───► Print Job A ───►│             │
                                     │   SPOOLER   │──► Printer
     Process B ───► Print Job B ───►│   (Queue)   │
                                     │             │
     Process C ───► Print Job C ───►└─────────────┘

Instead of exclusive printer access:
  - All processes write to spool queue (sharable)
  - Spooler daemon has exclusive printer access
  - No process directly holds the printer
  - No deadlock on printer resource!

Limitations:
─────────────────────────────────────────────────────────────
  - Cannot make all resources sharable
  - Mutex locks must be exclusive by nature
  - Memory regions being modified need exclusion
  - Only works for specific resource types
`}
      </pre>
    </div>

    {/* 2. Hold and Wait */}
    <h2 className="text-3xl font-bold mt-8">2. Breaking Hold and Wait</h2>
    <p className="leading-relaxed">
      Ensure that when a process requests resources, it does not hold any other resources.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Method A: Request All at Once</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
All-or-Nothing Protocol:
─────────────────────────────────────────────────────────────

// Process must request ALL needed resources at start
void process() {
    // Request all resources at once
    request(R1, R2, R3);    // Atomic request

    // Only proceeds if ALL resources granted
    use_resources();

    // Release all resources
    release(R1, R2, R3);
}

Timeline:
    Request(R1,R2,R3) ─────►  Use R1,R2,R3  ─────► Release All
                        All or Nothing

Advantage: Simple, guarantees no hold-and-wait
Disadvantage: Poor resource utilization
             (may hold resources before needed)
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Method B: Release Before Request</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Release-Before-Request Protocol:
─────────────────────────────────────────────────────────────

// Must release all resources before requesting new ones
void process() {
    request(R1);
    use_R1();

    release(R1);        // Must release before requesting R2!
    request(R2);
    use_R2();

    release(R2);
    request(R1, R2);    // Can request both if starting fresh
    use_both();
    release(R1, R2);
}

Timeline:
    [R1] ──► release ──► [R2] ──► release ──► [R1,R2]
    Never holds while waiting

Advantage: Better utilization than all-at-once
Disadvantage: May lose work (must save state before release)
             Overhead of repeated requests
`}
      </pre>
    </div>

    {/* Problems with Hold and Wait Prevention */}
    <h3 className="text-2xl font-semibold mt-4">Problems with These Approaches:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li><strong>Low Resource Utilization:</strong> Resources held but not used</li>
      <li><strong>Starvation:</strong> Process needing many resources may never get all</li>
      <li><strong>Difficult to Know:</strong> May not know all needed resources in advance</li>
    </ul>

    {/* 3. No Preemption */}
    <h2 className="text-3xl font-bold mt-8">3. Breaking No Preemption</h2>
    <p className="leading-relaxed">
      Allow resources to be forcibly taken from processes.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Preemption Protocols:
─────────────────────────────────────────────────────────────

Protocol 1: Self-Preemption
─────────────────────────────────────────────────────────────
    If process P holds resources and requests more:
        If request cannot be satisfied:
            Release ALL resources P holds
            P is blocked, waiting for ALL (old + new)
            When available, restart P

    Example:
        P holds {R1, R2}, wants R3
        R3 not available
        P releases R1, R2
        P waits for {R1, R2, R3}
        When all available, P restarts

Protocol 2: Steal from Others
─────────────────────────────────────────────────────────────
    If process P requests resource R held by Q:
        If Q is waiting (blocked):
            Preempt R from Q
            Give R to P
            Q must re-request R

    Example:
        P wants R3 (held by Q)
        Q is blocked waiting for R4
        Preempt R3 from Q → give to P
        Q must re-acquire R3 later

Limitations:
─────────────────────────────────────────────────────────────
    - Only for resources with savable state
    - Works: CPU (context switch), Memory (swapping)
    - Doesn't work: Printer (mid-job), Mutex locks
`}
      </pre>
    </div>

    {/* 4. Circular Wait */}
    <h2 className="text-3xl font-bold mt-8">4. Breaking Circular Wait</h2>
    <p className="leading-relaxed">
      Impose a total ordering on all resource types and require processes to request
      resources in increasing order. This is the most practical prevention method.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Resource Ordering Protocol:
─────────────────────────────────────────────────────────────

Step 1: Assign numbers to all resource types
─────────────────────────────────────────────────────────────
    F(Tape drive)  = 1
    F(Disk drive)  = 5
    F(Printer)     = 12
    F(Keyboard)    = 15
    F(Display)     = 20

Step 2: Request in increasing order only
─────────────────────────────────────────────────────────────
    // VALID: Increasing order
    request(Tape);      // F = 1
    request(Disk);      // F = 5
    request(Printer);   // F = 12

    // INVALID: Not increasing
    request(Printer);   // F = 12
    request(Disk);      // F = 5  ← VIOLATION! 5 < 12
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Why This Prevents Circular Wait:</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Proof by Contradiction:
─────────────────────────────────────────────────────────────

Assume circular wait exists: P0 → P1 → P2 → ... → Pn → P0

Each Pi holds Ri and wants R(i+1):
    P0 holds R0, wants R1:  F(R0) < F(R1)
    P1 holds R1, wants R2:  F(R1) < F(R2)
    ...
    Pn holds Rn, wants R0:  F(Rn) < F(R0)

This implies:
    F(R0) < F(R1) < F(R2) < ... < F(Rn) < F(R0)

    F(R0) < F(R0)  ← CONTRADICTION!

Therefore, circular wait cannot exist under ordering protocol.
`}
      </pre>
    </div>

    {/* Practical Example */}
    <h2 className="text-3xl font-bold mt-8">Practical Example: Lock Ordering</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Banking System Lock Ordering:
─────────────────────────────────────────────────────────────

// Assign order by account number
// Always acquire locks in ascending account number order

void transfer(Account from, Account to, int amount) {
    Account first, second;

    // Determine lock order
    if (from.id < to.id) {
        first = from;
        second = to;
    } else {
        first = to;
        second = from;
    }

    // Always lock in order
    lock(first.mutex);      // Lower ID first
    lock(second.mutex);     // Higher ID second

    // Transfer
    from.balance -= amount;
    to.balance += amount;

    unlock(second.mutex);
    unlock(first.mutex);
}

// Transfer(A→B) and Transfer(B→A) both lock in same order!
// No circular wait possible!
`}
      </pre>
    </div>

    {/* Comparison */}
    <h2 className="text-3xl font-bold mt-8">Prevention Methods Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Practicality</th>
            <th className="p-3 border">Overhead</th>
            <th className="p-3 border">Typical Use</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Mutual Exclusion</td>
            <td className="p-3 border">Limited</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Spooling systems</td>
          </tr>
          <tr>
            <td className="p-3 border">Hold and Wait</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">High (waste)</td>
            <td className="p-3 border">Simple batch systems</td>
          </tr>
          <tr>
            <td className="p-3 border">No Preemption</td>
            <td className="p-3 border">Limited</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Memory, CPU</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Circular Wait</td>
            <td className="p-3 border font-bold">High</td>
            <td className="p-3 border font-bold">Low</td>
            <td className="p-3 border font-bold">Most common</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Prevention guarantees deadlock cannot occur by design</li>
      <li>Breaking mutual exclusion is often impractical</li>
      <li>Eliminating hold-and-wait wastes resources or is impractical</li>
      <li>Allowing preemption only works for certain resource types</li>
      <li>Circular wait prevention via ordering is the most practical method</li>
      <li>Lock ordering is widely used in operating systems and databases</li>
    </ul>
  </div>
);

export default DeadlockPrevention;
