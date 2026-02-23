import React from "react";

const RPC: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Remote Procedure Call (RPC)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Remote Procedure Call (RPC) is a communication protocol that enables a program to
      request a service or execute a procedure on a remote server as though it were a local
      function call. RPC follows a client-server model, where the client requests execution
      of a remote procedure and the server responds.
    </p>

    <h2 className="text-3xl font-bold mt-8">How RPC Works</h2>
    <p className="leading-relaxed">
      The client invokes a function on the server located in a different address space.
      The RPC framework handles the details of network communication, serialization, and
      response management. This makes remote communication transparent to developers,
      promoting cleaner and more modular distributed applications.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RPC Communication Flow:

Client Machine                              Server Machine
┌────────────────────┐                  ┌────────────────────┐
│                    │                  │                    │
│  ┌──────────────┐  │                  │  ┌──────────────┐  │
│  │   Client     │  │                  │  │   Server     │  │
│  │   Process    │  │                  │  │   Process    │  │
│  └──────┬───────┘  │                  │  └──────┬───────┘  │
│         │          │                  │         │          │
│         │ call     │                  │         │ call     │
│         ▼          │                  │         ▲          │
│  ┌──────────────┐  │                  │  ┌──────┴───────┐  │
│  │  Client      │  │   marshalled    │  │  Server      │  │
│  │  Stub        │──┼──────────────────┼──│  Stub        │  │
│  │ (Marshall)   │  │    request      │  │ (Unmarshall) │  │
│  └──────────────┘  │                  │  └──────────────┘  │
│         │          │                  │         │          │
│         ▼          │                  │         ▲          │
│  ┌──────────────┐  │                  │  ┌──────┴───────┐  │
│  │    RPC       │  │◄────────────────►│  │    RPC       │  │
│  │   Runtime    │  │   marshalled    │  │   Runtime    │  │
│  │              │  │    response     │  │              │  │
│  └──────────────┘  │                  │  └──────────────┘  │
└────────────────────┘                  └────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RPC Architecture Components</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Client</td>
            <td className="p-3 border">
              Initiates RPC by calling a local procedure (client stub)
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Client Stub</td>
            <td className="p-3 border">
              Marshalls parameters into a message format and unmarshalls results
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">RPC Runtime</td>
            <td className="p-3 border">
              Handles message transmission, retransmission, acknowledgement, routing, and encryption
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Server Stub</td>
            <td className="p-3 border">
              Unmarshalls call request and marshalls the results back
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Server</td>
            <td className="p-3 border">
              Executes the required procedure and returns results
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Importance of RPC</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Simplified Communication</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Abstraction of complexity</li>
          <li>Call remote services like local methods</li>
          <li>Consistent interface across system</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Enhanced Modularity</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Decoupling of components</li>
          <li>Reusability of remote services</li>
          <li>Easier maintenance</li>
        </ul>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Facilitates Distribution</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Inter-Process Communication</li>
          <li>Resource sharing</li>
          <li>Distributed computing support</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">RPC Transparency</h2>
    <p className="leading-relaxed">
      A transparent RPC is one in which programmers cannot tell the difference between
      local and remote procedure calls. There are two kinds of transparency:
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Transparency Type</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Syntactic Transparency</td>
            <td className="p-3 border">
              The syntax of a remote procedure call should be the same as a local procedure call
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Semantic Transparency</td>
            <td className="p-3 border">
              The semantics (meaning) of remote and local procedure calls should be identical
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Differences: Remote vs Local Calls</h2>

    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Address Space:</strong> Remote calls have disjoint address spaces, unlike local calls</li>
      <li><strong>Failure Prone:</strong> Remote calls are more prone to failures due to network issues</li>
      <li><strong>Latency:</strong> Remote calls take longer due to network communication</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">RPC Process Steps</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RPC Execution Steps:

1. Client calls local stub procedure
   └── Stub packs parameters (marshalling)

2. Client stub sends message to RPC Runtime
   └── RPC Runtime transmits to server

3. Server RPC Runtime receives message
   └── Forwards to server stub

4. Server stub unpacks parameters (unmarshalling)
   └── Calls actual server procedure

5. Server executes the procedure
   └── Returns result to server stub

6. Server stub packs result (marshalling)
   └── Sends via RPC Runtime to client

7. Client RPC Runtime receives response
   └── Client stub unpacks result

8. Client receives the result
   └── Continues execution`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Marshalling and Unmarshalling</h2>

    <p className="leading-relaxed">
      Marshalling is the process of transforming data structures into a format suitable for
      transmission. Unmarshalling is the reverse process of reconstructing data at the destination.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Marshalling</h3>
        <p className="leading-relaxed">
          Converting parameters and data structures into a sequence of bytes suitable
          for network transmission
        </p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Unmarshalling</h3>
        <p className="leading-relaxed">
          Reconstructing the original data structures from the received byte sequence
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>RPC makes remote calls appear as local function calls</li>
        <li>Client and server stubs handle marshalling/unmarshalling</li>
        <li>RPC Runtime manages network communication</li>
        <li>Syntactic transparency is achievable, semantic transparency is challenging</li>
        <li>Network latency and failures are key differences from local calls</li>
        <li>Stubs can be generated manually or automatically using IDL</li>
      </ul>
    </div>
  </div>
);

export default RPC;
