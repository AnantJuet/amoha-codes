import React from "react";

const BrokenAuthentication: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Broken Authentication
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Broken Authentication refers to vulnerabilities in authentication and session
      management that allow attackers to compromise passwords, keys, or session tokens,
      or exploit other implementation flaws to assume users identities.
    </p>

    <h2 className="text-3xl font-bold mt-8">Common Vulnerabilities</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Vulnerability</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Impact</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Credential Stuffing</td>
            <td className="p-3 border">Using breached credentials</td>
            <td className="p-3 border">Account takeover</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Brute Force</td>
            <td className="p-3 border">No rate limiting</td>
            <td className="p-3 border">Password discovery</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Session Fixation</td>
            <td className="p-3 border">Reusing session IDs</td>
            <td className="p-3 border">Session hijacking</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Weak Passwords</td>
            <td className="p-3 border">No complexity requirements</td>
            <td className="p-3 border">Easy compromise</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Attack Scenarios</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Scenario 1: Credential Stuffing
================================
1. Attacker obtains leaked credentials database
2. Uses automated tools to try credentials on target site
3. Many users reuse passwords across sites
4. Successful logins with reused credentials

Scenario 2: Session ID in URL
============================
1. Application uses URL-based sessions:
   http://site.com/account?sessionid=abc123

2. User shares link with friend (or logs in public)
3. Session ID exposed in browser history, logs, referrer
4. Attacker uses session ID to access account

Scenario 3: No Account Lockout
==============================
1. No rate limiting on login attempts
2. Attacker automates password guessing:
   for password in wordlist:
       try_login(username, password)
3. Eventually guesses correct password

Scenario 4: Insecure Password Recovery
======================================
1. "Forgot password" sends password in plaintext email
2. Or uses easily guessable security questions
3. Or doesn't properly validate identity
4. Attacker uses to reset victim's password`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Session Management Flaws</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Session Vulnerabilities:

1. SESSION FIXATION
   - Session ID not changed after login
   - Attacker sets victim's session ID
   - Victim logs in with attacker's session
   - Attacker uses same session to access account

2. PREDICTABLE SESSION IDs
   - Sequential: session=1001, session=1002
   - Time-based: session=unix_timestamp
   - Attacker can guess valid session IDs

3. SESSION TIMEOUT
   - Sessions never expire
   - User logs in on public computer
   - Session remains valid indefinitely
   - Next user accesses the session

4. INSECURE SESSION STORAGE
   - Session ID in URL (visible in logs)
   - No HttpOnly flag (accessible to JavaScript)
   - No Secure flag (sent over HTTP)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Prevention Measures</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Implement MFA:</strong> Add second factor beyond passwords</li>
        <li><strong>Rate Limiting:</strong> Limit login attempts, use CAPTCHA</li>
        <li><strong>Strong Password Policy:</strong> Minimum length, complexity checks</li>
        <li><strong>Credential Checking:</strong> Check against breached password databases</li>
        <li><strong>Session Regeneration:</strong> New session ID after login</li>
        <li><strong>Secure Cookies:</strong> HttpOnly, Secure, SameSite flags</li>
        <li><strong>Account Lockout:</strong> Temporary lockout after failed attempts</li>
        <li><strong>Session Timeout:</strong> Appropriate idle and absolute timeouts</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Secure Implementation Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Secure Session Configuration:

# PHP
session_regenerate_id(true); // After login

# Set secure cookie parameters
session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'domain' => '.example.com',
    'secure' => true,
    'httponly' => true,
    'samesite' => 'Strict'
]);

# Password Hashing
$hash = password_hash($password, PASSWORD_ARGON2ID);
if (password_verify($input, $hash)) {
    // Login successful
}

# Rate Limiting (Redis)
$attempts = $redis->incr("login:$ip");
$redis->expire("login:$ip", 300);
if ($attempts > 5) {
    throw new TooManyAttemptsException();
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Implement multi-factor authentication for sensitive accounts</li>
        <li>Always regenerate session IDs after authentication</li>
        <li>Use secure password hashing algorithms (bcrypt, Argon2)</li>
        <li>Implement account lockout and rate limiting</li>
        <li>Never expose session IDs in URLs</li>
        <li>Check passwords against known breached lists</li>
      </ul>
    </div>
  </div>
);

export default BrokenAuthentication;
