import React from 'react';

const Proxies: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Proxies and Reverse Proxies
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A proxy server acts as an intermediary between clients and servers, forwarding requests
      and responses between them. Proxies are fundamental components in system design, providing
      benefits like security, caching, load balancing, and anonymity.
    </p>

    <h2 className="text-2xl font-bold mt-6">Forward Proxy vs Reverse Proxy</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Forward Proxy</h4>
        <p className="mt-2 text-sm">Sits in front of clients, acting on their behalf</p>
        <div className="mt-2 font-mono text-xs">
          Client -&gt; Forward Proxy -&gt; Internet -&gt; Server
        </div>
        <ul className="mt-2 text-sm space-y-1">
          <li>Hides client identity</li>
          <li>Bypasses restrictions</li>
          <li>Content filtering</li>
          <li>Caching for clients</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Reverse Proxy</h4>
        <p className="mt-2 text-sm">Sits in front of servers, acting on their behalf</p>
        <div className="mt-2 font-mono text-xs">
          Client -&gt; Internet -&gt; Reverse Proxy -&gt; Server
        </div>
        <ul className="mt-2 text-sm space-y-1">
          <li>Hides server identity</li>
          <li>Load balancing</li>
          <li>SSL termination</li>
          <li>Caching for servers</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Forward Proxy Use Cases</h2>

    <h3 className="text-xl font-semibold mt-4">1. Anonymity and Privacy</h3>
    <p className="leading-relaxed">
      Forward proxies can mask the client's IP address, making requests appear to come from
      the proxy server instead. This is commonly used for privacy and bypassing geo-restrictions.
    </p>

    <h3 className="text-xl font-semibold mt-4">2. Access Control and Filtering</h3>
    <p className="leading-relaxed">
      Organizations use forward proxies to control what websites employees can access,
      block malicious content, and enforce security policies.
    </p>

    <h3 className="text-xl font-semibold mt-4">3. Caching</h3>
    <p className="leading-relaxed">
      Frequently accessed content can be cached at the proxy level, reducing bandwidth
      usage and improving response times for clients.
    </p>

    <h2 className="text-2xl font-bold mt-6">Reverse Proxy Use Cases</h2>

    <h3 className="text-xl font-semibold mt-4">1. Load Balancing</h3>
    <p className="leading-relaxed">
      Distributes incoming traffic across multiple backend servers to ensure no single server
      becomes overwhelmed, improving reliability and performance.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`# Nginx load balancing configuration
upstream backend_servers {
    server backend1.example.com weight=3;
    server backend2.example.com weight=2;
    server backend3.example.com weight=1;
}

server {
    listen 80;
    location / {
        proxy_pass http://backend_servers;
    }
}`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">2. SSL/TLS Termination</h3>
    <p className="leading-relaxed">
      The reverse proxy handles SSL encryption/decryption, offloading this CPU-intensive
      task from backend servers and simplifying certificate management.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`# Nginx SSL termination
server {
    listen 443 ssl;
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://backend_servers;  # HTTP to backend
        proxy_set_header X-Forwarded-Proto https;
    }
}`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">3. Caching</h3>
    <p className="leading-relaxed">
      Static content and API responses can be cached at the reverse proxy level,
      reducing load on backend servers and improving response times.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`# Nginx caching configuration
proxy_cache_path /var/cache/nginx levels=1:2
    keys_zone=my_cache:10m max_size=1g inactive=60m;

server {
    location / {
        proxy_cache my_cache;
        proxy_cache_valid 200 60m;
        proxy_cache_valid 404 1m;
        proxy_pass http://backend_servers;
    }
}`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">4. Security and DDoS Protection</h3>
    <p className="leading-relaxed">
      Reverse proxies hide backend server details, filter malicious requests, implement
      rate limiting, and can absorb DDoS attacks before they reach the origin servers.
    </p>

    <h3 className="text-xl font-semibold mt-4">5. Compression</h3>
    <p className="leading-relaxed">
      Compresses responses before sending to clients, reducing bandwidth usage and
      improving page load times, especially for text-based content.
    </p>

    <h2 className="text-2xl font-bold mt-6">Load Balancing Algorithms</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Round Robin</h4>
        <p className="mt-2 text-sm">Distributes requests sequentially to each server in rotation</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Weighted Round Robin</h4>
        <p className="mt-2 text-sm">Servers with higher weights receive more requests</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Least Connections</h4>
        <p className="mt-2 text-sm">Directs traffic to the server with fewest active connections</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">IP Hash</h4>
        <p className="mt-2 text-sm">Routes requests from the same client IP to the same server</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Least Response Time</h4>
        <p className="mt-2 text-sm">Sends requests to the server with fastest response time</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Random</h4>
        <p className="mt-2 text-sm">Randomly selects a server for each request</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Popular Reverse Proxy Solutions</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Nginx</h4>
        <p className="mt-2 text-sm">High-performance web server and reverse proxy. Excellent for static content and load balancing.</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">HAProxy</h4>
        <p className="mt-2 text-sm">Specialized load balancer with advanced health checking and high availability features.</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">Traefik</h4>
        <p className="mt-2 text-sm">Modern reverse proxy designed for containerized and microservices environments.</p>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
        <h4 className="font-bold text-orange-800">AWS ALB/ELB</h4>
        <p className="mt-2 text-sm">Managed load balancer services with auto-scaling and health monitoring.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Reverse Proxy Architecture</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`                        +------------------+
                        |    Client        |
                        +--------+---------+
                                 |
                        +--------v---------+
                        |   Reverse Proxy  |
                        |  (Load Balancer) |
                        +--------+---------+
                                 |
          +----------------------+----------------------+
          |                      |                      |
+---------v--------+   +---------v--------+   +---------v--------+
|   App Server 1   |   |   App Server 2   |   |   App Server 3   |
+------------------+   +------------------+   +------------------+`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Proxy Headers</h2>
    <p className="leading-relaxed">
      When using proxies, it's important to preserve client information that would otherwise be lost:
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <ul className="space-y-2">
        <li><strong>X-Forwarded-For:</strong> Original client IP address</li>
        <li><strong>X-Forwarded-Proto:</strong> Original protocol (http/https)</li>
        <li><strong>X-Forwarded-Host:</strong> Original host requested</li>
        <li><strong>X-Real-IP:</strong> Alternative to X-Forwarded-For for single IP</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Benefits Summary</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Security:</strong> Hide backend infrastructure, filter malicious traffic</li>
      <li><strong>Performance:</strong> Caching, compression, connection pooling</li>
      <li><strong>Scalability:</strong> Load balancing across multiple servers</li>
      <li><strong>Reliability:</strong> Health checks, failover, high availability</li>
      <li><strong>Flexibility:</strong> A/B testing, canary deployments, traffic management</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>System Design Tip:</strong> Reverse proxies are almost always present in production
        architectures. When designing systems, consider what features (SSL termination, caching,
        rate limiting) should be handled at the proxy layer vs. the application layer.
      </p>
    </div>
  </div>
);

export default Proxies;
