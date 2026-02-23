import React from 'react';

const TCPIPTransport: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Transport Layer in TCP/IP Model
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Transport Layer in the TCP/IP model is responsible for providing reliable, efficient, and
      ordered end-to-end communication between applications running on different hosts. It checks
      that data is delivered error-free, in order, and without loss or duplication.
    </p>

    <h2 className="text-3xl font-bold mt-8">Position in TCP/IP Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    TCP/IP Model:
    +------------------------+
    |    Application Layer   |  <- HTTP, FTP, SMTP
    +------------------------+
    |    Transport Layer     |  <- THIS LAYER (TCP, UDP)
    +------------------------+
    |    Internet Layer      |  <- IP, ICMP
    +------------------------+
    |  Network Access Layer  |  <- Ethernet, Wi-Fi
    +------------------------+

    Transport Layer provides:
    - Process-to-process communication
    - Port numbers for multiplexing
    - Reliability (TCP) or Speed (UDP)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Functions</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Process-to-Process Delivery:</strong> Uses port numbers to identify sending and receiving applications</li>
      <li><strong>Multiplexing/Demultiplexing:</strong> Allows multiple applications to use the network simultaneously</li>
      <li><strong>Segmentation:</strong> Breaks large data into smaller segments for transmission</li>
      <li><strong>Error Detection:</strong> Uses checksums to detect corrupted data</li>
      <li><strong>Flow Control:</strong> Prevents sender from overwhelming receiver</li>
      <li><strong>Congestion Control:</strong> Prevents network congestion</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">TCP vs UDP</h2>
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
            <td className="p-3 border">Connection</td>
            <td className="p-3 border">Connection-oriented</td>
            <td className="p-3 border">Connectionless</td>
          </tr>
          <tr>
            <td className="p-3 border">Reliability</td>
            <td className="p-3 border">Guaranteed delivery</td>
            <td className="p-3 border">Best effort (no guarantee)</td>
          </tr>
          <tr>
            <td className="p-3 border">Ordering</td>
            <td className="p-3 border">In-order delivery</td>
            <td className="p-3 border">No ordering guarantee</td>
          </tr>
          <tr>
            <td className="p-3 border">Flow Control</td>
            <td className="p-3 border">Yes (sliding window)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Congestion Control</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Header Size</td>
            <td className="p-3 border">20-60 bytes</td>
            <td className="p-3 border">8 bytes</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Slower (overhead)</td>
            <td className="p-3 border">Faster (minimal overhead)</td>
          </tr>
          <tr>
            <td className="p-3 border">Use Cases</td>
            <td className="p-3 border">Web, Email, File transfer</td>
            <td className="p-3 border">Streaming, Gaming, DNS, VoIP</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">TCP Features</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">3-Way Handshake</h3>
        <div className="font-mono text-sm text-gray-900 bg-gray-100 text-gray-900 p-2 rounded">
          Client --SYN--&gt; Server<br/>
          Client &lt;--SYN-ACK-- Server<br/>
          Client --ACK--&gt; Server
        </div>
        <p className="text-sm mt-2">Establishes reliable connection before data transfer</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Acknowledgments</h3>
        <p className="text-sm">Receiver sends ACK for received data. Sender retransmits if ACK not received within timeout.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Sequence Numbers</h3>
        <p className="text-sm">Each byte is numbered to ensure in-order delivery and detect duplicates.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Sliding Window</h3>
        <p className="text-sm">Flow control mechanism that allows multiple packets to be in flight.</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Port Numbers</h2>
    <p className="leading-relaxed">
      Port numbers are 16-bit integers (0-65535) that identify specific applications or services.
      Combined with IP address, they form a socket that uniquely identifies a connection endpoint.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Range</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0-1023</td>
            <td className="p-3 border">Well-known</td>
            <td className="p-3 border">Reserved for common services (HTTP:80, FTP:21, SSH:22)</td>
          </tr>
          <tr>
            <td className="p-3 border">1024-49151</td>
            <td className="p-3 border">Registered</td>
            <td className="p-3 border">Assigned to specific applications</td>
          </tr>
          <tr>
            <td className="p-3 border">49152-65535</td>
            <td className="p-3 border">Dynamic/Private</td>
            <td className="p-3 border">Temporary ports for client connections</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <h3 className="font-bold mb-2">Common Port Numbers</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
        <div>HTTP: 80</div>
        <div>HTTPS: 443</div>
        <div>FTP: 21</div>
        <div>SSH: 22</div>
        <div>Telnet: 23</div>
        <div>SMTP: 25</div>
        <div>DNS: 53</div>
        <div>POP3: 110</div>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Transport Layer provides end-to-end communication between applications</li>
        <li>TCP offers reliable, ordered delivery with error recovery</li>
        <li>UDP offers fast, connectionless communication without guarantees</li>
        <li>Port numbers identify applications on a host</li>
        <li>TCP uses 3-way handshake to establish connections</li>
        <li>Choose TCP for reliability, UDP for speed</li>
      </ul>
    </div>
  </div>
);

export default TCPIPTransport;
