import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Operating System ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      What is an Operating System?
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 25 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      An Operating System is a system software that manages all the resources of a computing device.
    </p>

    <ul className="list-decimal list-inside leading-relaxed space-y-1">
      <li>Acts as an interface between the software and the computer hardware.</li>
      <li>Manages the overall resources and operations of the computer.</li>
      <li>Controls and monitors the execution of all programs, including applications and system software.</li>
      <li>Examples include Windows, Linux, macOS, Android, and iOS.</li>
    </ul>

    {/* Operating System Goals */}
    <h2 className="text-3xl font-bold  mt-8">Operating System Goals</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-1">
      <li>Run user applications and simplify problem-solving for users.</li>
      <li>Ensure the computer system is user-friendly and easy to navigate.</li>
      <li>Optimize hardware use for maximum efficiency.</li>
    </ul>

    {/* Uses */}
    <h2 className="text-3xl font-bold  mt-8">What is an Operating System Used for?</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-1">
      <li>
        <strong>Platform for Application Programs:</strong> Provides a foundation for running application programs.
      </li>
      <li>
        <strong>Managing Input-Output Units:</strong> Manages resources like memory, monitor, keyboard, and printer.
      </li>
      <li>
        <strong>Multitasking:</strong> Allows multiple programs to run and communicate via shared memory.
      </li>
      <li>
        <strong>Memory and File Management:</strong> Allocates and deallocates memory and manages file storage.
      </li>
      <li>
        <strong>Provides Security:</strong> Ensures system safety through authorization and controlled access.
      </li>
    </ul>

    {/* Structures */}
    <h2 className="text-3xl font-bold  mt-8">Operating System Structures</h2>
    <p className="leading-relaxed">
      The fundamental components of an operating system that manage hardware, software, and user interactions efficiently include:
    </p>
    <ul className="list-decimal list-inside leading-relaxed space-y-1">
      <li><strong>Process Management:</strong> Handles process creation, scheduling, and termination.</li>
      <li><strong>Main Memory Management:</strong> Allocates and tracks RAM using paging and virtual memory.</li>
      <li><strong>File Management:</strong> Organizes, creates, deletes, and manages access to files.</li>
      <li><strong>I/O System Management:</strong> Coordinates data transfer between devices via drivers.</li>
      <li><strong>Secondary Storage Management:</strong> Manages disks and data retrieval.</li>
      <li><strong>Networking:</strong> Handles inter-computer communication and protocols.</li>
      <li><strong>Protection System:</strong> Secures access and authenticates users.</li>
      <li><strong>Command Interpreter System:</strong> Provides user interfaces like the command line.</li>
    </ul>

    {/* Objectives */}
    <h2 className="text-3xl font-bold  mt-8">Objectives of Operating Systems</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-1">
      <li>Make the computer system more convenient to use.</li>
      <li>Provide a user-friendly and interactive interface.</li>
      <li>Offer easy access to resources for users and applications.</li>
      <li>Manage hardware and software resources efficiently.</li>
      <li>Track and control usage of system resources.</li>
      <li>Ensure fair sharing of resources among programs and users.</li>
    </ul>

    {/* Evolution */}
    <h2 className="text-3xl font-bold  mt-8">Evolution of Operating Systems</h2>

    <h3 className="text-2xl font-semibold mt-4 ">Mainframe Systems</h3>
    <p className="leading-relaxed">Early systems used resident monitors for job sequencing, reducing setup time.</p>

    <h3 className="text-2xl font-semibold mt-4 ">Batch Processing</h3>
    <p className="leading-relaxed">Grouped similar jobs to minimize setup time and improve system efficiency.</p>

    <h3 className="text-2xl font-semibold mt-4 ">Multiprocessor Systems</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Symmetric Multiprocessing:</strong> Identical OS copies run on multiple processors.</li>
      <li><strong>Asymmetric Multiprocessing:</strong> A master processor controls slave processors.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4 ">Real-Time Systems</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Hard Real-Time:</strong> Strict timing constraints for critical applications.</li>
      <li><strong>Soft Real-Time:</strong> Prioritizes critical tasks with less stringent timing.</li>
    </ul>

    {/* Choosing OS */}
    <h2 className="text-3xl font-bold  mt-8">How to Choose the Operating System?</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-1">
      <li><strong>Price Factor:</strong> Linux is free; Windows and macOS are paid.</li>
      <li><strong>Accessibility Factor:</strong> macOS and iOS are user-friendly; Linux is more complex.</li>
      <li><strong>Compatibility Factor:</strong> Choose an OS that supports your required applications.</li>
      <li><strong>Security Factor:</strong> macOS provides higher security, while Windows has fewer security features.</li>
    </ul>

    {/* Examples */}
    <h2 className="text-3xl font-bold  mt-8">Examples of Operating Systems</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-1">
      <li><strong>Windows:</strong> GUI-based OS for PCs.</li>
      <li><strong>GNU/Linux:</strong> Used in personal systems, servers, and workstations.</li>
      <li><strong>macOS:</strong> Used for Apple’s personal computers and workstations.</li>
      <li><strong>Android:</strong> Google’s OS for smartphones, tablets, and smart devices.</li>
      <li><strong>iOS:</strong> Apple’s OS for iPhone, iPad, and iPod Touch.</li>
    </ul>
  </div>
);

export default Home;
