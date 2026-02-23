import React from "react";

const DNS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Domain Name System (DNS)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Domain Name System (DNS) is the hierarchical, distributed naming system used
      to translate human-readable domain names into IP addresses. DNS is one of the most
      critical infrastructure components of the Internet, handling billions of queries
      daily and enabling users to access websites using memorable names instead of
      numeric addresses.
    </p>

    <h2 className="text-3xl font-bold mt-8">DNS Architecture</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DNS Hierarchical Structure:

                         ┌─────────────────┐
                         │   Root Zone     │
                         │      "."        │
                         └────────┬────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         │                        │                        │
    ┌────▼────┐             ┌─────▼────┐             ┌─────▼────┐
    │  .com   │             │   .org   │             │  .edu    │
    │  TLD    │             │   TLD    │             │  TLD     │
    └────┬────┘             └──────────┘             └──────────┘
         │
    ┌────┴────────────────────────┐
    │                             │
┌───▼────────┐             ┌──────▼─────┐
│  example   │             │   google   │
│   .com     │             │    .com    │
└────┬───────┘             └────────────┘
     │
┌────┴────────────────────────────┐
│                │                │
┌──▼───┐    ┌────▼────┐     ┌─────▼────┐
│ www  │    │  mail   │     │   ftp    │
└──────┘    └─────────┘     └──────────┘

Domain Name: www.example.com
- Root: .
- TLD: com
- Second-level: example
- Subdomain: www`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DNS Components</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Function</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Root Servers</td>
            <td className="p-3 border">13 root server clusters (A-M)</td>
            <td className="p-3 border">Direct queries to TLD servers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">TLD Servers</td>
            <td className="p-3 border">Manage top-level domains</td>
            <td className="p-3 border">Direct to authoritative servers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Authoritative Servers</td>
            <td className="p-3 border">Hold actual DNS records</td>
            <td className="p-3 border">Provide definitive answers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Recursive Resolvers</td>
            <td className="p-3 border">ISP or public DNS servers</td>
            <td className="p-3 border">Perform lookups for clients</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Stub Resolvers</td>
            <td className="p-3 border">Client-side DNS library</td>
            <td className="p-3 border">Forward queries to recursive resolver</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">DNS Record Types</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">A</td>
            <td className="p-3 border">Address</td>
            <td className="p-3 border">Maps name to IPv4 address</td>
            <td className="p-3 border">www.example.com = 93.184.216.34</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">AAAA</td>
            <td className="p-3 border">IPv6 Address</td>
            <td className="p-3 border">Maps name to IPv6 address</td>
            <td className="p-3 border">www = 2606:2800:220:1::248</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">CNAME</td>
            <td className="p-3 border">Canonical Name</td>
            <td className="p-3 border">Alias to another domain</td>
            <td className="p-3 border">www = example.com</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">MX</td>
            <td className="p-3 border">Mail Exchange</td>
            <td className="p-3 border">Email server for domain</td>
            <td className="p-3 border">10 mail.example.com</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">NS</td>
            <td className="p-3 border">Name Server</td>
            <td className="p-3 border">Authoritative servers for zone</td>
            <td className="p-3 border">ns1.example.com</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">TXT</td>
            <td className="p-3 border">Text</td>
            <td className="p-3 border">Arbitrary text data</td>
            <td className="p-3 border">SPF, DKIM records</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SOA</td>
            <td className="p-3 border">Start of Authority</td>
            <td className="p-3 border">Zone metadata and parameters</td>
            <td className="p-3 border">Primary NS, refresh times</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">PTR</td>
            <td className="p-3 border">Pointer</td>
            <td className="p-3 border">Reverse DNS lookup</td>
            <td className="p-3 border">34.216.184.93 = www.example.com</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SRV</td>
            <td className="p-3 border">Service</td>
            <td className="p-3 border">Service location</td>
            <td className="p-3 border">_ldap._tcp.example.com</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">DNS Resolution Process</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DNS Resolution for www.example.com:

┌──────────────┐
│    Client    │
│ (Browser)    │
└──────┬───────┘
       │ (1) Query: www.example.com
       ▼
┌──────────────┐
│    Stub      │ Check /etc/hosts, local cache
│  Resolver    │
└──────┬───────┘
       │ (2) Forward query
       ▼
┌──────────────┐
│  Recursive   │ Check cache → miss
│  Resolver    │
└──────┬───────┘
       │ (3) Query root server
       ▼
┌──────────────┐
│    Root      │ "I don't know, but .com is at X"
│   Server     │
└──────────────┘
       │ (4) Query .com TLD server
       ▼
┌──────────────┐
│   .com TLD   │ "I don't know, but example.com NS is at Y"
│   Server     │
└──────────────┘
       │ (5) Query example.com authoritative server
       ▼
┌──────────────┐
│ example.com  │ "www.example.com A 93.184.216.34"
│ Authoritative│
└──────────────┘
       │ (6) Return answer (cache it)
       ▼
┌──────────────┐
│  Recursive   │ Cache answer, return to client
│  Resolver    │
└──────┬───────┘
       │ (7) Return IP address
       ▼
┌──────────────┐
│    Client    │ Connect to 93.184.216.34
└──────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Zone and Zone Files</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Zone File Example (example.com):

$TTL 86400      ; Default TTL (24 hours)
$ORIGIN example.com.

; SOA Record - Start of Authority
@   IN  SOA   ns1.example.com. admin.example.com. (
                2026011601  ; Serial (YYYYMMDDnn)
                3600        ; Refresh (1 hour)
                1800        ; Retry (30 min)
                1209600     ; Expire (2 weeks)
                86400       ; Minimum TTL
              )

; Name Server Records
@           IN  NS      ns1.example.com.
@           IN  NS      ns2.example.com.

; Mail Server Records
@           IN  MX  10  mail.example.com.
@           IN  MX  20  mail-backup.example.com.

; Address Records
@           IN  A       93.184.216.34
www         IN  A       93.184.216.34
mail        IN  A       93.184.216.35
ns1         IN  A       93.184.216.36
ns2         IN  A       93.184.216.37

; CNAME Records
ftp         IN  CNAME   www.example.com.
blog        IN  CNAME   www.example.com.

; TXT Records
@           IN  TXT     "v=spf1 mx -all"

Zone vs Domain:
- Domain: The entire subtree (example.com and all subdomains)
- Zone: Administrative unit, may be a subset of domain`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DNS Caching</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Caching Locations</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Browser cache (shortest TTL)</li>
          <li>Operating system resolver cache</li>
          <li>Local DNS server cache</li>
          <li>ISP recursive resolver cache</li>
          <li>Authoritative server may cache too</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">TTL (Time-To-Live)</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Controls how long records are cached</li>
          <li>Shorter TTL = faster updates, more queries</li>
          <li>Longer TTL = fewer queries, slower updates</li>
          <li>Typical values: 300s to 86400s</li>
          <li>Can be record-specific</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">DNS Security (DNSSEC)</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DNSSEC Chain of Trust:

