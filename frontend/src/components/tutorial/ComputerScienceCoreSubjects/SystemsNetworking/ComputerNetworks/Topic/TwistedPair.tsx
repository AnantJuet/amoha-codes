import React from 'react';

const TwistedPair: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Twisted Pair Cable
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Twisted pair cable is the most commonly used transmission medium in local area networks.
      It consists of two insulated copper wires twisted together in a helical pattern, which
      helps reduce electromagnetic interference (EMI) and crosstalk.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Twist the Wires?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Reduces Crosstalk:</strong> Minimizes interference between adjacent wire pairs</li>
      <li><strong>Cancels EMI:</strong> External electromagnetic interference affects both wires equally, canceling out noise</li>
      <li><strong>Balanced Transmission:</strong> Signals are carried differentially, improving noise immunity</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Types of Twisted Pair</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Unshielded Twisted Pair (UTP)</h3>
    <p className="leading-relaxed">
      UTP is the most common type of twisted pair cable. It has no metallic shielding and relies
      solely on the twisting of wires for noise cancellation.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    UTP Cable Structure (Cat6):

    +----------------------------------+
    |        Outer Jacket              |
    |   +--+  +--+  +--+  +--+        |
    |   |//|  |//|  |//|  |//|        |
    |   |  |  |  |  |  |  |  |        |
    |   +--+  +--+  +--+  +--+        |
    |   Pair1 Pair2 Pair3 Pair4       |
    +----------------------------------+

    Each pair: Two insulated copper wires twisted together
    Standard: 4 pairs (8 wires total) in RJ-45 connector
      `}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Shielded Twisted Pair (STP)</h3>
    <p className="leading-relaxed">
      STP includes a metallic shield around the twisted pairs for additional protection against EMI.
      It is used in environments with high electromagnetic interference.
    </p>

    <h2 className="text-3xl font-bold mt-8">UTP Categories</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Max Speed</th>
            <th className="p-3 border">Max Frequency</th>
            <th className="p-3 border">Application</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Cat3</td>
            <td className="p-3 border">10 Mbps</td>
            <td className="p-3 border">16 MHz</td>
            <td className="p-3 border">Voice, 10BASE-T (legacy)</td>
          </tr>
          <tr>
            <td className="p-3 border">Cat5</td>
            <td className="p-3 border">100 Mbps</td>
            <td className="p-3 border">100 MHz</td>
            <td className="p-3 border">100BASE-TX (legacy)</td>
          </tr>
          <tr>
            <td className="p-3 border">Cat5e</td>
            <td className="p-3 border">1 Gbps</td>
            <td className="p-3 border">100 MHz</td>
            <td className="p-3 border">1000BASE-T (Gigabit)</td>
          </tr>
          <tr>
            <td className="p-3 border">Cat6</td>
            <td className="p-3 border">10 Gbps (55m)</td>
            <td className="p-3 border">250 MHz</td>
            <td className="p-3 border">10GBASE-T</td>
          </tr>
          <tr>
            <td className="p-3 border">Cat6a</td>
            <td className="p-3 border">10 Gbps (100m)</td>
            <td className="p-3 border">500 MHz</td>
            <td className="p-3 border">10GBASE-T, Data Centers</td>
          </tr>
          <tr>
            <td className="p-3 border">Cat7</td>
            <td className="p-3 border">10 Gbps</td>
            <td className="p-3 border">600 MHz</td>
            <td className="p-3 border">High-performance LANs</td>
          </tr>
          <tr>
            <td className="p-3 border">Cat8</td>
            <td className="p-3 border">25-40 Gbps</td>
            <td className="p-3 border">2000 MHz</td>
            <td className="p-3 border">Data Centers</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">RJ-45 Connector</h2>
    <p className="leading-relaxed">
      The RJ-45 connector is the standard connector for Ethernet networks using twisted pair cable.
      It has 8 pins that connect to the 8 wires (4 pairs) in the cable.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    RJ-45 Pin Configuration (T568B Standard):

    Pin 1: White/Orange   Pin 5: White/Blue
    Pin 2: Orange         Pin 6: Green
    Pin 3: White/Green    Pin 7: White/Brown
    Pin 4: Blue           Pin 8: Brown

    Cable Types:
    - Straight-through: Same wiring on both ends (PC to Switch)
    - Crossover: Different wiring on ends (PC to PC)
    - Modern switches with Auto-MDI/MDIX can use either
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages vs Disadvantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Low cost</li>
          <li>Easy to install and terminate</li>
          <li>Flexible and easy to work with</li>
          <li>Widely available</li>
          <li>Supports various speeds</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2">Disadvantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Limited distance (100m max)</li>
          <li>Susceptible to EMI (especially UTP)</li>
          <li>Lower bandwidth than fiber</li>
          <li>Security concerns (tapping)</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Twisted pair is the most common LAN cable type</li>
        <li>Twisting reduces crosstalk and EMI</li>
        <li>UTP is most common; STP provides extra shielding</li>
        <li>Cat5e and Cat6 are standard for modern networks</li>
        <li>Maximum distance is 100 meters</li>
        <li>RJ-45 is the standard connector</li>
      </ul>
    </div>
  </div>
);

export default TwistedPair;
