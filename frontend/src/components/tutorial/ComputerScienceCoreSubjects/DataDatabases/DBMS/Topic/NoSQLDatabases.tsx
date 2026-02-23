import React from "react";

const NoSQLDatabases: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">NoSQL Databases</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      NoSQL (Not Only SQL) databases are non-relational databases designed for
      distributed data storage and horizontal scaling. They provide flexible schemas
      and are optimized for specific data models and access patterns.
    </p>

    <h2 className="text-3xl font-bold mt-8">NoSQL vs Relational</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relational (SQL):
- Fixed schema
- ACID transactions
- Vertical scaling
- Complex joins
- Normalized data

NoSQL:
- Flexible schema
- BASE properties (eventual consistency)
- Horizontal scaling
- Denormalized data
- Optimized for specific patterns

BASE Properties:
Basically Available
Soft state
Eventually consistent`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of NoSQL Databases</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. Document Stores
   - Store JSON/BSON documents
   - Flexible schema per document
   - Examples: MongoDB, CouchDB

2. Key-Value Stores
   - Simple key-value pairs
   - Fastest for simple lookups
   - Examples: Redis, DynamoDB

3. Column-Family Stores
   - Data stored in column families
   - Optimized for aggregations
   - Examples: Cassandra, HBase

4. Graph Databases
   - Nodes and relationships
   - Optimized for traversals
   - Examples: Neo4j, Amazon Neptune`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Document Database Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`MongoDB Document:

{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "name": "John Doe",
  "email": "john@example.com",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zip": "10001"
  },
  "orders": [
    {"product": "Laptop", "price": 999},
    {"product": "Mouse", "price": 29}
  ]
}

Operations:
// Insert
db.users.insertOne({name: "John", email: "john@ex.com"})

// Find
db.users.find({name: "John"})

// Update
db.users.updateOne(
  {name: "John"},
  {$set: {email: "new@ex.com"}}
)

// Delete
db.users.deleteOne({name: "John"})`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key-Value Store Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Redis Operations:

# String
SET user:1001 "John Doe"
GET user:1001

# Hash
HSET user:1001 name "John" email "john@ex.com"
HGET user:1001 name
HGETALL user:1001

# List
LPUSH notifications:1001 "New message"
LRANGE notifications:1001 0 -1

# Set
SADD user:1001:skills "Python" "Java" "SQL"
SMEMBERS user:1001:skills

# Expiration
SET session:abc123 "user:1001" EX 3600

Use Cases:
- Session storage
- Caching
- Rate limiting
- Real-time leaderboards`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Column-Family Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Cassandra Table:

Row Key     | Column Family: user_info
------------|----------------------------------
user_1001   | name:"John" | email:"j@ex.com" | age:30
user_1002   | name:"Jane" | phone:"555-1234"
user_1003   | name:"Bob"  | email:"b@ex.com" | city:"NYC"

Each row can have different columns!

CQL (Cassandra Query Language):
CREATE TABLE users (
  user_id UUID PRIMARY KEY,
  name TEXT,
  email TEXT
);

INSERT INTO users (user_id, name, email)
VALUES (uuid(), 'John', 'john@ex.com');

SELECT * FROM users WHERE user_id = ?;

Use Cases:
- Time series data
- IoT sensor data
- High-write throughput`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Graph Database Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Neo4j Graph:

(John)-[:FRIENDS_WITH]->(Jane)
(Jane)-[:WORKS_AT]->(TechCorp)
(John)-[:PURCHASED]->(Laptop)

Cypher Query Language:
// Create
CREATE (john:Person {name: 'John'})
CREATE (jane:Person {name: 'Jane'})
CREATE (john)-[:FRIENDS_WITH]->(jane)

// Find friends of friends
MATCH (p:Person {name: 'John'})-[:FRIENDS_WITH*2]-(fof)
RETURN fof.name

// Shortest path
MATCH path = shortestPath(
  (a:Person {name: 'John'})-[*]-(b:Person {name: 'Bob'})
)
RETURN path

Use Cases:
- Social networks
- Recommendation engines
- Fraud detection
- Knowledge graphs`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">NoSQL Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Best For</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Document</td>
            <td className="p-3 border">Content, catalogs, user data</td>
            <td className="p-3 border">MongoDB, CouchDB</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Key-Value</td>
            <td className="p-3 border">Caching, sessions, queues</td>
            <td className="p-3 border">Redis, DynamoDB</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Column</td>
            <td className="p-3 border">Time-series, analytics</td>
            <td className="p-3 border">Cassandra, HBase</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Graph</td>
            <td className="p-3 border">Networks, relationships</td>
            <td className="p-3 border">Neo4j, Neptune</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>NoSQL: Not Only SQL, flexible schemas</li>
        <li>BASE instead of ACID (eventual consistency)</li>
        <li>Horizontal scaling, distributed by design</li>
        <li>Choose type based on data model and access patterns</li>
        <li>SQL for complex queries, NoSQL for scale/flexibility</li>
      </ul>
    </div>
  </div>
);

export default NoSQLDatabases;
