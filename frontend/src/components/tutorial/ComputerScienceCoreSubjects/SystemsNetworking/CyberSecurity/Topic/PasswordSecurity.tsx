import React from "react";

const PasswordSecurity: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Password Security
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Password security encompasses the practices and technologies used to create, store, and
      manage passwords securely. Despite the emergence of passwordless authentication, passwords
      remain the most common authentication method and require proper handling to prevent
      unauthorized access.
    </p>

    <h2 className="text-3xl font-bold mt-8">Password Attack Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Attack Type</th>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Defense</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Brute Force</td>
            <td className="p-3 border">Try all combinations</td>
            <td className="p-3 border">Long passwords, rate limiting</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dictionary</td>
            <td className="p-3 border">Common passwords list</td>
            <td className="p-3 border">Avoid common words</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Rainbow Tables</td>
            <td className="p-3 border">Precomputed hash lookup</td>
            <td className="p-3 border">Salted hashing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Credential Stuffing</td>
            <td className="p-3 border">Reuse leaked credentials</td>
            <td className="p-3 border">Unique passwords, MFA</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Phishing</td>
            <td className="p-3 border">Social engineering</td>
            <td className="p-3 border">User training, MFA</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Secure Password Storage</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Password Hashing Process:

WRONG: Store plain text
password = "secret123"  // NEVER DO THIS!

WRONG: Simple hash
hash = SHA256(password)  // Vulnerable to rainbow tables

RIGHT: Salted hash with slow algorithm
salt = generate_random_bytes(16)
hash = bcrypt(password + salt, cost=12)
store: salt + hash

Password Verification:
1. Retrieve stored salt and hash
2. Hash provided password with same salt
3. Compare hashes (timing-safe comparison)

Recommended Algorithms:
1. Argon2id (winner of Password Hashing Competition)
2. bcrypt (widely used, proven)
3. scrypt (memory-hard)
4. PBKDF2 (NIST approved, minimum 100,000 iterations)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Password Policy Guidelines</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Modern Password Policy (NIST SP 800-63B):

REQUIREMENTS:
- Minimum 8 characters (12+ recommended)
- Maximum length at least 64 characters
- Allow all printable ASCII and Unicode
- Check against breach databases

AVOID (Outdated Practices):
- Forced periodic password changes
- Complex composition rules (uppercase, numbers, symbols)
- Password hints
- Security questions

ENCOURAGE:
- Passphrases: "correct horse battery staple"
- Password managers
- Multi-factor authentication

Password Entropy:
8 chars (lowercase):     26^8  = 208 billion
8 chars (mixed + nums):  62^8  = 218 trillion
4 words (7776 word list): 7776^4 = 3.6 quadrillion`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation Best Practices</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Server-Side Implementation:

// Good: Using bcrypt (Python)
import bcrypt

def hash_password(password):
    salt = bcrypt.gensalt(rounds=12)
    return bcrypt.hashpw(password.encode(), salt)

def verify_password(password, hash):
    return bcrypt.checkpw(password.encode(), hash)

// Rate Limiting
- Lock account after 5-10 failed attempts
- Progressive delays (1s, 2s, 4s, 8s...)
- CAPTCHA after suspicious activity

// Breach Detection
- Check passwords against HaveIBeenPwned API
- Block commonly breached passwords
- Notify users of potential compromise

// Secure Transmission
- Always use HTTPS
- Never log passwords
- Clear password from memory after use`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Password Manager Benefits</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Unique Passwords:</strong> Different password for every account</li>
      <li><strong>Strong Generation:</strong> Random, high-entropy passwords</li>
      <li><strong>Encrypted Storage:</strong> Secure vault for credentials</li>
      <li><strong>Auto-fill:</strong> Reduces phishing risk (checks domain)</li>
      <li><strong>Breach Alerts:</strong> Notification of compromised passwords</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Never store passwords in plain text - use bcrypt or Argon2</li>
        <li>Always salt passwords with unique random values</li>
        <li>Length matters more than complexity rules</li>
        <li>Check passwords against known breach databases</li>
        <li>Implement rate limiting to prevent brute force attacks</li>
        <li>Encourage password managers and MFA adoption</li>
      </ul>
    </div>
  </div>
);

export default PasswordSecurity;
