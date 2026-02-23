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

// Main structure of the sidebar navigation for GraphQL
export const tutorialData: SidebarItem[] = [
  { label: "GraphQL HOME", href: "graphql_home.asp" },
  { label: "GraphQL Intro", href: "graphql_intro.asp" },
  { label: "GraphQL vs REST", href: "graphql_vs_rest.asp" },
  {
    label: "Schema & Types",
    href: "graphql_schema.asp",
    isHeader: true,
    children: [
      { label: "Schema Definition", href: "graphql_schema.asp" },
      { label: "Types", href: "graphql_types.asp" },
    ]
  },
  {
    label: "Operations",
    href: "graphql_queries.asp",
    isHeader: true,
    children: [
      { label: "Queries", href: "graphql_queries.asp" },
      { label: "Mutations", href: "graphql_mutations.asp" },
      { label: "Subscriptions", href: "graphql_subscriptions.asp" },
    ]
  },
  {
    label: "Server Side",
    href: "graphql_resolvers.asp",
    isHeader: true,
    children: [
      { label: "Resolvers", href: "graphql_resolvers.asp" },
      { label: "DataLoaders", href: "graphql_dataloaders.asp" },
    ]
  },
  { label: "Authentication", href: "graphql_auth.asp" },
  { label: "Error Handling", href: "graphql_errors.asp" },
  { label: "Best Practices", href: "graphql_bestpractices.asp" },
  { label: "Tools & Ecosystem", href: "graphql_tools.asp" },
];

