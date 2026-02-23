import React from "react";

const NTP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Network Time Protocol (NTP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Network Time Protocol (NTP) is the most widely used protocol for clock synchronization across
      the Internet. Developed by David L. Mills at the University of Delaware, NTP can synchronize
      computer clocks to within a few milliseconds of Coordinated Universal Time (UTC).
    </p>

    <h2 className="text-3xl font-bold mt-8">NTP Architecture</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NTP Hierarchical Stratum System:

Stratum 0: Reference Clocks (Atomic, GPS)
              │
              ▼
         ┌─────────┐
Stratum 1:│ Primary │◄── Direct connection to reference
         │ Servers │    (e.g., GPS receiver, atomic clock)
         └────┬────┘
              │
    ┌─────────┼─────────┐
    ▼         ▼         ▼
┌───────┐ ┌───────┐ ┌───────┐
│Stratum│ │Stratum│ │Stratum│  Secondary servers
│   2   │ │   2   │ │   2   │  synchronized to Stratum 1
└───┬───┘ └───┬───┘ └───┬───┘
    │         │         │
    ▼         ▼         ▼
┌───────┐ ┌───────┐ ┌───────┐
│Stratum│ │Stratum│ │Stratum│  Tertiary servers
│   3   │ │   3   │ │   3   │
└───┬───┘ └───┬───┘ └───┬───┘
    │         │         │
    ▼         ▼         ▼
  Clients (Stratum 4+)

Maximum stratum: 15 (16 = unsynchronized)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stratum Levels</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Stratum</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Typical Accuracy</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">0</td>
            <td className="p-3 border">Reference clocks (atomic, GPS, radio)</td>
            <td className="p-3 border">Nanoseconds</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">1</td>
            <td className="p-3 border">Primary servers directly connected to Stratum 0</td>
            <td className="p-3 border">Microseconds</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2</td>
            <td className="p-3 border">Secondary servers synchronized to Stratum 1</td>
            <td className="p-3 border">~1-10 ms</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3-15</td>
            <td className="p-3 border">Cascaded synchronization, increasing stratum</td>
            <td className="p-3 border">~10-100 ms</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">16</td>
            <td className="p-3 border">Unsynchronized (not usable as time source)</td>
            <td className="p-3 border">N/A</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">NTP Message Exchange</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NTP Timestamp Exchange:

Client                                  Server
   │                                       │
   │ T1 = client_send_time                 │
   │                                       │
   │──────── NTP Request ─────────────────►│
   │                                       │
   │                        T2 = server_receive_time
   │                        T3 = server_send_time
   │                                       │
   │◄─────── NTP Response ────────────────│
   │                                       │
   │ T4 = client_receive_time              │
   │                                       │

The response contains: T1, T2, T3
Client measures: T4

Offset Calculation:
θ = [(T2 - T1) + (T3 - T4)] / 2

Round-Trip Delay:
δ = (T4 - T1) - (T3 - T2)

Where:
- θ (theta) = clock offset (how much to adjust)
- δ (delta) = network round-trip delay`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Understanding the Formulas</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Offset Calculation Explained</h3>
      <div className="font-mono text-gray-900">
        <p>θ = [(T2 - T1) + (T3 - T4)] / 2</p>
      </div>
      <p className="mt-4 leading-relaxed">
        This formula calculates the time difference between client and server clocks:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>(T2 - T1) = apparent delay for request + clock offset</li>
        <li>(T3 - T4) = apparent delay for response - clock offset</li>
        <li>Adding them cancels the delays, leaving 2 * offset</li>
        <li>Divide by 2 to get the actual clock offset</li>
      </ul>
    </div>

    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Round-Trip Delay Explained</h3>
      <div className="font-mono text-gray-900">
        <p>δ = (T4 - T1) - (T3 - T2)</p>
      </div>
      <p className="mt-4 leading-relaxed">
        This calculates the total network delay:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>(T4 - T1) = total elapsed time at client</li>
        <li>(T3 - T2) = processing time at server</li>
        <li>Subtracting gives pure network delay (both directions)</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Calculation</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Example NTP Calculation:

Given timestamps (in seconds since epoch):
  T1 = 1000.000 (client sends request)
  T2 = 1000.025 (server receives request)
  T3 = 1000.026 (server sends response)
  T4 = 1000.050 (client receives response)

Calculate Offset:
  θ = [(T2 - T1) + (T3 - T4)] / 2
  θ = [(1000.025 - 1000.000) + (1000.026 - 1000.050)] / 2
  θ = [0.025 + (-0.024)] / 2
  θ = 0.001 / 2
  θ = 0.0005 seconds = 0.5 ms

The client clock is 0.5 ms behind the server.

Calculate Round-Trip Delay:
  δ = (T4 - T1) - (T3 - T2)
  δ = (1000.050 - 1000.000) - (1000.026 - 1000.025)
  δ = 0.050 - 0.001
  δ = 0.049 seconds = 49 ms

Total network delay is 49 ms.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">NTP Operating Modes</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Client-Server Mode</h3>
        <p className="leading-relaxed text-sm">
          Client sends request, server responds with time. Most common mode for end devices.
        </p>
        <ul className="list-disc list-inside mt-2 text-sm space-y-1">
          <li>Client initiates communication</li>
          <li>Server is stateless</li>
          <li>Suitable for many clients</li>
        </ul>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Symmetric Mode</h3>
        <p className="leading-relaxed text-sm">
          Peers exchange time information bidirectionally. Used between servers at same stratum.
        </p>
        <ul className="list-disc list-inside mt-2 text-sm space-y-1">
          <li>Both peers can be time sources</li>
          <li>Automatic failover</li>
          <li>Better redundancy</li>
        </ul>
      </div>
      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Broadcast Mode</h3>
        <p className="leading-relaxed text-sm">
          Server broadcasts time periodically. Clients listen passively.
        </p>
        <ul className="list-disc list-inside mt-2 text-sm space-y-1">
          <li>Low server load</li>
          <li>Less accurate (no RTT)</li>
          <li>Good for many clients on LAN</li>
        </ul>
      </div>
      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Multicast Mode</h3>
        <p className="leading-relaxed text-sm">
          Similar to broadcast but uses IP multicast for efficiency.
        </p>
        <ul className="list-disc list-inside mt-2 text-sm space-y-1">
          <li>Reduced network traffic</li>
          <li>Clients subscribe to group</li>
          <li>Scalable for large networks</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">NTP Filtering and Selection</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NTP Clock Selection Process:

1. Clock Filter Algorithm
   - Maintains last 8 samples from each server
   - Selects sample with minimum delay
   - Calculates dispersion (variation)

2. Selection Algorithm
   - Eliminates "falsetickers" (bad clocks)
   - Uses intersection algorithm
   - Keeps "truechimers" (good clocks)

3. Clustering Algorithm
   - Ranks remaining candidates
   - Selects based on stratum and distance
   - Removes outliers

4. Combining Algorithm
   - Weighted average of selected sources
   - Lower stratum = higher weight
   - Lower delay = higher weight

                    Multiple Sources
                          │
                    ┌─────┴─────┐
                    ▼           ▼
              ┌─────────┐ ┌─────────┐
              │Filter   │ │Filter   │
              └────┬────┘ └────┬────┘
                   │           │
                   └─────┬─────┘
                         ▼
                   ┌───────────┐
                   │ Selection │
                   └─────┬─────┘
                         ▼
                   ┌───────────┐
                   │ Clustering│
                   └─────┬─────┘
                         ▼
                   ┌───────────┐
                   │ Combining │
                   └─────┬─────┘
                         ▼
                   System Clock`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">NTP vs SNTP</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">NTP</th>
            <th className="p-3 border">SNTP</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Complexity</td>
            <td className="p-3 border">Full implementation</td>
            <td className="p-3 border">Simplified subset</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Accuracy</td>
            <td className="p-3 border">Milliseconds</td>
            <td className="p-3 border">Tens of milliseconds</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Multiple Sources</td>
            <td className="p-3 border">Yes, with selection</td>
            <td className="p-3 border">Usually single source</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Use Case</td>
            <td className="p-3 border">Servers, critical systems</td>
            <td className="p-3 border">Embedded, IoT devices</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Security Considerations</h2>

    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>NTS (Network Time Security):</strong> Cryptographic authentication for NTP</li>
      <li><strong>Spoofing Attacks:</strong> Malicious time sources can mislead clients</li>
      <li><strong>DDoS Amplification:</strong> NTP servers can be used for reflection attacks</li>
      <li><strong>Symmetric Key Auth:</strong> Pre-shared keys for trusted relationships</li>
      <li><strong>Autokey:</strong> Public key authentication (deprecated in favor of NTS)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>NTP uses a hierarchical stratum system (0-15, 16 = unsynchronized)</li>
        <li>Four timestamps (T1-T4) calculate offset and round-trip delay</li>
        <li>Offset formula: theta = [(T2-T1) + (T3-T4)] / 2</li>
        <li>NTP can achieve millisecond accuracy over the Internet</li>
        <li>Multiple time sources provide redundancy and fault tolerance</li>
        <li>SNTP is a simplified version for less critical applications</li>
        <li>Security features like NTS protect against time spoofing</li>
      </ul>
    </div>
  </div>
);

export default NTP;
