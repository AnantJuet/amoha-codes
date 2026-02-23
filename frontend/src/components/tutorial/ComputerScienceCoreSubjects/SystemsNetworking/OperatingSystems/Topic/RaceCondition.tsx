import React from 'react';

const RaceCondition: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Race Condition
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A race condition occurs when multiple processes or threads access shared data concurrently,
      and the final outcome depends on the particular order of execution. This leads to unpredictable
      and incorrect behavior, making race conditions one of the most challenging bugs to detect and fix.
    </p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">What is a Race Condition?</h2>
    <p className="leading-relaxed">
      A race condition is a situation where:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>Two or more processes access shared data simultaneously</li>
      <li>At least one of them modifies the data</li>
      <li>The final result depends on the timing of execution</li>
      <li>The outcome is non-deterministic and unpredictable</li>
    </ul>

    {/* Visual Representation */}
    <h2 className="text-3xl font-bold mt-8">Race Condition Visualization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Process P1                    Process P2
    │                             │
    ▼                             ▼
┌───────────┐               ┌───────────┐
│ Read X=10 │               │ Read X=10 │
└─────┬─────┘               └─────┬─────┘
      │                           │
      ▼                           ▼
┌───────────┐               ┌───────────┐
│ X = X + 5 │               │ X = X - 3 │
│  (15)     │               │  (7)      │
└─────┬─────┘               └─────┬─────┘
      │                           │
      ▼                           ▼
┌───────────┐               ┌───────────┐
│ Write X   │               │ Write X   │
│ X = 15    │  ←── RACE ──→ │ X = 7     │
└───────────┘               └───────────┘

Expected: X = 10 + 5 - 3 = 12
Actual: X = 15 OR X = 7 (whoever writes last wins)
`}
      </pre>
    </div>

    {/* Classic Example */}
    <h2 className="text-3xl font-bold mt-8">Classic Example: Bank Account</h2>
    <p className="leading-relaxed">
      Consider two processes trying to update a bank account balance:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Shared variable
int balance = 1000;

// Process P1: Deposit $500     // Process P2: Withdraw $300
void deposit() {                void withdraw() {
    int temp = balance;             int temp = balance;
    temp = temp + 500;              temp = temp - 300;
    balance = temp;                 balance = temp;
}                               }`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Possible Execution Scenarios:</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">P1 (Deposit)</th>
            <th className="p-3 border">P2 (Withdraw)</th>
            <th className="p-3 border">Balance</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr className="bg-green-50 dark:bg-green-900">
            <td className="p-3 border" colSpan={4}>
              <strong>Correct Execution (Sequential)</strong>
            </td>
          </tr>
          <tr>
            <td className="p-3 border">T1</td>
            <td className="p-3 border">temp = 1000</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">1000</td>
          </tr>
          <tr>
            <td className="p-3 border">T2</td>
            <td className="p-3 border">temp = 1500</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">1000</td>
          </tr>
          <tr>
            <td className="p-3 border">T3</td>
            <td className="p-3 border">balance = 1500</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">1500</td>
          </tr>
          <tr>
            <td className="p-3 border">T4</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">temp = 1500</td>
            <td className="p-3 border">1500</td>
          </tr>
          <tr>
            <td className="p-3 border">T5</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">temp = 1200</td>
            <td className="p-3 border">1500</td>
          </tr>
          <tr>
            <td className="p-3 border">T6</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">balance = 1200</td>
            <td className="p-3 border font-bold">1200 (Correct)</td>
          </tr>
          <tr className="bg-red-50 dark:bg-red-900">
            <td className="p-3 border" colSpan={4}>
              <strong>Race Condition (Interleaved)</strong>
            </td>
          </tr>
          <tr>
            <td className="p-3 border">T1</td>
            <td className="p-3 border">temp = 1000</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">1000</td>
          </tr>
          <tr>
            <td className="p-3 border">T2</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">temp = 1000</td>
            <td className="p-3 border">1000</td>
          </tr>
          <tr>
            <td className="p-3 border">T3</td>
            <td className="p-3 border">temp = 1500</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">1000</td>
          </tr>
          <tr>
            <td className="p-3 border">T4</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">temp = 700</td>
            <td className="p-3 border">1000</td>
          </tr>
          <tr>
            <td className="p-3 border">T5</td>
            <td className="p-3 border">balance = 1500</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">1500</td>
          </tr>
          <tr>
            <td className="p-3 border">T6</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">balance = 700</td>
            <td className="p-3 border font-bold">700 (Wrong!)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Types of Race Conditions */}
    <h2 className="text-3xl font-bold mt-8">Types of Race Conditions</h2>
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
            <td className="p-3 border">Read-Modify-Write</td>
            <td className="p-3 border">Reading, modifying, and writing back a value</td>
            <td className="p-3 border">counter++</td>
          </tr>
          <tr>
            <td className="p-3 border">Check-Then-Act</td>
            <td className="p-3 border">Checking a condition then acting on it</td>
            <td className="p-3 border">if (x == null) x = new Object()</td>
          </tr>
          <tr>
            <td className="p-3 border">Compound Actions</td>
            <td className="p-3 border">Multiple operations that should be atomic</td>
            <td className="p-3 border">Transfer between accounts</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Check-Then-Act Example */}
    <h2 className="text-3xl font-bold mt-8">Check-Then-Act Race Condition</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Singleton Pattern - Vulnerable to Race Condition