// Content for each tutorial page
export const tutorialContent: Record<string, TopicContent> = {
  "graphql_home.asp": {
    title: "GraphQL Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          GraphQL Tutorial
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>GraphQL</strong> is a query language for APIs and a runtime for executing those queries with your existing data. It provides a complete and understandable description of the data in your API.
        </p>
        <p className="leading-relaxed mb-4">
          GraphQL was developed by Facebook in 2012 and open-sourced in 2015. It has since become an industry standard for building modern APIs.
        </p>

        <h3 className="text-xl font-medium mb-3">Why Learn GraphQL?</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Request exactly the data you need</li>
          <li>Get multiple resources in a single request</li>
          <li>Strongly typed schema</li>
          <li>Real-time updates with subscriptions</li>
          <li>Excellent developer experience</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">GraphQL Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <p className="font-semibold mb-2">Query:</p>
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`query {
  user(id: "123") {
    name
    email
    posts {
      title
      likes
    }
  }
}`}
          </pre>
          <p className="font-semibold mb-2 mt-4">Response:</p>
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`{
  "data": {
    "user": {
      "name": "John Doe",
      "email": "john@example.com",
      "posts": [
        { "title": "GraphQL Basics", "likes": 42 },
        { "title": "Advanced Queries", "likes": 28 }
      ]
    }
  }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Companies Using GraphQL</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Company</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Facebook</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Mobile apps, news feed</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">GitHub</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">API v4</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Shopify</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Storefront API</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Twitter</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">API v2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "graphql_intro.asp": {
    title: "GraphQL Introduction",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is GraphQL?
        </h2>
        <p className="leading-relaxed mb-4">
          GraphQL is a query language for your API, and a server-side runtime for executing queries using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.
        </p>

        <h3 className="text-xl font-medium mb-3">Core Concepts</h3>
        <div className="grid gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">Schema</h4>
            <p className="text-sm mt-2">A GraphQL schema describes the data available in your API. It defines types, fields, and the relationships between them.</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-700 dark:text-green-300">Types</h4>
            <p className="text-sm mt-2">GraphQL uses a strong type system. Every field has a type, which can be a scalar (Int, String, Boolean) or a custom object type.</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">Resolvers</h4>
            <p className="text-sm mt-2">Functions that return the data for each field in your schema. They connect your schema to your data sources.</p>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Declarative Data Fetching:</strong> Clients specify exactly what data they need</li>
          <li><strong>Single Endpoint:</strong> All queries go to one endpoint (typically /graphql)</li>
          <li><strong>Strongly Typed:</strong> Schema defines all possible data and operations</li>
          <li><strong>Introspection:</strong> APIs are self-documenting</li>
          <li><strong>Hierarchical:</strong> Queries match the shape of the response</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">How GraphQL Works</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl mb-2">1. Define Schema</div>
              <p className="text-sm">Describe your data types and operations</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl mb-2">2. Write Resolvers</div>
              <p className="text-sm">Implement data fetching logic</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl mb-2">3. Execute Queries</div>
              <p className="text-sm">Clients request specific data</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">GraphQL Operations</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Operation</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Purpose</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Query</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Read data</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Get user profile</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Mutation</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Write/modify data</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Create new post</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Subscription</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Real-time updates</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">New message notifications</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "graphql_vs_rest.asp": {
    title: "GraphQL vs REST",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          GraphQL vs REST
        </h2>
        <p className="leading-relaxed mb-4">
          GraphQL and REST are both approaches to building APIs, but they have fundamental differences in how they work and when to use each.
        </p>

        <h3 className="text-xl font-medium mb-3">Key Differences</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Aspect</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">REST</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">GraphQL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Endpoints</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Multiple endpoints</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Single endpoint</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Data Fetching</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Server decides response shape</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Client specifies data needed</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Over-fetching</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Common problem</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Eliminated</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Under-fetching</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Requires multiple requests</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Single request suffices</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Versioning</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Usually URL-based (v1, v2)</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Schema evolution</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Caching</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">HTTP caching built-in</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Requires custom implementation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3">Data Fetching Comparison</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg">
            <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">REST (Multiple Requests)</h4>
            <pre className="font-mono text-sm bg-white dark:bg-[#111827] p-2 rounded">
{`GET /users/123
GET /users/123/posts
GET /users/123/followers

// 3 HTTP requests needed`}
            </pre>
          </div>
          <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">GraphQL (Single Request)</h4>
            <pre className="font-mono text-sm bg-white dark:bg-[#111827] p-2 rounded">
{`query {
  user(id: "123") {
    name
    posts { title }
    followers { name }
  }
}
// 1 HTTP request`}
            </pre>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">Over-fetching Example</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 dark:text-red-300">REST Over-fetching</h4>
            <pre className="font-mono text-sm bg-white dark:bg-[#111827] p-2 rounded mt-2">
{`GET /users/123
{
  "id": 123,
  "name": "John",
  "email": "john@example.com",
  "address": {...},
  "phone": "...",
  "preferences": {...}
  // Only needed name!
}`}
            </pre>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-700 dark:text-green-300">GraphQL Precise</h4>
            <pre className="font-mono text-sm bg-white dark:bg-[#111827] p-2 rounded mt-2">
{`query { user(id: "123") { name } }
{
  "data": {
    "user": {
      "name": "John"
    }
  }
}
// Exactly what we asked for`}
            </pre>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">When to Use Each</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">Use REST When:</h4>
            <ul className="text-sm mt-2 list-disc list-inside">
              <li>Simple CRUD operations</li>
              <li>File uploads are primary use case</li>
              <li>HTTP caching is critical</li>
              <li>Team is familiar with REST</li>
              <li>Public API with simple use cases</li>
            </ul>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">Use GraphQL When:</h4>
            <ul className="text-sm mt-2 list-disc list-inside">
              <li>Complex, nested data requirements</li>
              <li>Multiple clients with different needs</li>
              <li>Rapid frontend development</li>
              <li>Real-time updates needed</li>
              <li>Bandwidth is a concern (mobile)</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },

  "graphql_schema.asp": {
    title: "GraphQL Schema",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          GraphQL Schema Definition
        </h2>
        <p className="leading-relaxed mb-4">
          The GraphQL schema is the core of any GraphQL server. It defines the types available in your API and the relationships between them using the Schema Definition Language (SDL).
        </p>

        <h3 className="text-xl font-medium mb-3">Basic Schema Structure</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Type definitions
type User {
  id: ID!
  name: String!
  email: String!
  age: Int
  posts: [Post!]!
  friends: [User!]
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  comments: [Comment!]!
  createdAt: String!
  published: Boolean!
}

type Comment {
  id: ID!
  text: String!
  author: User!
  post: Post!
}

# Root Query type - entry point for reading data
type Query {
  user(id: ID!): User
  users: [User!]!
  post(id: ID!): Post
  posts(limit: Int, offset: Int): [Post!]!
}

# Root Mutation type - entry point for writing data
type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User
  deleteUser(id: ID!): Boolean!
  createPost(input: CreatePostInput!): Post!
}

# Input types for mutations
input CreateUserInput {
  name: String!
  email: String!
  age: Int
}

input UpdateUserInput {
  name: String
  email: String
  age: Int
}

