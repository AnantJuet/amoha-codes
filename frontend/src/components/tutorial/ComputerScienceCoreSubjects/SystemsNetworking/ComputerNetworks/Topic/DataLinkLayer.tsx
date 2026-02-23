import React from 'react';

const DataLinkLayer: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Link Layer (Layer 2) - OSI Model
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Data Link Layer is the second layer of the OSI model. It is responsible for node-to-node
      data transfer between two directly connected nodes. This layer takes packets from the Network
      layer and frames them for transmission, handles physical addressing (MAC), error detection,
      and flow control. It ensures reliable transmission across a physical link.
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
  | 3. Network        |
  +-------------------+
  | 2. DATA LINK   <--+  (You are here!)
  +-------------------+
  | 1. Physical       |
  +-------------------+

  Data Unit: Frame
  Addressing: MAC Address (48-bit physical address)
  Devices: Switch, Bridge, NIC
`}</pre>
    </div>

    {/* Sub-layers */}
    <h2 className="text-3xl font-bold mt-8">Data Link Layer Sub-layers</h2>
    <p className="leading-relaxed">
      The Data Link Layer is divided into two sub-layers by IEEE 802 standards:
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Data Link Layer Sub-layers:

  +--------------------------------+
  |        DATA LINK LAYER         |
  +--------------------------------+
  |      LLC (Logical Link         |
  |        Control)                |
  |   - Flow Control               |
  |   - Error Control              |
  |   - Multiplexing               |
  +--------------------------------+
  |      MAC (Media Access         |
  |        Control)                |
  |   - Physical Addressing        |
  |   - Frame Delimiting           |
  |   - Channel Access             |
  +--------------------------------+
  |        PHYSICAL LAYER          |
  +--------------------------------+

  LLC (IEEE 802.2): Interfaces with Network layer
  MAC (IEEE 802.3, 802.11, etc.): Interfaces with Physical layer
`}</pre>
    </div>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Sub-layer</th>
            <th className="p-3 border">Functions</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">LLC (Logical Link Control)</td>
            <td className="p-3 border">Flow control, error control, multiplexing protocols, identifies Network layer protocol</td>
          </tr>
          <tr>
            <td className="p-3 border">MAC (Media Access Control)</td>
            <td className="p-3 border">Physical addressing, framing, channel access methods (CSMA/CD, CSMA/CA)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Functions */}
    <h2 className="text-3xl font-bold mt-8">Functions of Data Link Layer</h2>
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
            <td className="p-3 border">Framing</td>
            <td className="p-3 border">Divides bit stream into frames with header and trailer</td>
          </tr>
          <tr>
            <td className="p-3 border">Physical Addressing</td>
            <td className="p-3 border">Adds source and destination MAC addresses to frame</td>
          </tr>
          <tr>
            <td className="p-3 border">Error Detection</td>
            <td className="p-3 border">Adds checksum (CRC) to detect transmission errors</td>
          </tr>
          <tr>
            <td className="p-3 border">Error Control</td>
            <td className="p-3 border">Retransmission mechanisms for damaged or lost frames</td>
          </tr>
          <tr>
            <td className="p-3 border">Flow Control</td>
            <td className="p-3 border">Prevents fast sender from overwhelming slow receiver</td>
          </tr>
          <tr>
            <td className="p-3 border">Access Control</td>
            <td className="p-3 border">Determines which device can use shared medium (CSMA/CD)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Framing */}
    <h2 className="text-3xl font-bold mt-8">Framing</h2>
    <p className="leading-relaxed">
      Framing is the process of dividing the bit stream from the Network layer into manageable
      data units called frames. Each frame contains a header, payload (data), and trailer.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Frame Structure:

  +--------+----------------+------------+--------+
  | Header |     Data       |   Padding  | Trailer|
  | (DH)   |   (Payload)    | (if needed)|  (DT)  |
  +--------+----------------+------------+--------+
     |                                        |
     v                                        v
  +------+------+------+              +-------+
  | Dest | Src  | Type |              |  CRC  |
  | MAC  | MAC  |      |              | (FCS) |
  +------+------+------+              +-------+
  6 bytes 6 bytes 2 bytes              4 bytes

  Ethernet Frame (IEEE 802.3):
  +----------+-------+-------+------+------------+-----+
  | Preamble | SFD   | Dest  | Src  | Len/Type   |Data |...| FCS |
  | 7 bytes  |1 byte | MAC   | MAC  | 2 bytes    |     |   |4 bytes|
  +----------+-------+-------+------+------------+-----+---+-------+

  SFD = Start Frame Delimiter (10101011)
  FCS = Frame Check Sequence (CRC-32)
  Minimum frame size: 64 bytes (Ethernet)
  Maximum frame size: 1518 bytes (standard Ethernet)
