import React from "react";

const MobileNetworks: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Mobile/Cellular Networks
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      Mobile cellular networks enable wireless communication over large geographic areas by dividing
      regions into cells, each served by a base station. This architecture allows millions of users
      to simultaneously communicate while efficiently reusing limited radio spectrum. From 1G analog
      voice to 5G ultra-broadband, cellular technology has transformed global communication.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Cellular Network Concept</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <p className="dark:text-gray-300 mb-2">
        The term "cellular" comes from the honeycomb pattern of coverage areas:
      </p>
      <ul className="list-disc list-inside dark:text-gray-300">
        <li><strong>Cell:</strong> Geographic area served by one base station</li>
        <li><strong>Base Station (BTS/eNodeB/gNodeB):</strong> Tower with antennas serving a cell</li>
        <li><strong>Frequency Reuse:</strong> Non-adjacent cells can use same frequencies</li>
        <li><strong>Handoff/Handover:</strong> Seamless transfer between cells during movement</li>
        <li><strong>Cell Splitting:</strong> Dividing congested cells into smaller ones</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Mobile Network Generations</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Generation</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Era</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Technology</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Speed</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Primary Use</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">1G</td>
            <td className="border border-gray-300 px-4 py-2">1980s</td>
            <td className="border border-gray-300 px-4 py-2">AMPS (Analog)</td>
            <td className="border border-gray-300 px-4 py-2">2.4 Kbps</td>
            <td className="border border-gray-300 px-4 py-2">Voice only</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">2G</td>
            <td className="border border-gray-300 px-4 py-2">1990s</td>
            <td className="border border-gray-300 px-4 py-2">GSM, CDMA</td>
            <td className="border border-gray-300 px-4 py-2">64 Kbps</td>
            <td className="border border-gray-300 px-4 py-2">Voice, SMS</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">3G</td>
            <td className="border border-gray-300 px-4 py-2">2000s</td>
            <td className="border border-gray-300 px-4 py-2">UMTS, HSPA</td>
            <td className="border border-gray-300 px-4 py-2">2 Mbps</td>
            <td className="border border-gray-300 px-4 py-2">Mobile internet</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">4G</td>
            <td className="border border-gray-300 px-4 py-2">2010s</td>
            <td className="border border-gray-300 px-4 py-2">LTE, LTE-A</td>
            <td className="border border-gray-300 px-4 py-2">100+ Mbps</td>
            <td className="border border-gray-300 px-4 py-2">HD video, apps</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">5G</td>
            <td className="border border-gray-300 px-4 py-2">2020s</td>
            <td className="border border-gray-300 px-4 py-2">NR</td>
            <td className="border border-gray-300 px-4 py-2">1-10 Gbps</td>
            <td className="border border-gray-300 px-4 py-2">IoT, AR/VR, autonomous</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Key Network Components</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">User Equipment (UE)</h3>
        <p className="dark:text-gray-300 text-sm">
          Mobile device (smartphone, tablet, IoT device) with SIM card for authentication and network access.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Radio Access Network (RAN)</h3>
        <p className="dark:text-gray-300 text-sm">
          Base stations and antennas that provide wireless connectivity to devices.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Core Network</h3>
        <p className="dark:text-gray-300 text-sm">
          Central infrastructure handling routing, authentication, billing, and connection to external networks.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Backhaul</h3>
        <p className="dark:text-gray-300 text-sm">
          High-capacity links connecting base stations to the core network (fiber, microwave).
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Multiple Access Techniques</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Technique</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Used In</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">FDMA</td>
            <td className="border border-gray-300 px-4 py-2">Different frequencies for each user</td>
            <td className="border border-gray-300 px-4 py-2">1G</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">TDMA</td>
            <td className="border border-gray-300 px-4 py-2">Different time slots for each user</td>
            <td className="border border-gray-300 px-4 py-2">2G GSM</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">CDMA</td>
            <td className="border border-gray-300 px-4 py-2">Unique codes separate users</td>
            <td className="border border-gray-300 px-4 py-2">2G/3G CDMA</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">OFDMA</td>
            <td className="border border-gray-300 px-4 py-2">Subcarriers assigned dynamically</td>
            <td className="border border-gray-300 px-4 py-2">4G LTE, 5G</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Mobile Network Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">Voice</h3>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>Circuit-switched (2G/3G)</li>
          <li>VoLTE (4G)</li>
          <li>VoNR (5G)</li>
        </ul>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-bold mb-2 dark:text-white">Data</h3>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>Mobile broadband</li>
          <li>Streaming video</li>
          <li>App connectivity</li>
        </ul>
      </div>
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="font-bold mb-2 dark:text-white">Messaging</h3>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>SMS/MMS</li>
          <li>RCS (Rich Communication)</li>
          <li>IP-based messaging</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Mobile Network Identifiers</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li><strong>IMSI:</strong> International Mobile Subscriber Identity - identifies subscriber</li>
        <li><strong>IMEI:</strong> International Mobile Equipment Identity - identifies device</li>
        <li><strong>MSISDN:</strong> Phone number (Mobile Station ISDN Number)</li>
        <li><strong>MCC/MNC:</strong> Mobile Country Code / Mobile Network Code</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>Cellular networks divide areas into cells for efficient spectrum reuse</li>
        <li>Five generations (1G-5G) have evolved from analog voice to multi-gigabit data</li>
        <li>Key components include UE, RAN, Core Network, and Backhaul</li>
        <li>Multiple access techniques (FDMA, TDMA, CDMA, OFDMA) allow spectrum sharing</li>
        <li>Handoff enables seamless connectivity during movement between cells</li>
      </ul>
    </div>
  </div>
);

export default MobileNetworks;
