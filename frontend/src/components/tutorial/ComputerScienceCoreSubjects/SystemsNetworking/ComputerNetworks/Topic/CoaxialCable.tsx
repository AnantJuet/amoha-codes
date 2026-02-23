import React from 'react';

const CoaxialCable: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Coaxial Cable
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Coaxial cable (coax) is a type of guided transmission media that consists of a central copper
      conductor surrounded by insulation, a metallic shield, and an outer jacket. It can carry
      signals at higher frequencies than twisted pair cable and provides better shielding from
      electromagnetic interference.
    </p>

    <h2 className="text-3xl font-bold mt-8">Structure of Coaxial Cable</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Coaxial Cable Cross-Section:

    +-----------------------------------------------+
    |            Outer Jacket (PVC)                 |
    |  +-----------------------------------------+  |
    |  |        Metallic Shield (Braided)        |  |
    |  |  +-----------------------------------+  |  |
    |  |  |      Insulator (Dielectric)       |  |  |
    |  |  |  +-----------------------------+  |  |  |
    |  |  |  |    Center Conductor (Copper)|  |  |  |
    |  |  |  +-----------------------------+  |  |  |
    |  |  +-----------------------------------+  |  |
    |  +-----------------------------------------+  |
    +-----------------------------------------------+

    Components:
    1. Center Conductor: Copper wire (solid or stranded)
    2. Dielectric Insulator: Separates conductor from shield
    3. Metallic Shield: Protects against EMI (braid or foil)
    4. Outer Jacket: Protective covering
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Coaxial Cable</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Impedance</th>
            <th className="p-3 border">Common Use</th>
            <th className="p-3 border">Connector</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">RG-6</td>
            <td className="p-3 border">75 ohm</td>
            <td className="p-3 border">Cable TV, Satellite</td>
            <td className="p-3 border">F-type</td>
          </tr>
          <tr>
            <td className="p-3 border">RG-59</td>
            <td className="p-3 border">75 ohm</td>
            <td className="p-3 border">CCTV, Video</td>
            <td className="p-3 border">BNC, F-type</td>
          </tr>
          <tr>
            <td className="p-3 border">RG-58</td>
            <td className="p-3 border">50 ohm</td>
            <td className="p-3 border">10BASE2 Ethernet (legacy)</td>
            <td className="p-3 border">BNC</td>
          </tr>
          <tr>
            <td className="p-3 border">RG-8</td>
            <td className="p-3 border">50 ohm</td>
            <td className="p-3 border">10BASE5 Ethernet (legacy)</td>
            <td className="p-3 border">N-type</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Coaxial Cable Standards</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Thicknet (10BASE5)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Original Ethernet standard</li>
          <li>500m maximum segment length</li>
          <li>Thick, stiff cable (10mm diameter)</li>
          <li>AUI connector to transceivers</li>
          <li>Rarely used today</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Thinnet (10BASE2)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Thin Ethernet or Cheapernet</li>
          <li>185m maximum segment length</li>
          <li>Thinner, flexible cable (5mm)</li>
          <li>BNC connectors</li>
          <li>Legacy technology</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Connectors</h2>
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">BNC Connector</h3>
        <p className="text-sm">Bayonet Neill-Concelman. Used in legacy Ethernet and video applications. Twist-lock mechanism.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">F-Type Connector</h3>
        <p className="text-sm">Most common for cable TV and satellite. Screw-on connector. Low cost and easy to install.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">N-Type Connector</h3>
        <p className="text-sm">Larger, weatherproof connector. Used for outdoor and industrial applications.</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Cable Television (CATV):</strong> Primary use today for TV signal distribution</li>
      <li><strong>Internet Service:</strong> Used by cable ISPs for broadband access</li>
      <li><strong>CCTV Systems:</strong> Security camera installations</li>
      <li><strong>Radio Transmission:</strong> Antenna connections</li>
      <li><strong>Legacy Ethernet:</strong> 10BASE2 and 10BASE5 networks</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Advantages vs Disadvantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>High bandwidth capacity</li>
          <li>Good EMI shielding</li>
          <li>Longer distances than twisted pair</li>
          <li>Can carry multiple channels</li>
          <li>Durable and reliable</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2">Disadvantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>More expensive than twisted pair</li>
          <li>Harder to install (less flexible)</li>
          <li>Single cable failure affects network</li>
          <li>Largely replaced by fiber optic</li>
          <li>Heavier and bulkier</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Coaxial cable has a center conductor surrounded by insulation and shield</li>
        <li>Provides better EMI protection than twisted pair</li>
        <li>75 ohm cables used for video, 50 ohm for data (legacy)</li>
        <li>Common connectors: BNC, F-type, N-type</li>
        <li>Still widely used for cable TV and broadband internet</li>
        <li>Legacy Ethernet standards (10BASE2, 10BASE5) used coax</li>
      </ul>
    </div>
  </div>
);

export default CoaxialCable;
