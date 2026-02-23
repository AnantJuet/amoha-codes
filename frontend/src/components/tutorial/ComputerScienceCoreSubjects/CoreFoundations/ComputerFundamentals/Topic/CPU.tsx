import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Central Processing Unit (CPU) ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Central Processing Unit (CPU)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 26 Oct, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      The Central Processing Unit (CPU) is like the brain of a computer. It’s the part that does most of the
      thinking, calculating, and decision-making to make your computer work. Whether you’re playing a game,
      typing a school assignment, or watching a video, the CPU is busy handling all the instructions to get
      the job done.
    </p>
    <p className="leading-relaxed">
      The CPU is usually placed in a special slot called a <strong>socket</strong> on the computer’s motherboard.
      It handles tasks like:
    </p>

    {/* Ordered List */}
    <ol className="list-decimal list-inside space-y-2 ml-4">
      <li>Doing math calculations (like adding or multiplying numbers).</li>
      <li>Running apps or games.</li>
      <li>Input/Output (I/O) operations — communicating with memory and peripherals.</li>
      <li>Storing and retrieving information during tasks.</li>
    </ol>

    <p className="leading-relaxed mt-4">
      Without a CPU, a computer wouldn’t know what to do.
    </p>

    {/* Importance Section */}
    <h2 className="text-3xl font-bold  mt-8">
      Why CPU is Important in Computing
    </h2>
    <p className="leading-relaxed">
      The CPU is super important because it handles every task your computer does. Without it, your computer
      would just be a fancy box! A fast CPU means your games run smoothly, your apps open quickly, and your
      homework gets done faster.
    </p>

    {/* Main Components */}
    <h2 className="text-3xl font-bold  mt-8">
      Main Components of CPU
    </h2>
    <p className="leading-relaxed">
      The components of a CPU include the ALU (Arithmetic Logic Unit), CU (Control Unit), registers, cache,
      and clock.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Control Unit</h3>
    <p className="leading-relaxed">
      Manages CPU operations by sending signals like clock, hold, and reset to synchronize components.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Arithmetic and Logic Unit (ALU)</h3>
    <p className="leading-relaxed">
      Handles arithmetic tasks (addition, subtraction, multiplication, division) and logic operations
      (AND, OR, comparisons).
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Memory Unit</h3>
    <p className="leading-relaxed">
      Stores data and instructions in registers or cache for quick access.
    </p>

    {/* Functions */}
    <h2 className="text-3xl font-bold mt-8">
      Functions of the CPU
    </h2>
    <p className="leading-relaxed">
      The CPU processes instructions through the <strong>Fetch–Decode–Execute–Store</strong> cycle:
    </p>

    <ol className="list-decimal pl-6 space-y-4">
      <li><strong>Fetch:</strong> Gets the instruction from RAM.</li>
      <li><strong>Decode:</strong> Interprets the instruction.</li>
      <li><strong>Execute:</strong> Carries out the instruction.</li>
      <li><strong>Store:</strong> Saves the result in memory.</li>
    </ol>

    {/* Types of CPUs */}
    <h2 className="text-3xl font-bold  mt-8">
      Types of CPUs
    </h2>
    <ol className="list-decimal pl-6 space-y-4">
      <li><strong>Single-Core CPU:</strong> The oldest type, handles one task at a time.</li>
      <li><strong>Dual-Core CPU:</strong> Two cores for multitasking.</li>
      <li><strong>Quad-Core CPU:</strong> Four cores for heavy tasks like gaming or video editing.</li>
    </ol>

    {/* Brain of Computer */}
    <h2 className="text-3xl font-bold  mt-8">
      Why is the CPU Called the Brain of the Computer?
    </h2>
    <p className="leading-relaxed">
      The CPU is called the brain because it processes and executes every instruction that runs the computer,
      similar to how the brain processes information for the body.
    </p>

    {/* Speed Factors */}
    <h2 className="text-3xl font-bold  mt-8">
      How Does the CPU Make Computers Faster?
    </h2>
    <ol className="list-decimal pl-6 space-y-4">
      <li><strong>Multiple Cores:</strong> More cores allow multitasking.</li>
      <li><strong>Faster Clocks:</strong> Higher GHz = more instructions per second.</li>
      <li><strong>Bigger Cache:</strong> Stores data closer for quick access.</li>
      <li><strong>Pipelining:</strong> Executes multiple instructions in sequence efficiently.</li>
    </ol>

    {/* Advantages and Disadvantages */}
