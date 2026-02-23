import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Windows 10 Tutorial ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Windows 10 Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 21 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Explore our Free Windows 10 Tutorial to learn how to use Microsoft Operating System — Windows 10 remains one of the most widely used operating systems, offering a balance of performance, security, and user-friendly features. Whether you're a new user setting up your PC for the first time or someone looking to unlock advanced functionalities, mastering Windows 10 can significantly improve your productivity and overall computing experience.
    </p>

    <p className="leading-relaxed">
      This Ultimate Windows 10 Tutorial: Beginner to Advanced Guide covers everything from basic navigation and customization to troubleshooting common issues, security settings, and performance optimization. Learn how to use essential features like File Explorer, Task Manager, Windows Defender, and virtual desktops, along with tips to keep your system running smoothly.
    </p>

    {/* Important Information */}
    <h2 className="text-3xl font-bold  mt-8">Important Information to Know</h2>
    <p className="leading-relaxed">
      <strong>Windows 10 Home and Pro - Microsoft Lifecycle:</strong> Windows 10 is approaching its end of life. Both the Home and Pro editions will stop receiving support, including security updates, after October 14, 2025. The current Windows 10 version (22H2) will be the last one released, as Microsoft won't be developing any new feature updates. Until the cutoff date, users will continue to receive monthly security patches to keep their systems protected.
    </p>
    <p className="leading-relaxed">
      Are you looking to upgrade? Check out <em>How to Upgrade From Windows 10 to Windows 11 For Free</em>.
    </p>

    {/* Getting Started */}
    <h2 className="text-3xl font-bold  mt-8">Getting Started with Windows 10</h2>
    <p className="leading-relaxed">
      This section provides information about Windows 10 versions, features, facts, and system requirements:
    </p>
    <ol className="list-decimal list-inside space-y-1">
      <li>Windows 10 Overview</li>
      <li>Everything You Need to Know About Windows 10</li>
      <li>Windows 10 Editions and System Requirements</li>
      <li>How to Upgrade from Windows 7 to Windows 10 for Free</li>
      <li>10 Best Windows Themes</li>
      <li>Interesting Facts about Windows</li>
      <li>Difference Between DOS, Linux & Windows Operating System</li>
    </ol>

    {/* Comparison Section */}
    <h2 className="text-3xl font-bold  mt-8">Windows 10 Comparison</h2>
    <p className="leading-relaxed">
      This section compares Windows 10 with other popular operating systems:
    </p>
    <ol className="list-decimal list-inside space-y-1">
      <li>Windows 11 vs. Windows 10 - What's the difference</li>
      <li>Difference between Windows and Ubuntu</li>
      <li>Microsoft Windows (10) vs macOS</li>
      <li>Difference between Windows and Chrome OS</li>
      <li>Difference between Linux and Windows</li>
      <li>Difference between Windows and iOS</li>
    </ol>

    {/* Setup Section */}
    <h2 className="text-3xl font-bold text-pblack mt-8">Setting Up Windows 10</h2>
    <p className="leading-relaxed">
      Customize and optimize your Windows 10 settings for a smooth experience. Discover how to manage user accounts, set up a Microsoft account, and configure privacy settings.
    </p>

    <ol className="list-decimal list-inside space-y-1">
      <li>How to Create Microsoft Account</li>
      <li>How to Create and Manage User Accounts</li>
      <li>How to Dual Boot Windows 10 and Linux Mint</li>
      <li>How to Activate Windows 10 with Key</li>
      <li>How to Install Windows 10 From a USB Flash Drive</li>
      <li>How to Create a Bootable USB Stick with PowerShell</li>
      <li>How to Reset Windows 10 Without Losing Data</li>
    </ol>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold  mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Windows 10 offers a wide range of tools and features that cater to beginners, students, and advanced users alike. By mastering the Windows 10 interface, customizations, security settings, and troubleshooting techniques, you can unlock its full potential and enhance your overall computing experience.
    </p>
  </div>
);

export default Home;
