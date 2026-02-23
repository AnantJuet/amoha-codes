import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Ubuntu Keyboard Shortcuts ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Keyboard Shortcuts for Ubuntu
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      In Ubuntu, keyboard shortcuts are powerful tools to boost efficiency and simplify tasks.
      From desktop navigation to terminal commands, mastering these shortcuts saves time and enhances productivity.
    </p>

    {/* Essential Shortcuts */}
    <h2 className="text-3xl font-bold  mt-8">Essential Shortcuts</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">Shortcut</th>
          <th className="border px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">Ctrl + Alt + T</td><td className="border px-4 py-2">Open Terminal</td></tr>
        <tr><td className="border px-4 py-2">Super (Windows key) + A</td><td className="border px-4 py-2">Show applications</td></tr>
        <tr><td className="border px-4 py-2">Alt + Tab</td><td className="border px-4 py-2">Switch between open applications</td></tr>
        <tr><td className="border px-4 py-2">Ctrl + Shift + N</td><td className="border px-4 py-2">Create a new folder</td></tr>
        <tr><td className="border px-4 py-2">Ctrl + Alt + L</td><td className="border px-4 py-2">Lock screen</td></tr>
      </tbody>
    </table>

    {/* Terminal Shortcuts */}
    <h2 className="text-3xl font-bold  mt-8">Terminal Shortcuts</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">Shortcut</th>
          <th className="border px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">Ctrl + C</td><td className="border px-4 py-2">Cancel current command</td></tr>
        <tr><td className="border px-4 py-2">Ctrl + L</td><td className="border px-4 py-2">Clear terminal screen</td></tr>
        <tr><td className="border px-4 py-2">Ctrl + Shift + T</td><td className="border px-4 py-2">Open new terminal tab</td></tr>
        <tr><td className="border px-4 py-2">Ctrl + R</td><td className="border px-4 py-2">Reverse search command history</td></tr>
        <tr><td className="border px-4 py-2">Tab</td><td className="border px-4 py-2">Auto-complete commands or filenames</td></tr>
      </tbody>
    </table>

    {/* Window Management */}
    <h2 className="text-3xl font-bold  mt-8">Window Management</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">Shortcut</th>
          <th className="border px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">Window + Up Arrow</td><td className="border px-4 py-2">Maximize Window</td></tr>
        <tr><td className="border px-4 py-2">Window + Down Arrow</td><td className="border px-4 py-2">Restore/Minimize Window</td></tr>
        <tr><td className="border px-4 py-2">Window + Left Arrow</td><td className="border px-4 py-2">Tile Window to left</td></tr>
        <tr><td className="border px-4 py-2">Window + Right Arrow</td><td className="border px-4 py-2">Tile Window to right</td></tr>
        <tr><td className="border px-4 py-2">Alt + F4</td><td className="border px-4 py-2">Close current window</td></tr>
      </tbody>
    </table>

    {/* System Navigation */}
    <h2 className="text-3xl font-bold  mt-8">System Navigation</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">Shortcut</th>
          <th className="border px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">Window</td><td className="border px-4 py-2">Open Activities Overview</td></tr>
        <tr><td className="border px-4 py-2">Window + S</td><td className="border px-4 py-2">Open system settings</td></tr>
        <tr><td className="border px-4 py-2">PrtSc</td><td className="border px-4 py-2">Capture entire screen</td></tr>
        <tr><td className="border px-4 py-2">Alt + PrtSc</td><td className="border px-4 py-2">Capture current window</td></tr>
        <tr><td className="border px-4 py-2">Shift + PrtSc</td><td className="border px-4 py-2">Capture selected area</td></tr>
        <tr><td className="border px-4 py-2">Ctrl + Alt + Up Arrow</td><td className="border px-4 py-2">Switch to workspace above</td></tr>
        <tr><td className="border px-4 py-2">Ctrl + Alt + Down Arrow</td><td className="border px-4 py-2">Switch to workspace below</td></tr>
        <tr><td className="border px-4 py-2">Window + D</td><td className="border px-4 py-2">Show Desktop</td></tr>
      </tbody>
    </table>

    {/* File Management */}
    <h2 className="text-3xl font-bold  mt-8">File Management</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">Shortcut</th>
          <th className="border px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">Ctrl + C</td><td className="border px-4 py-2">Copy selected files</td></tr>
        <tr><td className="border px-4 py-2">Ctrl + V</td><td className="border px-4 py-2">Paste copied files</td></tr>
        <tr><td className="border px-4 py-2">Ctrl + X</td><td className="border px-4 py-2">Cut selected files</td></tr>
        <tr><td className="border px-4 py-2">Delete</td><td className="border px-4 py-2">Move files to trash</td></tr>
        <tr><td className="border px-4 py-2">Ctrl + Z</td><td className="border px-4 py-2">Undo last action</td></tr>
      </tbody>
    </table>

    {/* Conclusion */}
    <p className="text-lg leading-relaxed mt-8">
      Learning and using Ubuntu keyboard shortcuts can transform your workflow, making tasks faster and more intuitive.
      Whether you are new or experienced, integrating these shortcuts into daily use will improve productivity and system navigation.
    </p>

  </div>
);

export default Home;
