import React from 'react';

const TransportLayer: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Transport Layer (Layer 4) - OSI Model
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Transport Layer is the fourth layer of the OSI model. It provides end-to-end communication
      services between applications running on different hosts. This layer ensures complete data
      transfer with error recovery, flow control, and segmentation. The two main protocols at this
      layer are TCP (Transmission Control Protocol) and UDP (User Datagram Protocol).
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
  | 4. TRANSPORT   <--+  (You are here!)
  +-------------------+
  | 3. Network        |
  +-------------------+
  | 2. Data Link      |
  +-------------------+
  | 1. Physical       |
  +-------------------+

  Data Unit: Segment (TCP) / Datagram (UDP)
  Addressing: Port Numbers (0-65535)
  Protocols: TCP, UDP, SCTP
`}</pre>
    </div>

    {/* Functions */}
    <h2 className="text-3xl font-bold mt-8">Functions of Transport Layer</h2>
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
            <td className="p-3 border">Segmentation</td>
            <td className="p-3 border">Breaks data into smaller segments with sequence numbers</td>
          </tr>
          <tr>
            <td className="p-3 border">Reassembly</td>
            <td className="p-3 border">Reassembles segments into original data at destination</td>
          </tr>
          <tr>
            <td className="p-3 border">Connection Control</td>
            <td className="p-3 border">Establishes, maintains, and terminates connections (TCP)</td>
          </tr>
          <tr>
            <td className="p-3 border">Flow Control</td>
            <td className="p-3 border">Prevents sender from overwhelming receiver</td>
          </tr>
          <tr>
            <td className="p-3 border">Error Control</td>
            <td className="p-3 border">Detects and retransmits lost or corrupted segments</td>
          </tr>
          <tr>
            <td className="p-3 border">Multiplexing/Demultiplexing</td>
            <td className="p-3 border">Multiple applications share same network connection via ports</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Port Numbers */}
    <h2 className="text-3xl font-bold mt-8">Port Numbers</h2>
    <p className="leading-relaxed">
      Port numbers identify specific applications or services on a host. They enable multiplexing -
      allowing multiple applications to use the network simultaneously.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Port Number Ranges (0-65535):

  +-------------------+------------------+------------------------+
  | Range             | Type             | Description            |
  +-------------------+------------------+------------------------+
  | 0 - 1023          | Well-Known Ports | Reserved for system    |
  |                   |                  | services (HTTP, FTP)   |
  +-------------------+------------------+------------------------+
  | 1024 - 49151      | Registered Ports | For applications       |
  |                   |                  | (MySQL, RDP)           |
  +-------------------+------------------+------------------------+
  | 49152 - 65535     | Dynamic/Private  | Ephemeral client ports |
  |                   |                  | (temporary connections)|
  +-------------------+------------------+------------------------+

  Common Well-Known Ports:
  +------+----------+------------------+
  | Port | Protocol | Service          |
  +------+----------+------------------+
  |  20  |   TCP    | FTP Data         |
  |  21  |   TCP    | FTP Control      |
  |  22  |   TCP    | SSH              |
  |  23  |   TCP    | Telnet           |
  |  25  |   TCP    | SMTP             |
  |  53  | TCP/UDP  | DNS              |
  |  67  |   UDP    | DHCP Server      |
  |  68  |   UDP    | DHCP Client      |
  |  80  |   TCP    | HTTP             |
  | 110  |   TCP    | POP3             |
  | 143  |   TCP    | IMAP             |
  | 443  |   TCP    | HTTPS            |
  +------+----------+------------------+
`}</pre>
    </div>

    {/* Socket */}
    <h2 className="text-3xl font-bold mt-8">Socket and Connection</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  Socket = IP Address + Port Number

  Example:
  192.168.1.100:80  (Web server socket)
  192.168.1.50:54321 (Client socket)

  Connection (TCP):
  +------------------------+     +------------------------+
  | Source Socket          |     | Destination Socket     |
  | 192.168.1.50:54321     |<--->| 192.168.1.100:80       |
  +------------------------+     +------------------------+

  This 4-tuple uniquely identifies a TCP connection:
  (Source IP, Source Port, Destination IP, Destination Port)
