import React from "react";

const Bluetooth: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Bluetooth Technology
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      Bluetooth is a short-range wireless technology standard for exchanging data between devices
      over short distances using UHF radio waves. Originally designed to replace RS-232 cables,
      Bluetooth has evolved to support everything from audio streaming to IoT devices, with
      billions of Bluetooth-enabled devices shipped annually.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Bluetooth Specifications</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Specification</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Frequency Band</td>
            <td className="border border-gray-300 px-4 py-2">2.4 GHz ISM band (2.400-2.4835 GHz)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Range</td>
            <td className="border border-gray-300 px-4 py-2">Class 1: 100m, Class 2: 10m, Class 3: 1m</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Channels</td>
            <td className="border border-gray-300 px-4 py-2">79 channels (1 MHz each) - Classic; 40 channels (2 MHz) - BLE</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Modulation</td>
            <td className="border border-gray-300 px-4 py-2">GFSK, DPSK, DQPSK</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Bluetooth Evolution</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Version</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Max Speed</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Key Features</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">1.0</td>
            <td className="border border-gray-300 px-4 py-2">1999</td>
            <td className="border border-gray-300 px-4 py-2">721 Kbps</td>
            <td className="border border-gray-300 px-4 py-2">Initial release</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">2.0 + EDR</td>
            <td className="border border-gray-300 px-4 py-2">2004</td>
            <td className="border border-gray-300 px-4 py-2">3 Mbps</td>
            <td className="border border-gray-300 px-4 py-2">Enhanced Data Rate</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">3.0 + HS</td>
            <td className="border border-gray-300 px-4 py-2">2009</td>
            <td className="border border-gray-300 px-4 py-2">24 Mbps</td>
            <td className="border border-gray-300 px-4 py-2">High Speed (802.11 integration)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">4.0</td>
            <td className="border border-gray-300 px-4 py-2">2010</td>
            <td className="border border-gray-300 px-4 py-2">1 Mbps</td>
            <td className="border border-gray-300 px-4 py-2">Bluetooth Low Energy (BLE)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">5.0</td>
            <td className="border border-gray-300 px-4 py-2">2016</td>
            <td className="border border-gray-300 px-4 py-2">2 Mbps</td>
            <td className="border border-gray-300 px-4 py-2">4x range, 8x broadcast capacity</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">5.2</td>
            <td className="border border-gray-300 px-4 py-2">2020</td>
            <td className="border border-gray-300 px-4 py-2">2 Mbps</td>
            <td className="border border-gray-300 px-4 py-2">LE Audio, LC3 codec</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">5.3</td>
            <td className="border border-gray-300 px-4 py-2">2021</td>
            <td className="border border-gray-300 px-4 py-2">2 Mbps</td>
            <td className="border border-gray-300 px-4 py-2">Improved efficiency, channel classification</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Classic Bluetooth vs Bluetooth Low Energy</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-bold mb-2 dark:text-white">Classic Bluetooth (BR/EDR)</h3>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>Continuous streaming</li>
          <li>Higher data rates (up to 3 Mbps)</li>
          <li>Audio streaming (A2DP)</li>
          <li>File transfer</li>
          <li>Higher power consumption</li>
        </ul>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">Bluetooth Low Energy (BLE)</h3>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>Designed for IoT and wearables</li>
          <li>Ultra-low power consumption</li>
          <li>Small bursts of data</li>
          <li>Beacon technology support</li>
          <li>Years of battery life possible</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Bluetooth Architecture</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li><strong>Piconet:</strong> Network of up to 8 devices (1 master, 7 slaves)</li>
        <li><strong>Scatternet:</strong> Multiple interconnected piconets</li>
        <li><strong>Master:</strong> Controls timing and frequency hopping</li>
        <li><strong>Slave:</strong> Synchronizes to master's clock</li>
        <li><strong>Frequency Hopping:</strong> 1600 hops/second to avoid interference</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Bluetooth Profiles</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Profile</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">A2DP</td>
            <td className="border border-gray-300 px-4 py-2">Advanced Audio Distribution - stereo audio streaming</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">HFP</td>
            <td className="border border-gray-300 px-4 py-2">Hands-Free Profile - phone calls via car/headset</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">HID</td>
            <td className="border border-gray-300 px-4 py-2">Human Interface Device - keyboards, mice</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">GATT</td>
            <td className="border border-gray-300 px-4 py-2">Generic Attribute Profile - BLE data exchange</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">PAN</td>
            <td className="border border-gray-300 px-4 py-2">Personal Area Network - network access sharing</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Bluetooth Security</h2>
    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li><strong>Pairing:</strong> Devices establish shared secret key</li>
        <li><strong>Secure Simple Pairing (SSP):</strong> ECDH key exchange in Bluetooth 2.1+</li>
        <li><strong>LE Secure Connections:</strong> FIPS-approved AES-CCM encryption for BLE</li>
        <li><strong>Frequency Hopping:</strong> Makes interception difficult</li>
        <li><strong>Security Modes:</strong> Different levels from none to authenticated encryption</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Common Bluetooth Applications</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-gray-50 p-3 rounded text-center text-gray-900">Wireless Headphones</div>
      <div className="bg-gray-50 p-3 rounded text-center text-gray-900">Fitness Trackers</div>
      <div className="bg-gray-50 p-3 rounded text-center text-gray-900">Smart Watches</div>
      <div className="bg-gray-50 p-3 rounded text-center text-gray-900">Car Audio</div>
      <div className="bg-gray-50 p-3 rounded text-center text-gray-900">Keyboards/Mice</div>
      <div className="bg-gray-50 p-3 rounded text-center text-gray-900">Smart Home</div>
      <div className="bg-gray-50 p-3 rounded text-center text-gray-900">Location Beacons</div>
      <div className="bg-gray-50 p-3 rounded text-center text-gray-900">Medical Devices</div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>Bluetooth operates in 2.4 GHz band using frequency hopping to avoid interference</li>
        <li>Classic Bluetooth is for streaming; BLE is optimized for low-power IoT devices</li>
        <li>Piconets support up to 8 devices; scatternets connect multiple piconets</li>
        <li>Bluetooth 5.x offers extended range, higher speed, and better broadcast capacity</li>
        <li>Profiles define specific use cases like audio (A2DP) and input devices (HID)</li>
      </ul>
    </div>
  </div>
);

export default Bluetooth;
