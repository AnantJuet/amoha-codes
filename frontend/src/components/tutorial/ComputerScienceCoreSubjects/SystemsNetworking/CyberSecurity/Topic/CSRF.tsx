import React from "react";

const CSRF: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cross-Site Request Forgery (CSRF)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Cross-Site Request Forgery (CSRF) is an attack that tricks authenticated users into
      executing unwanted actions on a web application. The attacker exploits the user's
      authenticated session to perform actions without their knowledge.
    </p>

    <h2 className="text-3xl font-bold mt-8">How CSRF Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CSRF Attack Flow:

1. User logs into bank.com
   Browser stores session cookie

2. User visits malicious.com (in another tab)

3. malicious.com contains hidden form:
   <form action="https://bank.com/transfer" method="POST">
     <input name="to" value="attacker">
     <input name="amount" value="10000">
   </form>
   <script>document.forms[0].submit();</script>

4. Browser sends request to bank.com
   WITH user's session cookie (automatic)

5. Bank processes transfer
   User is authenticated via cookie!

Result: Attacker stole $10,000`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CSRF vs XSS</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">CSRF</th>
            <th className="p-3 border">XSS</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Attack Vector</td>
            <td className="p-3 border">Forged requests</td>
            <td className="p-3 border">Injected scripts</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Trust Exploited</td>
            <td className="p-3 border">Site trusts user's browser</td>
            <td className="p-3 border">User trusts the site</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Access</td>
            <td className="p-3 border">Can only send requests</td>
            <td className="p-3 border">Can read/modify page</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">User Interaction</td>
            <td className="p-3 border">Victim visits malicious site</td>
            <td className="p-3 border">Script runs on vulnerable site</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">CSRF Attack Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`GET Request (Image Tag):
<img src="https://bank.com/transfer?to=attacker&amount=1000">

POST Request (Hidden Form):
<form action="https://target.com/action" method="POST" id="csrf">
  <input type="hidden" name="action" value="delete_account">
</form>
<script>document.getElementById('csrf').submit();</script>

JSON Request (Fetch - blocked by SOP but worth noting):
fetch('https://api.target.com/update', {
  method: 'POST',
  credentials: 'include',
  body: JSON.stringify({role: 'admin'})
});`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Prevention Methods</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. CSRF TOKENS (Synchronizer Token Pattern)
   - Generate unique token per session/request
   - Include in forms as hidden field
   - Validate on server before processing

   <form>
     <input type="hidden" name="csrf_token"
            value="random_unique_token_here">
     ...
   </form>

2. SAMESITE COOKIE ATTRIBUTE
   Set-Cookie: session=abc; SameSite=Strict

   - Strict: Cookie never sent cross-site
   - Lax: Sent on top-level navigations (GET only)

3. CUSTOM REQUEST HEADERS
   - Require custom header (X-CSRF-Token)
   - Browsers block cross-origin custom headers

4. DOUBLE SUBMIT COOKIE
   - Send token in both cookie and request body
   - Server verifies both match`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SameSite Cookie Attribute</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Value</th>
            <th className="p-3 border">Behavior</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Strict</td>
            <td className="p-3 border">Never sent cross-site</td>
            <td className="p-3 border">High security sessions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Lax</td>
            <td className="p-3 border">Sent on top-level navigation</td>
            <td className="p-3 border">Default, good balance</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">None</td>
            <td className="p-3 border">Always sent (requires Secure)</td>
            <td className="p-3 border">Third-party contexts</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>CSRF exploits user's authenticated session</li>
        <li>Use CSRF tokens for all state-changing requests</li>
        <li>Implement SameSite cookie attribute (Lax or Strict)</li>
        <li>Verify request origin with custom headers for APIs</li>
        <li>GET requests should never modify data</li>
        <li>Defense in depth - combine multiple protections</li>
      </ul>
    </div>
  </div>
);

export default CSRF;
