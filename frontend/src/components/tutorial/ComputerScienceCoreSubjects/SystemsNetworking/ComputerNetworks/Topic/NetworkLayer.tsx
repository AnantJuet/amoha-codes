import React from 'react';

const NetworkLayer: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Network Layer (Layer 3) - OSI Model
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Network Layer is the third layer of the OSI model. It is responsible for the delivery of
      packets from source to destination across multiple networks. This layer handles logical
      addressing (IP addresses), routing (path determination), and packet forwarding. The Network
      Layer enables internetworking - connecting different networks together.
    </p>

    {/* Position in OSI */}
    <h2 className="text-3xl font-bold mt-8">Position in OSI Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  OSI Model:

  +-------------------+
  | 7. Application    |
  +-------------------+
  | 6. Presentation   |
  +-------------------+
  | 5. Session        |
  +-------------------+
  | 4. Transport      |
  +-------------------+
  | 3. NETWORK     <--+  (You are here!)
  +-------------------+
  | 2. Data Link      |
  +-------------------+
  | 1. Physical       |
  +-------------------+

  Data Unit: Packet (also called Datagram)
  Addressing: IP Address (32-bit IPv4 or 128-bit IPv6)
  Devices: Router, Layer 3 Switch
`}</pre>
    </div>

    {/* Functions */}
    <h2 className="text-3xl font-bold mt-8">Functions of Network Layer</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Logical Addressing</td>
            <td className="p-3 border">Assigns source and destination IP addresses to packets</td>
          </tr>
          <tr>
            <td className="p-3 border">Routing</td>
            <td className="p-3 border">Determines the best path for packet delivery across networks</td>
          </tr>
          <tr>
            <td className="p-3 border">Packet Forwarding</td>
            <td className="p-3 border">Forwards packets from one network interface to another</td>
          </tr>
          <tr>
            <td className="p-3 border">Fragmentation</td>
            <td className="p-3 border">Breaks large packets into smaller fragments if needed</td>
          </tr>
          <tr>
            <td className="p-3 border">Encapsulation</td>
            <td className="p-3 border">Encapsulates segments from Transport layer into packets</td>
          </tr>
          <tr>
            <td className="p-3 border">Error Handling</td>
            <td className="p-3 border">Reports delivery errors via ICMP</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* IP Addressing */}
    <h2 className="text-3xl font-bold mt-8">IP Addressing (IPv4)</h2>
    <p className="leading-relaxed">
      An IP address is a 32-bit logical address that uniquely identifies a device on a network.
      It consists of two parts: Network ID (identifies the network) and Host ID (identifies
      the device within that network).
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  IPv4 Address Format:

  32 bits total (4 bytes)

  Binary:   11000000.10101000.00000001.01100100
  Decimal:  192.168.1.100

  +----------+----------+----------+----------+
  | Octet 1  | Octet 2  | Octet 3  | Octet 4  |
  | 8 bits   | 8 bits   | 8 bits   | 8 bits   |
  +----------+----------+----------+----------+
  | 0-255    | 0-255    | 0-255    | 0-255    |
  +----------+----------+----------+----------+


  IP Address Classes:

  Class   First Bits   Range              Default Mask     Networks   Hosts/Network
  -------------------------------------------------------------------------------
  A       0xxx         1.0.0.0-126.x.x.x    255.0.0.0       126        16,777,214
  B       10xx         128.0.0.0-191.x.x.x  255.255.0.0     16,384     65,534
  C       110x         192.0.0.0-223.x.x.x  255.255.255.0   2,097,152  254
  D       1110         224.0.0.0-239.x.x.x  (Multicast)     N/A        N/A
  E       1111         240.0.0.0-255.x.x.x  (Reserved)      N/A        N/A

  Special Addresses:
  0.0.0.0        - Default route / This network
  127.0.0.1      - Loopback (localhost)
  255.255.255.255 - Broadcast (all hosts)
  169.254.x.x    - Link-local (APIPA)
`}</pre>
    </div>

    {/* Subnetting */}
    <h2 className="text-3xl font-bold mt-8">Subnetting</h2>
    <p className="leading-relaxed">
      Subnetting divides a network into smaller subnetworks. This improves network efficiency,
      security, and management. The subnet mask identifies which portion of the IP address
      is the network/subnet and which is the host.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Subnetting Example:

  Network: 192.168.1.0/24
  We need 4 subnets

  Step 1: Calculate bits needed for subnets
          2^n >= 4, so n = 2 (borrow 2 bits)

  Step 2: New subnet mask
          /24 + 2 = /26
          255.255.255.192 (11111111.11111111.11111111.11000000)

  Step 3: Calculate subnets
          Block size = 256 - 192 = 64

  +----------+------------------+------------------+-----------------+
  | Subnet   | Network Address  | Broadcast        | Usable Range    |
  +----------+------------------+------------------+-----------------+
  | Subnet 0 | 192.168.1.0/26   | 192.168.1.63     | .1 - .62        |
  | Subnet 1 | 192.168.1.64/26  | 192.168.1.127    | .65 - .126      |
  | Subnet 2 | 192.168.1.128/26 | 192.168.1.191    | .129 - .190     |
  | Subnet 3 | 192.168.1.192/26 | 192.168.1.255    | .193 - .254     |
  +----------+------------------+------------------+-----------------+

  Hosts per subnet = 2^6 - 2 = 62 (6 host bits, -2 for network & broadcast)
