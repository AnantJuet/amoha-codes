import React from 'react';

const ComputerSecurityThreats: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Computer Security Threats ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Computer Security Threats
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 16 Jun, 2021</p>

    <p className="text-lg leading-relaxed">
      Computer security threats are potential dangers that can harm the operation and performance of your computer. These threats range from harmless adware to destructive trojans. As technology becomes more digital, security threats continue to evolve. Some damage may even be irreversible.
    </p>

    <h2 className="text-3xl font-bold mt-6">Types of Threats</h2>
    <p className="text-lg leading-relaxed">
      Security threats can be physical or non-physical, and can harm computer systems or organizations.
    </p>

    <h3 className="text-2xl font-semibold mt-4">1. Physical Threats</h3>
    <p className="text-lg leading-relaxed">
      Physical threats can damage hardware or cause data loss. They are categorized as:
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Internal:</strong> Short circuits, fire, unstable power, hardware failure due to humidity, etc.</li>
      <li><strong>External:</strong> Natural disasters like floods, earthquakes, and other environmental hazards.</li>
      <li><strong>Human:</strong> Theft, destruction of hardware, intentional or unintentional errors.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Non-Physical Threats</h3>
    <p className="text-lg leading-relaxed">
      Non-physical threats affect operations or data without damaging hardware directly. They include:
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li>Disruption of business operations.</li>
      <li>Loss of sensitive data.</li>
      <li>Unauthorized tracking of computer activities.</li>
      <li>Hacking user IDs and passwords.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Common Non-Physical Threats</h3>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Malware:</strong> Malicious software that damages systems while hiding from the user.</li>
      <li><strong>Virus:</strong> Programs that replicate themselves to infect files and programs, spreading via software, disks, or emails.</li>
      <li><strong>Spyware:</strong> Software that monitors user activity to steal data or for profit. Adware is a form of spyware used for advertising.</li>
      <li><strong>Worms:</strong> Self-replicating programs that consume system resources without attaching to files.</li>
      <li><strong>Trojan:</strong> Malicious software disguised as useful programs to disrupt, steal, or damage data.</li>
      <li><strong>Denial of Service (DoS) Attacks:</strong> Prevents legitimate users from accessing resources or services.</li>
      <li><strong>Phishing:</strong> Tricks users into revealing sensitive information via emails, websites, or social media.</li>
      <li><strong>Keyloggers:</strong> Record keystrokes to steal passwords or financial information.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-6">How to Make Your System Secure</h2>
    <ul className="list-decimal list-inside ml-6 text-lg">
      <li>Keep regular backups of your data.</li>
      <li>Install and update firewall software.</li>
      <li>Use strong passwords with letters, numbers, and special characters.</li>
      <li>Install and update antivirus/anti-spyware software.</li>
      <li>Scan your system regularly for threats.</li>
      <li>Verify the safety of programs before installing them.</li>
      <li>Be cautious with email attachments.</li>
      <li>Keep your system updated.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-6">Sample Questions</h2>

    <p className="text-lg leading-relaxed"><strong>Q1:</strong> How can we protect our system against phishing attacks?</p>
    <p className="text-lg leading-relaxed">
      <strong>Solution:</strong> Filter or block phishing emails, clearly label external emails, train users, use proxy servers to block malicious sites, avoid using admin accounts for browsing, and implement two-factor authentication (2FA) on critical accounts.
    </p>

    <p className="text-lg leading-relaxed"><strong>Q2:</strong> What authentication mechanisms control access to systems?</p>
    <p className="text-lg leading-relaxed">
      <strong>Solution:</strong> Use strong passwords and supplement with two-factor authentication (2FA). Encourage regular password changes when compromise is suspected.
    </p>

    <p className="text-lg leading-relaxed"><strong>Q3:</strong> List the causes of non-physical threats.</p>
    <p className="text-lg leading-relaxed">
      <strong>Solution:</strong> Malware, Virus, Worms, Trojan.
    </p>

    <p className="text-lg leading-relaxed"><strong>Q4:</strong> Compare Worms and Viruses.</p>
    <table className="table-auto border-collapse border border-gray-300 mt-2">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">Feature</th>
          <th className="border px-4 py-2">Virus</th>
          <th className="border px-4 py-2">Worm</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Definition</td>
          <td className="border px-4 py-2">Malicious program attached to a host file to harm system.</td>
          <td className="border px-4 py-2">Self-replicating program that consumes system resources.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Remotely Controlled</td>
          <td className="border px-4 py-2">No</td>
          <td className="border px-4 py-2">Yes</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Spread Rate</td>
          <td className="border px-4 py-2">Moderate</td>
          <td className="border px-4 py-2">Fast</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Purpose</td>
          <td className="border px-4 py-2">Modify or damage information</td>
          <td className="border px-4 py-2">Consume CPU, memory, and resources</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Execution</td>
          <td className="border px-4 py-2">Dependent on file transfer</td>
          <td className="border px-4 py-2">Self-replicates without human help</td>
        </tr>
      </tbody>
    </table>

    <p className="text-lg leading-relaxed"><strong>Q5:</strong> How to make your system secure?</p>
    <p className="text-lg leading-relaxed">
      <strong>Solution:</strong> Keep your system updated, use firewall, install antivirus software, backup data regularly, and use strong passwords.
    </p>

  </div>
);

export default ComputerSecurityThreats;