┌─────────────────────────────────────────────────────────────┐
│                    ROOT ZONE                                 │
│  KSK (Key Signing Key) - Signs ZSK                          │
│  ZSK (Zone Signing Key) - Signs records                     │
│  DS (Delegation Signer) - Points to child's KSK            │
└────────────────────────────┬────────────────────────────────┘
                             │ DS record for .com
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                    .COM TLD                                  │
│  KSK signed by parent's ZSK                                 │
│  ZSK signs all records                                      │
│  DS record for example.com                                  │
└────────────────────────────┬────────────────────────────────┘
                             │ DS record for example.com
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                 EXAMPLE.COM                                  │
│  KSK verified by parent's DS                                │
│  ZSK signs all zone records                                 │
│  RRSIG: Signatures on resource record sets                  │
└─────────────────────────────────────────────────────────────┘

New Record Types:
- DNSKEY: Public keys for zone signing
- RRSIG: Signature over a resource record set
- NSEC/NSEC3: Authenticated denial of existence
- DS: Delegation signer (hash of child's KSK)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DNS Attacks and Mitigation</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Attack</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Mitigation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Cache Poisoning</td>
            <td className="p-3 border">Inject false records into cache</td>
            <td className="p-3 border">DNSSEC, source port randomization</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DDoS Amplification</td>
            <td className="p-3 border">Use DNS to amplify attack traffic</td>
            <td className="p-3 border">Rate limiting, response size limits</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DNS Hijacking</td>
            <td className="p-3 border">Redirect queries to malicious server</td>
            <td className="p-3 border">DoH/DoT, DNSSEC</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DNS Tunneling</td>
            <td className="p-3 border">Encode data in DNS queries</td>
            <td className="p-3 border">DNS monitoring, filtering</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Modern DNS Protocols</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">DNS over HTTPS (DoH)</h3>
        <p className="leading-relaxed text-sm">
          Encrypts DNS queries in HTTPS. Prevents eavesdropping and manipulation.
          Uses port 443, hard to block.
        </p>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">DNS over TLS (DoT)</h3>
        <p className="leading-relaxed text-sm">
          Encrypts DNS using TLS on port 853. Dedicated port makes it easier to
          monitor/block if needed.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">DNS over QUIC (DoQ)</h3>
        <p className="leading-relaxed text-sm">
          Uses QUIC protocol for faster, encrypted DNS. Reduces connection
          establishment latency.
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">DNS Tools</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common DNS Commands:

# Basic lookup
$ nslookup www.example.com
$ dig www.example.com

# Query specific record type
$ dig example.com MX
$ dig example.com NS
$ dig example.com TXT

# Query specific server
$ dig @8.8.8.8 www.example.com

# Trace resolution path
$ dig +trace www.example.com

# Reverse lookup
$ dig -x 93.184.216.34

# Show all records
$ dig example.com ANY

# Check DNSSEC
$ dig +dnssec example.com`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>DNS translates domain names to IP addresses using hierarchical structure</li>
        <li>Resolution involves root servers, TLD servers, and authoritative servers</li>
        <li>Common record types: A (IPv4), AAAA (IPv6), CNAME, MX, NS, TXT</li>
        <li>Caching reduces load and latency; TTL controls cache duration</li>
        <li>Zones are administrative units with SOA records defining parameters</li>
        <li>DNSSEC provides authentication and integrity using digital signatures</li>
        <li>DoH and DoT encrypt DNS queries for privacy</li>
        <li>13 root server addresses are distributed using anycast globally</li>
      </ul>
    </div>
  </div>
);

export default DNS;
