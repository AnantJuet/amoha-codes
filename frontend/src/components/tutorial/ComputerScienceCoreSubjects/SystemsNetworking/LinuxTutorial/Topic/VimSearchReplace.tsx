import React from "react";

const VimSearchReplace: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Vim Search and Replace
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Vim provides powerful search and replace capabilities using regular
      expressions and the substitute command.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Search</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`/pattern     # Search forward
?pattern     # Search backward
n            # Next match (same direction)
N            # Previous match (opposite direction)
*            # Search word under cursor forward
#            # Search word under cursor backward

# Search options:
:set hlsearch    # Highlight matches
:set nohlsearch  # Disable highlight
:noh             # Clear current highlight
:set incsearch   # Incremental search
:set ignorecase  # Case insensitive
:set smartcase   # Smart case (case-sensitive if uppercase used)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Search Patterns</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`/word          # Exact match
/word\\c        # Case insensitive
/word\\C        # Case sensitive
/\\<word\\>      # Whole word only
/^word         # Word at start of line
/word$         # Word at end of line
/wo.d          # . matches any character
/wo.*d         # .* matches any characters
/[abc]         # Character class
/[0-9]         # Digit range`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Substitute Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic syntax:
:s/old/new/        # Replace first on current line
:s/old/new/g       # Replace all on current line
:%s/old/new/g      # Replace all in file
:%s/old/new/gc     # Replace all with confirmation

# Range:
:10,20s/old/new/g  # Lines 10-20
:.,$s/old/new/g    # Current line to end
:'<,'>s/old/new/g  # Visual selection

# Flags:
g    # Global (all matches on line)
c    # Confirm each replacement
i    # Case insensitive
I    # Case sensitive`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Substitute Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Common substitutions:
:%s/foo/bar/g           # Replace foo with bar
:%s/\\s\\+$//g            # Remove trailing whitespace
:%s/^/# /g              # Add # to start of each line
:%s/$/;/g               # Add ; to end of each line
:%s/\\n//g               # Join all lines
:%s/old/new/gi          # Case insensitive replace
:%s/\\<foo\\>/bar/g       # Replace whole word only

# Using captured groups:
:%s/\\(.*\\)/[\\1]/g       # Wrap each line in brackets
:%s/\\(\\w\\+\\)/\\U\\1/g    # Uppercase all words`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Special Characters</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Pattern</th>
            <th className="p-3 border">Meaning</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">.</td>
            <td className="p-3 border">Any character</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">*</td>
            <td className="p-3 border">Zero or more of previous</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">{`\\<\\>`}</td>
            <td className="p-3 border">Word boundaries</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">^$</td>
            <td className="p-3 border">Line start/end</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">{`\\( \\)`}</td>
            <td className="p-3 border">Capture group</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">{`\\1 \\2`}</td>
            <td className="p-3 border">Back references</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>/ searches forward, ? searches backward</li>
        <li>:%s/old/new/g replaces in entire file</li>
        <li>Add c flag for confirmation</li>
        <li>Use {`\\<\\>`} for whole word matching</li>
      </ul>
    </div>
  </div>
);

export default VimSearchReplace;
