import React from "react";

const IPSec: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      IPSec Protocol
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      IPSec (Internet Protocol Security) is a suite of protocols designed to secure IP communications
      by authenticating and encrypting each IP packet in a communication session. Operating at the
      network layer (Layer 3), IPSec provides security for all applications without modification,
      making it ideal for VPNs and network-level security.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">IPSec Components</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-bold mb-2 dark:text-white">Authentication Header (AH)</h3>
        <p className="dark:text-gray-300 text-sm">
          Provides data integrity, authentication, and anti-replay protection.
          Does NOT provide encryption. Protocol number: 51
        </p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">Encapsulating Security Payload (ESP)</h3>
        <p className="dark:text-gray-300 text-sm">
          Provides confidentiality (encryption), authentication, and integrity.
          Most commonly used. Protocol number: 50
        </p>
      </div>
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="font-bold mb-2 dark:text-white">Internet Key Exchange (IKE)</h3>
        <p className="dark:text-gray-300 text-sm">
          Protocol for negotiating security associations and exchanging keys.
          Uses UDP port 500 (and 4500 for NAT traversal).
        </p>
      </div>
      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
        <h3 className="font-bold mb-2 dark:text-white">Security Association (SA)</h3>
        <p className="dark:text-gray-300 text-sm">
          A set of security parameters (algorithms, keys) shared between parties.
          Identified by SPI (Security Parameter Index).
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">IPSec Modes</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Mode</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Use Case</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">Transport Mode</td>
            <td className="border border-gray-300 px-4 py-2">Only payload is encrypted; original IP header preserved</td>
            <td className="border border-gray-300 px-4 py-2">Host-to-host communication</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">Tunnel Mode</td>
            <td className="border border-gray-300 px-4 py-2">Entire IP packet encrypted; new IP header added</td>
            <td className="border border-gray-300 px-4 py-2">Site-to-site VPN, gateway-to-gateway</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Packet Formats</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <h3 className="font-bold mb-2 dark:text-white">Transport Mode:</h3>
      <div className="font-mono text-sm text-gray-900 bg-white p-2 rounded mb-4">
        [IP Header][AH/ESP Header][TCP/UDP Header][Data][ESP Trailer]
      </div>
      <h3 className="font-bold mb-2 dark:text-white">Tunnel Mode:</h3>
      <div className="font-mono text-sm text-gray-900 bg-white p-2 rounded">
        [New IP Header][AH/ESP Header][Original IP Header][TCP/UDP Header][Data][ESP Trailer]
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">IKE (Internet Key Exchange)</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <p className="dark:text-gray-300 mb-2">IKE establishes security associations in two phases:</p>

      <h3 className="font-bold mt-4 mb-2 dark:text-white">Phase 1 (IKE SA)</h3>
      <ul className="list-disc list-inside dark:text-gray-300 text-sm">
        <li>Establishes a secure channel between peers</li>
        <li>Authenticates peers (pre-shared key or certificates)</li>
        <li>Negotiates encryption and hash algorithms</li>
        <li>Creates IKE SA for protecting Phase 2</li>
      </ul>

      <h3 className="font-bold mt-4 mb-2 dark:text-white">Phase 2 (IPSec SA)</h3>
      <ul className="list-disc list-inside dark:text-gray-300 text-sm">
        <li>Negotiates IPSec parameters (ESP/AH, algorithms)</li>
        <li>Creates IPSec SAs for actual data protection</li>
        <li>Protected by Phase 1 IKE SA</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">IKEv1 vs IKEv2</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
            <th className="border border-gray-300 px-4 py-2 text-left">IKEv1</th>
            <th className="border border-gray-300 px-4 py-2 text-left">IKEv2</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Messages to establish</td>
            <td className="border border-gray-300 px-4 py-2">9 (Main) or 6 (Aggressive)</td>
            <td className="border border-gray-300 px-4 py-2">4</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">NAT Traversal</td>
            <td className="border border-gray-300 px-4 py-2">Optional extension</td>
            <td className="border border-gray-300 px-4 py-2">Built-in</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">MOBIKE (mobility)</td>
            <td className="border border-gray-300 px-4 py-2">Not supported</td>
            <td className="border border-gray-300 px-4 py-2">Supported</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">DoS Protection</td>
            <td className="border border-gray-300 px-4 py-2">Limited</td>
            <td className="border border-gray-300 px-4 py-2">Cookie mechanism</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">IPSec Algorithms</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Function</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Algorithms</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Encryption</td>
            <td className="border border-gray-300 px-4 py-2">AES-128/256, AES-GCM, 3DES (legacy)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Authentication/Integrity</td>
            <td className="border border-gray-300 px-4 py-2">SHA-256, SHA-384, SHA-512</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Key Exchange</td>
            <td className="border border-gray-300 px-4 py-2">DH Group 14/19/20, ECDH</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Peer Authentication</td>
            <td className="border border-gray-300 px-4 py-2">Pre-shared key, RSA certificates, EAP</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">IPSec Use Cases</h2>
    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li><strong>Site-to-Site VPN:</strong> Connect branch offices securely over internet</li>
        <li><strong>Remote Access VPN:</strong> Secure connection for mobile workers</li>
        <li><strong>IPv6 Security:</strong> IPSec is mandatory in IPv6 specification</li>
        <li><strong>Network Layer Security:</strong> Protect all IP-based applications</li>
        <li><strong>L2TP/IPSec:</strong> Combine with L2TP for VPN tunneling</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>IPSec operates at Layer 3, securing all IP traffic transparently</li>
        <li>ESP provides encryption and authentication; AH provides only authentication</li>
        <li>Transport mode protects payload; Tunnel mode encrypts entire original packet</li>
        <li>IKE handles key exchange and SA negotiation; IKEv2 is preferred</li>
        <li>IPSec is the foundation for most enterprise VPN solutions</li>
      </ul>
    </div>
  </div>
);

export default IPSec;
