import React from 'react';

const NetworkTypes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Computer Networks
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Computer networks are classified based on their geographical size, the number of connected devices,
      and the distance they cover. The main types include PAN (Personal Area Network), LAN (Local Area
      Network), MAN (Metropolitan Area Network), and WAN (Wide Area Network). Understanding these
      classifications is fundamental to network design and architecture.
    </p>

    {/* Classification Diagram */}
    <h2 className="text-3xl font-bold mt-8">Network Classification by Size</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  Size/Distance (Increasing) ------------------------------------------>

  +-------+     +---------+     +---------+     +---------+
  |  PAN  | --> |   LAN   | --> |   MAN   | --> |   WAN   |
  +-------+     +---------+     +---------+     +---------+
     |              |               |               |
  ~10 m         ~1 km           ~100 km        Worldwide
  Personal      Building/        City          Countries/
  Devices       Campus                         Continents

  Examples:
  PAN: Bluetooth, Personal Hotspot
  LAN: Office Network, School Lab
  MAN: Cable TV Network, City Network
  WAN: Internet, International Banking
`}</pre>
    </div>

    {/* PAN */}
    <h2 className="text-3xl font-bold mt-8">1. Personal Area Network (PAN)</h2>
    <p className="leading-relaxed">
      A Personal Area Network is the smallest type of network, typically covering a range of about 10 meters.
      It connects personal devices belonging to an individual, such as smartphones, tablets, laptops, and
      wearable devices.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Range</td>
            <td className="p-3 border">Up to 10 meters (approximately 30 feet)</td>
          </tr>
          <tr>
            <td className="p-3 border">Technologies</td>
            <td className="p-3 border">Bluetooth, Infrared, USB, Zigbee</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Low to Medium (1-3 Mbps for Bluetooth)</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">Wireless headphones, Smartwatch to phone, Wireless mouse</td>
          </tr>
          <tr>
            <td className="p-3 border">Use Cases</td>
            <td className="p-3 border">File transfer, Audio streaming, Device synchronization</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm mt-4 overflow-x-auto">
      <pre className="text-gray-900">{`
  PAN Example: Bluetooth Network

       +------------+
       | Smartphone |
       +-----+------+
             |  Bluetooth
    +--------+--------+
    |        |        |
+-------+ +-------+ +----------+
|Headset| |  Watch| |  Laptop  |
+-------+ +-------+ +----------+
`}</pre>
    </div>

    {/* LAN */}
    <h2 className="text-3xl font-bold mt-8">2. Local Area Network (LAN)</h2>
    <p className="leading-relaxed">
      A Local Area Network connects computers and devices within a limited geographical area such as a home,
      office building, school, or campus. LANs are the most common type of network and provide high-speed
      data transfer capabilities.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Range</td>
            <td className="p-3 border">Up to 1 km (building or campus)</td>
          </tr>
          <tr>
            <td className="p-3 border">Technologies</td>
            <td className="p-3 border">Ethernet (IEEE 802.3), Wi-Fi (IEEE 802.11)</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">100 Mbps to 10 Gbps</td>
          </tr>
          <tr>
            <td className="p-3 border">Ownership</td>
            <td className="p-3 border">Private (owned by organization)</td>
          </tr>
          <tr>
            <td className="p-3 border">Components</td>
            <td className="p-3 border">Switches, Access Points, Cables, NICs</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm mt-4 overflow-x-auto">
      <pre className="text-gray-900">{`
  LAN Example: Office Network

  +--------+    +--------+    +--------+
  |  PC 1  |    |  PC 2  |    |  PC 3  |
  +---+----+    +---+----+    +---+----+
      |            |            |
  ====+============+============+====== Ethernet Cable
                   |
              +----+----+
              | Switch  |
              +----+----+
                   |
         +---------+---------+
         |                   |
    +----+----+         +----+----+
    | Server  |         | Router  |---> Internet
    +---------+         +---------+
`}</pre>
    </div>

    {/* MAN */}
    <h2 className="text-3xl font-bold mt-8">3. Metropolitan Area Network (MAN)</h2>
    <p className="leading-relaxed">
      A Metropolitan Area Network spans a city or a large campus. It is larger than a LAN but smaller than
      a WAN. MANs are typically used by government agencies, large organizations, or service providers to
      connect multiple LANs within a metropolitan area.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Range</td>
            <td className="p-3 border">5 to 100 km (city-wide)</td>
          </tr>
          <tr>
            <td className="p-3 border">Technologies</td>
            <td className="p-3 border">Fiber optics, DQDB, SMDS, ATM</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">1.5 Mbps to 10 Gbps</td>
          </tr>
          <tr>
            <td className="p-3 border">Ownership</td>
            <td className="p-3 border">Public or Private (ISPs, Government)</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">Cable TV network, City-wide Wi-Fi, University campus network</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm mt-4 overflow-x-auto">
      <pre className="text-gray-900">{`
  MAN Example: City Network

       Building A              Building B              Building C
      (Branch 1)              (Head Office)           (Branch 2)
     +---------+              +---------+              +---------+
     |   LAN   |              |   LAN   |              |   LAN   |
     +----+----+              +----+----+              +----+----+
          |                        |                        |
          |    Fiber Optic Links   |                        |
          +------------------------+------------------------+
                                   |
                          +--------+--------+
                          |  MAN Backbone   |
                          |  (City-wide)    |
                          +-----------------+