class Singleton {
    static Singleton instance = null;

    static Singleton getInstance() {
        if (instance == null) {           // Check
            instance = new Singleton();   // Act
        }
        return instance;
    }
}

// Thread 1                    // Thread 2
// Check: instance == null
//                             // Check: instance == null
// Act: create instance 1
//                             // Act: create instance 2 (DUPLICATE!)
`}
      </pre>
    </div>

    {/* Causes */}
    <h2 className="text-3xl font-bold mt-8">Causes of Race Conditions</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Non-Atomic Operations:</strong> Operations that appear atomic in high-level
        language but translate to multiple machine instructions.
      </li>
      <li>
        <strong>Shared Memory:</strong> Multiple processes/threads accessing the same memory location.
      </li>
      <li>
        <strong>Preemption:</strong> Context switches occurring during critical operations.
      </li>
      <li>
        <strong>Improper Synchronization:</strong> Missing or incorrect use of synchronization primitives.
      </li>
      <li>
        <strong>Compiler/CPU Optimizations:</strong> Reordering of instructions for optimization.
      </li>
    </ul>

    {/* Consequences */}
    <h2 className="text-3xl font-bold mt-8">Consequences of Race Conditions</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Data Corruption:</strong> Incorrect values in shared variables</li>
      <li><strong>Security Vulnerabilities:</strong> Time-of-check to time-of-use (TOCTOU) attacks</li>
      <li><strong>System Crashes:</strong> Null pointer exceptions, memory corruption</li>
      <li><strong>Non-Reproducible Bugs:</strong> Intermittent failures hard to debug</li>
      <li><strong>Deadlocks:</strong> Improper synchronization may lead to deadlocks</li>
    </ul>

    {/* Prevention */}
    <h2 className="text-3xl font-bold mt-8">Preventing Race Conditions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Mutual Exclusion</td>
            <td className="p-3 border">Use locks to ensure only one process accesses critical section</td>
          </tr>
          <tr>
            <td className="p-3 border">Atomic Operations</td>
            <td className="p-3 border">Use hardware-supported atomic instructions</td>
          </tr>
          <tr>
            <td className="p-3 border">Semaphores</td>
            <td className="p-3 border">Counting semaphores for resource access control</td>
          </tr>
          <tr>
            <td className="p-3 border">Monitors</td>
            <td className="p-3 border">High-level synchronization with encapsulated shared data</td>
          </tr>
          <tr>
            <td className="p-3 border">Immutability</td>
            <td className="p-3 border">Use immutable data structures that cannot be modified</td>
          </tr>
          <tr>
            <td className="p-3 border">Thread-Local Storage</td>
            <td className="p-3 border">Each thread has its own copy of data</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Race conditions occur when the outcome depends on execution timing</li>
      <li>They are difficult to detect because they are non-deterministic</li>
      <li>Prevention requires proper synchronization mechanisms</li>
      <li>The critical section is the code segment that accesses shared resources</li>
      <li>Testing alone cannot guarantee the absence of race conditions</li>
    </ul>
  </div>
);

export default RaceCondition;
