import React from 'react';

const FiberOptic: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Fiber Optic Cable
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Fiber optic cable uses light pulses to transmit data through thin strands of glass or plastic
      fibers. It offers the highest bandwidth, longest transmission distances, and complete immunity
      to electromagnetic interference, making it the preferred choice for high-speed networks and
      long-distance communication.
    </p>

    <h2 className="text-3xl font-bold mt-8">Structure of Fiber Optic Cable</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Fiber Optic Cable Cross-Section:

    +-----------------------------------------------+
    |              Outer Jacket                     |
    |  +-----------------------------------------+  |
    |  |           Strength Members              |  |
    |  |  +-----------------------------------+  |  |
    |  |  |            Buffer Coating         |  |  |
    |  |  |  +-----------------------------+  |  |  |
    |  |  |  |          Cladding           |  |  |  |
    |  |  |  |  +-----------------------+  |  |  |  |
    |  |  |  |  |    Core (Glass/Plastic) |  |  |  |
    |  |  |  |  +-----------------------+  |  |  |  |
    |  |  |  +-----------------------------+  |  |  |
    |  |  +-----------------------------------+  |  |
    |  +-----------------------------------------+  |
    +-----------------------------------------------+

    Components:
    - Core: Carries the light signals (glass or plastic)
    - Cladding: Reflects light back into core (lower refractive index)
    - Buffer: Protects the fiber from damage
    - Strength Members: Kevlar or steel for mechanical strength
    - Outer Jacket: Overall protection
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Fiber Optic Cable</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Single-Mode Fiber (SMF)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Core diameter: 8-10 micrometers</li>
          <li>Single light path (mode)</li>
          <li>Uses laser light source</li>
          <li>Distance: Up to 100+ km</li>
          <li>Higher bandwidth</li>
          <li>More expensive equipment</li>
          <li>Used for: WANs, long-haul telecom</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Multi-Mode Fiber (MMF)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Core diameter: 50-62.5 micrometers</li>
          <li>Multiple light paths (modes)</li>
          <li>Uses LED or VCSEL light source</li>
          <li>Distance: Up to 2 km</li>
          <li>Lower bandwidth than SMF</li>
          <li>Less expensive equipment</li>
          <li>Used for: LANs, data centers</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">How Light Travels in Fiber</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Total Internal Reflection:

    Single-Mode:
         _________________________________
        /                                 \\
    -->|  =============================>  |-->
        \\_________________________________/
        Light travels in straight path

    Multi-Mode:
         _________________________________
        /    \\  /  \\  /  \\  /  \\  /      \\
    -->|     \\/    \\/    \\/    \\/    -->  |-->
        \\____/\\____/\\____/\\____/\\________/
        Light bounces at different angles (modes)

    Light stays in core because cladding has
    lower refractive index, causing reflection.
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fiber Optic Connectors</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Connector</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Coupling</th>
            <th className="p-3 border">Common Use</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">SC</td>
            <td className="p-3 border">Square/Standard</td>
            <td className="p-3 border">Push-pull</td>
            <td className="p-3 border">Data networks, telecom</td>
          </tr>
          <tr>
            <td className="p-3 border">LC</td>
            <td className="p-3 border">Lucent</td>
            <td className="p-3 border">Push-pull (small)</td>
            <td className="p-3 border">High-density applications</td>
          </tr>
          <tr>
            <td className="p-3 border">ST</td>
            <td className="p-3 border">Straight Tip</td>
            <td className="p-3 border">Bayonet twist</td>
            <td className="p-3 border">Multimode networks</td>
          </tr>
          <tr>
            <td className="p-3 border">FC</td>
            <td className="p-3 border">Ferrule</td>
            <td className="p-3 border">Screw-on</td>
            <td className="p-3 border">Single-mode, test equipment</td>
          </tr>
          <tr>
            <td className="p-3 border">MT-RJ</td>
            <td className="p-3 border">Mechanical Transfer</td>
            <td className="p-3 border">RJ-style</td>
            <td className="p-3 border">Duplex connections</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages vs Disadvantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Extremely high bandwidth (100+ Gbps)</li>
          <li>Long distance (100+ km without repeater)</li>
          <li>Complete immunity to EMI</li>
          <li>Difficult to tap (secure)</li>
          <li>Lightweight and small diameter</li>
          <li>No electrical hazards</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2">Disadvantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Higher initial cost</li>
          <li>Specialized equipment needed</li>
          <li>Difficult to splice and terminate</li>
          <li>Fragile - can break if bent too much</li>
          <li>Requires trained technicians</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Internet Backbone:</strong> Undersea cables and long-haul networks</li>
      <li><strong>Data Centers:</strong> High-speed interconnects between servers</li>
      <li><strong>FTTH/FTTP:</strong> Fiber to the Home/Premises for broadband</li>
      <li><strong>Telecommunications:</strong> Phone and mobile network infrastructure</li>
      <li><strong>Medical:</strong> Endoscopes and medical imaging</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Fiber optic uses light for data transmission</li>
        <li>Single-mode: long distance, high bandwidth, laser source</li>
        <li>Multi-mode: shorter distance, LED/VCSEL source, data centers</li>
        <li>Total internal reflection keeps light in the core</li>
        <li>Common connectors: SC, LC, ST, FC</li>
        <li>Immune to EMI, highest bandwidth, most secure</li>
      </ul>
    </div>
  </div>
);

export default FiberOptic;
