import React from "react";

const Ransomware: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Ransomware
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Ransomware is malware that encrypts victim files or locks system access, demanding payment
      (usually cryptocurrency) for the decryption key. It has become one of the most damaging
      and profitable forms of cybercrime.
    </p>

    <h2 className="text-3xl font-bold mt-8">How Ransomware Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Ransomware Attack Chain:

1. INITIAL ACCESS
   - Phishing email with attachment
   - Exploit kit (drive-by download)
   - RDP brute force
   - Supply chain compromise

2. EXECUTION & PERSISTENCE
   - Disable security tools
   - Establish persistence
   - Move laterally in network

3. RECONNAISSANCE
   - Identify valuable data
   - Map network resources
   - Find backup systems

4. EXFILTRATION (Double Extortion)
   - Steal sensitive data
   - Threaten to publish if unpaid

5. ENCRYPTION
   - Encrypt files with strong crypto
   - Target backups too
   - Drop ransom note

6. RANSOM DEMAND
   - Display payment instructions
   - Typically in cryptocurrency
   - Time pressure tactics`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Ransomware</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Recovery</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Crypto Ransomware</td>
            <td className="p-3 border">Encrypts files</td>
            <td className="p-3 border">Need key or backup</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Locker Ransomware</td>
            <td className="p-3 border">Locks system access</td>
            <td className="p-3 border">Files intact, unlock needed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Double Extortion</td>
            <td className="p-3 border">Encrypts + steals data</td>
            <td className="p-3 border">Data may be leaked</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">RaaS</td>
            <td className="p-3 border">Ransomware-as-a-Service</td>
            <td className="p-3 border">Affiliate model</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Notable Ransomware</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>WannaCry (2017):</strong> Exploited EternalBlue, hit hospitals</li>
      <li><strong>NotPetya (2017):</strong> Disguised as ransomware, destructive wiper</li>
      <li><strong>REvil/Sodinokibi:</strong> Major RaaS operation</li>
      <li><strong>LockBit:</strong> Fast encryption, active affiliate program</li>
      <li><strong>Conti:</strong> Targeted healthcare, critical infrastructure</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Prevention and Protection</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Ransomware Defense:

1. BACKUPS (Most Important!)
   - Regular automated backups
   - Offline/air-gapped copies
   - Test restore procedures
   - Follow 3-2-1 rule

2. PATCH MANAGEMENT
   - Keep systems updated
   - Prioritize critical patches
   - Patch third-party software

3. EMAIL SECURITY
   - Filter malicious attachments
   - Block macro execution
   - User awareness training

4. ACCESS CONTROL
   - Least privilege principle
   - Disable RDP or use VPN
   - MFA everywhere

5. NETWORK SEGMENTATION
   - Limit lateral movement
   - Protect critical assets`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">If Infected</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Isolate:</strong> Disconnect infected systems from network</li>
        <li><strong>Report:</strong> Contact law enforcement (FBI IC3, local authorities)</li>
        <li><strong>Preserve:</strong> Keep evidence for investigation</li>
        <li><strong>Assess:</strong> Determine scope and impact</li>
        <li><strong>Restore:</strong> Use clean backups if available</li>
        <li><strong>Payment:</strong> Generally discouraged (no guarantee, funds criminals)</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Backups are the best defense against ransomware</li>
        <li>Double extortion adds data theft to encryption</li>
        <li>Paying ransom does not guarantee data recovery</li>
        <li>Prevention requires multiple security layers</li>
        <li>Incident response plan is essential</li>
        <li>Report incidents to law enforcement</li>
      </ul>
    </div>
  </div>
);

export default Ransomware;