input CreatePostInput {
  title: String!
  content: String!
  authorId: ID!
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Schema Components</h3>
        <div className="grid gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">Object Types</h4>
            <p className="text-sm mt-2">Define the structure of your data. Each type has fields with their own types.</p>
            <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded mt-2 inline-block">
              type User {`{ name: String!, email: String! }`}
            </code>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-700 dark:text-green-300">Query Type</h4>
            <p className="text-sm mt-2">The root type that defines all available read operations.</p>
            <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded mt-2 inline-block">
              type Query {`{ users: [User!]!, user(id: ID!): User }`}
            </code>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">Mutation Type</h4>
            <p className="text-sm mt-2">The root type that defines all available write operations.</p>
            <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded mt-2 inline-block">
              type Mutation {`{ createUser(input: CreateUserInput!): User! }`}
            </code>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-700 dark:text-orange-300">Input Types</h4>
            <p className="text-sm mt-2">Special types used for mutation arguments. Cannot have arguments on their fields.</p>
            <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded mt-2 inline-block">
              input CreateUserInput {`{ name: String!, email: String! }`}
            </code>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">Type Modifiers</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Syntax</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Meaning</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">String</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Nullable string</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Can be "hello" or null</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">String!</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Non-null string</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Must be a string, never null</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">[String]</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Nullable list of nullable strings</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">null, [], ["a", null]</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">[String!]!</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Non-null list of non-null strings</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">[], ["a", "b"] (never null)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "graphql_types.asp": {
    title: "GraphQL Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          GraphQL Types
        </h2>
        <p className="leading-relaxed mb-4">
          GraphQL is a strongly typed language. Every piece of data has a type, and the schema enforces type safety across your entire API.
        </p>

        <h3 className="text-xl font-medium mb-3">Scalar Types</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Description</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">Int</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">32-bit signed integer</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">42, -17</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">Float</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Double-precision floating-point</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">3.14, -0.5</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">String</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">UTF-8 character sequence</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">"Hello World"</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">Boolean</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">true or false</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">true, false</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">ID</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Unique identifier (serialized as String)</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">"abc123", "507f1f77bcf86cd799439011"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3">Custom Scalar Types</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Define custom scalars
scalar Date
scalar DateTime
scalar JSON
scalar Email
scalar URL

type Event {
  id: ID!
  name: String!
  date: Date!
  startTime: DateTime!
  metadata: JSON
  contactEmail: Email!
  website: URL
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Enum Types</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`enum Role {
  ADMIN
  USER
  GUEST
}

enum PostStatus {
  DRAFT
  PUBLISHED
  ARCHIVED
}

type User {
  id: ID!
  name: String!
  role: Role!
}

type Post {
  id: ID!
  title: String!
  status: PostStatus!
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Interface Types</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`interface Node {
  id: ID!
}

interface Timestamped {
  createdAt: DateTime!
  updatedAt: DateTime!
}

type User implements Node & Timestamped {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type Post implements Node & Timestamped {
  id: ID!
  title: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Union Types</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`type Photo {
  id: ID!
  url: String!
  width: Int!
  height: Int!
}

type Video {
  id: ID!
  url: String!
  duration: Int!
  thumbnail: String!
}

type Article {
  id: ID!
  title: String!
  content: String!
}

# Union of different media types
union SearchResult = Photo | Video | Article

type Query {
  search(query: String!): [SearchResult!]!
}

# Query with inline fragments
query {
  search(query: "vacation") {
    ... on Photo {
      url
      width
      height
    }
    ... on Video {
      url
      duration
    }
    ... on Article {
      title
      content
    }
  }
}`}
          </pre>
        </div>
      </>
    ),
  },

  "graphql_queries.asp": {
    title: "GraphQL Queries",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          GraphQL Queries
        </h2>
        <p className="leading-relaxed mb-4">
          Queries are used to fetch data from a GraphQL server. They allow clients to specify exactly what data they need, reducing over-fetching and under-fetching.
        </p>

        <h3 className="text-xl font-medium mb-3">Basic Query</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Simple query
query {
  user(id: "123") {
    name
    email
  }
}

# Response
{
  "data": {
    "user": {
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Query with Arguments</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Query with multiple arguments
query {
  posts(limit: 10, offset: 0, orderBy: "createdAt") {
    id
    title
    author {
      name
    }
  }
}

# Enum arguments
query {
  users(role: ADMIN) {
    name
    email
  }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Query Variables</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Query definition with variables
query GetUser($userId: ID!, $includePosts: Boolean!) {
  user(id: $userId) {
    name
    email
    posts @include(if: $includePosts) {
      title
    }
  }
}

# Variables (sent as JSON)
{
  "userId": "123",
  "includePosts": true
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Aliases and Fragments</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Aliases - rename fields in response
query {
  admin: user(id: "1") {
    name
    email
  }
  guest: user(id: "2") {
    name
    email
  }
}

# Fragments - reusable field sets
fragment UserFields on User {
  id
  name
  email
  avatar
}

query {
  currentUser {
    ...UserFields
    role
  }
  users {
    ...UserFields
  }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Directives</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Directive</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Purpose</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">@include</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Include field if condition is true</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">posts @include(if: $withPosts)</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">@skip</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Skip field if condition is true</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">email @skip(if: $hideEmail)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">@deprecated</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Mark field as deprecated</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono text-sm">oldField @deprecated(reason: "Use newField")</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3">Nested Queries</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`query {
  user(id: "123") {
    name
    posts {
      title
      comments {
        text
        author {
          name
          avatar
        }
      }
    }
    followers {
      name
      posts {
        title
      }
    }
  }
}`}
          </pre>
        </div>
      </>
    ),
  },

  "graphql_mutations.asp": {
    title: "GraphQL Mutations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          GraphQL Mutations
        </h2>
        <p className="leading-relaxed mb-4">
          Mutations are used to create, update, or delete data. While queries are for reading, mutations modify server-side data and can return the modified data.
        </p>

        <h3 className="text-xl font-medium mb-3">Basic Mutations</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create mutation
mutation {
  createUser(input: {
    name: "John Doe"
    email: "john@example.com"
    age: 30
  }) {
    id
    name
    email
  }
}

# Response
{
  "data": {
    "createUser": {
      "id": "user_abc123",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Update Mutation</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
  updateUser(id: $id, input: $input) {
    id
    name
    email
    updatedAt
  }
}

# Variables
{
  "id": "user_abc123",
  "input": {
    "name": "John Smith",
    "email": "johnsmith@example.com"
  }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Delete Mutation</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`mutation DeleteUser($id: ID!) {
  deleteUser(id: $id) {
    success
    message
  }
}

# Alternative: Return deleted object
mutation {
  deletePost(id: "post_123") {
    id
    title
  }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Multiple Mutations</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Multiple mutations in one request (executed sequentially)
mutation CreatePostAndComment {
  createPost(input: {
    title: "New Post"
    content: "Content here"
  }) {
    id
    title
  }

  addComment(input: {
    postId: "post_123"
    text: "Great post!"
  }) {
    id
    text
  }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Schema for Mutations</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Input types
input CreateUserInput {
  name: String!
  email: String!
  password: String!
  age: Int
  role: Role = USER  # Default value
}

input UpdateUserInput {
  name: String
  email: String
  age: Int
}

# Payload types (for better error handling)
type CreateUserPayload {
  user: User
  errors: [Error!]
}

type Error {
  field: String!
  message: String!
}

type Mutation {
  createUser(input: CreateUserInput!): CreateUserPayload!
  updateUser(id: ID!, input: UpdateUserInput!): User
  deleteUser(id: ID!): DeletePayload!
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Best Practices</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-700 dark:text-green-300">Do</h4>
            <ul className="text-sm mt-2 list-disc list-inside">
              <li>Use input types for complex arguments</li>
              <li>Return the modified data</li>
              <li>Use payload types for error handling</li>
              <li>Name mutations with action verbs</li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 dark:text-red-300">Don't</h4>
            <ul className="text-sm mt-2 list-disc list-inside">
              <li>Use mutations for reading data</li>
              <li>Ignore error cases</li>
              <li>Create overly complex mutations</li>
              <li>Mix unrelated operations</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },

  "graphql_subscriptions.asp": {
    title: "GraphQL Subscriptions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          GraphQL Subscriptions
        </h2>
        <p className="leading-relaxed mb-4">
          Subscriptions are a GraphQL feature that enables real-time data updates. They maintain a persistent connection to the server, typically using WebSockets, to receive events as they happen.
        </p>

        <h3 className="text-xl font-medium mb-3">Schema Definition</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`type Subscription {
  # Subscribe to new messages in a chat
  messageAdded(chatId: ID!): Message!

  # Subscribe to user status changes
  userStatusChanged(userId: ID!): UserStatus!

  # Subscribe to order updates
  orderUpdated(orderId: ID!): Order!

  # Subscribe to all new posts
  postCreated: Post!
}

type Message {
  id: ID!
  text: String!
  sender: User!
  createdAt: DateTime!
}

type UserStatus {
  userId: ID!
  status: Status!
  lastSeen: DateTime
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Client Subscription</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# GraphQL subscription query
subscription OnMessageAdded($chatId: ID!) {
  messageAdded(chatId: $chatId) {
    id
    text
    sender {
      name
      avatar
    }
    createdAt
  }
}

# Variables
{
  "chatId": "chat_123"
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Server Implementation (Node.js)</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();
const MESSAGE_ADDED = 'MESSAGE_ADDED';

const resolvers = {
  Subscription: {
    messageAdded: {
      subscribe: (_, { chatId }) => {
        return pubsub.asyncIterator([MESSAGE_ADDED]);
      },
      // Filter to only send messages for the subscribed chat
      resolve: (payload, { chatId }) => {
        if (payload.chatId === chatId) {
          return payload.message;
        }
        return null;
      }
    }
  },

  Mutation: {
    sendMessage: async (_, { chatId, text }, { user }) => {
      const message = await Message.create({
        chatId,
        text,
        senderId: user.id
      });

      // Publish to subscribers
      pubsub.publish(MESSAGE_ADDED, {
        chatId,
        message
      });

      return message;
    }
  }
};`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Client Implementation (React + Apollo)</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import { useSubscription, gql } from '@apollo/client';

const MESSAGE_SUBSCRIPTION = gql\`
  subscription OnMessageAdded($chatId: ID!) {
    messageAdded(chatId: $chatId) {
      id
      text
      sender { name avatar }
      createdAt
    }
  }
\`;

function ChatRoom({ chatId }) {
  const { data, loading, error } = useSubscription(
    MESSAGE_SUBSCRIPTION,
    { variables: { chatId } }
  );

  if (loading) return <p>Connecting...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h3>New Message:</h3>
      <p>{data.messageAdded.text}</p>
      <small>From: {data.messageAdded.sender.name}</small>
    </div>
  );
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Common Use Cases</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Real-time Chat</h4>
            <ul className="text-sm mt-2 list-disc list-inside">
              <li>New messages</li>
              <li>Typing indicators</li>
              <li>User online/offline status</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Live Feeds</h4>
            <ul className="text-sm mt-2 list-disc list-inside">
              <li>Social media feeds</li>
              <li>Stock price updates</li>
              <li>Sports scores</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Notifications</h4>
            <ul className="text-sm mt-2 list-disc list-inside">
              <li>Push notifications</li>
              <li>Order status updates</li>
              <li>System alerts</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Collaboration</h4>
            <ul className="text-sm mt-2 list-disc list-inside">
              <li>Document editing</li>
              <li>Cursor positions</li>
              <li>Live comments</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },

  "graphql_resolvers.asp": {
    title: "GraphQL Resolvers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          GraphQL Resolvers
        </h2>
        <p className="leading-relaxed mb-4">
          Resolvers are functions that resolve a value for a type or field in your schema. They're the bridge between your schema and your data sources.
        </p>

        <h3 className="text-xl font-medium mb-3">Resolver Structure</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Resolver function signature
const resolver = (parent, args, context, info) => {
  // parent: Result from parent resolver
  // args: Arguments passed to the field
  // context: Shared context (auth, DB connections, etc.)
  // info: Query execution information
  return result;
};

// Example resolvers
const resolvers = {
  Query: {
    user: (_, { id }, { db }) => {
      return db.users.findById(id);
    },
    users: (_, { limit = 10 }, { db }) => {
      return db.users.findAll({ limit });
    }
  },

  User: {
    // Field-level resolver
    posts: (user, _, { db }) => {
      return db.posts.findByAuthor(user.id);
    },
    fullName: (user) => {
      return \`\${user.firstName} \${user.lastName}\`;
    }
  },

  Mutation: {
    createUser: async (_, { input }, { db }) => {
      return db.users.create(input);
    }
  }
};`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Resolver Arguments</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Argument</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Description</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Common Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">parent</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Result from parent resolver</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Access parent data for nested fields</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">args</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Field arguments from query</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Filter, pagination, input data</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">context</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Shared across all resolvers</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Auth, DB connections, loaders</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">info</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Query execution info</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Field selection, optimization</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3">Async Resolvers</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const resolvers = {
  Query: {
    // Async database query
    user: async (_, { id }, { db }) => {
      const user = await db.users.findById(id);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    },

    // Multiple async operations
    dashboard: async (_, __, { db, userId }) => {
      const [user, posts, notifications] = await Promise.all([
        db.users.findById(userId),
        db.posts.findByAuthor(userId),
        db.notifications.findUnread(userId)
      ]);

      return { user, posts, notifications };
    }
  }
};`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Context Setup</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Apollo Server context setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    // Get user from auth token
    const token = req.headers.authorization || '';
    const user = await getUser(token);

    return {
      user,
      db: database,
      loaders: createLoaders(),
      req
    };
  }
});

// Using context in resolvers
const resolvers = {
  Query: {
    me: (_, __, { user }) => {
      if (!user) throw new AuthenticationError('Not logged in');
      return user;
    }
  },

  Mutation: {
    createPost: async (_, { input }, { user, db }) => {
      if (!user) throw new AuthenticationError('Must be logged in');
      return db.posts.create({ ...input, authorId: user.id });
    }
  }
};`}
          </pre>
        </div>
      </>
    ),
  },

  "graphql_dataloaders.asp": {
    title: "GraphQL DataLoaders",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          DataLoaders
        </h2>
        <p className="leading-relaxed mb-4">
          DataLoader is a utility for batching and caching data fetching. It solves the N+1 problem in GraphQL by collecting multiple requests and executing them in a single batch.
        </p>

        <h3 className="text-xl font-medium mb-3">The N+1 Problem</h3>
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-red-700 dark:text-red-300">Without DataLoader</h4>
          <pre className="font-mono text-sm bg-white dark:bg-[#111827] p-2 rounded mt-2">
{`query {
  posts {       # 1 query for posts
    title
    author {    # N queries for authors!
      name
    }
  }
}

# If there are 10 posts, this executes:
# 1 query: SELECT * FROM posts
# 10 queries: SELECT * FROM users WHERE id = ?`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">DataLoader Implementation</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import DataLoader from 'dataloader';

// Batch function - receives array of keys
const batchUsers = async (userIds) => {
  // Single query for all users
  const users = await db.users.findByIds(userIds);

  // Return in same order as input keys
  return userIds.map(id =>
    users.find(user => user.id === id) || null
  );
};

// Create loader
const userLoader = new DataLoader(batchUsers);

// Usage in resolvers
const resolvers = {
  Post: {
    author: (post, _, { loaders }) => {
      return loaders.userLoader.load(post.authorId);
    }
  }
};

// Now for 10 posts:
# 1 query: SELECT * FROM posts
# 1 query: SELECT * FROM users WHERE id IN (1, 2, 3, ...)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Creating Loaders in Context</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// loaders.js
import DataLoader from 'dataloader';

export const createLoaders = (db) => ({
  userLoader: new DataLoader(async (ids) => {
    const users = await db.users.findByIds(ids);
    return ids.map(id => users.find(u => u.id === id));
  }),

  postLoader: new DataLoader(async (ids) => {
    const posts = await db.posts.findByIds(ids);
    return ids.map(id => posts.find(p => p.id === id));
  }),

  // Load posts by author
  postsByAuthorLoader: new DataLoader(async (authorIds) => {
    const posts = await db.posts.findByAuthorIds(authorIds);
    return authorIds.map(authorId =>
      posts.filter(p => p.authorId === authorId)
    );
  })
});

// Server setup - NEW loaders per request!
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    db,
    loaders: createLoaders(db)  // Fresh loaders per request
  })
});`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">DataLoader Options</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const userLoader = new DataLoader(batchUsers, {
  // Cache results within request
  cache: true,  // default: true

  // Custom cache key function
  cacheKeyFn: (key) => key.toString(),

  // Maximum batch size
  maxBatchSize: 100,

  // Batch scheduling function
  batchScheduleFn: (callback) => setTimeout(callback, 10)
});

// Manual cache operations
userLoader.clear(userId);     // Clear specific key
userLoader.clearAll();        // Clear entire cache
userLoader.prime(id, user);   // Pre-populate cache`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Performance Impact</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center">
            <div className="text-3xl mb-2 text-red-600 dark:text-red-400">11</div>
            <h4 className="font-semibold">Without DataLoader</h4>
            <p className="text-sm mt-2">Database queries for 10 posts with authors</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
            <div className="text-3xl mb-2 text-green-600 dark:text-green-400">2</div>
            <h4 className="font-semibold">With DataLoader</h4>
            <p className="text-sm mt-2">Database queries for 10 posts with authors</p>
          </div>
        </div>
      </>
    ),
  },

  "graphql_auth.asp": {
    title: "GraphQL Authentication",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Authentication in GraphQL
        </h2>
        <p className="leading-relaxed mb-4">
          Authentication in GraphQL is typically handled at the HTTP layer, with authorization implemented in resolvers using context.
        </p>

        <h3 className="text-xl font-medium mb-3">JWT Authentication Setup</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import jwt from 'jsonwebtoken';

// Extract user from token in context
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization?.replace('Bearer ', '');

    let user = null;
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        user = await db.users.findById(decoded.userId);
      } catch (err) {
        // Invalid token - user remains null
      }
    }

    return { user, db };
  }
});`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Login Mutation</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Schema
type AuthPayload {
  token: String!
  user: User!
}

type Mutation {
  login(email: String!, password: String!): AuthPayload!
  signup(input: SignupInput!): AuthPayload!
}

# Resolvers
const resolvers = {
  Mutation: {
    login: async (_, { email, password }, { db }) => {
      const user = await db.users.findByEmail(email);

      if (!user || !await bcrypt.compare(password, user.password)) {
        throw new AuthenticationError('Invalid credentials');
      }

      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );

      return { token, user };
    }
  }
};`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Authorization Patterns</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// 1. Simple auth check in resolver
const resolvers = {
  Query: {
    me: (_, __, { user }) => {
      if (!user) throw new AuthenticationError('Must be logged in');
      return user;
    }
  }
};

