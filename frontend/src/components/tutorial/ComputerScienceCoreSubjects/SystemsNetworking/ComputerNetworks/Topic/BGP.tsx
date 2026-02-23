import React from 'react';

const BGP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      BGP (Border Gateway Protocol)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      BGP is the routing protocol that makes the internet work. It's a path-vector protocol
      used to exchange routing information between autonomous systems (AS). BGP is the only
      Exterior Gateway Protocol (EGP) in use today and is essential for inter-domain routing.
    </p>

    <h2 className="text-3xl font-bold mt-8">BGP Fundamentals</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">Value</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Type</td>
            <td className="p-3 border">Path Vector (EGP)</td>
          </tr>
          <tr>
            <td className="p-3 border">Transport</td>
            <td className="p-3 border">TCP Port 179</td>
          </tr>
          <tr>
            <td className="p-3 border">Admin Distance (eBGP)</td>
            <td className="p-3 border">20</td>
          </tr>
          <tr>
            <td className="p-3 border">Admin Distance (iBGP)</td>
            <td className="p-3 border">200</td>
          </tr>
          <tr>
            <td className="p-3 border">Metric</td>
            <td className="p-3 border">Path Attributes</td>
          </tr>
          <tr>
            <td className="p-3 border">Current Version</td>
            <td className="p-3 border">BGP-4 (RFC 4271)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">eBGP vs iBGP</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    BGP Types:

    AS 100                              AS 200
    +--------+                          +--------+
    |Router A|                          |Router C|
    +--------+                          +--------+
        |                                    |
        | iBGP                               | iBGP
        |                                    |
    +--------+          eBGP            +--------+
    |Router B|<=======================>|Router D|
    +--------+                          +--------+

    eBGP (External BGP):
    - Between different AS
    - TTL = 1 by default
    - Next-hop changes
    - AD = 20

    iBGP (Internal BGP):
    - Within same AS
    - TTL = 255
    - Next-hop preserved
    - AD = 200
    - Requires full mesh or route reflectors
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">BGP Path Selection</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    BGP Best Path Selection (in order):

    1. Highest Weight (Cisco-specific, local)
    2. Highest Local Preference (within AS)
    3. Locally Originated (network or aggregate)
    4. Shortest AS Path (fewer AS hops)
    5. Lowest Origin (IGP < EGP < Incomplete)
    6. Lowest MED (Multi-Exit Discriminator)
    7. eBGP over iBGP
    8. Lowest IGP cost to next-hop
    9. Oldest route (most stable)
    10. Lowest Router ID
    11. Lowest Neighbor IP

    Mnemonic: "We Love Oranges AS Oranges Mean Pure Refreshment"
    Weight, Local Pref, Originate, AS Path, Origin, MED, Paths, Router ID
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">BGP Path Attributes</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Attribute</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">AS_PATH</td>
            <td className="p-3 border">Well-known Mandatory</td>
            <td className="p-3 border">List of AS traversed</td>
          </tr>
          <tr>
            <td className="p-3 border">NEXT_HOP</td>
            <td className="p-3 border">Well-known Mandatory</td>
            <td className="p-3 border">IP of next-hop router</td>
          </tr>
          <tr>
            <td className="p-3 border">ORIGIN</td>
            <td className="p-3 border">Well-known Mandatory</td>
            <td className="p-3 border">How route originated</td>
          </tr>
          <tr>
            <td className="p-3 border">LOCAL_PREF</td>
            <td className="p-3 border">Well-known Discretionary</td>
            <td className="p-3 border">Preference within AS</td>
          </tr>
          <tr>
            <td className="p-3 border">MED</td>
            <td className="p-3 border">Optional Non-transitive</td>
            <td className="p-3 border">Hint to external AS</td>
          </tr>
          <tr>
            <td className="p-3 border">COMMUNITY</td>
            <td className="p-3 border">Optional Transitive</td>
            <td className="p-3 border">Route tagging</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">BGP Configuration</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Cisco IOS BGP Configuration:

    ! Basic BGP setup
    Router(config)# router bgp 100
    Router(config-router)# bgp router-id 1.1.1.1

    ! eBGP neighbor
    Router(config-router)# neighbor 192.168.1.2 remote-as 200

    ! iBGP neighbor
    Router(config-router)# neighbor 10.0.0.2 remote-as 100
    Router(config-router)# neighbor 10.0.0.2 update-source Loopback0

    ! Advertise networks
    Router(config-router)# network 172.16.0.0 mask 255.255.0.0

    Verification:
    Router# show ip bgp summary
    Router# show ip bgp
    Router# show ip bgp neighbors
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">BGP Message Types</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">OPEN</h3>
        <p className="text-sm">Establishes BGP session, exchanges AS number, router ID, capabilities.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">UPDATE</h3>
        <p className="text-sm">Advertises new routes or withdraws unreachable routes.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">KEEPALIVE</h3>
        <p className="text-sm">Maintains session, sent every 60 seconds by default.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">NOTIFICATION</h3>
        <p className="text-sm">Reports errors, terminates BGP session.</p>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>BGP is the internet's routing protocol (inter-AS)</li>
        <li>Path-vector protocol using TCP port 179</li>
        <li>eBGP between AS (AD=20), iBGP within AS (AD=200)</li>
        <li>Path selection uses multiple attributes (AS_PATH key)</li>
        <li>Policies control route advertisement and selection</li>
        <li>Essential for ISPs and large enterprises</li>
      </ul>
    </div>
  </div>
);

export default BGP;
