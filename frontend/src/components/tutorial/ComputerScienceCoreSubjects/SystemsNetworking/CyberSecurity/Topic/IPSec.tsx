import React from "react";

const IPSec: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      IPSec (Internet Protocol Security)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      IPSec is a suite of protocols that provides security services at the network layer (Layer 3).
      It authenticates and encrypts IP packets, enabling secure communication between hosts,
      networks, or a combination of both. IPSec is the foundation for most VPN implementations.
    </p>

    <h2 className="text-3xl font-bold mt-8">IPSec Components</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Key Features</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">AH (Authentication Header)</td>
            <td className="p-3 border">Integrity and authentication</td>
            <td className="p-3 border">No encryption, protects entire packet</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ESP (Encapsulating Security Payload)</td>
            <td className="p-3 border">Encryption, integrity, authentication</td>
            <td className="p-3 border">Most commonly used, encrypts payload</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">IKE (Internet Key Exchange)</td>
            <td className="p-3 border">Key management and SA negotiation</td>
            <td className="p-3 border">IKEv1 and IKEv2 versions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SA (Security Association)</td>
            <td className="p-3 border">Defines security parameters</td>
            <td className="p-3 border">Unidirectional, stored in SAD</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SPD (Security Policy Database)</td>
            <td className="p-3 border">Policy decisions for traffic</td>
            <td className="p-3 border">Bypass, discard, or protect</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">AH vs ESP</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`AUTHENTICATION HEADER (AH) - Protocol 51
┌──────────────────────────────────────────────────────┐
│ IP Header │ AH Header │ Payload (original IP packet) │
└──────────────────────────────────────────────────────┘
├── Provides integrity and authentication
├── Covers entire packet including IP header
├── Does NOT provide encryption
├── Problem: Breaks with NAT (checksums IP addresses)
└── Rarely used alone in modern deployments

ENCAPSULATING SECURITY PAYLOAD (ESP) - Protocol 50
┌───────────────────────────────────────────────────────────┐
│ IP Header │ ESP Header │ Encrypted Payload │ ESP Trailer │
└───────────────────────────────────────────────────────────┘
├── Provides confidentiality, integrity, authentication
├── Encrypts payload only (not outer IP header)
├── Works with NAT traversal (UDP port 4500)
├── Supports null encryption (integrity only)
└── Most common choice for VPNs

COMPARISON:
┌─────────────┬──────────────┬──────────────┐
│ Feature     │ AH           │ ESP          │
├─────────────┼──────────────┼──────────────┤
│ Encryption  │ No           │ Yes          │
│ Integrity   │ Yes (full)   │ Yes (payload)│
│ NAT Support │ No           │ Yes (NAT-T)  │
│ Protocol #  │ 51           │ 50           │
└─────────────┴──────────────┴──────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">IKE (Internet Key Exchange)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`IKE PHASES:

IKEv1:
Phase 1 - Main Mode / Aggressive Mode
├── Establish secure channel (ISAKMP SA)
├── Authenticate peers
├── Exchange keying material
└── Result: IKE SA for Phase 2 protection

Phase 2 - Quick Mode
├── Negotiate IPSec SA parameters
├── Generate session keys
└── Result: IPSec SAs for data protection

IKEv2 (Recommended):
├── Single phase negotiation
├── Fewer messages (4 vs 9)
├── Built-in NAT traversal
├── MOBIKE for mobile clients
├── EAP authentication support
└── Better DoS protection

IKE AUTHENTICATION METHODS:
├── Pre-Shared Key (PSK)
├── RSA Signatures (certificates)
├── DSS Signatures
├── ECDSA Signatures
└── EAP (IKEv2 only)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">IPSec Configuration Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Linux strongSwan IPSec Configuration
# /etc/ipsec.conf

config setup
    charondebug="ike 2, knl 2"

conn site-to-site
    type=tunnel
    left=192.168.1.1
    leftsubnet=10.0.1.0/24
    right=203.0.113.1
    rightsubnet=10.0.2.0/24
    ike=aes256-sha256-modp2048
    esp=aes256-sha256
    keyexchange=ikev2
    authby=secret
    auto=start

# /etc/ipsec.secrets
192.168.1.1 203.0.113.1 : PSK "SharedSecretKey123"

# Cisco IOS IPSec Configuration
crypto isakmp policy 10
 encryption aes 256
 hash sha256
 authentication pre-share
 group 14

crypto isakmp key SharedSecretKey123 address 203.0.113.1

crypto ipsec transform-set MYSET esp-aes 256 esp-sha256-hmac
 mode tunnel

crypto map MYMAP 10 ipsec-isakmp
 set peer 203.0.113.1
 set transform-set MYSET
 match address 100

access-list 100 permit ip 10.0.1.0 0.0.0.255 10.0.2.0 0.0.0.255`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Security Associations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">SA Parameter</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example Values</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">SPI (Security Parameter Index)</td>
            <td className="p-3 border">Unique SA identifier</td>
            <td className="p-3 border">32-bit number</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Encryption Algorithm</td>
            <td className="p-3 border">Cipher for confidentiality</td>
            <td className="p-3 border">AES-256-GCM, ChaCha20</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Integrity Algorithm</td>
            <td className="p-3 border">Hash for integrity check</td>
            <td className="p-3 border">SHA-256, SHA-384</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Lifetime</td>
            <td className="p-3 border">SA expiration</td>
            <td className="p-3 border">28800 seconds, 100GB</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Mode</td>
            <td className="p-3 border">Transport or Tunnel</td>
            <td className="p-3 border">Tunnel (most common)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>IPSec operates at Layer 3, securing all IP traffic</li>
        <li>ESP provides encryption and is more commonly used than AH</li>
        <li>IKEv2 is preferred over IKEv1 for better security and performance</li>
        <li>Security Associations define the parameters for secure communication</li>
        <li>NAT-Traversal (NAT-T) uses UDP port 4500 for ESP</li>
        <li>IPSec supports both site-to-site and remote access VPNs</li>
      </ul>
    </div>
  </div>
);

export default IPSec;
