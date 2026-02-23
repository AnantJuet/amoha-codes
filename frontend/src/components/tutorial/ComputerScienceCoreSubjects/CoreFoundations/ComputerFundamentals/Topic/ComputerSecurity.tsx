import React from 'react';

const ComputerSecurityTutorial: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Computer Security ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Computer Security - Overview
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 05 Jul, 2024</p>

    <p className="text-lg leading-relaxed">
      Computer security is the practice of protecting computers, networks, software, and data from unauthorized access, misuse, theft, and other threats. With the widespread use of the Internet, systems are at risk from viruses, hacking, data theft, and damage.
    </p>

    <p className="text-lg leading-relaxed">
      Technology is advancing rapidly, but cybercriminals exploit these advancements for monetary gain, recognition, ransom, or other malicious purposes. Protecting computer systems is essential to prevent such risks.
    </p>

    <h2 className="text-3xl font-bold mt-6">Key Objectives of Computer Security</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Confidentiality</h3>
    <p className="text-lg leading-relaxed">
      Ensuring that information is accessed only by authorized individuals. Unauthorized disclosure is considered a loss of confidentiality. It includes:
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li>Data Confidentiality: Protecting private information from unauthorized access.</li>
      <li>Privacy: Ensuring individuals control what information is collected and shared about them.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Integrity</h3>
    <p className="text-lg leading-relaxed">
      Protecting information from unauthorized modification or destruction. Loss of integrity involves:
    </p>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li>Data Integrity: Ensures data is changed only in authorized ways.</li>
      <li>System Integrity: Ensures systems operate correctly without unauthorized manipulation.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">3. Availability</h3>
    <p className="text-lg leading-relaxed">
      Ensuring timely and reliable access to information. Loss of availability occurs when access to data or systems is disrupted.
    </p>

    <h2 className="text-3xl font-bold mt-6">Types of Computer Security</h2>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Cyber Security:</strong> Protects computers and networks from cyber attacks.</li>
      <li><strong>Information Security:</strong> Protects system information from theft or unauthorized use.</li>
      <li><strong>Application Security:</strong> Secures applications and databases from unauthorized access.</li>
      <li><strong>Network Security:</strong> Protects networks and user data from attacks like sniffing, spoofing, or man-in-the-middle attacks.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-6">Types of Cyber Attacks</h2>
    <ul className="list-disc list-inside ml-6 text-lg">
      <li><strong>Denial of Service (DoS):</strong> Floods a network with requests to disrupt service.</li>
      <li><strong>Backdoor:</strong> Malware installed along with legitimate software, granting unauthorized access.</li>
      <li><strong>Eavesdropping:</strong> Secretly listening to network communications to steal information.</li>
      <li><strong>Phishing:</strong> Tricking users into revealing sensitive information via fraudulent emails or websites.</li>
      <li><strong>Spoofing:</strong> Masquerading as a legitimate entity to gain unauthorized access (email, IP, MAC, biometric spoofing).</li>
      <li><strong>Malware:</strong> Malicious software designed to damage systems, e.g., adware, spyware, ransomware, Trojans.</li>
      <li><strong>Social Engineering:</strong> Manipulating users to extract confidential information.</li>
      <li><strong>Polymorphic Attacks:</strong> Attacks that change forms to evade detection.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-6">Steps to Ensure Computer Security</h2>
    <ul className="list-decimal list-inside ml-6 text-lg">
      <li>Keep your Operating System updated to reduce vulnerability.</li>
      <li>Use secure network connections; avoid public Wi-Fi.</li>
      <li>Install and update Antivirus software regularly.</li>
      <li>Enable a firewall to block unauthorized access.</li>
      <li>Create strong, unique passwords with upper/lowercase letters, numbers, and symbols.</li>
      <li>Be cautious about trusting unknown sources.</li>
      <li>Keep personal information private, especially on social media.</li>
      <li>Avoid downloading attachments from unverified emails.</li>
      <li>Shop online only on reputable websites.</li>
      <li>Learn computer security best practices and ethics.</li>
      <li>Report cyber attacks immediately to the cyber cell.</li>
      <li>Avoid pirated content that may contain malware.</li>
    </ul>

    <h2 className="text-3xl font-bold mt-6">Sample Questions</h2>
    <p className="text-lg leading-relaxed"><strong>Q1:</strong> What are the types of computer security?</p>
    <p className="text-lg leading-relaxed"><strong>Solution:</strong> Cyber Security, Information Security, Application Security, Network Security.</p>

    <p className="text-lg leading-relaxed"><strong>Q2:</strong> What is Cyber Security?</p>
    <p className="text-lg leading-relaxed"><strong>Solution:</strong> Securing computers, devices, networks, and systems from cyber attacks.</p>

    <p className="text-lg leading-relaxed"><strong>Q3:</strong> What is Social Engineering?</p>
    <p className="text-lg leading-relaxed"><strong>Solution:</strong> Manipulating users psychologically to extract confidential information.</p>

    <p className="text-lg leading-relaxed"><strong>Q4:</strong> What steps can be taken to ensure computer security?</p>
    <p className="text-lg leading-relaxed"><strong>Solution:</strong> Keep OS updated, use secure networks, install antivirus, and enable firewall.</p>

    <p className="text-lg leading-relaxed"><strong>Q5:</strong> What is an Antivirus? Name some examples.</p>
    <p className="text-lg leading-relaxed"><strong>Solution:</strong> Software that scans for viruses and isolates infected files. Examples: Quickheal, Norton, F-Secure, Kaspersky.</p>

  </div>
);

export default ComputerSecurityTutorial;
