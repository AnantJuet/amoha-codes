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

// Main structure of the sidebar navigation for MQL
export const tutorialData: SidebarItem[] = [
  { label: "MQL HOME", href: "mql_home.asp" },
  { label: "MQL Intro", href: "mql_intro.asp" },
  {
    label: "CRUD Operations",
    href: "mql_crud.asp",
    isHeader: true,
    children: [
      { label: "CRUD Overview", href: "mql_crud.asp" },
      { label: "Insert Documents", href: "mql_insert.asp" },
      { label: "Query Documents", href: "mql_find.asp" },
      { label: "Update Documents", href: "mql_update.asp" },
      { label: "Delete Documents", href: "mql_delete.asp" },
    ]
  },
  {
    label: "Query Operators",
    href: "mql_query_operators.asp",
    isHeader: true,
    children: [
      { label: "Comparison Operators", href: "mql_query_operators.asp" },
      { label: "Logical Operators", href: "mql_logical.asp" },
      { label: "Element Operators", href: "mql_element.asp" },
      { label: "Array Operators", href: "mql_array.asp" },
    ]
  },
  {
    label: "Update Operators",
    href: "mql_update_operators.asp",
    isHeader: true,
    children: [
      { label: "Field Update Operators", href: "mql_update_operators.asp" },
      { label: "Array Update Operators", href: "mql_array_update.asp" },
    ]
  },
  {
    label: "Aggregation",
    href: "mql_aggregation.asp",
    isHeader: true,
    children: [
      { label: "Aggregation Pipeline", href: "mql_aggregation.asp" },
      { label: "Pipeline Stages", href: "mql_stages.asp" },
    ]
  },
  { label: "Indexing", href: "mql_indexing.asp" },
  { label: "Text Search", href: "mql_text_search.asp" },
  { label: "Geospatial Queries", href: "mql_geospatial.asp" },
  { label: "Transactions", href: "mql_transactions.asp" },
  { label: "Change Streams", href: "mql_change_streams.asp" },
];

