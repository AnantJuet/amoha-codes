import React from "react";

const FirewallRules: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Firewall Rules and Policies
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Firewall rules are the instructions that tell a firewall how to handle network traffic.
      Properly configured rules are essential for maintaining security while allowing legitimate
      business communications.
    </p>

    <h2 className="text-3xl font-bold mt-8">Rule Components</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Firewall Rule Structure:

+--------------------------------------------------+
|                  FIREWALL RULE                    |
+--------------------------------------------------+
| Rule Number:    1 (processed first)              |
| Name:           "Allow Web Traffic"               |
|                                                  |
| Match Criteria:                                  |
| - Source IP:    192.168.1.0/24                   |
| - Dest IP:      10.0.0.50                        |
| - Protocol:     TCP                              |
| - Dest Port:    80, 443                          |
| - Direction:    Outbound                         |
|                                                  |
| Action:         ALLOW                            |
| Logging:        Enabled                          |
| Schedule:       Always                           |
+--------------------------------------------------+

Actions:
ALLOW  - Permit traffic
DENY   - Block and notify sender
DROP   - Block silently
LOG    - Record to log`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Rule Processing Order</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Rule Processing (Top-Down):

Packet arrives
     |
     v
+----------+
| Rule 1   |---> Match? ---> Apply Action, STOP
+----------+     No
     |            |
     v            v
+----------+
| Rule 2   |---> Match? ---> Apply Action, STOP
+----------+     No
     |            |
     v            v
+----------+
| Rule 3   |---> Match? ---> Apply Action, STOP
+----------+     No
     |            |
     v            v
+----------+
| Default  |---> Apply Default Policy (DROP)
+----------+

IMPORTANT: First matching rule wins!
Order your rules from most specific to most general.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Rule Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Rule Type</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Allow Inbound</td>
            <td className="p-3 border">Permit external to internal</td>
            <td className="p-3 border">Allow HTTPS to web server</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Allow Outbound</td>
            <td className="p-3 border">Permit internal to external</td>
            <td className="p-3 border">Allow users to browse web</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Deny Inbound</td>
            <td className="p-3 border">Block external to internal</td>
            <td className="p-3 border">Block all from known bad IPs</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">NAT</td>
            <td className="p-3 border">Translate addresses</td>
            <td className="p-3 border">Port forwarding to server</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sample Rule Set</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900 text-sm">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Sample Enterprise Firewall Rules

# Rule 1: Allow established/related connections
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Rule 2: Allow HTTPS to web server
iptables -A INPUT -p tcp -d 10.0.0.50 --dport 443 -j ACCEPT

# Rule 3: Allow SSH from admin network only
iptables -A INPUT -p tcp -s 10.0.100.0/24 --dport 22 -j ACCEPT

# Rule 4: Allow DNS queries
iptables -A OUTPUT -p udp --dport 53 -j ACCEPT

# Rule 5: Block known malicious IPs
iptables -A INPUT -s 192.0.2.0/24 -j DROP

# Rule 6: Default deny all
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT DROP`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Rule Best Practices</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Default Deny:</strong> Block everything by default, allow only necessary traffic</li>
      <li><strong>Specific Rules First:</strong> Place more specific rules before general ones</li>
      <li><strong>Document Rules:</strong> Add comments explaining each rule's purpose</li>
      <li><strong>Regular Review:</strong> Audit rules quarterly, remove unused rules</li>
      <li><strong>Test Changes:</strong> Verify rules in a test environment first</li>
      <li><strong>Enable Logging:</strong> Log denied traffic for security monitoring</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Common Mistakes</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Overly Permissive Rules:</strong> Allow any-to-any rules</li>
        <li><strong>Wrong Order:</strong> General rules before specific rules</li>
        <li><strong>No Documentation:</strong> Rules without comments or purpose</li>
        <li><strong>Stale Rules:</strong> Rules for decommissioned systems</li>
        <li><strong>No Logging:</strong> Unable to detect attacks or troubleshoot</li>
        <li><strong>Missing Default Deny:</strong> Traffic allowed by default</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Rules are processed top-to-bottom, first match wins</li>
        <li>Always use default deny policy</li>
        <li>Be as specific as possible in rules</li>
        <li>Document all rules with comments</li>
        <li>Regularly audit and clean up rule sets</li>
        <li>Enable logging for security monitoring</li>
      </ul>
    </div>
  </div>
);

export default FirewallRules;
