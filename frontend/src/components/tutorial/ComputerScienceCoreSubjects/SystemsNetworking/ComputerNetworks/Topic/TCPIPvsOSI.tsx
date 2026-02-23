import React from 'react';

const TCPIPvsOSI: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      TCP/IP Model vs OSI Model - A Comprehensive Comparison
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The OSI (Open Systems Interconnection) model and TCP/IP (Transmission Control Protocol/Internet Protocol)
      model are two fundamental frameworks for understanding network communication. While the OSI model is
      a theoretical reference model with seven layers, the TCP/IP model is a practical implementation with
      four layers that forms the basis of the modern Internet.
    </p>

    {/* Visual Comparison */}
    <h2 className="text-3xl font-bold mt-8">Visual Layer Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  OSI Model (7 Layers)              TCP/IP Model (4 Layers)
  ====================              ======================

  +-------------------+
  |  7. Application   |  -------+
  +-------------------+         |
  |  6. Presentation  |  -------|----->  +-------------------+
  +-------------------+         |        |  4. Application   |
  |  5. Session       |  -------+        +-------------------+
  +-------------------+
  |  4. Transport     |  ------------>   +-------------------+
  +-------------------+                  |  3. Transport     |
                                         +-------------------+
  +-------------------+
  |  3. Network       |  ------------>   +-------------------+
  +-------------------+                  |  2. Internet      |
                                         +-------------------+
  +-------------------+
  |  2. Data Link     |  -------+
  +-------------------+         |----->  +-------------------+
  |  1. Physical      |  -------+        |  1. Network Access|
  +-------------------+                  +-------------------+

  Key Mapping:
  - OSI Layers 5, 6, 7 -> TCP/IP Application Layer
  - OSI Layer 4        -> TCP/IP Transport Layer
  - OSI Layer 3        -> TCP/IP Internet Layer
  - OSI Layers 1, 2    -> TCP/IP Network Access Layer
