import React from 'react';

const PhysicalLayer: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Physical Layer (Layer 1) - OSI Model
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Physical Layer is the lowest layer (Layer 1) of the OSI model. It is responsible for the actual
      physical transmission of raw bit streams over a physical medium. This layer defines the electrical,
      mechanical, procedural, and functional specifications for activating, maintaining, and deactivating
      physical connections between network devices.
    </p>

    {/* Position in OSI */}
    <h2 className="text-3xl font-bold mt-8">Position in OSI Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  OSI Model:

  +-------------------+
  | 7. Application    |
  +-------------------+
  | 6. Presentation   |
  +-------------------+
  | 5. Session        |
  +-------------------+
  | 4. Transport      |
  +-------------------+
  | 3. Network        |
  +-------------------+
  | 2. Data Link      |
  +-------------------+
  | 1. PHYSICAL    <--+  (You are here!)
  +-------------------+

  Data Unit: Bits (0s and 1s)
  Devices: Hub, Repeater, Cables, Connectors, NIC (physical part)
`}</pre>
    </div>

    {/* Functions */}
    <h2 className="text-3xl font-bold mt-8">Functions of Physical Layer</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Bit Synchronization</td>
            <td className="p-3 border">Provides clock synchronization between sender and receiver to coordinate bit transmission timing</td>
          </tr>
          <tr>
            <td className="p-3 border">Bit Rate Control</td>
            <td className="p-3 border">Defines transmission rate - number of bits sent per second (bps)</td>
          </tr>
          <tr>
            <td className="p-3 border">Physical Topologies</td>
            <td className="p-3 border">Specifies how devices are arranged (bus, star, ring, mesh)</td>
          </tr>
          <tr>
            <td className="p-3 border">Transmission Mode</td>
            <td className="p-3 border">Defines direction of transmission (simplex, half-duplex, full-duplex)</td>
          </tr>
          <tr>
            <td className="p-3 border">Physical Characteristics</td>
            <td className="p-3 border">Defines interface and transmission medium specifications</td>
          </tr>
          <tr>
            <td className="p-3 border">Line Configuration</td>
            <td className="p-3 border">Point-to-point or multipoint connection configuration</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Signal Types */}
    <h2 className="text-3xl font-bold mt-8">Signal Types</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  Digital Signal (Discrete):

  Voltage
    ^
  +V|     +---+     +---+     +---+
    |     |   |     |   |     |   |
  0 |-----+   +-----+   +-----+   +-----
    |
  -V|
    +----------------------------------------> Time
        1   0   1   0   1   0
        (Binary representation)


  Analog Signal (Continuous):

  Amplitude
    ^
    |    /\\      /\\      /\\
    |   /  \\    /  \\    /  \\
  0 |--/----\\--/----\\--/----\\---------> Time
    | /      \\/      \\/      \\
    |/
    (Sine wave - varies continuously)


  Signal Characteristics:
  - Amplitude: Signal strength (voltage)
  - Frequency: Number of cycles per second (Hz)
  - Phase: Position of wave relative to time
  - Wavelength: Distance of one complete cycle
`}</pre>
    </div>

    {/* Transmission Media */}
    <h2 className="text-3xl font-bold mt-8">Transmission Media</h2>
    <p className="leading-relaxed">
      Transmission media are the physical paths through which data travels from sender to receiver.
      They are classified into guided (wired) and unguided (wireless) media.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Transmission Media Classification:

                    Transmission Media
                           |
           +---------------+---------------+
           |                               |
      Guided Media                    Unguided Media
      (Wired/Bounded)                 (Wireless/Unbounded)
           |                               |
    +------+------+                 +------+------+
    |      |      |                 |      |      |
  Twisted Coaxial Fiber         Radio  Micro- Infrared
   Pair   Cable   Optic         Waves  waves


  Guided Media:
  +------------------+------------------+------------------+
  |   Twisted Pair   |  Coaxial Cable   |   Fiber Optic    |
  +------------------+------------------+------------------+
  | UTP (Unshielded) | Baseband/        | Single-mode      |
  | STP (Shielded)   | Broadband        | Multi-mode       |
  +------------------+------------------+------------------+
  | 10 Mbps-10 Gbps  | 10 Mbps-100 Mbps | 100+ Gbps        |
  +------------------+------------------+------------------+
