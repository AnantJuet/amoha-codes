import React from "react";

const BerkeleyAlgorithm: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Berkeley Algorithm for Clock Synchronization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Berkeley's Algorithm is a clock synchronization technique used in distributed systems.
      Unlike Cristian's algorithm, the Berkeley algorithm assumes that no machine has an
      accurate time source. Instead, it calculates an average time from all participating
      machines to achieve synchronization.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Concept</h2>
    <p className="leading-relaxed">
      In Berkeley's Algorithm, a master node is elected from the pool of nodes in the network.
      This master node periodically polls all slave nodes for their clock times, calculates
      the average, and then instructs each node to adjust their clocks accordingly.
    </p>

    <h2 className="text-3xl font-bold mt-8">Algorithm Steps</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Berkeley Algorithm:

Step 1: Master Election
┌────────────────────────────────────────────────────────┐
│  Nodes elect a master using leader election algorithm  │
│                                                        │
│    [Node A]    [Node B]    [Node C]    [Node D]       │
│        ↓           ↓           ↓           ↓          │
│              [Node B elected as MASTER]               │
└────────────────────────────────────────────────────────┘

Step 2: Master Requests Time from Slaves
         ┌─────────┐
    ┌────│ MASTER  │────┐
    │    │ (B)     │    │
    │    │ T=3:00  │    │
    │    └────┬────┘    │
    │         │         │
    ▼         ▼         ▼
┌──────┐ ┌──────┐ ┌──────┐
│ A    │ │ C    │ │ D    │
│T=3:05│ │T=2:50│ │T=3:25│
└──────┘ └──────┘ └──────┘

Step 3: Slaves Respond with Their Times
┌──────┐ ┌──────┐ ┌──────┐
│ A    │ │ C    │ │ D    │
│ +5   │ │ -10  │ │ +25  │
└──┬───┘ └──┬───┘ └──┬───┘
   │        │        │
   └────────┼────────┘
            ▼
      ┌─────────┐
      │ MASTER  │
      │ (B)     │
      └─────────┘

Step 4: Master Calculates Average
Average = (0 + 5 + (-10) + 25) / 4 = 20/4 = +5 minutes

Step 5: Master Sends Adjustments
      ┌─────────┐
      │ MASTER  │ Adjust by +5
      │ (B)     │
      └────┬────┘
           │
    ┌──────┼──────┐
    │      │      │
    ▼      ▼      ▼
┌──────┐┌──────┐┌──────┐
│ A: 0 ││C:+15 ││D:-20 │
└──────┘└──────┘└──────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detailed Steps</h2>

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
            <td className="p-3 border">Master Election</td>
            <td className="p-3 border">
              A master node is chosen using an election algorithm
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2</td>
            <td className="p-3 border">Poll Slaves</td>
            <td className="p-3 border">
              Master periodically requests clock time from all slave nodes
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3</td>
            <td className="p-3 border">Receive Times</td>
            <td className="p-3 border">
              Slave nodes respond with their current system clock times
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4</td>
            <td className="p-3 border">Calculate Average</td>
            <td className="p-3 border">
              Master calculates average of all times (including its own)
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">5</td>
            <td className="p-3 border">Send Adjustments</td>
            <td className="p-3 border">
              Master sends adjustment values to each node
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">6</td>
            <td className="p-3 border">Apply Adjustments</td>
            <td className="p-3 border">
              Each node adjusts its clock by the received value
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Average Calculation</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Pseudocode:</h4>
      <div className="font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`1. total_diff = 0
2. n = number of nodes (including master)
3. For each node i (including master):
     receive clock_time[i]
4. master_time = get_system_time()
5. For each node i:
     time_diff[i] = clock_time[i] - master_time
     total_diff += time_diff[i]
6. average_diff = total_diff / n
7. adjusted_time = master_time + average_diff
8. Broadcast adjustment to all nodes
9. Each node adjusts its clock accordingly`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison with Cristian's Algorithm</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Cristian's</th>
            <th className="p-3 border">Berkeley</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Time Source</td>
            <td className="p-3 border">Requires accurate time server</td>
            <td className="p-3 border">No accurate time source needed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Approach</td>
            <td className="p-3 border">Client requests from server</td>
            <td className="p-3 border">Master polls all nodes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Result</td>
            <td className="p-3 border">Sync to server's time</td>
            <td className="p-3 border">Sync to average time</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Initiator</td>
            <td className="p-3 border">Client-initiated</td>
            <td className="p-3 border">Master-initiated</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Characteristics</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Centralized Coordinator</h3>
        <p className="leading-relaxed">
          Uses a centralized time coordinator (master) responsible for maintaining
          and distributing the average time to all client machines.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Clock Adjustment</h3>
        <p className="leading-relaxed">
          The algorithm adjusts each machine's clock based on the difference
          between its local time and the calculated average.
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages</h2>

    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li>No need for an accurate external time source</li>
      <li>Achieves internal consistency among all nodes</li>
      <li>Fault tolerant with master re-election</li>
      <li>Handles faulty clocks by eliminating outliers</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>

    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li>Resulting time may not be accurate to real-world time</li>
      <li>Requires master election mechanism</li>
      <li>Single point of failure if master crashes</li>
      <li>Communication overhead for polling all nodes</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Master is elected using leader election algorithm</li>
        <li>Master polls all nodes and calculates average time</li>
        <li>Each node receives adjustment value, not absolute time</li>
        <li>No external time source required - internal consistency is goal</li>
        <li>Can eliminate outliers (faulty clocks) from average calculation</li>
        <li>Uses Cristian's algorithm for time fetching from slaves</li>
      </ul>
    </div>
  </div>
);

export default BerkeleyAlgorithm;
