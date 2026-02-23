import React from "react";

const VimSaveExit: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Vim Save and Exit
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Saving and exiting are essential Vim operations. These commands work
      in Normal mode (press Esc first) and Command mode.
    </p>

    <h2 className="text-3xl font-bold mt-8">Save Commands</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Save file
:w              # Write (save) file
:w filename     # Save as filename
:w!             # Force save (override read-only)

# Save specific lines
:10,20w file    # Save lines 10-20 to file
:.,$w file      # Save current line to end to file`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Exit Commands</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Quit vim
:q              # Quit (fails if unsaved changes)
:q!             # Quit without saving (discard changes)
:qa             # Quit all windows
:qa!            # Quit all without saving`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Save and Exit Combined</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Common combinations
:wq             # Write and quit
:wq!            # Force write and quit
:x              # Write only if changed, then quit
:exit           # Same as :x
ZZ              # Write and quit (Normal mode)
ZQ              # Quit without saving (Normal mode)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Command Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Command</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">:w</td>
            <td className="p-3 border">Save file</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">:q</td>
            <td className="p-3 border">Quit</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">:wq</td>
            <td className="p-3 border">Save and quit</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">:q!</td>
            <td className="p-3 border">Quit without saving</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">:x or ZZ</td>
            <td className="p-3 border">Save if changed and quit</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">ZQ</td>
            <td className="p-3 border">Quit without saving</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multiple Files</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Working with multiple files
:e filename     # Open file
:e!             # Revert to saved version
:bn             # Next buffer
:bp             # Previous buffer
:ls             # List open buffers
:b1             # Go to buffer 1
:bd             # Close current buffer
:wa             # Write all buffers
:qa             # Quit all buffers`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recovery</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Recover from swap file (after crash)
$ vim -r filename

# List recoverable files
$ vim -r

# Delete swap file after recovery
$ rm .filename.swp`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>:wq saves and quits in one command</li>
        <li>:q! quits without saving changes</li>
        <li>ZZ is a quick save and quit shortcut</li>
        <li>Use vim -r to recover from crashes</li>
      </ul>
    </div>
  </div>
);

export default VimSaveExit;
