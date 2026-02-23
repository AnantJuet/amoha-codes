import React from "react";

const NetworkConfiguration: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Network Configuration
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Network configuration in Linux involves setting up IP addresses, DNS servers,
      gateways, and network interfaces. Modern Linux systems use tools like ip, nmcli,
      and configuration files for network management.
    </p>

    <h2 className="text-3xl font-bold mt-8">ip Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Show all network interfaces
$ ip addr
$ ip a

# Show specific interface
$ ip addr show eth0

# Bring interface up/down
$ sudo ip link set eth0 up
$ sudo ip link set eth0 down

# Add IP address
$ sudo ip addr add 192.168.1.100/24 dev eth0

# Remove IP address
$ sudo ip addr del 192.168.1.100/24 dev eth0

# Show routing table
$ ip route
$ ip r`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ifconfig Command (Legacy)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Show all interfaces
$ ifconfig

# Show specific interface
$ ifconfig eth0

# Assign IP address
$ sudo ifconfig eth0 192.168.1.100 netmask 255.255.255.0`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">nmcli (NetworkManager)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Show connection status
$ nmcli general status

# List all connections
$ nmcli connection show

# Show device status
$ nmcli device status

# Connect to WiFi
$ nmcli device wifi connect "SSID" password "password"

# Create static IP connection
$ nmcli connection add type ethernet con-name "static" \\
  ifname eth0 ip4 192.168.1.100/24 gw4 192.168.1.1`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Configuration Files</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">File</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">/etc/hostname</td>
            <td className="p-3 border">System hostname</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">/etc/hosts</td>
            <td className="p-3 border">Static host mappings</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">/etc/resolv.conf</td>
            <td className="p-3 border">DNS server configuration</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">/etc/network/interfaces</td>
            <td className="p-3 border">Network interfaces (Debian)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">/etc/netplan/*.yaml</td>
            <td className="p-3 border">Netplan configuration (Ubuntu)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>ip command is the modern replacement for ifconfig</li>
        <li>nmcli manages NetworkManager connections</li>
        <li>Changes via ip command are temporary (lost on reboot)</li>
        <li>Use configuration files for persistent settings</li>
      </ul>
    </div>
  </div>
);

export default NetworkConfiguration;
