import React from 'react';

const CircuitSwitching: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Circuit Switching
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Circuit switching is a switching technique where a dedicated communication path is established
      between the source and destination before any data transfer takes place. This physical or
      logical path remains reserved exclusively for that communication session until it is terminated.
    </p>

    <h2 className="text-3xl font-bold mt-8">How Circuit Switching Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Three Phases of Circuit Switching:

    1. CIRCUIT ESTABLISHMENT
       Caller (A) ----[Setup Signal]----> Switch1 --> Switch2 --> Callee (B)
                  <---[Acknowledgment]----
       (Dedicated path is reserved)

    2. DATA TRANSFER
       A =============================================> B
         (Continuous dedicated connection)
         (Full bandwidth available throughout)

    3. CIRCUIT TERMINATION
       A ----[Release Signal]----> Switches ----> B
       (Resources are freed for other calls)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Circuit Switching</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Space-Division Switching</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Physical separation of circuits</li>
          <li>Uses crossbar switches</li>
          <li>Each connection uses separate path</li>
          <li>Simple but requires many connections</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Time-Division Switching</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Paths share same physical wire</li>
          <li>Different time slots for each circuit</li>
          <li>More efficient use of resources</li>
          <li>Used in modern digital switches</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Circuit Switching Example: Telephone Call</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Telephone Network Example:

    Phone A                                           Phone B
       |                                                 |
    Local ----[Trunk Lines]---- Tandem ----[Trunk]---- Local
    Switch                      Switch               Switch
       |                                                 |
    [1] Dial number                                      |
    [2] Setup request propagates through network         |
    [3]                                                  Ringing
    [4] Answer establishes circuit                       |
    [5] Voice data flows bidirectionally <=============> |
    [6] Hang up releases the circuit                     |

    Resources reserved: ~64 Kbps (DS0 channel) per direction
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Characteristics</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Dedicated Path:</strong> End-to-end connection reserved for the session</li>
      <li><strong>Guaranteed Bandwidth:</strong> Fixed bandwidth throughout the call</li>
      <li><strong>Constant Delay:</strong> Predictable latency since path is fixed</li>
      <li><strong>No Congestion During Call:</strong> Once connected, no competition for resources</li>
      <li><strong>Connection-Oriented:</strong> Requires setup before communication</li>
      <li><strong>Transparent:</strong> No header overhead during data transfer</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Advantages vs Disadvantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Guaranteed bandwidth once connected</li>
          <li>No delay variation (jitter)</li>
          <li>Simple data transfer (no routing decisions)</li>
          <li>Good for real-time voice communication</li>
          <li>Data arrives in order</li>
          <li>No packet overhead</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2">Disadvantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Inefficient - bandwidth wasted during silence</li>
          <li>Connection setup delay</li>
          <li>Resources blocked even when idle</li>
          <li>Dedicated resources per connection</li>
          <li>Not suitable for bursty data traffic</li>
          <li>Entire circuit fails if any link fails</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>PSTN:</strong> Public Switched Telephone Network (traditional landlines)</li>
      <li><strong>ISDN:</strong> Integrated Services Digital Network</li>
      <li><strong>Dedicated Leased Lines:</strong> Private point-to-point connections</li>
      <li><strong>Analog Modems:</strong> Dial-up Internet connections (legacy)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Circuit vs Packet Switching</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Circuit Switching</th>
            <th className="p-3 border">Packet Switching</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Path</td>
            <td className="p-3 border">Dedicated</td>
            <td className="p-3 border">Shared</td>
          </tr>
          <tr>
            <td className="p-3 border">Bandwidth</td>
            <td className="p-3 border">Fixed/Reserved</td>
            <td className="p-3 border">Dynamic/Shared</td>
          </tr>
          <tr>
            <td className="p-3 border">Efficiency</td>
            <td className="p-3 border">Lower</td>
            <td className="p-3 border">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border">Delay</td>
            <td className="p-3 border">Constant</td>
            <td className="p-3 border">Variable</td>
          </tr>
          <tr>
            <td className="p-3 border">Best For</td>
            <td className="p-3 border">Voice calls</td>
            <td className="p-3 border">Data traffic</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Dedicated path established before data transfer</li>
        <li>Three phases: Setup, Data Transfer, Teardown</li>
        <li>Guarantees bandwidth and constant delay</li>
        <li>Inefficient for bursty traffic (wastes bandwidth)</li>
        <li>Used in traditional telephone networks (PSTN)</li>
        <li>Being replaced by VoIP (packet-based voice)</li>
      </ul>
    </div>
  </div>
);

export default CircuitSwitching;
