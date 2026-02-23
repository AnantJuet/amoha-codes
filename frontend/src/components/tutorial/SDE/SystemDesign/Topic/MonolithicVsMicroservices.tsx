import React from 'react';

const MonolithicVsMicroservices: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Monolithic vs Microservices Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      When designing software systems, one of the most fundamental architectural decisions is
      choosing between monolithic and microservices architecture. Each approach has distinct
      characteristics, benefits, and trade-offs that make them suitable for different scenarios.
    </p>

    <h2 className="text-2xl font-bold mt-6">Monolithic Architecture</h2>
    <p className="leading-relaxed">
      A monolithic architecture is a traditional software design approach where all components
      of an application are built and deployed as a single, unified unit. All functionality
      resides in one codebase, one deployment artifact, and typically one database.
    </p>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">Monolithic Structure:</p>
      <pre className="mt-2 text-sm overflow-x-auto">
{`┌─────────────────────────────────────────────┐
│              Monolithic Application          │
│  ┌─────────────────────────────────────────┐ │
│  │            User Interface               │ │
│  └─────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────┐ │
│  │          Business Logic Layer           │ │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐   │ │
│  │  │  User   │ │ Product │ │  Order  │   │ │
│  │  │ Module  │ │ Module  │ │ Module  │   │ │
│  │  └─────────┘ └─────────┘ └─────────┘   │ │
│  └─────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────┐ │
│  │           Data Access Layer             │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
                      │
              ┌───────▼───────┐
              │   Database    │
              └───────────────┘`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Characteristics of Monolithic:</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Single codebase containing all functionality</li>
      <li>Deployed as one unit</li>
      <li>Shared database for all components</li>
      <li>Components tightly coupled</li>
      <li>Single technology stack</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Microservices Architecture</h2>
    <p className="leading-relaxed">
      Microservices architecture breaks down an application into small, independent services
      that communicate over a network. Each service is responsible for a specific business
      capability and can be developed, deployed, and scaled independently.
    </p>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">Microservices Structure:</p>
      <pre className="mt-2 text-sm overflow-x-auto">
{`                    ┌─────────────┐
                    │ API Gateway │
                    └──────┬──────┘
           ┌───────────────┼───────────────┐
           │               │               │
    ┌──────▼──────┐ ┌──────▼──────┐ ┌──────▼──────┐
    │    User     │ │   Product   │ │    Order    │
    │   Service   │ │   Service   │ │   Service   │
    └──────┬──────┘ └──────┬──────┘ └──────┬──────┘
           │               │               │
    ┌──────▼──────┐ ┌──────▼──────┐ ┌──────▼──────┐
    │   User DB   │ │ Product DB  │ │  Order DB   │
    │ (PostgreSQL)│ │  (MongoDB)  │ │ (PostgreSQL)│
    └─────────────┘ └─────────────┘ └─────────────┘`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Characteristics of Microservices:</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Multiple independent services</li>
      <li>Each service deployed separately</li>
      <li>Each service has its own database</li>
      <li>Services loosely coupled</li>
      <li>Polyglot technology choices</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Detailed Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Monolithic</th>
            <th className="p-3 border">Microservices</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Development</td>
            <td className="p-3 border">Simple to start, complex as it grows</td>
            <td className="p-3 border">Complex initially, manageable at scale</td>
          </tr>
          <tr>
            <td className="p-3 border">Deployment</td>
            <td className="p-3 border">Single deployment, all or nothing</td>
            <td className="p-3 border">Independent deployments per service</td>
          </tr>
          <tr>
            <td className="p-3 border">Scaling</td>
            <td className="p-3 border">Scale entire application</td>
            <td className="p-3 border">Scale individual services as needed</td>
          </tr>
          <tr>
            <td className="p-3 border">Technology</td>
            <td className="p-3 border">Single technology stack</td>
            <td className="p-3 border">Different tech per service</td>
          </tr>
          <tr>
            <td className="p-3 border">Team Structure</td>
            <td className="p-3 border">One team, shared codebase</td>
            <td className="p-3 border">Multiple teams, service ownership</td>
          </tr>
          <tr>
            <td className="p-3 border">Fault Isolation</td>
            <td className="p-3 border">One bug can crash entire app</td>
            <td className="p-3 border">Failure isolated to service</td>
          </tr>
          <tr>
            <td className="p-3 border">Testing</td>
            <td className="p-3 border">Easier end-to-end testing</td>
            <td className="p-3 border">Complex integration testing</td>
          </tr>
          <tr>
            <td className="p-3 border">Communication</td>
            <td className="p-3 border">In-process function calls</td>
            <td className="p-3 border">Network calls (HTTP, gRPC)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages of Monolithic</h2>
    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Simple Development:</strong> Easy to develop, test, and debug</li>
        <li><strong>Easy Deployment:</strong> Single artifact to deploy</li>
        <li><strong>Performance:</strong> No network latency between components</li>
        <li><strong>Debugging:</strong> Easier to trace issues through codebase</li>
        <li><strong>ACID Transactions:</strong> Simple database transactions</li>
        <li><strong>Lower Operational Cost:</strong> Less infrastructure to manage</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Disadvantages of Monolithic</h2>
    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Scalability Limits:</strong> Must scale entire application</li>
        <li><strong>Technology Lock-in:</strong> Stuck with initial tech choices</li>
        <li><strong>Slow Deployments:</strong> Small changes require full redeploy</li>
        <li><strong>Team Bottlenecks:</strong> Large teams conflict on same codebase</li>
        <li><strong>Single Point of Failure:</strong> Bug can bring down entire system</li>
        <li><strong>Complexity Growth:</strong> Becomes harder to maintain over time</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages of Microservices</h2>
    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Independent Scaling:</strong> Scale only services that need it</li>
        <li><strong>Technology Flexibility:</strong> Best tool for each service</li>
        <li><strong>Faster Deployments:</strong> Deploy services independently</li>
        <li><strong>Team Autonomy:</strong> Teams own their services</li>
        <li><strong>Fault Isolation:</strong> Failure limited to single service</li>
        <li><strong>Easier Maintenance:</strong> Smaller, focused codebases</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Disadvantages of Microservices</h2>
    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Operational Complexity:</strong> Many services to manage</li>
        <li><strong>Network Latency:</strong> Inter-service communication overhead</li>
        <li><strong>Data Consistency:</strong> Distributed transactions are hard</li>
        <li><strong>Testing Complexity:</strong> Integration testing is challenging</li>
        <li><strong>Debugging:</strong> Tracing requests across services is difficult</li>
        <li><strong>Infrastructure Cost:</strong> More servers, containers, tools needed</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">When to Use Which?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Choose Monolithic When:</h4>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Starting a new project or MVP</li>
          <li>Small team (less than 10 developers)</li>
          <li>Simple domain with clear boundaries</li>
          <li>Limited operational expertise</li>
          <li>Budget constraints</li>
          <li>Fast time-to-market needed</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Choose Microservices When:</h4>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Large, complex application</li>
          <li>Multiple teams working independently</li>
          <li>Different scaling needs per component</li>
          <li>Need for technology diversity</li>
          <li>Frequent deployments required</li>
          <li>High availability requirements</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Migration Path: Monolith to Microservices</h2>
    <ol className="list-decimal list-inside space-y-2 mt-4">
      <li>Identify bounded contexts in your domain</li>
      <li>Start with the Strangler Pattern - extract services gradually</li>
      <li>Begin with less critical services</li>
      <li>Implement API gateway for routing</li>
      <li>Set up proper monitoring and logging</li>
      <li>Establish service communication patterns</li>
      <li>Migrate data to service-specific databases</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Real-World Examples</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <ul className="space-y-3">
        <li><strong>Netflix:</strong> Migrated from monolith to 1000+ microservices for global scale</li>
        <li><strong>Amazon:</strong> Evolved from monolith to microservices for independent team velocity</li>
        <li><strong>Uber:</strong> Started monolithic, moved to microservices as complexity grew</li>
        <li><strong>Basecamp:</strong> Chose to stay monolithic and scales effectively with it</li>
      </ul>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> There is no one-size-fits-all solution. Many successful companies
        start with a monolith and evolve to microservices as they grow. Do not adopt microservices
        just because big companies use them - understand your specific needs first.
      </p>
    </div>
  </div>
);

export default MonolithicVsMicroservices;
