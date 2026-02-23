import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Database Section ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      What is Database?
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Data refers to raw, unorganized facts and figures, such as numbers, text, images, or symbols,
      that can be processed and analyzed to extract meaningful information. Data can exist in a raw
      form (unorganized) or processed form (organized and meaningful).
    </p>
    <p className="leading-relaxed">
      A <strong>database</strong> is a structured collection of data designed for efficient storage,
      retrieval, and manipulation. It serves as a centralized repository, allowing data to be accessed,
      managed, and updated by multiple users or applications.
    </p>
    <p className="leading-relaxed">
      High-performing databases are vital for organizations, supporting operations, customer interactions,
      and systems like digital libraries, reservations, and inventory management. Databases help to:
    </p>
    <ul className="list-disc list-inside leading-relaxed">
      <li>Scale efficiently to handle massive volumes of data.</li>
      <li>Ensure data integrity through built-in rules and constraints.</li>
      <li>Protect data with secure access controls and compliance support.</li>
      <li>Enable analytics to identify trends and guide informed business decisions.</li>
    </ul>

    {/* Working of Databases */}
    <h2 className="text-3xl font-bold  mt-8">
      Working of Databases
    </h2>
    <p className="leading-relaxed">
      Databases organize and store information in structured or unstructured formats, allowing easy access,
      retrieval, and modification. At the core of every database is a <strong>Database Management System (DBMS)</strong>,
      which acts as an intermediary between users and raw data.
    </p>
    <p className="leading-relaxed">
      The DBMS handles querying, updating, deleting, and managing access permissions without exposing
      the physical storage details. When a user submits a request, the DBMS processes it, locates relevant
      data, and returns results in a structured format. DBMSs also provide backup, recovery, performance
      optimization, and security.
    </p>

    {/* Components of a Database */}
    <h2 className="text-3xl font-bold  mt-8">
      Components of a Database
    </h2>
    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Data:</strong> Actual information stored, such as text, numbers, images, or files.</li>
      <li><strong>Schema:</strong> Defines how data is organized—tables, fields, types, and relationships.</li>
      <li><strong>DBMS:</strong> Software managing storage, retrieval, and security (e.g., MySQL, Oracle).</li>
      <li><strong>Queries:</strong> Instructions (usually SQL) to retrieve or manipulate data.</li>
      <li><strong>Users:</strong> People or systems with roles and access permissions interacting with the database.</li>
    </ul>

    {/* Types of Databases */}
    <h2 className="text-3xl font-bold  mt-8">
      Types of Databases
    </h2>
    <p className="leading-relaxed">
      Databases are mainly categorized as Relational (SQL) or NoSQL databases. NoSQL is further divided
      into Document, Key-Value, Columnar, and Graph databases.
    </p>

    {/* Relational Databases */}
    <h3 className="text-2xl font-semibold mt-4 ">1. Relational Databases (RDBMS)</h3>
    <p className="leading-relaxed">
      Organize data into tables with rows and columns. They use schemas, primary keys, and foreign keys,
      ensuring ACID compliance. Ideal for structured data.
    </p>
    <p className="leading-relaxed">Examples: MySQL, PostgreSQL, Oracle, Microsoft SQL Server.</p>

    {/* NoSQL Databases */}
    <h3 className="text-2xl font-semibold mt-4 ">2. NoSQL Databases</h3>
    <p className="leading-relaxed">
      "NoSQL" databases handle unstructured or semi-structured data without relying on fixed tables. They
      scale horizontally and are optimized for specific use cases.
    </p>
    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Document Databases:</strong> Store JSON-like documents. (e.g., MongoDB)</li>
      <li><strong>Key-Value Stores:</strong> Store key–value pairs for fast lookups. (e.g., Redis)</li>
      <li><strong>Columnar Databases:</strong> Store data by columns for analytics. (e.g., Cassandra)</li>
      <li><strong>Graph Databases:</strong> Store nodes & relationships. (e.g., Neo4j)</li>
    </ul>

    {/* ACID Properties */}
    <h2 className="text-3xl font-bold  mt-8">ACID Properties</h2>
    <p className="leading-relaxed">
      ACID stands for Atomicity, Consistency, Isolation, and Durability—principles ensuring reliable
      database transactions.
    </p>
    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Atomicity:</strong> Transaction completes fully or not at all.</li>
      <li><strong>Consistency:</strong> Database moves from one valid state to another.</li>
      <li><strong>Isolation:</strong> Multiple transactions can run concurrently without interference.</li>
      <li><strong>Durability:</strong> Changes are saved permanently after completion.</li>
    </ul>

    {/* Real-World Applications */}
    <h2 className="text-3xl font-bold  mt-8">Real-World Applications of Databases</h2>
    <ul className="list-disc list-inside leading-relaxed">
      <li>Banking: Stores transactions and account details.</li>
      <li>Transportation: Manages bookings and schedules.</li>
      <li>Education: Tracks student records and grades.</li>
      <li>Retail: Handles inventory and customer orders.</li>
      <li>Social Media: Stores user data, messages, and media.</li>
      <li>Multimedia: Manages images, audio, and video.</li>
      <li>Business & Data Science: Analyzes trends and supports predictions.</li>
    </ul>

    {/* Importance for Technology */}
    <h2 className="text-3xl font-bold  mt-8">Importance of Databases for Different Technology</h2>
    <p className="leading-relaxed">
      Databases power every digital experience—from apps to AI models and cloud infrastructure. Different
      technologies use different databases optimized for their needs.
    </p>
    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Web Development:</strong> MySQL, PostgreSQL, MongoDB, Firebase</li>
      <li><strong>Mobile Development:</strong> SQLite, Realm, Firebase Realtime DB</li>
      <li><strong>DevOps:</strong> PostgreSQL, Redis, InfluxDB, Cassandra</li>
      <li><strong>Data Engineering:</strong> Hadoop, Cassandra, Redshift, BigQuery</li>
      <li><strong>Data Science:</strong> PostgreSQL, MongoDB, Hive, Snowflake</li>
      <li><strong>Artificial Intelligence:</strong> MongoDB, Cassandra, BigQuery, AWS S3</li>
      <li><strong>Cloud Computing:</strong> Aurora, Cloud Spanner, Cosmos DB</li>
      <li><strong>Blockchain/Web3:</strong> BigchainDB, IPFS, Ethereum, Chainlink</li>
    </ul>

  </div>
);

export default Home;
