import React from 'react';

const ICMP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      ICMP (Internet Control Message Protocol)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      ICMP is a network layer protocol used by network devices to send error messages and
      operational information. Unlike TCP and UDP which carry user data, ICMP is used for
      network diagnostics and control. Common tools like ping and traceroute rely on ICMP.
    </p>

    <h2 className="text-3xl font-bold mt-8">ICMP Message Format</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    ICMP Message Structure:

     0                   1                   2                   3
     0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |     Type      |     Code      |          Checksum             |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |                     Type-specific Data                        |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

    Type:     Identifies the ICMP message type
    Code:     Provides additional context for the type
    Checksum: Error detection for ICMP header + data
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common ICMP Message Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">Echo Reply</td>
            <td className="p-3 border">Ping response</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Destination Unreachable</td>
            <td className="p-3 border">Cannot reach destination</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Source Quench</td>
            <td className="p-3 border">Slow down (deprecated)</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">Redirect</td>
            <td className="p-3 border">Use different route</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">Echo Request</td>
            <td className="p-3 border">Ping request</td>
          </tr>
          <tr>
            <td className="p-3 border">11</td>
            <td className="p-3 border">Time Exceeded</td>
            <td className="p-3 border">TTL expired</td>
          </tr>
          <tr>
            <td className="p-3 border">12</td>
            <td className="p-3 border">Parameter Problem</td>
            <td className="p-3 border">Bad IP header</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Destination Unreachable Codes</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Code</th>
            <th className="p-3 border">Meaning</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">Network unreachable</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Host unreachable</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Protocol unreachable</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Port unreachable</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Fragmentation needed but DF set</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">Source route failed</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Ping (Echo Request/Reply)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Ping Operation:

    Host A                                 Host B
       |                                      |
       |-- ICMP Echo Request (Type 8) ------->|
       |   ID: 1234, Seq: 1                   |
       |                                      |
       |<-- ICMP Echo Reply (Type 0) ---------|
       |   ID: 1234, Seq: 1                   |
       |                                      |

    $ ping 192.168.1.1
    PING 192.168.1.1: 64 bytes
    64 bytes from 192.168.1.1: seq=1 ttl=64 time=0.5 ms
    64 bytes from 192.168.1.1: seq=2 ttl=64 time=0.4 ms

    Uses:
    - Test connectivity
    - Measure round-trip time
    - Check if host is alive
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Traceroute</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Traceroute Uses ICMP Time Exceeded:

    Source         Router 1       Router 2       Destination
       |              |              |              |
       |--TTL=1------>|              |              |
       |<-Time Exceed-|              |              |
       |              |              |              |
       |--TTL=2-------|------------->|              |
       |              |<-Time Exceed-|              |
       |              |              |              |
       |--TTL=3-------|--------------|------------->|
       |              |              |<-Echo Reply--|

    $ traceroute google.com
    1  192.168.1.1     1.2 ms
    2  10.0.0.1        5.4 ms
    3  72.14.215.85   12.3 ms
    4  google.com     15.2 ms
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ICMP Security</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">ICMP Attacks</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Ping flood (DoS)</li>
          <li>Smurf attack (amplification)</li>
          <li>Ping of death (oversized)</li>
          <li>ICMP redirect abuse</li>
          <li>Network reconnaissance</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Security Measures</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Rate limit ICMP</li>
          <li>Block at firewall (selective)</li>
          <li>Disable ICMP redirects</li>
          <li>Filter broadcast pings</li>
          <li>Monitor for anomalies</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>ICMP provides error reporting and diagnostics</li>
        <li>Echo Request/Reply (Type 8/0) used by ping</li>
        <li>Time Exceeded (Type 11) used by traceroute</li>
        <li>Destination Unreachable (Type 3) reports routing failures</li>
        <li>ICMP is encapsulated in IP (protocol number 1)</li>
        <li>Often rate-limited or filtered for security</li>
      </ul>
    </div>
  </div>
);

export default ICMP;
