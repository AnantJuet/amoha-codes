import React from 'react';

const Microwaves: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Microwave Transmission
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Microwave transmission uses electromagnetic waves in the frequency range of 1 GHz to 300 GHz
      for communication. It requires line-of-sight transmission and is used for point-to-point
      terrestrial links, satellite communication, and wireless networks like Wi-Fi.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Microwave Communication</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Terrestrial Microwave</h3>
    <p className="leading-relaxed">
      Terrestrial microwave uses ground-based antennas to transmit focused beams of microwave
      signals from one tower to another. It requires clear line-of-sight between antennas.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Terrestrial Microwave Link:

                    Line of Sight (~80 km max)
    Tower A ======================================> Tower B
       |                                              |
    [Dish]                                         [Dish]
       |                                              |
    Building                                      Building

    - Parabolic dish antennas (1-3m diameter)
    - Frequencies: 4-6 GHz, 21-23 GHz
    - Used for: Telecom backhaul, point-to-point
      `}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Satellite Microwave</h3>
    <p className="leading-relaxed">
      Satellite communication uses satellites in orbit as relay stations to receive signals from
      one ground station (uplink) and retransmit them to another (downlink).
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Satellite Communication:

                        [Satellite]
                        /         \\
                      /             \\
              Uplink /               \\ Downlink
                   /                   \\
    Ground Station A               Ground Station B
         [Dish]                        [Dish]

    Satellite Orbits:
    - LEO: 500-2000 km (Low latency, many satellites)
    - MEO: 2000-35000 km (GPS satellites)
    - GEO: 35,786 km (Geostationary, high latency)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Satellite Orbit Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Orbit Type</th>
            <th className="p-3 border">Altitude</th>
            <th className="p-3 border">Latency</th>
            <th className="p-3 border">Coverage</th>
            <th className="p-3 border">Applications</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">LEO</td>
            <td className="p-3 border">500-2000 km</td>
            <td className="p-3 border">20-40 ms</td>
            <td className="p-3 border">Small area</td>
            <td className="p-3 border">Starlink, Iridium</td>
          </tr>
          <tr>
            <td className="p-3 border">MEO</td>
            <td className="p-3 border">2000-35000 km</td>
            <td className="p-3 border">100-150 ms</td>
            <td className="p-3 border">Medium area</td>
            <td className="p-3 border">GPS, Navigation</td>
          </tr>
          <tr>
            <td className="p-3 border">GEO</td>
            <td className="p-3 border">35,786 km</td>
            <td className="p-3 border">500-600 ms</td>
            <td className="p-3 border">Large area (1/3 Earth)</td>
            <td className="p-3 border">TV broadcast, weather</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Microwave Frequency Bands</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Band</th>
            <th className="p-3 border">Frequency</th>
            <th className="p-3 border">Use</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">L-band</td>
            <td className="p-3 border">1-2 GHz</td>
            <td className="p-3 border">GPS, mobile satellite</td>
          </tr>
          <tr>
            <td className="p-3 border">S-band</td>
            <td className="p-3 border">2-4 GHz</td>
            <td className="p-3 border">Weather radar, Wi-Fi</td>
          </tr>
          <tr>
            <td className="p-3 border">C-band</td>
            <td className="p-3 border">4-8 GHz</td>
            <td className="p-3 border">Satellite TV, Wi-Fi</td>
          </tr>
          <tr>
            <td className="p-3 border">Ku-band</td>
            <td className="p-3 border">12-18 GHz</td>
            <td className="p-3 border">Satellite TV, VSAT</td>
          </tr>
          <tr>
            <td className="p-3 border">Ka-band</td>
            <td className="p-3 border">26-40 GHz</td>
            <td className="p-3 border">High-throughput satellites</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages vs Disadvantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>High bandwidth capacity</li>
          <li>No cable installation needed</li>
          <li>Covers difficult terrain</li>
          <li>Quick deployment</li>
          <li>Cost-effective for long distances</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2">Disadvantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Requires line of sight</li>
          <li>Affected by weather (rain fade)</li>
          <li>High initial equipment cost</li>
          <li>Limited by Earth curvature</li>
          <li>Security concerns (interception)</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Microwave: 1 GHz to 300 GHz, requires line-of-sight</li>
        <li>Terrestrial: Point-to-point links using dish antennas</li>
        <li>Satellite: LEO (low latency), MEO (GPS), GEO (broadcast)</li>
        <li>Affected by rain fade at higher frequencies</li>
        <li>Used for telecom backhaul, satellite TV, Internet</li>
        <li>Higher frequency = more bandwidth but shorter range</li>
      </ul>
    </div>
  </div>
);

export default Microwaves;
