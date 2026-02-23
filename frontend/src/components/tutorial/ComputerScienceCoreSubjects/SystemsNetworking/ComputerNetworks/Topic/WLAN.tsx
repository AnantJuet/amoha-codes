import React from "react";

const WLAN: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Wireless LAN (WLAN)
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      A Wireless Local Area Network (WLAN) connects devices within a limited area such as a home,
      office, or campus using wireless technology, primarily based on IEEE 802.11 standards (WiFi).
      WLANs provide the flexibility of mobility while maintaining connectivity to local network
      resources and the internet.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">WLAN Architecture</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-bold mb-2 dark:text-white">Infrastructure Mode</h3>
        <p className="dark:text-gray-300 text-sm mb-2">
          Devices connect through an Access Point (AP) that bridges to wired network.
        </p>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>Most common deployment</li>
          <li>Centralized management</li>
          <li>Extended range with multiple APs</li>
          <li>Supports roaming between APs</li>
        </ul>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">Ad-Hoc Mode (IBSS)</h3>
        <p className="dark:text-gray-300 text-sm mb-2">
          Devices communicate directly with each other without an AP.
        </p>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>Peer-to-peer connections</li>
          <li>No infrastructure required</li>
          <li>Limited range and features</li>
          <li>Used for temporary connections</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">WLAN Components</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li><strong>Station (STA):</strong> Any device with wireless capability (laptop, phone, IoT device)</li>
        <li><strong>Access Point (AP):</strong> Bridges wireless clients to wired network</li>
        <li><strong>Basic Service Set (BSS):</strong> Single AP and its associated clients</li>
        <li><strong>Extended Service Set (ESS):</strong> Multiple APs with same SSID for seamless roaming</li>
        <li><strong>Distribution System (DS):</strong> Backbone connecting multiple APs</li>
        <li><strong>SSID:</strong> Service Set Identifier - network name</li>
        <li><strong>BSSID:</strong> MAC address of the AP</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">WLAN Topology</h2>
    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
      <div className="text-center dark:text-gray-300">
        <p className="font-bold mb-2">Extended Service Set (ESS)</p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="border-2 border-dashed border-blue-400 p-4 rounded">
            <p className="text-sm font-bold">BSS 1</p>
            <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded mt-2">AP1</div>
            <div className="flex gap-2 mt-2">
              <span className="bg-gray-200 dark:bg-gray-600 p-1 rounded text-xs">STA</span>
              <span className="bg-gray-200 dark:bg-gray-600 p-1 rounded text-xs">STA</span>
            </div>
          </div>
          <div className="text-2xl">↔</div>
          <div className="bg-orange-100 dark:bg-orange-800 p-3 rounded">
            <p className="text-sm">Distribution</p>
            <p className="text-sm">System</p>
          </div>
          <div className="text-2xl">↔</div>
          <div className="border-2 border-dashed border-blue-400 p-4 rounded">
            <p className="text-sm font-bold">BSS 2</p>
            <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded mt-2">AP2</div>
            <div className="flex gap-2 mt-2">
              <span className="bg-gray-200 dark:bg-gray-600 p-1 rounded text-xs">STA</span>
              <span className="bg-gray-200 dark:bg-gray-600 p-1 rounded text-xs">STA</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">WLAN Connection Process</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <ol className="list-decimal list-inside space-y-2 dark:text-gray-300">
        <li><strong>Scanning:</strong> Client searches for available networks (passive or active scan)</li>
        <li><strong>Authentication:</strong> Client authenticates with AP (Open or WPA/WPA2/WPA3)</li>
        <li><strong>Association:</strong> Client associates with AP, gets connection parameters</li>
        <li><strong>4-Way Handshake:</strong> Establishes encryption keys (for secured networks)</li>
        <li><strong>Data Transfer:</strong> Client can send/receive data through the AP</li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">WLAN Frame Types</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Examples</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Management</td>
            <td className="border border-gray-300 px-4 py-2">Beacon, Probe, Auth, Assoc</td>
            <td className="border border-gray-300 px-4 py-2">Network discovery, connection setup</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Control</td>
            <td className="border border-gray-300 px-4 py-2">RTS, CTS, ACK</td>
            <td className="border border-gray-300 px-4 py-2">Medium access control</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Data</td>
            <td className="border border-gray-300 px-4 py-2">Data, QoS Data</td>
            <td className="border border-gray-300 px-4 py-2">Actual user data transmission</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">CSMA/CA (Collision Avoidance)</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <p className="dark:text-gray-300 mb-2">
        WLANs use CSMA/CA to avoid collisions since wireless devices cannot detect collisions:
      </p>
      <ol className="list-decimal list-inside dark:text-gray-300 text-sm">
        <li>Listen to channel (carrier sense)</li>
        <li>If busy, wait random backoff time</li>
        <li>If idle for DIFS period, transmit</li>
        <li>Receiver sends ACK after SIFS period</li>
        <li>Optional: RTS/CTS handshake for large frames</li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Enterprise WLAN Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ul className="list-disc list-inside dark:text-gray-300">
        <li>Wireless LAN Controllers (WLC)</li>
        <li>Centralized management</li>
        <li>802.1X authentication</li>
        <li>RADIUS integration</li>
      </ul>
      <ul className="list-disc list-inside dark:text-gray-300">
        <li>Fast roaming (802.11r)</li>
        <li>Band steering</li>
        <li>Load balancing</li>
        <li>Rogue AP detection</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>WLANs connect devices wirelessly within a local area using 802.11 standards</li>
        <li>Infrastructure mode (with APs) is most common; Ad-hoc enables direct device communication</li>
        <li>BSS is a single AP with clients; ESS enables roaming across multiple APs</li>
        <li>CSMA/CA is used for collision avoidance in the shared wireless medium</li>
        <li>Enterprise WLANs use controllers, 802.1X authentication, and advanced roaming</li>
      </ul>
    </div>
  </div>
);

export default WLAN;
