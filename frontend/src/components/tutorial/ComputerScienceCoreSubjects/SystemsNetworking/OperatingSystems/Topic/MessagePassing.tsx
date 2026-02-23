import React from 'react';

const MessagePassing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Message Passing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Message passing is an inter-process communication mechanism where processes
      communicate by sending and receiving messages through the operating system kernel.
      Unlike shared memory, processes do not share any memory space and rely entirely
      on message exchange for communication.
    </p>

    {/* Basic Operations */}
    <h2 className="text-3xl font-bold mt-8">Basic Operations</h2>
    <p className="leading-relaxed">
      Message passing provides two fundamental operations:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>send(message):</strong> Transmits a message to another process or to
        a message queue. The sender specifies the destination and the message content.
      </li>
      <li>
        <strong>receive(message):</strong> Receives a message from another process or
        from a message queue. The receiver gets the message content and sender information.
      </li>
    </ul>

    {/* How Message Passing Works */}
    <h2 className="text-3xl font-bold mt-8">How Message Passing Works</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Process A                    Kernel                    Process B
─────────                    ──────                    ─────────
    │                           │                           │
    │  send(B, msg)             │                           │
    ├──────────────────────────→│                           │
    │                           │ ┌─────────────┐           │
    │                           │ │ Message     │           │
    │                           │ │ Queue/Buffer│           │
    │                           │ └─────────────┘           │
    │                           │                           │
    │                           │         receive(A, msg)   │
    │                           │←──────────────────────────┤
    │                           │                           │
    │                           │ deliver message           │
    │                           ├──────────────────────────→│
    │                           │                           │
`}
      </pre>
    </div>

    {/* Communication Link */}
    <h2 className="text-3xl font-bold mt-8">Communication Link</h2>
    <p className="leading-relaxed">
      For processes to communicate, a communication link must exist between them.
      Several design options exist for implementing this link:
    </p>

    <h3 className="text-2xl font-semibold mt-4">Naming Schemes</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Direct</td>
            <td className="p-3 border">Processes name each other explicitly</td>
            <td className="p-3 border">send(P, msg), receive(Q, msg)</td>
          </tr>
          <tr>
            <td className="p-3 border">Indirect</td>
            <td className="p-3 border">Messages sent to mailboxes/ports</td>
            <td className="p-3 border">send(A, msg), receive(A, msg)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Direct Communication</h3>
    <p className="leading-relaxed">
      In direct communication, processes must know each other's identity:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>Symmetric:</strong> Both sender and receiver name each other</li>
      <li><strong>Asymmetric:</strong> Only sender names the receiver; receiver can accept from any</li>
      <li>A link is established automatically between communicating processes</li>
      <li>Each pair has exactly one link between them</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Indirect Communication</h3>
    <p className="leading-relaxed">
      Messages are sent to and received from mailboxes (also called ports):
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>A link is established only if processes share a common mailbox</li>
      <li>A link may be associated with more than two processes</li>
      <li>Multiple links may exist between pairs of processes</li>
      <li>Mailboxes can be owned by a process or by the OS</li>
    </ul>

    {/* Synchronization */}
    <h2 className="text-3xl font-bold mt-8">Synchronization</h2>
    <p className="leading-relaxed">
      Message passing can be either synchronous (blocking) or asynchronous (non-blocking):
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Blocking</th>
            <th className="p-3 border">Non-blocking</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Send</td>
            <td className="p-3 border">Sender blocks until message is received</td>
            <td className="p-3 border">Sender continues after sending</td>
          </tr>
          <tr>
            <td className="p-3 border">Receive</td>
            <td className="p-3 border">Receiver blocks until message arrives</td>
            <td className="p-3 border">Receiver gets message or null</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Rendezvous</h3>
    <p className="leading-relaxed">
      When both send and receive are blocking, a rendezvous occurs. Both processes
      synchronize at the point of message exchange, simplifying coordination.
    </p>

    {/* Buffering */}
    <h2 className="text-3xl font-bold mt-8">Buffering</h2>
    <p className="leading-relaxed">
      Messages exchanged by processes reside in a temporary queue. The queue can be
      implemented in three ways:
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Capacity</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Behavior</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Zero Capacity</td>
            <td className="p-3 border">No buffering</td>
            <td className="p-3 border">Sender blocks until receiver ready</td>
          </tr>
          <tr>
            <td className="p-3 border">Bounded Capacity</td>
            <td className="p-3 border">Finite length queue</td>
            <td className="p-3 border">Sender blocks when queue full</td>
          </tr>
          <tr>
            <td className="p-3 border">Unbounded Capacity</td>
            <td className="p-3 border">Infinite length queue</td>
            <td className="p-3 border">Sender never blocks</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Message Queue Implementation */}
    <h2 className="text-3xl font-bold mt-8">POSIX Message Queues</h2>
    <p className="leading-relaxed">
      POSIX provides message queue APIs for implementing message passing:
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">mq_open()</td>
            <td className="p-3 border">Create or open a message queue</td>
          </tr>
          <tr>
            <td className="p-3 border">mq_send()</td>
            <td className="p-3 border">Send a message to the queue</td>
          </tr>
          <tr>
            <td className="p-3 border">mq_receive()</td>
            <td className="p-3 border">Receive a message from the queue</td>
          </tr>
          <tr>
            <td className="p-3 border">mq_close()</td>
            <td className="p-3 border">Close the message queue descriptor</td>
          </tr>
          <tr>
            <td className="p-3 border">mq_unlink()</td>
            <td className="p-3 border">Remove the message queue</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Code Example */}
    <h2 className="text-3xl font-bold mt-8">Example: Message Queue Communication</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Sender Process
#include <mqueue.h>
#include <string.h>

int main() {
    mqd_t mq;
    struct mq_attr attr;
    char buffer[1024];

    // Set queue attributes
    attr.mq_flags = 0;
    attr.mq_maxmsg = 10;
    attr.mq_msgsize = 1024;
    attr.mq_curmsgs = 0;

    // Create/open the queue
    mq = mq_open("/my_queue", O_CREAT | O_WRONLY, 0644, &attr);

    // Send a message
    strcpy(buffer, "Hello from sender!");
    mq_send(mq, buffer, strlen(buffer) + 1, 0);

    mq_close(mq);
    return 0;
}

// Receiver Process
#include <mqueue.h>
#include <stdio.h>

int main() {
    mqd_t mq;
    char buffer[1024];
    ssize_t bytes_read;

    // Open the queue
    mq = mq_open("/my_queue", O_RDONLY);

    // Receive message (blocking)
    bytes_read = mq_receive(mq, buffer, 1024, NULL);

    printf("Received: %s\\n", buffer);

    mq_close(mq);
    mq_unlink("/my_queue");
    return 0;
}`}
      </pre>
    </div>

    {/* Producer-Consumer with Message Passing */}
    <h2 className="text-3xl font-bold mt-8">Producer-Consumer Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Producer:                         Consumer:
─────────                         ─────────
while (true) {                    while (true) {
    item = produce_item();            receive(producer, &msg);
    msg.data = item;                  item = msg.data;
    send(consumer, msg);              consume_item(item);
}                                 }

Message Queue between Producer and Consumer:

Producer → [msg1|msg2|msg3|msg4|...] → Consumer

No shared memory needed!
Kernel manages the queue.
`}
      </pre>
    </div>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Easier to implement than shared memory</li>
      <li>No need for explicit synchronization by programmer</li>
      <li>Works across different machines (network communication)</li>
      <li>Processes are better isolated - more secure</li>
      <li>No race conditions on the communication mechanism</li>
      <li>Natural fit for distributed systems</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Slower than shared memory due to data copying</li>
      <li>Each message requires kernel intervention</li>
      <li>Higher overhead for large amounts of data</li>
      <li>Message size limits may apply</li>
      <li>More complex for bidirectional communication</li>
    </ul>

    {/* Comparison with Shared Memory */}
    <h2 className="text-3xl font-bold mt-8">Message Passing vs Shared Memory</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Message Passing</th>
            <th className="p-3 border">Shared Memory</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Data Transfer</td>
            <td className="p-3 border">Copy between address spaces</td>
            <td className="p-3 border">Direct access, no copying</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Slower</td>
            <td className="p-3 border">Faster</td>
          </tr>
          <tr>
            <td className="p-3 border">Synchronization</td>
            <td className="p-3 border">Built-in (implicit)</td>
            <td className="p-3 border">Must be added explicitly</td>
          </tr>
          <tr>
            <td className="p-3 border">Distributed Systems</td>
            <td className="p-3 border">Natural fit</td>
            <td className="p-3 border">Difficult</td>
          </tr>
          <tr>
            <td className="p-3 border">Debugging</td>
            <td className="p-3 border">Easier</td>
            <td className="p-3 border">Harder</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Message passing uses send() and receive() operations</li>
      <li>Can be direct (naming processes) or indirect (using mailboxes)</li>
      <li>Operations can be blocking or non-blocking</li>
      <li>Buffering affects when sender blocks</li>
      <li>Kernel involvement provides implicit synchronization</li>
      <li>Best suited for distributed systems and when isolation is important</li>
      <li>Trade-off between ease of use and performance</li>
    </ul>
  </div>
);

export default MessagePassing;