`}</pre>
    </div>

    {/* WAN */}
    <h2 className="text-3xl font-bold mt-8">4. Wide Area Network (WAN)</h2>
    <p className="leading-relaxed">
      A Wide Area Network covers a large geographical area, spanning countries or even continents. The
      Internet is the largest example of a WAN. WANs typically use leased telecommunication lines, satellites,
      or public network infrastructure.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Range</td>
            <td className="p-3 border">Unlimited (global coverage)</td>
          </tr>
          <tr>
            <td className="p-3 border">Technologies</td>
            <td className="p-3 border">MPLS, Frame Relay, ATM, Satellite links</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Variable (56 Kbps to several Gbps)</td>
          </tr>
          <tr>
            <td className="p-3 border">Ownership</td>
            <td className="p-3 border">Public (ISPs) or Leased lines</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">Internet, International banking networks, Corporate global networks</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm mt-4 overflow-x-auto">
      <pre className="text-gray-900">{`
  WAN Example: Corporate Global Network

     USA                    Europe                    Asia
  +--------+              +--------+              +--------+
  |  LAN   |              |  LAN   |              |  LAN   |
  | (NYC)  |              |(London)|              |(Tokyo) |
  +---+----+              +---+----+              +---+----+
      |                       |                       |
      |   Submarine Cables / Satellite Links          |
      +-------------------+---+---+-------------------+
                          |       |
                    +-----+-------+-----+
                    |  WAN Backbone     |
                    |  (Internet/MPLS)  |
                    +-------------------+
`}</pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison of Network Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Parameter</th>
            <th className="p-3 border">PAN</th>
            <th className="p-3 border">LAN</th>
            <th className="p-3 border">MAN</th>
            <th className="p-3 border">WAN</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Range</td>
            <td className="p-3 border">~10 m</td>
            <td className="p-3 border">~1 km</td>
            <td className="p-3 border">~100 km</td>
            <td className="p-3 border">Unlimited</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Variable</td>
          </tr>
          <tr>
            <td className="p-3 border">Ownership</td>
            <td className="p-3 border">Personal</td>
            <td className="p-3 border">Private</td>
            <td className="p-3 border">Public/Private</td>
            <td className="p-3 border">Public/Leased</td>
          </tr>
          <tr>
            <td className="p-3 border">Error Rate</td>
            <td className="p-3 border">Very Low</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border">Cost</td>
            <td className="p-3 border">Minimal</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Very High</td>
          </tr>
          <tr>
            <td className="p-3 border">Maintenance</td>
            <td className="p-3 border">Easy</td>
            <td className="p-3 border">Easy</td>
            <td className="p-3 border">Difficult</td>
            <td className="p-3 border">Complex</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Other Network Types */}
    <h2 className="text-3xl font-bold mt-8">Other Network Types</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>CAN (Campus Area Network):</strong> Interconnects multiple LANs within a limited
        geographical area like a university campus or corporate campus.
      </li>
      <li>
        <strong>SAN (Storage Area Network):</strong> A high-speed network dedicated to providing
        access to consolidated block-level storage.
      </li>
      <li>
        <strong>VPN (Virtual Private Network):</strong> Creates a secure tunnel over a public
        network to connect private networks.
      </li>
      <li>
        <strong>WLAN (Wireless LAN):</strong> A LAN that uses wireless communication instead of
        wired connections.
      </li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>PAN is the smallest network type, used for personal device connectivity</li>
      <li>LAN provides the highest speed and lowest error rate among all types</li>
      <li>MAN uses technologies like DQDB and fiber optics for city-wide coverage</li>
      <li>WAN has the highest latency due to long-distance communication</li>
      <li>The Internet is the largest WAN connecting billions of devices globally</li>
    </ul>

    {/* GATE Important */}
    <h2 className="text-3xl font-bold mt-8">Important for GATE</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Know the typical range and speed of each network type</li>
        <li>Understand the technologies used in each type (Ethernet for LAN, DQDB for MAN)</li>
        <li>Remember that propagation delay increases from PAN to WAN</li>
        <li>LAN is always privately owned, while WAN typically uses public infrastructure</li>
      </ul>
    </div>
  </div>
);

export default NetworkTypes;
