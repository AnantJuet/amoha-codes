import React from 'react';

const HTTP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      HTTP (Hypertext Transfer Protocol)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      HTTP is the foundation of data communication on the World Wide Web. It is an application-layer
      protocol that defines how messages are formatted and transmitted between web browsers and servers.
      HTTP is stateless, meaning each request is independent of previous requests.
    </p>

    <h2 className="text-3xl font-bold mt-8">HTTP Characteristics</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Port</td>
            <td className="p-3 border">80 (default)</td>
          </tr>
          <tr>
            <td className="p-3 border">Transport</td>
            <td className="p-3 border">TCP</td>
          </tr>
          <tr>
            <td className="p-3 border">Stateless</td>
            <td className="p-3 border">No memory of previous requests</td>
          </tr>
          <tr>
            <td className="p-3 border">Text-based</td>
            <td className="p-3 border">Human-readable headers</td>
          </tr>
          <tr>
            <td className="p-3 border">Request-Response</td>
            <td className="p-3 border">Client initiates, server responds</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">HTTP Request Format</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    HTTP Request Structure:

    +------------------------------------------+
    | Request Line                             |
    | METHOD URI HTTP/Version                  |
    +------------------------------------------+
    | Headers                                  |
    | Host: www.example.com                    |
    | User-Agent: Mozilla/5.0                  |
    | Accept: text/html                        |
    | Connection: keep-alive                   |
    +------------------------------------------+
    | Blank Line (CRLF)                        |
    +------------------------------------------+
    | Message Body (optional)                  |
    | (POST data, file uploads, etc.)          |
    +------------------------------------------+

    Example GET Request:
    GET /index.html HTTP/1.1
    Host: www.example.com
    User-Agent: Mozilla/5.0
    Accept: text/html,application/xhtml+xml
    Accept-Language: en-US,en
    Connection: keep-alive
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">HTTP Response Format</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    HTTP Response Structure:

    +------------------------------------------+
    | Status Line                              |
    | HTTP/Version Status-Code Reason-Phrase   |
    +------------------------------------------+
    | Headers                                  |
    | Content-Type: text/html                  |
    | Content-Length: 1234                     |
    | Date: Mon, 16 Jan 2026 12:00:00 GMT      |
    +------------------------------------------+
    | Blank Line (CRLF)                        |
    +------------------------------------------+
    | Message Body                             |
    | (HTML content, JSON, images, etc.)       |
    +------------------------------------------+

    Example Response:
    HTTP/1.1 200 OK
    Date: Mon, 16 Jan 2026 12:00:00 GMT
    Content-Type: text/html; charset=UTF-8
    Content-Length: 1234
    Connection: keep-alive

    <!DOCTYPE html>
    <html>...
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">HTTP Versions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Version</th>
            <th className="p-3 border">Year</th>
            <th className="p-3 border">Key Features</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">HTTP/0.9</td>
            <td className="p-3 border">1991</td>
            <td className="p-3 border">GET only, no headers</td>
          </tr>
          <tr>
            <td className="p-3 border">HTTP/1.0</td>
            <td className="p-3 border">1996</td>
            <td className="p-3 border">Headers, more methods, status codes</td>
          </tr>
          <tr>
            <td className="p-3 border">HTTP/1.1</td>
            <td className="p-3 border">1997</td>
            <td className="p-3 border">Persistent connections, pipelining, Host header</td>
          </tr>
          <tr>
            <td className="p-3 border">HTTP/2</td>
            <td className="p-3 border">2015</td>
            <td className="p-3 border">Binary protocol, multiplexing, server push</td>
          </tr>
          <tr>
            <td className="p-3 border">HTTP/3</td>
            <td className="p-3 border">2022</td>
            <td className="p-3 border">QUIC transport (UDP), improved performance</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Persistent vs Non-Persistent</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Non-Persistent (HTTP/1.0):

    Client              Server
       |                   |
       |-- TCP Connect --->|
       |-- GET /page.html ->|
       |<-- Response ------|
       |-- TCP Close ------|
       |                   |
       |-- TCP Connect --->|  New connection
       |-- GET /style.css ->|  for each file!
       |<-- Response ------|
       |-- TCP Close ------|

    Persistent (HTTP/1.1):

    Client              Server
       |                   |
       |-- TCP Connect --->|
       |-- GET /page.html ->|
       |<-- Response ------|
       |-- GET /style.css ->|  Same connection
       |<-- Response ------|  reused!
       |-- GET /script.js ->|
       |<-- Response ------|
       |-- TCP Close ------|

    Persistent connections reduce latency!
      `}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>HTTP uses TCP port 80 by default</li>
        <li>Stateless protocol - each request independent</li>
        <li>Request has method, URI, headers, body</li>
        <li>Response has status code, headers, body</li>
        <li>HTTP/1.1 introduced persistent connections</li>
        <li>HTTP/2 and HTTP/3 add major performance improvements</li>
      </ul>
    </div>
  </div>
);

export default HTTP;
