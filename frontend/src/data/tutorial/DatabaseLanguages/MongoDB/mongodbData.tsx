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

export const tutorialData: SidebarItem[] = [
  { label: "MongoDB Home", href: "mongodb_home" },
  { label: "Introduction", href: "mongodb_intro" },
  { label: "Installation", href: "mongodb_installation" },
  {
    label: "CRUD Operations",
    href: "mongodb_crud",
    isHeader: true,
    children: [
      { label: "Create (Insert)", href: "mongodb_create" },
      { label: "Read (Find)", href: "mongodb_read" },
      { label: "Update", href: "mongodb_update" },
      { label: "Delete", href: "mongodb_delete" },
    ],
  },
  {
    label: "Aggregation",
    href: "mongodb_aggregation",
    isHeader: true,
    children: [
      { label: "Pipeline Basics", href: "mongodb_pipeline" },
      { label: "Common Stages", href: "mongodb_stages" },
      { label: "Aggregation Examples", href: "mongodb_agg_examples" },
    ],
  },
  {
    label: "Indexing",
    href: "mongodb_indexing",
    isHeader: true,
    children: [
      { label: "Index Types", href: "mongodb_index_types" },
      { label: "Index Management", href: "mongodb_index_mgmt" },
      { label: "Performance", href: "mongodb_performance" },
    ],
  },
  {
    label: "Data Modeling",
    href: "mongodb_modeling",
    isHeader: true,
    children: [
      { label: "Schema Design", href: "mongodb_schema" },
      { label: "Relationships", href: "mongodb_relationships" },
    ],
  },
  {
    label: "Replication & Sharding",
    href: "mongodb_scaling",
    isHeader: true,
    children: [
      { label: "Replica Sets", href: "mongodb_replica" },
      { label: "Sharding", href: "mongodb_sharding" },
    ],
  },
  { label: "Security", href: "mongodb_security" },
  { label: "MongoDB with Node.js", href: "mongodb_nodejs" },
  { label: "MongoDB with Python", href: "mongodb_python" },
  { label: "Best Practices", href: "mongodb_best_practices" },
];

