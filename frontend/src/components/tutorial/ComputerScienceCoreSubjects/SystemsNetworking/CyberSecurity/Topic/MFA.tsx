import React from "react";

const MFA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Multi-Factor Authentication (MFA)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Multi-Factor Authentication (MFA) is a security mechanism that requires users to provide
      two or more verification factors from different categories to gain access. It significantly
      increases security compared to single-factor authentication.
    </p>

    <h2 className="text-3xl font-bold mt-8">MFA Factor Categories</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`MFA Categories:

+------------------+------------------+------------------+
| Something You    | Something You    | Something You    |
| KNOW             | HAVE             | ARE              |
+------------------+------------------+------------------+
| Password         | Mobile phone     | Fingerprint      |
| PIN              | Hardware token   | Face recognition |
| Security answer  | Smart card       | Iris scan        |
| Pattern          | Authenticator    | Voice            |
+------------------+------------------+------------------+

True MFA = Factors from DIFFERENT categories
Same category factors (e.g., password + PIN) = NOT true MFA`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common MFA Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Security</th>
            <th className="p-3 border">Convenience</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">SMS OTP</td>
            <td className="p-3 border">Low (SIM swap risk)</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Authenticator App</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hardware Token</td>
            <td className="p-3 border">Very High</td>
            <td className="p-3 border">Low</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Push Notification</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Biometric</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Very High</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">TOTP (Time-Based OTP)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`How TOTP Works:

1. Setup: Shared secret key exchanged (QR code)

2. Code Generation:
   Current Time + Secret Key --> HMAC --> 6-digit code

3. Verification:
   Server generates same code using shared secret
   Compares with user-provided code
   Allows small time window for clock drift

Common Authenticator Apps:
- Google Authenticator
- Microsoft Authenticator
- Authy
- 1Password

Advantages:
- Works offline
- No SIM swap vulnerability
- Standard protocol (RFC 6238)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">FIDO2/WebAuthn</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`FIDO2 Passwordless Authentication:

Components:
- WebAuthn API (browser standard)
- CTAP (device communication)

How it works:
1. User registers device (creates key pair)
2. Public key stored on server
3. Private key stays on device (never leaves)
4. Login: Sign challenge with private key
5. Server verifies with public key

Authenticators:
- Security keys (YubiKey, Titan)
- Platform authenticators (Windows Hello, Touch ID)
- Passkeys (synced across devices)

Benefits:
- Phishing resistant (origin bound)
- No shared secrets to steal
- Strong cryptographic authentication`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">MFA Best Practices</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Avoid SMS:</strong> Prefer authenticator apps or hardware keys</li>
      <li><strong>Backup Codes:</strong> Provide recovery options</li>
      <li><strong>Enforce MFA:</strong> Require for sensitive accounts</li>
      <li><strong>Risk-Based MFA:</strong> Step-up authentication for risky actions</li>
      <li><strong>User Education:</strong> Train users on MFA importance</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>MFA requires factors from different categories</li>
        <li>SMS-based MFA is vulnerable to SIM swapping</li>
        <li>TOTP apps and hardware keys are more secure</li>
        <li>FIDO2/WebAuthn provides phishing-resistant authentication</li>
        <li>Always provide backup recovery options</li>
        <li>MFA significantly reduces account compromise risk</li>
      </ul>
    </div>
  </div>
);

export default MFA;
