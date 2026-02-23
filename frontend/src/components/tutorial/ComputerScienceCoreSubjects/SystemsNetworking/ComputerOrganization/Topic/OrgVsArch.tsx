import React from 'react';

const OrgVsArch: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Computer Organization vs Computer Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      While Computer Organization and Computer Architecture are closely related, they represent
      different aspects of computer systems. Architecture defines WHAT the computer does, while
      Organization defines HOW it does it. Understanding this distinction is fundamental to
      grasping how modern computers are designed and function.
    </p>

    <h2 className="text-3xl font-bold mt-8">Computer Architecture</h2>
    <p className="leading-relaxed">
      Computer Architecture refers to the attributes of a computer system that are visible to a
      programmer. It includes the instruction set, data types, addressing modes, and the overall
      design philosophy. Architecture is concerned with the functional behavior of the computer
      system as seen by the software developer.
    </p>

    <h2 className="text-3xl font-bold mt-8">Computer Organization</h2>
    <p className="leading-relaxed">
      Computer Organization refers to the operational units and their interconnections that
      implement the architectural specifications. It deals with the hardware details transparent
      to the programmer, such as control signals, memory technology, and peripheral interfaces.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Differences</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Computer Architecture</th>
            <th className="p-3 border">Computer Organization</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Focus</td>
            <td className="p-3 border">What the system does</td>
            <td className="p-3 border">How it does it</td>
          </tr>
          <tr>
            <td className="p-3 border">Visibility</td>
            <td className="p-3 border">Programmer visible</td>
            <td className="p-3 border">Hardware designer visible</td>
          </tr>
          <tr>
            <td className="p-3 border">Concerns</td>
            <td className="p-3 border">Instruction set, addressing modes</td>
            <td className="p-3 border">Control signals, circuits, timing</td>
          </tr>
          <tr>
            <td className="p-3 border">Abstraction Level</td>
            <td className="p-3 border">Higher level</td>
            <td className="p-3 border">Lower level</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">x86, ARM, RISC-V ISA</td>
            <td className="p-3 border">Intel Core i7, AMD Ryzen implementation</td>
          </tr>
          <tr>
            <td className="p-3 border">Change Frequency</td>
            <td className="p-3 border">Changes less frequently</td>
            <td className="p-3 border">Changes with technology</td>
          </tr>
          <tr>
            <td className="p-3 border">Impact</td>
            <td className="p-3 border">Affects software compatibility</td>
            <td className="p-3 border">Affects performance and cost</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Architectural Attributes</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Instruction Set:</strong> The complete set of instructions the processor can execute</li>
      <li><strong>Data Types:</strong> Types of data the processor can handle (integer, floating-point)</li>
      <li><strong>Addressing Modes:</strong> Methods to specify operand locations in memory</li>
      <li><strong>Number of Registers:</strong> Programmer-visible registers available</li>
      <li><strong>Memory Addressing:</strong> How memory locations are referenced</li>
      <li><strong>I/O Mechanisms:</strong> How the processor interfaces with I/O devices</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Organizational Attributes</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Hardware Components:</strong> Specific circuits and their interconnections</li>
      <li><strong>Control Signals:</strong> Signals that coordinate hardware operations</li>
      <li><strong>Memory Technology:</strong> Type and speed of memory chips used</li>
      <li><strong>Bus Width:</strong> Number of data lines in the system bus</li>
      <li><strong>Clock Frequency:</strong> Operating speed of the processor</li>
      <li><strong>Peripheral Interfaces:</strong> How devices connect to the system</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Example: Same Architecture, Different Organization

x86 Architecture (Common to all):
- Same instruction set (ADD, MOV, JMP, etc.)
- Same addressing modes
- Same programmer model

Organization A (Intel Pentium 4):        Organization B (Intel Core i7):
- NetBurst microarchitecture             - Nehalem microarchitecture
- Deep 31-stage pipeline                 - 14-16 stage pipeline
- High clock speeds (up to 3.8 GHz)      - Lower clock speeds (2-4 GHz)
- Higher power consumption               - Better power efficiency
- In-order execution core                - Out-of-order execution
- Single/Dual core                       - Multi-core design

Both run same x86 programs but with different performance characteristics!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why This Distinction Matters</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Software Compatibility:</strong> Programs compiled for one architecture may not
        run on another, but the same program runs on different implementations of the same architecture.
      </li>
      <li>
        <strong>Performance Variation:</strong> Different organizational implementations of the
        same architecture can have vastly different performance characteristics.
      </li>
      <li>
        <strong>Cost Optimization:</strong> Manufacturers can create budget and premium processors
        with the same architecture but different organizational choices.
      </li>
      <li>
        <strong>Technology Evolution:</strong> As technology improves, organization can change
        while maintaining architectural compatibility.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Architecture is the programmer's view; Organization is the hardware designer's view</li>
        <li>Same architecture can have multiple organizational implementations</li>
        <li>Architecture ensures software compatibility across different implementations</li>
        <li>Organization determines performance, power, and cost characteristics</li>
        <li>Understanding both is essential for system designers and programmers</li>
      </ul>
    </div>
  </div>
);

export default OrgVsArch;
