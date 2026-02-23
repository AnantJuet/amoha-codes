import React from 'react';

const GuidedMedia: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Guided Transmission Media
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Guided transmission media, also known as bounded or wired media, provide a physical pathway
      for signals to travel from sender to receiver. The signals are confined within the physical
      medium, which guides the electromagnetic waves along a specific path.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Guided Media</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Guided Media Classification:

                    Guided Media
                         |
        +----------------+----------------+
        |                |                |
    Twisted Pair     Coaxial          Fiber Optic
        |             Cable              Cable
    +---+---+
    |       |
   UTP    STP
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Twisted Pair Cable</h2>
    <p className="leading-relaxed">
      Twisted pair cable consists of two insulated copper wires twisted together in a helical form.
      The twisting reduces electromagnetic interference (EMI) and crosstalk between adjacent pairs.
    </p>

    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Unshielded Twisted Pair (UTP)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Most common LAN cable</li>
          <li>No metallic shield</li>
          <li>Categories: Cat5, Cat5e, Cat6, Cat6a, Cat7</li>
          <li>Cost-effective and easy to install</li>
          <li>Susceptible to EMI</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Shielded Twisted Pair (STP)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Has metallic shield around wires</li>
          <li>Better protection against EMI</li>
          <li>More expensive than UTP</li>
          <li>Harder to install</li>
          <li>Used in high-interference environments</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Coaxial Cable</h2>
    <p className="leading-relaxed">
      Coaxial cable consists of a central copper conductor surrounded by an insulating layer,
      a metallic shield, and an outer plastic jacket. It can carry signals at higher frequencies
      than twisted pair.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Coaxial Cable Cross-Section:

         Outer Jacket (Plastic)
              |
    +--------------------+
    |   Metallic Shield  |
    |  +-------------+   |
    |  | Insulator   |   |
    |  |  +------+   |   |
    |  |  |Center|   |   |
    |  |  |Copper|   |   |
    |  |  +------+   |   |
    |  +-------------+   |
    +--------------------+
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Fiber Optic Cable</h2>
    <p className="leading-relaxed">
      Fiber optic cable uses light pulses to transmit data through thin glass or plastic fibers.
      It offers the highest bandwidth and is immune to electromagnetic interference.
    </p>

    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Single-Mode Fiber (SMF)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Core diameter: ~9 micrometers</li>
          <li>Single light path</li>
          <li>Longer distances (up to 100 km)</li>
          <li>Higher bandwidth</li>
          <li>More expensive equipment</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Multi-Mode Fiber (MMF)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Core diameter: 50-62.5 micrometers</li>
          <li>Multiple light paths</li>
          <li>Shorter distances (up to 2 km)</li>
          <li>Lower cost equipment (LED)</li>
          <li>Used in LANs and data centers</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Twisted Pair</th>
            <th className="p-3 border">Coaxial</th>
            <th className="p-3 border">Fiber Optic</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Bandwidth</td>
            <td className="p-3 border">Up to 10 Gbps</td>
            <td className="p-3 border">Up to 10 Gbps</td>
            <td className="p-3 border">100+ Gbps</td>
          </tr>
          <tr>
            <td className="p-3 border">Distance</td>
            <td className="p-3 border">100m</td>
            <td className="p-3 border">500m</td>
            <td className="p-3 border">Up to 100 km</td>
          </tr>
          <tr>
            <td className="p-3 border">Cost</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border">EMI Immunity</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Complete</td>
          </tr>
          <tr>
            <td className="p-3 border">Installation</td>
            <td className="p-3 border">Easy</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Difficult</td>
          </tr>
          <tr>
            <td className="p-3 border">Security</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Guided media physically guide signals along a path</li>
        <li>Twisted pair: Most common, cost-effective, limited distance</li>
        <li>Coaxial: Better shielding, used for cable TV and older networks</li>
        <li>Fiber optic: Highest bandwidth, EMI immune, longest distance</li>
        <li>Choose based on bandwidth, distance, cost, and environment</li>
      </ul>
    </div>
  </div>
);

export default GuidedMedia;
