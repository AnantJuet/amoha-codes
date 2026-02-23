import React from "react";

const AuthenticationIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Authentication Fundamentals
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Authentication is the process of verifying the identity of a user, system, or entity.
      It answers the question "Who are you?" and is fundamental to access control and
      security in any system.
    </p>

    <h2 className="text-3xl font-bold mt-8">Authentication Factors</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Authentication Factors:

1. SOMETHING YOU KNOW
   - Passwords
   - PINs
   - Security questions

2. SOMETHING YOU HAVE
   - Smart cards
   - Hardware tokens
   - Mobile phones (SMS, authenticator apps)

3. SOMETHING YOU ARE
   - Fingerprints
   - Facial recognition
   - Iris scan
   - Voice recognition

4. SOMEWHERE YOU ARE
   - Geolocation
   - IP address

5. SOMETHING YOU DO
   - Typing patterns (behavioral biometrics)
   - Gait analysis

Multi-Factor Authentication (MFA):
Combining 2+ factors from DIFFERENT categories`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Authentication vs Authorization</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Authentication</th>
            <th className="p-3 border">Authorization</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Question</td>
            <td className="p-3 border">Who are you?</td>
            <td className="p-3 border">What can you do?</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Purpose</td>
            <td className="p-3 border">Verify identity</td>
            <td className="p-3 border">Grant permissions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Order</td>
            <td className="p-3 border">First</td>
            <td className="p-3 border">After authentication</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Example</td>
            <td className="p-3 border">Login with password</td>
            <td className="p-3 border">Access to admin panel</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Authentication Methods</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Username/Password:</strong> Most common, requires strong password policies</li>
      <li><strong>Multi-Factor (MFA):</strong> Combines multiple authentication factors</li>
      <li><strong>Single Sign-On (SSO):</strong> One login for multiple applications</li>
      <li><strong>OAuth 2.0:</strong> Delegated authorization for third-party access</li>
      <li><strong>Certificate-Based:</strong> Uses digital certificates</li>
      <li><strong>Biometric:</strong> Uses physical characteristics</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Password Security</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Password Best Practices:

1. STRENGTH REQUIREMENTS
   - Minimum 12 characters
   - Mix of uppercase, lowercase, numbers, symbols
   - No common words or patterns

2. STORAGE
   - Never store plaintext passwords
   - Use strong hashing (bcrypt, Argon2)
   - Add unique salt per password

3. TRANSMISSION
   - Always use HTTPS
   - Never send in URL parameters

4. POLICIES
   - Account lockout after failed attempts
   - Secure password reset process
   - Check against breached password lists`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Authentication verifies identity; authorization grants access</li>
        <li>Use multi-factor authentication for sensitive systems</li>
        <li>Hash and salt passwords using modern algorithms</li>
        <li>Implement account lockout and rate limiting</li>
        <li>Consider passwordless authentication options</li>
        <li>Authentication is the foundation of access control</li>
      </ul>
    </div>
  </div>
);

export default AuthenticationIntro;