// Content for each tutorial page
export const tutorialContent: Record<string, TopicContent> = {
  "mql_home.asp": {
    title: "MongoDB Query Language Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          MQL Tutorial
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>MongoDB Query Language (MQL)</strong> is the language used to interact with MongoDB databases. It provides a rich set of operators and commands for querying, updating, and managing data.
        </p>
        <p className="leading-relaxed mb-4">
          MQL uses a JSON-like syntax that is intuitive for developers working with document-oriented databases.
        </p>

        <h3 className="text-xl font-medium mb-3">What You'll Learn</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>CRUD operations (Create, Read, Update, Delete)</li>
          <li>Query and update operators</li>
          <li>Aggregation pipeline</li>
          <li>Indexing strategies</li>
          <li>Text search and geospatial queries</li>
          <li>Transactions and change streams</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">MQL Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Find all users older than 25 in New York
db.users.find({
  age: { $gt: 25 },
  "address.city": "New York"
})

// Result
[
  {
    "_id": ObjectId("507f1f77bcf86cd799439011"),
    "name": "John Doe",
    "age": 30,
    "address": {
      "city": "New York",
      "state": "NY"
    }
  }
]`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">MongoDB Shell vs Driver</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Feature</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">MongoDB Shell (mongosh)</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Drivers (Node.js, Python)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Interactive exploration, admin tasks</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Application integration</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Syntax</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">JavaScript-like</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Language-native (Python, JS, etc.)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Async</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Implicit</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Explicit (async/await)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "mql_intro.asp": {
    title: "MQL Introduction",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Introduction to MQL
        </h2>
        <p className="leading-relaxed mb-4">
          MongoDB Query Language (MQL) is designed to work with document-oriented data. Unlike SQL which uses tables and rows, MQL operates on collections and documents.
        </p>

        <h3 className="text-xl font-medium mb-3">Key Concepts</h3>
        <div className="grid gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">Database</h4>
            <p className="text-sm mt-2">A container for collections. MongoDB can have multiple databases.</p>
            <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded mt-2 inline-block">use myDatabase</code>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-700 dark:text-green-300">Collection</h4>
            <p className="text-sm mt-2">A group of documents, similar to a table in SQL.</p>
            <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded mt-2 inline-block">db.users, db.orders</code>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">Document</h4>
            <p className="text-sm mt-2">A JSON-like object (BSON) that stores data. Similar to a row.</p>
            <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded mt-2 inline-block">{`{ name: "John", age: 30 }`}</code>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">SQL to MQL Comparison</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">SQL</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">MQL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">SELECT * FROM users</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">db.users.find()</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">SELECT name FROM users WHERE age &gt; 25</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">db.users.find({`{age: {$gt: 25}}`}, {`{name: 1}`})</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">INSERT INTO users VALUES (...)</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">db.users.insertOne({`{...}`})</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">UPDATE users SET age = 30 WHERE name = 'John'</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">db.users.updateOne({`{name: "John"}`}, {`{$set: {age: 30}}`})</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">DELETE FROM users WHERE age &lt; 18</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">db.users.deleteMany({`{age: {$lt: 18}}`})</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3">Connecting to MongoDB</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// MongoDB Shell
mongosh "mongodb://localhost:27017/myDatabase"

// Node.js Driver
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');
await client.connect();
const db = client.db('myDatabase');

// Python Driver (pymongo)
from pymongo import MongoClient
client = MongoClient('mongodb://localhost:27017')
db = client.myDatabase`}
          </pre>
        </div>
      </>
    ),
  },

  "mql_crud.asp": {
    title: "CRUD Operations Overview",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CRUD Operations Overview
        </h2>
        <p className="leading-relaxed mb-4">
          CRUD stands for Create, Read, Update, and Delete - the four basic operations for managing data in MongoDB.
        </p>

        <h3 className="text-xl font-medium mb-3">CRUD Methods</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Operation</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Method</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Create</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">insertOne(), insertMany()</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Add new documents</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Read</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">find(), findOne()</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Query documents</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Update</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">updateOne(), updateMany(), replaceOne()</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Modify existing documents</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Delete</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">deleteOne(), deleteMany()</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Remove documents</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3">Quick Examples</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// CREATE - Insert a document
db.users.insertOne({
  name: "John Doe",
  email: "john@example.com",
  age: 30
})

// READ - Find documents
db.users.find({ age: { $gte: 18 } })

// UPDATE - Modify a document
db.users.updateOne(
  { email: "john@example.com" },
  { $set: { age: 31 } }
)

// DELETE - Remove a document
db.users.deleteOne({ email: "john@example.com" })`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Return Values</h3>
        <div className="grid gap-4 mb-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold">insertOne() Returns:</h4>
            <pre className="font-mono text-sm mt-2">
{`{
  acknowledged: true,
  insertedId: ObjectId("...")
}`}
            </pre>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold">updateOne() Returns:</h4>
            <pre className="font-mono text-sm mt-2">
{`{
  acknowledged: true,
  matchedCount: 1,
  modifiedCount: 1
}`}
            </pre>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold">deleteOne() Returns:</h4>
            <pre className="font-mono text-sm mt-2">
{`{
  acknowledged: true,
  deletedCount: 1
}`}
            </pre>
          </div>
        </div>
      </>
    ),
  },

  "mql_insert.asp": {
    title: "Insert Documents",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Insert Documents
        </h2>
        <p className="leading-relaxed mb-4">
          MongoDB provides two methods for inserting documents: insertOne() for single documents and insertMany() for multiple documents.
        </p>

        <h3 className="text-xl font-medium mb-3">insertOne()</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Insert a single document
db.users.insertOne({
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  },
  hobbies: ["reading", "gaming"],
  createdAt: new Date()
})

// Result
{
  acknowledged: true,
  insertedId: ObjectId("507f1f77bcf86cd799439011")
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">insertMany()</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Insert multiple documents
db.products.insertMany([
  { name: "Laptop", price: 999.99, category: "Electronics" },
  { name: "Coffee Mug", price: 12.99, category: "Kitchen" },
  { name: "Headphones", price: 149.99, category: "Electronics" }
])

// Result
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("..."),
    '1': ObjectId("..."),
    '2': ObjectId("...")
  }
}

// With ordered option (default: true)
// If ordered is true, stops on first error
// If ordered is false, continues inserting remaining documents
db.products.insertMany([...], { ordered: false })`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">The _id Field</h3>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
          <p className="text-sm">Every document in MongoDB must have an _id field which acts as the primary key. If not provided, MongoDB generates an ObjectId automatically.</p>
          <pre className="font-mono text-sm bg-white dark:bg-gray-800 p-2 rounded mt-2">
{`// Auto-generated ObjectId
{ _id: ObjectId("507f1f77bcf86cd799439011"), name: "John" }

// Custom _id
db.users.insertOne({ _id: "user_001", name: "John" })`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Best Practices</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Use insertMany() for bulk inserts - it's more efficient</li>
          <li>Set ordered: false for better performance when order doesn't matter</li>
          <li>Include timestamps (createdAt, updatedAt) for auditing</li>
          <li>Validate data before inserting to avoid schema issues</li>
        </ul>
      </>
    ),
  },

  "mql_find.asp": {
    title: "Query Documents",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Query Documents
        </h2>
        <p className="leading-relaxed mb-4">
          The find() and findOne() methods are used to query documents from a collection. They accept filter criteria and projection options.
        </p>

        <h3 className="text-xl font-medium mb-3">Basic Queries</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Find all documents
db.users.find()

// Find with filter
db.users.find({ age: 30 })

// Find one document
db.users.findOne({ email: "john@example.com" })

// Query nested fields
db.users.find({ "address.city": "New York" })

// Query array elements
db.users.find({ hobbies: "gaming" })  // Contains "gaming"
db.users.find({ hobbies: ["reading", "gaming"] })  // Exact match`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Projection</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Include specific fields (1 = include)
db.users.find({}, { name: 1, email: 1 })
// Result: { _id: ..., name: "John", email: "..." }

// Exclude specific fields (0 = exclude)
db.users.find({}, { password: 0, __v: 0 })

// Exclude _id (special case)
db.users.find({}, { name: 1, _id: 0 })
// Result: { name: "John" }

// Cannot mix inclusion and exclusion (except _id)
// INVALID: db.users.find({}, { name: 1, password: 0 })`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Cursor Methods</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Sort results
db.users.find().sort({ age: 1 })      // Ascending
db.users.find().sort({ age: -1 })     // Descending
db.users.find().sort({ lastName: 1, firstName: 1 })  // Multi-field

// Limit and skip
db.users.find().limit(10)             // First 10
db.users.find().skip(20).limit(10)    // Pagination

// Count
db.users.countDocuments({ age: { $gte: 18 } })

// Distinct values
db.users.distinct("city")

// Chaining
db.users
  .find({ status: "active" })
  .sort({ createdAt: -1 })
  .skip(0)
  .limit(10)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Common Patterns</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Check if exists</h4>
            <pre className="font-mono text-sm mt-2">
{`const exists = await db.users.findOne(
  { email: "john@example.com" }
);
if (exists) { ... }`}
            </pre>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Get by ID</h4>
            <pre className="font-mono text-sm mt-2">
{`db.users.findOne({
  _id: ObjectId("507f1f77...")
})`}
            </pre>
          </div>
        </div>
      </>
    ),
  },

  "mql_update.asp": {
    title: "Update Documents",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Update Documents
        </h2>
        <p className="leading-relaxed mb-4">
          MongoDB provides several methods for updating documents: updateOne(), updateMany(), and replaceOne(). Updates use special operators like $set, $inc, and $push.
        </p>

        <h3 className="text-xl font-medium mb-3">updateOne()</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Update a single document
db.users.updateOne(
  { email: "john@example.com" },  // Filter
  {
    $set: { age: 31, updatedAt: new Date() },
    $inc: { loginCount: 1 }
  }
)

// Result
{
  acknowledged: true,
  matchedCount: 1,
  modifiedCount: 1
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">updateMany()</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Update all matching documents
db.users.updateMany(
  { status: "inactive" },
  { $set: { status: "archived" } }
)

// Update all documents
db.products.updateMany(
  {},
  { $mul: { price: 1.1 } }  // Increase all prices by 10%
)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">replaceOne()</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Replace entire document (except _id)
db.users.replaceOne(
  { email: "john@example.com" },
  {
    name: "John Smith",
    email: "johnsmith@example.com",
    age: 32
  }
)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Upsert Option</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Upsert: Insert if not exists, update if exists
db.users.updateOne(
  { email: "new@example.com" },
  {
    $set: { name: "New User", email: "new@example.com" },
    $setOnInsert: { createdAt: new Date() }
  },
  { upsert: true }
)

// $setOnInsert only applies when inserting (not updating)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">findOneAndUpdate()</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Update and return the document
const result = db.users.findOneAndUpdate(
  { email: "john@example.com" },
  { $set: { lastLogin: new Date() } },
  {
    returnDocument: "after",  // Return updated document
    projection: { password: 0 }
  }
)

// Result is the updated document`}
          </pre>
        </div>
      </>
    ),
  },

  "mql_delete.asp": {
    title: "Delete Documents",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Delete Documents
        </h2>
        <p className="leading-relaxed mb-4">
          MongoDB provides deleteOne() and deleteMany() methods for removing documents from a collection.
        </p>

        <h3 className="text-xl font-medium mb-3">deleteOne()</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Delete first matching document
db.users.deleteOne({ email: "john@example.com" })

// Result
{
  acknowledged: true,
  deletedCount: 1
}

// Delete by ID
db.users.deleteOne({ _id: ObjectId("507f1f77bcf86cd799439011") })`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">deleteMany()</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Delete all matching documents
db.users.deleteMany({ status: "deleted" })

// Delete all documents in collection
db.logs.deleteMany({})  // Careful!

// Delete with date condition
db.sessions.deleteMany({
  expiresAt: { $lt: new Date() }
})`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">findOneAndDelete()</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Delete and return the deleted document
const deletedUser = db.users.findOneAndDelete(
  { email: "john@example.com" }
)

// Result is the deleted document
// { _id: ..., name: "John", email: "john@example.com" }`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Drop Collection</h3>
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-red-700 dark:text-red-300">Warning: Destructive Operations</h4>
          <pre className="font-mono text-sm bg-white dark:bg-gray-800 p-2 rounded mt-2">
{`// Drop entire collection (cannot be undone!)
db.oldData.drop()

// Drop database
db.dropDatabase()`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Soft Delete Pattern</h3>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-6">
          <p className="text-sm mb-2">Instead of deleting, mark documents as deleted for data recovery:</p>
          <pre className="font-mono text-sm bg-white dark:bg-gray-800 p-2 rounded">
{`// Soft delete
db.users.updateOne(
  { _id: userId },
  {
    $set: {
      deletedAt: new Date(),
      isDeleted: true
    }
  }
)

// Query non-deleted documents
db.users.find({ isDeleted: { $ne: true } })`}
          </pre>
        </div>
      </>
    ),
  },

  "mql_query_operators.asp": {
    title: "Comparison Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Comparison Operators
        </h2>
        <p className="leading-relaxed mb-4">
          MongoDB provides powerful comparison operators for querying documents based on field values.
        </p>

        <h3 className="text-xl font-medium mb-3">Comparison Operators Reference</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Operator</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Description</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$eq</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Equal to</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">{`{ age: { $eq: 30 } }`}</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$ne</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Not equal to</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">{`{ status: { $ne: "deleted" } }`}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$gt</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Greater than</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">{`{ price: { $gt: 100 } }`}</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$gte</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Greater than or equal</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">{`{ age: { $gte: 18 } }`}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$lt</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Less than</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">{`{ stock: { $lt: 10 } }`}</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$lte</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Less than or equal</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">{`{ rating: { $lte: 3 } }`}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$in</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Matches any in array</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">{`{ status: { $in: ["active", "pending"] } }`}</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$nin</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Matches none in array</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">{`{ role: { $nin: ["admin", "super"] } }`}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3">Usage Examples</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Range query
db.products.find({
  price: { $gte: 10, $lte: 100 }
})

// Date range
db.orders.find({
  createdAt: {
    $gte: ISODate("2024-01-01"),
    $lt: ISODate("2024-02-01")
  }
})

// Multiple values with $in
db.users.find({
  country: { $in: ["USA", "Canada", "UK"] }
})

// Exclude values with $nin
db.products.find({
  category: { $nin: ["discontinued", "archived"] }
})`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Combining Operators</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Complex query
db.products.find({
  category: "Electronics",
  price: { $gte: 100, $lte: 500 },
  stock: { $gt: 0 },
  brand: { $in: ["Apple", "Samsung", "Sony"] }
})`}
          </pre>
        </div>
      </>
    ),
  },

  "mql_logical.asp": {
    title: "Logical Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Logical Operators
        </h2>
        <p className="leading-relaxed mb-4">
          Logical operators allow you to combine multiple conditions in your queries.
        </p>

        <h3 className="text-xl font-medium mb-3">Logical Operators</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Operator</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$and</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">All conditions must match</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$or</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">At least one condition must match</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$not</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Negates the condition</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$nor</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">None of the conditions must match</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3">$and Operator</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Explicit $and
db.products.find({
  $and: [
    { price: { $gte: 100 } },
    { price: { $lte: 500 } },
    { inStock: true }
  ]
})

// Implicit $and (same field conditions in one object)
db.products.find({
  price: { $gte: 100, $lte: 500 },
  inStock: true
})`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">$or Operator</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Find products on sale OR low stock
db.products.find({
  $or: [
    { onSale: true },
    { stock: { $lt: 10 } }
  ]
})

// Combine $or with other conditions
db.products.find({
  category: "Electronics",
  $or: [
    { brand: "Apple" },
    { price: { $lt: 100 } }
  ]
})`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">$not and $nor Operators</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// $not - negate a condition
db.products.find({
  price: { $not: { $gt: 100 } }
})

// $nor - none of the conditions match
db.users.find({
  $nor: [
    { status: "banned" },
    { status: "deleted" }
  ]
})`}
          </pre>
        </div>
      </>
    ),
  },

  "mql_element.asp": {
    title: "Element Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Element Operators
        </h2>
        <p className="leading-relaxed mb-4">
          Element operators check for the presence or type of fields in documents.
        </p>

        <h3 className="text-xl font-medium mb-3">Element Operators</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Operator</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$exists</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Field exists or not</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$type</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Field is of specific BSON type</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3">$exists Operator</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Find documents where field exists
db.users.find({ phone: { $exists: true } })

// Find documents where field doesn't exist
db.users.find({ deletedAt: { $exists: false } })

// Combine with other conditions
db.users.find({
  phone: { $exists: true, $ne: null }
})`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">$type Operator</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Find documents where age is a number
db.users.find({ age: { $type: "number" } })

// Find documents where tags is an array
db.posts.find({ tags: { $type: "array" } })

// Multiple types
db.data.find({ value: { $type: ["string", "int"] } })`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">BSON Types</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Alias</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Double</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">"double" or 1</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">String</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">"string" or 2</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Object</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">"object" or 3</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Array</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">"array" or 4</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Boolean</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">"bool" or 8</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Date</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">"date" or 9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "mql_array.asp": {
    title: "Array Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Array Query Operators
        </h2>
        <p className="leading-relaxed mb-4">
          MongoDB provides powerful operators for querying arrays within documents.
        </p>

        <h3 className="text-xl font-medium mb-3">Array Query Operators</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Operator</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$all</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Array contains all specified elements</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$elemMatch</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">At least one element matches all conditions</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$size</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Array has specified size</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3">$all Operator</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Find posts with all specified tags
db.posts.find({
  tags: { $all: ["mongodb", "nosql", "database"] }
})

// Order doesn't matter, but all must be present`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">$elemMatch Operator</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Sample document
{
  name: "John",
  scores: [
    { subject: "math", score: 85 },
    { subject: "english", score: 92 }
  ]
}

// Find users with high math scores
db.students.find({
  scores: {
    $elemMatch: {
      subject: "math",
      score: { $gte: 80 }
    }
  }
})`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">$size Operator</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Find posts with exactly 3 tags
db.posts.find({ tags: { $size: 3 } })

// Note: $size doesn't accept ranges
// For range, use $expr with $size aggregation operator
db.posts.find({
  $expr: { $gte: [{ $size: "$tags" }, 3] }
})`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Array Index Queries</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Query by array index
db.posts.find({ "tags.0": "featured" })  // First element

// Query nested array objects by index
db.users.find({ "orders.0.status": "pending" })`}
          </pre>
        </div>
      </>
    ),
  },

  "mql_update_operators.asp": {
    title: "Field Update Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Field Update Operators
        </h2>
        <p className="leading-relaxed mb-4">
          Field update operators modify specific fields in documents without replacing the entire document.
        </p>

        <h3 className="text-xl font-medium mb-3">Common Update Operators</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Operator</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$set</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Set field value</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$unset</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Remove field</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$inc</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Increment by value</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$mul</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Multiply by value</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$rename</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Rename field</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$min/$max</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Update if value is less/greater</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$currentDate</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Set to current date</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3">Examples</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// $set - Set field values
db.users.updateOne(
  { _id: userId },
  { $set: { name: "John Smith", age: 31 } }
)

// $unset - Remove fields
db.users.updateOne(
  { _id: userId },
  { $unset: { temporaryField: "", oldData: "" } }
)

// $inc - Increment numeric values
db.products.updateOne(
  { _id: productId },
  { $inc: { views: 1, stock: -1 } }
)

// $mul - Multiply
db.products.updateMany(
  { category: "Sale" },
  { $mul: { price: 0.9 } }  // 10% discount
)

// $rename - Rename fields
db.users.updateMany(
  {},
  { $rename: { "username": "displayName" } }
)

// $min/$max - Conditional update
db.stats.updateOne(
  { _id: statId },
  {
    $min: { lowestScore: 85 },  // Only update if 85 < current
    $max: { highestScore: 98 }  // Only update if 98 > current
  }
)

// $currentDate - Set current timestamp
db.users.updateOne(
  { _id: userId },
  {
    $set: { status: "active" },
    $currentDate: {
      lastModified: true,
      "activity.lastLogin": { $type: "timestamp" }
    }
  }
)`}
          </pre>
        </div>
      </>
    ),
  },

  "mql_array_update.asp": {
    title: "Array Update Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Array Update Operators
        </h2>
        <p className="leading-relaxed mb-4">
          MongoDB provides specialized operators for updating arrays within documents.
        </p>

        <h3 className="text-xl font-medium mb-3">Array Update Operators</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Operator</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$push</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Add element to array</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$pull</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Remove matching elements</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$addToSet</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Add element if not exists</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$pop</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Remove first or last element</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Update first matching element</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$[]</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Update all elements</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3">$push Examples</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Add single element
db.users.updateOne(
  { _id: userId },
  { $push: { tags: "premium" } }
)

// Add multiple elements with $each
db.users.updateOne(
  { _id: userId },
  { $push: { tags: { $each: ["vip", "verified"] } } }
)

// Add and keep only last N elements with $slice
db.users.updateOne(
  { _id: userId },
  {
    $push: {
      recentOrders: {
        $each: [{ orderId: "123", total: 99.99 }],
        $slice: -10  // Keep last 10
      }
    }
  }
)

// Add and sort
db.users.updateOne(
  { _id: userId },
  {
    $push: {
      scores: {
        $each: [{ score: 95, date: new Date() }],
        $sort: { score: -1 },
        $slice: 5  // Keep top 5
      }
    }
  }
)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">$pull and $addToSet</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Remove specific value
db.users.updateOne(
  { _id: userId },
  { $pull: { tags: "temporary" } }
)

// Remove matching condition
db.users.updateOne(
  { _id: userId },
  { $pull: { orders: { status: "cancelled" } } }
)

// Add only if not exists
db.users.updateOne(
  { _id: userId },
  { $addToSet: { interests: "coding" } }
)

// Add multiple unique values
db.users.updateOne(
  { _id: userId },
  { $addToSet: { interests: { $each: ["coding", "music"] } } }
)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Positional Operators</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// $ - Update first matching element
db.orders.updateOne(
  { _id: orderId, "items.productId": productId },
  { $set: { "items.$.quantity": 5 } }
)

// $[] - Update all array elements
db.users.updateOne(
  { _id: userId },
  { $inc: { "scores.$[].value": 10 } }
)

// $[<identifier>] - Update elements matching condition
db.users.updateOne(
  { _id: userId },
  { $set: { "grades.$[elem].passed": true } },
  { arrayFilters: [{ "elem.score": { $gte: 60 } }] }
)`}
          </pre>
        </div>
      </>
    ),
  },

  "mql_aggregation.asp": {
    title: "Aggregation Pipeline",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Aggregation Pipeline
        </h2>
        <p className="leading-relaxed mb-4">
          The aggregation pipeline is a framework for data transformation and analysis. Documents pass through a sequence of stages that transform them.
        </p>

        <h3 className="text-xl font-medium mb-3">Pipeline Concept</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6">
          <div className="flex items-center justify-center space-x-2 text-sm">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded">Collection</div>
            <span>-&gt;</span>
            <div className="bg-green-100 dark:bg-green-900 p-2 rounded">$match</div>
            <span>-&gt;</span>
            <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded">$group</div>
            <span>-&gt;</span>
            <div className="bg-orange-100 dark:bg-orange-900 p-2 rounded">$sort</div>
            <span>-&gt;</span>
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded">Results</div>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">Basic Aggregation Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Calculate total sales by category
db.orders.aggregate([
  // Stage 1: Filter to completed orders
  { $match: { status: "completed" } },

  // Stage 2: Group by category and calculate totals
  {
    $group: {
      _id: "$category",
      totalSales: { $sum: "$amount" },
      orderCount: { $sum: 1 },
      avgOrderValue: { $avg: "$amount" }
    }
  },

  // Stage 3: Sort by total sales descending
  { $sort: { totalSales: -1 } },

  // Stage 4: Limit to top 10
  { $limit: 10 }
])`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Common Aggregation Stages</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Stage</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$match</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Filter documents</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$group</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Group and aggregate</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$project</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Reshape documents</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$sort</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Order results</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$lookup</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Join with another collection</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">$unwind</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Deconstruct array field</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3">$lookup (Join) Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Join orders with user information
db.orders.aggregate([
  {
    $lookup: {
      from: "users",           // Collection to join
      localField: "userId",    // Field in orders
      foreignField: "_id",     // Field in users
      as: "userInfo"           // Output array field
    }
  },
  { $unwind: "$userInfo" },  // Convert array to object
  {
    $project: {
      orderId: 1,
      amount: 1,
      "user.name": "$userInfo.name",
      "user.email": "$userInfo.email"
    }
  }
])`}
          </pre>
        </div>
      </>
    ),
  },

  "mql_stages.asp": {
    title: "Aggregation Pipeline Stages",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Pipeline Stages Deep Dive
        </h2>

        <h3 className="text-xl font-medium mb-3">$project Stage</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`db.users.aggregate([
  {
    $project: {
      // Include fields
      name: 1,
      email: 1,

      // Computed fields
      fullName: { $concat: ["$firstName", " ", "$lastName"] },

      // Conditional fields
      status: {
        $cond: {
          if: { $gte: ["$age", 18] },
          then: "adult",
          else: "minor"
        }
      },

      // Extract from date
      year: { $year: "$createdAt" },
      month: { $month: "$createdAt" }
    }
  }
])`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">$group Accumulators</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`db.sales.aggregate([
  {
    $group: {
      _id: "$category",

      // Count
      count: { $sum: 1 },

      // Sum values
      totalRevenue: { $sum: "$amount" },

      // Averages
      avgPrice: { $avg: "$price" },

      // Min/Max
      minPrice: { $min: "$price" },
      maxPrice: { $max: "$price" },

      // First/Last (requires prior sort)
      firstSale: { $first: "$date" },
      lastSale: { $last: "$date" },

      // Collect into array
      products: { $push: "$productName" },

      // Collect unique values
      uniqueBrands: { $addToSet: "$brand" }
    }
  }
])`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">$unwind Stage</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Document: { name: "John", tags: ["a", "b", "c"] }

db.users.aggregate([
  { $unwind: "$tags" }
])

// Results in 3 documents:
// { name: "John", tags: "a" }
// { name: "John", tags: "b" }
// { name: "John", tags: "c" }

// With preserveNullAndEmptyArrays
{ $unwind: { path: "$tags", preserveNullAndEmptyArrays: true } }`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">$facet Stage</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Run multiple pipelines on same data
db.products.aggregate([
  {
    $facet: {
      // Pipeline 1: Category breakdown
      byCategory: [
        { $group: { _id: "$category", count: { $sum: 1 } } }
      ],

      // Pipeline 2: Price ranges
      priceRanges: [
        {
          $bucket: {
            groupBy: "$price",
            boundaries: [0, 50, 100, 200, 500],
            default: "500+",
            output: { count: { $sum: 1 } }
          }
        }
      ],

      // Pipeline 3: Total stats
      totalStats: [
        {
          $group: {
            _id: null,
            total: { $sum: 1 },
            avgPrice: { $avg: "$price" }
          }
        }
      ]
    }
  }
])`}
          </pre>
        </div>
      </>
    ),
  },

  "mql_indexing.asp": {
    title: "MongoDB Indexing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          MongoDB Indexing
        </h2>
        <p className="leading-relaxed mb-4">
          Indexes support efficient query execution by avoiding full collection scans. Without indexes, MongoDB must scan every document to find matches.
        </p>

        <h3 className="text-xl font-medium mb-3">Index Types</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Single field index
db.users.createIndex({ email: 1 })

// Compound index
db.orders.createIndex({ customerId: 1, createdAt: -1 })

// Unique index
db.users.createIndex({ email: 1 }, { unique: true })

// Text index
db.articles.createIndex({ title: "text", content: "text" })

// Geospatial index
db.locations.createIndex({ coordinates: "2dsphere" })

// TTL index (auto-delete)
db.sessions.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 3600 }
)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Index Management</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// List all indexes
db.users.getIndexes()

// Drop specific index
db.users.dropIndex("email_1")

// Drop all indexes except _id
db.users.dropIndexes()

// Create in background
db.users.createIndex(
  { email: 1 },
  { background: true }
)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Query Execution Analysis</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Explain query execution
db.users.find({ email: "john@example.com" }).explain("executionStats")

// Key metrics to check:
// - totalDocsExamined: Documents scanned
// - nReturned: Documents returned
// - executionTimeMillis: Query time
// - stage: COLLSCAN (bad) vs IXSCAN (good)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Index Best Practices</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Create indexes for frequently queried fields</li>
          <li>Use compound indexes for queries with multiple conditions</li>
          <li>Order compound index fields by equality, sort, range (ESR rule)</li>
          <li>Monitor index usage with $indexStats</li>
          <li>Remove unused indexes to improve write performance</li>
        </ul>
      </>
    ),
  },

  "mql_text_search.asp": {
    title: "Text Search",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Text Search
        </h2>
        <p className="leading-relaxed mb-4">
          MongoDB provides text search capabilities through text indexes and the $text operator.
        </p>

        <h3 className="text-xl font-medium mb-3">Creating Text Index</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Create text index on single field
db.articles.createIndex({ content: "text" })

// Create text index on multiple fields
db.articles.createIndex({
  title: "text",
  content: "text",
  tags: "text"
})

// With weights (title more important)
db.articles.createIndex(
  { title: "text", content: "text" },
  { weights: { title: 10, content: 1 } }
)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Text Search Queries</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Basic text search
db.articles.find({ $text: { $search: "mongodb" } })

// Search for phrase
db.articles.find({ $text: { $search: "\"mongodb tutorial\"" } })

// Multiple terms (OR)
db.articles.find({ $text: { $search: "mongodb nosql database" } })

// Exclude terms
db.articles.find({ $text: { $search: "mongodb -sql" } })

// Get text score
db.articles.find(
  { $text: { $search: "mongodb" } },
  { score: { $meta: "textScore" } }
).sort({ score: { $meta: "textScore" } })`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Text Search Options</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Case-sensitive search
db.articles.find({
  $text: {
    $search: "MongoDB",
    $caseSensitive: true
  }
})

// Diacritic-sensitive search
db.articles.find({
  $text: {
    $search: "cafe",
    $diacriticSensitive: true
  }
})

// Language-specific
db.articles.find({
  $text: {
    $search: "running",
    $language: "en"
  }
})`}
          </pre>
        </div>
      </>
    ),
  },

  "mql_geospatial.asp": {
    title: "Geospatial Queries",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Geospatial Queries
        </h2>
        <p className="leading-relaxed mb-4">
          MongoDB supports geospatial data and queries, allowing you to store location data and perform proximity searches.
        </p>

        <h3 className="text-xl font-medium mb-3">GeoJSON Format</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Point
{
  location: {
    type: "Point",
    coordinates: [-73.97, 40.77]  // [longitude, latitude]
  }
}

// Polygon
{
  area: {
    type: "Polygon",
    coordinates: [[
      [-73.98, 40.76],
      [-73.96, 40.76],
      [-73.96, 40.78],
      [-73.98, 40.78],
      [-73.98, 40.76]  // Close the polygon
    ]]
  }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Creating Geospatial Index</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// 2dsphere index for GeoJSON data
db.places.createIndex({ location: "2dsphere" })

// Compound geospatial index
db.restaurants.createIndex({ location: "2dsphere", cuisine: 1 })`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Geospatial Queries</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Find places near a point
db.places.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [-73.97, 40.77]
      },
      $maxDistance: 5000  // meters
    }
  }
})

