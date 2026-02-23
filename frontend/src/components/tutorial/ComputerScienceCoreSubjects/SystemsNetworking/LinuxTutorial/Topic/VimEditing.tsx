import React from "react";

const VimEditing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Vim Editing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Vim provides powerful editing commands that can be combined with motions
      for efficient text manipulation.
    </p>

    <h2 className="text-3xl font-bold mt-8">Inserting Text</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`i     # Insert before cursor
I     # Insert at line beginning
a     # Append after cursor
A     # Append at line end
o     # Open line below
O     # Open line above
s     # Substitute character (delete and insert)
S     # Substitute line
C     # Change to end of line`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Deleting Text</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`x     # Delete character under cursor
X     # Delete character before cursor
dd    # Delete entire line
D     # Delete to end of line
dw    # Delete word
d$    # Delete to end of line
d0    # Delete to start of line
dG    # Delete to end of file
dgg   # Delete to start of file

# With count:
5dd   # Delete 5 lines
3dw   # Delete 3 words`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Changing Text</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`cc    # Change entire line
cw    # Change word
c$    # Change to end of line (same as C)
c0    # Change to start of line
ci"   # Change inside quotes
ci(   # Change inside parentheses
ciw   # Change inner word
caw   # Change a word (includes space)
ct.   # Change till period`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Copy and Paste</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`yy    # Yank (copy) entire line
yw    # Yank word
y$    # Yank to end of line
y0    # Yank to start of line

p     # Paste after cursor
P     # Paste before cursor

# With count:
5yy   # Yank 5 lines
3p    # Paste 3 times`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Undo and Redo</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`u       # Undo last change
U       # Undo all changes on line
Ctrl+r  # Redo

# Multiple undo:
5u      # Undo last 5 changes`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Text Objects</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Object</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">iw / aw</td>
            <td className="p-3 border">Inner word / A word</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">{`i" / a"`}</td>
            <td className="p-3 border">Inside quotes / Around quotes</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">{`i( / a(`}</td>
            <td className="p-3 border">Inside parens / Around parens</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">{`i{ / a{`}</td>
            <td className="p-3 border">Inside braces / Around braces</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">it / at</td>
            <td className="p-3 border">Inside tag / Around tag</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>d deletes, c changes, y yanks</li>
        <li>Combine operators with motions (dw, c$)</li>
        <li>Double operator works on line (dd, yy)</li>
        <li>u undoes, Ctrl+r redoes</li>
      </ul>
    </div>
  </div>
);

export default VimEditing;
