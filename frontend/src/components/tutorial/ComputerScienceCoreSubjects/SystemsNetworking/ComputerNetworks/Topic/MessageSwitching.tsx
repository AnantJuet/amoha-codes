import React from 'react';

const MessageSwitching: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Message Switching
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Message switching is a switching technique where the entire message is transmitted as a
      complete unit from one node to another. Each intermediate node stores the complete message,
      checks for errors, and then forwards it to the next node. This is also known as the
      Store-and-Forward technique.
    </p>

    <h2 className="text-3xl font-bold mt-8">How Message Switching Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Message Switching (Store-and-Forward):

    Source                Node 1              Node 2              Dest
       |                    |                   |                   |
       |--[Full Message]--> |                   |                   |
       |                    | (Store, Check,    |                   |
       |                    |  Wait for link)   |                   |
       |                    |--[Full Message]-->|                   |
       |                    |                   | (Store, Check,    |
       |                    |                   |  Wait for link)   |
       |                    |                   |--[Full Message]-->|
       |                    |                   |                   |

    Each node:
    1. Receives complete message
    2. Stores it in memory/disk
    3. Checks for errors
    4. Waits for outgoing link to be available
    5. Forwards complete message to next node
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Message Format</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Message Structure:

    +--------+-----------+---------------+----------+
    | Header | Dest Addr | Source Addr   |   DATA   |
    +--------+-----------+---------------+----------+

    Header contains:
    - Message identifier
    - Priority level
    - Timestamp
    - Routing information

    No size limit on message (unlike packets)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Characteristics</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Store-and-Forward:</strong> Complete message stored at each intermediate node</li>
      <li><strong>No Connection Setup:</strong> No dedicated path established</li>
      <li><strong>No Size Limit:</strong> Messages can be of any size</li>
      <li><strong>Connectionless:</strong> Each message treated independently</li>
      <li><strong>High Latency:</strong> Significant delay due to storing at each hop</li>
      <li><strong>Large Storage:</strong> Nodes need sufficient storage for entire messages</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Advantages vs Disadvantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Efficient channel utilization</li>
          <li>No connection setup delay</li>
          <li>Messages can be prioritized</li>
          <li>Traffic congestion reduced</li>
          <li>Reliable delivery (error checking)</li>
          <li>Can handle varying message sizes</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2">Disadvantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>High latency (store at each node)</li>
          <li>Large storage required at nodes</li>
          <li>Not suitable for real-time traffic</li>
          <li>No guaranteed delivery time</li>
          <li>Network can become congested</li>
          <li>Long messages tie up resources</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Email Systems:</strong> Store-and-forward email delivery (SMTP)</li>
      <li><strong>Telegraph Networks:</strong> Early telecommunication systems</li>
      <li><strong>Military Communications:</strong> AUTODIN network</li>
      <li><strong>SMS:</strong> Short Message Service in cellular networks</li>
      <li><strong>Batch Processing:</strong> Non-real-time data transfer</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Comparison with Other Techniques</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Message</th>
            <th className="p-3 border">Packet</th>
            <th className="p-3 border">Circuit</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Data Unit</td>
            <td className="p-3 border">Entire message</td>
            <td className="p-3 border">Small packets</td>
            <td className="p-3 border">Continuous stream</td>
          </tr>
          <tr>
            <td className="p-3 border">Storage at Nodes</td>
            <td className="p-3 border">Full message</td>
            <td className="p-3 border">Packet only</td>
            <td className="p-3 border">None</td>
          </tr>
          <tr>
            <td className="p-3 border">Delay</td>
            <td className="p-3 border">Very high</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Low/Constant</td>
          </tr>
          <tr>
            <td className="p-3 border">Real-time Suitable</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Somewhat</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Link Utilization</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border">Excellent</td>
            <td className="p-3 border">Poor</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Packet Switching Replaced Message Switching</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>Large messages tie up network resources for extended periods</li>
      <li>A single bit error requires retransmitting the entire message</li>
      <li>Buffer space requirements are proportional to message size</li>
      <li>High latency makes it unsuitable for interactive applications</li>
      <li>Packet switching provides better resource sharing</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Message switching stores entire message at each intermediate node</li>
        <li>Also known as Store-and-Forward technique</li>
        <li>High latency due to storing complete message at each hop</li>
        <li>Requires large storage at intermediate nodes</li>
        <li>Not suitable for real-time communication</li>
        <li>Used in email and early telegraph systems</li>
        <li>Largely replaced by packet switching in modern networks</li>
      </ul>
    </div>
  </div>
);

export default MessageSwitching;
