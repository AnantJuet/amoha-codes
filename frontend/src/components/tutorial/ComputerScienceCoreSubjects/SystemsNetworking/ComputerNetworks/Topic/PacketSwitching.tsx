import React from 'react';

const PacketSwitching: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Packet Switching
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Packet switching is a data transmission method where messages are broken into small units
      called packets. Each packet is transmitted independently through the network and may take
      different routes to reach the destination. This is the foundation of modern Internet communication.
    </p>

    <h2 className="text-3xl font-bold mt-8">How Packet Switching Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Packet Switching Process:

    1. Message divided into packets
       [       Original Message      ]
       [P1] [P2] [P3] [P4] [P5]

    2. Each packet sent independently
       Source --> [P1] --> Router1 --> Router3 --> Dest
       Source --> [P2] --> Router2 --> Router4 --> Dest
       Source --> [P3] --> Router1 --> Router2 --> Dest

    3. Packets may arrive out of order
       Received: [P2] [P1] [P5] [P3] [P4]

    4. Reassembled at destination
       [P1] [P2] [P3] [P4] [P5] --> [Original Message]
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Packet Switching</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Datagram Switching (Connectionless)</h3>
    <p className="leading-relaxed">
      Each packet is treated independently and routed based on its destination address.
      No connection is established before transmission.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Datagram Switching:

    +----+----+----+----+    Each packet contains:
    |Hdr |Dest|Src |Data|    - Header
    +----+----+----+----+    - Destination address
                             - Source address
    Packet 1: A -> R1 -> R3 -> B     - Data
    Packet 2: A -> R2 -> R4 -> B
    Packet 3: A -> R1 -> R2 -> R4 -> B

    Characteristics:
    - No connection setup
    - Each packet routed independently
    - Packets may arrive out of order
    - More robust (alternate routes available)
    - Example: IP, UDP
      `}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Virtual Circuit Switching (Connection-oriented)</h3>
    <p className="leading-relaxed">
      A logical path (virtual circuit) is established before data transfer. All packets follow
      the same path in order.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Virtual Circuit Switching:

    Phase 1: Setup (establish VC)
    A ----[Setup Request]----> R1 ----> R2 ----> B
      <---[VC ID assigned]----

    Phase 2: Data Transfer (all packets same path)
    A --[P1,VC=5]--> R1 --[P1]--> R2 --[P1]--> B
    A --[P2,VC=5]--> R1 --[P2]--> R2 --[P2]--> B
    A --[P3,VC=5]--> R1 --[P3]--> R2 --[P3]--> B

    Phase 3: Teardown (release VC)
    A ----[Release]----> R1 ----> R2 ----> B

    Characteristics:
    - Connection established first
    - All packets follow same path
    - Packets arrive in order
    - Example: ATM, Frame Relay, MPLS
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison: Datagram vs Virtual Circuit</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Datagram</th>
            <th className="p-3 border">Virtual Circuit</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Connection Setup</td>
            <td className="p-3 border">Not required</td>
            <td className="p-3 border">Required</td>
          </tr>
          <tr>
            <td className="p-3 border">Addressing</td>
            <td className="p-3 border">Full address in each packet</td>
            <td className="p-3 border">VC identifier only</td>
          </tr>
          <tr>
            <td className="p-3 border">Routing Decision</td>
            <td className="p-3 border">Per packet</td>
            <td className="p-3 border">At setup only</td>
          </tr>
          <tr>
            <td className="p-3 border">Packet Order</td>
            <td className="p-3 border">May arrive out of order</td>
            <td className="p-3 border">Always in order</td>
          </tr>
          <tr>
            <td className="p-3 border">Reliability</td>
            <td className="p-3 border">Best effort</td>
            <td className="p-3 border">Can guarantee QoS</td>
          </tr>
          <tr>
            <td className="p-3 border">Flexibility</td>
            <td className="p-3 border">High (alternate routes)</td>
            <td className="p-3 border">Lower (fixed path)</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">IP, UDP</td>
            <td className="p-3 border">ATM, MPLS, Frame Relay</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of Packet Switching</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Efficiency</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Bandwidth shared among users</li>
          <li>No idle time wasted</li>
          <li>Statistical multiplexing</li>
          <li>Better resource utilization</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Reliability</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>No single point of failure</li>
          <li>Packets can take alternate routes</li>
          <li>Network adapts to failures</li>
          <li>Error recovery possible</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Variable Delay:</strong> Queuing at routers causes unpredictable latency</li>
      <li><strong>Packet Overhead:</strong> Each packet carries header information</li>
      <li><strong>Out-of-Order Delivery:</strong> Requires reassembly (datagram)</li>
      <li><strong>No Guaranteed Bandwidth:</strong> Congestion can affect throughput</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Data divided into packets transmitted independently</li>
        <li>Datagram: Connectionless, packets routed independently (IP)</li>
        <li>Virtual Circuit: Connection-oriented, packets follow same path</li>
        <li>More efficient than circuit switching for bursty traffic</li>
        <li>Foundation of the Internet</li>
        <li>Variable delay but robust and flexible</li>
      </ul>
    </div>
  </div>
);

export default PacketSwitching;
