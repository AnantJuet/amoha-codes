import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">
    {/* ================= Web Security Considerations ================= */}
    <h1 className="text-4xl font-extrabold   border-b-2 pb-2">
      Web Security Considerations
    </h1>
    <p className="text-sm text-gray-500">
      Last Updated : 23 Jul, 2025
    </p>

    {/* Intro */}
    <ul className="list-disc list-inside leading-relaxed space-y-3">
      <li>
        <strong>Definition:</strong> Web security protects data traveling
        across the internet or within networks. It safeguards websites, web
        apps, and servers from attacks, breaches, and unauthorized access.
      </li>
      <li>
        <strong>Importance:</strong> As cyberattacks grow more advanced, strong
        web security is more essential than ever.
      </li>
      <li>
        <strong>Fact:</strong> Over 85% of websites are vulnerable to at least
        one form of attack — highlighting the need for strong defense.
      </li>
      <li>
        This topic explores the main aspects of web security and why it’s
        critical for every online presence.
      </li>
    </ul>

    {/* What is Web Security */}
    <h2 className="text-3xl font-bold  mt-8">
      What is Web Security?
    </h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        Web security keeps websites, servers, and users safe from internet-based
        attacks such as viruses, phishing, and malware.
      </li>
      <li>
        Uses tools like firewalls, intrusion detection, content filters, and
        antivirus programs to block harmful activities.
      </li>
      <li>
        Includes protection of web apps, APIs, and cloud systems to ensure
        online safety.
      </li>
      <li>
        <strong>Example:</strong> Protecting data when transferring between a
        client and a web server.
      </li>
    </ul>

    {/* Best Practices */}
    <h2 className="text-3xl font-bold  mt-8">
      Best Practices for Securing Your Website
    </h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>Keep software updated to fix vulnerabilities.</li>
      <li>Prevent SQL Injection with parameterized queries.</li>
      <li>Stop Cross-Site Scripting (XSS) by sanitizing user inputs.</li>
      <li>Limit error details to avoid leaking system information.</li>
      <li>Validate user input on both client and server sides.</li>
      <li>Use strong passwords with mixed characters and symbols.</li>
      <li>Enable HTTPS for encrypted communication.</li>
      <li>Enable Two-Factor Authentication (2FA) for extra protection.</li>
      <li>
        Apply Access Control with the principle of least privilege for users.
      </li>
      <li>Monitor and log all activities to detect suspicious actions.</li>
      <li>
        Use modern frameworks like the <strong>MEAN stack</strong> (MongoDB,
        Express.js, Angular, Node.js) for better built-in security.
      </li>
    </ul>

    {/* Major Threats */}
    <h2 className="text-3xl font-bold  mt-8">
      Major Cyber Threats Impacting Web Security
    </h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Ransomware</li>
      <li>SQL Injection</li>
      <li>Phishing</li>
      <li>Viruses and Worms</li>
      <li>Spyware</li>
      <li>Cross-site Scripting (XSS)</li>
      <li>Code Injection</li>
      <li>Denial of Service (DoS)</li>
    </ul>
    <p className="text-sm text-gray-500 dark:text-gray-400">
      Note: Learn more about cyber threats in our{" "}
      <strong>Top 10 Cybersecurity Threats 2025</strong>.
    </p>

    {/* Latest Trends */}
    <h2 className="text-3xl font-bold  mt-8">
      Latest Trends in Web Security
    </h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>AI & Machine Learning:</strong> Detects and responds to threats
        in real-time.
      </li>
      <li>
        <strong>Zero Trust Security:</strong> Never trust by default—always
        verify users and devices.
      </li>
      <li>
        <strong>Secure DevOps (DevSecOps):</strong> Builds security into every
        phase of software development.
      </li>
      <li>
        <strong>IoT Security:</strong> Protects connected devices from network
        vulnerabilities.
      </li>
    </ul>

    {/* Tools */}
    <h2 className="text-3xl font-bold  mt-8">
      Top Web Security Tools for Developers and Experts
    </h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>OWASP ZAP:</strong> Free, open-source scanner for web app
        security flaws.
      </li>
      <li>
        <strong>Burp Suite:</strong> Professional tool for web penetration
        testing.
      </li>
      <li>
        <strong>Cloudflare:</strong> Offers DDoS protection and CDN
        optimization.
      </li>
      <li>
        <strong>SSL Labs:</strong> Analyzes SSL/TLS configuration for strength
        and issues.
      </li>
      <li>
        <strong>Snyk:</strong> Detects and fixes vulnerabilities in open-source
        libraries.
      </li>
    </ul>
    <p className="text-sm text-gray-700">
      Note: <strong>Cloudflare</strong> scores 10/10, followed by{" "}
      <strong>Burp Suite (9)</strong>, <strong>OWASP ZAP</strong> and{" "}
      <strong>Snyk (8)</strong>. <strong>SSL Labs</strong> ranks lowest with 7.
    </p>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold  mt-8">Conclusion</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        Web security ensures website safety, data protection, and system
        reliability.
      </li>
      <li>
        Regular updates, strong passwords, HTTPS, and input validation are key
        to preventing cyberattacks.
      </li>
      <li>
        Staying informed with modern security tools and practices helps build a
        robust defense.
      </li>
    </ul>
  </div>
);

export default Home;