`}</pre>
    </div>

    {/* MAC Address */}
    <h2 className="text-3xl font-bold mt-8">MAC Address</h2>
    <p className="leading-relaxed">
      The MAC (Media Access Control) address is a 48-bit (6-byte) hardware address that uniquely
      identifies each network interface card. It is burned into the NIC by the manufacturer.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  MAC Address Format (48 bits):

  +------------------------+------------------------+
  |    OUI (24 bits)       |    NIC (24 bits)       |
  | Organizationally       | Network Interface      |
  | Unique Identifier      | Controller Specific    |
  +------------------------+------------------------+

  Example: AA:BB:CC:DD:EE:FF
           |-----| |-----|
             OUI     NIC

  Special MAC Addresses:
  +---------------------+---------------------------+
  | FF:FF:FF:FF:FF:FF   | Broadcast (all devices)   |
  +---------------------+---------------------------+
  | 01:00:5E:xx:xx:xx   | IPv4 Multicast            |
  +---------------------+---------------------------+
  | 33:33:xx:xx:xx:xx   | IPv6 Multicast            |
  +---------------------+---------------------------+

  First bit of first byte:
  - 0 = Unicast (single destination)
  - 1 = Multicast (group destination)

  Second bit of first byte:
  - 0 = Globally unique (OUI assigned)
  - 1 = Locally administered
`}</pre>
    </div>

    {/* Error Detection */}
    <h2 className="text-3xl font-bold mt-8">Error Detection Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Detection Capability</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Parity Check</td>
            <td className="p-3 border">Adds parity bit to make even/odd number of 1s</td>
            <td className="p-3 border">Single-bit errors</td>
          </tr>
          <tr>
            <td className="p-3 border">2D Parity</td>
            <td className="p-3 border">Row and column parity checks</td>
            <td className="p-3 border">Most 2-bit errors, burst errors</td>
          </tr>
          <tr>
            <td className="p-3 border">Checksum</td>
            <td className="p-3 border">Sum of data words, complement transmitted</td>
            <td className="p-3 border">Multiple bit errors</td>
          </tr>
          <tr>
            <td className="p-3 border">CRC (Cyclic Redundancy Check)</td>
            <td className="p-3 border">Polynomial division, remainder transmitted</td>
            <td className="p-3 border">Burst errors, most powerful</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  CRC Calculation Example:

  Data: 1101011011
  Generator Polynomial (CRC-4): 10011 (degree 4)

  Step 1: Append 4 zeros (degree of polynomial)
          Data = 11010110110000

  Step 2: Divide by generator using XOR
          11010110110000 / 10011

  Step 3: Remainder = 1110 (CRC)

  Transmitted Frame: 1101011011|1110
                     Data      |CRC

  At Receiver:
  - Divide received frame by same generator
  - Remainder = 0 means no error
  - Remainder != 0 means error detected
