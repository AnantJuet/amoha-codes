import React from "react";

const ClientServer: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Client-Server Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Client-Server Model is a distributed architecture where clients request services
      and servers provide them. It underpins many modern systems, including websites, email,
      and cloud storage platforms.
    </p>

    <h2 className="text-3xl font-bold mt-8">Components</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Client</h3>
        <p className="leading-relaxed mb-3">
          A client is any device or software that initiates communication by requesting
          data or services from a server.
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Web browsers (Chrome, Firefox)</li>
          <li>Email apps (Gmail, Outlook)</li>
          <li>Mobile applications</li>
          <li>Desktop applications</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Server</h3>
        <p className="leading-relaxed mb-3">
          A server is a powerful system that listens for and responds to client requests
          by delivering data or performing tasks.
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Web Servers (Apache, Nginx)</li>
          <li>Email Servers</li>
          <li>Database Servers</li>
          <li>File Servers</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Architecture Diagram</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Client-Server Architecture:

┌─────────────────────────────────────────────────────────────┐
│                          SERVER                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │               Request Handler                         │   │
│  │   ┌─────────────┐ ┌─────────────┐ ┌─────────────┐    │   │
│  │   │   Web       │ │   Email     │ │  Database   │    │   │
│  │   │   Service   │ │   Service   │ │   Service   │    │   │
│  │   └─────────────┘ └─────────────┘ └─────────────┘    │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────────┬──────────────────────────────────┘
                           │
                    [Network Layer]
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
    ┌────┴────┐       ┌────┴────┐       ┌────┴────┐
    │ Client  │       │ Client  │       │ Client  │
    │  (Web   │       │ (Email  │       │ (Mobile │
    │ Browser)│       │  App)   │       │  App)   │
    └─────────┘       └─────────┘       └─────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">How It Works</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">Action</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1</td>
            <td className="p-3 border">User Enters URL</td>
            <td className="p-3 border">
              User types a website address (e.g., www.example.com) into the browser
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2</td>
            <td className="p-3 border">DNS Lookup</td>
            <td className="p-3 border">
              Browser contacts DNS server to convert domain into IP address
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3</td>
            <td className="p-3 border">Establishing Connection</td>
            <td className="p-3 border">
              Browser sends HTTP/HTTPS request to server using resolved IP address
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4</td>
            <td className="p-3 border">Server Responds</td>
            <td className="p-3 border">
              Server sends back website files (HTML, CSS, JavaScript, images)
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">5</td>
            <td className="p-3 border">Rendering</td>
            <td className="p-3 border">
              Browser processes and displays the received content to user
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Browser Components</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>DOM Interpreter:</strong> Processes HTML to structure the page</li>
      <li><strong>CSS Interpreter:</strong> Applies styles to elements</li>
      <li><strong>JavaScript Engine:</strong> Adds interactivity using JIT compilation for performance</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Advantages</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Centralized Data Management</h4>
        <p className="text-sm">Easy to maintain and back up data from a single source</p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Cost Efficiency</h4>
        <p className="text-sm">Clients require less processing power</p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Scalability</h4>
        <p className="text-sm">Servers and clients can scale independently</p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Security</h4>
        <p className="text-sm">Centralized security policies and authentication</p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Data Recovery</h4>
        <p className="text-sm">Easier backup and restore from a single source</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Client Vulnerability</h4>
        <p className="text-sm">Risk of malware if servers distribute unsafe files</p>
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Server as Target</h4>
        <p className="text-sm">Susceptible to DDoS (Denial of Service) attacks</p>
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Data Spoofing</h4>
        <p className="text-sm">Unprotected data can be tampered with in transit</p>
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">MITM Attacks</h4>
        <p className="text-sm">Unsecured connections can be intercepted by attackers</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Communication Flow</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Client-Server Communication:

Client                           Server
  │                                │
  │──── 1. Send Request ──────────►│
  │     (HTTP GET /index.html)     │
  │                                │
  │                                │ Process Request
  │                                │ Fetch Data
  │                                │ Generate Response
  │                                │
  │◄─── 2. Send Response ──────────│
  │     (200 OK + HTML Content)    │
  │                                │
  │                                │
  │ Render Page                    │
  │ Display to User                │
  │                                │`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Clients initiate requests, servers respond with services</li>
        <li>DNS converts domain names to IP addresses</li>
        <li>HTTP/HTTPS are common protocols for web communication</li>
        <li>Centralized management simplifies data handling</li>
        <li>Security measures are critical for both client and server</li>
        <li>Model is foundational for most internet applications</li>
      </ul>
    </div>
  </div>
);

export default ClientServer;
