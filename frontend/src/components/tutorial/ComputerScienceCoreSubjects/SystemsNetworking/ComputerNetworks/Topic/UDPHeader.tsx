import React from 'react';

const UDPHeader: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      UDP Header Format
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The UDP header is remarkably simple, consisting of only 8 bytes (64 bits). This minimal
      overhead is one of UDP's main advantages, allowing for fast transmission with low
      processing requirements. Each field serves a specific purpose in datagram delivery.
    </p>

    <h2 className="text-3xl font-bold mt-8">UDP Header Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    UDP Header (8 bytes total):

     0                   1                   2                   3
     0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |          Source Port          |       Destination Port        |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |            Length             |           Checksum            |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

    Byte 0-1: Source Port (16 bits)
    Byte 2-3: Destination Port (16 bits)
    Byte 4-5: Length (16 bits)
    Byte 6-7: Checksum (16 bits)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Header Fields Explained</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Field</th>
            <th className="p-3 border">Size</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Source Port</td>
            <td className="p-3 border">16 bits</td>
            <td className="p-3 border">Sender's port (optional, 0 if unused)</td>
          </tr>
          <tr>
            <td className="p-3 border">Destination Port</td>
            <td className="p-3 border">16 bits</td>
            <td className="p-3 border">Receiver's port (required)</td>
          </tr>
          <tr>
            <td className="p-3 border">Length</td>
            <td className="p-3 border">16 bits</td>
            <td className="p-3 border">Total datagram size (header + data)</td>
          </tr>
          <tr>
            <td className="p-3 border">Checksum</td>
            <td className="p-3 border">16 bits</td>
            <td className="p-3 border">Error detection (optional IPv4, mandatory IPv6)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Source Port</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Identifies the sending process</li>
        <li>Optional - can be 0 if no reply expected</li>
        <li>Used by receiver to send responses</li>
        <li>Range: 0-65535</li>
        <li>Usually ephemeral port (49152-65535) for clients</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Destination Port</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Identifies the receiving process</li>
        <li>Required - must be specified</li>
        <li>Used for demultiplexing at receiver</li>
        <li>Well-known ports: 0-1023 (DNS=53, DHCP=67,68)</li>
        <li>Registered ports: 1024-49151</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Length Field</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Length Field Details:

    Length = UDP Header (8 bytes) + Data

    Minimum length: 8 bytes (header only, no data)
    Maximum length: 65,535 bytes (theoretical)

    Practical maximum:
    65,535 - 20 (IP header) - 8 (UDP header) = 65,507 bytes

    But typically limited by MTU:
    1500 (Ethernet MTU) - 20 (IP) - 8 (UDP) = 1472 bytes

    Example:
    Data: 100 bytes
    Length field: 108 (100 + 8)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Checksum Calculation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    UDP Checksum (includes pseudo-header):

    +--------+--------+--------+--------+
    |          Source IP Address         |  Pseudo
    +--------+--------+--------+--------+  Header
    |       Destination IP Address       |  (from IP)
    +--------+--------+--------+--------+
    |  Zero  |Protocol|    UDP Length    |
    +--------+--------+--------+--------+
    |     Source Port |   Dest Port      |  UDP
    +--------+--------+--------+--------+  Header
    |      Length     |    Checksum      |
    +--------+--------+--------+--------+
    |              Data                  |
    +--------+--------+--------+--------+

    Calculation:
    1. Create pseudo-header from IP info
    2. Add UDP header (checksum = 0)
    3. Add data (pad if odd length)
    4. Calculate one's complement sum
    5. Take one's complement of result

    IPv4: Optional (0 = not computed)
    IPv6: Mandatory
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">UDP vs TCP Header</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">UDP</th>
            <th className="p-3 border">TCP</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Header Size</td>
            <td className="p-3 border">8 bytes</td>
            <td className="p-3 border">20-60 bytes</td>
          </tr>
          <tr>
            <td className="p-3 border">Fields</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">10+</td>
          </tr>
          <tr>
            <td className="p-3 border">Sequence Numbers</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Flags</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes (SYN, ACK, FIN...)</td>
          </tr>
          <tr>
            <td className="p-3 border">Window Size</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>UDP header is only 8 bytes (4 fields)</li>
        <li>Source port is optional (can be 0)</li>
        <li>Length includes both header and data</li>
        <li>Checksum uses pseudo-header from IP</li>
        <li>Checksum optional in IPv4, mandatory in IPv6</li>
        <li>Much simpler than TCP's 20+ byte header</li>
      </ul>
    </div>
  </div>
);

export default UDPHeader;
