import React from "react";

const WiFi: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      WiFi Technology
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      WiFi is a wireless networking technology that allows devices to connect to the internet
      and communicate with each other without physical cables. Based on IEEE 802.11 standards,
      WiFi has become the primary method of network connectivity for homes, businesses, and
      public spaces worldwide, with billions of devices connected.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">WiFi Generations</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Generation</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Standard</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Max Speed</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Key Features</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">WiFi 4</td>
            <td className="border border-gray-300 px-4 py-2">802.11n</td>
            <td className="border border-gray-300 px-4 py-2">600 Mbps</td>
            <td className="border border-gray-300 px-4 py-2">MIMO, dual-band</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">WiFi 5</td>
            <td className="border border-gray-300 px-4 py-2">802.11ac</td>
            <td className="border border-gray-300 px-4 py-2">6.9 Gbps</td>
            <td className="border border-gray-300 px-4 py-2">MU-MIMO, 160MHz channels</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">WiFi 6</td>
            <td className="border border-gray-300 px-4 py-2">802.11ax</td>
            <td className="border border-gray-300 px-4 py-2">9.6 Gbps</td>
            <td className="border border-gray-300 px-4 py-2">OFDMA, TWT, WPA3</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">WiFi 6E</td>
            <td className="border border-gray-300 px-4 py-2">802.11ax</td>
            <td className="border border-gray-300 px-4 py-2">9.6 Gbps</td>
            <td className="border border-gray-300 px-4 py-2">6 GHz band support</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">WiFi 7</td>
            <td className="border border-gray-300 px-4 py-2">802.11be</td>
            <td className="border border-gray-300 px-4 py-2">46 Gbps</td>
            <td className="border border-gray-300 px-4 py-2">MLO, 320MHz, 4K-QAM</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">How WiFi Works</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <ol className="list-decimal list-inside space-y-2 dark:text-gray-300">
        <li>Router/AP converts internet data to radio signals</li>
        <li>Signals transmitted on 2.4 GHz, 5 GHz, or 6 GHz frequencies</li>
        <li>Device's wireless adapter receives radio signals</li>
        <li>Signals decoded back into data</li>
        <li>Two-way communication established for sending/receiving data</li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">WiFi Network Types</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Home WiFi</h3>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>Single router/mesh system</li>
          <li>WPA2/WPA3 security</li>
          <li>Simple setup</li>
          <li>Consumer-grade equipment</li>
        </ul>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Enterprise WiFi</h3>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>Multiple managed APs</li>
          <li>802.1X authentication</li>
          <li>Centralized controller</li>
          <li>Advanced security features</li>
        </ul>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Public WiFi</h3>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>Hotspots in public places</li>
          <li>Captive portal login</li>
          <li>Open or password protected</li>
          <li>Use VPN for security</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">WiFi 6 Key Features</h2>
    <div className="space-y-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">OFDMA (Orthogonal Frequency Division Multiple Access)</h3>
        <p className="dark:text-gray-300 text-sm">
          Divides channel into smaller sub-channels (Resource Units) that can be assigned to different
          devices simultaneously, significantly improving efficiency in crowded environments.
        </p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">TWT (Target Wake Time)</h3>
        <p className="dark:text-gray-300 text-sm">
          Allows devices to schedule when to wake up and communicate with the AP, significantly
          improving battery life for IoT devices and mobile phones.
        </p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">BSS Coloring</h3>
        <p className="dark:text-gray-300 text-sm">
          Tags transmissions from overlapping networks to reduce interference and allow simultaneous
          transmissions from neighboring networks.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">WiFi Performance Factors</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li><strong>Distance:</strong> Signal weakens with distance from AP</li>
        <li><strong>Obstacles:</strong> Walls, furniture, and appliances block signals</li>
        <li><strong>Interference:</strong> Other WiFi networks, microwaves, Bluetooth devices</li>
        <li><strong>Congestion:</strong> Too many devices on same channel/network</li>
        <li><strong>Channel width:</strong> Wider channels = faster speeds but more interference</li>
        <li><strong>Device capability:</strong> Older devices limit network performance</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Mesh WiFi Systems</h2>
    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
      <p className="dark:text-gray-300 mb-2">
        Mesh systems use multiple interconnected nodes to provide seamless coverage:
      </p>
      <ul className="list-disc list-inside dark:text-gray-300">
        <li>Eliminates dead zones in large homes</li>
        <li>Single network name (SSID) throughout</li>
        <li>Automatic client steering and load balancing</li>
        <li>Self-healing: nodes route around failures</li>
        <li>Easy expansion by adding more nodes</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Optimizing WiFi Performance</h2>
    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li>Position router centrally, elevated, away from walls</li>
        <li>Use 5 GHz for speed-critical devices; 2.4 GHz for range</li>
        <li>Choose less congested WiFi channels</li>
        <li>Update router firmware regularly</li>
        <li>Enable band steering to guide devices to best band</li>
        <li>Consider mesh system for large spaces</li>
        <li>Upgrade to WiFi 6 or newer for better performance</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>WiFi enables wireless connectivity using radio waves on 2.4/5/6 GHz bands</li>
        <li>WiFi 6 (802.11ax) brings major improvements for dense environments with OFDMA</li>
        <li>WiFi 7 offers even faster speeds with MLO and 320 MHz channels</li>
        <li>Performance depends on distance, obstacles, interference, and device capabilities</li>
        <li>Mesh systems provide seamless coverage for large areas</li>
      </ul>
    </div>
  </div>
);

export default WiFi;
