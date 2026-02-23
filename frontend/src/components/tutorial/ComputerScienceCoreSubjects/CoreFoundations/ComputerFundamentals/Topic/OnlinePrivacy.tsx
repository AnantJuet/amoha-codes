import React from 'react';

const OnlinePrivacyTheory: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Online Privacy: Definition, Risks, and Protection
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 20 Feb, 2023</p>

    {/* ================= Overview ================= */}
    <p className="text-lg leading-relaxed">
      Online privacy refers to the protection of personal information shared, stored, or transmitted over the Internet. Just as in real life we value our privacy, it is equally important in the digital world. With the widespread use of social media, apps, and online services, personal data is constantly at risk. Many times, we unknowingly expose our privacy by sharing sensitive information or interacting with untrusted services.
    </p>

    {/* ================= How Privacy is Affected ================= */}
    <h2 className="text-3xl font-bold mt-6">How Online Privacy is Affected</h2>
    <ul className="list-disc list-inside ml-6 text-lg space-y-2">
      <li><strong>Spying and Snooping:</strong> Social media and online platforms make it easy for attackers to monitor personal activity. Sharing sensitive information or connecting with strangers can compromise privacy.</li>
      <li><strong>Website Tracking:</strong> Cookies and other tracking technologies collect user behavior. Some websites misuse this data, putting your privacy at risk.</li>
      <li><strong>Phishing Attacks:</strong> Attackers lure users with fake offers, emails, or messages to steal sensitive information like bank details and passwords.</li>
      <li><strong>Information Mishandling:</strong> Unprotected networks and unencrypted data can be intercepted or modified by third parties during transmission.</li>
      <li><strong>Location Tracking:</strong> Apps requesting location access can track movements. While legitimate apps may use it for convenience, malicious apps may misuse this information.</li>
      <li><strong>Identity Theft:</strong> Criminals can impersonate users by stealing personal information, creating fake accounts, or committing fraud. This is a common and severe privacy issue.</li>
    </ul>

    {/* ================= How to Protect Your Privacy ================= */}
    <h2 className="text-3xl font-bold mt-6">How to Protect Your Privacy</h2>
    <ul className="list-disc list-inside ml-6 text-lg space-y-2">
      <li>Limit personal information shared on social media; avoid posting every detail of your life online.</li>
      <li>Use secure networks and avoid public Wi-Fi for sensitive tasks.</li>
      <li>Visit only secure websites (HTTPS) and avoid clicking unknown links.</li>
      <li>Install apps from trusted sources and avoid pirated content.</li>
      <li>Keep your antivirus software up to date (e.g., Norton, Kaspersky, Quick Heal).</li>
      <li>Enable firewalls to block malicious access attempts.</li>
      <li>Use strong, unique passwords for all accounts and consider password managers like KeePass X or Clipperz.</li>
      <li>Enable two-step or multi-factor authentication (OTP, tokens) for accounts.</li>
      <li>Encrypt sensitive information before sharing online.</li>
      <li>Stay informed about recent scams and cybersecurity threats.</li>
      <li>Report cybercrime incidents to authorities or cyber cells to prevent further abuse.</li>
    </ul>

    {/* ================= Privacy Laws in India ================= */}
    <h2 className="text-3xl font-bold mt-6">Privacy Laws in India</h2>
    <ul className="list-disc list-inside ml-6 text-lg space-y-2">
      <li><strong>Information Technology Act 2000:</strong> Provides a legal framework for cybercrime and e-commerce. Amended in 2008.</li>
      <li><strong>Section 43A:</strong> Mandates reasonable security practices for sensitive personal information and compensation for wrongful loss or gain.</li>
      <li><strong>Section 72A:</strong> Provides penalties, including imprisonment up to 3 years or fines, for wrongful disclosure of personal information.</li>
      <li><strong>Cert-In:</strong> Indian Computer Emergency Response Team, a national agency that handles cyber attacks like phishing and data breaches.</li>
    </ul>

    {/* ================= Sample Questions ================= */}
    <h2 className="text-3xl font-bold mt-6">Sample Questions</h2>
    <ol className="list-decimal list-inside ml-6 text-lg space-y-2">
      <li>
        <strong>Q:</strong> What is online privacy?<br />
        <strong>A:</strong> Online privacy, or internet privacy, is the protection of personal information and activities conducted over the Internet.
      </li>
      <li>
        <strong>Q:</strong> What is a password manager?<br />
        <strong>A:</strong> A password manager generates strong passwords using secure algorithms and stores them safely for the user. Examples: KeePass X, Clipperz, Password Gorilla.
      </li>
      <li>
        <strong>Q:</strong> What is identity theft?<br />
        <strong>A:</strong> Identity theft is the illegal use of someone else's personal information to create fake accounts or commit fraud.
      </li>
      <li>
        <strong>Q:</strong> Name two ways to protect online privacy.<br />
        <strong>A:</strong> Connect only to secure networks and use strong, unique passwords for each account.
      </li>
      <li>
        <strong>Q:</strong> Mention a privacy law in India.<br />
        <strong>A:</strong> Section 43A of the IT Act 2000, which enforces security practices for sensitive personal data.
      </li>
    </ol>

  </div>
);

export default OnlinePrivacyTheory;
