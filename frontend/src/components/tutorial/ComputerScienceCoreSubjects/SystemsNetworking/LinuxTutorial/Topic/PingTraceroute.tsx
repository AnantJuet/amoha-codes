import React from "react";

const PingTraceroute: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      ping and traceroute Commands
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      ping tests network connectivity by sending ICMP echo requests. traceroute
      shows the path packets take to reach a destination.
    </p>

    <h2 className="text-3xl font-bold mt-8">ping Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic ping
$ ping google.com

# Ping with count limit
$ ping -c 4 google.com

# Ping with interval
$ ping -i 2 google.com    # 2 seconds between pings

# Ping with packet size
$ ping -s 1000 google.com

# Ping with timeout
$ ping -W 5 google.com    # 5 second timeout

# Flood ping (requires root)
$ sudo ping -f google.com

# Quiet mode (only summary)
$ ping -q -c 10 google.com`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Understanding ping Output</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`64 bytes from 142.250.80.46: icmp_seq=1 ttl=117 time=14.3 ms

# 64 bytes    - Response size
# icmp_seq=1  - Sequence number
# ttl=117     - Time to live (hops remaining)
# time=14.3ms - Round trip time`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">traceroute Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic traceroute
$ traceroute google.com

# Use ICMP instead of UDP
$ traceroute -I google.com

# Use TCP
$ traceroute -T google.com

# Set max hops
$ traceroute -m 20 google.com

# Don't resolve hostnames
$ traceroute -n google.com

# Set timeout
$ traceroute -w 3 google.com`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">mtr - Combined Tool</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# mtr combines ping and traceroute
$ mtr google.com

# Report mode
$ mtr -r -c 10 google.com

# No DNS resolution
$ mtr -n google.com`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Diagnostic Options</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Command</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">ping -c 4</td>
            <td className="p-3 border">Quick connectivity test</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">traceroute</td>
            <td className="p-3 border">Path analysis</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">mtr</td>
            <td className="p-3 border">Continuous monitoring</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">ping -f</td>
            <td className="p-3 border">Stress testing</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>ping -c limits the number of packets sent</li>
        <li>traceroute shows network path to destination</li>
        <li>mtr provides continuous real-time statistics</li>
        <li>Use -n to skip DNS resolution for faster results</li>
      </ul>
    </div>
  </div>
);

export default PingTraceroute;
