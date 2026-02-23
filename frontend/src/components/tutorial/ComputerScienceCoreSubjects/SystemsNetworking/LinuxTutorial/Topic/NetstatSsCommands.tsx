import React from "react";

const NetstatSsCommands: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      netstat and ss Commands
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      netstat and ss commands display network connections, routing tables, and
      network statistics. ss is the modern replacement for netstat with better
      performance.
    </p>

    <h2 className="text-3xl font-bold mt-8">ss Command (Modern)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Show all sockets
$ ss

# Show listening sockets
$ ss -l

# Show TCP connections
$ ss -t

# Show UDP connections
$ ss -u

# Show listening TCP with process info
$ ss -tlnp

# Show established connections
$ ss -t state established

# Show connections on specific port
$ ss -t dst :80
$ ss -t src :22`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ss Options</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Option</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">-t</td>
            <td className="p-3 border">Show TCP sockets</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-u</td>
            <td className="p-3 border">Show UDP sockets</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-l</td>
            <td className="p-3 border">Show listening sockets</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-n</td>
            <td className="p-3 border">Show numeric addresses</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-p</td>
            <td className="p-3 border">Show process using socket</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-a</td>
            <td className="p-3 border">Show all sockets</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">netstat Command (Legacy)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Show all connections
$ netstat -a

# Show listening ports
$ netstat -l

# Show TCP connections with process
$ netstat -tlnp

# Show routing table
$ netstat -r

# Show network statistics
$ netstat -s

# Continuous monitoring
$ netstat -c`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Use Cases</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Find process using port 80
$ ss -tlnp | grep :80
$ sudo lsof -i :80

# Count connections by state
$ ss -t | awk '{print $1}' | sort | uniq -c

# Find all connections to specific IP
$ ss dst 192.168.1.100`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>ss is faster and recommended over netstat</li>
        <li>Use -tlnp for listening TCP with process info</li>
        <li>netstat -r shows routing table</li>
        <li>Use sudo for process information on all connections</li>
      </ul>
    </div>
  </div>
);

export default NetstatSsCommands;
