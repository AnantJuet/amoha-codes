import React from "react";

const NoSQLDatabases: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      NoSQL Databases
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      NoSQL (Not Only SQL) databases are non-relational data stores designed for distributed
      systems, offering flexible schemas, horizontal scalability, and high availability. They
      emerged to address limitations of traditional relational databases when dealing with
      big data, real-time web applications, and diverse data types.
    </p>

    <h2 className="text-3xl font-bold mt-8">NoSQL vs Relational Databases</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Relational (SQL)</th>
            <th className="p-3 border">NoSQL</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Data Model</td>
            <td className="p-3 border">Tables with rows and columns</td>
            <td className="p-3 border">Document, Key-Value, Graph, Column</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Schema</td>
            <td className="p-3 border">Fixed, predefined</td>
            <td className="p-3 border">Dynamic, flexible</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scaling</td>
            <td className="p-3 border">Vertical (scale-up)</td>
            <td className="p-3 border">Horizontal (scale-out)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Consistency</td>
            <td className="p-3 border">Strong (ACID)</td>
            <td className="p-3 border">Eventual or tunable</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Joins</td>
            <td className="p-3 border">Supported natively</td>
            <td className="p-3 border">Limited or none</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Query Language</td>
            <td className="p-3 border">SQL (standardized)</td>
            <td className="p-3 border">Varies by database</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of NoSQL Databases</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NoSQL Database Categories:

1. KEY-VALUE STORES
   +--------+     +---------+
   |  Key   | --> |  Value  |
   +--------+     +---------+

   Examples: Redis, Amazon DynamoDB, Riak
   Use Case: Caching, session storage, user preferences

2. DOCUMENT STORES
   +--------+     +------------------+
   |  Key   | --> | {                |
   +--------+     |   "name": "...", |
                  |   "data": {...}  |
                  | }                |
                  +------------------+

   Examples: MongoDB, CouchDB, Couchbase
   Use Case: Content management, user profiles, catalogs

3. COLUMN-FAMILY STORES
   Row Key --> | Col1 | Col2 | Col3 | ... |
               +------+------+------+-----+

   Examples: Apache Cassandra, HBase, ScyllaDB
   Use Case: Time-series, analytics, IoT data

4. GRAPH DATABASES
   (Node)--[Edge]-->(Node)
      |              ^
      +--[Edge]------+

   Examples: Neo4j, Amazon Neptune, JanusGraph
   Use Case: Social networks, recommendations, fraud detection`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key-Value Stores</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Key-Value Store Details:

Structure:
+----------------+     +---------------------------+
| Key (string)   | --> | Value (any data)          |
+----------------+     +---------------------------+
| "user:1001"    | --> | "{name:'Alice', age:30}"  |
| "session:xyz"  | --> | "token_data_here"         |
| "cache:page:1" | --> | "<html>...</html>"        |
+----------------+     +---------------------------+

Operations:
- GET(key) -> value
- PUT(key, value)
- DELETE(key)
- EXISTS(key) -> boolean

Redis Example:
> SET user:1001 '{"name":"Alice","email":"alice@ex.com"}'
OK
> GET user:1001
'{"name":"Alice","email":"alice@ex.com"}'
> EXPIRE user:1001 3600  // TTL: 1 hour
> DEL user:1001

Characteristics:
+ Extremely fast (O(1) operations)
+ Simple API
+ Easy to scale horizontally
- No complex queries
- No relationships between values
- Limited secondary indexes

Best For:
- Session management
- Caching layers
- Real-time leaderboards
- Rate limiting`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Document Stores</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Document Store Details:

Document Structure (JSON/BSON):
{
  "_id": "user_1001",
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zip": "10001"
  },
  "orders": [
    {"id": "ord_1", "total": 99.99},
    {"id": "ord_2", "total": 149.50}
  ],
  "created_at": "2026-01-15T10:30:00Z"
}

MongoDB Example:
// Insert
db.users.insertOne({
  name: "Alice",
  email: "alice@example.com",
  address: { city: "New York" }
})

// Query
db.users.find({ "address.city": "New York" })

// Update
db.users.updateOne(
  { name: "Alice" },
  { $set: { "address.zip": "10002" } }
)

// Aggregation
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$customer", total: { $sum: "$amount" } } }
])

Characteristics:
+ Flexible schema (schemaless)
+ Rich query capabilities
+ Nested data structures
+ Good for semi-structured data
- No joins (denormalization needed)
- Eventual consistency (typically)

Best For:
- Content management systems
- E-commerce product catalogs
- User profiles
- Mobile app backends`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Column-Family Stores</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Column-Family Store Details:

Structure:
Row Key    | Column Family: user_info        | Column Family: activity
-----------+---------------------------------+-------------------------
user_1001  | name:Alice | email:alice@ex.com| login:2026-01-15 | views:50
user_1002  | name:Bob   | phone:555-1234    | login:2026-01-14 |

Cassandra Data Model:
CREATE TABLE users (
  user_id UUID PRIMARY KEY,
  name TEXT,
  email TEXT,
  created_at TIMESTAMP
);

CREATE TABLE user_activity (
  user_id UUID,
  activity_time TIMESTAMP,
  activity_type TEXT,
  details TEXT,
  PRIMARY KEY (user_id, activity_time)
) WITH CLUSTERING ORDER BY (activity_time DESC);

Query Example:
SELECT * FROM user_activity
WHERE user_id = ?
AND activity_time > '2026-01-01'
LIMIT 100;

Characteristics:
+ Excellent write performance
+ Efficient for time-series data
+ Horizontal scaling (linear)
+ Tunable consistency
- Limited query patterns (by key design)
- Denormalization required
- No ad-hoc queries

Best For:
- Time-series data (IoT, logs)
- High-write workloads
- Large-scale analytics
- Distributed systems requiring availability`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Graph Databases</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Graph Database Details:

