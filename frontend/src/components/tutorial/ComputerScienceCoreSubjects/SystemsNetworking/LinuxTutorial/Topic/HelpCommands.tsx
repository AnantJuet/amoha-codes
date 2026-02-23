import React from "react";

const HelpCommands: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Getting Help in Linux
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Linux provides comprehensive built-in documentation through manual pages,
      info pages, and command help options. Learning to use these resources
      is essential for mastering the command line.
    </p>

    <h2 className="text-3xl font-bold mt-8">man Command (Manual Pages)</h2>
    <p className="leading-relaxed">
      The man command displays the manual pages for commands, providing detailed
      documentation including syntax, options, and examples.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# View manual page for a command
$ man ls
$ man grep
$ man chmod

# Navigation within man pages:
# Space        - Forward one page
# b            - Back one page
# /pattern     - Search forward
# n            - Next search result
# q            - Quit

# Search for keyword in all man pages
$ man -k keyword
$ man -k "copy files"

# Equivalent to man -k
$ apropos "copy files"

# View specific section
$ man 5 passwd         # Configuration file format
$ man 1 passwd         # The command`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Manual Page Sections</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Section</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">1</td>
            <td className="p-3 border">User commands</td>
            <td className="p-3 border font-mono text-gray-900">man 1 ls</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">2</td>
            <td className="p-3 border">System calls</td>
            <td className="p-3 border font-mono text-gray-900">man 2 open</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">3</td>
            <td className="p-3 border">Library functions</td>
            <td className="p-3 border font-mono text-gray-900">man 3 printf</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">4</td>
            <td className="p-3 border">Special files (devices)</td>
            <td className="p-3 border font-mono text-gray-900">man 4 null</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">5</td>
            <td className="p-3 border">File formats</td>
            <td className="p-3 border font-mono text-gray-900">man 5 passwd</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">6</td>
            <td className="p-3 border">Games</td>
            <td className="p-3 border font-mono text-gray-900">man 6 fortune</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">7</td>
            <td className="p-3 border">Miscellaneous</td>
            <td className="p-3 border font-mono text-gray-900">man 7 regex</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">8</td>
            <td className="p-3 border">System admin commands</td>
            <td className="p-3 border font-mono text-gray-900">man 8 mount</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">--help Option</h2>
    <p className="leading-relaxed">
      Most commands support the --help option for quick reference.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Get quick help for a command
$ ls --help
$ grep --help
$ chmod --help

# Some commands use -h instead
$ df -h         # Different: shows human-readable sizes
$ command -h    # May show help

# Output is usually shorter than man pages
# Good for quick option lookup`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">info Command</h2>
    <p className="leading-relaxed">
      The info command provides more detailed documentation than man pages,
      organized in a hypertext format with cross-references.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# View info page
$ info coreutils
$ info grep

# Navigation:
# n          - Next node
# p          - Previous node
# u          - Up one level
# Enter      - Follow link
# l          - Last node visited
# q          - Quit
# h          - Help

# Some commands have more info than man
$ info bash    # Comprehensive bash documentation`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">whatis Command</h2>
    <p className="leading-relaxed">
      The whatis command displays a one-line description of a command.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Get brief description
$ whatis ls
ls (1)               - list directory contents

$ whatis grep
grep (1)             - print lines that match patterns

$ whatis chmod
chmod (1)            - change file mode bits

# Multiple commands at once
$ whatis ls cp mv rm
ls (1)               - list directory contents
cp (1)               - copy files and directories
mv (1)               - move (rename) files
rm (1)               - remove files or directories`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">type Command</h2>
    <p className="leading-relaxed">
      The type command shows how a command would be interpreted (builtin, alias, etc.).
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Check command type
$ type ls
ls is aliased to 'ls --color=auto'

$ type cd
cd is a shell builtin

$ type grep
grep is /usr/bin/grep

$ type ll
ll is aliased to 'ls -la'

# Show all possible interpretations
$ type -a ls
ls is aliased to 'ls --color=auto'
ls is /usr/bin/ls
ls is /bin/ls`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Online Resources</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>tldr:</strong> Simplified man pages with examples (install with npm or apt)</li>
        <li><strong>explainshell.com:</strong> Visual explanation of shell commands</li>
        <li><strong>cheat.sh:</strong> Community-driven cheat sheets (curl cheat.sh/command)</li>
        <li><strong>Stack Overflow:</strong> Q&A for specific problems</li>
        <li><strong>Arch Wiki:</strong> Comprehensive Linux documentation</li>
      </ul>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Install tldr for simplified man pages
$ npm install -g tldr
# or
$ sudo apt install tldr

# Use tldr
$ tldr tar
$ tldr find

# Use cheat.sh (no installation needed)
$ curl cheat.sh/tar
$ curl cheat.sh/find`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>man provides comprehensive documentation for commands</li>
        <li>Use man -k or apropos to search for commands by keyword</li>
        <li>--help gives quick command usage information</li>
        <li>whatis provides one-line command descriptions</li>
        <li>type shows if a command is a builtin, alias, or external</li>
        <li>tldr and cheat.sh offer simpler, example-focused documentation</li>
      </ul>
    </div>
  </div>
);

export default HelpCommands;
