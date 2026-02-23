import React from 'react';

const NetworkTypesTutorial: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Types of Network ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Types of Network - LAN, WAN, and MAN
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 22 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      Networks enable computers and devices to connect and communicate using different media. The main types of networks—LAN, MAN, and WAN—differ primarily by the geographical area they cover.
    </p>

    {/* ================= Network Types by Coverage ================= */}
    <h2 className="text-3xl font-bold mt-6">Types of Networks by Coverage</h2>

    {/* Personal Area Network */}
    <h3 className="text-2xl font-semibold mt-4">1. Personal Area Network (PAN)</h3>
    <p className="text-lg leading-relaxed">
      A PAN is a short-range network connecting personal devices like smartphones, tablets, and computers. Coverage is typically under 10 meters and usually uses wireless technologies like Bluetooth.
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Advantages:</strong> Easy communication, wireless, energy-efficient.</li>
      <li><strong>Disadvantages:</strong> Limited coverage, limited bandwidth, potential interference.</li>
    </ul>

    {/* Local Area Network */}
    <h3 className="text-2xl font-semibold mt-4">2. Local Area Network (LAN)</h3>
    <p className="text-lg leading-relaxed">
      LAN connects computers within a small area such as homes, offices, schools, or hospitals. It uses routers, switches, and private IP addresses, providing high-speed and cost-effective connectivity.
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Coverage:</strong> Up to 2 km</li>
      <li><strong>Speed:</strong> 100–1000 Mbps</li>
      <li><strong>Medium:</strong> Wired (Ethernet) or Wireless</li>
      <li><strong>Advantages:</strong> Fast communication, easy setup, peripheral sharing.</li>
      <li><strong>Disadvantages:</strong> Limited area, scalability issues, possible congestion.</li>
    </ul>

    {/* Metropolitan Area Network */}
    <h3 className="text-2xl font-semibold mt-4">3. Metropolitan Area Network (MAN)</h3>
    <p className="text-lg leading-relaxed">
      MAN spans 5–50 km and connects computers across a city or nearby cities. Often used by organizations or ISPs, it provides high-speed connectivity but is costlier and complex.
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Advantages:</strong> High-speed, covers larger area than LAN, can act as ISP.</li>
      <li><strong>Disadvantages:</strong> Expensive, complex to maintain, may face congestion.</li>
    </ul>

    {/* Wide Area Network */}
    <h3 className="text-2xl font-semibold mt-4">4. Wide Area Network (WAN)</h3>
    <p className="text-lg leading-relaxed">
      WAN covers large geographical areas, connecting multiple LANs via telephone lines, radio waves, or satellites. It can be private or public, such as the Internet.
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Advantages:</strong> Connects remote locations, provides internet access, enables remote resource usage.</li>
      <li><strong>Disadvantages:</strong> Expensive setup, slower speeds compared to LAN/MAN, lower fault tolerance.</li>
    </ul>

    {/* ================= Network Types by Communication ================= */}
    <h2 className="text-3xl font-bold mt-6">Types of Networks by Communication</h2>

    {/* Point-to-Point */}
    <h3 className="text-2xl font-semibold mt-4">1. Point-to-Point</h3>
    <p className="text-lg leading-relaxed">
      Direct connection between two devices, using wired or wireless links.
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Advantages:</strong> Dedicated, low latency, reliable communication.</li>
      <li><strong>Disadvantages:</strong> Not scalable, requires extra links, limited fault tolerance.</li>
    </ul>

    {/* Multipoint Network */}
    <h3 className="text-2xl font-semibold mt-4">2. Multipoint Network</h3>
    <p className="text-lg leading-relaxed">
      Multiple devices share a single communication channel, either at the same time (spatially) or in turns (temporally).
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Advantages:</strong> Cost-effective, multiple devices share a link, dynamic participation.</li>
      <li><strong>Disadvantages:</strong> Shared bandwidth can reduce performance, higher risk of interference, security concerns.</li>
    </ul>

    {/* Broadcast Network */}
    <h3 className="text-2xl font-semibold mt-4">3. Broadcast Network</h3>
    <p className="text-lg leading-relaxed">
      One sender transmits data to multiple receivers simultaneously. Examples include radio or television broadcasts.
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Advantages:</strong> Efficient for one-to-many communication, simple implementation, saves resources.</li>
      <li><strong>Disadvantages:</strong> One-way communication, no guaranteed delivery to all, potential bandwidth wastage.</li>
    </ul>

  </div>
);

export default NetworkTypesTutorial;