`}</pre>
    </div>

    {/* TCP */}
    <h2 className="text-3xl font-bold mt-8">TCP (Transmission Control Protocol)</h2>
    <p className="leading-relaxed">
      TCP is a connection-oriented, reliable transport protocol. It guarantees delivery of data
      in the correct order with error checking and automatic retransmission of lost packets.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  TCP Characteristics:
  - Connection-oriented (3-way handshake)
  - Reliable delivery (ACKs, retransmissions)
  - Ordered delivery (sequence numbers)
  - Flow control (sliding window)
  - Congestion control
  - Full-duplex communication
  - Byte-stream oriented

  TCP Header (20-60 bytes):

   0                   1                   2                   3
   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  |          Source Port          |       Destination Port        |
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  |                        Sequence Number                        |
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  |                    Acknowledgment Number                      |
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  | Offset|Reserved |U|A|P|R|S|F|            Window               |
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  |           Checksum            |         Urgent Pointer        |
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  |                    Options (if present)                       |
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

  Flags: URG, ACK, PSH, RST, SYN, FIN
`}</pre>
    </div>

    {/* 3-Way Handshake */}
    <h2 className="text-3xl font-bold mt-8">TCP 3-Way Handshake</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  TCP Connection Establishment (3-Way Handshake):

  Client                                      Server
    |                                           |
    |   SYN (Seq=x)                             |
    |------------------------------------------>|
    |                                           |
    |   SYN-ACK (Seq=y, Ack=x+1)                |
    |<------------------------------------------|
    |                                           |
    |   ACK (Seq=x+1, Ack=y+1)                  |
    |------------------------------------------>|
    |                                           |
    |   Connection Established                  |
    |<=========================================>|

  Step 1: Client sends SYN with initial sequence number x
  Step 2: Server responds with SYN-ACK, its sequence y, acknowledges x+1
  Step 3: Client sends ACK, acknowledges y+1

  After handshake: Data transfer can begin


  TCP Connection Termination (4-Way Handshake):

  Client                                      Server
    |                                           |
    |   FIN (Seq=m)                             |
    |------------------------------------------>|
    |                                           |
    |   ACK (Ack=m+1)                           |
    |<------------------------------------------|
    |                                           |
    |   FIN (Seq=n)                             |
    |<------------------------------------------|
    |                                           |
    |   ACK (Ack=n+1)                           |
    |------------------------------------------>|
    |                                           |
    |   Connection Closed                       |
