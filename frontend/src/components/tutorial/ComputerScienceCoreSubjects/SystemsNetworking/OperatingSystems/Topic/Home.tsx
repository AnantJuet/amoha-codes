import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Operating Systems Tutorial ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Operating Systems Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Welcome to the comprehensive Operating Systems tutorial on Amoha Codes. An Operating System (OS) serves as an
      intermediary between computer hardware and users, managing hardware resources and providing common services
      for application software. This tutorial covers all fundamental and advanced concepts required for academic
      excellence and technical interviews.
    </p>

    {/* What You Will Learn */}
    <h2 className="text-3xl font-bold mt-8">What You Will Learn</h2>
    <p className="leading-relaxed">
      This tutorial provides in-depth coverage of operating system concepts, from basic principles to advanced topics.
      Whether you're preparing for university examinations, technical interviews, or seeking to understand how modern
      operating systems function, this guide will help you master the subject.
    </p>

    {/* Course Structure */}
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
            <td className="p-3 border">OS basics, types, structure, and system calls</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Process Management</td>
            <td className="p-3 border">Processes, threads, IPC, and context switching</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">CPU Scheduling</td>
            <td className="p-3 border">FCFS, SJF, Priority, Round Robin, and more</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Process Synchronization</td>
            <td className="p-3 border">Critical section, semaphores, monitors, classical problems</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">Deadlocks</td>
            <td className="p-3 border">Prevention, avoidance, detection, and Banker's algorithm</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">Memory Management</td>
            <td className="p-3 border">Paging, segmentation, allocation techniques</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">Virtual Memory</td>
            <td className="p-3 border">Demand paging, page replacement algorithms, thrashing</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">File Systems</td>
            <td className="p-3 border">File concepts, directory structures, allocation methods</td>
          </tr>
          <tr>
            <td className="p-3 border">9</td>
            <td className="p-3 border">Disk Management</td>
            <td className="p-3 border">Disk scheduling algorithms and RAID</td>
          </tr>
          <tr>
            <td className="p-3 border">10</td>
            <td className="p-3 border">I/O Systems</td>
            <td className="p-3 border">I/O techniques, DMA, buffering, spooling</td>
          </tr>
          <tr>
            <td className="p-3 border">11</td>
            <td className="p-3 border">Security & Protection</td>
            <td className="p-3 border">Security mechanisms and access control</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Why Learn Operating Systems */}
    <h2 className="text-3xl font-bold mt-8">Why Learn Operating Systems?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Foundation of Computing:</strong> Understanding how software interacts with hardware at the most fundamental level</li>
      <li><strong>Essential for System Programming:</strong> Critical knowledge for developing system-level applications and drivers</li>
      <li><strong>Interview Preparation:</strong> A core subject in technical interviews for software engineering roles</li>
      <li><strong>Academic Requirement:</strong> Mandatory subject in computer science and IT curricula worldwide</li>
      <li><strong>Performance Optimization:</strong> Knowledge helps in writing efficient, optimized code</li>
      <li><strong>Security Understanding:</strong> Comprehend how security mechanisms work at the OS level</li>
    </ul>

    {/* Prerequisites */}
    <h2 className="text-3xl font-bold mt-8">Prerequisites</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Basic understanding of computer organization and architecture</li>
      <li>Familiarity with programming concepts (preferably C or C++)</li>
      <li>Basic knowledge of data structures</li>
      <li>Understanding of fundamental algorithms</li>
    </ul>

    {/* Key Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of OS Knowledge</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>System Development:</strong> Building operating systems, device drivers, and embedded systems</li>
      <li><strong>Cloud Computing:</strong> Understanding virtualization and containerization technologies</li>
      <li><strong>Database Systems:</strong> Implementing efficient storage and retrieval mechanisms</li>
      <li><strong>Networking:</strong> Developing network protocols and distributed systems</li>
      <li><strong>Mobile Development:</strong> Understanding Android and iOS architectures</li>
    </ul>

    {/* Getting Started */}
    <h2 className="text-3xl font-bold mt-8">Getting Started</h2>
    <p className="leading-relaxed">
      Begin your journey by exploring the Introduction section, which covers the fundamental concepts of operating
      systems. Each topic builds upon previous concepts, so following the sequential order is recommended for
      beginners. Experienced learners can navigate directly to specific topics of interest using the sidebar.
    </p>

    <p className="leading-relaxed mt-4">
      Each topic includes detailed explanations, diagrams, examples, and practice problems to reinforce your
      understanding. The content is designed to match the depth and rigor expected in academic courses and
      technical interviews.
    </p>
  </div>
);

export default Home;
