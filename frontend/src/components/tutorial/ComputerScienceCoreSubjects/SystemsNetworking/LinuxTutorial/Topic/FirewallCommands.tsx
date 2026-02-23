import React from "react";

const FirewallCommands: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Firewall Commands
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Linux firewalls control network traffic using rules. The most common tools
      are iptables (legacy), nftables (modern), ufw (Ubuntu), and firewalld (RHEL/CentOS).
    </p>

    <h2 className="text-3xl font-bold mt-8">ufw (Uncomplicated Firewall)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Enable/disable firewall
$ sudo ufw enable
$ sudo ufw disable

# Check status
$ sudo ufw status
$ sudo ufw status verbose

# Default policies
$ sudo ufw default deny incoming
$ sudo ufw default allow outgoing

# Allow/deny ports
$ sudo ufw allow 22
$ sudo ufw allow 80/tcp
$ sudo ufw deny 23

# Allow service by name
$ sudo ufw allow ssh
$ sudo ufw allow http
$ sudo ufw allow https

# Allow from specific IP
$ sudo ufw allow from 192.168.1.100
$ sudo ufw allow from 192.168.1.0/24 to any port 22

# Delete rule
$ sudo ufw delete allow 80`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">firewalld</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Start/stop firewalld
$ sudo systemctl start firewalld
$ sudo systemctl enable firewalld

# Check status
$ sudo firewall-cmd --state
$ sudo firewall-cmd --list-all

# Add service
$ sudo firewall-cmd --add-service=http --permanent
$ sudo firewall-cmd --add-service=https --permanent

# Add port
$ sudo firewall-cmd --add-port=8080/tcp --permanent

# Remove port/service
$ sudo firewall-cmd --remove-port=8080/tcp --permanent

# Reload rules
$ sudo firewall-cmd --reload

# List zones
$ sudo firewall-cmd --get-zones`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">iptables</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# List rules
$ sudo iptables -L
$ sudo iptables -L -n -v

# Allow incoming SSH
$ sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Allow established connections
$ sudo iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Drop all other incoming
$ sudo iptables -A INPUT -j DROP

# Delete rule
$ sudo iptables -D INPUT -p tcp --dport 80 -j ACCEPT

# Save rules
$ sudo iptables-save > /etc/iptables/rules.v4`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Firewall Tools</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Tool</th>
            <th className="p-3 border">Distribution</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">ufw</td>
            <td className="p-3 border">Ubuntu, Debian</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">firewalld</td>
            <td className="p-3 border">RHEL, CentOS, Fedora</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">iptables</td>
            <td className="p-3 border">All (legacy)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">nftables</td>
            <td className="p-3 border">All (modern)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>ufw is the simplest firewall for beginners</li>
        <li>firewalld uses zones for different trust levels</li>
        <li>Always allow SSH before enabling firewall</li>
        <li>Use --permanent flag for persistent rules</li>
      </ul>
    </div>
  </div>
);

export default FirewallCommands;
