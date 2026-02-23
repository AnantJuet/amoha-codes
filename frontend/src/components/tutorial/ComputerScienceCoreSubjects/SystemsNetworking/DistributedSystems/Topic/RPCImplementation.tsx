import React from "react";

const RPCImplementation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      RPC Implementation Mechanism
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      RPC implementation involves several components working together to make
      remote procedure calls appear as local calls. The implementation must
      handle parameter marshalling, network communication, and error handling.
    </p>

    <h2 className="text-3xl font-bold mt-8">RPC Components</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RPC Implementation Architecture:

┌─────────────────────────────────────────────────────────┐
│                      CLIENT SIDE                         │
│  ┌──────────┐     ┌─────────────┐     ┌──────────────┐ │
│  │  Client  │────►│Client Stub  │────►│ RPC Runtime  │ │
│  │Application│     │(Marshalling)│     │ (Network)    │ │
│  └──────────┘     └─────────────┘     └──────┬───────┘ │
└──────────────────────────────────────────────┼─────────┘
                                               │
                         ════════════════════════════════
                                   NETWORK
                         ════════════════════════════════
                                               │
┌──────────────────────────────────────────────┼─────────┐
│                      SERVER SIDE             │         │
│  ┌──────────────┐    ┌─────────────┐    ┌───▼───────┐ │
│  │ RPC Runtime  │◄───│Server Stub  │◄───│  Server   │ │
│  │  (Network)   │    │(Unmarshall) │    │ Procedure │ │
│  └──────────────┘    └─────────────┘    └───────────┘ │
└─────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation Steps</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">Action</th>
            <th className="p-3 border">Component</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1</td>
            <td className="p-3 border">Client calls procedure</td>
            <td className="p-3 border">Client Application</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2</td>
            <td className="p-3 border">Marshal parameters</td>
            <td className="p-3 border">Client Stub</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3</td>
            <td className="p-3 border">Send message</td>
            <td className="p-3 border">RPC Runtime</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4</td>
            <td className="p-3 border">Receive message</td>
            <td className="p-3 border">Server Runtime</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">5</td>
            <td className="p-3 border">Unmarshal parameters</td>
            <td className="p-3 border">Server Stub</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">6</td>
            <td className="p-3 border">Execute procedure</td>
            <td className="p-3 border">Server</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">7</td>
            <td className="p-3 border">Marshal result</td>
            <td className="p-3 border">Server Stub</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">8</td>
            <td className="p-3 border">Return to client</td>
            <td className="p-3 border">RPC Runtime</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stub Functions</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Client Stub</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Packs procedure ID and arguments</li>
          <li>Sends request to server</li>
          <li>Waits for response</li>
          <li>Unpacks and returns result</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Server Stub</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Unpacks incoming request</li>
          <li>Identifies procedure to call</li>
          <li>Invokes local procedure</li>
          <li>Packs result for transmission</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Marshalling and Unmarshalling</h2>

    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mt-4">
      <p className="leading-relaxed">
        <strong>Marshalling:</strong> Converting in-memory data structures into
        a format suitable for transmission (serialization).
      </p>
      <p className="leading-relaxed mt-2">
        <strong>Unmarshalling:</strong> Converting received data back into
        in-memory data structures (deserialization).
      </p>
      <p className="leading-relaxed mt-4">
        Common formats: JSON, XML, Protocol Buffers, MessagePack
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Binding Process</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Static Binding:</strong> Server address hardcoded at compile time</li>
      <li><strong>Dynamic Binding:</strong> Server located at runtime via name service</li>
      <li><strong>Port Mapper:</strong> Registry that maps service names to ports</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>RPC uses client and server stubs for transparency</li>
        <li>Marshalling converts data for network transmission</li>
        <li>RPC Runtime handles actual network communication</li>
        <li>Binding determines how client finds server</li>
        <li>Error handling must consider network failures</li>
      </ul>
    </div>
  </div>
);

export default RPCImplementation;
