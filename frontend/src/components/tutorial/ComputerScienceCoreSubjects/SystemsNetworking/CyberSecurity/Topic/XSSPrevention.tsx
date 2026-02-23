import React from "react";

const XSSPrevention: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      XSS Prevention
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Preventing Cross-Site Scripting (XSS) requires a multi-layered approach including
      input validation, output encoding, and security headers. Proper implementation of
      these techniques can effectively eliminate XSS vulnerabilities.
    </p>

    <h2 className="text-3xl font-bold mt-8">Prevention Strategies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Strategy</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">XSS Types Prevented</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Output Encoding</td>
            <td className="p-3 border">Encode data before rendering</td>
            <td className="p-3 border">All types</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Input Validation</td>
            <td className="p-3 border">Validate and sanitize input</td>
            <td className="p-3 border">All types</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">CSP Headers</td>
            <td className="p-3 border">Restrict script execution</td>
            <td className="p-3 border">All types (mitigation)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">HTTPOnly Cookies</td>
            <td className="p-3 border">Prevent cookie theft</td>
            <td className="p-3 border">Impact reduction</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Output Encoding</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Context-Specific Encoding:

HTML Context:
  Input:  <script>alert('XSS')</script>
  Output: &lt;script&gt;alert('XSS')&lt;/script&gt;

JavaScript Context:
  Input:  '; alert('XSS');//
  Output: \\x27; alert(\\x27XSS\\x27);//

URL Context:
  Input:  javascript:alert('XSS')
  Output: javascript%3Aalert%28%27XSS%27%29

CSS Context:
  Input:  expression(alert('XSS'))
  Output: expression\\28alert\\28\\27XSS\\27\\29\\29

Encoding Functions by Language:
- JavaScript: textContent (safe), DOMPurify
- PHP: htmlspecialchars(), htmlentities()
- Java: OWASP Java Encoder
- .NET: HttpUtility.HtmlEncode()
- Python: html.escape()`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Content Security Policy (CSP)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CSP Header Examples:

Strict CSP (Recommended):
Content-Security-Policy:
  default-src 'self';
  script-src 'self';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';

With Nonce (For Inline Scripts):
Content-Security-Policy:
  script-src 'nonce-randomValue123'

HTML:
<script nonce="randomValue123">
  // Allowed inline script
</script>

CSP Directives:
- default-src: Fallback for other directives
- script-src: Valid sources for JavaScript
- style-src: Valid sources for stylesheets
- img-src: Valid sources for images
- connect-src: Valid sources for fetch/XHR
- frame-src: Valid sources for frames`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Input Validation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Input Validation Approaches:

WHITELIST (Preferred):
- Accept only known good characters
- Example: username = /^[a-zA-Z0-9_]{3,20}$/

BLACKLIST (Less Effective):
- Block known bad patterns
- Easily bypassed with encoding tricks

Sanitization Libraries:
- JavaScript: DOMPurify
  const clean = DOMPurify.sanitize(dirty);

- PHP: HTML Purifier
  $clean = $purifier->purify($dirty);

- Python: Bleach
  clean = bleach.clean(dirty)

Never Trust:
- URL parameters
- Form inputs
- Cookies
- HTTP headers
- Database content`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Additional Security Headers</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>X-Content-Type-Options: nosniff</strong> - Prevents MIME sniffing</li>
        <li><strong>X-XSS-Protection: 1; mode=block</strong> - Legacy browser protection</li>
        <li><strong>Set-Cookie: HttpOnly; Secure</strong> - Protects cookies from JS access</li>
        <li><strong>Referrer-Policy: strict-origin</strong> - Limits referrer information</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Output encoding is the primary defense against XSS</li>
        <li>Encode based on the context (HTML, JS, URL, CSS)</li>
        <li>Implement strict Content Security Policy headers</li>
        <li>Use HTTPOnly flag on sensitive cookies</li>
        <li>Validate input on both client and server side</li>
        <li>Use established sanitization libraries, not custom solutions</li>
      </ul>
    </div>
  </div>
);

export default XSSPrevention;
