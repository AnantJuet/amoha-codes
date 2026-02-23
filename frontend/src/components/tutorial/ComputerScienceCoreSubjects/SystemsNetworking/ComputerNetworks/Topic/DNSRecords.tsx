import React from 'react';

const DNSRecords: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      DNS Record Types
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      DNS records are entries in the DNS database that map domain names to various types of
      information. Each record type serves a specific purpose, from basic IP address mapping
      to email routing and security verification.
    </p>

    <h2 className="text-3xl font-bold mt-8">Common DNS Record Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">A</td>
            <td className="p-3 border">Address</td>
            <td className="p-3 border">Maps domain to IPv4 address</td>
          </tr>
          <tr>
            <td className="p-3 border">AAAA</td>
            <td className="p-3 border">IPv6 Address</td>
            <td className="p-3 border">Maps domain to IPv6 address</td>
          </tr>
          <tr>
            <td className="p-3 border">CNAME</td>
            <td className="p-3 border">Canonical Name</td>
            <td className="p-3 border">Alias one domain to another</td>
          </tr>
          <tr>
            <td className="p-3 border">MX</td>
            <td className="p-3 border">Mail Exchange</td>
            <td className="p-3 border">Specifies mail servers</td>
          </tr>
          <tr>
            <td className="p-3 border">NS</td>
            <td className="p-3 border">Name Server</td>
            <td className="p-3 border">Delegates DNS zone</td>
          </tr>
          <tr>
            <td className="p-3 border">TXT</td>
            <td className="p-3 border">Text</td>
            <td className="p-3 border">Arbitrary text data</td>
          </tr>
          <tr>
            <td className="p-3 border">PTR</td>
            <td className="p-3 border">Pointer</td>
            <td className="p-3 border">Reverse DNS lookup</td>
          </tr>
          <tr>
            <td className="p-3 border">SOA</td>
            <td className="p-3 border">Start of Authority</td>
            <td className="p-3 border">Zone metadata</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Record Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    A Record (IPv4 Address):
    example.com.     IN  A     93.184.216.34
    www.example.com. IN  A     93.184.216.34

    AAAA Record (IPv6 Address):
    example.com.     IN  AAAA  2606:2800:220:1:248:1893:25c8:1946

    CNAME Record (Alias):
    www.example.com. IN  CNAME example.com.
    blog.example.com IN  CNAME bloghost.provider.com.

    MX Record (Mail):
    example.com.     IN  MX    10 mail1.example.com.
    example.com.     IN  MX    20 mail2.example.com.
                               ^^ Priority (lower = higher)

    NS Record (Name Server):
    example.com.     IN  NS    ns1.example.com.
    example.com.     IN  NS    ns2.example.com.

    TXT Record (Text):
    example.com.     IN  TXT   "v=spf1 include:_spf.google.com ~all"
    _dmarc.example.com IN TXT  "v=DMARC1; p=reject; rua=..."
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">A Record vs CNAME</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">A Record</th>
            <th className="p-3 border">CNAME</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Points to</td>
            <td className="p-3 border">IP address directly</td>
            <td className="p-3 border">Another domain name</td>
          </tr>
          <tr>
            <td className="p-3 border">At root</td>
            <td className="p-3 border">Allowed</td>
            <td className="p-3 border">Not allowed (usually)</td>
          </tr>
          <tr>
            <td className="p-3 border">With MX</td>
            <td className="p-3 border">Can coexist</td>
            <td className="p-3 border">Cannot coexist</td>
          </tr>
          <tr>
            <td className="p-3 border">Lookup</td>
            <td className="p-3 border">Single lookup</td>
            <td className="p-3 border">Extra lookup needed</td>
          </tr>
          <tr>
            <td className="p-3 border">Use case</td>
            <td className="p-3 border">Direct IP mapping</td>
            <td className="p-3 border">CDN, aliases</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">MX Record Priority</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    MX Records with Priority:

    example.com.  IN  MX  10  mail1.example.com.
    example.com.  IN  MX  10  mail2.example.com.
    example.com.  IN  MX  20  backup-mail.example.com.

    Priority determines order:
    - Lower number = higher priority
    - mail1 and mail2 tried first (same priority = load balance)
    - backup-mail tried only if others fail

    Email delivery flow:
    1. Sender queries MX records for example.com
    2. Gets list: mail1(10), mail2(10), backup(20)
    3. Tries mail1 or mail2 first
    4. If both fail, tries backup-mail
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Security Records</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">SPF (TXT Record)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Sender Policy Framework</li>
          <li>Lists authorized mail servers</li>
          <li>Prevents email spoofing</li>
          <li>v=spf1 include:... ~all</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">DKIM/DMARC (TXT)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Email authentication</li>
          <li>Digital signatures</li>
          <li>Policy enforcement</li>
          <li>Reporting mechanisms</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">SOA Record</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    SOA (Start of Authority) Record:

    example.com. IN SOA ns1.example.com. admin.example.com. (
                        2024011601  ; Serial number
                        7200        ; Refresh (2 hours)
                        3600        ; Retry (1 hour)
                        1209600     ; Expire (2 weeks)
                        86400       ; Minimum TTL (1 day)
    )

    Fields:
    - Primary NS: ns1.example.com
    - Admin email: admin@example.com (@ replaced with .)
    - Serial: Version number (increment on changes)
    - Refresh: How often secondaries check for updates
    - Retry: Retry interval if refresh fails
    - Expire: When secondary stops serving zone
    - Minimum: Default TTL for negative caching
      `}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>A/AAAA: Map domain to IP addresses</li>
        <li>CNAME: Create aliases to other domains</li>
        <li>MX: Route email with priority</li>
        <li>NS: Delegate to name servers</li>
        <li>TXT: SPF, DKIM, verification data</li>
        <li>SOA: Zone authority and timing metadata</li>
      </ul>
    </div>
  </div>
);

export default DNSRecords;