// 2. Role-based authorization
const requireRole = (role) => (resolver) => {
  return (parent, args, context, info) => {
    if (!context.user) {
      throw new AuthenticationError('Must be logged in');
    }
    if (context.user.role !== role) {
      throw new ForbiddenError('Insufficient permissions');
    }
    return resolver(parent, args, context, info);
  };
};

const resolvers = {
  Mutation: {
    deleteUser: requireRole('ADMIN')(async (_, { id }, { db }) => {
      return db.users.delete(id);
    })
  }
};

// 3. Directive-based authorization
directive @auth(requires: Role = USER) on FIELD_DEFINITION

enum Role {
  ADMIN
  USER
  GUEST
}

type Query {
  users: [User!]! @auth(requires: ADMIN)
  me: User @auth
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Field-Level Authorization</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const resolvers = {
  User: {
    email: (user, _, { currentUser }) => {
      // Only show email to the user themselves or admins
      if (currentUser?.id === user.id || currentUser?.role === 'ADMIN') {
        return user.email;
      }
      return null;
    },

    privateNotes: (user, _, { currentUser }) => {
      if (currentUser?.id !== user.id) {
        throw new ForbiddenError('Cannot view other users notes');
      }
      return user.privateNotes;
    }
  }
};`}
          </pre>
        </div>
      </>
    ),
  },

  "graphql_errors.asp": {
    title: "GraphQL Error Handling",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Error Handling
        </h2>
        <p className="leading-relaxed mb-4">
          GraphQL has a structured error format. Errors are returned alongside partial data, allowing clients to handle failures gracefully.
        </p>

        <h3 className="text-xl font-medium mb-3">GraphQL Error Format</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`{
  "data": {
    "user": null
  },
  "errors": [
    {
      "message": "User not found",
      "locations": [{ "line": 2, "column": 3 }],
      "path": ["user"],
      "extensions": {
        "code": "NOT_FOUND",
        "timestamp": "2024-01-15T10:30:00Z"
      }
    }
  ]
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Custom Error Classes</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import { GraphQLError } from 'graphql';

// Custom error classes
class NotFoundError extends GraphQLError {
  constructor(message) {
    super(message, {
      extensions: { code: 'NOT_FOUND' }
    });
  }
}

class ValidationError extends GraphQLError {
  constructor(message, field) {
    super(message, {
      extensions: {
        code: 'VALIDATION_ERROR',
        field
      }
    });
  }
}

class AuthenticationError extends GraphQLError {
  constructor(message = 'Not authenticated') {
    super(message, {
      extensions: { code: 'UNAUTHENTICATED' }
    });
  }
}

// Usage in resolvers
const resolvers = {
  Query: {
    user: async (_, { id }, { db }) => {
      const user = await db.users.findById(id);
      if (!user) {
        throw new NotFoundError(\`User \${id} not found\`);
      }
      return user;
    }
  },

  Mutation: {
    createUser: async (_, { input }, { db }) => {
      if (!isValidEmail(input.email)) {
        throw new ValidationError('Invalid email format', 'email');
      }
      return db.users.create(input);
    }
  }
};`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Error Formatting</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (error) => {
    // Log error for debugging
    console.error(error);

    // Don't expose internal errors to clients
    if (error.extensions?.code === 'INTERNAL_SERVER_ERROR') {
      return new GraphQLError('Internal server error', {
        extensions: { code: 'INTERNAL_SERVER_ERROR' }
      });
    }

    // Remove stack traces in production
    if (process.env.NODE_ENV === 'production') {
      delete error.extensions?.stacktrace;
    }

    return error;
  }
});`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Union Error Types</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Schema with union error types
type User {
  id: ID!
  name: String!
}

type NotFoundError {
  message: String!
  resourceId: ID!
}

type ValidationError {
  message: String!
  field: String!
}

union UserResult = User | NotFoundError | ValidationError

type Query {
  user(id: ID!): UserResult!
}

# Client query
query {
  user(id: "123") {
    ... on User {
      id
      name
    }
    ... on NotFoundError {
      message
      resourceId
    }
    ... on ValidationError {
      message
      field
    }
  }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Common Error Codes</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Code</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">UNAUTHENTICATED</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">User not logged in</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">FORBIDDEN</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">User lacks permission</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">NOT_FOUND</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Resource doesn't exist</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">BAD_USER_INPUT</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Invalid arguments</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">INTERNAL_SERVER_ERROR</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Unexpected server error</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "graphql_bestpractices.asp": {
    title: "GraphQL Best Practices",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          GraphQL Best Practices
        </h2>
        <p className="leading-relaxed mb-4">
          Following best practices ensures your GraphQL API is performant, maintainable, and provides a great developer experience.
        </p>

        <h3 className="text-xl font-medium mb-3">Schema Design</h3>
        <div className="grid gap-4 mb-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-700 dark:text-green-300">Use Clear, Descriptive Names</h4>
            <div className="grid md:grid-cols-2 gap-2 mt-2 text-sm">
              <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded">
                <code>getUserById</code> - Avoid
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded">
                <code>user(id: ID!)</code> - Prefer
              </div>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-700 dark:text-green-300">Use Connections for Pagination</h4>
            <pre className="font-mono text-sm bg-white dark:bg-[#111827] p-2 rounded mt-2">
{`type Query {
  users(first: Int, after: String): UserConnection!
}

type UserConnection {
  edges: [UserEdge!]!
  pageInfo: PageInfo!
}

type UserEdge {
  node: User!
  cursor: String!
}`}
            </pre>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-700 dark:text-green-300">Design for Evolution</h4>
            <p className="text-sm mt-2">Add new fields rather than modifying existing ones. Use @deprecated directive for old fields.</p>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">Performance</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Use DataLoaders:</strong> Batch and cache database requests</li>
          <li><strong>Limit Query Depth:</strong> Prevent deeply nested queries</li>
          <li><strong>Query Complexity Analysis:</strong> Rate limit expensive queries</li>
          <li><strong>Persisted Queries:</strong> Pre-register allowed queries</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">Query Depth & Complexity Limiting</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import depthLimit from 'graphql-depth-limit';
import { createComplexityLimitRule } from 'graphql-validation-complexity';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [
    depthLimit(5),  // Max 5 levels deep
    createComplexityLimitRule(1000)  // Max complexity score
  ]
});`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Security Checklist</h3>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-6">
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Disable introspection in production</li>
            <li>Implement rate limiting</li>
            <li>Use query complexity analysis</li>
            <li>Validate and sanitize all inputs</li>
            <li>Implement proper authentication</li>
            <li>Use HTTPS only</li>
            <li>Enable CORS appropriately</li>
          </ul>
        </div>

        <h3 className="text-xl font-medium mb-3">Naming Conventions</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Element</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Convention</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Types</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">PascalCase</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">User, BlogPost</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fields</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">camelCase</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">firstName, createdAt</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Enums</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">SCREAMING_SNAKE_CASE</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">ADMIN, PENDING_REVIEW</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Mutations</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Verb + Noun</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">createUser, updatePost</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "graphql_tools.asp": {
    title: "GraphQL Tools & Ecosystem",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          GraphQL Tools & Ecosystem
        </h2>
        <p className="leading-relaxed mb-4">
          The GraphQL ecosystem includes a wide variety of tools for development, testing, and production use.
        </p>

        <h3 className="text-xl font-medium mb-3">Server Libraries</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Library</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Language</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Apollo Server</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">JavaScript/TypeScript</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Full-featured, great DX, plugins</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">GraphQL Yoga</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">JavaScript/TypeScript</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Simple, performant, flexible</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">Strawberry</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Python</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Type hints, async, Django/FastAPI</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-semibold">gqlgen</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Go</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Schema-first, type-safe, fast</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3">Client Libraries</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">Apollo Client</h4>
            <p className="text-sm mt-2">Full-featured state management, caching, React integration</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-700 dark:text-green-300">urql</h4>
            <p className="text-sm mt-2">Lightweight, extensible, good defaults</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">Relay</h4>
            <p className="text-sm mt-2">Facebook's client, advanced features, React-focused</p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-700 dark:text-orange-300">graphql-request</h4>
            <p className="text-sm mt-2">Minimal client, no caching, simple use cases</p>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">Development Tools</h3>
        <div className="grid gap-4 mb-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">GraphQL Playground / GraphiQL</h4>
            <p className="text-sm mt-2">Interactive IDE for exploring and testing GraphQL APIs</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">GraphQL Code Generator</h4>
            <p className="text-sm mt-2">Generate TypeScript types, React hooks, and more from schema</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">GraphQL Inspector</h4>
            <p className="text-sm mt-2">Schema diff, breaking change detection, coverage reports</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400">Apollo Studio</h4>
            <p className="text-sm mt-2">Schema registry, metrics, tracing, collaboration</p>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-3">GraphQL Code Generator Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# codegen.yml
schema: "./schema.graphql"
documents: "./src/**/*.graphql"
generates:
  ./src/generated/graphql.ts:
    plugins:
      - typescript
      - typescript-operations
      - typescript-react-apollo

# Generated usage
import { useGetUserQuery } from './generated/graphql';

function UserProfile({ id }) {
  const { data, loading, error } = useGetUserQuery({
    variables: { id }
  });

  // Fully typed!
  return <div>{data?.user?.name}</div>;
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Learning Resources</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>graphql.org</strong> - Official documentation</li>
          <li><strong>How to GraphQL</strong> - Free full-stack tutorial</li>
          <li><strong>Apollo Docs</strong> - Comprehensive guides</li>
          <li><strong>The Guild Blog</strong> - Advanced topics</li>
        </ul>
      </>
    ),
  },
};