`}</pre>
    </div>

    {/* Cable Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Cables</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Cable Type</th>
            <th className="p-3 border">Speed</th>
            <th className="p-3 border">Distance</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Cat5</td>
            <td className="p-3 border">100 Mbps</td>
            <td className="p-3 border">100 m</td>
            <td className="p-3 border">Basic Ethernet</td>
          </tr>
          <tr>
            <td className="p-3 border">Cat5e</td>
            <td className="p-3 border">1 Gbps</td>
            <td className="p-3 border">100 m</td>
            <td className="p-3 border">Gigabit Ethernet</td>
          </tr>
          <tr>
            <td className="p-3 border">Cat6</td>
            <td className="p-3 border">10 Gbps</td>
            <td className="p-3 border">55 m (10G)</td>
            <td className="p-3 border">High-speed LAN</td>
          </tr>
          <tr>
            <td className="p-3 border">Cat6a</td>
            <td className="p-3 border">10 Gbps</td>
            <td className="p-3 border">100 m</td>
            <td className="p-3 border">Data centers</td>
          </tr>
          <tr>
            <td className="p-3 border">Coaxial</td>
            <td className="p-3 border">10-100 Mbps</td>
            <td className="p-3 border">500 m</td>
            <td className="p-3 border">Cable TV, old Ethernet</td>
          </tr>
          <tr>
            <td className="p-3 border">Single-mode Fiber</td>
            <td className="p-3 border">100+ Gbps</td>
            <td className="p-3 border">100+ km</td>
            <td className="p-3 border">Long-distance WAN</td>
          </tr>
          <tr>
            <td className="p-3 border">Multi-mode Fiber</td>
            <td className="p-3 border">10 Gbps</td>
            <td className="p-3 border">500 m</td>
            <td className="p-3 border">Campus backbone</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Encoding Schemes */}
    <h2 className="text-3xl font-bold mt-8">Line Encoding Schemes</h2>
    <p className="leading-relaxed">
      Line encoding converts binary data into signals that can be transmitted over physical media.
      Different encoding schemes offer various advantages in terms of synchronization and bandwidth.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Common Line Encoding Schemes:

  Data:      1   0   0   1   1   0   1   0

  1. NRZ-L (Non-Return to Zero - Level):
     +V |----+       +----+----+    +----+
        |    |       |         |    |    |
      0 |    +-------+         +----+    +----
        High = 1, Low = 0

  2. NRZ-I (Non-Return to Zero - Inverted):
     +V |----+    +-------+    +----+----+
        |    |    |       |    |         |
      0 |    +----+       +----+         +----
        Transition = 1, No transition = 0

  3. Manchester Encoding:
     +V |--+  +--+  +--+  +--+--+  +--+  +--+
        |  |  |  |  |  |       |  |  |  |  |
      0 |  +--+  +--+  +--+    +--+  +--+  +--
        Low-to-High = 1, High-to-Low = 0
        (Used in Ethernet)

  4. Differential Manchester:
     +V |  +--+--+  +--+--+  +--+  +--+--+
        |  |     |  |     |  |  |  |     |
      0 +--+     +--+     +--+  +--+     +--
        Transition at start = 0, No transition = 1
        (Used in Token Ring)
`}</pre>
    </div>

    {/* Multiplexing */}
    <h2 className="text-3xl font-bold mt-8">Multiplexing Techniques</h2>
    <p className="leading-relaxed">
      Multiplexing allows multiple signals to share a single transmission medium, improving bandwidth
      utilization and reducing costs.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Application</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">FDM (Frequency Division)</td>
            <td className="p-3 border">Different signals use different frequency bands</td>
            <td className="p-3 border">Radio, TV broadcasting, Cable TV</td>
          </tr>
          <tr>
            <td className="p-3 border">TDM (Time Division)</td>
            <td className="p-3 border">Different signals use different time slots</td>
            <td className="p-3 border">Digital telephony, T1/E1 lines</td>
          </tr>
          <tr>
            <td className="p-3 border">WDM (Wavelength Division)</td>
            <td className="p-3 border">Different signals use different light wavelengths</td>
            <td className="p-3 border">Fiber optic networks</td>
          </tr>
          <tr>
            <td className="p-3 border">CDM (Code Division)</td>
            <td className="p-3 border">Different signals use different codes</td>
            <td className="p-3 border">Cellular networks (CDMA)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Multiplexing Visualization:

  FDM (Frequency Division Multiplexing):
  Frequency
  ^
  |  +--------+  +--------+  +--------+
  |  |Channel1|  |Channel2|  |Channel3|
  |  |  f1    |  |  f2    |  |  f3    |
  +--+--------+--+--------+--+--------+--> Bandwidth

  TDM (Time Division Multiplexing):
  Time
  |<-Slot1->|<-Slot2->|<-Slot3->|<-Slot1->|...
  |  Ch1    |  Ch2    |  Ch3    |  Ch1    |
  +---------|---------|---------|---------|----> Time Frame