`}</pre>
    </div>

    {/* IPv4 Header */}
    <h2 className="text-3xl font-bold mt-8">IPv4 Header Format</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  IPv4 Header (20-60 bytes):

   0                   1                   2                   3
   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  |Version|  IHL  |    ToS/DSCP   |         Total Length          |
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  |         Identification        |Flags|      Fragment Offset    |
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  |  Time to Live |    Protocol   |         Header Checksum       |
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  |                       Source Address                          |
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  |                    Destination Address                        |
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  |                    Options (if IHL > 5)                       |
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

  Key Fields:
  - Version (4 bits): IP version (4 for IPv4)
  - IHL (4 bits): Header length in 32-bit words
  - TTL (8 bits): Hop limit (decremented at each router)
  - Protocol (8 bits): Upper layer protocol (TCP=6, UDP=17, ICMP=1)
  - Checksum: Header integrity verification
`}</pre>
    </div>

    {/* Routing */}
    <h2 className="text-3xl font-bold mt-8">Routing Concepts</h2>
    <p className="leading-relaxed">
      Routing is the process of selecting the best path for packets to travel from source to
      destination across multiple networks. Routers use routing tables to make forwarding decisions.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Routing Table Example:

  +------------------+------------------+-------------+-----------+
  | Destination      | Subnet Mask      | Next Hop    | Interface |
  +------------------+------------------+-------------+-----------+
  | 192.168.1.0      | 255.255.255.0    | Directly    | eth0      |
  | 192.168.2.0      | 255.255.255.0    | 192.168.1.1 | eth0      |
  | 10.0.0.0         | 255.0.0.0        | 192.168.1.2 | eth0      |
  | 0.0.0.0          | 0.0.0.0          | 192.168.1.1 | eth0      |
  +------------------+------------------+-------------+-----------+
                                         (Default Route)

  Routing Decision Process:
  1. Extract destination IP from packet
  2. Check routing table for matching entry
  3. Use longest prefix match
  4. Forward to next hop or deliver locally
