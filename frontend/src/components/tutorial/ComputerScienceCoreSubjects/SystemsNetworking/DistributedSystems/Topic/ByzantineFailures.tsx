import React from "react";

const ByzantineFailures: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Byzantine Failures in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Byzantine failures represent the most severe type of failure in distributed
      systems. A Byzantine faulty process may behave arbitrarily - it may send
      conflicting information to different processes, lie, or behave maliciously.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Byzantine Generals Problem</h2>

    <p className="leading-relaxed">
      The Byzantine Generals Problem, introduced by Lamport, Shostak, and Pease
      (1982), illustrates the challenge of reaching consensus when some participants
      may be traitors (faulty or malicious).
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`The Byzantine Generals Problem:

      ┌─────────────┐
      │  Commander  │ (May be traitor)
      └──────┬──────┘
             │
    ┌────────┼────────┐
    │        │        │
    ▼        ▼        ▼
┌──────┐ ┌──────┐ ┌──────┐
│Lt. A │ │Lt. B │ │Lt. C │
│      │ │      │ │(Traitor)
└──────┘ └──────┘ └──────┘

Problem: Loyal generals must agree on same action
(ATTACK or RETREAT) despite traitors sending
conflicting messages.

Traitor may tell A: "Attack!"
Traitor may tell B: "Retreat!"`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Byzantine Fault Tolerance (BFT)</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Requirements for BFT</h3>
      <p className="leading-relaxed">
        To tolerate <strong>f</strong> Byzantine faulty processes, the system
        needs at least <strong>3f + 1</strong> total processes.
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-1 mt-4">
        <li>For f = 1 fault: need 4 nodes minimum</li>
        <li>For f = 2 faults: need 7 nodes minimum</li>
        <li>For f = 3 faults: need 10 nodes minimum</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Byzantine Behavior</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Behavior</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Equivocation</td>
            <td className="p-3 border">
              Sending different messages to different processes
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Lying</td>
            <td className="p-3 border">
              Sending intentionally incorrect information
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Collusion</td>
            <td className="p-3 border">
              Multiple faulty processes coordinating attacks
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Selective Silence</td>
            <td className="p-3 border">
              Responding to some processes but not others
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Byzantine Fault Tolerance (PBFT)</h2>

    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">PBFT Protocol</h3>
      <p className="leading-relaxed">
        PBFT (Castro and Liskov, 1999) is a practical algorithm that provides
        Byzantine fault tolerance with reasonable performance overhead.
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-1 mt-4">
        <li>Uses a primary (leader) and backup replicas</li>
        <li>Three-phase protocol: pre-prepare, prepare, commit</li>
        <li>Tolerates f faults with 3f + 1 replicas</li>
        <li>Used in permissioned blockchains</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of BFT</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Blockchain</h3>
        <p className="leading-relaxed">
          Cryptocurrencies and distributed ledgers use BFT consensus to
          maintain consistency despite malicious participants.
        </p>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Critical Systems</h3>
        <p className="leading-relaxed">
          Aircraft systems, nuclear plants, and space missions use BFT
          for safety-critical decision making.
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Byzantine failures are arbitrary and may be malicious</li>
        <li>Need 3f + 1 nodes to tolerate f Byzantine faults</li>
        <li>Byzantine Generals Problem illustrates the consensus challenge</li>
        <li>PBFT provides practical Byzantine fault tolerance</li>
        <li>BFT is essential for adversarial environments like blockchain</li>
      </ul>
    </div>
  </div>
);

export default ByzantineFailures;
