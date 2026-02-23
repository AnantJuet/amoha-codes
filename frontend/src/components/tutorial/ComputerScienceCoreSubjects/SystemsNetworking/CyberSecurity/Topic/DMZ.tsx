import React from "react";

const DMZ: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      DMZ (Demilitarized Zone)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A DMZ (Demilitarized Zone) is a physical or logical subnet that separates an internal
      network from an untrusted external network, typically the internet. It acts as a buffer
      zone where public-facing services can be placed to add an extra layer of security.
    </p>

    <h2 className="text-3xl font-bold mt-8">DMZ Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DMZ Network Topology:

                    INTERNET
                        │
                        ▼
               ┌────────────────┐
               │ External       │
               │ Firewall       │
               └────────┬───────┘
                        │
          ┌─────────────┴─────────────┐
          │           DMZ             │
          │  ┌─────┐ ┌─────┐ ┌─────┐  │
          │  │ Web │ │ Mail│ │ DNS │  │
          │  │ Srv │ │ Srv │ │ Srv │  │
          │  └─────┘ └─────┘ └─────┘  │
          └─────────────┬─────────────┘
                        │
               ┌────────────────┐
               │ Internal       │
               │ Firewall       │
               └────────┬───────┘
                        │
          ┌─────────────┴─────────────┐
          │    INTERNAL NETWORK       │
          │  (Protected Resources)    │
          └───────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DMZ Configurations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Configuration</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Single Firewall</td>
            <td className="p-3 border">Three-legged firewall with 3 interfaces</td>
            <td className="p-3 border">Small organizations</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dual Firewall</td>
            <td className="p-3 border">Two firewalls sandwiching DMZ</td>
            <td className="p-3 border">Higher security needs</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Multi-Tier DMZ</td>
            <td className="p-3 border">Multiple DMZ segments</td>
            <td className="p-3 border">Complex enterprise environments</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Services in DMZ</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Web Servers:</strong> Public-facing websites and applications</li>
      <li><strong>Mail Servers:</strong> Email gateways and relay servers</li>
      <li><strong>DNS Servers:</strong> External DNS resolution</li>
      <li><strong>FTP Servers:</strong> File transfer services</li>
      <li><strong>VPN Gateways:</strong> Remote access endpoints</li>
      <li><strong>Proxy Servers:</strong> Reverse proxies for internal services</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Firewall Rules for DMZ</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Typical DMZ Firewall Rules:

EXTERNAL FIREWALL (Internet → DMZ):
┌─────────────┬──────────┬──────────┬────────┐
│ Source      │ Dest     │ Port     │ Action │
├─────────────┼──────────┼──────────┼────────┤
│ Any         │ Web Srv  │ 80, 443  │ ALLOW  │
│ Any         │ Mail Srv │ 25       │ ALLOW  │
│ Any         │ DNS Srv  │ 53       │ ALLOW  │
│ Any         │ DMZ      │ Any      │ DENY   │
└─────────────┴──────────┴──────────┴────────┘

INTERNAL FIREWALL (DMZ → Internal):
┌─────────────┬──────────┬──────────┬────────┐
│ Source      │ Dest     │ Port     │ Action │
├─────────────┼──────────┼──────────┼────────┤
│ Web Srv     │ DB Srv   │ 3306     │ ALLOW  │
│ Mail Srv    │ Mail Int │ 25       │ ALLOW  │
│ DMZ         │ Internal │ Any      │ DENY   │
└─────────────┴──────────┴──────────┴────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DMZ Best Practices</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Use different firewall vendors for internal and external firewalls</li>
        <li>Never allow direct traffic from internet to internal network</li>
        <li>Minimize services running in the DMZ</li>
        <li>Keep DMZ servers patched and hardened</li>
        <li>Implement IDS/IPS monitoring in the DMZ</li>
        <li>Log and monitor all DMZ traffic</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>DMZ creates a buffer zone between internal and external networks</li>
        <li>Public-facing services should be placed in the DMZ</li>
        <li>Dual firewall configuration provides stronger security</li>
        <li>DMZ servers should never have direct access to internal resources</li>
        <li>All traffic to/from DMZ should be strictly controlled</li>
        <li>Regular security audits of DMZ are essential</li>
      </ul>
    </div>
  </div>
);

export default DMZ;
