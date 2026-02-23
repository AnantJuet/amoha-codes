import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    {/* Main Title */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      💻 Computer Fundamentals Tutorial
    </h1>
    <p className="text-sm">Last Updated : 26 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      This Computer Fundamentals Tutorial covers everything from basic to advanced concepts, including computer hardware,
      software, operating systems, peripherals, etc.
    </p>

    

    {/* Why Learn Computer Fundamentals */}
    <h2 className="text-3xl font-bold  mt-8">Why Learn Computer Fundamentals</h2>
    <p className="italic">Your computer can solve complex problems in milliseconds!</p>
    <ul className="list-disc list-inside space-y-2">
      <li>Helps you understand how computers work and solve problems effectively.</li>
      <li>Makes it easier to learn new technologies and improve career opportunities.</li>
      <li>Enables safe and efficient use of computers and software.</li>
      <li>Builds confidence to adapt to rapid changes in technology.</li>
      <li>
        Important for your career as almost every working professional uses computers in one or the other form.
      </li>
    </ul>

    <div className="p-4 border-l-4 rounded-lg">
      <strong>💡 Tip:</strong> Do you wish to learn in a scheduled manner? Try our ongoing free{' '}
      <span className="font-semibold text-purple-500">Computer Fundamentals Course</span> with weekly topic coverage,
      notes, and daily quizzes.
    </div>

    {/* Section 1 */}
    <h2 className="text-2xl font-bold ">1. Introduction</h2>
    <p>
      Computers have become an integral part of our daily lives, evolving from simple calculation machines to complex
      systems. In this section, we will cover the basics, explore their history, and discuss different types of
      computers.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Computer and its Types</li>
      <li>Applications of Computers</li>
    </ul>

    {/* Section 2 */}
    <h2 className="text-2xl font-bold ">2. Components</h2>
    <p>
      A computer has three basic components: the CPU, input devices, and output devices. The main function of the CPU is
      to process data received from the input devices and present the results to the user through the output devices.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Hardware</li>
      <li>Software</li>
      <li>Central Processing Unit (CPU)</li>
      <li>Computer Memory</li>
      <li>Input Devices</li>
      <li>Output Devices</li>
    </ul>

    {/* Section 3 */}
    <h2 className="text-2xl font-bold ">3. Operating Systems</h2>
    <p>
      An operating system (OS) is system software that manages hardware and software resources, enabling the execution
      of programs.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Introduction</li>
      <li>Windows</li>
      <li>Linux</li>
      <li>iOS</li>
      <li>macOS</li>
      <li>ChromeOS</li>
    </ul>

    {/* Section 4 */}
    <h2 className="text-2xl font-bold ">4. Internet & World Wide Web (WWW)</h2>
    <p>
      The Internet is a vast global network of interconnected computers and devices, while the World Wide Web (WWW) is a
      service that operates over the Internet.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Web Browser</li>
      <li>Web Server</li>
      <li>Web Protocols</li>
      <li>Web Security</li>
      <li>Databases</li>
      <li>Internet</li>
      <li>WiFi</li>
    </ul>

    {/* Section 5 */}
    <h2 className="text-2xl font-bold ">5. Office Tools</h2>
    <p>
      Office tools are software applications designed to assist with workplace tasks such as writing documents, creating
      presentations, managing data, and more.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Word Processing: MS Word, Google Docs</li>
      <li>Spreadsheets: MS Excel, Google Sheets</li>
      <li>Presentations: MS PowerPoint, Google Slides</li>
      <li>Email Clients: Outlook, Gmail</li>
      <li>Collaboration Tools: Google Drive, OneDrive, Dropbox</li>
    </ul>

    {/* Section 6 */}
    <h2 className="text-2xl font-bold ">6. Shortcut Keys</h2>
    <p>
      Computer shortcut keys are combinations of keyboard keys that allow you to perform specific tasks quickly.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Shortcut Keys</li>
      <li>Function Keys on Keyboard</li>
      <li>Windows Shortcut Keys</li>
      <li>Shortcuts for Ubuntu</li>
    </ul>

    {/* Section 7 */}
    <h2 className="text-2xl font-bold ">7. Key Comparison</h2>
    <p>Below are essential topics that every computer science student should know:</p>
    <ul className="list-disc list-inside space-y-1">
      <li>RAM vs ROM</li>
      <li>Hard Disk vs Floppy Disk</li>
      <li>CD-ROM vs Magnetic Disks</li>
      <li>OCR vs MICR</li>
      <li>HDD vs SSD</li>
      <li>CD vs DVD</li>
      <li>Software vs Utility Software</li>
      <li>System Software vs Application Software</li>
      <li>Barcode vs QR Code</li>
    </ul>

    {/* Section 8 */}
    <h2 className="text-2xl font-bold ">8. Introduction to Programming</h2>
    <p>
      This section provides an overview of programming languages, their types, and some fundamental concepts.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>C</li>
      <li>C++</li>
      <li>C#</li>
      <li>Java</li>
      <li>Python</li>
      <li>JavaScript</li>
      <li>Logic Building Problems</li>
    </ul>

    {/* Section 9 */}
    <h2 className="text-2xl font-bold ">9. Computer Networks</h2>
    <p>
      Computer networks connect multiple computers and devices to share resources, exchange data, and facilitate
      communication.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>Introduction</li>
      <li>Types of Networks (LAN, WAN, MAN)</li>
      <li>Network Topologies</li>
      <li>Web Protocols</li>
      <li>Network Devices</li>
    </ul>

    {/* Section 10 */}
    <h2 className="text-2xl font-bold ">10. Security and Privacy</h2>
    <p>
      Cybercrime is a major issue in today’s digital age. In this section, we explore common threats and learn how to
      protect yourself online.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>What is Computer Security?</li>
      <li>Importance of Computer Security</li>
      <li>Common Security Threats</li>
      <li>Malware</li>
      <li>Network Security Measures</li>
      <li>Access Control</li>
      <li>User Authentication</li>
      <li>Online Privacy</li>
    </ul>
    <p className="text-red-600 font-medium">
      ⚠️ Don’t click unknown email links — they might contain viruses!
    </p>

    {/* Section 11 */}
    <h2 className="text-2xl font-bold ">11. Careers & Jobs in Computer Science</h2>
    <p>
      Computer Science opens up many opportunities across industries. Here are some top career paths after gaining
      relevant skills.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>The Role of Computers in Tech Careers</li>
      <li>Non-Tech Roles</li>
    </ul>
  </div>
);

