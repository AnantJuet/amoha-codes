import React from 'react';

const NetworkComponents: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Network Components and Devices
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Network components are the hardware devices that enable computers and other devices to communicate
      and share resources over a network. These components include Network Interface Cards (NICs), hubs,
      switches, routers, modems, and various types of cables. Each component serves a specific purpose in
      the network infrastructure and operates at different layers of the OSI model.
    </p>

    {/* Overview Diagram */}
    <h2 className="text-3xl font-bold mt-8">Network Infrastructure Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  Network Infrastructure:

  +--------+     +--------+     +--------+
  |  PC 1  |     |  PC 2  |     |  PC 3  |
  | (NIC)  |     | (NIC)  |     | (NIC)  |
  +---+----+     +---+----+     +---+----+
      |              |              |
      +------+-------+------+------+
             |              |
         +---+---+      +---+---+
         | Switch|      |  Hub  |  (Layer 2/1)
         +---+---+      +---+---+
             |              |
         +---+---+      +---+---+
         |Router |------| Modem |  (Layer 3)
         +---+---+      +---+---+
             |              |
         +---+---+      +---+---+
         |Firewall|     | Bridge|
         +-------+      +-------+
             |
        [Internet]
`}</pre>
    </div>

    {/* NIC */}
    <h2 className="text-3xl font-bold mt-8">1. Network Interface Card (NIC)</h2>
    <p className="leading-relaxed">
      A Network Interface Card (NIC), also known as a network adapter or LAN card, is a hardware component
      that allows a computer to connect to a network. Every NIC has a unique MAC (Media Access Control)
      address that identifies the device on the network. NICs operate at Layer 1 (Physical) and Layer 2
      (Data Link) of the OSI model.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  NIC (Network Interface Card):

  +------------------------------------------+
  |  Computer Motherboard                    |
  |                                          |
  |    +---------------------------+         |
  |    |         NIC               |         |
  |    |   +------------------+    |         |
  |    |   | MAC: AA:BB:CC:DD |    |         |
  |    |   |      EE:FF       |    |         |
  |    |   +------------------+    |         |
  |    |   [ RJ-45 Port ]----+----|--> To Network
  |    +---------------------------+         |
  |                                          |
  +------------------------------------------+

  Types: Ethernet NIC, Wireless NIC (WNIC), Fiber NIC
`}</pre>
    </div>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">OSI Layer</td>
            <td className="p-3 border">Layer 1 (Physical) and Layer 2 (Data Link)</td>
          </tr>
          <tr>
            <td className="p-3 border">MAC Address</td>
            <td className="p-3 border">48-bit unique hardware address (e.g., AA:BB:CC:DD:EE:FF)</td>
          </tr>
          <tr>
            <td className="p-3 border">Functions</td>
            <td className="p-3 border">Data conversion, signal encoding, packet transmission/reception</td>
          </tr>
          <tr>
            <td className="p-3 border">Types</td>
            <td className="p-3 border">Ethernet (wired), Wi-Fi (wireless), Fiber Optic</td>
          </tr>
          <tr>
            <td className="p-3 border">Speeds</td>
            <td className="p-3 border">10 Mbps, 100 Mbps, 1 Gbps, 10 Gbps</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Hub */}
    <h2 className="text-3xl font-bold mt-8">2. Hub</h2>
    <p className="leading-relaxed">
      A hub is a basic networking device that connects multiple devices in a network. It operates at Layer 1
      (Physical Layer) of the OSI model and acts as a multiport repeater. When a hub receives data on one
      port, it broadcasts the data to all other ports, regardless of the destination.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Hub Operation (Broadcasting):

  PC1 sends data to PC3:

      PC1        PC2        PC3        PC4
       |          |          |          |
       v          v          v          v
  +----+----+----+----+----+----+----+----+
  |    |    |    |    |    |    |    |    |
  |  Port1  Port2  Port3  Port4          |
  |    +---------+----------+--------+   |
  |              |                       |
  |         +----+----+                  |
  |         |   HUB   | Broadcasts to    |
  |         |Layer 1  | ALL ports        |
  |         +---------+                  |
  +--------------------------------------+

  Result: All PCs receive the data (inefficient)
