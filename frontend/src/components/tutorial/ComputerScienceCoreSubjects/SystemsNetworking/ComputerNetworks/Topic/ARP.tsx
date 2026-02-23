import React from 'react';

const ARP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      ARP (Address Resolution Protocol)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      ARP is a protocol used to map IP addresses (Layer 3) to MAC addresses (Layer 2) in a
      local network. When a device wants to communicate with another device on the same network,
      it needs the destination's MAC address to create the Ethernet frame. ARP provides this
      mapping dynamically.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why ARP is Needed</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    The Address Resolution Problem:

    Application: "Send data to 192.168.1.10"
                        |
                        v
    Network Layer: IP packet with dest = 192.168.1.10
                        |
                        v
    Data Link Layer: Needs MAC address to create frame!
                        |
                        v
    Question: What is the MAC address of 192.168.1.10?
                        |
                        v
    Answer: Use ARP to find out!
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ARP Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    ARP Request/Reply Process:

    Host A (192.168.1.5)                    Host B (192.168.1.10)
    MAC: AA:AA:AA:AA:AA:AA                  MAC: BB:BB:BB:BB:BB:BB
          |                                       |
          |-- ARP Request (Broadcast) ----------->|
          |   "Who has 192.168.1.10?              |
          |    Tell 192.168.1.5"                  |
          |                                       |
          |<---------- ARP Reply (Unicast) -------|
          |   "192.168.1.10 is at                 |
          |    BB:BB:BB:BB:BB:BB"                 |
          |                                       |
    [Updates ARP Cache]                           |
          |                                       |
          |======= Data Frame ===================>|
          | Dest MAC: BB:BB:BB:BB:BB:BB           |
          | Src MAC: AA:AA:AA:AA:AA:AA            |
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ARP Packet Format</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Field</th>
            <th className="p-3 border">Size</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Hardware Type</td>
            <td className="p-3 border">2 bytes</td>
            <td className="p-3 border">1 for Ethernet</td>
          </tr>
          <tr>
            <td className="p-3 border">Protocol Type</td>
            <td className="p-3 border">2 bytes</td>
            <td className="p-3 border">0x0800 for IPv4</td>
          </tr>
          <tr>
            <td className="p-3 border">Hardware Size</td>
            <td className="p-3 border">1 byte</td>
            <td className="p-3 border">6 for MAC address</td>
          </tr>
          <tr>
            <td className="p-3 border">Protocol Size</td>
            <td className="p-3 border">1 byte</td>
            <td className="p-3 border">4 for IPv4 address</td>
          </tr>
          <tr>
            <td className="p-3 border">Opcode</td>
            <td className="p-3 border">2 bytes</td>
            <td className="p-3 border">1=Request, 2=Reply</td>
          </tr>
          <tr>
            <td className="p-3 border">Sender MAC</td>
            <td className="p-3 border">6 bytes</td>
            <td className="p-3 border">Sender's hardware address</td>
          </tr>
          <tr>
            <td className="p-3 border">Sender IP</td>
            <td className="p-3 border">4 bytes</td>
            <td className="p-3 border">Sender's protocol address</td>
          </tr>
          <tr>
            <td className="p-3 border">Target MAC</td>
            <td className="p-3 border">6 bytes</td>
            <td className="p-3 border">Target's hardware address</td>
          </tr>
          <tr>
            <td className="p-3 border">Target IP</td>
            <td className="p-3 border">4 bytes</td>
            <td className="p-3 border">Target's protocol address</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">ARP Cache</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">ARP Cache (ARP Table)</h3>
      <p className="text-sm mb-2">Stores IP-to-MAC mappings to avoid repeated ARP requests:</p>
      <div className="font-mono text-sm text-gray-900 bg-gray-100 text-gray-900 p-3 rounded">
        <pre className="text-gray-900">{`
    $ arp -a
    Internet Address    Physical Address    Type
    192.168.1.1         AA-BB-CC-DD-EE-FF   dynamic
    192.168.1.10        BB-BB-BB-BB-BB-BB   dynamic
    192.168.1.254       CC-CC-CC-CC-CC-CC   static
        `}</pre>
      </div>
      <ul className="list-disc list-inside text-sm mt-2 space-y-1">
        <li><strong>Dynamic entries:</strong> Learned via ARP, expire after timeout</li>
        <li><strong>Static entries:</strong> Manually configured, permanent</li>
        <li><strong>Timeout:</strong> Typically 2-20 minutes</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">ARP Types</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Standard ARP</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Request: Broadcast</li>
          <li>Reply: Unicast</li>
          <li>Resolves IP to MAC</li>
          <li>Used for local communication</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Proxy ARP</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Router answers ARP for remote host</li>
          <li>Provides its own MAC</li>
          <li>Forwards packets to actual host</li>
          <li>Hides subnetting from hosts</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Gratuitous ARP</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Host announces its own IP/MAC</li>
          <li>Used for duplicate detection</li>
          <li>Updates other ARP caches</li>
          <li>Sent during interface up</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Reverse ARP (RARP)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Maps MAC to IP</li>
          <li>Diskless workstations</li>
          <li>Obsolete (replaced by DHCP)</li>
          <li>Requires RARP server</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">ARP Security Issues</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">ARP Spoofing/Poisoning</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Attacker sends fake ARP replies</li>
        <li>Associates attacker's MAC with victim's IP</li>
        <li>Enables man-in-the-middle attacks</li>
        <li><strong>Defenses:</strong> Static ARP, Dynamic ARP Inspection, 802.1X</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>ARP maps IP addresses to MAC addresses</li>
        <li>ARP Request is broadcast; ARP Reply is unicast</li>
        <li>ARP cache stores mappings to reduce traffic</li>
        <li>Works only within same broadcast domain</li>
        <li>For remote hosts, ARP resolves gateway MAC</li>
        <li>Vulnerable to spoofing attacks</li>
      </ul>
    </div>
  </div>
);

export default ARP;
