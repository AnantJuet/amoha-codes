import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Computer Organization & Architecture Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Welcome to the comprehensive Computer Organization and Architecture tutorial on Amoha Codes.
      This subject forms the foundation for understanding how computers work at the hardware level,
      covering everything from basic digital logic to advanced parallel processing architectures.
      Mastering these concepts is essential for computer science students, hardware engineers,
      and anyone preparing for technical interviews.
    </p>

    <h2 className="text-3xl font-bold mt-8">What You Will Learn</h2>
    <p className="leading-relaxed">
      This tutorial provides complete coverage of computer organization concepts, from number systems
      and digital logic to CPU design, memory hierarchy, and parallel computing. Each topic is explained
      with clear diagrams, examples, and practical applications to ensure thorough understanding.
    </p>

    <h2 className="text-3xl font-bold mt-8">Course Structure</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">S.No</th>
            <th className="p-3 border">Topic</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Introduction</td>
            <td className="p-3 border">Basic concepts, Von Neumann & Harvard architectures</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Data Representation</td>
            <td className="p-3 border">Number systems, floating point, codes</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Digital Logic</td>
            <td className="p-3 border">Gates, Boolean algebra, combinational circuits</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Sequential Circuits</td>
            <td className="p-3 border">Flip-flops, registers, counters</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">CPU Organization</td>
            <td className="p-3 border">Registers, instruction formats, addressing modes</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">Control Unit</td>
            <td className="p-3 border">Hardwired and microprogrammed control</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">Memory Organization</td>
            <td className="p-3 border">Cache, virtual memory, memory hierarchy</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">I/O Organization</td>
            <td className="p-3 border">I/O techniques, DMA, interrupts</td>
          </tr>
          <tr>
            <td className="p-3 border">9</td>
            <td className="p-3 border">Pipelining</td>
            <td className="p-3 border">Pipeline stages, hazards, performance</td>
          </tr>
          <tr>
            <td className="p-3 border">10</td>
            <td className="p-3 border">Parallel Processing</td>
            <td className="p-3 border">Flynn's classification, multiprocessors</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Learn Computer Organization?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Hardware Understanding:</strong> Comprehend how computers execute instructions at the hardware level</li>
      <li><strong>Performance Optimization:</strong> Write more efficient code by understanding hardware constraints</li>
      <li><strong>System Design:</strong> Essential knowledge for designing embedded systems and processors</li>
      <li><strong>Interview Preparation:</strong> Core subject in technical interviews for software and hardware roles</li>
      <li><strong>Academic Excellence:</strong> Fundamental subject in computer science and engineering curricula</li>
      <li><strong>Career Foundation:</strong> Required for roles in chip design, embedded systems, and systems programming</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Prerequisites</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Basic understanding of binary numbers</li>
      <li>Familiarity with basic electronics concepts</li>
      <li>Elementary programming knowledge</li>
      <li>Understanding of basic mathematics</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Processor Design:</strong> Creating CPUs and microcontrollers</li>
      <li><strong>Embedded Systems:</strong> Developing firmware for IoT devices</li>
      <li><strong>Compiler Optimization:</strong> Understanding target architecture for better code generation</li>
      <li><strong>Performance Tuning:</strong> Optimizing software for specific hardware</li>
      <li><strong>Hardware Verification:</strong> Testing and validating digital designs</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Getting Started</h2>
    <p className="leading-relaxed">
      Begin with the Introduction section to understand basic concepts and computer architecture fundamentals.
      Progress through Data Representation to build a strong foundation in number systems. Then explore
      Digital Logic and Sequential Circuits before moving to CPU and Memory organization. Each topic builds
      upon previous concepts, so following the sequential order is recommended.
    </p>
  </div>
);

export default Home;
