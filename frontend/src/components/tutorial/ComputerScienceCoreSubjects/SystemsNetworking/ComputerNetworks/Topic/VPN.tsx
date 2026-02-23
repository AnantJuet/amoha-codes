import React from "react";

const VPN: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Virtual Private Networks (VPN)
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      A Virtual Private Network (VPN) creates a secure, encrypted connection over a less secure
      network, such as the internet. VPNs enable users to send and receive data as if their devices
      were directly connected to a private network, providing privacy, anonymity, and secure access
      to internal resources.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">How VPN Works</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <div className="text-center dark:text-gray-300">
        <div className="flex flex-wrap justify-center items-center gap-2">
          <div className="bg-green-100 dark:bg-green-800 p-3 rounded">
            <p className="font-bold">Client</p>
          </div>
          <span>→</span>
          <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded border-2 border-dashed border-yellow-600">
            <p className="text-sm">Encrypted Tunnel</p>
            <p className="font-bold">Public Internet</p>
          </div>
          <span>→</span>
          <div className="bg-purple-100 dark:bg-purple-800 p-3 rounded">
            <p className="font-bold">VPN Server</p>
          </div>
          <span>→</span>
          <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded">
            <p className="font-bold">Destination</p>
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm dark:text-gray-300 text-center">
        Data is encrypted before leaving the client and decrypted at the VPN server
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">VPN Types</h2>
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">1. Remote Access VPN</h3>
        <p className="dark:text-gray-300 text-sm">
          Connects individual users to a private network from remote locations.
          Common for employees working from home or traveling.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">2. Site-to-Site VPN</h3>
        <p className="dark:text-gray-300 text-sm">
          Connects entire networks to each other. Used to link branch offices
          to headquarters over the internet.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">3. Client-to-Site VPN</h3>
        <p className="dark:text-gray-300 text-sm">
          Individual client connects to corporate network. Requires VPN client
          software on the user's device.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">VPN Protocols</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Protocol</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Security</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Speed</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Use Case</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">IPSec</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">High</td>
            <td className="border border-gray-300 px-4 py-2">Moderate</td>
            <td className="border border-gray-300 px-4 py-2">Site-to-site, enterprise</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">OpenVPN</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">High</td>
            <td className="border border-gray-300 px-4 py-2">Good</td>
            <td className="border border-gray-300 px-4 py-2">General purpose, cross-platform</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">WireGuard</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">High</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">Fastest</td>
            <td className="border border-gray-300 px-4 py-2">Modern, lightweight</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">L2TP/IPSec</td>
            <td className="border border-gray-300 px-4 py-2">Moderate</td>
            <td className="border border-gray-300 px-4 py-2">Moderate</td>
            <td className="border border-gray-300 px-4 py-2">Legacy, mobile devices</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">PPTP</td>
            <td className="border border-gray-300 px-4 py-2 text-red-600 dark:text-red-400">Weak</td>
            <td className="border border-gray-300 px-4 py-2">Fast</td>
            <td className="border border-gray-300 px-4 py-2 text-red-600 dark:text-red-400">Deprecated - avoid</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">SSL/TLS VPN</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">High</td>
            <td className="border border-gray-300 px-4 py-2">Good</td>
            <td className="border border-gray-300 px-4 py-2">Web-based, clientless</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">VPN Tunneling</h2>
    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
      <p className="dark:text-gray-300 mb-2">
        VPN tunneling encapsulates data packets within other packets:
      </p>
      <div className="bg-white p-3 rounded font-mono text-sm text-gray-900">
        <p>Original Packet: [IP Header][TCP Header][Data]</p>
        <p className="mt-2">Tunneled Packet:</p>
        <p>[New IP Header][VPN Header][Encrypted Original Packet]</p>
      </div>
      <ul className="list-disc list-inside mt-4 dark:text-gray-300 text-sm">
        <li><strong>Full tunnel:</strong> All traffic goes through VPN</li>
        <li><strong>Split tunnel:</strong> Only specific traffic uses VPN</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">VPN Benefits</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">Security Benefits</h3>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>Encrypted communications</li>
          <li>Secure remote access</li>
          <li>Protection on public WiFi</li>
          <li>Hide IP address from websites</li>
        </ul>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-bold mb-2 dark:text-white">Business Benefits</h3>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>Connect branch offices</li>
          <li>Enable remote work</li>
          <li>Reduce infrastructure costs</li>
          <li>Centralized security policy</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">VPN Limitations</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li>Reduced connection speed due to encryption overhead</li>
        <li>VPN provider can potentially see your traffic</li>
        <li>May be blocked by some networks/countries</li>
        <li>Does not protect against malware or phishing</li>
        <li>Configuration complexity for site-to-site setups</li>
        <li>Single point of failure if VPN server goes down</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>VPNs create encrypted tunnels over public networks for secure communication</li>
        <li>Remote access VPNs connect individuals; site-to-site VPNs connect networks</li>
        <li>WireGuard and OpenVPN are recommended modern protocols; avoid PPTP</li>
        <li>VPNs provide privacy and security but have performance overhead</li>
        <li>Split tunneling can optimize performance by routing only specific traffic through VPN</li>
      </ul>
    </div>
  </div>
);

export default VPN;