`}</pre>
    </div>

    {/* Detailed Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Detailed Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">OSI Model</th>
            <th className="p-3 border">TCP/IP Model</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Number of Layers</td>
            <td className="p-3 border">7 layers</td>
            <td className="p-3 border">4 layers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Developed By</td>
            <td className="p-3 border">ISO (International Organization for Standardization)</td>
            <td className="p-3 border">DoD (Department of Defense) / DARPA</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Year</td>
            <td className="p-3 border">1984</td>
            <td className="p-3 border">1970s (standardized 1983)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Nature</td>
            <td className="p-3 border">Theoretical/Reference model</td>
            <td className="p-3 border">Practical/Implementation model</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Approach</td>
            <td className="p-3 border">Protocol independent</td>
            <td className="p-3 border">Based on standard protocols</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Layer Separation</td>
            <td className="p-3 border">Strict layer boundaries</td>
            <td className="p-3 border">Less strict boundaries</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Session/Presentation</td>
            <td className="p-3 border">Separate layers (5 and 6)</td>
            <td className="p-3 border">Combined in Application layer</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Usage</td>
            <td className="p-3 border">Teaching and reference</td>
            <td className="p-3 border">Internet communication</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Layer Mapping */}
    <h2 className="text-3xl font-bold mt-8">Layer-by-Layer Mapping</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">OSI Layer</th>
            <th className="p-3 border">TCP/IP Layer</th>
            <th className="p-3 border">PDU</th>
            <th className="p-3 border">Protocols</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Application (7)</td>
            <td className="p-3 border" rowSpan={3}>Application</td>
            <td className="p-3 border" rowSpan={3}>Data</td>
            <td className="p-3 border" rowSpan={3}>HTTP, FTP, SMTP, DNS, SSH, Telnet</td>
          </tr>
          <tr>
            <td className="p-3 border">Presentation (6)</td>
          </tr>
          <tr>
            <td className="p-3 border">Session (5)</td>
          </tr>
          <tr>
            <td className="p-3 border">Transport (4)</td>
            <td className="p-3 border">Transport</td>
            <td className="p-3 border">Segment</td>
            <td className="p-3 border">TCP, UDP, SCTP</td>
          </tr>
          <tr>
            <td className="p-3 border">Network (3)</td>
            <td className="p-3 border">Internet</td>
            <td className="p-3 border">Packet</td>
            <td className="p-3 border">IP, ICMP, ARP, RARP, IGMP</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Link (2)</td>
            <td className="p-3 border" rowSpan={2}>Network Access</td>
            <td className="p-3 border">Frame</td>
            <td className="p-3 border" rowSpan={2}>Ethernet, PPP, Wi-Fi, Token Ring</td>
          </tr>
          <tr>
            <td className="p-3 border">Physical (1)</td>
            <td className="p-3 border">Bits</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Technical Differences */}
    <h2 className="text-3xl font-bold mt-8">Technical Differences</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">OSI Model</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Clear distinction between services, interfaces, and protocols</li>
          <li>Model was developed first, then protocols</li>
          <li>Horizontal approach (each layer has specific protocols)</li>
          <li>Supports both connection-oriented and connectionless at Network layer</li>
          <li>Transport layer is only connection-oriented</li>
          <li>More generic and can describe any protocol stack</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">TCP/IP Model</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Does not distinguish clearly between services, interfaces, protocols</li>
          <li>Protocols were developed first, then model</li>
          <li>Vertical approach (protocols span multiple layers)</li>
          <li>Network (Internet) layer is only connectionless</li>
          <li>Transport layer supports both TCP and UDP</li>
          <li>Specific to TCP/IP protocol suite</li>
        </ul>
      </div>
    </div>

    {/* Service Support */}
    <h2 className="text-3xl font-bold mt-8">Service Support Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Service Type</th>
            <th className="p-3 border">OSI Model</th>
            <th className="p-3 border">TCP/IP Model</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Connection-Oriented (Network)</td>
            <td className="p-3 border">Supported</td>
            <td className="p-3 border">Not Supported (IP is connectionless)</td>
          </tr>
          <tr>
            <td className="p-3 border">Connectionless (Network)</td>
            <td className="p-3 border">Supported</td>
            <td className="p-3 border">Supported (IP)</td>
          </tr>
          <tr>
            <td className="p-3 border">Connection-Oriented (Transport)</td>
            <td className="p-3 border">Supported (only option)</td>
            <td className="p-3 border">Supported (TCP)</td>
          </tr>
          <tr>
            <td className="p-3 border">Connectionless (Transport)</td>
            <td className="p-3 border">Not Supported</td>
            <td className="p-3 border">Supported (UDP)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Protocol Flexibility */}
    <h2 className="text-3xl font-bold mt-8">Protocol Flexibility</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  OSI Model - Protocol Independent:
  +------------------------------------------+
  |                                          |
  |   OSI can describe protocols like:       |
  |   - TCP/IP protocol suite                |
  |   - AppleTalk                            |
  |   - IPX/SPX (Novell)                     |
  |   - Any future protocol stack            |
  |                                          |
  +------------------------------------------+

  TCP/IP Model - Protocol Specific:
  +------------------------------------------+
  |                                          |
  |   TCP/IP specifically describes:         |
  |   - IP (Internet Protocol)               |
  |   - TCP (Transmission Control Protocol)  |
  |   - UDP (User Datagram Protocol)         |
  |   - HTTP, FTP, SMTP, DNS, etc.           |
  |                                          |
  +------------------------------------------+

  This is why OSI is better for teaching concepts,
  while TCP/IP is better for understanding Internet communication.
`}</pre>
    </div>

    {/* Development Approach */}
    <h2 className="text-3xl font-bold mt-8">Development Approach</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">OSI: Top-Down Approach</h3>
        <p className="text-sm">
          The OSI model was designed as a reference model first, and then protocols were developed
          to fit into the layers. This resulted in a clean, well-organized structure but protocols
          that did not always fit perfectly.
        </p>
        <div className="mt-2 text-sm font-mono text-gray-900">
          Model Design -&gt; Layer Definition -&gt; Protocol Development
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">TCP/IP: Bottom-Up Approach</h3>
        <p className="text-sm">
          The TCP/IP protocols were developed first based on practical needs, and the model was
          created later to describe them. This resulted in a working system but with less clean
          layer boundaries.
        </p>
        <div className="mt-2 text-sm font-mono text-gray-900">
          Protocol Development -&gt; Testing -&gt; Model Description
        </div>
      </div>
    </div>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Model</th>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">OSI</td>
            <td className="p-3 border">
              <ul className="list-disc list-inside text-sm">
                <li>Clear layer definitions</li>
                <li>Protocol independent</li>
                <li>Good for teaching</li>
                <li>Distinguishes services, interfaces, protocols</li>
              </ul>
            </td>
            <td className="p-3 border">
              <ul className="list-disc list-inside text-sm">
                <li>Theoretical, not practical</li>
                <li>Some layers rarely used (5, 6)</li>
                <li>Complex with 7 layers</li>
                <li>Not widely implemented</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">TCP/IP</td>
            <td className="p-3 border">
              <ul className="list-disc list-inside text-sm">
                <li>Practical, widely used</li>
                <li>Foundation of Internet</li>
                <li>Simpler with 4 layers</li>
                <li>Proven reliability</li>
              </ul>
            </td>
            <td className="p-3 border">
              <ul className="list-disc list-inside text-sm">
                <li>Less clear layer boundaries</li>
                <li>Cannot describe other stacks</li>
                <li>Physical/Data Link merged</li>
                <li>No Session/Presentation</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* When to Use */}
    <h2 className="text-3xl font-bold mt-8">When to Use Which Model</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2">Use OSI Model When:</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Teaching networking concepts</li>
          <li>Understanding layer interactions</li>
          <li>Troubleshooting network issues (layer by layer)</li>
          <li>Designing new protocols</li>
          <li>Describing generic network communication</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Use TCP/IP Model When:</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Working with Internet communication</li>
          <li>Implementing network applications</li>
          <li>Configuring network devices</li>
          <li>Understanding actual protocol behavior</li>
          <li>Practical network administration</li>
        </ul>
      </div>
    </div>

    {/* Memory Aids */}
    <h2 className="text-3xl font-bold mt-8">Memory Aids</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  OSI Model (7 Layers) - Mnemonics:

  Top to Bottom (7 to 1):
  "All People Seem To Need Data Processing"
   A    P      S      T    N     D    P
   App  Pres  Sess  Trans Net  Data  Phys

  Bottom to Top (1 to 7):
  "Please Do Not Throw Sausage Pizza Away"
   P      D    N     T       S       P     A
   Phys Data  Net  Trans   Sess   Pres   App


  TCP/IP Model (4 Layers):

  Top to Bottom:
  "A Tiny Narrow Alley"
   A   T     N      A
   App Trans Inter  NetAccess

  Alternative:
  "Anyone That Insults Networks"
   A      T     I        N
   App  Trans Internet NetAccess
