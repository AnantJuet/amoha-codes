import React from 'react';

const HTTPStatusCodes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      HTTP Status Codes
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      HTTP status codes are three-digit numbers returned by the server to indicate the result
      of the clients request. They are grouped into five classes based on the first digit,
      ranging from informational responses to server errors.
    </p>

    <h2 className="text-3xl font-bold mt-8">Status Code Classes</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Class</th>
            <th className="p-3 border">Range</th>
            <th className="p-3 border">Meaning</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1xx</td>
            <td className="p-3 border">100-199</td>
            <td className="p-3 border">Informational - Request received, continuing</td>
          </tr>
          <tr>
            <td className="p-3 border">2xx</td>
            <td className="p-3 border">200-299</td>
            <td className="p-3 border">Success - Request received, understood, accepted</td>
          </tr>
          <tr>
            <td className="p-3 border">3xx</td>
            <td className="p-3 border">300-399</td>
            <td className="p-3 border">Redirection - Further action needed</td>
          </tr>
          <tr>
            <td className="p-3 border">4xx</td>
            <td className="p-3 border">400-499</td>
            <td className="p-3 border">Client Error - Bad request syntax or cannot be fulfilled</td>
          </tr>
          <tr>
            <td className="p-3 border">5xx</td>
            <td className="p-3 border">500-599</td>
            <td className="p-3 border">Server Error - Server failed to fulfill valid request</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">1xx Informational</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li><strong>100 Continue:</strong> Initial part of request received, continue sending</li>
        <li><strong>101 Switching Protocols:</strong> Server switching to requested protocol (e.g., WebSocket)</li>
        <li><strong>102 Processing:</strong> Server received request, still processing</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">2xx Success</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Code</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">200</td>
            <td className="p-3 border">OK</td>
            <td className="p-3 border">Standard success response</td>
          </tr>
          <tr>
            <td className="p-3 border">201</td>
            <td className="p-3 border">Created</td>
            <td className="p-3 border">New resource created (POST success)</td>
          </tr>
          <tr>
            <td className="p-3 border">202</td>
            <td className="p-3 border">Accepted</td>
            <td className="p-3 border">Request accepted, processing later</td>
          </tr>
          <tr>
            <td className="p-3 border">204</td>
            <td className="p-3 border">No Content</td>
            <td className="p-3 border">Success but no body (DELETE success)</td>
          </tr>
          <tr>
            <td className="p-3 border">206</td>
            <td className="p-3 border">Partial Content</td>
            <td className="p-3 border">Range request successful</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">3xx Redirection</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Code</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">301</td>
            <td className="p-3 border">Moved Permanently</td>
            <td className="p-3 border">Resource permanently moved to new URL</td>
          </tr>
          <tr>
            <td className="p-3 border">302</td>
            <td className="p-3 border">Found</td>
            <td className="p-3 border">Temporary redirect (keep original method)</td>
          </tr>
          <tr>
            <td className="p-3 border">304</td>
            <td className="p-3 border">Not Modified</td>
            <td className="p-3 border">Cached version is still valid</td>
          </tr>
          <tr>
            <td className="p-3 border">307</td>
            <td className="p-3 border">Temporary Redirect</td>
            <td className="p-3 border">Redirect preserving method</td>
          </tr>
          <tr>
            <td className="p-3 border">308</td>
            <td className="p-3 border">Permanent Redirect</td>
            <td className="p-3 border">Permanent redirect preserving method</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">4xx Client Errors</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Code</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">400</td>
            <td className="p-3 border">Bad Request</td>
            <td className="p-3 border">Malformed request syntax</td>
          </tr>
          <tr>
            <td className="p-3 border">401</td>
            <td className="p-3 border">Unauthorized</td>
            <td className="p-3 border">Authentication required</td>
          </tr>
          <tr>
            <td className="p-3 border">403</td>
            <td className="p-3 border">Forbidden</td>
            <td className="p-3 border">Server refuses to authorize</td>
          </tr>
          <tr>
            <td className="p-3 border">404</td>
            <td className="p-3 border">Not Found</td>
            <td className="p-3 border">Resource does not exist</td>
          </tr>
          <tr>
            <td className="p-3 border">405</td>
            <td className="p-3 border">Method Not Allowed</td>
            <td className="p-3 border">HTTP method not supported</td>
          </tr>
          <tr>
            <td className="p-3 border">408</td>
            <td className="p-3 border">Request Timeout</td>
            <td className="p-3 border">Client took too long</td>
          </tr>
          <tr>
            <td className="p-3 border">429</td>
            <td className="p-3 border">Too Many Requests</td>
            <td className="p-3 border">Rate limit exceeded</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">5xx Server Errors</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Code</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">500</td>
            <td className="p-3 border">Internal Server Error</td>
            <td className="p-3 border">Generic server error</td>
          </tr>
          <tr>
            <td className="p-3 border">501</td>
            <td className="p-3 border">Not Implemented</td>
            <td className="p-3 border">Server does not support functionality</td>
          </tr>
          <tr>
            <td className="p-3 border">502</td>
            <td className="p-3 border">Bad Gateway</td>
            <td className="p-3 border">Invalid response from upstream</td>
          </tr>
          <tr>
            <td className="p-3 border">503</td>
            <td className="p-3 border">Service Unavailable</td>
            <td className="p-3 border">Server temporarily overloaded</td>
          </tr>
          <tr>
            <td className="p-3 border">504</td>
            <td className="p-3 border">Gateway Timeout</td>
            <td className="p-3 border">Upstream server timeout</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>1xx: Informational, request in progress</li>
        <li>2xx: Success, request completed</li>
        <li>3xx: Redirection, further action needed</li>
        <li>4xx: Client error, problem with request</li>
        <li>5xx: Server error, server failed</li>
        <li>200 OK and 404 Not Found are most common</li>
      </ul>
    </div>
  </div>
);

export default HTTPStatusCodes;