export const tutorialContent: Record<string, TopicContent> = {
  mongodb_home: {
    title: "MongoDB Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Learn MongoDB
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>MongoDB</strong> is the most popular NoSQL document database.
        </p>
        <p className="leading-relaxed mb-4">
          MongoDB stores data in flexible, JSON-like documents, making it easy to work with and scale.
        </p>
        <p className="leading-relaxed mb-4">
          It is widely used for modern web applications, real-time analytics, and IoT solutions.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">What You Will Learn</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>NoSQL concepts and MongoDB basics</li>
          <li>CRUD operations (Create, Read, Update, Delete)</li>
          <li>Aggregation framework for data analysis</li>
          <li>Indexing for optimal performance</li>
          <li>Data modeling and schema design</li>
          <li>Replication and sharding for scalability</li>
          <li>Security and authentication</li>
          <li>Integration with Node.js and Python</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Example: Basic MongoDB Operations</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Insert a document
db.users.insertOne({
  name: "John Doe",
  email: "john@example.com",
  age: 30
})

// Find documents
db.users.find({ age: { $gte: 25 } })

// Update a document
db.users.updateOne(
  { name: "John Doe" },
  { $set: { age: 31 } }
)`}
          </pre>
        </div>
      </>
    ),
  },

  mongodb_intro: {
    title: "Introduction to MongoDB",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          What is MongoDB?
        </h2>
        <p className="leading-relaxed mb-4">
          MongoDB is a <strong>document-oriented NoSQL database</strong> that stores data in flexible, JSON-like documents called BSON (Binary JSON).
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">NoSQL vs SQL</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-purple-100 dark:bg-purple-900">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Feature</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">MongoDB (NoSQL)</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">SQL Databases</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Data Model</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Documents (JSON)</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Tables (Rows)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Schema</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Flexible/Dynamic</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fixed/Rigid</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Scaling</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Horizontal</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Vertical</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Joins</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">$lookup (limited)</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Full JOIN support</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Key Concepts</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Database:</strong> Container for collections</li>
          <li><strong>Collection:</strong> Group of documents (like a table)</li>
          <li><strong>Document:</strong> A single record in BSON format</li>
          <li><strong>Field:</strong> Key-value pair within a document</li>
          <li><strong>_id:</strong> Unique identifier for each document</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Document Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "address": {
    "city": "New York",
    "zip": "10001"
  },
  "hobbies": ["reading", "coding", "gaming"]
}`}
          </pre>
        </div>
      </>
    ),
  },

  mongodb_installation: {
    title: "MongoDB Installation",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Installing MongoDB
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">MongoDB Atlas (Cloud)</h3>
        <p className="leading-relaxed mb-4">
          The easiest way to get started with MongoDB is using MongoDB Atlas, the cloud-hosted service.
        </p>
        <ol className="list-decimal list-inside ml-4 mb-4 space-y-2">
          <li>Visit <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">mongodb.com/atlas</code></li>
          <li>Create a free account</li>
          <li>Create a new cluster</li>
          <li>Get your connection string</li>
        </ol>

        <h3 className="text-xl font-medium mb-3 mt-8">Windows Installation</h3>
        <ol className="list-decimal list-inside ml-4 mb-4 space-y-2">
          <li>Download from <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">mongodb.com/try/download/community</code></li>
          <li>Run the installer (.msi file)</li>
          <li>Choose "Complete" installation</li>
          <li>Install MongoDB Compass (GUI) if desired</li>
        </ol>

        <h3 className="text-xl font-medium mb-3 mt-8">macOS Installation</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Using Homebrew
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Linux Installation (Ubuntu)</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Import public key
curl -fsSL https://pgp.mongodb.com/server-7.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor

# Add repository
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Install
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start service
sudo systemctl start mongod`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Verify Installation</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Check version
mongod --version

# Connect to MongoDB shell
mongosh`}
          </pre>
        </div>
      </>
    ),
  },

  mongodb_create: {
    title: "Create (Insert) Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Inserting Documents
        </h2>
        <p className="leading-relaxed mb-4">
          MongoDB provides methods to insert one or multiple documents into a collection.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">insertOne()</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Insert a single document
db.users.insertOne({
  name: "Alice Smith",
  email: "alice@example.com",
  age: 28,
  createdAt: new Date()
})

// Result
{
  acknowledged: true,
  insertedId: ObjectId("...")
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">insertMany()</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Insert multiple documents
db.products.insertMany([
  { name: "Laptop", price: 999, category: "Electronics" },
  { name: "Mouse", price: 29, category: "Electronics" },
  { name: "Desk", price: 199, category: "Furniture" }
])

// Result
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("..."),
    '1': ObjectId("..."),
    '2': ObjectId("...")
  }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Ordered vs Unordered Insert</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Ordered (default) - stops on first error
db.users.insertMany(docs, { ordered: true })

// Unordered - continues after errors
db.users.insertMany(docs, { ordered: false })`}
          </pre>
        </div>
      </>
    ),
  },

  mongodb_read: {
    title: "Read (Find) Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Querying Documents
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Basic Find</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Find all documents
db.users.find()

// Find one document
db.users.findOne({ name: "Alice" })

// Find with condition
db.users.find({ age: 28 })`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Comparison Operators</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// $eq, $ne, $gt, $gte, $lt, $lte
db.products.find({ price: { $gt: 100 } })
db.products.find({ price: { $gte: 50, $lte: 200 } })

// $in, $nin
db.products.find({ category: { $in: ["Electronics", "Furniture"] } })

// $exists
db.users.find({ email: { $exists: true } })`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Logical Operators</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// $and
db.products.find({
  $and: [{ price: { $gt: 50 } }, { category: "Electronics" }]
})

// $or
db.products.find({
  $or: [{ price: { $lt: 50 } }, { category: "Furniture" }]
})

// $not
db.users.find({ age: { $not: { $gt: 30 } } })`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Projection, Sort, Limit</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Projection (select fields)
db.users.find({}, { name: 1, email: 1, _id: 0 })

// Sort (1 = ascending, -1 = descending)
db.products.find().sort({ price: -1 })

// Limit and skip
db.products.find().limit(10).skip(20)

// Combined
db.products.find({ category: "Electronics" })
  .sort({ price: 1 })
  .limit(5)`}
          </pre>
        </div>
      </>
    ),
  },

  mongodb_update: {
    title: "Update Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Updating Documents
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">updateOne()</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Update a single document
db.users.updateOne(
  { name: "Alice" },           // filter
  { $set: { age: 29 } }        // update
)

// Result
{
  acknowledged: true,
  matchedCount: 1,
  modifiedCount: 1
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">updateMany()</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Update multiple documents
db.products.updateMany(
  { category: "Electronics" },
  { $mul: { price: 1.1 } }  // increase price by 10%
)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Update Operators</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// $set - set field value
db.users.updateOne({ name: "Alice" }, { $set: { status: "active" } })

// $unset - remove field
db.users.updateOne({ name: "Alice" }, { $unset: { status: "" } })

// $inc - increment value
db.products.updateOne({ name: "Laptop" }, { $inc: { stock: -1 } })

// $push - add to array
db.users.updateOne({ name: "Alice" }, { $push: { hobbies: "swimming" } })

// $pull - remove from array
db.users.updateOne({ name: "Alice" }, { $pull: { hobbies: "gaming" } })

// $addToSet - add unique to array
db.users.updateOne({ name: "Alice" }, { $addToSet: { hobbies: "reading" } })`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Upsert</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Insert if not exists, update if exists
db.users.updateOne(
  { email: "new@example.com" },
  { $set: { name: "New User", age: 25 } },
  { upsert: true }
)`}
          </pre>
        </div>
      </>
    ),
  },

  mongodb_delete: {
    title: "Delete Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Deleting Documents
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">deleteOne()</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Delete a single document
db.users.deleteOne({ name: "Alice" })

// Result
{ acknowledged: true, deletedCount: 1 }`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">deleteMany()</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Delete multiple documents
db.users.deleteMany({ status: "inactive" })

// Delete all documents in collection
db.users.deleteMany({})

// Delete with condition
db.logs.deleteMany({ createdAt: { $lt: new Date("2024-01-01") } })`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Drop Collection</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Remove entire collection
db.users.drop()`}
          </pre>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 p-4 mb-4">
          <p className="font-semibold">Warning:</p>
          <p>Delete operations are permanent. Always test with find() first before deleting.</p>
        </div>
      </>
    ),
  },

  mongodb_pipeline: {
    title: "Aggregation Pipeline Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Aggregation Pipeline
        </h2>
        <p className="leading-relaxed mb-4">
          The aggregation pipeline processes documents through a sequence of stages, transforming data step by step.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Pipeline Concept</h3>
        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
          <p className="font-mono text-sm">
            Documents → Stage 1 → Stage 2 → Stage 3 → Results
          </p>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Basic Syntax</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`db.collection.aggregate([
  { $stage1: { ... } },
  { $stage2: { ... } },
  { $stage3: { ... } }
])`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Simple Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Calculate average price by category
db.products.aggregate([
  { $group: {
      _id: "$category",
      avgPrice: { $avg: "$price" },
      count: { $sum: 1 }
  }},
  { $sort: { avgPrice: -1 } }
])`}
          </pre>
        </div>
      </>
    ),
  },

  mongodb_stages: {
    title: "Common Aggregation Stages",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Aggregation Stages
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">$match - Filter Documents</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`{ $match: { status: "active", age: { $gte: 18 } } }`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">$group - Group and Aggregate</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`{ $group: {
    _id: "$category",
    total: { $sum: "$amount" },
    avg: { $avg: "$amount" },
    min: { $min: "$amount" },
    max: { $max: "$amount" },
    count: { $sum: 1 }
}}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">$project - Shape Output</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`{ $project: {
    name: 1,
    totalPrice: { $multiply: ["$price", "$quantity"] },
    _id: 0
}}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">$sort, $limit, $skip</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`{ $sort: { total: -1 } }
{ $limit: 10 }
{ $skip: 5 }`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">$lookup - Join Collections</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`{ $lookup: {
    from: "orders",
    localField: "_id",
    foreignField: "userId",
    as: "userOrders"
}}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">$unwind - Flatten Arrays</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`{ $unwind: "$items" }`}
          </pre>
        </div>
      </>
    ),
  },

  mongodb_agg_examples: {
    title: "Aggregation Examples",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Real-World Aggregation Examples
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Sales Report by Month</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: {
      _id: { $month: "$orderDate" },
      totalSales: { $sum: "$total" },
      orderCount: { $sum: 1 }
  }},
  { $sort: { _id: 1 } }
])`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Top Customers</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`db.orders.aggregate([
  { $group: {
      _id: "$customerId",
      totalSpent: { $sum: "$total" }
  }},
  { $sort: { totalSpent: -1 } },
  { $limit: 10 },
  { $lookup: {
      from: "customers",
      localField: "_id",
      foreignField: "_id",
      as: "customer"
  }},
  { $unwind: "$customer" },
  { $project: {
      customerName: "$customer.name",
      totalSpent: 1
  }}
])`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Product Inventory Analysis</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`db.products.aggregate([
  { $match: { stock: { $lt: 10 } } },
  { $project: {
      name: 1,
      stock: 1,
      reorderNeeded: { $subtract: [50, "$stock"] }
  }},
  { $sort: { stock: 1 } }
])`}
          </pre>
        </div>
      </>
    ),
  },

  mongodb_index_types: {
    title: "Index Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          MongoDB Index Types
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Single Field Index</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Ascending index
db.users.createIndex({ email: 1 })

// Descending index
db.products.createIndex({ price: -1 })`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Compound Index</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Index on multiple fields
db.orders.createIndex({ customerId: 1, orderDate: -1 })`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Text Index</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Full-text search index
db.articles.createIndex({ title: "text", content: "text" })

// Search usage
db.articles.find({ $text: { $search: "mongodb tutorial" } })`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Unique Index</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Ensure unique values
db.users.createIndex({ email: 1 }, { unique: true })`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">TTL Index</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Auto-delete after 24 hours
db.sessions.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 86400 }
)`}
          </pre>
        </div>
      </>
    ),
  },

  mongodb_index_mgmt: {
    title: "Index Management",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Managing Indexes
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">View Indexes</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// List all indexes
db.users.getIndexes()

// Index statistics
db.users.aggregate([{ $indexStats: {} }])`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Create Index with Options</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Named index
db.users.createIndex(
  { email: 1 },
  { name: "email_unique_idx", unique: true }
)

// Partial index
db.orders.createIndex(
  { status: 1 },
  { partialFilterExpression: { status: "pending" } }
)

// Background index creation
db.users.createIndex({ name: 1 }, { background: true })`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Drop Indexes</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Drop specific index
db.users.dropIndex("email_1")
db.users.dropIndex({ email: 1 })

// Drop all indexes (except _id)
db.users.dropIndexes()`}
          </pre>
        </div>
      </>
    ),
  },

  mongodb_performance: {
    title: "Performance Optimization",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Query Performance
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Explain Query</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Analyze query execution
db.users.find({ email: "test@example.com" }).explain("executionStats")

// Key metrics to check:
// - executionTimeMillis
// - totalDocsExamined
// - totalKeysExamined
// - stage: "IXSCAN" (good) vs "COLLSCAN" (bad)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Performance Tips</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Create indexes for frequently queried fields</li>
          <li>Use compound indexes for multi-field queries</li>
          <li>Avoid COLLSCAN (full collection scan)</li>
          <li>Use projection to return only needed fields</li>
          <li>Limit result sets with limit()</li>
          <li>Use covered queries when possible</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Covered Query</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Create compound index
db.users.createIndex({ email: 1, name: 1 })

// Covered query - all fields from index
db.users.find(
  { email: "test@example.com" },
  { email: 1, name: 1, _id: 0 }
)`}
          </pre>
        </div>
      </>
    ),
  },

  mongodb_schema: {
    title: "Schema Design",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Schema Design Patterns
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Embedding vs Referencing</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-purple-100 dark:bg-purple-900">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Embedding</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Referencing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Single query retrieval</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Requires $lookup</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Data duplication</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">No duplication</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">16MB document limit</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">No size limit</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Embedded Document</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Good for: one-to-few relationships
{
  _id: ObjectId("..."),
  name: "John Doe",
  addresses: [
    { type: "home", city: "New York" },
    { type: "work", city: "Boston" }
  ]
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Referenced Document</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Good for: one-to-many relationships
// users collection
{ _id: ObjectId("user1"), name: "John" }

// orders collection
{ _id: ObjectId("..."), userId: ObjectId("user1"), total: 99.99 }`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Schema Validation</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email"],
      properties: {
        name: { bsonType: "string" },
        email: { bsonType: "string", pattern: "^.+@.+$" },
        age: { bsonType: "int", minimum: 0 }
      }
    }
  }
})`}
          </pre>
        </div>
      </>
    ),
  },

  mongodb_relationships: {
    title: "Data Relationships",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Modeling Relationships
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">One-to-One</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Embedded (preferred)
{
  _id: ObjectId("..."),
  name: "John",
  profile: {
    bio: "Developer",
    website: "john.dev"
  }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">One-to-Many (Few)</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Embed in parent
{
  _id: ObjectId("..."),
  title: "Blog Post",
  comments: [
    { author: "Alice", text: "Great post!" },
    { author: "Bob", text: "Thanks!" }
  ]
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">One-to-Many (Many)</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Reference from child
// posts collection
{ _id: ObjectId("post1"), title: "Blog Post" }

// comments collection (thousands possible)
{ _id: ObjectId("..."), postId: ObjectId("post1"), text: "Great!" }`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Many-to-Many</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Array of references
// students
{ _id: ObjectId("s1"), name: "Alice", courseIds: [ObjectId("c1"), ObjectId("c2")] }

// courses
{ _id: ObjectId("c1"), title: "Math", studentIds: [ObjectId("s1"), ObjectId("s2")] }`}
          </pre>
        </div>
      </>
    ),
  },

  mongodb_replica: {
    title: "Replica Sets",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          MongoDB Replication
        </h2>
        <p className="leading-relaxed mb-4">
          A replica set is a group of MongoDB servers that maintain the same data set, providing redundancy and high availability.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Replica Set Components</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Primary:</strong> Receives all write operations</li>
          <li><strong>Secondary:</strong> Replicates data from primary</li>
          <li><strong>Arbiter:</strong> Votes in elections, holds no data</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Initialize Replica Set</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Connect to primary and initiate
rs.initiate({
  _id: "myReplicaSet",
  members: [
    { _id: 0, host: "mongo1:27017" },
    { _id: 1, host: "mongo2:27017" },
    { _id: 2, host: "mongo3:27017" }
  ]
})

// Check status
rs.status()`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Read Preferences</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Read from primary only (default)
db.users.find().readPref("primary")

// Read from secondary
db.users.find().readPref("secondary")

// Nearest member
db.users.find().readPref("nearest")`}
          </pre>
        </div>
      </>
    ),
  },

  mongodb_sharding: {
    title: "Sharding",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          MongoDB Sharding
        </h2>
        <p className="leading-relaxed mb-4">
          Sharding distributes data across multiple machines to support large datasets and high throughput operations.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Sharded Cluster Components</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Shard:</strong> Contains subset of sharded data</li>
          <li><strong>Config Servers:</strong> Store cluster metadata</li>
          <li><strong>Mongos:</strong> Query router for client apps</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Shard Key Selection</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Enable sharding on database
sh.enableSharding("mydb")

// Shard a collection
sh.shardCollection("mydb.users", { region: 1 })

// Hashed shard key (even distribution)
sh.shardCollection("mydb.orders", { orderId: "hashed" })`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Good Shard Key Characteristics</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>High cardinality (many unique values)</li>
          <li>Even distribution of writes</li>
          <li>Query isolation (queries hit few shards)</li>
          <li>Non-monotonic (avoid hotspots)</li>
        </ul>
      </>
    ),
  },

  mongodb_security: {
    title: "Security & Authentication",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          MongoDB Security
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Enable Authentication</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Create admin user
use admin
db.createUser({
  user: "admin",
  pwd: "securePassword123",
  roles: ["root"]
})

// Enable auth in mongod.conf
security:
  authorization: enabled`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Create Application User</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`use myapp
db.createUser({
  user: "appUser",
  pwd: "appPassword",
  roles: [
    { role: "readWrite", db: "myapp" }
  ]
})`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Built-in Roles</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>read:</strong> Read data on specified database</li>
          <li><strong>readWrite:</strong> Read and write data</li>
          <li><strong>dbAdmin:</strong> Administrative tasks</li>
          <li><strong>userAdmin:</strong> Manage users</li>
          <li><strong>root:</strong> Full access (use carefully)</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Connection with Authentication</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Connection string
mongodb://appUser:appPassword@localhost:27017/myapp

# mongosh with auth
mongosh -u appUser -p appPassword --authenticationDatabase myapp`}
          </pre>
        </div>
      </>
    ),
  },

  mongodb_nodejs: {
    title: "MongoDB with Node.js",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Using MongoDB with Node.js
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Installation</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`npm install mongodb`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Connect and CRUD</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function main() {
  await client.connect();
  const db = client.db("myapp");
  const users = db.collection("users");

  // Insert
  await users.insertOne({ name: "Alice", age: 25 });

  // Find
  const user = await users.findOne({ name: "Alice" });

  // Update
  await users.updateOne(
    { name: "Alice" },
    { $set: { age: 26 } }
  );

  // Delete
  await users.deleteOne({ name: "Alice" });

  await client.close();
}

main().catch(console.error);`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Using Mongoose ODM</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  age: Number
});

