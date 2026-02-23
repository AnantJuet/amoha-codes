import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Keyboard Shortcuts Guide ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      500+ Keyboard Shortcuts (A to Z) with Free PDF Download
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 27 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Unlock the full potential of your computer with our 500+ keyboard shortcuts list. 
      Designed to streamline workflow and save time, these shortcuts cover Microsoft Office, web browsers, 
      and operating systems like Windows, macOS, and Linux.
    </p>
    <p className="leading-relaxed">
      From Word, Excel, and PowerPoint to Chrome, Firefox, and Edge, these shortcuts help you navigate and perform tasks efficiently, improving productivity.
    </p>

    {/* What Are Keyboard Shortcuts */}
    <h2 className="text-3xl font-bold  mt-8">
      What Are Keyboard Shortcuts?
    </h2>
    <p className="leading-relaxed">
      Keyboard shortcuts are combinations of keys that perform actions without using a mouse. 
      For example, <strong>Ctrl + C</strong> copies selected text, and <strong>Ctrl + V</strong> pastes it. 
      On Mac, use <strong>Command</strong> instead of <strong>Ctrl</strong>.
    </p>

    {/* Windows Shortcuts */}
    <h3 className="text-2xl font-semibold mt-4 ">Windows Keyboard Shortcuts</h3>
    <ul className="list-disc list-inside leading-relaxed">
      <li>Ctrl + C – Copy</li>
      <li>Ctrl + V – Paste</li>
      <li>Ctrl + X – Cut</li>
      <li>Alt + Tab – Switch between open applications</li>
      <li>Windows + D – Show desktop</li>
      <li>Windows + L – Lock your PC</li>
      <li>Ctrl + Shift + Esc – Open Task Manager</li>
      <li>Windows + Print Screen – Take a full screenshot</li>
    </ul>

    {/* Mac Shortcuts */}
    <h3 className="text-2xl font-semibold mt-4 ">Mac Keyboard Shortcuts</h3>
    <ul className="list-disc list-inside leading-relaxed">
      <li>Command + C – Copy</li>
      <li>Command + V – Paste</li>
      <li>Command + X – Cut</li>
      <li>Command + Z – Undo</li>
      <li>Command + Space – Open Spotlight search</li>
      <li>Command + Shift + 4 – Take a screenshot</li>
      <li>Command + Option + Esc – Force quit apps</li>
    </ul>

    {/* Linux Shortcuts */}
    <h3 className="text-2xl font-semibold mt-4 ">Linux Keyboard Shortcuts</h3>
    <ul className="list-disc list-inside leading-relaxed">
      <li>Ctrl + C – Cancel current command</li>
      <li>Ctrl + L – Clear terminal screen</li>
      <li>Ctrl + A – Move to beginning of the line</li>
      <li>Ctrl + E – Move to end of the line</li>
      <li>Alt + Tab – Switch between applications</li>
    </ul>

    {/* Browser Shortcuts */}
    <h3 className="text-2xl font-semibold mt-4 ">Browser Shortcuts</h3>
    <p className="leading-relaxed">
      Save time online by using browser-specific shortcuts for Chrome, Edge, Safari, Opera, and Firefox. 
      Common shortcuts include opening/closing tabs, navigating pages, and searching within a page.
    </p>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold  mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Mastering keyboard shortcuts significantly improves productivity. Whether you’re using Office apps, browsing the web, or navigating operating systems, 
      these shortcuts save time and streamline your workflow. Regular practice will help you work faster and more efficiently.
    </p>
  </div>
);

export default Home;
