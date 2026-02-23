import React from 'react';

const DNS: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      DNS and Domain Resolution
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Domain Name System (DNS) is a hierarchical and distributed naming system that translates
      human-readable domain names (like www.example.com) into IP addresses (like 192.168.1.1) that
      computers use to identify each other on the network. DNS is often called the "phonebook of
      the internet."
    </p>

    <h2 className="text-2xl font-bold mt-6">Why DNS is Important</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Humans can remember domain names easier than IP addresses</li>
      <li>IP addresses can change while domain names stay the same</li>
      <li>Enables load balancing by returning different IPs for the same domain</li>
      <li>Supports failover by pointing to backup servers</li>
      <li>Critical for email routing (MX records)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">DNS Resolution Process</h2>
    <p className="leading-relaxed">
      When you type a URL in your browser, the following steps occur to resolve the domain name:
    </p>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <ol className="list-decimal list-inside space-y-3">
        <li><strong>Browser Cache:</strong> Browser checks its local cache for the IP address</li>
        <li><strong>OS Cache:</strong> If not found, the OS checks its DNS cache</li>
        <li><strong>Resolver (ISP):</strong> Query is sent to the recursive resolver (usually ISP's DNS server)</li>
        <li><strong>Root Server:</strong> Resolver queries a root DNS server for TLD information</li>
        <li><strong>TLD Server:</strong> Root server directs to the Top-Level Domain server (.com, .org, etc.)</li>
        <li><strong>Authoritative Server:</strong> TLD server points to the domain's authoritative name server</li>
        <li><strong>IP Address Returned:</strong> The authoritative server returns the IP address</li>
        <li><strong>Caching:</strong> The IP is cached at various levels for future requests</li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold mt-6">DNS Hierarchy</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`                    . (Root)
                       |
    +--------+---------+---------+--------+
    |        |         |         |        |
  .com     .org      .net      .edu     .io
    |
    +--------+---------+
    |        |         |
 google   amazon   example
    |
    +--------+---------+
    |        |         |
  www     mail      api

Full domain: www.google.com.
(Note: The trailing dot represents the root)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">DNS Record Types</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">A Record</h4>
        <p className="mt-2 text-sm">Maps a domain to an IPv4 address</p>
        <code className="text-xs mt-1 block">example.com. A 192.168.1.1</code>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">AAAA Record</h4>
        <p className="mt-2 text-sm">Maps a domain to an IPv6 address</p>
        <code className="text-xs mt-1 block">example.com. AAAA 2001:db8::1</code>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">CNAME Record</h4>
        <p className="mt-2 text-sm">Alias that points to another domain name</p>
        <code className="text-xs mt-1 block">www.example.com. CNAME example.com.</code>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
        <h4 className="font-bold text-orange-800">MX Record</h4>
        <p className="mt-2 text-sm">Specifies mail servers for the domain</p>
        <code className="text-xs mt-1 block">example.com. MX 10 mail.example.com.</code>
      </div>
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">NS Record</h4>
        <p className="mt-2 text-sm">Specifies authoritative name servers</p>
        <code className="text-xs mt-1 block">example.com. NS ns1.example.com.</code>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
        <h4 className="font-bold text-yellow-800">TXT Record</h4>
        <p className="mt-2 text-sm">Holds arbitrary text (SPF, DKIM, verification)</p>
        <code className="text-xs mt-1 block">example.com. TXT "v=spf1 include:_spf.google.com"</code>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Time to Live (TTL)</h2>
    <p className="leading-relaxed">
      TTL is the duration (in seconds) that a DNS record is cached. Lower TTL values mean faster
      propagation of changes but more DNS queries. Higher TTL values reduce DNS queries but delay
      propagation of changes.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Low TTL (60-300s)</h4>
        <p className="mt-2 text-sm">For frequently changing records or during migrations</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Medium TTL (3600s)</h4>
        <p className="mt-2 text-sm">Common default for most records</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">High TTL (86400s+)</h4>
        <p className="mt-2 text-sm">For stable records that rarely change</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">DNS in System Design</h2>

    <h3 className="text-xl font-semibold mt-4">Load Balancing with DNS</h3>
    <p className="leading-relaxed">
      DNS can distribute traffic across multiple servers by returning different IP addresses
      for the same domain name.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Round Robin:</strong> Rotate through a list of IP addresses</li>
        <li><strong>Weighted:</strong> Direct more traffic to certain servers</li>
        <li><strong>Geolocation:</strong> Return IP based on client's location</li>
        <li><strong>Latency-based:</strong> Return the server with lowest latency</li>
      </ul>
    </div>

    <h3 className="text-xl font-semibold mt-4">DNS Failover</h3>
    <p className="leading-relaxed">
      Health checks can monitor server availability and automatically update DNS records to
      remove unhealthy servers from rotation.
    </p>

    <h3 className="text-xl font-semibold mt-4">CDN Integration</h3>
    <p className="leading-relaxed">
      CDNs use DNS to direct users to the nearest edge server. When you use a CDN, your
      domain's CNAME points to the CDN's domain, which resolves to the optimal edge location.
    </p>

    <h2 className="text-2xl font-bold mt-6">DNS Security Considerations</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">Security Threats</h4>
        <ul className="mt-2 text-sm space-y-1">
          <li>DNS Spoofing/Cache Poisoning</li>
          <li>DDoS attacks on DNS servers</li>
          <li>DNS Hijacking</li>
          <li>Domain Takeover</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Security Measures</h4>
        <ul className="mt-2 text-sm space-y-1">
          <li>DNSSEC (DNS Security Extensions)</li>
          <li>DNS over HTTPS (DoH)</li>
          <li>DNS over TLS (DoT)</li>
          <li>Rate limiting</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common DNS Providers</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Amazon Route 53:</strong> AWS's scalable DNS with health checks and routing policies</li>
      <li><strong>Cloudflare DNS:</strong> Fast, free DNS with DDoS protection</li>
      <li><strong>Google Cloud DNS:</strong> Reliable, low-latency DNS hosting</li>
      <li><strong>Azure DNS:</strong> Microsoft's cloud DNS service</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">DNS Troubleshooting Commands</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`# Query A record
nslookup example.com

# Query specific record type
dig example.com MX

# Query with specific DNS server
dig @8.8.8.8 example.com

# Trace the full resolution path
dig +trace example.com

# Check DNS propagation
dig example.com @ns1.provider.com
dig example.com @ns2.provider.com`}</pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>System Design Tip:</strong> When designing distributed systems, consider DNS
        propagation delays (which can take up to 48 hours globally). Plan for gradual rollouts
        and use low TTLs before making critical DNS changes.
      </p>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
      <p className="text-blue-700">
        <strong>Interview Tip:</strong> Understand how DNS fits into the broader picture of
        how a request travels from a user's browser to your server. DNS resolution is often
        the first step when a user types a URL.
      </p>
    </div>
  </div>
);

export default DNS;
