import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= DBMS Tutorial ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      DBMS Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Welcome to the comprehensive Database Management Systems (DBMS) tutorial on Amoha Codes. A DBMS is software that
      enables users to define, create, maintain, and control access to databases. It serves as an interface between
      end-users and the database, ensuring data is consistently organized and easily accessible. This tutorial covers
      all fundamental and advanced concepts required for academic excellence and technical interviews.
    </p>

    {/* What You Will Learn */}
    <h2 className="text-3xl font-bold mt-8">What You Will Learn</h2>
    <p className="leading-relaxed">
      This tutorial provides in-depth coverage of database management system concepts, from basic principles to advanced
      topics. Whether you're preparing for university examinations, technical interviews, or seeking to understand how
      modern database systems function, this guide will help you master the subject.
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
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Introduction</td>
            <td className="p-3 border">DBMS concepts, File System vs DBMS, Architecture, Data Models</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">ER Model</td>
            <td className="p-3 border">Entities, Relationships, ER Diagrams, Extended ER</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Relational Model</td>
            <td className="p-3 border">Relations, Keys, Integrity Constraints</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Relational Algebra</td>
            <td className="p-3 border">Selection, Projection, Join, Division operations</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">SQL</td>
            <td className="p-3 border">DDL, DML, DCL, TCL, Queries, Joins, Subqueries, Views</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">Normalization</td>
            <td className="p-3 border">1NF, 2NF, 3NF, BCNF, 4NF, 5NF, Functional Dependencies</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">Transactions</td>
            <td className="p-3 border">ACID Properties, States, Serializability</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">Concurrency Control</td>
            <td className="p-3 border">Locking, 2PL, Timestamp, MVCC</td>
          </tr>
          <tr>
            <td className="p-3 border">9</td>
            <td className="p-3 border">Recovery System</td>
            <td className="p-3 border">Log-based Recovery, Checkpointing, ARIES</td>
          </tr>
          <tr>
            <td className="p-3 border">10</td>
            <td className="p-3 border">File Organization</td>
            <td className="p-3 border">Sequential, Indexed, Hashing, B+ Trees</td>
          </tr>
          <tr>
            <td className="p-3 border">11</td>
            <td className="p-3 border">Query Processing</td>
            <td className="p-3 border">Query Optimization, Cost Estimation, Execution Plans</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Why Learn DBMS */}
    <h2 className="text-3xl font-bold mt-8">Why Learn DBMS?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Foundation of Data Management:</strong> Understanding how data is stored, retrieved, and managed efficiently</li>
      <li><strong>Essential for Software Development:</strong> Critical knowledge for developing data-driven applications</li>
      <li><strong>Interview Preparation:</strong> A core subject in technical interviews for software engineering and data roles</li>
      <li><strong>Academic Requirement:</strong> Mandatory subject in computer science and IT curricula worldwide</li>
      <li><strong>Career Opportunities:</strong> Opens doors to roles like Database Administrator, Data Engineer, and Backend Developer</li>
      <li><strong>Big Data Foundation:</strong> Provides fundamental concepts for understanding modern data technologies</li>
    </ul>

    {/* Prerequisites */}
    <h2 className="text-3xl font-bold mt-8">Prerequisites</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Basic understanding of computer fundamentals</li>
      <li>Familiarity with programming concepts (preferably any language)</li>
      <li>Basic knowledge of data structures</li>
      <li>Understanding of set theory and basic mathematics</li>
    </ul>

    {/* Key Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of DBMS Knowledge</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Web Applications:</strong> Backend data storage for websites and web services</li>
      <li><strong>Banking Systems:</strong> Managing financial transactions and customer data</li>
      <li><strong>E-commerce:</strong> Product catalogs, inventory management, and order processing</li>
      <li><strong>Healthcare:</strong> Patient records, medical histories, and healthcare analytics</li>
      <li><strong>Social Media:</strong> Managing user profiles, posts, and relationships</li>
      <li><strong>Enterprise Systems:</strong> ERP, CRM, and business intelligence applications</li>
    </ul>

    {/* Key Concepts Overview */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg">Data Models</h3>
        <p className="text-sm">Hierarchical, Network, Relational, and Object-Oriented models for data representation</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg">SQL Language</h3>
        <p className="text-sm">Standard language for managing and querying relational databases</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg">ACID Properties</h3>
        <p className="text-sm">Atomicity, Consistency, Isolation, and Durability for reliable transactions</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg">Normalization</h3>
        <p className="text-sm">Process of organizing data to reduce redundancy and improve integrity</p>
      </div>
    </div>

    {/* Getting Started */}
    <h2 className="text-3xl font-bold mt-8">Getting Started</h2>
    <p className="leading-relaxed">
      Begin your journey by exploring the Introduction section, which covers the fundamental concepts of database
      management systems. Each topic builds upon previous concepts, so following the sequential order is recommended
      for beginners. Experienced learners can navigate directly to specific topics of interest using the sidebar.
    </p>

    <p className="leading-relaxed mt-4">
      Each topic includes detailed explanations, diagrams, SQL examples, and practice problems to reinforce your
      understanding. The content is designed to match the depth and rigor expected in academic courses and
      technical interviews.
    </p>
  </div>
);

export default Home;
