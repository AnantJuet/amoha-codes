import React from "react";

const Phishing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Phishing Attacks
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Phishing is a social engineering attack where attackers deceive victims into revealing
      sensitive information such as credentials, financial data, or personal information by
      impersonating trusted entities through email, websites, or other communications.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Phishing</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Target</th>
            <th className="p-3 border">Method</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Email Phishing</td>
            <td className="p-3 border">Mass targeting</td>
            <td className="p-3 border">Generic emails to many recipients</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Spear Phishing</td>
            <td className="p-3 border">Specific individuals</td>
            <td className="p-3 border">Personalized, researched attacks</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Whaling</td>
            <td className="p-3 border">Executives (C-level)</td>
            <td className="p-3 border">High-value targets</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Smishing</td>
            <td className="p-3 border">Mobile users</td>
            <td className="p-3 border">SMS/text messages</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Vishing</td>
            <td className="p-3 border">Phone users</td>
            <td className="p-3 border">Voice calls</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Phishing Indicators</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Red Flags in Phishing Emails:

1. SENDER
   - Unknown or suspicious sender
   - Misspelled domain (micr0soft.com)
   - Public email for business (company@gmail.com)

2. URGENCY
   - "Act now or account suspended!"
   - "Limited time offer!"
   - Fear-based messaging

3. LINKS
   - Hover to check URL
   - Misspelled domains
   - IP addresses instead of domains
   - URL shorteners hiding destination

4. ATTACHMENTS
   - Unexpected attachments
   - Executable files (.exe, .scr)
   - Office documents requesting macros

5. CONTENT
   - Spelling/grammar errors
   - Generic greetings ("Dear Customer")
   - Requests for sensitive info
   - Too good to be true offers`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Business Email Compromise (BEC)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`BEC Attack Scenario:

1. Attacker compromises or spoofs executive email
2. Sends email to finance department:

   From: ceo@company.com (spoofed)
   To: finance@company.com
   Subject: Urgent Wire Transfer

   "I need you to wire $50,000 to this account
    for a confidential acquisition. Do this
    immediately and keep it between us."

3. Employee trusts the "CEO" and transfers funds

Prevention:
- Verify requests via phone call
- Multi-person approval for large transfers
- Email authentication (DMARC, DKIM, SPF)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Protection Measures</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Email Filtering:</strong> Block known phishing emails and domains</li>
      <li><strong>Training:</strong> Regular security awareness for employees</li>
      <li><strong>MFA:</strong> Protects even if credentials are stolen</li>
      <li><strong>URL Filtering:</strong> Block known malicious websites</li>
      <li><strong>Email Authentication:</strong> SPF, DKIM, DMARC</li>
      <li><strong>Reporting:</strong> Easy way to report suspicious emails</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Phishing is the most common initial attack vector</li>
        <li>Spear phishing targets specific individuals with personalized content</li>
        <li>Always verify suspicious requests through alternate channels</li>
        <li>MFA significantly reduces impact of stolen credentials</li>
        <li>User awareness training is critical defense</li>
        <li>Never click links or open attachments from unknown sources</li>
      </ul>
    </div>
  </div>
);

export default Phishing;
