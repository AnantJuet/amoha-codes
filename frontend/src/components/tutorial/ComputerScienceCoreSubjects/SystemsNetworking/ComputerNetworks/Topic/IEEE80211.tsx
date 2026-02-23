import React from "react";

const IEEE80211: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      IEEE 802.11 Standards
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      IEEE 802.11 is a set of standards that define the protocols for implementing wireless local
      area network (WLAN) communication. Commonly known as WiFi, these standards have evolved
      significantly since 1997, with each iteration bringing improvements in speed, range,
      security, and efficiency.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Evolution of 802.11 Standards</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Standard</th>
            <th className="border border-gray-300 px-4 py-2 text-left">WiFi Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Frequency</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Max Speed</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">802.11</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
            <td className="border border-gray-300 px-4 py-2">1997</td>
            <td className="border border-gray-300 px-4 py-2">2.4 GHz</td>
            <td className="border border-gray-300 px-4 py-2">2 Mbps</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">802.11b</td>
            <td className="border border-gray-300 px-4 py-2">WiFi 1</td>
            <td className="border border-gray-300 px-4 py-2">1999</td>
            <td className="border border-gray-300 px-4 py-2">2.4 GHz</td>
            <td className="border border-gray-300 px-4 py-2">11 Mbps</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">802.11a</td>
            <td className="border border-gray-300 px-4 py-2">WiFi 2</td>
            <td className="border border-gray-300 px-4 py-2">1999</td>
            <td className="border border-gray-300 px-4 py-2">5 GHz</td>
            <td className="border border-gray-300 px-4 py-2">54 Mbps</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">802.11g</td>
            <td className="border border-gray-300 px-4 py-2">WiFi 3</td>
            <td className="border border-gray-300 px-4 py-2">2003</td>
            <td className="border border-gray-300 px-4 py-2">2.4 GHz</td>
            <td className="border border-gray-300 px-4 py-2">54 Mbps</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">802.11n</td>
            <td className="border border-gray-300 px-4 py-2">WiFi 4</td>
            <td className="border border-gray-300 px-4 py-2">2009</td>
            <td className="border border-gray-300 px-4 py-2">2.4/5 GHz</td>
            <td className="border border-gray-300 px-4 py-2">600 Mbps</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">802.11ac</td>
            <td className="border border-gray-300 px-4 py-2">WiFi 5</td>
            <td className="border border-gray-300 px-4 py-2">2013</td>
            <td className="border border-gray-300 px-4 py-2">5 GHz</td>
            <td className="border border-gray-300 px-4 py-2">6.9 Gbps</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">802.11ax</td>
            <td className="border border-gray-300 px-4 py-2">WiFi 6/6E</td>
            <td className="border border-gray-300 px-4 py-2">2019</td>
            <td className="border border-gray-300 px-4 py-2">2.4/5/6 GHz</td>
            <td className="border border-gray-300 px-4 py-2">9.6 Gbps</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">802.11be</td>
            <td className="border border-gray-300 px-4 py-2">WiFi 7</td>
            <td className="border border-gray-300 px-4 py-2">2024</td>
            <td className="border border-gray-300 px-4 py-2">2.4/5/6 GHz</td>
            <td className="border border-gray-300 px-4 py-2">46 Gbps</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Key Technologies</h2>
    <div className="space-y-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-bold mb-2 dark:text-white">OFDM (Orthogonal Frequency Division Multiplexing)</h3>
        <p className="dark:text-gray-300 text-sm">
          Divides channel into multiple subcarriers, enabling efficient high-speed transmission
          and resistance to interference. Used in 802.11a/g/n/ac/ax.
        </p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">MIMO (Multiple Input Multiple Output)</h3>
        <p className="dark:text-gray-300 text-sm">
          Uses multiple antennas to send/receive multiple data streams simultaneously.
          Increases throughput and reliability. Introduced in 802.11n.
        </p>
      </div>
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="font-bold mb-2 dark:text-white">MU-MIMO (Multi-User MIMO)</h3>
        <p className="dark:text-gray-300 text-sm">
          Allows AP to communicate with multiple clients simultaneously rather than sequentially.
          Significant improvement in dense environments. Added in 802.11ac Wave 2.
        </p>
      </div>
      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
        <h3 className="font-bold mb-2 dark:text-white">OFDMA (Orthogonal Frequency Division Multiple Access)</h3>
        <p className="dark:text-gray-300 text-sm">
          Divides channel into resource units assignable to different clients simultaneously.
          Key feature of WiFi 6 (802.11ax) for high-density environments.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Channel Bonding</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <p className="dark:text-gray-300 mb-2">
        Combining multiple channels for increased bandwidth:
      </p>
      <ul className="list-disc list-inside dark:text-gray-300">
        <li><strong>802.11n:</strong> 40 MHz (2 x 20 MHz channels)</li>
        <li><strong>802.11ac:</strong> Up to 160 MHz (8 x 20 MHz channels)</li>
        <li><strong>802.11ax:</strong> Up to 160 MHz</li>
        <li><strong>802.11be:</strong> Up to 320 MHz</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">2.4 GHz vs 5 GHz vs 6 GHz</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
            <th className="border border-gray-300 px-4 py-2 text-left">2.4 GHz</th>
            <th className="border border-gray-300 px-4 py-2 text-left">5 GHz</th>
            <th className="border border-gray-300 px-4 py-2 text-left">6 GHz</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Range</td>
            <td className="border border-gray-300 px-4 py-2">Best</td>
            <td className="border border-gray-300 px-4 py-2">Moderate</td>
            <td className="border border-gray-300 px-4 py-2">Shortest</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Speed</td>
            <td className="border border-gray-300 px-4 py-2">Slowest</td>
            <td className="border border-gray-300 px-4 py-2">Fast</td>
            <td className="border border-gray-300 px-4 py-2">Fastest</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Interference</td>
            <td className="border border-gray-300 px-4 py-2">High</td>
            <td className="border border-gray-300 px-4 py-2">Low</td>
            <td className="border border-gray-300 px-4 py-2">Lowest</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Channels</td>
            <td className="border border-gray-300 px-4 py-2">3 non-overlapping</td>
            <td className="border border-gray-300 px-4 py-2">25 non-overlapping</td>
            <td className="border border-gray-300 px-4 py-2">59 channels</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Other Important 802.11 Amendments</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">802.11i (Security)</h3>
        <p className="dark:text-gray-300 text-sm">Defines WPA2 security with AES encryption</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">802.11r (Fast Roaming)</h3>
        <p className="dark:text-gray-300 text-sm">Fast BSS Transition for seamless AP handoff</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">802.11e (QoS)</h3>
        <p className="dark:text-gray-300 text-sm">Quality of Service for voice and video traffic</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">802.11w (PMF)</h3>
        <p className="dark:text-gray-300 text-sm">Protected Management Frames against deauth attacks</p>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>802.11 standards have evolved from 2 Mbps (1997) to multi-gigabit speeds (WiFi 7)</li>
        <li>WiFi 6 (802.11ax) introduced OFDMA and improved efficiency in dense environments</li>
        <li>MIMO and MU-MIMO enable multiple simultaneous data streams</li>
        <li>5 GHz offers faster speeds but shorter range than 2.4 GHz; 6 GHz is newest</li>
        <li>Amendments like 802.11i (security) and 802.11r (roaming) address specific needs</li>
      </ul>
    </div>
  </div>
);

export default IEEE80211;
