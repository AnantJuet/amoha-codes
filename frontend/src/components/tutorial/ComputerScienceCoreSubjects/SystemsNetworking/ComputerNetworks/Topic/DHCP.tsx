import React from 'react';

const DHCP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      DHCP (Dynamic Host Configuration Protocol)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      DHCP is a network management protocol that automatically assigns IP addresses and other
      network configuration parameters to devices. It eliminates the need for manual IP
      configuration, making network administration much easier, especially in large networks.
    </p>

    <h2 className="text-3xl font-bold mt-8">DHCP Characteristics</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Port</td>
            <td className="p-3 border">Server: 67, Client: 68</td>
          </tr>
          <tr>
            <td className="p-3 border">Transport</td>
            <td className="p-3 border">UDP</td>
          </tr>
          <tr>
            <td className="p-3 border">Model</td>
            <td className="p-3 border">Client-Server</td>
          </tr>
          <tr>
            <td className="p-3 border">Assignment</td>
            <td className="p-3 border">Dynamic (leased) or Static</td>
          </tr>
          <tr>
            <td className="p-3 border">RFC</td>
            <td className="p-3 border">RFC 2131 (DHCPv4)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">What DHCP Provides</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li><strong>IP Address:</strong> Unique address for the client</li>
        <li><strong>Subnet Mask:</strong> Network/host portion division</li>
        <li><strong>Default Gateway:</strong> Router for external traffic</li>
        <li><strong>DNS Servers:</strong> Name resolution servers</li>
        <li><strong>Lease Duration:</strong> How long the IP is valid</li>
        <li><strong>Optional:</strong> NTP servers, WINS servers, domain name</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Static vs Dynamic IP</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Static IP</th>
            <th className="p-3 border">Dynamic IP (DHCP)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Configuration</td>
            <td className="p-3 border">Manual</td>
            <td className="p-3 border">Automatic</td>
          </tr>
          <tr>
            <td className="p-3 border">Address</td>
            <td className="p-3 border">Never changes</td>
            <td className="p-3 border">May change</td>
          </tr>
          <tr>
            <td className="p-3 border">Administration</td>
            <td className="p-3 border">High overhead</td>
            <td className="p-3 border">Low overhead</td>
          </tr>
          <tr>
            <td className="p-3 border">Use Case</td>
            <td className="p-3 border">Servers, printers</td>
            <td className="p-3 border">Workstations, phones</td>
          </tr>
          <tr>
            <td className="p-3 border">Conflicts</td>
            <td className="p-3 border">Possible if mismanaged</td>
            <td className="p-3 border">DHCP prevents</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">DHCP Address Pool</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    DHCP Server Configuration Example:

    Network: 192.168.1.0/24
    +----------------------------------------+
    | Address Pool Configuration             |
    +----------------------------------------+
    | Pool Range: 192.168.1.100 - .200       |
    | Subnet Mask: 255.255.255.0             |
    | Default Gateway: 192.168.1.1           |
    | DNS Servers: 8.8.8.8, 8.8.4.4          |
    | Lease Time: 24 hours                   |
    +----------------------------------------+

    Reserved Addresses:
    192.168.1.1    - Router
    192.168.1.2-10 - Static servers
    192.168.1.11-99 - Reserved
    192.168.1.100-200 - DHCP pool (101 addresses)
    192.168.1.201-254 - Reserved for printers, etc.

    DHCP Reservation (Static DHCP):
    MAC: AA:BB:CC:DD:EE:FF -> Always gets 192.168.1.50
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DHCP Lease Lifecycle</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Lease Lifecycle:

    Time     Event
    -----    -----
    T=0      IP assigned, lease starts
             Lease Time = 24 hours

    T=12h    T1 (50% of lease)
    (T1)     Client tries to RENEW with same server

    T=21h    T2 (87.5% of lease)
    (T2)     Client tries REBIND with any server

    T=24h    Lease EXPIRES
             Client must stop using IP
             Start new DORA process

    Normal renewal:
    - Client sends REQUEST at T1
    - Server sends ACK with new lease
    - Lease timer resets

    If server unavailable at T1:
    - Client retries until T2
    - At T2, broadcasts to any DHCP server
    - If no response by expiry, IP released
      `}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>DHCP automatically assigns IP configuration</li>
        <li>Uses UDP ports 67 (server) and 68 (client)</li>
        <li>Provides IP, subnet, gateway, DNS</li>
        <li>Addresses are leased, not permanent</li>
        <li>Renewal attempts at 50% and 87.5% of lease</li>
        <li>Reduces administrative overhead significantly</li>
      </ul>
    </div>
  </div>
);

export default DHCP;
