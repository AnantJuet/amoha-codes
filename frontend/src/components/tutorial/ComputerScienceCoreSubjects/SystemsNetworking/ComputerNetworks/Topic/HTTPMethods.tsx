import React from 'react';

const HTTPMethods: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      HTTP Methods
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      HTTP methods (also called HTTP verbs) indicate the desired action to be performed on a
      resource. Each method has specific semantics regarding safety, idempotency, and caching.
      The most common methods are GET and POST, but RESTful APIs use the full range of methods.
    </p>

    <h2 className="text-3xl font-bold mt-8">Common HTTP Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Safe</th>
            <th className="p-3 border">Idempotent</th>
            <th className="p-3 border">Body</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">GET</td>
            <td className="p-3 border">Retrieve resource</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">POST</td>
            <td className="p-3 border">Create resource</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">PUT</td>
            <td className="p-3 border">Replace resource</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">PATCH</td>
            <td className="p-3 border">Partial update</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">DELETE</td>
            <td className="p-3 border">Remove resource</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Optional</td>
          </tr>
          <tr>
            <td className="p-3 border">HEAD</td>
            <td className="p-3 border">GET without body</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">OPTIONS</td>
            <td className="p-3 border">Get allowed methods</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Optional</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Method Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    GET - Retrieve a resource:
    GET /api/users/123 HTTP/1.1
    Host: api.example.com

    Response: User data (JSON/XML)

    ---

    POST - Create a resource:
    POST /api/users HTTP/1.1
    Host: api.example.com
    Content-Type: application/json

    {"name": "John", "email": "john@example.com"}

    Response: 201 Created, new user ID

    ---

    PUT - Replace entire resource:
    PUT /api/users/123 HTTP/1.1
    Host: api.example.com
    Content-Type: application/json

    {"name": "John Doe", "email": "john.doe@example.com"}

    Response: 200 OK, updated resource

    ---

    DELETE - Remove a resource:
    DELETE /api/users/123 HTTP/1.1
    Host: api.example.com

    Response: 204 No Content
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Safe vs Idempotent</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Safe Methods</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Do not modify server state</li>
          <li>Read-only operations</li>
          <li>Can be cached</li>
          <li>Examples: GET, HEAD, OPTIONS</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Idempotent Methods</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Same result if called multiple times</li>
          <li>Can safely retry on failure</li>
          <li>POST is NOT idempotent</li>
          <li>Examples: GET, PUT, DELETE</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">GET vs POST</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">GET</th>
            <th className="p-3 border">POST</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Data location</td>
            <td className="p-3 border">URL query string</td>
            <td className="p-3 border">Request body</td>
          </tr>
          <tr>
            <td className="p-3 border">Data size</td>
            <td className="p-3 border">Limited (~2KB URL)</td>
            <td className="p-3 border">Unlimited</td>
          </tr>
          <tr>
            <td className="p-3 border">Visibility</td>
            <td className="p-3 border">Visible in URL</td>
            <td className="p-3 border">Hidden in body</td>
          </tr>
          <tr>
            <td className="p-3 border">Caching</td>
            <td className="p-3 border">Can be cached</td>
            <td className="p-3 border">Not cached</td>
          </tr>
          <tr>
            <td className="p-3 border">Bookmarkable</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Use case</td>
            <td className="p-3 border">Retrieving data</td>
            <td className="p-3 border">Submitting forms</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">RESTful API Methods</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    CRUD Operations mapped to HTTP Methods:

    Operation    Method    URI              Description
    ---------    ------    ---              -----------
    Create       POST      /users           Create new user
    Read (all)   GET       /users           List all users
    Read (one)   GET       /users/123       Get user 123
    Update       PUT       /users/123       Replace user 123
    Partial      PATCH     /users/123       Update fields
    Delete       DELETE    /users/123       Delete user 123

    Example REST API:
    GET    /api/products           -> List products
    GET    /api/products/42        -> Get product 42
    POST   /api/products           -> Create product
    PUT    /api/products/42        -> Update product 42
    DELETE /api/products/42        -> Delete product 42
      `}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>GET retrieves data, POST creates/submits data</li>
        <li>PUT replaces, PATCH partially updates</li>
        <li>Safe methods dont modify server state</li>
        <li>Idempotent methods can be safely retried</li>
        <li>RESTful APIs map CRUD to HTTP methods</li>
        <li>Choose method based on operation semantics</li>
      </ul>
    </div>
  </div>
);

export default HTTPMethods;
