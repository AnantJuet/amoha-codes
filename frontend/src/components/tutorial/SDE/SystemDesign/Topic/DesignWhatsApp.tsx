import React from 'react';

const DesignWhatsApp: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Design WhatsApp
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      WhatsApp is a real-time messaging platform supporting 1:1 chats, group messaging, media sharing,
      and voice/video calls for billions of users. Let's design a scalable architecture for its core features.
    </p>

    <h2 className="text-2xl font-bold mt-6">Requirements</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Functional</h4>
        <ul className="text-sm mt-2 space-y-1">
          <li>• 1:1 and group messaging</li>
          <li>• Online/offline status</li>
          <li>• Read receipts and typing indicators</li>
          <li>• Media sharing (images, videos, documents)</li>
          <li>• End-to-end encryption</li>
          <li>• Push notifications</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Non-Functional</h4>
        <ul className="text-sm mt-2 space-y-1">
          <li>• Real-time delivery ({"<"}100ms latency)</li>
          <li>• High availability (99.99%)</li>
          <li>• Support 2B+ users</li>
          <li>• Message durability</li>
          <li>• Offline support</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Capacity Estimation</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <ul className="space-y-1 text-sm">
        <li><strong>Users:</strong> 2 billion</li>
        <li><strong>Daily Active Users:</strong> 500 million</li>
        <li><strong>Messages/day:</strong> 100 billion</li>
        <li><strong>Messages/second:</strong> ~1.15 million</li>
        <li><strong>Average message size:</strong> 100 bytes</li>
        <li><strong>Storage/day:</strong> 100B × 100B = 10 TB</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">High-Level Architecture</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <pre className="text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────────────┐
│                           Mobile Apps                                │
│                    (iOS, Android, Web Client)                        │
└─────────────────────────┬───────────────────────────────────────────┘
                          │ WebSocket / HTTP
                          ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      Load Balancer (L7)                              │
│                   (Connection Routing)                               │
└─────────────────────────┬───────────────────────────────────────────┘
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│  Chat       │   │  Presence   │   │  Media      │
│  Service    │   │  Service    │   │  Service    │
│ (WebSocket) │   │  (Status)   │   │  (Upload)   │
└──────┬──────┘   └──────┬──────┘   └──────┬──────┘
       │                 │                 │
       ▼                 ▼                 ▼
┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│  Message    │   │   Redis     │   │    S3 /     │
│   Queue     │   │  (Pub/Sub)  │   │    CDN      │
│  (Kafka)    │   │             │   │             │
└──────┬──────┘   └─────────────┘   └─────────────┘
       │
       ▼
