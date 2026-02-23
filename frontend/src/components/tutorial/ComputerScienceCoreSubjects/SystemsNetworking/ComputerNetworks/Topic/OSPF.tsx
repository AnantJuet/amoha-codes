import React from 'react';

const OSPF: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      OSPF (Open Shortest Path First)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      OSPF is a link-state routing protocol that uses Dijkstra's algorithm to calculate the
      shortest path. It's an open standard (RFC 2328) widely used in enterprise networks.
      OSPF supports VLSM, fast convergence, and uses areas for scalability.
    </p>

    <h2 className="text-3xl font-bold mt-8">OSPF Characteristics</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Value</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Type</td>
            <td className="p-3 border">Link-State</td>
          </tr>
          <tr>
            <td className="p-3 border">Algorithm</td>
            <td className="p-3 border">Dijkstra (SPF)</td>
          </tr>
          <tr>
            <td className="p-3 border">Metric</td>
            <td className="p-3 border">Cost (based on bandwidth)</td>
          </tr>
          <tr>
            <td className="p-3 border">Protocol</td>
            <td className="p-3 border">IP Protocol 89</td>
          </tr>
          <tr>
            <td className="p-3 border">Admin Distance</td>
            <td className="p-3 border">110</td>
          </tr>
          <tr>
            <td className="p-3 border">Multicast</td>
            <td className="p-3 border">224.0.0.5 (AllSPF), 224.0.0.6 (DR)</td>
          </tr>
          <tr>
            <td className="p-3 border">Hello Interval</td>
            <td className="p-3 border">10 seconds (broadcast)</td>
          </tr>
          <tr>
            <td className="p-3 border">Dead Interval</td>
            <td className="p-3 border">40 seconds (4x Hello)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">OSPF Areas</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    OSPF Hierarchical Design:

                    [Internet]
                        |
                   +---------+
                   | Area 0  |  (Backbone Area)
                   | (ABRs)  |
                   +---------+
                  /    |     \\
           +------+  +------+  +------+
           |Area 1|  |Area 2|  |Area 3|
           +------+  +------+  +------+

    Area Types:
    - Area 0 (Backbone): All areas must connect
    - Standard Area: Normal LSA flooding
    - Stub Area: No external routes (default only)
    - NSSA: Not-So-Stubby, allows some externals
    - Totally Stubby: No external or inter-area

    Router Types:
    - Internal Router: All interfaces in one area
    - ABR (Area Border Router): Connects areas
    - ASBR (AS Boundary Router): Connects to other AS
    - Backbone Router: Interface in Area 0
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">OSPF Neighbor States</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    OSPF Neighbor State Machine:

    Down -> Init -> 2-Way -> Exstart -> Exchange -> Loading -> Full

    1. Down:      No hello received
    2. Init:      Hello received, but not seen self
    3. 2-Way:     Bidirectional communication
    4. Exstart:   Master/slave negotiation (DBD)
    5. Exchange:  Exchanging database descriptions
    6. Loading:   Requesting missing LSAs
    7. Full:      Fully synchronized (adjacent)

    On broadcast networks:
    - DR (Designated Router) elected
    - BDR (Backup DR) elected
    - Others become DROther
    - Full adjacency only with DR/BDR
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">OSPF Cost Calculation</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Cost = Reference Bandwidth / Interface Bandwidth</h3>
      <div className="font-mono text-sm text-gray-900">
        <p>Default Reference Bandwidth: 100 Mbps</p>
        <ul className="list-disc list-inside mt-2">
          <li>10 Mbps link: 100/10 = 10</li>
          <li>100 Mbps link: 100/100 = 1</li>
          <li>1 Gbps link: 100/1000 = 1 (minimum)</li>
          <li>10 Gbps link: 100/10000 = 1 (same!)</li>
        </ul>
        <p className="mt-2">For Gigabit+ networks, increase reference bandwidth:</p>
        <p className="font-mono text-gray-900">auto-cost reference-bandwidth 10000</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">OSPF Configuration</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Cisco IOS OSPF Configuration:

    Router(config)# router ospf 1
    Router(config-router)# router-id 1.1.1.1
    Router(config-router)# network 192.168.1.0 0.0.0.255 area 0
    Router(config-router)# network 10.0.0.0 0.255.255.255 area 1
    Router(config-router)# passive-interface GigabitEthernet0/0
    Router(config-router)# auto-cost reference-bandwidth 10000

    Interface-specific:
    Router(config)# interface GigabitEthernet0/1
    Router(config-if)# ip ospf cost 100
    Router(config-if)# ip ospf priority 255

    Verification:
    Router# show ip ospf neighbor
    Router# show ip ospf database
    Router# show ip route ospf
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">OSPF LSA Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Generated By</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Router LSA</td>
            <td className="p-3 border">Every router (intra-area)</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Network LSA</td>
            <td className="p-3 border">DR (broadcast networks)</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Summary LSA</td>
            <td className="p-3 border">ABR (inter-area routes)</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">ASBR Summary</td>
            <td className="p-3 border">ABR (path to ASBR)</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">External LSA</td>
            <td className="p-3 border">ASBR (external routes)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>OSPF is a link-state protocol using SPF algorithm</li>
        <li>Cost metric based on bandwidth (lower = better)</li>
        <li>Uses areas for scalability; Area 0 is backbone</li>
        <li>DR/BDR elected on broadcast networks</li>
        <li>Fast convergence, supports VLSM/CIDR</li>
        <li>Administrative distance: 110</li>
      </ul>
    </div>
  </div>
);

export default OSPF;
