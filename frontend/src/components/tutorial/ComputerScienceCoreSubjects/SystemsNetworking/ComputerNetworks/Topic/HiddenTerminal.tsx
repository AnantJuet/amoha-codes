import React from "react";

const HiddenTerminal: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Hidden Terminal Problem
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The <strong>Hidden Terminal Problem</strong> occurs in wireless networks when two stations
      that cannot hear each other transmit simultaneously to a common receiver, causing collisions.
      This is a fundamental challenge in wireless communication that CSMA/CA alone cannot solve.
    </p>

    <h2 className="text-3xl font-bold mt-8">Problem Illustration</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Hidden Terminal Scenario:

     Range of A          Range of C
    <--------->        <--------->

    +---+              +---+              +---+
    | A |    +---+     | B |     +---+    | C |
    +---+    |   |     +---+     |   |    +---+
      |      |   |       ^       |   |      |
      +------+   +-------+-------+   +------+
               A's range   C's range

- A and C are "hidden" from each other
- Both A and C can reach B
- A cannot hear C transmitting
- C cannot hear A transmitting
- If both transmit to B simultaneously → COLLISION at B!

The Problem:
1. A senses channel, finds it free
2. C senses channel, finds it free (can't hear A)
3. Both transmit to B
4. Collision occurs at receiver B`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why CSMA/CA Fails</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CSMA/CA (Carrier Sense Multiple Access / Collision Avoidance):

1. Listen before transmit
2. If channel busy, wait
3. If channel free, transmit

Problem:
- CSMA/CA senses the channel at SENDER
- Collisions occur at RECEIVER
- Hidden terminals sense channel as FREE
- But collision happens at the receiver!

Collision detection impossible in wireless:
- Can't transmit and receive simultaneously
- Signal strength difference too large`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Solution: RTS/CTS</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RTS/CTS (Request to Send / Clear to Send):

    A                    B                    C
    |                    |                    |
    |------- RTS ------->|                    |
    |                    |                    |
    |<------ CTS --------|-------- CTS ------>|
    |                    |                    |
    |======= DATA ======>|        (C waits)   |
    |                    |                    |
    |<------ ACK --------|                    |
    |                    |                    |

How it works:
1. A sends RTS (Request to Send) to B
2. B replies with CTS (Clear to Send)
3. C hears CTS and knows to wait (NAV timer)
4. A transmits data to B
5. B sends ACK

Network Allocation Vector (NAV):
- Duration field in RTS/CTS
- Tells others how long to wait
- Virtual carrier sensing`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RTS/CTS Trade-offs</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantage</th>
            <th className="p-3 border">Disadvantage</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Solves hidden terminal</td>
            <td className="p-3 border">Overhead for small packets</td>
          </tr>
          <tr>
            <td className="p-3 border">Reserves channel</td>
            <td className="p-3 border">4-way handshake latency</td>
          </tr>
          <tr>
            <td className="p-3 border">Reduces collision cost</td>
            <td className="p-3 border">Not always enabled</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Hidden terminals can't hear each other but share a receiver</li>
        <li>CSMA/CA fails because it senses at sender, not receiver</li>
        <li>RTS/CTS handshake reserves the channel</li>
        <li>NAV timer prevents hidden terminals from transmitting</li>
        <li>Trade-off between collision prevention and overhead</li>
      </ul>
    </div>
  </div>
);

export default HiddenTerminal;
