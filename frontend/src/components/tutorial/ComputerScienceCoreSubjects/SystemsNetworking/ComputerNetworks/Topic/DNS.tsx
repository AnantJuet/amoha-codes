import React from 'react';

const DNS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      DNS (Domain Name System)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Domain Name System (DNS) is the internets phonebook, translating human-readable
      domain names (like www.example.com) into IP addresses that computers use to identify
      each other. DNS is a hierarchical, distributed database system that enables scalable
      name resolution worldwide.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why DNS?</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Human-friendly:</strong> Remember names, not numbers (192.168.1.1)</li>
        <li><strong>Flexibility:</strong> IP addresses can change without updating bookmarks</li>
        <li><strong>Load balancing:</strong> One domain can resolve to multiple IPs</li>
        <li><strong>Redundancy:</strong> Multiple servers for fault tolerance</li>
        <li><strong>Scalability:</strong> Distributed system handles billions of queries</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">DNS Hierarchy</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    DNS Namespace Hierarchy:

                        . (Root)
                        |
         +--------------+--------------+
         |              |              |
        com            org            net     <- TLDs
         |              |              |
    +----+----+    +----+----+    +---+---+
    |         |    |         |    |       |
  google   amazon  wikipedia  gnu  cisco   <- Second-level domains
    |         |
  +---+      +---+
  |   |      |   |
 www mail   www  aws            <- Subdomains

    Full Domain Name (FQDN):
    www.google.com.
         ^     ^  ^
         |     |  |
    Subdomain  |  Root (implicit)
           Domain
               TLD

    Read right to left:
    . -> com -> google -> www
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DNS Components</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Role</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Root Servers</td>
            <td className="p-3 border">Top of hierarchy, direct to TLDs</td>
            <td className="p-3 border">13 root server clusters (a-m)</td>
          </tr>
          <tr>
            <td className="p-3 border">TLD Servers</td>
            <td className="p-3 border">Manage top-level domains</td>
            <td className="p-3 border">.com, .org, .net, .edu</td>
          </tr>
          <tr>
            <td className="p-3 border">Authoritative Servers</td>
            <td className="p-3 border">Hold actual DNS records</td>
            <td className="p-3 border">ns1.google.com</td>
          </tr>
          <tr>
            <td className="p-3 border">Recursive Resolvers</td>
            <td className="p-3 border">Query on behalf of clients</td>
            <td className="p-3 border">ISP DNS, 8.8.8.8</td>
          </tr>
          <tr>
            <td className="p-3 border">DNS Clients</td>
            <td className="p-3 border">Initiate DNS queries</td>
            <td className="p-3 border">Your computer, phone</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">DNS Protocol Details</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Transport</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Port 53</li>
          <li>UDP for queries (fast)</li>
          <li>TCP for zone transfers</li>
          <li>TCP if response larger than 512 bytes</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Message Format</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Header (12 bytes)</li>
          <li>Question section</li>
          <li>Answer section</li>
          <li>Authority section</li>
          <li>Additional section</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Top-Level Domains (TLDs)</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Examples</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">gTLD (Generic)</td>
            <td className="p-3 border">.com, .org, .net</td>
            <td className="p-3 border">General use</td>
          </tr>
          <tr>
            <td className="p-3 border">ccTLD (Country)</td>
            <td className="p-3 border">.us, .uk, .jp, .in</td>
            <td className="p-3 border">Country-specific</td>
          </tr>
          <tr>
            <td className="p-3 border">sTLD (Sponsored)</td>
            <td className="p-3 border">.edu, .gov, .mil</td>
            <td className="p-3 border">Restricted use</td>
          </tr>
          <tr>
            <td className="p-3 border">New gTLDs</td>
            <td className="p-3 border">.app, .dev, .cloud</td>
            <td className="p-3 border">Industry-specific</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>DNS translates domain names to IP addresses</li>
        <li>Hierarchical structure: Root, TLD, Domain, Subdomain</li>
        <li>Distributed database for scalability</li>
        <li>Uses UDP port 53 for queries</li>
        <li>Caching improves performance</li>
        <li>Critical internet infrastructure</li>
      </ul>
    </div>
  </div>
);

export default DNS;