`}</pre>
    </div>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Simple and inexpensive</td>
            <td className="p-3 border">Broadcasts data to all ports (wasteful)</td>
          </tr>
          <tr>
            <td className="p-3 border">Easy to install and use</td>
            <td className="p-3 border">Shares bandwidth among all ports</td>
          </tr>
          <tr>
            <td className="p-3 border">Acts as signal repeater</td>
            <td className="p-3 border">Causes collisions in network</td>
          </tr>
          <tr>
            <td className="p-3 border">Extends network reach</td>
            <td className="p-3 border">Security risk (data visible to all)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p><strong>Types of Hubs:</strong></p>
      <ul className="list-disc list-inside mt-2">
        <li><strong>Passive Hub:</strong> Simply connects cables, no signal amplification</li>
        <li><strong>Active Hub:</strong> Amplifies and regenerates signals (repeater hub)</li>
        <li><strong>Intelligent Hub:</strong> Has management capabilities and remote monitoring</li>
      </ul>
    </div>

    {/* Switch */}
    <h2 className="text-3xl font-bold mt-8">3. Switch</h2>
    <p className="leading-relaxed">
      A switch is an intelligent networking device that operates at Layer 2 (Data Link Layer) of the OSI
      model. Unlike a hub, a switch learns the MAC addresses of connected devices and forwards data only
      to the specific destination port, improving efficiency and security.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Switch Operation (Intelligent Forwarding):

  PC1 sends data to PC3:

      PC1        PC2        PC3        PC4
       |          |          |          |
       v          |          v          |
  +----+----+----+----+----+----+----+----+
  |    |         |    |         |        |
  |  Port1     Port2  Port3   Port4      |
  |    +----------> --+                  |
  |              |                       |
  |    MAC Address Table:                |
  |    Port1: AA:BB:CC:DD:EE:01         |
  |    Port2: AA:BB:CC:DD:EE:02         |
  |    Port3: AA:BB:CC:DD:EE:03         |
  |    Port4: AA:BB:CC:DD:EE:04         |
  |              |                       |
  |         +----+----+                  |
  |         | SWITCH  | Forwards only    |
  |         | Layer 2 | to destination   |
  |         +---------+                  |
  +--------------------------------------+

  Result: Only PC3 receives the data (efficient)
`}</pre>
    </div>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Hub</th>
            <th className="p-3 border">Switch</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">OSI Layer</td>
            <td className="p-3 border">Layer 1 (Physical)</td>
            <td className="p-3 border">Layer 2 (Data Link)</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Handling</td>
            <td className="p-3 border">Broadcasts to all ports</td>
            <td className="p-3 border">Forwards to specific port</td>
          </tr>
          <tr>
            <td className="p-3 border">Intelligence</td>
            <td className="p-3 border">No (dumb device)</td>
            <td className="p-3 border">Yes (MAC address table)</td>
          </tr>
          <tr>
            <td className="p-3 border">Collision Domain</td>
            <td className="p-3 border">Single (all ports)</td>
            <td className="p-3 border">Separate for each port</td>
          </tr>
          <tr>
            <td className="p-3 border">Bandwidth</td>
            <td className="p-3 border">Shared</td>
            <td className="p-3 border">Dedicated per port</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Router */}
    <h2 className="text-3xl font-bold mt-8">4. Router</h2>
    <p className="leading-relaxed">
      A router is a networking device that operates at Layer 3 (Network Layer) of the OSI model. It
      connects multiple networks and forwards data packets between them based on IP addresses. Routers
      make decisions about the best path for data to travel using routing tables and protocols.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Router Operation (Inter-network Routing):

      Network A                      Network B
   (192.168.1.0/24)               (192.168.2.0/24)

  +-----+  +-----+              +-----+  +-----+
  | PC1 |  | PC2 |              | PC3 |  | PC4 |
  |.10  |  |.20  |              |.10  |  |.20  |
  +--+--+  +--+--+              +--+--+  +--+--+
     |        |                    |        |
     +----+---+                    +----+---+
          |                             |
     +----+----+                   +----+----+
     | Switch  |                   | Switch  |
     +----+----+                   +----+----+
          |                             |
     +----+----+     +--------+    +----+----+
     |  .1     +-----+ ROUTER +----+    .1   |
     +---------+     | Layer 3|    +---------+
                     +--------+
                          |
                     [Internet]

  Router Routing Table:
  Destination      Next Hop       Interface
  192.168.1.0/24   Directly       Eth0
  192.168.2.0/24   Directly       Eth1
  0.0.0.0/0        ISP Gateway    Eth2
