import React from 'react';

const DNSResolution: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      DNS Resolution Process
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      DNS resolution is the process of translating a domain name into an IP address. This involves
      a series of queries from the client through recursive resolvers to authoritative name servers.
      Understanding this process helps in troubleshooting DNS issues and optimizing network performance.
    </p>

    <h2 className="text-3xl font-bold mt-8">Resolution Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Used By</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Recursive</td>
            <td className="p-3 border">Resolver does all the work</td>
            <td className="p-3 border">Clients to resolvers</td>
          </tr>
          <tr>
            <td className="p-3 border">Iterative</td>
            <td className="p-3 border">Server returns referral or answer</td>
            <td className="p-3 border">Resolvers to name servers</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete DNS Resolution</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    DNS Resolution for www.example.com:

    Client         Recursive       Root        .com TLD    example.com
    (Browser)      Resolver        Server      Server      Authoritative
       |              |              |            |              |
       |-- Query ---->|              |            |              |
       |  "www.example.com?"         |            |              |
       |              |              |            |              |
       |              |-- Query ---->|            |              |
       |              |  "www.example.com?"       |              |
       |              |              |            |              |
       |              |<-- Referral -|            |              |
       |              |  "Ask .com TLD"           |              |
       |              |              |            |              |
       |              |-- Query ----------------->|              |
       |              |  "www.example.com?"       |              |
       |              |              |            |              |
       |              |<-- Referral --------------|              |
       |              |  "Ask ns1.example.com"    |              |
       |              |              |            |              |
       |              |-- Query ------------------------------>|
       |              |  "www.example.com?"                     |
       |              |              |            |              |
       |              |<-- Answer -----------------------------|
       |              |  "93.184.216.34"                        |
       |              |              |            |              |
       |<-- Answer ---|              |            |              |
       |  "93.184.216.34"            |            |              |
       |  (cached)    |              |            |              |
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recursive vs Iterative</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Recursive Query:
    Client asks resolver: "Get me the IP for www.example.com"
    Resolver MUST return the final answer or an error
    Client waits for complete response

    Client --> Resolver: "www.example.com?"
    Resolver does all the work...
    Resolver --> Client: "93.184.216.34"


    Iterative Query:
    Resolver asks server: "www.example.com?"
    Server returns either:
    - The answer (if it knows)
    - A referral to another server

    Resolver --> Root: "www.example.com?"
    Root --> Resolver: "I dont know, ask .com TLD"

    Resolver --> .com TLD: "www.example.com?"
    .com TLD --> Resolver: "Ask ns1.example.com"

    Resolver --> ns1.example.com: "www.example.com?"
    ns1.example.com --> Resolver: "93.184.216.34"
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DNS Caching</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Cache Locations</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Browser cache (minutes)</li>
          <li>OS resolver cache</li>
          <li>Router cache</li>
          <li>ISP recursive resolver</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">TTL (Time To Live)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>How long to cache a record</li>
          <li>Set by authoritative server</li>
          <li>Typical: 300s to 86400s</li>
          <li>Lower = faster propagation</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Resolution Steps</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <ol className="list-decimal list-inside space-y-2">
        <li><strong>Browser cache:</strong> Check if recently resolved</li>
        <li><strong>OS cache:</strong> Check local DNS cache</li>
        <li><strong>Hosts file:</strong> Check /etc/hosts or hosts file</li>
        <li><strong>Recursive resolver:</strong> Query configured DNS server</li>
        <li><strong>Root servers:</strong> Get TLD server referral</li>
        <li><strong>TLD servers:</strong> Get authoritative server referral</li>
        <li><strong>Authoritative server:</strong> Get actual IP address</li>
        <li><strong>Cache result:</strong> Store with TTL for future queries</li>
      </ol>
    </div>

    <h2 className="text-3xl font-bold mt-8">DNS Troubleshooting Tools</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Common DNS commands:

    # nslookup - simple lookup
    $ nslookup www.example.com
    Server:  8.8.8.8
    Address: 8.8.8.8#53

    Name:    www.example.com
    Address: 93.184.216.34

    # dig - detailed DNS query
    $ dig www.example.com

    ;; ANSWER SECTION:
    www.example.com.  86400  IN  A  93.184.216.34

    ;; Query time: 45 msec

    # dig with trace (shows full resolution)
    $ dig +trace www.example.com

    # host - simple reverse/forward lookup
    $ host www.example.com
    www.example.com has address 93.184.216.34

    # Clear DNS cache (Windows)
    > ipconfig /flushdns

    # Clear DNS cache (Linux)
    $ sudo systemd-resolve --flush-caches
      `}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Recursive: resolver does all work for client</li>
        <li>Iterative: servers return referrals</li>
        <li>Resolution: Root, TLD, Authoritative</li>
        <li>Caching at multiple levels reduces load</li>
        <li>TTL controls cache duration</li>
        <li>Use dig/nslookup for troubleshooting</li>
      </ul>
    </div>
  </div>
);

export default DNSResolution;
