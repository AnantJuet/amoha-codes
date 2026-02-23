import React from "react";

const Firewalls: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Firewall Concepts
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      A firewall is a network security system that monitors and controls incoming and outgoing
      network traffic based on predetermined security rules. Acting as a barrier between trusted
      internal networks and untrusted external networks (like the internet), firewalls are
      fundamental to network security architecture.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">How Firewalls Work</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <div className="text-center dark:text-gray-300">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="bg-red-100 dark:bg-red-800 p-3 rounded">
            <p className="font-bold">Untrusted Network</p>
            <p className="text-sm">(Internet)</p>
          </div>
          <span className="text-2xl">→</span>
          <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded border-4 border-yellow-500">
            <p className="font-bold">FIREWALL</p>
            <p className="text-sm">Filter Rules</p>
          </div>
          <span className="text-2xl">→</span>
          <div className="bg-green-100 dark:bg-green-800 p-3 rounded">
            <p className="font-bold">Trusted Network</p>
            <p className="text-sm">(Internal LAN)</p>
          </div>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Firewall Functions</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Traffic Filtering</h3>
        <p className="dark:text-gray-300 text-sm">
          Examines packets and allows or blocks based on rules for IP addresses, ports, protocols.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Network Address Translation</h3>
        <p className="dark:text-gray-300 text-sm">
          Hides internal IP addresses from external networks, providing additional security.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Logging and Monitoring</h3>
        <p className="dark:text-gray-300 text-sm">
          Records network activity for auditing, troubleshooting, and forensic analysis.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">VPN Termination</h3>
        <p className="dark:text-gray-300 text-sm">
          Manages encrypted tunnels for secure remote access to the network.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Firewall Rules</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <p className="dark:text-gray-300 mb-2">Rules typically specify:</p>
      <ul className="list-disc list-inside dark:text-gray-300">
        <li><strong>Source:</strong> IP address or range, network zone</li>
        <li><strong>Destination:</strong> IP address or range, network zone</li>
        <li><strong>Service/Port:</strong> TCP/UDP port numbers (e.g., 80 for HTTP, 443 for HTTPS)</li>
        <li><strong>Action:</strong> Allow, Deny, or Drop</li>
        <li><strong>Logging:</strong> Whether to log matching traffic</li>
      </ul>
      <div className="mt-4 bg-white p-2 rounded font-mono text-sm text-gray-900">
        <p># Example firewall rules (simplified)</p>
        <p>ALLOW TCP 192.168.1.0/24 → ANY:443 # Allow HTTPS outbound</p>
        <p>ALLOW TCP ANY → 10.0.0.5:80 # Allow HTTP to web server</p>
        <p>DENY ALL ANY → ANY # Default deny all other traffic</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Default Policies</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">Default Deny (Whitelist)</h3>
        <p className="dark:text-gray-300 text-sm">
          Block all traffic except what is explicitly allowed. More secure, recommended approach.
          Requires defining all permitted traffic.
        </p>
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h3 className="font-bold mb-2 dark:text-white">Default Allow (Blacklist)</h3>
        <p className="dark:text-gray-300 text-sm">
          Allow all traffic except what is explicitly blocked. Less secure, easier to manage
          but risky as new threats may not be blocked.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Firewall Deployment Locations</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Location</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Protection</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Network Perimeter</td>
            <td className="border border-gray-300 px-4 py-2">Border between internal and external</td>
            <td className="border border-gray-300 px-4 py-2">External threats, internet traffic</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">DMZ</td>
            <td className="border border-gray-300 px-4 py-2">Isolate public-facing servers</td>
            <td className="border border-gray-300 px-4 py-2">Web servers, email servers</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Internal Segments</td>
            <td className="border border-gray-300 px-4 py-2">Segment internal networks</td>
            <td className="border border-gray-300 px-4 py-2">Lateral movement, internal threats</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Host-based</td>
            <td className="border border-gray-300 px-4 py-2">Individual device protection</td>
            <td className="border border-gray-300 px-4 py-2">Endpoint security</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">DMZ Architecture</h2>
    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
      <p className="dark:text-gray-300 mb-2">
        A DMZ (Demilitarized Zone) is a network segment that sits between internal and external networks:
      </p>
      <div className="text-center dark:text-gray-300 mt-4">
        <div className="flex flex-wrap justify-center items-center gap-2">
          <span>Internet</span>
          <span>→</span>
          <span className="bg-yellow-100 dark:bg-yellow-800 p-2 rounded">External FW</span>
          <span>→</span>
          <span className="bg-blue-100 dark:bg-blue-800 p-2 rounded">DMZ (Web/Mail)</span>
          <span>→</span>
          <span className="bg-yellow-100 dark:bg-yellow-800 p-2 rounded">Internal FW</span>
          <span>→</span>
          <span>LAN</span>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Limitations of Firewalls</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li>Cannot protect against internal threats or authorized user misuse</li>
        <li>May not detect encrypted malicious traffic</li>
        <li>Cannot prevent social engineering attacks</li>
        <li>Zero-day exploits may bypass rules</li>
        <li>Misconfiguration can create security holes</li>
        <li>Cannot replace other security measures (antivirus, IDS, etc.)</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>Firewalls filter network traffic based on security rules</li>
        <li>They can operate at different network layers (packet, circuit, application)</li>
        <li>Default deny policy is more secure than default allow</li>
        <li>DMZ architecture provides layered protection for public-facing services</li>
        <li>Firewalls are essential but not sufficient alone for complete security</li>
      </ul>
    </div>
  </div>
);

export default Firewalls;