// Find places within a polygon
db.places.find({
  location: {
    $geoWithin: {
      $geometry: {
        type: "Polygon",
        coordinates: [[...]]
      }
    }
  }
})

// Find places within radius (circle)
db.places.find({
  location: {
    $geoWithin: {
      $centerSphere: [
        [-73.97, 40.77],  // Center
        5 / 6378.1       // Radius in radians (5km)
      ]
    }
  }
})

// Aggregation with $geoNear
db.places.aggregate([
  {
    $geoNear: {
      near: { type: "Point", coordinates: [-73.97, 40.77] },
      distanceField: "distance",
      maxDistance: 5000,
      spherical: true
    }
  }
])`}
          </pre>
        </div>
      </>
    ),
  },

  "mql_transactions.asp": {
    title: "MongoDB Transactions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          MongoDB Transactions
        </h2>
        <p className="leading-relaxed mb-4">
          MongoDB supports multi-document ACID transactions, allowing you to group multiple operations that either all succeed or all fail.
        </p>

        <h3 className="text-xl font-medium mb-3">Transaction Example (Node.js)</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const session = client.startSession();

try {
  session.startTransaction();

  // Transfer money between accounts
  await db.accounts.updateOne(
    { _id: fromAccountId },
    { $inc: { balance: -amount } },
    { session }
  );

  await db.accounts.updateOne(
    { _id: toAccountId },
    { $inc: { balance: amount } },
    { session }
  );

  // Record the transaction
  await db.transactions.insertOne({
    from: fromAccountId,
    to: toAccountId,
    amount,
    date: new Date()
  }, { session });

  await session.commitTransaction();
  console.log('Transaction committed');

} catch (error) {
  await session.abortTransaction();
  console.error('Transaction aborted:', error);
} finally {
  session.endSession();
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Transaction with Callback API</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`await client.withSession(async (session) => {
  await session.withTransaction(async () => {
    await db.inventory.updateOne(
      { item: "product1", qty: { $gte: 10 } },
      { $inc: { qty: -10 } },
      { session }
    );

    await db.orders.insertOne({
      item: "product1",
      qty: 10,
      status: "pending"
    }, { session });
  });
});`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Transaction Requirements</h3>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-6">
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Requires replica set or sharded cluster</li>
            <li>WiredTiger storage engine required</li>
            <li>Transaction timeout: 60 seconds default</li>
            <li>Maximum transaction size: 16MB oplog entry</li>
            <li>DDL operations not allowed in transactions</li>
          </ul>
        </div>
      </>
    ),
  },

  "mql_change_streams.asp": {
    title: "Change Streams",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Change Streams
        </h2>
        <p className="leading-relaxed mb-4">
          Change streams allow applications to access real-time data changes without the complexity of tailing the oplog.
        </p>

        <h3 className="text-xl font-medium mb-3">Basic Change Stream</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Watch a collection
const changeStream = db.orders.watch();

changeStream.on('change', (change) => {
  console.log('Change detected:', change);

  // change.operationType: 'insert', 'update', 'delete', etc.
  // change.fullDocument: The document (for insert/update)
  // change.documentKey: { _id: ... }
  // change.updateDescription: { updatedFields, removedFields }
});

// Don't forget to close
changeStream.close();`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Filtered Change Stream</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Filter for specific operations
const pipeline = [
  {
    $match: {
      operationType: { $in: ['insert', 'update'] },
      'fullDocument.status': 'urgent'
    }
  },
  {
    $project: {
      documentKey: 1,
      fullDocument: 1,
      operationType: 1
    }
  }
];

const changeStream = db.orders.watch(pipeline);

// Resume from a token
const changeStream = db.orders.watch([], {
  resumeAfter: resumeToken
});`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Use Cases</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Real-time Notifications</h4>
            <p className="text-sm mt-2">Push updates to users when data changes</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Data Sync</h4>
            <p className="text-sm mt-2">Keep caches or search indexes updated</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Audit Logging</h4>
            <p className="text-sm mt-2">Track all changes for compliance</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">ETL Pipelines</h4>
            <p className="text-sm mt-2">Trigger data processing on changes</p>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">Change Event Structure</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`{
  "_id": { "_data": "..." },  // Resume token
  "operationType": "insert",
  "clusterTime": Timestamp(...),
  "ns": {
    "db": "mydb",
    "coll": "orders"
  },
  "documentKey": {
    "_id": ObjectId("...")
  },
  "fullDocument": {
    "_id": ObjectId("..."),
    "item": "laptop",
    "qty": 1
  }
}`}
          </pre>
        </div>
      </>
    ),
  },
};
