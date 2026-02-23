import React from 'react';

const RadioWaves: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Radio Waves in Networking
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Radio waves are electromagnetic waves with frequencies ranging from 3 kHz to 1 GHz. They are
      widely used in wireless networking due to their ability to travel long distances, penetrate
      obstacles, and provide omnidirectional coverage. Radio waves form the basis of cellular
      networks, Wi-Fi, Bluetooth, and broadcast communications.
    </p>

    <h2 className="text-3xl font-bold mt-8">Radio Wave Characteristics</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Omnidirectional:</strong> Signals spread in all directions from the transmitter</li>
      <li><strong>Penetration:</strong> Can pass through walls and obstacles (lower frequencies better)</li>
      <li><strong>Long Range:</strong> Can travel long distances with proper power</li>
      <li><strong>Interference Prone:</strong> Subject to electromagnetic interference from other sources</li>
      <li><strong>Frequency Dependent:</strong> Behavior varies significantly with frequency</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Radio Frequency Bands</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Band</th>
            <th className="p-3 border">Frequency Range</th>
            <th className="p-3 border">Applications</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">VLF (Very Low)</td>
            <td className="p-3 border">3 - 30 kHz</td>
            <td className="p-3 border">Submarine communication</td>
          </tr>
          <tr>
            <td className="p-3 border">LF (Low)</td>
            <td className="p-3 border">30 - 300 kHz</td>
            <td className="p-3 border">Navigation, AM radio</td>
          </tr>
          <tr>
            <td className="p-3 border">MF (Medium)</td>
            <td className="p-3 border">300 kHz - 3 MHz</td>
            <td className="p-3 border">AM radio broadcasting</td>
          </tr>
          <tr>
            <td className="p-3 border">HF (High)</td>
            <td className="p-3 border">3 - 30 MHz</td>
            <td className="p-3 border">Shortwave radio, amateur radio</td>
          </tr>
          <tr>
            <td className="p-3 border">VHF (Very High)</td>
            <td className="p-3 border">30 - 300 MHz</td>
            <td className="p-3 border">FM radio, TV broadcast</td>
          </tr>
          <tr>
            <td className="p-3 border">UHF (Ultra High)</td>
            <td className="p-3 border">300 MHz - 3 GHz</td>
            <td className="p-3 border">TV, cellular, Wi-Fi, Bluetooth</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Radio Wave Propagation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Types of Radio Wave Propagation:

    1. GROUND WAVE (Low Frequency)
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       Follows Earth's curvature
       Used for: AM radio, navigation
       Range: Hundreds of km

    2. SKY WAVE (HF)
       Transmitter      Ionosphere       Receiver
            |         ___________         |
            |        /           \\        |
            |_______/             \\_______|
       Reflected by ionosphere
       Range: Thousands of km

    3. LINE OF SIGHT (VHF/UHF)
       Transmitter ----------------> Receiver
       Direct path, limited by horizon
       Used for: FM, TV, cellular, Wi-Fi
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Networking Applications</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Cellular Networks</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>2G/GSM: 900/1800 MHz</li>
          <li>3G/UMTS: 850/1900/2100 MHz</li>
          <li>4G/LTE: 700-2600 MHz</li>
          <li>5G: 600 MHz - 6 GHz (sub-6)</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Wi-Fi (IEEE 802.11)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>2.4 GHz band (802.11b/g/n)</li>
          <li>5 GHz band (802.11a/n/ac/ax)</li>
          <li>Uses ISM (unlicensed) bands</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Bluetooth</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>2.4 GHz ISM band</li>
          <li>Short range (10-100m)</li>
          <li>Low power consumption</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">RFID/NFC</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>LF: 125-134 kHz</li>
          <li>HF: 13.56 MHz (NFC)</li>
          <li>UHF: 860-960 MHz</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Antenna Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Antenna Type</th>
            <th className="p-3 border">Pattern</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Omnidirectional</td>
            <td className="p-3 border">360-degree coverage</td>
            <td className="p-3 border">Wi-Fi access points, mobile devices</td>
          </tr>
          <tr>
            <td className="p-3 border">Directional</td>
            <td className="p-3 border">Focused beam</td>
            <td className="p-3 border">Point-to-point links, satellite dishes</td>
          </tr>
          <tr>
            <td className="p-3 border">Sector</td>
            <td className="p-3 border">90-120 degree coverage</td>
            <td className="p-3 border">Cellular base stations</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Radio waves: 3 kHz to 1 GHz frequency range</li>
        <li>Omnidirectional propagation, can penetrate obstacles</li>
        <li>Used for cellular, Wi-Fi, Bluetooth, broadcasting</li>
        <li>Propagation: ground wave, sky wave, line-of-sight</li>
        <li>Subject to interference and regulatory restrictions</li>
        <li>Lower frequency = longer range but lower bandwidth</li>
      </ul>
    </div>
  </div>
);

export default RadioWaves;
