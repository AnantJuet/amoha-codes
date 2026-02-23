import React from 'react';

const SwitchingTechniques: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Switching Techniques in Networks
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Switching is the mechanism used to transfer data from source to destination in a network.
      It determines how the network resources (links, bandwidth) are allocated to establish
      communication paths. The three main switching techniques are Circuit Switching, Packet
      Switching, and Message Switching.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Switching</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Switching Techniques:

                    Switching
                        |
        +---------------+---------------+
        |               |               |
    Circuit          Packet          Message
    Switching       Switching        Switching
                        |
              +---------+---------+
              |                   |
         Datagram           Virtual Circuit
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Circuit Switching</h2>
    <p className="leading-relaxed">
      In circuit switching, a dedicated communication path is established between the source and
      destination before data transfer begins. This path remains reserved for the entire duration
      of the communication, regardless of whether data is being transmitted.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Circuit Switching:

    Phase 1: Connection Establishment
    A ----[Setup Request]----> B

    Phase 2: Data Transfer (dedicated path)
    A ========================> B
       (Continuous connection)

    Phase 3: Connection Teardown
    A ----[Release]----> B

    Example: Traditional telephone network (PSTN)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Packet Switching</h2>
    <p className="leading-relaxed">
      In packet switching, data is divided into small units called packets. Each packet is
      transmitted independently and may take different routes to reach the destination.
      This is the basis of modern Internet communication.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Datagram Approach</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Datagram (Connectionless):

    A --[P1]--> Router1 --[P1]--> Router2 --[P1]--> B
    A --[P2]-----> Router3 -------[P2]------------> B
    A --[P3]--> Router1 --[P3]--> Router3 --[P3]--> B

    - Each packet routed independently
    - Packets may arrive out of order
    - No connection setup needed
    - Example: UDP, IP
      `}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Virtual Circuit Approach</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Virtual Circuit (Connection-oriented):

    Setup: A ----[VC Request]----> B (path established)
           Path: A -> R1 -> R2 -> B (VC ID assigned)

    Transfer: All packets follow same path
    A --[P1]--> R1 --[P1]--> R2 --[P1]--> B
    A --[P2]--> R1 --[P2]--> R2 --[P2]--> B
    A --[P3]--> R1 --[P3]--> R2 --[P3]--> B

    - Logical connection established
    - Packets arrive in order
    - Example: ATM, Frame Relay, TCP (logical)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Message Switching</h2>
    <p className="leading-relaxed">
      In message switching, the entire message is transmitted as a complete unit from node to node.
      Each intermediate node stores the complete message before forwarding it (store-and-forward).
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Message Switching (Store-and-Forward):

    A --[Entire Message]--> Node1 (stores)
                              |
                   [Entire Message]
                              |
                              v
                           Node2 (stores)
                              |
                   [Entire Message]
                              |
                              v
                              B

    - No real-time transmission
    - Used in: Email systems, early telegraph
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Circuit</th>
            <th className="p-3 border">Packet (Datagram)</th>
            <th className="p-3 border">Packet (VC)</th>
            <th className="p-3 border">Message</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Dedicated Path</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Logical</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Setup Time</td>
            <td className="p-3 border">Required</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Required</td>
            <td className="p-3 border">None</td>
          </tr>
          <tr>
            <td className="p-3 border">Bandwidth</td>
            <td className="p-3 border">Reserved</td>
            <td className="p-3 border">Shared</td>
            <td className="p-3 border">Shared</td>
            <td className="p-3 border">As needed</td>
          </tr>
          <tr>
            <td className="p-3 border">Delay</td>
            <td className="p-3 border">Constant</td>
            <td className="p-3 border">Variable</td>
            <td className="p-3 border">Variable</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border">Order Guarantee</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Example</td>
            <td className="p-3 border">PSTN, ISDN</td>
            <td className="p-3 border">IP, Internet</td>
            <td className="p-3 border">ATM, MPLS</td>
            <td className="p-3 border">Email</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Circuit Switching: Dedicated path, guaranteed bandwidth, used in PSTN</li>
        <li>Packet Switching: Data divided into packets, shared resources, Internet</li>
        <li>Datagram: Connectionless, packets routed independently</li>
        <li>Virtual Circuit: Connection-oriented, packets follow same path</li>
        <li>Message Switching: Store-and-forward entire messages</li>
        <li>Packet switching is more efficient for bursty data traffic</li>
      </ul>
    </div>
  </div>
);

export default SwitchingTechniques;
