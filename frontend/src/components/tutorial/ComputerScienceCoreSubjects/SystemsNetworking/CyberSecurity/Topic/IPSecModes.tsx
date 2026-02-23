import React from "react";

const IPSecModes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      IPSec Modes: Transport vs Tunnel
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      IPSec operates in two distinct modes: Transport Mode and Tunnel Mode. The choice
      of mode determines how IP packets are encapsulated and protected, affecting both
      security characteristics and use cases.
    </p>

    <h2 className="text-3xl font-bold mt-8">Mode Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Transport Mode</th>
            <th className="p-3 border">Tunnel Mode</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Protection Scope</td>
            <td className="p-3 border">Payload only</td>
            <td className="p-3 border">Entire original packet</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">IP Header</td>
            <td className="p-3 border">Original header preserved</td>
            <td className="p-3 border">New outer header added</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Use Case</td>
            <td className="p-3 border">Host-to-host</td>
            <td className="p-3 border">Network-to-network, VPNs</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Overhead</td>
            <td className="p-3 border">Lower (no extra IP header)</td>
            <td className="p-3 border">Higher (additional header)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Gateway Support</td>
            <td className="p-3 border">No (endpoints only)</td>
            <td className="p-3 border">Yes (gateway-to-gateway)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Transport Mode</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`TRANSPORT MODE PACKET STRUCTURE:

Original Packet:
┌──────────────┬───────────────────────────────────────┐
│  IP Header   │            Payload (TCP/UDP)          │
└──────────────┴───────────────────────────────────────┘

With AH (Transport Mode):
┌──────────────┬───────────┬───────────────────────────┐
│  IP Header   │ AH Header │      Payload (TCP/UDP)    │
└──────────────┴───────────┴───────────────────────────┘
       ↑              └────── Authentication covers ──────┘
       └── IP header also authenticated (except mutable fields)

With ESP (Transport Mode):
┌──────────────┬────────────┬─────────────────┬─────────────┐
│  IP Header   │ ESP Header │  Encrypted      │ ESP Trailer │
│              │            │  Payload        │ + Auth      │
└──────────────┴────────────┴─────────────────┴─────────────┘
       ↑                     └── Encrypted ──┘
       │                     └─── Authenticated ────────────┘
       └── NOT encrypted or authenticated

CHARACTERISTICS:
├── Original IP addresses visible
├── Less overhead than tunnel mode
├── Used for end-to-end host communication
├── Both hosts must support IPSec
└── Example: Securing communication between two servers`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Tunnel Mode</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`TUNNEL MODE PACKET STRUCTURE:

Original Packet:
┌──────────────┬───────────────────────────────────────┐
│  IP Header   │            Payload (TCP/UDP)          │
│ (10.0.1.5 →  │                                       │
│  10.0.2.10)  │                                       │
└──────────────┴───────────────────────────────────────┘

With ESP (Tunnel Mode):
┌───────────────┬────────────┬─────────────────────────────┬─────────────┐
│ New IP Header │ ESP Header │   Encrypted Original Packet │ ESP Trailer │
│ (Gateway IPs) │            │   (IP Header + Payload)     │ + Auth      │
└───────────────┴────────────┴─────────────────────────────┴─────────────┘
        ↑                      └───── Encrypted ──────────┘
        │                      └────── Authenticated ─────────────────────┘
        └── New header with gateway addresses

TUNNEL MODE TOPOLOGY:

  [Host A]                                              [Host B]
  10.0.1.5                                              10.0.2.10
      │                                                     │
  [Gateway A] ════════ IPSec Tunnel ════════ [Gateway B]
  192.168.1.1                               203.0.113.1
                 (Inner: 10.0.1.5 → 10.0.2.10)
                 (Outer: 192.168.1.1 → 203.0.113.1)

CHARACTERISTICS:
├── Original IP addresses hidden (encrypted)
├── New outer IP header with gateway addresses
├── More overhead but better privacy
├── Hosts don't need to support IPSec
└── Standard mode for site-to-site VPNs`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Use Case Scenarios</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Scenario</th>
            <th className="p-3 border">Recommended Mode</th>
            <th className="p-3 border">Reason</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Site-to-Site VPN</td>
            <td className="p-3 border">Tunnel Mode</td>
            <td className="p-3 border">Connects networks via gateways</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Remote Access VPN</td>
            <td className="p-3 border">Tunnel Mode</td>
            <td className="p-3 border">User connects to corporate network</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Server-to-Server</td>
            <td className="p-3 border">Transport Mode</td>
            <td className="p-3 border">Direct host communication</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">L2TP/IPSec</td>
            <td className="p-3 border">Transport Mode</td>
            <td className="p-3 border">IPSec protects L2TP tunnel</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">GRE over IPSec</td>
            <td className="p-3 border">Transport Mode</td>
            <td className="p-3 border">IPSec encrypts GRE tunnel</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Configuration Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# strongSwan - Tunnel Mode (Site-to-Site VPN)
conn site-to-site
    type=tunnel
    left=192.168.1.1
    leftsubnet=10.0.1.0/24
    right=203.0.113.1
    rightsubnet=10.0.2.0/24
    auto=start

# strongSwan - Transport Mode (Host-to-Host)
conn host-to-host
    type=transport
    left=192.168.1.100
    right=192.168.1.200
    auto=start

# Cisco IOS - Tunnel Mode Transform Set
crypto ipsec transform-set TUNNEL-SET esp-aes 256 esp-sha256-hmac
 mode tunnel

# Cisco IOS - Transport Mode Transform Set
crypto ipsec transform-set TRANSPORT-SET esp-aes 256 esp-sha256-hmac
 mode transport`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Security Considerations</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Transport Mode:</strong> Reveals original IP addresses; use when privacy of endpoints is not required</li>
      <li><strong>Tunnel Mode:</strong> Hides internal network topology; better for protecting sensitive network structure</li>
      <li><strong>NAT Compatibility:</strong> Tunnel mode generally works better with NAT when using ESP</li>
      <li><strong>Performance:</strong> Transport mode has lower overhead; consider for high-throughput requirements</li>
      <li><strong>Nested Tunnels:</strong> Can combine modes for defense in depth (GRE over IPSec)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Transport mode protects payload only; tunnel mode protects entire packet</li>
        <li>Tunnel mode is standard for VPNs; transport mode for host-to-host</li>
        <li>Tunnel mode hides internal IP addresses for better privacy</li>
        <li>Transport mode has less overhead but requires IPSec on both endpoints</li>
        <li>L2TP/IPSec commonly uses transport mode to protect L2TP</li>
        <li>Choose mode based on topology and security requirements</li>
      </ul>
    </div>
  </div>
);

export default IPSecModes;