const User = mongoose.model('User', userSchema);

// Create
const user = new User({ name: "Bob", email: "bob@example.com" });
await user.save();

// Find
const users = await User.find({ age: { $gte: 18 } });`}
          </pre>
        </div>
      </>
    ),
  },

  mongodb_python: {
    title: "MongoDB with Python",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Using MongoDB with Python
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Installation</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`pip install pymongo`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Connect and CRUD</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")
db = client["myapp"]
users = db["users"]

# Insert
users.insert_one({"name": "Alice", "age": 25})

# Find
user = users.find_one({"name": "Alice"})
all_users = list(users.find({"age": {"$gte": 18}}))

# Update
users.update_one(
    {"name": "Alice"},
    {"$set": {"age": 26}}
)

# Delete
users.delete_one({"name": "Alice"})

client.close()`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Aggregation in Python</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`pipeline = [
    {"$match": {"status": "active"}},
    {"$group": {"_id": "$category", "total": {"$sum": "$amount"}}},
    {"$sort": {"total": -1}}
]

results = list(db.orders.aggregate(pipeline))`}
          </pre>
        </div>
      </>
    ),
  },

  mongodb_best_practices: {
    title: "MongoDB Best Practices",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Best Practices
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Schema Design</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Design schema based on query patterns</li>
          <li>Embed data for one-to-few relationships</li>
          <li>Reference for one-to-many with unbounded growth</li>
          <li>Avoid deeply nested documents</li>
          <li>Keep documents under 16MB limit</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Indexing</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Index fields used in queries and sorts</li>
          <li>Use compound indexes for multi-field queries</li>
          <li>Monitor index usage with explain()</li>
          <li>Remove unused indexes</li>
          <li>Consider index size impact on RAM</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Security</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Always enable authentication</li>
          <li>Use role-based access control</li>
          <li>Enable TLS/SSL for connections</li>
          <li>Limit network exposure</li>
          <li>Regular security audits</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Operations</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Use replica sets for high availability</li>
          <li>Regular backups with mongodump or snapshots</li>
          <li>Monitor performance with MongoDB tools</li>
          <li>Plan for capacity and scaling</li>
          <li>Keep MongoDB version up to date</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Connection Management</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Use connection pooling
const client = new MongoClient(uri, {
  maxPoolSize: 50,
  minPoolSize: 10,
  maxIdleTimeMS: 30000
});

// Reuse client instance across application
// Don't create new client for each request`}
          </pre>
        </div>
      </>
    ),
  },
};
