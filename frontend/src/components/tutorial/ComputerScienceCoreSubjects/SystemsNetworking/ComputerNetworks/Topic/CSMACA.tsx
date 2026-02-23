import React from 'react';

const CSMACA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      CSMA/CA is the media access control protocol used in wireless networks (IEEE 802.11 Wi-Fi).
      Unlike CSMA/CD, wireless networks cannot easily detect collisions during transmission, so
      CSMA/CA tries to avoid collisions before they occur using various techniques.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Not CSMA/CD for Wireless?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Hidden Terminal Problem:</strong> Stations may not hear each other</li>
      <li><strong>Exposed Terminal Problem:</strong> Stations may falsely avoid transmission</li>
      <li><strong>Signal Fading:</strong> Wireless signals weaken with distance</li>
      <li><strong>Full-Duplex Limitation:</strong> Radio cannot send and receive simultaneously</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">CSMA/CA Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    CSMA/CA Basic Algorithm:

    1. CARRIER SENSE: Listen to channel
       - If busy: Wait until idle + DIFS

    2. RANDOM BACKOFF:
       - Wait random number of slot times (contention window)
       - Countdown only when channel is idle
       - Pause countdown if channel becomes busy

    3. TRANSMIT: When backoff reaches 0, send frame

    4. WAIT FOR ACK:
       - If ACK received: Success
       - If no ACK (timeout): Double contention window, retry

    Key Times:
    - DIFS: Distributed Inter-Frame Space
    - SIFS: Short Inter-Frame Space (for ACK)
    - Slot Time: Basic time unit for backoff
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hidden Terminal Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Hidden Terminal Problem:

         A               B               C
         |               |               |
    [===Range===]   [=======]   [===Range===]
         |               |               |
         |<-- Can hear ->|<-- Can hear ->|
         |               |               |
         |<-- Cannot hear directly ----->|

    Scenario:
    - A wants to send to B
    - C also wants to send to B
    - A cannot hear C (and vice versa)
    - Both transmit simultaneously -> Collision at B!

    Solution: RTS/CTS mechanism
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RTS/CTS Mechanism</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    RTS/CTS (Request to Send / Clear to Send):

    Sender A                    Receiver B              Hidden C
       |                            |                      |
       |-------- RTS -------------->|                      |
       |                            |------ CTS ---------->|
       |<------- CTS ---------------|                      |
       |                            |                      |
       |======== DATA ==============>|                      |
       |                            |                      |
       |<------- ACK ---------------|                      |
       |                            |                      |

    - A sends RTS to B (includes duration)
    - B responds with CTS (includes duration)
    - C hears CTS, sets NAV (Network Allocation Vector)
    - C stays silent until NAV expires
    - Prevents hidden terminal collisions
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Inter-Frame Spacing</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Duration</th>
            <th className="p-3 border">Use</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">SIFS</td>
            <td className="p-3 border">Short IFS</td>
            <td className="p-3 border">10 us</td>
            <td className="p-3 border">ACK, CTS (highest priority)</td>
          </tr>
          <tr>
            <td className="p-3 border">PIFS</td>
            <td className="p-3 border">PCF IFS</td>
            <td className="p-3 border">SIFS + 1 slot</td>
            <td className="p-3 border">PCF polling</td>
          </tr>
          <tr>
            <td className="p-3 border">DIFS</td>
            <td className="p-3 border">DCF IFS</td>
            <td className="p-3 border">SIFS + 2 slots</td>
            <td className="p-3 border">Regular data frames</td>
          </tr>
          <tr>
            <td className="p-3 border">EIFS</td>
            <td className="p-3 border">Extended IFS</td>
            <td className="p-3 border">Longest</td>
            <td className="p-3 border">After error recovery</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">CSMA/CD vs CSMA/CA</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">CSMA/CD</th>
            <th className="p-3 border">CSMA/CA</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Used In</td>
            <td className="p-3 border">Wired Ethernet</td>
            <td className="p-3 border">Wi-Fi (802.11)</td>
          </tr>
          <tr>
            <td className="p-3 border">Collision Handling</td>
            <td className="p-3 border">Detect during TX</td>
            <td className="p-3 border">Avoid before TX</td>
          </tr>
          <tr>
            <td className="p-3 border">ACK Required</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">RTS/CTS</td>
            <td className="p-3 border">Not used</td>
            <td className="p-3 border">Optional</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>CSMA/CA avoids collisions before transmission</li>
        <li>Used in Wi-Fi because collision detection is impractical</li>
        <li>RTS/CTS solves the hidden terminal problem</li>
        <li>Uses acknowledgments to confirm successful delivery</li>
        <li>Inter-frame spacing provides priority (SIFS &lt; DIFS)</li>
        <li>More overhead than CSMA/CD but necessary for wireless</li>
      </ul>
    </div>
  </div>
);

export default CSMACA;
