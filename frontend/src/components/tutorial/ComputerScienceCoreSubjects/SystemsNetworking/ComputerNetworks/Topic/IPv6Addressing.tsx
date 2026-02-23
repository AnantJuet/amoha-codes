import React from 'react';

const IPv6Addressing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      IPv6 Addressing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      IPv6 addressing uses 128-bit addresses, providing an enormous address space of approximately
      3.4 x 10^38 unique addresses. IPv6 addresses are written in hexadecimal notation and
      support multiple address types including unicast, multicast, and anycast.
    </p>

    <h2 className="text-3xl font-bold mt-8">IPv6 Address Notation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    IPv6 Address Representation:

    Full Form (Preferred):
    2001:0db8:85a3:0000:0000:8a2e:0370:7334

    - 8 groups of 4 hexadecimal digits
    - Each group = 16 bits
    - Total = 128 bits
    - Groups separated by colons

    Compression Rules:

    Rule 1: Remove leading zeros in each group
    2001:0db8:0000:0000:0000:0000:0000:0001
    becomes
    2001:db8:0:0:0:0:0:1

    Rule 2: Replace ONE consecutive group of zeros with ::
    2001:db8:0:0:0:0:0:1
    becomes
    2001:db8::1

    IMPORTANT: :: can only be used ONCE per address
    (otherwise ambiguous how many zeros to expand)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">IPv6 Address Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Prefix</th>
            <th className="p-3 border">Scope</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Global Unicast</td>
            <td className="p-3 border">2000::/3</td>
            <td className="p-3 border">Global</td>
            <td className="p-3 border">Internet routable</td>
          </tr>
          <tr>
            <td className="p-3 border">Link-Local</td>
            <td className="p-3 border">fe80::/10</td>
            <td className="p-3 border">Link</td>
            <td className="p-3 border">Same LAN segment</td>
          </tr>
          <tr>
            <td className="p-3 border">Unique Local</td>
            <td className="p-3 border">fc00::/7</td>
            <td className="p-3 border">Organization</td>
            <td className="p-3 border">Private networks</td>
          </tr>
          <tr>
            <td className="p-3 border">Multicast</td>
            <td className="p-3 border">ff00::/8</td>
            <td className="p-3 border">Variable</td>
            <td className="p-3 border">One-to-many</td>
          </tr>
          <tr>
            <td className="p-3 border">Loopback</td>
            <td className="p-3 border">::1/128</td>
            <td className="p-3 border">Node</td>
            <td className="p-3 border">Localhost</td>
          </tr>
          <tr>
            <td className="p-3 border">Unspecified</td>
            <td className="p-3 border">::/128</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border">No address assigned</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Global Unicast Address Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Global Unicast Address (GUA):

    |<------- 48 bits ------->|<-- 16 -->|<-------- 64 bits -------->|
    +-------------------------+----------+---------------------------+
    |    Global Routing       |  Subnet  |       Interface ID        |
    |       Prefix            |    ID    |     (Host Portion)        |
    +-------------------------+----------+---------------------------+
    |<-- ISP assigns -------->|<- Org -->|<--- Auto-generated ------>|

    Example: 2001:db8:1234:5678:abcd:ef01:2345:6789/64

    Global Routing Prefix: 2001:db8:1234 (assigned by RIR/ISP)
    Subnet ID: 5678 (organization subnets)
    Interface ID: abcd:ef01:2345:6789 (host identifier)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Link-Local Addresses</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">fe80::/10 Link-Local Range</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Automatically assigned on every IPv6 interface</li>
        <li>Valid only on the local link (not routed)</li>
        <li>Used for neighbor discovery and routing protocols</li>
        <li>Format: fe80::interface_id</li>
        <li>Required for IPv6 communication</li>
        <li>Example: fe80::1 or fe80::a1b2:c3d4:e5f6:7890</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Interface ID Generation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    EUI-64 (Extended Unique Identifier):

    Converts 48-bit MAC to 64-bit Interface ID

    MAC Address: 00:1A:2B:3C:4D:5E

    Step 1: Split MAC in half
    00:1A:2B | 3C:4D:5E

    Step 2: Insert FF:FE in middle
    00:1A:2B:FF:FE:3C:4D:5E

    Step 3: Flip 7th bit (Universal/Local)
    00 = 00000000 -> 00000010 = 02
    02:1A:2B:FF:FE:3C:4D:5E

    Result: Interface ID = 021a:2bff:fe3c:4d5e

    Alternative Methods:
    - Random generation (privacy extensions)
    - Manual configuration
    - DHCPv6 assigned
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">IPv6 Address Scopes</h2>
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Link-Local</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Single network segment</li>
          <li>Not routed</li>
          <li>fe80::/10</li>
          <li>Auto-configured</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Site-Local (Deprecated)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Replaced by ULA</li>
          <li>Was fec0::/10</li>
          <li>Organization scope</li>
          <li>Not internet routable</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Global</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Internet routable</li>
          <li>2000::/3</li>
          <li>Unique worldwide</li>
          <li>Assigned by RIRs</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>IPv6 uses 128-bit addresses in hex:colon notation</li>
        <li>Leading zeros can be omitted; :: replaces consecutive zero groups once</li>
        <li>Link-local (fe80::) automatically on every interface</li>
        <li>Global unicast (2000::/3) for internet routing</li>
        <li>Interface ID often derived from MAC using EUI-64</li>
        <li>Standard prefix for LANs is /64</li>
      </ul>
    </div>
  </div>
);

export default IPv6Addressing;
