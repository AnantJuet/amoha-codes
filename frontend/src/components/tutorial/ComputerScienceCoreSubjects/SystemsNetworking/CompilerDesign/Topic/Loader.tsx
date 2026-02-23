import React from "react";

const Loader: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Loader
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A <strong>loader</strong> is a system program that loads an executable file into
      memory and prepares it for execution. It reads the executable, allocates memory,
      copies code and data to memory, performs final relocations if needed, and transfers
      control to the program's entry point.
    </p>

    <h2 className="text-3xl font-bold mt-8">Loader Functions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Loader Tasks:

1. ALLOCATION
   - Request memory from OS
   - Allocate space for code, data, stack, heap

2. LOADING
   - Read executable file sections
   - Copy to allocated memory

3. RELOCATION (if needed)
   - Adjust addresses for actual load address
   - Required for position-dependent code

4. SYMBOL RESOLUTION (dynamic linking)
   - Resolve references to shared libraries
   - Load required shared libraries

5. INITIALIZATION
   - Set up stack and registers
   - Transfer control to entry point

Loading Process:
+------------+     +---------+     +------------------+
| Executable |     | LOADER  |     | Memory           |
| on disk    |---->|         |---->| +----------+     |
+------------+     +---------+     | | .text    |     |
                                   | +----------+     |
                                   | | .data    |     |
                                   | +----------+     |
                                   | | .bss     |     |
                                   | +----------+     |
                                   | | heap     |     |
                                   | +----------+     |
                                   | | stack    |     |
                                   | +----------+     |
                                   +------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Loaders</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Absolute Loader</td>
            <td className="p-3 border">Loads to fixed address</td>
            <td className="p-3 border">Simple systems, bootloaders</td>
          </tr>
          <tr>
            <td className="p-3 border">Relocating Loader</td>
            <td className="p-3 border">Adjusts addresses at load</td>
            <td className="p-3 border">Single-user OS</td>
          </tr>
          <tr>
            <td className="p-3 border">Dynamic Loader</td>
            <td className="p-3 border">Links at load/run time</td>
            <td className="p-3 border">Modern OS with shared libs</td>
          </tr>
          <tr>
            <td className="p-3 border">Bootstrap Loader</td>
            <td className="p-3 border">Loads OS kernel</td>
            <td className="p-3 border">System startup</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Dynamic Loading</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Dynamic Loading with dlopen (Linux):

#include <dlfcn.h>

// Load shared library at runtime
void* handle = dlopen("libplugin.so", RTLD_LAZY);

// Get function pointer
typedef void (*func_t)(void);
func_t func = (func_t)dlsym(handle, "plugin_init");

// Call the function
func();

// Unload when done
dlclose(handle);

Advantages:
- Load only when needed (memory savings)
- Plugin architecture support
- Update libraries without recompiling`}
      </pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Loader brings executable from disk to memory</li>
        <li>Performs allocation, loading, and initialization</li>
        <li>Dynamic loader handles shared library loading</li>
        <li>Position-independent code enables loading at any address</li>
        <li>Modern systems use dynamic loading extensively</li>
      </ul>
    </div>
  </div>
);

export default Loader;
