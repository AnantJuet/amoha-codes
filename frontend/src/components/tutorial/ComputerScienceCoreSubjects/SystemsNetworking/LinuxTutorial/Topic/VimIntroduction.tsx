import React from "react";

const VimIntroduction: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Vim Introduction
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Vim (Vi IMproved) is a powerful, highly configurable text editor built for
      efficient text editing. It's available on virtually all Unix-like systems
      and is known for its modal editing paradigm.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Vim?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 text-lg">
      <li>Available on all Unix/Linux systems</li>
      <li>Extremely fast and lightweight</li>
      <li>Highly customizable</li>
      <li>Efficient once mastered</li>
      <li>Works in terminal (no GUI required)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Starting Vim</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Open vim
$ vim

# Open a file
$ vim filename.txt

# Open at specific line
$ vim +10 filename.txt

# Open in read-only mode
$ vim -R filename.txt
$ view filename.txt

# Open multiple files
$ vim file1.txt file2.txt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Vi vs Vim</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Vi</th>
            <th className="p-3 border">Vim</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Multi-level undo</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Syntax highlighting</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Plugin system</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Visual mode</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Split windows</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Getting Help</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# In vim, press Escape first then:
:help              # Open help
:help topic        # Help on specific topic
:q                 # Close help window

# Vim tutor (in terminal)
$ vimtutor`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Vim is modal: different modes for different tasks</li>
        <li>Press Esc to return to Normal mode</li>
        <li>Run vimtutor to learn interactively</li>
        <li>Mastery takes practice but pays off</li>
      </ul>
    </div>
  </div>
);

export default VimIntroduction;
