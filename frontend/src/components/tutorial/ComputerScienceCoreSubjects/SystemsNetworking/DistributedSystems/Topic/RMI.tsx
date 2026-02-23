import React from "react";

const RMI: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Remote Method Invocation (RMI)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Remote Method Invocation (RMI) is the object-oriented equivalent of RPC.
      It allows an object running in one Java Virtual Machine (JVM) to invoke
      methods on an object running in another JVM, potentially on a different
      machine.
    </p>

    <h2 className="text-3xl font-bold mt-8">RMI vs RPC</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">RPC</th>
            <th className="p-3 border">RMI</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Paradigm</td>
            <td className="p-3 border">Procedural</td>
            <td className="p-3 border">Object-Oriented</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Invocation</td>
            <td className="p-3 border">Function calls</td>
            <td className="p-3 border">Method calls on objects</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Parameters</td>
            <td className="p-3 border">Primitive types</td>
            <td className="p-3 border">Objects can be passed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Language</td>
            <td className="p-3 border">Language independent</td>
            <td className="p-3 border">Java specific</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">RMI Architecture</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Java RMI Architecture:

┌─────────────────────────────────────────────────────────┐
│                      CLIENT                              │
│  ┌──────────────┐                                       │
│  │ Client Code  │                                       │
│  └──────┬───────┘                                       │
│         │ invoke method                                 │
│         ▼                                               │
│  ┌──────────────┐    ┌──────────────────┐              │
│  │    Stub      │───►│ Remote Reference │              │
│  └──────────────┘    │     Layer        │              │
│                      └────────┬─────────┘              │
│                               │                         │
│                      ┌────────▼─────────┐              │
│                      │  Transport Layer │              │
│                      └────────┬─────────┘              │
└───────────────────────────────┼─────────────────────────┘
                                │ NETWORK
┌───────────────────────────────┼─────────────────────────┐
│                      ┌────────▼─────────┐              │
│                      │  Transport Layer │              │
│                      └────────┬─────────┘              │
│                               │                         │
│                      ┌────────▼─────────┐              │
│  ┌──────────────┐    │ Remote Reference │              │
│  │   Skeleton   │◄───│     Layer        │              │
│  └──────┬───────┘    └──────────────────┘              │
│         │                                               │
│         ▼                                               │
│  ┌──────────────┐                                       │
│  │Remote Object │                                       │
│  └──────────────┘                                       │
│                      SERVER                              │
└─────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RMI Components</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Stub</h3>
        <p className="leading-relaxed">
          Client-side proxy that represents the remote object. It marshals
          method calls and sends them to the server.
        </p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Skeleton</h3>
        <p className="leading-relaxed">
          Server-side component that receives requests, unmarshals parameters,
          and invokes the actual method.
        </p>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">RMI Registry</h3>
        <p className="leading-relaxed">
          Name service that maps object names to remote object references.
          Clients look up objects by name.
        </p>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Remote Reference Layer</h3>
        <p className="leading-relaxed">
          Handles the semantics of remote references and manages object
          invocation protocols.
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Creating an RMI Application</h2>

    <ol className="list-decimal list-inside leading-relaxed space-y-2 mt-2">
      <li>Define a remote interface extending java.rmi.Remote</li>
      <li>Implement the remote interface on the server</li>
      <li>Create and export the remote object</li>
      <li>Register the object with RMI Registry</li>
      <li>Client looks up the object and invokes methods</li>
    </ol>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>RMI is object-oriented remote communication for Java</li>
        <li>Uses stubs (client) and skeletons (server) for communication</li>
        <li>RMI Registry provides naming service for remote objects</li>
        <li>Objects can be passed by value (Serializable) or by reference</li>
        <li>Supports distributed garbage collection</li>
      </ul>
    </div>
  </div>
);

export default RMI;
