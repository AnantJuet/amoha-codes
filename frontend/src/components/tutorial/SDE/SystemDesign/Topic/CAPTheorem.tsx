import React from 'react';

const CAPTheorem: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      CAP Theorem
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The CAP Theorem is a key idea in distributed systems that explains why building a perfectly reliable,
      networked data system is impossible. Proposed by Eric Brewer and proven later by Seth Gilbert and
      Nancy Lynch, it states that a distributed system cannot guarantee Consistency, Availability, and
      Partition Tolerance all at the same time—at most, it can fully achieve any two.
    </p>

    <h2 className="text-2xl font-bold mt-6">CAP Theorem Properties</h2>

    <h3 className="text-xl font-semibold mt-4">1. Consistency (C)</h3>
    <p className="leading-relaxed">
      Consistency means that all the nodes (databases) inside a network will have the same copies of a
      replicated data item visible for various transactions. It guarantees that every node in a distributed
      cluster returns the same, most recent, and successful write.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">Example:</p>
      <p>A user checks his account balance and knows that he has 500 rupees. He spends 200 rupees on some
      products. This change must be committed and communicated with all other databases. Otherwise, there
      will be inconsistency.</p>
    </div>

    <h3 className="text-xl font-semibold mt-4">2. Availability (A)</h3>
    <p className="leading-relaxed">
      Availability means that each read or write request for a data item will either be processed successfully
      or will receive a message that the operation cannot be completed. Every non-failing node returns a
      response for all the read and write requests in a reasonable amount of time.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">Example:</p>
      <p>User A is a content creator having 1000 subscribers. Another user B who is far away tries to
      subscribe. If the system follows availability, user B must be able to subscribe even if connected
      to a different database node.</p>
    </div>

    <h3 className="text-xl font-semibold mt-4">3. Partition Tolerance (P)</h3>
    <p className="leading-relaxed">
      Partition tolerance means that the system can continue operating even if the network connecting the
      nodes has a fault that results in two or more partitions, where the nodes in each partition can only
      communicate among each other.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">Example:</p>
      <p>Due to a network outage, if a database loses its connection with another database, the subscriber
      count is shown to the user with the help of replica data which was previously backed up.</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">The Trade-Offs</h2>
    <p className="leading-relaxed">
      The CAP theorem states that distributed databases can have at most two of the three properties.
      As a result, database systems prioritize only two properties at a time:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">CA (Consistency + Availability)</h4>
        <p className="mt-2 text-sm">System is consistent and available, but cannot handle network partitions.</p>
        <p className="mt-2 text-sm font-semibold">Example: Traditional RDBMS</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">AP (Availability + Partition Tolerance)</h4>
        <p className="mt-2 text-sm">System is available and partition-tolerant, but may return stale data.</p>
        <p className="mt-2 text-sm font-semibold">Example: Cassandra, CouchDB</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">CP (Consistency + Partition Tolerance)</h4>
        <p className="mt-2 text-sm">System is consistent and partition-tolerant, but may be unavailable during partitions.</p>
        <p className="mt-2 text-sm font-semibold">Example: MongoDB, HBase</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Takeaways</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>In a distributed system, you can only have two of the three CAP properties at once</li>
      <li>Partition tolerance is usually non-negotiable in distributed systems</li>
      <li>The real choice is often between consistency and availability</li>
      <li>Different use cases require different trade-offs</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> The concept of Consistency in CAP is different from ACID. In CAP, it refers
        to the consistency of values in different copies of the same data item. In ACID, it refers to
        transaction integrity constraints.
      </p>
    </div>
  </div>
);

export default CAPTheorem;