`}</pre>
    </div>

    {/* UDP */}
    <h2 className="text-3xl font-bold mt-8">UDP (User Datagram Protocol)</h2>
    <p className="leading-relaxed">
      UDP is a connectionless, unreliable transport protocol. It provides a simple, lightweight
      communication mechanism without the overhead of connection establishment, reliability, or
      flow control. It is used when speed is more important than reliability.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  UDP Characteristics:
  - Connectionless (no handshake)
  - Unreliable (no ACKs, no retransmission)
  - No ordering (packets may arrive out of order)
  - No flow control
  - No congestion control
  - Low overhead, fast
  - Message-oriented (preserves boundaries)

  UDP Header (8 bytes only):

   0                   1                   2                   3
   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  |          Source Port          |       Destination Port        |
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  |            Length             |           Checksum            |
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
  |                             Data                              |
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

  UDP Header: 8 bytes (vs TCP's 20-60 bytes)
`}</pre>
    </div>

    {/* TCP vs UDP */}
    <h2 className="text-3xl font-bold mt-8">TCP vs UDP Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">TCP</th>
            <th className="p-3 border">UDP</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Connection</td>
            <td className="p-3 border">Connection-oriented</td>
            <td className="p-3 border">Connectionless</td>
          </tr>
          <tr>
            <td className="p-3 border">Reliability</td>
            <td className="p-3 border">Reliable (ACKs, retransmission)</td>
            <td className="p-3 border">Unreliable (best-effort)</td>
          </tr>
          <tr>
            <td className="p-3 border">Ordering</td>
            <td className="p-3 border">Guaranteed order</td>
            <td className="p-3 border">No ordering</td>
          </tr>
          <tr>
            <td className="p-3 border">Header Size</td>
            <td className="p-3 border">20-60 bytes</td>
            <td className="p-3 border">8 bytes</td>
          </tr>
          <tr>
            <td className="p-3 border">Flow Control</td>
            <td className="p-3 border">Yes (sliding window)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Congestion Control</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Slower (overhead)</td>
            <td className="p-3 border">Faster (less overhead)</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Type</td>
            <td className="p-3 border">Byte stream</td>
            <td className="p-3 border">Message-based</td>
          </tr>
          <tr>
            <td className="p-3 border">Use Cases</td>
            <td className="p-3 border">HTTP, FTP, SMTP, SSH</td>
            <td className="p-3 border">DNS, DHCP, VoIP, Gaming, Streaming</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Congestion Control */}
    <h2 className="text-3xl font-bold mt-8">TCP Congestion Control</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  TCP Congestion Control Mechanisms:

  1. Slow Start:
     - Start with cwnd = 1 MSS
     - Double cwnd every RTT (exponential growth)
     - Continue until ssthresh reached

  2. Congestion Avoidance:
     - Increase cwnd by 1 MSS per RTT (linear growth)
     - Triggered when cwnd >= ssthresh

  3. Fast Retransmit:
     - Retransmit after 3 duplicate ACKs
     - Don't wait for timeout

  4. Fast Recovery:
     - After fast retransmit, skip slow start
     - Set ssthresh = cwnd/2
     - Set cwnd = ssthresh + 3 MSS


  Congestion Window (cwnd) Growth:

  cwnd
    |                 *  *  *
    |              *        * <- Congestion Avoidance
    |           *             (linear)
    |        *
    |     *    <- Slow Start
    |   *        (exponential)
    | *
    +----------------------------> Time
      ^         ^
    Start    ssthresh
`}</pre>
    </div>

    {/* Flow Control */}
    <h2 className="text-3xl font-bold mt-8">TCP Flow Control</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  TCP Sliding Window for Flow Control:

  Receiver advertises window size (rwnd) in every ACK
  Sender cannot send more than rwnd unacknowledged bytes

  Sender's View:
  +---+---+---+---+---+---+---+---+---+---+---+---+
  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |10 |11 |12 |
  +---+---+---+---+---+---+---+---+---+---+---+---+
  |<-ACKed->|<-- Sent, waiting -->|<- Can send ->|<- Cannot ->|
            |<-------- Send Window (rwnd) ------->|

  If rwnd = 0, sender stops and periodically probes
  (Zero Window Probing)
`}</pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Transport Layer provides end-to-end communication between applications</li>
      <li>Uses port numbers (0-65535) for multiplexing</li>
      <li>TCP: Connection-oriented, reliable, ordered delivery</li>
      <li>UDP: Connectionless, unreliable, faster</li>
      <li>TCP uses 3-way handshake for connection establishment</li>
      <li>TCP header: 20-60 bytes; UDP header: 8 bytes</li>
      <li>Socket = IP address + Port number</li>
    </ul>

    {/* GATE Important */}
    <h2 className="text-3xl font-bold mt-8">Important for GATE</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Know TCP and UDP header formats and sizes</li>
        <li>Understand 3-way handshake process and flags</li>
        <li>TCP congestion control: Slow Start, Congestion Avoidance, Fast Recovery</li>
        <li>Calculate throughput with sliding window</li>
        <li>Know well-known port numbers (HTTP=80, HTTPS=443, DNS=53, etc.)</li>
        <li>Difference between flow control and congestion control</li>
      </ul>
    </div>
  </div>
);

export default TransportLayer;