`}</pre>
    </div>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">OSI Layer</td>
            <td className="p-3 border">Layer 3 (Network Layer)</td>
          </tr>
          <tr>
            <td className="p-3 border">Addressing</td>
            <td className="p-3 border">Uses IP addresses (logical addresses)</td>
          </tr>
          <tr>
            <td className="p-3 border">Functions</td>
            <td className="p-3 border">Routing, NAT, DHCP, Firewall, QoS</td>
          </tr>
          <tr>
            <td className="p-3 border">Routing Protocols</td>
            <td className="p-3 border">RIP, OSPF, BGP, EIGRP</td>
          </tr>
          <tr>
            <td className="p-3 border">Broadcast Domain</td>
            <td className="p-3 border">Separates broadcast domains</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Bridge */}
    <h2 className="text-3xl font-bold mt-8">5. Bridge</h2>
    <p className="leading-relaxed">
      A bridge is a networking device that connects two or more network segments at Layer 2 (Data Link
      Layer). It filters traffic based on MAC addresses and divides a large network into smaller segments
      to reduce collisions and improve performance.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Bridge Operation:

     Segment 1                        Segment 2
  +-----+ +-----+                  +-----+ +-----+
  | PC1 | | PC2 |                  | PC3 | | PC4 |
  +--+--+ +--+--+                  +--+--+ +--+--+
     |       |                        |       |
     +---+---+                        +---+---+
         |                                |
    +----+----+      +--------+      +----+----+
    |         +------+ BRIDGE +------+         |
    +---------+      | Layer 2|      +---------+
                     +--------+

  Bridge learns MAC addresses and filters traffic
  Reduces collision domain
`}</pre>
    </div>

    {/* Gateway */}
    <h2 className="text-3xl font-bold mt-8">6. Gateway</h2>
    <p className="leading-relaxed">
      A gateway is a network device that acts as an entry point to another network. It can operate at
      any layer of the OSI model and is used to connect networks that use different protocols. Gateways
      perform protocol conversion to enable communication between heterogeneous networks.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Gateway Type</th>
            <th className="p-3 border">Function</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Protocol Gateway</td>
            <td className="p-3 border">Converts between different network protocols</td>
          </tr>
          <tr>
            <td className="p-3 border">Application Gateway</td>
            <td className="p-3 border">Filters traffic at application layer (proxy)</td>
          </tr>
          <tr>
            <td className="p-3 border">Security Gateway</td>
            <td className="p-3 border">Provides firewall and security functions</td>
          </tr>
          <tr>
            <td className="p-3 border">VoIP Gateway</td>
            <td className="p-3 border">Converts voice signals between networks</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Modem */}
    <h2 className="text-3xl font-bold mt-8">7. Modem</h2>
    <p className="leading-relaxed">
      A modem (Modulator-Demodulator) is a device that converts digital signals from a computer into
      analog signals for transmission over telephone lines or cable, and vice versa. It operates at
      Layer 1 (Physical Layer) and enables internet connectivity through ISPs.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Modem Operation:

  +----------+                              +----------+
  | Computer |                              |   ISP    |
  | (Digital)|                              | (Analog/ |
  +----+-----+                              | Digital) |
       |                                    +----+-----+
       |                                         |
  +----+-----+                              +----+-----+
  |  MODEM   |------ Telephone/Cable ------+  MODEM   |
  |          |         Line                |          |
  +----------+                              +----------+

  Modulation: Digital --> Analog (sending)
  Demodulation: Analog --> Digital (receiving)

  Types:
  - DSL Modem (Digital Subscriber Line)
  - Cable Modem (Coaxial cable)
  - Fiber Modem (ONT - Optical Network Terminal)
  - Dial-up Modem (Traditional telephone line)
