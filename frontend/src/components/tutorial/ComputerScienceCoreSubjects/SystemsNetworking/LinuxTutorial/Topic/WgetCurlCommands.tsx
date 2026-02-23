import React from "react";

const WgetCurlCommands: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      wget and curl Commands
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      wget and curl are command-line tools for downloading files and interacting
      with web services. wget excels at recursive downloads, while curl supports
      more protocols and is better for API interactions.
    </p>

    <h2 className="text-3xl font-bold mt-8">wget Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Download file
$ wget https://example.com/file.zip

# Save with different name
$ wget -O newname.zip https://example.com/file.zip

# Download in background
$ wget -b https://example.com/largefile.zip

# Resume interrupted download
$ wget -c https://example.com/largefile.zip

# Download entire website
$ wget -r -l 3 https://example.com/

# Quiet mode
$ wget -q https://example.com/file.zip

# Limit download speed
$ wget --limit-rate=500k https://example.com/file.zip

# Download multiple files
$ wget -i urls.txt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">curl Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Download file
$ curl -O https://example.com/file.zip

# Save with different name
$ curl -o newname.zip https://example.com/file.zip

# Follow redirects
$ curl -L https://example.com/redirect

# Show headers only
$ curl -I https://example.com/

# Show headers and content
$ curl -i https://example.com/

# Silent mode
$ curl -s https://example.com/api

# POST request
$ curl -X POST -d "data=value" https://example.com/api

# POST JSON
$ curl -X POST -H "Content-Type: application/json" \\
  -d '{"key":"value"}' https://example.com/api`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">curl for APIs</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# GET request with headers
$ curl -H "Authorization: Bearer token" https://api.example.com/

# PUT request
$ curl -X PUT -d "data=value" https://api.example.com/resource

# DELETE request
$ curl -X DELETE https://api.example.com/resource/123

# Upload file
$ curl -F "file=@localfile.txt" https://example.com/upload

# Basic authentication
$ curl -u username:password https://example.com/

# Save cookies
$ curl -c cookies.txt https://example.com/

# Send cookies
$ curl -b cookies.txt https://example.com/`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">wget</th>
            <th className="p-3 border">curl</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Recursive download</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Resume downloads</td>
            <td className="p-3 border">Yes (-c)</td>
            <td className="p-3 border">Yes (-C -)</td>
          </tr>
          <tr>
            <td className="p-3 border">API support</td>
            <td className="p-3 border">Limited</td>
            <td className="p-3 border">Excellent</td>
          </tr>
          <tr>
            <td className="p-3 border">Protocol support</td>
            <td className="p-3 border">HTTP, FTP</td>
            <td className="p-3 border">Many more</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>wget -c resumes interrupted downloads</li>
        <li>curl -L follows redirects</li>
        <li>curl is preferred for REST API interactions</li>
        <li>wget -r downloads recursively</li>
      </ul>
    </div>
  </div>
);

export default WgetCurlCommands;
