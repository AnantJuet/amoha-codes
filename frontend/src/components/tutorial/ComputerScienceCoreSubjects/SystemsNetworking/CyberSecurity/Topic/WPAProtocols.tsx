import React from "react";

const WPAProtocols: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      WPA Wireless Security Protocols
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Wi-Fi Protected Access (WPA) protocols secure wireless networks by encrypting
      data transmissions and authenticating users. The evolution from WEP to WPA3
      represents continuous improvements in wireless security to address discovered
      vulnerabilities and emerging threats.
    </p>

    <h2 className="text-3xl font-bold mt-8">Wireless Security Evolution</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Protocol</th>
            <th className="p-3 border">Year</th>
            <th className="p-3 border">Encryption</th>
            <th className="p-3 border">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">WEP</td>
            <td className="p-3 border">1997</td>
            <td className="p-3 border">RC4 (64/128-bit)</td>
            <td className="p-3 border text-red-600 dark:text-red-400">Broken - Do Not Use</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">WPA</td>
            <td className="p-3 border">2003</td>
            <td className="p-3 border">TKIP (RC4-based)</td>
            <td className="p-3 border text-orange-600 dark:text-orange-400">Deprecated</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">WPA2</td>
            <td className="p-3 border">2004</td>
            <td className="p-3 border">AES-CCMP</td>
            <td className="p-3 border text-yellow-600 dark:text-yellow-400">Current Standard</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">WPA3</td>
            <td className="p-3 border">2018</td>
            <td className="p-3 border">AES-GCMP / SAE</td>
            <td className="p-3 border text-green-600 dark:text-green-400">Recommended</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">WPA2 Details</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`WPA2 (IEEE 802.11i):

AUTHENTICATION MODES:

WPA2-Personal (WPA2-PSK)
├── Pre-Shared Key (password)
├── Suitable for home/small office
├── Password: 8-63 characters
├── PMK derived from PSK + SSID
└── Vulnerable to offline dictionary attacks

WPA2-Enterprise (WPA2-EAP)
├── 802.1X authentication with RADIUS
├── Individual user credentials
├── Supports various EAP methods:
│   ├── EAP-TLS (certificate-based)
│   ├── PEAP (protected EAP)
│   ├── EAP-TTLS (tunneled TLS)
│   └── EAP-FAST (Cisco)
└── Better for enterprise environments

ENCRYPTION:
┌────────────────────────────────────────────────────────┐
│ CCMP (Counter Mode with CBC-MAC Protocol)              │
│ ├── Based on AES (128-bit)                             │
│ ├── Provides: Confidentiality, Integrity, Replay prot  │
│ ├── Per-packet key derivation                          │
│ └── Mandatory for WPA2 certification                   │
└────────────────────────────────────────────────────────┘

4-WAY HANDSHAKE:
 Client (STA)                     Access Point (AP)
      │                                │
      │◄──── ANonce ──────────────────│ (1)
      │                                │
      │──── SNonce, MIC ─────────────►│ (2)
      │     (Client proves knowledge   │
      │      of PMK)                   │
      │                                │
      │◄──── GTK, MIC ────────────────│ (3)
      │     (AP proves knowledge of    │
      │      PMK, installs GTK)        │
      │                                │
      │──── ACK, MIC ────────────────►│ (4)
      │     (Client installs GTK)      │`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">WPA3 Improvements</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`WPA3 ENHANCEMENTS:

SAE (Simultaneous Authentication of Equals)
├── Replaces PSK-based authentication
├── Dragonfly key exchange protocol
├── Resistant to offline dictionary attacks
├── Forward secrecy (session keys protected)
└── Protects against KRACK attack

WPA3-Personal
├── Uses SAE instead of PSK
├── 128-bit security
├── Natural password selection allowed
└── Transition mode for WPA2 compatibility

WPA3-Enterprise
├── 192-bit security suite (optional)
├── CNSA (Commercial National Security Algorithm)
├── AES-256-GCM encryption
├── SHA-384 for key derivation
└── ECDSA with P-384 curve

ENHANCED OPEN (OWE)
├── Opportunistic Wireless Encryption
├── Encryption for open networks
├── No authentication required
├── Protects against passive eavesdropping
└── Transparent to users

PROTECTED MANAGEMENT FRAMES (PMF)
├── Mandatory in WPA3
├── Protects deauthentication frames
├── Prevents deauth attacks
└── Was optional in WPA2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Wireless Attacks</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Attack</th>
            <th className="p-3 border">Target</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Mitigation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Dictionary Attack</td>
            <td className="p-3 border">WPA2-PSK</td>
            <td className="p-3 border">Crack captured handshake offline</td>
            <td className="p-3 border">Strong passwords, WPA3 SAE</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">KRACK</td>
            <td className="p-3 border">WPA2</td>
            <td className="p-3 border">Key reinstallation attack</td>
            <td className="p-3 border">Patched firmware, WPA3</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Evil Twin</td>
            <td className="p-3 border">All</td>
            <td className="p-3 border">Rogue AP impersonating legitimate</td>
            <td className="p-3 border">WPA2/3-Enterprise, VPN</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Deauthentication</td>
            <td className="p-3 border">WPA2</td>
            <td className="p-3 border">Force client disconnection</td>
            <td className="p-3 border">PMF (mandatory in WPA3)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">PMKID Attack</td>
            <td className="p-3 border">WPA2-PSK</td>
            <td className="p-3 border">Crack PSK without full handshake</td>
            <td className="p-3 border">Disable PMKID, WPA3 SAE</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">802.1X / EAP Authentication</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`802.1X COMPONENTS:

Supplicant ←→ Authenticator ←→ Authentication Server
 (Client)      (Access Point)    (RADIUS Server)

EAP METHODS COMPARISON:
┌────────────────┬─────────────────┬────────────────────────┐
│ Method         │ Client Cert     │ Security Level         │
├────────────────┼─────────────────┼────────────────────────┤
│ EAP-TLS        │ Required        │ Highest (mutual auth)  │
│ PEAP           │ Not required    │ High (server cert)     │
│ EAP-TTLS       │ Not required    │ High (server cert)     │
│ EAP-FAST       │ Not required    │ High (PAC-based)       │
└────────────────┴─────────────────┴────────────────────────┘

PEAP AUTHENTICATION FLOW:
1. Client connects to AP
2. AP sends EAP-Request/Identity
3. Client sends EAP-Response/Identity
4. TLS tunnel established (server cert)
5. Inside tunnel: MSCHAPv2 or GTC
6. RADIUS returns Access-Accept
7. AP provides network access`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Never use WEP or WPA (TKIP) - they are broken</li>
        <li>WPA2 with AES-CCMP is the minimum acceptable standard</li>
        <li>WPA3 with SAE provides forward secrecy and better password protection</li>
        <li>Use WPA2/3-Enterprise with 802.1X for corporate networks</li>
        <li>Strong PSK passwords (12+ characters) are essential for WPA2-Personal</li>
        <li>Enable PMF (Protected Management Frames) when available</li>
      </ul>
    </div>
  </div>
);

export default WPAProtocols;
