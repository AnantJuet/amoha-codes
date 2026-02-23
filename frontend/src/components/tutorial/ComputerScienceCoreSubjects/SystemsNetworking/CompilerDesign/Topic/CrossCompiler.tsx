import React from "react";

const CrossCompiler: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cross Compiler
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A <strong>cross compiler</strong> is a compiler that runs on one platform (the <em>host</em>) but
      generates executable code for a different platform (the <em>target</em>). This is essential for
      developing software for platforms where running a compiler directly is impractical or impossible.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Cross Compiler:
• Runs on: Host Platform (Platform A)
• Produces code for: Target Platform (Platform B)

Example:
Compiling on Windows (x86) to run on ARM-based embedded systems

Host: Windows PC (x86-64)
Target: Raspberry Pi (ARM)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Use Cross Compilers?</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>Embedded Systems:</strong> Target devices may lack resources to run a compiler</li>
      <li><strong>Mobile Development:</strong> Android apps compiled on desktop for ARM devices</li>
      <li><strong>Operating System Development:</strong> OS kernels compiled on different systems</li>
      <li><strong>Game Console Development:</strong> Games compiled on PC for console hardware</li>
      <li><strong>IoT Devices:</strong> Code for microcontrollers compiled on development machines</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Cross Compiler vs Native Compiler</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Native Compiler</th>
            <th className="p-3 border">Cross Compiler</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Host = Target</td>
            <td className="p-3 border">Yes (same platform)</td>
            <td className="p-3 border">No (different platforms)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Execution</td>
            <td className="p-3 border">Run output directly</td>
            <td className="p-3 border">Transfer output to target</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Use Case</td>
            <td className="p-3 border">Desktop applications</td>
            <td className="p-3 border">Embedded, mobile, OS dev</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complexity</td>
            <td className="p-3 border">Simpler setup</td>
            <td className="p-3 border">Requires toolchain setup</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">T-Diagram Representation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Native Compiler (compiles for same platform):

    +-------+
    |   C   |
    +---+---+
        |
       \\|/
    +-------+
    |  x86  |
    +-------+
       x86     ← Runs on x86, produces x86 code


Cross Compiler (compiles for different platform):

    +-------+
    |   C   |
    +---+---+
        |
       \\|/
    +-------+
    |  ARM  |
    +-------+
       x86     ← Runs on x86, produces ARM code`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cross Compilation Toolchain</h2>
    <p className="leading-relaxed">
      A cross compilation toolchain includes all the tools needed to compile code for the target platform:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Cross Compiler:</strong> Compiles source to target architecture</li>
      <li><strong>Cross Assembler:</strong> Assembles for target architecture</li>
      <li><strong>Cross Linker:</strong> Links object files for target</li>
      <li><strong>Target Libraries:</strong> Standard libraries for target platform</li>
      <li><strong>Target Headers:</strong> Header files for target platform</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Cross Compilation Workflow:

Source Code (.c)
      |
      v
Cross Compiler (on Host)
      |
      v
Object Code (for Target)
      |
      v
Cross Linker (+ Target Libraries)
      |
      v
Executable (for Target)
      |
      v
Transfer to Target Device
      |
      v
Execute on Target`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Cross Compilation Scenarios</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Embedded Systems Development</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Host: Linux/Windows PC (x86-64)
Target: ARM Cortex-M microcontroller

Toolchain: arm-none-eabi-gcc

$ arm-none-eabi-gcc -mcpu=cortex-m4 main.c -o firmware.elf`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Android Development</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Host: macOS/Windows/Linux (x86-64)
Target: Android device (ARM/ARM64)

Toolchain: Android NDK

$ aarch64-linux-android-clang main.c -o app`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Raspberry Pi Development</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Host: Ubuntu PC (x86-64)
Target: Raspberry Pi (ARM)

Toolchain: arm-linux-gnueabihf-gcc

$ arm-linux-gnueabihf-gcc main.c -o program`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Popular Cross Compilers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Toolchain</th>
            <th className="p-3 border">Target</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">arm-none-eabi-gcc</td>
            <td className="p-3 border">ARM bare metal</td>
            <td className="p-3 border">Microcontrollers</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">arm-linux-gnueabihf-gcc</td>
            <td className="p-3 border">ARM Linux</td>
            <td className="p-3 border">Raspberry Pi</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">aarch64-linux-gnu-gcc</td>
            <td className="p-3 border">ARM64 Linux</td>
            <td className="p-3 border">ARM servers</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">mingw-w64</td>
            <td className="p-3 border">Windows</td>
            <td className="p-3 border">Cross-compile from Linux</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Challenges in Cross Compilation</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>Library Dependencies:</strong> Need target-compatible libraries</li>
      <li><strong>Testing:</strong> Cannot test directly on host system</li>
      <li><strong>Debugging:</strong> Requires remote debugging or emulators</li>
      <li><strong>Endianness:</strong> Host and target may have different byte orders</li>
      <li><strong>Word Size:</strong> Different pointer/integer sizes</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Cross compilers run on one platform but generate code for another</li>
        <li>Essential for embedded systems, mobile, and OS development</li>
        <li>Requires a complete toolchain (compiler, linker, libraries)</li>
        <li>Common examples: arm-none-eabi-gcc, Android NDK, mingw-w64</li>
        <li>Testing requires target hardware or emulation</li>
      </ul>
    </div>
  </div>
);

export default CrossCompiler;
