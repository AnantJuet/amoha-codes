import React from "react";

const VPNProtocols: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      VPN Protocols
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      VPN protocols determine how data is routed and encrypted between your device and the VPN
      server. Each protocol has different strengths in terms of security, speed, and compatibility.
      Choosing the right protocol is crucial for optimal VPN performance.
    </p>

    <h2 className="text-3xl font-bold mt-8">Common VPN Protocols</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Protocol</th>
            <th className="p-3 border">Security</th>
            <th className="p-3 border">Speed</th>
            <th className="p-3 border">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">WireGuard</td>
            <td className="p-3 border">Excellent</td>
            <td className="p-3 border">Very Fast</td>
            <td className="p-3 border">Recommended</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">OpenVPN</td>
            <td className="p-3 border">Excellent</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border">Recommended</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">IKEv2/IPsec</td>
            <td className="p-3 border">Excellent</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border">Recommended</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">L2TP/IPsec</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Acceptable</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">PPTP</td>
            <td className="p-3 border">Weak</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border">Deprecated</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">WireGuard</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`WireGuard Overview:

+------------------------------------------+
| Modern, fast, and secure VPN protocol    |
+------------------------------------------+
| Encryption: ChaCha20, Poly1305           |
| Key Exchange: Curve25519                 |
| Code Size: ~4,000 lines (very auditable) |
| Performance: Kernel-level, very fast     |
+------------------------------------------+

Advantages:
- Minimal attack surface (small codebase)
- State-of-the-art cryptography
- Excellent performance
- Built into Linux kernel

Considerations:
- Relatively new (2020 stable)
- Less configuration options
- Static IP assignment by default`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">OpenVPN</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`OpenVPN Overview:

+------------------------------------------+
| Open-source, highly configurable VPN     |
+------------------------------------------+
| Encryption: AES-256, RSA/ECC             |
| Protocol: Custom over UDP/TCP            |
| Port: Can use any port (443 for bypass)  |
| Authentication: Certificates, passwords  |
+------------------------------------------+

Modes:
- UDP: Faster, recommended for most use
- TCP: More reliable, works through firewalls

Advantages:
- Highly secure and audited
- Very configurable
- Can bypass firewalls on port 443
- Wide platform support

Considerations:
- More complex setup
- Slower than WireGuard
- Requires client software`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">IKEv2/IPsec</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Encryption</td>
            <td className="p-3 border">AES-256 with IPsec</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Speed</td>
            <td className="p-3 border">Very fast, efficient</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Stability</td>
            <td className="p-3 border">MOBIKE for seamless reconnection</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Mobile</td>
            <td className="p-3 border">Excellent for mobile devices</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Native Support</td>
            <td className="p-3 border">Windows, macOS, iOS, Android</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Protocol Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Protocol Selection Guide:

For Speed:
WireGuard > IKEv2 > OpenVPN UDP > OpenVPN TCP

For Security:
WireGuard = OpenVPN = IKEv2 > L2TP > PPTP

For Mobile:
IKEv2 (best reconnection) > WireGuard > OpenVPN

For Firewall Bypass:
OpenVPN TCP 443 > SSTP > Others

For Enterprise:
IPsec/IKEv2 > OpenVPN > WireGuard`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Deprecated Protocols</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-4">
      <h3 className="font-bold mb-2">PPTP (Point-to-Point Tunneling Protocol)</h3>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li>MS-CHAPv2 authentication is broken</li>
        <li>Can be cracked in less than a day</li>
        <li>Only use if no other option available</li>
        <li>Never use for sensitive data</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>WireGuard is the newest and fastest secure option</li>
        <li>OpenVPN is the most compatible and configurable</li>
        <li>IKEv2 is excellent for mobile with seamless reconnection</li>
        <li>Avoid PPTP - it is insecure</li>
        <li>Use UDP protocols for speed, TCP for reliability</li>
        <li>Choose based on your specific needs (speed, security, compatibility)</li>
      </ul>
    </div>
  </div>
);

export default VPNProtocols;
