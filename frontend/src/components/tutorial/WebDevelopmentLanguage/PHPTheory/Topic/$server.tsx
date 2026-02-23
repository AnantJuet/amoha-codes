import React from "react";

const PhpServer: React.FC = () => {
  return (
    <div className="p-5 text-white">
      <h1 className="text-3xl font-bold mb-4">PHP - $_SERVER</h1>

      <p className="mb-4">
        <code>$_SERVER</code> is a PHP super global variable which holds
        information about headers, paths, and script locations.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Example</h2>
      <div className="bg-gray-900 p-4 rounded mb-4">
        <pre>
{`echo $_SERVER['PHP_SELF'];
echo $_SERVER['SERVER_NAME'];
echo $_SERVER['HTTP_HOST'];
echo $_SERVER['HTTP_REFERER'];
echo $_SERVER['HTTP_USER_AGENT'];
echo $_SERVER['SCRIPT_NAME'];`}
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-3">Important Elements of $_SERVER</h2>

      {/* TABLE */}
      <table className="w-full border border-gray-700 mt-4">
        <thead>
          <tr className="bg-gray-800">
            <th className="border border-gray-700 p-2">Element</th>
            <th className="border border-gray-700 p-2">Description</th>
          </tr>
        </thead>

        <tbody>
          {[
            ["$_SERVER['PHP_SELF']", "Returns the filename of the currently executing script"],
            ["$_SERVER['GATEWAY_INTERFACE']", "Returns the version of the CGI the server is using"],
            ["$_SERVER['SERVER_ADDR']", "Returns the IP address of the host server"],
            ["$_SERVER['SERVER_NAME']", "Returns the host server name"],
            ["$_SERVER['SERVER_SOFTWARE']", "Returns the server identification string"],
            ["$_SERVER['SERVER_PROTOCOL']", "Returns the name and revision of the information protocol"],
            ["$_SERVER['REQUEST_METHOD']", "Returns the request method (GET, POST)"],
            ["$_SERVER['REQUEST_TIME']", "Returns timestamp of the start of the request"],
            ["$_SERVER['QUERY_STRING']", "Returns the query string"],
            ["$_SERVER['HTTP_ACCEPT']", "Returns the Accept header"],
            ["$_SERVER['HTTP_ACCEPT_CHARSET']", "Returns Accept_Charset header"],
            ["$_SERVER['HTTP_HOST']", "Returns the Host header"],
            ["$_SERVER['HTTP_REFERER']", "Returns the complete URL of the previous page"],
            ["$_SERVER['HTTPS']", "Is the script queried via HTTPS"],
            ["$_SERVER['REMOTE_ADDR']", "Returns the user’s IP address"],
            ["$_SERVER['REMOTE_HOST']", "Returns the user’s host name"],
            ["$_SERVER['REMOTE_PORT']", "Returns the port used on the user's machine"],
            ["$_SERVER['SCRIPT_FILENAME']", "Absolute pathname of the current script"],
            ["$_SERVER['SERVER_ADMIN']", "Server admin email (from server config)"],
            ["$_SERVER['SERVER_PORT']", "Returns server port (80, 443, etc.)"],
            ["$_SERVER['SERVER_SIGNATURE']", "Server version and hostname"],
            ["$_SERVER['PATH_TRANSLATED']", "File system based path to the script"],
            ["$_SERVER['SCRIPT_NAME']", "Returns path of current script"],
            ["$_SERVER['SCRIPT_URI']", "Returns the URI of the current page"]
          ].map(([element, description], index) => (
            <tr key={index} className="bg-gray-900">
              <td className="border border-gray-700 p-2">{element}</td>
              <td className="border border-gray-700 p-2">{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PhpServer;
