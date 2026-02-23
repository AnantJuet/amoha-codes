import React from "react";

const DNSSEC: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      DNSSEC (DNS Security Extensions)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      DNSSEC is a suite of extensions to DNS that provides authentication and integrity
      verification of DNS responses. It uses digital signatures to protect against
      DNS spoofing and cache poisoning attacks, ensuring users reach legitimate websites
      rather than malicious imposters.
    </p>

    <h2 className="text-3xl font-bold mt-8">DNS Vulnerabilities</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Attack</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">DNSSEC Protection</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Cache Poisoning</td>
            <td className="p-3 border">Inject false records into resolver cache</td>
            <td className="p-3 border">Yes - signature validation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DNS Spoofing</td>
            <td className="p-3 border">Forge DNS responses</td>
            <td className="p-3 border">Yes - origin authentication</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Man-in-the-Middle</td>
            <td className="p-3 border">Intercept and modify DNS traffic</td>
            <td className="p-3 border">Yes - integrity checking</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Zone Transfer Attack</td>
            <td className="p-3 border">Unauthorized zone data access</td>
            <td className="p-3 border">No - use TSIG</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DDoS Amplification</td>
            <td className="p-3 border">Use DNS for reflection attacks</td>
            <td className="p-3 border">No - use RRL</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">DNSSEC Components</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DNSSEC RESOURCE RECORDS:

DNSKEY (DNS Public Key)
├── Contains zone's public key
├── Used to verify RRSIG signatures
├── Two types:
│   ├── ZSK (Zone Signing Key) - signs zone data
│   └── KSK (Key Signing Key) - signs DNSKEY RRset
└── Published in zone file

RRSIG (Resource Record Signature)
├── Digital signature for RRsets
├── Created using private key (ZSK)
├── Contains signature and metadata:
│   ├── Algorithm used
│   ├── Expiration/inception times
│   ├── Key tag
│   └── Signer's name
└── Attached to each RRset

DS (Delegation Signer)
├── Hash of child zone's KSK
├── Published in parent zone
├── Creates chain of trust to root
└── Links parent and child zones

NSEC / NSEC3 (Next Secure)
├── Proves non-existence of records
├── NSEC: Lists next domain name
├── NSEC3: Hashed names (privacy)
└── Prevents zone enumeration (NSEC3)

CHAIN OF TRUST:
┌─────────────────────────────────────────────────────────┐
│ ROOT ZONE (.)                                           │
│ └── KSK signs DNSKEY → publishes DS for .com            │
├─────────────────────────────────────────────────────────┤
│ TLD ZONE (.com)                                         │
│ └── KSK signs DNSKEY → publishes DS for example.com     │
├─────────────────────────────────────────────────────────┤
│ DOMAIN ZONE (example.com)                               │
│ └── ZSK signs all records (A, MX, etc.)                 │
└─────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DNSSEC Validation Process</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DNSSEC QUERY RESOLUTION:

1. Client queries resolver for example.com A record
2. Resolver queries root servers
3. Root returns referral to .com + DS record
4. Resolver queries .com nameservers
5. .com returns referral to example.com + DS record
6. Resolver queries example.com nameservers
7. example.com returns:
   - A record for example.com
   - RRSIG (signature) for A record
   - DNSKEY records

VALIDATION STEPS:
┌────────────────────────────────────────────────────────┐
│ 1. Verify RRSIG signature using DNSKEY (ZSK)           │
│    - Check signature validity                          │
│    - Check expiration times                            │
├────────────────────────────────────────────────────────┤
│ 2. Verify DNSKEY using DS from parent zone             │
│    - Hash DNSKEY (KSK)                                 │
│    - Compare with DS record                            │
├────────────────────────────────────────────────────────┤
│ 3. Follow chain of trust to root                       │
│    - Each level validates the next                     │
│    - Root trust anchor is pre-configured               │
├────────────────────────────────────────────────────────┤
│ 4. If all validations pass → response is SECURE        │
│    If validation fails → response is BOGUS             │
│    If no DNSSEC → response is INSECURE                 │
└────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DNSSEC Configuration Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Generate DNSSEC keys
$ dnssec-keygen -a ECDSAP256SHA256 -n ZONE example.com  # ZSK
$ dnssec-keygen -a ECDSAP256SHA256 -n ZONE -f KSK example.com  # KSK

# Sign the zone
$ dnssec-signzone -A -3 $(head -c 1000 /dev/random | sha1sum | cut -b 1-16) \
    -N INCREMENT -o example.com -t example.com.zone

# BIND configuration for DNSSEC validation
options {
    dnssec-validation auto;
    # Or specify trust anchor manually:
    # dnssec-validation yes;
};

# Check DNSSEC status
$ dig example.com +dnssec
;; flags: qr rd ra ad;  # 'ad' = Authenticated Data

$ dig example.com DNSKEY +short
$ dig example.com DS +short

# Verify DNSSEC chain
$ delv @8.8.8.8 example.com
; fully validated

# Online tools for DNSSEC testing
# - https://dnssec-analyzer.verisignlabs.com
# - https://dnsviz.net`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Management</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Key Type</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Typical Lifetime</th>
            <th className="p-3 border">Size (bits)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">ZSK (Zone Signing Key)</td>
            <td className="p-3 border">Signs zone records</td>
            <td className="p-3 border">1-3 months</td>
            <td className="p-3 border">ECDSA P-256 or RSA 1024-2048</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">KSK (Key Signing Key)</td>
            <td className="p-3 border">Signs DNSKEY RRset</td>
            <td className="p-3 border">1-2 years</td>
            <td className="p-3 border">ECDSA P-256 or RSA 2048-4096</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>DNSSEC provides authentication and integrity, not confidentiality</li>
        <li>Chain of trust starts from the root zone trust anchor</li>
        <li>ZSK signs zone data; KSK signs the DNSKEY record</li>
        <li>DS records link parent and child zones</li>
        <li>NSEC3 prevents zone enumeration (walking)</li>
        <li>Key rollover must be planned carefully to avoid service disruption</li>
      </ul>
    </div>
  </div>
);

export default DNSSEC;
