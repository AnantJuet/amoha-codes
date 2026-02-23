import React from "react";

const VimNavigation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Vim Navigation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Efficient navigation is key to productivity in Vim. These commands work
      in Normal mode and allow rapid movement through files.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Movement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`h     # Move left
j     # Move down
k     # Move up
l     # Move right

# With count:
5j    # Move 5 lines down
10l   # Move 10 characters right`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Word Movement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`w     # Forward to start of next word
W     # Forward to start of next WORD (space-delimited)
e     # Forward to end of word
E     # Forward to end of WORD
b     # Backward to start of word
B     # Backward to start of WORD

# With count:
3w    # Move 3 words forward`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Line Movement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`0     # Start of line
^     # First non-blank character
$     # End of line
g_    # Last non-blank character

# Go to line:
gg    # First line of file
G     # Last line of file
:10   # Go to line 10
10G   # Go to line 10
10gg  # Go to line 10`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Screen Movement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Ctrl+f    # Page forward (full screen)
Ctrl+b    # Page backward (full screen)
Ctrl+d    # Half page down
Ctrl+u    # Half page up
H         # Move to top of screen
M         # Move to middle of screen
L         # Move to bottom of screen
zz        # Center cursor on screen
zt        # Cursor to top of screen
zb        # Cursor to bottom of screen`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Search Navigation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`/pattern    # Search forward
?pattern    # Search backward
n           # Next match
N           # Previous match
*           # Search word under cursor (forward)
#           # Search word under cursor (backward)

f{char}     # Find char forward on line
F{char}     # Find char backward on line
t{char}     # Till char forward
T{char}     # Till char backward
;           # Repeat f/F/t/T
,           # Repeat f/F/t/T reverse`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Navigation Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Key</th>
            <th className="p-3 border">Movement</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">h j k l</td>
            <td className="p-3 border">Character movement</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">w b e</td>
            <td className="p-3 border">Word movement</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">0 ^ $</td>
            <td className="p-3 border">Line positions</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">gg G</td>
            <td className="p-3 border">File positions</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">Ctrl+f/b</td>
            <td className="p-3 border">Page scrolling</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>h j k l replace arrow keys</li>
        <li>w/b move by words, 0/$ move on lines</li>
        <li>gg goes to start, G goes to end of file</li>
        <li>Combine movements with counts (5j, 3w)</li>
      </ul>
    </div>
  </div>
);

export default VimNavigation;
