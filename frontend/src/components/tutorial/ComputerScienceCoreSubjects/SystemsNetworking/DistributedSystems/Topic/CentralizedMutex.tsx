import React from "react";

const CentralizedMutex: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Centralized Mutex Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Centralized Mutex Algorithm is the simplest approach to achieving mutual exclusion in
      distributed systems. It uses a single coordinator process that manages access to the critical
      section, mimicking how mutual exclusion works in single-processor systems with a shared lock.
    </p>

    <h2 className="text-3xl font-bold mt-8">How It Works</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Centralized Mutual Exclusion:

         ┌─────────────────┐
         │   Coordinator   │
         │                 │
         │  Queue: [P2,P3] │
         │  Token: P1      │
         └────────┬────────┘
                  │
    ┌─────────────┼─────────────┐
    │             │             │
    ▼             ▼             ▼
┌───────┐    ┌───────┐    ┌───────┐
│  P1   │    │  P2   │    │  P3   │
│ (CS)  │    │(wait) │    │(wait) │
└───────┘    └───────┘    └───────┘

P1 is in Critical Section
P2, P3 are waiting in queue`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm Steps</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">Action</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1</td>
            <td className="p-3 border">Request</td>
            <td className="p-3 border">
              Process sends REQUEST message to coordinator
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2</td>
            <td className="p-3 border">Grant/Queue</td>
            <td className="p-3 border">
              Coordinator sends GRANT if CS free, else adds to queue
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3</td>
            <td className="p-3 border">Enter CS</td>
            <td className="p-3 border">
              Process enters critical section upon receiving GRANT
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4</td>
            <td className="p-3 border">Release</td>
            <td className="p-3 border">
              Process sends RELEASE message when done with CS
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">5</td>
            <td className="p-3 border">Next Grant</td>
            <td className="p-3 border">
              Coordinator grants CS to next process in queue (if any)
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Message Flow</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Scenario: P1 requests CS, then P2, then P1 releases

Time  P1            Coordinator         P2
─────────────────────────────────────────────────
 t1   │─REQUEST────►│                   │
      │             │ CS free?          │
      │             │ Yes, grant        │
 t2   │◄───GRANT────│                   │
      │             │                   │
 t3   │ Enter CS    │                   │─REQUEST────►│
      │             │                   │             │
      │             │ CS free? No       │             │
      │             │ Add P2 to queue   │             │
      │             │                   │             │
 t4   │ In CS...    │ Queue: [P2]       │ Waiting...  │
      │             │                   │             │
 t5   │─RELEASE────►│                   │             │
      │             │ Dequeue P2        │             │
      │             │                   │             │
 t6   │             │─────GRANT────────►│             │
      │             │                   │ Enter CS    │
      │             │                   │             │`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Coordinator Data Structures</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Coordinator State</h3>
      <div className="font-mono space-y-2 text-gray-900">
        <p><strong>token_holder:</strong> Process currently holding the token (or NULL)</p>
        <p><strong>request_queue:</strong> FIFO queue of waiting processes</p>
      </div>
      <div className="mt-4 font-mono text-sm text-gray-900 bg-gray-100 text-gray-900 p-4 rounded">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Coordinator Algorithm:

on_receive(REQUEST, from Pi):
    if token_holder == NULL:
        token_holder = Pi
        send(GRANT, to Pi)
    else:
        request_queue.enqueue(Pi)

on_receive(RELEASE, from Pi):
    if request_queue.is_empty():
        token_holder = NULL
    else:
        next = request_queue.dequeue()
        token_holder = next
        send(GRANT, to next)`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Message Complexity</h2>

    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Messages per Critical Section Entry</h3>
      <div className="font-mono text-gray-900">
        <p><strong>Best Case:</strong> 2 messages (REQUEST + GRANT, no contention)</p>
        <p><strong>Worst Case:</strong> 3 messages (REQUEST + GRANT + RELEASE)</p>
        <p className="mt-2"><strong>Average:</strong> 3 messages per CS execution</p>
      </div>
      <div className="mt-4">
        <p className="italic">Compare with distributed algorithms that require O(N) messages</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Advantages</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Simple to implement and understand</li>
          <li>Fair (FIFO order of requests)</li>
          <li>Low message complexity (3 messages)</li>
          <li>Easy to extend with priorities</li>
          <li>Works with any number of processes</li>
        </ul>
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Disadvantages</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Single point of failure (coordinator)</li>
          <li>Coordinator is bottleneck</li>
          <li>No fault tolerance</li>
          <li>Higher latency (all through coordinator)</li>
          <li>Coordinator crash blocks all processes</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Correctness Properties</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Satisfied?</th>
            <th className="p-3 border">Explanation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Safety (Mutual Exclusion)</td>
            <td className="p-3 border text-green-600 font-bold">Yes</td>
            <td className="p-3 border">
              Only one GRANT at a time; coordinator maintains exclusivity
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Liveness (No Deadlock)</td>
            <td className="p-3 border text-green-600 font-bold">Yes</td>
            <td className="p-3 border">
              Coordinator always responds; no circular waiting
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fairness (No Starvation)</td>
            <td className="p-3 border text-green-600 font-bold">Yes</td>
            <td className="p-3 border">
              FIFO queue ensures bounded waiting
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fault Tolerance</td>
            <td className="p-3 border text-red-600 font-bold">No</td>
            <td className="p-3 border">
              Coordinator failure halts the system
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Handling Failures</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Failure Scenarios and Solutions:

1. Coordinator Crash:
   Problem: All processes block waiting for responses
   Solution: Elect new coordinator (election algorithm)
             New coordinator polls all processes for state

2. Process Crash while in CS:
   Problem: Token is lost, other processes starve
   Solution: Coordinator uses timeout
             If no RELEASE after T seconds, revoke grant

3. Process Crash while waiting:
   Problem: Queue contains dead process
   Solution: Coordinator uses heartbeats or timeouts
             Remove unresponsive processes from queue

4. Message Loss:
   Problem: REQUEST or GRANT lost
   Solution: Acknowledgments and retransmission
             Or use reliable communication`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison with Other Algorithms</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Centralized</th>
            <th className="p-3 border">Distributed (Lamport)</th>
            <th className="p-3 border">Token Ring</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Messages per CS</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">3(N-1)</td>
            <td className="p-3 border">1 to N</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Entry Delay</td>
            <td className="p-3 border">2 msg times</td>
            <td className="p-3 border">2 msg times</td>
            <td className="p-3 border">0 to N msg times</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Single Point of Failure</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No (token loss)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complexity</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">Complex</td>
            <td className="p-3 border">Simple</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Single coordinator manages all CS requests via a FIFO queue</li>
        <li>Three message types: REQUEST, GRANT, RELEASE</li>
        <li>Only 3 messages needed per critical section entry</li>
        <li>Guarantees mutual exclusion, deadlock freedom, and fairness</li>
        <li>Main weakness: coordinator is single point of failure</li>
        <li>Coordinator crash requires election of new coordinator</li>
        <li>Best suited for small systems where simplicity is valued</li>
      </ul>
    </div>
  </div>
);

export default CentralizedMutex;