`}</pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>OSI is theoretical (7 layers); TCP/IP is practical (4 layers)</li>
      <li>OSI was model-first; TCP/IP was protocol-first</li>
      <li>TCP/IP Application = OSI Application + Presentation + Session</li>
      <li>TCP/IP Network Access = OSI Data Link + Physical</li>
      <li>OSI Transport is connection-oriented only; TCP/IP supports both</li>
      <li>OSI Network supports both; TCP/IP Internet is connectionless only</li>
    </ul>

    {/* GATE Important */}
    <h2 className="text-3xl font-bold mt-8">Important for GATE</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Compare number of layers and their mapping</li>
        <li>Know which protocols belong to which layer in both models</li>
        <li>Understand connection-oriented vs connectionless services</li>
        <li>Remember PDUs at each layer</li>
        <li>Know advantages and disadvantages of both models</li>
        <li>Understand why TCP/IP is used practically while OSI is for reference</li>
      </ul>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-8">Practice Questions</h2>
    <ol className="list-decimal list-inside leading-relaxed space-y-4 mt-4">
      <li>
        <strong>Question:</strong> Which OSI layers are combined in the TCP/IP Application layer?
        <p className="ml-6 mt-2 text-sm">
          <strong>Answer:</strong> Application (7), Presentation (6), and Session (5) layers.
        </p>
      </li>
      <li>
        <strong>Question:</strong> Why is OSI model called a reference model?
        <p className="ml-6 mt-2 text-sm">
          <strong>Answer:</strong> Because it was designed as a theoretical framework first, before protocols
          were developed. It serves as a reference for understanding network communication concepts.
        </p>
      </li>
      <li>
        <strong>Question:</strong> Which model supports connectionless service at the Transport layer?
        <p className="ml-6 mt-2 text-sm">
          <strong>Answer:</strong> TCP/IP model (through UDP protocol). OSI Transport layer is
          connection-oriented only.
        </p>
      </li>
      <li>
        <strong>Question:</strong> In which model does the Network layer support connection-oriented service?
        <p className="ml-6 mt-2 text-sm">
          <strong>Answer:</strong> OSI model. The TCP/IP Internet layer (equivalent to Network) only
          supports connectionless service (IP).
        </p>
      </li>
    </ol>
  </div>
);

export default TCPIPvsOSI;
