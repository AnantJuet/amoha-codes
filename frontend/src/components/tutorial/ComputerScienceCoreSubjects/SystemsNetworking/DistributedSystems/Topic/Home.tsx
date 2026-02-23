import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Distributed Systems Tutorial ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Distributed Systems Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Welcome to the comprehensive Distributed Systems tutorial on Amoha Codes. A Distributed System is a collection
      of independent computers that appears to users as a single coherent system. These systems work together to
      achieve common goals, sharing resources and coordinating actions through message passing. This tutorial covers
      all fundamental and advanced concepts required for academic excellence and technical interviews.
    </p>

    {/* What You Will Learn */}
    <h2 className="text-3xl font-bold mt-8">What You Will Learn</h2>
    <p className="leading-relaxed">
      This tutorial provides in-depth coverage of distributed systems concepts, from basic principles to advanced topics.
      Whether you're preparing for university examinations, technical interviews, or seeking to understand how modern
      distributed applications function, this guide will help you master the subject.
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
            <td className="p-3 border">Definition, characteristics, advantages, and challenges</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">System Models</td>
            <td className="p-3 border">Architectural, interaction, and failure models</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Communication</td>
            <td className="p-3 border">IPC, RPC, RMI, and message passing mechanisms</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Naming & Directory</td>
            <td className="p-3 border">Name resolution, DNS, and directory services</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">Synchronization</td>
            <td className="p-3 border">Clocks, logical clocks, mutual exclusion, and elections</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">Consistency & Replication</td>
            <td className="p-3 border">Consistency models, replication strategies, CAP theorem</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">Fault Tolerance</td>
            <td className="p-3 border">Failure detection, recovery, and commit protocols</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">Distributed File Systems</td>
            <td className="p-3 border">NFS, AFS, GFS, HDFS architectures and design</td>
          </tr>
          <tr>
            <td className="p-3 border">9</td>
            <td className="p-3 border">Distributed Transactions</td>
            <td className="p-3 border">ACID, concurrency control, and distributed commits</td>
          </tr>
          <tr>
            <td className="p-3 border">10</td>
            <td className="p-3 border">Distributed Databases</td>
            <td className="p-3 border">Fragmentation, allocation, NoSQL, and NewSQL</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Why Learn Distributed Systems */}
    <h2 className="text-3xl font-bold mt-8">Why Learn Distributed Systems?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Modern Computing Foundation:</strong> Understanding how large-scale applications like Google, Facebook, and Amazon work</li>
      <li><strong>Cloud Computing Essential:</strong> Critical knowledge for developing and managing cloud-based applications</li>
      <li><strong>Interview Preparation:</strong> A core subject in technical interviews for backend and infrastructure roles</li>
      <li><strong>Academic Requirement:</strong> Advanced subject in computer science curricula worldwide</li>
      <li><strong>Scalability Understanding:</strong> Knowledge helps in designing systems that can handle millions of users</li>
      <li><strong>Reliability Engineering:</strong> Comprehend how to build fault-tolerant systems</li>
    </ul>

    {/* Prerequisites */}
    <h2 className="text-3xl font-bold mt-8">Prerequisites</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Basic understanding of operating systems concepts</li>
      <li>Familiarity with computer networking fundamentals</li>
      <li>Knowledge of data structures and algorithms</li>
      <li>Basic understanding of databases</li>
      <li>Programming experience (preferably in Java, Python, or Go)</li>
    </ul>

    {/* Key Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Distributed Systems</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Cloud Platforms:</strong> AWS, Google Cloud, Azure, and private cloud infrastructure</li>
      <li><strong>Big Data Processing:</strong> Hadoop, Spark, and stream processing systems</li>
      <li><strong>Web Services:</strong> Microservices architecture and RESTful APIs</li>
      <li><strong>Content Delivery:</strong> CDNs and globally distributed caching systems</li>
      <li><strong>Blockchain:</strong> Decentralized consensus and cryptocurrency systems</li>
      <li><strong>IoT Systems:</strong> Coordinating millions of connected devices</li>
    </ul>

    {/* Key Concepts Overview */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg">Transparency</h3>
        <p className="text-sm">Hiding the distributed nature from users - access, location, migration, replication, concurrency, and failure transparency.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg">Scalability</h3>
        <p className="text-sm">Ability to handle growing workload - size scalability, geographic scalability, and administrative scalability.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg">Consistency</h3>
        <p className="text-sm">Ensuring all nodes see the same data - strong consistency, eventual consistency, and various consistency models.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg">Fault Tolerance</h3>
        <p className="text-sm">System continues operating despite failures - redundancy, replication, and recovery mechanisms.</p>
      </div>
    </div>

    {/* Getting Started */}
    <h2 className="text-3xl font-bold mt-8">Getting Started</h2>
    <p className="leading-relaxed">
      Begin your journey by exploring the Introduction section, which covers the fundamental concepts of distributed
      systems. Each topic builds upon previous concepts, so following the sequential order is recommended for
      beginners. Experienced learners can navigate directly to specific topics of interest using the sidebar.
    </p>

    <p className="leading-relaxed mt-4">
      Each topic includes detailed explanations, diagrams, examples, and practice problems to reinforce your
      understanding. The content is designed to match the depth and rigor expected in academic courses and
      technical interviews at top technology companies.
    </p>
  </div>
);

export default Home;
