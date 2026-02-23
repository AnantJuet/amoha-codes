import React from 'react';

const DistanceVectorRouting: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Distance Vector Routing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Distance Vector routing is one of the two main classes of routing protocols. Routers using
      distance vector protocols share their entire routing table with neighbors periodically,
      and each router calculates the best path based on distance (usually hop count) and
      direction (vector) to destinations.
    </p>

    <h2 className="text-3xl font-bold mt-8">How It Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Distance Vector Algorithm (Bellman-Ford):

    For each destination D:
      For each neighbor N:
        New_Distance = Cost_to_N + N's_Distance_to_D
        If New_Distance < Current_Distance_to_D:
          Update route via N

    Example Network:
         [A]---1---[B]---2---[C]
          |                   |
          3                   1
          |                   |
         [D]-------2--------[E]

    Router A's perspective:
    To B: 1 hop (direct)
    To C: 3 hops (via B)
    To D: 3 hops (direct)
    To E: 4 hops (via D or via B-C)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Periodic Updates</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Routing Update Exchange:

    Time T:
    Router A                    Router B
    +-------------+             +-------------+
    | Dest | Dist |             | Dest | Dist |
    +------+------+             +------+------+
    | B    | 1    |   ------->  | A    | 1    |
    | C    | INF  |   <-------  | C    | 2    |
    | D    | 3    |             | D    | INF  |
    +------+------+             +------+------+

    After Update:
    Router A learns:
    - To reach C: go via B, distance = 1 + 2 = 3

    Typical update interval:
    - RIP: 30 seconds
    - Sends entire routing table to neighbors
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Count to Infinity Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Count to Infinity Problem:

    Initial:  [A]---[B]---[C]
              A knows: C via B, distance 2
              B knows: C direct, distance 1

    Link B-C fails:
              [A]---[B]   X   [C]

    Bad convergence:
    1. B loses route to C
    2. A tells B: "I can reach C in 2 hops"
    3. B thinks: "C via A = 3 hops"
    4. B tells A: "I can reach C in 3 hops"
    5. A thinks: "C via B = 4 hops"
    ... continues until infinity (or max hop count)

    Solution: Set maximum hop count (RIP uses 16 = infinity)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Loop Prevention Techniques</h2>
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
            <td className="p-3 border">Split Horizon</td>
            <td className="p-3 border">Never advertise a route back to where you learned it</td>
          </tr>
          <tr>
            <td className="p-3 border">Route Poisoning</td>
            <td className="p-3 border">Advertise failed routes with infinite metric</td>
          </tr>
          <tr>
            <td className="p-3 border">Poison Reverse</td>
            <td className="p-3 border">Send infinite metric back to source</td>
          </tr>
          <tr>
            <td className="p-3 border">Hold-down Timer</td>
            <td className="p-3 border">Ignore updates for failed routes temporarily</td>
          </tr>
          <tr>
            <td className="p-3 border">Triggered Updates</td>
            <td className="p-3 border">Send updates immediately on change</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Characteristics</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Simple to configure</li>
          <li>Low CPU usage</li>
          <li>Works well for small networks</li>
          <li>Easy to understand</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Disadvantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Slow convergence</li>
          <li>High bandwidth usage</li>
          <li>Count to infinity problem</li>
          <li>Limited scalability</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Distance Vector Protocols</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-2">
        <li><strong>RIP (v1, v2):</strong> Uses hop count, max 15 hops</li>
        <li><strong>IGRP:</strong> Cisco proprietary (obsolete)</li>
        <li><strong>EIGRP:</strong> Cisco enhanced (hybrid, uses DUAL)</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Routers share entire routing table with neighbors</li>
        <li>Uses Bellman-Ford algorithm</li>
        <li>Metric is typically hop count</li>
        <li>Suffers from count-to-infinity problem</li>
        <li>Loop prevention: split horizon, route poisoning</li>
        <li>RIP is the most common distance vector protocol</li>
      </ul>
    </div>
  </div>
);

export default DistanceVectorRouting;
