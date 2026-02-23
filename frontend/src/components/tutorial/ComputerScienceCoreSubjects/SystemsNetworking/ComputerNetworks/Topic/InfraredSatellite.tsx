import React from 'react';

const InfraredSatellite: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Infrared and Satellite Communication
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Infrared communication uses electromagnetic waves with frequencies between 300 GHz and 400 THz
      for short-range, line-of-sight data transmission. Satellite communication, on the other hand,
      uses microwave frequencies relayed through orbiting satellites for global coverage.
    </p>

    <h2 className="text-3xl font-bold mt-8">Infrared Communication</h2>
    <p className="leading-relaxed">
      Infrared (IR) communication transmits data using infrared light waves. It operates at frequencies
      just below visible light and requires a clear line of sight between transmitter and receiver.
      IR signals cannot penetrate walls or solid objects.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Characteristics of Infrared</h3>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>High bandwidth potential</li>
          <li>No interference with radio waves</li>
          <li>Secure (contained within room)</li>
          <li>No licensing required</li>
          <li>Low cost components</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Limitations</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Requires line of sight</li>
          <li>Cannot penetrate walls</li>
          <li>Short range only</li>
          <li>Affected by sunlight</li>
          <li>Limited mobility</li>
        </ul>
      </div>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Types of Infrared Transmission</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Application</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Point-to-Point</td>
            <td className="p-3 border">Direct beam between two devices</td>
            <td className="p-3 border">Remote controls, IrDA</td>
          </tr>
          <tr>
            <td className="p-3 border">Broadcast</td>
            <td className="p-3 border">Signal spread over wide area</td>
            <td className="p-3 border">Indoor wireless LANs</td>
          </tr>
          <tr>
            <td className="p-3 border">Diffused</td>
            <td className="p-3 border">Signal bounced off surfaces</td>
            <td className="p-3 border">Room-wide coverage</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Infrared Applications</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Remote Controls:</strong> TV, AC, and other appliance controls</li>
      <li><strong>IrDA:</strong> Infrared Data Association standard for device communication</li>
      <li><strong>Optical Fiber:</strong> Light transmission in fiber optic cables</li>
      <li><strong>Night Vision:</strong> Security cameras and military applications</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Satellite Communication</h2>
    <p className="leading-relaxed">
      Satellite communication uses artificial satellites as relay stations to transmit signals
      between distant locations on Earth. The system consists of a space segment (satellite) and
      a ground segment (earth stations).
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Satellite Communication System:

                      [SATELLITE]
                     /    |     \\
                    /     |      \\
            Uplink /   Transponder  \\ Downlink
                  /       |          \\
    [Earth Station A]     |     [Earth Station B]
         Sender        Control      Receiver
                       Station

    Components:
    - Uplink: Ground to satellite transmission
    - Downlink: Satellite to ground transmission
    - Transponder: Receives, amplifies, retransmits
      `}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Satellite Types by Orbit</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Orbit</th>
            <th className="p-3 border">Altitude</th>
            <th className="p-3 border">Period</th>
            <th className="p-3 border">Latency</th>
            <th className="p-3 border">Use Cases</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">LEO</td>
            <td className="p-3 border">500-2000 km</td>
            <td className="p-3 border">90-120 min</td>
            <td className="p-3 border">20-40 ms</td>
            <td className="p-3 border">Starlink, Iridium</td>
          </tr>
          <tr>
            <td className="p-3 border">MEO</td>
            <td className="p-3 border">2000-35786 km</td>
            <td className="p-3 border">2-12 hours</td>
            <td className="p-3 border">100-150 ms</td>
            <td className="p-3 border">GPS, Galileo</td>
          </tr>
          <tr>
            <td className="p-3 border">GEO</td>
            <td className="p-3 border">35786 km</td>
            <td className="p-3 border">24 hours</td>
            <td className="p-3 border">500-600 ms</td>
            <td className="p-3 border">TV, Weather</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Satellite Applications</h3>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Communication</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Television broadcasting</li>
          <li>Internet access (Starlink, HughesNet)</li>
          <li>Phone services</li>
          <li>Military communications</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Other Applications</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>GPS navigation</li>
          <li>Weather monitoring</li>
          <li>Earth observation</li>
          <li>Scientific research</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Infrared: Short range, line-of-sight, secure, no wall penetration</li>
        <li>IR used for: Remote controls, IrDA, fiber optics</li>
        <li>Satellite: Global coverage using orbiting relay stations</li>
        <li>LEO: Low latency, many satellites needed (Starlink)</li>
        <li>GEO: Fixed position, high latency, wide coverage (TV)</li>
        <li>Satellite used for: Broadcasting, Internet, GPS, weather</li>
      </ul>
    </div>
  </div>
);

export default InfraredSatellite;
