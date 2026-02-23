import React from "react";

const RADIUS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      RADIUS Protocol
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      RADIUS (Remote Authentication Dial-In User Service) is a networking protocol that
      provides centralized Authentication, Authorization, and Accounting (AAA) management
      for users connecting to network services. It is widely used for network access control,
      VPN authentication, and wireless network security.
    </p>

    <h2 className="text-3xl font-bold mt-8">RADIUS Overview</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Protocol</td>
            <td className="p-3 border">UDP (connectionless)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Ports</td>
            <td className="p-3 border">1812 (authentication), 1813 (accounting)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Legacy Ports</td>
            <td className="p-3 border">1645 (authentication), 1646 (accounting)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Security</td>
            <td className="p-3 border">Shared secret, MD5 hashing (weak)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">RFCs</td>
            <td className="p-3 border">RFC 2865 (RADIUS), RFC 2866 (Accounting)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">AAA Framework</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`AAA (AUTHENTICATION, AUTHORIZATION, ACCOUNTING):

AUTHENTICATION - "Who are you?"
├── Verify user identity
├── Methods: Password, Certificate, Token, Biometric
├── EAP methods for enhanced security
└── RADIUS supports multiple auth methods

AUTHORIZATION - "What can you do?"
├── Determine access permissions
├── Assign VLAN, IP address, ACLs
├── Time-based restrictions
└── Attribute-Value pairs define policies

ACCOUNTING - "What did you do?"
├── Track resource usage
├── Session start/stop times
├── Data transferred (bytes in/out)
├── Connection duration
└── Used for billing and auditing

RADIUS COMPONENTS:

┌─────────────────────────────────────────────────────────┐
│                    RADIUS SERVER                        │
│         (FreeRADIUS, Cisco ISE, NPS, etc.)              │
└─────────────────────────────────────────────────────────┘
                          ▲
                          │ RADIUS Protocol
                          │ (UDP 1812/1813)
                          ▼
┌─────────────────────────────────────────────────────────┐
│                  RADIUS CLIENT (NAS)                    │
│    (Access Point, VPN Gateway, Switch, Router)          │
└─────────────────────────────────────────────────────────┘
                          ▲
                          │ User Connection
                          ▼
┌─────────────────────────────────────────────────────────┐
│                    END USER / DEVICE                    │
└─────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RADIUS Authentication Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RADIUS AUTHENTICATION PROCESS:

  User           NAS (Client)         RADIUS Server
    │                 │                      │
    │── Connect ─────►│                      │
    │                 │                      │
    │◄─ Auth Request ─│                      │
    │                 │                      │
    │── Credentials ─►│                      │
    │                 │                      │
    │                 │── Access-Request ───►│
    │                 │   (User-Name,        │
    │                 │    User-Password,    │
    │                 │    NAS-IP, etc.)     │
    │                 │                      │
    │                 │                      │ Verify credentials
    │                 │                      │ Check policies
    │                 │                      │
    │                 │◄── Access-Accept ────│
    │                 │    (or Access-Reject)│
    │                 │    (attributes)      │
    │                 │                      │
    │◄─ Access Granted│                      │
    │   (or Denied)   │                      │

RADIUS PACKET TYPES:
├── Access-Request (1)     - NAS → Server
├── Access-Accept (2)      - Server → NAS (success)
├── Access-Reject (3)      - Server → NAS (failure)
├── Accounting-Request (4) - NAS → Server
├── Accounting-Response (5)- Server → NAS
├── Access-Challenge (11)  - Server → NAS (more info needed)
└── Status-Server (12)     - NAS → Server (keep-alive)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RADIUS vs TACACS+</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">RADIUS</th>
            <th className="p-3 border">TACACS+</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Protocol</td>
            <td className="p-3 border">UDP</td>
            <td className="p-3 border">TCP</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Port</td>
            <td className="p-3 border">1812, 1813</td>
            <td className="p-3 border">49</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Encryption</td>
            <td className="p-3 border">Password only (MD5)</td>
            <td className="p-3 border">Entire packet</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">AAA Separation</td>
            <td className="p-3 border">Combined</td>
            <td className="p-3 border">Separate processes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Best For</td>
            <td className="p-3 border">Network access (Wi-Fi, VPN)</td>
            <td className="p-3 border">Device administration</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Vendor</td>
            <td className="p-3 border">Open standard</td>
            <td className="p-3 border">Cisco proprietary</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">FreeRADIUS Configuration Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# /etc/freeradius/3.0/clients.conf
client wifi_ap {
    ipaddr = 192.168.1.10
    secret = VeryStrongSharedSecret123
    shortname = access_point_1
    nastype = other
}

# /etc/freeradius/3.0/users
# Local user authentication
testuser  Cleartext-Password := "password123"
          Reply-Message = "Welcome %{User-Name}",
          Tunnel-Type = VLAN,
          Tunnel-Medium-Type = IEEE-802,
          Tunnel-Private-Group-Id = 100

# VLAN assignment based on group
DEFAULT   Group == "employees"
          Tunnel-Type = VLAN,
          Tunnel-Medium-Type = IEEE-802,
          Tunnel-Private-Group-Id = 10

DEFAULT   Group == "guests"
          Tunnel-Type = VLAN,
          Tunnel-Medium-Type = IEEE-802,
          Tunnel-Private-Group-Id = 99

# Test RADIUS server
$ radtest testuser password123 localhost 0 testing123`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>RADIUS provides centralized AAA for network access control</li>
        <li>Uses UDP ports 1812 (auth) and 1813 (accounting)</li>
        <li>Only encrypts passwords; consider using RADIUS over TLS (RadSec)</li>
        <li>Shared secrets should be strong and unique per NAS</li>
        <li>TACACS+ is preferred for device administration due to better security</li>
        <li>EAP methods extend RADIUS security for wireless networks</li>
      </ul>
    </div>
  </div>
);

export default RADIUS;
