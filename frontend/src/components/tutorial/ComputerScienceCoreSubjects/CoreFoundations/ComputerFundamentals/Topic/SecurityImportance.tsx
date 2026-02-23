import React from 'react';

const ComputerSecurityTutorial: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Computer Security ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Computer Security - Overview
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 05 Jul, 2024</p>

    <p className="text-lg leading-relaxed">
      Computer security involves protecting computers, networks, software, and data from unauthorized access, misuse, theft, or damage. While the Internet provides many benefits, it also exposes systems to threats like viruses, hacking, and data loss.
    </p>

    <p className="text-lg leading-relaxed">
      As technology grows, cybercriminals target systems for financial gain, recognition, ransom, or malicious purposes. Implementing proper computer security measures is essential to safeguard our systems.
    </p>

    <h2 className="text-3xl font-bold mt-6">Key Objectives of Computer Security</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Confidentiality</h3>
    <p className="text-lg leading-relaxed">
      Ensuring information is accessible only to authorized individuals. Loss of confidentiality occurs when information is disclosed to unauthorized parties. Includes:
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Data Confidentiality:</strong> Preventing unauthorized access to sensitive information.</li>
      <li><strong>Privacy:</strong> Ensuring individuals control what data about them is collected and shared.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Integrity</h3>
    <p className="text-lg leading-relaxed">
      Protecting data from unauthorized modification or destruction. Loss of integrity occurs when information is tampered with. Includes:
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Data Integrity:</strong> Ensuring data and programs are changed only in authorized ways.</li>
      <li><strong>System Integrity:</strong> Ensuring systems perform as intended without unauthorized manipulation.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">3. Availability</h3>
    <p className="text-lg leading-relaxed">
      Ensuring timely access to information and systems. Loss of availability occurs when users are unable to access the data or services they need.
    </p>

    <h2 className="text-3xl font-bold mt-6">Types of Computer Security</h2>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Cyber Security:</strong> Protects devices and networks from cyber attacks.</li>
      <li><strong>Information Security:</strong> Protects system data from theft, unauthorized use, or piracy.</li>
      <li><strong>Application Security:</strong> Secures applications and their databases to protect user data.</li>
      <li><strong>Network Security:</strong> Secures networks and data against attacks like sniffing, spoofing, or man-in-the-middle attacks.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-6">Types of Cyber Attacks</h2>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Denial of Service (DoS):</strong> Flooding a network with requests to disrupt service.</li>
      <li><strong>Backdoor:</strong> Malware installed along with legitimate software, allowing unauthorized access.</li>
      <li><strong>Eavesdropping:</strong> Secretly listening to communications to steal information.</li>
      <li><strong>Phishing:</strong> Tricking users into revealing sensitive data through fake emails or websites.</li>
      <li><strong>Spoofing:</strong> Masquerading as a trusted entity to gain access to data or resources.</li>
      <li><strong>Malware:</strong> Malicious software designed to damage or disrupt systems (e.g., adware, spyware, ransomware, Trojan horse).</li>
      <li><strong>Social Engineering:</strong> Manipulating users to reveal confidential information.</li>
      <li><strong>Polymorphic Attacks:</strong> Attacks that change forms to evade detection.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-6">Steps to Ensure Computer Security</h2>
    <ul className="list-decimal list-inside ml-6 text-lg">
      <li>Keep your Operating System updated to reduce vulnerability.</li>
      <li>Use secure network connections; avoid public Wi-Fi.</li>
      <li>Install and regularly update Antivirus software.</li>
      <li>Enable firewall to block unauthorized access.</li>
      <li>Create strong, unique passwords and update them periodically.</li>
      <li>Be cautious about trusting unknown sources.</li>
      <li>Keep personal information private, especially on social media.</li>
      <li>Avoid downloading attachments from unverified emails.</li>
      <li>Shop online only on reputable websites.</li>
      <li>Learn computer security practices and ethics.</li>
      <li>Report cyber attacks promptly to authorities.</li>
      <li>Avoid pirated software or media to prevent malware infections.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-6">Sample Questions</h2>
    <p className="text-lg leading-relaxed"><strong>Q1:</strong> What are the types of computer security?</p>
    <p className="text-lg leading-relaxed"><strong>Solution:</strong> Cyber Security, Information Security, Application Security, Network Security.</p>

    <p className="text-lg leading-relaxed"><strong>Q2:</strong> What is Cyber Security?</p>
    <p className="text-lg leading-relaxed"><strong>Solution:</strong> Protecting computers, devices, and networks from cyber attacks.</p>

    <p className="text-lg leading-relaxed"><strong>Q3:</strong> What is Social Engineering?</p>
    <p className="text-lg leading-relaxed"><strong>Solution:</strong> Manipulating users psychologically to extract confidential information.</p>

    <p className="text-lg leading-relaxed"><strong>Q4:</strong> Steps to ensure computer security?</p>
    <p className="text-lg leading-relaxed"><strong>Solution:</strong> Keep OS updated, use secure networks, install antivirus, and enable firewall.</p>

    <p className="text-lg leading-relaxed"><strong>Q5:</strong> What is an antivirus? Name some examples.</p>
    <p className="text-lg leading-relaxed"><strong>Solution:</strong> Software that scans for viruses and isolates infected files. Examples: Quickheal, Norton, F-Secure, Kaspersky.</p>

  </div>
);

export default ComputerSecurityTutorial;
