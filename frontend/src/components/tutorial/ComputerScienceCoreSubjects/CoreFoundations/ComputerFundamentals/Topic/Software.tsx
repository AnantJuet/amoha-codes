import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= What is a Computer Software ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      What is a Computer Software?
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 15 Jul, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Computer Software serves as the backbone of all digital devices and systems. It is an integral part of modern technology.
      Unlike hardware which comprises physical components, software is intangible and exists as a code written in programming language.
      This article focuses on discussing computer software in detail.
    </p>

    {/* What is Software */}
    <h2 className="text-3xl font-bold  mt-8">What is Software?</h2>
    <p className="leading-relaxed">
      Software or Computer Software refers to the collection of instructions, data, or programs that are used to operate computers and execute specific tasks.
      These are important for the functioning of modern computing systems.
    </p>

    {/* Key Features */}
    <h3 className="text-2xl font-semibold mt-6 ">Key Features:</h3>
    <ol className="list-decimal pl-6 space-y-4">
      <li><strong>Intangible:</strong> Computer software cannot be seen or touched like hardware.</li>
      <li><strong>Provides User Interface:</strong> Computer Software provides a user interface that allows users to interact with the computer.</li>
      <li><strong>Enhances Efficiency:</strong> Efficient computer software makes optimal use of system resources such as memory, processing power, and storage.</li>
      <li><strong>Portability:</strong> Designed to run on different hardware platforms or operating systems with minimal modifications.</li>
      <li><strong>Documentation:</strong> Comprehensive documentation provides information on how to install, use, and maintain the computer software.</li>
    </ol>

    {/* Role in Modern Computing */}
    <h2 className="text-3xl font-bold  mt-8">Role in Modern Computing</h2>
    <p className="leading-relaxed">
      Computer software plays a pivotal role in modern computing. Here are some of the key aspects:
    </p>
    <ol className="list-decimal pl-6 space-y-4">
      <li><strong>Enhance Productivity:</strong> Applications streamline business processes, enhance productivity, and reduce manual effort.</li>
      <li><strong>Seamless Communication:</strong> Enables communication via email clients, messaging apps, and video conferencing tools.</li>
      <li><strong>Information Management:</strong> DBMS helps in storing, retrieving, and managing large data efficiently.</li>
      <li><strong>E-Learning:</strong> Provides access to learning resources and interactive tools enhancing education.</li>
      <li><strong>Security Software:</strong> Protects systems from cyber threats using antivirus, firewalls, and encryption.</li>
    </ol>

    {/* Types of Software */}
    <h2 className="text-3xl font-bold  mt-8">Types of Computer Software</h2>
    <p className="leading-relaxed">Here are the different types of Computer Software based on functionality and purpose:</p>
   <ol className="list-decimal pl-6 space-y-4">
      <li><strong>System Software:</strong> Manages hardware and system operations; includes Operating Systems, Device Drivers, and Utility Software.</li>
      <li><strong>Application Software:</strong> Designed for specific tasks like web browsing, gaming, and productivity; includes MS Office, Photoshop, etc.</li>
      <li><strong>Development Software:</strong> Tools used by developers to create, debug, and maintain applications; includes VS Code, Eclipse, and GitHub.</li>
      <li><strong>Business Software:</strong> Assists organizations in managing operations; includes ERP, CRM, and Accounting Software.</li>
      <li><strong>Embedded Software:</strong> Operates hardware within larger systems; includes BIOS and automotive control systems.</li>
    </ol>

    {/* Distribution */}
    <h2 className="text-3xl font-bold  mt-8">How is Computer Software Distributed?</h2>
    <ol className="list-decimal pl-6 space-y-4">
      <li><strong>Physical Media:</strong> Distributed through CDs, DVDs, and USB drives.</li>
      <li><strong>Digital Downloads:</strong> Downloaded directly from developer websites or app stores.</li>
      <li><strong>Cloud-based Services:</strong> Accessed online via subscription or stored on cloud platforms.</li>
      <li><strong>Open-source Repositories:</strong> Shared on platforms like GitHub or package managers (e.g., npm).</li>
      <li><strong>Pre-installed on Devices:</strong> Comes preloaded on new computers or mobile phones.</li>
    </ol>

    {/* Software vs Hardware */}
    <h2 className="text-3xl font-bold  mt-8 mb-4">Software vs Hardware</h2>
    <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 text-left text-sm">
      <thead className="bg-gray-400 text-gray-900">
        <tr>
          <th className="border p-2">Feature</th>
          <th className="border p-2">Software</th>
          <th className="border p-2">Hardware</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border p-2">Definition</td><td className="border p-2">Programs running on devices.</td><td className="border p-2">Physical components of devices.</td></tr>
        <tr><td className="border p-2">Tangibility</td><td className="border p-2">Intangible, exists as code.</td><td className="border p-2">Tangible, physical components.</td></tr>
        <tr><td className="border p-2">Operation</td><td className="border p-2">Gives instructions to hardware.</td><td className="border p-2">Executes software instructions.</td></tr>
        <tr><td className="border p-2">Maintenance</td><td className="border p-2">Updated regularly.</td><td className="border p-2">Requires physical repair/replacement.</td></tr>
        <tr><td className="border p-2">Example</td><td className="border p-2">OS, games, apps like MS Word.</td><td className="border p-2">CPU, Mouse, Keyboard.</td></tr>
      </tbody>
    </table>
    </div>

    {/* Future of Software */}
    <h2 className="text-3xl font-bold  mt-8">Future of Computer Software</h2>
   <ol className="list-decimal pl-6 space-y-4">
      <li><strong>Artificial Intelligence & Machine Learning:</strong> Enhancing automation and personalized experiences.</li>
      <li><strong>Quantum Computing:</strong> Enabling faster problem-solving through quantum algorithms.</li>
      <li><strong>Internet of Things (IoT):</strong> Managing and analyzing vast data from smart devices.</li>
      <li><strong>Augmented & Virtual Reality:</strong> Creating immersive interactive environments.</li>
      <li><strong>Decentralized Applications (DApps):</strong> Promoting transparency and trust in finance, supply chain, and governance.</li>
    </ol>

    {/* Conclusion */}
    <h2 className="text-2xl font-semibold mt-8 ">Conclusion</h2>
    <p className="leading-relaxed">
      Computer software is integral to the functioning of modern computing systems. Its evolution has impacted every aspect of life—from personal productivity to global communication.
      As technology continues to advance, the role of software will be even more crucial in shaping the future of computing.
    </p>
  </div>
);

export default Home;
