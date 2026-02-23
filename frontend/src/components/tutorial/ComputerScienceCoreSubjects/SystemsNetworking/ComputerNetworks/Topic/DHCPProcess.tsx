import React from 'react';

const DHCPProcess: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      DHCP Process (DORA)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The DHCP process follows a four-step message exchange known as DORA: Discover, Offer,
      Request, and Acknowledge. This process allows a client with no IP address to obtain
      configuration from a DHCP server on the network.
    </p>

    <h2 className="text-3xl font-bold mt-8">DORA Process Overview</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">Message</th>
            <th className="p-3 border">Direction</th>
            <th className="p-3 border">Type</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">D</td>
            <td className="p-3 border">DHCP Discover</td>
            <td className="p-3 border">Client to Server</td>
            <td className="p-3 border">Broadcast</td>
          </tr>
          <tr>
            <td className="p-3 border">O</td>
            <td className="p-3 border">DHCP Offer</td>
            <td className="p-3 border">Server to Client</td>
            <td className="p-3 border">Unicast/Broadcast</td>
          </tr>
          <tr>
            <td className="p-3 border">R</td>
            <td className="p-3 border">DHCP Request</td>
            <td className="p-3 border">Client to Server</td>
            <td className="p-3 border">Broadcast</td>
          </tr>
          <tr>
            <td className="p-3 border">A</td>
            <td className="p-3 border">DHCP Acknowledge</td>
            <td className="p-3 border">Server to Client</td>
            <td className="p-3 border">Unicast/Broadcast</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">DORA Message Exchange</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    DHCP DORA Process:

    Client                              DHCP Server
    (0.0.0.0)                          (192.168.1.1)
       |                                     |
       |-- 1. DISCOVER (Broadcast) --------->|
       |   Src: 0.0.0.0:68                   |
       |   Dst: 255.255.255.255:67           |
       |   "Any DHCP server out there?"      |
       |                                     |
       |<-- 2. OFFER ------------------------|
       |   "Here's 192.168.1.100 for you"    |
       |   + Subnet mask, gateway, DNS       |
       |   + Lease time: 24 hours            |
       |                                     |
       |-- 3. REQUEST (Broadcast) ---------->|
       |   "I'll take 192.168.1.100"         |
       |   (Broadcast so other servers know) |
       |                                     |
       |<-- 4. ACK --------------------------|
       |   "192.168.1.100 is yours!"         |
       |   Lease confirmed                   |
       |                                     |
    Client configures interface
    with received parameters
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Step-by-Step Details</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">1. DHCP Discover</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Client broadcasts on local network</li>
          <li>Source IP: 0.0.0.0 (client has no IP yet)</li>
          <li>Destination: 255.255.255.255 (broadcast)</li>
          <li>Contains clients MAC address</li>
          <li>May include requested IP (from previous lease)</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">2. DHCP Offer</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Server responds with IP offer</li>
          <li>Includes all configuration parameters</li>
          <li>Multiple servers may send offers</li>
          <li>IP is reserved but not yet assigned</li>
          <li>Offer valid for short time</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">3. DHCP Request</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Client chooses one offer (usually first)</li>
          <li>Broadcasts acceptance to all servers</li>
          <li>Other servers release their reserved IPs</li>
          <li>Contains server identifier</li>
          <li>Also used for lease renewal</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">4. DHCP Acknowledge</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Server confirms the lease</li>
          <li>Client can now use the IP address</li>
          <li>Lease timer starts</li>
          <li>If NAK received, client restarts process</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multiple DHCP Servers</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Scenario with Multiple Servers:

    Client              Server A              Server B
       |                   |                     |
       |-- DISCOVER ------>|-------------------->|
       |                   |                     |
       |<-- OFFER ---------|                     |
       |   (192.168.1.100) |                     |
       |                   |                     |
       |<----------------------------OFFER -----|
       |                        (192.168.1.150) |
       |                   |                     |
       |-- REQUEST ------->|-------------------->|
       |  (Choosing A's    |                     |
       |   192.168.1.100)  |                     |
       |                   |                     |
       |<-- ACK -----------|                     |
       |                   |      Server B       |
       |                   |   releases .150     |

    Client typically accepts first offer received.
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Renewal Process</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Lease Renewal (at T1 = 50% of lease):

    Client                              Server
       |                                   |
       |-- REQUEST (Unicast) ------------->|
       |   "Renew my 192.168.1.100 lease"  |
       |                                   |
       |<-- ACK ---------------------------|
       |   "Lease renewed for 24 hours"    |


    Rebinding (at T2 = 87.5% of lease):

    If original server unreachable at T1:

    Client                  Any DHCP Server
       |                          |
       |-- REQUEST (Broadcast) -->|
       |   "Anyone renew my lease?"|
       |                          |
       |<-- ACK ------------------|
       |   New or renewed lease   |
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DHCP Message Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">DISCOVER</td>
            <td className="p-3 border">Find DHCP servers</td>
          </tr>
          <tr>
            <td className="p-3 border">OFFER</td>
            <td className="p-3 border">Server offers IP lease</td>
          </tr>
          <tr>
            <td className="p-3 border">REQUEST</td>
            <td className="p-3 border">Client requests/renews IP</td>
          </tr>
          <tr>
            <td className="p-3 border">ACK</td>
            <td className="p-3 border">Server confirms lease</td>
          </tr>
          <tr>
            <td className="p-3 border">NAK</td>
            <td className="p-3 border">Server denies request</td>
          </tr>
          <tr>
            <td className="p-3 border">RELEASE</td>
            <td className="p-3 border">Client releases IP early</td>
          </tr>
          <tr>
            <td className="p-3 border">DECLINE</td>
            <td className="p-3 border">Client rejects offered IP</td>
          </tr>
          <tr>
            <td className="p-3 border">INFORM</td>
            <td className="p-3 border">Request params only (has IP)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>DORA: Discover, Offer, Request, Acknowledge</li>
        <li>Discover and Request are broadcast</li>
        <li>Client accepts first offer typically</li>
        <li>Request broadcast informs all servers</li>
        <li>Renewal at T1 (50%), Rebind at T2 (87.5%)</li>
        <li>NAK causes client to restart process</li>
      </ul>
    </div>
  </div>
);

export default DHCPProcess;