Structure:
     (Alice)
      /    \\
FRIENDS    WORKS_AT
    |          \\
   (Bob)      (Acme Corp)
    |             |
 FOLLOWS      LOCATED_IN
    |             |
 (Carol)     (New York)

Components:
- Nodes: Entities (Person, Company, City)
- Edges: Relationships (FRIENDS, WORKS_AT)
- Properties: Attributes on nodes/edges

Neo4j Cypher Query Example:
// Create nodes and relationships
CREATE (alice:Person {name: 'Alice', age: 30})
CREATE (bob:Person {name: 'Bob', age: 28})
CREATE (alice)-[:FRIENDS {since: 2020}]->(bob)

// Find friends of friends
MATCH (p:Person {name: 'Alice'})-[:FRIENDS*2]->(fof)
RETURN fof.name

// Shortest path
MATCH path = shortestPath(
  (a:Person {name: 'Alice'})-[*]-(b:Person {name: 'Dave'})
)
RETURN path

// Recommendation: People who Alice's friends follow
MATCH (alice:Person {name: 'Alice'})-[:FRIENDS]->(friend)
      -[:FOLLOWS]->(suggested)
WHERE NOT (alice)-[:FOLLOWS]->(suggested)
RETURN suggested, COUNT(friend) as mutual
ORDER BY mutual DESC

Characteristics:
+ Native relationship handling
+ Efficient traversal queries
+ Intuitive for connected data
+ Flexible schema
- Not ideal for aggregate queries
- Scaling can be challenging
- Different query paradigm

Best For:
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
            <th className="p-3 border">Strengths</th>
            <th className="p-3 border">Weaknesses</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">Key-Value</td>
            <td className="p-3 border">Speed, simplicity</td>
            <td className="p-3 border">No complex queries</td>
            <td className="p-3 border">Redis, DynamoDB</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Document</td>
            <td className="p-3 border">Flexibility, rich queries</td>
            <td className="p-3 border">No joins, denormalization</td>
            <td className="p-3 border">MongoDB, Couchbase</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">Column-Family</td>
            <td className="p-3 border">Write performance, scale</td>
            <td className="p-3 border">Limited queries</td>
            <td className="p-3 border">Cassandra, HBase</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-orange-600">Graph</td>
            <td className="p-3 border">Relationships, traversal</td>
            <td className="p-3 border">Aggregate queries</td>
            <td className="p-3 border">Neo4j, Neptune</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">BASE vs ACID</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NoSQL Consistency Model: BASE

ACID (Traditional RDBMS):
- Atomicity: All or nothing transactions
- Consistency: Valid state transitions only
- Isolation: Concurrent transactions isolated
- Durability: Committed data persists

BASE (NoSQL):
- Basically Available: System always responds
- Soft state: State may change over time
- Eventually consistent: Will converge to consistent state

Comparison:
+---------------+------------------+------------------+
| Property      | ACID             | BASE             |
+---------------+------------------+------------------+
| Focus         | Consistency      | Availability     |
| Transactions  | Strict           | Relaxed          |
| Scalability   | Vertical         | Horizontal       |
| Latency       | Higher           | Lower            |
| CAP Choice    | CP               | AP               |
+---------------+------------------+------------------+

Eventual Consistency Example:
Time 0: Write "x=5" to Node A
Time 1: Node A has x=5, Nodes B,C have x=0 (old)
Time 2: Replication in progress...
Time 3: All nodes have x=5 (eventually consistent)

Tunable Consistency (Cassandra):
- ONE: Write to 1 replica, fast but weak
- QUORUM: Majority of replicas, balanced
- ALL: All replicas, strong but slow`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use NoSQL</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Use NoSQL When</th>
            <th className="p-3 border">Use SQL When</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Schema changes frequently</td>
            <td className="p-3 border">Schema is well-defined and stable</td>
          </tr>
          <tr>
            <td className="p-3 border">Need horizontal scalability</td>
            <td className="p-3 border">Data fits on single server</td>
          </tr>
          <tr>
            <td className="p-3 border">High write throughput required</td>
            <td className="p-3 border">Complex transactions needed</td>
          </tr>
          <tr>
            <td className="p-3 border">Eventual consistency acceptable</td>
            <td className="p-3 border">Strong consistency required</td>
          </tr>
          <tr>
            <td className="p-3 border">Semi-structured or varied data</td>
            <td className="p-3 border">Structured, relational data</td>
          </tr>
          <tr>
            <td className="p-3 border">Rapid development cycles</td>
            <td className="p-3 border">Complex reporting/analytics</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>NoSQL means "Not Only SQL" - non-relational databases for distributed systems</li>
        <li>Four main types: Key-Value, Document, Column-Family, and Graph</li>
        <li>NoSQL prioritizes scalability and availability over strict consistency (BASE vs ACID)</li>
        <li>Choose type based on data model: relationships (Graph), documents (Document), simple lookups (Key-Value), time-series (Column-Family)</li>
        <li>Trade-offs: flexible schema but no standard query language, easy scaling but limited transactions</li>
        <li>Many NoSQL databases offer tunable consistency levels</li>
        <li>Polyglot persistence: use multiple database types for different needs</li>
      </ul>
    </div>
  </div>
);

export default NoSQLDatabases;
