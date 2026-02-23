import React from "react";

const GoIntro: React.FC = () => (
  <div className="dark:text-white">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-17">
      Go Introduction
    </h1>

    <h2 className="text-2xl font-bold mt-6">What is Go?</h2>

    <p className="text-lg leading-relaxed mt-4">
      Go is a cross-platform, open-source programming language designed for
      simplicity, efficiency, and high performance. It was developed at Google
      in 2007 by <b>Robert Griesemer</b>, <b>Rob Pike</b>, and{" "}
      <b>Ken Thompson</b>. Go’s syntax is similar to <b>C++</b> and allows
      developers to build powerful, scalable, and efficient applications.
    </p>

    <ul className="list-disc list-inside leading-relaxed mt-3 space-y-1 dark:text-white ">
      <li>Go is a cross-platform, open source programming language.</li>
      <li>Go can be used to create high-performance applications.</li>
      <li>Go is fast, efficient, and compiled.</li>
      <li>Developed at Google in 2007.</li>
      <li>Go’s syntax is similar to C++.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-8 ">What is Go Used For?</h2>
    <ul className="list-disc list-inside leading-relaxed mt-3 space-y-1 dark:text-white ">
      <li>Web development</li>
      <li>Network programming</li>
      <li>Enterprise applications</li>
      <li>Cloud-native development</li>
    </ul>

    <h2 className="text-2xl font-bold mt-8 ]">Why Use Go?</h2>
    <ul className="list-disc list-inside leading-relaxed mt-3 space-y-1 dark:text-white ">
      <li>Easy to learn</li>
      <li>Fast compile time</li>
      <li>Supports concurrency</li>
      <li>Has garbage collection</li>
      <li>Cross-platform support</li>
    </ul>

    <h2 className="text-2xl font-bold mt-8 ">
      Go Compared to Python and C++
    </h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 dark:border-gray-600 text-left dark:text-white ">
        <thead className="bg-gray-200 dark:bg-gray-800">
          <tr>
            <th className="p-2 border dark:border-gray-600">Feature</th>
            <th className="p-2 border dark:border-gray-600">Go</th>
            <th className="p-2 border dark:border-gray-600">Python</th>
            <th className="p-2 border dark:border-gray-600">C++</th>
          </tr>
        </thead>

        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-2 border dark:border-gray-600">Typing</td>
            <td className="p-2 border dark:border-gray-600">Static</td>
            <td className="p-2 border dark:border-gray-600">Dynamic</td>
            <td className="p-2 border dark:border-gray-600">Static</td>
          </tr>

          <tr>
            <td className="p-2 border dark:border-gray-600">Run time</td>
            <td className="p-2 border dark:border-gray-600">Fast</td>
            <td className="p-2 border dark:border-gray-600">Slow</td>
            <td className="p-2 border dark:border-gray-600">Fast</td>
          </tr>

          <tr>
            <td className="p-2 border dark:border-gray-600">Compilation</td>
            <td className="p-2 border dark:border-gray-600">Compiled</td>
            <td className="p-2 border dark:border-gray-600">Interpreted</td>
            <td className="p-2 border dark:border-gray-600">Compiled</td>
          </tr>

          <tr>
            <td className="p-2 border dark:border-gray-600">Compile time</td>
            <td className="p-2 border dark:border-gray-600">Fast</td>
            <td className="p-2 border dark:border-gray-600">Interpreted</td>
            <td className="p-2 border dark:border-gray-600">Slow</td>
          </tr>

          <tr>
            <td className="p-2 border dark:border-gray-600">Concurrency</td>
            <td className="p-2 border dark:border-gray-600">
              Goroutines & channels
            </td>
            <td className="p-2 border dark:border-gray-600">
              No built-in concurrency
            </td>
            <td className="p-2 border dark:border-gray-600">
              Threads
            </td>
          </tr>

          <tr>
            <td className="p-2 border dark:border-gray-600">Garbage Collection</td>
            <td className="p-2 border dark:border-gray-600">Automatic</td>
            <td className="p-2 border dark:border-gray-600">Automatic</td>
            <td className="p-2 border dark:border-gray-600">None</td>
          </tr>

          <tr>
            <td className="p-2 border dark:border-gray-600">Classes</td>
            <td className="p-2 border dark:border-gray-600">No</td>
            <td className="p-2 border dark:border-gray-600">Yes</td>
            <td className="p-2 border dark:border-gray-600">Yes</td>
          </tr>

          <tr>
            <td className="p-2 border dark:border-gray-600">Inheritance</td>
            <td className="p-2 border dark:border-gray-600">No</td>
            <td className="p-2 border dark:border-gray-600">Yes</td>
            <td className="p-2 border dark:border-gray-600">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-8 ">Notes</h2>
    <ul className="list-disc list-inside leading-relaxed mt-3 space-y-1 dark:text-white ">
      <li><b>Compilation time</b> = building executable</li>
      <li><b>Concurrency</b> = doing multiple tasks efficiently</li>
      <li><b>Static typing</b> = types known at compile time</li>
    </ul>

    <h2 className="text-2xl font-bold mt-8 ">Get Started</h2>
    <p className="leading-relaxed mt-3 dark:text-white ">
      This tutorial teaches Go from scratch. No experience required!
    </p>
  </div>
);

export default GoIntro;