export default Home;


// import React from "react";

// const Home: React.FC = () => (
//   <>
  

//     {/* Main Title */}
//     <h1 className="text-4xl font-extrabold dark:text-white border-b-2 pb-2">
//       💻 Computer Fundamentals Tutorial
//     </h1>
//     <p className="text-sm text-gray-500 dark:text-gray-300">Last Updated : 26 Aug, 2025</p>

//     {/* Intro Paragraph */}
//     <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
//       This Computer Fundamentals Tutorial covers everything from basic to advanced concepts,
//       including computer hardware, software, operating systems, peripherals, etc.
//     </p>

//     {/* Why Learn */}
//     <h2 className="text-3xl font-bold mt-8">
//       Why Learn Computer Fundamentals
//     </h2>
//     <p className="italic text-gray-700 dark:text-gray-300">
//       Your computer can solve complex problems in milliseconds!
//     </p>
//     <ul className="list-disc list-inside space-y-2">
//       <li>Helps you understand how computers work and solve problems effectively.</li>
//       <li>Makes it easier to learn new technologies and improve career opportunities.</li>
//       <li>Enables safe and efficient use of computers and software.</li>
//       <li>Builds confidence to adapt to rapid changes in technology.</li>
//       <li>Essential for almost every professional career today.</li>
//     </ul>

//     <div className="p-4 bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500 dark:border-yellow-400 rounded-lg">
//       <strong>💡 Tip:</strong> Want structured learning? Try our free{" "}
//       <span className="font-semibold text-blue-600 dark:text-blue-400">
//         Computer Fundamentals Course
//       </span>{" "}
//       with weekly coverage, notes, and quizzes.
//     </div>

//     {/* Section 1 */}
//     <h2 className="text-2xl font-bold">1. Introduction</h2>
//     <p className="">
//       Computers have evolved from simple calculators to powerful machines.
//       This section covers fundamentals, history, and types of computers.
//     </p>
//     <ul className="list-disc list-inside space-y-1">
//       <li>Computer and its Types</li>
//       <li>Applications of Computers</li>
//     </ul>

//     {/* Section 2 */}
//     <h2 className="text-2xl font-bold">2. Components</h2>
//     <p className="text-gray-700 dark:text-gray-300">
//       A computer consists of three basic components — CPU, input devices, and output devices.
//       The CPU processes data, while input/output devices help users interact with the system.
//     </p>
//     <ul className="list-disc list-inside space-y-1">
//       <li>Hardware</li>
//       <li>Software</li>
//       <li>CPU (Central Processing Unit)</li>
//       <li>Memory</li>
//       <li>Input Devices</li>
//       <li>Output Devices</li>
//     </ul>