`}</pre>
    </div>

    {/* Physical Layer Devices */}
    <h2 className="text-3xl font-bold mt-8">Physical Layer Devices</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Hub</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Multiport repeater</li>
          <li>Broadcasts to all ports</li>
          <li>No intelligence</li>
          <li>Shared bandwidth</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Repeater</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Regenerates signals</li>
          <li>Extends cable distance</li>
          <li>Overcomes attenuation</li>
          <li>Two-port device</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Modem</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Modulates/demodulates signals</li>
          <li>Digital to analog conversion</li>
          <li>Enables WAN connectivity</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Network Interface Card</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Physical network connection</li>
          <li>Signal encoding/decoding</li>
          <li>Works at L1 and L2</li>
        </ul>
      </div>
    </div>

    {/* Standards */}
    <h2 className="text-3xl font-bold mt-8">Physical Layer Standards</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>RS-232:</strong> Serial communication standard for modems</li>
      <li><strong>V.35:</strong> High-speed serial interface for WAN</li>
      <li><strong>IEEE 802.3:</strong> Ethernet physical layer specifications</li>
      <li><strong>IEEE 802.11:</strong> Wireless LAN physical specifications</li>
      <li><strong>USB:</strong> Universal Serial Bus physical layer</li>
      <li><strong>SONET/SDH:</strong> Fiber optic transmission standards</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Physical layer transmits raw bits (0s and 1s)</li>
      <li>Defines electrical, mechanical, and procedural specifications</li>
      <li>Hub and Repeater operate at Physical layer</li>
      <li>Transmission media: Guided (wired) and Unguided (wireless)</li>
      <li>Manchester encoding provides self-clocking (used in Ethernet)</li>
      <li>FDM, TDM, WDM are multiplexing techniques</li>
    </ul>

    {/* GATE Important */}
    <h2 className="text-3xl font-bold mt-8">Important for GATE</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Know the functions of Physical layer</li>
        <li>Understand different encoding schemes (NRZ, Manchester)</li>
        <li>Compare guided vs unguided transmission media</li>
        <li>Understand multiplexing techniques (FDM, TDM, WDM)</li>
        <li>Remember cable categories and their speeds</li>
        <li>Hub broadcasts to all ports; operates at Layer 1</li>
      </ul>
    </div>
  </div>
);

export default PhysicalLayer;
