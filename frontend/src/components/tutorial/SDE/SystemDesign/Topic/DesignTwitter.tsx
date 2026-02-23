import React from 'react';

const DesignTwitter: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Design Twitter
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Twitter (now X) is a social media platform where users post short messages called tweets.
      Users can follow other users, like and retweet posts, and see a personalized timeline.
      Designing Twitter involves handling massive scale with real-time feed generation,
      social graph management, and content delivery.
    </p>

    <h2 className="text-2xl font-bold mt-6">1. Requirements Gathering</h2>

    <h3 className="text-xl font-semibold mt-4">Functional Requirements</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Users can post tweets (text, images, videos) up to 280 characters</li>
      <li>Users can follow/unfollow other users</li>
      <li>Users can view their home timeline (tweets from people they follow)</li>
      <li>Users can like, retweet, and reply to tweets</li>
      <li>Users can search for tweets and other users</li>
      <li>Support for hashtags and mentions</li>
      <li>Direct messaging between users</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Non-Functional Requirements</h3>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>High Availability:</strong> 99.99% uptime</li>
      <li><strong>Low Latency:</strong> Timeline should load in less than 200ms</li>
      <li><strong>Scalability:</strong> Support 500M+ daily active users</li>
      <li><strong>Eventual Consistency:</strong> Acceptable for timeline and likes</li>
      <li><strong>Real-time:</strong> New tweets should appear quickly in followers' timelines</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Capacity Estimation</h3>
    <div className="bg-gray-100 p-4 rounded-lg mt-2">
      <ul className="list-disc list-inside space-y-1 text-sm">
        <li>Daily Active Users (DAU): 500 million</li>
        <li>Tweets per day: 500 million</li>
        <li>Average followers per user: 200</li>
        <li>Timeline reads per day: 500M users x 10 reads = 5 billion</li>
        <li>Read:Write ratio: 10:1</li>
        <li>Tweet size: ~1KB (text + metadata)</li>
        <li>Media storage: 1MB average per media tweet</li>
        <li>Storage per day: 500TB+ (including media)</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">2. High-Level Architecture</h2>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <pre className="text-sm overflow-x-auto">
{`
┌─────────────┐     ┌─────────────┐     ┌─────────────────────────────────────┐
│   Mobile/   │────▶│    CDN      │────▶│          Load Balancer              │
│   Web App   │     │ (CloudFront)│     │                                     │
└─────────────┘     └─────────────┘     └────────────────┬────────────────────┘
                                                         │
         ┌───────────────────────────────────────────────┼───────────────────────────────────┐
         │                               │               │               │                   │
         ▼                               ▼               ▼               ▼                   ▼
┌─────────────────┐            ┌─────────────┐   ┌─────────────┐ ┌─────────────┐   ┌─────────────┐
│   Tweet Service │            │ User Service│   │Feed Service │ │Search Service│  │ Notification│
│   (Post/Get)    │            │ (Follow)    │   │ (Timeline)  │ │(Elasticsearch)│ │   Service   │
└────────┬────────┘            └──────┬──────┘   └──────┬──────┘ └──────┬──────┘   └──────┬──────┘
         │                            │                 │               │                  │
         ▼                            ▼                 ▼               ▼                  ▼
┌─────────────────┐            ┌─────────────┐   ┌─────────────┐ ┌─────────────┐   ┌─────────────┐
│  Tweet Database │            │ User/Graph  │   │ Timeline    │ │Search Index │   │ Message     │
│  (Cassandra)    │            │  Database   │   │   Cache     │ │             │   │   Queue     │
└─────────────────┘            └─────────────┘   │  (Redis)    │ └─────────────┘   │  (Kafka)    │
                                                 └─────────────┘                   └─────────────┘
`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Core Services</h3>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Tweet Service:</strong> Handles creating, reading, and deleting tweets</li>
      <li><strong>User Service:</strong> Manages user profiles, authentication, and social graph</li>
      <li><strong>Feed Service:</strong> Generates and serves user timelines</li>
      <li><strong>Search Service:</strong> Full-text search for tweets and users</li>
      <li><strong>Notification Service:</strong> Push notifications for mentions, likes, retweets</li>
      <li><strong>Media Service:</strong> Upload, process, and serve images/videos</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">3. Timeline Generation Strategies</h2>

    <div className="space-y-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Approach 1: Pull Model (Fan-out on Read)</h4>
        <p className="mt-2">Generate timeline when user requests it</p>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Query all users the person follows</li>
          <li>Fetch recent tweets from each followed user</li>
          <li>Merge and sort tweets by timestamp</li>
          <li><strong>Pros:</strong> Simple, no wasted computation for inactive users</li>
          <li><strong>Cons:</strong> Slow for users following many accounts, high read latency</li>
        </ul>
      </div>

      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Approach 2: Push Model (Fan-out on Write)</h4>
        <p className="mt-2">Pre-compute timelines when a tweet is posted</p>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>When user posts tweet, push to all followers' timeline caches</li>
          <li>Timeline read is a simple cache lookup</li>
          <li><strong>Pros:</strong> Very fast reads, constant time complexity</li>
          <li><strong>Cons:</strong> Celebrities with millions of followers cause write amplification</li>
        </ul>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">Approach 3: Hybrid (Recommended)</h4>
        <p className="mt-2">Combine push and pull based on user type</p>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Regular users (less than 10K followers): Use push model</li>
          <li>Celebrities (more than 10K followers): Use pull model</li>
          <li>Timeline = Pre-computed cache + Real-time fetch from celebrities</li>
          <li><strong>Pros:</strong> Best of both worlds, handles scale efficiently</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">4. Database Schema Design</h2>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Users Table</h4>
      <pre className="text-sm overflow-x-auto">
{`CREATE TABLE users (
    user_id         BIGINT PRIMARY KEY,
    username        VARCHAR(50) UNIQUE NOT NULL,
    email           VARCHAR(255) UNIQUE NOT NULL,
    password_hash   VARCHAR(255) NOT NULL,
    display_name    VARCHAR(100),
    bio             VARCHAR(280),
    profile_image   VARCHAR(500),
    created_at      TIMESTAMP,
    followers_count BIGINT DEFAULT 0,
    following_count BIGINT DEFAULT 0
);`}
      </pre>
    </div>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Tweets Table (Cassandra)</h4>
      <pre className="text-sm overflow-x-auto">
{`CREATE TABLE tweets (
    tweet_id        BIGINT,
    user_id         BIGINT,
    content         TEXT,
    media_urls      LIST<TEXT>,
    created_at      TIMESTAMP,
    likes_count     BIGINT,
    retweets_count  BIGINT,
    replies_count   BIGINT,
    PRIMARY KEY (user_id, tweet_id)
) WITH CLUSTERING ORDER BY (tweet_id DESC);`}
      </pre>
    </div>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Follows Table (Graph Database or Cassandra)</h4>
      <pre className="text-sm overflow-x-auto">
{`CREATE TABLE followers (
    user_id         BIGINT,
    follower_id     BIGINT,
    followed_at     TIMESTAMP,
    PRIMARY KEY (user_id, follower_id)
);

CREATE TABLE following (
    user_id         BIGINT,
    following_id    BIGINT,
    followed_at     TIMESTAMP,
    PRIMARY KEY (user_id, following_id)
);`}
      </pre>
    </div>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Timeline Cache (Redis)</h4>
      <pre className="text-sm overflow-x-auto">
{`Key: timeline:{user_id}
Value: Sorted Set of tweet_ids scored by timestamp

ZADD timeline:12345 1705654800000 "tweet_id_1"
ZRANGE timeline:12345 0 100 REV  // Get latest 100 tweets`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">5. API Design</h2>

    <div className="space-y-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Post a Tweet</h4>
        <pre className="text-sm mt-2">
{`POST /api/v1/tweets
Authorization: Bearer {token}

Request:
{
    "content": "Hello Twitter!",
    "media_ids": ["media_123", "media_456"],
    "reply_to": "tweet_789"  // optional
}

Response: 201 Created
{
    "tweet_id": "1234567890",
    "content": "Hello Twitter!",
    "created_at": "2026-01-19T10:30:00Z",
    "user": { "id": "123", "username": "john_doe" }
}`}
        </pre>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Get Home Timeline</h4>
        <pre className="text-sm mt-2">
{`GET /api/v1/timeline?cursor={cursor}&limit=20
Authorization: Bearer {token}

Response:
{
    "tweets": [
        {
            "tweet_id": "123",
            "content": "...",
            "user": {...},
            "created_at": "...",
            "likes_count": 42,
            "retweeted": false
        }
    ],
    "next_cursor": "abc123"
}`}
        </pre>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Follow User</h4>
        <pre className="text-sm mt-2">
{`POST /api/v1/users/{user_id}/follow
Authorization: Bearer {token}

Response: 200 OK
{
    "following": true,
    "followers_count": 1001
}`}
        </pre>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Search Tweets</h4>
        <pre className="text-sm mt-2">
{`GET /api/v1/search?q=hello&type=tweets&limit=20

Response:
{
    "results": [...],
    "next_cursor": "..."
}`}
        </pre>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">6. Tweet Posting Flow</h2>

    <ol className="list-decimal list-inside space-y-2">
      <li>User posts a tweet via mobile/web app</li>
      <li>Request goes through load balancer to Tweet Service</li>
      <li>Tweet Service validates content and generates unique tweet_id (Snowflake)</li>
      <li>Store tweet in Tweet Database (Cassandra)</li>
      <li>If media attached, upload to Media Service (S3 + CDN)</li>
      <li>Publish event to Kafka message queue</li>
      <li>Fan-out Service consumes event and updates followers' timeline caches</li>
      <li>Search indexer updates Elasticsearch</li>
      <li>Notification Service sends push notifications for mentions</li>
      <li>Return success response to user</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">7. Scalability Considerations</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Data Partitioning</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Shard tweets by user_id for user timeline queries</li>
          <li>Time-based partitioning for recent tweets</li>
          <li>Geographic sharding for global users</li>
          <li>Consistent hashing for even distribution</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Caching Strategy</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Redis for timeline caches (per user)</li>
          <li>Memcached for tweet objects</li>
          <li>CDN for media content</li>
          <li>Cache invalidation via pub/sub</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">ID Generation (Snowflake)</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>64-bit unique IDs</li>
          <li>Time-ordered for sorting</li>
          <li>Distributed ID generation</li>
          <li>No coordination required</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Message Queue (Kafka)</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Decouple tweet posting from fan-out</li>
          <li>Handle traffic spikes</li>
          <li>Ensure reliable delivery</li>
          <li>Enable async processing</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">8. Celebrity Problem (Hot Spots)</h2>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
      <h4 className="font-bold text-yellow-800">The Challenge</h4>
      <p className="mt-2">
        Celebrities like Elon Musk have 100M+ followers. Push model would require
        100M+ cache updates per tweet, causing massive write amplification.
      </p>
      <h4 className="font-bold text-yellow-800 mt-4">Solutions</h4>
      <ul className="list-disc list-inside mt-2 text-sm">
        <li>Use pull model for celebrities (fetch on read)</li>
        <li>Maintain a list of celebrity user_ids</li>
        <li>Timeline = Cached tweets + Real-time celebrity fetch</li>
        <li>Separate compute cluster for celebrity tweets</li>
        <li>Rate limit how often celebrity timelines are refreshed</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">9. Trade-offs and Decisions</h2>

    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Consistency vs Availability</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Choose availability (AP) for timeline reads</li>
          <li>Eventual consistency is acceptable for likes/retweets counts</li>
          <li>Strong consistency for user authentication</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Storage Choices</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Cassandra: High write throughput, time-series data</li>
          <li>Redis: Fast timeline cache, sorted sets</li>
          <li>Elasticsearch: Full-text search</li>
          <li>S3 + CDN: Media storage and delivery</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Real-time vs Batch</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Real-time: Fan-out for timeline updates</li>
          <li>Batch: Analytics, trending topics computation</li>
          <li>Use stream processing (Kafka Streams, Flink)</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">10. Additional Features</h2>

    <ul className="list-disc list-inside space-y-2">
      <li><strong>Trending Topics:</strong> Count hashtag frequency using stream processing</li>
      <li><strong>Search:</strong> Elasticsearch with inverted index on tweet content</li>
      <li><strong>Recommendations:</strong> ML-based who to follow suggestions</li>
      <li><strong>Analytics:</strong> Track impressions, engagement metrics</li>
      <li><strong>Spam Detection:</strong> ML models to detect and filter spam</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
      <p className="text-blue-800">
        <strong>Key Interview Tip:</strong> Focus on the timeline generation problem as it is
        the core challenge. Discuss the trade-offs between push and pull models, and explain
        why a hybrid approach works best at Twitter's scale.
      </p>
    </div>
  </div>
);

export default DesignTwitter;
