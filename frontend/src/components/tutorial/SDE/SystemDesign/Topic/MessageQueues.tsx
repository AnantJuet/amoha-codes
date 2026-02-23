import React from 'react';

const MessageQueues: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Message Queues
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A message queue is a form of asynchronous service-to-service communication used in
      distributed systems. Messages are stored in a queue until they are processed and deleted.
      Message queues enable decoupling of services, improving scalability, reliability, and
      fault tolerance.
    </p>

    <h2 className="text-2xl font-bold mt-6">How Message Queues Work</h2>
    <p className="leading-relaxed">
      A producer sends messages to a queue, and a consumer retrieves and processes them.
      The queue acts as a buffer between the producer and consumer, allowing them to operate
      independently and at different speeds.
    </p>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">Basic Message Queue Flow:</p>
      <pre className="mt-2 text-sm overflow-x-auto">
{`┌──────────┐     ┌─────────────────────────┐     ┌──────────┐
│ Producer │────►│      Message Queue      │────►│ Consumer │
│          │     │ ┌───┬───┬───┬───┬───┐   │     │          │
│ Send Msg │     │ │ 1 │ 2 │ 3 │ 4 │ 5 │   │     │Process Msg│
└──────────┘     │ └───┴───┴───┴───┴───┘   │     └──────────┘
                 └─────────────────────────┘

Producer sends message → Queue stores message → Consumer processes message`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Concepts</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Producer</h4>
        <p className="mt-2 text-sm">Application that sends messages to the queue. Also known as publisher or sender.</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Consumer</h4>
        <p className="mt-2 text-sm">Application that receives and processes messages from the queue. Also known as subscriber or receiver.</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">Message</h4>
        <p className="mt-2 text-sm">The data being transmitted. Can be JSON, XML, binary, or any serialized format.</p>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
        <h4 className="font-bold text-orange-800">Queue</h4>
        <p className="mt-2 text-sm">The buffer that stores messages until they are consumed. Provides ordering and durability.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Messaging Patterns</h2>

    <h3 className="text-xl font-semibold mt-4">1. Point-to-Point (Queue)</h3>
    <p className="leading-relaxed">
      Each message is consumed by exactly one consumer. Multiple consumers can listen,
      but only one receives each message.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-2">
      <pre className="text-sm overflow-x-auto">
{`Producer → Queue → Consumer 1 (gets message)
                → Consumer 2 (waiting)
                → Consumer 3 (waiting)`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">2. Publish-Subscribe (Topic)</h3>
    <p className="leading-relaxed">
      Messages are broadcast to all subscribed consumers. Each subscriber receives a copy
      of every message.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-2">
      <pre className="text-sm overflow-x-auto">
{`                    ┌─► Subscriber 1 (gets copy)
Publisher → Topic ──┼─► Subscriber 2 (gets copy)
                    └─► Subscriber 3 (gets copy)`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">3. Fan-Out Pattern</h3>
    <p className="leading-relaxed">
      One message triggers multiple independent processing paths. Useful for parallel processing.
    </p>

    <h3 className="text-xl font-semibold mt-4">4. Request-Reply Pattern</h3>
    <p className="leading-relaxed">
      Producer sends a request and expects a response. Uses correlation IDs to match
      requests with replies.
    </p>

    <h2 className="text-2xl font-bold mt-6">Message Delivery Guarantees</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Guarantee</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">At Most Once</td>
            <td className="p-3 border">Message may be lost, but never delivered twice</td>
            <td className="p-3 border">Metrics, logs (acceptable loss)</td>
          </tr>
          <tr>
            <td className="p-3 border">At Least Once</td>
            <td className="p-3 border">Message will be delivered, but may be duplicated</td>
            <td className="p-3 border">Most common, requires idempotent consumers</td>
          </tr>
          <tr>
            <td className="p-3 border">Exactly Once</td>
            <td className="p-3 border">Message delivered exactly once (hardest to achieve)</td>
            <td className="p-3 border">Financial transactions, critical operations</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Popular Message Queue Systems</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-orange-50 p-4 rounded-lg">
        <h4 className="font-bold text-orange-800">Apache Kafka</h4>
        <p className="mt-2 text-sm">Distributed streaming platform. High throughput, persistent, ordered logs.</p>
        <p className="mt-1 text-xs text-gray-600">Best for: Event streaming, log aggregation, real-time analytics</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">RabbitMQ</h4>
        <p className="mt-2 text-sm">Traditional message broker with AMQP protocol. Rich routing capabilities.</p>
        <p className="mt-1 text-xs text-gray-600">Best for: Complex routing, traditional messaging patterns</p>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-bold text-yellow-800">Amazon SQS</h4>
        <p className="mt-2 text-sm">Fully managed queue service. Scales automatically, pay per use.</p>
        <p className="mt-1 text-xs text-gray-600">Best for: AWS workloads, serverless architectures</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold text-purple-800">Redis Streams</h4>
        <p className="mt-2 text-sm">In-memory data structure store with streaming capabilities.</p>
        <p className="mt-1 text-xs text-gray-600">Best for: Low latency, when using Redis already</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Apache ActiveMQ</h4>
        <p className="mt-2 text-sm">Enterprise message broker supporting JMS, AMQP, MQTT.</p>
        <p className="mt-1 text-xs text-gray-600">Best for: Enterprise Java applications</p>
      </div>
      <div className="bg-red-50 p-4 rounded-lg">
        <h4 className="font-bold text-red-800">Google Pub/Sub</h4>
        <p className="mt-2 text-sm">Serverless messaging service with global distribution.</p>
        <p className="mt-1 text-xs text-gray-600">Best for: GCP workloads, global event distribution</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Use Cases for Message Queues</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Asynchronous Processing:</strong> Email sending, image processing, PDF generation</li>
      <li><strong>Decoupling Services:</strong> Services can evolve independently</li>
      <li><strong>Load Leveling:</strong> Handle traffic spikes without overwhelming services</li>
      <li><strong>Event Sourcing:</strong> Store events as the source of truth</li>
      <li><strong>Data Pipelines:</strong> ETL processes, log aggregation</li>
      <li><strong>Microservices Communication:</strong> Service-to-service messaging</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Advantages of Message Queues</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Decoupling:</strong> Producers and consumers are independent</li>
      <li><strong>Scalability:</strong> Add more consumers to handle load</li>
      <li><strong>Reliability:</strong> Messages persist even if consumer is down</li>
      <li><strong>Asynchronous:</strong> Producer does not wait for consumer</li>
      <li><strong>Load Balancing:</strong> Work distributed across consumers</li>
      <li><strong>Fault Tolerance:</strong> System continues if parts fail</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages of Message Queues</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Complexity:</strong> Additional infrastructure to manage</li>
      <li><strong>Eventual Consistency:</strong> Not suitable for immediate responses</li>
      <li><strong>Debugging Difficulty:</strong> Harder to trace async flows</li>
      <li><strong>Message Ordering:</strong> Maintaining order can be challenging</li>
      <li><strong>Duplicate Handling:</strong> Consumers must be idempotent</li>
      <li><strong>Queue Management:</strong> Need to handle dead letters, retries</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Dead Letter Queue (DLQ)</h2>
    <p className="leading-relaxed">
      A Dead Letter Queue stores messages that cannot be processed successfully after
      multiple attempts. This prevents bad messages from blocking the queue and allows
      for later investigation.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <pre className="text-sm overflow-x-auto">
{`Main Queue → Consumer → Success → Message deleted
                     → Failure → Retry (N times)
                              → Move to DLQ after max retries`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Real-World Examples</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <ul className="space-y-3">
        <li><strong>LinkedIn:</strong> Uses Kafka for real-time activity tracking and data pipelines</li>
        <li><strong>Netflix:</strong> Kafka handles billions of messages per day for various services</li>
        <li><strong>Uber:</strong> Uses Kafka for location updates and surge pricing calculations</li>
        <li><strong>Instagram:</strong> RabbitMQ for task distribution and asynchronous processing</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Make consumers idempotent to handle duplicates</li>
      <li>Set up Dead Letter Queues for failed messages</li>
      <li>Monitor queue depth and consumer lag</li>
      <li>Use message acknowledgment to ensure processing</li>
      <li>Implement exponential backoff for retries</li>
      <li>Keep messages small; use references for large data</li>
      <li>Plan for message schema evolution</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> Message queues introduce eventual consistency into your system.
        Design your application to handle the fact that messages may be processed out of order
        or with some delay.
      </p>
    </div>
  </div>
);

export default MessageQueues;
