import React from "react";

const CSRFPrevention: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      CSRF Prevention
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Cross-Site Request Forgery (CSRF) attacks can be prevented through various techniques
      that ensure requests originate from legitimate sources. The most effective defense
      combines anti-CSRF tokens with additional validation mechanisms.
    </p>

    <h2 className="text-3xl font-bold mt-8">Prevention Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Effectiveness</th>
            <th className="p-3 border">Implementation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Anti-CSRF Tokens</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Server-side + Forms</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SameSite Cookies</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Cookie attribute</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Origin/Referer Check</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Server-side</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Double Submit Cookie</td>
            <td className="p-3 border">Medium-High</td>
            <td className="p-3 border">Cookie + Request</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Synchronizer Token Pattern</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Anti-CSRF Token Implementation:

SERVER-SIDE (Token Generation):
// Generate unique token per session
$_SESSION['csrf_token'] = bin2hex(random_bytes(32));

HTML FORM:
<form method="POST" action="/transfer">
    <input type="hidden" name="csrf_token"
           value="<?php echo $_SESSION['csrf_token']; ?>">
    <input type="text" name="amount">
    <button type="submit">Transfer</button>
</form>

SERVER-SIDE (Token Validation):
if (!isset($_POST['csrf_token']) ||
    $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    die('CSRF validation failed');
}

AJAX Requests:
// Include token in headers
fetch('/api/transfer', {
    method: 'POST',
    headers: {
        'X-CSRF-Token': document.querySelector(
            'meta[name="csrf-token"]').content
    },
    body: JSON.stringify(data)
});`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. SameSite Cookie Attribute</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SameSite Cookie Options:

STRICT (Most Restrictive):
Set-Cookie: session=abc123; SameSite=Strict; Secure

- Cookie NEVER sent in cross-site requests
- Even clicking link from email won't send cookie
- Best for sensitive operations

LAX (Balanced):
Set-Cookie: session=abc123; SameSite=Lax; Secure

- Cookie sent for top-level navigation (GET)
- NOT sent for cross-site POST, images, iframes
- Default in modern browsers

NONE (Least Restrictive):
Set-Cookie: session=abc123; SameSite=None; Secure

- Cookie sent in all cross-site requests
- Must include Secure flag
- Required for legitimate cross-site use cases

Browser Support:
- Chrome 80+: Default is Lax
- Firefox 69+: Supported
- Safari: Full support
- Edge: Full support`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Origin and Referer Validation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Origin/Referer Header Check:

def validate_request(request):
    origin = request.headers.get('Origin')
    referer = request.headers.get('Referer')

    allowed_origins = [
        'https://mysite.com',
        'https://www.mysite.com'
    ]

    # Check Origin header first (preferred)
    if origin:
        if origin not in allowed_origins:
            return False
        return True

    # Fall back to Referer if no Origin
    if referer:
        from urllib.parse import urlparse
        parsed = urlparse(referer)
        if parsed.netloc not in ['mysite.com',
                                  'www.mysite.com']:
            return False
        return True

    # No Origin or Referer - block by default
    return False

Limitations:
- Headers can be absent in some cases
- Privacy extensions may strip Referer`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Double Submit Cookie</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="mb-2 font-semibold">How it works:</p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Set random value in cookie AND as hidden form field</li>
        <li>Server verifies both values match</li>
        <li>Attacker cannot read cookie due to Same-Origin Policy</li>
        <li>Attacker cannot forge matching request parameter</li>
      </ul>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900 text-sm">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Set-Cookie: csrf=random123; Secure; HttpOnly

<input type="hidden" name="csrf" value="random123">

Server validates: cookie.csrf === request.csrf`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Framework-Specific Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Built-in CSRF Protection:

Django:
{% csrf_token %}  // In templates
@csrf_protect    // Decorator

Express.js (csurf):
app.use(csurf({ cookie: true }));
res.render('form', { csrfToken: req.csrfToken() });

Spring Security:
<input type="hidden" name="${'${_csrf.parameterName}'}"
       value="${'${_csrf.token}'}"/>

Laravel:
@csrf  // Blade directive
// Generates hidden _token field

Rails:
<%= csrf_meta_tags %>
protect_from_forgery with: :exception`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Always use anti-CSRF tokens for state-changing operations</li>
        <li>Set SameSite=Lax or Strict on session cookies</li>
        <li>Validate Origin/Referer headers as additional layer</li>
        <li>Use framework-provided CSRF protection when available</li>
        <li>Regenerate tokens after login to prevent fixation</li>
        <li>CSRF tokens should be unique per session or per request</li>
      </ul>
    </div>
  </div>
);

export default CSRFPrevention;
