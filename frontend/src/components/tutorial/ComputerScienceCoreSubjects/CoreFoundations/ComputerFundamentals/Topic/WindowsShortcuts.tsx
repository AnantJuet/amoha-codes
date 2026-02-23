import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Windows Keyboard Shortcuts ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Windows Keyboard Shortcuts A to Z with PDF (All Windows Versions)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 06 Nov, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Are you looking for a complete A to Z list of Windows hotkeys? Keyboard shortcuts boost productivity, save time, 
      and allow tasks to be performed efficiently. This Windows Keyboard Shortcut Cheat Sheet works across Windows 7, 8, 10, and 11.
    </p>

    {/* General Shortcuts */}
    <h2 className="text-3xl font-bold  mt-8">General Keyboard Shortcuts (Windows 7, 8, 10, and 11)</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">Shortcut</th>
          <th className="border px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">Win + I</td><td className="border px-4 py-2">Open Settings menu</td></tr>
        <tr><td className="border px-4 py-2">Win + X</td><td className="border px-4 py-2">Open Power User menu</td></tr>
        <tr><td className="border px-4 py-2">Win + U</td><td className="border px-4 py-2">Open Ease of Access settings</td></tr>
        <tr><td className="border px-4 py-2">Win + P</td><td className="border px-4 py-2">Open display settings</td></tr>
        <tr><td className="border px-4 py-2">Win + Shift + S</td><td className="border px-4 py-2">Open Snipping Tool for screenshots</td></tr>
        <tr><td className="border px-4 py-2">Win + V</td><td className="border px-4 py-2">Open Clipboard history</td></tr>
      </tbody>
    </table>

    {/* Task Management Shortcuts */}
    <h2 className="text-3xl font-bold  mt-8">Task Management Shortcuts</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">Shortcut</th>
          <th className="border px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">Ctrl + Alt + Delete</td><td className="border px-4 py-2">Open Security Options</td></tr>
        <tr><td className="border px-4 py-2">Ctrl + Shift + Esc</td><td className="border px-4 py-2">Open Task Manager</td></tr>
        <tr><td className="border px-4 py-2">Alt + Tab</td><td className="border px-4 py-2">Switch between open applications</td></tr>
        <tr><td className="border px-4 py-2">Win + Tab</td><td className="border px-4 py-2">Open Task View</td></tr>
      </tbody>
    </table>

    {/* File Management Shortcuts */}
    <h2 className="text-3xl font-bold  mt-8">File Management Shortcuts</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">Shortcut</th>
          <th className="border px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">Ctrl + N</td><td className="border px-4 py-2">Open a new File Explorer window</td></tr>
        <tr><td className="border px-4 py-2">Ctrl + Shift + N</td><td className="border px-4 py-2">Create new folder</td></tr>
        <tr><td className="border px-4 py-2">F2</td><td className="border px-4 py-2">Rename selected file/folder</td></tr>
        <tr><td className="border px-4 py-2">Ctrl + D</td><td className="border px-4 py-2">Delete selected file/folder</td></tr>
      </tbody>
    </table>

    {/* Text Editing Shortcuts */}
    <h2 className="text-3xl font-bold  mt-8">Text Editing and Formatting Shortcuts</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">Shortcut</th>
          <th className="border px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">Ctrl + B</td><td className="border px-4 py-2">Bold text</td></tr>
        <tr><td className="border px-4 py-2">Ctrl + I</td><td className="border px-4 py-2">Italicize text</td></tr>
        <tr><td className="border px-4 py-2">Ctrl + U</td><td className="border px-4 py-2">Underline text</td></tr>
        <tr><td className="border px-4 py-2">Ctrl + F</td><td className="border px-4 py-2">Open Find dialog</td></tr>
      </tbody>
    </table>

    {/* Virtual Desktop Shortcuts */}
    <h2 className="text-3xl font-bold  mt-8">Virtual Desktop Shortcuts</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">Shortcut</th>
          <th className="border px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">Win + Ctrl + D</td><td className="border px-4 py-2">Create new virtual desktop</td></tr>
        <tr><td className="border px-4 py-2">Win + Ctrl + Left/Right</td><td className="border px-4 py-2">Switch virtual desktops</td></tr>
        <tr><td className="border px-4 py-2">Win + Ctrl + F4</td><td className="border px-4 py-2">Close current virtual desktop</td></tr>
      </tbody>
    </table>

  </div>
);

export default Home;
