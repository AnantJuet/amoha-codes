import React from 'react';

const UnguidedMedia: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Unguided Transmission Media (Wireless)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Unguided transmission media, also known as wireless or unbounded media, transmit electromagnetic
      signals through the air without using physical conductors. The signals propagate through space
      and can be received by any device with an appropriate antenna within range.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Unguided Media</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Electromagnetic Spectrum for Wireless Communication:

    Frequency:  3 kHz -----> 300 GHz -----> 400 THz+
                   |            |              |
              Radio Waves  Microwaves    Infrared/Light

    +------------------+------------------+------------------+
    |   Radio Waves    |   Microwaves     |    Infrared      |
    |   (3 kHz-1 GHz)  |   (1-300 GHz)    |   (300 GHz-THz)  |
    +------------------+------------------+------------------+
    | AM/FM Radio      | Satellite        | Remote Controls  |
    | TV Broadcast     | Radar            | Short-range      |
    | Cellular (LTE)   | Wi-Fi            | IrDA devices     |
    | Bluetooth        | WiMAX            |                  |
    +------------------+------------------+------------------+
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Radio Waves</h2>
    <p className="leading-relaxed">
      Radio waves range from 3 kHz to 1 GHz and are used for long-distance communication. They can
      penetrate buildings and travel around obstacles, making them suitable for broadcast and
      mobile communications.
    </p>

    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Characteristics</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Omnidirectional propagation</li>
          <li>Can penetrate walls</li>
          <li>Subject to interference</li>
          <li>Long-range transmission</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Applications</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>AM/FM radio broadcasting</li>
          <li>Television broadcasting</li>
          <li>Cellular networks (2G, 3G, LTE)</li>
          <li>Bluetooth, Zigbee</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Microwaves</h2>
    <p className="leading-relaxed">
      Microwaves range from 1 GHz to 300 GHz and require line-of-sight transmission. They are used
      for point-to-point communication over moderate distances and for satellite communication.
    </p>

    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Terrestrial Microwave</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Point-to-point transmission</li>
          <li>Requires line of sight</li>
          <li>Uses parabolic dish antennas</li>
          <li>Distance: ~80 km per hop</li>
          <li>Used for: Telecom backhaul</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Satellite Microwave</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Uses satellites as relay stations</li>
          <li>Global coverage possible</li>
          <li>High latency (GEO satellites)</li>
          <li>Used for: GPS, TV, Internet</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Infrared</h2>
    <p className="leading-relaxed">
      Infrared waves are used for short-range, line-of-sight communication. They cannot penetrate
      walls, which provides security but limits their range and application.
    </p>

    <div className="p-4 border rounded-lg mt-4">
      <h3 className="font-bold text-lg mb-2">Applications</h3>
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>TV remote controls</li>
        <li>IrDA (legacy device communication)</li>
        <li>Short-range indoor communication</li>
        <li>Security systems</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Radio Waves</th>
            <th className="p-3 border">Microwaves</th>
            <th className="p-3 border">Infrared</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Frequency</td>
            <td className="p-3 border">3 kHz - 1 GHz</td>
            <td className="p-3 border">1 - 300 GHz</td>
            <td className="p-3 border">300 GHz - 400 THz</td>
          </tr>
          <tr>
            <td className="p-3 border">Propagation</td>
            <td className="p-3 border">Omnidirectional</td>
            <td className="p-3 border">Line-of-sight</td>
            <td className="p-3 border">Line-of-sight</td>
          </tr>
          <tr>
            <td className="p-3 border">Wall Penetration</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Limited</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Range</td>
            <td className="p-3 border">Long</td>
            <td className="p-3 border">Medium-Long</td>
            <td className="p-3 border">Short</td>
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

    <h2 className="text-3xl font-bold mt-8">Advantages vs Disadvantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>No physical cables required</li>
          <li>Mobility and flexibility</li>
          <li>Easy to install and expand</li>
          <li>Can cover large areas</li>
          <li>Cost-effective for wide areas</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2">Disadvantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Subject to interference</li>
          <li>Security concerns (eavesdropping)</li>
          <li>Weather can affect signals</li>
          <li>Regulatory restrictions on spectrum</li>
          <li>Lower bandwidth than fiber</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Unguided media transmit signals through air without physical conductors</li>
        <li>Radio waves: long range, omnidirectional, penetrate walls</li>
        <li>Microwaves: line-of-sight, used for point-to-point and satellite</li>
        <li>Infrared: short range, cannot penetrate walls, secure</li>
        <li>Wi-Fi, Bluetooth, cellular networks use unguided media</li>
        <li>Subject to interference and security concerns</li>
      </ul>
    </div>
  </div>
);

export default UnguidedMedia;