<h2 className="text-3xl font-bold mt-8 mb-4">
  Advantages and Disadvantages of CPUs
</h2>

<div className="overflow-x-auto">
  <table className="min-w-full border border-gray-300 rounded-lg">
    <thead className="bg-gary-400">
      <tr>
        <th className="text-left px-4 py-2 text-lg font-semibold  border ">
          Advantages
        </th>
        <th className="text-left px-4 py-2 text-lg font-semibold  border ">
          Disadvantages
        </th>
      </tr>
    </thead>
    <tbody className="">
      <tr>
        <td className="px-4 py-3 border border-gray-300">
          Versatile: CPUs can handle all kinds of tasks, from simple math to running complex games.
        </td>
        <td className="px-4 py-3 border border-gray-300">
          Heat: CPUs get hot when working hard, so computers need fans or cooling systems to stay safe.
        </td>
      </tr>
      <tr className="">
        <td className="px-4 py-3 border border-gray-300">
          Fast: Modern CPUs process billions of instructions per second.
        </td>
        <td className="px-4 py-3 border border-gray-300">
          Power Use: Powerful CPUs use a lot of electricity, which can raise power bills.
        </td>
      </tr>
      <tr>
        <td className="px-4 py-3 border border-gray-300">
          Multi-tasking: Multi-core CPUs let you run many programs at once, like watching a video while chatting with friends.
        </td>
        <td className="px-4 py-3 border border-gray-300">
          Cost: High-performance CPUs, like Intel Core i9, can be expensive.
        </td>
      </tr>
      <tr className="">
        <td className="px-4 py-3 border border-gray-300">
          Compatible: CPUs work with tons of software, so you can use the same CPU for different apps.
        </td>
        <td className="px-4 py-3 border border-gray-300">
          Not Perfect for All Tasks: For tasks like graphics or video editing, specialized chips like GPUs (Graphics Processing Units) are better than CPUs.
        </td>
      </tr>
    </tbody>
  </table>
</div>


    {/* History */}
    <h2 className="text-3xl font-bold  mt-8">
      History of CPU
    </h2>
    <ol className="list-decimal pl-6 space-y-4">
      <li>1823 — Silicon discovered by Baron Jöns Jakob Berzelius.</li>
      <li>1947 — Transistor invented by Bardeen, Brattain & Shockley.</li>
      <li>1958 — Integrated circuit invented by Kilby & Noyce.</li>
      <li>1971 — Intel 4004: first microprocessor.</li>
      <li>1979 — Motorola 68000: early gaming CPU.</li>
      <li>1999 — Intel Celeron: faster, affordable CPUs.</li>
      <li>2005 — AMD dual-core processor launched.</li>
      <li>2009 — Intel Core i5 introduced.</li>
      <li>2017–2018 — Intel Core i9 for high performance.</li>
    </ol>

    {/* Modern Applications */}
    <h2 className="text-3xl font-bold  mt-8">
      Modern Applications of CPUs
    </h2>

    <h3 className="text-2xl font-semibold mt-4 ">Personal Computers</h3>
    <p className="leading-relaxed">
      CPUs in desktops and laptops handle gaming, apps, and productivity tasks efficiently.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Mobile Devices</h3>
    <p className="leading-relaxed">
      Mobile CPUs manage calls, apps, and multimedia while saving power.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Servers and Data Centers</h3>
    <p className="leading-relaxed">
      CPUs in data centers power major sites like Google and YouTube, processing millions of user requests
      every second.
    </p>
  </div>
);

export default Home;
