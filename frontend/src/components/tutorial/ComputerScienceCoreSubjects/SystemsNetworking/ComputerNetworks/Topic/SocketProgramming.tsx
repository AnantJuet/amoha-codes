import React from 'react';

const SocketProgramming: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Socket Programming
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A socket is an endpoint for communication between two machines. Socket programming
      allows applications to communicate over a network using TCP or UDP. Sockets provide
      the interface between the application layer and the transport layer.
    </p>

    <h2 className="text-3xl font-bold mt-8">Socket Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Protocol</th>
            <th className="p-3 border">Characteristics</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">SOCK_STREAM</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">Connection-oriented, reliable, ordered</td>
          </tr>
          <tr>
            <td className="p-3 border">SOCK_DGRAM</td>
            <td className="p-3 border">UDP</td>
            <td className="p-3 border">Connectionless, unreliable, fast</td>
          </tr>
          <tr>
            <td className="p-3 border">SOCK_RAW</td>
            <td className="p-3 border">Raw IP</td>
            <td className="p-3 border">Direct access to IP layer</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">TCP Socket Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    TCP Socket Communication:

    SERVER                              CLIENT
    ------                              ------
    socket()                            socket()
       |                                   |
    bind()                                 |
       |                                   |
    listen()                               |
       |                                   |
    accept() <---- 3-way handshake ----> connect()
       |                                   |
    recv() <------ data exchange ------> send()
    send() -------> data exchange ------> recv()
       |                                   |
    close() <----- 4-way termination ---> close()
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">TCP Server Example (Python)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    import socket

    # Create socket
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    # Bind to address and port
    server.bind(('0.0.0.0', 8080))

    # Listen for connections (backlog = 5)
    server.listen(5)

    print("Server listening on port 8080")

    while True:
        # Accept client connection
        client, address = server.accept()
        print(f"Connection from {address}")

        # Receive data
        data = client.recv(1024)
        print(f"Received: {data.decode()}")

        # Send response
        client.send(b"Hello from server!")

        # Close connection
        client.close()
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">TCP Client Example (Python)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    import socket

    # Create socket
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    # Connect to server
    client.connect(('192.168.1.10', 8080))

    # Send data
    client.send(b"Hello from client!")

    # Receive response
    response = client.recv(1024)
    print(f"Received: {response.decode()}")

    # Close connection
    client.close()
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">UDP Socket Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    UDP Socket Communication:

    SERVER                              CLIENT
    ------                              ------
    socket()                            socket()
       |                                   |
    bind()                                 |
       |                                   |
    recvfrom() <------- datagram -----> sendto()
    sendto() --------> datagram -------> recvfrom()
       |                                   |
    close()                             close()

    No connection establishment!
    Each datagram is independent
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Socket API Functions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">socket()</td>
            <td className="p-3 border">Create a socket descriptor</td>
          </tr>
          <tr>
            <td className="p-3 border">bind()</td>
            <td className="p-3 border">Assign address to socket</td>
          </tr>
          <tr>
            <td className="p-3 border">listen()</td>
            <td className="p-3 border">Mark socket as passive (server)</td>
          </tr>
          <tr>
            <td className="p-3 border">accept()</td>
            <td className="p-3 border">Accept incoming connection</td>
          </tr>
          <tr>
            <td className="p-3 border">connect()</td>
            <td className="p-3 border">Initiate connection (client)</td>
          </tr>
          <tr>
            <td className="p-3 border">send()/recv()</td>
            <td className="p-3 border">Send/receive data (TCP)</td>
          </tr>
          <tr>
            <td className="p-3 border">sendto()/recvfrom()</td>
            <td className="p-3 border">Send/receive datagram (UDP)</td>
          </tr>
          <tr>
            <td className="p-3 border">close()</td>
            <td className="p-3 border">Close socket</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Socket = endpoint for network communication</li>
        <li>TCP sockets: connection-oriented, reliable</li>
        <li>UDP sockets: connectionless, fast</li>
        <li>Server: socket, bind, listen, accept</li>
        <li>Client: socket, connect</li>
        <li>Socket address = IP + Port</li>
      </ul>
    </div>
  </div>
);

export default SocketProgramming;
