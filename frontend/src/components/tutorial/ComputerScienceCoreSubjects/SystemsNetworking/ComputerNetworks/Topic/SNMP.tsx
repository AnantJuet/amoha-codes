import React from "react";

const SNMP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SNMP - Simple Network Management Protocol
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Simple Network Management Protocol (SNMP)</strong> is an application layer
      protocol for monitoring and managing network devices. It enables administrators
      to collect information, configure devices, and receive alerts from routers,
      switches, servers, and other network equipment.
    </p>

    <h2 className="text-3xl font-bold mt-8">SNMP Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SNMP Components:

+------------------+          +------------------+
|  SNMP Manager    |  GET/SET |   SNMP Agent     |
|  (NMS Software)  |<-------->|   (Device)       |
+------------------+   TRAP   +------------------+
                         |           |
                         |     +-----+-----+
                         |     |    MIB    |
                         |     +-----------+
                         |
                    UDP Port 161 (queries)
                    UDP Port 162 (traps)

Components:
- Manager: Monitoring station (NMS)
- Agent: Software on managed device
- MIB: Database of manageable objects`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SNMP Operations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Direction</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">GET</td>
            <td className="p-3 border">Manager → Agent</td>
            <td className="p-3 border">Retrieve single OID value</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">GETNEXT</td>
            <td className="p-3 border">Manager → Agent</td>
            <td className="p-3 border">Retrieve next OID in tree</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">GETBULK</td>
            <td className="p-3 border">Manager → Agent</td>
            <td className="p-3 border">Retrieve multiple OIDs (v2+)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">SET</td>
            <td className="p-3 border">Manager → Agent</td>
            <td className="p-3 border">Modify OID value</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">TRAP</td>
            <td className="p-3 border">Agent → Manager</td>
            <td className="p-3 border">Unsolicited alert</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">INFORM</td>
            <td className="p-3 border">Agent → Manager</td>
            <td className="p-3 border">Acknowledged trap (v2+)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">MIB and OIDs</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Management Information Base (MIB):

OID Tree Structure:
iso(1)
└── org(3)
    └── dod(6)
        └── internet(1)
            ├── mgmt(2)
            │   └── mib-2(1)
            │       ├── system(1)
            │       ├── interfaces(2)
            │       ├── ip(4)
            │       └── tcp(6)
            └── private(4)
                └── enterprises(1)
                    └── cisco(9)

Common OIDs:
1.3.6.1.2.1.1.1.0    sysDescr (System description)
1.3.6.1.2.1.1.3.0    sysUpTime (Uptime)
1.3.6.1.2.1.1.5.0    sysName (Hostname)
1.3.6.1.2.1.2.1.0    ifNumber (Interface count)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SNMP Versions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Version</th>
            <th className="p-3 border">Security</th>
            <th className="p-3 border">Features</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">SNMPv1</td>
            <td className="p-3 border">Community string (plaintext)</td>
            <td className="p-3 border">Basic operations</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SNMPv2c</td>
            <td className="p-3 border">Community string (plaintext)</td>
            <td className="p-3 border">GETBULK, INFORM, 64-bit counters</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SNMPv3</td>
            <td className="p-3 border">Auth + Encryption</td>
            <td className="p-3 border">USM, VACM, secure management</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">SNMP Commands Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Get system description (SNMPv2c)
snmpget -v2c -c public 192.168.1.1 sysDescr.0

# Walk entire MIB tree
snmpwalk -v2c -c public 192.168.1.1

# Get interface statistics
snmpget -v2c -c public 192.168.1.1 ifInOctets.1

# SNMPv3 with authentication
snmpget -v3 -u admin -l authPriv \\
  -a SHA -A authpass \\
  -x AES -X privpass \\
  192.168.1.1 sysUpTime.0`}
      </pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>SNMP monitors and manages network devices</li>
        <li>Uses UDP ports 161 (queries) and 162 (traps)</li>
        <li>MIB defines manageable objects with OIDs</li>
        <li>SNMPv3 provides authentication and encryption</li>
        <li>Essential for network monitoring systems</li>
      </ul>
    </div>
  </div>
);

export default SNMP;
