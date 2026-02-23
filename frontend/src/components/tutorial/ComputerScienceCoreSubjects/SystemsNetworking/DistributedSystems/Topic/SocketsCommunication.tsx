import React from "react";

const SocketsCommunication: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Sockets Communication in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Sockets provide a low-level interface for network communication between
      processes running on different computers. They are the foundation upon
      which higher-level communication protocols are built.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Socket?</h2>
    <p className="leading-relaxed">
      A socket is an endpoint for communication between two machines. It is
      identified by an IP address and a port number. Sockets enable bidirectional
      communication and support both connection-oriented (TCP) and connectionless
      (UDP) protocols.
    </p>

    <h2 className="text-3xl font-bold mt-8">Socket Types</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Stream Sockets (TCP)</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Connection-oriented</li>
          <li>Reliable, ordered delivery</li>
          <li>Byte-stream oriented</li>
          <li>Flow control provided</li>
        </ul>
        <p className="text-sm mt-2 italic">Use case: HTTP, FTP, SSH</p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Datagram Sockets (UDP)</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Connectionless</li>
          <li>No guaranteed delivery</li>
          <li>Message-oriented</li>
          <li>Low overhead</li>
        </ul>
        <p className="text-sm mt-2 italic">Use case: DNS, VoIP, Gaming</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Socket Communication Flow</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`TCP Socket Communication:

    SERVER                              CLIENT
      │                                    │
   socket()                             socket()
      │                                    │
    bind()                                 │
      │                                    │
   listen()                                │
      │                                    │
   accept() ◄─────── connect() ───────────┤
      │                                    │
      │◄──────────── data ────────────────│
    read()                              write()
      │                                    │
      │───────────── data ────────────────►│
   write()                              read()
      │                                    │
   close()                              close()`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Socket Operations</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">socket()</td>
            <td className="p-3 border">Create a new socket</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">bind()</td>
            <td className="p-3 border">Assign address to socket</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">listen()</td>
            <td className="p-3 border">Mark socket as passive (server)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">accept()</td>
            <td className="p-3 border">Accept incoming connection</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">connect()</td>
            <td className="p-3 border">Initiate connection (client)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">send()/recv()</td>
            <td className="p-3 border">Send and receive data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">close()</td>
            <td className="p-3 border">Close the socket</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">TCP vs UDP Comparison</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">TCP</th>
            <th className="p-3 border">UDP</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Connection</td>
            <td className="p-3 border">Required</td>
            <td className="p-3 border">Not required</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Reliability</td>
            <td className="p-3 border">Guaranteed delivery</td>
            <td className="p-3 border">Best effort</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Ordering</td>
            <td className="p-3 border">Maintained</td>
            <td className="p-3 border">Not guaranteed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Speed</td>
            <td className="p-3 border">Slower (overhead)</td>
            <td className="p-3 border">Faster</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Sockets provide the basic interface for network communication</li>
        <li>TCP sockets offer reliable, ordered communication</li>
        <li>UDP sockets offer fast, connectionless communication</li>
        <li>Sockets are identified by IP address and port number</li>
        <li>Higher-level protocols are built on top of sockets</li>
      </ul>
    </div>
  </div>
);

export default SocketsCommunication;
