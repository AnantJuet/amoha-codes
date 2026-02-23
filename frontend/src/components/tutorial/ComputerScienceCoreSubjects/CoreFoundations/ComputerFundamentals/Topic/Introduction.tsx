import React from 'react';

const Intro: React.FC = () => (
  <div className="p-8 mt-20">
    <h1 className="text-3xl font-bold mb-4">1. Introduction to Computers</h1>

    <p className="text-lg mb-6">
      Computers have become an integral part of our daily lives, evolving from simple calculation machines
      to complex systems that power everything from smartphones to space exploration. In this section, we will
      cover the basics, explore their history, and discuss different types of computers.
    </p>

    <h2 className="text-2xl font-semibold mb-3">What is a Computer?</h2>
    <p className="mb-4">
      A <strong>computer</strong> is an electronic device that processes data according to a set of instructions
      called a program. It can store, retrieve, and process data to produce meaningful information.
    </p>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
      <p className="text-blue-700">
        <strong>Key Definition:</strong> A computer is a programmable machine that accepts input, processes it
        according to stored instructions, and produces output.
      </p>
    </div>

    <h2 className="text-2xl font-semibold mb-3">Basic Functions of a Computer</h2>
    <ul className="list-disc ml-6 mb-6 space-y-2">
      <li><strong>Input:</strong> Receiving data from input devices (keyboard, mouse, sensors)</li>
      <li><strong>Processing:</strong> Performing operations on data using the CPU</li>
      <li><strong>Storage:</strong> Saving data temporarily (RAM) or permanently (hard drive, SSD)</li>
      <li><strong>Output:</strong> Displaying or transmitting results (monitor, printer, speakers)</li>
    </ul>

    <h2 className="text-2xl font-semibold mb-3">Computer and its Types</h2>
    <p className="mb-4">
      Computers can be classified based on size, processing power, and purpose:
    </p>

    <table className="min-w-full border border-gray-300 mb-6">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Type</th>
          <th className="border border-gray-300 px-4 py-2">Description</th>
          <th className="border border-gray-300 px-4 py-2">Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Supercomputers</td>
          <td className="border border-gray-300 px-4 py-2">Most powerful, used for complex calculations</td>
          <td className="border border-gray-300 px-4 py-2">Weather forecasting, scientific simulations</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Mainframe Computers</td>
          <td className="border border-gray-300 px-4 py-2">Large systems for enterprise data processing</td>
          <td className="border border-gray-300 px-4 py-2">Banks, airlines, large organizations</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Minicomputers</td>
          <td className="border border-gray-300 px-4 py-2">Mid-range systems for small businesses</td>
          <td className="border border-gray-300 px-4 py-2">Servers, departmental systems</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Microcomputers</td>
          <td className="border border-gray-300 px-4 py-2">Personal computers for individual use</td>
          <td className="border border-gray-300 px-4 py-2">Desktops, laptops, tablets</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Embedded Computers</td>
          <td className="border border-gray-300 px-4 py-2">Built into other devices</td>
          <td className="border border-gray-300 px-4 py-2">Smart TVs, cars, appliances</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-semibold mb-3">Brief History of Computers</h2>
    <div className="space-y-3 mb-6">
      <p><strong>1st Generation (1940-1956):</strong> Vacuum tubes, large size, ENIAC, UNIVAC</p>
      <p><strong>2nd Generation (1956-1963):</strong> Transistors, smaller, faster, IBM 7094</p>
      <p><strong>3rd Generation (1964-1971):</strong> Integrated circuits, minicomputers, IBM 360</p>
      <p><strong>4th Generation (1971-Present):</strong> Microprocessors, personal computers</p>
      <p><strong>5th Generation (Present & Beyond):</strong> AI, quantum computing, parallel processing</p>
    </div>

    <h2 className="text-2xl font-semibold mb-3">Applications of Computers</h2>
    <p className="mb-4">
      Computers are used in virtually every field of human activity:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Business & Commerce</h3>
        <ul className="list-disc ml-4 text-sm">
          <li>Accounting and payroll</li>
          <li>Inventory management</li>
          <li>E-commerce platforms</li>
          <li>Customer relationship management</li>
        </ul>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Education</h3>
        <ul className="list-disc ml-4 text-sm">
          <li>Online learning platforms</li>
          <li>Digital libraries</li>
          <li>Educational software</li>
          <li>Virtual classrooms</li>
        </ul>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Healthcare</h3>
        <ul className="list-disc ml-4 text-sm">
          <li>Medical imaging (MRI, CT scans)</li>
          <li>Patient record management</li>
          <li>Drug research and development</li>
          <li>Telemedicine</li>
        </ul>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Entertainment</h3>
        <ul className="list-disc ml-4 text-sm">
          <li>Video games</li>
          <li>Movie production and CGI</li>
          <li>Music composition</li>
          <li>Streaming services</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-semibold mb-3">Components of a Computer System</h2>
    <p className="mb-4">
      A computer system consists of two main components:
    </p>
    <ul className="list-disc ml-6 mb-6 space-y-2">
      <li><strong>Hardware:</strong> Physical components (CPU, RAM, hard drive, monitor, keyboard)</li>
      <li><strong>Software:</strong> Programs and operating systems (Windows, macOS, applications)</li>
    </ul>

    <div className="bg-green-50 border-l-4 border-green-400 p-4">
      <p className="text-green-700">
        <strong>Remember:</strong> Hardware without software is like a body without a brain - it cannot
        function. Software without hardware has no medium to execute on. Both are essential!
      </p>
    </div>
  </div>
);

export default Intro;
