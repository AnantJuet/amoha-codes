import React from 'react';

const LinkStateRouting: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Link State Routing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Link State routing is a class of routing protocols where each router builds a complete
      map of the network topology. Routers share information about their directly connected
      links with all other routers, and each router independently calculates the best paths
      using algorithms like Dijkstra's shortest path.
    </p>

    <h2 className="text-3xl font-bold mt-8">How It Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Link State Routing Process:

    1. DISCOVER NEIGHBORS
       - Hello packets to find adjacent routers
       - Build neighbor table

    2. MEASURE LINK COST
       - Calculate metric to each neighbor
       - Cost based on bandwidth, delay, etc.

    3. BUILD LINK STATE PACKET (LSP)
       - Contains: Router ID, neighbors, link costs
       - Each router creates its own LSP

    4. FLOOD LSPs TO ALL ROUTERS
       - Reliable flooding mechanism
       - All routers receive all LSPs

    5. BUILD TOPOLOGY DATABASE
       - LSDB contains all LSPs
       - Complete network map

    6. CALCULATE SHORTEST PATHS
       - Run Dijkstra's algorithm
       - Build routing table
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Link State Database (LSDB)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Network Topology:
              1
         [A]-----[B]
          |       |
        2 |       | 3
          |       |
         [C]-----[D]
              2

    Each router's LSP:
    Router A: Connected to B(cost 1), C(cost 2)
    Router B: Connected to A(cost 1), D(cost 3)
    Router C: Connected to A(cost 2), D(cost 2)
    Router D: Connected to B(cost 3), C(cost 2)

    After flooding, every router has complete LSDB:
    +--------+----------+------+
    | Router | Neighbor | Cost |
    +--------+----------+------+
    | A      | B        | 1    |
    | A      | C        | 2    |
    | B      | A        | 1    |
    | B      | D        | 3    |
    | C      | A        | 2    |
    | C      | D        | 2    |
    | D      | B        | 3    |
    | D      | C        | 2    |
    +--------+----------+------+
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Dijkstra's Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Dijkstra's Shortest Path Algorithm:

    From Router A's perspective:

    Step 1: Start at A (distance 0)
            Tentative: B=1, C=2

    Step 2: Select lowest (B=1), mark permanent
            From B: D = 1+3 = 4
            Tentative: C=2, D=4

    Step 3: Select lowest (C=2), mark permanent
            From C: D = 2+2 = 4 (no improvement)
            Tentative: D=4

    Step 4: Select D=4, mark permanent

    Final routing table at A:
    Dest | Cost | Next Hop
    -----+------+---------
    B    | 1    | B
    C    | 2    | C
    D    | 4    | B or C
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Link State vs Distance Vector</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Link State</th>
            <th className="p-3 border">Distance Vector</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Knowledge</td>
            <td className="p-3 border">Complete topology</td>
            <td className="p-3 border">Only neighbors</td>
          </tr>
          <tr>
            <td className="p-3 border">Updates</td>
            <td className="p-3 border">Link info only</td>
            <td className="p-3 border">Full routing table</td>
          </tr>
          <tr>
            <td className="p-3 border">Algorithm</td>
            <td className="p-3 border">Dijkstra (SPF)</td>
            <td className="p-3 border">Bellman-Ford</td>
          </tr>
          <tr>
            <td className="p-3 border">Convergence</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border">Slow</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory</td>
            <td className="p-3 border">Higher (LSDB)</td>
            <td className="p-3 border">Lower</td>
          </tr>
          <tr>
            <td className="p-3 border">CPU</td>
            <td className="p-3 border">Higher (SPF calc)</td>
            <td className="p-3 border">Lower</td>
          </tr>
          <tr>
            <td className="p-3 border">Scalability</td>
            <td className="p-3 border">Better</td>
            <td className="p-3 border">Limited</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Link State Protocols</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">OSPF</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Open standard (RFC 2328)</li>
          <li>Uses areas for scalability</li>
          <li>Cost based on bandwidth</li>
          <li>Fast convergence</li>
          <li>Supports VLSM/CIDR</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">IS-IS</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>ISO standard</li>
          <li>Used by large ISPs</li>
          <li>Two-level hierarchy</li>
          <li>Very scalable</li>
          <li>Protocol independent</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Each router has complete network topology map</li>
        <li>LSPs flooded to all routers in the area</li>
        <li>Uses Dijkstra's algorithm for path calculation</li>
        <li>Faster convergence than distance vector</li>
        <li>Higher memory and CPU requirements</li>
        <li>OSPF and IS-IS are common link state protocols</li>
      </ul>
    </div>
  </div>
);

export default LinkStateRouting;
