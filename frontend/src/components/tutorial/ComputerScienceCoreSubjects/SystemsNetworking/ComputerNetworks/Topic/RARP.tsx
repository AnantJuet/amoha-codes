import React from 'react';

const RARP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      RARP (Reverse Address Resolution Protocol)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      RARP is a protocol that allows a host to discover its IP address when it only knows its
      MAC (hardware) address. It was primarily used by diskless workstations that had no way
      to store their IP address permanently. RARP is now considered obsolete, having been
      replaced by BOOTP and DHCP.
    </p>

    <h2 className="text-3xl font-bold mt-8">RARP vs ARP</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">ARP</th>
            <th className="p-3 border">RARP</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Purpose</td>
            <td className="p-3 border">IP to MAC</td>
            <td className="p-3 border">MAC to IP</td>
          </tr>
          <tr>
            <td className="p-3 border">Question</td>
            <td className="p-3 border">"Who has this IP?"</td>
            <td className="p-3 border">"What is my IP?"</td>
          </tr>
          <tr>
            <td className="p-3 border">Requester Knows</td>
            <td className="p-3 border">Destination IP</td>
            <td className="p-3 border">Own MAC address</td>
          </tr>
          <tr>
            <td className="p-3 border">Requester Needs</td>
            <td className="p-3 border">Destination MAC</td>
            <td className="p-3 border">Own IP address</td>
          </tr>
          <tr>
            <td className="p-3 border">Server Required</td>
            <td className="p-3 border">No (peer-to-peer)</td>
            <td className="p-3 border">Yes (RARP server)</td>
          </tr>
          <tr>
            <td className="p-3 border">Status</td>
            <td className="p-3 border">Still in use</td>
            <td className="p-3 border">Obsolete</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">RARP Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    RARP Request/Reply Process:

    Diskless Workstation                    RARP Server
    MAC: AA:AA:AA:AA:AA:AA                  (has MAC-to-IP mappings)
          |                                       |
          |-- RARP Request (Broadcast) ---------->|
          |   "I am AA:AA:AA:AA:AA:AA             |
          |    What is my IP address?"            |
          |                                       |
          |   [Server looks up MAC in table]      |
          |                                       |
          |<--------- RARP Reply (Unicast) -------|
          |   "AA:AA:AA:AA:AA:AA is                |
          |    192.168.1.50"                      |
          |                                       |
    [Configures IP address]                       |

    RARP Server maintains a table:
    +--------------------+---------------+
    | MAC Address        | IP Address    |
    +--------------------+---------------+
    | AA:AA:AA:AA:AA:AA  | 192.168.1.50  |
    | BB:BB:BB:BB:BB:BB  | 192.168.1.51  |
    +--------------------+---------------+
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RARP Packet Format</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Same format as ARP with different opcodes:</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Opcode 3:</strong> RARP Request</li>
        <li><strong>Opcode 4:</strong> RARP Reply</li>
        <li>Sender fills in own MAC address</li>
        <li>Sender IP field is empty (0.0.0.0)</li>
        <li>Target MAC = Sender MAC (asking about self)</li>
        <li>Server fills in IP address in reply</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">RARP Limitations</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Technical Limitations</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Only provides IP address</li>
          <li>No subnet mask</li>
          <li>No default gateway</li>
          <li>No DNS server info</li>
          <li>No lease time</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Operational Limitations</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Requires RARP server per network</li>
          <li>Manual configuration of tables</li>
          <li>Broadcast-based (local only)</li>
          <li>No redundancy mechanism</li>
          <li>Administrative overhead</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Evolution: RARP to DHCP</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Protocol Evolution:

    RARP (1984)
    - MAC to IP only
    - Layer 2 protocol
    - Requires server per subnet
        |
        v
    BOOTP (1985)
    - IP + subnet + gateway + more
    - Uses UDP (Layer 4)
    - Can cross routers with relay
        |
        v
    DHCP (1993)
    - Dynamic address allocation
    - Address pools and leases
    - Many configuration options
    - Standard today
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Use Case: Diskless Workstations</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Diskless Workstation Boot Process (Historical):

    1. Power on
    2. NIC has MAC address burned in
    3. Send RARP request: "What's my IP?"
    4. RARP server responds with IP
    5. Use TFTP to download boot image
    6. Boot from network

    Modern Equivalent:
    1. Power on
    2. DHCP request (gets IP, mask, gateway, TFTP server)
    3. PXE boot from network
    4. Download boot image via TFTP
    5. Boot from network
      `}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>RARP maps MAC address to IP address (reverse of ARP)</li>
        <li>Used by diskless workstations to discover their IP</li>
        <li>Requires a RARP server on every network segment</li>
        <li>Only provides IP address, no other configuration</li>
        <li>Obsolete - replaced by BOOTP and then DHCP</li>
        <li>DHCP provides IP, mask, gateway, DNS, and more</li>
      </ul>
    </div>
  </div>
);

export default RARP;
