import React from 'react';

const DesignURLShortener: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Design URL Shortener (like bit.ly)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A URL shortener is a service that takes a long URL and converts it into a shorter, more manageable link.
      When users click on the short link, they are redirected to the original URL. Popular examples include
      bit.ly, TinyURL, and goo.gl. This is a classic system design interview question that tests your
      understanding of hashing, databases, and distributed systems.
    </p>

    <h2 className="text-2xl font-bold mt-6">1. Requirements Gathering</h2>

    <h3 className="text-xl font-semibold mt-4">Functional Requirements</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Given a long URL, generate a unique short URL</li>
      <li>When users access the short URL, redirect them to the original long URL</li>
      <li>Users can optionally create custom short URLs</li>
      <li>Short URLs should have an expiration time (optional)</li>
      <li>Track analytics: click count, referrer, location, timestamp</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Non-Functional Requirements</h3>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>High Availability:</strong> The system should be highly available (99.9% uptime)</li>
      <li><strong>Low Latency:</strong> URL redirection should happen in real-time (less than 100ms)</li>
      <li><strong>Scalability:</strong> Handle billions of URLs and millions of redirections per day</li>
      <li><strong>Durability:</strong> Once created, short URLs should not be lost</li>
      <li><strong>Unpredictability:</strong> Short URLs should not be easily guessable</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Capacity Estimation</h3>
    <div className="bg-gray-100 p-4 rounded-lg mt-2">
      <ul className="list-disc list-inside space-y-1 text-sm">
        <li>New URLs per month: 500 million</li>
        <li>Read:Write ratio: 100:1 (reads are much more frequent)</li>
        <li>Redirections per month: 50 billion</li>
        <li>Queries per second (writes): ~200 URL/s</li>
        <li>Queries per second (reads): ~20,000 redirects/s</li>
        <li>Storage per URL: ~500 bytes (URL + metadata)</li>
        <li>Storage for 5 years: 500M x 12 x 5 x 500 bytes = ~15 TB</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">2. High-Level Architecture</h2>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <pre className="text-sm overflow-x-auto">
{`
┌─────────────┐     ┌─────────────┐     ┌─────────────────┐
│   Client    │────▶│ Load Balancer│────▶│  Application    │
│  (Browser)  │     │    (Nginx)   │     │   Servers       │
└─────────────┘     └─────────────┘     └────────┬────────┘
                                                  │
                    ┌─────────────────────────────┼─────────────────────────────┐
                    │                             │                             │
                    ▼                             ▼                             ▼
            ┌───────────────┐            ┌───────────────┐            ┌───────────────┐
            │    Cache      │            │   Database    │            │  Key Generator │
            │   (Redis)     │            │  (Cassandra)  │            │    Service     │
            └───────────────┘            └───────────────┘            └───────────────┘
`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Components</h3>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Load Balancer:</strong> Distributes requests across application servers</li>
      <li><strong>Application Servers:</strong> Handle URL shortening and redirection logic</li>
      <li><strong>Cache (Redis):</strong> Store frequently accessed URLs for fast retrieval</li>
      <li><strong>Database:</strong> Persistent storage for URL mappings</li>
      <li><strong>Key Generation Service:</strong> Pre-generates unique keys for short URLs</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">3. URL Shortening Algorithms</h2>

    <div className="space-y-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Option 1: Base62 Encoding</h4>
        <p className="mt-2">Convert a unique ID to a base62 string (a-z, A-Z, 0-9)</p>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>6 characters can represent 62^6 = ~56 billion unique URLs</li>
          <li>7 characters can represent 62^7 = ~3.5 trillion unique URLs</li>
          <li>Simple and predictable length</li>
        </ul>
      </div>

      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Option 2: MD5/SHA256 Hash</h4>
        <p className="mt-2">Hash the long URL and take first 6-7 characters</p>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Same URL always produces same short URL</li>
          <li>Collision handling required</li>
          <li>Not sequential, harder to guess</li>
        </ul>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">Option 3: Key Generation Service (Recommended)</h4>
        <p className="mt-2">Pre-generate unique keys and store in a separate database</p>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>No collision issues</li>
          <li>Keys are generated offline</li>
          <li>Fast key assignment</li>
          <li>Use two tables: used_keys and unused_keys</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">4. Database Schema Design</h2>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">URL Table</h4>
      <pre className="text-sm overflow-x-auto">
{`CREATE TABLE urls (
    short_key       VARCHAR(7) PRIMARY KEY,
    original_url    VARCHAR(2048) NOT NULL,
    user_id         BIGINT,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at      TIMESTAMP,
    click_count     BIGINT DEFAULT 0,

    INDEX idx_user_id (user_id),
    INDEX idx_created_at (created_at)
);`}
      </pre>
    </div>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Analytics Table</h4>
      <pre className="text-sm overflow-x-auto">
{`CREATE TABLE analytics (
    id              BIGINT AUTO_INCREMENT PRIMARY KEY,
    short_key       VARCHAR(7) NOT NULL,
    clicked_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    referrer        VARCHAR(2048),
    user_agent      VARCHAR(512),
    ip_address      VARCHAR(45),
    country         VARCHAR(100),

    INDEX idx_short_key (short_key),
    INDEX idx_clicked_at (clicked_at)
);`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Database Choice</h3>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>NoSQL (Cassandra/DynamoDB):</strong> Better for high write throughput and horizontal scaling</li>
      <li><strong>SQL (MySQL/PostgreSQL):</strong> Good for smaller scale with complex queries</li>
      <li><strong>Recommended:</strong> Cassandra for URL storage, Redis for caching</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">5. API Design</h2>

    <div className="space-y-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Create Short URL</h4>
        <pre className="text-sm mt-2">
{`POST /api/v1/shorten
Request:
{
    "original_url": "https://example.com/very/long/url/path",
    "custom_alias": "mylink",  // optional
    "expires_at": "2026-12-31T23:59:59Z"  // optional
}

Response:
{
    "short_url": "https://short.ly/abc123",
    "original_url": "https://example.com/very/long/url/path",
    "expires_at": "2026-12-31T23:59:59Z"
}`}
        </pre>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Redirect (GET)</h4>
        <pre className="text-sm mt-2">
{`GET /{short_key}
Example: GET /abc123

Response: HTTP 301/302 Redirect to original URL
Header: Location: https://example.com/very/long/url/path`}
        </pre>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Get URL Analytics</h4>
        <pre className="text-sm mt-2">
{`GET /api/v1/analytics/{short_key}

Response:
{
    "short_key": "abc123",
    "total_clicks": 15420,
    "clicks_by_day": [...],
    "top_referrers": [...],
    "top_countries": [...]
}`}
        </pre>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">6. Detailed Flow</h2>

    <h3 className="text-xl font-semibold mt-4">URL Shortening Flow</h3>
    <ol className="list-decimal list-inside space-y-2">
      <li>User submits a long URL to the API</li>
      <li>Application server validates the URL format</li>
      <li>Check if URL already exists in database (optional deduplication)</li>
      <li>Get a unique key from Key Generation Service</li>
      <li>Store the mapping (short_key to original_url) in database</li>
      <li>Return the short URL to the user</li>
    </ol>

    <h3 className="text-xl font-semibold mt-4">URL Redirection Flow</h3>
    <ol className="list-decimal list-inside space-y-2">
      <li>User clicks on short URL</li>
      <li>Request reaches the application server</li>
      <li>Check Redis cache for the short key</li>
      <li>If cache miss, query the database</li>
      <li>If found, update cache and return 301/302 redirect</li>
      <li>Asynchronously log analytics data</li>
      <li>If not found or expired, return 404</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">7. Scalability Considerations</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Caching Strategy</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Cache popular URLs in Redis</li>
          <li>Use LRU eviction policy</li>
          <li>80-20 rule: 20% URLs get 80% traffic</li>
          <li>Cache hit ratio target: 90%+</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Database Sharding</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Shard by first character of short key</li>
          <li>Or use consistent hashing</li>
          <li>Each shard handles subset of keys</li>
          <li>Horizontal scaling as data grows</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Load Balancing</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Multiple load balancers for redundancy</li>
          <li>Round-robin or least connections</li>
          <li>Health checks on app servers</li>
          <li>Geographic load balancing (CDN)</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Replication</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Master-slave replication for reads</li>
          <li>Multi-region replication for disaster recovery</li>
          <li>Eventual consistency is acceptable</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">8. Trade-offs and Decisions</h2>

    <div className="space-y-4 mt-4">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <h4 className="font-bold text-yellow-800">301 vs 302 Redirect</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li><strong>301 (Permanent):</strong> Browser caches the redirect, reduces server load, but analytics may be inaccurate</li>
          <li><strong>302 (Temporary):</strong> Browser always hits server, accurate analytics, but more server load</li>
          <li><strong>Decision:</strong> Use 302 if analytics are important</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <h4 className="font-bold text-yellow-800">SQL vs NoSQL</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li><strong>SQL:</strong> ACID compliance, complex queries, vertical scaling limits</li>
          <li><strong>NoSQL:</strong> Horizontal scaling, high availability, eventual consistency</li>
          <li><strong>Decision:</strong> NoSQL (Cassandra) for URL storage due to scale requirements</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <h4 className="font-bold text-yellow-800">Custom Alias Handling</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Need to check uniqueness before accepting</li>
          <li>May need reserved words list</li>
          <li>Consider rate limiting to prevent abuse</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">9. Additional Considerations</h2>

    <ul className="list-disc list-inside space-y-2">
      <li><strong>Rate Limiting:</strong> Prevent abuse by limiting requests per user/IP</li>
      <li><strong>Security:</strong> Validate URLs to prevent malicious redirects</li>
      <li><strong>Telemetry:</strong> Monitor latency, error rates, and cache hit ratios</li>
      <li><strong>URL Cleanup:</strong> Background job to delete expired URLs</li>
      <li><strong>API Versioning:</strong> Support backward compatibility as API evolves</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
      <p className="text-blue-800">
        <strong>Key Interview Tip:</strong> Start with requirements, make reasonable assumptions,
        design for scale, and always discuss trade-offs. The interviewer wants to see your
        thought process, not just the final answer.
      </p>
    </div>
  </div>
);

export default DesignURLShortener;
