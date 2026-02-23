import React from "react";

const Linker: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Linker
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A <strong>linker</strong> (or link editor) is a program that combines multiple object
      files and libraries into a single executable. It resolves external references between
      modules, performs relocation to assign final addresses, and creates the executable
      binary that can be loaded and run.
    </p>

    <h2 className="text-3xl font-bold mt-8">Linker Functions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Main Linker Tasks:

1. SYMBOL RESOLUTION
   - Match undefined references to definitions
   - Build global symbol table
   - Report undefined symbol errors

2. RELOCATION
   - Merge sections from multiple object files
   - Assign runtime addresses to symbols
   - Patch code with resolved addresses

3. LIBRARY LINKING
   - Search libraries for undefined symbols
   - Include only needed library modules
   - Handle static vs dynamic linking

Linking Process:
+----------+     +----------+     +-----------+
| main.o   |     | utils.o  |     | libc.a    |
| .text    |     | .text    |     | (library) |
| .data    |     | .data    |     +-----------+
+----------+     +----------+           |
      |               |                 |
      +-------+-------+-----------------+
              |
         +----v----+
         | LINKER  |
         +---------+
              |
              v
         +----------+
         | a.out    |
         | .text    |
         | .data    |
         +----------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Symbol Resolution</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Symbol Types:
- Strong symbols: Functions, initialized globals
- Weak symbols: Uninitialized globals

Resolution Rules:
1. Multiple strong symbols: ERROR
2. One strong, multiple weak: Choose strong
3. Multiple weak: Choose any (or largest)

Example:
// file1.c
int x = 5;          // Strong (initialized)
int main() { ... }  // Strong (function)

// file2.c
int x;              // Weak (uninitialized)
extern int y;       // External reference

Linker matches:
- file2's reference to x -> file1's definition
- file2's reference to y -> must find elsewhere`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Static vs Dynamic Linking</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Static Linking</th>
            <th className="p-3 border">Dynamic Linking</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">When</td>
            <td className="p-3 border">At link time</td>
            <td className="p-3 border">At load/run time</td>
          </tr>
          <tr>
            <td className="p-3 border">Library</td>
            <td className="p-3 border">.a (archive)</td>
            <td className="p-3 border">.so, .dll</td>
          </tr>
          <tr>
            <td className="p-3 border">File size</td>
            <td className="p-3 border">Larger</td>
            <td className="p-3 border">Smaller</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory</td>
            <td className="p-3 border">Duplicate copies</td>
            <td className="p-3 border">Shared in memory</td>
          </tr>
          <tr>
            <td className="p-3 border">Updates</td>
            <td className="p-3 border">Recompile needed</td>
            <td className="p-3 border">Just replace library</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Linker Commands</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# GCC linking
gcc main.o utils.o -o program

# Link with static library
gcc main.o -L. -lmylib -o program

# Link with shared library
gcc main.o -L. -lshared -o program

# View symbols
nm program
objdump -t program

# View shared library dependencies
ldd program`}
      </pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Linker combines object files into executable</li>
        <li>Symbol resolution matches references to definitions</li>
        <li>Relocation assigns final memory addresses</li>
        <li>Static linking embeds library code in executable</li>
        <li>Dynamic linking defers resolution to load/run time</li>
      </ul>
    </div>
  </div>
);

export default Linker;
