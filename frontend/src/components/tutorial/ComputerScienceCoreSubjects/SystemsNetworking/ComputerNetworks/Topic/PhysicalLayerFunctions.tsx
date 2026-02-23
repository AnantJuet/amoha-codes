import React from 'react';

const PhysicalLayerFunctions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Physical Layer Functions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Physical Layer is the lowest layer (Layer 1) of the OSI model. It is responsible for the
      actual physical connection between devices and the transmission of raw bits over a communication
      channel. This layer deals with electrical, mechanical, and procedural specifications.
    </p>

    <h2 className="text-3xl font-bold mt-8">Core Functions</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Bit Transmission</h3>
        <p className="text-sm">Converts data bits into signals (electrical, optical, or radio) for transmission over the physical medium.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Physical Topology</h3>
        <p className="text-sm">Defines how devices are physically connected: bus, star, ring, or mesh topology.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Transmission Mode</h3>
        <p className="text-sm">Specifies simplex, half-duplex, or full-duplex communication modes.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Physical Medium</h3>
        <p className="text-sm">Handles the actual medium: copper cables, fiber optics, or wireless signals.</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detailed Functions</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-3 mt-3">
      <li>
        <strong>Bit Synchronization:</strong> Provides synchronization of bits by using a clock signal.
        The sender and receiver must be synchronized at the bit level.
      </li>
      <li>
        <strong>Bit Rate Control:</strong> Defines the transmission rate, i.e., the number of bits
        transmitted per second (bps).
      </li>
      <li>
        <strong>Physical Characteristics of Interface:</strong> Defines the electrical and mechanical
        characteristics of the interface and the transmission medium.
      </li>
      <li>
        <strong>Line Configuration:</strong> Defines point-to-point or multipoint configuration.
      </li>
      <li>
        <strong>Data Encoding:</strong> Converts binary data into signals suitable for transmission
        (NRZ, Manchester, etc.).
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Signal Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Signal Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Analog</td>
            <td className="p-3 border">Continuous signals with infinite values</td>
            <td className="p-3 border">Voice over telephone</td>
          </tr>
          <tr>
            <td className="p-3 border">Digital</td>
            <td className="p-3 border">Discrete signals with finite values (0 and 1)</td>
            <td className="p-3 border">Computer data</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Transmission Modes</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    1. SIMPLEX (One-way communication)
       Sender ---------> Receiver
       Example: Keyboard to Computer, TV broadcast

    2. HALF-DUPLEX (Two-way, but one at a time)
       Device A <-------> Device B
       (Only one transmits at a time)
       Example: Walkie-talkie

    3. FULL-DUPLEX (Two-way simultaneous)
       Device A <========> Device B
       (Both can transmit simultaneously)
       Example: Telephone, modern Ethernet
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Line Configuration</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Point-to-Point</h3>
        <p className="text-sm">Dedicated link between two devices. The entire capacity is reserved for the two devices.</p>
        <div className="font-mono text-xs text-gray-900 mt-2 bg-gray-100 p-2 rounded">
          Device A ======== Device B
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Multipoint</h3>
        <p className="text-sm">Multiple devices share a single link. Capacity is shared among devices.</p>
        <div className="font-mono text-xs text-gray-900 mt-2 bg-gray-100 p-2 rounded">
          A --+-- B --+-- C (shared link)
        </div>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Physical Layer Components</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Cables:</strong> Twisted pair, coaxial, fiber optic</li>
      <li><strong>Connectors:</strong> RJ-45, BNC, SC, ST</li>
      <li><strong>Network Interface Cards (NICs):</strong> Hardware for network connection</li>
      <li><strong>Hubs:</strong> Basic layer 1 devices for connecting multiple hosts</li>
      <li><strong>Repeaters:</strong> Amplify signals to extend transmission distance</li>
      <li><strong>Modems:</strong> Convert digital signals to analog and vice versa</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Physical layer handles raw bit transmission</li>
        <li>Defines electrical, mechanical, and procedural specifications</li>
        <li>Supports simplex, half-duplex, and full-duplex modes</li>
        <li>Works with analog and digital signals</li>
        <li>Includes cables, connectors, NICs, hubs, and repeaters</li>
        <li>Bit synchronization ensures sender and receiver are in sync</li>
      </ul>
    </div>
  </div>
);

export default PhysicalLayerFunctions;
