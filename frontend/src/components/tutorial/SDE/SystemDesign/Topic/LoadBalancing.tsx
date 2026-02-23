import React from 'react';

const LoadBalancing: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Load Balancing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Load balancing is a technique used to distribute incoming network traffic across multiple servers
      to ensure no single server becomes overwhelmed. It is a critical component in system design that
      helps achieve high availability, reliability, and scalability by evenly distributing workloads.
    </p>

    <h2 className="text-2xl font-bold mt-6">What is a Load Balancer?</h2>
    <p className="leading-relaxed">
      A load balancer acts as a traffic cop sitting in front of your servers and routing client requests
      across all servers capable of fulfilling those requests. It ensures that no single server bears
      too much demand, which could degrade performance or cause failures.
    </p>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">Simple Architecture:</p>
      <pre className="mt-2 text-sm overflow-x-auto">
{`        ┌─────────────┐
        │   Clients   │
        └──────┬──────┘
               │
        ┌──────▼──────┐
        │Load Balancer│
        └──────┬──────┘
               │
    ┌──────────┼──────────┐
    │          │          │
┌───▼───┐  ┌───▼───┐  ┌───▼───┐
│Server1│  │Server2│  │Server3│
└───────┘  └───────┘  └───────┘`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">How Load Balancing Works</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Client sends a request to the load balancer</li>
      <li>Load balancer receives the request and determines the best server</li>
      <li>Request is forwarded to the selected server</li>
      <li>Server processes the request and sends the response back</li>
      <li>Load balancer forwards the response to the client</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Load Balancing Algorithms</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Round Robin</h4>
        <p className="mt-2 text-sm">Requests are distributed sequentially across servers in a circular order.</p>
        <p className="mt-2 text-sm text-gray-600">Best for: Servers with equal capacity</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Weighted Round Robin</h4>
        <p className="mt-2 text-sm">Similar to round robin but servers are assigned weights based on capacity.</p>
        <p className="mt-2 text-sm text-gray-600">Best for: Servers with different capacities</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">Least Connections</h4>
        <p className="mt-2 text-sm">Requests go to the server with the fewest active connections.</p>
        <p className="mt-2 text-sm text-gray-600">Best for: Long-running connections</p>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
        <h4 className="font-bold text-orange-800">IP Hash</h4>
        <p className="mt-2 text-sm">Client IP is hashed to determine which server receives the request.</p>
        <p className="mt-2 text-sm text-gray-600">Best for: Session persistence</p>
      </div>
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">Least Response Time</h4>
        <p className="mt-2 text-sm">Requests go to the server with the lowest response time and fewest connections.</p>
        <p className="mt-2 text-sm text-gray-600">Best for: Performance-critical applications</p>
      </div>
      <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
        <h4 className="font-bold text-teal-800">Random</h4>
        <p className="mt-2 text-sm">Requests are distributed randomly across available servers.</p>
        <p className="mt-2 text-sm text-gray-600">Best for: Homogeneous server environments</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Types of Load Balancers</h2>

    <h3 className="text-xl font-semibold mt-4">1. Hardware Load Balancers</h3>
    <p className="leading-relaxed">
      Physical devices dedicated to load balancing. They are highly performant but expensive and less flexible.
    </p>
    <p className="text-sm text-gray-600 mt-2">Examples: F5 BIG-IP, Citrix ADC</p>

    <h3 className="text-xl font-semibold mt-4">2. Software Load Balancers</h3>
    <p className="leading-relaxed">
      Applications that run on commodity hardware. They are more flexible, cost-effective, and easier to scale.
    </p>
    <p className="text-sm text-gray-600 mt-2">Examples: NGINX, HAProxy, Traefik</p>

    <h3 className="text-xl font-semibold mt-4">3. Cloud Load Balancers</h3>
    <p className="leading-relaxed">
      Managed services provided by cloud platforms. They offer automatic scaling and integration with other cloud services.
    </p>
    <p className="text-sm text-gray-600 mt-2">Examples: AWS ELB, Google Cloud Load Balancing, Azure Load Balancer</p>

    <h2 className="text-2xl font-bold mt-6">Load Balancing at Different Layers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Layer</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Layer 4</td>
            <td className="p-3 border">Transport Layer</td>
            <td className="p-3 border">Routes based on IP address and TCP/UDP ports. Faster but less intelligent.</td>
          </tr>
          <tr>
            <td className="p-3 border">Layer 7</td>
            <td className="p-3 border">Application Layer</td>
            <td className="p-3 border">Routes based on HTTP headers, URLs, cookies. More flexible and content-aware.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages of Load Balancing</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>High Availability:</strong> Eliminates single points of failure</li>
      <li><strong>Scalability:</strong> Easy to add or remove servers based on demand</li>
      <li><strong>Performance:</strong> Distributes load to prevent server overload</li>
      <li><strong>Flexibility:</strong> Enables rolling updates and maintenance without downtime</li>
      <li><strong>Redundancy:</strong> Automatic failover if a server goes down</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages of Load Balancing</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Complexity:</strong> Adds another layer to the architecture</li>
      <li><strong>Cost:</strong> Hardware load balancers can be expensive</li>
      <li><strong>Single Point of Failure:</strong> Load balancer itself can fail (mitigated by redundant LBs)</li>
      <li><strong>Session Management:</strong> Requires sticky sessions or external session storage</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Real-World Examples</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <ul className="space-y-3">
        <li><strong>Netflix:</strong> Uses multiple load balancers to distribute traffic across thousands of servers globally</li>
        <li><strong>Amazon:</strong> AWS Elastic Load Balancer handles millions of requests per second during peak shopping</li>
        <li><strong>Google:</strong> Uses custom load balancing infrastructure to serve billions of search queries daily</li>
        <li><strong>Facebook:</strong> Implements load balancing at multiple levels to handle 2+ billion active users</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Use health checks to detect and remove unhealthy servers</li>
      <li>Implement redundant load balancers to avoid single point of failure</li>
      <li>Choose the right algorithm based on your use case</li>
      <li>Monitor load balancer metrics for performance optimization</li>
      <li>Consider geographic load balancing for global applications</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> Load balancing is often combined with other techniques like caching, CDN,
        and auto-scaling to build a highly scalable and reliable system.
      </p>
    </div>
  </div>
);

export default LoadBalancing;
