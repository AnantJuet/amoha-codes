import React from 'react';

const NAT: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      NAT (Network Address Translation)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      NAT is a method of remapping IP addresses by modifying packet headers as they pass through
      a router. It allows multiple devices on a private network to share a single public IP
      address, conserving the limited IPv4 address space and providing a level of security
      by hiding internal network structure.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why NAT?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>IPv4 Conservation:</strong> Private IPs shared via one public IP</li>
      <li><strong>Security:</strong> Hides internal network topology</li>
      <li><strong>Flexibility:</strong> Change ISP without renumbering internal network</li>
      <li><strong>Cost Savings:</strong> Fewer public IPs needed</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">NAT Terminology</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    NAT Address Types:

    Inside Local:    Private IP of internal host
                     (192.168.1.10)

    Inside Global:   Public IP representing internal host
                     (203.0.113.5)

    Outside Local:   How external host appears internally
                     (Usually same as Outside Global)

    Outside Global:  Public IP of external host
                     (8.8.8.8)

    Example Flow:
    Inside Network              NAT Router              Internet
    192.168.1.10  ------>  [192.168.1.10 -> 203.0.113.5]  ------> 8.8.8.8
    (Inside Local)             Translation               (Outside Global)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of NAT</h2>
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
            <td className="p-3 border">Static NAT</td>
            <td className="p-3 border">1:1 mapping, permanent</td>
            <td className="p-3 border">Web servers, mail servers</td>
          </tr>
          <tr>
            <td className="p-3 border">Dynamic NAT</td>
            <td className="p-3 border">Pool of public IPs</td>
            <td className="p-3 border">Multiple servers needing public access</td>
          </tr>
          <tr>
            <td className="p-3 border">PAT/NAPT</td>
            <td className="p-3 border">Many:1 using ports</td>
            <td className="p-3 border">Home/office internet sharing</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">PAT (Port Address Translation)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    PAT / NAT Overload:

    Multiple internal hosts share ONE public IP using port numbers:

    Internal                    NAT Table                    External
    192.168.1.10:5000  --->  203.0.113.5:40001  --->  8.8.8.8:80
    192.168.1.11:5001  --->  203.0.113.5:40002  --->  8.8.8.8:80
    192.168.1.12:5002  --->  203.0.113.5:40003  --->  8.8.4.4:443

    NAT Translation Table:
    +----------------+-------+----------------+-------+
    | Inside Local   | Port  | Inside Global  | Port  |
    +----------------+-------+----------------+-------+
    | 192.168.1.10   | 5000  | 203.0.113.5    | 40001 |
    | 192.168.1.11   | 5001  | 203.0.113.5    | 40002 |
    | 192.168.1.12   | 5002  | 203.0.113.5    | 40003 |
    +----------------+-------+----------------+-------+

    Up to ~65,000 translations per public IP
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">NAT Configuration</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Cisco IOS NAT Configuration:

    ! Define inside/outside interfaces
    interface GigabitEthernet0/0
      ip nat inside
    interface GigabitEthernet0/1
      ip nat outside

    ! Static NAT (1:1)
    ip nat inside source static 192.168.1.10 203.0.113.10

    ! PAT with overload (many:1)
    access-list 1 permit 192.168.1.0 0.0.0.255
    ip nat inside source list 1 interface GigabitEthernet0/1 overload

    ! Dynamic NAT with pool
    ip nat pool MYPOOL 203.0.113.10 203.0.113.20 netmask 255.255.255.0
    ip nat inside source list 1 pool MYPOOL

    Verification:
    Router# show ip nat translations
    Router# show ip nat statistics
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">NAT Limitations</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Technical Issues</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Breaks end-to-end connectivity</li>
          <li>Problems with embedded IPs (FTP, SIP)</li>
          <li>IPsec complications</li>
          <li>Peer-to-peer challenges</li>
          <li>Processing overhead</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Solutions</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Port forwarding for servers</li>
          <li>ALG (Application Layer Gateway)</li>
          <li>NAT-T (NAT Traversal) for VPNs</li>
          <li>STUN/TURN for WebRTC</li>
          <li>IPv6 (no NAT needed)</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Port Forwarding</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Allowing Inbound Connections</h3>
      <p className="text-sm mb-2">
        Static port mapping allows external access to internal servers:
      </p>
      <div className="font-mono text-sm text-gray-900">
        <p>External: 203.0.113.5:80 → Internal: 192.168.1.10:80 (Web)</p>
        <p>External: 203.0.113.5:22 → Internal: 192.168.1.11:22 (SSH)</p>
        <p>External: 203.0.113.5:443 → Internal: 192.168.1.12:443 (HTTPS)</p>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>NAT translates private IPs to public IPs</li>
        <li>PAT uses ports to allow many devices to share one IP</li>
        <li>Static NAT for servers, PAT for outbound clients</li>
        <li>Conserves IPv4 addresses and adds security</li>
        <li>Can break some protocols (FTP, SIP, IPsec)</li>
        <li>IPv6 eliminates need for NAT</li>
      </ul>
    </div>
  </div>
);

export default NAT;
