import React from 'react';

const DesignRateLimiter: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Design Rate Limiter
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A rate limiter controls the rate of requests a client can make to an API. It protects services
      from being overwhelmed, prevents abuse, and ensures fair resource allocation among users.
    </p>

    <h2 className="text-2xl font-bold mt-6">Requirements</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Functional</h4>
        <ul className="text-sm mt-2 space-y-1">
          <li>• Limit requests per user/IP/API key</li>
          <li>• Support different rate limits per tier</li>
          <li>• Return clear error for exceeded limits</li>
          <li>• Support multiple time windows</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Non-Functional</h4>
        <ul className="text-sm mt-2 space-y-1">
          <li>• Low latency ({"<"}1ms overhead)</li>
          <li>• High availability</li>
          <li>• Distributed support</li>
          <li>• Accurate counting</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Rate Limiting Algorithms</h2>

    <h3 className="text-xl font-bold mt-4">1. Token Bucket</h3>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="text-sm">Tokens added at fixed rate, each request consumes a token.</p>
      <ul className="list-disc list-inside mt-2 text-sm">
        <li>Allows burst traffic up to bucket size</li>
        <li>Smooth rate limiting over time</li>
        <li>Used by Amazon, Stripe</li>
      </ul>
    </div>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-2 overflow-x-auto">
      <pre className="text-sm">{`class TokenBucket {
    constructor(capacity, refillRate) {
        this.capacity = capacity;      // Max tokens
        this.tokens = capacity;        // Current tokens
        this.refillRate = refillRate;  // Tokens per second
        this.lastRefill = Date.now();
    }

    refill() {
        const now = Date.now();
        const elapsed = (now - this.lastRefill) / 1000;
        const tokensToAdd = elapsed * this.refillRate;

        this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);
        this.lastRefill = now;
    }

    tryConsume(tokens = 1) {
        this.refill();

        if (this.tokens >= tokens) {
            this.tokens -= tokens;
            return { allowed: true, remaining: Math.floor(this.tokens) };
        }

        return {
            allowed: false,
            remaining: 0,
            retryAfter: Math.ceil((tokens - this.tokens) / this.refillRate)
        };
    }
}

// Usage
const bucket = new TokenBucket(100, 10); // 100 capacity, 10 tokens/sec
console.log(bucket.tryConsume());  // { allowed: true, remaining: 99 }`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-4">2. Sliding Window Log</h3>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="text-sm">Stores timestamp of each request, counts requests in sliding window.</p>
      <ul className="list-disc list-inside mt-2 text-sm">
        <li>Most accurate</li>
        <li>Higher memory usage</li>
        <li>Good for strict rate limiting</li>
      </ul>
    </div>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-2 overflow-x-auto">
      <pre className="text-sm">{`class SlidingWindowLog {
    constructor(windowMs, maxRequests) {
        this.windowMs = windowMs;
        this.maxRequests = maxRequests;
        this.requests = [];  // Timestamps
    }

    tryRequest() {
        const now = Date.now();
        const windowStart = now - this.windowMs;

        // Remove old entries
        this.requests = this.requests.filter(ts => ts > windowStart);

        if (this.requests.length < this.maxRequests) {
            this.requests.push(now);
            return {
                allowed: true,
                remaining: this.maxRequests - this.requests.length
            };
        }

        // Calculate retry after
        const oldestInWindow = this.requests[0];
        const retryAfter = Math.ceil((oldestInWindow - windowStart) / 1000);

        return { allowed: false, remaining: 0, retryAfter };
    }
}

// 100 requests per minute
const limiter = new SlidingWindowLog(60000, 100);`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-4">3. Sliding Window Counter</h3>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="text-sm">Combines fixed window efficiency with sliding window accuracy.</p>
    </div>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-2 overflow-x-auto">
      <pre className="text-sm">{`class SlidingWindowCounter {
    constructor(windowMs, maxRequests) {
        this.windowMs = windowMs;
        this.maxRequests = maxRequests;
        this.prevCount = 0;
        this.currCount = 0;
        this.prevWindowStart = 0;
        this.currWindowStart = 0;
    }

    tryRequest() {
        const now = Date.now();
        const windowStart = Math.floor(now / this.windowMs) * this.windowMs;

        // New window started
        if (windowStart !== this.currWindowStart) {
            this.prevCount = this.currCount;
            this.prevWindowStart = this.currWindowStart;
            this.currCount = 0;
            this.currWindowStart = windowStart;
        }

        // Calculate weighted count
        const elapsedInCurrent = now - this.currWindowStart;
        const weight = 1 - (elapsedInCurrent / this.windowMs);
        const weightedCount = this.prevCount * weight + this.currCount;

        if (weightedCount < this.maxRequests) {
            this.currCount++;
            return {
                allowed: true,
                remaining: Math.floor(this.maxRequests - weightedCount - 1)
            };
        }

        return { allowed: false, remaining: 0 };
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Distributed Rate Limiter</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Redis-based distributed rate limiter
const Redis = require('ioredis');
const redis = new Redis();

class DistributedRateLimiter {
    constructor(options) {
        this.windowMs = options.windowMs || 60000;
        this.maxRequests = options.maxRequests || 100;
        this.keyPrefix = options.keyPrefix || 'ratelimit';
    }

    async isAllowed(clientId) {
        const key = \`\${this.keyPrefix}:\${clientId}\`;
        const now = Date.now();
        const windowStart = now - this.windowMs;

        // Lua script for atomic operations
        const script = \`
            local key = KEYS[1]
            local windowStart = tonumber(ARGV[1])
            local now = tonumber(ARGV[2])
            local maxRequests = tonumber(ARGV[3])
            local windowMs = tonumber(ARGV[4])

            -- Remove old entries
            redis.call('ZREMRANGEBYSCORE', key, 0, windowStart)

            -- Count current requests
            local count = redis.call('ZCARD', key)

            if count < maxRequests then
                -- Add new request
                redis.call('ZADD', key, now, now .. '-' .. math.random())
                redis.call('PEXPIRE', key, windowMs)
                return {1, maxRequests - count - 1}
            else
                -- Get oldest entry for retry-after
                local oldest = redis.call('ZRANGE', key, 0, 0, 'WITHSCORES')
                return {0, oldest[2] and (oldest[2] - windowStart) / 1000 or 0}
            end
        \`;

        const result = await redis.eval(
            script, 1, key,
            windowStart, now, this.maxRequests, this.windowMs
        );

        return {
            allowed: result[0] === 1,
            remaining: result[0] === 1 ? result[1] : 0,
            retryAfter: result[0] === 0 ? Math.ceil(result[1]) : null
        };
    }
}

// Express middleware
function rateLimitMiddleware(limiter, getClientId) {
    return async (req, res, next) => {
        const clientId = getClientId(req);
        const result = await limiter.isAllowed(clientId);

        res.set({
            'X-RateLimit-Limit': limiter.maxRequests,
            'X-RateLimit-Remaining': result.remaining,
            'X-RateLimit-Reset': Date.now() + limiter.windowMs
        });

        if (!result.allowed) {
            res.set('Retry-After', result.retryAfter);
            return res.status(429).json({
                error: 'Too Many Requests',
                retryAfter: result.retryAfter
            });
        }

        next();
    };
}

// Usage
const limiter = new DistributedRateLimiter({
    windowMs: 60000,
    maxRequests: 100
});

app.use('/api', rateLimitMiddleware(
    limiter,
    req => req.headers['x-api-key'] || req.ip
));`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Algorithm Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Memory</th>
            <th className="p-3 border">Accuracy</th>
            <th className="p-3 border">Burst</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Token Bucket</td>
            <td className="p-3 border text-green-600">Low</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border text-green-600">Allows</td>
          </tr>
          <tr>
            <td className="p-3 border">Sliding Log</td>
            <td className="p-3 border text-red-600">High</td>
            <td className="p-3 border text-green-600">Excellent</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Sliding Counter</td>
            <td className="p-3 border text-green-600">Low</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border">Partial</td>
          </tr>
          <tr>
            <td className="p-3 border">Fixed Window</td>
            <td className="p-3 border text-green-600">Very Low</td>
            <td className="p-3 border text-red-600">Poor</td>
            <td className="p-3 border text-red-600">Edge burst</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Return helpful headers:</strong> X-RateLimit-Limit, Remaining, Reset</li>
      <li><strong>Graceful degradation:</strong> Return cached data when rate limited</li>
      <li><strong>Different limits:</strong> Per user tier, endpoint, IP</li>
      <li><strong>Monitoring:</strong> Track rate limit hits for capacity planning</li>
      <li><strong>Whitelisting:</strong> Allow critical services to bypass limits</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Interview Tip:</strong> Discuss trade-offs between algorithms, handle edge cases
        (clock sync in distributed systems), and consider where to place the rate limiter
        (API gateway vs. application layer).
      </p>
    </div>
  </div>
);

export default DesignRateLimiter;
