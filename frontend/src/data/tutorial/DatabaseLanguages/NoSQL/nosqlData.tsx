import React from "react";

export interface SidebarItem {
  label: string;
  href: string;
  isHeader?: boolean;
  children?: SidebarItem[];
}

export interface TopicContent {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

// Main structure of the sidebar navigation for NoSQL
export const tutorialData: SidebarItem[] = [
  { label: "NoSQL HOME", href: "nosql_home.asp" },
  { label: "NoSQL Intro", href: "nosql_intro.asp" },
  {
    label: "Types of NoSQL",
    href: "nosql_types.asp",
    isHeader: true,
    children: [
      { label: "NoSQL Types Overview", href: "nosql_types.asp" },
      { label: "Document Databases", href: "nosql_document.asp" },
      { label: "Key-Value Stores", href: "nosql_keyvalue.asp" },
      { label: "Column-Family", href: "nosql_column.asp" },
      { label: "Graph Databases", href: "nosql_graph.asp" },
    ]
  },
  {
    label: "NoSQL Concepts",
    href: "nosql_cap.asp",
    isHeader: true,
    children: [
      { label: "CAP Theorem", href: "nosql_cap.asp" },
      { label: "ACID vs BASE", href: "nosql_acid_base.asp" },
      { label: "Data Modeling", href: "nosql_modeling.asp" },
    ]
  },
  {
    label: "NoSQL Operations",
    href: "nosql_indexing.asp",
    isHeader: true,
    children: [
      { label: "Indexing", href: "nosql_indexing.asp" },
      { label: "Sharding", href: "nosql_sharding.asp" },
      { label: "Replication", href: "nosql_replication.asp" },
    ]
  },
  { label: "Use Cases", href: "nosql_usecases.asp" },
  { label: "Best Practices", href: "nosql_bestpractices.asp" },
];

// Content for each tutorial page
export const tutorialContent: Record<string, TopicContent> = {
  "nosql_home.asp": {
    title: "NoSQL Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          NoSQL Tutorial
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>NoSQL</strong> databases provide a mechanism for storage and retrieval of data that is modeled differently from relational databases.
        </p>
        <p className="leading-relaxed mb-4">
          NoSQL stands for "Not Only SQL" and encompasses a wide variety of database technologies designed to handle large volumes of data, diverse data types, and high-velocity data.
        </p>

        <h3 className="text-xl font-medium mb-3">Why Learn NoSQL?</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Handle massive amounts of unstructured data</li>
          <li>Scale horizontally with ease</li>
          <li>Flexible schema design</li>
          <li>High performance for specific use cases</li>
          <li>Essential for modern web applications</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">NoSQL Example: MongoDB Document</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "country": "USA"
  },
  "hobbies": ["reading", "gaming", "coding"]
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Popular NoSQL Databases</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Database</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">MongoDB</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Document</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">General purpose, content management</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Redis</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Key-Value</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Caching, session management</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Cassandra</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Column-Family</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Time-series, IoT data</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Neo4j</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Graph</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Social networks, recommendations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "nosql_intro.asp": {
    title: "NoSQL Introduction",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is NoSQL?
        </h2>
        <p className="leading-relaxed mb-4">
          NoSQL databases emerged in response to the limitations of traditional relational databases when dealing with large-scale distributed data.
        </p>
        <p className="leading-relaxed mb-4">
          The term "NoSQL" was first used in 1998 by Carlo Strozzi for his lightweight, open-source relational database that did not expose the standard SQL interface. The modern interpretation of "NoSQL" as "Not Only SQL" emphasizes that these databases may support SQL-like query languages while offering alternative data models.
        </p>

        <h3 className="text-xl font-medium mb-3">NoSQL vs SQL</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Feature</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">SQL (Relational)</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">NoSQL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Data Model</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Tables with rows and columns</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Document, Key-Value, Column, Graph</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Schema</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fixed, predefined</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Dynamic, flexible</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Scaling</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Vertical (scale-up)</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Horizontal (scale-out)</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Transactions</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">ACID compliant</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">BASE (eventual consistency)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Query Language</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Structured Query Language (SQL)</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Varies by database</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3">When to Use NoSQL</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Large volumes of data:</strong> When you need to store and process petabytes of data</li>
          <li><strong>Rapid development:</strong> When schema changes frequently during development</li>
          <li><strong>Horizontal scaling:</strong> When you need to distribute data across multiple servers</li>
          <li><strong>Unstructured data:</strong> When data doesn't fit neatly into tables</li>
          <li><strong>High availability:</strong> When downtime is not acceptable</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">NoSQL History Timeline</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6">
          <ul className="space-y-2">
            <li><strong>2004:</strong> Google publishes BigTable paper</li>
            <li><strong>2007:</strong> Amazon publishes Dynamo paper</li>
            <li><strong>2008:</strong> Facebook open-sources Cassandra</li>
            <li><strong>2009:</strong> MongoDB and Redis released</li>
            <li><strong>2010:</strong> Neo4j gains popularity</li>
            <li><strong>Present:</strong> NoSQL is mainstream in enterprise applications</li>
          </ul>
        </div>
      </>
    ),
  },

