import React from 'react';

const CharacterStuffing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Character Stuffing (Byte Stuffing)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Character stuffing, also known as byte stuffing, is a framing technique used to delimit
      frames when the data may contain the same byte pattern as the frame delimiter. Special
      escape sequences are inserted to distinguish data bytes from control bytes.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Problem</h2>
    <p className="leading-relaxed">
      When a special flag byte (like 0x7E) marks the start and end of a frame, what happens
      if the actual data contains the same byte? The receiver would incorrectly interpret it
      as the end of the frame.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Problem Scenario:

    Flag byte: 0x7E

    Data to send: [A] [B] [0x7E] [C] [D]

    Without stuffing:
    |FLAG|A|B|0x7E|C|D|FLAG|
              ^
              Receiver thinks frame ends here!

    Result: Frame is truncated, data is lost
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">The Solution: Character Stuffing</h2>
    <p className="leading-relaxed">
      Insert an escape byte (ESC) before any flag or escape byte that appears in the data.
      The receiver removes the escape bytes to recover the original data.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Character Stuffing Rules (PPP Example):

    Flag byte: 0x7E (01111110)
    Escape byte: 0x7D (01111101)

    SENDING (Stuffing):
    - If data contains 0x7E: Replace with 0x7D 0x5E
    - If data contains 0x7D: Replace with 0x7D 0x5D

    Example:
    Original data:  [A] [B] [0x7E] [0x7D] [C]
    After stuffing: [A] [B] [0x7D][0x5E] [0x7D][0x5D] [C]
                            ^^^^^        ^^^^^
                           Escaped      Escaped

    RECEIVING (Unstuffing):
    - If 0x7D followed by 0x5E: Replace with 0x7E
    - If 0x7D followed by 0x5D: Replace with 0x7D
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Frame Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    PPP Frame with Character Stuffing:

    Original Data: "Hello" + 0x7E + "World"

    Step 1: Add frame delimiters
    |0x7E|Hello|0x7E|World|0x7E|
                ^
                Problem!

    Step 2: Stuff the embedded flag
    |0x7E|Hello|0x7D 0x5E|World|0x7E|
          |_____|________|_____|
               Stuffed Frame

    At Receiver:
    1. Detect start flag (0x7E)
    2. Read data, when 0x7D seen, XOR next byte with 0x20
       0x7D 0x5E -> 0x5E XOR 0x20 = 0x7E
    3. Continue until end flag
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">XOR-based Transformation</h2>
    <p className="leading-relaxed">
      PPP uses XOR with 0x20 for the transformation. After the escape byte (0x7D), the
      next byte is XORed with 0x20 to get the original value.
    </p>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <h3 className="font-bold mb-2">XOR Rule</h3>
      <div className="font-mono text-sm text-gray-900">
        0x7E XOR 0x20 = 0x5E (sent after escape)<br/>
        0x7D XOR 0x20 = 0x5D (sent after escape)<br/><br/>
        At receiver: 0x5E XOR 0x20 = 0x7E (original)<br/>
        At receiver: 0x5D XOR 0x20 = 0x7D (original)
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages vs Disadvantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Allows any data to be transmitted</li>
          <li>Easy to resynchronize after errors</li>
          <li>Simple to implement</li>
          <li>Works with byte-oriented protocols</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2">Disadvantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Overhead for data with many flags/escapes</li>
          <li>Tied to 8-bit character boundaries</li>
          <li>Frame size increases with stuffed bytes</li>
          <li>Not suitable for bit-oriented data</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Where Character Stuffing is Used</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>PPP (Point-to-Point Protocol):</strong> Primary use case for dial-up and DSL</li>
      <li><strong>Serial Communication:</strong> RS-232 and similar protocols</li>
      <li><strong>Modem Communication:</strong> Legacy dial-up connections</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Character stuffing prevents data from being confused with frame delimiters</li>
        <li>Uses escape byte (0x7D) before flag (0x7E) in data</li>
        <li>PPP uses XOR with 0x20 for transformation</li>
        <li>Receiver removes escape bytes to recover original data</li>
        <li>Adds overhead when data contains many flag/escape bytes</li>
        <li>Works at byte boundaries, not suitable for bit-level protocols</li>
      </ul>
    </div>
  </div>
);

export default CharacterStuffing;
