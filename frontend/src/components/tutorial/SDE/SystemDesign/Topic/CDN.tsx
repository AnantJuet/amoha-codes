import React from 'react';

const CDN: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Content Delivery Network (CDN)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Content Delivery Network (CDN) is a geographically distributed network of proxy servers and
      data centers that work together to provide fast delivery of internet content. CDNs serve a large
      portion of the internet content today, including web pages, images, videos, and streaming media.
    </p>

    <h2 className="text-2xl font-bold mt-6">How Does a CDN Work?</h2>
    <p className="leading-relaxed">
      Instead of serving content from a single origin server, CDNs cache content at multiple edge
      locations worldwide. When a user requests content, it is served from the nearest edge server,
      reducing latency and improving load times.
    </p>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">CDN Architecture:</p>
      <pre className="mt-2 text-sm overflow-x-auto">
{`                    ┌─────────────────┐
                    │  Origin Server  │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
      ┌───────▼───────┐ ┌────▼────┐ ┌───────▼───────┐
      │Edge Server US │ │Edge EU  │ │Edge Server AS │
      └───────┬───────┘ └────┬────┘ └───────┬───────┘
              │              │              │
      ┌───────▼───────┐ ┌────▼────┐ ┌───────▼───────┐
      │   US Users    │ │EU Users │ │   Asia Users  │
      └───────────────┘ └─────────┘ └───────────────┘`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Components</h2>

    <h3 className="text-xl font-semibold mt-4">1. Origin Server</h3>
    <p className="leading-relaxed">
      The original server where the master copy of content resides. CDN edge servers fetch content
      from here when they do not have it cached.
    </p>

    <h3 className="text-xl font-semibold mt-4">2. Edge Servers (PoPs)</h3>
    <p className="leading-relaxed">
      Points of Presence distributed globally that cache and serve content to nearby users.
      They are the backbone of a CDN.
    </p>

    <h3 className="text-xl font-semibold mt-4">3. DNS Routing</h3>
    <p className="leading-relaxed">
      CDNs use intelligent DNS routing to direct users to the optimal edge server based on
      proximity, server load, and network conditions.
    </p>

    <h2 className="text-2xl font-bold mt-6">Types of CDN Content</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Static Content</h4>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Images (JPEG, PNG, WebP)</li>
          <li>CSS and JavaScript files</li>
          <li>Fonts and icons</li>
          <li>PDF documents</li>
          <li>Video and audio files</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Dynamic Content</h4>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>API responses</li>
          <li>Personalized content</li>
          <li>Real-time data</li>
          <li>User-specific pages</li>
          <li>Shopping cart data</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">CDN Caching Strategies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Strategy</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Best For</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Pull CDN</td>
            <td className="p-3 border">Content is fetched from origin on first request and cached</td>
            <td className="p-3 border">Most websites, automatic caching</td>
          </tr>
          <tr>
            <td className="p-3 border">Push CDN</td>
            <td className="p-3 border">Content is manually pushed to edge servers in advance</td>
            <td className="p-3 border">Large files, predictable content updates</td>
          </tr>
          <tr>
            <td className="p-3 border">Origin Shield</td>
            <td className="p-3 border">Additional caching layer between edge and origin</td>
            <td className="p-3 border">Protecting origin from traffic spikes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Popular CDN Providers</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-orange-50 p-4 rounded-lg">
        <h4 className="font-bold text-orange-800">Cloudflare</h4>
        <p className="mt-2 text-sm">Free tier available, DDoS protection, edge computing with Workers.</p>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-bold text-yellow-800">AWS CloudFront</h4>
        <p className="mt-2 text-sm">Integrated with AWS services, Lambda@Edge for dynamic content.</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Akamai</h4>
        <p className="mt-2 text-sm">Enterprise-grade, largest CDN network, advanced security features.</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold text-purple-800">Fastly</h4>
        <p className="mt-2 text-sm">Real-time purging, edge computing, developer-friendly.</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Azure CDN</h4>
        <p className="mt-2 text-sm">Microsoft ecosystem integration, multiple CDN providers.</p>
      </div>
      <div className="bg-red-50 p-4 rounded-lg">
        <h4 className="font-bold text-red-800">Google Cloud CDN</h4>
        <p className="mt-2 text-sm">GCP integration, global anycast IPs, HTTP/2 support.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages of Using a CDN</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Reduced Latency:</strong> Content served from geographically closer servers</li>
      <li><strong>Improved Load Times:</strong> Faster page loads enhance user experience</li>
      <li><strong>Reduced Origin Load:</strong> Edge servers handle most traffic</li>
      <li><strong>High Availability:</strong> Redundant infrastructure ensures uptime</li>
      <li><strong>DDoS Protection:</strong> Distributed network absorbs attack traffic</li>
      <li><strong>SEO Benefits:</strong> Faster sites rank better in search results</li>
      <li><strong>Bandwidth Savings:</strong> Reduced data transfer from origin</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages of Using a CDN</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Cost:</strong> Can be expensive for high-traffic sites</li>
      <li><strong>Stale Content:</strong> Cache invalidation can be challenging</li>
      <li><strong>Complexity:</strong> Additional layer to configure and manage</li>
      <li><strong>Vendor Lock-in:</strong> Migrating between CDN providers can be difficult</li>
      <li><strong>Limited Control:</strong> Less control over edge server behavior</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">When to Use a CDN</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Use CDN When:</h4>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Global user base with diverse locations</li>
          <li>Heavy static content (images, videos)</li>
          <li>High traffic websites</li>
          <li>Need for DDoS protection</li>
          <li>Streaming media delivery</li>
        </ul>
      </div>
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">May Not Need CDN When:</h4>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Local/regional user base only</li>
          <li>Low traffic websites</li>
          <li>Highly dynamic, personalized content</li>
          <li>Tight budget constraints</li>
          <li>Internal/enterprise applications</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Real-World Examples</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <ul className="space-y-3">
        <li><strong>Netflix:</strong> Uses their own CDN (Open Connect) to deliver 15% of global internet traffic</li>
        <li><strong>YouTube:</strong> Google's global CDN serves billions of video views daily</li>
        <li><strong>Spotify:</strong> Uses CDN for music streaming to 500+ million users</li>
        <li><strong>E-commerce Sites:</strong> Amazon, eBay use CDNs for fast product image loading</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Set appropriate cache headers (Cache-Control, Expires)</li>
      <li>Use versioned URLs for cache busting</li>
      <li>Optimize images and assets before CDN delivery</li>
      <li>Monitor CDN performance and cache hit rates</li>
      <li>Configure proper SSL/TLS for secure delivery</li>
      <li>Use compression (gzip, Brotli) for text-based content</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> A well-configured CDN can reduce page load times by 50% or more
        and significantly improve user experience, especially for global audiences.
      </p>
    </div>
  </div>
);

export default CDN;
