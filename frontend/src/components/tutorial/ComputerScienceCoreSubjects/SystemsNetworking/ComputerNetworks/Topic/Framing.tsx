import React from 'react';

const Framing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Framing in Data Link Layer
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Framing is the process of dividing the bit stream received from the Network Layer into
      manageable data units called frames. Each frame contains a header, data payload, and trailer
      that help in addressing, error detection, and frame delimiting.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Framing is Needed</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Frame Delimiting:</strong> Marks the beginning and end of each frame</li>
      <li><strong>Addressing:</strong> Identifies source and destination devices</li>
      <li><strong>Error Detection:</strong> Enables checking for transmission errors</li>
      <li><strong>Flow Control:</strong> Manages the rate of data transmission</li>
      <li><strong>Synchronization:</strong> Keeps sender and receiver synchronized</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Frame Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Generic Frame Structure:

    +--------+---------+----------+---------+--------+---------+
    |  Flag  |  Dest   |  Source  |  Type/  |  Data  | Trailer |
    | (Start)|  Addr   |   Addr   | Length  | (Payload)| (FCS) |
    +--------+---------+----------+---------+--------+---------+
       |         |          |         |        |         |
    Delimiter  MAC      MAC      Protocol   Packet    Error
              Address  Address    Type      from     Check
                                           Network
                                           Layer
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Framing Methods</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Character Count</h3>
    <p className="leading-relaxed">
      Uses a field in the header to specify the number of characters in the frame.
      Simple but unreliable - if count is corrupted, synchronization is lost.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Character Count Method:

    |5|A|B|C|D|4|E|F|G|6|H|I|J|K|L|...
     |         |       |
     Frame 1   Frame 2 Frame 3
     (5 chars) (4 chars)(6 chars)

    Problem: If count corrupted, all subsequent frames lost
    |5|A|B|C|D|7|E|F|G|6|H|I|J|K|L|...
              ^ Error: Now reads wrong frame boundary
      `}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Character Stuffing (Byte Stuffing)</h3>
    <p className="leading-relaxed">
      Uses special flag characters to mark frame boundaries. If the flag appears in data,
      an escape character is inserted before it.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Character Stuffing:

    Flag byte: 0x7E (01111110)
    Escape byte: 0x7D

    Before stuffing:  [Data contains 0x7E]
    After stuffing:   [0x7D followed by 0x5E]

    Example:
    Original data: A B 0x7E C D
    After stuffing: FLAG A B 0x7D 0x5E C D FLAG
                           ^^^^^^^
                        Escaped flag

    Used in: PPP (Point-to-Point Protocol)
      `}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Bit Stuffing</h3>
    <p className="leading-relaxed">
      Uses a specific bit pattern as flag (usually 01111110). If five consecutive 1s appear
      in data, a 0 is stuffed after them to prevent false flag detection.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Bit Stuffing:

    Flag pattern: 01111110

    Rule: After five consecutive 1s in data, insert a 0

    Original data:    0111111011111110
    After stuffing:   01111101011111010
                           ^       ^
                      Stuffed 0s inserted

    Receiver removes the stuffed bits to get original data.

    Used in: HDLC, Frame Relay
      `}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. Physical Layer Coding Violations</h3>
    <p className="leading-relaxed">
      Uses invalid signal patterns in the physical layer encoding to mark frame boundaries.
      Only works with encoding schemes that have redundancy.
    </p>

    <h2 className="text-3xl font-bold mt-8">Comparison of Framing Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Advantage</th>
            <th className="p-3 border">Disadvantage</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Character Count</td>
            <td className="p-3 border">Simple implementation</td>
            <td className="p-3 border">Cannot recover from errors</td>
          </tr>
          <tr>
            <td className="p-3 border">Character Stuffing</td>
            <td className="p-3 border">Can resynchronize</td>
            <td className="p-3 border">Tied to 8-bit characters</td>
          </tr>
          <tr>
            <td className="p-3 border">Bit Stuffing</td>
            <td className="p-3 border">Works with any bit pattern</td>
            <td className="p-3 border">Variable frame size</td>
          </tr>
          <tr>
            <td className="p-3 border">Coding Violations</td>
            <td className="p-3 border">No overhead</td>
            <td className="p-3 border">Depends on physical layer</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Framing divides bit stream into manageable frames</li>
        <li>Four main methods: Character count, Character stuffing, Bit stuffing, Coding violations</li>
        <li>Character stuffing uses escape sequences for flag bytes</li>
        <li>Bit stuffing inserts 0 after five consecutive 1s</li>
        <li>Modern protocols use bit stuffing (HDLC) or character stuffing (PPP)</li>
      </ul>
    </div>
  </div>
);

export default Framing;
