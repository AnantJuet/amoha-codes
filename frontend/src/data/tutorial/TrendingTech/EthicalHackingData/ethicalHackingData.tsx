import React from "react";

export interface SidebarItem {
  label: string;
  href: string;
  isHeader?: boolean;
  children?: SidebarItem[];
}

export interface TopicContent {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export const tutorialData: SidebarItem[] = [
  { label: "Ethical Hacking Home", href: "eh_home" },
  { label: "Introduction", href: "eh_intro" },
  { label: "Legal Aspects", href: "eh_legal" },
  {
    label: "Types of Hackers",
    href: "eh_hacker_types",
    isHeader: true,
    children: [
      { label: "White Hat Hackers", href: "eh_white_hat" },
      { label: "Black Hat Hackers", href: "eh_black_hat" },
      { label: "Gray Hat Hackers", href: "eh_gray_hat" },
    ]
  },
  {
    label: "Methodologies",
    href: "eh_methodologies",
    isHeader: true,
    children: [
      { label: "Reconnaissance", href: "eh_recon" },
      { label: "Scanning", href: "eh_scanning" },
      { label: "Gaining Access", href: "eh_gaining_access" },
      { label: "Maintaining Access", href: "eh_maintaining_access" },
      { label: "Covering Tracks", href: "eh_covering_tracks" },
    ]
  },
  { label: "Footprinting", href: "eh_footprinting" },
  { label: "Scanning Networks", href: "eh_network_scanning" },
  { label: "Enumeration", href: "eh_enumeration" },
  { label: "Vulnerability Analysis", href: "eh_vuln_analysis" },
  { label: "System Hacking", href: "eh_system_hacking" },
  {
    label: "Malware",
    href: "eh_malware",
    isHeader: true,
    children: [
      { label: "Viruses", href: "eh_viruses" },
      { label: "Trojans", href: "eh_trojans" },
      { label: "Ransomware", href: "eh_ransomware" },
    ]
  },
  { label: "Social Engineering", href: "eh_social_engineering" },
  { label: "Phishing", href: "eh_phishing" },
  { label: "Network Security", href: "eh_network_security" },
  { label: "Web App Security", href: "eh_webapp_security" },
  {
    label: "Tools",
    href: "eh_tools",
    isHeader: true,
    children: [
      { label: "Nmap", href: "eh_nmap" },
      { label: "Metasploit", href: "eh_metasploit" },
      { label: "Wireshark", href: "eh_wireshark" },
      { label: "Burp Suite", href: "eh_burpsuite" },
    ]
  },
  { label: "Certifications", href: "eh_certifications" },
];

export const tutorialContent: Record<string, TopicContent> = {
  "eh_home": {
    title: "Ethical Hacking Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Welcome to Ethical Hacking
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>Ethical Hacking</strong> involves authorized attempts to gain unauthorized access to computer systems, applications, or data. It helps identify security vulnerabilities before malicious hackers can exploit them.
        </p>
        <p className="leading-relaxed mb-4">
          This tutorial covers the fundamentals of ethical hacking, from reconnaissance to exploitation, along with the tools and methodologies used by security professionals.
        </p>
        <h3 className="text-xl font-medium mb-3">What You Will Learn</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Understanding different types of hackers and their motivations</li>
          <li>Legal and ethical considerations in penetration testing</li>
          <li>Reconnaissance and information gathering techniques</li>
          <li>Network scanning and vulnerability assessment</li>
          <li>Common attack vectors and defense mechanisms</li>
          <li>Industry-standard tools and certifications</li>
        </ul>
      </>
    ),
  },
  "eh_intro": {
    title: "Introduction to Ethical Hacking",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is Ethical Hacking?
        </h2>
        <p className="leading-relaxed mb-4">
          Ethical hacking, also known as penetration testing or white-hat hacking, is the practice of testing computer systems, networks, and applications to find security vulnerabilities that could be exploited by malicious hackers.
        </p>
        <h3 className="text-xl font-medium mb-3">Key Concepts</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Authorization:</strong> Always obtain written permission before testing</li>
          <li><strong>Scope:</strong> Define clear boundaries for testing activities</li>
          <li><strong>Documentation:</strong> Record all findings and methods used</li>
          <li><strong>Reporting:</strong> Provide actionable recommendations</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Why is Ethical Hacking Important?</h3>
        <p className="leading-relaxed mb-4">
          Organizations need ethical hackers to proactively identify and fix security weaknesses before cybercriminals can exploit them. This helps protect sensitive data, maintain customer trust, and comply with regulations.
        </p>
      </>
    ),
  },
  "eh_legal": {
    title: "Legal Aspects of Ethical Hacking",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Legal Framework
        </h2>
        <p className="leading-relaxed mb-4">
          Understanding the legal aspects of ethical hacking is crucial. Unauthorized access to computer systems is illegal in most jurisdictions, even if done with good intentions.
        </p>
        <h3 className="text-xl font-medium mb-3">Key Legal Considerations</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Written Authorization:</strong> Always obtain formal permission before testing</li>
          <li><strong>Scope Agreement:</strong> Define exactly what systems can be tested</li>
          <li><strong>Non-Disclosure:</strong> Protect sensitive information discovered during testing</li>
          <li><strong>Compliance:</strong> Follow industry regulations (GDPR, HIPAA, PCI-DSS)</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Relevant Laws</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Computer Fraud and Abuse Act (CFAA) - United States</li>
          <li>Computer Misuse Act - United Kingdom</li>
          <li>IT Act 2000 - India</li>
          <li>Cybercrime Convention - International</li>
        </ul>
      </>
    ),
  },
  "eh_hacker_types": {
    title: "Types of Hackers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Understanding Hacker Classifications
        </h2>
        <p className="leading-relaxed mb-4">
          Hackers are classified based on their intentions and the legality of their actions. Understanding these categories helps distinguish ethical security work from malicious activities.
        </p>
        <h3 className="text-xl font-medium mb-3">Main Categories</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>White Hat:</strong> Authorized security professionals</li>
          <li><strong>Black Hat:</strong> Malicious hackers with criminal intent</li>
          <li><strong>Gray Hat:</strong> Operate in ethical gray areas</li>
          <li><strong>Script Kiddies:</strong> Use pre-made tools without understanding</li>
          <li><strong>Hacktivists:</strong> Hack for political or social causes</li>
        </ul>
      </>
    ),
  },
  "eh_white_hat": {
    title: "White Hat Hackers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          White Hat Hackers
        </h2>
        <p className="leading-relaxed mb-4">
          White hat hackers are security professionals who use their skills to help organizations improve their security posture. They work with explicit permission and follow ethical guidelines.
        </p>
        <h3 className="text-xl font-medium mb-3">Characteristics</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Work with proper authorization</li>
          <li>Follow responsible disclosure practices</li>
          <li>Document and report all findings</li>
          <li>Help fix vulnerabilities they discover</li>
          <li>Often hold security certifications</li>
        </ul>
      </>
    ),
  },
  "eh_black_hat": {
    title: "Black Hat Hackers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Black Hat Hackers
        </h2>
        <p className="leading-relaxed mb-4">
          Black hat hackers are individuals who break into systems with malicious intent. They exploit vulnerabilities for personal gain, to cause damage, or to steal sensitive information.
        </p>
        <h3 className="text-xl font-medium mb-3">Common Motivations</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Financial gain through data theft</li>
          <li>Corporate espionage</li>
          <li>Disruption of services</li>
          <li>Personal vendetta</li>
          <li>Political motivations</li>
        </ul>
      </>
    ),
  },
  "eh_gray_hat": {
    title: "Gray Hat Hackers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Gray Hat Hackers
        </h2>
        <p className="leading-relaxed mb-4">
          Gray hat hackers fall between white and black hat hackers. They may find vulnerabilities without authorization but typically report them rather than exploit them maliciously.
        </p>
        <h3 className="text-xl font-medium mb-3">Characteristics</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>May test systems without explicit permission</li>
          <li>Usually report vulnerabilities to owners</li>
          <li>May request compensation for findings</li>
          <li>Operate in legal gray areas</li>
        </ul>
      </>
    ),
  },
  "eh_methodologies": {
    title: "Hacking Methodologies",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Penetration Testing Methodology
        </h2>
        <p className="leading-relaxed mb-4">
          Ethical hackers follow structured methodologies to ensure thorough and consistent testing. The most common approach involves five phases.
        </p>
        <h3 className="text-xl font-medium mb-3">Five Phases of Hacking</h3>
        <ol className="list-decimal list-inside space-y-2 ml-4 mb-8">
          <li><strong>Reconnaissance:</strong> Gathering information about the target</li>
          <li><strong>Scanning:</strong> Identifying live hosts and open ports</li>
          <li><strong>Gaining Access:</strong> Exploiting vulnerabilities</li>
          <li><strong>Maintaining Access:</strong> Establishing persistence</li>
          <li><strong>Covering Tracks:</strong> Removing evidence of intrusion</li>
        </ol>
      </>
    ),
  },
  "eh_recon": {
    title: "Reconnaissance",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Reconnaissance Phase
        </h2>
        <p className="leading-relaxed mb-4">
          Reconnaissance is the first phase where ethical hackers gather information about the target. This can be passive (no direct interaction) or active (direct interaction with target systems).
        </p>
        <h3 className="text-xl font-medium mb-3">Passive Reconnaissance</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>WHOIS lookups</li>
          <li>DNS enumeration</li>
          <li>Search engine queries</li>
          <li>Social media analysis</li>
          <li>Public records research</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Active Reconnaissance</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Port scanning</li>
          <li>Network mapping</li>
          <li>Banner grabbing</li>
          <li>Social engineering calls</li>
        </ul>
      </>
    ),
  },
  "eh_scanning": {
    title: "Scanning Phase",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Scanning Phase
        </h2>
        <p className="leading-relaxed mb-4">
          The scanning phase involves actively probing target systems to identify open ports, running services, and potential vulnerabilities.
        </p>
        <h3 className="text-xl font-medium mb-3">Types of Scanning</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Network Scanning:</strong> Discovering live hosts</li>
          <li><strong>Port Scanning:</strong> Identifying open ports and services</li>
          <li><strong>Vulnerability Scanning:</strong> Finding security weaknesses</li>
        </ul>
      </>
    ),
  },
  "eh_gaining_access": {
    title: "Gaining Access",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Gaining Access Phase
        </h2>
        <p className="leading-relaxed mb-4">
          This phase involves exploiting discovered vulnerabilities to gain unauthorized access to target systems.
        </p>
        <h3 className="text-xl font-medium mb-3">Common Techniques</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Password cracking</li>
          <li>Exploiting software vulnerabilities</li>
          <li>SQL injection attacks</li>
          <li>Social engineering</li>
          <li>Session hijacking</li>
        </ul>
      </>
    ),
  },
  "eh_maintaining_access": {
    title: "Maintaining Access",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Maintaining Access Phase
        </h2>
        <p className="leading-relaxed mb-4">
          After gaining initial access, attackers may attempt to maintain persistent access to the compromised system.
        </p>
        <h3 className="text-xl font-medium mb-3">Persistence Techniques</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Installing backdoors</li>
          <li>Creating new user accounts</li>
          <li>Rootkit installation</li>
          <li>Scheduled tasks</li>
          <li>Registry modifications</li>
        </ul>
      </>
    ),
  },
  "eh_covering_tracks": {
    title: "Covering Tracks",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Covering Tracks Phase
        </h2>
        <p className="leading-relaxed mb-4">
          Malicious hackers attempt to hide evidence of their intrusion. Ethical hackers study these techniques to help organizations detect and prevent such activities.
        </p>
        <h3 className="text-xl font-medium mb-3">Common Techniques</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Clearing log files</li>
          <li>Modifying timestamps</li>
          <li>Disabling auditing</li>
          <li>Using encrypted channels</li>
          <li>Steganography</li>
        </ul>
      </>
    ),
  },
  "eh_footprinting": {
    title: "Footprinting",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Footprinting Techniques
        </h2>
        <p className="leading-relaxed mb-4">
          Footprinting is the process of collecting information about a target organization's network infrastructure, systems, and employees.
        </p>
        <h3 className="text-xl font-medium mb-3">Information Gathered</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Domain names and IP addresses</li>
          <li>Network topology</li>
          <li>Employee information</li>
          <li>Technology stack</li>
          <li>Security policies</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Tools Used</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>WHOIS databases</li>
          <li>Shodan</li>
          <li>theHarvester</li>
          <li>Maltego</li>
        </ul>
      </>
    ),
  },
  "eh_network_scanning": {
    title: "Network Scanning",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Network Scanning
        </h2>
        <p className="leading-relaxed mb-4">
          Network scanning identifies live hosts, open ports, and services running on a network. This information is crucial for identifying potential attack vectors.
        </p>
        <h3 className="text-xl font-medium mb-3">Scan Types</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>TCP Connect Scan:</strong> Full TCP handshake</li>
          <li><strong>SYN Scan:</strong> Half-open scan</li>
          <li><strong>UDP Scan:</strong> For UDP services</li>
          <li><strong>FIN Scan:</strong> Stealthy scan technique</li>
        </ul>
      </>
    ),
  },
  "eh_enumeration": {
    title: "Enumeration",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Enumeration
        </h2>
        <p className="leading-relaxed mb-4">
          Enumeration involves extracting detailed information from target systems, including usernames, group memberships, network shares, and application details.
        </p>
        <h3 className="text-xl font-medium mb-3">Types of Enumeration</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>NetBIOS enumeration</li>
          <li>SNMP enumeration</li>
          <li>LDAP enumeration</li>
          <li>NTP enumeration</li>
          <li>SMTP enumeration</li>
          <li>DNS enumeration</li>
        </ul>
      </>
    ),
  },
  "eh_vuln_analysis": {
    title: "Vulnerability Analysis",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Vulnerability Analysis
        </h2>
        <p className="leading-relaxed mb-4">
          Vulnerability analysis involves identifying, quantifying, and prioritizing security weaknesses in systems, applications, and networks.
        </p>
        <h3 className="text-xl font-medium mb-3">Vulnerability Types</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Software vulnerabilities</li>
          <li>Configuration weaknesses</li>
          <li>Missing patches</li>
          <li>Weak passwords</li>
          <li>Design flaws</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Scanning Tools</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Nessus</li>
          <li>OpenVAS</li>
          <li>Qualys</li>
          <li>Nexpose</li>
        </ul>
      </>
    ),
  },
  "eh_system_hacking": {
    title: "System Hacking",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          System Hacking
        </h2>
        <p className="leading-relaxed mb-4">
          System hacking involves gaining unauthorized access to computer systems by exploiting vulnerabilities and bypassing security controls.
        </p>
        <h3 className="text-xl font-medium mb-3">Common Techniques</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Password attacks (brute force, dictionary)</li>
          <li>Privilege escalation</li>
          <li>Keylogging</li>
          <li>Spyware installation</li>
          <li>Rootkit deployment</li>
        </ul>
      </>
    ),
  },
  "eh_malware": {
    title: "Malware Overview",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Understanding Malware
        </h2>
        <p className="leading-relaxed mb-4">
          Malware (malicious software) is designed to damage, disrupt, or gain unauthorized access to computer systems. Understanding malware is essential for ethical hackers.
        </p>
        <h3 className="text-xl font-medium mb-3">Malware Categories</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Viruses:</strong> Self-replicating code that attaches to programs</li>
          <li><strong>Worms:</strong> Self-propagating network threats</li>
          <li><strong>Trojans:</strong> Disguised as legitimate software</li>
          <li><strong>Ransomware:</strong> Encrypts data for ransom</li>
          <li><strong>Spyware:</strong> Covertly gathers information</li>
        </ul>
      </>
    ),
  },
  "eh_viruses": {
    title: "Computer Viruses",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Computer Viruses
        </h2>
        <p className="leading-relaxed mb-4">
          A computer virus is malicious code that attaches itself to legitimate programs and replicates when executed.
        </p>
        <h3 className="text-xl font-medium mb-3">Virus Types</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Boot sector viruses</li>
          <li>File infector viruses</li>
          <li>Macro viruses</li>
          <li>Polymorphic viruses</li>
          <li>Metamorphic viruses</li>
        </ul>
      </>
    ),
  },
  "eh_trojans": {
    title: "Trojans",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Trojan Horses
        </h2>
        <p className="leading-relaxed mb-4">
          Trojans disguise themselves as legitimate software but contain malicious functionality. Unlike viruses, they do not self-replicate.
        </p>
        <h3 className="text-xl font-medium mb-3">Trojan Types</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Remote Access Trojans (RATs)</li>
          <li>Banking Trojans</li>
          <li>Downloader Trojans</li>
          <li>Backdoor Trojans</li>
        </ul>
      </>
    ),
  },
  "eh_ransomware": {
    title: "Ransomware",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Ransomware
        </h2>
        <p className="leading-relaxed mb-4">
          Ransomware encrypts victim's files and demands payment for decryption keys. It has become one of the most damaging forms of malware.
        </p>
        <h3 className="text-xl font-medium mb-3">Prevention Strategies</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Regular backups</li>
          <li>Security awareness training</li>
          <li>Email filtering</li>
          <li>Patch management</li>
          <li>Network segmentation</li>
        </ul>
      </>
    ),
  },
  "eh_social_engineering": {
    title: "Social Engineering",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Social Engineering
        </h2>
        <p className="leading-relaxed mb-4">
          Social engineering manipulates people into divulging confidential information or performing actions that compromise security. It exploits human psychology rather than technical vulnerabilities.
        </p>
        <h3 className="text-xl font-medium mb-3">Techniques</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Pretexting:</strong> Creating a fabricated scenario</li>
          <li><strong>Baiting:</strong> Offering something enticing</li>
          <li><strong>Quid Pro Quo:</strong> Offering a service in exchange</li>
          <li><strong>Tailgating:</strong> Physical access exploitation</li>
          <li><strong>Vishing:</strong> Voice phishing</li>
        </ul>
      </>
    ),
  },
  "eh_phishing": {
    title: "Phishing Attacks",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Phishing
        </h2>
        <p className="leading-relaxed mb-4">
          Phishing uses deceptive emails, websites, or messages to trick users into revealing sensitive information like passwords and credit card numbers.
        </p>
        <h3 className="text-xl font-medium mb-3">Phishing Types</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Spear Phishing:</strong> Targeted attacks on specific individuals</li>
          <li><strong>Whaling:</strong> Targeting high-level executives</li>
          <li><strong>Clone Phishing:</strong> Duplicating legitimate emails</li>
          <li><strong>Smishing:</strong> SMS-based phishing</li>
        </ul>
      </>
    ),
  },
  "eh_network_security": {
    title: "Network Security",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Network Security
        </h2>
        <p className="leading-relaxed mb-4">
          Network security encompasses policies, practices, and technologies designed to protect network infrastructure from unauthorized access and attacks.
        </p>
        <h3 className="text-xl font-medium mb-3">Security Controls</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Firewalls</li>
          <li>Intrusion Detection Systems (IDS)</li>
          <li>Intrusion Prevention Systems (IPS)</li>
          <li>Virtual Private Networks (VPN)</li>
          <li>Network segmentation</li>
          <li>Access control lists</li>
        </ul>
      </>
    ),
  },
  "eh_webapp_security": {
    title: "Web Application Security",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Web Application Security
        </h2>
        <p className="leading-relaxed mb-4">
          Web application security focuses on protecting websites and web applications from vulnerabilities that could be exploited by attackers.
        </p>
        <h3 className="text-xl font-medium mb-3">OWASP Top 10 Vulnerabilities</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Injection attacks</li>
          <li>Broken authentication</li>
          <li>Sensitive data exposure</li>
          <li>XML External Entities (XXE)</li>
          <li>Broken access control</li>
          <li>Security misconfiguration</li>
          <li>Cross-Site Scripting (XSS)</li>
          <li>Insecure deserialization</li>
          <li>Using components with known vulnerabilities</li>
          <li>Insufficient logging and monitoring</li>
        </ul>
      </>
    ),
  },
  "eh_tools": {
    title: "Ethical Hacking Tools",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Essential Tools for Ethical Hackers
        </h2>
        <p className="leading-relaxed mb-4">
          Ethical hackers use various tools to perform security assessments. These tools help automate and streamline the testing process.
        </p>
        <h3 className="text-xl font-medium mb-3">Tool Categories</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Reconnaissance:</strong> Maltego, theHarvester, Shodan</li>
          <li><strong>Scanning:</strong> Nmap, Masscan, Zenmap</li>
          <li><strong>Vulnerability Assessment:</strong> Nessus, OpenVAS, Nexpose</li>
          <li><strong>Exploitation:</strong> Metasploit, BeEF, SQLmap</li>
          <li><strong>Web Testing:</strong> Burp Suite, OWASP ZAP, Nikto</li>
          <li><strong>Password Cracking:</strong> John the Ripper, Hashcat</li>
        </ul>
      </>
    ),
  },
  "eh_nmap": {
    title: "Nmap",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Nmap - Network Mapper
        </h2>
        <p className="leading-relaxed mb-4">
          Nmap is a free and open-source network scanner used for network discovery and security auditing.
        </p>
        <h3 className="text-xl font-medium mb-3">Common Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Basic scan
nmap target.com

# Service version detection
nmap -sV target.com

# OS detection
nmap -O target.com

# Aggressive scan
nmap -A target.com`}
          </pre>
        </div>
      </>
    ),
  },
  "eh_metasploit": {
    title: "Metasploit Framework",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Metasploit Framework
        </h2>
        <p className="leading-relaxed mb-4">
          Metasploit is a powerful penetration testing framework that provides information about security vulnerabilities and aids in exploitation.
        </p>
        <h3 className="text-xl font-medium mb-3">Key Components</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Exploits:</strong> Code to take advantage of vulnerabilities</li>
          <li><strong>Payloads:</strong> Code executed after successful exploitation</li>
          <li><strong>Auxiliary:</strong> Supporting modules for scanning and fuzzing</li>
          <li><strong>Encoders:</strong> Payload obfuscation tools</li>
        </ul>
      </>
    ),
  },
  "eh_wireshark": {
    title: "Wireshark",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Wireshark
        </h2>
        <p className="leading-relaxed mb-4">
          Wireshark is a network protocol analyzer that captures and interactively browses network traffic.
        </p>
        <h3 className="text-xl font-medium mb-3">Use Cases</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Network troubleshooting</li>
          <li>Security analysis</li>
          <li>Protocol development</li>
          <li>Malware analysis</li>
          <li>Evidence gathering</li>
        </ul>
      </>
    ),
  },
  "eh_burpsuite": {
    title: "Burp Suite",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Burp Suite
        </h2>
        <p className="leading-relaxed mb-4">
          Burp Suite is an integrated platform for performing security testing of web applications.
        </p>
        <h3 className="text-xl font-medium mb-3">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Proxy:</strong> Intercept and modify HTTP traffic</li>
          <li><strong>Scanner:</strong> Automated vulnerability detection</li>
          <li><strong>Intruder:</strong> Automated attack tool</li>
          <li><strong>Repeater:</strong> Manual request manipulation</li>
          <li><strong>Decoder:</strong> Transform encoded data</li>
        </ul>
      </>
    ),
  },
  "eh_certifications": {
    title: "Certifications",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Ethical Hacking Certifications
        </h2>
        <p className="leading-relaxed mb-4">
          Professional certifications validate skills and knowledge in ethical hacking and cybersecurity.
        </p>
        <h3 className="text-xl font-medium mb-3">Popular Certifications</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>CEH:</strong> Certified Ethical Hacker (EC-Council)</li>
          <li><strong>OSCP:</strong> Offensive Security Certified Professional</li>
          <li><strong>GPEN:</strong> GIAC Penetration Tester</li>
          <li><strong>CompTIA PenTest+:</strong> Entry-level penetration testing</li>
          <li><strong>CREST:</strong> Council of Registered Ethical Security Testers</li>
          <li><strong>eJPT:</strong> eLearnSecurity Junior Penetration Tester</li>
        </ul>
      </>
    ),
  },
};
