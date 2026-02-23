import React from "react";

const CallingConventions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Calling Conventions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A <strong>calling convention</strong> defines how functions receive parameters,
      return values, and manage registers during function calls. It specifies the
      responsibilities of the caller and callee, ensuring that code from different
      sources can interoperate correctly.
    </p>

    <h2 className="text-3xl font-bold mt-8">Calling Convention Elements</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`A calling convention specifies:

1. PARAMETER PASSING
   - Where: registers or stack
   - Order: left-to-right or right-to-left
   - Types: how different types are passed

2. RETURN VALUE
   - Which register holds return value
   - Large return values handling

3. REGISTER USAGE
   - Caller-saved: caller must preserve
   - Callee-saved: callee must preserve

4. STACK MANAGEMENT
   - Who cleans up stack (caller or callee)
   - Stack alignment requirements

5. STACK FRAME LAYOUT
   - Return address position
   - Frame pointer usage`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Calling Conventions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Convention</th>
            <th className="p-3 border">Parameters</th>
            <th className="p-3 border">Cleanup</th>
            <th className="p-3 border">Used By</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">cdecl</td>
            <td className="p-3 border">Stack (R to L)</td>
            <td className="p-3 border">Caller</td>
            <td className="p-3 border">C (default)</td>
          </tr>
          <tr>
            <td className="p-3 border">stdcall</td>
            <td className="p-3 border">Stack (R to L)</td>
            <td className="p-3 border">Callee</td>
            <td className="p-3 border">Win32 API</td>
          </tr>
          <tr>
            <td className="p-3 border">fastcall</td>
            <td className="p-3 border">Registers first</td>
            <td className="p-3 border">Callee</td>
            <td className="p-3 border">Optimized code</td>
          </tr>
          <tr>
            <td className="p-3 border">System V AMD64</td>
            <td className="p-3 border">6 regs + stack</td>
            <td className="p-3 border">Caller</td>
            <td className="p-3 border">Linux x86-64</td>
          </tr>
          <tr>
            <td className="p-3 border">Microsoft x64</td>
            <td className="p-3 border">4 regs + stack</td>
            <td className="p-3 border">Caller</td>
            <td className="p-3 border">Windows x64</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">System V AMD64 ABI</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`System V AMD64 (Linux x86-64):

Integer/Pointer Arguments:
  1st: RDI    4th: RCX
  2nd: RSI    5th: R8
  3rd: RDX    6th: R9
  7th+: Stack

Float Arguments: XMM0-XMM7

Return Value:
  Integer: RAX (and RDX for 128-bit)
  Float: XMM0 (and XMM1)

Caller-saved: RAX, RCX, RDX, RSI, RDI, R8-R11
Callee-saved: RBX, RBP, R12-R15

Example: int add(int a, int b, int c)
  a -> EDI
  b -> ESI
  c -> EDX
  return -> EAX`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Function Call Sequence</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CALLER'S RESPONSIBILITIES:
1. Save caller-saved registers (if needed)
2. Place arguments in registers/stack
3. Execute CALL instruction
4. Clean up arguments (if caller cleans)
5. Restore caller-saved registers
6. Use return value from RAX

CALLEE'S RESPONSIBILITIES:
1. Push RBP (if using frame pointer)
2. Set RBP = RSP
3. Save callee-saved registers (if used)
4. Allocate local variables
5. Execute function body
6. Place return value in RAX
7. Restore callee-saved registers
8. Restore RBP
9. Execute RET`}
      </pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Calling conventions define function call protocols</li>
        <li>Specify parameter passing, return values, register usage</li>
        <li>Modern ABIs use registers for first few arguments</li>
        <li>Caller-saved vs callee-saved determines preservation</li>
        <li>ABI compatibility needed for cross-module calls</li>
      </ul>
    </div>
  </div>
);

export default CallingConventions;