`}</pre>
    </div>

    {/* Flow Control */}
    <h2 className="text-3xl font-bold mt-8">Flow Control Protocols</h2>
    <p className="leading-relaxed">
      Flow control ensures that a fast sender does not overwhelm a slow receiver with data.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  1. Stop-and-Wait Protocol:

  Sender                              Receiver
    |                                    |
    |-------- Frame 0 ------------------>|
    |                                    |
    |<------- ACK 0 ---------------------|
    |                                    |
    |-------- Frame 1 ------------------>|
    |                                    |
    |<------- ACK 1 ---------------------|
    |                                    |

  - Send one frame, wait for ACK before sending next
  - Simple but inefficient for high latency links


  2. Sliding Window Protocol:

  Window Size = 3

  Sender Window:  [0][1][2][3][4][5][6][7]
                  |--sent--|--can send--|
                     ^
                  Waiting for ACK

  Sender                              Receiver
    |                                    |
    |-------- Frame 0 ------------------>|
    |-------- Frame 1 ------------------>|
    |-------- Frame 2 ------------------>|
    |<------- ACK 0 ---------------------|
    |-------- Frame 3 ------------------>|  (window slides)
    |<------- ACK 1 ---------------------|
    |-------- Frame 4 ------------------>|
    |                                    |

  - Multiple frames in flight
  - More efficient utilization of bandwidth
`}</pre>
    </div>

    {/* Access Control */}
    <h2 className="text-3xl font-bold mt-8">Media Access Control Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Used In</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">CSMA/CD</td>
            <td className="p-3 border">Carrier Sense Multiple Access with Collision Detection</td>
            <td className="p-3 border">Wired Ethernet</td>
          </tr>
          <tr>
            <td className="p-3 border">CSMA/CA</td>
            <td className="p-3 border">Carrier Sense Multiple Access with Collision Avoidance</td>
            <td className="p-3 border">Wireless (WiFi)</td>
          </tr>
          <tr>
            <td className="p-3 border">Token Passing</td>
            <td className="p-3 border">Only token holder can transmit</td>
            <td className="p-3 border">Token Ring, FDDI</td>
          </tr>
          <tr>
            <td className="p-3 border">ALOHA</td>
            <td className="p-3 border">Pure/Slotted random access</td>
            <td className="p-3 border">Satellite, early wireless</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* CSMA/CD */}
    <h2 className="text-3xl font-bold mt-8">CSMA/CD Process</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  CSMA/CD Algorithm:

  1. Carrier Sense: Listen to medium
     |
     v
  2. Is medium idle? --NO--> Wait and listen
     |
    YES
     |
     v
  3. Start transmitting
     |
     v
  4. Collision detected? --NO--> Transmission complete
     |
    YES
     |
     v
  5. Send JAM signal (abort)
     |
     v
  6. Wait random backoff time (Binary Exponential Backoff)
     |
     v
  7. Go to step 1

  Binary Exponential Backoff:
  - After n collisions, wait random time from 0 to (2^n - 1) slot times
  - Maximum n = 10 for waiting, 16 collisions = frame discarded

  Minimum Frame Size = 2 * Propagation Delay * Bandwidth
  (For collision detection to work)
  Ethernet: 64 bytes minimum frame
`}</pre>
    </div>

    {/* Devices */}
    <h2 className="text-3xl font-bold mt-8">Data Link Layer Devices</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Switch</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Operates at Layer 2</li>
          <li>Uses MAC address table</li>
          <li>Forwards frames to specific port</li>
          <li>Creates separate collision domains</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Bridge</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Connects two network segments</li>
          <li>Learns MAC addresses</li>
          <li>Filters traffic between segments</li>
          <li>Reduces collision domain</li>
        </ul>
      </div>
    </div>

    {/* Protocols */}
    <h2 className="text-3xl font-bold mt-8">Data Link Layer Protocols</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Ethernet (IEEE 802.3):</strong> Most common LAN protocol</li>
      <li><strong>WiFi (IEEE 802.11):</strong> Wireless LAN protocol</li>
      <li><strong>PPP (Point-to-Point Protocol):</strong> WAN serial links</li>
      <li><strong>HDLC:</strong> High-Level Data Link Control</li>
      <li><strong>Frame Relay:</strong> WAN protocol (legacy)</li>
      <li><strong>ATM:</strong> Asynchronous Transfer Mode</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Data Link Layer provides node-to-node delivery</li>
      <li>Data unit is Frame; addressing uses MAC address</li>
      <li>Two sub-layers: LLC (flow/error control) and MAC (access control)</li>
      <li>CRC is the most powerful error detection method</li>
      <li>Ethernet uses CSMA/CD; WiFi uses CSMA/CA</li>
      <li>Switch operates at Layer 2 and creates separate collision domains</li>
      <li>Minimum Ethernet frame size: 64 bytes</li>
    </ul>

    {/* GATE Important */}
    <h2 className="text-3xl font-bold mt-8">Important for GATE</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Know CRC calculation process</li>
        <li>Understand sliding window protocols (Go-Back-N, Selective Repeat)</li>
        <li>CSMA/CD: Carrier Sense, Collision Detection, Binary Exponential Backoff</li>
        <li>Efficiency calculations for Stop-and-Wait and Sliding Window</li>
        <li>MAC address format: 48 bits (6 bytes), OUI + NIC</li>
        <li>Minimum frame size in Ethernet for collision detection</li>
      </ul>
    </div>
  </div>
);

export default DataLinkLayer;
