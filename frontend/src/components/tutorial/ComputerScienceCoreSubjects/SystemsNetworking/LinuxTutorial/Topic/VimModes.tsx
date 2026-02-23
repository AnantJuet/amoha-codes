import React from "react";

const VimModes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Vim Modes
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Vim operates in different modes, each designed for specific tasks. Understanding
      modes is fundamental to using Vim effectively.
    </p>

    <h2 className="text-3xl font-bold mt-8">Main Modes</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Mode</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Enter With</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">Normal</td>
            <td className="p-3 border">Navigation, commands</td>
            <td className="p-3 border font-mono text-gray-900">Esc</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">Insert</td>
            <td className="p-3 border">Text insertion</td>
            <td className="p-3 border font-mono text-gray-900">i, I, a, A, o, O</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">Visual</td>
            <td className="p-3 border">Text selection</td>
            <td className="p-3 border font-mono text-gray-900">v, V, Ctrl+v</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">Command</td>
            <td className="p-3 border">Ex commands</td>
            <td className="p-3 border font-mono text-gray-900">:</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">Replace</td>
            <td className="p-3 border">Replace text</td>
            <td className="p-3 border font-mono text-gray-900">R</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Normal Mode</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Default mode when vim starts
# Used for navigation and executing commands
# Press Esc from any mode to return here

# Common actions in Normal mode:
h, j, k, l     # Move left, down, up, right
w, b           # Move by word
dd             # Delete line
yy             # Yank (copy) line
p              # Paste`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Insert Mode</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Enter Insert mode from Normal mode:
i     # Insert before cursor
I     # Insert at beginning of line
a     # Append after cursor
A     # Append at end of line
o     # Open new line below
O     # Open new line above

# Type normally in Insert mode
# Press Esc to return to Normal mode`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Visual Mode</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Enter Visual mode from Normal mode:
v       # Character-wise visual mode
V       # Line-wise visual mode
Ctrl+v  # Block visual mode

# In Visual mode:
# - Move cursor to select text
# - Apply commands to selection
d       # Delete selection
y       # Yank selection
>       # Indent selection
<       # Unindent selection`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Command Mode</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Enter Command mode with : from Normal mode
:w          # Write (save)
:q          # Quit
:wq         # Write and quit
:q!         # Quit without saving
:e file     # Edit file
:help       # Open help`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Esc always returns to Normal mode</li>
        <li>i enters Insert mode, v enters Visual mode</li>
        <li>: enters Command mode for Ex commands</li>
        <li>Most time is spent in Normal mode</li>
      </ul>
    </div>
  </div>
);

export default VimModes;