`}</pre>
    </div>

    {/* Routing Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Routing</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Static Routing</td>
            <td className="p-3 border">Manually configured routes, no adaptation</td>
            <td className="p-3 border">Small networks, specific paths</td>
          </tr>
          <tr>
            <td className="p-3 border">Dynamic Routing</td>
            <td className="p-3 border">Automatic route discovery and updates</td>
            <td className="p-3 border">RIP, OSPF, BGP</td>
          </tr>
          <tr>
            <td className="p-3 border">Distance Vector</td>
            <td className="p-3 border">Routes based on distance (hop count)</td>
            <td className="p-3 border">RIP, IGRP</td>
          </tr>
          <tr>
            <td className="p-3 border">Link State</td>
            <td className="p-3 border">Complete network topology knowledge</td>
            <td className="p-3 border">OSPF, IS-IS</td>
          </tr>
          <tr>
            <td className="p-3 border">Path Vector</td>
            <td className="p-3 border">Routes with complete path information</td>
            <td className="p-3 border">BGP</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Routing Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Routing Algorithms</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  Distance Vector (Bellman-Ford):

  - Each router knows distance to neighbors
  - Periodically exchanges tables with neighbors
  - Updates distance: D(x,y) = min { c(x,v) + D(v,y) }

  Problems:
  - Count to infinity
  - Slow convergence

  Solutions:
  - Split horizon
  - Poison reverse
  - Triggered updates


  Link State (Dijkstra):

  1. Discover neighbors, measure link costs
  2. Broadcast link state to all routers (flooding)
  3. Build complete network topology map
  4. Compute shortest path using Dijkstra's algorithm

  Advantages:
  - Faster convergence
  - No count to infinity
  - More scalable

  Dijkstra's Algorithm:
  Initialize: D(source) = 0, D(others) = infinity
  While not all nodes visited:
    Pick unvisited node u with smallest D(u)
    For each neighbor v of u:
      D(v) = min(D(v), D(u) + cost(u,v))
`}</pre>
    </div>

    {/* Network Layer Protocols */}
    <h2 className="text-3xl font-bold mt-8">Network Layer Protocols</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Protocol</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">IP (Internet Protocol)</td>
            <td className="p-3 border">Connectionless packet delivery</td>
          </tr>
          <tr>
            <td className="p-3 border">ICMP (Internet Control Message Protocol)</td>
            <td className="p-3 border">Error reporting and diagnostics (ping, traceroute)</td>
          </tr>
          <tr>
            <td className="p-3 border">ARP (Address Resolution Protocol)</td>
            <td className="p-3 border">Maps IP address to MAC address</td>
          </tr>
          <tr>
            <td className="p-3 border">RARP (Reverse ARP)</td>
            <td className="p-3 border">Maps MAC address to IP address</td>
          </tr>
          <tr>
            <td className="p-3 border">IGMP (Internet Group Management Protocol)</td>
            <td className="p-3 border">Multicast group management</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* NAT */}
    <h2 className="text-3xl font-bold mt-8">NAT (Network Address Translation)</h2>
    <p className="leading-relaxed">
      NAT translates private IP addresses to public IP addresses, allowing multiple devices
      to share a single public IP for internet access.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  NAT Operation:

  Private Network              Router with NAT              Internet
  (192.168.1.0/24)             (Public: 203.0.113.5)

  +--------+
  | PC1    |                   +----------+
  |.100    |---+               |          |
  +--------+   |               |  NAT     |              +----------+
               +------>        |  Router  |<------------>| Web      |
  +--------+   |               |          |              | Server   |
  | PC2    |---+               +----------+              | 93.184.x |
  |.101    |                                             +----------+
  +--------+

  NAT Table:
  +---------------+-------+------------------+-------+
  | Private IP    | Port  | Public IP        | Port  |
  +---------------+-------+------------------+-------+
  | 192.168.1.100 | 5000  | 203.0.113.5      | 40001 |
  | 192.168.1.101 | 5001  | 203.0.113.5      | 40002 |
  +---------------+-------+------------------+-------+

  Types of NAT:
  - Static NAT: One-to-one mapping
  - Dynamic NAT: Pool of public addresses
  - PAT/NAPT: Port-based translation (most common)
`}</pre>
    </div>

    {/* Devices */}
    <h2 className="text-3xl font-bold mt-8">Network Layer Devices</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Router</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Operates at Layer 3</li>
          <li>Routes packets between networks</li>
          <li>Uses routing tables</li>
          <li>Separates broadcast domains</li>
          <li>Can perform NAT, firewall functions</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Layer 3 Switch</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Combines routing and switching</li>
          <li>Hardware-based routing</li>
          <li>Faster than traditional routers</li>
          <li>Used in data centers</li>
        </ul>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Network Layer provides source-to-destination delivery across networks</li>
      <li>Data unit is Packet; uses IP addresses (logical addressing)</li>
      <li>Router operates at Layer 3 and separates broadcast domains</li>
      <li>IPv4 address: 32 bits, five classes (A, B, C, D, E)</li>
      <li>Subnetting divides networks; CIDR provides classless addressing</li>
      <li>TTL prevents packets from looping indefinitely</li>
      <li>ARP maps IP to MAC; RARP maps MAC to IP</li>
    </ul>

    {/* GATE Important */}
    <h2 className="text-3xl font-bold mt-8">Important for GATE</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Practice subnetting calculations</li>
        <li>Know IPv4 header fields and their sizes</li>
        <li>Understand Distance Vector vs Link State routing</li>
        <li>Practice Dijkstra's shortest path algorithm</li>
        <li>Know CIDR notation and supernetting</li>
        <li>Understand NAT and its types</li>
      </ul>
    </div>
  </div>
);

export default NetworkLayer;
