import React from 'react';

const MACSublayer: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      MAC Sublayer (Media Access Control)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The MAC (Media Access Control) sublayer is the lower portion of the Data Link Layer that
      controls how devices on a network gain access to the shared transmission medium and when
      they can transmit data. It handles physical addressing and determines which device has
      permission to transmit.
    </p>

    <h2 className="text-3xl font-bold mt-8">Position in Data Link Layer</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Data Link Layer Sublayers:

    +------------------------+
    |   Network Layer        |
    +------------------------+
    |   LLC Sublayer         |  <- Flow control, error control
    +------------------------+
    |   MAC Sublayer         |  <- THIS LAYER
    +------------------------+   Media access, addressing
    |   Physical Layer       |
    +------------------------+
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">MAC Sublayer Functions</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Physical Addressing:</strong> Uses MAC addresses (48-bit) to identify devices</li>
      <li><strong>Frame Delimiting:</strong> Marks the beginning and end of frames</li>
      <li><strong>Media Access Control:</strong> Determines when a device can transmit</li>
      <li><strong>Error Detection:</strong> Uses CRC in the frame trailer</li>
      <li><strong>Frame Acknowledgment:</strong> Optional acknowledgment of received frames</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Multiple Access Protocols</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Classification of Multiple Access Protocols:

                    Multiple Access
                          |
        +-----------------+-----------------+
        |                 |                 |
    Random             Controlled      Channelization
    Access             Access
        |                 |                 |
    +---+---+        +---+---+        +---+---+
    |       |        |       |        |       |
  ALOHA   CSMA    Polling Token    FDMA  TDMA  CDMA
            |        Ring
      +-----+-----+
      |     |     |
    CSMA  CSMA  CSMA
     /CD   /CA
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Random Access Protocols</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">ALOHA</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Pure ALOHA: Transmit anytime</li>
          <li>Slotted ALOHA: Transmit in time slots</li>
          <li>Max efficiency: 18.4% (pure), 36.8% (slotted)</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">CSMA</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Carrier Sense: Listen before transmit</li>
          <li>CSMA/CD: Detect collision (Ethernet)</li>
          <li>CSMA/CA: Avoid collision (Wi-Fi)</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Controlled Access Protocols</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Polling</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Central controller polls each device</li>
          <li>Device transmits only when polled</li>
          <li>No collisions but overhead</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Token Passing</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Token circulates around ring</li>
          <li>Device with token can transmit</li>
          <li>Used in Token Ring, FDDI</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Channelization Protocols</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Protocol</th>
            <th className="p-3 border">Division Method</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">FDMA</td>
            <td className="p-3 border">Frequency bands</td>
            <td className="p-3 border">Radio, TV broadcasting</td>
          </tr>
          <tr>
            <td className="p-3 border">TDMA</td>
            <td className="p-3 border">Time slots</td>
            <td className="p-3 border">GSM cellular</td>
          </tr>
          <tr>
            <td className="p-3 border">CDMA</td>
            <td className="p-3 border">Spreading codes</td>
            <td className="p-3 border">3G cellular, GPS</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">MAC Address</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">MAC Address Format</h3>
      <div className="font-mono text-gray-900">AA:BB:CC:DD:EE:FF</div>
      <ul className="list-disc list-inside text-sm mt-2 space-y-1">
        <li>48 bits (6 bytes) total</li>
        <li>First 24 bits: OUI (manufacturer ID)</li>
        <li>Last 24 bits: Device ID</li>
        <li>Broadcast: FF:FF:FF:FF:FF:FF</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>MAC sublayer controls access to shared medium</li>
        <li>Uses 48-bit MAC addresses for physical addressing</li>
        <li>Random access: ALOHA, CSMA/CD, CSMA/CA</li>
        <li>Controlled access: Polling, Token Passing</li>
        <li>Channelization: FDMA, TDMA, CDMA</li>
        <li>Ethernet uses CSMA/CD; Wi-Fi uses CSMA/CA</li>
      </ul>
    </div>
  </div>
);

export default MACSublayer;
