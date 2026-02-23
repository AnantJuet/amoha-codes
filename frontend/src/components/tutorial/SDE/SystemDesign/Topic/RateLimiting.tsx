import React from 'react';

const RateLimiting: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Rate Limiting
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Rate limiting is a technique used to control the number of requests a client can make to
      a server within a specified time window. It's essential for protecting services from abuse,
      preventing DDoS attacks, ensuring fair resource usage, and maintaining system stability.
    </p>

    <h2 className="text-2xl font-bold mt-6">Why Rate Limiting is Important</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Prevent abuse:</strong> Stop malicious users from overwhelming the system</li>
      <li><strong>Ensure fair usage:</strong> Distribute resources fairly among all users</li>
      <li><strong>Cost control:</strong> Prevent excessive resource consumption</li>
      <li><strong>Security:</strong> Protect against brute force attacks and DDoS</li>
      <li><strong>Stability:</strong> Maintain consistent performance under load</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Rate Limiting Algorithms</h2>

    <h3 className="text-xl font-semibold mt-4">1. Token Bucket</h3>
    <p className="leading-relaxed">
      Tokens are added to a bucket at a fixed rate. Each request consumes a token. If the bucket
      is empty, the request is rejected. The bucket has a maximum capacity, allowing for burst traffic.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`class TokenBucket {
  private tokens: number;
  private maxTokens: number;
  private refillRate: number; // tokens per second
  private lastRefill: number;

  constructor(maxTokens: number, refillRate: number) {
    this.maxTokens = maxTokens;
    this.tokens = maxTokens;
    this.refillRate = refillRate;
    this.lastRefill = Date.now();
  }

  private refill(): void {
    const now = Date.now();
    const timePassed = (now - this.lastRefill) / 1000;
    const tokensToAdd = timePassed * this.refillRate;
    this.tokens = Math.min(this.maxTokens, this.tokens + tokensToAdd);
    this.lastRefill = now;
  }

  tryConsume(tokens: number = 1): boolean {
    this.refill();
    if (this.tokens >= tokens) {
      this.tokens -= tokens;
      return true;
    }
    return false;
  }
}

// Usage: 10 tokens max, refill 1 token/second
const limiter = new TokenBucket(10, 1);
if (limiter.tryConsume()) {
  // Process request
} else {
  // Return 429 Too Many Requests
}`}</pre>
    </div>
    <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-2">
      <p className="text-green-700 text-sm">
        <strong>Pros:</strong> Allows bursts, smooth rate limiting, memory efficient<br />
        <strong>Cons:</strong> Can be complex to implement correctly in distributed systems
      </p>
    </div>

    <h3 className="text-xl font-semibold mt-4">2. Leaky Bucket</h3>
    <p className="leading-relaxed">
      Requests enter a queue (bucket) and are processed at a fixed rate. If the queue is full,
      new requests are rejected. This ensures a consistent output rate regardless of input bursts.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`class LeakyBucket {
  private queue: (() => void)[] = [];
  private maxSize: number;
  private leakRate: number; // requests per second
  private processing: boolean = false;

  constructor(maxSize: number, leakRate: number) {
    this.maxSize = maxSize;
    this.leakRate = leakRate;
  }

  addRequest(request: () => void): boolean {
    if (this.queue.length >= this.maxSize) {
      return false; // Bucket is full, reject request
    }
    this.queue.push(request);
    this.processQueue();
    return true;
  }

  private processQueue(): void {
    if (this.processing || this.queue.length === 0) return;

    this.processing = true;
    const interval = 1000 / this.leakRate;

    const leak = () => {
      const request = this.queue.shift();
      if (request) {
        request();
      }
      if (this.queue.length > 0) {
        setTimeout(leak, interval);
      } else {
        this.processing = false;
      }
    };

    leak();
  }
}`}</pre>
    </div>
    <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-2">
      <p className="text-green-700 text-sm">
        <strong>Pros:</strong> Smooths out bursts, consistent processing rate<br />
        <strong>Cons:</strong> No burst handling, recent requests may wait while old ones process
      </p>
    </div>

    <h3 className="text-xl font-semibold mt-4">3. Fixed Window Counter</h3>
    <p className="leading-relaxed">
      Divides time into fixed windows and counts requests in each window. Simple to implement
      but can allow double the rate at window boundaries.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`class FixedWindowCounter {
  private counts: Map<string, number> = new Map();
  private windowSize: number; // in milliseconds
  private maxRequests: number;

  constructor(windowSizeMs: number, maxRequests: number) {
    this.windowSize = windowSizeMs;
    this.maxRequests = maxRequests;
  }

  private getWindowKey(userId: string): string {
    const window = Math.floor(Date.now() / this.windowSize);
    return \`\${userId}:\${window}\`;
  }

  isAllowed(userId: string): boolean {
    const key = this.getWindowKey(userId);
    const count = this.counts.get(key) || 0;

    if (count >= this.maxRequests) {
      return false;
    }

    this.counts.set(key, count + 1);
    return true;
  }
}

// 100 requests per minute
const limiter = new FixedWindowCounter(60000, 100);`}</pre>
    </div>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-2">
      <p className="text-yellow-700 text-sm">
        <strong>Edge Case:</strong> At 0:59, user makes 100 requests. At 1:00 (new window),
        they can make 100 more. Result: 200 requests in 2 seconds!
      </p>
    </div>

    <h3 className="text-xl font-semibold mt-4">4. Sliding Window Log</h3>
    <p className="leading-relaxed">
      Keeps a log of all request timestamps. Counts requests within the sliding window by
      filtering timestamps. More accurate but uses more memory.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`class SlidingWindowLog {
  private logs: Map<string, number[]> = new Map();
  private windowSize: number;
  private maxRequests: number;

  constructor(windowSizeMs: number, maxRequests: number) {
    this.windowSize = windowSizeMs;
    this.maxRequests = maxRequests;
  }

  isAllowed(userId: string): boolean {
    const now = Date.now();
    const windowStart = now - this.windowSize;

    let timestamps = this.logs.get(userId) || [];
    // Remove old timestamps
    timestamps = timestamps.filter(t => t > windowStart);

    if (timestamps.length >= this.maxRequests) {
      this.logs.set(userId, timestamps);
      return false;
    }

    timestamps.push(now);
    this.logs.set(userId, timestamps);
    return true;
  }
}`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">5. Sliding Window Counter</h3>
    <p className="leading-relaxed">
      Combines fixed window counter with a weighted count from the previous window, providing
      a good balance between accuracy and efficiency.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`class SlidingWindowCounter {
  private counts: Map<string, { count: number; timestamp: number }> = new Map();
  private windowSize: number;
  private maxRequests: number;

  constructor(windowSizeMs: number, maxRequests: number) {
    this.windowSize = windowSizeMs;
    this.maxRequests = maxRequests;
  }

  isAllowed(userId: string): boolean {
    const now = Date.now();
    const currentWindow = Math.floor(now / this.windowSize);
    const previousWindow = currentWindow - 1;
    const positionInWindow = (now % this.windowSize) / this.windowSize;

    const currentKey = \`\${userId}:\${currentWindow}\`;
    const previousKey = \`\${userId}:\${previousWindow}\`;

    const currentCount = this.counts.get(currentKey)?.count || 0;
    const previousCount = this.counts.get(previousKey)?.count || 0;

    // Weighted sum: previous window count * remaining portion + current count
    const estimatedCount = previousCount * (1 - positionInWindow) + currentCount;

    if (estimatedCount >= this.maxRequests) {
      return false;
    }

    this.counts.set(currentKey, { count: currentCount + 1, timestamp: now });
    return true;
  }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Rate Limiting Strategies</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">By User/API Key</h4>
        <p className="mt-2 text-sm">Limit each user or API key individually</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">By IP Address</h4>
        <p className="mt-2 text-sm">Limit requests from the same IP (can be bypassed with proxies)</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">By Endpoint</h4>
        <p className="mt-2 text-sm">Different limits for different API endpoints</p>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
        <h4 className="font-bold text-orange-800">Global Limit</h4>
        <p className="mt-2 text-sm">Overall system-wide request limit</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">HTTP Response Headers</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <ul className="space-y-2">
        <li><strong>X-RateLimit-Limit:</strong> Maximum requests allowed in window</li>
        <li><strong>X-RateLimit-Remaining:</strong> Requests remaining in current window</li>
        <li><strong>X-RateLimit-Reset:</strong> Timestamp when the window resets</li>
        <li><strong>Retry-After:</strong> Seconds to wait before retrying (with 429 response)</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Distributed Rate Limiting</h2>
    <p className="leading-relaxed">
      In distributed systems, rate limiting state must be shared across multiple servers.
      Common approaches include using Redis or Memcached as a central store.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`-- Redis Lua script for atomic rate limiting
local key = KEYS[1]
local limit = tonumber(ARGV[1])
local window = tonumber(ARGV[2])

local current = redis.call('INCR', key)
if current == 1 then
    redis.call('EXPIRE', key, window)
end

if current > limit then
    return 0  -- Rejected
else
    return 1  -- Allowed
end`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Return appropriate HTTP status codes (429 Too Many Requests)</li>
      <li>Include rate limit headers in responses</li>
      <li>Provide clear documentation of rate limits</li>
      <li>Consider different tiers for different user types</li>
      <li>Implement graceful degradation instead of hard failures</li>
      <li>Log rate limit events for monitoring and analysis</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Design Tip:</strong> Choose the rate limiting algorithm based on your requirements.
        Token bucket is great for APIs that need to allow bursts. Leaky bucket ensures consistent
        throughput. Sliding window counter offers a good balance of accuracy and efficiency.
      </p>
    </div>
  </div>
);

export default RateLimiting;
