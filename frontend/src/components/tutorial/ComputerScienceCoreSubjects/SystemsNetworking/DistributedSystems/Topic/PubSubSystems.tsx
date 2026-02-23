import React from "react";

const PubSubSystems: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Publish-Subscribe Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Publish-subscribe (pub/sub) is a messaging pattern where publishers send
      messages without knowing who will receive them, and subscribers receive
      messages based on their interests without knowing who sent them.
    </p>

    <h2 className="text-3xl font-bold mt-8">Pub/Sub Architecture</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Publish-Subscribe Model:

PUBLISHERS                BROKER                 SUBSCRIBERS
┌──────────┐                                    ┌──────────┐
│Publisher │───publish──►  Topic A  ──notify──►│Subscriber│
│    1     │               ┌────┐               │    X     │
└──────────┘               │    │               └──────────┘
                           │    │
┌──────────┐               │    │               ┌──────────┐
│Publisher │───publish──►  │    │  ──notify──►│Subscriber│
│    2     │               │    │               │    Y     │
└──────────┘               │    │               └──────────┘
                           └────┘
                           Topic B              ┌──────────┐
                           ┌────┐  ──notify──►│Subscriber│
                           └────┘               │    Z     │
                                                └──────────┘

- Publishers don't know subscribers
- Subscribers subscribe to topics of interest
- Broker routes messages based on subscriptions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Pub/Sub Systems</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Topic-Based</h3>
        <p className="leading-relaxed">
          Messages are published to named topics. Subscribers receive all
          messages published to topics they subscribe to.
        </p>
        <p className="text-sm mt-2 italic">Example: MQTT, Kafka</p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Content-Based</h3>
        <p className="leading-relaxed">
          Subscribers specify predicates on message attributes. Only matching
          messages are delivered.
        </p>
        <p className="text-sm mt-2 italic">Example: TIBCO, Siena</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantage</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Loose Coupling</td>
            <td className="p-3 border">
              Publishers and subscribers are independent
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scalability</td>
            <td className="p-3 border">
              Easy to add publishers or subscribers
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Flexibility</td>
            <td className="p-3 border">
              Dynamic subscription management
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">One-to-Many</td>
            <td className="p-3 border">
              Single message reaches multiple subscribers
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Use Cases</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Event-driven architectures:</strong> Microservices communication</li>
      <li><strong>Real-time notifications:</strong> Push notifications, alerts</li>
      <li><strong>IoT applications:</strong> Sensor data distribution</li>
      <li><strong>News feeds:</strong> Social media updates</li>
      <li><strong>Stock tickers:</strong> Financial data streaming</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Popular Pub/Sub Systems</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Apache Kafka</h3>
        <p className="leading-relaxed">
          Distributed event streaming platform with high throughput and durability.
        </p>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Google Pub/Sub</h3>
        <p className="leading-relaxed">
          Fully managed real-time messaging service in Google Cloud.
        </p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">AWS SNS</h3>
        <p className="leading-relaxed">
          Simple Notification Service for push-based pub/sub messaging.
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Pub/sub decouples message producers from consumers</li>
        <li>Messages are filtered by topics or content</li>
        <li>Enables one-to-many communication patterns</li>
        <li>Ideal for event-driven and real-time applications</li>
        <li>Broker handles message routing and delivery</li>
      </ul>
    </div>
  </div>
);

export default PubSubSystems;
