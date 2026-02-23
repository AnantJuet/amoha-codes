import React from "react";

const VPN: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      VPN (Virtual Private Network)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Virtual Private Network (VPN) creates a secure, encrypted tunnel between your device and
      a remote network over an untrusted network like the Internet. VPNs protect data in transit
      and enable secure remote access to private networks.
    </p>

    <h2 className="text-3xl font-bold mt-8">How VPN Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`VPN Tunnel Concept:

Without VPN:
User --> [Internet] --> Destination
         (Unencrypted, visible to ISP)

With VPN:
User --> [Encrypted Tunnel] --> VPN Server --> Destination
         ==================
         ISP sees encrypted
         traffic only

VPN Encapsulation:
+--------------------------------------------------+
| Original IP Header | Original Data               |
+--------------------------------------------------+
                     |
              Encrypt & Encapsulate
                     |
                     v
+--------------------------------------------------+
| New IP | VPN      | Encrypted Original Packet   |
| Header | Header   |                              |
+--------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of VPN</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Remote Access VPN</td>
            <td className="p-3 border">User connects to corporate network</td>
            <td className="p-3 border">Work from home, mobile users</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Site-to-Site VPN</td>
            <td className="p-3 border">Connect two networks</td>
            <td className="p-3 border">Branch offices, data centers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SSL/TLS VPN</td>
            <td className="p-3 border">Browser-based access</td>
            <td className="p-3 border">Web applications, clientless</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">IPsec VPN</td>
            <td className="p-3 border">Network layer encryption</td>
            <td className="p-3 border">Full network access</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Remote Access vs Site-to-Site</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Remote Access VPN:
                                    Corporate
Remote User  ====VPN Tunnel=====>  Network
   |                                  |
[Laptop]                        [VPN Gateway]
                                      |
                                 [Servers]

Site-to-Site VPN:
Branch Office                   Headquarters
     |                               |
[Router] ======VPN Tunnel=====> [Router]
     |                               |
[Local LAN]                    [Main LAN]

All traffic between sites is encrypted`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">VPN Benefits</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Encryption:</strong> Protects data from eavesdropping</li>
      <li><strong>Privacy:</strong> Hides browsing activity from ISP</li>
      <li><strong>Remote Access:</strong> Securely connect to corporate networks</li>
      <li><strong>Bypass Restrictions:</strong> Access geo-blocked content</li>
      <li><strong>Secure Public Wi-Fi:</strong> Protection on untrusted networks</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Split Tunneling</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Split Tunneling Options:

Full Tunnel (All traffic through VPN):
User --> ALL TRAFFIC --> VPN --> Internet/Corporate
         ===========

Split Tunnel (Only corporate traffic through VPN):
User --> Corporate Traffic --> VPN --> Corporate
     --> Internet Traffic --> Direct --> Internet

Full Tunnel:
+ More secure (all traffic protected)
- Slower, more VPN bandwidth used

Split Tunnel:
+ Faster, less VPN load
- Internet traffic not protected`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">VPN Security Considerations</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>VPN Logging:</strong> Some providers log activity</li>
        <li><strong>Weak Protocols:</strong> Avoid PPTP, use modern protocols</li>
        <li><strong>DNS Leaks:</strong> DNS queries may bypass VPN</li>
        <li><strong>IP Leaks:</strong> Real IP may be exposed</li>
        <li><strong>Kill Switch:</strong> Enable to prevent leaks if VPN drops</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Enterprise VPN Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Enterprise VPN Setup:

                    Internet
                        |
                   [Firewall]
                        |
                 [VPN Gateway]
                   /    |    \\
                  /     |     \\
    Remote    Branch  Cloud
    Users     Office  Access

Components:
- VPN Gateway/Concentrator
- Authentication (MFA, certificates)
- Authorization (who can access what)
- Encryption (IPsec, SSL/TLS)
- Monitoring and logging`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>VPN creates encrypted tunnels over untrusted networks</li>
        <li>Remote access VPN is for individual users</li>
        <li>Site-to-site VPN connects entire networks</li>
        <li>Use modern protocols (OpenVPN, WireGuard, IPsec)</li>
        <li>Consider split tunneling for performance vs security</li>
        <li>Always use MFA for VPN authentication</li>
      </ul>
    </div>
  </div>
);

export default VPN;
