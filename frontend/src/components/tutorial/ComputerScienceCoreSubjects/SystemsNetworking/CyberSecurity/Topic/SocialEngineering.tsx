import React from "react";

const SocialEngineering: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Social Engineering
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Social engineering is the psychological manipulation of people into performing actions or
      divulging confidential information. It exploits human nature rather than technical
      vulnerabilities, making it one of the most effective attack vectors.
    </p>

    <h2 className="text-3xl font-bold mt-8">Social Engineering Techniques</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Pretexting</td>
            <td className="p-3 border">Creating false scenario</td>
            <td className="p-3 border">Fake IT support call</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Baiting</td>
            <td className="p-3 border">Offering something enticing</td>
            <td className="p-3 border">Infected USB in parking lot</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Tailgating</td>
            <td className="p-3 border">Following authorized person</td>
            <td className="p-3 border">Entering secure area without badge</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Quid Pro Quo</td>
            <td className="p-3 border">Favor for information</td>
            <td className="p-3 border">"Help" in exchange for password</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Impersonation</td>
            <td className="p-3 border">Posing as authority</td>
            <td className="p-3 border">Pretending to be vendor</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Psychological Principles Exploited</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Psychological Triggers:

1. AUTHORITY
   "I'm calling from IT department..."
   People comply with authority figures

2. URGENCY/SCARCITY
   "Your account will be closed in 24 hours!"
   Pressure reduces critical thinking

3. SOCIAL PROOF
   "Everyone in your department uses this..."
   We follow what others do

4. LIKING
   Building rapport to gain trust
   We help people we like

5. RECIPROCITY
   "I helped you, now help me..."
   Feel obligated to return favors

6. FEAR
   "Your computer is infected!"
   Fear bypasses logical thinking`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Real-World Attack Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Pretexting Attack Scenario:

Attacker: "Hi, this is Mike from IT Support. We're
          updating security on all accounts due to a
          recent breach. I need to verify your account.
          Can you confirm your employee ID?"

Victim: "Sure, it's 12345."

Attacker: "Thanks. Now I need to reset your password.
          What was your previous password so I can make
          sure the new one is different?"

Victim: "It was Summer2024!"

Result: Attacker now has credentials.

Prevention: IT should never ask for passwords.
Verify identity through official channels.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Defense Against Social Engineering</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Security Awareness Training:</strong> Regular employee education</li>
      <li><strong>Verification Procedures:</strong> Call back using known numbers</li>
      <li><strong>Physical Security:</strong> Badge requirements, no tailgating</li>
      <li><strong>Clear Policies:</strong> What info should never be shared</li>
      <li><strong>Reporting Culture:</strong> Encourage reporting suspicious activity</li>
      <li><strong>Simulated Attacks:</strong> Test employees with fake phishing</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Humans are often the weakest link in security</li>
        <li>Social engineering exploits trust and psychology</li>
        <li>Verify requests through official channels</li>
        <li>Never share passwords or sensitive info over phone</li>
        <li>Be suspicious of urgency and pressure tactics</li>
        <li>Regular training is the best defense</li>
      </ul>
    </div>
  </div>
);

export default SocialEngineering;