  "nosql_types.asp": {
    title: "Types of NoSQL Databases",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Types of NoSQL Databases
        </h2>
        <p className="leading-relaxed mb-4">
          NoSQL databases are categorized based on their data model. Each type is optimized for specific use cases and offers different trade-offs.
        </p>

        <h3 className="text-xl font-medium mb-3">The Four Main Types</h3>

        <div className="grid gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">1. Document Databases</h4>
            <p className="text-sm mt-2">Store data in JSON-like documents. Each document can have a different structure.</p>
            <p className="text-sm mt-1"><strong>Examples:</strong> MongoDB, CouchDB, Amazon DocumentDB</p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-700 dark:text-green-300">2. Key-Value Stores</h4>
            <p className="text-sm mt-2">Simple data model with keys mapping to values. Extremely fast for simple lookups.</p>
            <p className="text-sm mt-1"><strong>Examples:</strong> Redis, DynamoDB, Memcached</p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">3. Column-Family Databases</h4>
            <p className="text-sm mt-2">Store data in columns rather than rows, optimized for queries over large datasets.</p>
            <p className="text-sm mt-1"><strong>Examples:</strong> Cassandra, HBase, ScyllaDB</p>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-semibold text-orange-700 dark:text-orange-300">4. Graph Databases</h4>
            <p className="text-sm mt-2">Store data as nodes and edges, optimized for traversing relationships.</p>
            <p className="text-sm mt-1"><strong>Examples:</strong> Neo4j, Amazon Neptune, ArangoDB</p>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">Comparison Chart</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-left">Type</th>
                <th className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-left">Best For</th>
                <th className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-left">Not Ideal For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">Document</td>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">Content management, catalogs</td>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">Complex transactions</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">Key-Value</td>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">Caching, session storage</td>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">Complex queries</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">Column-Family</td>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">Analytics, time-series</td>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">Frequent updates</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">Graph</td>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">Social networks, fraud detection</td>
                <td className="border border-gray-300 dark:border-gray-700 px-3 py-2">Simple key lookups</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "nosql_document.asp": {
    title: "Document Databases",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Document Databases
        </h2>
        <p className="leading-relaxed mb-4">
          Document databases store data in flexible, JSON-like documents. Unlike relational databases, each document can have a unique structure, making them ideal for applications where data schemas evolve frequently.
        </p>

        <h3 className="text-xl font-medium mb-3">Key Characteristics</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Flexible Schema:</strong> Documents in the same collection can have different fields</li>
          <li><strong>Nested Data:</strong> Support for embedded documents and arrays</li>
          <li><strong>Rich Queries:</strong> Query by any field, including nested fields</li>
          <li><strong>Atomic Operations:</strong> Single-document operations are atomic</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">Document Structure Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// User Document
{
  "_id": "user_12345",
  "username": "johndoe",
  "profile": {
    "firstName": "John",
    "lastName": "Doe",
    "avatar": "https://example.com/avatar.jpg"
  },
  "email": "john@example.com",
  "orders": [
    {
      "orderId": "ord_001",
      "items": ["item1", "item2"],
      "total": 99.99,
      "status": "delivered"
    },
    {
      "orderId": "ord_002",
      "items": ["item3"],
      "total": 49.99,
      "status": "pending"
    }
  ],
  "createdAt": "2024-01-15T10:30:00Z",
  "tags": ["premium", "verified"]
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">MongoDB Query Examples</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Find all premium users
db.users.find({ tags: "premium" })

// Find users with orders over $50
db.users.find({ "orders.total": { $gt: 50 } })

// Update user profile
db.users.updateOne(
  { username: "johndoe" },
  { $set: { "profile.avatar": "new_avatar.jpg" } }
)

// Add a new order
db.users.updateOne(
  { username: "johndoe" },
  { $push: { orders: { orderId: "ord_003", total: 75.00 } } }
)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Popular Document Databases</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Database</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">MongoDB</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Most popular, rich query language, aggregation framework</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">CouchDB</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">HTTP/REST API, eventual consistency, great for offline-first apps</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Amazon DocumentDB</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">MongoDB-compatible, fully managed, AWS integration</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "nosql_keyvalue.asp": {
    title: "Key-Value Stores",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Key-Value Stores
        </h2>
        <p className="leading-relaxed mb-4">
          Key-value stores are the simplest type of NoSQL database. They store data as a collection of key-value pairs, where the key is a unique identifier and the value can be any type of data.
        </p>

        <h3 className="text-xl font-medium mb-3">How Key-Value Stores Work</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`Key                     Value
-------------------------------------------
"user:1001"          -> { "name": "John", "email": "john@example.com" }
"session:abc123"     -> { "userId": 1001, "expires": "2024-12-31" }
"cache:homepage"     -> "<html>...</html>"
"counter:pageviews"  -> 1542890
"config:app_settings"-> { "theme": "dark", "language": "en" }`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Redis Examples</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Basic Operations
SET user:1001 '{"name":"John","email":"john@example.com"}'
GET user:1001

# Set with expiration (TTL)
SETEX session:abc123 3600 '{"userId":1001}'

# Increment counter
INCR pageviews:homepage
INCRBY pageviews:homepage 10

# Hash operations (structured data)
HSET user:1001 name "John" email "john@example.com" age 30
HGET user:1001 name
HGETALL user:1001

# List operations
LPUSH notifications:user1001 "New message!"
RPUSH queue:emails "email_data_here"
LPOP queue:emails

# Set operations (unique values)
SADD user:1001:interests "coding" "gaming" "music"
SMEMBERS user:1001:interests
SISMEMBER user:1001:interests "coding"`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Common Use Cases</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">Session Management</h4>
            <p className="text-sm mt-2">Store user sessions with automatic expiration</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-700 dark:text-green-300">Caching</h4>
            <p className="text-sm mt-2">Cache database queries and API responses</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">Real-time Analytics</h4>
            <p className="text-sm mt-2">Track page views, clicks, and metrics</p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-700 dark:text-orange-300">Message Queues</h4>
            <p className="text-sm mt-2">Implement pub/sub and job queues</p>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">Popular Key-Value Databases</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Database</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Key Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Redis</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">In-memory, data structures, pub/sub, Lua scripting</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Amazon DynamoDB</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fully managed, auto-scaling, global tables</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Memcached</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Simple caching, multi-threaded, distributed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "nosql_column.asp": {
    title: "Column-Family Databases",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Column-Family Databases
        </h2>
        <p className="leading-relaxed mb-4">
          Column-family databases (also called wide-column stores) organize data by columns rather than rows. This structure is highly efficient for analytical queries that need to access specific columns across many rows.
        </p>

        <h3 className="text-xl font-medium mb-3">Column vs Row Storage</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Row-Oriented (Traditional)</h4>
            <pre className="font-mono text-sm bg-white dark:bg-[#111827] p-2 rounded">
{`Row 1: id=1, name="John", age=30
Row 2: id=2, name="Jane", age=25
Row 3: id=3, name="Bob", age=35`}
            </pre>
          </div>
          <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Column-Oriented</h4>
            <pre className="font-mono text-sm bg-white dark:bg-[#111827] p-2 rounded">
{`id column:   [1, 2, 3]
name column: ["John", "Jane", "Bob"]
age column:  [30, 25, 35]`}
            </pre>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">Cassandra Data Model</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Create a keyspace (like a database)
CREATE KEYSPACE ecommerce
WITH replication = {
  'class': 'SimpleStrategy',
  'replication_factor': 3
};

-- Create a table with partition key and clustering columns
CREATE TABLE ecommerce.orders (
  customer_id UUID,
  order_date TIMESTAMP,
  order_id UUID,
  product_name TEXT,
  quantity INT,
  price DECIMAL,
  PRIMARY KEY ((customer_id), order_date, order_id)
) WITH CLUSTERING ORDER BY (order_date DESC);

-- Insert data
INSERT INTO ecommerce.orders
  (customer_id, order_date, order_id, product_name, quantity, price)
VALUES
  (uuid(), toTimestamp(now()), uuid(), 'Laptop', 1, 999.99);

-- Query orders for a specific customer
SELECT * FROM ecommerce.orders
WHERE customer_id = 550e8400-e29b-41d4-a716-446655440000;`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Key Concepts</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Keyspace:</strong> Top-level namespace (like a database)</li>
          <li><strong>Column Family:</strong> A table containing rows of related columns</li>
          <li><strong>Partition Key:</strong> Determines data distribution across nodes</li>
          <li><strong>Clustering Columns:</strong> Define sort order within a partition</li>
          <li><strong>Wide Rows:</strong> Rows can have billions of columns</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">Advantages</h3>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-6">
          <ul className="list-disc list-inside space-y-1">
            <li>Excellent for time-series data and event logging</li>
            <li>High write throughput</li>
            <li>Linear scalability</li>
            <li>Efficient compression (similar data stored together)</li>
            <li>No single point of failure</li>
          </ul>
        </div>

        <h3 className="text-xl font-medium mb-3">Popular Column-Family Databases</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Database</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Apache Cassandra</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Highly available, distributed, tunable consistency</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Apache HBase</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Hadoop ecosystem, strong consistency, real-time access</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">ScyllaDB</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Cassandra-compatible, C++ implementation, lower latency</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "nosql_graph.asp": {
    title: "Graph Databases",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Graph Databases
        </h2>
        <p className="leading-relaxed mb-4">
          Graph databases are designed to store and navigate relationships. They use graph structures with nodes (entities), edges (relationships), and properties to represent and store data.
        </p>

        <h3 className="text-xl font-medium mb-3">Graph Components</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">O</div>
            <h4 className="font-semibold">Nodes</h4>
            <p className="text-sm">Entities (users, products, places)</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">---</div>
            <h4 className="font-semibold">Edges</h4>
            <p className="text-sm">Relationships (KNOWS, BOUGHT, LOCATED_IN)</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">{`{ }`}</div>
            <h4 className="font-semibold">Properties</h4>
            <p className="text-sm">Attributes on nodes and edges</p>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">Neo4j Cypher Examples</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Create nodes
CREATE (john:Person {name: 'John', age: 30})
CREATE (jane:Person {name: 'Jane', age: 28})
CREATE (coffee:Product {name: 'Coffee', price: 4.99})

// Create relationships
CREATE (john)-[:KNOWS {since: 2020}]->(jane)
CREATE (john)-[:PURCHASED {date: '2024-01-15'}]->(coffee)

// Find all people John knows
MATCH (john:Person {name: 'John'})-[:KNOWS]->(friend)
RETURN friend.name

// Find friends of friends
MATCH (john:Person {name: 'John'})-[:KNOWS*2]->(fof)
RETURN DISTINCT fof.name

// Recommendation: Find products bought by friends
MATCH (john:Person {name: 'John'})-[:KNOWS]->(friend)-[:PURCHASED]->(product)
WHERE NOT (john)-[:PURCHASED]->(product)
RETURN product.name, COUNT(friend) as recommendations
ORDER BY recommendations DESC

// Shortest path between two people
MATCH path = shortestPath(
  (a:Person {name: 'John'})-[*]-(b:Person {name: 'Alice'})
)
RETURN path`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Use Cases</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Social Networks</h4>
            <ul className="text-sm mt-2 list-disc list-inside">
              <li>Friend recommendations</li>
              <li>Influence analysis</li>
              <li>Community detection</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Fraud Detection</h4>
            <ul className="text-sm mt-2 list-disc list-inside">
              <li>Pattern matching</li>
              <li>Ring detection</li>
              <li>Real-time alerts</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Knowledge Graphs</h4>
            <ul className="text-sm mt-2 list-disc list-inside">
              <li>Semantic search</li>
              <li>Entity resolution</li>
              <li>Question answering</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Recommendation Engines</h4>
            <ul className="text-sm mt-2 list-disc list-inside">
              <li>Collaborative filtering</li>
              <li>Content-based recommendations</li>
              <li>Hybrid approaches</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">Popular Graph Databases</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Database</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Neo4j</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Cypher query language, ACID compliant, native graph storage</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Amazon Neptune</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fully managed, supports Gremlin and SPARQL</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">ArangoDB</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Multi-model (document + graph), AQL query language</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "nosql_cap.asp": {
    title: "CAP Theorem",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CAP Theorem
        </h2>
        <p className="leading-relaxed mb-4">
          The CAP theorem, also known as Brewer's theorem, states that a distributed data store can only provide two out of three guarantees simultaneously: <strong>Consistency</strong>, <strong>Availability</strong>, and <strong>Partition Tolerance</strong>.
        </p>

        <h3 className="text-xl font-medium mb-3">The Three Properties</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">Consistency (C)</h4>
            <p className="text-sm mt-2">Every read receives the most recent write or an error. All nodes see the same data at the same time.</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-700 dark:text-green-300">Availability (A)</h4>
            <p className="text-sm mt-2">Every request receives a response, without guarantee that it contains the most recent write.</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">Partition Tolerance (P)</h4>
            <p className="text-sm mt-2">The system continues to operate despite network partitions between nodes.</p>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">CAP Trade-offs</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6">
          <p className="mb-4">Since network partitions are inevitable in distributed systems, you must choose between:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400">CP Systems</h4>
              <p className="text-sm mt-2">Choose consistency over availability during partitions. Return an error or timeout if consistency cannot be guaranteed.</p>
              <p className="text-sm mt-2"><strong>Examples:</strong> MongoDB, HBase, Redis</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-green-600 dark:text-green-400">AP Systems</h4>
              <p className="text-sm mt-2">Choose availability over consistency during partitions. Return potentially stale data rather than failing.</p>
              <p className="text-sm mt-2"><strong>Examples:</strong> Cassandra, CouchDB, DynamoDB</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">Database CAP Classification</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Database</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">CAP Choice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">MongoDB</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Document</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">CP (configurable)</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Cassandra</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Column-Family</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">AP (tunable)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Redis</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Key-Value</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">CP</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">CouchDB</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Document</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">AP</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Neo4j</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Graph</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">CP</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300">Important Note</h4>
          <p className="text-sm mt-2">The CAP theorem is a simplification. Many modern databases offer tunable consistency, allowing you to choose different consistency levels per operation.</p>
        </div>
      </>
    ),
  },

  "nosql_acid_base.asp": {
    title: "ACID vs BASE",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          ACID vs BASE
        </h2>
        <p className="leading-relaxed mb-4">
          ACID and BASE represent two different approaches to database transactions. ACID prioritizes consistency and reliability, while BASE prioritizes availability and performance.
        </p>

        <h3 className="text-xl font-medium mb-3">ACID Properties</h3>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
          <div className="grid gap-4">
            <div>
              <h4 className="font-semibold text-blue-700 dark:text-blue-300">Atomicity</h4>
              <p className="text-sm">All operations in a transaction succeed or fail together. No partial updates.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 dark:text-blue-300">Consistency</h4>
              <p className="text-sm">Database moves from one valid state to another. All rules and constraints are satisfied.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 dark:text-blue-300">Isolation</h4>
              <p className="text-sm">Concurrent transactions don't interfere with each other. Each sees a consistent view.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 dark:text-blue-300">Durability</h4>
              <p className="text-sm">Committed transactions are permanent, surviving system failures.</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">BASE Properties</h3>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-6">
          <div className="grid gap-4">
            <div>
              <h4 className="font-semibold text-green-700 dark:text-green-300">Basically Available</h4>
              <p className="text-sm">The system guarantees availability. Responses may include stale data or failures.</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 dark:text-green-300">Soft State</h4>
              <p className="text-sm">The state of the system may change over time, even without input, due to eventual consistency.</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 dark:text-green-300">Eventually Consistent</h4>
              <p className="text-sm">The system will become consistent over time, given that it receives no input during that time.</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">Comparison</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Aspect</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">ACID</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">BASE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Focus</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Consistency</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Availability</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Scaling</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Vertical (harder)</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Horizontal (easier)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Data State</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Always consistent</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Eventually consistent</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Performance</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Lower (locking overhead)</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Higher (no locking)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Banking, finance</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Social media, analytics</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3">Example: Bank Transfer</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// ACID Approach (e.g., PostgreSQL)
BEGIN TRANSACTION;
  UPDATE accounts SET balance = balance - 100 WHERE id = 'A';
  UPDATE accounts SET balance = balance + 100 WHERE id = 'B';
COMMIT;
-- Either both updates succeed, or neither does

// BASE Approach (e.g., Eventual Consistency)
// Write to Account A (local node)
updateBalance('A', -100);
// Async replication to Account B
publishEvent('transfer', { from: 'A', to: 'B', amount: 100 });
// Eventually, Account B receives and processes the event
// Temporary inconsistency is acceptable`}
          </pre>
        </div>
      </>
    ),
  },

  "nosql_modeling.asp": {
    title: "NoSQL Data Modeling",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          NoSQL Data Modeling
        </h2>
        <p className="leading-relaxed mb-4">
          Data modeling in NoSQL differs significantly from relational databases. Instead of normalizing data, NoSQL encourages denormalization and embedding related data together.
        </p>

        <h3 className="text-xl font-medium mb-3">Key Principles</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Model for queries:</strong> Design your data model based on how you'll access it</li>
          <li><strong>Denormalize:</strong> Duplicate data to avoid expensive joins</li>
          <li><strong>Embed related data:</strong> Store related data together for atomic operations</li>
          <li><strong>Consider access patterns:</strong> Optimize for your most common operations</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">Embedding vs Referencing</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Embedding (Denormalized)</h4>
            <pre className="font-mono text-sm bg-white dark:bg-[#111827] p-2 rounded">
{`{
  "_id": "order_001",
  "customer": {
    "name": "John",
    "email": "john@example.com"
  },
  "items": [
    { "product": "Laptop", "price": 999 },
    { "product": "Mouse", "price": 29 }
  ]
}`}
            </pre>
            <p className="text-sm mt-2 text-green-600 dark:text-green-400">Best when: Data is accessed together</p>
          </div>
          <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Referencing (Normalized)</h4>
            <pre className="font-mono text-sm bg-white dark:bg-[#111827] p-2 rounded">
{`// Orders Collection
{
  "_id": "order_001",
  "customerId": "cust_123",
  "itemIds": ["prod_1", "prod_2"]
}

// Customers Collection
{
  "_id": "cust_123",
  "name": "John"
}`}
            </pre>
            <p className="text-sm mt-2 text-blue-600 dark:text-blue-400">Best when: Data changes frequently</p>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">Common Patterns</h3>

        <h4 className="text-lg font-medium mb-2">1. Polymorphic Pattern</h4>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-4 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Different product types in same collection
{ "type": "book", "title": "1984", "author": "Orwell", "pages": 328 }
{ "type": "movie", "title": "Inception", "director": "Nolan", "runtime": 148 }
{ "type": "music", "title": "Abbey Road", "artist": "Beatles", "tracks": 17 }`}
          </pre>
        </div>

        <h4 className="text-lg font-medium mb-2">2. Bucket Pattern (Time-Series)</h4>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-4 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Group measurements into time buckets
{
  "sensorId": "temp_001",
  "date": "2024-01-15",
  "readings": [
    { "time": "00:00", "value": 22.5 },
    { "time": "01:00", "value": 22.3 },
    { "time": "02:00", "value": 22.1 }
    // ... up to 24 readings per document
  ],
  "summary": { "min": 21.5, "max": 24.2, "avg": 22.8 }
}`}
          </pre>
        </div>

        <h4 className="text-lg font-medium mb-2">3. Computed Pattern</h4>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Pre-compute expensive calculations
{
  "productId": "prod_001",
  "name": "Popular Widget",
  "reviews": [...],
  // Pre-computed values updated on changes
  "computed": {
    "averageRating": 4.5,
    "totalReviews": 1523,
    "lastUpdated": "2024-01-15T10:30:00Z"
  }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">When to Embed vs Reference</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Embed When</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Reference When</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">One-to-few relationships</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">One-to-many relationships</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Data is accessed together</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Data is accessed independently</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Data rarely changes</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Data changes frequently</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Document size stays manageable</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Embedded data would grow unbounded</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "nosql_indexing.asp": {
    title: "NoSQL Indexing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          NoSQL Indexing
        </h2>
        <p className="leading-relaxed mb-4">
          Indexes are crucial for query performance in NoSQL databases. They create efficient data structures that speed up read operations at the cost of some write performance and storage space.
        </p>

        <h3 className="text-xl font-medium mb-3">Types of Indexes</h3>
        <div className="grid gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">Single Field Index</h4>
            <p className="text-sm mt-2">Index on a single field. Most common type.</p>
            <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded mt-2 inline-block">
              db.users.createIndex({`{ email: 1 }`})
            </code>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-700 dark:text-green-300">Compound Index</h4>
            <p className="text-sm mt-2">Index on multiple fields. Order matters!</p>
            <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded mt-2 inline-block">
              db.orders.createIndex({`{ customerId: 1, orderDate: -1 }`})
            </code>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">Text Index</h4>
            <p className="text-sm mt-2">Full-text search capabilities.</p>
            <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded mt-2 inline-block">
              db.articles.createIndex({`{ content: "text", title: "text" }`})
            </code>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-700 dark:text-orange-300">Geospatial Index</h4>
            <p className="text-sm mt-2">Location-based queries.</p>
            <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded mt-2 inline-block">
              db.locations.createIndex({`{ coordinates: "2dsphere" }`})
            </code>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">MongoDB Index Examples</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Create indexes
db.users.createIndex({ email: 1 }, { unique: true })
db.orders.createIndex({ customerId: 1, createdAt: -1 })
db.products.createIndex({ name: "text", description: "text" })

// Partial index (only index active users)
db.users.createIndex(
  { lastLogin: 1 },
  { partialFilterExpression: { status: "active" } }
)

// TTL index (auto-delete after 7 days)
db.sessions.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 604800 }
)

// View existing indexes
db.users.getIndexes()

// Analyze query performance
db.users.find({ email: "john@example.com" }).explain("executionStats")`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Index Best Practices</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-700 dark:text-green-300">Do</h4>
            <ul className="text-sm mt-2 list-disc list-inside">
              <li>Index fields used in queries and sorts</li>
              <li>Put high-cardinality fields first in compound indexes</li>
              <li>Use covered queries when possible</li>
              <li>Monitor index usage regularly</li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 dark:text-red-300">Don't</h4>
            <ul className="text-sm mt-2 list-disc list-inside">
              <li>Over-index (impacts write performance)</li>
              <li>Index fields with low cardinality alone</li>
              <li>Create redundant indexes</li>
              <li>Ignore index size in memory planning</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">Index Selection Rules</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Query Type</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Recommended Index</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Equality + Range</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Equality fields first, then range</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Sort operations</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Include sort fields in index</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Text search</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Text index on searchable fields</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Geolocation</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">2dsphere for Earth coordinates</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "nosql_sharding.asp": {
    title: "NoSQL Sharding",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          NoSQL Sharding
        </h2>
        <p className="leading-relaxed mb-4">
          Sharding is the process of distributing data across multiple machines to handle larger datasets and higher throughput. It's a key feature that enables horizontal scaling in NoSQL databases.
        </p>

        <h3 className="text-xl font-medium mb-3">How Sharding Works</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl mb-2">Shard 1</div>
              <p className="text-sm">Users A-H</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl mb-2">Shard 2</div>
              <p className="text-sm">Users I-P</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl mb-2">Shard 3</div>
              <p className="text-sm">Users Q-Z</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">Sharding Strategies</h3>
        <div className="grid gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">Range-Based Sharding</h4>
            <p className="text-sm mt-2">Data is partitioned based on ranges of the shard key.</p>
            <p className="text-sm mt-1"><strong>Pros:</strong> Efficient range queries</p>
            <p className="text-sm"><strong>Cons:</strong> Hotspots if data is not evenly distributed</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-700 dark:text-green-300">Hash-Based Sharding</h4>
            <p className="text-sm mt-2">A hash function determines data placement.</p>
            <p className="text-sm mt-1"><strong>Pros:</strong> Even data distribution</p>
            <p className="text-sm"><strong>Cons:</strong> Range queries require scatter-gather</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">Directory-Based Sharding</h4>
            <p className="text-sm mt-2">A lookup table maps data to shards.</p>
            <p className="text-sm mt-1"><strong>Pros:</strong> Flexible, easy to relocate data</p>
            <p className="text-sm"><strong>Cons:</strong> Lookup table can become bottleneck</p>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">MongoDB Sharding Setup</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Enable sharding for a database
sh.enableSharding("mydb")

// Shard a collection using hashed sharding
sh.shardCollection("mydb.users", { "userId": "hashed" })

// Shard using ranged sharding
sh.shardCollection("mydb.orders", { "customerId": 1, "orderDate": 1 })

// Check sharding status
sh.status()

// View chunk distribution
db.users.getShardDistribution()`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Choosing a Shard Key</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Good Shard Key</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Bad Shard Key</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">High cardinality (many unique values)</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Low cardinality (few unique values)</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Evenly distributed writes</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Monotonically increasing (timestamp, auto-increment)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Commonly used in queries</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Rarely queried fields</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Immutable or rarely changing</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Frequently updated fields</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300">Warning</h4>
          <p className="text-sm mt-2">Choosing a poor shard key can lead to unbalanced data distribution and poor performance. The shard key is typically immutable once set.</p>
        </div>
      </>
    ),
  },

  "nosql_replication.asp": {
    title: "NoSQL Replication",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          NoSQL Replication
        </h2>
        <p className="leading-relaxed mb-4">
          Replication is the process of copying data across multiple servers to ensure high availability, fault tolerance, and improved read performance.
        </p>

        <h3 className="text-xl font-medium mb-3">Replication Types</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">Master-Slave (Primary-Secondary)</h4>
            <p className="text-sm mt-2">One primary handles writes, secondaries replicate data and can handle reads.</p>
            <ul className="text-sm mt-2 list-disc list-inside">
              <li>Simple to implement</li>
              <li>Read scaling</li>
              <li>Primary is single point of failure</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-700 dark:text-green-300">Multi-Master</h4>
            <p className="text-sm mt-2">Multiple nodes can accept writes. Data syncs between all nodes.</p>
            <ul className="text-sm mt-2 list-disc list-inside">
              <li>High availability</li>
              <li>Write scaling</li>
              <li>Conflict resolution needed</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">MongoDB Replica Set</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Initialize replica set
rs.initiate({
  _id: "myReplicaSet",
  members: [
    { _id: 0, host: "mongo1:27017", priority: 2 },
    { _id: 1, host: "mongo2:27017", priority: 1 },
    { _id: 2, host: "mongo3:27017", priority: 1 }
  ]
})

// Check replica set status
rs.status()

// Add a new member
rs.add("mongo4:27017")

// Add an arbiter (voting member, no data)
rs.addArb("arbiter:27017")

// Configure read preference
// Read from primary only (default)
db.collection.find().readPref("primary")

// Read from secondary (eventual consistency)
db.collection.find().readPref("secondary")

// Read from nearest node
db.collection.find().readPref("nearest")`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Cassandra Replication</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Create keyspace with replication settings
CREATE KEYSPACE production
WITH replication = {
  'class': 'NetworkTopologyStrategy',
  'dc1': 3,    -- 3 replicas in data center 1
  'dc2': 2     -- 2 replicas in data center 2
};

-- SimpleStrategy for single data center
CREATE KEYSPACE development
WITH replication = {
  'class': 'SimpleStrategy',
  'replication_factor': 3
};

-- Consistency levels for reads/writes
-- ONE, QUORUM, ALL, LOCAL_QUORUM, etc.
CONSISTENCY QUORUM;
SELECT * FROM users WHERE id = 123;`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Consistency Levels</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Level</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Description</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Trade-off</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">ONE</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Response from one replica</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fast, low consistency</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">QUORUM</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Majority of replicas agree</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Balanced</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">ALL</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">All replicas respond</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Slow, high consistency</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">LOCAL_QUORUM</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Quorum within local DC</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Low latency, local consistency</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3">Benefits of Replication</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">99.99%</div>
            <h4 className="font-semibold">High Availability</h4>
            <p className="text-sm mt-2">Automatic failover when nodes fail</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">5x</div>
            <h4 className="font-semibold">Read Scaling</h4>
            <p className="text-sm mt-2">Distribute reads across replicas</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">&lt;50ms</div>
            <h4 className="font-semibold">Geographic Distribution</h4>
            <p className="text-sm mt-2">Place data closer to users</p>
          </div>
        </div>
      </>
    ),
  },

  "nosql_usecases.asp": {
    title: "NoSQL Use Cases",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          NoSQL Use Cases
        </h2>
        <p className="leading-relaxed mb-4">
          NoSQL databases excel in specific scenarios where traditional relational databases struggle. Understanding these use cases helps you choose the right tool for your project.
        </p>

        <h3 className="text-xl font-medium mb-3">Real-World Applications</h3>

        <div className="grid gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">Content Management Systems</h4>
            <p className="text-sm mt-2"><strong>Best Choice:</strong> Document Databases (MongoDB, CouchDB)</p>
            <p className="text-sm mt-2">Articles, blog posts, and media have varying structures. Document databases handle this flexibility naturally.</p>
            <div className="bg-white dark:bg-gray-800 p-2 rounded mt-2 text-sm">
              <strong>Example:</strong> A news website storing articles with different metadata, embedded images, and author information.
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-700 dark:text-green-300">Session Management & Caching</h4>
            <p className="text-sm mt-2"><strong>Best Choice:</strong> Key-Value Stores (Redis, Memcached)</p>
            <p className="text-sm mt-2">Fast lookups by session ID with automatic expiration.</p>
            <div className="bg-white dark:bg-gray-800 p-2 rounded mt-2 text-sm">
              <strong>Example:</strong> E-commerce site storing shopping cart data and user sessions with TTL.
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">Time-Series Data & IoT</h4>
            <p className="text-sm mt-2"><strong>Best Choice:</strong> Column-Family (Cassandra, InfluxDB)</p>
            <p className="text-sm mt-2">High write throughput for sensor data, logs, and metrics.</p>
            <div className="bg-white dark:bg-gray-800 p-2 rounded mt-2 text-sm">
              <strong>Example:</strong> Smart factory collecting millions of sensor readings per second.
            </div>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-700 dark:text-orange-300">Social Networks & Recommendations</h4>
            <p className="text-sm mt-2"><strong>Best Choice:</strong> Graph Databases (Neo4j, Neptune)</p>
            <p className="text-sm mt-2">Efficiently traverse relationships for friend suggestions and content recommendations.</p>
            <div className="bg-white dark:bg-gray-800 p-2 rounded mt-2 text-sm">
              <strong>Example:</strong> LinkedIn's "People You May Know" feature using relationship graphs.
            </div>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">Industry Examples</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Company</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Database</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Netflix</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Cassandra</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Viewing history, recommendations</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Twitter</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Redis</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Timeline caching</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Uber</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">MongoDB</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Geospatial queries for drivers</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">eBay</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">MongoDB</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Product catalog</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Airbnb</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Redis</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Session management, search cache</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">LinkedIn</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Graph DB</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Connection recommendations</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3">When NOT to Use NoSQL</h3>
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-6">
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li><strong>Complex transactions:</strong> ACID compliance is critical (banking, financial)</li>
            <li><strong>Strong relationships:</strong> Data is highly relational with many joins</li>
            <li><strong>Reporting:</strong> Complex ad-hoc queries and analytics</li>
            <li><strong>Small datasets:</strong> Data fits on a single server</li>
            <li><strong>Mature ecosystem:</strong> Need for extensive tooling and expertise</li>
          </ul>
        </div>
      </>
    ),
  },

  "nosql_bestpractices.asp": {
    title: "NoSQL Best Practices",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          NoSQL Best Practices
        </h2>
        <p className="leading-relaxed mb-4">
          Following best practices ensures your NoSQL implementation is performant, scalable, and maintainable.
        </p>

        <h3 className="text-xl font-medium mb-3">Data Modeling</h3>
        <div className="grid gap-4 mb-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-700 dark:text-green-300">Design for Access Patterns</h4>
            <p className="text-sm mt-2">Model your data based on how you'll query it, not how it's structured logically. Identify your access patterns first, then design your schema.</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-700 dark:text-green-300">Embrace Denormalization</h4>
            <p className="text-sm mt-2">Duplicate data to avoid expensive joins. Update denormalized data consistently using application logic or change streams.</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-700 dark:text-green-300">Keep Documents Reasonably Sized</h4>
            <p className="text-sm mt-2">Avoid unbounded arrays. Use the bucket pattern for growing data. MongoDB has a 16MB document limit.</p>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">Performance Optimization</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Use projection to return only needed fields
db.users.find(
  { status: "active" },
  { name: 1, email: 1, _id: 0 }  // Only return name and email
)

// Use covered queries (all fields in index)
db.orders.createIndex({ customerId: 1, status: 1, total: 1 })
db.orders.find(
  { customerId: "123", status: "pending" },
  { total: 1, _id: 0 }
)

// Limit results
db.products.find().sort({ createdAt: -1 }).limit(10)

// Use bulk operations for multiple writes
db.users.bulkWrite([
  { insertOne: { document: { name: "User1" } } },
  { updateOne: { filter: { _id: 1 }, update: { $set: { status: "active" } } } },
  { deleteOne: { filter: { _id: 2 } } }
])`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Security Best Practices</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Authentication & Authorization</h4>
            <ul className="text-sm mt-2 list-disc list-inside">
              <li>Enable authentication (never run without it)</li>
              <li>Use role-based access control (RBAC)</li>
              <li>Implement least privilege principle</li>
              <li>Rotate credentials regularly</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Network Security</h4>
            <ul className="text-sm mt-2 list-disc list-inside">
              <li>Enable TLS/SSL for connections</li>
              <li>Use VPC/private networks</li>
              <li>Whitelist IP addresses</li>
              <li>Never expose databases to public internet</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">Operational Guidelines</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Area</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Best Practice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Backups</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Regular snapshots, test restores, offsite storage</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Monitoring</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Track query performance, disk usage, replication lag</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Indexing</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Review slow queries, remove unused indexes</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Capacity</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Plan for growth, monitor resource utilization</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Updates</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Keep databases updated, test in staging first</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3">Common Mistakes to Avoid</h3>
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-6">
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li><strong>Treating NoSQL like SQL:</strong> Don't normalize data or rely on joins</li>
            <li><strong>Ignoring indexes:</strong> Unindexed queries cause full collection scans</li>
            <li><strong>Unbounded arrays:</strong> Arrays that grow indefinitely cause performance issues</li>
            <li><strong>Wrong database choice:</strong> Use the right NoSQL type for your use case</li>
            <li><strong>Skipping capacity planning:</strong> NoSQL doesn't mean unlimited scalability for free</li>
            <li><strong>Neglecting backups:</strong> Always have a disaster recovery plan</li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300">Key Takeaway</h4>
          <p className="text-sm mt-2">NoSQL databases are powerful tools, but they require understanding of their specific paradigms. Take time to learn your chosen database deeply, and don't be afraid to use SQL databases where they're a better fit.</p>
        </div>
      </>
    ),
  },
};
