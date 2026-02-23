import React from 'react';

const Caching: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Caching Strategies and Patterns
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Caching is a technique used to store copies of frequently accessed data in a faster storage layer
      to reduce latency, decrease database load, and improve application performance. It is one of the
      most effective ways to speed up a system.
    </p>

    <h2 className="text-2xl font-bold mt-6">What is Caching?</h2>
    <p className="leading-relaxed">
      A cache is a high-speed data storage layer that stores a subset of data, typically transient,
      so that future requests for that data can be served faster. Instead of fetching data from the
      primary source (like a database), the application retrieves it from the cache.
    </p>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">Basic Caching Flow:</p>
      <pre className="mt-2 text-sm overflow-x-auto">
{`Client Request
      │
      ▼
┌─────────────┐    Cache Hit     ┌───────────┐
│ Application │ ───────────────► │   Cache   │
│   Server    │ ◄─────────────── │  (Redis)  │
└─────────────┘    Return Data   └───────────┘
      │
      │ Cache Miss
      ▼
┌─────────────┐
│  Database   │
└─────────────┘`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Types of Caching</h2>

    <h3 className="text-xl font-semibold mt-4">1. Client-Side Caching</h3>
    <p className="leading-relaxed">
      Data is cached on the client (browser, mobile app). Examples include browser cache, local storage,
      and service workers.
    </p>

    <h3 className="text-xl font-semibold mt-4">2. CDN Caching</h3>
    <p className="leading-relaxed">
      Static content is cached at edge locations closer to users. Reduces latency for geographically
      distributed users.
    </p>

    <h3 className="text-xl font-semibold mt-4">3. Application/Server-Side Caching</h3>
    <p className="leading-relaxed">
      Data is cached in the application layer using in-memory stores like Redis or Memcached.
    </p>

    <h3 className="text-xl font-semibold mt-4">4. Database Caching</h3>
    <p className="leading-relaxed">
      Databases have built-in caching mechanisms. Query results are cached to speed up repeated queries.
    </p>

    <h2 className="text-2xl font-bold mt-6">Caching Strategies</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Cache-Aside (Lazy Loading)</h4>
        <p className="mt-2 text-sm">Application first checks cache. On miss, fetches from DB and populates cache.</p>
        <p className="mt-2 text-sm text-gray-600">Pros: Only requested data is cached</p>
        <p className="text-sm text-gray-600">Cons: Cache miss penalty, potential stale data</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Write-Through</h4>
        <p className="mt-2 text-sm">Data is written to cache and database simultaneously.</p>
        <p className="mt-2 text-sm text-gray-600">Pros: Cache is always consistent with DB</p>
        <p className="text-sm text-gray-600">Cons: Higher write latency</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">Write-Behind (Write-Back)</h4>
        <p className="mt-2 text-sm">Data is written to cache first, then asynchronously written to DB.</p>
        <p className="mt-2 text-sm text-gray-600">Pros: Low write latency</p>
        <p className="text-sm text-gray-600">Cons: Risk of data loss if cache fails</p>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
        <h4 className="font-bold text-orange-800">Read-Through</h4>
        <p className="mt-2 text-sm">Cache sits between application and DB. Cache handles data retrieval.</p>
        <p className="mt-2 text-sm text-gray-600">Pros: Simplifies application code</p>
        <p className="text-sm text-gray-600">Cons: First request always misses</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Cache Eviction Policies</h2>
    <p className="leading-relaxed">
      When the cache is full, an eviction policy determines which items to remove:
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Policy</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">LRU (Least Recently Used)</td>
            <td className="p-3 border">Evicts the least recently accessed items first</td>
            <td className="p-3 border">General purpose, most common</td>
          </tr>
          <tr>
            <td className="p-3 border">LFU (Least Frequently Used)</td>
            <td className="p-3 border">Evicts items that are used least frequently</td>
            <td className="p-3 border">When access frequency matters</td>
          </tr>
          <tr>
            <td className="p-3 border">FIFO (First In First Out)</td>
            <td className="p-3 border">Evicts the oldest items first</td>
            <td className="p-3 border">Simple, time-based data</td>
          </tr>
          <tr>
            <td className="p-3 border">TTL (Time To Live)</td>
            <td className="p-3 border">Items expire after a set time period</td>
            <td className="p-3 border">Time-sensitive data</td>
          </tr>
          <tr>
            <td className="p-3 border">Random</td>
            <td className="p-3 border">Randomly selects items to evict</td>
            <td className="p-3 border">When access patterns are unpredictable</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Cache Invalidation</h2>
    <p className="leading-relaxed">
      One of the hardest problems in computer science. Methods to keep cache consistent with the source:
    </p>
    <ul className="list-disc list-inside space-y-2 mt-2">
      <li><strong>Time-based:</strong> Set TTL for automatic expiration</li>
      <li><strong>Event-based:</strong> Invalidate cache when data changes</li>
      <li><strong>Version-based:</strong> Use version numbers to detect stale data</li>
      <li><strong>Manual:</strong> Explicitly delete cache entries when needed</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Popular Caching Solutions</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-red-50 p-4 rounded-lg">
        <h4 className="font-bold text-red-800">Redis</h4>
        <p className="mt-2 text-sm">In-memory data structure store with persistence, pub/sub, and rich data types.</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Memcached</h4>
        <p className="mt-2 text-sm">Simple, high-performance distributed memory caching system.</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Varnish</h4>
        <p className="mt-2 text-sm">HTTP accelerator designed for content-heavy dynamic websites.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages of Caching</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Reduced Latency:</strong> Faster data retrieval from memory vs disk</li>
      <li><strong>Lower Database Load:</strong> Fewer queries hit the database</li>
      <li><strong>Improved Scalability:</strong> Handle more requests with same resources</li>
      <li><strong>Cost Savings:</strong> Reduce need for expensive database scaling</li>
      <li><strong>Better User Experience:</strong> Faster response times</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages of Caching</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Stale Data:</strong> Cache may serve outdated information</li>
      <li><strong>Complexity:</strong> Cache invalidation is challenging</li>
      <li><strong>Memory Cost:</strong> Caching requires additional memory</li>
      <li><strong>Cold Start:</strong> Empty cache leads to initial slow performance</li>
      <li><strong>Cache Stampede:</strong> Many requests hit DB when cache expires</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Real-World Examples</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <ul className="space-y-3">
        <li><strong>Twitter:</strong> Uses Redis to cache timelines and reduce database load</li>
        <li><strong>Facebook:</strong> Memcached powers their social graph caching</li>
        <li><strong>GitHub:</strong> Uses Rails caching for repository data and user sessions</li>
        <li><strong>Stack Overflow:</strong> Aggressive caching strategy serves millions of developers</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Cache frequently accessed, rarely changed data</li>
      <li>Set appropriate TTL based on data freshness requirements</li>
      <li>Implement cache warming for predictable traffic patterns</li>
      <li>Monitor cache hit rates and adjust strategy accordingly</li>
      <li>Use consistent hashing for distributed caches</li>
      <li>Plan for cache failures with fallback mechanisms</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> "There are only two hard things in Computer Science: cache invalidation
        and naming things." - Phil Karlton. Always carefully consider your cache invalidation strategy.
      </p>
    </div>
  </div>
);

export default Caching;
