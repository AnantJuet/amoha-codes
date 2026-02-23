import React from "react";

const ExposedTerminal: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Exposed Terminal Problem
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The <strong>Exposed Terminal Problem</strong> is the opposite of the hidden terminal problem.
      It occurs when a station unnecessarily defers transmission because it hears another transmission,
      even though its own transmission would not cause interference. This leads to reduced throughput.
    </p>

    <h2 className="text-3xl font-bold mt-8">Problem Illustration</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Exposed Terminal Scenario:

     Range of B          Range of C
    <--------->        <--------->

    +---+     +---+     +---+     +---+
    | A |     | B |     | C |     | D |
    +---+     +---+     +---+     +---+
              |   |     |   |
        B transmits     C wants to
        to A            transmit to D

Situation:
- B is transmitting to A
- C wants to transmit to D
- C hears B's transmission
- C defers (thinks channel is busy)

The Problem:
- C's transmission to D would NOT interfere with B→A
- A cannot hear C (different direction)
- D cannot hear B (different direction)
- But C waits unnecessarily!
- Result: Wasted transmission opportunity`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hidden vs Exposed Terminal</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Hidden Terminal</th>
            <th className="p-3 border">Exposed Terminal</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Problem</td>
            <td className="p-3 border">Collision at receiver</td>
            <td className="p-3 border">Unnecessary deferral</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cause</td>
            <td className="p-3 border">Can't hear other sender</td>
            <td className="p-3 border">Can hear other sender</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Effect</td>
            <td className="p-3 border">Data loss</td>
            <td className="p-3 border">Reduced throughput</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Solution</td>
            <td className="p-3 border">RTS/CTS</td>
            <td className="p-3 border">More complex protocols</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why RTS/CTS Doesn't Fully Solve It</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RTS/CTS and Exposed Terminals:

Scenario: B transmits to A using RTS/CTS

    A          B          C          D
    |<--RTS----|          |          |
    |---CTS--->|   (C hears nothing) |
    |<==DATA===|          |          |

C hears B's RTS but NOT A's CTS:
- C knows B is transmitting
- C doesn't know B's receiver (A) location
- C could safely transmit to D
- But C might still defer

Partial improvement:
- If C doesn't hear CTS, it can transmit
- But timing and implementation vary`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Solutions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Approaches to Exposed Terminal:

1. MACA-BI (MACA By Invitation)
   - Receiver initiates communication
   - Eliminates exposed terminal issue

2. DUCHA (Dual Channel)
   - Separate control and data channels
   - Better parallel transmissions

3. Directional Antennas
   - Focused transmission/reception
   - Reduces interference zone

4. Power Control
   - Adjust transmission power
   - Minimize unnecessary coverage

5. Full Duplex Radio
   - Simultaneous transmit/receive
   - Emerging technology`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Impact on Network Performance</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Reduced Throughput:</strong> Valid transmissions unnecessarily delayed</li>
      <li><strong>Increased Latency:</strong> Packets wait longer than needed</li>
      <li><strong>Unfairness:</strong> Some nodes get more channel access than others</li>
      <li><strong>Spatial Reuse:</strong> Cannot exploit parallel non-interfering transmissions</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Exposed terminal: station defers when it doesn't need to</li>
        <li>Reduces network throughput and spatial reuse</li>
        <li>RTS/CTS only partially addresses this problem</li>
        <li>Solutions include directional antennas and dual channels</li>
        <li>Less critical than hidden terminal (no data loss)</li>
      </ul>
    </div>
  </div>
);

export default ExposedTerminal;
