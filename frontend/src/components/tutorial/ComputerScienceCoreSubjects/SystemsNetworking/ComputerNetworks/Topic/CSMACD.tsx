import React from 'react';

const CSMACD: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      CSMA/CD (Carrier Sense Multiple Access with Collision Detection)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      CSMA/CD is the media access control protocol used in traditional Ethernet networks. It improves
      on ALOHA by having stations listen to the channel before transmitting (carrier sense) and
      detect collisions during transmission (collision detection), allowing quick recovery.
    </p>

    <h2 className="text-3xl font-bold mt-8">CSMA/CD Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    CSMA/CD Algorithm:

    1. CARRIER SENSE: Listen to the channel
       - If busy: Wait until idle
       - If idle: Go to step 2

    2. TRANSMIT: Start sending frame

    3. COLLISION DETECTION: Monitor during transmission
       - If collision detected: Go to step 4
       - If no collision: Transmission successful

    4. JAM SIGNAL: Send 48-bit jam to ensure all stations detect

    5. EXPONENTIAL BACKOFF:
       - Wait random time: 0 to (2^k - 1) slot times
       - k = min(attempt number, 10)
       - After 16 attempts: Give up, report error

    6. RETRY: Go back to step 1
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Collision Detection</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Collision Scenario:

    Station A                              Station B
       |                                      |
    t0:|-------Frame A---->                   |
       |                    <----Frame B------| t0
       |                                      |
    t1:|       COLLISION!                     | t1
       |   [Signal amplitude abnormal]        |
       |                                      |
       |--JAM--                        --JAM--|
       |                                      |
       | [Random backoff]        [Random backoff]
       |                                      |

    Detection: Monitor voltage levels during transmission
    Collision = Higher than normal signal amplitude
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Minimum Frame Size</h2>
    <p className="leading-relaxed">
      For collision detection to work, the sender must still be transmitting when the collision
      signal returns. This requires a minimum frame size related to the round-trip propagation time.
    </p>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <h3 className="font-bold mb-2">Minimum Frame Size Formula</h3>
      <div className="font-mono text-sm text-gray-900">
        Min Frame Size = 2 * Propagation Delay * Bandwidth<br/><br/>
        For Ethernet (10 Mbps, 2500m max, 2.5 km * 5 us/km = 12.5 us one-way):<br/>
        RTT = 2 * 12.5 us = 25 us (plus repeater delays ~= 51.2 us)<br/>
        Min Frame = 51.2 us * 10 Mbps = 512 bits = 64 bytes
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Exponential Backoff</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Binary Exponential Backoff:

    After collision attempt n (n = 1, 2, 3, ...):

    k = min(n, 10)
    Wait = random(0 to 2^k - 1) * slot_time

    Slot time = 51.2 microseconds (10 Mbps Ethernet)

    Example:
    Attempt 1: Wait 0 or 1 slot (k=1, range 0-1)
    Attempt 2: Wait 0, 1, 2, or 3 slots (k=2, range 0-3)
    Attempt 3: Wait 0 to 7 slots (k=3, range 0-7)
    ...
    Attempt 10+: Wait 0 to 1023 slots (k=10, range 0-1023)

    After 16 attempts: Abort and report error
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Ethernet Standards Using CSMA/CD</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Standard</th>
            <th className="p-3 border">Speed</th>
            <th className="p-3 border">Cable</th>
            <th className="p-3 border">CSMA/CD</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">10BASE-T</td>
            <td className="p-3 border">10 Mbps</td>
            <td className="p-3 border">Twisted Pair</td>
            <td className="p-3 border">Yes (half-duplex)</td>
          </tr>
          <tr>
            <td className="p-3 border">100BASE-TX</td>
            <td className="p-3 border">100 Mbps</td>
            <td className="p-3 border">Cat5 UTP</td>
            <td className="p-3 border">Yes (half-duplex)</td>
          </tr>
          <tr>
            <td className="p-3 border">1000BASE-T</td>
            <td className="p-3 border">1 Gbps</td>
            <td className="p-3 border">Cat5e/Cat6</td>
            <td className="p-3 border">No (full-duplex)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why CSMA/CD is Obsolete</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Full-Duplex:</strong> Modern Ethernet uses switches with full-duplex links</li>
      <li><strong>No Collisions:</strong> Each port has dedicated bandwidth, no shared medium</li>
      <li><strong>Higher Speeds:</strong> Gigabit+ Ethernet operates only in full-duplex</li>
      <li><strong>Switches:</strong> Replaced hubs, eliminating collision domains</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>CSMA/CD: Listen, transmit, detect collisions, backoff</li>
        <li>Used in traditional (half-duplex) Ethernet</li>
        <li>Minimum frame size = 64 bytes to ensure collision detection</li>
        <li>Binary exponential backoff: Wait 0 to 2^k - 1 slots</li>
        <li>Jam signal ensures all stations detect collision</li>
        <li>Obsolete in modern full-duplex switched Ethernet</li>
      </ul>
    </div>
  </div>
);

export default CSMACD;