`}</pre>
    </div>

    {/* Repeater */}
    <h2 className="text-3xl font-bold mt-8">8. Repeater</h2>
    <p className="leading-relaxed">
      A repeater is a Layer 1 device that regenerates and amplifies network signals to extend the
      transmission distance. It receives weak signals, amplifies them, and retransmits them to
      overcome attenuation (signal loss) over long cable runs.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">OSI Layer</td>
            <td className="p-3 border">Layer 1 (Physical)</td>
          </tr>
          <tr>
            <td className="p-3 border">Function</td>
            <td className="p-3 border">Signal regeneration and amplification</td>
          </tr>
          <tr>
            <td className="p-3 border">Use Case</td>
            <td className="p-3 border">Extend network range beyond cable limits</td>
          </tr>
          <tr>
            <td className="p-3 border">Limitation</td>
            <td className="p-3 border">Also amplifies noise; cannot filter data</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Device Comparison */}
    <h2 className="text-3xl font-bold mt-8">Device Comparison Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Device</th>
            <th className="p-3 border">OSI Layer</th>
            <th className="p-3 border">Addressing</th>
            <th className="p-3 border">Function</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Repeater</td>
            <td className="p-3 border">Layer 1</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Signal amplification</td>
          </tr>
          <tr>
            <td className="p-3 border">Hub</td>
            <td className="p-3 border">Layer 1</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Broadcast to all ports</td>
          </tr>
          <tr>
            <td className="p-3 border">Bridge</td>
            <td className="p-3 border">Layer 2</td>
            <td className="p-3 border">MAC</td>
            <td className="p-3 border">Segment filtering</td>
          </tr>
          <tr>
            <td className="p-3 border">Switch</td>
            <td className="p-3 border">Layer 2</td>
            <td className="p-3 border">MAC</td>
            <td className="p-3 border">Intelligent forwarding</td>
          </tr>
          <tr>
            <td className="p-3 border">Router</td>
            <td className="p-3 border">Layer 3</td>
            <td className="p-3 border">IP</td>
            <td className="p-3 border">Inter-network routing</td>
          </tr>
          <tr>
            <td className="p-3 border">Gateway</td>
            <td className="p-3 border">All Layers</td>
            <td className="p-3 border">Various</td>
            <td className="p-3 border">Protocol conversion</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>NIC provides unique MAC address for each device</li>
      <li>Hub broadcasts to all ports; Switch forwards to specific port</li>
      <li>Switch uses MAC address table for intelligent forwarding</li>
      <li>Router connects different networks using IP addresses</li>
      <li>Bridge divides collision domains; Router divides broadcast domains</li>
      <li>Gateway performs protocol conversion between different networks</li>
      <li>Modem converts digital signals to analog and vice versa</li>
    </ul>

    {/* GATE Important */}
    <h2 className="text-3xl font-bold mt-8">Important for GATE</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Know the OSI layer at which each device operates</li>
        <li>Understand collision domain vs broadcast domain</li>
        <li>Hub creates single collision domain; Switch creates separate collision domains per port</li>
        <li>Router separates both collision and broadcast domains</li>
        <li>MAC address is 48 bits; IP address is 32 bits (IPv4) or 128 bits (IPv6)</li>
      </ul>
    </div>
  </div>
);

export default NetworkComponents;
