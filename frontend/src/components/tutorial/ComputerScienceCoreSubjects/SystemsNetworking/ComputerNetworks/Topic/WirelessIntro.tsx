import React from "react";

const WirelessIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Wireless Networks
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      Wireless networks enable devices to communicate without physical cables, using radio waves,
      infrared, or satellite signals. From WiFi and Bluetooth to cellular networks, wireless
      technology has revolutionized how we connect, enabling mobility and flexibility that wired
      networks cannot provide.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Types of Wireless Networks</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Range</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Technology</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Example Use</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">WPAN</td>
            <td className="border border-gray-300 px-4 py-2">~10m</td>
            <td className="border border-gray-300 px-4 py-2">Bluetooth, Zigbee, NFC</td>
            <td className="border border-gray-300 px-4 py-2">Headphones, IoT sensors</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">WLAN</td>
            <td className="border border-gray-300 px-4 py-2">~100m</td>
            <td className="border border-gray-300 px-4 py-2">WiFi (802.11)</td>
            <td className="border border-gray-300 px-4 py-2">Home/office networking</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">WMAN</td>
            <td className="border border-gray-300 px-4 py-2">~50km</td>
            <td className="border border-gray-300 px-4 py-2">WiMAX (802.16)</td>
            <td className="border border-gray-300 px-4 py-2">City-wide broadband</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">WWAN</td>
            <td className="border border-gray-300 px-4 py-2">Global</td>
            <td className="border border-gray-300 px-4 py-2">Cellular (4G, 5G)</td>
            <td className="border border-gray-300 px-4 py-2">Mobile phones, IoT</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Wireless Communication Basics</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <h3 className="font-bold mb-2 dark:text-white">Radio Frequency Spectrum</h3>
      <p className="dark:text-gray-300 mb-2">
        Wireless networks use electromagnetic waves in various frequency bands:
      </p>
      <ul className="list-disc list-inside dark:text-gray-300">
        <li><strong>2.4 GHz:</strong> WiFi, Bluetooth - longer range, more interference</li>
        <li><strong>5 GHz:</strong> WiFi - shorter range, faster speeds, less interference</li>
        <li><strong>6 GHz:</strong> WiFi 6E - newest band, less congestion</li>
        <li><strong>Cellular:</strong> 700 MHz to 39 GHz (varies by generation)</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Key Wireless Concepts</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Bandwidth</h3>
        <p className="dark:text-gray-300 text-sm">
          The range of frequencies used for transmission. Wider bandwidth = higher data rates.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Signal Strength (RSSI)</h3>
        <p className="dark:text-gray-300 text-sm">
          Received Signal Strength Indicator. Measured in dBm; closer to 0 is stronger.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Interference</h3>
        <p className="dark:text-gray-300 text-sm">
          Signals from other devices, appliances, or physical obstacles that degrade performance.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Modulation</h3>
        <p className="dark:text-gray-300 text-sm">
          How data is encoded onto radio waves (OFDM, QAM, etc.).
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Wireless Network Components</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li><strong>Access Point (AP):</strong> Base station that connects wireless clients to wired network</li>
        <li><strong>Wireless NIC:</strong> Network interface card in client devices</li>
        <li><strong>Antenna:</strong> Transmits and receives radio signals (omnidirectional or directional)</li>
        <li><strong>Wireless Controller:</strong> Manages multiple APs in enterprise networks</li>
        <li><strong>Base Station:</strong> Cell tower in cellular networks</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Advantages of Wireless Networks</h2>
    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li><strong>Mobility:</strong> Users can move freely while maintaining connectivity</li>
        <li><strong>Flexibility:</strong> Easy to add devices without cable runs</li>
        <li><strong>Cost:</strong> Reduced cabling infrastructure costs</li>
        <li><strong>Scalability:</strong> Easy to expand coverage with additional APs</li>
        <li><strong>Convenience:</strong> Quick setup and deployment</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Challenges of Wireless Networks</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li><strong>Security:</strong> Signals can be intercepted; encryption essential</li>
        <li><strong>Interference:</strong> Other devices and physical obstacles affect signal</li>
        <li><strong>Limited Bandwidth:</strong> Shared medium; more congestion than wired</li>
        <li><strong>Range:</strong> Signal degrades with distance</li>
        <li><strong>Reliability:</strong> More susceptible to environmental factors</li>
        <li><strong>Hidden Terminal Problem:</strong> Devices may not sense each other's transmissions</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Wireless Standards Organizations</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Organization</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Standards</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">IEEE</td>
            <td className="border border-gray-300 px-4 py-2">802.11 (WiFi), 802.15 (Bluetooth/Zigbee)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">3GPP</td>
            <td className="border border-gray-300 px-4 py-2">LTE, 5G NR cellular standards</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">WiFi Alliance</td>
            <td className="border border-gray-300 px-4 py-2">WiFi certification and branding</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Bluetooth SIG</td>
            <td className="border border-gray-300 px-4 py-2">Bluetooth specifications</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>Wireless networks range from personal (WPAN) to wide area (WWAN)</li>
        <li>Different frequency bands offer trade-offs between range and speed</li>
        <li>Key benefits include mobility, flexibility, and ease of deployment</li>
        <li>Challenges include security, interference, and limited bandwidth</li>
        <li>IEEE 802.11 (WiFi) and 3GPP (cellular) are major standards bodies</li>
      </ul>
    </div>
  </div>
);

export default WirelessIntro;
