import React from "react";

const AuthenticationFactors: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Authentication Factors
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Authentication factors are categories of credentials used to verify identity. They form
      the foundation of authentication systems, with each factor type providing different
      security properties. Combining multiple factors significantly increases security by
      requiring attackers to compromise multiple independent verification methods.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Three Factor Categories</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Authentication Factor Categories:

+----------------------+----------------------+----------------------+
|   KNOWLEDGE          |   POSSESSION         |   INHERENCE          |
|   (Something You     |   (Something You     |   (Something You     |
|    Know)             |    Have)             |    Are)              |
+----------------------+----------------------+----------------------+
|                      |                      |                      |
|   Password           |   Mobile Phone       |   Fingerprint        |
|   PIN                |   Smart Card         |   Face Recognition   |
|   Security Questions |   Hardware Token     |   Iris Scan          |
|   Pattern            |   USB Key            |   Voice Print        |
|   Passphrase         |   ID Badge           |   Retina Scan        |
|                      |   Authenticator App  |   Behavioral         |
|                      |                      |                      |
+----------------------+----------------------+----------------------+

Security Strength:
Knowledge < Possession < Inherence

Combination = Multi-Factor Authentication (MFA)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Factor Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Factor</th>
            <th className="p-3 border">Pros</th>
            <th className="p-3 border">Cons</th>
            <th className="p-3 border">Attack Vectors</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Knowledge</td>
            <td className="p-3 border">Easy to implement, no hardware</td>
            <td className="p-3 border">Can be forgotten, shared</td>
            <td className="p-3 border">Phishing, brute force, keyloggers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Possession</td>
            <td className="p-3 border">Harder to steal remotely</td>
            <td className="p-3 border">Can be lost, costs money</td>
            <td className="p-3 border">Theft, SIM swap, cloning</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Inherence</td>
            <td className="p-3 border">Always available, unique</td>
            <td className="p-3 border">Cannot be changed if compromised</td>
            <td className="p-3 border">Spoofing, replay attacks</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Extended Factors</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Additional Factor Categories:

4. LOCATION (Somewhere You Are)
   - GPS coordinates
   - IP address geolocation
   - Network proximity
   - Physical presence

5. BEHAVIOR (Something You Do)
   - Typing patterns
   - Mouse movements
   - Walking gait
   - Usage patterns
   - Time of access

6. TIME (When You Authenticate)
   - Business hours restrictions
   - Time-limited access
   - Session duration limits

These extend traditional 3-factor model
Often used for risk-based authentication`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Factor Strength Matrix</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Authentication Strength by Factor Combination:

Single Factor (Weak):
- Password only
- PIN only
- Fingerprint only

Two-Factor (Strong):
- Password + SMS code
- Password + Hardware token
- PIN + Fingerprint

Multi-Factor (Very Strong):
- Password + Authenticator App + Fingerprint
- Smart Card + PIN + Face Recognition

Risk-Based Adaptive:
Low Risk:  Single factor sufficient
Med Risk:  Step-up to 2FA
High Risk: Require 3+ factors

Example: Banking
- Check balance: Password
- Transfer $100: Password + SMS
- Transfer $10,000: Password + Token + Voice`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation Considerations</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>User Experience:</strong> Balance security with usability</li>
      <li><strong>Recovery:</strong> Plan for lost factors (backup codes, admin reset)</li>
      <li><strong>Independence:</strong> Factors should be truly independent</li>
      <li><strong>Channel Separation:</strong> Use different channels for different factors</li>
      <li><strong>Storage:</strong> Securely store knowledge factors (hashing)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Three main factors: Knowledge, Possession, Inherence</li>
        <li>True MFA requires factors from different categories</li>
        <li>Each factor type has unique vulnerabilities</li>
        <li>Biometrics cannot be changed if compromised</li>
        <li>Risk-based authentication adapts to context</li>
        <li>Always provide recovery mechanisms for lost factors</li>
      </ul>
    </div>
  </div>
);

export default AuthenticationFactors;
