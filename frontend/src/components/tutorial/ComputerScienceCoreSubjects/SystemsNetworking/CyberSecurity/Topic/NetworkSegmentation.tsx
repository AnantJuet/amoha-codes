import React from "react";

const NetworkSegmentation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Network Segmentation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Network segmentation divides a computer network into smaller, isolated segments to improve
      security and performance. It limits the spread of attacks, controls access to sensitive
      resources, and helps meet compliance requirements.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Segment Networks?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Flat Network (No Segmentation):
+------------------------------------------+
|           ONE BIG NETWORK                 |
|  [HR] [Finance] [Dev] [Servers] [Guest]  |
|       All systems can reach all others   |
+------------------------------------------+
Problem: If one system is compromised,
         attacker can access EVERYTHING

Segmented Network:
+--------+ +--------+ +--------+ +--------+
|   HR   | |Finance | |  Dev   | |Servers |
+--------+ +--------+ +--------+ +--------+
    |          |          |          |
    +----------+----------+----------+
                   |
            [Firewall/Router]
                   |
    Rules control who can access what`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Segmentation Benefits</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Benefit</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Limit Attack Spread</td>
            <td className="p-3 border">Contain breaches to specific segments</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Access Control</td>
            <td className="p-3 border">Restrict access to sensitive data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Compliance</td>
            <td className="p-3 border">Meet PCI-DSS, HIPAA requirements</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Performance</td>
            <td className="p-3 border">Reduce broadcast traffic</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Monitoring</td>
            <td className="p-3 border">Easier to monitor segment traffic</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Segmentation Methods</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. PHYSICAL SEGMENTATION
   - Separate physical networks
   - Different cables, switches
   - Highest isolation, most expensive

2. VLAN (Virtual LAN)
   - Logical separation on same hardware
   - Layer 2 segmentation
   - Cost-effective, widely used

3. SUBNETTING
   - Layer 3 separation
   - Different IP ranges
   - Router enforces boundaries

4. FIREWALL ZONES
   - Firewalls between segments
   - Granular rule control
   - Inspect traffic between zones

5. MICRO-SEGMENTATION
   - Segment down to workload level
   - Software-defined networking
   - Zero Trust approach`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">VLAN Configuration Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`VLAN Setup:

VLAN 10: HR Department
  - Subnet: 10.10.10.0/24
  - Ports: 1-10

VLAN 20: Finance
  - Subnet: 10.10.20.0/24
  - Ports: 11-20

VLAN 30: Servers
  - Subnet: 10.10.30.0/24
  - Ports: 21-30

VLAN 100: Guest
  - Subnet: 192.168.100.0/24
  - Internet only, no internal access

Inter-VLAN Routing:
- Layer 3 switch or router
- ACLs control allowed traffic
- HR can access servers
- Guest cannot access internal VLANs`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Segmentation Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Enterprise Segmentation:

              Internet
                  |
            [Firewall]
                  |
           +------+------+
           |             |
        [DMZ]      [Internal FW]
           |             |
      Web/Mail    +------+------+------+
      Servers     |      |      |      |
              [User] [Server] [PCI] [Mgmt]
               VLAN   VLAN    VLAN  VLAN

Trust Zones:
1. Internet (Untrusted)
2. DMZ (Semi-trusted)
3. Internal (Trusted)
4. PCI Zone (Highly Restricted)
5. Management (Admin Only)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Micro-Segmentation</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Granular Control:</strong> Policies per workload/application</li>
      <li><strong>Software-Defined:</strong> Implemented via SDN or agents</li>
      <li><strong>Zero Trust:</strong> Verify every connection</li>
      <li><strong>East-West Traffic:</strong> Control lateral movement</li>
      <li><strong>Cloud Ready:</strong> Works in virtualized environments</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Segmentation limits the blast radius of attacks</li>
        <li>VLANs provide cost-effective logical separation</li>
        <li>Use firewalls to control inter-segment traffic</li>
        <li>Guest networks should be completely isolated</li>
        <li>Micro-segmentation provides granular Zero Trust security</li>
        <li>Document all segments and access rules</li>
      </ul>
    </div>
  </div>
);

export default NetworkSegmentation;
