import React from "react";

const FaultTypes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Faults in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Understanding the different types of faults that can occur in distributed
      systems is essential for designing appropriate fault tolerance mechanisms.
      Faults can be classified based on their duration, behavior, and the
      component affected.
    </p>

    <h2 className="text-3xl font-bold mt-8">Classification by Duration</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Fault Type</th>
            <th className="p-3 border">Duration</th>
            <th className="p-3 border">Characteristics</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Transient</td>
            <td className="p-3 border">Very short</td>
            <td className="p-3 border">
              Occurs once and disappears
            </td>
            <td className="p-3 border">Cosmic ray bit flip, brief interference</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Intermittent</td>
            <td className="p-3 border">Recurring</td>
            <td className="p-3 border">
              Appears, vanishes, and reappears
            </td>
            <td className="p-3 border">Loose connection, overheating</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Permanent</td>
            <td className="p-3 border">Continuous</td>
            <td className="p-3 border">
              Persists until component is replaced
            </td>
            <td className="p-3 border">Disk failure, burnt circuit</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fault Duration Visualization</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Time →  ──────────────────────────────────────────────────▶

Transient Fault:
Normal   ████████░████████████████████████████████████████
                 ↑
              Single occurrence

Intermittent Fault:
Normal   ████████░░███████░░░█████████░░█████████████████
                 ↑       ↑           ↑
              Recurring unpredictably

Permanent Fault:
Normal   ████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                 ↑
              Failure persists until repair

████ = Normal operation
░    = Fault active`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Classification by Component</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Hardware Faults</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>CPU failures</li>
          <li>Memory corruption</li>
          <li>Disk failures</li>
          <li>Network card issues</li>
          <li>Power supply problems</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Software Faults</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Programming bugs</li>
          <li>Race conditions</li>
          <li>Memory leaks</li>
          <li>Deadlocks</li>
          <li>Buffer overflows</li>
        </ul>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Network Faults</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Link failures</li>
          <li>Router crashes</li>
          <li>Packet loss</li>
          <li>Network partitions</li>
          <li>Congestion</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Failure Semantics</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Failure Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Detectability</th>
            <th className="p-3 border">Handling Difficulty</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Crash Failure</td>
            <td className="p-3 border">
              Process halts and stops responding
            </td>
            <td className="p-3 border">Usually detectable</td>
            <td className="p-3 border">Easy</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Omission Failure</td>
            <td className="p-3 border">
              Process fails to send/receive messages
            </td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Moderate</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Timing Failure</td>
            <td className="p-3 border">
              Response outside acceptable time bounds
            </td>
            <td className="p-3 border">Requires timing info</td>
            <td className="p-3 border">Moderate</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Response Failure</td>
            <td className="p-3 border">
              Incorrect value or state transition
            </td>
            <td className="p-3 border">Difficult</td>
            <td className="p-3 border">Hard</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Byzantine Failure</td>
            <td className="p-3 border">
              Arbitrary/malicious behavior
            </td>
            <td className="p-3 border">Very difficult</td>
            <td className="p-3 border">Very hard</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Failure Hierarchy</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Failure Model Hierarchy (Severity Increasing):

┌─────────────────────────────────────────────────────────┐
│                    BYZANTINE                             │
│   (Arbitrary behavior, may send conflicting info)       │
│   ┌─────────────────────────────────────────────────┐   │
│   │              RESPONSE FAILURE                    │   │
│   │   (Incorrect value or state transition)         │   │
│   │   ┌─────────────────────────────────────────┐   │   │
│   │   │           TIMING FAILURE                 │   │   │
│   │   │   (Response too early or too late)      │   │   │
│   │   │   ┌─────────────────────────────────┐   │   │   │
│   │   │   │       OMISSION FAILURE           │   │   │   │
│   │   │   │   (Send or receive omission)    │   │   │   │
│   │   │   │   ┌─────────────────────────┐   │   │   │   │
│   │   │   │   │     CRASH FAILURE        │   │   │   │   │
│   │   │   │   │   (Process stops)       │   │   │   │   │
│   │   │   │   └─────────────────────────┘   │   │   │   │
│   │   │   └─────────────────────────────────┘   │   │   │
│   │   └─────────────────────────────────────────┘   │   │
│   └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘

Each outer level includes all inner failure modes.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Omission Failures - Details</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Send Omission</h3>
        <p className="leading-relaxed mb-2">
          Process completes computation but fails to send the result message.
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Output buffer overflow</li>
          <li>Network interface failure</li>
          <li>Process crash after computation</li>
        </ul>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Receive Omission</h3>
        <p className="leading-relaxed mb-2">
          Message arrives at process but is not delivered to application.
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Input buffer overflow</li>
          <li>Interrupt handling failure</li>
          <li>Application not listening</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Network Partition</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Network Partition Scenario:

Before Partition:
┌───────────────────────────────────────────────────────┐
│                    Network                             │
│  ┌────┐    ┌────┐    ┌────┐    ┌────┐    ┌────┐     │
│  │ P1 │────│ P2 │────│ P3 │────│ P4 │────│ P5 │     │
│  └────┘    └────┘    └────┘    └────┘    └────┘     │
└───────────────────────────────────────────────────────┘

After Partition:
┌─────────────────────┐   ╳   ┌─────────────────────────┐
│  Partition A        │       │   Partition B            │
│  ┌────┐    ┌────┐  │       │  ┌────┐    ┌────┐       │
│  │ P1 │────│ P2 │  │       │  │ P4 │────│ P5 │       │
│  └────┘    └────┘  │       │  └────┘    └────┘       │
│         ┌────┐     │       │                          │
│         │ P3 │     │       │                          │
│         └────┘     │       │                          │
└─────────────────────┘       └─────────────────────────┘

P1, P2, P3 can communicate with each other
P4, P5 can communicate with each other
No communication between partitions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fault Correlation</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Correlation Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Independent</td>
            <td className="p-3 border">
              Faults occur independently
            </td>
            <td className="p-3 border">Random disk failures</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Correlated</td>
            <td className="p-3 border">
              One fault increases probability of others
            </td>
            <td className="p-3 border">Same software bug on all replicas</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Common Cause</td>
            <td className="p-3 border">
              Single root cause affects multiple components
            </td>
            <td className="p-3 border">Power outage, natural disaster</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Transient faults are temporary; permanent faults require repair</li>
        <li>Intermittent faults are hardest to diagnose and reproduce</li>
        <li>Failure types form a hierarchy from crash to Byzantine</li>
        <li>Network partitions are a special type of omission failure</li>
        <li>Correlated faults can defeat redundancy-based fault tolerance</li>
        <li>Understanding fault types helps design appropriate countermeasures</li>
      </ul>
    </div>
  </div>
);

export default FaultTypes;
