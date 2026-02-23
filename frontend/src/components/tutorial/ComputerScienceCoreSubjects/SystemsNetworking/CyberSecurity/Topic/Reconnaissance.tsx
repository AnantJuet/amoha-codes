import React from "react";

const Reconnaissance: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Reconnaissance
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Reconnaissance (or recon) is the first phase of penetration testing where information
      about the target is gathered. This intelligence helps identify attack vectors and
      plan subsequent phases. Reconnaissance is divided into passive and active techniques.
    </p>

    <h2 className="text-3xl font-bold mt-8">Passive vs Active Reconnaissance</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Passive Recon</th>
            <th className="p-3 border">Active Recon</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Definition</td>
            <td className="p-3 border">No direct interaction with target</td>
            <td className="p-3 border">Direct interaction with target</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Detection Risk</td>
            <td className="p-3 border">Very low (undetectable)</td>
            <td className="p-3 border">Higher (may trigger alerts)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Sources</td>
            <td className="p-3 border">Public information, OSINT</td>
            <td className="p-3 border">Target systems directly</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Examples</td>
            <td className="p-3 border">WHOIS, social media, DNS records</td>
            <td className="p-3 border">Port scanning, banner grabbing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Authorization</td>
            <td className="p-3 border">Often not required</td>
            <td className="p-3 border">Required before testing</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">OSINT Techniques</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`OPEN SOURCE INTELLIGENCE (OSINT) SOURCES:

DOMAIN INFORMATION:
├── WHOIS lookups (registrant, dates, nameservers)
├── DNS records (A, MX, NS, TXT, CNAME)
├── Subdomain enumeration
├── Certificate transparency logs
└── Historical DNS (SecurityTrails, DNSdumpster)

ORGANIZATION INFO:
├── Company website
├── Press releases
├── SEC filings (for public companies)
├── Job postings (reveal technologies used)
└── LinkedIn employee profiles

TECHNICAL FOOTPRINT:
├── Shodan (internet-connected devices)
├── Censys (SSL certificates, services)
├── BuiltWith (technology stack)
├── Wayback Machine (historical content)
└── GitHub (leaked credentials, code)

SOCIAL MEDIA:
├── Twitter/X (company and employees)
├── LinkedIn (organizational structure)
├── Facebook (company pages)
└── Instagram (office photos, badges)

EMAIL HARVESTING:
├── theHarvester
├── Hunter.io
├── Clearbit
└── Email format patterns`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Reconnaissance Tools</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# DNS Enumeration
$ whois example.com
$ dig example.com ANY
$ nslookup -type=any example.com
$ host -a example.com

# Subdomain Discovery
$ subfinder -d example.com
$ amass enum -d example.com
$ dnsrecon -d example.com

# Email Harvesting
$ theHarvester -d example.com -b all

# Technology Detection
$ whatweb https://example.com
$ wappalyzer https://example.com

# Certificate Transparency
$ curl "https://crt.sh/?q=%25.example.com&output=json"

# Google Dorking
site:example.com filetype:pdf
site:example.com inurl:admin
site:example.com intitle:"index of"
site:example.com ext:sql | ext:db | ext:log

# Shodan Queries
hostname:example.com
org:"Company Name"
ssl.cert.subject.cn:example.com`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Information Categories</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Information Types</th>
            <th className="p-3 border">Use in Attack</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Network</td>
            <td className="p-3 border">IP ranges, domains, DNS, ASN</td>
            <td className="p-3 border">Target identification, scanning scope</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Technology</td>
            <td className="p-3 border">OS, web servers, frameworks, CMS</td>
            <td className="p-3 border">Known vulnerability research</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Organizational</td>
            <td className="p-3 border">Structure, departments, locations</td>
            <td className="p-3 border">Social engineering, phishing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Personnel</td>
            <td className="p-3 border">Names, emails, roles, social media</td>
            <td className="p-3 border">Spear phishing, credential attacks</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Physical</td>
            <td className="p-3 border">Office locations, access points</td>
            <td className="p-3 border">Physical security testing</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Footprinting Methodology</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SYSTEMATIC FOOTPRINTING APPROACH:

Step 1: Define Target Scope
└── Company name, domains, IP ranges

Step 2: Gather Company Information
├── Business type and operations
├── Locations and subsidiaries
├── Key personnel and contacts
└── Partners and vendors

Step 3: Network Footprinting
├── Domain registration details
├── DNS zone information
├── Network ranges (ASN lookup)
├── Subdomain enumeration
└── Email server discovery

Step 4: Technology Profiling
├── Web technologies (CMS, frameworks)
├── Server software and versions
├── Security measures visible
└── Cloud services used

Step 5: Document Everything
├── Organize findings
├── Create target map
├── Identify potential vectors
└── Prepare for scanning phase`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Passive recon leaves no traces; active recon may be detected</li>
        <li>OSINT provides valuable intelligence from public sources</li>
        <li>Google dorking can reveal sensitive exposed information</li>
        <li>Shodan and Censys expose internet-facing assets</li>
        <li>Thorough recon is the foundation of successful penetration testing</li>
        <li>Document all findings systematically for later phases</li>
      </ul>
    </div>
  </div>
);

export default Reconnaissance;
