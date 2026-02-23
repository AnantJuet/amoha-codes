import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= What is macOS ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      What is macOS?
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      macOS is built on a Unix-based architecture and provides users with a reliable and user-friendly experience. 
      In this article, we will understand macOS in detail.
    </p>

    {/* What is macOS */}
    <h2 className="text-3xl font-bold  mt-8">What is macOS?</h2>
    <p className="leading-relaxed">
      macOS is an operating system that Apple Inc. developed especially for its Macintosh computer series. 
      It is the replacement for the classic Mac OS. The reliability, security features, ease of use, and compatibility 
      with other Apple products and services are all well-known aspects of macOS. It includes a number of built-in 
      programs for various functions like productivity, email, multimedia playback, and web browsing.
    </p>

    {/* History of macOS */}
    <h2 className="text-3xl font-bold  mt-8">History of macOS</h2>
    <p className="leading-relaxed">
      <strong>Classic Mac OS (1984 to 2001):</strong> Mac OS, known as Classic Mac OS, was the original operating 
      system for Macintosh computers. It was recognized by its graphical user interface and components like the 
      Macintosh desktop and Finder. Mac OS 1 through Mac OS 9 were among the versions.
    </p>
    <p className="leading-relaxed">
      <strong>Mac OS X (2001 to 2012):</strong> Apple made the switch to a Unix-based operating system in 2001 with 
      the release of Mac OS X. Significant improvements in security and performance were made. It introduced features 
      like the Dock and the Aqua interface. Pre-installed programs like Mail and Safari also appeared in this version.
    </p>
    <p className="leading-relaxed">
      <strong>macOS (2016 - present):</strong> In 2016, Apple rebranded its desktop operating system as macOS to better 
      match the naming standards of its other platforms like iOS and watchOS. Frequent updates provide new features 
      and security upgrades.
    </p>

    {/* Features of macOS */}
    <h2 className="text-3xl font-bold  mt-8">Features of macOS</h2>
     <ul className="list-disc pl-6 space-y-2">
        <li><strong>User Friendly Interface:</strong> The window and menu design make macOS easy to navigate.</li>
        <li><strong>Built-in Apps:</strong> macOS includes pre-installed apps like Mail, Photos, and Safari for email, image management, and browsing.</li>
        <li> <strong>Integration with Other Apple Devices:</strong> macOS connects easily with iPads, iPhones, and other Apple devices, allowing tasks to be started on one and finished on another.</li>
        <li><strong>Privacy and Security:</strong> macOS is designed to protect user data from malware and viruses, allowing users to control app permissions.</li>
        <li><strong>Updates:</strong> Apple frequently adds new features and security patches to macOS through regular updates.</li>
        <li><strong>Accessibility:</strong> macOS includes features like VoiceOver for visually impaired users and Dictation for users with typing difficulties.</li>
     </ul>

    {/* Architecture of macOS */}
    <h2 className="text-3xl font-bold  mt-8">The Architecture of macOS</h2>
      <p className="leading-relaxed">Here are the key components and architecture of macOS:</p>
     <ul className="list-disc pl-6 space-y-2 leading-relaxed">
        <li> <strong>XNU Kernel:</strong> A hybrid Unix-based kernel combining elements from FreeBSD and the Mach microkernel.</li>
        <li><strong>Frameworks:</strong> macOS uses Cocoa and Carbon frameworks for its graphical interface (GUI).</li>
        <li><strong>Window Server:</strong> Responsible for managing windows, compositing graphics, handling input events, and coordinating with hardware.</li>
        <li><strong>Metal Framework:</strong> Provides low-level GPU access for graphics rendering.</li>
        <li><strong>Security:</strong> Includes several features to protect data and maintain privacy.</li>
     </ul>

    {/* Advantages of macOS */}
    <h2 className="text-3xl font-bold  mt-8">Advantages of macOS</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>macOS is less vulnerable to malware and security threats.</li>
      <li>Excellent integration with Apple devices for smooth data transfer.</li>
      <li>Supports multitasking for efficient workflow.</li>
      <li>Includes free productivity tools and applications.</li>
      <li>Offers long-term software support for many years.</li>
      <li>Delivers fast performance even on older hardware.</li>
    </ul>

    {/* Disadvantages of macOS */}
    <h2 className="text-3xl font-bold  mt-8">Disadvantages of macOS</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Generally more expensive than comparable Windows PCs.</li>
      <li>Limited availability of games and third-party software.</li>
      <li>Few options for hardware customization.</li>
      <li>Incompatible file system with Windows makes sharing difficult.</li>
      <li>Limited flexibility for hardware upgrades or repairs.</li>
    </ul>
  </div>
);

export default Home;