┌─────────────────────────────────────────────────────────────────────┐
│                     Message Storage                                  │
│   ┌───────────────┐    ┌───────────────┐    ┌───────────────┐       │
│   │  Cassandra    │    │    MySQL      │    │  ElasticSearch │       │
│   │  (Messages)   │    │   (Users)     │    │   (Search)     │       │
│   └───────────────┘    └───────────────┘    └───────────────┘       │
└─────────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Core Components</h2>

    <h3 className="text-xl font-bold mt-4">1. Connection Management</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-2 overflow-x-auto">
      <pre className="text-sm">{`// WebSocket connection handling
class ChatServer {
    constructor() {
        this.connections = new Map();  // userId -> WebSocket
        this.userServer = new Map();   // userId -> serverId
    }

    handleConnection(ws, userId) {
        // Store connection
        this.connections.set(userId, ws);

        // Register in Redis for routing
        redis.set(\`user:\${userId}:server\`, SERVER_ID);
        redis.publish('presence', JSON.stringify({
            userId, status: 'online'
        }));

        ws.on('close', () => this.handleDisconnect(userId));
    }

    async sendMessage(toUserId, message) {
        // Check if user connected to this server
        const ws = this.connections.get(toUserId);

        if (ws) {
            ws.send(JSON.stringify(message));
            return true;
        }

        // User on different server - route through message queue
        const serverIduser = await redis.get(\`user:\${toUserId}:server\`);
        if (serverId) {
            kafka.send('chat-messages', {
                targetServer: serverId,
                toUserId,
                message
            });
        } else {
            // User offline - store for later
            await this.storeOfflineMessage(toUserId, message);
        }
    }
}`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-4">2. Message Flow</h3>
    <div className="bg-gray-100 p-4 rounded-lg">
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Send:</strong> User A sends message to User B</li>
        <li><strong>Receive:</strong> Chat server receives via WebSocket</li>
        <li><strong>Acknowledge:</strong> Server sends delivery receipt to A</li>
        <li><strong>Store:</strong> Message persisted to Cassandra</li>
        <li><strong>Route:</strong> If B online, deliver immediately; else queue</li>
        <li><strong>Deliver:</strong> B receives message, sends read receipt</li>
        <li><strong>Update:</strong> A receives read receipt</li>
      </ol>
    </div>

    <h3 className="text-xl font-bold mt-4">3. Data Models</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-2 overflow-x-auto">
      <pre className="text-sm">{`// Cassandra Tables for Messages
CREATE TABLE messages (
    conversation_id UUID,
    message_id TIMEUUID,
    sender_id UUID,
    content TEXT,
    content_type TEXT,  -- text, image, video
    media_url TEXT,
    created_at TIMESTAMP,
    PRIMARY KEY (conversation_id, message_id)
) WITH CLUSTERING ORDER BY (message_id DESC);

CREATE TABLE user_conversations (
    user_id UUID,
    conversation_id UUID,
    last_message_id TIMEUUID,
    last_message_preview TEXT,
    unread_count INT,
    updated_at TIMESTAMP,
    PRIMARY KEY (user_id, updated_at)
) WITH CLUSTERING ORDER BY (updated_at DESC);

// MySQL for User data
CREATE TABLE users (
    id BIGINT PRIMARY KEY,
    phone_number VARCHAR(20) UNIQUE,
    display_name VARCHAR(100),
    profile_pic_url VARCHAR(255),
    status_message VARCHAR(200),
    public_key TEXT,  -- For E2E encryption
    created_at TIMESTAMP
);

CREATE TABLE groups (
    id BIGINT PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    admin_ids JSON,
    member_count INT,
    created_at TIMESTAMP
);`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-4">4. End-to-End Encryption</h3>
    <div className="bg-yellow-50 p-4 rounded-lg">
      <p className="font-semibold">Signal Protocol Implementation:</p>
      <ul className="list-disc list-inside mt-2 text-sm space-y-1">
        <li>Each user generates public/private key pair on device</li>
        <li>Public keys exchanged via server</li>
        <li>Messages encrypted with recipient's public key</li>
        <li>Server cannot read message content</li>
        <li>Perfect forward secrecy with ephemeral keys</li>
      </ul>
    </div>

    <h3 className="text-xl font-bold mt-4">5. Group Messaging</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-2 overflow-x-auto">
      <pre className="text-sm">{`async function sendGroupMessage(groupId, senderId, message) {
    // Get group members
    const members = await db.query(
        'SELECT user_id FROM group_members WHERE group_id = ?',
        [groupId]
    );

    // Store message once
    const messageId = await storeMessage(groupId, senderId, message);

    // Fan-out to all members
    const deliveryPromises = members.map(member => {
        if (member.user_id !== senderId) {
            return deliverToUser(member.user_id, {
                messageId,
                groupId,
                senderId,
                content: message,
                timestamp: Date.now()
            });
        }
    });

    // Track delivery status
    await Promise.allSettled(deliveryPromises);
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Design Decisions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Decision</th>
            <th className="p-3 border">Choice</th>
            <th className="p-3 border">Reason</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Protocol</td>
            <td className="p-3 border">WebSocket</td>
            <td className="p-3 border">Real-time bidirectional communication</td>
          </tr>
          <tr>
            <td className="p-3 border">Message DB</td>
            <td className="p-3 border">Cassandra</td>
            <td className="p-3 border">High write throughput, time-series data</td>
          </tr>
          <tr>
            <td className="p-3 border">Presence</td>
            <td className="p-3 border">Redis Pub/Sub</td>
            <td className="p-3 border">Fast in-memory, pub/sub support</td>
          </tr>
          <tr>
            <td className="p-3 border">Media</td>
            <td className="p-3 border">S3 + CDN</td>
            <td className="p-3 border">Scalable storage, global delivery</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Scaling Strategies</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Horizontal scaling:</strong> Add more WebSocket servers</li>
      <li><strong>Sharding:</strong> Partition by user_id or conversation_id</li>
      <li><strong>Read replicas:</strong> For message history queries</li>
      <li><strong>Geographic distribution:</strong> Deploy in multiple regions</li>
      <li><strong>Connection pooling:</strong> Efficient database connections</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Interview Tip:</strong> Focus on real-time delivery, message ordering, and handling
        offline users. Discuss trade-offs between consistency and availability for presence status.
      </p>
    </div>
  </div>
);

export default DesignWhatsApp;