//     {/* Section 3 */}
//     <h2 className="text-2xl font-bold  dark:text-white">3. Operating Systems</h2>
//     <p className="text-gray-700 dark:text-gray-300">
//       An Operating System manages hardware, software, memory, processes, and user interaction.
//     </p>
//     <ul className="list-disc list-inside space-y-1">
//       <li>Windows</li>
//       <li>Linux</li>
//       <li>iOS</li>
//       <li>macOS</li>
//       <li>ChromeOS</li>
//     </ul>

//     {/* Section 4 */}
//     <h2 className="text-2xl font-bold  dark:text-white">
//       4. Internet & World Wide Web (WWW)
//     </h2>
//     <p className="text-gray-700 dark:text-gray-300">
//       The Internet is a global network, and the WWW is a service running on it to access web pages.
//     </p>
//     <ul className="list-disc list-inside space-y-1">
//       <li>Web Browser</li>
//       <li>Web Server</li>
//       <li>Web Protocols</li>
//       <li>Web Security</li>
//       <li>Databases</li>
//       <li>Internet</li>
//       <li>WiFi</li>
//     </ul>

//     {/* Section 5 */}
//     <h2 className="text-2xl font-bold  dark:text-white">5. Office Tools</h2>
//     <p className="text-gray-700 dark:text-gray-300">
//       Office tools help create documents, spreadsheets, presentations, and manage files.
//     </p>
//     <ul className="list-disc list-inside space-y-1">
//       <li>MS Word / Google Docs</li>
//       <li>MS Excel / Google Sheets</li>
//       <li>MS PowerPoint / Google Slides</li>
//       <li>Email Clients: Outlook, Gmail</li>
//       <li>Collaboration: Google Drive, OneDrive</li>
//     </ul>

//     {/* Section 6 */}
//     <h2 className="text-2xl font-bold  dark:text-white">6. Shortcut Keys</h2>
//     <p className="text-gray-700 dark:text-gray-300">
//       Shortcut keys help perform tasks faster using keyboard combinations.
//     </p>
//     <ul className="list-disc list-inside space-y-1">
//       <li>Windows Shortcuts</li>
//       <li>Ubuntu Shortcuts</li>
//       <li>Function Keys</li>
//     </ul>

//     {/* Section 7 */}
//     <h2 className="text-2xl font-bold  dark:text-white">7. Key Comparison</h2>
//     <p className="text-gray-700 dark:text-gray-300">
//       Important comparisons every CS student should know:
//     </p>
//     <ul className="list-disc list-inside space-y-1">
//       <li>RAM vs ROM</li>
//       <li>HDD vs SSD</li>
//       <li>CD vs DVD</li>
//       <li>OCR vs MICR</li>
//       <li>Barcode vs QR Code</li>
//     </ul>

//     {/* Section 8 */}
//     <h2 className="text-2xl font-bold  dark:text-white">8. Introduction to Programming</h2>
//     <p className="text-gray-700 dark:text-gray-300">
//       Learn different programming languages and logic-building concepts.
//     </p>
//     <ul className="list-disc list-inside space-y-1">
//       <li>C, C++, C#</li>
//       <li>Java</li>
//       <li>Python</li>
//       <li>JavaScript</li>
//       <li>Logic Building</li>
//     </ul>

//     {/* Section 9 */}
//     <h2 className="text-2xl font-bold  dark:text-white">9. Computer Networks</h2>
//     <p className="text-gray-700 dark:text-gray-300">
//       Networks connect computers to share resources and exchange data.
//     </p>
//     <ul className="list-disc list-inside space-y-1">
//       <li>LAN, WAN, MAN</li>
//       <li>Topologies</li>
//       <li>Network Devices</li>
//       <li>Protocols</li>
//     </ul>

//     {/* Section 10 */}
//     <h2 className="text-2xl font-bold  dark:text-white">10. Security and Privacy</h2>
//     <p className="text-gray-700 dark:text-gray-300">
//       Cybersecurity protects systems, networks, and data from attacks.
//     </p>
//     <ul className="list-disc list-inside space-y-1">
//       <li>Malware</li>
//       <li>Threats</li>
//       <li>Authentication</li>
//       <li>Network Security</li>
//       <li>Online Privacy</li>
//     </ul>
//     <p className="text-red-600 dark:text-red-400 font-medium">
//       ⚠ Avoid clicking unknown email links — they may contain viruses!
//     </p>

//     {/* Section 11 */}
//     <h2 className="text-2xl font-bold  dark:text-white">11. Careers & Jobs</h2>
//     <p className="text-gray-700 dark:text-gray-300">
//       Computer Science offers a wide range of tech and non-tech career paths.
//     </p>
//     <ul className="list-disc list-inside space-y-1">
//       <li>Tech Careers</li>
//       <li>Non-Tech Roles</li>
//     </ul>

//   </>
// );

// export default Home;