import React from "react";

const MutualExclusionDS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Mutual Exclusion in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Mutual exclusion is a concurrency control property introduced to prevent race conditions.
      It requires that only one process can be present in its critical section at any given
      instance of time. In distributed systems, this is achieved through message passing
      since there is no shared memory or common physical clock.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Mutual Exclusion?</h2>
    <p className="leading-relaxed">
      Mutual exclusion is an issue that frequently arises when concurrent access to shared
      resources by several sites is involved. For example, directory management where updates
      and reads must be done atomically to ensure correctness.
    </p>

    <h2 className="text-3xl font-bold mt-8">Requirements of Mutual Exclusion Algorithm</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Requirement</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">No Deadlock</td>
            <td className="p-3 border">
              Two or more sites should not endlessly wait for messages that will never arrive
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">No Starvation</td>
            <td className="p-3 border">
              Every site wanting to execute critical section should get an opportunity in finite time
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fairness</td>
            <td className="p-3 border">
              Each site should get fair chance. Requests executed in order of arrival.
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fault Tolerance</td>
            <td className="p-3 border">
              System should recognize failures and continue functioning without disruption
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Approaches to Distributed Mutual Exclusion</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">1. Token-Based</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Unique token shared among sites</li>
          <li>Site with token can enter CS</li>
          <li>Uses sequence numbers</li>
          <li>Ensures mutual exclusion</li>
        </ul>
        <p className="text-sm mt-2 italic">Example: Suzuki-Kasami Algorithm</p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">2. Non-Token Based</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Sites communicate to determine next CS</li>
          <li>Uses timestamps for ordering</li>
          <li>Maintains logical clocks</li>
          <li>Multiple message exchanges</li>
        </ul>
        <p className="text-sm mt-2 italic">Example: Ricart-Agrawala Algorithm</p>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">3. Quorum-Based</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Request permission from subset (quorum)</li>
          <li>Quorums must overlap</li>
          <li>Common site ensures exclusion</li>
          <li>Reduces message complexity</li>
        </ul>
        <p className="text-sm mt-2 italic">Example: Maekawa's Algorithm</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Token-Based Approach</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Token-Based Mutual Exclusion:

       ┌─────────────────────────────────────┐
       │              TOKEN                   │
       │   (Only holder can enter CS)        │
       └─────────────────────────────────────┘
                        │
                        ▼
    ┌──────┐       ┌──────┐       ┌──────┐
    │Site A│◄─────►│Site B│◄─────►│Site C│
    │      │       │TOKEN │       │      │
    └──────┘       └──────┘       └──────┘
                        │
                        ▼
              Site B enters Critical Section

After B exits:
    ┌──────┐       ┌──────┐       ┌──────┐
    │Site A│◄─────►│Site B│◄─────►│Site C│
    │      │       │      │       │TOKEN │
    └──────┘       └──────┘       └──────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Non-Token Based Approach</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Non-Token Based (Ricart-Agrawala):

Site A wants to enter CS:
1. Send REQUEST(timestamp) to all sites
2. Wait for REPLY from all sites
3. Enter Critical Section

    ┌──────┐                    ┌──────┐
    │Site A│ ──REQUEST(T=5)────►│Site B│
    │      │                    │      │
    │      │◄────REPLY─────────│      │
    └──────┘                    └──────┘
        │                           │
        │                           │
        ▼                           ▼
    ┌──────┐                    ┌──────┐
    │Site C│                    │Site D│
    └──────┘                    └──────┘

All replied → Site A enters CS`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison of Approaches</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Token-Based</th>
            <th className="p-3 border">Non-Token Based</th>
            <th className="p-3 border">Quorum-Based</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Messages per CS</td>
            <td className="p-3 border">O(n) or O(1)</td>
            <td className="p-3 border">2(n-1)</td>
            <td className="p-3 border">O(√n)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Synchronization Delay</td>
            <td className="p-3 border">Variable</td>
            <td className="p-3 border">1 message round</td>
            <td className="p-3 border">1 message round</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Token Loss Handling</td>
            <td className="p-3 border">Regeneration needed</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border">N/A</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fault Tolerance</td>
            <td className="p-3 border">Token loss issue</td>
            <td className="p-3 border">Site failure handling</td>
            <td className="p-3 border">Good</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Message Types in Lamport's Algorithm</h2>

    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>REQUEST:</strong> Sent to all sites to get permission for CS</li>
      <li><strong>REPLY:</strong> Sent by site to give permission to requesting site</li>
      <li><strong>RELEASE:</strong> Sent to all sites upon exiting CS</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Lamport's Algorithm - Message Complexity</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <p className="leading-relaxed">
        Lamport's Algorithm requires <strong>3(N-1)</strong> messages per critical section execution:
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
        <li>(N-1) REQUEST messages</li>
        <li>(N-1) REPLY messages</li>
        <li>(N-1) RELEASE messages</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Mutual exclusion prevents race conditions in distributed systems</li>
        <li>Three main approaches: Token-based, Non-token based, Quorum-based</li>
        <li>Token-based uses a unique token that grants CS access</li>
        <li>Non-token based uses timestamps and message exchange</li>
        <li>Quorum-based requests permission from a subset of sites</li>
        <li>Must ensure no deadlock, no starvation, and fairness</li>
      </ul>
    </div>
  </div>
);

export default MutualExclusionDS;
