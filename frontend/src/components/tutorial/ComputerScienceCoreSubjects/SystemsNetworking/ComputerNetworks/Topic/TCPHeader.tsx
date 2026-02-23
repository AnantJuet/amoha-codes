import React from 'react';

const TCPHeader: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      TCP Header Format
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The TCP header is more complex than UDP, containing fields for connection management,
      sequencing, acknowledgments, flow control, and various flags. The minimum header size
      is 20 bytes, which can extend to 60 bytes with options.
    </p>

    <h2 className="text-3xl font-bold mt-8">TCP Header Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
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
    |  Data |     |N|C|E|U|A|P|R|S|F|                               |
    | Offset| Res |S|W|C|R|C|S|S|Y|I|            Window             |
    |       |     | |R|E|G|K|H|T|N|N|                               |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |           Checksum            |         Urgent Pointer        |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |                    Options (if Data Offset > 5)               |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Header Fields</h2>
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
            <td className="p-3 border">Sender's port number</td>
          </tr>
          <tr>
            <td className="p-3 border">Destination Port</td>
            <td className="p-3 border">16 bits</td>
            <td className="p-3 border">Receiver's port number</td>
          </tr>
          <tr>
            <td className="p-3 border">Sequence Number</td>
            <td className="p-3 border">32 bits</td>
            <td className="p-3 border">Position of first data byte</td>
          </tr>
          <tr>
            <td className="p-3 border">Acknowledgment Number</td>
            <td className="p-3 border">32 bits</td>
            <td className="p-3 border">Next expected byte (if ACK set)</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Offset</td>
            <td className="p-3 border">4 bits</td>
            <td className="p-3 border">Header length in 32-bit words</td>
          </tr>
          <tr>
            <td className="p-3 border">Flags</td>
            <td className="p-3 border">9 bits</td>
            <td className="p-3 border">Control flags (SYN, ACK, FIN, etc.)</td>
          </tr>
          <tr>
            <td className="p-3 border">Window</td>
            <td className="p-3 border">16 bits</td>
            <td className="p-3 border">Receive window size (flow control)</td>
          </tr>
          <tr>
            <td className="p-3 border">Checksum</td>
            <td className="p-3 border">16 bits</td>
            <td className="p-3 border">Error detection</td>
          </tr>
          <tr>
            <td className="p-3 border">Urgent Pointer</td>
            <td className="p-3 border">16 bits</td>
            <td className="p-3 border">Points to urgent data (if URG set)</td>
          </tr>
          <tr>
            <td className="p-3 border">Options</td>
            <td className="p-3 border">Variable</td>
            <td className="p-3 border">MSS, Window Scale, SACK, etc.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">TCP Flags</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Flag</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">SYN</td>
            <td className="p-3 border">Synchronize</td>
            <td className="p-3 border">Initiate connection, sync seq numbers</td>
          </tr>
          <tr>
            <td className="p-3 border">ACK</td>
            <td className="p-3 border">Acknowledgment</td>
            <td className="p-3 border">ACK number field is valid</td>
          </tr>
          <tr>
            <td className="p-3 border">FIN</td>
            <td className="p-3 border">Finish</td>
            <td className="p-3 border">Sender finished sending data</td>
          </tr>
          <tr>
            <td className="p-3 border">RST</td>
            <td className="p-3 border">Reset</td>
            <td className="p-3 border">Abort connection immediately</td>
          </tr>
          <tr>
            <td className="p-3 border">PSH</td>
            <td className="p-3 border">Push</td>
            <td className="p-3 border">Deliver data immediately</td>
          </tr>
          <tr>
            <td className="p-3 border">URG</td>
            <td className="p-3 border">Urgent</td>
            <td className="p-3 border">Urgent pointer field is valid</td>
          </tr>
          <tr>
            <td className="p-3 border">ECE</td>
            <td className="p-3 border">ECN-Echo</td>
            <td className="p-3 border">Congestion indication</td>
          </tr>
          <tr>
            <td className="p-3 border">CWR</td>
            <td className="p-3 border">Congestion Window Reduced</td>
            <td className="p-3 border">Sender reduced congestion window</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common TCP Options</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li><strong>MSS (Maximum Segment Size):</strong> Max data in segment (default 536)</li>
        <li><strong>Window Scale:</strong> Multiply window by 2^n for large windows</li>
        <li><strong>SACK (Selective ACK):</strong> ACK non-contiguous blocks</li>
        <li><strong>Timestamps:</strong> RTT calculation, PAWS protection</li>
        <li><strong>NOP:</strong> Padding for alignment</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Window Field</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Receive Window (Flow Control):

    Window field: 16 bits = max 65,535 bytes

    With Window Scaling (option):
    Actual Window = Window Field * 2^(scale factor)

    Example:
    Window Field: 65535
    Scale Factor: 7
    Actual Window: 65535 * 128 = 8,388,480 bytes (~8MB)

    Receiver advertises available buffer space
    Sender cannot send more than window allows
      `}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>TCP header: 20-60 bytes (minimum 20)</li>
        <li>Data Offset indicates header length</li>
        <li>Flags control connection state (SYN, ACK, FIN)</li>
        <li>Sequence/ACK numbers enable reliability</li>
        <li>Window field enables flow control</li>
        <li>Options extend functionality (MSS, SACK, etc.)</li>
      </ul>
    </div>
  </div>
);

export default TCPHeader;
