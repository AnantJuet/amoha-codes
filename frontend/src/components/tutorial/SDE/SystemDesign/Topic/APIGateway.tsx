import React from 'react';

const APIGateway: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      API Gateway
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An API Gateway is a server that acts as a single entry point for all client requests
      to your backend services. It handles request routing, composition, protocol translation,
      and cross-cutting concerns like authentication, rate limiting, and monitoring.
    </p>

    <h2 className="text-2xl font-bold mt-6">What is an API Gateway?</h2>
    <p className="leading-relaxed">
      Think of an API Gateway as a front door to your microservices architecture. Instead of
      clients connecting directly to multiple services, they interact only with the gateway,
      which then routes requests to appropriate backend services.
    </p>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">API Gateway Architecture:</p>
      <pre className="mt-2 text-sm overflow-x-auto">
{`          Without API Gateway              With API Gateway

┌──────────┐                          ┌──────────┐
│  Client  │                          │  Client  │
└────┬─────┘                          └────┬─────┘
     │                                     │
     ├────────┐ ┌────────┐         ┌───────▼───────┐
     │        │ │        │         │  API Gateway  │
     │        │ │        │         │ - Auth        │
     │        │ │        │         │ - Rate Limit  │
┌────▼───┐ ┌──▼─▼──┐ ┌───▼───┐     │ - Routing     │
│Service │ │Service│ │Service│     └───────┬───────┘
│   A    │ │   B   │ │   C   │             │
└────────┘ └───────┘ └───────┘     ┌───────┼───────┐
                                   │       │       │
                               ┌───▼──┐ ┌──▼──┐ ┌──▼──┐
                               │Svc A │ │Svc B│ │Svc C│
                               └──────┘ └─────┘ └─────┘`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Core Functions of API Gateway</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Request Routing</h4>
        <p className="mt-2 text-sm">Routes incoming requests to appropriate backend services based on URL path, headers, or other criteria.</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Authentication & Authorization</h4>
        <p className="mt-2 text-sm">Validates tokens, API keys, and user credentials before forwarding requests.</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">Rate Limiting</h4>
        <p className="mt-2 text-sm">Controls the number of requests a client can make to prevent abuse and ensure fair usage.</p>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
        <h4 className="font-bold text-orange-800">Load Balancing</h4>
        <p className="mt-2 text-sm">Distributes incoming requests across multiple service instances for high availability.</p>
      </div>
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">Request/Response Transformation</h4>
        <p className="mt-2 text-sm">Modifies request/response format, adds headers, or converts between protocols.</p>
      </div>
      <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
        <h4 className="font-bold text-teal-800">Caching</h4>
        <p className="mt-2 text-sm">Caches responses to reduce backend load and improve response times.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Additional Capabilities</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>SSL Termination:</strong> Handle HTTPS at the gateway level</li>
      <li><strong>Request Aggregation:</strong> Combine multiple service calls into one response</li>
      <li><strong>Circuit Breaking:</strong> Prevent cascading failures</li>
      <li><strong>Logging & Monitoring:</strong> Centralized request tracking and metrics</li>
      <li><strong>API Versioning:</strong> Route requests to different API versions</li>
      <li><strong>IP Whitelisting/Blacklisting:</strong> Control access by IP address</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">API Gateway Patterns</h2>

    <h3 className="text-xl font-semibold mt-4">1. Edge Gateway Pattern</h3>
    <p className="leading-relaxed">
      A single gateway at the edge of the network handling all external traffic.
      Best for simple architectures with uniform client needs.
    </p>

    <h3 className="text-xl font-semibold mt-4">2. Backend for Frontend (BFF) Pattern</h3>
    <p className="leading-relaxed">
      Separate gateways for different client types (web, mobile, IoT).
      Each gateway is optimized for its specific client's needs.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <pre className="text-sm overflow-x-auto">
{`┌─────────┐   ┌─────────┐   ┌─────────┐
│   Web   │   │ Mobile  │   │   IoT   │
│  Client │   │  App    │   │ Device  │
└────┬────┘   └────┬────┘   └────┬────┘
     │             │             │
┌────▼────┐   ┌────▼────┐   ┌────▼────┐
│   Web   │   │ Mobile  │   │   IoT   │
│   BFF   │   │   BFF   │   │   BFF   │
└────┬────┘   └────┬────┘   └────┬────┘
     └─────────────┼─────────────┘
                   │
            Backend Services`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">3. Micro Gateway Pattern</h3>
    <p className="leading-relaxed">
      Multiple smaller gateways for different service domains.
      Useful for large organizations with multiple teams.
    </p>

    <h2 className="text-2xl font-bold mt-6">Popular API Gateway Solutions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Gateway</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Best For</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Kong</td>
            <td className="p-3 border">Open Source / Enterprise</td>
            <td className="p-3 border">Plugin ecosystem, multi-platform</td>
          </tr>
          <tr>
            <td className="p-3 border">AWS API Gateway</td>
            <td className="p-3 border">Managed Service</td>
            <td className="p-3 border">AWS ecosystem, serverless</td>
          </tr>
          <tr>
            <td className="p-3 border">NGINX</td>
            <td className="p-3 border">Open Source</td>
            <td className="p-3 border">High performance, reverse proxy</td>
          </tr>
          <tr>
            <td className="p-3 border">Traefik</td>
            <td className="p-3 border">Open Source</td>
            <td className="p-3 border">Kubernetes, Docker native</td>
          </tr>
          <tr>
            <td className="p-3 border">Apigee</td>
            <td className="p-3 border">Enterprise (Google)</td>
            <td className="p-3 border">API management, analytics</td>
          </tr>
          <tr>
            <td className="p-3 border">Azure API Management</td>
            <td className="p-3 border">Managed Service</td>
            <td className="p-3 border">Azure ecosystem</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages of API Gateway</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Single Entry Point:</strong> Simplifies client interactions</li>
      <li><strong>Centralized Security:</strong> Authentication handled in one place</li>
      <li><strong>Reduced Complexity:</strong> Clients do not need to know about services</li>
      <li><strong>Cross-Cutting Concerns:</strong> Handle logging, monitoring, rate limiting centrally</li>
      <li><strong>Protocol Translation:</strong> Convert between REST, GraphQL, gRPC, WebSocket</li>
      <li><strong>Service Discovery:</strong> Gateway can dynamically route to healthy services</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages of API Gateway</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Single Point of Failure:</strong> Gateway outage affects all services</li>
      <li><strong>Increased Latency:</strong> Additional network hop</li>
      <li><strong>Development Bottleneck:</strong> Gateway team can slow down service teams</li>
      <li><strong>Complexity:</strong> Another component to configure and maintain</li>
      <li><strong>Over-engineering:</strong> May be overkill for simple applications</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">API Gateway vs Load Balancer</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">API Gateway</h4>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Application layer (Layer 7)</li>
          <li>Request transformation</li>
          <li>Authentication/Authorization</li>
          <li>Rate limiting per API/user</li>
          <li>API-aware routing</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Load Balancer</h4>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Transport layer (Layer 4) or Layer 7</li>
          <li>Traffic distribution</li>
          <li>Health checking</li>
          <li>Simple routing rules</li>
          <li>High throughput focus</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Real-World Examples</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <ul className="space-y-3">
        <li><strong>Netflix:</strong> Zuul gateway handles billions of requests, provides authentication and routing</li>
        <li><strong>Amazon:</strong> API Gateway powers AWS serverless architectures with Lambda integration</li>
        <li><strong>Uber:</strong> Custom gateway handles geolocation routing and regional compliance</li>
        <li><strong>Stripe:</strong> Gateway manages API versioning for millions of API consumers</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Implement high availability with multiple gateway instances</li>
      <li>Keep gateway logic minimal - delegate to services</li>
      <li>Use caching wisely to reduce backend load</li>
      <li>Implement circuit breakers for resilience</li>
      <li>Monitor gateway performance and latency</li>
      <li>Version your APIs and handle deprecation gracefully</li>
      <li>Consider BFF pattern for different client types</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> An API Gateway should not become a monolith itself. Keep it
        focused on cross-cutting concerns and avoid putting business logic in the gateway.
      </p>
    </div>
  </div>
);

export default APIGateway;
