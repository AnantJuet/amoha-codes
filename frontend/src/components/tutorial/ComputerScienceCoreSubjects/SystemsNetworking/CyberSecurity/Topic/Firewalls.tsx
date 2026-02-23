import React from "react";

const Firewalls: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Firewalls
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A firewall is a network security device that monitors and controls incoming and outgoing
      network traffic based on predetermined security rules. It establishes a barrier between
      trusted internal networks and untrusted external networks like the Internet.
    </p>

    <h2 className="text-3xl font-bold mt-8">How Firewalls Work</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Firewall Traffic Flow:

External Network (Internet)
         |
         v
+------------------+
|    FIREWALL      |
|  +------------+  |
|  | Rule Base  |  |
|  | 1. Allow   |  |
|  | 2. Deny    |  |
|  | 3. Log     |  |
|  +------------+  |
|                  |
| Traffic Check:   |
| - Source IP      |
| - Dest IP        |
| - Port           |
| - Protocol       |
| - State          |
+------------------+
         |
         v
Internal Network (Trusted)

Actions:
ALLOW - Permit traffic through
DENY  - Block and send rejection
DROP  - Block silently (no response)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Firewall Functionality</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Benefit</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Traffic Filtering</td>
            <td className="p-3 border">Allow or block based on rules</td>
            <td className="p-3 border">Access control</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">NAT</td>
            <td className="p-3 border">Hide internal IP addresses</td>
            <td className="p-3 border">IP conservation, security</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">VPN Gateway</td>
            <td className="p-3 border">Secure remote connections</td>
            <td className="p-3 border">Encrypted access</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Logging</td>
            <td className="p-3 border">Record traffic and events</td>
            <td className="p-3 border">Audit, forensics</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Firewall Rule Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Sample Firewall Rules:

Rule  Action  Source          Dest            Port    Protocol
----  ------  ------          ----            ----    --------
1     ALLOW   Any             WebServer       80,443  TCP
2     ALLOW   Admin_Subnet    Any             22      TCP
3     ALLOW   Internal        DNS_Server      53      UDP
4     DENY    Any             Database        3306    TCP
5     ALLOW   Internal        Any             Any     Any
6     DROP    Any             Any             Any     Any

Rules are processed top-to-bottom.
First match wins.
Default rule (6) drops all unmatched traffic.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hardware vs Software Firewalls</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Hardware Firewall</th>
            <th className="p-3 border">Software Firewall</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Deployment</td>
            <td className="p-3 border">Network perimeter</td>
            <td className="p-3 border">Individual host</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Protection Scope</td>
            <td className="p-3 border">Entire network</td>
            <td className="p-3 border">Single device</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Performance</td>
            <td className="p-3 border">High (dedicated)</td>
            <td className="p-3 border">Uses host resources</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cost</td>
            <td className="p-3 border">Higher upfront</td>
            <td className="p-3 border">Often included in OS</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Firewall Placement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Network Firewall Placement:

                    INTERNET
                        |
                  [Border FW]
                        |
           +------------+------------+
           |            |            |
         [DMZ]     [Internal]    [Guest]
           |        Firewall      Network
           |            |
      Web/Email    Internal LAN
      Servers           |
                  +-----+-----+
                  |     |     |
               [Dept A][B]  [C]

Key Positions:
1. Border/Perimeter - Between Internet and network
2. Internal - Between network segments
3. Host-based - On individual systems`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Firewall Best Practices</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Default Deny:</strong> Block everything, allow only needed traffic</li>
      <li><strong>Least Privilege:</strong> Grant minimum required access</li>
      <li><strong>Regular Audits:</strong> Review and clean up rules periodically</li>
      <li><strong>Logging:</strong> Enable logging for denied traffic</li>
      <li><strong>Change Management:</strong> Document all rule changes</li>
      <li><strong>Redundancy:</strong> Consider failover for critical firewalls</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Firewalls are the first line of defense</li>
        <li>Rules are processed in order - first match wins</li>
        <li>Default policy should be deny/drop</li>
        <li>Use both network and host-based firewalls</li>
        <li>Regular rule reviews prevent rule bloat</li>
        <li>Firewalls alone are not sufficient - defense in depth required</li>
      </ul>
    </div>
  </div>
);

export default Firewalls;
